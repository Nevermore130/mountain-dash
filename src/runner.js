// 跑者：分节的人体模型 + 程序化的跑 / 跳 / 滑铲动画
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { decodeMap } from './matutil.js';

const THIGH = 0.42;
const SHIN = 0.42;
const SOLE = 0.085;

function colored(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function capsule(r, len, hex, sx = 1, sy = 1, sz = 1) {
  const g = new THREE.CapsuleGeometry(r, len, 3, 8);
  g.scale(sx, sy, sz);
  return colored(g, hex);
}

let runnerMaterial = null;
function getMaterial() {
  if (!runnerMaterial) runnerMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.78, metalness: 0 });
  return runnerMaterial;
}

function part(geos) {
  const g = geos.length === 1 ? geos[0] : mergeGeometries(geos);
  const m = new THREE.Mesh(g, getMaterial());
  m.castShadow = true;
  return m;
}

const SKIN = [0xd9a47e, 0xc68e68, 0xe2b48f, 0xb9805a];

// 姿态数组下标
const HIP_L = 0,
  HIP_R = 1,
  KNEE_L = 2,
  KNEE_R = 3,
  SH_L = 4,
  SH_R = 5,
  EL_L = 6,
  EL_R = 7,
  LEAN = 8,
  TWIST = 9,
  PITCH = 10,
  ANK_L = 11,
  ANK_R = 12,
  N_POSE = 13;

const POSE_JUMP = [1.15, -0.4, 1.35, 1.55, -0.7, 1.0, 1.2, 1.4, -0.28, 0, -0.08, 0.3, -0.5];
const POSE_SLIDE = [0.38, 0.95, 0.08, 1.65, -1.05, -0.5, 0.35, 0.9, -0.52, 0.1, 1.16, -0.3, 0.2];
const POSE_READY = [0.5, -0.35, 0.55, 0.5, -0.5, 0.6, 1.4, 1.3, -0.32, 0, 0, 0, 0.3];
const POSE_STAND = [0.04, -0.04, 0.06, 0.06, 0.05, -0.05, 0.25, 0.25, -0.03, 0, 0, 0, 0];

