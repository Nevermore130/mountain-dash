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
    onShareTimeline() {},
    setPreferredFramesPerSecond() {},

    // ---- 好友排行榜相关（模拟）----
    getOpenDataContext: () => openDataContext,
    getSetting({ success }) {
      setTimeout(() => success && success({ authSetting: friendAuth === 'granted' ? { 'scope.WxFriendInteraction': true } : {} }), 0);
    },
    authorize({ success, fail }) {
      // 真机上第一次会弹窗；这里 friends=deny 模拟"之前拒绝过"，其余情况直接同意
      setTimeout(() => {
        if (friendAuth === 'denied') return fail && fail({ errMsg: 'authorize:fail auth deny' });
        friendAuth = 'granted';
        if (success) success({});
      }, 0);
    },
    openSetting({ success }) {
      // 模拟用户在设置页里把开关打开了
      friendAuth = 'granted';
      setTimeout(() => success && success({ authSetting: { 'scope.WxFriendInteraction': true } }), 0);
    },
    // ---- 转发给好友（模拟）----
    // 和真机一样：拉起转发面板时游戏切到后台（onHide），发送或取消后回到前台（onShow）。
    // 预览地址加 share=nohide 模拟不报后台事件的环境（只记一笔，不弹面板）
    shareAppMessage(info) {
      window.__shared = info;
      console.log('[预览] 转发给好友：', info.title, info.query || '');
      if (opts.share === 'nohide') return;
      const close = () => {
        shareBox.style.display = 'none';
        showHandlers.forEach((cb) => cb({}));
      };
      shareBox.innerHTML =
        '<div style="font-size:13px;opacity:.6">预览 · 模拟转发给好友</div>' +
        '<div id="__shareTitle" style="font-size:16px;line-height:1.6;margin:20px 28px 26px;text-align:center"></div>' +
        '<div><button id="__shareSend" style="font-size:15px;padding:10px 26px;border-radius:22px;border:0;background:#07c160;color:#fff;margin-right:12px">发送</button>' +
        '<button id="__shareCancel" style="font-size:15px;padding:10px 26px;border-radius:22px;border:0;background:#444;color:#fff">取消</button></div>';
      shareBox.querySelector('#__shareTitle').textContent = info.title || '';
      shareBox.querySelector('#__shareSend').onclick = close;
      shareBox.querySelector('#__shareCancel').onclick = close;
      shareBox.style.display = 'flex';
      window.__share = { close, visible: () => shareBox.style.display !== 'none' };
      hideHandlers.forEach((cb) => cb({}));
    },

    // ---- 系统提示（模拟）----
    showToast({ title, duration = 1500 }) {
      tipBox.textContent = title;
      tipBox.style.display = 'block';
      clearTimeout(tipTimer);
      tipTimer = setTimeout(() => (tipBox.style.display = 'none'), duration);
      window.__tips.push(title);
    },
    showLoading({ title }) {
      clearTimeout(tipTimer);
      tipBox.textContent = title + '…';
      tipBox.style.display = 'block';
      mask.style.display = 'block';
    },
    hideLoading() {
      tipBox.style.display = 'none';
      mask.style.display = 'none';
    },

    // ---- 激励视频广告（模拟）----
    // 预览地址可以加参数：ad=fail 拉不到广告；ad=slow 拉取很慢；ad=none 当作没配置广告位
    createRewardedVideoAd() {
      const on = { load: [], error: [], close: [] };
      const mode = opts.ad;
      const load = () =>
        new Promise((resolve, reject) => {
          setTimeout(
            () => {
              if (mode === 'fail') {
                const err = { errCode: 1004, errMsg: 'no advertisement' };
                on.error.forEach((cb) => cb(err));
                reject(err);
              } else {
                on.load.forEach((cb) => cb());
                resolve();
              }
            },
            mode === 'slow' ? 2500 : 200
          );
        });
      let ready = false;
      load().then(
        () => (ready = true),
        () => {}
      );
      const close = (isEnded) => {
        adBox.style.display = 'none';
        clearInterval(adTimer);
        ready = false;
        on.close.forEach((cb) => cb({ isEnded }));
        // 真实的广告组件关闭后也会自动拉取下一条
        load().then(
          () => (ready = true),
          () => {}
        );
      };
      window.__ad = { close, visible: () => adBox.style.display !== 'none' };
      return {
        onLoad: (cb) => on.load.push(cb),
        onError: (cb) => on.error.push(cb),
        onClose: (cb) => on.close.push(cb),
        load,
        show() {
          if (!ready) return Promise.reject({ errCode: 1004, errMsg: 'ad not ready' });
          let left = 5;
          const paint = () => {
            adBox.innerHTML =
              '<div style="font-size:13px;opacity:.6">预览 · 模拟激励视频广告</div>' +
              `<div style="font-size:44px;font-weight:700;margin:18px 0">${left > 0 ? left : '✓'}</div>` +
              `<div style="font-size:14px;margin-bottom:22px">${left > 0 ? '看完才能获得奖励' : '已看完，可以关闭领取奖励'}</div>` +
              `<button id="__adClose" style="font-size:15px;padding:10px 26px;border-radius:22px;border:0;background:#ff6a13;color:#fff">${left > 0 ? '关闭（不看了）' : '关闭并领取'}</button>`;
            adBox.querySelector('#__adClose').onclick = () => close(left <= 0);
          };
          adBox.style.display = 'flex';
          paint();
          clearInterval(adTimer);
          adTimer = setInterval(() => {
            left -= 1;
            paint();
            if (left <= 0) clearInterval(adTimer);
          }, 1000);
          return Promise.resolve();
        },
      };
    },
  };

  // 提示、加载遮罩和模拟广告用的几个浮层，都盖在画布上面
  const layer = (css) => {
    const el = document.createElement('div');
    el.style.cssText = 'position:absolute;display:none;z-index:10;font-family:-apple-system,"PingFang SC",sans-serif;color:#fff;' + css;
    // 浮层上的点击不要传到游戏里
    ['mousedown', 'touchstart', 'touchend'].forEach((t) => el.addEventListener(t, (e) => e.stopPropagation()));
    stage.appendChild(el);
    return el;
  };
  const mask = layer('inset:0;');
  const tipBox = layer('left:50%;top:46%;transform:translate(-50%,-50%);max-width:70%;padding:12px 18px;border-radius:8px;background:rgba(0,0,0,.78);font-size:14px;line-height:1.5;text-align:center;pointer-events:none;z-index:12;');
  const adBox = layer('inset:0;background:#111;flex-direction:column;align-items:center;justify-content:center;z-index:11;');
  const shareBox = layer('inset:0;background:#1b1b1b;flex-direction:column;align-items:center;justify-content:center;z-index:11;');
  let tipTimer = 0;
  let adTimer = 0;
  window.__tips = [];
  // 没有真实广告位：给游戏一个假的广告位 ID，让"看视频"走上面的模拟广告
  if (opts.ad !== 'none' && !opts.adUnitId) opts.adUnitId = 'adunit-preview';

  // ---------------- 开放数据域（模拟） ----------------
  // 把 minigame/openDataContext/index.js 原样放进一个只看得到假 wx 的函数里跑；好友数据是下面编的。
  // 预览地址可以加参数：friends=0 没有好友上榜；friends=20 好友很多；friends=deny 拒绝过授权；friends=fail 接口报错；
  // self=noid 拿不到自己的 openId
  const sharedCanvas = document.createElement('canvas');
  const friendMode = opts.friends;
  let friendAuth = friendMode === 'deny' ? 'denied' : 'unknown';
  let onOpenMessage = null;
  const pendingMessages = [];
  const openDataContext = {
    canvas: sharedCanvas,
    postMessage(msg) {
      const copy = JSON.parse(JSON.stringify(msg));
      if (!onOpenMessage) pendingMessages.push(copy);
      else setTimeout(() => onOpenMessage(copy), 0);
    },
  };

  const thisWeek = Math.floor((Date.now() / 86400000 + 8 / 24 + 3) / 7);
  const AVATAR_COLORS = ['#3d7a5f', '#b5553c', '#4a6fa5', '#8a6d3b', '#7a4f8f', '#3f8a8a', '#a0527a'];
  // 用画布现画一张头像，省得预览时去外网拉图
  function mockAvatar(name, i) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 96;
    const c = cv.getContext('2d');
    c.fillStyle = AVATAR_COLORS[i % AVATAR_COLORS.length];
    c.fillRect(0, 0, 96, 96);
    c.fillStyle = 'rgba(255,255,255,0.92)';
    c.font = 'bold 48px "PingFang SC", sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(Array.from(name)[0], 48, 52);
    return cv.toDataURL('image/png');
  }
  function mockFriends() {
    if (friendMode === 0) return [];
    const list = [
      ['阿杰', thisWeek, 158410, 2000],
      ['山里的风🌲', thisWeek, 167900, 2000],
      ['Lynn', thisWeek, 179120, 2000],
      ['老周（周末不加班）爱跑山', thisWeek, 192660, 2000],
      ['小鹿', thisWeek, 0, 1460],
      ['大刘', thisWeek, 0, 820],
      ['上周冠军（不该出现）', thisWeek - 1, 140000, 2000],
    ];
    if (friendMode === 20) {
      for (let i = 0; i < 14; i++) list.push([`跑友 ${i + 1}`, thisWeek, 150000 + i * 4300, 2000]);
    }
    return list.map(([nickname, wk, t, d], i) => ({
      openid: 'friend-' + i,
      nickname,
      avatarUrl: mockAvatar(nickname, i),
      KVDataList: [{ key: 'week', value: JSON.stringify({ wk, t, d, ts: 0 }) }],
    }));
  }
  const cloudGet = () => {
    const raw = localStorage.getItem('md:cloud:week');
    return raw ? [{ key: 'week', value: raw }] : [];
  };
  const later = (fn, ms = 120) => setTimeout(fn, ms); // 模拟网络延迟
  const openWx = {
    getSharedCanvas: () => sharedCanvas,
    onMessage(cb) {
      onOpenMessage = cb;
      pendingMessages.splice(0).forEach((m) => setTimeout(() => cb(m), 0));
    },
    createImage: () => new Image(),
    getUserCloudStorage({ success, complete }) {
      later(() => {
        if (success) success({ KVDataList: cloudGet() });
        if (complete) complete();
      });
    },
    setUserCloudStorage({ KVDataList, success, complete }) {
      later(() => {
        KVDataList.forEach((kv) => localStorage.setItem('md:cloud:' + kv.key, kv.value));
        if (success) success({});
        if (complete) complete();
      });
    },
    getUserInfo({ success, complete }) {
      later(() => {
        // self=noid：模拟拿不到自己 openId 的情况（榜单要靠别的办法认出哪一行是自己）
        const info = { nickName: '我自己', avatarUrl: mockAvatar('我', 6) + (opts.self === 'noid' ? '#other-size' : '') };
        if (opts.self !== 'noid') info.openId = 'self';
        if (success) success({ data: [info] });
        if (complete) complete();
      });
    },
    getFriendCloudStorage({ success, fail, complete }) {
      later(() => {
        if (friendAuth !== 'granted') {
          if (fail) fail({ errMsg: 'getFriendCloudStorage:fail auth deny' });
        } else if (friendMode === 'fail') {
          if (fail) fail({ errMsg: 'getFriendCloudStorage:fail game appid no privacy api permission' });
        } else if (success) {
          const data = mockFriends();
          const mine = cloudGet();
          if (mine.length) data.push({ openid: 'self', nickname: '我自己', avatarUrl: mockAvatar('我', 6), KVDataList: mine });
          success({ data });
        }
        if (complete) complete();
      }, 260);
    },
  };
  fetch(ASSET_BASE + 'openDataContext/index.js')
    .then((r) => r.text())
    .then((code) => new Function('wx', code)(openWx))
    .catch((e) => console.error('开放数据域加载失败', e));
})();
