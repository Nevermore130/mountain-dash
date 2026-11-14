// 入口：创建渲染器、主循环、自适应画质
import * as THREE from 'three';
import { mainCanvas, getScreen, getBenchmarkLevel, WX, G, raf, options, setupShareMenu } from './platform.js';
import { shareInfo } from './social.js';
import { initRewardedAd } from './ads.js';
import { ENERGY } from './config.js';
import { Game } from './game.js';

// 画质档位：帧率不够时逐级下调
// hi = 精模范围（分块数），grass = 草丛范围，ahead = 最远生成的分块数
const QUALITY = [
  { dpr: 2, shadow: 1024, hi: 2, grass: 3, ahead: 10 },
  { dpr: 1.5, shadow: 1024, hi: 1, grass: 3, ahead: 10 },
  { dpr: 1.5, shadow: 512, hi: 1, grass: 2, ahead: 9 },
  { dpr: 1.25, shadow: 0, hi: 0, grass: 2, ahead: 8 },
  { dpr: 1, shadow: 0, hi: -1, grass: 1, ahead: 7 },
];

function boot() {
  let screen = getScreen();
  const canvas = mainCanvas;
  // 小游戏的画布不是 DOM 元素，补上 three.js 会调用的几个空方法
  if (!canvas.addEventListener) canvas.addEventListener = () => {};
  if (!canvas.removeEventListener) canvas.removeEventListener = () => {};
  if (!canvas.style) canvas.style = {};

  const attrs = { alpha: false, antialias: true, depth: true, stencil: false, premultipliedAlpha: true, preserveDrawingBuffer: false, powerPreference: 'high-performance' };
  // 固定走 WebGL1：小游戏各端支持最稳，预览与真机走同一条渲染路径
  const gl = canvas.getContext('webgl', attrs);
  if (!gl) throw new Error('WebGL 不可用');
  if (!gl.getContextAttributes) gl.getContextAttributes = () => attrs;

  const renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x9fb4c8, 1);

  let level = 0;
  const bench = getBenchmarkLevel();
  if (bench > 0 && bench < 12) level = 2;
  else if (bench > 0 && bench < 22) level = 1;
  if (typeof options.quality === 'number') level = Math.max(0, Math.min(QUALITY.length - 1, options.quality));

  const applySize = () => {
    const q = QUALITY[level];
    renderer.setPixelRatio(Math.min(screen.pixelRatio, q.dpr));
    renderer.setSize(screen.width, screen.height, false);
  };
  applySize();

  const game = new Game(renderer, screen);
  const applyQuality = () => {
    const q = QUALITY[level];
    game.env.setShadowQuality(q.shadow);
    game.terrain.setDetail(q.hi, q.grass, q.ahead);
    game.resize(screen);
  };
  applyQuality();
  G.__mountainDash = game;
  G.__mountainDashQuality = () => level;

  const setLevel = (l) => {
    level = l;
    applySize();
    applyQuality();
  };

  if (WX.onWindowResize) {
    WX.onWindowResize(() => {
      screen = getScreen();
      applySize();
      game.resize(screen);
    });
  }

  let last = Date.now();
  let hidden = false;
  if (WX.onHide) {
    WX.onHide(() => {
      hidden = true;
      game.onHide();
    });
  }
  if (WX.onShow) {
    WX.onShow(() => {
      hidden = false;
      last = Date.now();
      game.onShow();
    });
  }
  try {
    if (WX.setKeepScreenOn) WX.setKeepScreenOn({ keepScreenOn: true });
  } catch (e) {}
  // 右上角菜单的转发：文案里带上自己本周的成绩
  setupShareMenu(shareInfo);
  // 体力值用完后靠看广告补的话，提前创建激励视频广告，玩家点一下就能播
  if (ENERGY.refill === 'ad') initRewardedAd();

  // 帧率统计，用于自适应画质
  let accT = 0;
  let accN = 0;
  let warmup = 4;
  let slowWindows = 0;
  const adaptive = options.quality === undefined;

  const frame = () => {
    raf(frame);
    if (hidden) return;
    const now = Date.now();
    const raw = (now - last) / 1000;
    last = now;
    const dt = Math.min(0.05, Math.max(0.001, raw));
    game.update(dt);
    game.render();

    if (adaptive && !game.paused) {
      if (warmup > 0) {
        warmup -= raw;
      } else if (raw < 0.25) {
        accT += raw;
        accN++;
        if (accT >= 2) {
          const fps = accN / accT;
          accT = 0;
          accN = 0;
          slowWindows = fps < 44 ? slowWindows + 1 : 0;
          if (slowWindows >= 2 && level < QUALITY.length - 1) {
            slowWindows = 0;
            warmup = 2;
            setLevel(level + 1);
          }
        }
      }
    }
  };
  raf(frame);
}

try {
  boot();
} catch (err) {
  console.error('[mountain-dash] 启动失败', err);
}
