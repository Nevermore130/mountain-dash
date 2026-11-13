// 赛道上的障碍、沿途补给（能量胶 / 水 / 登山杖）、补给站与起终点拱门
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { AID_STATIONS, LANE_W, RACE_LENGTH, STAGES, stageIndexAt } from './config.js';
import { cx, py, heading } from './track.js';
import { mulberry32, vnoise } from './noise.js';
import { addWorldGrain, buildRock, paint, srgb } from './props.js';
import { createCanvas } from './platform.js';
import { decodeMap } from './matutil.js';

export const NONE = 0;
export const ROCK = 1; // 落石：只能变道绕开
export const LOG = 2; // 倒木：跳过去
export const OVER = 3; // 横倒的树干：滑铲钻过去

const PATTERNS = {
  rock1: (rnd) => {
    const c = [0, 0, 0];
    c[Math.floor(rnd() * 3)] = ROCK;
    return c;
  },
  rock2: (rnd) => {
    const c = [ROCK, ROCK, ROCK];
    c[Math.floor(rnd() * 3)] = NONE;
    return c;
  },
  log: () => [LOG, LOG, LOG],
  over: () => [OVER, OVER, OVER],
  rockLog: (rnd) => {
    const c = [ROCK, ROCK, ROCK];
    c[Math.floor(rnd() * 3)] = LOG;
    return c;
  },
  logRock: (rnd) => {
    const c = [LOG, LOG, LOG];
    c[Math.floor(rnd() * 3)] = ROCK;
    return c;
  },
  // 半截倒木：留出一条空线，跳过去或者绕过去都行
  logHalf: (rnd) => {
    const c = [LOG, LOG, LOG];
    c[rnd() < 0.5 ? 0 : 2] = NONE;
    return c;
  },
};

const WEIGHTS = [
  { rock1: 36, log: 22, over: 20, rock2: 14, logHalf: 8 },
  { rock1: 23, rock2: 24, log: 19, over: 20, rockLog: 7, logHalf: 7 },
  { rock1: 14, rock2: 27, log: 17, over: 20, rockLog: 11, logRock: 5, logHalf: 6 },
  { rock1: 10, rock2: 27, log: 15, over: 18, rockLog: 13, logRock: 11, logHalf: 6 },
  { rock1: 8, rock2: 27, log: 15, over: 18, rockLog: 14, logRock: 12, logHalf: 6 },
  { rock1: 8, rock2: 25, log: 15, over: 20, rockLog: 14, logRock: 12, logHalf: 6 },
];

// 各赛段出现"连续障碍"的概率（越往后越密）
const BURST_P = [0.05, 0.1, 0.14, 0.17, 0.2, 0.22];
const BURST_MIXED = ['log', 'over', 'logHalf', 'rock1'];

function pickKind(si, rnd, last, last2) {
  const w = WEIGHTS[si];
  let total = 0;
  for (const k in w) total += w[k];
  for (let tries = 0; tries < 6; tries++) {
    let r = rnd() * total;
    for (const k in w) {
      r -= w[k];
      if (r <= 0) {
        if (k === last && k === last2) break;
        return k;
      }
    }
  }
  return 'rock1';
}

