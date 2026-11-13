// 输入：神庙逃亡式滑动手势（左右变道 / 上跳 / 下滑铲）+ 点击；PC 端支持键盘
import { WX } from './platform.js';

// 以下距离均为逻辑像素
const H_DIST = 16; // 横向滑出这么远就变道
const H_BACK = 30; // 变道后手指往回拉这么远，就切回原来的跑线
const V_DIST = 18; // 纵向滑出这么远就起跳 / 滑铲
const DEAD = 4; // 小于这个位移当作手抖，不跟手
const BACK_DEAD = 6;
const TAP_DIST = 12;
const TAP_TIME = 450;

export class Input {
  constructor() {
    this.onSwipe = null; // (dir: 'left'|'right'|'up'|'down')
    this.onDrag = null; // (k: -1..1) 手指朝左 / 右跑线拖了多少，还没到变道的程度；松手归零
    this.onTap = null; // (x, y)
    this.onKey = null; // (name)
    this.touches = new Map();

    WX.onTouchStart((e) => {
      for (const t of e.changedTouches) {
        // axis: 这根手指本次按下已经确定的方向。'v' = 已经跳 / 滑过，'h' = 已经变过道
        this.touches.set(t.identifier, { x0: t.clientX, y0: t.clientY, t0: Date.now(), axis: null, dir: 0, ex: 0 });
      }
    });
    WX.onTouchMove((e) => {
      for (const t of e.changedTouches) {
        const st = this.touches.get(t.identifier);
        if (st) this._move(st, t.clientX, t.clientY);
      }
    });
    const end = (e, tap) => {
      for (const t of e.changedTouches) {
        const st = this.touches.get(t.identifier);
        if (!st) continue;
        this.touches.delete(t.identifier);
        if (st.axis !== 'v') this._drag(0);
        if (!tap || st.axis) continue;
        const moved = Math.hypot(t.clientX - st.x0, t.clientY - st.y0);
        if (moved < TAP_DIST && Date.now() - st.t0 < TAP_TIME && this.onTap) this.onTap(t.clientX, t.clientY);
      }
    };
    WX.onTouchEnd((e) => end(e, true));
    if (WX.onTouchCancel) WX.onTouchCancel((e) => end(e, false));

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

  _drag(k) {
    if (this.onDrag) this.onDrag(k);
  }

  _swipe(dir) {
    if (this.onSwipe) this.onSwipe(dir);
  }

  _move(st, x, y) {
    // 一次按下只出一个纵向动作：滑铲后手指回弹 / 抬起时的上移不会再被当成起跳，反之亦然
    if (st.axis === 'v') return;

    if (st.axis === 'h') {
      // 已经变过道：记住手指在变道方向上到过的最远处，从那里往回拉算"反悔"
      if ((x - st.ex) * st.dir > 0) st.ex = x;
      const back = (st.ex - x) * st.dir;
      if (back >= H_BACK) {
        st.dir = -st.dir;
        st.ex = x;
        this._drag(0);
        this._swipe(st.dir > 0 ? 'right' : 'left');
      } else {
        this._drag(-st.dir * Math.max(0, (back - BACK_DEAD) / (H_BACK - BACK_DEAD)));
      }
      return;
    }

    const dx = x - st.x0;
    const dy = y - st.y0;
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);
    if (ay >= V_DIST && ay > ax) {
      st.axis = 'v';
      this._drag(0);
      this._swipe(dy > 0 ? 'down' : 'up');
    } else if (ax >= H_DIST && ax >= ay) {
      st.axis = 'h';
      st.dir = dx > 0 ? 1 : -1;
      st.ex = x;
      this._drag(0);
      this._swipe(dx > 0 ? 'right' : 'left');
    } else {
      // 还没到变道的程度：先让跑者跟着手指往那边靠
      this._drag(ax > ay && ax > DEAD ? Math.sign(dx) * Math.min(1, (ax - DEAD) / (H_DIST - DEAD)) : 0);
    }
  }
}
