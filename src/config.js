// 全局玩法与赛道参数

export const RACE_LENGTH = 2000; // 米
export const LANE_W = 1.7; // 相邻两条跑线的间距
export const TRAIL_HALF = 3.1; // 山径半宽
export const LANES = [-1, 0, 1];

export const PLAYER = {
  jumpDuration: 0.74,
  jumpHeight: 1.3,
  slideDuration: 0.78,
  slideEnter: 0.07, // 滑铲开始后这么久身体才算低下去（之前撞到横木仍然算撞）
  slideExit: 0.12, // 滑铲结束前这么久已经在起身，同样不算低
  laneSpeed: 20, // 横向换线的最高速度 m/s
  laneSnap: 22, // 越大越跟手：横向速度 = 离目标的距离 × laneSnap，夹在 laneMinSpeed 和 laneSpeed 之间
  laneMinSpeed: 5,
  laneFollow: 0.42, // 手指还没滑到变道的程度时，跑者最多先朝那边靠出多少（占跑线间距的比例）
  staminaDrain: 0.78, // 每秒基础体力消耗 (%)
  hitStamina: 12, // 撞到障碍扣的体力 (%)
  hitSlow: 0.38, // 撞到障碍后速度保留比例
  invulnerable: 1.4, // 撞后无敌时间
  gelStamina: 30,
  gelBoost: 1.14,
  gelBoostTime: 5,
  maxGels: 3,
  fullStamina: 8, // 道具已经拿满时再捡到，直接折算成这么多体力 (%)
  waterStamina: 6, // 每瓶水补的体力 (%)
  hydrationMax: 3, // 攒满这么多瓶水进入"巅峰状态"
  peakBoost: 1.26, // 巅峰状态：加速、无敌、撞碎障碍、不掉体力
  peakTime: 5,
  peakGrace: 0.8, // 巅峰状态结束后的保护时间
  burstEvery: 10, // 每连续闪避这么多次，来一小段加速
  burstBoost: 1.09,
  burstTime: 3,
  comboSpeedStep: 0.006, // 每次连续闪避增加的速度比例
  comboSpeedMax: 0.08,
};