// 生成整条赛道的障碍排布与沿途补给
// opt.tutorial: 第一次玩时，开头四排固定，依次教会三种操作；之后每一局从第一排起就是随机的
// 返回 { rows, items }
//   row:  { s, cells[3], off[3]（每条线上落石的前后错位，米）, kind, seed, ... }
//   item: { s, lane, y, type: 'gel' | 'water' | 'pole', group（同组只能拿一样，0 = 不成组）, ... }
export function generateCourse(seed, opt = {}) {
  const rnd = mulberry32(seed);
  const rows = [];
  const items = [];
  const scripted = opt.tutorial ? ['rock1c', 'log', 'over', 'rock2'] : [];
  let s = opt.tutorial ? 78 : 58 + rnd() * 30;
  let n = 0;
  let last = '';
  let last2 = '';
  let burst = 0; // 接下来还有几排是紧挨着的"连续障碍"
  let burstKind = '';
  let free = 1; // 上一排唯一能过的那条线（连续绕桩时用）
  let sinceItem = Math.floor(rnd() * 3);
  let noWater = 3; // 开局第一样补给一定是水
  let noGel = 0;
  let group = 0;
  let aidI = 0;

  const put = (at, lane, y, type, grp = 0) => items.push({ s: at, lane, y, type, group: grp, taken: false, visual: null });
  const randLane = () => Math.floor(rnd() * 3) - 1;
  // 能量胶最多、水其次、登山杖少见；某一种连着几次没出就强制出一次，避免整段都碰不到
  const pickType = () => {
    let t;
    if (noWater >= 3) t = 'water';
    else if (noGel >= 2) t = 'gel';
    else {
      const r = rnd();
      t = r < 0.36 ? 'water' : r < 0.92 ? 'gel' : 'pole';
    }
    noWater = t === 'water' ? 0 : noWater + 1;
    noGel = t === 'gel' ? 0 : noGel + 1;
    return t;
  };

  while (s < RACE_LENGTH - 55) {
    // 补给站前后留出一段空路
    while (aidI < AID_STATIONS.length && s > AID_STATIONS[aidI] - 16) {
      const a = AID_STATIONS[aidI++];
      if (s < a + 14) {
        s = a + 14 + rnd() * 6;
        burst = 0;
      }
    }
    if (s >= RACE_LENGTH - 55) break;

    const si = stageIndexAt(s);
    const st = STAGES[si];
    const intro = n < scripted.length;
    const inBurst = burst > 0;
    let kind;
    if (intro) kind = scripted[n];
    else if (inBurst && burstKind === 'slalom') kind = rnd() < 0.45 ? 'rock1' : 'rock2';
    else if (inBurst) {
      do kind = BURST_MIXED[Math.floor(rnd() * BURST_MIXED.length)];
      while (kind === last);
    } else kind = pickKind(si, rnd, last, last2);

    let cells;
    if (kind === 'rock1c') {
      cells = [0, ROCK, 0];
      kind = 'rock1';
    } else if (inBurst && kind === 'rock2') {
      // 连续绕桩：空出来的那条线最多比上一排横移一格，保证来得及变道
      free = Math.max(0, Math.min(2, free + Math.floor(rnd() * 3) - 1));
      cells = [ROCK, ROCK, ROCK];
      cells[free] = NONE;
    } else {
      cells = PATTERNS[kind](rnd);
    }
    const open = [];
    cells.forEach((c, i) => c !== ROCK && open.push(i));
    if (open.length === 1) free = open[0];
    last2 = last;
    last = kind;

    // 落石前后错开一点，不再是整整齐齐的一堵墙（连续障碍里错得少一些）
    const spread = intro ? 0 : inBurst ? 0.8 : 2.2;
    const off = cells.map((c) => (c === ROCK ? (rnd() - 0.5) * spread : 0));
    rows.push({ s, cells, off, kind, index: n, seed: Math.floor(rnd() * 1e9), passed: false, hit: false, visual: null });

    // 到下一排的距离：正常间隔 / 连续障碍（紧）/ 长直道（松，路上有一串补给）
    const base = st.gap * st.speed;
    let gap;
    let breather = false;
    if (intro) {
      gap = base * 1.3 * (0.94 + rnd() * 0.22);
    } else {
      if (burst > 0) burst--;
      else if (rnd() < BURST_P[si]) {
        burst = 2 + (rnd() < 0.35 ? 1 : 0);
        burstKind = rnd() < 0.6 ? 'slalom' : 'mixed';
      }
      if (burst > 0) {
        // 绕桩可以贴得很近；要跳 / 要滑的至少留出一个动作的时间
        const t = burstKind === 'slalom' ? Math.max(0.74, st.gap * 0.56) : Math.max(1.02, st.gap * 0.68);
        gap = st.speed * t * (1 + rnd() * 0.1);
      } else if (rnd() < (inBurst ? 0.4 : 0.05)) {
        breather = true;
        gap = base * (1.7 + rnd() * 0.6);
      } else {
        gap = base * (0.8 + rnd() * 0.52);
      }
    }

    sinceItem++;
    if (breather) {
      let lane = randLane();
      const cnt = 2 + (rnd() < 0.4 ? 1 : 0);
      for (let k = 0; k < cnt; k++) {
        put(s + gap * (0.3 + (0.42 * k) / (cnt - 1)), lane, 0.95, pickType());
        lane = lane === 0 ? (rnd() < 0.5 ? -1 : 1) : 0;
      }
      sinceItem = 0;
    } else if (!intro && burst === 0 && ((sinceItem >= 4 && rnd() < 0.5) || sinceItem >= 6)) {
      const type = pickType();
      const logLanes = [];
      const rockLanes = []; // 旁边紧挨着一条能走的线的落石
      cells.forEach((c, i) => {
        if (c === LOG) logLanes.push(i);
        else if (c === ROCK && ((i > 0 && cells[i - 1] !== ROCK) || (i < 2 && cells[i + 1] !== ROCK))) rockLanes.push(i);
      });
      const r = rnd();
      if (type !== 'pole' && logLanes.length && r < 0.4) {
        // 挂在倒木上方：必须起跳才拿得到
        put(s, logLanes[Math.floor(rnd() * logLanes.length)] - 1, 1.85, type);
      } else if (type === 'water' && rockLanes.length && r < 0.52) {
        // 藏在落石正后方：绕过石头马上切回来才拿得到
        const l = rockLanes[Math.floor(rnd() * rockLanes.length)];
        put(s + off[l] + 4.4, l - 1, 0.95, type);
      } else if (type !== 'pole' && r > 0.85) {
        // 水和能量胶并排：只能二选一
        group++;
        const a = randLane();
        const b = a === 0 ? (rnd() < 0.5 ? -1 : 1) : rnd() < 0.5 ? 0 : -a;
        put(s + gap * 0.5, a, 0.95, 'water', group);
        put(s + gap * 0.5, b, 0.95, 'gel', group);
      } else {
        put(s + gap * 0.5, randLane(), 0.95, type);
      }
      sinceItem = 0;
    }
    s += gap;
    n++;
  }

  // 补给站：水 / 能量胶 / 登山杖各占一条线，三选一
  const out = items.filter((it) => !AID_STATIONS.some((a) => Math.abs(it.s - a) < 9));
  for (const a of AID_STATIONS) {
    group++;
    const types = ['water', 'gel', 'pole'];
    for (let lane = -1; lane <= 1; lane++) {
      const type = types.splice(Math.floor(rnd() * types.length), 1)[0];
      out.push({ s: a, lane, y: 0.95, type, group, aid: true, taken: false, visual: null });
    }
  }
  out.sort((a, b) => a.s - b.s);
  return { rows, items: out };
}

