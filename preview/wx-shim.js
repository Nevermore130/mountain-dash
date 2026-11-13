// 浏览器预览垫片：用浏览器 API 模拟游戏用到的那一小部分 wx 接口，
// 这样 minigame/game.js 这份产物可以原样在浏览器里跑（仅用于开发预览）。
(function () {
  const stage = document.getElementById('stage');
  const ASSET_BASE = '../minigame/'; // 预览页在 preview/ 下，小游戏代码包在 minigame/ 下
  const mainCanvas = document.getElementById('game');
  let canvasCount = 0;

  const touchHandlers = { start: [], move: [], end: [], cancel: [] };
  const keyHandlers = [];
  const showHandlers = [];
  const hideHandlers = [];
  const resizeHandlers = [];

  function rect() {
    return stage.getBoundingClientRect();
  }

  function emit(kind, points, changed) {
    const r = rect();
    const map = (p) => ({ identifier: p.identifier || 0, clientX: p.clientX - r.left, clientY: p.clientY - r.top });
    const ev = { touches: points.map(map), changedTouches: changed.map(map), timeStamp: Date.now() };
    touchHandlers[kind].forEach((cb) => cb(ev));
  }

  // 触摸
  const tl = (kind) => (e) => {
    e.preventDefault();
    emit(kind, Array.from(e.touches), Array.from(e.changedTouches));
  };
  stage.addEventListener('touchstart', tl('start'), { passive: false });
  stage.addEventListener('touchmove', tl('move'), { passive: false });
  stage.addEventListener('touchend', tl('end'), { passive: false });
  stage.addEventListener('touchcancel', tl('cancel'), { passive: false });

  // 鼠标当作单指
  let mouseDown = false;
  stage.addEventListener('mousedown', (e) => {
    mouseDown = true;
    emit('start', [e], [e]);
  });
  window.addEventListener('mousemove', (e) => {
    if (mouseDown) emit('move', [e], [e]);
  });
  window.addEventListener('mouseup', (e) => {
    if (!mouseDown) return;
    mouseDown = false;
    emit('end', [], [e]);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key.startsWith('Arrow') || e.key === ' ') e.preventDefault();
    if (e.repeat) return;
    keyHandlers.forEach((cb) => cb({ key: e.key, code: e.code, timeStamp: Date.now() }));
  });

  document.addEventListener('visibilitychange', () => {
    (document.hidden ? hideHandlers : showHandlers).forEach((cb) => cb({}));
  });
  window.addEventListener('resize', () => {
    resizeHandlers.forEach((cb) => cb({ windowWidth: stage.clientWidth, windowHeight: stage.clientHeight }));
  });

  const query = new URLSearchParams(location.search);
  const opts = {};
  query.forEach((v, k) => {
    opts[k] = v === '' ? true : isNaN(Number(v)) ? v : Number(v);
  });

  // 收集运行期错误，方便调试时查看
  window.__errs = [];
  window.addEventListener('error', (e) => window.__errs.push(String(e.message || e.error)));
  const rawError = console.error.bind(console);
  console.error = (...a) => {
    window.__errs.push(a.map((x) => (x && x.stack) || String(x)).join(' '));
    rawError(...a);
  };
  const rawWarn = console.warn.bind(console);
  console.warn = (...a) => {
    window.__errs.push('[warn] ' + a.map(String).join(' '));
    rawWarn(...a);
  };

  window.GameGlobal = window;
  window.__MD_OPTS = opts;

  window.wx = {
    createCanvas() {
      canvasCount += 1;
      return canvasCount === 1 ? mainCanvas : document.createElement('canvas');
    },
    getSystemInfoSync() {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      const framed = stage.classList.contains('framed');
      return {
        platform: 'devtools',
        windowWidth: w,
        windowHeight: h,
        screenWidth: w,
        screenHeight: h,
        pixelRatio: window.devicePixelRatio || 1,
        safeArea: { top: framed ? 30 : 0, bottom: h, left: 0, right: w, width: w, height: h },
        benchmarkLevel: 30,
      };
    },
    getMenuButtonBoundingClientRect() {
      const w = stage.clientWidth;
      const top = stage.classList.contains('framed') ? 34 : 8;
      return { width: 87, height: 32, top, bottom: top + 32, left: w - 97, right: w - 10 };
    },
    onTouchStart: (cb) => touchHandlers.start.push(cb),
    onTouchMove: (cb) => touchHandlers.move.push(cb),
    onTouchEnd: (cb) => touchHandlers.end.push(cb),
    onTouchCancel: (cb) => touchHandlers.cancel.push(cb),
    onKeyDown: (cb) => keyHandlers.push(cb),
    onShow: (cb) => showHandlers.push(cb),
    onHide: (cb) => hideHandlers.push(cb),
    onWindowResize: (cb) => resizeHandlers.push(cb),
    createWebAudioContext() {
      const AC = window.AudioContext || window.webkitAudioContext;
      return new AC();
    },
    getStorageSync(key) {
      try {
        const raw = localStorage.getItem('md:' + key);
        return raw == null ? '' : JSON.parse(raw);
      } catch (e) {
        return '';
      }
    },
    setStorageSync(key, value) {
      try {
        localStorage.setItem('md:' + key, JSON.stringify(value));
      } catch (e) {}
    },
    vibrateShort() {
      if (navigator.vibrate) navigator.vibrate(15);
    },
    // 素材路径都相对小游戏代码包根目录（minigame/）
    createImage() {
      const img = new Image();
      const desc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
      Object.defineProperty(img, 'src', {
        get: () => desc.get.call(img),
        set: (v) => desc.set.call(img, /^(https?:|data:|\/)/.test(v) ? v : ASSET_BASE + v),
      });
      return img;
    },
    getFileSystemManager() {
      return {
        readFile({ filePath, encoding, success, fail }) {
          fetch(ASSET_BASE + filePath)
            .then((r) => {
              if (!r.ok) throw new Error('HTTP ' + r.status);
              return encoding ? r.text() : r.arrayBuffer();
            })
            .then(
              (data) => success && success({ data }),
              (e) => fail && fail({ errMsg: 'readFile:fail ' + e.message })
            );
        },
      };
    },
    setKeepScreenOn() {},
    showShareMenu() {},
    onShareAppMessage() {},
    setPreferredFramesPerSecond() {},
  };
})();
