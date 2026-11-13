// 赛道上的障碍、能量胶与起终点拱门
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LANE_W, RACE_LENGTH, STAGES, stageIndexAt } from './config.js';
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
};

const WEIGHTS = [
  { rock1: 40, log: 25, over: 20, rock2: 15 },
  { rock1: 25, rock2: 25, log: 22, over: 20, rockLog: 8 },
  { rock1: 15, rock2: 28, log: 20, over: 20, rockLog: 12, logRock: 5 },
  { rock1: 10, rock2: 28, log: 18, over: 18, rockLog: 14, logRock: 12 },
  { rock1: 8, rock2: 28, log: 18, over: 18, rockLog: 15, logRock: 13 },
  { rock1: 8, rock2: 26, log: 18, over: 20, rockLog: 15, logRock: 13 },
];

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

// 生成整条赛道的障碍排布与能量胶
export function generateCourse(seed) {
  const rnd = mulberry32(seed);
  const rows = [];
  const gels = [];
  // 开头四排固定，依次教会三种操作
  const scripted = ['rock1c', 'log', 'over', 'rock2'];
  let s = 78;
  let n = 0;
  let sinceGel = 2;
  let last = '';
  let last2 = '';
  while (s < RACE_LENGTH - 55) {
    const si = stageIndexAt(s);
    const st = STAGES[si];
    let kind = n < scripted.length ? scripted[n] : pickKind(si, rnd, last, last2);
    let cells;
    if (kind === 'rock1c') {
      cells = [0, ROCK, 0];
      kind = 'rock1';
    } else {
      cells = PATTERNS[kind](rnd);
    }
    last2 = last;
    last = kind;
    rows.push({ s, cells, kind, index: n, seed: Math.floor(rnd() * 1e9), passed: false, hit: false, visual: null });

    let gap = st.gap * st.speed * (0.92 + rnd() * 0.3);
    if (n < scripted.length) gap *= 1.3;

    sinceGel++;
    if ((sinceGel >= 5 && rnd() < 0.5) || sinceGel >= 8) {
      const logLanes = [];
      cells.forEach((c, i) => c === LOG && logLanes.push(i));
      if (logLanes.length && rnd() < 0.4) {
        // 挂在倒木上方：必须起跳才拿得到
        gels.push({ s, lane: logLanes[Math.floor(rnd() * logLanes.length)] - 1, y: 1.85, taken: false, visual: null });
      } else {
        gels.push({ s: s + gap * 0.5, lane: Math.floor(rnd() * 3) - 1, y: 0.95, taken: false, visual: null });
      }
      sinceGel = 0;
    }
    s += gap;
    n++;
  }
  return { rows, gels };
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
    const gelGeo = buildGelGeometry();
    const gelMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.1, emissive: 0xff6a00, emissiveIntensity: 0.35 });
    const glowTex = buildGlowTexture();

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
    this.gelPool = new Pool(() => {
      const g = new THREE.Group();
      const m = new THREE.Mesh(gelGeo, gelMat);
      m.castShadow = true;
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: glowTex, color: 0xffa040, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })
      );
      glow.scale.set(1.5, 1.5, 1);
      g.add(m, glow);
      g.userData.body = m;
      this.group.add(g);
      return g;
    });

    this.course = null;
    this.firstRow = 0; // 第一排还没被回收的障碍
    this.nextRow = 0; // 下一排要生成模型的障碍
    this.firstGel = 0;
    this.nextGel = 0;
  }

  reset(course) {
    if (this.course) {
      for (const r of this.course.rows) this._releaseRow(r);
      for (const g of this.course.gels) this._releaseGel(g);
    }
    this.course = course;
    this.firstRow = this.nextRow = 0;
    this.firstGel = this.nextGel = 0;
  }

  _releaseRow(row) {
    if (!row.visual) return;
    for (const v of row.visual) v.pool.put(v.obj);
    row.visual = null;
  }

  _releaseGel(gel) {
    if (!gel.visual) return;
    this.gelPool.put(gel.visual);
    gel.visual = null;
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
      m.scale.set(w, h, w * (0.9 + rnd() * 0.2));
      m.position.set(c0 + (l - 1) * LANE_W + (rnd() - 0.5) * 0.12, baseY + h * 0.36, -s + (rnd() - 0.5) * 0.3);
      m.rotation.set(0, rnd() * 6.28, 0);
      visual.push({ obj: m, pool: this.rockPool });
    }
    row.visual = visual;
  }

  _spawnGel(gel) {
    const g = this.gelPool.get();
    g.position.set(cx(gel.s) + gel.lane * LANE_W, py(gel.s) + gel.y, -gel.s);
    gel.visual = g;
  }

  takeGel(gel) {
    gel.taken = true;
    this._releaseGel(gel);
  }

  update(playerS, time) {
    if (!this.course) return;
    const { rows, gels } = this.course;
    const ahead = playerS + 240;
    const behind = playerS - 14;
    while (this.nextRow < rows.length && rows[this.nextRow].s < ahead) this._spawnRow(rows[this.nextRow++]);
    while (this.firstRow < this.nextRow && rows[this.firstRow].s < behind) this._releaseRow(rows[this.firstRow++]);
    while (this.nextGel < gels.length && gels[this.nextGel].s < ahead) {
      const g = gels[this.nextGel++];
      if (!g.taken) this._spawnGel(g);
    }
    while (this.firstGel < this.nextGel && gels[this.firstGel].s < behind) this._releaseGel(gels[this.firstGel++]);
    for (let i = this.firstGel; i < this.nextGel; i++) {
      const g = gels[i];
      if (!g.visual) continue;
      g.visual.userData.body.rotation.y = time * 2.4 + i;
      g.visual.position.y = py(g.s) + g.y + Math.sin(time * 3 + i * 1.7) * 0.07;
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