// 给 AI（对手 / 自动驾驶）用：面对这一排障碍，从 lane 出发应该去哪条线、做什么动作
// avoidLane: 尽量别挤进去的跑线（比如旁边正好有别的跑者），没有就传 null
export function planRow(row, lane, avoidLane = null) {
  const idx = lane + 1;
  let target = idx;
  let best = 99;
  for (let i = 0; i < 3; i++) {
    if (row.cells[i] === ROCK) continue;
    const cost = Math.abs(i - idx) + (row.cells[i] ? 0.4 : 0) + (avoidLane !== null && i === avoidLane + 1 ? 1.5 : 0);
    if (cost < best) {
      best = cost;
      target = i;
    }
  }
  const c = row.cells[target];
  return { lane: target - 1, action: c === LOG ? 'jump' : c === OVER ? 'slide' : null };
}

// ---------------- 模型 ----------------

function buildLogGeometry() {
  // 单位长度沿 X 轴，使用时缩放 x
  const g = new THREE.CylinderGeometry(0.3, 0.3, 1, 12, 8, false);
  g.deleteAttribute('uv');
  const bark = srgb(0.25, 0.18, 0.12);
  const barkLight = srgb(0.4, 0.31, 0.22);
  const wood = srgb(0.74, 0.6, 0.41);
  const woodDark = srgb(0.5, 0.37, 0.24);
  const pos = g.attributes.position;
  const nrm = g.attributes.normal;
  // 侧面做一点不规则
  for (let i = 0; i < pos.count; i++) {
    if (Math.abs(nrm.getY(i)) > 0.5) continue;
    const a = Math.atan2(pos.getZ(i), pos.getX(i));
    const d = 0.88 + 0.24 * vnoise(Math.cos(a) * 1.6 + 5, pos.getY(i) * 5 + Math.sin(a) * 1.6);
    pos.setX(i, pos.getX(i) * d);
    pos.setZ(i, pos.getZ(i) * d);
  }
  paint(g, (p, n) => {
    if (Math.abs(n.y) > 0.5) {
      const r = Math.sqrt(p.x * p.x + p.z * p.z) / 0.3;
      return woodDark.clone().lerp(wood, 0.5 + 0.5 * Math.sin(r * 16));
    }
    return bark.clone().lerp(barkLight, vnoise(p.y * 9, Math.atan2(p.z, p.x) * 3));
  });
  g.computeVertexNormals();
  g.rotateZ(Math.PI / 2);
  return g;
}

