// 扬尘粒子：脚步、落地、撞击时扬起的尘土
import * as THREE from 'three';

const MAX = 90;

const VERT = /* glsl */ `
attribute float aSize;
attribute float aAlpha;
uniform float uScale;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
}`;

const FRAG = /* glsl */ `
uniform vec3 uColor;
varying float vAlpha;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float r = length(p) * 2.0;
  float a = smoothstep(1.0, 0.15, r) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class Dust {
  constructor(scene) {
    this.pos = new Float32Array(MAX * 3);
    this.size = new Float32Array(MAX);
    this.alpha = new Float32Array(MAX);
    this.vel = new Float32Array(MAX * 3);
    this.life = new Float32Array(MAX);
    this.maxLife = new Float32Array(MAX);
    this.baseSize = new Float32Array(MAX);
    this.cursor = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.uniforms = { uColor: { value: new THREE.Color(0.55, 0.47, 0.36) }, uScale: { value: 600 } };
    this.points = new THREE.Points(
      g,
      new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, fog: false })
    );
    this.points.frustumCulled = false;
    this.points.renderOrder = 3;
    scene.add(this.points);
  }

  // 让尘土颜色跟着环境光变化
  setTint(fogColor, sunColor) {
    this.uniforms.uColor.value.setRGB(0.5, 0.42, 0.32).lerp(fogColor, 0.35).multiply(sunColor).multiplyScalar(1.5);
  }

  setViewport(heightPx, fovDeg) {
    this.uniforms.uScale.value = heightPx / (2 * Math.tan((fovDeg * Math.PI) / 360));
  }

  emit(x, y, z, count, spread = 0.25, power = 1) {
    for (let n = 0; n < count; n++) {
      const i = this.cursor;
      this.cursor = (this.cursor + 1) % MAX;
      this.pos[i * 3] = x + (Math.random() - 0.5) * spread;
      this.pos[i * 3 + 1] = y + Math.random() * 0.1;
      this.pos[i * 3 + 2] = z + (Math.random() - 0.5) * spread;
      this.vel[i * 3] = (Math.random() - 0.5) * 1.2 * power;
      this.vel[i * 3 + 1] = (0.4 + Math.random() * 0.9) * power;
      this.vel[i * 3 + 2] = (Math.random() - 0.5) * 1.2 * power + 1.5;
      this.maxLife[i] = this.life[i] = 0.45 + Math.random() * 0.5;
      this.baseSize[i] = (0.25 + Math.random() * 0.35) * (0.7 + power * 0.3);
    }
  }

  update(dt) {
    for (let i = 0; i < MAX; i++) {
      if (this.life[i] <= 0) {
        this.alpha[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      const t = 1 - Math.max(0, this.life[i]) / this.maxLife[i];
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.vel[i * 3 + 1] -= 1.2 * dt;
      this.size[i] = this.baseSize[i] * (0.6 + t * 1.8);
      this.alpha[i] = 0.34 * (1 - t) * Math.min(1, t * 8);
    }
    const a = this.points.geometry.attributes;
    a.position.needsUpdate = true;
    a.aSize.needsUpdate = true;
    a.aAlpha.needsUpdate = true;
  }
}
