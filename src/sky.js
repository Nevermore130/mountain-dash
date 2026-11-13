// 天空穹顶、太阳光、雾与远山；光照随赛程像延时摄影一样变化
import * as THREE from 'three';
import { STAGES, stageKeyframe, lerp } from './config.js';
import { getNoiseTexture, ridged, fbm } from './noise.js';

const DEG = Math.PI / 180;
const SKY_GAIN = 1.55;

function mixArr(a, b, t, out) {
  out.setRGB(lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t), THREE.SRGBColorSpace);
  return out;
}

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9999;
}`;

const SKY_FRAG = /* glsl */ `
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uTime;
uniform float uCloud;
uniform sampler2D uNoise;
varying vec3 vDir;

void main() {
  vec3 d = normalize(vDir);
  float h = max(d.y, 0.0);
  float sd = max(dot(d, uSunDir), 0.0);

  // 大气渐变：地平线发白发暖，天顶深蓝
  vec3 col = mix(uHorizon, uTop, 1.0 - exp(-h * 5.5));

  // 太阳的大范围散射辉光 + 日盘
  vec3 glow = uSunColor * (pow(sd, 6.0) * 0.22 + pow(sd, 40.0) * 0.5 + pow(sd, 300.0) * 1.6);
  col += glow * (0.35 + 0.65 * exp(-h * 3.0));
  col += uSunColor * smoothstep(0.99955, 0.9998, sd) * 30.0;

  // 云：把视线投到一个平面上采样噪声
  if (d.y > 0.005) {
    vec2 uv = d.xz / (d.y + 0.16) * 0.085 + uTime * vec2(0.0016, 0.0007);
    float c = texture2D(uNoise, uv).r * 0.55 + texture2D(uNoise, uv * 2.9 + 0.3).g * 0.3 + texture2D(uNoise, uv * 8.1).b * 0.15;
    float c2 = texture2D(uNoise, uv + uSunDir.xz * 0.02).r * 0.55 + texture2D(uNoise, (uv + uSunDir.xz * 0.02) * 2.9 + 0.3).g * 0.3;
    float cov = smoothstep(0.78 - uCloud * 0.5, 1.0 - uCloud * 0.5, c);
    // 朝向太阳的一侧更亮，云底偏暗
    float lit = clamp(0.62 + (c - c2 / 0.85) * 3.0, 0.25, 1.0);
    vec3 cloudCol = mix(uHorizon * 0.55 + uTop * 0.2, vec3(1.0) * 0.92 + uSunColor * 0.25, lit);
    cloudCol += uSunColor * pow(sd, 10.0) * 0.6 * (1.0 - cov * 0.5);
    float fade = smoothstep(0.005, 0.2, d.y);
    col = mix(col, cloudCol, cov * fade * 0.92);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

const MTN_VERT = /* glsl */ `
varying vec3 vNrm;
varying vec3 vPos;
void main() {
  vNrm = normal;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const MTN_FRAG = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uHaze;
uniform vec3 uTop;
uniform vec3 uAmbient;
uniform float uSnowLine;
uniform sampler2D uNoise;
varying vec3 vNrm;
varying vec3 vPos;

void main() {
  vec4 nz = texture2D(uNoise, vPos.xz * 0.0021);
  // 用噪声扰动法线，给山体补上网格分辨率之外的沟壑
  vec4 nf = texture2D(uNoise, vPos.xz * 0.0075);
  vec3 n = normalize(vNrm + vec3(nf.g - 0.5, 0.0, nf.b - 0.5) * 0.9);
  vec4 nd = texture2D(uNoise, vPos.xz * 0.011);
  float slope = 1.0 - n.y;
  // 低处是林线以下的墨绿，往上是裸岩，再往上积雪
  vec3 forest = mix(vec3(0.05, 0.1, 0.06), vec3(0.12, 0.19, 0.09), nd.g);
  vec3 rock = mix(vec3(0.2, 0.19, 0.19), vec3(0.4, 0.37, 0.34), nd.r);
  float treeLine = smoothstep(90.0, 170.0, vPos.y + (nz.r - 0.5) * 80.0);
  vec3 col = mix(forest, rock, clamp(treeLine + smoothstep(0.35, 0.6, slope), 0.0, 1.0));
  float snow = smoothstep(uSnowLine, uSnowLine + 70.0, vPos.y + (nz.g - 0.5) * 110.0) * (1.0 - smoothstep(0.45, 0.75, slope + (nd.b - 0.5) * 0.3));
  col = mix(col, vec3(0.9, 0.93, 0.97), snow);

  float ndl = max(dot(n, uSunDir), 0.0);
  vec3 lit = col * (uAmbient + uSunColor * ndl);

  // 空气透视：越远、越低，越融进雾色
  float dist = length(vPos.xz);
  float haze = 1.0 - exp(-dist * 0.00075);
  // 山脚沉在谷底的雾气里
  float low = 1.0 - smoothstep(-55.0, 70.0, vPos.y + (nz.b - 0.5) * 40.0);
  haze = clamp(max(haze, low), 0.0, 1.0);
  // 远处的雾偏向天空的蓝
  vec3 hazeCol = mix(uHaze, uTop, 0.3 * (1.0 - low));
  vec3 outc = mix(lit, hazeCol, haze);
  gl_FragColor = vec4(outc, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

function buildMountainRing() {
  const SEG_A = 180;
  const SEG_R = 20;
  const R0 = 330;
  const R1 = 1700;
  const pos = new Float32Array((SEG_A + 1) * (SEG_R + 1) * 3);
  const idx = [];
  const heightAt = (x, z) => {
    const r = Math.sqrt(x * x + z * z);
    const t = Math.max(0, (r - R0) / (R1 - R0));
    // 内缘贴地，往外隆起成连绵的山脊，最外圈再回落
    const env = Math.pow(Math.sin(Math.min(1, t * 1.15) * Math.PI * 0.5), 1.3) * (1 - 0.35 * Math.max(0, t - 0.75) / 0.25);
    const ridge = ridged(x * 0.0016 + 4.2, z * 0.0016 + 1.7, 5);
    const big = fbm(x * 0.0006 + 9, z * 0.0006 + 2, 3);
    const crag = ridged(x * 0.006 + 1.1, z * 0.006 + 8.3, 3);
    return -60 + env * (60 + 600 * ridge * (0.3 + 0.95 * big) + 70 * crag * big);
  };
  let k = 0;
  for (let j = 0; j <= SEG_R; j++) {
    const tr = j / SEG_R;
    const r = R0 + (R1 - R0) * Math.pow(tr, 1.35);
    for (let i = 0; i <= SEG_A; i++) {
      const a = (i / SEG_A) * Math.PI * 2;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      pos[k++] = x;
      pos[k++] = heightAt(x, z);
      pos[k++] = z;
    }
  }
  for (let j = 0; j < SEG_R; j++) {
    for (let i = 0; i < SEG_A; i++) {
      const a = j * (SEG_A + 1) + i;
      const b = a + 1;
      const c = a + SEG_A + 1;
      const d = c + 1;
      idx.push(a, b, c, b, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export class Environment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.time = 0;
    const noise = getNoiseTexture();

    this.fogColor = new THREE.Color();
    scene.fog = new THREE.FogExp2(0xffffff, 0.004);

    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.sunColor = new THREE.Color();
    this.skyTop = new THREE.Color();

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    const cam = this.sun.shadow.camera;
    this.shadowHalf = 21;
    cam.left = -this.shadowHalf;
    cam.right = this.shadowHalf;
    cam.top = this.shadowHalf;
    cam.bottom = -this.shadowHalf;
    cam.near = 1;
    cam.far = 220;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.05;
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
    scene.add(this.hemi);

    this.skyUniforms = {
      uTop: { value: this.skyTop },
      uHorizon: { value: this.fogColor },
      uSunDir: { value: this.sunDir },
      uSunColor: { value: this.sunColor },
      uTime: { value: 0 },
      uCloud: { value: 0.5 },
      uNoise: { value: noise },
    };
    this.sky = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 16),
      new THREE.ShaderMaterial({
        uniforms: this.skyUniforms,
        vertexShader: SKY_VERT,
        fragmentShader: SKY_FRAG,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      })
    );
    this.sky.scale.setScalar(1500);
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    this.mtnSun = new THREE.Color();
    this.mtnAmbient = new THREE.Color();
    this.mtnUniforms = {
      uSunDir: { value: this.sunDir },
      uSunColor: { value: this.mtnSun },
      uHaze: { value: this.fogColor },
      uTop: { value: this.skyTop },
      uAmbient: { value: this.mtnAmbient },
      uSnowLine: { value: 260 },
      uNoise: { value: noise },
    };
    this.mountains = new THREE.Mesh(
      buildMountainRing(),
      new THREE.ShaderMaterial({ uniforms: this.mtnUniforms, vertexShader: MTN_VERT, fragmentShader: MTN_FRAG, fog: false })
    );
    this.mountains.frustumCulled = false;
    this.mountains.renderOrder = -5;
    scene.add(this.mountains);

    this._hs = new THREE.Color();
    this._hg = new THREE.Color();
    this._lightRight = new THREE.Vector3();
    this._lightUp = new THREE.Vector3();
    this._center = new THREE.Vector3();
  }

  // s: 赛程；focus: 阴影覆盖区域的中心；camera: 主相机
  update(dt, s, focus, camera) {
    this.time += dt;
    const { a, b, t } = stageKeyframe(s);
    const A = STAGES[a].atmo;
    const B = STAGES[b].atmo;

    const elev = lerp(A.elev, B.elev, t) * DEG;
    const az = lerp(A.az, B.az, t) * DEG;
    this.sunDir.set(Math.sin(az) * Math.cos(elev), Math.sin(elev), -Math.cos(az) * Math.cos(elev));

    mixArr(A.sun, B.sun, t, this.sunColor);
    // 天空与雾比地面亮得多（HDR），交给色调映射去压
    mixArr(A.top, B.top, t, this.skyTop).multiplyScalar(SKY_GAIN);
    mixArr(A.fog, B.fog, t, this.fogColor).multiplyScalar(SKY_GAIN);
    const sunI = lerp(A.sunI, B.sunI, t);

    this.scene.fog.color.copy(this.fogColor);
    this.scene.fog.density = lerp(A.fogD, B.fogD, t);

    this.sun.color.copy(this.sunColor);
    this.sun.intensity = sunI;
    this.hemi.color.copy(mixArr(A.hemiSky, B.hemiSky, t, this._hs));
    this.hemi.groundColor.copy(mixArr(A.hemiGround, B.hemiGround, t, this._hg));
    this.hemi.intensity = lerp(A.hemiI, B.hemiI, t);

    this.skyUniforms.uCloud.value = lerp(A.cloud, B.cloud, t);
    this.skyUniforms.uTime.value = this.time;
    this.mtnSun.copy(this.sunColor).multiplyScalar(sunI * 0.42);
    this.mtnAmbient.copy(this._hs).multiplyScalar(this.hemi.intensity * 0.42);

    // 阴影相机跟随焦点，并对齐到阴影贴图的像素格，避免移动时阴影闪烁
    const texel = (this.shadowHalf * 2) / this.sun.shadow.mapSize.x;
    this._lightRight.set(0, 1, 0).cross(this.sunDir).normalize();
    this._lightUp.copy(this.sunDir).cross(this._lightRight).normalize();
    const rx = Math.round(focus.dot(this._lightRight) / texel) * texel;
    const ry = Math.round(focus.dot(this._lightUp) / texel) * texel;
    const rz = focus.dot(this.sunDir);
    this._center.set(0, 0, 0).addScaledVector(this._lightRight, rx).addScaledVector(this._lightUp, ry).addScaledVector(this.sunDir, rz);
    this.sun.target.position.copy(this._center);
    this.sun.position.copy(this._center).addScaledVector(this.sunDir, 110);

    this.sky.position.copy(camera.position);
    this.mountains.position.set(camera.position.x, focus.y, camera.position.z);
  }

  setShadowQuality(size) {
    if (size <= 0) {
      this.sun.castShadow = false;
      return;
    }
    this.sun.castShadow = true;
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
  }
}