function buildOverGeometry() {
  const parts = [];
  const bark = srgb(0.24, 0.18, 0.13);
  const barkLight = srgb(0.38, 0.3, 0.22);
  const trunk = new THREE.CylinderGeometry(0.2, 0.25, 10.5, 10, 10, false);
  trunk.deleteAttribute('uv');
  paint(trunk, (p) => bark.clone().lerp(barkLight, vnoise(p.y * 3, Math.atan2(p.z, p.x) * 3)));
  trunk.rotateZ(Math.PI / 2);
  parts.push(trunk.toNonIndexed());
  // 断枝
  const rnd = mulberry32(77);
  for (let i = 0; i < 5; i++) {
    const stub = new THREE.CylinderGeometry(0.02, 0.05, 0.5 + rnd() * 0.5, 5, 1, false);
    stub.deleteAttribute('uv');
    paint(stub, () => bark.clone().multiplyScalar(0.8 + rnd() * 0.5));
    stub.translate(0, 0.35, 0);
    stub.rotateX((rnd() - 0.5) * 1.6);
    stub.rotateZ((rnd() - 0.5) * 0.8);
    stub.translate(-4 + i * 2 + rnd(), 0.1, 0);
    parts.push(stub.toNonIndexed());
  }
  // 挂在树干上的橙白路标带，提醒"从下面钻"
  const orange = srgb(1.0, 0.38, 0.04);
  const white = srgb(0.96, 0.96, 0.94);
  for (let i = 0; i < 9; i++) {
    const x = -2.8 + i * 0.7;
    const len = 0.34 + rnd() * 0.16;
    const rib = new THREE.PlaneGeometry(0.085, len, 1, 2);
    rib.deleteAttribute('uv');
    const col = i % 2 === 0 ? orange : white;
    paint(rib, () => col.clone());
    rib.rotateY((rnd() - 0.5) * 0.9);
    rib.translate(x, -0.2 - len / 2, (rnd() - 0.5) * 0.08);
    parts.push(rib.toNonIndexed());
  }
  const g = mergeGeometries(parts);
  g.computeBoundingSphere();
  return g;
}

function buildGelGeometry() {
  const body = new THREE.BoxGeometry(0.3, 0.42, 0.1, 1, 3, 1);
  body.deleteAttribute('uv');
  const orange = srgb(1.0, 0.5, 0.05);
  const dark = srgb(0.1, 0.1, 0.12);
  const light = srgb(1.0, 0.86, 0.3);
  paint(body, (p) => (p.y > 0.12 ? dark.clone() : p.y < -0.1 ? light.clone() : orange.clone()));
  // 上窄下宽，像一袋能量胶
  const pos = body.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const k = y > 0.12 ? 0.62 : 1;
    pos.setX(i, pos.getX(i) * k);
    pos.setZ(i, pos.getZ(i) * (y > 0.12 ? 0.5 : 1));
  }
  const capG = new THREE.CylinderGeometry(0.035, 0.035, 0.07, 8);
  capG.deleteAttribute('uv');
  paint(capG, () => srgb(0.95, 0.95, 0.95));
  capG.translate(0, 0.245, 0);
  const g = mergeGeometries([body.toNonIndexed(), capG.toNonIndexed()]);
  g.computeVertexNormals();
  return g;
}

