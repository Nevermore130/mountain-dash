// 赛道：山径中心线、海拔剖面与两侧地形高度
// 约定：赛程 s（米）沿世界 -Z 方向，世界坐标 z = -s
import { RACE_LENGTH, TRAIL_HALF, smoothstep, stageBlend } from './config.js';
import { fbm, vnoise } from './noise.js';

const S_MIN = -400;
const S_MAX = RACE_LENGTH + 700;

// 山径中心线的横向偏移（蜿蜒）
export function cx(s) {
  const k = smoothstep(15, 130, s);
  return k * (14 * Math.sin(s * 0.011) + 7 * Math.sin(s * 0.027 + 1.3) + 3 * Math.sin(s * 0.058 + 0.5));
}

export function cxSlope(s) {
  return cx(s + 0.5) - cx(s - 0.5);
}

// 朝向（绕 Y 轴的偏航角），0 = 正对 -Z
export function heading(s) {
  return -Math.atan(cxSlope(s));
}

// ---- 海拔剖面：各赛段坡度积分 + 小起伏 ----
const elev = new Float32Array(S_MAX - S_MIN + 1);
{
  let h = 0;
  for (let i = 0; i < elev.length; i++) {
    const s = S_MIN + i;
    elev[i] = h;
    let g = stageBlend(s, (st) => st.grade, 140);
    if (s < 0) g = 0.02;
    if (s > RACE_LENGTH) g = -0.03;
    g += 0.052 * Math.cos(s * 0.013) + 0.066 * Math.cos(s * 0.037 + 2.0);
    h += g;
  }
  const base = elev[-S_MIN];
  for (let i = 0; i < elev.length; i++) elev[i] -= base;
}

export function py(s) {
  let f = s - S_MIN;
  if (f < 0) f = 0;
  if (f > elev.length - 1.001) f = elev.length - 1.001;
  const i = Math.floor(f);
  const t = f - i;
  return elev[i] + (elev[i + 1] - elev[i]) * t;
}

export function grade(s) {
  return (py(s + 1) - py(s - 1)) * 0.5;
}

// 山体横坡：一侧是上坡山壁，另一侧是下切的山谷，沿途缓慢交替
export function tilt(s) {
  return 0.38 * Math.sin(s * 0.0075 + 0.7) + 0.2 * Math.sin(s * 0.019 + 2.1);
}

// 世界坐标 (x, s) 处的地面高度
export function terrainH(x, s) {
  const p = py(s);
  const d = x - cx(s);
  const e = Math.abs(d) - TRAIL_HALF;
  if (e <= 0) return p;
  const sgn = d > 0 ? 1 : -1;
  let h = p;
  // 路肩：山径被踩得略低于两侧草地
  h += 0.22 * smoothstep(0, 1.3, e);
  // 山体横坡
  h += sgn * tilt(s) * e * (1 - 0.32 * smoothstep(50, 220, e));
  // 近处的小土包
  h += smoothstep(0.5, 6, e) * 1.1 * (fbm(x * 0.085, s * 0.085, 2) - 0.5);
  // 远处的丘陵与山梁
  h += smoothstep(5, 90, e) * 36 * (fbm(x * 0.0068 + 50, s * 0.0068, 4) - 0.44);
  h += smoothstep(40, 200, e) * 30 * (vnoise(x * 0.0031 + 7, s * 0.0031 + 3) - 0.35);
  return h;
}

export function terrainNormal(x, s, out) {
  const e = 0.6;
  const hx = terrainH(x + e, s) - terrainH(x - e, s);
  const hs = terrainH(x, s + e) - terrainH(x, s - e);
  // z = -s
  const nx = -hx;
  const ny = 2 * e;
  const nz = hs;
  const l = Math.sqrt(nx * nx + ny * ny + nz * nz);
  out[0] = nx / l;
  out[1] = ny / l;
  out[2] = nz / l;
  return out;
}
