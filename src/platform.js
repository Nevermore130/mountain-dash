// 平台层：游戏只通过这里接触微信小游戏 API（浏览器预览时由 preview/wx-shim.js 模拟）
/* global wx, GameGlobal */

export const G = typeof GameGlobal !== 'undefined' ? GameGlobal : typeof window !== 'undefined' ? window : {};
export const WX = typeof wx !== 'undefined' ? wx : G.wx;

// 小游戏里第一次 createCanvas 得到的是上屏画布，之后都是离屏画布
export const mainCanvas = WX.createCanvas();

export function createCanvas(w, h) {
  const c = WX.createCanvas();
  c.width = w;
  c.height = h;
  return c;
}

export function getScreen() {
  let info = null;
  try {
    info = WX.getWindowInfo ? WX.getWindowInfo() : WX.getSystemInfoSync();
  } catch (e) {
    info = WX.getSystemInfoSync();
  }
  const width = info.windowWidth;
  const height = info.windowHeight;
  let safeTop = info.safeArea && info.safeArea.top ? info.safeArea.top : 0;
  let menu = null;
  try {
    menu = WX.getMenuButtonBoundingClientRect ? WX.getMenuButtonBoundingClientRect() : null;
  } catch (e) {
    menu = null;
  }
  if (menu && !(menu.width > 0)) menu = null;
  return { width, height, pixelRatio: info.pixelRatio || 1, safeTop, menu };
}

export function getBenchmarkLevel() {
  try {
    const info = WX.getDeviceInfo ? WX.getDeviceInfo() : WX.getSystemInfoSync();
    return typeof info.benchmarkLevel === 'number' ? info.benchmarkLevel : -1;
  } catch (e) {
    return -1;
  }
}

export function loadData(key, fallback) {
  try {
    const v = WX.getStorageSync(key);
    return v === '' || v === undefined || v === null ? fallback : v;
  } catch (e) {
    return fallback;
  }
}

export function saveData(key, value) {
  try {
    WX.setStorageSync(key, value);
  } catch (e) {}
}

export function vibrate(heavy) {
  try {
    WX.vibrateShort({ type: heavy ? 'heavy' : 'light' });
  } catch (e) {}
}

export const options = G.__MD_OPTS || {};

/* global requestAnimationFrame */
export const raf = (cb) => (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(cb) : G.requestAnimationFrame(cb));