// 一瓶水：蓝色瓶身、白色标签、深蓝瓶盖
function buildWaterGeometry() {
  const blue = srgb(0.2, 0.58, 0.95);
  const light = srgb(0.72, 0.9, 1.0);
  const label = srgb(0.97, 0.98, 1.0);
  const cap = srgb(0.06, 0.2, 0.55);
  const body = new THREE.CylinderGeometry(0.125, 0.115, 0.4, 12, 6, false);
  body.deleteAttribute('uv');
  paint(body, (p) => (Math.abs(p.y) < 0.075 ? label.clone() : blue.clone().lerp(light, p.y > 0 ? 0.35 : 0)));
  const neck = new THREE.CylinderGeometry(0.055, 0.125, 0.1, 12, 1, true);
  neck.deleteAttribute('uv');
  paint(neck, () => light.clone());
  neck.translate(0, 0.25, 0);
  const capG = new THREE.CylinderGeometry(0.062, 0.062, 0.08, 10);
  capG.deleteAttribute('uv');
  paint(capG, () => cap.clone());
  capG.translate(0, 0.335, 0);
  const g = mergeGeometries([body.toNonIndexed(), neck.toNonIndexed(), capG.toNonIndexed()]);
  g.translate(0, -0.08, 0);
  g.computeVertexNormals();
  return g;
}

// 一副交叉的登山杖
function buildPoleGeometry() {
  const shaft = srgb(0.84, 0.86, 0.9);
  const accent = srgb(0.92, 0.2, 0.1);
  const grip = srgb(0.07, 0.07, 0.09);
  const parts = [];
  for (const side of [-1, 1]) {
    const sh = new THREE.CylinderGeometry(0.03, 0.02, 0.92, 6, 4, false);
    sh.deleteAttribute('uv');
    paint(sh, (p) => (p.y > 0.1 ? accent.clone() : shaft.clone()));
    const gr = new THREE.CylinderGeometry(0.05, 0.042, 0.2, 8, 1, false);
    gr.deleteAttribute('uv');
    paint(gr, () => grip.clone());
    gr.translate(0, 0.52, 0);
    const basket = new THREE.CylinderGeometry(0.085, 0.085, 0.02, 10, 1, false);
    basket.deleteAttribute('uv');
    paint(basket, () => grip.clone());
    basket.translate(0, -0.36, 0);
    const one = mergeGeometries([sh.toNonIndexed(), gr.toNonIndexed(), basket.toNonIndexed()]);
    one.rotateZ(side * 0.32);
    one.translate(0, 0, side * 0.04);
    parts.push(one);
  }
  const g = mergeGeometries(parts);
  g.computeVertexNormals();
  return g;
}

// 三种补给各自的模型、自发光颜色和光晕颜色
const ITEM_LOOK = {
  gel: { build: buildGelGeometry, emissive: 0xff6a00, intensity: 0.35, glow: 0xffa040, size: 1.5 },
  water: { build: buildWaterGeometry, emissive: 0x1b78ff, intensity: 0.5, glow: 0x4fb8ff, size: 1.7 },
  pole: { build: buildPoleGeometry, emissive: 0x30b84a, intensity: 0.45, glow: 0x86ff7a, size: 1.9 },
};

let glowShared = null;

// 一团柔和的加色光晕（补给外圈、巅峰状态时跑者身上的光）
export function createGlow(color, size, opacity = 0.55) {
  if (!glowShared) glowShared = buildGlowTexture();
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowShared, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  glow.scale.set(size, size, 1);
  return glow;
}

function buildGlowTexture() {
  const N = 64;
  const data = new Uint8Array(N * N * 4);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = (x + 0.5) / N - 0.5;
      const dy = (y + 0.5) / N - 0.5;
      const r = Math.sqrt(dx * dx + dy * dy) * 2;
      const a = Math.pow(Math.max(0, 1 - r), 2.2);
      const i = (y * N + x) * 4;
      data[i] = data[i + 1] = data[i + 2] = 255;
      data[i + 3] = Math.round(255 * a);
    }
  }
  const t = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}

