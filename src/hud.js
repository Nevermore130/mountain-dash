// HUD 与界面：用 2D 离屏画布绘制，再作为贴图叠在 3D 画面之上
// 所有布局都在"设计坐标"里完成：宽度固定 390，纵向按屏幕比例延伸
import * as THREE from 'three';
import { createCanvas } from './platform.js';
import { STAGES, RACE_LENGTH, RIVALS, PLAYER } from './config.js';

const DW = 390;
const ORANGE = '#ff6a13';
const FONT = '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif';

export function formatTime(t) {
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  const ss = Math.floor(s);
  const cs = Math.floor((s - ss) * 100);
  return `${m < 10 ? '0' : ''}${m}:${ss < 10 ? '0' : ''}${ss}.${cs < 10 ? '0' : ''}${cs}`;
}

export function formatPace(speed) {
  if (!(speed > 0.8)) return `-'--"`;
  const sec = Math.round(1000 / speed);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}'${s < 10 ? '0' : ''}${s}"`;
}

function font(size, { bold = true, italic = false } = {}) {
  return `${italic ? 'italic ' : ''}${bold ? 'bold ' : ''}${size}px ${FONT}`;
}

function text(c, str, x, y, size, opt = {}) {
  c.font = font(size, opt);
  c.textAlign = opt.align || 'left';
  c.textBaseline = opt.baseline || 'middle';
  if (opt.shadow !== false) {
    c.fillStyle = opt.shadowColor || 'rgba(0,0,0,0.55)';
    const o = Math.max(1, size * 0.045);
    c.fillText(str, x + o * 0.6, y + o);
  }
  c.fillStyle = opt.color || '#ffffff';
  c.fillText(str, x, y);
}

function rrect(c, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + rr, y);
  c.lineTo(x + w - rr, y);
  c.arcTo(x + w, y, x + w, y + rr, rr);
  c.lineTo(x + w, y + h - rr);
  c.arcTo(x + w, y + h, x + w - rr, y + h, rr);
  c.lineTo(x + rr, y + h);
  c.arcTo(x, y + h, x, y + h - rr, rr);
  c.lineTo(x, y + rr);
  c.arcTo(x, y, x + rr, y, rr);
  c.closePath();
}

function bolt(c, x, y, s, color) {
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(x + 0.15 * s, y - 0.5 * s);
  c.lineTo(x - 0.3 * s, y + 0.08 * s);
  c.lineTo(x - 0.02 * s, y + 0.08 * s);
  c.lineTo(x - 0.15 * s, y + 0.5 * s);
  c.lineTo(x + 0.3 * s, y - 0.1 * s);
  c.lineTo(x + 0.02 * s, y - 0.1 * s);
  c.closePath();
  c.fill();
}

function arrow(c, x, y, dir, s, color) {
  c.save();
  c.translate(x, y);
  c.rotate({ up: 0, right: Math.PI / 2, down: Math.PI, left: -Math.PI / 2 }[dir]);
  c.strokeStyle = color;
  c.lineWidth = s * 0.16;
  c.lineCap = 'round';
  c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(0, s * 0.42);
  c.lineTo(0, -s * 0.42);
  c.moveTo(-s * 0.3, -s * 0.1);
  c.lineTo(0, -s * 0.42);
  c.lineTo(s * 0.3, -s * 0.1);
  c.stroke();
  c.restore();
}

class Layer {
  constructor(hud, x, y, w, h) {
    this.hud = hud;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    const k = hud.u * hud.density;
    this.canvas = createCanvas(Math.max(2, Math.round(w * k)), Math.max(2, Math.round(h * k)));
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.NoColorSpace;
    this.texture.generateMipmaps = false;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.uniforms = { map: { value: this.texture }, opacity: { value: 1 } };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform sampler2D map; uniform float opacity; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); gl_FragColor = vec4(c.rgb, c.a * opacity); }',
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(hud.quad, this.material);
    this.mesh.frustumCulled = false;
    this.place(1);
    hud.scene.add(this.mesh);
  }

  place(scale) {
    const u = this.hud.u;
    this.mesh.scale.set(this.w * u * scale, this.h * u * scale, 1);
    this.mesh.position.set((this.x + this.w / 2) * u, this.hud.H - (this.y + this.h / 2) * u, 0);
  }

  // 返回已变换到设计坐标系的 2D 上下文
  begin() {
    const c = this.ctx;
    const k = this.hud.u * this.hud.density;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    c.setTransform(k, 0, 0, k, -this.x * k, -this.y * k);
    return c;
  }

  end() {
    this.texture.needsUpdate = true;
  }

  dispose() {
    this.hud.scene.remove(this.mesh);
    this.texture.dispose();
    this.material.dispose();
  }
}

