// 跑者：glb 蒙皮模型 + 骨骼动画（素材在 minigame/assets/runners/，由 tools/runner-assets 加工生成）
import * as THREE from 'three';
import { loadGLB, loadTexture } from './assets.js';
import { decodeMap } from './matutil.js';

const DIR = 'assets/runners/';

// ---------------------------------------------------------------------------
// 骨骼蒙皮
//
// three r160 自带的蒙皮着色器把骨骼矩阵放在浮点贴图里，并且用了 WebGL2 才有的 texelFetch，
// 在本工程固定使用的 WebGL1 下编译不过，也不是所有设备都支持浮点贴图。
// 人物只有 23 根骨骼，这里改成直接用 uniform 数组传骨骼矩阵：不需要任何贴图和扩展。
// 每根骨骼只传 3 行（仿射矩阵的最后一行恒为 0 0 0 1），整个顶点着色器用到的 uniform
// 约 106 个 vec4，低于 WebGL1 规范保证的下限 128。
// ---------------------------------------------------------------------------

let skinningBones = 0;

function installSkinning(boneCount) {
  if (skinningBones === boneCount) return;
  if (skinningBones) throw new Error(`人物骨骼数不一致：${skinningBones} / ${boneCount}`);
  skinningBones = boneCount;
  THREE.ShaderChunk.skinning_pars_vertex = /* glsl */ `
#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform vec4 boneRows[ ${boneCount * 3} ];
	mat4 getBoneMatrix( const in float i ) {
		int j = int( i ) * 3;
		vec4 r0 = boneRows[ j ];
		vec4 r1 = boneRows[ j + 1 ];
		vec4 r2 = boneRows[ j + 2 ];
		return mat4( r0.x, r1.x, r2.x, 0.0, r0.y, r1.y, r2.y, 0.0, r0.z, r1.z, r2.z, 0.0, r0.w, r1.w, r2.w, 1.0 );
	}
#endif`;
}

// three 每帧在 skeleton.update() 里算好 boneMatrices（列主序 4×4）；这里顺手抽出每根骨骼的前 3 行
function packBoneRows(skeleton) {
  if (skeleton.boneRows) return;
  const n = skeleton.bones.length;
  const rows = (skeleton.boneRows = new Float32Array(n * 12));
  const update = skeleton.update;
  skeleton.update = function () {
    update.call(this);
    const m = this.boneMatrices;
    for (let b = 0; b < n; b++) {
      const i = b * 16;
      const o = b * 12;
      for (let r = 0; r < 3; r++) {
        rows[o + r * 4] = m[i + r];
        rows[o + r * 4 + 1] = m[i + 4 + r];
        rows[o + r * 4 + 2] = m[i + 8 + r];
        rows[o + r * 4 + 3] = m[i + 12 + r];
      }
    }
  };
}

// three 在画蒙皮网格前会检查「浮点贴图 + 顶点贴图采样」这项能力，不支持就每帧打一条警告。
// 我们不用骨骼贴图，把这项标成支持即可（它只会去设置一个着色器里并不存在的 boneTexture，等于什么都不做）。
export function setupSkinning(renderer) {
  renderer.capabilities.floatVertexTextures = true;
}

// 让材质把这副骨架的骨骼矩阵当作 uniform 传进着色器
function skinned(material, skeleton) {
  packBoneRows(skeleton);
  const prev = material.onBeforeCompile;
  const prevKey = Object.prototype.hasOwnProperty.call(material, 'customProgramCacheKey') ? material.customProgramCacheKey : null;
  material.onBeforeCompile = (shader, renderer) => {
    if (prev) prev(shader, renderer);
    shader.uniforms.boneRows = { value: skeleton.boneRows };
  };
  material.customProgramCacheKey = () => (prevKey ? prevKey.call(material) : '') + '|bones';
  return material;
}

// ---------------------------------------------------------------------------
// 素材
// ---------------------------------------------------------------------------

// 读入共用动画和各选手的模型 / 贴图。任何一个文件失败都会 reject
export function loadRunnerLibrary(names) {
  const one = (name) =>
    Promise.all([loadGLB(DIR + name + '.glb'), loadTexture(DIR + name + '_body.jpg'), loadTexture(DIR + name + '_extras.jpg')]).then(([gltf, body, extras]) => ({ gltf, body, extras }));
  return Promise.all([loadGLB(DIR + 'anims.glb'), ...names.map(one)]).then(([anims, ...models]) => {
    const extras = anims.scene.userData;
    const lib = { clips: {}, pelvisRest: extras.pelvisRest, contacts: extras.contacts || { jog: 0, sprint: 0 }, models: {} };
    for (const clip of anims.animations) lib.clips[clip.name] = clip;
    names.forEach((n, i) => (lib.models[n] = models[i]));
    return lib;
  });
}

