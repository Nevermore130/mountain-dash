// 音效：全部用 WebAudio 程序合成（不带任何音频文件），任何一步失败都静默降级
import { WX } from './platform.js';

export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.ready = false;
    this.wind = null;
  }

  // 需要在用户第一次触摸之后调用
  unlock() {
    if (this.ready) {
      if (this.ctx && this.ctx.state === 'suspended' && this.ctx.resume) this.ctx.resume();
      return;
    }
    try {
      if (!WX.createWebAudioContext) return;
      this.ctx = WX.createWebAudioContext();
      if (this.ctx.resume) this.ctx.resume();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.enabled ? 0.9 : 0;
      this.master.connect(this.ctx.destination);
      this.noise = this._noiseBuffer(1.5);
      this.ready = true;
      this._startWind();
    } catch (e) {
      this.ctx = null;
      this.ready = false;
    }
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.value = on ? 0.9 : 0;
  }

  suspend() {
    try {
      if (this.ctx && this.ctx.suspend) this.ctx.suspend();
    } catch (e) {}
  }

  resume() {
    try {
      if (this.ctx && this.ctx.resume) this.ctx.resume();
    } catch (e) {}
  }

  _noiseBuffer(seconds) {
    const sr = this.ctx.sampleRate || 44100;
    const buf = this.ctx.createBuffer(1, Math.floor(sr * seconds), sr);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _startWind() {
    try {
      const src = this.ctx.createBufferSource();
      src.buffer = this.noise;
      src.loop = true;
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 420;
      const g = this.ctx.createGain();
      g.gain.value = 0.05;
      src.connect(lp);
      lp.connect(g);
      g.connect(this.master);
      src.start();
      this.wind = { gain: g, filter: lp };
    } catch (e) {}
  }

  // 风声随速度变化
  setSpeed(k) {
    if (!this.wind) return;
    try {
      this.wind.gain.gain.value = 0.035 + 0.11 * k;
      this.wind.filter.frequency.value = 320 + 900 * k;
    } catch (e) {}
  }

  _burst({ freq = 800, q = 1, type = 'lowpass', dur = 0.1, gain = 0.3, rate = 1, sweep = 0 }) {
    if (!this.ready || !this.enabled) return;
    try {
      const t = this.ctx.currentTime;
      const src = this.ctx.createBufferSource();
      src.buffer = this.noise;
      src.playbackRate.value = rate;
      const f = this.ctx.createBiquadFilter();
      f.type = type;
      f.frequency.value = freq;
      f.Q.value = q;
      if (sweep) f.frequency.linearRampToValueAtTime(Math.max(40, freq + sweep), t + dur);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
      src.connect(f);
      f.connect(g);
      g.connect(this.master);
      src.start(t, Math.random() * 0.8);
      src.stop(t + dur + 0.03);
    } catch (e) {}
  }

  _tone({ freq = 440, to = 0, dur = 0.15, gain = 0.2, type = 'sine', delay = 0 }) {
    if (!this.ready || !this.enabled) return;
    try {
      const t = this.ctx.currentTime + delay;
      const o = this.ctx.createOscillator();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.0008, t);
      g.gain.linearRampToValueAtTime(gain, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
      o.connect(g);
      g.connect(this.master);
      o.start(t);
      o.stop(t + dur + 0.03);
    } catch (e) {}
  }

  step(alt) {
    // 踩在土路上的闷响 + 一点碎石声
    this._burst({ freq: alt ? 190 : 230, dur: 0.09, gain: 0.42 });
    this._burst({ freq: 2600, type: 'bandpass', q: 0.8, dur: 0.05, gain: 0.05 });
  }

  jump() {
    this._burst({ freq: 500, type: 'bandpass', q: 0.9, dur: 0.22, gain: 0.16, sweep: 900 });
  }

  land() {
    this._burst({ freq: 160, dur: 0.14, gain: 0.6 });
  }

  slide() {
    this._burst({ freq: 1500, type: 'bandpass', q: 0.6, dur: 0.5, gain: 0.2, sweep: -900 });
  }

  lane() {
    this._burst({ freq: 900, type: 'bandpass', q: 1.2, dur: 0.08, gain: 0.08 });
  }

  hit() {
    this._tone({ freq: 120, to: 45, dur: 0.3, gain: 0.6 });
    this._burst({ freq: 700, dur: 0.22, gain: 0.5 });
  }

  gel() {
    this._tone({ freq: 660, dur: 0.1, gain: 0.2, type: 'triangle' });
    this._tone({ freq: 990, dur: 0.16, gain: 0.2, type: 'triangle', delay: 0.07 });
  }

  // 喝水：两声往上冒的"咕咚"
  water() {
    this._tone({ freq: 380, to: 620, dur: 0.09, gain: 0.22 });
    this._tone({ freq: 460, to: 820, dur: 0.11, gain: 0.22, delay: 0.09 });
  }

  // 拿到登山杖：金属杖尖的两声脆响
  pole() {
    this._tone({ freq: 1560, dur: 0.07, gain: 0.14, type: 'square' });
    this._tone({ freq: 2080, dur: 0.12, gain: 0.12, type: 'square', delay: 0.06 });
  }

  // 登山杖挡下一次碰撞
  shield() {
    this._tone({ freq: 1240, to: 620, dur: 0.22, gain: 0.2, type: 'square' });
    this._burst({ freq: 1800, type: 'bandpass', q: 1.5, dur: 0.16, gain: 0.3 });
  }

  // 进入巅峰状态：一串上行音 + 起风
  peak() {
    [523, 659, 784, 1047, 1319].forEach((f, i) => this._tone({ freq: f, dur: 0.22, gain: 0.18, type: 'triangle', delay: i * 0.07 }));
    this._burst({ freq: 600, type: 'bandpass', q: 0.7, dur: 0.9, gain: 0.2, sweep: 2600 });
  }

  // 巅峰状态下撞碎障碍
  smash() {
    this._tone({ freq: 150, to: 60, dur: 0.2, gain: 0.5 });
    this._burst({ freq: 2200, type: 'bandpass', q: 0.6, dur: 0.28, gain: 0.4, sweep: -1500 });
  }

  boost() {
    this._tone({ freq: 330, to: 880, dur: 0.35, gain: 0.18, type: 'triangle' });
    this._burst({ freq: 800, type: 'bandpass', q: 0.8, dur: 0.4, gain: 0.14, sweep: 1600 });
  }

  beep(high) {
    this._tone({ freq: high ? 1040 : 620, dur: high ? 0.45 : 0.16, gain: 0.25, type: 'square' });
  }

  stage() {
    this._tone({ freq: 523, dur: 0.14, gain: 0.16, type: 'triangle' });
    this._tone({ freq: 784, dur: 0.22, gain: 0.16, type: 'triangle', delay: 0.11 });
  }

  finish() {
    [523, 659, 784, 1047].forEach((f, i) => this._tone({ freq: f, dur: 0.3, gain: 0.2, type: 'triangle', delay: i * 0.13 }));
  }

  fail() {
    [392, 330, 262].forEach((f, i) => this._tone({ freq: f, dur: 0.32, gain: 0.2, type: 'triangle', delay: i * 0.18 }));
  }
}
