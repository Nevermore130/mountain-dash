// 开放数据域：微信好友本周排行榜
// 这里是一个独立、封闭的运行环境：不能 require 主域代码，只能用少量 wx 接口，画布只有 2d。
// 主域通过 postMessage 发来三种消息：
//   { type: 'submit', wk, t, d }                 上报这一周的成绩（t = 完赛用时毫秒，0 表示没完赛；d = 跑到多少米）
//   { type: 'show', w, h, scale, wk, me, auth }  把榜单画到 sharedCanvas 上（w/h 是设计坐标，scale 是每单位多少像素，
//                                                me 是本机记录的本周最佳，auth = false 表示用户拒绝了朋友信息授权）
//   { type: 'hide' }                             不用再画了
/* global wx */

var KEY = 'week'; // 托管数据的 key，值是 JSON：{ wk, t, d, ts }
var FONT = '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif';
var ORANGE = '#ff6a13';
var HEAD_H = 30; // 表头高度
var ROW_H = 30; // 每行高度

var sharedCanvas = wx.getSharedCanvas();
var ctx = sharedCanvas.getContext('2d');

var view = null; // 主域最近一次 show 给的参数
var rows = null; // 排好序的本周成绩
var status = 'idle'; // loading | ready | fail | denied
var failText = '';
var selfId = '';
var selfInfo = null;
var avatars = {}; // url -> { img, ok }
var token = 0; // 每次重新拉数据加一，过期的回调直接丢弃
var drawQueued = false;

// a 是否比 b 好：完赛的比没完赛的好；都完赛比用时；都没完赛比距离
function better(a, b) {
  if (!b) return true;
  if (a.t > 0 && b.t > 0) return a.t < b.t;
  if (a.t > 0) return true;
  if (b.t > 0) return false;
  return a.d > b.d;
}

// 托管数据里成绩那一项的原始字符串
function raw(list) {
  if (!list) return '';
  for (var i = 0; i < list.length; i++) if (list[i].key === KEY) return list[i].value || '';
  return '';
}

function parse(list) {
  try {
    var v = JSON.parse(raw(list));
    if (v && typeof v.wk === 'number') return { wk: v.wk, t: v.t > 0 ? v.t : 0, d: v.d > 0 ? v.d : 0 };
  } catch (e) {}
  return null;
}

function formatTime(ms) {
  var cs = Math.floor(ms / 10);
  var m = Math.floor(cs / 6000);
  var s = Math.floor(cs / 100) % 60;
  var c = cs % 100;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + '.' + (c < 10 ? '0' : '') + c;
}

// ---------------- 上报成绩 ----------------

// 云端已有的本周成绩更好就不覆盖（换手机、清缓存之后本地记录会丢，以云端为准）
function submit(msg) {
  var mine = { wk: msg.wk, t: msg.t > 0 ? Math.round(msg.t) : 0, d: msg.d > 0 ? Math.round(msg.d) : 0 };
  var write = function () {
    wx.setUserCloudStorage({
      KVDataList: [{ key: KEY, value: JSON.stringify({ wk: mine.wk, t: mine.t, d: mine.d, ts: Math.floor(Date.now() / 1000) }) }],
      success: function () {
        if (view) load();
      },
      fail: function (e) {
        console.warn('[rank] 成绩上报失败', e && e.errMsg);
      },
    });
  };
  wx.getUserCloudStorage({
    keyList: [KEY],
    success: function (res) {
      var old = parse(res.KVDataList);
      if (old && old.wk === mine.wk && !better(mine, old)) return;
      write();
    },
    fail: write,
  });
}

// ---------------- 拉取好友成绩 ----------------

function load() {
  var my = ++token;
  if (view.auth === false) {
    // 用户拒绝了"使用你的微信朋友信息"，接口一定会失败，不用去拉
    rows = null;
    status = 'denied';
    draw();
    return;
  }
  if (!rows) status = 'loading';
  draw();
  var friends = null;
  var mine = ''; // 自己托管数据的原始内容，用来在好友列表里认出自己
  var err = '';
  var pending = selfInfo ? 2 : 3;
  var done = function () {
    if (--pending > 0 || my !== token || !view) return;
    if (friends) {
      rows = build(friends, mine);
      status = 'ready';
    } else {
      rows = null;
      status = 'fail';
      failText = err;
    }
    draw();
  };
  if (!selfInfo) {
    wx.getUserInfo({
      openIdList: ['selfOpenId'],
      lang: 'zh_CN',
      success: function (res) {
        var u = res.data && res.data[0];
        if (u) {
          selfInfo = u;
          selfId = u.openId || '';
        }
      },
      complete: done,
    });
  }
  wx.getUserCloudStorage({
    keyList: [KEY],
    success: function (res) {
      mine = raw(res.KVDataList);
    },
    complete: done,
  });
  wx.getFriendCloudStorage({
    keyList: [KEY],
    success: function (res) {
      friends = res.data || [];
    },
    fail: function (e) {
      err = (e && e.errMsg) || '';
    },
    complete: done,
  });
}