const VIGNETTE_FRAG = /* glsl */ `
uniform vec3 uColor;
uniform float uStrength;
uniform float uBase;
varying vec2 vUv;
void main() {
  vec2 p = vUv - 0.5;
  float r = length(p * vec2(1.0, 1.25)) * 1.6;
  float v = smoothstep(0.55, 1.25, r);
  // 常驻的暗角是黑色，受击 / 力竭时叠加彩色
  vec3 col = mix(vec3(0.0), uColor, clamp(uStrength / max(0.001, uStrength + uBase), 0.0, 1.0));
  gl_FragColor = vec4(col, v * clamp(uBase + uStrength, 0.0, 1.0));
}`;

export class Hud {
  constructor(screen) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
    this.quad = new THREE.PlaneGeometry(1, 1);
    this.layers = null;
    this.buttons = []; // 当前界面上的按钮（设计坐标）
    this.hudButtons = []; // 比赛中常驻的按钮
    this.soundOn = true;
    this.toastT = 0;
    this.toastDur = 0;
    this.toastPop = 0;
    this._topAcc = 0;
    this._bottomKey = '';
    this._midKey = '';
    this.screenMode = '';

    this.vignetteUniforms = { uColor: { value: new THREE.Color(0.8, 0.05, 0.02) }, uStrength: { value: 0 }, uBase: { value: 0.3 } };
    this.vignette = new THREE.Mesh(
      this.quad,
      new THREE.ShaderMaterial({
        uniforms: this.vignetteUniforms,
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: VIGNETTE_FRAG,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      })
    );
    this.vignette.frustumCulled = false;
    this.vignette.renderOrder = -1;
    this.scene.add(this.vignette);