class Pool {
  constructor(factory) {
    this.factory = factory;
    this.free = [];
  }
  get() {
    const o = this.free.pop() || this.factory();
    o.visible = true;
    return o;
  }
  put(o) {
    o.visible = false;
    this.free.push(o);
  }
}

export class ObstacleField {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);

    const woodMat = addWorldGrain(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide }), 1.6, 0.5);
    const rockMat = addWorldGrain(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 }), 0.9, 0.5);
    const rockGeos = [buildRock(21, 2), buildRock(34, 2), buildRock(55, 2)];
    const logGeo = buildLogGeometry();
    const overGeo = buildOverGeometry();
    const shadowed = (m) => {
      m.castShadow = true;
      m.receiveShadow = true;
      return m;
    };
    let rockI = 0;
    this.rockPool = new Pool(() => {
      const m = shadowed(new THREE.Mesh(rockGeos[rockI++ % rockGeos.length], rockMat));
      this.group.add(m);
      return m;
    });
    this.logPool = new Pool(() => {
      const m = shadowed(new THREE.Mesh(logGeo, woodMat));
      // 先绕自身轴线滚动，再按山径朝向偏航
      m.rotation.order = 'YXZ';
      this.group.add(m);
      return m;
    });
    this.overPool = new Pool(() => {
      const g = new THREE.Group();
      g.add(shadowed(new THREE.Mesh(overGeo, woodMat)));
      const a = shadowed(new THREE.Mesh(rockGeos[0], rockMat));
      a.position.set(-4.7, -0.9, 0);
      a.scale.set(1.0, 1.5, 1.1);
      const b = shadowed(new THREE.Mesh(rockGeos[1], rockMat));
      b.position.set(4.8, -0.75, 0.1);
      b.scale.set(1.2, 1.9, 1.2);
      b.rotation.y = 2;
      g.add(a, b);
      this.group.add(g);
      return g;
    });
    // 补给：每种一个对象池，模型外面套一圈同色光晕，远远就能分出是什么
    this.itemPools = {};
    for (const type in ITEM_LOOK) {
      const look = ITEM_LOOK[type];
      const geo = look.build();
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.1, emissive: look.emissive, emissiveIntensity: look.intensity });
      const glowMat = createGlow(look.glow, 1).material;
      this.itemPools[type] = new Pool(() => {
        const g = new THREE.Group();
        const m = new THREE.Mesh(geo, mat);
        m.castShadow = true;
        const glow = new THREE.Sprite(glowMat);
        glow.scale.set(look.size, look.size, 1);
        g.add(m, glow);
        g.userData.body = m;
        this.group.add(g);
        return g;
      });
    }

    this.course = null;
    this.firstRow = 0; // 第一排还没被回收的障碍
    this.nextRow = 0; // 下一排要生成模型的障碍
    this.firstItem = 0;
    this.nextItem = 0;
  }

  reset(course) {
    if (this.course) {
      for (const r of this.course.rows) this.releaseRow(r);
      for (const it of this.course.items) this._releaseItem(it);
    }
    this.course = course;
    this.firstRow = this.nextRow = 0;
    this.firstItem = this.nextItem = 0;
  }

  // 收回这一排障碍的模型（跑远了，或者被巅峰状态的玩家撞碎）
  releaseRow(row) {
    if (!row.visual) return;
    for (const v of row.visual) v.pool.put(v.obj);
    row.visual = null;
  }

  _releaseItem(it) {
    if (!it.visual) return;
    this.itemPools[it.type].put(it.visual);
    it.visual = null;
  }

  _spawnRow(row) {
    const rnd = mulberry32(row.seed);
    const visual = [];
    const s = row.s;
    const yaw = heading(s);
    const baseY = py(s);
    const c0 = cx(s);
    const cells = row.cells;

    if (cells[0] === OVER) {
      const g = this.overPool.get();
      const flip = rnd() < 0.5;
      g.position.set(c0, baseY + 1.52, -s);
      g.rotation.set(0, yaw + (flip ? Math.PI : 0), 0.045);
      visual.push({ obj: g, pool: this.overPool });
    }

    // 相邻的倒木合并成一根长的
    let i = 0;
    while (i < 3) {
      if (cells[i] !== LOG) {
        i++;
        continue;
      }
      let j = i;
      while (j + 1 < 3 && cells[j + 1] === LOG) j++;
      const lanes = j - i + 1;
      const center = ((i + j) / 2 - 1) * LANE_W;
      const len = lanes === 3 ? 7.4 : lanes * LANE_W + 0.25;
      const m = this.logPool.get();
      const thick = 0.92 + rnd() * 0.2;
      m.scale.set(len, thick, thick);
      m.position.set(c0 + center, baseY + 0.27 * thick, -s);
      m.rotation.set(rnd() * 6.28, yaw + (rnd() - 0.5) * (lanes === 3 ? 0.14 : 0.04), 0);
      visual.push({ obj: m, pool: this.logPool });
      i = j + 1;
    }

    for (let l = 0; l < 3; l++) {
      if (cells[l] !== ROCK) continue;
      const m = this.rockPool.get();
      const w = 0.76 + rnd() * 0.1;
      const h = 1.05 + rnd() * 0.4;
      // 每块落石沿山径前后错开 row.off[l] 米（碰撞判定用的是同一个数）
      const sl = s + row.off[l];
      m.scale.set(w, h, w * (0.9 + rnd() * 0.2));
      m.position.set(cx(sl) + (l - 1) * LANE_W + (rnd() - 0.5) * 0.12, py(sl) + h * 0.36, -sl + (rnd() - 0.5) * 0.2);
      m.rotation.set(0, rnd() * 6.28, 0);
      visual.push({ obj: m, pool: this.rockPool });
    }
    row.visual = visual;
  }

  _spawnItem(it) {
    const g = this.itemPools[it.type].get();
    g.position.set(cx(it.s) + it.lane * LANE_W, py(it.s) + it.y, -it.s);
    it.visual = g;
  }

  takeItem(it) {
    it.taken = true;
    this._releaseItem(it);
  }

  update(playerS, time) {
    if (!this.course) return;
    const { rows, items } = this.course;
    const ahead = playerS + 240;
    const behind = playerS - 14;
    while (this.nextRow < rows.length && rows[this.nextRow].s < ahead) {
      const row = rows[this.nextRow++];
      if (!row.smashed) this._spawnRow(row);
    }
    while (this.firstRow < this.nextRow && rows[this.firstRow].s < behind) this.releaseRow(rows[this.firstRow++]);
    while (this.nextItem < items.length && items[this.nextItem].s < ahead) {
      const it = items[this.nextItem++];
      if (!it.taken) this._spawnItem(it);
    }
    while (this.firstItem < this.nextItem && items[this.firstItem].s < behind) this._releaseItem(items[this.firstItem++]);
    for (let i = this.firstItem; i < this.nextItem; i++) {
      const it = items[i];
      if (!it.visual) continue;
      it.visual.userData.body.rotation.y = time * 2.4 + i;
      it.visual.position.y = py(it.s) + it.y + Math.sin(time * 3 + i * 1.7) * 0.07;
    }
  }
}

