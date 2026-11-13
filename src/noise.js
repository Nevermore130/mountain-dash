// 噪声与随机数：CPU 端地形高度 + 着色器用的可平铺噪声贴图
import * as THREE from 'three';

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- 2D 值噪声 ----
const SIZE = 256;
const perm = new Uint8Array(SIZE * 2);
const vals = new Float32Array(SIZE);
{
  const rnd = mulberry32(20261113);
  const p = [];
  for (let i = 0; i < SIZE; i++) {
    p.push(i);
    vals[i] = rnd();
  }
  for (let i = SIZE - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = p[i];
    p[i] = p[j];
    p[j] = t;
  }
  for (let i = 0; i < SIZE * 2; i++) perm[i] = p[i & 255];
}

function lattice(ix, iy) {
  return vals[perm[(ix & 255) + perm[iy & 255]]];
}

// 返回 0..1
export function vnoise(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
  const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);
  const a = lattice(ix, iy);
  const b = lattice(ix + 1, iy);
  const c = lattice(ix, iy + 1);
  const d = lattice(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

export function fbm(x, y, octaves = 4) {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * vnoise(x, y);
    norm += amp;
    x = x * 2.03 + 17.1;
    y = y * 2.03 + 9.7;
    amp *= 0.5;
  }
  return sum / norm;
}

// 山脊状噪声 0..1
export function ridged(x, y, octaves = 4) {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = 1 - Math.abs(vnoise(x, y) * 2 - 1);
    sum += amp * n * n;
    norm += amp;
    x = x * 2.1 + 31.3;
    y = y * 2.1 + 11.9;
    amp *= 0.5;
  }
  return sum / norm;
}

// ---- 可平铺噪声（生成贴图用）----
function tileNoise(x, y, period, seed) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const w = (i, j) => {
    const a = ((i % period) + period) % period;
    const b = ((j % period) + period) % period;
    return vals[perm[(a + seed + perm[(b + seed * 7) & 255]) & 255]];
  };
  const a = w(ix, iy);
  const b = w(ix + 1, iy);
  const c = w(ix, iy + 1);
  const d = w(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function tileFbm(u, v, basePeriod, octaves, seed) {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  let p = basePeriod;
  for (let i = 0; i < octaves; i++) {
    sum += amp * tileNoise(u * p, v * p, p, seed + i * 13);
    norm += amp;
    amp *= 0.5;
    p *= 2;
  }
  return sum / norm;
}

let noiseTex = null;
let normalTex = null;

// RGBA 四个通道是四种频率的噪声：R 大块、G 中等、B 细碎、A 颗粒
export function getNoiseTexture() {
  if (noiseTex) return noiseTex;
  const N = 256;
  const data = new Uint8Array(N * N * 4);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const u = x / N;
      const v = y / N;
      const i = (y * N + x) * 4;
      data[i] = Math.round(255 * tileFbm(u, v, 4, 5, 1));
      data[i + 1] = Math.round(255 * tileFbm(u, v, 8, 4, 37));
      data[i + 2] = Math.round(255 * tileFbm(u, v, 24, 3, 71));
      data[i + 3] = Math.round(255 * tileFbm(u, v, 64, 2, 113));
    }
  }
  noiseTex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  noiseTex.wrapS = noiseTex.wrapT = THREE.RepeatWrapping;
  noiseTex.magFilter = THREE.LinearFilter;
  noiseTex.minFilter = THREE.LinearMipmapLinearFilter;
  noiseTex.generateMipmaps = true;
  noiseTex.needsUpdate = true;
  return noiseTex;
}

// 由噪声高度场求出的可平铺法线贴图，给地表加细碎起伏
export function getNormalTexture() {
  if (normalTex) return normalTex;
  const N = 256;
  const h = new Float32Array(N * N);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const u = x / N;
      const v = y / N;
      h[y * N + x] = tileFbm(u, v, 6, 5, 5) * 0.7 + tileFbm(u, v, 40, 2, 91) * 0.3;
    }
  }
  const data = new Uint8Array(N * N * 4);
  const at = (x, y) => h[((y + N) % N) * N + ((x + N) % N)];
  const strength = 9;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const len = Math.sqrt(dx * dx + dy * dy + 1);
      const i = (y * N + x) * 4;
      data[i] = Math.round(255 * (0.5 - (0.5 * dx) / len));
      data[i + 1] = Math.round(255 * (0.5 - (0.5 * dy) / len));
      data[i + 2] = Math.round(255 * (0.5 + 0.5 / len));
      data[i + 3] = 255;
    }
  }
  normalTex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  normalTex.wrapS = normalTex.wrapT = THREE.RepeatWrapping;
  normalTex.magFilter = THREE.LinearFilter;
  normalTex.minFilter = THREE.LinearMipmapLinearFilter;
  normalTex.generateMipmaps = true;
  normalTex.needsUpdate = true;
  return normalTex;
}
