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

// ---------------- 系统提示 ----------------

// 微信自带的轻提示，显示在游戏画面之上（不带图标时最多两行字）
export function showTip(title) {
  try {
    WX.showToast({ title, icon: 'none', duration: 2200 });
  } catch (e) {}
}

// 带遮罩的加载提示：显示期间点不到游戏里的按钮，防止连点
export function showLoading(title) {
  try {
    WX.showLoading({ title, mask: true });
  } catch (e) {}
}

export function hideLoading() {
  try {
    WX.hideLoading();
  } catch (e) {}
}

// ---------------- 开放数据域（微信好友排行榜） ----------------
// 好友的头像、昵称、成绩只有开放数据域拿得到：主域只管发消息，再把它画好的 sharedCanvas 贴到画面上

let openDataContext;

function openData() {
  if (openDataContext === undefined) {
    try {
      openDataContext = WX.getOpenDataContext ? WX.getOpenDataContext() : null;
    } catch (e) {
      openDataContext = null;
    }
  }
  return openDataContext;
}

export function postOpenData(msg) {
  const ctx = openData();
  if (!ctx) return false;
  try {
    ctx.postMessage(msg);
    return true;
  } catch (e) {
    return false;
  }
}

// 开放数据域的共享画布（宽高只能在主域设置）；当前环境不支持时返回 null
export function getSharedCanvas() {
  const ctx = openData();
  return ctx && ctx.canvas ? ctx.canvas : null;
}

const FRIEND_SCOPE = 'scope.WxFriendInteraction';

// 请求"使用你的微信朋友信息"授权。cb(true) = 已授权；cb(false) = 用户拒绝过，需要去设置里打开
export function requestFriendAuth(cb) {
  let called = false;
  const done = (ok) => {
    if (called) return;
    called = true;
    cb(ok);
  };
  try {
    if (!WX.authorize) return done(true);
    const ask = () => WX.authorize({ scope: FRIEND_SCOPE, success: () => done(true), fail: () => done(false) });
    if (!WX.getSetting) return ask();
    WX.getSetting({
      success: (res) => (res.authSetting && res.authSetting[FRIEND_SCOPE] ? done(true) : ask()),
      fail: ask,
    });
  } catch (e) {
    done(true);
  }
}

// 打开小游戏的授权设置页，回来后告诉调用方现在有没有授权
export function openFriendSetting(cb) {
  try {
    WX.openSetting({
      success: (res) => cb(!!(res.authSetting && res.authSetting[FRIEND_SCOPE])),
      fail: () => cb(false),
    });
  } catch (e) {
    cb(false);
  }
}

// ---------------- 转发 ----------------

// 主动拉起转发（不带图片时微信会用当前游戏画面截图）
export function shareAppMessage(info) {
  try {
    if (WX.shareAppMessage) WX.shareAppMessage(info);
  } catch (e) {}
}

// 右上角菜单里的"转发 / 分享到朋友圈"
export function setupShareMenu(getInfo) {
  try {
    if (WX.showShareMenu) WX.showShareMenu({ withShareTicket: false, menus: ['shareAppMessage', 'shareTimeline'] });
    if (WX.onShareAppMessage) WX.onShareAppMessage(() => getInfo());
    if (WX.onShareTimeline) WX.onShareTimeline(() => ({ title: getInfo().title }));
  } catch (e) {}
}

export const options = G.__MD_OPTS || {};

/* global requestAnimationFrame */
export const raf = (cb) => (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(cb) : G.requestAnimationFrame(cb));
