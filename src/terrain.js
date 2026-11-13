// 地形：沿山径分块生成的高度场网格 + 写实地表着色
import * as THREE from 'three';
import { TRAIL_HALF, stageBlend } from './config.js';
import { cx, terrainH, terrainNormal } from './track.js';
import { getNoiseTexture, getNormalTexture } from './noise.js';
import { ChunkProps } from './props.js';

export const CHUNK_LEN = 40;
const ROW_STEP = 2;
const ROWS = CHUNK_LEN / ROW_STEP + 1;

// 横向采样点：山径附近密、远处稀
const HALF = [0, 0.75, 1.5, 2.25, TRAIL_HALF, 3.7, 4.5, 5.6, 7.2, 9.5, 12.5, 16.5, 22, 29, 39, 52, 70, 94, 124, 160, 205, 260];
const COLS_D = [];
for (let i = HALF.length - 1; i > 0; i--) COLS_D.push(-HALF[i]);
for (let i = 0; i < HALF.length; i++) COLS_D.push(HALF[i]);
const COLS = COLS_D.length;

function createTerrainMaterial() {
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
    normalMap: getNormalTexture(),
    normalScale: new THREE.Vector2(0.85, 0.85),
  });
  const noise = getNoiseTexture();
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNoise = { value: noise };
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute float aTrail;
        attribute vec2 aBiome;
        varying float vTrail;
        varying vec2 vBiome;
        varying vec3 vWPos;
        varying vec3 vWNrm;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vTrail = aTrail;
        vBiome = aBiome;
        vWPos = position;
        vWNrm = normal;`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform sampler2D uNoise;
        varying float vTrail;
        varying vec2 vBiome;
        varying vec3 vWPos;
        varying vec3 vWNrm;`
      )
      .replace(
        '#include <color_fragment>',
        `
        {
          vec2 wp = vWPos.xz;
          vec4 nL = texture2D(uNoise, wp * 0.0037);
          vec4 nM = texture2D(uNoise, wp * 0.031);
          vec4 nS = texture2D(uNoise, wp * 0.21);
          vec4 nT = texture2D(uNoise, wp * 1.3);
          float ad = abs(vTrail);

          // 山径边缘用噪声打散，避免一条笔直的分界线
          float edge = ad + (nM.g - 0.5) * 1.5 + (nS.b - 0.5) * 0.8;
          float trail = 1.0 - smoothstep(2.75, 3.5, edge);

          // 夯实的黄土路面 + 碎石
          vec3 dirt = mix(vec3(0.5, 0.4, 0.29), vec3(0.7, 0.6, 0.45), nM.r);
          dirt = mix(dirt, vec3(0.8, 0.72, 0.58), smoothstep(0.45, 0.75, nS.g) * 0.45);
          float worn = 1.0 - smoothstep(0.2, 2.3, ad + (nS.r - 0.5) * 0.8);
          dirt = mix(dirt, dirt * 1.1 + 0.015, worn * 0.6);
          // 路面两侧被雨水冲出的深色湿土
          dirt = mix(dirt, dirt * vec3(0.72, 0.68, 0.62), smoothstep(0.55, 0.8, nM.a) * (1.0 - worn) * 0.7);
          float pebble = smoothstep(0.66, 0.74, nT.b) * smoothstep(0.45, 0.62, nS.a);
          dirt = mix(dirt, vec3(0.6, 0.59, 0.56) * (0.75 + 0.5 * nT.a), pebble * 0.6);
          dirt *= 0.9 + 0.2 * nT.g;

          // 草地：深浅绿 + 成片的枯黄
          vec3 grass = mix(vec3(0.2, 0.33, 0.1), vec3(0.38, 0.5, 0.17), nM.b);
          grass = mix(grass, vec3(0.57, 0.54, 0.26), smoothstep(0.5, 0.8, nL.r) * 0.6);
          grass *= 0.8 + 0.4 * nT.r;

          // 碎石坡
          vec3 scree = mix(vec3(0.37, 0.35, 0.33), vec3(0.6, 0.57, 0.52), nS.r) * (0.66 + 0.68 * nT.b);
          float screeK = smoothstep(0.35, 0.65, vBiome.x * 0.9 + (nM.r - 0.5) * 0.7 + (nS.g - 0.5) * 0.3);
          vec3 ground = mix(grass, scree, screeK);

          // 陡坡露出岩层
          float slope = 1.0 - normalize(vWNrm).y;
          float rockK = smoothstep(0.15, 0.32, slope + (nS.r - 0.5) * 0.12);
          vec3 rock = mix(vec3(0.3, 0.28, 0.27), vec3(0.56, 0.53, 0.48), nS.g) * (0.68 + 0.64 * nT.b);
          rock *= 0.86 + 0.28 * sin(vWPos.y * 2.3 + nM.r * 7.0);
          vec3 col = mix(ground, rock, rockK);

          // 残雪
          float snowK = vBiome.y * smoothstep(0.44, 0.6, nM.g * 0.8 + nL.b * 0.35 + (nS.b - 0.5) * 0.3 - slope * 0.6);
          col = mix(col, vec3(0.93, 0.95, 0.98), snowK);

          col = mix(col, dirt, trail);
          diffuseColor.rgb = pow(col, vec3(2.2));
        }
        `
      );
  };
  mat.customProgramCacheKey = () => 'terrain-v1';
  return mat;
}

