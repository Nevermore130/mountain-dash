// 植被与岩石：程序化几何体 + 按地形分块的实例化散布
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TRAIL_HALF, stageBlend } from './config.js';
import { cx, terrainH } from './track.js';
import { getNoiseTexture, mulberry32, vnoise } from './noise.js';
import { makeGrassTexture, makePineTexture, makeLeafTexture, BARK_V, CROWN_V } from './textures.js';
import { decodeMap } from './matutil.js';

const tmpColor = new THREE.Color();

export function srgb(r, g, b) {
  return new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
}

export function paint(geo, fn) {
  const pos = geo.attributes.position;
  const nrm = geo.attributes.normal;
  const colors = new Float32Array(pos.count * 3);
  const p = new THREE.Vector3();
  const n = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i);
    if (nrm) n.fromBufferAttribute(nrm, i);
    const c = fn(p, n, i);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

function strip(geo) {
  geo.deleteAttribute('uv');
  return geo;
}

// 把整个几何体的 UV 指到贴图顶部的树皮色带
function barkUV(geo, repeat = 2) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * repeat, BARK_V);
  return geo;
}

// ---------- 松树：一层层带针叶镂空贴图的锥形枝盘 ----------
// tiers / seg 越小越省面数，远处的分块用低模
function buildPine(seed, tiers = 7, seg = 8) {
  const rnd = mulberry32(seed);
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.01, 0.034, 1, 5, 1, true);
  trunk.translate(0, 0.5, 0);
  barkUV(trunk);
  paint(trunk, () => tmpColor.setScalar(0.75 + rnd() * 0.4).clone());
  parts.push(trunk);

  const tall = Math.pow(7 / tiers, 0.8);
  for (let i = 0; i < tiers; i++) {
    const k = i / (tiers - 1);
    const r = 0.3 * (1 - k * 0.8) * (0.9 + rnd() * 0.2);
    const h = Math.min(0.98 - (0.1 + k * 0.62), (0.34 - k * 0.1) * tall);
    const y0 = 0.1 + k * 0.62;
    const cone = new THREE.ConeGeometry(r, h, seg, 1, true);
    cone.rotateY(rnd() * 6.28);
    const pos = cone.attributes.position;
    const uv = cone.attributes.uv;
    const repeat = Math.max(1, Math.round(3 - k * 2));
    const uOff = rnd();
    for (let v = 0; v < pos.count; v++) {
      const y = pos.getY(v);
      if (y < 0) {
        // 底圈：枝梢参差并略微下垂
        const j = 0.82 + rnd() * 0.36;
        pos.setX(v, pos.getX(v) * j);
        pos.setZ(v, pos.getZ(v) * j);
        pos.setY(v, y - rnd() * 0.04);
      }
      uv.setXY(v, uv.getX(v) * repeat + uOff, uv.getY(v) * CROWN_V);
    }
    cone.translate(0, y0 + h / 2, 0);
    // 顶点色只做明暗：靠近树干的内侧暗，枝梢亮
    paint(cone, (p) => {
      const tip = p.y > y0 + h * 0.4;
      return tmpColor.setScalar(tip ? 0.55 : 0.95 + rnd() * 0.35).clone();
    });
    parts.push(cone);
  }
  const geo = mergeGeometries(parts);
  geo.computeBoundingSphere();
  return geo;
}

// ---------- 阔叶树 ----------
function leafBlob(seed, r, cx0, cy0, cz0, squash, rnd, detail = 1) {
  let g = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute('normal');
  g = mergeVertices(g, 1e-3);
  const pos = g.attributes.position;
  const uv = g.attributes.uv;
  for (let v = 0; v < pos.count; v++) {
    const x = pos.getX(v);
    const y = pos.getY(v);
    const z = pos.getZ(v);
    const d = 0.74 + 0.5 * vnoise(x * 2.3 + seed, y * 2.3 + z * 1.9);
    pos.setXYZ(v, x * r * d + cx0, y * r * d * squash + cy0, z * r * d + cz0);
    uv.setXY(v, uv.getX(v) * 2, uv.getY(v) * CROWN_V);
  }
  g.computeVertexNormals();
  // 树冠顶部受光更亮，底部暗
  paint(g, (p, n) => tmpColor.setScalar(THREE.MathUtils.clamp(0.62 + n.y * 0.45 + (rnd() - 0.5) * 0.2, 0.4, 1.25)).clone());
  return g;
}