    this.resize(screen);
  }

  resize(screen) {
    this.W = screen.width;
    this.H = screen.height;
    this.u = this.W / DW;
    this.Hd = this.H / this.u;
    this.density = Math.min(screen.pixelRatio, 2);
    const menuBottom = screen.menu ? screen.menu.bottom : 0;
    const menuTop = screen.menu ? screen.menu.top : screen.safeTop;
    // 顶部一排按钮与微信右上角胶囊对齐
    this.T = Math.max(8, menuTop / this.u);
    this.menuLeft = screen.menu ? screen.menu.left / this.u : DW;
    this.rowH = screen.menu ? (menuBottom - menuTop) / this.u : 32;

    this.camera.left = 0;
    this.camera.right = this.W;
    this.camera.top = this.H;
    this.camera.bottom = 0;
    this.camera.updateProjectionMatrix();
    this.vignette.scale.set(this.W, this.H, 1);
    this.vignette.position.set(this.W / 2, this.H / 2, 0);

    if (this.layers) for (const k in this.layers) this.layers[k].dispose();
    this.topH = this.T + this.rowH + 134;
    const bottomH = 176;
    this.layers = {
      top: new Layer(this, 0, 0, DW, this.topH),
      mid: new Layer(this, 0, this.topH, DW, 236),
      toast: new Layer(this, 0, this.topH + 64, DW, 170),
      bottom: new Layer(this, 0, this.Hd - bottomH, DW, bottomH),
      screen: new Layer(this, 0, 0, DW, this.Hd),
    };
    this.layers.top.mesh.renderOrder = 1;
    this.layers.mid.mesh.renderOrder = 2;
    this.layers.bottom.mesh.renderOrder = 3;
    this.layers.toast.mesh.renderOrder = 4;
    this.layers.screen.mesh.renderOrder = 5;
    this.layers.toast.uniforms.opacity.value = 0;
    this._bottomKey = '';
    this._midKey = '';
    this._topAcc = 1;
    this.setRaceHudVisible(false);
  }

  setRaceHudVisible(v) {
    this.layers.top.mesh.visible = v;
    this.layers.mid.mesh.visible = v;
    this.layers.bottom.mesh.visible = v;
  }

  // 点击命中测试，返回按钮 id
  hitTest(px, py) {
    const x = px / this.u;
    const y = py / this.u;
    const pad = 6;
    const find = (list) => {
      for (const b of list) if (x >= b.x - pad && x <= b.x + b.w + pad && y >= b.y - pad && y <= b.y + b.h + pad) return b.id;
      return null;
    };
    if (this.screenMode) return find(this.buttons);
    return find(this.hudButtons);
  }

  // ---------------- 比赛 HUD ----------------

  updateRace(dt, d) {
    this._topAcc += dt;
    if (this._topAcc >= 1 / 15) {
      this._topAcc = 0;
      this._drawTop(d);
    }
    const bottomKey = `${Math.floor(d.distance)}|${d.gels}|${d.boost > 0 ? Math.ceil(d.boost * 4) : 0}|${d.stamina < 30 ? Math.floor(d.time * 3) % 2 : 0}|${d.rivals.map((r) => Math.floor(r / 8)).join(',')}`;
    if (bottomKey !== this._bottomKey) {
      this._bottomKey = bottomKey;
      this._drawBottom(d);
    }
    const midKey = `${d.stage}|${d.combo}`;
    if (midKey !== this._midKey) {
      this._midKey = midKey;
      this._drawMid(d);
    }
    this._animateToast(dt);
  }

  _drawTop(d) {
    const L = this.layers.top;
    const c = L.begin();
    const T = this.T;
    const g = c.createLinearGradient(0, 0, 0, L.h);
    g.addColorStop(0, 'rgba(8,10,12,0.66)');
    g.addColorStop(0.6, 'rgba(8,10,12,0.28)');
    g.addColorStop(1, 'rgba(8,10,12,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, DW, L.h);

    // 顶部一排：暂停 / 声音 / 标题
    const r = this.rowH / 2;
    const cy = T + r;
    const circle = (x) => {
      c.fillStyle = 'rgba(20,23,26,0.72)';
      c.beginPath();
      c.arc(x, cy, r, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = 'rgba(255,255,255,0.28)';
      c.lineWidth = 1;
      c.stroke();
    };
    const bx1 = 14 + r;
    circle(bx1);
    c.fillStyle = '#fff';
    c.fillRect(bx1 - 5, cy - 6, 3.4, 12);
    c.fillRect(bx1 + 1.6, cy - 6, 3.4, 12);
    const bx2 = bx1 + r * 2 + 10;
    circle(bx2);
    c.fillStyle = '#fff';
    c.beginPath();
    c.moveTo(bx2 - 7, cy - 3);
    c.lineTo(bx2 - 3, cy - 3);
    c.lineTo(bx2 + 1.5, cy - 7);
    c.lineTo(bx2 + 1.5, cy + 7);
    c.lineTo(bx2 - 3, cy + 3);
    c.lineTo(bx2 - 7, cy + 3);
    c.closePath();
    c.fill();
    c.strokeStyle = '#fff';
    c.lineWidth = 1.5;
    c.lineCap = 'round';
    c.beginPath();
    if (this.soundOn) {
      c.arc(bx2 + 2, cy, 4.5, -0.8, 0.8);
      c.stroke();
    } else {
      c.moveTo(bx2 + 4, cy - 3);
      c.lineTo(bx2 + 9, cy + 3);
      c.moveTo(bx2 + 9, cy - 3);
      c.lineTo(bx2 + 4, cy + 3);
      c.stroke();
    }
    this.hudButtons = [
      { id: 'pause', x: bx1 - r, y: T, w: r * 2, h: r * 2 },
      { id: 'sound', x: bx2 - r, y: T, w: r * 2, h: r * 2 },
      this._gelButton,
    ].filter(Boolean);
    const tx = bx2 + r + 12;
    text(c, '山野疾驰', tx, cy - 6, 14, { italic: true });
    text(c, 'MOUNTAIN DASH', tx, cy + 9, 7.5, { color: 'rgba(255,255,255,0.7)', shadow: false });

    // 计时
    const y0 = T + this.rowH;
    c.fillStyle = 'rgba(20,23,26,0.6)';
    rrect(c, DW / 2 - 22, y0 + 6, 44, 16, 3);
    c.fill();
    text(c, '时间', DW / 2, y0 + 14.5, 10, { align: 'center', bold: false, color: 'rgba(255,255,255,0.85)', shadow: false });
    text(c, formatTime(d.time), DW / 2 - 3, y0 + 52, 52, { align: 'center', italic: true });

    // 名次
    const ry = y0 + 94;
    c.font = font(26, { italic: true });
    const w1 = c.measureText(String(d.rank)).width;
    c.font = font(13);
    const w2 = c.measureText(`/${d.total}`).width;
    const rx = DW / 2 - (w1 + w2 + 2) / 2;
    text(c, String(d.rank), rx, ry, 26, { italic: true, color: ORANGE });
    text(c, `/${d.total}`, rx + w1 + 3, ry + 4, 13, { color: '#fff' });
    c.fillStyle = 'rgba(20,23,26,0.6)';
    c.font = font(10, { bold: false });
    const gw = c.measureText(d.gapText).width + 14;
    rrect(c, DW / 2 - gw / 2, ry + 15, gw, 17, 3);
    c.fill();
    text(c, d.gapText, DW / 2, ry + 23.5, 10, { align: 'center', bold: false, shadow: false });

    // 配速
    text(c, '游戏配速', 16, y0 + 84, 10.5, { bold: false, color: 'rgba(255,255,255,0.86)' });
    const pace = formatPace(d.speed);
    text(c, pace, 14, y0 + 109, 27, { italic: true });
    c.font = font(27, { italic: true });
    const pw = c.measureText(pace).width;
    text(c, '/km', 14 + pw + 6, y0 + 114, 10.5, { bold: false, color: 'rgba(255,255,255,0.86)' });

    // 体力
    const low = d.stamina < 30;
    text(c, `${Math.round(d.stamina)}%`, 376, y0 + 84, 16, { align: 'right', color: low ? '#ff4b3a' : '#fff' });
    c.font = font(16);
    const sw = c.measureText(`${Math.round(d.stamina)}%`).width;
    text(c, '体力', 376 - sw - 8, y0 + 85, 10.5, { align: 'right', bold: false, color: 'rgba(255,255,255,0.86)' });
    const segs = 8;
    const bw = 13;
    const gap = 2.4;
    const bx = 376 - segs * (bw + gap) + gap;
    const by = y0 + 99;
    for (let i = 0; i < segs; i++) {
      const fill = Math.max(0, Math.min(1, (d.stamina / 100) * segs - i));
      const x = bx + i * (bw + gap);
      const para = (w) => {
        c.beginPath();
        c.moveTo(x + 4, by);
        c.lineTo(x + 4 + w, by);
        c.lineTo(x + w, by + 12);
        c.lineTo(x, by + 12);
        c.closePath();
      };
      c.fillStyle = 'rgba(15,17,19,0.72)';
      para(bw);
      c.fill();
      if (fill > 0.02) {
        c.fillStyle = low ? '#ff4b3a' : d.boost > 0 ? '#ffc247' : ORANGE;
        para(bw * fill);
        c.fill();
      }
    }
    L.end();
  }

  _drawMid(d) {
    const L = this.layers.mid;
    const c = L.begin();
    const y0 = this.topH;
    // 赛段列表
    const x = 26;
    for (let i = 0; i < STAGES.length; i++) {
      const cy = y0 + 22 + i * 33;
      if (i < STAGES.length - 1) {
        c.strokeStyle = i < d.stage ? 'rgba(255,106,19,0.8)' : 'rgba(255,255,255,0.3)';
        c.lineWidth = 1.5;
        c.beginPath();
        c.moveTo(x, cy + 10);
        c.lineTo(x, cy + 23);
        c.stroke();
      }
      const label = `0${i + 1}`;
      if (i === d.stage) {
        c.fillStyle = ORANGE;
        rrect(c, x - 12, cy - 11, 24, 22, 4);
        c.fill();
        text(c, label, x, cy + 0.5, 11, { align: 'center', shadow: false });
        c.font = font(12);
        const w = c.measureText(STAGES[i].name).width + 18;
        c.fillStyle = ORANGE;
        c.beginPath();
        c.moveTo(x + 17, cy - 11);
        c.lineTo(x + 17 + w + 5, cy - 11);
        c.lineTo(x + 17 + w, cy + 11);
        c.lineTo(x + 17, cy + 11);
        c.closePath();
        c.fill();
        text(c, STAGES[i].name, x + 25, cy + 0.5, 12, { shadow: false });
      } else {
        c.fillStyle = i < d.stage ? 'rgba(255,106,19,0.85)' : 'rgba(16,18,20,0.72)';
        c.beginPath();
        c.arc(x, cy, 10, 0, Math.PI * 2);
        c.fill();
        c.strokeStyle = 'rgba(255,255,255,0.35)';
        c.lineWidth = 1;
        c.stroke();
        text(c, label, x, cy + 0.5, 9.5, { align: 'center', bold: false, shadow: false, color: i < d.stage ? '#fff' : 'rgba(255,255,255,0.8)' });
      }
    }
    // 连续闪避
    if (d.combo >= 2) {
      text(c, '连续闪避', 376, y0 + 24, 11.5, { align: 'right', bold: false });
      text(c, String(d.combo), 374, y0 + 54, 40, { align: 'right', italic: true });
      c.fillStyle = ORANGE;
      c.fillRect(326, y0 + 77, 50, 2.5);
      const bonus = Math.round(Math.min(PLAYER.comboSpeedMax, d.combo * PLAYER.comboSpeedStep) * 100);
      if (bonus > 0) text(c, `速度 +${bonus}%`, 376, y0 + 92, 11, { align: 'right', color: '#ffc59c' });
    }
    L.end();
  }

  _drawBottom(d) {
    const L = this.layers.bottom;
    const c = L.begin();
    const y0 = this.Hd - L.h;
    const g = c.createLinearGradient(0, y0, 0, this.Hd);
    g.addColorStop(0, 'rgba(8,10,12,0)');
    g.addColorStop(0.55, 'rgba(8,10,12,0.26)');
    g.addColorStop(1, 'rgba(8,10,12,0.62)');
    c.fillStyle = g;
    c.fillRect(0, y0, DW, L.h);

    // 能量胶按钮
    const bw = 176;
    const bh = 54;
    const bx = DW / 2 - bw / 2;
    const by = y0 + 34;
    const has = d.gels > 0;
    const pulse = has && d.stamina < 30 && Math.floor(d.time * 3) % 2 === 0;
    c.fillStyle = pulse ? 'rgba(255,106,19,0.92)' : 'rgba(16,18,20,0.82)';
    rrect(c, bx, by, bw, bh, 12);
    c.fill();
    c.strokeStyle = has ? ORANGE : 'rgba(255,255,255,0.22)';
    c.lineWidth = has ? 2 : 1;
    c.stroke();
    bolt(c, bx + 30, by + bh / 2, 26, has ? (pulse ? '#fff' : ORANGE) : 'rgba(255,255,255,0.35)');
    text(c, `能量胶 ${d.gels}/${PLAYER.maxGels}`, bx + 52, by + 20, 15, { color: has ? '#fff' : 'rgba(255,255,255,0.55)', shadow: false });
    const sub = d.boost > 0 ? '加速中…' : has ? `点击使用 · 体力 +${PLAYER.gelStamina}%` : '沿途选线拾取';
    text(c, sub, bx + 52, by + 38, 10, { bold: false, color: has ? (pulse ? '#fff' : '#ffc59c') : 'rgba(255,255,255,0.5)', shadow: false });
    if (d.boost > 0) {
      c.fillStyle = '#ffc247';
      rrect(c, bx + 10, by + bh - 6, (bw - 20) * Math.min(1, d.boost / PLAYER.gelBoostTime), 3, 1.5);
      c.fill();
    }
    this._gelButton = { id: 'gel', x: bx, y: by, w: bw, h: bh };

    // 进度条
    const py = y0 + 124;
    const dist = Math.min(RACE_LENGTH, Math.floor(d.distance));
    text(c, String(dist), 16, py, 22, { italic: true });
    c.font = font(22, { italic: true });
    const dw = c.measureText(String(dist)).width;
    text(c, `/ ${RACE_LENGTH} m`, 16 + dw + 7, py + 3, 11, { bold: false, color: 'rgba(255,255,255,0.8)' });
    const x0 = 16 + dw + 7 + 62;
    const x1 = 350;
    c.fillStyle = 'rgba(255,255,255,0.22)';
    rrect(c, x0, py - 2, x1 - x0, 4, 2);
    c.fill();
    const frac = Math.max(0, Math.min(1, d.distance / RACE_LENGTH));
    c.fillStyle = ORANGE;
    rrect(c, x0, py - 2, Math.max(4, (x1 - x0) * frac), 4, 2);
    c.fill();
    // 赛段分隔
    c.fillStyle = 'rgba(255,255,255,0.5)';
    for (let i = 1; i < STAGES.length; i++) c.fillRect(x0 + ((x1 - x0) * STAGES[i].from) / RACE_LENGTH - 0.5, py - 4, 1, 8);
    // 对手位置
    d.rivals.forEach((rs, i) => {
      const f = Math.max(0, Math.min(1, rs / RACE_LENGTH));
      c.fillStyle = '#' + RIVALS[i].shirt.toString(16).padStart(6, '0');
      c.beginPath();
      c.arc(x0 + (x1 - x0) * f, py, 3.6, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = 'rgba(0,0,0,0.6)';
      c.lineWidth = 1;
      c.stroke();
    });
    c.fillStyle = ORANGE;
    c.beginPath();
    c.arc(x0 + (x1 - x0) * frac, py, 6, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = '#fff';
    c.lineWidth = 2;
    c.stroke();
    // 终点旗
    c.strokeStyle = '#fff';
    c.lineWidth = 1.6;
    c.beginPath();
    c.moveTo(362, py + 8);
    c.lineTo(362, py - 9);
    c.stroke();
    c.fillStyle = '#fff';
    c.beginPath();
    c.moveTo(362, py - 9);
    c.lineTo(374, py - 5);
    c.lineTo(362, py - 1);
    c.closePath();
    c.fill();
    L.end();
  }

  // ---------------- 提示文字 ----------------

  toast(main, sub = '', opt = {}) {
    const L = this.layers.toast;
    const c = L.begin();
    const cy = L.y + L.h / 2;
    const size = opt.size || 30;
    const color = opt.color || '#ffffff';
    if (opt.tag) {
      c.font = font(13);
      const w = c.measureText(opt.tag).width + 20;
      c.fillStyle = ORANGE;
      rrect(c, DW / 2 - w / 2, cy - size * 0.5 - 30, w, 22, 4);
      c.fill();
      text(c, opt.tag, DW / 2, cy - size * 0.5 - 18.5, 13, { align: 'center', shadow: false });
    }
    text(c, main, DW / 2, cy - (sub ? 8 : 0), size, { align: 'center', italic: true, color, shadowColor: 'rgba(0,0,0,0.7)' });
    if (sub) text(c, sub, DW / 2, cy + size * 0.5 + 10, 14, { align: 'center', bold: true, color: 'rgba(255,255,255,0.95)', shadowColor: 'rgba(0,0,0,0.7)' });
    L.end();
    this.toastDur = opt.duration || 1.3;
    this.toastT = this.toastDur;
    this.toastPop = 1;
  }

  clearToast() {
    this.toastT = 0;
    this.layers.toast.uniforms.opacity.value = 0;
  }

  _animateToast(dt) {
    const L = this.layers.toast;
    if (this.toastT <= 0) {
      L.uniforms.opacity.value = 0;
      L.mesh.visible = false;
      return;
    }
    L.mesh.visible = true;
    this.toastT -= dt;
    this.toastPop = Math.max(0, this.toastPop - dt * 6);
    const fadeOut = Math.min(1, this.toastT / 0.25);
    L.uniforms.opacity.value = Math.max(0, fadeOut);
    L.place(1 + this.toastPop * 0.35);
  }

  updateToastOnly(dt) {
    this._animateToast(dt);
  }

  // ---------------- 暗角 / 受击闪红 ----------------

  setVignette(strength, r, g, b) {
    this.vignetteUniforms.uStrength.value = strength;
    this.vignetteUniforms.uColor.value.setRGB(r, g, b);
  }

  // ---------------- 全屏界面 ----------------

  _button(c, id, label, x, y, w, h, primary) {
    if (primary) {
      const g = c.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, '#ff8a2b');
      g.addColorStop(1, '#f2590c');
      c.fillStyle = g;
      rrect(c, x, y, w, h, h / 2);
      c.fill();
      text(c, label, x + w / 2, y + h / 2 + 0.5, 19, { align: 'center', italic: true, color: '#fff', shadowColor: 'rgba(120,40,0,0.5)' });
    } else {
      c.fillStyle = 'rgba(18,20,23,0.7)';
      rrect(c, x, y, w, h, h / 2);
      c.fill();
      c.strokeStyle = 'rgba(255,255,255,0.4)';
      c.lineWidth = 1.2;
      c.stroke();
      text(c, label, x + w / 2, y + h / 2 + 0.5, 15, { align: 'center', color: '#fff', shadow: false });
    }
    this.buttons.push({ id, x, y, w, h });
  }

  hideScreen() {
    this.screenMode = '';
    this.buttons = [];
    this.layers.screen.mesh.visible = false;
  }

  showTitle(best) {
    this.screenMode = 'title';
    this.buttons = [];
    const L = this.layers.screen;
    L.mesh.visible = true;
    const c = L.begin();
    const Hd = this.Hd;
    let g = c.createLinearGradient(0, 0, 0, Hd * 0.42);
    g.addColorStop(0, 'rgba(8,10,12,0.8)');
    g.addColorStop(1, 'rgba(8,10,12,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, DW, Hd * 0.42);
    g = c.createLinearGradient(0, Hd * 0.5, 0, Hd);
    g.addColorStop(0, 'rgba(8,10,12,0)');
    g.addColorStop(0.5, 'rgba(8,10,12,0.66)');
    g.addColorStop(1, 'rgba(8,10,12,0.92)');
    c.fillStyle = g;
    c.fillRect(0, Hd * 0.5, DW, Hd * 0.5);

    const ty = this.T + this.rowH + 58;
    c.fillStyle = ORANGE;
    c.beginPath();
    c.moveTo(34, ty + 34);
    c.lineTo(46, ty + 34);
    c.lineTo(62, ty - 30);
    c.lineTo(50, ty - 30);
    c.closePath();
    c.fill();
    text(c, '山野疾驰', 68, ty, 58, { italic: true });
    text(c, 'M O U N T A I N   D A S H', 70, ty + 44, 13, { color: 'rgba(255,255,255,0.86)' });
    text(c, '2000 米山径 · 6 个赛段 · 3 位对手', 70, ty + 70, 13.5, { bold: false, color: 'rgba(255,255,255,0.92)' });
    const bestText = best ? `个人最佳  ${formatTime(best)}` : '还没有完赛记录';
    c.font = font(12.5);
    const bwid = c.measureText(bestText).width + 24;
    c.fillStyle = 'rgba(16,18,20,0.7)';
    rrect(c, 68, ty + 88, bwid, 26, 5);
    c.fill();
    c.strokeStyle = 'rgba(255,106,19,0.8)';
    c.lineWidth = 1;
    c.stroke();
    text(c, bestText, 80, ty + 101.5, 12.5, { color: best ? '#ffd9bf' : 'rgba(255,255,255,0.7)', shadow: false });

    // 操作说明
    const cy = Hd - 262;
    const items = [
      ['left', '左滑', '向左变道'],
      ['right', '右滑', '向右变道'],
      ['up', '上滑', '跳过倒木'],
      ['down', '下滑', '滑铲钻过'],
    ];
    items.forEach(([dir, a, b], i) => {
      const x = 54 + i * 94;
      c.fillStyle = 'rgba(16,18,20,0.66)';
      c.beginPath();
      c.arc(x, cy, 23, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = 'rgba(255,255,255,0.3)';
      c.lineWidth = 1;
      c.stroke();
      arrow(c, x, cy, dir, 24, ORANGE);
      text(c, a, x, cy + 40, 14, { align: 'center' });
      text(c, b, x, cy + 58, 10.5, { align: 'center', bold: false, color: 'rgba(255,255,255,0.78)' });
    });
    text(c, '撞到障碍会掉体力 · 体力耗尽即退赛 · 拾取能量胶补充', DW / 2, Hd - 176, 11, { align: 'center', bold: false, color: 'rgba(255,255,255,0.78)' });

    this._button(c, 'start', '开 始 比 赛', 45, Hd - 146, 300, 58, true);
    text(c, '点击按钮开始 · 建议打开声音', DW / 2, Hd - 62, 10.5, { align: 'center', bold: false, color: 'rgba(255,255,255,0.55)', shadow: false });
    L.end();
  }

  showPause() {
    this.screenMode = 'pause';
    this.buttons = [];
    const L = this.layers.screen;
    L.mesh.visible = true;
    const c = L.begin();
    const Hd = this.Hd;
    c.fillStyle = 'rgba(8,10,12,0.66)';
    c.fillRect(0, 0, DW, Hd);
    const cy = Hd * 0.4;
    text(c, '已暂停', DW / 2, cy - 30, 44, { align: 'center', italic: true });
    text(c, '喘口气，山还在那里', DW / 2, cy + 16, 13, { align: 'center', bold: false, color: 'rgba(255,255,255,0.8)' });
    this._button(c, 'resume', '继 续 比 赛', 65, cy + 60, 260, 54, true);
    this._button(c, 'restart', '重新开始', 65, cy + 130, 260, 46, false);
    this._button(c, 'home', '返回首页', 65, cy + 190, 260, 46, false);
    L.end();
  }

  /**
   * @param r { finished, time, rank, total, avgSpeed, bestCombo, hits, distance, best, isRecord, standings: [{name, text, me}] }
   */
  showResult(r) {
    this.screenMode = 'result';
    this.buttons = [];
    const L = this.layers.screen;
    L.mesh.visible = true;
    const c = L.begin();
    const Hd = this.Hd;
    c.fillStyle = 'rgba(8,10,12,0.6)';
    c.fillRect(0, 0, DW, Hd);

    const cw = 334;
    const ch = 500;
    const cx0 = (DW - cw) / 2;
    const cy0 = Math.max(this.T + this.rowH + 16, (Hd - ch) / 2 - 10);
    c.fillStyle = 'rgba(18,20,23,0.94)';
    rrect(c, cx0, cy0, cw, ch, 18);
    c.fill();
    c.strokeStyle = 'rgba(255,255,255,0.12)';
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = ORANGE;
    rrect(c, cx0 + 24, cy0, 64, 5, 2);
    c.fill();

    const lx = cx0 + 24;
    const rxx = cx0 + cw - 24;
    if (r.finished) {
      text(c, r.rank === 1 ? '跑山之王' : '顺利完赛', lx, cy0 + 44, 30, { italic: true, shadow: false });
      text(c, r.rank === 1 ? '第一个冲过终点线' : '翻过了六道山梁', lx, cy0 + 72, 12, { bold: false, color: 'rgba(255,255,255,0.7)', shadow: false });
      text(c, `${r.rank}`, rxx - 22, cy0 + 50, 58, { align: 'right', italic: true, color: r.rank === 1 ? '#ffc247' : ORANGE, shadow: false });
      text(c, `/${r.total}`, rxx, cy0 + 62, 16, { align: 'right', color: 'rgba(255,255,255,0.8)', shadow: false });
    } else {
      text(c, '体力耗尽', lx, cy0 + 44, 30, { italic: true, shadow: false, color: '#ff6b5a' });
      text(c, `止步 ${Math.floor(r.distance)} m · ${STAGES[r.stage].name}`, lx, cy0 + 72, 12, { bold: false, color: 'rgba(255,255,255,0.7)', shadow: false });
      text(c, 'DNF', rxx, cy0 + 50, 34, { align: 'right', italic: true, color: 'rgba(255,255,255,0.35)', shadow: false });
    }

    // 用时
    const ty = cy0 + 104;
    c.fillStyle = 'rgba(255,255,255,0.06)';
    rrect(c, lx, ty, cw - 48, 70, 10);
    c.fill();
    text(c, r.finished ? '完赛用时' : '已用时间', lx + 14, ty + 18, 11, { bold: false, color: 'rgba(255,255,255,0.65)', shadow: false });
    text(c, formatTime(r.time), lx + 12, ty + 46, 34, { italic: true, shadow: false });
    if (r.isRecord) {
      c.fillStyle = ORANGE;
      rrect(c, rxx - 86, ty + 34, 72, 22, 4);
      c.fill();
      text(c, '新纪录', rxx - 50, ty + 45.5, 12, { align: 'center', shadow: false });
    } else if (r.best) {
      text(c, '个人最佳', rxx - 14, ty + 18, 11, { align: 'right', bold: false, color: 'rgba(255,255,255,0.65)', shadow: false });
      text(c, formatTime(r.best), rxx - 14, ty + 47, 17, { align: 'right', italic: true, color: 'rgba(255,255,255,0.85)', shadow: false });
    }

    // 三项数据
    const sy = ty + 86;
    const stats = [
      ['平均配速', `${formatPace(r.avgSpeed)}/km`],
      ['最高连续闪避', String(r.bestCombo)],
      ['撞到障碍', `${r.hits} 次`],
    ];
    const colW = (cw - 48) / 3;
    stats.forEach(([k, v], i) => {
      const x = lx + colW * i;
      text(c, k, x + 2, sy + 10, 10.5, { bold: false, color: 'rgba(255,255,255,0.6)', shadow: false });
      text(c, v, x + 2, sy + 33, 17, { italic: true, shadow: false });
    });

    // 排名
    const py0 = sy + 62;
    c.fillStyle = 'rgba(255,255,255,0.1)';
    c.fillRect(lx, py0 - 8, cw - 48, 1);
    r.standings.forEach((row, i) => {
      const y = py0 + 12 + i * 27;
      if (row.me) {
        c.fillStyle = 'rgba(255,106,19,0.16)';
        rrect(c, lx - 6, y - 12, cw - 36, 24, 5);
        c.fill();
      }
      text(c, String(i + 1), lx + 4, y, 14, { italic: true, color: row.me ? ORANGE : 'rgba(255,255,255,0.55)', shadow: false });
      c.fillStyle = row.color;
      c.beginPath();
      c.arc(lx + 30, y, 4.5, 0, Math.PI * 2);
      c.fill();
      text(c, row.name, lx + 44, y, 13.5, { bold: row.me, shadow: false });
      text(c, row.text, rxx, y, 12.5, { align: 'right', bold: false, color: 'rgba(255,255,255,0.8)', shadow: false });
    });

    const byy = cy0 + ch - 122;
    this._button(c, 'restart', '再 跑 一 次', cx0 + 24, byy, cw - 48, 52, true);
    this._button(c, 'home', '返回首页', cx0 + 24, byy + 62, cw - 48, 42, false);
    L.end();
  }
}