class Chunk {
  constructor(scene, material) {
    const count = ROWS * COLS;
    this.geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(count * 3);
    this.nrm = new Float32Array(count * 3);
    this.uv = new Float32Array(count * 2);
    this.trail = new Float32Array(count);
    this.biome = new Float32Array(count * 2);
    const dyn = (arr, n) => {
      const a = new THREE.BufferAttribute(arr, n);
      a.setUsage(THREE.DynamicDrawUsage);
      return a;
    };
    this.geo.setAttribute('position', dyn(this.pos, 3));
    this.geo.setAttribute('normal', dyn(this.nrm, 3));
    this.geo.setAttribute('uv', dyn(this.uv, 2));
    this.geo.setAttribute('aTrail', dyn(this.trail, 1));
    this.geo.setAttribute('aBiome', dyn(this.biome, 2));
    const idx = new Uint16Array((ROWS - 1) * (COLS - 1) * 6);
    let k = 0;
    for (let r = 0; r < ROWS - 1; r++) {
      for (let c = 0; c < COLS - 1; c++) {
        const a = r * COLS + c;
        const b = a + 1;
        const d = a + COLS;
        const e = d + 1;
        // r 递增 = s 递增 = z 递减，这个绕序让三角形朝上
        idx[k++] = a;
        idx[k++] = b;
        idx[k++] = d;
        idx[k++] = b;
        idx[k++] = e;
        idx[k++] = d;
      }
    }
    this.geo.setIndex(new THREE.BufferAttribute(idx, 1));
    this.mesh = new THREE.Mesh(this.geo, material);
    this.mesh.receiveShadow = true;
    this.mesh.matrixAutoUpdate = false;
    scene.add(this.mesh);
    this.props = new ChunkProps(scene);
    this.index = null;
  }

  build(ci) {
    this.index = ci;
    const s0 = ci * CHUNK_LEN;
    const n = [0, 0, 0];
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      const s = s0 + r * ROW_STEP;
      const c0 = cx(s);
      const rocky = stageBlend(s, (st) => st.biome.rocky, 80);
      const snow = stageBlend(s, (st) => st.biome.snow, 80);
      for (let c = 0; c < COLS; c++, i++) {
        const d = COLS_D[c];
        const x = c0 + d;
        this.pos[i * 3] = x;
        this.pos[i * 3 + 1] = terrainH(x, s);
        this.pos[i * 3 + 2] = -s;
        terrainNormal(x, s, n);
        this.nrm[i * 3] = n[0];
        this.nrm[i * 3 + 1] = n[1];
        this.nrm[i * 3 + 2] = n[2];
        this.uv[i * 2] = x * 0.31;
        this.uv[i * 2 + 1] = s * 0.31;
        this.trail[i] = d;
        this.biome[i * 2] = rocky;
        this.biome[i * 2 + 1] = snow;
      }
    }
    for (const key in this.geo.attributes) this.geo.attributes[key].needsUpdate = true;
    this.geo.computeBoundingSphere();
    this.props.populate(ci, s0, CHUNK_LEN);
  }
}

export class Terrain {
  constructor(scene) {
    this.scene = scene;
    this.material = createTerrainMaterial();
    this.chunks = [];
    this.byIndex = new Map();
    this.behind = 1; // 身后保留的分块数
    this.maxAhead = 10;
    this.ahead = this.maxAhead; // 前方生成的分块数（雾浓时会缩短）
    this.hiRange = 3; // 前方多少个分块内用精模
    this.grassRange = 3; // 前方多少个分块内画草与野花
    for (let i = 0; i < this.behind + this.maxAhead + 1; i++) this.chunks.push(new Chunk(scene, this.material));
  }

  // 每帧调用；budget 为本帧最多新建的分块数（避免卡顿）
  // 雾越浓能看到的距离越短，远处的分块就不必生成
  // 画质档位决定精模 / 草丛的可见范围和最远生成距离
  setDetail(hiRange, grassRange, maxAhead) {
    this.hiRange = hiRange;
    this.grassRange = grassRange;
    this.maxAhead = Math.min(maxAhead, this.chunks.length - this.behind - 1);
    this.ahead = Math.min(this.ahead, this.maxAhead);
  }

  setFogDensity(d) {
    this.ahead = Math.max(6, Math.min(this.maxAhead, Math.ceil(2.0 / d / CHUNK_LEN)));
  }

  update(playerS, budget = 1) {
    const cur = Math.floor(playerS / CHUNK_LEN);
    const lo = cur - this.behind;
    const hi = cur + this.ahead;
    for (const ch of this.chunks) {
      if (ch.index !== null && (ch.index < lo || ch.index > hi)) {
        this.byIndex.delete(ch.index);
        ch.index = null;
      }
    }
    for (let ci = lo; ci <= hi && budget > 0; ci++) {
      if (this.byIndex.has(ci)) continue;
      const free = this.chunks.find((ch) => ch.index === null);
      if (!free) break;
      free.build(ci);
      this.byIndex.set(ci, free);
      budget--;
    }
    for (const ch of this.chunks) {
      if (ch.index === null) continue;
      ch.props.setNear(ch.index - cur <= this.grassRange);
      ch.props.setLod(ch.index - cur <= this.hiRange ? 0 : 1);
    }
  }

  rebuildAll(playerS) {
    for (const ch of this.chunks) ch.index = null;
    this.byIndex.clear();
    this.update(playerS, 999);
  }
}