function buildLeafTree(seed, detail = 1) {
  const rnd = mulberry32(seed);
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.028, 0.05, 0.6, 6, 1, true);
  trunk.translate(0, 0.3, 0);
  barkUV(trunk);
  paint(trunk, () => tmpColor.setScalar(0.7 + rnd() * 0.4).clone());
  parts.push(trunk);
  const blobs = 5;
  for (let i = 0; i < blobs; i++) {
    const r = i === 0 ? 0.31 : 0.18 + rnd() * 0.12;
    const a = rnd() * 6.28;
    const off = i === 0 ? 0 : 0.15 + rnd() * 0.12;
    const cyv = i === 0 ? 0.69 : 0.5 + rnd() * 0.33;
    parts.push(leafBlob(seed + i * 7.1, r, Math.cos(a) * off, cyv, Math.sin(a) * off, 0.82, rnd, detail));
  }
  const geo = mergeGeometries(parts);
  geo.computeBoundingSphere();
  return geo;
}

// ---------- 灌木 ----------
function buildBush(seed, detail = 1) {
  const rnd = mulberry32(seed);
  const parts = [];
  for (let i = 0; i < 2; i++) {
    const a = rnd() * 6.28;
    const off = i === 0 ? 0 : 0.3;
    parts.push(leafBlob(seed + i * 3.3, i === 0 ? 0.5 : 0.36, Math.cos(a) * off, i === 0 ? 0.3 : 0.2, Math.sin(a) * off, 0.7, rnd, detail));
  }
  const geo = mergeGeometries(parts);
  geo.computeBoundingSphere();
  return geo;
}

// ---------- 岩石 ----------
export function buildRock(seed, detail = 2) {
  let g = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  g = mergeVertices(g, 1e-3);
  const pos = g.attributes.position;
  const o = seed * 13.37;
  for (let v = 0; v < pos.count; v++) {
    const x = pos.getX(v);
    const y = pos.getY(v);
    const z = pos.getZ(v);
    let d = 0.62 + 0.5 * vnoise(x * 1.3 + o, y * 1.3 + z * 1.1 + o);
    d += 0.22 * vnoise(x * 3.1 + z * 2.2 + o, y * 3.1 - z * 1.7);
    d += 0.07 * vnoise(x * 7.3 + o, y * 7.3 + z * 6.1);
    // 压出几个平整的断面，更像碎裂的岩块
    const cut = x * 0.55 + y * 0.6 + z * 0.3;
    if (cut > 0.62) d *= 1 - (cut - 0.62) * 0.7;
    pos.setXYZ(v, x * d, y * d * 0.72, z * d * 0.9);
  }
  g.computeVertexNormals();
  const a = srgb(0.36, 0.35, 0.34);
  const b = srgb(0.66, 0.63, 0.58);
  const moss = srgb(0.3, 0.38, 0.16);
  paint(g, (p, n) => {
    const t = vnoise(p.x * 2.1 + o, p.y * 2.6 + p.z * 1.8);
    const c = a.clone().lerp(b, t);
    const m = THREE.MathUtils.smoothstep(n.y, 0.55, 0.9) * THREE.MathUtils.smoothstep(vnoise(p.x * 1.4 + 9 + o, p.z * 1.4), 0.45, 0.7);
    return c.lerp(moss, m * 0.75);
  });
  g.computeBoundingSphere();
  return g;
}

// ---------- 草丛：三片交叉的贴图面片 ----------
function buildGrassCards() {
  const pos = [];
  const uv = [];
  const nrm = [];
  const idx = [];
  const W = 0.5;
  const H = 0.46;
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI + 0.3;
    const dx = Math.cos(a) * W;
    const dz = Math.sin(a) * W;
    const v0 = pos.length / 3;
    pos.push(-dx, 0, -dz, dx, 0, dz, dx, H, dz, -dx, H, -dz);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1);
    for (let k = 0; k < 4; k++) nrm.push(0, 1, 0);
    idx.push(v0, v0 + 1, v0 + 2, v0, v0 + 2, v0 + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeBoundingSphere();
  return g;
}

