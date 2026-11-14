// 游戏主体：场景搭建、状态机、玩家与对手逻辑、跟拍相机
import * as THREE from 'three';
import { ACTIVE_RIVALS, AID_STATIONS, ENERGY, LANE_W, PLAYER, PLAYER_MODEL, RACE_LENGTH, STAGES, clamp, lerp, stageBlend, stageIndexAt } from './config.js';
import { cx, py, grade, heading } from './track.js';
import { Terrain } from './terrain.js';
import { Environment } from './sky.js';
import { Runner, loadRunnerLibrary, setupSkinning } from './runner.js';
import { ObstacleField, generateCourse, planRow, createArch, createAidStation, createGlow, ROCK, LOG, OVER } from './obstacles.js';
import { Hud, formatTime } from './hud.js';
import { Input } from './input.js';
import { Audio } from './audio.js';
import { Dust } from './particles.js';
import { getPropAssets } from './props.js';
import { createCanvas, loadData, saveData, vibrate, options, openFriendSetting, showTip } from './platform.js';
import { submitRace, weekBest, inviteFriends, shareForEnergy } from './social.js';
import { useEnergy, addBonusEnergy } from './energy.js';
import { showRewardedAd, onAdVisible } from './ads.js';

const CAM_BACK = 5.8;
const CAM_UP = 2.75;
const CAM_FOV = 66;

// 标准配速：赛段基础速度 × 坡度修正
function parSpeed(s) {
  const base = stageBlend(s, (st) => st.speed, 80);
  return base * clamp(1 - grade(s) * 1.1, 0.8, 1.12);
}

function nameTagTexture(name) {
  const c = createCanvas(256, 96);
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(18,20,23,0.82)';
  ctx.fillRect(8, 14, 240, 68);
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 2;
  ctx.strokeRect(8, 14, 240, 68);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px "PingFang SC", "Helvetica Neue", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, 128, 50);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.generateMipmaps = false;
  t.minFilter = THREE.LinearFilter;
  return t;
}

export class Game {
  constructor(renderer, screen) {
    this.renderer = renderer;
    this.screen = screen;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CAM_FOV, screen.width / screen.height, 0.3, 2400);
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.focus = new THREE.Vector3();
    this.shake = 0;
    this.time = 0;

    this.env = new Environment(this.scene, renderer);
    this.terrain = new Terrain(this.scene);
    this.obstacles = new ObstacleField(this.scene);
    this.dust = new Dust(this.scene);
    this.props = getPropAssets();

    this.scene.add(createArch(7, 'START', '起点', 0xf2590c));
    this.scene.add(createArch(RACE_LENGTH, 'FINISH', '终点', 0xd22b2b));
    for (const a of AID_STATIONS) this.scene.add(createAidStation(a));
    // 巅峰状态时罩在玩家身上的一团蓝光
    this.aura = createGlow(0x58c4ff, 3.4, 0.5);
    this.aura.visible = false;
    this.scene.add(this.aura);

    // 玩家（runner 是人物模型，素材加载完才有）
    this.player = {
      runner: null,
      s: 0,
      speed: 0,
      lane: 0,
      laneX: 0,
      follow: 0, // 手指横向拖动的跟手量 -1..1
      y: 0,
      jumpT: -1,
      fastFall: false,
      slideT: 0,
      slideDur: PLAYER.slideDuration, // 这一次滑铲的总时长
      queuedSlide: false,
      stamina: 100,
      gels: 0,
      hydration: 0, // 已经喝了几瓶水，攒满进入巅峰状态
      shield: 0, // 登山杖：能挡一次碰撞
      combo: 0,
      bestCombo: 0,
      hits: 0,
      peaks: 0,
      invuln: 0,
      boostT: 0, // 能量胶加速剩余时间
      peakT: 0, // 巅峰状态剩余时间
      burstT: 0, // 连续闪避奖励的加速剩余时间
      rowPtr: 0,
      itemPtr: 0,
    };

    // 电脑对手（config.js 里的 RIVALS_ENABLED 关掉时这里是空的，赛道上只有玩家自己）
    this.rivals = ACTIVE_RIVALS.map((cfg) => ({ cfg, runner: null, s: cfg.start, speed: 0, lane: cfg.lane, laneX: cfg.lane * LANE_W, y: 0, jumpT: -1, slideT: 0, rowPtr: 0, finishTime: 0 }));

    this.hud = new Hud(screen);
    this.audio = new Audio();
    // 广告盖住游戏时和切到后台一样处理：比赛暂停、声音停掉；关掉广告后恢复
    onAdVisible((visible) => (visible ? this.onHide() : this.onShow()));
    this.input = new Input();
    this.input.onSwipe = (dir) => this.onSwipe(dir);
    this.input.onDrag = (k) => this.onDrag(k);
    this.input.onTap = (x, y) => this.onTap(x, y);
    this.input.onKey = (name) => this.onKey(name);

    this.best = loadData('best', 0) || 0;
    // 跑过几局了（老玩家没有这个记录，有完赛成绩就当作跑过）
    this.runs = loadData('runs', this.best ? 1 : 0) || 0;
    this.soundOn = loadData('sound', 1) !== 0;
    this.audio.setEnabled(this.soundOn);
    this.hud.soundOn = this.soundOn;
    this.autopilot = !!options.autopilot;

    // 人物素材是异步加载的：'loading' 加载中 | 'ready' | 'error'。没到 ready 之前不能开始比赛
    this.assets = 'loading';
    setupSkinning(renderer);
    this.tutorial = { rock: false, log: false, over: false };

    this.state = 'title';
    this.paused = false;
    this.raceTime = 0;
    this.worldTime = 0; // 发令后一直在走的时钟（玩家冲线后对手还在跑）
    this.countdown = 0;
    this.endTimer = 0;
    this.stage = 0;
    this.hitFlash = 0;
    this.stepAlt = false;
    this.frame = 0;

