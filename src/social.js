// 和微信好友比成绩：本周最佳的记录与上报、好友榜的显示请求、邀请转发
// 排名规则：完赛的排在没完赛的前面；都完赛比用时；都没完赛比跑了多远。每周一 0 点（北京时间）清零重来
import { RACE_LENGTH } from './config.js';
import { loadData, saveData, postOpenData, requestFriendAuth, shareAppMessage } from './platform.js';
import { formatTime } from './format.js';

// 第几周：以北京时间周一 0 点为界，这样所有好友看到的是同一周（1970-01-01 是周四，加 3 天对齐到周一）
export function weekId(now = Date.now()) {
  return Math.floor((now / 86400000 + 8 / 24 + 3) / 7);
}

// a 是否比 b 好（开放数据域里有一份同样的规则）
export function better(a, b) {
  if (!b) return true;
  if (a.t > 0 && b.t > 0) return a.t < b.t;
  if (a.t > 0) return true;
  if (b.t > 0) return false;
  return a.d > b.d;
}

// 本机记录的本周最佳 { wk, t: 完赛用时毫秒（0 = 还没完赛过）, d: 最远跑到多少米 }
export function weekBest() {
  const wk = weekId();
  const r = loadData('week', null);
  if (r && r.wk === wk) return { wk, t: r.t > 0 ? r.t : 0, d: r.d > 0 ? r.d : 0 };
  return { wk, t: 0, d: 0 };
}

// 一局结束后上报成绩。返回 { improved: 这一局是不是刷新了本周最佳, best }
export function submitRace(finished, timeSec, distance) {
  const cur = weekBest();
  const rec = { wk: cur.wk, t: finished ? Math.round(timeSec * 1000) : 0, d: Math.floor(Math.min(RACE_LENGTH, Math.max(0, distance))) };
  const played = cur.t > 0 || cur.d > 0;
  const improved = !played || better(rec, cur);
  const best = improved ? rec : cur;
  if (improved) saveData('week', best);
  // 云端有没有更好的成绩由开放数据域去比（主域读不到托管数据）
  postOpenData({ type: 'submit', wk: best.wk, t: best.t, d: best.d });
  return { improved, best };
}

// 请开放数据域把好友榜画到共享画布上。info = { w, h, scale }（设计坐标的宽高、每单位多少像素）
// onAuth(ok)：用户有没有授权"使用你的微信朋友信息"；没授权时榜单上会提示去开启
let boardSeq = 0; // 授权弹窗是异步的：等它回来时榜单可能已经关掉或重开了，过期的回调直接丢弃

export function showFriendBoard(info, onAuth) {
  const seq = ++boardSeq;
  requestFriendAuth((ok) => {
    if (seq !== boardSeq) return;
    postOpenData({ type: 'show', w: info.w, h: info.h, scale: info.scale, wk: weekId(), me: weekBest(), auth: ok });
    if (onAuth) onAuth(ok);
  });
}

export function hideFriendBoard() {
  boardSeq++;
  postOpenData({ type: 'hide' });
}

// 转发卡片上的文案：带上自己本周的成绩，朋友点进来就有了要超过的目标
export function shareInfo() {
  const best = weekBest();
  let title = '山野疾驰：2000 米山径越野赛，来和我比比本周成绩';
  if (best.t > 0) title = `我本周 2000 米山径跑了 ${formatTime(best.t / 1000)}，你能跑进这个成绩吗？`;
  else if (best.d > 0) title = `我在山野疾驰跑到了 ${best.d} 米，你能跑完全程吗？`;
  return { title, query: 'from=share' };
}

export function inviteFriends() {
  shareAppMessage(shareInfo());
}