// 动画是按参考骨架录的：旋转直接套用，骨盆的位移按腿长比例缩放
function retarget(clip, k) {
  const tracks = clip.tracks.map((t) => {
    if (t.name !== 'pelvis.position') return t;
    const v = new Float32Array(t.values.length);
    for (let i = 0; i < v.length; i++) v[i] = t.values[i] * k;
    return new THREE.VectorKeyframeTrack(t.name, t.times, v);
  });
  return new THREE.AnimationClip(clip.name, clip.duration, tracks);
}

// ---------------------------------------------------------------------------
// 动作编排
// ---------------------------------------------------------------------------

const LOOPS = ['idle', 'crouch', 'jog', 'sprint', 'slide_loop', 'cheer'];
// 一个完整步态周期（两步）的时长：刚起步 / 全速
const CYCLE_SLOW = 0.7;
const CYCLE_FAST = 0.54;
// 各段一次性动作从片段的哪一秒开始播（跳过原动画里游戏用不上的预备部分）
const JUMP_FROM = 0.14; // 起跳：跳过下蹲蓄力，直接从蹬地开始
const LAND_FROM = 0.1; // 落地：从脚刚着地开始
const LAND_TIME = 0.26; // 落地缓冲叠加在跑步上的时长
const SLIDE_FROM = 0.2; // 入滑：从身体开始后倒开始
const SLIDE_IN = 0.12; // 入滑片段播这么久之后切到滑行姿势
const SLIDE_OUT_FROM = 0.14; // 出滑：从开始起身开始
export const SLIDE_OUT = 0.2; // 滑铲结束前这么久开始起身
const HIT_TIME = 0.42;
const YES_TIME = 2.2; // 冲线后先握拳庆祝这么久，再接循环的庆祝动作

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export class Runner {
  constructor(lib, name, opts = {}) {
    const src = lib.models[name];
    if (!src) throw new Error(`没有名为 ${name} 的人物模型`);
    this.name = name;
    this.root = new THREE.Group();
    this.tilt = new THREE.Group(); // 变道时的侧倾
    this.root.add(this.tilt);
    this.model = src.gltf.scene;
    this.model.rotation.y = Math.PI; // 模型朝 +Z，游戏里跑者朝 -Z
    this.model.position.y = 0.014; // 鞋底加厚的那一点
    this.tilt.add(this.model);

    this.meshes = [];
    this.model.traverse((o) => {
      if (!o.isSkinnedMesh) return;
      installSkinning(o.skeleton.bones.length);
      const isBody = o.name === 'body';
      o.material = skinned(
        decodeMap(new THREE.MeshStandardMaterial({ map: isBody ? src.body : src.extras, roughness: isBody ? 0.78 : 0.7, metalness: 0, side: isBody ? THREE.FrontSide : THREE.DoubleSide })),
        o.skeleton
      );
      o.customDepthMaterial = skinned(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }), o.skeleton);
      o.castShadow = true;
      o.receiveShadow = false;
      // 包围球按静止姿势算会不准（滑铲、倒地时身体伸得很开），给一个足够大的固定值
      o.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.9, 0), 2.3);
      this.meshes.push(o);
    });

    const rest = src.gltf.scene.userData.pelvisRest || lib.pelvisRest;
    const k = rest[2] / lib.pelvisRest[2];
    this.mixer = new THREE.AnimationMixer(this.model);
    this.actions = {};
    this.weights = {};
    for (const key in lib.clips) {
      const a = this.mixer.clipAction(retarget(lib.clips[key], k));
      const loop = LOOPS.indexOf(key) >= 0;
      a.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
      a.clampWhenFinished = !loop;
      a.setEffectiveWeight(0);
      a.play();
      this.actions[key] = a;
      this.weights[key] = 0;
    }
    this.blend = {};
    for (const key in this.actions) if (key !== 'hit' && key !== 'jump_land') this.blend[key] = 0;
    this.contacts = lib.contacts;
    this.phase = opts.phase || 0; // 步态相位 0..1，0 和 0.5 是左 / 右脚落地
    this.footDown = false; // 本帧是否有脚落地（脚步声 / 扬尘用）
    this.roll = 0;
    this.reset();
  }

  // 回到起跑前的状态
  reset() {
    for (const key in this.blend) this.blend[key] = 0;
    this.blend.idle = 1;
    this.hitT = 0;
    this.landT = 0;
    this.cheerT = 0;
    this._air = false;
    this._slide = false;
    this._exiting = false;
    this._down = false;
    this._wasSliding = false;
    this._wasAir = false;
    this._half = Math.floor(this.phase * 2);
    this.animate(0, { mode: 'stand', speed: 0 });
  }

  // 头顶的名牌：保持固定的屏幕大小，不随远近缩放
  addNameTag(texture, aspect) {
    const mat = decodeMap(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, fog: false, sizeAttenuation: false, toneMapped: false }));
    const sp = new THREE.Sprite(mat);
    const h = 0.04;
    sp.scale.set(h * aspect, h, 1);
    sp.position.y = 2.08;
    sp.renderOrder = 5;
    this.root.add(sp);
    this.tag = sp;
  }

  setShadow(on) {
    for (const m of this.meshes) m.castShadow = on;
  }

  _play(key, from = 0) {
    const a = this.actions[key];
    a.reset();
    a.time = from;
    a.play();
  }

  /**
   * @param dt 帧间隔
   * @param st {
   *   mode: 'stand' 站立 | 'ready' 起跑预备 | 'run' | 'cheer' 冲线后 | 'collapse' 力竭,
   *   speed, airborne, sliding, slideLeft（滑铲还剩多少秒）, lean（-1..1，变道侧倾）
   * }
   */
  animate(dt, st) {
    const speed = st.speed || 0;
    const A = this.actions;
    const W = this.weights;
    const target = {};
    for (const key in W) target[key] = 0;
    const air = !!st.airborne;
    const sliding = !!st.sliding && !air;
    const down = st.mode === 'collapse';

    // ---- 一次性动作的触发 ----
    if (air && !this._air) this._play('jump_start', JUMP_FROM);
    if (!air && this._air && !sliding) {
      this._play('jump_land', LAND_FROM);
      this.landT = LAND_TIME;
    }
    if (sliding && !this._slide) {
      this._play('slide_start', SLIDE_FROM);
      this._exiting = false;
    }
    if (sliding && !this._exiting && st.slideLeft !== undefined && st.slideLeft <= SLIDE_OUT) {
      this._play('slide_exit', SLIDE_OUT_FROM);
      this._exiting = true;
    }
    if (down && !this._down) this._play('collapse');
    if (st.mode === 'cheer') {
      if (this.cheerT === 0 && speed < 2.2) this._play('yes');
      if (speed < 2.2) this.cheerT += dt;
    } else this.cheerT = 0;
    this._air = air;
    this._slide = sliding;
    this._down = down;

    // ---- 这一帧各动作该占多少 ----
    const fast = clamp01((speed - 8.5) / 4.5);
    let rate = 10;
    if (sliding) {
      rate = 22;
      if (this._exiting) target.slide_exit = 1;
      else if (A.slide_start.time < SLIDE_FROM + SLIDE_IN) target.slide_start = 1;
      else target.slide_loop = 1;
    } else if (air) {
      rate = 18;
      target.jump_start = 1;
    } else if (down) {
      rate = 6;
      target.collapse = 1;
    } else if (st.mode === 'ready') {
      rate = 5;
      target.crouch = 1;
    } else if (st.mode === 'cheer' && speed < 2.2) {
      rate = 5;
      if (this.cheerT < YES_TIME) target.yes = 1;
      else target.cheer = 1;
    } else if (st.mode === 'stand' || speed < 0.6) {
      rate = 6;
      target.idle = 1;
    } else {
      // 起步时从站姿过渡到跑姿，速度越快冲刺动作占得越多
      const go = clamp01(speed / 3.5);
      target.idle = 1 - go;
      target.jog = go * (1 - fast);
      target.sprint = go * fast;
      if (this._wasSliding || this._wasAir) rate = 14;
    }
    this._wasSliding = sliding;
    this._wasAir = air;

    // 受击 / 落地缓冲：短暂叠加在当前动作上
    this.hitT = Math.max(0, this.hitT - dt);
    this.landT = sliding || air ? 0 : Math.max(0, this.landT - dt);
    const hitW = clamp01(this.hitT / 0.16) * 0.85;
    const landW = clamp01(this.landT / (LAND_TIME * 0.6)) * 0.6;

    // blend 里是平滑过渡中的基础动作权重；最终权重 = 归一化后的基础权重 × 没被叠加动作占掉的部分
    const B = this.blend;
    const k = dt > 0 ? Math.min(1, dt * rate) : 1;
    let sum = 0;
    for (const key in B) {
      B[key] += (target[key] - B[key]) * k;
      if (B[key] < 0.002) B[key] = 0;
      sum += B[key];
    }
    const base = ((1 - hitW) * (1 - landW)) / (sum || 1);
    for (const key in B) W[key] = B[key] * base;
    W.hit = hitW;
    W.jump_land = landW * (1 - hitW);
    for (const key in W) A[key].setEffectiveWeight(W[key]);

    // ---- 两套跑步动画共用一个相位，脚步才对得上 ----
    const running = W.jog + W.sprint > 0.02;
    if (running) this.phase = (this.phase + dt / (CYCLE_SLOW + (CYCLE_FAST - CYCLE_SLOW) * fast)) % 1;
    for (const key of ['jog', 'sprint']) {
      const a = A[key];
      a.timeScale = 0;
      a.time = ((this.phase + this.contacts[key]) % 1) * a.getClip().duration;
    }
    const half = Math.floor(this.phase * 2);
    this.footDown = running && half !== this._half && speed > 1 && !air && !sliding;
    this._half = half;

    this.mixer.update(dt);

    this.roll += ((st.lean || 0) - this.roll) * Math.min(1, dt * 10);
    this.tilt.rotation.z = -this.roll;
  }

  hit() {
    this.hitT = HIT_TIME;
    this._play('hit');
  }
}