// ---------- 野花 ----------
function buildFlower() {
  const parts = [];
  const stemC = srgb(0.3, 0.46, 0.15);
  const white = new THREE.Color(1, 1, 1);
  for (let i = 0; i < 2; i++) {
    const a = i * 2.6 + 0.4;
    const r = 0.06;
    const h = 0.26 + i * 0.09;
    const stem = strip(new THREE.CylinderGeometry(0.006, 0.008, h, 3, 1, true));
    stem.translate(Math.cos(a) * r, h / 2, Math.sin(a) * r);
    paint(stem, () => stemC.clone());
    const head = strip(new THREE.OctahedronGeometry(0.045, 0));
    head.scale(1, 0.6, 1);
    head.translate(Math.cos(a) * r, h, Math.sin(a) * r);
    paint(head, () => white.clone());
    parts.push(stem.toNonIndexed(), head);
  }
  const g = mergeGeometries(parts);
  const pos = g.attributes.position;
  const n = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) n[i * 3 + 1] = 1;
  g.setAttribute('normal', new THREE.BufferAttribute(n, 3));
  g.computeBoundingSphere();
  return g;
}

// ---------- 路标旗（越野赛沿途的橙色路标）----------
function buildMarker() {
  const pole = strip(new THREE.CylinderGeometry(0.012, 0.012, 1.1, 4, 1, true));
  pole.translate(0, 0.55, 0);
  paint(pole, () => srgb(0.85, 0.85, 0.82));
  const flag = new THREE.BufferGeometry();
  flag.setAttribute('position', new THREE.Float32BufferAttribute([0, 1.08, 0, 0, 0.8, 0, 0.36, 0.94, 0.03], 3));
  flag.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
  flag.setIndex([0, 1, 2]);
  paint(flag, () => srgb(1.0, 0.36, 0.05));
  const g = mergeGeometries([pole.toNonIndexed(), flag.toNonIndexed()]);
  g.computeBoundingSphere();
  return g;
}

// 给材质的漫反射叠一层按世界坐标采样的噪声，让岩石 / 树皮不那么"塑料"
export function addWorldGrain(material, scale = 0.6, strength = 0.5) {
  const noise = getNoiseTexture();
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGrainTex = { value: noise };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vGrainPos;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vec4 grainP = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          grainP = instanceMatrix * grainP;
        #endif
        vGrainPos = (modelMatrix * grainP).xyz;`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uGrainTex;\nvarying vec3 vGrainPos;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        {
          vec3 gp = vGrainPos * ${scale.toFixed(3)};
          float ga = texture2D(uGrainTex, gp.xz + gp.y * 0.37).b;
          float gb = texture2D(uGrainTex, gp.xy * 3.1 + gp.z * 0.53).a;
          float gc = texture2D(uGrainTex, gp.zy * 0.31 + gp.x * 0.11).r;
          float grain = (ga * 0.45 + gb * 0.3 + gc * 0.25);
          diffuseColor.rgb *= 1.0 + (grain - 0.5) * ${(strength * 2).toFixed(3)};
        }`
      );
  };
  material.customProgramCacheKey = () => `grain-${scale}-${strength}`;
  return material;
}

let shared = null;