// 赛段：玩法节奏 + 植被 + 大气光照都按赛段渐变
// 颜色均为 sRGB 0..1；az 为太阳方位角（0 = 正前方，负 = 左侧），elev 为高度角
export const STAGES = [
  {
    name: '山脚热身',
    from: 0,
    to: 300,
    speed: 9.5,
    grade: 0.03,
    gap: 1.95,
    biome: { pine: 6, leaf: 14, rock: 8, grass: 1.0, bush: 10, flower: 1.0, rocky: 0, snow: 0 },
    atmo: {
      elev: 17,
      az: -115,
      sun: [1.0, 0.76, 0.52],
      sunI: 3.6,
      top: [0.22, 0.4, 0.68],
      fog: [0.93, 0.79, 0.64],
      fogD: 0.0042,
      hemiSky: [0.66, 0.74, 0.92],
      hemiGround: [0.42, 0.34, 0.22],
      hemiI: 1.9,
      cloud: 0.46,
    },
  },
  {
    name: '第一道山脊',
    from: 300,
    to: 650,
    speed: 10.5,
    grade: 0.08,
    gap: 1.7,
    biome: { pine: 16, leaf: 8, rock: 14, grass: 0.9, bush: 8, flower: 0.6, rocky: 0.15, snow: 0 },
    atmo: {
      elev: 29,
      az: -128,
      sun: [1.0, 0.9, 0.74],
      sunI: 3.6,
      top: [0.16, 0.38, 0.76],
      fog: [0.74, 0.83, 0.93],
      fogD: 0.0032,
      hemiSky: [0.62, 0.76, 1.0],
      hemiGround: [0.4, 0.38, 0.26],
      hemiI: 1.7,
      cloud: 0.4,
    },
  },
  {
    name: '密林穿越',
    from: 650,
    to: 1050,
    speed: 11.5,
    grade: 0.04,
    gap: 1.5,
    biome: { pine: 64, leaf: 10, rock: 10, grass: 0.7, bush: 14, flower: 0.2, rocky: 0, snow: 0 },
    atmo: {
      elev: 42,
      az: -100,
      sun: [1.0, 0.95, 0.82],
      sunI: 3.4,
      top: [0.2, 0.42, 0.72],
      fog: [0.68, 0.78, 0.76],
      fogD: 0.0062,
      hemiSky: [0.58, 0.74, 0.86],
      hemiGround: [0.3, 0.36, 0.22],
      hemiI: 1.55,
      cloud: 0.56,
    },
  },
  {
    name: '碎石陡坡',
    from: 1050,
    to: 1400,
    speed: 12.2,
    grade: 0.12,
    gap: 1.4,
    biome: { pine: 5, leaf: 0, rock: 46, grass: 0.35, bush: 4, flower: 0.1, rocky: 1, snow: 0 },
    atmo: {
      elev: 57,
      az: -140,
      sun: [1.0, 0.98, 0.92],
      sunI: 3.6,
      top: [0.12, 0.33, 0.8],
      fog: [0.76, 0.84, 0.95],
      fogD: 0.0026,
      hemiSky: [0.6, 0.76, 1.0],
      hemiGround: [0.46, 0.42, 0.36],
      hemiI: 1.6,
      cloud: 0.26,
    },
  },
  {
    name: '云端山脊',
    from: 1400,
    to: 1750,
    speed: 13,
    grade: 0.05,
    gap: 1.3,
    biome: { pine: 8, leaf: 0, rock: 30, grass: 0.5, bush: 3, flower: 0.3, rocky: 0.55, snow: 1 },
    atmo: {
      elev: 34,
      az: -72,
      sun: [1.0, 0.93, 0.84],
      sunI: 3.4,
      top: [0.14, 0.3, 0.7],
      fog: [0.87, 0.91, 0.96],
      fogD: 0.0048,
      hemiSky: [0.7, 0.8, 1.0],
      hemiGround: [0.5, 0.5, 0.5],
      hemiI: 1.8,
      cloud: 0.7,
    },
  },
  {
    name: '冲刺终点',
    from: 1750,
    to: 2000,
    speed: 14,
    grade: -0.07,
    gap: 1.2,
    biome: { pine: 20, leaf: 12, rock: 12, grass: 0.9, bush: 10, flower: 0.8, rocky: 0, snow: 0.15 },
    atmo: {
      elev: 11,
      az: -38,
      sun: [1.0, 0.58, 0.3],
      sunI: 3.8,
      top: [0.2, 0.28, 0.56],
      fog: [0.98, 0.67, 0.46],
      fogD: 0.0036,
      hemiSky: [0.7, 0.62, 0.78],
      hemiGround: [0.42, 0.3, 0.22],
      hemiI: 1.9,
      cloud: 0.52,
    },
  },
];

// 玩家用的人物模型（minigame/assets/runners/<model>.glb）
export const PLAYER_MODEL = 'player';

export const RIVALS = [
  // model: 人物模型；color: 成绩榜 / 进度条上代表这名选手的颜色（和上衣一致）
  // curve: 相对标准配速的倍率，按赛程 0..1 线性插值
  // 玩家沿途能拿到能量胶 / 巅峰状态 / 连续闪避的加速，对手的配速按"会用这些加速的玩家"来定
  { name: '阿峰', model: 'afeng', color: 0x2f7fd8, lane: -1, start: 0.9, curve: [1.075, 1.085, 1.1, 1.125, 1.14, 1.15] },
  { name: '老周', model: 'laozhou', color: 0xe9ebee, lane: 1, start: 0.9, curve: [1.1, 1.1, 1.092, 1.092, 1.087, 1.092] },
  { name: '小野', model: 'xiaoye', color: 0xd9384f, lane: 0, start: 2.3, curve: [1.16, 1.14, 1.097, 1.055, 1.03, 1.022] },
];