// ---------------- 起终点拱门 ----------------

function bannerTexture(title, sub) {
  // 尺寸必须是 2 的幂：WebGL1 下非 2 的幂贴图不能生成 mipmap
  const c = createCanvas(1024, 256);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#16191c';
  ctx.fillRect(0, 0, 1024, 256);
  ctx.fillStyle = '#ff6a13';
  ctx.fillRect(0, 0, 1024, 18);
  ctx.fillRect(0, 238, 1024, 18);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'italic bold 136px sans-serif';
  ctx.fillText(title, 512 - 150, 134);
  ctx.fillStyle = '#ff6a13';
  ctx.font = 'bold 112px sans-serif';
  ctx.fillText(sub, 512 + 290, 134);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

function checkerTexture() {
  const c = createCanvas(256, 32);
  const ctx = c.getContext('2d');
  for (let y = 0; y < 2; y++) {
    for (let x = 0; x < 16; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#f2f2f2' : '#1a1a1a';
      ctx.fillRect(x * 16, y * 16, 16, 16);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.magFilter = THREE.NearestFilter;
  return t;
}

// ---------------- 补给站横幅 ----------------

let aidShared = null;

function aidAssets() {
  if (aidShared) return aidShared;
  // 尺寸必须是 2 的幂
  const c = createCanvas(1024, 128);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1463c8';
  ctx.fillRect(0, 0, 1024, 128);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 1024, 10);
  ctx.fillRect(0, 118, 1024, 10);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 78px sans-serif';
  ctx.fillText('补给站', 250, 66);
  ctx.fillStyle = '#ffd24a';
  ctx.font = 'italic bold 66px sans-serif';
  ctx.fillText('AID STATION', 690, 66);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.NoColorSpace;
  aidShared = {
    poleGeo: new THREE.CylinderGeometry(0.07, 0.08, 4.9, 8),
    footGeo: new THREE.CylinderGeometry(0.34, 0.4, 0.3, 12),
    bannerGeo: new THREE.PlaneGeometry(8.2, 1.02),
    poleMat: new THREE.MeshStandardMaterial({ color: 0xdfe3e8, roughness: 0.5, metalness: 0.3 }),
    footMat: new THREE.MeshStandardMaterial({ color: 0x1c1f23, roughness: 0.7 }),
    bannerMat: decodeMap(new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, side: THREE.DoubleSide, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.3 })),
  };
  return aidShared;
}