export function getPropAssets() {
  if (shared) return shared;
  const windUniform = { value: 0 };
  const grassMat = new THREE.MeshLambertMaterial({ map: makeGrassTexture(), alphaTest: 0.35, side: THREE.DoubleSide });
  grassMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = windUniform;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec2 ip = instanceMatrix[3].xz;
          float gw = uv.y * uv.y;
          transformed.x += sin(uTime * 1.9 + ip.x * 0.31 + ip.y * 0.17) * 0.11 * gw;
          transformed.z += cos(uTime * 1.4 + ip.x * 0.23 - ip.y * 0.29) * 0.07 * gw;
        #endif`
      );
  };
  grassMat.customProgramCacheKey = () => 'grass-wind';
  decodeMap(grassMat);

  const pineMat = decodeMap(new THREE.MeshLambertMaterial({ map: makePineTexture(), alphaTest: 0.45, vertexColors: true, side: THREE.DoubleSide }));
  const leafMat = decodeMap(new THREE.MeshLambertMaterial({ map: makeLeafTexture(), alphaTest: 0.45, vertexColors: true, side: THREE.DoubleSide }));
  const rockMat = addWorldGrain(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 }), 0.55, 0.55);

  shared = {
    windUniform,
    pine: [buildPine(11), buildPine(29)],
    leaf: buildLeafTree(5),
    rock: buildRock(1, 1),
    grass: buildGrassCards(),
    bush: buildBush(8),
    // 远处分块用的低模（轮廓一致，面数约为三分之一）
    lod: { pineA: buildPine(11, 4, 6), pineB: buildPine(29, 4, 6), leaf: buildLeafTree(5, 0), rock: buildRock(1, 0), bush: buildBush(8, 0) },
    flower: buildFlower(),
    marker: buildMarker(),
    grassMat,
    pineMat,
    leafMat,
    rockMat,
    flowerMat: new THREE.MeshLambertMaterial({ vertexColors: true }),
    markerMat: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }),
  };
  return shared;
}

// 离山径边缘多远以内的树 / 石头参与投影（阴影相机只覆盖跑者周围二十来米）
const SHADOW_RANGE = 34;
const CAP = { pineA: 48, pineB: 48, leaf: 22, rock: 56, grass: 1500, bush: 20, flower: 170, marker: 3 };

const m4 = new THREE.Matrix4();
const q = new THREE.Quaternion();
const eul = new THREE.Euler();
const v3 = new THREE.Vector3();
const sc = new THREE.Vector3();
const FLOWER_COLORS = [srgb(1.0, 0.82, 0.15), srgb(0.98, 0.97, 0.92), srgb(0.62, 0.42, 0.9), srgb(1.0, 0.55, 0.2), srgb(0.95, 0.5, 0.65)];
const GORSE = srgb(1.0, 0.8, 0.1);
const SNOW = srgb(0.93, 0.95, 0.98);

// 一个地形分块上的全部实例化植被
export class ChunkProps {
  constructor(parent) {
    const A = getPropAssets();
    const make = (geo, mat, cap, cast, receive) => {
      const m = new THREE.InstancedMesh(geo, mat, cap);
      m.castShadow = cast;
      m.receiveShadow = receive;
      m.count = 0;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      // 预先创建实例颜色缓冲
      m.setColorAt(0, tmpColor.set(0xffffff));
      m.instanceColor.setUsage(THREE.DynamicDrawUsage);
      if (cast) {
        // 实例按离山径的远近排好序，阴影只画靠近山径的那一段（远处的影子本来就落不进阴影贴图）
        m.shadowCount = 0;
        m.onBeforeShadow = () => {
          m.fullCount = m.count;
          m.count = Math.max(1, Math.min(m.count, m.shadowCount));
        };
        m.onAfterShadow = () => {
          m.count = m.fullCount;
        };
      }
      parent.add(m);
      return m;
    };
    this.meshes = {
      pineA: make(A.pine[0], A.pineMat, CAP.pineA, true, false),
      pineB: make(A.pine[1], A.pineMat, CAP.pineB, true, false),
      leaf: make(A.leaf, A.leafMat, CAP.leaf, true, false),
      rock: make(A.rock, A.rockMat, CAP.rock, true, true),
      grass: make(A.grass, A.grassMat, CAP.grass, false, true),
      bush: make(A.bush, A.leafMat, CAP.bush, false, true),
      flower: make(A.flower, A.flowerMat, CAP.flower, false, false),
      marker: make(A.marker, A.markerMat, CAP.marker, true, false),
    };
    this.counts = {};
    this.hiGeo = {};
    for (const k in A.lod) this.hiGeo[k] = this.meshes[k].geometry;
    this.lodGeo = A.lod;
    this.lod = 0;
  }

