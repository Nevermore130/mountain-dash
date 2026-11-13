// 输入：神庙逃亡式滑动手势（左右变道 / 上跳 / 下滑铲）+ 点击；PC 端支持键盘
import { WX } from './platform.js';

const SWIPE_DIST = 22; // 触发一次滑动所需的位移（逻辑像素）
const TAP_DIST = 12;
const TAP_TIME = 450;

export class Input {
  constructor() {
    this.onSwipe = null; // (dir: 'left'|'right'|'up'|'down')
    this.onTap = null; // (x, y)
    this.onKey = null; // (name)
    this.touches = new Map();

    WX.onTouchStart((e) => {
      for (const t of e.changedTouches) {
        this.touches.set(t.identifier, { x0: t.clientX, y0: t.clientY, ox: t.clientX, oy: t.clientY, t0: Date.now(), swiped: false });
      }
    });
    WX.onTouchMove((e) => {
      for (const t of e.changedTouches) {
        const st = this.touches.get(t.identifier);
        if (!st) continue;
        const dx = t.clientX - st.ox;
        const dy = t.clientY - st.oy;
        if (Math.abs(dx) < SWIPE_DIST && Math.abs(dy) < SWIPE_DIST) continue;
        const dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : dy > 0 ? 'down' : 'up';
        st.swiped = true;
        // 重置起点：手指不抬起也能接着滑出下一个动作
        st.ox = t.clientX;
        st.oy = t.clientY;
        if (this.onSwipe) this.onSwipe(dir);
      }
    });
    const end = (e) => {
      for (const t of e.changedTouches) {
        const st = this.touches.get(t.identifier);
        if (!st) continue;
        this.touches.delete(t.identifier);
        const moved = Math.hypot(t.clientX - st.x0, t.clientY - st.y0);
        if (!st.swiped && moved < TAP_DIST && Date.now() - st.t0 < TAP_TIME && this.onTap) this.onTap(t.clientX, t.clientY);
      }
    };
    WX.onTouchEnd(end);
    if (WX.onTouchCancel) WX.onTouchCancel((e) => e.changedTouches.forEach((t) => this.touches.delete(t.identifier)));

    // PC 微信 / 浏览器预览：键盘
    if (WX.onKeyDown) {
      WX.onKeyDown((e) => {
        const key = e.key || '';
        const map = { ArrowLeft: 'left', a: 'left', A: 'left', ArrowRight: 'right', d: 'right', D: 'right', ArrowUp: 'up', w: 'up', W: 'up', ' ': 'up', ArrowDown: 'down', s: 'down', S: 'down' };
        if (map[key]) {
          if (this.onSwipe) this.onSwipe(map[key]);
          return;
        }
        const named = { e: 'gel', E: 'gel', p: 'pause', P: 'pause', Escape: 'pause', Enter: 'confirm' };
        if (named[key] && this.onKey) this.onKey(named[key]);
      });
    }
  }
}