    this.resize(screen);
    this.resetRace();
    this.toTitle();
    this.loadRunners();
  }

  resize(screen) {
    this.screen = screen;
    this.camera.aspect = screen.width / screen.height;
    // 竖屏视野更窄：屏幕越瘦，纵向视角越大
    this.baseFov = clamp(CAM_FOV + (0.5 - this.camera.aspect) * 30, 52, 74);
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
    this.dust.setViewport(screen.height * this.renderer.getPixelRatio(), this.camera.fov);
    if (this.hud.W !== screen.width || this.hud.H !== screen.height) {
      this.hud.resize(screen);
      this.refreshScreen();
    }
  }

  refreshScreen() {
    if (this.state === 'title') {
      if (this.hud.screenMode === 'board') this.hud.showLeaderboard();
      else if (this.hud.screenMode === 'help') this.hud.showHelp();
      else this.hud.showTitle(this.best, this.assets);
    } else if (this.paused) this.hud.showPause();
    else if (this.result && (this.state === 'finished' || this.state === 'failed') && this.endTimer <= 0) this.hud.showResult(this.result);
    if (this.state !== 'title') this.hud.setRaceHudVisible(true);
  }

  // ---------------- 人物素材 ----------------

  loadRunners() {
    this.assets = 'loading';
    if (this.state === 'title') this.hud.showTitle(this.best, this.assets);
    loadRunnerLibrary([PLAYER_MODEL, ...ACTIVE_RIVALS.map((cfg) => cfg.model)])
      .then((lib) => {
        const make = (holder, model, phase, name) => {
          const r = new Runner(lib, model, { phase });
          r.root.rotation.order = 'YXZ';
          if (name) r.addNameTag(nameTagTexture(name), 256 / 96);
          this.scene.add(r.root);
          holder.runner = r;
        };
        make(this.player, PLAYER_MODEL, 0, null);
        this.rivals.forEach((r, i) => make(r, r.cfg.model, (i + 1) * 0.27, r.cfg.name));
        this.assets = 'ready';
        this.animateRunners(0);
      })
      .catch((err) => {
        // 读不到文件 / 解析失败：场景照常显示，首页给出提示和重试按钮
        console.error('[mountain-dash] 人物素材加载失败', err);
        this.assets = 'error';
      })
      .then(() => {
        // 正在看好友榜或玩法说明就不打断，返回首页时再按最新的加载状态画
        if (this.state === 'title' && this.hud.screenMode === 'title') this.hud.showTitle(this.best, this.assets);
      });
  }

  // ---------------- 状态切换 ----------------

  resetRace() {
    // 每一局的障碍和补给都重新随机排布；只有第一次玩时，开头四排是固定的教学关
    const seed = typeof options.seed === 'number' ? options.seed : (((Date.now() & 0xffffff) ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0) + 1;
    const tutorial = options.tutorial !== undefined ? !!options.tutorial : this.runs === 0 && !this.autopilot;
    this.course = generateCourse(seed, { tutorial });
    this.obstacles.reset(this.course);
    const p = this.player;
    Object.assign(p, {
      s: typeof options.startAt === 'number' ? options.startAt : 0,
      speed: 0,
      lane: 0,
      laneX: 0,
      follow: 0, // 手指横向拖动的跟手量 -1..1
      y: 0,
      jumpT: -1,
      fastFall: false,
      slideT: 0,
      slideDur: PLAYER.slideDuration,
      queuedSlide: false,
      stamina: 100,
      gels: 0,
      hydration: 0,
      shield: 0,
      combo: 0,
      bestCombo: 0,
      hits: 0,
      peaks: 0,
      invuln: 0,
      boostT: 0,
      peakT: 0,
      burstT: 0,
      rowPtr: 0,
      itemPtr: 0,
    });
    while (p.rowPtr < this.course.rows.length && this.course.rows[p.rowPtr].s < p.s + 30) p.rowPtr++;
    while (p.itemPtr < this.course.items.length && this.course.items[p.itemPtr].s < p.s + 30) p.itemPtr++;
    this.aidPtr = 0;
    while (this.aidPtr < AID_STATIONS.length && AID_STATIONS[this.aidPtr] < p.s + 30) this.aidPtr++;
    this.rivals.forEach((r) => {
      Object.assign(r, { s: p.s + r.cfg.start, speed: 0, lane: r.cfg.lane, laneX: r.cfg.lane * LANE_W, y: 0, jumpT: -1, slideT: 0, rowPtr: p.rowPtr, finishTime: 0 });
      if (r.runner) r.runner.reset();
    });
    if (p.runner) {
      p.runner.reset();
      p.runner.root.visible = true;
    }
    this.raceTime = 0;
    this.worldTime = 0;
    // 没有电脑对手时，顶部显示这一周要超过的成绩
    const wb = weekBest();
    this.weekText = wb.t > 0 ? `本周最佳 ${formatTime(wb.t / 1000)}` : wb.d > 0 ? `本周最远 ${wb.d} m` : '本周首跑';
    this.stage = stageIndexAt(p.s);
    this.result = null;
    this.endTimer = 0;
    this.hitFlash = 0;
    this.shake = 0;
    this.terrain.rebuildAll(p.s);
    this.snapCamera = true;
  }

  toTitle() {
    this.state = 'title';
    this.paused = false;
    this.hud.setRaceHudVisible(false);
    this.hud.clearToast();
    this.hud.showTitle(this.best, this.assets);
  }

  // 开一局比赛：消耗 1 点体力值；体力值用完了就先转发给好友（或看一段激励视频），完成后临时加一点再开
  tryStart() {
    // 调试用的自动驾驶不占体力值
    if (this.autopilot || useEnergy()) {
      this.startCountdown();
      return;
    }
    const refill = ENERGY.refill === 'ad' ? showRewardedAd : shareForEnergy;
    refill((result) => {
      if (result === 'cancelled') {
        showTip('转发给好友后才能再跑一局');
        return;
      }
      if (result === 'skipped') {
        showTip('完整看完视频才能再跑一局');
        return;
      }
      if (result === 'unavailable') {
        if (!ENERGY.freeOnAdError) {
          showTip('暂时没有可以播放的视频，请稍后再试');
          return;
        }
        showTip('视频暂时放不出来，这一局免费送你');
      }
      addBonusEnergy();
      if (useEnergy()) this.startCountdown();
      else this.refreshScreen();
    });
  }

  startCountdown() {
    this.audio.unlock();
    this.resetRace();
    this.state = 'countdown';
    this.paused = false;
    this.countdown = 3.2;
    this.lastCount = 4;
    this.hud.hideScreen();
    this.hud.setRaceHudVisible(true);
    this.hud._topAcc = 1;
  }

  startRace() {
    this.state = 'running';
    if (!this.autopilot) saveData('runs', ++this.runs);
    this.hud.toast('GO!', '滑动屏幕控制跑者', { size: 64, color: '#ff8a2b', duration: 1.1 });
    this.audio.beep(true);
  }

  togglePause() {
    if (this.state !== 'running' && this.state !== 'countdown') return;
    this.paused = !this.paused;
    this.player.follow = 0;
    if (this.paused) {
      this.hud.showPause();
      this.audio.suspend();
    } else {
      this.hud.hideScreen();
      this.audio.resume();
    }
  }

  onHide() {
    if ((this.state === 'running' || this.state === 'countdown') && !this.paused) this.togglePause();
    else this.audio.suspend();
  }

  onShow() {
    if (!this.paused) this.audio.resume();
    // 切回来时可能已经过了 0 点，首页上的体力值和本周成绩重新画一遍
    if (this.state === 'title' && this.hud.screenMode === 'title') this.hud.showTitle(this.best, this.assets);
  }

  finishRace() {
    const p = this.player;
    this.state = 'finished';
    this.endTimer = 3.5; // 留出减速、握拳庆祝的时间再弹成绩
    const ahead = this.rivals.filter((r) => r.finishTime > 0).length;
    const rank = ahead + 1;
    // 调试用的自动驾驶成绩不记入个人最佳
    const isRecord = !this.autopilot && (!this.best || this.raceTime < this.best);
    if (isRecord) {
      this.best = this.raceTime;
      saveData('best', this.best);
    }
    this.finalRank = rank;
    const improved = this.submitWeek(true);
    this.result = { finished: true, time: this.raceTime, rank, total: this.rivals.length + 1, avgSpeed: RACE_LENGTH / this.raceTime, bestCombo: p.bestCombo, hits: p.hits, peaks: p.peaks, distance: RACE_LENGTH, stage: STAGES.length - 1, best: this.best, isRecord, weekBest: improved };
    const head = !this.rivals.length ? (improved ? '冲线！本周最佳' : '冲线！') : rank === 1 ? '冲线！第 1 名' : `冲线！第 ${rank} 名`;
    this.hud.toast(head, formatTime(this.raceTime), { size: 36, color: '#ffc247', duration: 2.3 });
    this.audio.finish();
    vibrate(true);
  }

  failRace() {
    const p = this.player;
    this.state = 'failed';
    this.endTimer = 3.0; // 减速、倒地之后再弹成绩
    const improved = this.submitWeek(false);
    this.result = { finished: false, time: this.raceTime, rank: 0, total: this.rivals.length + 1, avgSpeed: p.s / Math.max(1, this.raceTime), bestCombo: p.bestCombo, hits: p.hits, peaks: p.peaks, distance: p.s, stage: this.stage, best: this.best, isRecord: false, weekBest: improved };
    this.hud.toast('体力耗尽', '跑不动了…', { size: 40, color: '#ff6b5a', duration: 1.9 });
    this.audio.fail();
    vibrate(true);
  }

  // 把这一局的成绩记到本周最佳里，并上报给微信好友榜；返回这一局有没有刷新本周最佳
  submitWeek(finished) {
    // 调试用的自动驾驶成绩不上榜
    if (this.autopilot) return false;
    return submitRace(finished, this.raceTime, this.player.s).improved;
  }

  buildStandings() {
    const p = this.player;
    const rows = this.rivals.map((r) => ({
      name: r.cfg.name,
      me: false,
      color: '#' + r.cfg.color.toString(16).padStart(6, '0'),
      time: r.finishTime > 0 ? r.finishTime : Infinity,
      s: r.s,
    }));
    rows.push({ name: '你', me: true, color: '#e8521c', time: this.result.finished ? this.raceTime : Infinity, s: this.result.finished ? p.s : this.result.distance });
    rows.sort((a, b) => (a.time !== b.time ? a.time - b.time : b.s - a.s));
    rows.forEach((row) => {
      if (row.time < Infinity) row.text = formatTime(row.time);
      else if (row.me) row.text = `未完赛 · ${Math.floor(row.s)} m`;
      else row.text = `还在路上 · ${Math.floor(Math.min(RACE_LENGTH, row.s))} m`;
    });
    return rows;
  }

  // ---------------- 输入 ----------------

  onSwipe(dir) {
    this.audio.unlock();
    if (this.state !== 'running' || this.paused || this.autopilot) return;
    this.act(dir);
  }

  // 手指横向拖动但还没到变道的程度：跑者先跟着往那边靠
  onDrag(k) {
    this.player.follow = this.state === 'running' && !this.paused && !this.autopilot ? k : 0;
  }

  // 跑者此刻该去的横向位置：所在跑线 + 跟手偏移（不会被拖出山径）
  laneTarget() {
    const p = this.player;
    const edge = LANE_W + 0.3;
    return clamp(p.lane * LANE_W + p.follow * PLAYER.laneFollow * LANE_W, -edge, edge);
  }

  // 起步快、收尾稳地靠向目标位置
  moveLane(p, target, dt) {
    const d = target - p.laneX;
    const v = clamp(Math.abs(d) * PLAYER.laneSnap, PLAYER.laneMinSpeed, PLAYER.laneSpeed);
    p.laneX += clamp(d, -v * dt, v * dt);
  }

  act(dir) {
    const p = this.player;
    if (dir === 'left' || dir === 'right') {
      const next = clamp(p.lane + (dir === 'left' ? -1 : 1), -1, 1);
      if (next !== p.lane) {
        p.lane = next;
        this.audio.lane();
      }
    } else if (dir === 'up') {
      if (p.jumpT < 0) {
        p.jumpT = 0;
        p.fastFall = false;
        p.slideT = 0;
        p.queuedSlide = false;
        this.audio.jump();
      }
    } else if (dir === 'down') {
      if (p.jumpT >= 0) {
        // 空中下滑：快速落地并接滑铲
        p.fastFall = true;
        p.queuedSlide = true;
      } else {
        p.slideT = p.slideDur = PLAYER.slideDuration;
        this.audio.slide();
      }
    }
  }

  onTap(x, y) {
    this.audio.unlock();
    const id = this.hud.hitTest(x, y);
    if (id) this.press(id);
  }

  onKey(name) {
    this.audio.unlock();
    if (name === 'gel') this.press('gel');
    else if (name === 'pause') {
      if (this.state === 'running' || this.state === 'countdown') this.togglePause();
    } else if (name === 'confirm') {
      if (this.hud.screenMode === 'board' || this.hud.screenMode === 'help') this.press('back');
      else if (this.state === 'title') this.press(this.assets === 'error' ? 'retry' : 'start');
      else if (this.paused) this.press('resume');
      else if (this.hud.screenMode === 'result') this.press('restart');
    }
  }

  press(id) {
    switch (id) {
      case 'start':
      case 'restart':
        // 人物还没加载完不能开始
        if (this.assets === 'ready') this.tryStart();
        break;
      case 'retry':
        if (this.assets === 'error') this.loadRunners();
        break;
      case 'home':
        this.resetRace();
        this.toTitle();
        break;
      case 'resume':
        if (this.paused) this.togglePause();
        break;
      case 'pause':
        this.togglePause();
        break;
      case 'sound':
        this.soundOn = !this.soundOn;
        this.hud.soundOn = this.soundOn;
        this.audio.setEnabled(this.soundOn);
        saveData('sound', this.soundOn ? 1 : 0);
        this.hud._topAcc = 1;
        break;
      case 'gel':
        this.useGel();
        break;
      case 'board':
        // 首页的"本周好友榜"
        if (this.state === 'title') this.hud.showLeaderboard();
        break;
      case 'help':
        // 首页的"玩法说明"
        if (this.state === 'title') this.hud.showHelp();
        break;
      case 'back':
        if (this.state === 'title') this.hud.showTitle(this.best, this.assets);
        break;
      case 'share':
        inviteFriends();
        break;
      case 'auth':
        // 之前拒绝过"使用你的微信朋友信息"：去设置页打开，回来后重画榜单
        openFriendSetting(() => this.refreshScreen());
        break;
    }
  }

  useGel() {
    const p = this.player;
    if (this.state !== 'running' || this.paused || p.gels <= 0) return;
    p.gels--;
    p.stamina = Math.min(100, p.stamina + PLAYER.gelStamina);
    p.boostT = PLAYER.gelBoostTime;
    this.hud.toast('能量胶！', `体力 +${PLAYER.gelStamina}% · 加速 ${PLAYER.gelBoostTime} 秒`, { color: '#ffc247' });
    this.audio.boost();
    vibrate(false);
  }

  // 水攒满了：进入巅峰状态（加速、无敌、撞碎障碍、不掉体力）
  startPeak() {
    const p = this.player;
    p.hydration = 0;
    p.peakT = PLAYER.peakTime;
    p.peaks++;
    this.hud.toast('巅峰状态！', `无敌冲刺 ${PLAYER.peakTime} 秒 · 障碍一撞就碎`, { size: 38, color: '#7fd8ff', duration: 1.6 });
    this.audio.peak();
    vibrate(true);
  }

  // ---------------- 每帧更新 ----------------

  update(dt) {
    this.time += dt;
    this.frame = (this.frame + 1) | 0;
    const p = this.player;
    const hud = this.hud;

    if (!this.paused) {
      if (this.state === 'countdown') {
        this.countdown -= dt;
        const n = Math.ceil(this.countdown);
        if (n !== this.lastCount && n >= 1 && n <= 3) {
          this.lastCount = n;
          hud.toast(String(n), n === 3 ? '各就各位' : n === 2 ? '预备' : '', { size: 110, duration: 0.95 });
          this.audio.beep(false);
        }
        if (this.countdown <= 0) this.startRace();
      }

      if (this.state === 'running' || this.state === 'finished' || this.state === 'failed') this.worldTime += dt;
      if (this.state === 'running') {
        this.raceTime += dt;
        if (this.autopilot) this.autoDrive();
        this.updatePlayer(dt);
      } else if (this.state === 'finished' || this.state === 'failed') {
        // 冲线后慢慢减速
        p.speed = Math.max(0, p.speed - dt * (this.state === 'finished' ? 6.5 : 7));
        p.s += p.speed * dt;
        p.follow = 0;
        this.moveLane(p, this.laneTarget(), dt);
        this.updateJump(p, dt);
        if (this.endTimer > 0) {
          this.endTimer -= dt;
          if (this.endTimer <= 0) {
            if (this.rivals.length) this.result.standings = this.buildStandings();
            hud.setRaceHudVisible(false);
            hud.showResult(this.result);
          }
        }
      }

      if (this.state !== 'title') this.updateRivals(dt);
      this.animateRunners(dt);
      this.dust.update(dt);
      this.props.windUniform.value = this.time;
    }

    // 世界跟随
    this.terrain.update(p.s, 1);
    this.obstacles.update(p.s, this.time);
    this.updateCamera(dt);
    this.focus.set(cx(p.s + 8), py(p.s + 8), -(p.s + 8));
    this.env.update(this.paused ? 0 : dt, p.s, this.focus, this.camera);
    this.terrain.setFogDensity(this.scene.fog.density);
    this.dust.setTint(this.env.fogColor, this.env.sunColor);

    // HUD
    if (this.state !== 'title') {
      const d = this.hudData();
      hud.updateRace(dt, d);
    } else {
      hud.updateToastOnly(dt);
    }
    this.hitFlash = Math.max(0, this.hitFlash - dt * 1.8);
    const low = this.state === 'running' && p.stamina < 30 ? (0.3 + 0.2 * Math.sin(this.time * 6)) * (1 - p.stamina / 30) : 0;
    const racing = this.state === 'running';
    if (this.hitFlash > 0.01 || low > 0.01) hud.setVignette(Math.max(this.hitFlash * 0.75, low), 0.85, 0.06, 0.02);
    else if (racing && p.peakT > 0) hud.setVignette(0.3 + 0.06 * Math.sin(this.time * 9), 0.25, 0.7, 1.0);
    else if (racing && p.boostT > 0) hud.setVignette(0.22, 1.0, 0.55, 0.1);
    else if (racing && p.burstT > 0) hud.setVignette(0.14, 1.0, 0.7, 0.3);
    else hud.setVignette(0, 0, 0, 0);

    this.audio.setSpeed(this.state === 'title' || this.paused ? 0.1 : clamp(p.speed / 15, 0, 1));
  }

  hudData() {
    const p = this.player;
    let rank = 1;
    let aheadGap = Infinity;
    let behindGap = Infinity;
    for (const r of this.rivals) {
      const gap = r.s - p.s;
      if (gap > 0) {
        rank++;
        aheadGap = Math.min(aheadGap, gap);
      } else behindGap = Math.min(behindGap, -gap);
    }
    if (this.state === 'finished') rank = this.finalRank;
    let gapText;
    if (this.state === 'finished') gapText = '已完赛';
    else if (!this.rivals.length) gapText = this.weekText;
    else if (rank === 1) gapText = behindGap < Infinity ? `领先 ${Math.max(1, Math.round(behindGap))}m` : '领先';
    else gapText = `距前方 ${Math.max(1, Math.round(aheadGap))}m`;
    return {
      time: this.raceTime,
      speed: p.speed,
      stamina: p.stamina,
      rank,
      total: this.rivals.length + 1,
      gapText,
      stage: this.stage,
      combo: p.combo,
      gels: p.gels,
      boost: p.boostT,
      hydration: p.hydration,
      peak: p.peakT,
      shield: p.shield,
      burst: p.burstT,
      distance: Math.max(0, p.s),
      rivals: this.rivals.map((r) => r.s),
    };
  }

  updateJump(o, dt) {
    if (o.jumpT < 0) return false;
    if (o.fastFall) {
      o.y -= 16 * dt;
      if (o.y <= 0) {
        o.y = 0;
        o.jumpT = -1;
        o.fastFall = false;
        return true;
      }
      return false;
    }
    o.jumpT += dt;
    const t = o.jumpT / PLAYER.jumpDuration;
    if (t >= 1) {
      o.y = 0;
      o.jumpT = -1;
      return true;
    }
    o.y = PLAYER.jumpHeight * 4 * t * (1 - t);
    return false;
  }

  updatePlayer(dt) {
    const p = this.player;
    const g = grade(p.s);

    // 速度
    const comboBonus = Math.min(PLAYER.comboSpeedMax, p.combo * PLAYER.comboSpeedStep);
    const staminaK = p.stamina >= 30 ? 1 : 0.78 + 0.22 * (p.stamina / 30);
    // 几种加速不叠乘，取最强的一种
    const peak = p.peakT > 0;
    const boost = peak ? PLAYER.peakBoost : p.boostT > 0 ? PLAYER.gelBoost : p.burstT > 0 ? PLAYER.burstBoost : 1;
    const target = parSpeed(p.s) * (1 + comboBonus) * staminaK * boost;
    if (p.speed < target) p.speed = Math.min(target, p.speed + (peak ? 9 : 5) * dt);
    else p.speed = Math.max(target, p.speed - 6 * dt);
    p.s += p.speed * dt;
    p.boostT = Math.max(0, p.boostT - dt);
    p.burstT = Math.max(0, p.burstT - dt);
    p.invuln = Math.max(0, p.invuln - dt);
    if (peak) {
      p.peakT -= dt;
      if (Math.random() < dt * 40) this.dust.emit(cx(p.s) + p.laneX, py(p.s) + 0.05, -p.s + 0.4, 1, 0.5, 1.2);
      if (p.peakT <= 0) {
        // 巅峰状态结束：留一小段保护时间，别刚结束就撞上
        p.peakT = 0;
        p.invuln = Math.max(p.invuln, PLAYER.peakGrace);
      }
    } else {
      // 体力：上坡消耗更快
      p.stamina -= PLAYER.staminaDrain * (1 + Math.max(0, g) * 5) * dt;
    }

    // 横移 / 跳 / 滑
    this.moveLane(p, this.laneTarget(), dt);
    const landed = this.updateJump(p, dt);
    if (landed) {
      this.audio.land();
      this.dust.emit(cx(p.s) + p.laneX, py(p.s) + 0.05, -p.s, 7, 0.5, 1.3);
      if (p.queuedSlide) {
        p.queuedSlide = false;
        p.slideT = p.slideDur = PLAYER.slideDuration * 0.8;
        this.audio.slide();
      }
    }
    if (p.slideT > 0) {
      p.slideT -= dt;
      if (Math.random() < dt * 30) this.dust.emit(cx(p.s) + p.laneX, py(p.s) + 0.05, -p.s + 0.3, 1, 0.5, 0.8);
    }

    // 赛段切换
    const si = stageIndexAt(p.s);
    if (si !== this.stage && p.s < RACE_LENGTH) {
      this.stage = si;
      this.hud.toast(STAGES[si].name, si === STAGES.length - 1 ? '最后一段，全力冲刺！' : `第 ${si + 1} 赛段`, { tag: `0${si + 1} / 0${STAGES.length}`, size: 34, duration: 2.0 });
      this.audio.stage();
    }
    // 快到补给站了
    if (this.aidPtr < AID_STATIONS.length && AID_STATIONS[this.aidPtr] - p.s < p.speed * 2.6) {
      this.aidPtr++;
      this.hud.toast('补给站', '水 · 能量胶 · 登山杖　三选一', { size: 32, color: '#8fd0ff', duration: 1.5 });
    }

    this.checkCollisions();
    this.checkItems();
    this.tutorialHints();

    if (p.s >= RACE_LENGTH) {
      this.finishRace();
      return;
    }
    if (p.stamina <= 0) {
      p.stamina = 0;
      this.failRace();
    }
  }

  checkCollisions() {
    const p = this.player;
    const rows = this.course.rows;
    // 落石会前后错开最多 1.1 米，所以要等跑过这一排 2 米才算真的过去了
    while (p.rowPtr < rows.length && rows[p.rowPtr].s < p.s - 2.0) {
      const row = rows[p.rowPtr++];
      if (!row.hit && !row.skipped) this.onRowPassed(row);
    }
    for (let i = p.rowPtr; i < rows.length; i++) {
      const row = rows[i];
      const ds = row.s - p.s;
      if (ds > 2.0) break;
      if (row.hit || row.smashed) continue;
      let hit = 0;
      for (let l = 0; l < 3 && !hit; l++) {
        const cell = row.cells[l];
        if (!cell) continue;
        const dx = Math.abs(p.laneX - (l - 1) * LANE_W);
        if (cell === ROCK) {
          if (Math.abs(ds + row.off[l]) < 0.75 && dx < 0.95) hit = ROCK;
        } else if (cell === LOG) {
          if (Math.abs(ds) < 0.42 && dx < 1.0 && p.y < 0.42) hit = LOG;
        } else if (cell === OVER) {
          // 只有身体真的低下去的那一段才钻得过去（刚开始下滑、已经在起身都不算）
          const low = p.slideT > PLAYER.slideExit && p.slideDur - p.slideT >= PLAYER.slideEnter && p.y < 0.3;
          if (Math.abs(ds) < 0.36 && !low) hit = OVER;
        }
      }
      if (!hit) continue;
      if (p.peakT > 0) {
        this.smashRow(row);
      } else if (p.invuln > 0) {
        // 无敌时间里穿过去的不算撞，也不算闪避
        row.skipped = true;
      } else {
        row.hit = true;
        this.onHit(hit);
      }
    }
  }

  // 巅峰状态下撞上障碍：整排撞碎，照样算一次闪避
  smashRow(row) {
    row.smashed = true;
    this.obstacles.releaseRow(row);
    for (let l = 0; l < 3; l++) {
      if (row.cells[l]) this.dust.emit(cx(row.s) + (l - 1) * LANE_W, py(row.s) + 0.5, -row.s, 9, 0.9, 2.4);
    }
    this.shake = Math.max(this.shake, 0.5);
    this.audio.smash();
    vibrate(false);
    if (!this.hud.toastT || this.hud.toastT < 0.3) this.hud.toast('撞碎！', '', { size: 30, color: '#7fd8ff', duration: 0.6 });
  }

  onRowPassed(row) {
    const p = this.player;
    p.combo++;
    p.bestCombo = Math.max(p.bestCombo, p.combo);
    if (p.combo % PLAYER.burstEvery === 0) {
      // 每连续闪避十次，奖励一小段加速
      p.burstT = PLAYER.burstTime;
      this.audio.boost();
      this.hud.toast(p.combo >= 20 ? '行云流水！' : '节奏真稳！', `连续闪避 ×${p.combo} · 加速 ${PLAYER.burstTime} 秒`, { color: '#ffd9bf', duration: 1.2 });
    } else if (p.combo === 5) {
      this.hud.toast('漂亮！', `连续闪避 ×${p.combo}`, { color: '#ffd9bf', duration: 1.1 });
    }
  }

  onHit(kind) {
    const p = this.player;
    if (p.shield > 0) {
      // 登山杖撑住：不掉体力、不减速、连续闪避也不断
      p.shield--;
      p.invuln = 1.0;
      this.shake = Math.max(this.shake, 0.5);
      this.audio.shield();
      vibrate(false);
      this.dust.emit(cx(p.s) + p.laneX, py(p.s) + 0.6, -p.s - 0.5, 8, 0.7, 1.6);
      this.hud.toast('登山杖撑住了！', '抵挡一次碰撞', { color: '#9dff8a', duration: 1.2 });
      return;
    }
    p.hits++;
    p.combo = 0;
    p.speed *= PLAYER.hitSlow;
    p.stamina -= PLAYER.hitStamina;
    p.invuln = PLAYER.invulnerable;
    p.boostT = 0;
    p.burstT = 0;
    const spilled = p.hydration > 0;
    if (spilled) p.hydration--;
    p.runner.hit();
    this.shake = 1;
    this.hitFlash = 1;
    this.audio.hit();
    vibrate(true);
    this.dust.emit(cx(p.s) + p.laneX, py(p.s) + 0.6, -p.s - 0.5, 14, 0.9, 2);
    const msg = kind === ROCK ? '撞上落石！' : kind === LOG ? '被倒木绊倒！' : '撞到树干！';
    const tip = kind === ROCK ? '左右滑动变道绕开' : kind === LOG ? '上滑跳过去' : '下滑从底下钻过';
    this.hud.toast(msg, `体力 -${PLAYER.hitStamina}%${spilled ? ' · 洒了一瓶水' : ''} · ${tip}`, { color: '#ff6b5a', duration: 1.3 });
  }

  checkItems() {
    const p = this.player;
    const items = this.course.items;
    while (p.itemPtr < items.length && items[p.itemPtr].s < p.s - 1.2) p.itemPtr++;
    for (let i = p.itemPtr; i < items.length; i++) {
      const it = items[i];
      if (it.s - p.s > 1.2) break;
      if (it.taken) continue;
      // 横向判定比半个跑线间距略小：站在两条线中间也不会同时拿到两样
      if (Math.abs(p.laneX - it.lane * LANE_W) > 0.8) continue;
      const rel = it.y - p.y;
      if (rel < -0.3 || rel > 1.75) continue;
      this.obstacles.takeItem(it);
      // 成组的补给只能拿一样，其余的随之消失
      if (it.group) {
        for (let j = p.itemPtr; j < items.length && items[j].s - it.s < 0.5; j++) {
          if (items[j].group === it.group && !items[j].taken) this.obstacles.takeItem(items[j]);
        }
      }
      this.collect(it.type);
    }
  }

  collect(type) {
    const p = this.player;
    const full = () => {
      p.stamina = Math.min(100, p.stamina + PLAYER.fullStamina);
      return `体力 +${PLAYER.fullStamina}%`;
    };
    if (type === 'gel') {
      this.audio.gel();
      if (p.gels < PLAYER.maxGels) {
        p.gels++;
        this.hud.toast('拿到能量胶', `点击下方按钮使用（${p.gels}/${PLAYER.maxGels}）`, { color: '#ffc247', duration: 1.1 });
      } else {
        // 背包满了就直接吃掉，补一点体力
        this.hud.toast(full(), '能量胶已满，直接补给', { color: '#ffc247', duration: 1.0 });
      }
    } else if (type === 'water') {
      this.audio.water();
      p.stamina = Math.min(100, p.stamina + PLAYER.waterStamina);
      p.hydration++;
      if (p.hydration >= PLAYER.hydrationMax) this.startPeak();
      else {
        const left = PLAYER.hydrationMax - p.hydration;
        this.hud.toast(`补水 ${p.hydration}/${PLAYER.hydrationMax}`, p.peakT > 0 ? '为下一次巅峰状态攒着' : `再喝 ${left} 瓶进入巅峰状态`, { color: '#7fd8ff', duration: 1.1 });
      }
    } else if (type === 'pole') {
      this.audio.pole();
      if (p.shield < 1) {
        p.shield = 1;
        this.hud.toast('拿到登山杖', '可以抵挡一次碰撞', { color: '#9dff8a', duration: 1.2 });
      } else {
        this.hud.toast(full(), '已经有登山杖了，直接补给', { color: '#9dff8a', duration: 1.0 });
      }
    }
  }

  // 第一次遇到每种障碍时提前给出操作提示
  tutorialHints() {
    const p = this.player;
    const rows = this.course.rows;
    const row = rows[p.rowPtr];
    if (!row || this.autopilot) return;
    const ds = row.s - p.s;
    if (ds > p.speed * 1.7 || ds < p.speed * 0.9) return;
    const t = this.tutorial;
    const hasRock = row.cells.indexOf(ROCK) >= 0;
    if (row.cells[0] === OVER && !t.over) {
      t.over = true;
      this.hud.toast('↓ 下滑', '从横倒的树干下面滑铲钻过', { size: 40, duration: 1.5 });
    } else if (row.cells.indexOf(LOG) >= 0 && !hasRock && !t.log) {
      t.log = true;
      this.hud.toast('↑ 上滑', '跳过倒木', { size: 40, duration: 1.5 });
    } else if (hasRock && !t.rock) {
      t.rock = true;
      this.hud.toast('← 左右滑动 →', '变道绕开落石', { size: 34, duration: 1.5 });
    }
  }

  // 调试用自动驾驶：和对手共用同一套避障决策
  autoDrive() {
    const p = this.player;
    const row = this.course.rows[p.rowPtr];
    // 体力吃紧，或者手里攒了两袋以上，就吃一袋（已经在加速时不浪费）
    if (p.gels > 0 && p.boostT <= 0 && p.peakT <= 0 && (p.stamina < 55 || p.gels >= 2)) this.useGel();
    const ds = row ? row.s - p.s : Infinity;
    if (ds > p.speed * 0.95) {
      // 顺路去捡补给（只捡下一排障碍之前、来得及拿的）
      const items = this.course.items;
      for (let i = p.itemPtr; i < items.length; i++) {
        const it = items[i];
        if (it.s - p.s > p.speed * 1.2 || (row && it.s > row.s - 4)) break;
        if (it.taken || it.s < p.s + 0.5) continue;
        if (it.lane !== p.lane) this.act(it.lane < p.lane ? 'left' : 'right');
        break;
      }
      return;
    }
    const plan = planRow(row, p.lane);
    if (plan.lane !== p.lane) this.act(plan.lane < p.lane ? 'left' : 'right');
    else if (ds < -0.5) return;
    else if (plan.action === 'jump' && ds < p.speed * PLAYER.jumpDuration * 0.5 + 0.2 && p.jumpT < 0) this.act('up');
    else if (plan.action === 'slide' && ds < p.speed * 0.3 + 0.4 && p.slideT <= 0) this.act('down');
  }

  updateRivals(dt) {
    const p = this.player;
    const rows = this.course.rows;
    const racing = this.state !== 'countdown';
    this.rivals.forEach((r, i) => {
      if (!racing) return;
      if (r.finishTime > 0) {
        r.speed = Math.max(0, r.speed - 4 * dt);
      } else {
        const prog = clamp(r.s / RACE_LENGTH, 0, 1) * (r.cfg.curve.length - 1);
        const ci = Math.min(r.cfg.curve.length - 2, Math.floor(prog));
        const k = lerp(r.cfg.curve[ci], r.cfg.curve[ci + 1], prog - ci);
        const target = parSpeed(r.s) * k * (1 + 0.012 * Math.sin(this.time * 0.37 + i * 2.1));
        r.speed = r.speed < target ? Math.min(target, r.speed + 4.6 * dt) : Math.max(target, r.speed - 4 * dt);
      }
      r.s += r.speed * dt;
      if (!r.finishTime && r.s >= RACE_LENGTH) r.finishTime = this.worldTime;

      // 避障
      // 落石会前后错开，跑过 2 米才算过了这一排（和玩家的判定一致）
      while (r.rowPtr < rows.length && rows[r.rowPtr].s < r.s - 2.0) r.rowPtr++;
      const row = rows[r.rowPtr];
      let wantLane = r.cfg.lane;
      const ds = row ? row.s - r.s : Infinity;
      if (row && ds < r.speed * 1.0) {
        // 身边有别的跑者时，尽量不往他那条线上挤
        let avoid = Math.abs(p.s - r.s) < 3.5 ? p.lane : null;
        for (const o of this.rivals) if (o !== r && Math.abs(o.s - r.s) < 2.5) avoid = o.lane;
        if (avoid === r.lane) avoid = null;
        const plan = planRow(row, r.lane, avoid);
        wantLane = plan.lane;
        if (plan.lane === r.lane && ds > -0.5) {
          if (plan.action === 'jump' && r.jumpT < 0 && ds < r.speed * PLAYER.jumpDuration * 0.5 + 0.2) r.jumpT = 0;
          if (plan.action === 'slide' && r.slideT <= 0 && ds < r.speed * 0.3 + 0.4) r.slideT = PLAYER.slideDuration;
        }
      } else {
        // 空旷路段：玩家从身后贴上来就让出跑线
        const gap = r.s - p.s;
        if (gap > -1.5 && gap < 6 && p.lane === wantLane) wantLane = wantLane === 0 ? (i % 2 ? 1 : -1) : 0;
        // 避免和别的对手叠在一起
        for (const o of this.rivals) {
          if (o !== r && Math.abs(o.s - r.s) < 2.2 && o.lane === wantLane && o.s > r.s) wantLane = r.lane !== o.lane ? r.lane : wantLane;
        }
      }
      r.lane = wantLane;
      r.laneX += clamp(r.lane * LANE_W - r.laneX, -9 * dt, 9 * dt);
      this.updateJump(r, dt);
      if (r.slideT > 0) r.slideT -= dt;
    });
  }

  place(runner, s, laneX, y, tilt) {
    runner.root.position.set(cx(s) + laneX, py(s) + y, -s);
    runner.root.rotation.y = heading(s);
    runner.root.rotation.x = Math.atan(grade(s)) * tilt;
  }

  animateRunners(dt) {
    if (this.assets !== 'ready') return;
    const p = this.player;
    const lean = clamp((this.laneTarget() - p.laneX) * 0.35, -0.35, 0.35);
    // 首页站着，倒计时摆出起跑姿势；冲线后庆祝；体力耗尽先减速、再倒下
    let mode = 'run';
    if (this.state === 'title') mode = 'stand';
    else if (this.state === 'countdown') mode = 'ready';
    else if (this.state === 'finished') mode = 'cheer';
    else if (this.state === 'failed') mode = p.speed < 2.6 ? 'collapse' : 'run';
    const sliding = p.slideT > 0 && p.jumpT < 0;
    p.runner.animate(dt, { mode, speed: p.speed, airborne: p.jumpT >= 0, sliding, slideLeft: p.slideT, lean });
    this.place(p.runner, p.s, p.laneX, p.y, sliding ? 0.9 : 0.5);
    // 撞击后的无敌时间里闪烁
    p.runner.root.visible = p.invuln <= 0 || Math.floor(this.time * 14) % 2 === 0;
    const glowing = this.state === 'running' && p.peakT > 0;
    this.aura.visible = glowing;
    if (glowing) {
      // 快结束时闪几下提醒
      const k = p.peakT < 1 ? 0.25 + 0.3 * Math.abs(Math.sin(this.time * 14)) : 0.5 + 0.08 * Math.sin(this.time * 9);
      this.aura.material.opacity = k;
      this.aura.position.set(cx(p.s) + p.laneX, py(p.s) + p.y + (sliding ? 0.5 : 1.0), -p.s + 0.25);
    }
    if (p.runner.footDown && this.state === 'running') {
      this.stepAlt = !this.stepAlt;
      this.audio.step(this.stepAlt);
      this.dust.emit(cx(p.s) + p.laneX, py(p.s) + 0.03, -p.s + 0.2, 2, 0.25, 0.7);
    }
    for (const r of this.rivals) {
      const gap = r.s - p.s;
      // 离得很远的对手不必画，也不必算动画
      const visible = gap < 260 && gap > -30;
      r.runner.root.visible = visible;
      if (!visible) continue;
      // 远处的对手隔一帧才更新一次动画
      r.animDt = (r.animDt || 0) + dt;
      if (Math.abs(gap) > 32 && (this.frame & 1) === 0) continue;
      const adt = r.animDt;
      r.animDt = 0;
      const rl = clamp((r.lane * LANE_W - r.laneX) * 0.35, -0.3, 0.3);
      const rmode = this.state === 'title' ? 'stand' : this.state === 'countdown' ? 'ready' : r.finishTime > 0 ? 'cheer' : 'run';
      const rsliding = r.slideT > 0 && r.jumpT < 0;
      r.runner.animate(adt, { mode: rmode, speed: r.speed, airborne: r.jumpT >= 0, sliding: rsliding, slideLeft: r.slideT, lean: rl });
      this.place(r.runner, r.s, r.laneX, r.y, rsliding ? 0.9 : 0.5);
      // 阴影贴图只覆盖玩家周围二十来米，更远的对手不用投影
      r.runner.setShadow(gap < 24 && gap > -12);
      if (r.runner.footDown && Math.abs(gap) < 25) this.dust.emit(cx(r.s) + r.laneX, py(r.s) + 0.03, -r.s + 0.2, 1, 0.25, 0.6);
    }
  }

  updateCamera(dt) {
    const p = this.player;
    const cam = this.camera;
    let back = CAM_BACK;
    let up = CAM_UP;
    let lookAhead = 15;
    let side = 0;
    if (this.state === 'title') {
      // 首页：镜头在起跑线后方缓慢摇移
      const t = this.time * 0.22;
      back = 7.2 + Math.sin(t) * 0.6;
      up = 2.5 + Math.sin(t * 0.7) * 0.25;
      side = Math.sin(t * 0.9) * 1.6;
      lookAhead = 14;
    }
    if (this.state === 'failed') {
      // 力竭倒地时镜头拉远一点，别让倒下的人被底部按钮挡住
      back += 1.6;
      up += 0.6;
    }
    const sc = p.s - back;
    const tx = cx(sc) + p.laneX * 0.6 + side;
    const ty = py(sc) + up + p.y * 0.22 - (p.slideT > 0 ? 0.25 : 0);
    const tz = -sc;
    const sl = p.s + lookAhead;
    const lx = cx(sl) + p.laneX * 0.3;
    const ly = py(sl) + 1.7;
    const lz = -sl;
    if (this.snapCamera) {
      this.camPos.set(tx, ty, tz);
      this.camLook.set(lx, ly, lz);
      this.snapCamera = false;
    } else {
      const k = 1 - Math.exp(-dt * 9);
      this.camPos.x += (tx - this.camPos.x) * k;
      this.camPos.y += (ty - this.camPos.y) * k;
      this.camPos.z = tz;
      this.camLook.x += (lx - this.camLook.x) * k;
      this.camLook.y += (ly - this.camLook.y) * k;
      this.camLook.z = lz;
    }
    cam.position.copy(this.camPos);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2.6);
      const a = this.shake * this.shake * 0.28;
      cam.position.x += Math.sin(this.time * 71) * a;
      cam.position.y += Math.cos(this.time * 83) * a;
    }
    cam.lookAt(this.camLook);
    // 加速时略微拉大视角，增强速度感
    const speedK = clamp((p.speed - 9) / 8, 0, 1);
    const fov = this.baseFov + speedK * 4 + (p.peakT > 0 ? 8 : p.boostT > 0 ? 5 : p.burstT > 0 ? 3 : 0);
    if (Math.abs(fov - cam.fov) > 0.02) {
      cam.fov += (fov - cam.fov) * Math.min(1, dt * 4);
      cam.updateProjectionMatrix();
    }
  }

  render() {
    const r = this.renderer;
    r.autoClear = true;
    r.render(this.scene, this.camera);
    r.autoClear = false;
    r.clearDepth();
    r.render(this.hud.scene, this.hud.camera);
  }
}
