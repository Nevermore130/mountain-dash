// 时间与配速的显示格式

// 秒 -> 02:37.05
// 先取整到毫秒再截到百分之一秒：和好友榜（开放数据域里按毫秒存的成绩）用同一种算法，两边显示才不会差 0.01
export function formatTime(t) {
  const total = Math.floor(Math.round(t * 1000) / 10);
  const m = Math.floor(total / 6000);
  const ss = Math.floor(total / 100) % 60;
  const cs = total % 100;
  return `${m < 10 ? '0' : ''}${m}:${ss < 10 ? '0' : ''}${ss}.${cs < 10 ? '0' : ''}${cs}`;
}

// 米/秒 -> 每公里配速 1'19"
export function formatPace(speed) {
  if (!(speed > 0.8)) return `-'--"`;
  const sec = Math.round(1000 / speed);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}'${s < 10 ? '0' : ''}${s}"`;
}