// 横跨山径的补给站横幅，跑者从底下穿过
export function createAidStation(s) {
  const a = aidAssets();
  const g = new THREE.Group();
  for (const side of [-1, 1]) {
    const pole = new THREE.Mesh(a.poleGeo, a.poleMat);
    pole.position.set(side * 4.1, 2.45, 0);
    pole.castShadow = true;
    const foot = new THREE.Mesh(a.footGeo, a.footMat);
    foot.position.set(side * 4.1, 0.12, 0);
    g.add(pole, foot);
  }
  const banner = new THREE.Mesh(a.bannerGeo, a.bannerMat);
  banner.position.set(0, 4.35, 0);
  banner.castShadow = true;
  g.add(banner);
  g.position.set(cx(s), py(s), -s);
  g.rotation.y = heading(s);
  return g;
}

export function createArch(s, title, sub, tubeColor) {
  const g = new THREE.Group();
  const R = 4.3;
  const tube = new THREE.Mesh(
    new THREE.TorusGeometry(R, 0.46, 12, 36, Math.PI),
    // 带一点自发光：傍晚逆光时拱门也不至于变成一团黑
    new THREE.MeshStandardMaterial({ color: tubeColor, roughness: 0.55, metalness: 0, emissive: tubeColor, emissiveIntensity: 0.28 })
  );
  tube.scale.set(1, 0.92, 1);
  tube.castShadow = true;
  g.add(tube);
  // 充气拱门两侧的配重底座
  const footMat = new THREE.MeshStandardMaterial({ color: 0x1c1f23, roughness: 0.7 });
  for (const side of [-1, 1]) {
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.66, 0.5, 14), footMat);
    foot.position.set(side * R, 0.2, 0);
    foot.castShadow = true;
    g.add(foot);
  }
  const bannerTex = bannerTexture(title, sub);
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(5.6, 1.4),
    decodeMap(new THREE.MeshStandardMaterial({ map: bannerTex, roughness: 0.8, side: THREE.DoubleSide, emissive: 0xffffff, emissiveMap: bannerTex, emissiveIntensity: 0.3 }))
  );
  // 横幅立在拱门顶上，跟拍相机可以从拱门下穿过
  banner.position.set(0, R * 0.92 + 0.46 + 0.66, 0);
  banner.castShadow = true;
  g.add(banner);
  const line = new THREE.Mesh(
    new THREE.PlaneGeometry(6.4, 0.8),
    decodeMap(new THREE.MeshStandardMaterial({ map: checkerTexture(), roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }))
  );
  line.rotation.x = -Math.PI / 2;
  line.position.y = 0.02;
  line.receiveShadow = true;
  g.add(line);
  g.position.set(cx(s), py(s), -s);
  g.rotation.y = heading(s);
  return g;
}
