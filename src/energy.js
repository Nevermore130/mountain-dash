// 体力值：每开一局比赛消耗 1 点，每天恢复；用完后转发给好友或看广告临时加（规则和数值在 config.js 的 ENERGY 里）
import { ENERGY } from './config.js';
import { loadData, saveData } from './platform.js';

// 第几天：以北京时间 0 点为界，和好友周榜用同一个时区
function dayId(now = Date.now()) {
  return Math.floor(now / 86400000 + 8 / 24);
}

// 本机记录 { day, used: 今天用掉了几点免费体力值, bonus: 转发 / 看广告得到、还没用掉的 }；跨天后清零
function read() {
  const day = dayId();
  const r = loadData('energy', null);
  if (r && r.day === day) return { day, used: r.used > 0 ? r.used : 0, bonus: r.bonus > 0 ? r.bonus : 0 };
  return { day, used: 0, bonus: 0 };
}

// 现在的体力值 { enabled, left: 还能跑几局, max: 每天免费几点 }
export function energyInfo() {
  if (!ENERGY.enabled) return { enabled: false, left: Infinity, max: 0 };
  const s = read();
  return { enabled: true, left: Math.max(0, ENERGY.dailyFree - s.used) + s.bonus, max: ENERGY.dailyFree };
}

// 开一局比赛：扣 1 点（先扣每天免费的，再扣转发 / 看广告得到的）。体力值不够时返回 false
export function useEnergy() {
  if (!ENERGY.enabled) return true;
  const s = read();
  if (s.used < ENERGY.dailyFree) s.used++;
  else if (s.bonus > 0) s.bonus--;
  else return false;
  saveData('energy', s);
  return true;
}

// 转发给好友 / 看完广告：临时加几点，当天有效
export function addBonusEnergy(n = ENERGY.refillReward) {
  const s = read();
  s.bonus += n;
  saveData('energy', s);
}