// 电脑对手的开关。现在的玩法是和微信好友比本周成绩，赛道上不放电脑对手；
// 相关逻辑（避障 AI、名次、成绩榜）都还在，改成 true 就恢复三个电脑对手
export const RIVALS_ENABLED = false;
export const ACTIVE_RIVALS = RIVALS_ENABLED ? RIVALS : [];

// 体力值：每开一局比赛消耗 1 点，每天 0 点（北京时间）恢复；用完后转发给微信好友（或看一段激励视频广告）临时加一点。
// 注意它和比赛里的"体力"（跑步时的体力条）是两回事
export const ENERGY = {
  enabled: true, // 关掉就不限制每天能跑几局
  dailyFree: 2, // 每天免费的体力值
  // 体力值用完后怎么再跑一局：'share' = 转发给微信好友；'ad' = 看激励视频广告（要先填下面的 adUnitId）。
  // 激励视频广告位开通之前先用 'share'，开通后改成 'ad' 就换回看广告，两套逻辑都留着
  refill: 'share',
  refillReward: 1, // 转发一次 / 看完一次广告临时增加多少（只在当天有效）
  // 转发：微信不会告诉游戏有没有真的发出去，只能看从拉起转发面板到回到游戏隔了多久，不到这么多秒就当作点了取消
  shareMinSeconds: 2,
  // 激励视频广告位 ID（形如 adunit-xxxxxxxxxxxxxxxx）：小游戏后台「流量主 → 广告管理」里新建"激励视频"广告位后填到这里
  adUnitId: '',
  // 广告放不出来时（广告位还没配置、当前没有可投放的广告、微信版本太低等）怎么办：
  // true = 不为难玩家，直接送这一次；false = 提示稍后再试，这一局开不了
  freeOnAdError: true,
};

// 补给站：每个赛段开头不远处一个，三条跑线各放一样补给，只能拿一样
export const AID_STATIONS = STAGES.slice(1).map((st) => st.from + 70);

export function stageIndexAt(s) {
  for (let i = 0; i < STAGES.length; i++) if (s < STAGES[i].to) return i;
  return STAGES.length - 1;
}

export function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

export function smoothstep(a, b, x) {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

// 在赛段边界附近 window 米内平滑过渡，赛段内部保持平台值（用于玩法 / 植被）
export function stageBlend(s, pick, window = 60) {
  const i = stageIndexAt(s);
  const st = STAGES[i];
  const v = pick(st);
  const half = window / 2;
  if (i > 0 && s - st.from < half) {
    const t = 0.5 + (0.5 * (s - st.from)) / half;
    return lerp(pick(STAGES[i - 1]), v, t * t * (3 - 2 * t));
  }
  if (i < STAGES.length - 1 && st.to - s < half) {
    const t = 0.5 - (0.5 * (st.to - s)) / half;
    return lerp(v, pick(STAGES[i + 1]), t * t * (3 - 2 * t));
  }
  return v;
}

// 以各赛段中点为关键帧做整程连续插值（用于光照 / 大气，像一天里的延时变化）
export function stageKeyframe(s) {
  const n = STAGES.length;
  const mid = (st) => (st.from + st.to) / 2;
  if (s <= mid(STAGES[0])) return { a: 0, b: 0, t: 0 };
  for (let i = 0; i < n - 1; i++) {
    const m0 = mid(STAGES[i]);
    const m1 = mid(STAGES[i + 1]);
    if (s < m1) {
      const t = (s - m0) / (m1 - m0);
      return { a: i, b: i + 1, t: t * t * (3 - 2 * t) };
    }
  }
  return { a: n - 1, b: n - 1, t: 0 };
}
