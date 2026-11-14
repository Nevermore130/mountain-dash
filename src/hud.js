// HUD 与界面：用 2D 离屏画布绘制，再作为贴图叠在 3D 画面之上
// 所有布局都在"设计坐标"里完成：宽度固定 390，纵向按屏幕比例延伸
import * as THREE from 'three';
import { createCanvas, getSharedCanvas } from './platform.js';
import { STAGES, RACE_LENGTH, ACTIVE_RIVALS, PLAYER, ENERGY } from './config.js';
import { formatTime, formatPace } from './format.js';
import { showFriendBoard, hideFriendBoard, weekBest } from './social.js';
import { energyInfo } from './energy.js';

// 体力值用完后，按钮和说明里怎么称呼"再来一局"的办法
const REFILL = ENERGY.refill === 'ad' ? '看视频' : '邀请好友';

const DW = 390;
const ORANGE = '#ff6a13';
const WATER = '#5cc4ff';
const POLE = '#8fe87a';
// 首页底部的素材署名
const CREDITS = [
  '人物与动画：Quaternius（CC0） · 太阳镜：iPoly3D（CC0）',
  '帽子：“Baseball cap” by jeremy，CC BY 3.0，已改色',
  '来源 poly.pizza/m/dzfCdDABuiQ · 许可 creativecommons.org/licenses/by/3.0',
];
const FONT = '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif';

export { formatTime, formatPace };

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

// 水滴（高 s）
function drop(c, x, y, s) {
  c.beginPath();
  c.moveTo(x, y - s * 0.56);
  c.bezierCurveTo(x + s * 0.12, y - s * 0.3, x + s * 0.36, y - s * 0.02, x + s * 0.36, y + s * 0.16);
  c.bezierCurveTo(x + s * 0.36, y + s * 0.5, x - s * 0.36, y + s * 0.5, x - s * 0.36, y + s * 0.16);
  c.bezierCurveTo(x - s * 0.36, y - s * 0.02, x - s * 0.12, y - s * 0.3, x, y - s * 0.56);
  c.closePath();
}

