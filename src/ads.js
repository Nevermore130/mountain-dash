// 激励视频广告（微信小游戏 wx.createRewardedVideoAd）
// 用法上的几条规矩：
//   - 全局只创建一个实例，事件只注册一次（重复注册 onClose 会导致看一次广告发多次奖励）
//   - 提前创建：创建后微信会自己预先拉取广告，玩家点按钮时能马上播放；关闭后也会自动拉取下一条
//   - 只在玩家主动点击按钮之后才展示，按钮上写明"看视频"和能得到什么
//   - 只有完整看完（onClose 的 isEnded 为 true）才算数，中途关掉不算
//   - 展示失败先重新拉取再试一次；还是不行就告诉调用方"放不出来"，由它决定怎么办，不能让玩家卡住
import { ENERGY } from './config.js';
import { WX, options, showLoading, hideLoading } from './platform.js';

// 浏览器预览里没有真实广告位，由预览垫片通过调试参数给一个假的
const UNIT_ID = ENERGY.adUnitId || options.adUnitId || '';
const SHOW_TIMEOUT = 8000; // 点了按钮之后这么久广告还没出来，就按"放不出来"处理

let ad = null;
let waiting = null; // 正在等结果的回调；不为空说明有一次展示正在进行
let loading = false; // "视频加载中"的提示是不是还挂着
let closes = 0; // 广告一共被关掉过几次
let visibleHandler = null;

// 广告盖住游戏 / 关掉时通知游戏（用来暂停比赛和声音）
export function onAdVisible(fn) {
  visibleHandler = fn;
}

function setVisible(on) {
  try {
    if (visibleHandler) visibleHandler(on);
  } catch (e) {}
}

function setLoading(on) {
  if (on === loading) return;
  loading = on;
  if (on) showLoading('视频加载中');
  else hideLoading();
}

function settle(result) {
  const cb = waiting;
  waiting = null;
  setLoading(false);
  if (cb) cb(result);
}

// 游戏启动时调用一次，提前把广告拉好
export function initRewardedAd() {
  if (ad || !UNIT_ID || !WX.createRewardedVideoAd) return;
  try {
    ad = WX.createRewardedVideoAd({ adUnitId: UNIT_ID });
    // 拉取失败很常见（没有合适的广告、网络不好），这里只记一笔；展示时会再拉一次
    ad.onError((err) => console.warn('[ad] 激励视频出错', err && (err.errCode || err.errMsg)));
    // 低版本基础库没有 res，按看完处理
    ad.onClose((res) => {
      closes++;
      setVisible(false);
      settle(!res || res.isEnded ? 'rewarded' : 'skipped');
    });
  } catch (e) {
    ad = null;
  }
}

// 展示激励视频。必须在玩家点击之后调用。
// cb(result)：'rewarded' 看完了；'skipped' 中途关掉；'unavailable' 广告放不出来
export function showRewardedAd(cb) {
  if (waiting) return; // 连点只算一次
  initRewardedAd();
  if (!ad) {
    cb('unavailable');
    return;
  }
  waiting = cb;
  const closesBefore = closes;
  let shown = false;
  setLoading(true);
  const timer = setTimeout(() => {
    if (!shown) settle('unavailable');
  }, SHOW_TIMEOUT);
  const fail = () => {
    clearTimeout(timer);
    settle('unavailable');
  };
  try {
    ad.show()
      .catch(() => ad.load().then(() => ad.show()))
      .then(() => {
        // 广告已经盖在游戏上面了，接下来等 onClose
        shown = true;
        clearTimeout(timer);
        setLoading(false);
        // 万一关闭的通知比这里先到，就不要再把游戏停下来了
        if (closes === closesBefore) setVisible(true);
      }, fail);
  } catch (e) {
    fail();
  }
}