// 好友列表里哪一条是自己（接口返回的列表包含自己，但没有标记）。找不到返回 -1。
// 依次用三种办法认，认错或认不出都会让自己在榜上出现两次，所以不能只靠一种：
//   1. openId 对得上
//   2. 托管数据和自己的一模一样（里面带上报时间戳，不会和别人撞）
//   3. 头像地址一样
function findSelf(friends, mine) {
  var i;
  if (selfId) for (i = 0; i < friends.length; i++) if (friends[i].openid === selfId) return i;
  if (mine) for (i = 0; i < friends.length; i++) if (raw(friends[i].KVDataList) === mine) return i;
  var url = selfInfo && selfInfo.avatarUrl;
  if (url) for (i = 0; i < friends.length; i++) if (friends[i].avatarUrl === url) return i;
  return -1;
}

// 只留下本周跑过的人，按成绩排好
function build(friends, mine) {
  var wk = view.wk;
  var me = view.me && view.me.wk === wk && (view.me.t > 0 || view.me.d > 0) ? view.me : null;
  var out = [];
  var hasSelf = false;
  var selfAt = findSelf(friends, mine);
  for (var i = 0; i < friends.length; i++) {
    var f = friends[i];
    var rec = parse(f.KVDataList);
    var isSelf = i === selfAt;
    if (isSelf) {
      hasSelf = true;
      // 刚上报的成绩云端可能还没生效，自己这一行以本地记录和云端里更好的为准
      if (me && (!rec || rec.wk !== wk || better(me, rec))) rec = me;
    }
    if (!rec || rec.wk !== wk) continue;
    out.push({ name: f.nickname || '微信好友', avatar: f.avatarUrl || '', t: rec.t, d: rec.d, self: isSelf });
  }
  if (!hasSelf && me) {
    out.push({ name: (selfInfo && selfInfo.nickName) || '我', avatar: (selfInfo && selfInfo.avatarUrl) || '', t: me.t, d: me.d, self: true });
  }
  out.sort(function (a, b) {
    return better(a, b) ? -1 : better(b, a) ? 1 : 0;
  });
  for (var k = 0; k < out.length; k++) out[k].rank = k + 1;
  return out;
}

// ---------------- 绘制 ----------------

function avatar(url) {
  if (!url) return null;
  var a = avatars[url];
  if (!a) {
    a = avatars[url] = { img: wx.createImage(), ok: false };
    a.img.onload = function () {
      a.ok = true;
      queueDraw();
    };
    a.img.src = url;
  }
  return a.ok ? a.img : null;
}

function queueDraw() {
  if (drawQueued) return;
  drawQueued = true;
  setTimeout(function () {
    drawQueued = false;
    draw();
  }, 60);
}

function font(size, bold, italic) {
  return (italic ? 'italic ' : '') + (bold ? 'bold ' : '') + size + 'px ' + FONT;
}

function text(str, x, y, size, color, align, bold, italic) {
  ctx.font = font(size, bold, italic);
  ctx.textAlign = align || 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(str, x, y);
}

function rrect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

// 名字太长就截断加省略号
function fit(str, maxW) {
  if (ctx.measureText(str).width <= maxW) return str;
  var chars = Array.from ? Array.from(str) : str.split('');
  while (chars.length > 1 && ctx.measureText(chars.join('') + '…').width > maxW) chars.pop();
  return chars.join('') + '…';
}

