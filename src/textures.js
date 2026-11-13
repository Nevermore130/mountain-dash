// 植被用的带透明通道贴图：全部在离屏 2D 画布上程序绘制，不依赖任何图片文件
import * as THREE from 'three';
import { createCanvas } from './platform.js';
import { mulberry32 } from './noise.js';

function finish(canvas, { repeatX = false } = {}) {
  const W = canvas.width;
  const H = canvas.height;
  const src = canvas.getContext('2d').getImageData(0, 0, W, H).data;
  // 透明像素读回来是黑色，生成 mipmap 时会给叶片镶上黑边：
  // 这里把它们的 RGB 换成不透明像素的平均色（alpha 仍为 0）
  let r = 0;
  let g = 0;
  let b = 0;
  let n = 0;
  for (let i = 0; i < src.length; i += 4) {
    if (src[i + 3] > 200) {
      r += src[i];
      g += src[i + 1];
      b += src[i + 2];
      n++;
    }
  }
  n = Math.max(1, n);
  r = Math.round(r / n);
  g = Math.round(g / n);
  b = Math.round(b / n);
  const data = new Uint8Array(W * H * 4);
  for (let y = 0; y < H; y++) {
    // DataTexture 的第一行在底部，这里上下翻转
    const so = (H - 1 - y) * W * 4;
    const dof = y * W * 4;
    for (let x = 0; x < W * 4; x += 4) {
      const a = src[so + x + 3];
      if (a < 8) {
        data[dof + x] = r;
        data[dof + x + 1] = g;
        data[dof + x + 2] = b;
        data[dof + x + 3] = 0;
      } else {
        data[dof + x] = src[so + x];
        data[dof + x + 1] = src[so + x + 1];
        data[dof + x + 2] = src[so + x + 2];
        data[dof + x + 3] = a;
      }
    }
  }
  const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
  // 颜色按 sRGB 字节存放，由着色器解码（见 matutil.js）
  t.colorSpace = THREE.NoColorSpace;
  t.needsUpdate = true;
  t.wrapS = repeatX ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  return t;
}

function ellipse(ctx, x, y, rx, ry, rot) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(1, ry / rx);
  ctx.beginPath();
  ctx.arc(0, 0, rx, 0, Math.PI * 2);
  ctx.restore();
}