// 一副交叉的登山杖（高 s）
function crossedPoles(c, x, y, s, color) {
  c.strokeStyle = color;
  c.fillStyle = color;
  c.lineCap = 'round';
  for (const side of [-1, 1]) {
    c.lineWidth = s * 0.09;
    c.beginPath();
    c.moveTo(x + side * s * 0.3, y - s * 0.5);
    c.lineTo(x - side * s * 0.3, y + s * 0.5);
    c.stroke();
    // 握把
    c.lineWidth = s * 0.17;
    c.beginPath();
    c.moveTo(x + side * s * 0.3, y - s * 0.5);
    c.lineTo(x + side * s * 0.21, y - s * 0.35);
    c.stroke();
    // 杖尖的雪托
    c.lineWidth = s * 0.07;
    c.beginPath();
    c.moveTo(x - side * s * 0.33, y + s * 0.3);
    c.lineTo(x - side * s * 0.13, y + s * 0.42);
    c.stroke();
  }
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

// 好友排行榜：内容由开放数据域画在共享画布上，这里只负责把那张画布当贴图摆到界面里
class BoardLayer {
  constructor(hud) {
    this.hud = hud;
    this.canvas = getSharedCanvas();
    this.texture = null;
    this.uniforms = { map: { value: null }, opacity: { value: 1 } };
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
    this.mesh.renderOrder = 6;
    this.mesh.visible = false;
    hud.scene.add(this.mesh);
    this.acc = 0;
  }

  // 把榜单摆到设计坐标 (x, y, w, h)；返回开放数据域绘制时要用的尺寸，当前环境没有开放数据域时返回 null
  show(x, y, w, h) {
    if (!this.canvas) return null;
    const hud = this.hud;
    const k = hud.u * hud.density;
    const pw = Math.max(2, Math.round(w * k));
    const ph = Math.max(2, Math.round(h * k));
    if (this.canvas.width !== pw || this.canvas.height !== ph) {
      // 共享画布的宽高只能在主域设置；改了尺寸内容会被清空，贴图也要重建
      this.canvas.width = pw;
      this.canvas.height = ph;
      if (this.texture) this.texture.dispose();
      this.texture = null;
    }
    if (!this.texture) {
      // 非 2 的幂贴图：不生成 mipmap、线性过滤、边缘钳制（WebGL1 的要求）
      const t = new THREE.CanvasTexture(this.canvas);
      t.colorSpace = THREE.NoColorSpace;
      t.generateMipmaps = false;
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      this.texture = t;
      this.uniforms.map.value = t;
    }
    this.mesh.scale.set(w * hud.u, h * hud.u, 1);
    this.mesh.position.set((x + w / 2) * hud.u, hud.H - (y + h / 2) * hud.u, 0);
    this.mesh.visible = true;
    this.acc = 1;
    return { w, h, scale: pw / w };
  }

  hide() {
    this.mesh.visible = false;
  }

  // 主域不知道开放数据域什么时候画完（头像是陆续加载出来的），显示期间定时把画布重新传给显卡
  update(dt) {
    if (!this.mesh.visible || !this.texture) return;
    this.acc += dt;
    if (this.acc >= 0.1) {
      this.acc = 0;
      this.texture.needsUpdate = true;
    }
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
    this.board = new BoardLayer(this);

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
    const q = (t) => (t > 0 ? Math.ceil(t * 4) : 0);
    const bottomKey = `${Math.floor(d.distance)}|${d.gels}|${q(d.boost)}|${d.hydration}|${q(d.peak)}|${d.shield}|${q(d.burst)}|${d.stamina < 30 ? Math.floor(d.time * 3) % 2 : 0}|${d.rivals.map((r) => Math.floor(r / 8)).join(',')}`;
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
    this.board.update(dt);
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

    // 名次（有电脑对手时才有）；下面的小标签：和前后对手的差距，或者本周要超过的成绩
    const ry = y0 + 94;
    const ranked = d.total > 1;
    if (ranked) {
      c.font = font(26, { italic: true });
      const w1 = c.measureText(String(d.rank)).width;
      c.font = font(13);
      const w2 = c.measureText(`/${d.total}`).width;
      const rx = DW / 2 - (w1 + w2 + 2) / 2;
      text(c, String(d.rank), rx, ry, 26, { italic: true, color: ORANGE });
      text(c, `/${d.total}`, rx + w1 + 3, ry + 4, 13, { color: '#fff' });
    }
    const gy = ranked ? ry + 15 : ry - 10;
    c.fillStyle = 'rgba(20,23,26,0.6)';
    c.font = font(10, { bold: false });
    const gw = c.measureText(d.gapText).width + 14;
    rrect(c, DW / 2 - gw / 2, gy, gw, 17, 3);
    c.fill();
    text(c, d.gapText, DW / 2, gy + 8.5, 10, { align: 'center', bold: false, shadow: false });

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
        c.fillStyle = d.peak > 0 ? WATER : low ? '#ff4b3a' : d.boost > 0 ? '#ffc247' : ORANGE;
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
    const sub = d.boost > 0 ? '加速中…' : d.burst > 0 ? '连续闪避 · 加速中…' : has ? `点击使用 · 体力 +${PLAYER.gelStamina}%` : '沿途选线拾取';
    text(c, sub, bx + 52, by + 38, 10, { bold: false, color: has ? (pulse ? '#fff' : '#ffc59c') : d.burst > 0 ? '#ffc59c' : 'rgba(255,255,255,0.5)', shadow: false });
    if (d.boost > 0 || d.burst > 0) {
      const k = d.boost > 0 ? d.boost / PLAYER.gelBoostTime : d.burst / PLAYER.burstTime;
      c.fillStyle = '#ffc247';
      rrect(c, bx + 10, by + bh - 6, (bw - 20) * Math.min(1, k), 3, 1.5);
      c.fill();
    }
    this._gelButton = { id: 'gel', x: bx, y: by, w: bw, h: bh };

    // 左边：补水进度（攒满进入巅峰状态）
    const sw = 81;
    const peak = d.peak > 0;
    const lx = 16;
    c.fillStyle = peak ? 'rgba(40,140,220,0.9)' : 'rgba(16,18,20,0.82)';
    rrect(c, lx, by, sw, bh, 12);
    c.fill();
    c.strokeStyle = peak || d.hydration > 0 ? WATER : 'rgba(255,255,255,0.22)';
    c.lineWidth = peak ? 2 : 1;
    c.stroke();
    if (peak) {
      text(c, '巅峰状态', lx + sw / 2, by + 19, 14, { align: 'center', italic: true, shadow: false });
      text(c, '无敌冲刺', lx + sw / 2, by + 36, 9.5, { align: 'center', bold: false, color: 'rgba(255,255,255,0.9)', shadow: false });
      c.fillStyle = '#fff';
      rrect(c, lx + 9, by + bh - 6, (sw - 18) * Math.min(1, d.peak / PLAYER.peakTime), 3, 1.5);
      c.fill();
    } else {
      for (let i = 0; i < PLAYER.hydrationMax; i++) {
        const x = lx + sw / 2 + (i - (PLAYER.hydrationMax - 1) / 2) * 21;
        drop(c, x, by + 20, 21);
        if (i < d.hydration) {
          c.fillStyle = WATER;
          c.fill();
        } else {
          c.fillStyle = 'rgba(255,255,255,0.08)';
          c.fill();
          c.strokeStyle = 'rgba(255,255,255,0.4)';
          c.lineWidth = 1;
          c.stroke();
        }
      }
      text(c, `补水 ${d.hydration}/${PLAYER.hydrationMax}`, lx + sw / 2, by + 42, 10, { align: 'center', bold: false, color: d.hydration > 0 ? '#bfe6ff' : 'rgba(255,255,255,0.5)', shadow: false });
    }

    // 右边：登山杖（能挡一次碰撞）
    const rx = DW - 16 - sw;
    const shield = d.shield > 0;
    c.fillStyle = 'rgba(16,18,20,0.82)';
    rrect(c, rx, by, sw, bh, 12);
    c.fill();
    c.strokeStyle = shield ? POLE : 'rgba(255,255,255,0.22)';
    c.lineWidth = shield ? 2 : 1;
    c.stroke();
    crossedPoles(c, rx + sw / 2, by + 20, 24, shield ? POLE : 'rgba(255,255,255,0.3)');
    text(c, shield ? '可挡一次碰撞' : '登山杖', rx + sw / 2, by + 42, 10, { align: 'center', bold: false, color: shield ? '#d3ffc8' : 'rgba(255,255,255,0.5)', shadow: false });

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
      c.fillStyle = '#' + ACTIVE_RIVALS[i].color.toString(16).padStart(6, '0');
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
    this.board.update(dt);
  }

  // ---------------- 暗角 / 受击闪红 ----------------

  setVignette(strength, r, g, b) {
    this.vignetteUniforms.uStrength.value = strength;
    this.vignetteUniforms.uColor.value.setRGB(r, g, b);
  }

  // ---------------- 全屏界面 ----------------

  // sub：主按钮里的第二行小字（可选）
  _button(c, id, label, x, y, w, h, primary, sub = '') {
    if (primary) {
      const g = c.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, '#ff8a2b');
      g.addColorStop(1, '#f2590c');
      c.fillStyle = g;
      rrect(c, x, y, w, h, h / 2);
      c.fill();
      text(c, label, x + w / 2, y + h / 2 + (sub ? -7.5 : 0.5), 19, { align: 'center', italic: true, color: '#fff', shadowColor: 'rgba(120,40,0,0.5)' });
      if (sub) text(c, sub, x + w / 2, y + h / 2 + 13.5, 10.5, { align: 'center', bold: false, color: 'rgba(255,255,255,0.9)', shadow: false });
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

  // "开始比赛 / 再跑一次"的主按钮：按钮里写着今天还剩几点体力值；用完了就换成"邀请好友"（或"看视频"）
  _playButton(c, id, label, x, y, w, h) {
    const e = energyInfo();
    if (!e.enabled) this._button(c, id, label, x, y, w, h, true);
    else if (e.left > 0) this._button(c, id, label, x, y, w, h, true, e.left > e.max ? `体力值 ${e.left}` : `今日体力值 ${e.left}/${e.max}`);
    else this._button(c, id, `${REFILL} · 再跑一局`, x, y, w, h, true, '今日体力值已用完');
  }

  hideScreen() {
    this.screenMode = '';
    this.buttons = [];
    this.layers.screen.mesh.visible = false;
    this._hideBoard();
  }

  // 在界面上划出一块区域显示好友榜（榜单本身由开放数据域绘制）
  _placeBoard(c, x, y, w, h) {
    const info = this.board.show(x, y, w, h);
    if (!info) {
      // 很老的微信版本没有开放数据域：原地写一行说明
      text(c, '本周好友榜', x, y + 13, 13.5, { shadow: false });
      text(c, '当前微信版本不支持好友排行榜', x + w / 2, y + h / 2 + 10, 12, { align: 'center', bold: false, color: 'rgba(255,255,255,0.6)', shadow: false });
      return;
    }
    showFriendBoard(info, (ok) => {
      // 用户拒绝过"使用你的微信朋友信息"：整块榜单变成一个按钮，点了去设置页打开
      if (!ok) this.buttons.push({ id: 'auth', x, y, w, h });
    });
  }

  _hideBoard() {
    if (!this.board.mesh.visible) return;
    this.board.hide();
    hideFriendBoard();
  }

  // status: 人物素材的加载状态 'loading' | 'ready' | 'error'
  showTitle(best, status = 'ready') {
    this.screenMode = 'title';
    this.buttons = [];
    this._hideBoard();
    const L = this.layers.screen;
    L.mesh.visible = true;
    const c = L.begin();
    const Hd = this.Hd;
    // 只压暗上下两头，中间留给赛道和选手
    let g = c.createLinearGradient(0, 0, 0, Hd * 0.36);
    g.addColorStop(0, 'rgba(8,10,12,0.8)');
    g.addColorStop(1, 'rgba(8,10,12,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, DW, Hd * 0.36);
    g = c.createLinearGradient(0, Hd - 330, 0, Hd);
    g.addColorStop(0, 'rgba(8,10,12,0)');
    g.addColorStop(0.5, 'rgba(8,10,12,0.7)');
    g.addColorStop(1, 'rgba(8,10,12,0.94)');
    c.fillStyle = g;
    c.fillRect(0, Hd - 330, DW, 330);

    // 上面只放标题
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
    const intro = ACTIVE_RIVALS.length ? `2000 米山径 · 6 个赛段 · ${ACTIVE_RIVALS.length} 位对手` : '2000 米山径 · 6 个赛段 · 和微信好友比本周成绩';
    text(c, intro, 70, ty + 70, 13.5, { bold: false, color: 'rgba(255,255,255,0.92)' });

    // 下面从上到下：开始按钮、两个次要入口、一行小字
    const bx = 45;
    const bw = 300;
    const by = Hd - 176;
    const fy = by + 140; // 最底下那行小字

    let hint = '左右滑动变道 · 上滑跳跃 · 下滑滑铲';
    if (status === 'ready') {
      this._playButton(c, 'start', '开 始 比 赛', bx, by, bw, 58);
    } else if (status === 'error') {
      this._button(c, 'retry', '加载失败 · 点击重试', bx, by, bw, 58, false);
      hint = '人物素材没有加载成功，请检查后重试';
    } else {
      // 加载中：画一个不可点的按钮
      c.fillStyle = 'rgba(18,20,23,0.7)';
      rrect(c, bx, by, bw, 58, 29);
      c.fill();
      text(c, '正在加载选手…', DW / 2, by + 29.5, 16, { align: 'center', color: 'rgba(255,255,255,0.7)', shadow: false });
      hint = '马上就好';
    }
    const half = (bw - 12) / 2;
    this._button(c, 'board', '本周好友榜', bx, by + 72, half, 44, false);
    this._button(c, 'help', '玩法说明', bx + half + 12, by + 72, half, 44, false);

    // 最底下一行：跑过的人看自己的成绩，新玩家（或素材没加载好时）看提示
    const wb = weekBest();
    const stats = [];
    if (best) stats.push(['个人最佳', formatTime(best)]);
    if (wb.t > 0) stats.push(['本周最佳', formatTime(wb.t / 1000)]);
    else if (wb.d > 0) stats.push(['本周最远', `${wb.d} m`]);
    if (status !== 'ready' || !stats.length) {
      text(c, hint, DW / 2, fy, 11, { align: 'center', bold: false, color: status === 'error' ? '#ffb4a8' : 'rgba(255,255,255,0.6)', shadow: false });
    } else {
      const gap = 26; // 两项之间的间隔，中间画一条细竖线
      const parts = stats.map(([k, v]) => {
        c.font = font(11.5, { bold: false });
        const kw = c.measureText(k).width;
        c.font = font(14, { italic: true });
        return { k, v, kw, w: kw + 7 + c.measureText(v).width };
      });
      let sx = (DW - parts.reduce((sum, p) => sum + p.w, 0) - gap * (parts.length - 1)) / 2;
      parts.forEach((p, i) => {
        if (i > 0) {
          c.fillStyle = 'rgba(255,255,255,0.3)';
          c.fillRect(sx - gap / 2, fy - 7, 1, 14);
        }
        text(c, p.k, sx, fy, 11.5, { bold: false, color: 'rgba(255,255,255,0.65)', shadow: false });
        text(c, p.v, sx + p.kw + 7, fy, 14, { italic: true, shadow: false });
        sx += p.w + gap;
      });
    }
    L.end();
  }

  // 首页点进来的"玩法说明"：手势、补给、规则和素材署名
  showHelp() {
    this.screenMode = 'help';
    this.buttons = [];
    this._hideBoard();
    const L = this.layers.screen;
    L.mesh.visible = true;
    const c = L.begin();
    c.fillStyle = 'rgba(8,10,12,0.66)';
    c.fillRect(0, 0, DW, this.Hd);

    const rules = ['每一局的障碍和补给都会重新随机排布', '体力耗尽即退赛，每周最好的一次成绩计入好友榜'];
    if (ENERGY.enabled) rules.push(`每局消耗 1 点体力值，每天 ${ENERGY.dailyFree} 点，用完可${REFILL}再跑`);
    const cw = 334;
    const ch = 468 + rules.length * 19;
    const { cx0, cy0 } = this._card(c, cw, ch);
    const lx = cx0 + 24;
    const iw = cw - 48;
    const dim = 'rgba(255,255,255,0.7)';
    const line = (y) => {
      c.fillStyle = 'rgba(255,255,255,0.1)';
      c.fillRect(lx, y, iw, 1);
    };
    text(c, '玩法说明', lx, cy0 + 42, 28, { italic: true, shadow: false });
    text(c, '跑完 2000 米山径，别让体力见底', lx, cy0 + 70, 12, { bold: false, color: dim, shadow: false });

    // 四个手势
    const gy = cy0 + 122;
    const gestures = [
      ['left', '左滑', '向左变道'],
      ['right', '右滑', '向右变道'],
      ['up', '上滑', '跳过倒木'],
      ['down', '下滑', '滑铲钻过'],
    ];
    gestures.forEach(([dir, a, b], i) => {
      const x = lx + (iw / 4) * (i + 0.5);
      c.fillStyle = 'rgba(255,255,255,0.07)';
      c.beginPath();
      c.arc(x, gy, 23, 0, Math.PI * 2);
      c.fill();
      arrow(c, x, gy, dir, 24, ORANGE);
      text(c, a, x, gy + 40, 14, { align: 'center', shadow: false });
      text(c, b, x, gy + 58, 10.5, { align: 'center', bold: false, color: dim, shadow: false });
    });
    line(cy0 + 204);

    // 沿途补给：各用自己的颜色标出来
    const supplies = [
      ['#ffb347', '能量胶', '回复体力并加速'],
      [WATER, '水', '攒满 3 瓶进入巅峰状态，无敌冲刺'],
      [POLE, '登山杖', '挡下一次碰撞'],
    ];
    supplies.forEach(([color, a, b], i) => {
      const y = cy0 + 230 + i * 32;
      c.fillStyle = color;
      c.beginPath();
      c.arc(lx + 6, y, 4.5, 0, Math.PI * 2);
      c.fill();
      text(c, a, lx + 20, y, 13.5, { color, shadow: false });
      text(c, b, lx + 76, y, 12, { bold: false, color: 'rgba(255,255,255,0.85)', shadow: false });
    });
    line(cy0 + 316);
    rules.forEach((str, i) => text(c, str, lx, cy0 + 336 + i * 19, 11.5, { bold: false, color: dim, shadow: false }));

    // 素材署名（帽子是 CC BY 3.0，必须写明作品、作者、许可证和来源）
    CREDITS.forEach((str, i) => {
      let size = 8.6;
      c.font = font(size, { bold: false });
      const wid = c.measureText(str).width;
      if (wid > iw) size *= iw / wid;
      text(c, str, lx, cy0 + 348 + rules.length * 19 + i * 12.5, size, { bold: false, color: 'rgba(255,255,255,0.45)', shadow: false });
    });

    this._button(c, 'back', '知 道 了', lx, cy0 + ch - 74, iw, 50, true);
    L.end();
  }

  showPause() {
    this.screenMode = 'pause';
    this.buttons = [];
    this._hideBoard();
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
    // 重新开始等于再开一局，也要消耗体力值
    const e = energyInfo();
    const again = !e.enabled ? '重新开始' : e.left > 0 ? '重新开始 · 消耗 1 体力值' : `${REFILL} · 重新开始`;
    this._button(c, 'restart', again, 65, cy + 130, 260, 46, false);
    this._button(c, 'home', '返回首页', 65, cy + 190, 260, 46, false);
    L.end();
  }

  // 一张居中的深色卡片，返回它的左上角
  _card(c, cw, ch) {
    const cx0 = (DW - cw) / 2;
    const cy0 = Math.max(this.T + this.rowH + 16, (this.Hd - ch) / 2 - 10);
    c.fillStyle = 'rgba(18,20,23,0.94)';
    rrect(c, cx0, cy0, cw, ch, 18);
    c.fill();
    c.strokeStyle = 'rgba(255,255,255,0.12)';
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = ORANGE;
    rrect(c, cx0 + 24, cy0, 64, 5, 2);
    c.fill();
    return { cx0, cy0 };
  }

  // 首页点进来的"本周好友榜"
  showLeaderboard() {
    this.screenMode = 'board';
    this.buttons = [];
    const L = this.layers.screen;
    L.mesh.visible = true;
    const c = L.begin();
    c.fillStyle = 'rgba(8,10,12,0.66)';
    c.fillRect(0, 0, DW, this.Hd);

    const cw = 334;
    const ch = 574;
    const { cx0, cy0 } = this._card(c, cw, ch);
    const lx = cx0 + 24;
    const rxx = cx0 + cw - 24;
    text(c, '和好友比一比', lx, cy0 + 42, 28, { italic: true, shadow: false });
    text(c, '只统计本周跑过的微信好友 · 完赛比用时，没完赛比距离', lx, cy0 + 70, 11, { bold: false, color: 'rgba(255,255,255,0.65)', shadow: false });

    // 我的本周最佳
    const my = weekBest();
    const ty = cy0 + 92;
    c.fillStyle = 'rgba(255,255,255,0.06)';
    rrect(c, lx, ty, cw - 48, 56, 10);
    c.fill();
    text(c, '我的本周最佳', lx + 14, ty + 28, 12, { bold: false, color: 'rgba(255,255,255,0.7)', shadow: false });
    if (my.t > 0) text(c, formatTime(my.t / 1000), rxx - 14, ty + 28.5, 26, { align: 'right', italic: true, shadow: false });
    else text(c, my.d > 0 ? `未完赛 · ${my.d} m` : '本周还没跑', rxx - 14, ty + 28.5, 15, { align: 'right', color: 'rgba(255,255,255,0.75)', shadow: false });

    this._placeBoard(c, lx, cy0 + 164, cw - 48, 272);

    const byy = cy0 + ch - 122;
    this._button(c, 'share', '邀 请 好 友', lx, byy, cw - 48, 52, true);
    this._button(c, 'back', '返回', lx, byy + 62, cw - 48, 42, false);
    L.end();
  }

  /**
   * @param r { finished, time, rank, total, avgSpeed, bestCombo, hits, peaks, distance, best, isRecord, weekBest,
   *            standings: [{name, text, me}]（有电脑对手时才有；没有就在同一块位置显示微信好友本周榜） }
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

    const ranked = r.total > 1 && !!r.standings;
    const cw = 334;
    const ch = ranked ? 500 : 572;
    const { cx0, cy0 } = this._card(c, cw, ch);

    const lx = cx0 + 24;
    const rxx = cx0 + cw - 24;
    // 这一局刷新了本周最佳：右上角挂一个标签（好友榜上的成绩也随之更新）
    const weekTag = () => {
      if (!r.weekBest) return;
      c.fillStyle = 'rgba(255,194,71,0.16)';
      rrect(c, rxx - 78, cy0 + 32, 78, 26, 13);
      c.fill();
      c.strokeStyle = '#ffc247';
      c.lineWidth = 1;
      c.stroke();
      text(c, '本周最佳', rxx - 39, cy0 + 45.5, 12.5, { align: 'center', color: '#ffc247', shadow: false });
    };
    if (r.finished) {
      const champion = ranked && r.rank === 1;
      text(c, champion ? '跑山之王' : '顺利完赛', lx, cy0 + 44, 30, { italic: true, shadow: false });
      text(c, champion ? '第一个冲过终点线' : '翻过了六道山梁', lx, cy0 + 72, 12, { bold: false, color: 'rgba(255,255,255,0.7)', shadow: false });
      if (ranked) {
        text(c, `${r.rank}`, rxx - 22, cy0 + 50, 58, { align: 'right', italic: true, color: r.rank === 1 ? '#ffc247' : ORANGE, shadow: false });
        text(c, `/${r.total}`, rxx, cy0 + 62, 16, { align: 'right', color: 'rgba(255,255,255,0.8)', shadow: false });
      } else weekTag();
    } else {
      text(c, '体力耗尽', lx, cy0 + 44, 30, { italic: true, shadow: false, color: '#ff6b5a' });
      text(c, `止步 ${Math.floor(r.distance)} m · ${STAGES[r.stage].name}`, lx, cy0 + 72, 12, { bold: false, color: 'rgba(255,255,255,0.7)', shadow: false });
      if (ranked || !r.weekBest) text(c, 'DNF', rxx, cy0 + 50, 34, { align: 'right', italic: true, color: 'rgba(255,255,255,0.35)', shadow: false });
      else weekTag();
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

    // 四项数据
    const sy = ty + 86;
    const stats = [
      ['平均配速', formatPace(r.avgSpeed)],
      ['最高连闪', String(r.bestCombo)],
      ['巅峰状态', `${r.peaks || 0} 次`],
      ['撞到障碍', `${r.hits} 次`],
    ];
    const colW = (cw - 48) / stats.length;
    stats.forEach(([k, v], i) => {
      const x = lx + colW * i;
      text(c, k, x + 2, sy + 10, 10.5, { bold: false, color: 'rgba(255,255,255,0.6)', shadow: false });
      text(c, v, x + 2, sy + 33, 17, { italic: true, shadow: false });
    });

    // 排名：有电脑对手时是这一局的名次；否则是微信好友的本周榜
    const py0 = sy + 62;
    c.fillStyle = 'rgba(255,255,255,0.1)';
    c.fillRect(lx, py0 - 8, cw - 48, 1);
    const byy = cy0 + ch - 122;
    if (!ranked) {
      this._placeBoard(c, lx, py0, cw - 48, 182);
      const half = (cw - 48 - 10) / 2;
      this._playButton(c, 'restart', '再 跑 一 次', lx, byy, cw - 48, 52);
      this._button(c, 'share', '邀请好友来比', lx, byy + 62, half, 42, false);
      this._button(c, 'home', '返回首页', lx + half + 10, byy + 62, half, 42, false);
      L.end();
      return;
    }
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

    this._hideBoard();
    this._playButton(c, 'restart', '再 跑 一 次', cx0 + 24, byy, cw - 48, 52);
    this._button(c, 'home', '返回首页', cx0 + 24, byy + 62, cw - 48, 42, false);
    L.end();
  }
}