export class Runner {
  constructor(opts = {}) {
    const shirt = opts.shirt ?? 0xe8521c;
    const shorts = opts.shorts ?? 0x24262b;
    const vest = opts.vest ?? 0x3a4038;
    const shoe = opts.shoe ?? 0xffa01e;
    const cap = opts.cap ?? 0xe9e6dc;
    const sock = opts.sock ?? 0xf2f2f2;
    const skin = opts.skin ?? SKIN[(opts.index || 0) % SKIN.length];
    const hair = 0x1c1714;

    this.root = new THREE.Group();
    this.pelvis = new THREE.Group();
    this.root.add(this.pelvis);

    // 髋部
    const hips = capsule(0.145, 0.07, shorts, 1.1, 1, 0.84);
    hips.rotateZ(Math.PI / 2);
    hips.translate(0, 0.02, 0);
    this.pelvis.add(part([hips]));

    // 躯干（含越野背心、头、帽子）
    this.torso = new THREE.Group();
    this.torso.position.y = 0.06;
    this.pelvis.add(this.torso);
    const chest = capsule(0.15, 0.27, shirt, 1.14, 1, 0.8);
    chest.translate(0, 0.27, 0);
    const pack = capsule(0.118, 0.17, vest, 1.3, 1, 0.62);
    pack.translate(0, 0.35, 0.095);
    const strapL = colored(new THREE.BoxGeometry(0.055, 0.34, 0.03), vest);
    strapL.translate(-0.088, 0.36, -0.118);
    const strapR = strapL.clone();
    strapR.translate(0.176, 0, 0);
    const flaskL = capsule(0.028, 0.07, 0x9fd8f0);
    flaskL.translate(-0.09, 0.33, -0.145);
    const flaskR = flaskL.clone();
    flaskR.translate(0.18, 0, 0);
    const neck = colored(new THREE.CylinderGeometry(0.047, 0.055, 0.1, 8), skin);
    neck.translate(0, 0.56, 0);
    const head = colored(new THREE.SphereGeometry(0.106, 14, 10), skin);
    head.scale(0.94, 1.08, 1);
    head.translate(0, 0.705, -0.01);
    const hairG = colored(new THREE.SphereGeometry(0.111, 12, 6, 0, Math.PI, Math.PI * 0.42, Math.PI * 0.34), hair);
    hairG.scale(0.95, 1.08, 1);
    hairG.translate(0, 0.705, -0.005);
    const capG = colored(new THREE.SphereGeometry(0.113, 14, 6, 0, Math.PI * 2, 0, Math.PI * 0.47), cap);
    capG.scale(0.96, 1.02, 1.02);
    capG.translate(0, 0.72, -0.01);
    const brim = colored(new THREE.CylinderGeometry(0.085, 0.085, 0.012, 12, 1, false, Math.PI * 0.5, Math.PI), cap);
    brim.scale(1, 1, 1.25);
    brim.translate(0, 0.742, -0.085);
    this.torso.add(part([chest, pack, strapL, strapR, flaskL, flaskR, neck, head, hairG, capG, brim]));

    // 手臂
    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.205, 0.46, 0);
      const upper = capsule(0.046, 0.19, skin);
      upper.translate(0, -0.135, 0);
      const sleeve = capsule(0.057, 0.07, shirt);
      sleeve.translate(0, -0.055, 0);
      shoulder.add(part([upper, sleeve]));
      const elbow = new THREE.Group();
      elbow.position.y = -0.27;
      shoulder.add(elbow);
      const fore = capsule(0.039, 0.19, skin);
      fore.translate(0, -0.125, 0);
      const hand = colored(new THREE.SphereGeometry(0.046, 8, 6), skin);
      hand.translate(0, -0.275, 0);
      const geos = [fore, hand];
      if (side < 0) {
        const watch = colored(new THREE.BoxGeometry(0.05, 0.035, 0.09), 0x15171a);
        watch.translate(0, -0.21, 0);
        geos.push(watch);
      }
      elbow.add(part(geos));
      this.torso.add(shoulder);
      return { shoulder, elbow };
    };
    this.armL = makeArm(-1);
    this.armR = makeArm(1);

    // 腿
    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.095, 0, 0);
      const thigh = capsule(0.08, THIGH - 0.16, skin);
      thigh.translate(0, -THIGH / 2, 0);
      const shortsLeg = capsule(0.09, 0.1, shorts);
      shortsLeg.translate(0, -0.1, 0);
      hip.add(part([thigh, shortsLeg]));
      const knee = new THREE.Group();
      knee.position.y = -THIGH;
      hip.add(knee);
      const shin = capsule(0.057, SHIN - 0.13, skin, 1, 1, 1.12);
      shin.translate(0, -SHIN / 2 + 0.01, 0.006);
      const sockG = capsule(0.05, 0.07, sock);
      sockG.translate(0, -SHIN + 0.085, 0);
      knee.add(part([shin, sockG]));
      const ankle = new THREE.Group();
      ankle.position.y = -SHIN;
      knee.add(ankle);
      const upperShoe = capsule(0.05, 0.13, shoe, 0.95, 1, 0.85);
      upperShoe.rotateX(Math.PI / 2);
      upperShoe.translate(0, -0.03, -0.06);
      const sole = colored(new THREE.BoxGeometry(0.098, 0.03, 0.27), 0xf4f1ea);
      sole.translate(0, -0.07, -0.062);
      const lug = colored(new THREE.BoxGeometry(0.084, 0.014, 0.24), 0x5a544d);
      lug.translate(0, -0.09, -0.062);
      ankle.add(part([upperShoe, sole, lug]));
      this.pelvis.add(hip);
      return { hip, knee, ankle };
    };
    this.legL = makeLeg(-1);
    this.legR = makeLeg(1);

    this.phase = opts.phase || 0;
    this.jumpW = 0;
    this.slideW = 0;
    this.readyW = 1;
    this.standW = 0;
    this.cheerW = 0;
    this.stumble = 0;
    this.roll = 0;
    this.pose = new Float32Array(N_POSE);
    this.footDown = false; // 本帧是否有脚落地（用于脚步声 / 扬尘）
    this._lastHalf = 0;
    this.pelvisY = 0.92;
  }

  // 名牌（对手头顶的名字）
  addNameTag(texture, aspect) {
    // 名牌保持固定的屏幕大小，不随远近缩放
    const mat = decodeMap(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, fog: false, sizeAttenuation: false, toneMapped: false }));
    const sp = new THREE.Sprite(mat);
    const h = 0.04;
    sp.scale.set(h * aspect, h, 1);
    sp.position.y = 2.12;
    sp.renderOrder = 5;
    this.root.add(sp);
    this.tag = sp;
  }

  /**
   * @param dt 帧间隔
   * @param st { mode: 'ready'|'run'|'stand'|'cheer', speed, airborne, sliding, lean }
   */
  animate(dt, st) {
    const p = this.pose;
    const speed = st.speed || 0;
    const k = Math.min(1, dt * 12);
    const toward = (v, target, rate = k) => v + (target - v) * rate;
    this.jumpW = toward(this.jumpW, st.airborne ? 1 : 0, Math.min(1, dt * 14));
    this.slideW = toward(this.slideW, st.sliding ? 1 : 0, Math.min(1, dt * 13));
    this.readyW = toward(this.readyW, st.mode === 'ready' ? 1 : 0, Math.min(1, dt * 7));
    this.standW = toward(this.standW, st.mode === 'stand' ? 1 : 0, Math.min(1, dt * 4));
    this.cheerW = toward(this.cheerW, st.mode === 'cheer' ? 1 : 0, Math.min(1, dt * 4));
    this.stumble = Math.max(0, this.stumble - dt * 1.6);
    this.roll = toward(this.roll, st.lean || 0, Math.min(1, dt * 10));

    // 步频随速度略增：约 2.8~3.3 步/秒
    const cadence = speed > 0.5 ? 8.6 + speed * 0.14 : 0;
    this.phase += cadence * dt;
    const ph = this.phase;
    const stride = Math.min(1, 0.55 + speed / 22);

    const half = Math.floor((ph + Math.PI * 0.55) / Math.PI);
    this.footDown = half !== this._lastHalf && speed > 1 && !st.airborne && !st.sliding;
    this._lastHalf = half;

    // ---- 跑步循环 ----
    const pL = ph;
    const pR = ph + Math.PI;
    const hip = (a) => 0.14 + 0.76 * stride * Math.sin(a);
    const knee = (a) => {
      const c = 0.5 + 0.5 * Math.cos(a + Math.PI / 3);
      return 0.22 + 1.5 * stride * c * c;
    };
    p[HIP_L] = hip(pL);
    p[HIP_R] = hip(pR);
    p[KNEE_L] = knee(pL);
    p[KNEE_R] = knee(pR);
    p[ANK_L] = 0.25 * Math.sin(pL + 0.9);
    p[ANK_R] = 0.25 * Math.sin(pR + 0.9);
    p[SH_L] = 0.1 - 0.85 * stride * Math.sin(pL);
    p[SH_R] = 0.1 - 0.85 * stride * Math.sin(pR);
    p[EL_L] = 1.45 - 0.3 * Math.sin(pL);
    p[EL_R] = 1.45 - 0.3 * Math.sin(pR);
    p[LEAN] = -0.14 - speed * 0.006;
    p[TWIST] = 0.13 * Math.sin(ph);
    p[PITCH] = 0;

    const blend = (target, w) => {
      if (w < 0.001) return;
      for (let i = 0; i < N_POSE; i++) p[i] += (target[i] - p[i]) * w;
    };
    blend(POSE_STAND, this.standW);
    blend(POSE_READY, this.readyW);
    if (this.cheerW > 0.001) {
      const w = this.cheerW;
      const wave = Math.sin(this.phase * 0.5) * 0.15;
      p[SH_L] += (2.75 + wave - p[SH_L]) * w;
      p[SH_R] += (2.75 - wave - p[SH_R]) * w;
      p[EL_L] += (0.25 - p[EL_L]) * w;
      p[EL_R] += (0.25 - p[EL_R]) * w;
      p[LEAN] += (0.06 - p[LEAN]) * w;
    }
    blend(POSE_JUMP, this.jumpW);
    blend(POSE_SLIDE, this.slideW);

    if (this.stumble > 0) {
      const s = this.stumble;
      p[LEAN] -= 0.55 * s;
      p[SH_L] += Math.sin(ph * 2.3) * 0.9 * s;
      p[SH_R] -= Math.cos(ph * 2.1) * 0.9 * s;
      p[EL_L] -= 0.6 * s;
      p[EL_R] -= 0.6 * s;
    }

    // ---- 把姿态写到骨骼上 ----
    this.legL.hip.rotation.x = p[HIP_L];
    this.legR.hip.rotation.x = p[HIP_R];
    this.legL.knee.rotation.x = -p[KNEE_L];
    this.legR.knee.rotation.x = -p[KNEE_R];
    this.legL.ankle.rotation.x = p[ANK_L] + (p[KNEE_L] - p[HIP_L]) * 0.35;
    this.legR.ankle.rotation.x = p[ANK_R] + (p[KNEE_R] - p[HIP_R]) * 0.35;
    this.armL.shoulder.rotation.x = p[SH_L];
    this.armR.shoulder.rotation.x = p[SH_R];
    this.armL.shoulder.rotation.z = -0.1;
    this.armR.shoulder.rotation.z = 0.1;
    this.armL.elbow.rotation.x = p[EL_L];
    this.armR.elbow.rotation.x = p[EL_R];
    // 摆臂时前臂略向身体中线收
    this.armL.elbow.rotation.z = -0.35;
    this.armR.elbow.rotation.z = 0.35;
    this.torso.rotation.x = p[LEAN];
    this.torso.rotation.y = p[TWIST];
    this.pelvis.rotation.x = p[PITCH];
    this.pelvis.rotation.y = -p[TWIST] * 0.5;
    this.pelvis.rotation.z = -this.roll;

    // 让支撑脚踩在地面上：用正向运动学求两只脚的最低点
    const reach = (h, kn) => THIGH * Math.cos(h) + SHIN * Math.cos(h - kn);
    let grounded = Math.max(reach(p[HIP_L], p[KNEE_L]), reach(p[HIP_R], p[KNEE_R])) + SOLE;
    // 腾空期稍微离地
    const flight = Math.max(0, -Math.cos(2 * ph)) * 0.05 * stride * (1 - this.readyW) * (1 - this.standW);
    grounded += flight;
    let y = grounded + (0.9 - grounded) * this.jumpW;
    y += (0.3 - y) * this.slideW;
    this.pelvisY = y;
    this.pelvis.position.y = y;
  }

  hit() {
    this.stumble = 1;
  }
}