function rgb(r, g, b, a = 1) {
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a})`;
}


// 贴图最上面一条画成树皮，树干的 UV 映射到这里，这样一棵树只需要一次绘制
export const BARK_V = 0.955;
export const CROWN_V = 0.88;
function barkStrip(ctx, W, rnd, base) {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = rgb(base[0], base[1], base[2]);
  ctx.fillRect(0, 0, W, 24);
  for (let i = 0; i < 90; i++) {
    const k = 0.6 + rnd() * 0.7;
    ctx.fillStyle = rgb(base[0] * k, base[1] * k, base[2] * k);
    ctx.fillRect(rnd() * W, 0, 1 + rnd() * 3, 24);
  }
}

// 一丛草：很多根细长、弯曲、由深到浅的草叶
export function makeGrassTexture() {
  const W = 256;
  const H = 128;
  const c = createCanvas(W, H);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  const rnd = mulberry32(4242);
  const blade = (x, h, lean, w, dry) => {
    const tipX = x + lean;
    const tipY = H - h;
    const g = ctx.createLinearGradient(0, H, 0, tipY);
    const k = 0.75 + rnd() * 0.5;
    g.addColorStop(0, rgb(64 * k, 96 * k, 34 * k));
    g.addColorStop(0.55, rgb((92 + dry * 60) * k, (132 + dry * 20) * k, 44 * k));
    g.addColorStop(1, rgb((150 + dry * 60) * k, (176 + dry * 14) * k, (70 + dry * 20) * k));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x - w, H);
    ctx.quadraticCurveTo(x - w * 0.6 + lean * 0.25, H - h * 0.6, tipX, tipY);
    ctx.quadraticCurveTo(x + w * 0.9 + lean * 0.35, H - h * 0.55, x + w, H);
    ctx.closePath();
    ctx.fill();
  };
  // 先画后排的矮草垫底，再画前排的高草
  for (let i = 0; i < 150; i++) blade(8 + rnd() * (W - 16), 16 + rnd() * 34, (rnd() - 0.5) * 22, 2.2 + rnd() * 1.6, rnd() * rnd());
  for (let i = 0; i < 46; i++) blade(10 + rnd() * (W - 20), 40 + rnd() * 46, (rnd() - 0.5) * 40, 1.8 + rnd() * 1.4, rnd() * rnd());
  for (let i = 0; i < 16; i++) blade(14 + rnd() * (W - 28), 78 + rnd() * 44, (rnd() - 0.5) * 46, 1.6 + rnd() * 1.2, rnd());
  // 几根草穗
  for (let i = 0; i < 6; i++) {
    const x = 16 + rnd() * (W - 32);
    const h = 86 + rnd() * 36;
    const lean = (rnd() - 0.5) * 30;
    ctx.strokeStyle = rgb(150, 142, 80);
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x, H);
    ctx.quadraticCurveTo(x + lean * 0.3, H - h * 0.6, x + lean, H - h);
    ctx.stroke();
    ctx.fillStyle = rgb(186, 170, 104);
    ellipse(ctx, x + lean, H - h, 2.2, 6, lean * 0.02);
    ctx.fill();
  }
  return finish(c);
}

// 松枝：上半部分密实，下缘是一绺绺下垂的针叶，左右可无缝平铺（绕树一圈）
export function makePineTexture() {
  const W = 256;
  const H = 256;
  const c = createCanvas(W, H);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  const rnd = mulberry32(9001);
  // 画一个形状并在左右各复制一份，保证横向无缝
  const wrap = (fn) => {
    for (const ox of [-W, 0, W]) {
      ctx.save();
      ctx.translate(ox, 0);
      fn();
      ctx.restore();
    }
  };
  // 底色：靠近树梢的一侧是密实的深绿
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, rgb(30, 60, 32));
  g.addColorStop(0.5, rgb(36, 72, 36));
  g.addColorStop(0.62, rgb(40, 78, 38, 0));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H * 0.66);
  ctx.fillStyle = rgb(32, 64, 34);
  ctx.fillRect(0, 0, W, H * 0.42);

  // 一绺绺下垂的枝条
  const sprays = 54;
  for (let i = 0; i < sprays; i++) {
    const x = rnd() * W;
    const top = H * (0.18 + rnd() * 0.3);
    const len = H * (0.34 + rnd() * 0.46);
    const bottom = Math.min(H - 2, top + len);
    const half = 9 + rnd() * 13;
    const sway = (rnd() - 0.5) * 26;
    const k = 0.7 + rnd() * 0.6;
    const col = rgb(44 * k, 90 * k, 42 * k);
    wrap(() => {
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.moveTo(x - half, top);
      ctx.quadraticCurveTo(x - half * 0.8 + sway * 0.4, (top + bottom) / 2, x + sway, bottom);
      ctx.quadraticCurveTo(x + half * 0.8 + sway * 0.4, (top + bottom) / 2, x + half, top);
      ctx.closePath();
      ctx.fill();
    });
  }
  // 针叶：成百上千根短斜线，越靠下越亮
  for (let i = 0; i < 2600; i++) {
    const x = rnd() * W;
    const y = rnd() * H;
    const t = y / H;
    const len = 5 + rnd() * 9;
    const ang = Math.PI / 2 + (rnd() - 0.5) * 1.3;
    const k = 0.55 + rnd() * 0.75;
    const light = 0.5 + t * 0.9;
    ctx.strokeStyle = rgb(58 * k * light, 112 * k * light, 50 * k * light, 0.9);
    ctx.lineWidth = 1 + rnd() * 0.8;
    // 只在已有枝叶的地方画针叶：用 source-atop 保留原有的镂空轮廓
    ctx.globalCompositeOperation = 'source-atop';
    wrap(() => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
    });
  }
  barkStrip(ctx, W, rnd, [104, 78, 54]);
  return finish(c, { repeatX: true });
}

// 阔叶：层层叠叠的小叶片 + 少量镂空，让树冠边缘不再是光滑的球
export function makeLeafTexture() {
  const W = 256;
  const H = 256;
  const c = createCanvas(W, H);
  const ctx = c.getContext('2d');
  const rnd = mulberry32(7077);
  ctx.fillStyle = rgb(48, 86, 30);
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 4200; i++) {
    const x = rnd() * W;
    const y = rnd() * H;
    const r = 2.2 + rnd() * 3.6;
    const k = 0.55 + rnd() * 0.8;
    const warm = rnd() < 0.12 ? 40 : 0;
    const rot = rnd() * Math.PI;
    ctx.fillStyle = rgb((66 + warm) * k, 116 * k, 38 * k);
    for (const ox of [-W, 0, W]) {
      for (const oy of [-H, 0, H]) {
        ellipse(ctx, x + ox, y + oy, r, r * 0.55, rot);
        ctx.fill();
      }
    }
  }
  // 镂空
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 260; i++) {
    const x = rnd() * W;
    const y = rnd() * H;
    const r = 2.5 + rnd() * 5;
    const ry = r * (0.5 + rnd() * 0.5);
    const rot = rnd() * Math.PI;
    for (const ox of [-W, 0, W]) {
      for (const oy of [-H, 0, H]) {
        ellipse(ctx, x + ox, y + oy, r, ry, rot);
        ctx.fill();
      }
    }
  }
  barkStrip(ctx, W, rnd, [116, 96, 74]);
  return finish(c, { repeatX: true });
}