function drawRow(row, y, W) {
  var cy = y + ROW_H / 2;
  if (row.self) {
    ctx.fillStyle = 'rgba(255,106,19,0.18)';
    rrect(0, y + 2, W, ROW_H - 4, 6);
    ctx.fill();
  }
  var rankColor = row.rank === 1 ? '#ffc247' : row.rank === 2 ? '#d5dbe3' : row.rank === 3 ? '#e0965a' : 'rgba(255,255,255,0.55)';
  text(String(row.rank), 14, cy, 14, row.self && row.rank > 3 ? ORANGE : rankColor, 'center', true, true);

  // 头像（圆形裁剪；没加载出来先画一个带首字的圆）
  var ax = 40;
  var r = 11;
  var img = avatar(row.avatar);
  ctx.save();
  ctx.beginPath();
  ctx.arc(ax, cy, r, 0, Math.PI * 2);
  ctx.closePath();
  if (img) {
    ctx.clip();
    ctx.drawImage(img, ax - r, cy - r, r * 2, r * 2);
  } else {
    ctx.fillStyle = 'rgba(255,255,255,0.16)';
    ctx.fill();
  }
  ctx.restore();
  if (!img) text((Array.from ? Array.from(row.name) : row.name.split(''))[0] || '', ax, cy + 0.5, 11, 'rgba(255,255,255,0.8)', 'center', true);

  var score = row.t > 0 ? formatTime(row.t) : '未完赛 · ' + row.d + ' m';
  ctx.font = font(12.5, false, row.t > 0);
  var sw = ctx.measureText(score).width;
  text(score, W - 8, cy, 12.5, row.t > 0 ? '#ffffff' : 'rgba(255,255,255,0.6)', 'right', row.t > 0, row.t > 0);

  var nx = 58;
  var tagW = row.self ? 22 : 0;
  ctx.font = font(13, row.self);
  var name = fit(row.name, W - 8 - sw - 12 - nx - tagW);
  var nw = ctx.measureText(name).width;
  text(name, nx, cy, 13, '#ffffff', 'left', row.self);
  if (row.self) {
    ctx.fillStyle = ORANGE;
    rrect(nx + nw + 5, cy - 7, 16, 14, 3);
    ctx.fill();
    text('我', nx + nw + 13, cy + 0.5, 9.5, '#ffffff', 'center', true);
  }
}

function message(main, sub, W, H) {
  var cy = HEAD_H + (H - HEAD_H) / 2;
  text(main, W / 2, cy - (sub ? 9 : 0), 13, 'rgba(255,255,255,0.85)', 'center', true);
  if (sub) text(sub, W / 2, cy + 11, 11, 'rgba(255,255,255,0.55)', 'center');
}

function draw() {
  if (!view) return;
  var s = view.scale;
  var W = view.w;
  var H = view.h;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height);
  ctx.setTransform(s, 0, 0, s, 0, 0);

  // 表头
  text('本周好友榜', 0, 13, 13.5, '#ffffff', 'left', true);
  ctx.font = font(13.5, true);
  var tw = ctx.measureText('本周好友榜').width;
  text('每周一 0 点重置', tw + 8, 13.5, 10, 'rgba(255,255,255,0.45)', 'left');
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.fillRect(0, HEAD_H - 4, W, 1);

  if (status === 'loading' || status === 'idle') return message('正在加载好友成绩…', '', W, H);
  if (status === 'denied') return message('还没有授权使用微信朋友信息', '点这里去开启，就能看到好友的成绩', W, H);
  if (status === 'fail') {
    if (/auth|deny|denied|scope/i.test(failText)) return message('还没有授权使用微信朋友信息', '点这里去开启，就能看到好友的成绩', W, H);
    return message('好友榜暂时加载不出来', failText ? String(failText).slice(0, 44) : '请稍后再试', W, H);
  }
  if (!rows || !rows.length) return message('本周还没有人上榜', '跑完一局，你就是第一个', W, H);

  var selfRow = null;
  for (var i = 0; i < rows.length; i++) if (rows[i].self) selfRow = rows[i];
  if (selfRow) {
    var sum = '第 ' + selfRow.rank + ' 名 · 共 ' + rows.length + ' 人';
    text(sum, W, 13.5, 11, '#ffc59c', 'right', true);
  } else {
    text('共 ' + rows.length + ' 人上榜', W, 13.5, 11, 'rgba(255,255,255,0.6)', 'right');
  }

  var max = Math.max(1, Math.floor((H - HEAD_H) / ROW_H));
  var shown = rows.slice(0, max);
  // 自己排在显示范围之外：最后一行换成自己
  if (selfRow && selfRow.rank > max) shown[max - 1] = selfRow;
  for (var k = 0; k < shown.length; k++) drawRow(shown[k], HEAD_H + k * ROW_H, W);

  // 榜上只有自己：下面空着的地方提示去邀请好友
  if (rows.length === 1 && selfRow && max >= 3) {
    var y0 = HEAD_H + ROW_H;
    text('好友还没来跑', W / 2, y0 + (H - y0) / 2 - 9, 13, 'rgba(255,255,255,0.8)', 'center', true);
    text('点下面的「邀请好友」，看看谁更快', W / 2, y0 + (H - y0) / 2 + 11, 11, 'rgba(255,255,255,0.55)', 'center');
  }
}

wx.onMessage(function (msg) {
  if (!msg || !msg.type) return;
  if (msg.type === 'submit') {
    submit(msg);
  } else if (msg.type === 'show') {
    view = msg;
    load();
  } else if (msg.type === 'hide') {
    view = null;
    token++;
  }
});