  // 0 = 精模，1 = 低模
  setLod(lod) {
    if (lod === this.lod) return;
    this.lod = lod;
    for (const k in this.lodGeo) this.meshes[k].geometry = lod ? this.lodGeo[k] : this.hiGeo[k];
  }

  _put(name, x, y, z, ry, rx, rz, sx, sy, sz, color) {
    const mesh = this.meshes[name];
    const i = this.counts[name];
    if (i >= CAP[name]) return;
    eul.set(rx, ry, rz, 'YXZ');
    q.setFromEuler(eul);
    m4.compose(v3.set(x, y, z), q, sc.set(sx, sy, sz));
    mesh.setMatrixAt(i, m4);
    mesh.setColorAt(i, color);
    this.counts[name] = i + 1;
  }

  populate(ci, s0, len) {
    const rnd = mulberry32(ci * 7919 + 101);
    for (const k in this.meshes) this.counts[k] = 0;
    const sMid = s0 + len / 2;
    const B = (key) => stageBlend(sMid, (st) => st.biome[key], 80);
    const snow = B('snow');
    const rocky = B('rocky');
    const c = new THREE.Color();
    // 先攒起来、按离山径的距离排序后再写入实例缓冲
    const queue = [];
    const shadowCounts = {};
    const defer = (name, e, x, y, z, ry, rx, rz, sx, sy, sz, col) => queue.push([name, e, x, y, z, ry, rx, rz, sx, sy, sz, col.r, col.g, col.b]);
    const flush = () => {
      queue.sort((a, b) => a[1] - b[1]);
      for (const it of queue) {
        this._put(it[0], it[2], it[3], it[4], it[5], it[6], it[7], it[8], it[9], it[10], c.setRGB(it[11], it[12], it[13]));
        if (it[1] < SHADOW_RANGE) shadowCounts[it[0]] = this.counts[it[0]];
      }
      queue.length = 0;
    };
    const place = (minE, spread, power) => {
      const s = s0 + rnd() * len;
      const side = rnd() < 0.5 ? -1 : 1;
      const e = minE + spread * Math.pow(rnd(), power);
      const x = cx(s) + side * (TRAIL_HALF + e);
      return { s, x, e, y: terrainH(x, s) };
    };

    // 松树
    const nPine = Math.round(B('pine') * 1.4 * (0.85 + rnd() * 0.3));
    for (let i = 0; i < nPine; i++) {
      const p = place(3.6, 140, 1.7);
      const h = 7 + rnd() * 9;
      const w = h * (0.8 + rnd() * 0.35);
      c.setRGB(0.8 + rnd() * 0.45, 0.85 + rnd() * 0.4, 0.8 + rnd() * 0.4).lerp(SNOW, snow * 0.35 * rnd());
      defer(rnd() < 0.5 ? 'pineA' : 'pineB', p.e, p.x, p.y - 0.15, -p.s, rnd() * 6.28, (rnd() - 0.5) * 0.08, (rnd() - 0.5) * 0.08, w, h, w, c);
    }
    flush();
    // 阔叶树
    const nLeaf = Math.round(B('leaf') * (0.8 + rnd() * 0.4));
    for (let i = 0; i < nLeaf; i++) {
      const p = place(4.5, 130, 1.5);
      const h = 5 + rnd() * 5;
      c.setRGB(0.85 + rnd() * 0.4, 0.9 + rnd() * 0.35, 0.75 + rnd() * 0.4);
      // 偶尔来一棵泛黄的
      if (rnd() < 0.18) c.setRGB(1.7, 1.15, 0.55);
      defer('leaf', p.e, p.x, p.y - 0.1, -p.s, rnd() * 6.28, 0, 0, h * (0.9 + rnd() * 0.4), h, h * (0.9 + rnd() * 0.4), c);
    }
    flush();
    // 岩石
    const nRock = Math.round(B('rock') * (0.8 + rnd() * 0.4));
    for (let i = 0; i < nRock; i++) {
      const p = place(0.9, 110, 2.0);
      const big = Math.min(1, p.e / 30);
      const sz = 0.28 + rnd() * rnd() * (1.2 + big * 2.4) + rocky * 0.25;
      const g = 0.8 + rnd() * 0.45;
      c.setRGB(g, g * (0.96 + rnd() * 0.06), g * (0.92 + rnd() * 0.08)).lerp(SNOW, snow * 0.25 * rnd());
      defer('rock', p.e, p.x, p.y - sz * 0.2, -p.s, rnd() * 6.28, (rnd() - 0.5) * 0.7, (rnd() - 0.5) * 0.7, sz * (0.8 + rnd() * 0.5), sz * (0.7 + rnd() * 0.5), sz * (0.8 + rnd() * 0.5), c);
    }
    flush();
    // 草丛：贴着山径两侧最密
    const nGrass = Math.round(CAP.grass * B('grass'));
    for (let i = 0; i < nGrass; i++) {
      const p = place(-0.15, 30, 1.7);
      const sz = 0.65 + rnd() * 0.7;
      const dry = rnd() * rnd();
      const k = 0.85 + rnd() * 0.4;
      c.setRGB(k * (1 + dry * 0.7), k * (1 + dry * 0.25), k * (1 - dry * 0.3)).lerp(SNOW, snow * 0.25 * rnd());
      this._put('grass', p.x, p.y - 0.03, -p.s, rnd() * 6.28, 0, 0, sz, sz * (0.6 + rnd() * 0.7), sz, c);
    }
    // 灌木（顶上点缀金雀花）
    const nBush = Math.round(B('bush') * (0.8 + rnd() * 0.4));
    for (let i = 0; i < nBush; i++) {
      const p = place(1.8, 70, 1.6);
      const sz = 0.8 + rnd() * 1.3;
      c.setRGB(0.85 + rnd() * 0.4, 0.9 + rnd() * 0.3, 0.8 + rnd() * 0.3);
      this._put('bush', p.x, p.y - 0.08, -p.s, rnd() * 6.28, 0, 0, sz, sz * (0.8 + rnd() * 0.4), sz, c);
      if (p.e < 30 && rnd() < 0.6) {
        for (let f = 0; f < 5; f++) {
          const a = rnd() * 6.28;
          const rr = rnd() * 0.42 * sz;
          this._put('flower', p.x + Math.cos(a) * rr, p.y + sz * (0.42 - (rr / sz) * 0.3), -p.s + Math.sin(a) * rr, rnd() * 6.28, 0, 0, 1.3, 0.6, 1.3, GORSE);
        }
      }
    }
    // 野花
    const nFlower = Math.round(110 * B('flower') * (0.7 + rnd() * 0.3));
    for (let i = 0; i < nFlower; i++) {
      const p = place(0.2, 20, 1.6);
      const sz = 0.9 + rnd() * 0.8;
      this._put('flower', p.x, p.y, -p.s, rnd() * 6.28, 0, 0, sz, sz, sz, FLOWER_COLORS[Math.floor(rnd() * FLOWER_COLORS.length)]);
    }
    // 路标旗：每块一到两面，插在路肩
    c.set(0xffffff);
    const nMarker = 1 + (rnd() < 0.4 ? 1 : 0);
    for (let i = 0; i < nMarker; i++) {
      const s = s0 + (i + 0.3 + rnd() * 0.4) * (len / nMarker);
      const side = rnd() < 0.5 ? -1 : 1;
      const x = cx(s) + side * (TRAIL_HALF + 0.35);
      this._put('marker', x, terrainH(x, s) - 0.05, -s, side > 0 ? 0 : Math.PI, 0, (rnd() - 0.5) * 0.2, 1, 1, 1, c);
    }

    for (const k in this.meshes) {
      const m = this.meshes[k];
      m.count = this.counts[k];
      if (m.castShadow) m.shadowCount = k === 'marker' ? m.count : shadowCounts[k] || 0;
      m.visible = m.count > 0;
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
      if (m.count > 0) m.computeBoundingSphere();
    }
  }

  setNear(near) {
    // 远处的分块不画草与野花
    this.meshes.grass.visible = near && this.meshes.grass.count > 0;
    this.meshes.flower.visible = near && this.meshes.flower.count > 0;
  }
}
