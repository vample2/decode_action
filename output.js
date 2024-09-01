//Sun Sep 01 2024 10:44:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
cron "28 8,21 * * *" jd_bean_change.js, tag:资产变化强化版by-ccwav
 */

//详细说明参考 https://github.com/ccwav/QLScript2.

const $ = new Env("\u4EAC\u4E1C\u8D44\u4EA7\u7EDF\u8BA1");
const notify = $.isNode() ? require("./sendNotify") : "";
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const dyx = require("./function/dylanx.js");
let NowHour = new Date().getHours();

//默认开启缓存模式
let checkbeanDetailMode = 1;
if ($.isNode() && process.env.BEANCHANGE_BEANDETAILMODE) {
  checkbeanDetailMode = process.env.BEANCHANGE_BEANDETAILMODE * 1;
}
const fs = require("fs");
const CR = require("crypto-js");
const moment = require("moment");
let matchtitle = "\u6628\u65E5";
let yesterday = "";
let TodayDate = "";
let startDate = "";
let endDate = "";
try {
  yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
  TodayDate = moment().format("YYYY-MM-DD");
  startDate = moment().startOf("month").format("YYYY_MM");
  endDate = moment().endOf("month").format("YYYY-MM-DD");
} catch (e) {
  console.log("\u4F9D\u8D56\u7F3A\u5931\uFF0C\u8BF7\u5148\u5B89\u88C5\u4F9D\u8D56moment!");
  return;
}
if (!fs.existsSync("./BeanCache")) {
  fs.mkdirSync("./BeanCache");
}
let strBeanCache = "./BeanCache/" + yesterday + ".json";
let strNewBeanCache = "./BeanCache/" + TodayDate + ".json";
let TodayCache = [];
let Fileexists = fs.existsSync(strBeanCache);
let TempBeanCache = [];
if (!Fileexists) {
  yesterday = TodayDate;
  strBeanCache = strNewBeanCache;
  Fileexists = fs.existsSync(strBeanCache);
  matchtitle = "\u4ECA\u65E5";
}
if (Fileexists) {
  console.log("\u68C0\u6D4B\u5230\u8D44\u4EA7\u53D8\u52A8\u7F13\u5B58\u6587\u4EF6" + yesterday + ".json\uFF0C\u8F7D\u5165...");
  TempBeanCache = fs.readFileSync(strBeanCache, "utf-8");
  if (TempBeanCache) {
    TempBeanCache = TempBeanCache.toString();
    TempBeanCache = JSON.parse(TempBeanCache);
  }
}
Fileexists = fs.existsSync(strNewBeanCache);
if (Fileexists) {
  console.log("\u68C0\u6D4B\u5230\u8D44\u4EA7\u53D8\u52A8\u7F13\u5B58\u6587\u4EF6" + TodayDate + ".json\uFF0C\u8F7D\u5165...");
  TodayCache = fs.readFileSync(strNewBeanCache, "utf-8");
  if (TodayCache) {
    TodayCache = TodayCache.toString();
    TodayCache = JSON.parse(TodayCache);
  }
}
let allMessage = "";
let allMessage2 = "";
let allReceiveMessage = "";
let allWarnMessage = "";
let ReturnMessage = "";
let ReturnMessageMonth = "";
let allMessageMonth = "";
let MessageUserGp2 = "";
let ReceiveMessageGp2 = "";
let WarnMessageGp2 = "";
let allMessageGp2 = "";
let allMessage2Gp2 = "";
let allMessageMonthGp2 = "";
let IndexGp2 = 0;
let MessageUserGp3 = "";
let ReceiveMessageGp3 = "";
let WarnMessageGp3 = "";
let allMessageGp3 = "";
let allMessage2Gp3 = "";
let allMessageMonthGp3 = "";
let IndexGp3 = 0;
let MessageUserGp4 = "";
let ReceiveMessageGp4 = "";
let WarnMessageGp4 = "";
let allMessageGp4 = "";
let allMessageMonthGp4 = "";
let allMessage2Gp4 = "";
let IndexGp4 = 0;
let notifySkipList = "";
let IndexAll = 0;
let EnableMonth = "false";
let isSignError = false;
let ReturnMessageTitle = "";
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
  cookie = "";
const JD_API_HOST = "https://api.m.jd.com/client.action";
let intPerSent = 0;
let i = 0;
let llShowMonth = false;
let Today = new Date();
let strAllNotify = "";
let strSubNotify = "";
let llPetError = false;
let strGuoqi = "";
let RemainMessage = "\n";
RemainMessage += "\u2B55\u63D0\u9192:\u2B55" + "\n";
RemainMessage += "\u3010\u7279\u4EF7\u91D1\u5E01\u3011\u7279\u4EF7\u7248APP->\u6211\u7684->\u91D1\u5E01(\u53EF\u5151\u6362\u65E0\u95E8\u69DB\u7EA2\u5305)\n";
RemainMessage += "\u3010\u8BDD\u8D39\u79EF\u5206\u3011APP->\u5145\u503C\u4E2D\u5FC3-\u8D5A\u79EF\u5206\u5151\u8BDD\u8D39\uFF08180\u5929\u6548\u671F\uFF09\n";
RemainMessage += "\u3010\u793C\u54C1\u5361\u989D\u3011APP->\u6211\u7684->\u793C\u54C1\u5361\uFF08\u5305\u542BE\u5361\uFF0C\u54C1\u724C\u7C7B\u5361\uFF0C\u8D85\u5E02\u5361\uFF09\n";
RemainMessage += "\u3010\u8D85\u5E02\u5361\u3011APP\u9996\u9875->\u4EAC\u4E1C\u8D85\u5E02->\u8D85\u5E02\u5361\uFF08\u8D85\u5E02\u5546\u54C1\u53EF\u7528\uFF09\n";
RemainMessage += "\u3010\u8001\u519C\u573A\u3011APP->\u6211\u7684->\u4E1C\u4E1C\u519C\u573A->\u56DE\u65E7\u7248,\u5B8C\u6210\u53EF\u5151\u6362\u65E0\u95E8\u69DB\u7EA2\u5305,\u53EF\u7528\u4E8E\u4EFB\u610F\u5546\u54C1\n";
RemainMessage += "\u3010\u65B0\u519C\u573A\u3011APP->\u6211\u7684->\u4E1C\u4E1C\u519C\u573A,\u5B8C\u6210\u53EF\u5728\u8BB0\u5F55\u91CC\u67E5\u770B\u5956\u54C1\n";
RemainMessage += "\u3010\u5956\u7968\u3011APP->\u6211\u7684->\u73A9\u4E00\u73A9,\u53EF\u5151\u6362\u4EAC\u8C46\u3001\u7EA2\u5305\u7B49\n";
RemainMessage += "\u3010\u6C6A\u8D1D\u4F59\u989D\u3011APP\u9996\u9875->\u4EAC\u4E1C\u8D85\u5E02->\u6BCF\u65E5\u7B7E\u5230,\u53EF\u5151\u6362\n";
RemainMessage += "\u3010\u5176\u4ED6\u3011\u4E0D\u540C\u7C7B\u522B\u7EA2\u5305\u4E0D\u80FD\u53E0\u52A0\u4F7F\u7528\uFF0C\u81EA\u6D4B";
let WP_APP_TOKEN_ONE = "";
let TempBaipiao = "";
let llgeterror = false;
let time = new Date().getHours();
if ($.isNode()) {
  if (process.env.WP_APP_TOKEN_ONE) {
    WP_APP_TOKEN_ONE = process.env.WP_APP_TOKEN_ONE;
  }
}
//if(WP_APP_TOKEN_ONE)
//console.log(`检测到已配置Wxpusher的Token，启用一对一推送...`);
//else
//console.log(`检测到未配置Wxpusher的Token，禁用一对一推送...`);

let jdSignUrl = "https://api.nolanstore.cc/sign";
if (process.env.SIGNURL) jdSignUrl = process.env.SIGNURL;
let epsignurl = "";
if (process.env.epsignurl) epsignurl = process.env.epsignurl;
if ($.isNode() && process.env.BEANCHANGE_PERSENT) {
  intPerSent = parseInt(process.env.BEANCHANGE_PERSENT);
  console.log(`检测到设定了分段通知:` + intPerSent);
}
if ($.isNode() && process.env.BEANCHANGE_USERGP2) {
  MessageUserGp2 = process.env.BEANCHANGE_USERGP2 ? process.env.BEANCHANGE_USERGP2.split("&") : [];
  intPerSent = 0; //分组推送，禁用账户拆分
  console.log(`检测到设定了分组推送2,将禁用分段通知`);
}
if ($.isNode() && process.env.BEANCHANGE_USERGP3) {
  MessageUserGp3 = process.env.BEANCHANGE_USERGP3 ? process.env.BEANCHANGE_USERGP3.split("&") : [];
  intPerSent = 0; //分组推送，禁用账户拆分
  console.log(`检测到设定了分组推送3,将禁用分段通知`);
}
if ($.isNode() && process.env.BEANCHANGE_USERGP4) {
  MessageUserGp4 = process.env.BEANCHANGE_USERGP4 ? process.env.BEANCHANGE_USERGP4.split("&") : [];
  intPerSent = 0; //分组推送，禁用账户拆分
  console.log(`检测到设定了分组推送4,将禁用分段通知`);
}

//取消月结查询
//if ($.isNode() && process.env.BEANCHANGE_ENABLEMONTH) {
//EnableMonth = process.env.BEANCHANGE_ENABLEMONTH;
//}

if ($.isNode() && process.env.BEANCHANGE_SUBNOTIFY) {
  strSubNotify = process.env.BEANCHANGE_SUBNOTIFY;
  strSubNotify += "\n";
  console.log(`检测到预览置顶内容,将在一对一推送的预览显示...\n`);
}
if ($.isNode() && process.env.BEANCHANGE_ALLNOTIFY) {
  strAllNotify = process.env.BEANCHANGE_ALLNOTIFY;
  console.log(`检测到设定了公告,将在推送信息中置顶显示...`);
  strAllNotify = "\u2728\u2728\u2728\u2728\u2728\u2728\u2728\u516C\u544A\u2728\u2728\u2728\u2728\u2728\u2728\u2728\n" + strAllNotify;
  console.log(strAllNotify + "\n");
  strAllNotify += "\n\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\uD83C\uDF8F\n";
}
if (EnableMonth == "true" && Today.getDate() == 1 && Today.getHours() > 17) llShowMonth = true;
let userIndex2 = -1;
let userIndex3 = -1;
let userIndex4 = -1;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach(item => {
    cookiesArr.push(jdCookieNode[item]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else {
  cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(item => item.cookie)].filter(item => !!item);
}

//查询开关
let strDisableList = "";
let DisableIndex = -1;
if ($.isNode()) {
  strDisableList = process.env.BEANCHANGE_DISABLELIST ? process.env.BEANCHANGE_DISABLELIST.split("&") : [];
}

//老农场
let EnableJdFruit = true;
DisableIndex = strDisableList.findIndex(item => item === "\u8001\u519C\u573A");
if (DisableIndex != -1) {
  console.log("\u68C0\u6D4B\u5230\u8BBE\u5B9A\u5173\u95ED\u8001\u519C\u573A\u67E5\u8BE2");
  EnableJdFruit = false;
}

//7天过期京豆
let EnableOverBean = true;
DisableIndex = strDisableList.findIndex(item => item === "\u8FC7\u671F\u4EAC\u8C46");
if (DisableIndex != -1) {
  console.log("\u68C0\u6D4B\u5230\u8BBE\u5B9A\u5173\u95ED\u8FC7\u671F\u4EAC\u8C46\u67E5\u8BE2");
  EnableOverBean = false;
}

//查优惠券
let EnableChaQuan = false;
DisableIndex = strDisableList.findIndex(item => item === "\u67E5\u4F18\u60E0\u5238");
if (DisableIndex != -1) {
  console.log("\u68C0\u6D4B\u5230\u8BBE\u5B9A\u5173\u95ED\u4F18\u60E0\u5238\u67E5\u8BE2");
  EnableChaQuan = false;
}
DisableIndex = strDisableList.findIndex(item => item === "\u6D3B\u52A8\u653B\u7565");
if (DisableIndex != -1) {
  console.log("\u68C0\u6D4B\u5230\u8BBE\u5B9A\u5173\u95ED\u6D3B\u52A8\u653B\u7565\u663E\u793A");
  RemainMessage = "";
}

//京豆收益查询
let EnableCheckBean = true;
DisableIndex = strDisableList.findIndex(item => item === "\u4EAC\u8C46\u6536\u76CA");
if (DisableIndex != -1) {
  console.log("\u68C0\u6D4B\u5230\u8BBE\u5B9A\u5173\u95ED\u4EAC\u8C46\u6536\u76CA\u67E5\u8BE2");
  EnableCheckBean = false;
}
var _0xod4 = "jsjiami.com.v7";
function _0x178e(_0x5f40ec, _0x438134) {
  const _0x131612 = _0x2c96();
  return _0x178e = function (_0x597d93, _0x2f8a01) {
    _0x597d93 = _0x597d93 - 295;
    let _0x2c9628 = _0x131612[_0x597d93];
    if (_0x178e["NMuUtb"] === undefined) {
      var _0x178e36 = function (_0x5671a7) {
        const _0x48ecae = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0xccbbbc = "",
          _0x2529c0 = "",
          _0x3233ba = _0xccbbbc + _0x178e36;
        for (let _0x39a1b0 = 0, _0x3f6981, _0x4e99e7, _0x1c8c7f = 0; _0x4e99e7 = _0x5671a7["charAt"](_0x1c8c7f++); ~_0x4e99e7 && (_0x3f6981 = _0x39a1b0 % 4 ? _0x3f6981 * 64 + _0x4e99e7 : _0x4e99e7, _0x39a1b0++ % 4) ? _0xccbbbc += _0x3233ba["charCodeAt"](_0x1c8c7f + 10) - 10 !== 0 ? String["fromCharCode"](255 & _0x3f6981 >> (-2 * _0x39a1b0 & 6)) : _0x39a1b0 : 0) {
          _0x4e99e7 = _0x48ecae["indexOf"](_0x4e99e7);
        }
        for (let _0x5a5219 = 0, _0x57fd12 = _0xccbbbc["length"]; _0x5a5219 < _0x57fd12; _0x5a5219++) {
          _0x2529c0 += "%" + ("00" + _0xccbbbc["charCodeAt"](_0x5a5219)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x2529c0);
      };
      const _0x815dc5 = function (_0x490f7c, _0x15d9a4) {
        let _0x306a27 = [],
          _0x3bf69c = 0,
          _0x1bd740,
          _0x542a04 = "";
        _0x490f7c = _0x178e36(_0x490f7c);
        let _0x36246e;
        for (_0x36246e = 0; _0x36246e < 256; _0x36246e++) {
          _0x306a27[_0x36246e] = _0x36246e;
        }
        for (_0x36246e = 0; _0x36246e < 256; _0x36246e++) {
          _0x3bf69c = (_0x3bf69c + _0x306a27[_0x36246e] + _0x15d9a4["charCodeAt"](_0x36246e % _0x15d9a4["length"])) % 256, _0x1bd740 = _0x306a27[_0x36246e], _0x306a27[_0x36246e] = _0x306a27[_0x3bf69c], _0x306a27[_0x3bf69c] = _0x1bd740;
        }
        _0x36246e = 0, _0x3bf69c = 0;
        for (let _0x3bf2b1 = 0; _0x3bf2b1 < _0x490f7c["length"]; _0x3bf2b1++) {
          _0x36246e = (_0x36246e + 1) % 256, _0x3bf69c = (_0x3bf69c + _0x306a27[_0x36246e]) % 256, _0x1bd740 = _0x306a27[_0x36246e], _0x306a27[_0x36246e] = _0x306a27[_0x3bf69c], _0x306a27[_0x3bf69c] = _0x1bd740, _0x542a04 += String["fromCharCode"](_0x490f7c["charCodeAt"](_0x3bf2b1) ^ _0x306a27[(_0x306a27[_0x36246e] + _0x306a27[_0x3bf69c]) % 256]);
        }
        return _0x542a04;
      };
      _0x178e["HWUdek"] = _0x815dc5, _0x5f40ec = arguments, _0x178e["NMuUtb"] = !![];
    }
    const _0x25fba6 = _0x131612[0],
      _0x5272e2 = _0x597d93 + _0x25fba6,
      _0x2d9e3e = _0x5f40ec[_0x5272e2];
    if (!_0x2d9e3e) {
      if (_0x178e["rLFgaH"] === undefined) {
        const _0x574921 = function (_0x369d97) {
          this["yQaprM"] = _0x369d97, this["zfgytY"] = [1, 0, 0], this["EKgVvy"] = function () {
            return "newState";
          }, this["AfsYoS"] = "\\w+ *\\(\\) *{\\w+ *", this["kPRlnr"] = "['|\"].+['|\"];? *}";
        };
        _0x574921["prototype"]["IxvdaV"] = function () {
          const _0x3f9423 = new RegExp(this["AfsYoS"] + this["kPRlnr"]),
            _0xa834c6 = _0x3f9423["test"](this["EKgVvy"]["toString"]()) ? --this["zfgytY"][1] : --this["zfgytY"][0];
          return this["huZOwr"](_0xa834c6);
        }, _0x574921["prototype"]["huZOwr"] = function (_0x3bd389) {
          if (!Boolean(~_0x3bd389)) return _0x3bd389;
          return this["iDAyPI"](this["yQaprM"]);
        }, _0x574921["prototype"]["iDAyPI"] = function (_0x4e192a) {
          for (let _0x13d0c4 = 0, _0x4b85b7 = this["zfgytY"]["length"]; _0x13d0c4 < _0x4b85b7; _0x13d0c4++) {
            this["zfgytY"]["push"](Math["round"](Math["random"]())), _0x4b85b7 = this["zfgytY"]["length"];
          }
          return _0x4e192a(this["zfgytY"][0]);
        }, new _0x574921(_0x178e)["IxvdaV"](), _0x178e["rLFgaH"] = !![];
      }
      _0x2c9628 = _0x178e["HWUdek"](_0x2c9628, _0x2f8a01), _0x5f40ec[_0x5272e2] = _0x2c9628;
    } else _0x2c9628 = _0x2d9e3e;
    return _0x2c9628;
  }, _0x178e(_0x5f40ec, _0x438134);
}
const _0x4712a7 = _0x178e;
(function (_0x54c923, _0x2a32dd, _0x4e9c3d, _0x3b8ba1, _0x37c99f, _0x42ff22, _0x4e5758) {
  return _0x54c923 = _0x54c923 >> 5, _0x42ff22 = "hs", _0x4e5758 = "hs", function (_0x46e1e6, _0x2b1327, _0x4851b7, _0x2fe46a, _0x37e27d) {
    const _0x4bb1a8 = _0x178e;
    _0x2fe46a = "tfi", _0x42ff22 = _0x2fe46a + _0x42ff22, _0x37e27d = "up", _0x4e5758 += _0x37e27d, _0x42ff22 = _0x4851b7(_0x42ff22), _0x4e5758 = _0x4851b7(_0x4e5758), _0x4851b7 = 0;
    const _0x431bc6 = _0x46e1e6();
    while (!![] && --_0x3b8ba1 + _0x2b1327) {
      try {
        _0x2fe46a = -parseInt(_0x4bb1a8(563, "Gnx*")) / 1 + -parseInt(_0x4bb1a8(333, "uS[b")) / 2 + -parseInt(_0x4bb1a8(597, "Nxi#")) / 3 + parseInt(_0x4bb1a8(468, "uS[b")) / 4 * (parseInt(_0x4bb1a8(762, "xp0d")) / 5) + parseInt(_0x4bb1a8(753, "KO)n")) / 6 + -parseInt(_0x4bb1a8(314, "RT3Y")) / 7 * (-parseInt(_0x4bb1a8(659, "wTrx")) / 8) + parseInt(_0x4bb1a8(539, "&K^Y")) / 9 * (-parseInt(_0x4bb1a8(580, "TD*7")) / 10);
      } catch (_0x5b10ec) {
        _0x2fe46a = _0x4851b7;
      } finally {
        _0x37e27d = _0x431bc6[_0x42ff22]();
        if (_0x54c923 <= _0x3b8ba1) _0x4851b7 ? _0x37c99f ? _0x2fe46a = _0x37e27d : _0x37c99f = _0x37e27d : _0x4851b7 = _0x37e27d;else {
          if (_0x4851b7 == _0x37c99f["replace"](/[YxBkdPCgQyGqwfenXlHATL=]/g, "")) {
            if (_0x2fe46a === _0x2b1327) {
              _0x431bc6["un" + _0x42ff22](_0x37e27d);
              break;
            }
            _0x431bc6[_0x4e5758](_0x37e27d);
          }
        }
      }
    }
  }(_0x4e9c3d, _0x2a32dd, function (_0x16228d, _0xb162b3, _0x32168e, _0x396e8a, _0x4f30a8, _0x49ae18, _0x210bf0) {
    return _0xb162b3 = "split", _0x16228d = arguments[0], _0x16228d = _0x16228d[_0xb162b3](""), _0x32168e = `\x72\x65\x76\x65\x72\x73\x65`, _0x16228d = _0x16228d[_0x32168e]("v"), _0x396e8a = `\x6a\x6f\x69\x6e`, 1561591, _0x16228d[_0x396e8a]("");
  });
}(6048, 269556, _0x2c96, 191), _0x2c96) && (_0xod4 = `\xeec`);
const _0x4b6ae0 = function () {
    let _0x2cc066 = !![];
    return function (_0x71f817, _0x47fcac) {
      const _0x355beb = _0x2cc066 ? function () {
        const _0x12d0dd = _0x178e;
        if (_0x47fcac) {
          const _0x1bae06 = _0x47fcac[_0x12d0dd(437, "aJRe")](_0x71f817, arguments);
          return _0x47fcac = null, _0x1bae06;
        }
      } : function () {};
      return _0x2cc066 = ![], _0x355beb;
    };
  }(),
  _0x53cbbc = _0x4b6ae0(this, function () {
    const _0x411f5a = _0x178e,
      _0x5e80be = {
        "xrjTF": _0x411f5a(730, "(YAL")
      };
    return _0x53cbbc[_0x411f5a(383, "%5dh")]()[_0x411f5a(770, "uS[b")](_0x5e80be[_0x411f5a(526, "Oply")])[_0x411f5a(384, "f^Jz")]()[_0x411f5a(296, "TD*7")](_0x53cbbc)[_0x411f5a(484, "CXyr")](_0x5e80be[_0x411f5a(448, "yZBE")]);
  });
_0x53cbbc();
const _0xf7b57 = require(_0x4712a7(604, "aJRe")),
  _0x2e48f4 = require(_0x4712a7(427, "@Ay7")),
  _0x151ada = require(_0x4712a7(535, "6FWW")),
  _0x16ca3a = require(_0x4712a7(426, "DR[p"));
function _0x2c96() {
  const _0x269bfe = function () {
    return [...[_0xod4, "CjseXwjiqxagmkiy.cdYoHmTl.LvQ7HPfTHnTGAB==", "amoiEmoWF8oBWOak", "WOj/WRldJSoU", "WP/cQti1WQq", "lJSXimkMdfqvWOS", "WOtcRqqiWOS3W7O", "W5xcGmkeWPjADWmAomkMWOldRhVcS0xcNJnxWP3dNmk5WRawqSo+EtfqcCo5ybhdHCkHW4tdOCo3WQBcM8oV", "WOZdMSonAJ8", "j3ecWOS", "WRNcH8oJWPDUWQSRW6alnCoTW4LFtCkbf1FcGSk4WQxcLKZcOGhcKMRcVSoUW5T4", "AtZdTSo+W4z4iZC", "WO/cVZScWQuWW7lcVq", "W6RdHSkNW4m+W7LYW5GinSocWPnJ", "c+s6Gos6L+wfNUwDHmkzWQPmzCoT5PYL6k+V6k+o5Row5AsG6lskFEkdQo+6O+kdI++5RG", "sWLpW4vfW6iaW44", "DG5EW4D4WRLcWOrEWOecfGVcRCkEW7BdRrhdTCopWP06WQtcUqWIWQjahCo6WQquCaddHdpcImk2daGlCCk4W7RcVHv2Exnkkg/cIG", "k37dOCosW6LUgWzA", "eSk+w8olrSkXyCoF", "W48OWOtcI8o9", "DsjbW7rj", "nIyZ", "W73cUdFdMJS", "yL7cKSk0w0/cSa", "WP3dQxhcRKi3WQ/dGCocWQOGWPJdGqPGWOae", "nxZdISkuW6ffWOeFWQ3cPmo2W6LxrSkDWQ1k", "W7xdTIZcTNG", "jmoKW5pdTHtcN8otWRpdJSoYWRRdTa", "j8kVE8obWRa", "E8kXW4JcGa", "z8k5WRpdQga", "AxVdQmoLWP0", "WOZdVmk0FN0", "W7e+WRatW5mps8kQ", "af7dHCkhWQDSW6DvWR3dJGxcHwbYzmoWW4BcKfi", "CuVcLSk7tq", "W6yycbuRAJRdLa", "W4tdPJNcPeVdImoxyq", "W7fgW6GAa8kahmkp", "WRxcLSoNWPHV", "W4/dTbRcRxFdLCoNz8oj", "dxS1WPrq", "lSkItq", "kCk7s8oOWRS", "WQFdJmo0sYRdN8ovWP/cI8oVoZaVWQmbWPVdTq/dG0itW50", "W5VdOSkXsX0", "W57dTsdcLuq", "W5JdQmkKrY7cHa", "tSkJgczbFapdJmkOW7e", "W6VcSSkwWPjA", "zH9gW7zd", "W6pcQ1RcO38", "iH02p8k6", "W7RcGh3cGNq", "heC3WRXK", "W7NcOMpcQuKXWO/dH8ozWQvJWRNdLGnZWOKo", "W7Ogfrq1", "vdhdRCkpW7S", "W6/KUBFKUkJLHOJLNP0RWQzazSok5P6B6kYK6k+65Rkx5Awb6lw5WQVIG53VUyxIGPVVUja", "eSobDmoYgSkvWOiahSojvmozW4apWQafqG", "uCkFWRldRexdNeyI", "W7pdQmkSBaG", "kCoJW5RdRhi", "W6NcLu8Bgq", "WQrtWOZdSmoMBmo0", "DJVdGSkUW5G", "sWdcJCkbWQGXW4XQ", "DZ/dTSk0W4i", "yNNdK8oXWQGOWQu", "W7JdJ8oxW57cQW", "WRhcJ8kNa8oxh8oTta", "hSoiW4hdVbK", "W4FdT8kVAYG", "W5xcP2xcTNKNWR7dMSo9WRzG", "WQddQ8koBNFcKdzkWOm0WQGDWQNcQG", "W5iddGar", "c8kCyCoFWO4ybIldTa", "hG9wWR0f", "iNldVmo1W44", "WQLjWPZdHmo0l8kOWRddJSoWcuOZW75GWRaWWOGiaCk6W45WWQj8W7pcJGGqfeDWW4qqb3xcMSoUWQC9wfRcNb5zs8kAgSoOWO3cHCkalCkGbW", "E8o5W7JcQt8", "WPJcHmkku8o5", "WOFdHSkKWQDKWQa", "WQVdMCo0wG", "jheBWO1n", "mHTIqSoK", "fXrKWPS7W5PTW77cKGtcKHRcVMHagxu4x8ojWRPqaMnqaCkWWPG", "WOtdJmk2WQe", "BYhdICkeW5TjWOexWQ7cJ8k3W6HCtCkf", "yCoJqsW", "hfFcMSkPWRWZW7HpW4ddTaS", "WR3cRsaPWRy", "layBW4S4W79DW5Cl", "W4FdMmo8W7VcNG", "W5JcTSkrWO9W", "W77dO8kfyY7cM8kcjNKSW4nKFCk0", "W60LkmoFbG", "AhtcImknqG", "kCkyDCoZwW", "DCo1BaSK", "eSoEACo3rCoqWPqmfSodwSoYWPnhW7NORPdMSBlLPANOT7ZVVz3OR4VMOkhMNzJNVjdOTP3PHzBOR7W", "W5xcHHNdGejejNRdNIvGWPKQWPhcL8oPoW", "WQJcLSoHWOHI", "W7pcU8kcWQnz", "WQ3dNCoHvrRcISkpW57cJW", "D2/cJCkDBq", "WPqGq2ddOa", "W4pdK8oqWQ05", "vmk4hIHkCWVdMW", "W73dQSo3fCkEfCoBW6hdKCkbWPeI", "WRBdKSk2WRzH", "yL7cLCkIwf8", "W7dcVeOApW", "W5VcLCkcWO9Gi0PA", "W5tcNqldNsCkjha", "WOdcSCk6sCo7xCkDWQ0", "oMqDWODlWPxcJZBcSq", "W5FdTSoDW7RcNG", "AmoVW5VcRGVdKmoCzeu", "gflcR8kLWPm", "WOmywMpdPG", "WOekqhu", "DSo2rYqyWOCRWOdcHW", "h8oJW6VdIMRcVa", "oCkhzCoSWPa", "W7BcKee9da", "WPpcS8khu8o7", "WPe+kKpdHMRdRCo+", "W73cKe7cRu8", "W5uAnq8S", "W6O6f8ocamoDzaO", "eM7dP8ojW6jSjG9xdMTqsw/dIc3cMa", "WPVcPNq", "FGi3uCoSW7jaumo9W5mkfCoRjSkWimkY", "WOhdOSo4sdS", "jSkMWOxdV8oD", "W4xdQctcSNBdLmoeBConWPlcHa", "FYrxW5DuWOVcGt3cH1S", "smowW7ZcGt8", "z8o9W7NcRYVdKmoVF2xdLSkV", "iCkoWOddPmo+", "WPJcRghdTbW", "W47dIqNcHhG", "WOqPz1/dKG", "W6RcTuW0zq", "W4ddQmkqDI7cN8k8mW", "D17cKG", "WQySW5uXA8onrJJdMq", "W5mbWQlcOSoy", "h8oJW6S", "WOlcNCkWhmoqemoMrG", "pLOhBCoLzCkhW6VdIdBdLG", "W57cKXC", "WQeDkv3dQq", "W5xdSGNcUfa", "Cw7dGSo2WPq4WR0Wtq", "W6WaWOpcUmobexdcPCkrysNcUW", "W6DgW6GelW", "W4BdUsRcJqNcGKFcL8ktlq", "k8kIwCo8ESkI", "DMJdLCo6WQKRWRuIuq", "AJNcQ8kmWRi7jrbriL9w", "Fb9lW5LfW7ya"], ...function () {
      return [...["WPZdOSk1rwa", "WQeuahVdVG", "WRtcKSoLWP5RWOyRW7Kh", "W5ZcUCo4WO8TdSoVfdi", "ySkeWPhdUgC", "W5VcLCkcWO98pKLhgmk4WPG", "W5FcUe0KEulcSmoGBgOeaCo0W6K", "CIddVmknW7PvWQmFWRi", "WPBcRCk6emo6", "W5/cNqtdKWy", "oKldQCoCW4q", "nKWJsColW79svG", "iCkStmouv8k4y8oxfG", "emk7osVdSL/dSZ5oW7bGW6G", "WO49W58htG", "ncZcNSkJWPmQWR0QumoD", "W5/cPe7cRua", "W5JdN8o7W6pcHq", "zYRcLmo1WQe", "Er9EW4j4W6yFW4jrWPCez1ddP8kn6k2L5Rkb5Awd6lA/776U6k2v5QkC5PY0576g6lAa6yAB6kYE", "kCo2WPRdUSkS", "WPWstN/dQW", "W73dGCk7vrS", "sxZcLSk/BG", "W6C+WRanW78", "W7tcOeO+y0RcRCoNEq", "W7dcQ2hcJ0S", "WQ3cHmo2WOLyWQ8VW6a3kCoMWPr8umkifJpcL8oI", "zSkZWRldSea", "oSoGWORdGSkk", "WOFcQghdJJG", "WQGIkhtdUNK", "WQPzwvjtzHJdTL1Sdq", "hSk9odldTqVcUwzpWQSOW6RdG0H/DmkFuCoDzW", "W5/cGxaHsW", "W7ZcNSoCWRWS", "d8ooWQNdHSk+", "W73cV8omWOaM", "W47cV10Odq", "pHtcGmkIwKJcOCoNW5KSieHsWRLoWQXu", "W4ZdS8kZucW", "WP7cUKhdMdZcIgJcMmkgdSk0emkEW6G", "hSobW5tdVJG", "xCk0csfRDH8", "WO0QW6y+AW", "mKi1xCk/", "W5hcM8kx", "kLhcGmkWWQe", "WQmNvMxdRa", "eGvGWPy", "5Psw5ysB5z2W5PYK6k+G5AAx6lAu", "W5NcLCkeWOm", "rCkBWRpdTgddHG", "xf/dS8o/WO4", "WR0+FgldOq", "W6JcH8kvWPbNlefq", "W64shmoaoG", "WPFcISkip8oq", "WPJdNmowtb8", "W5tdOSkvWPZOR7dMSORLPA3OTkdVV7dORQhMOkdMNAdNVR3OTA7PHylORPW", "5PsW5ysR5z6P5P2W6kYO5AEj6lES", "W4VcMmkwWOTZ", "WQtcUWiEWQK", "f3hcJmkoWO8", "W5ZcS8oPWQ8ZmG", "W4JcUCoMWO0I", "WRqLW4eSFCorvItdR8o5seHdWRetaW", "i8oYWQJdNCkAW5nqtGK", "W60xWOlcPmoggMFcU8kwAsdcIXKjyUITPEAZVowLJoI0TE+8OoITQEAHQoAEGoE/NUI0LUMgUoITOa", "W5VdGCobWRWyWQrJDG", "W6iSWQCmW5mps8kQ", "WPNcIqiEWRO", "z8o9W7NcRZFdJCoSyG", "smovW5/cJdu", "WQ7cHLxdQZa", "wCoKsIuY", "W4pcTCoPWOqKjmordJ8K", "WPudW545EG", "bmkyWRRdSSo4f8oAeKuECqBdPSkTW4RcJmkKtCo1W69AW6OMnI3dV8ozW5GdWOpdLCkAW6W", "WRJcKM8UiXLm", "WQLjWPZdHmo0l8kOWRddGSoLtquUWRKKWR56W4uea8o4WOb1WRGMW6FcPaGwfWf2W4q/dgFcQmo4WRyfq2JcIG9+CCkrdSooWRBcJCkghCk4", "WOpcTYSmWQi/W7NcTW", "W6hcTfxcNNK", "d286Amo8", "W7NdTSk0wde", "W6xcR8oRWPGpiCoJha", "W4dcKgSwAq", "W5qnoJu7", "kG8XfCkt", "kgxdOmop", "WQKSo1ldOa", "WPRcTYydWQ8XW7RcPSoTlsFdIwHrmdnxFCoyatddSmkMmmo6", "W78ecIiqDG", "W53cVCo6WOKP", "WOJcQ8onWRGmbCog", "W5tdRxfqW5W1W47cU8oEnqi", "WQyOlL/dI2tdTCo1W68", "umkBWRq", "ieBcHSkQWQm", "W7BcO1y9pG", "W7TiW70", "W7RdNCk7Ct4", "WQi8W5O8xmolxdJdPmo8bL1TWOawbflcHmkOD8kEe8kVzSoUWRpdJSkUW6COCmkbWR0agmosEtFdSSkyW6/dOmkGW5nXWRH/WP7dJSkuWORdLK3cMCopE8kzW6tdNSoxlG", "W7NcR3NcVhq9WRRdHSok", "dNy4WRX8", "BHTyW4rU", "W7yVWQTqW7Dpr8kHhmodW4xdTW", "W7moWQ01W4m", "W7RcJqe/ihb+hSkZWRbMWRKbWO4", "WQNdMCoYvGZcLSkFW4lcQ8oXiq", "aeOcxmof", "rfJdK8oyWP0", "C8o5W7JcTXldLW", "oCoKWPNdG8kmW4G", "W78ecG", "qSknWQxdS1/dI045vmkCcrTFW6VdJhJdOqOY", "W6VdHCowWQqO", "W5RcTuxcVK04WPxdICoaWQfoWONdJa4", "WRhdOabUFftcO8oSt1q", "W4lcNqldGWS", "W5xcPu0qwG", "WOKeuW", "WPjqWQFdUSoa", "W6WtWOtcVmoGdhdcOmkOFsa", "WQZcHCo2WP5cWQyVW6yfiW", "W5vqW7i4hq", "W6VdHmkRW4iXW7WRW5SXlCoVWQu", "rCkBWRtdOMpdLKu", "WQjzxa", "W4BcJHxdLt0qi2VdNq", "WRtcSCkSxSobDCkEWQ7cLq", "ahWtA8oj", "WOhcSs8IWP4S", "WPBcSmoHWO0OlSoAacD0FSogeSo9pMNcKhCkzJWYW7z6WQHlsGlcISoSWOJdUmklg8kBWRBcPvtcRNXUWQL9W43cMsj5uSkTmCk1WPOVWPLFWODrW5zgjH3cOmk0u8oufSoXWOVcJeOLW7WAW4Lazc3dSCoQAa3dL3DTj8kVW4FcPXFcL8kTWQWUgI8CWQNdJmoiWR9QqsOGWQZcUSkIlcrdW4n1W6ScWPzTWRpdLmklWPhcTmo7pmolW6bJAuddQdhdGJxdKSkCeCkVwCkcW5VcMMBdJY7dHmkpWRSGW4PDuhm2W7ddTmkEWPFcSmkpkSkFWRS8W41ZDvH5yCojftLHWRxdVSkmf2ddNSkdW4yXW7iDrH/cPmk1nmohWRjzWPH1u8kiWR/dQebwWOJcUHldImkQWQZdJ8ocWRmojmkZz8kFyI3cRmoKW6Cade/dSbCMzSogWRPvvmopW7L9fKSfzCkpwxZcKSkHcIRcMsddJYTVaZzdf0uzW4jJWRfZhXyBgcuEWOpdICkodv7cICksW6yDyan6W6WEmmoFg8kBW7yKWRBcK8o5WQ7dHxihWRddG8otWOfwrhFcTCkFmXSFgSo9w1NcPHtcMwP/WPFcImoTWR11xmoTwxjCo2RcVuFcLb7dK8kcW7LXW5RcIMNdSGbQvmkXw8kCW6qHnSklW4hdOb7dILFcM07dMSouW6mHbCkV", "WP7cHmkTp8oq", "x8ovCJu9", "W7PgW64uiG", "W4xcKSoLWOaW", "DCo+bSkopCoIw8okax1vW4G", "W7KLnqOB", "W5RcIatdGb1EBtddIcv0WP5HW5dcMCoHlxZdGmkyWPu", "yGRdM8kVW6O", "kmkgx8ouWQmcmsxdOW", "fLNcJW", "W6FcN0umqNXGe8oUWQ06W71kWPSpkCki", "W4RdK8oqWQ8", "zgZdL8o/WR4", "iCkStmouqCk+ASov", "f1FcNmkNWOe", "W5ZcTSoAWPG0", "owldSmoJW4W", "nfua", "W6G6WPlcOCo0", "WRe+kKpdGwxdPSo0", "DmkAlJvZ", "W682WP3cKSo2", "W7RdV8kjya8", "tSoYW4dcJYK", "WQGMW5mAwSoq", "fc8Ii8ky", "W5pdOSk3DY/cK8kGpxGUW6jAjSk1loITSUAYSowKREI0SE+8OUIUHUAIR+ACKEE+MUI3OEMfMEIUHW", "W6tdLSoNW7q", "pcGMkmkGc1atWR7dHCoc"], ...function () {
        return ["W78RWRyoW6LBaSoQwSovW4pdO8knWOTlWRtcLMeGdh1enSkHDW", "i0OUWO9V", "W6XHWPXXa8klgh/cHSkXeaK", "W7S6WRqBW7yVtmkOvW", "pMOrrmoN", "CL7cH8k5EL7cUa", "WOLnWQVdLSo3", "vbneW5btW6OmW4vy", "g8osFSoPEmouWOSa", "W4BdKmo0W5dcGa", "d0NdTSo6W6a", "W4tdPrlcJNa", "wCoDW7/cRJm", "amoVW4BdLcq", "oNuoWPXgWPO", "CSoSW6FcQWO", "oCo1WORdMmkbW4DVqqa", "WQz4WQWOFCkXqW", "kIGMnSkq", "eSkJy8oRWOi", "WQxcPG4eWQy", "pNJdQSoAW7C", "B8k9WOpdR2O", "WOxcVSkroSoS", "W6VcT8ktWQXb", "WOBcTSo3oMxdH8oQghWKW4XWrG", "Bg/dQ8o8WQaLWRi", "y8oJrYa/WO4KWOK", "maXaWP8k", "B8kxmrrt", "jSoUWP/dTmkDW5i", "WOdcVZWeWOq", "WPueW4yUza", "a0aEASof", "WQ4uWQnaESkfimkjWOSsWOy", "W5hcO3BcTw87WQ7dHSoz", "WQFcSZ4FWQa", "WQldMCo0wde", "WPlcQmkWsSoM", "pCk9WOldQmox", "pcGMkmk8fLmo", "i3xcSSkxWQa", "cvpcICk2WOOO", "nYGGjSkD", "DSoJFt0V", "gSovWQNdU8kA", "W6ZcTCkJWQ9q", "AHvEW5zNW5aoW4rnWPq", "lJSXimkHf0eaWOldSSodxqNcHra", "ngxdTmo+W7v7", "W74aWPpcTmoMc3tcPSkD", "tb9jW5LJ", "kCkKxCosrSkXyCoF", "WO0FqgtdLcVcQs5EW7yxWR94WRqECSoMW48GW4mXrSkfWPy", "zNpdICoGWRm+WQKNxmo0WPS", "fXDrWOyu", "W5OUWRuKW7C", "WRTKWQpdJSo+", "l0xcJCk2WQCHW7by", "WOFcPwBdJGJcL0pcI8kPcSkgamkJW67cSSoH", "g8o4W7JdVYldOCkkWQKSyeRdQCoRW5KGWO7cVmkCqIpcJrfqWQdcL8kgv1O1W7BdRuX9", "WO3cOCk7uSoe", "W70BWQu7W4S", "BwJdK8oJWRr2W7nRs8o6WPVdULNcQLusW6GxWPelzmolWOG", "emk7nspdTG", "WRVdJSkFx28", "W7riW74s", "WQ3cLSoQWRfY", "W5ytpSoDmW", "vSknWRpdPhJdU04RuW", "WPRcGCkNsCor", "WO9sWR3dHSo1", "W73cJmk3dgNdK8odW7VcS8o3hWLc", "bSoeWPhdHmko", "W7/cSMiywq", "W5JdQmkK", "aL3dLmodW4W", "W74kgqqk", "W646n8oc", "WQKOW4a8qa", "qSknWQxdS0xdNeyI", "pmkTodddO1tdKYDcW6XHW74", "y1fJwmkZW60erCkM", "WPxcJmkJimoB", "yfFcK8kKA0NcOmo9W58SAL9y", "mflcRSkLWPSTW41pW7/dOIRcIN4S", "gGTZ", "WQBdI8oqvYZcLSkSW5NcIW", "WRtcMmo0WR51WRO", "CCkzWQFdHey", "D8kNcYHn", "sqxdKmo9W590W7XYW4pdSqJcQa", "WR/dHmkbWQ1a", "lLuyWRD1", "W7G0nSoBj8ohBX9ZW6u3", "kt0MlmkBh1WhWPC", "W68CWPlcLCoubMy", "j8oWW6tcPrFdJCoEDexdGCo9pX/dUh5inmk6W7VcPIpdIJP0", "keWdz8o6", "gCouESohrmoh", "W5NdPSk3ytq", "eCoPW63dOvVcOCoqWQyO", "W7/dRCo1", "W4/cPLqocG", "thNdRCoQWOi", "WPnuWQ/dS8ob", "W7ZcSWldSr4", "gmoPB8o7rW", "uCoTrYOf", "W7SWWQu7W6Gt", "mJ0GnCkgqHPoWO/dH8oefHBdJankvX9hlmoFWQNdVSomW5u", "W45MW4aYdq", "hCoJW63dN00", "c8kotXW3tvldOCo6W5C7W5JdTxicWRlcGh/cO8oVW7a", "sCoerqeh", "zNpdG8o2", "W5RcKCkeWObgkvu", "igmfBSoG", "WOtcOKtdNdO", "W6hcTuO6repcOSoU", "peGNqCoUW59vvmo3", "h8kHD8oWAW", "WOJcK8kL", "W4/dTbJcPgpdISo/B8ouWPJcT2mmhW", "bmkRhXRdKq", "y1dcSCk2uW", "lSoGWOZdKa", "pIGGja", "CbThW5i", "sCkLdYPQDq/dMmk2", "maGylmkW", "W5tcVCo6WOS", "g8kaaJhdQG", "WR/dL8oZtW", "WRRcUSokWPDV", "W7SWWQu", "WPhcU2BdLcNcIKpcJSkcbCktcG", "WQ7cSZ4ZWOS", "r8okW6lcJrG", "WRHgW4hdPSkfssZcMCkWEX7cNMW", "W4BdHSoqWR4IW7aQnMHGW7ZdV8koW5bYEHVdS8og", "AHv5W4n5W6OdW4W", "W7tcIN8ihdvQeq", "W43dVmoUWR8F", "j8kuFCovWOmcaJ7dG8kKrq", "WO8ub0BdVq", "W6m5WPVcLCo3", "c8kyECoaWPO", "gSoVW73dHM8", "W4pcN3hcVx0", "yCkStSojyCk0mCongWu", "W57dNSorWR0oWQHWAMK7WRFdOCot", "hSoTW7JdRha", "WQxdT8k7", "W67cILS", "aIuDdmkw", "WQlcL8kVv8oN", "5lMJ5lQK5P6n5yQA5zIX6lYX5zIK56Uk5PAl5O+T", "cuazDCoV", "d8oWW5FdQaG", "W4hdS8oNW57cKa", "W7xcUmoMWP8Q"];
      }()];
    }()];
  }();
  _0x2c96 = function () {
    return _0x269bfe;
  };
  return _0x2c96();
}
;
async function getuserinfo_6dy() {
  const _0x3a683e = _0x4712a7,
    _0x147201 = {
      "PshNZ": function (_0x10861f, _0x4d45df) {
        return _0x10861f === _0x4d45df;
      },
      "NZqTc": _0x3a683e(734, "CZ@B"),
      "noaPU": function (_0x3d3980, _0x11a6b1) {
        return _0x3d3980 !== _0x11a6b1;
      },
      "Sqfwz": _0x3a683e(374, "rWlV"),
      "xelAH": _0x3a683e(648, "jm&3"),
      "NoUrr": _0x3a683e(573, "jA8N"),
      "eBamY": _0x3a683e(479, "T6l5"),
      "YCTlI": function (_0x26cb16, _0x4aad7d) {
        return _0x26cb16 === _0x4aad7d;
      },
      "fZtyf": _0x3a683e(692, "HmSO"),
      "hNDPm": _0x3a683e(431, "jfo6"),
      "YOFVm": _0x3a683e(324, "6FWW"),
      "icqIw": function (_0x2cb14e, _0x2a051f) {
        return _0x2cb14e == _0x2a051f;
      },
      "IITNK": _0x3a683e(575, "Gnx*"),
      "IcRaC": _0x3a683e(569, "HmSO"),
      "KgDxG": _0x3a683e(399, "RT3Y"),
      "JtkXf": function (_0x4d1d95) {
        return _0x4d1d95();
      },
      "DkZzu": _0x3a683e(645, "CZ@B"),
      "qKwtG": _0x3a683e(488, "T6l5"),
      "PgSxG": _0x3a683e(461, ")5Fz"),
      "UWXRA": _0x3a683e(412, "&K*%")
    };
  let _0x42f975 = {
    "url": _0x147201[_0x3a683e(443, "&K^Y")],
    "headers": {
      "Accept": _0x147201[_0x3a683e(508, "luX#")],
      "accept-encoding": _0x147201[_0x3a683e(675, "6FWW")],
      "content-type": _0x147201[_0x3a683e(456, "&K^Y")],
      "Cookie": cookie,
      "User-Agent": $["UA"]
    }
  };
  return new Promise(_0x366252 => {
    const _0x77dccc = _0x3a683e,
      _0x1c05e0 = {
        "XUHvF": function (_0x2d668d, _0x2c99ab) {
          const _0xc7ea6e = _0x178e;
          return _0x147201[_0xc7ea6e(493, "CE$y")](_0x2d668d, _0x2c99ab);
        },
        "NZxsb": _0x147201[_0x77dccc(603, "f^Jz")],
        "yyzkL": function (_0x548266, _0x245c20) {
          const _0x37864e = _0x77dccc;
          return _0x147201[_0x37864e(354, "FYVz")](_0x548266, _0x245c20);
        },
        "YAZEG": _0x147201[_0x77dccc(428, "yZBE")],
        "Xcdiq": _0x147201[_0x77dccc(452, "%5dh")],
        "imxsW": _0x147201[_0x77dccc(313, "CZ@B")],
        "yYwNe": _0x147201[_0x77dccc(496, "GCbz")],
        "xfZOT": function (_0x51ed34, _0x1f6a8d) {
          const _0x3dba50 = _0x77dccc;
          return _0x147201[_0x3dba50(618, "TD*7")](_0x51ed34, _0x1f6a8d);
        },
        "RrBEU": _0x147201[_0x77dccc(430, "Oply")],
        "gTkJY": _0x147201[_0x77dccc(445, "Oply")],
        "SVlST": _0x147201[_0x77dccc(639, "235O")],
        "QASMy": function (_0x599e92, _0x4cd159) {
          const _0x312c0f = _0x77dccc;
          return _0x147201[_0x312c0f(390, "FYVz")](_0x599e92, _0x4cd159);
        },
        "XhhvO": function (_0x343c67, _0x3ff71a) {
          const _0x33f286 = _0x77dccc;
          return _0x147201[_0x33f286(741, "&3kO")](_0x343c67, _0x3ff71a);
        },
        "cwbKC": _0x147201[_0x77dccc(638, "w$m*")],
        "ePfla": _0x147201[_0x77dccc(609, "(YAL")],
        "ZpnnJ": _0x147201[_0x77dccc(334, "CXyr")],
        "cNJqN": function (_0x3ab62b) {
          const _0xeeb02b = _0x77dccc;
          return _0x147201[_0xeeb02b(579, "(YAL")](_0x3ab62b);
        }
      };
    $[_0x77dccc(662, "HmSO")](_0x42f975, async (_0xda6e19, _0x864ac4, _0x2e7d27) => {
      const _0x3c1326 = _0x77dccc;
      if (_0x1c05e0[_0x3c1326(599, "))rI")](_0x1c05e0[_0x3c1326(536, "RT3Y")], _0x1c05e0[_0x3c1326(666, "KO)n")])) try {
        if (_0xda6e19) {
          if (_0x1c05e0[_0x3c1326(586, "luX#")](_0x1c05e0[_0x3c1326(353, "xp0d")], _0x1c05e0[_0x3c1326(303, ")Jy3")])) console[_0x3c1326(317, "KO)n")]("" + JSON[_0x3c1326(590, "))rI")](_0xda6e19)), console[_0x3c1326(708, "uS[b")](_0x3c1326(502, ")5Fz"));else {
            _0x2dbeed[_0x3c1326(408, "CE$y")] = ![];
            return;
          }
        } else {
          if (_0x1c05e0[_0x3c1326(619, "luX#")](_0x1c05e0[_0x3c1326(458, "Nxi#")], _0x1c05e0[_0x3c1326(706, "@Ay7")])) _0x5dba3a[_0x3c1326(525, "FYVz")](_0x5cf68f, _0xc807dc);else {
            if (_0x2e7d27) {
              _0x2e7d27 = JSON[_0x3c1326(684, "JS4z")](_0x2e7d27);
              if (_0x1c05e0[_0x3c1326(316, "))rI")](_0x2e7d27[_0x1c05e0[_0x3c1326(647, "DR[p")]], _0x1c05e0[_0x3c1326(507, "aJRe")])) {
                $[_0x3c1326(754, "TD*7")] = ![];
                return;
              }
              if (_0x1c05e0[_0x3c1326(767, "xjx%")](_0x2e7d27[_0x3c1326(425, "aJRe")], "0") && _0x2e7d27[_0x3c1326(726, "5Qc[")]) {
                const _0x1bdc76 = _0x1c05e0[_0x3c1326(747, "Oply")][_0x3c1326(474, "KO)n")]("|");
                let _0x19d46f = 0;
                while (!![]) {
                  switch (_0x1bdc76[_0x19d46f++]) {
                    case "0":
                      $[_0x3c1326(476, "rcGB")] = _0x2e7d27[_0x3c1326(710, "!Hr1")]?.[_0x3c1326(404, ")5Fz")]?.[_0x3c1326(682, "DR[p")] || "";
                      continue;
                    case "1":
                      $[_0x3c1326(646, "CE$y")] = $[_0x3c1326(650, "wTrx")];
                      continue;
                    case "2":
                      $[_0x3c1326(572, "@Ay7")] = _0x1c05e0[_0x3c1326(774, "GCbz")](_0x2e7d27[_0x3c1326(491, "NlkG")]?.[_0x3c1326(322, "HmSO")]?.[_0x3c1326(632, "jfo6")], 1);
                      continue;
                    case "3":
                      $[_0x3c1326(731, "eWo7")] = _0x2e7d27[_0x3c1326(485, "RT3Y")]?.[_0x3c1326(438, "Nxi#")]?.[_0x3c1326(439, "yZBE")]?.[_0x3c1326(362, "6FWW")];
                      continue;
                    case "4":
                      $[_0x3c1326(661, "go%0")] = _0x2e7d27[_0x3c1326(523, "luX#")]?.[_0x3c1326(311, "HmSO")]?.[_0x3c1326(733, "aJRe")] || 0;
                      continue;
                  }
                  break;
                }
              }
            } else _0x1c05e0[_0x3c1326(582, "5Qc[")](_0x1c05e0[_0x3c1326(585, "jfo6")], _0x1c05e0[_0x3c1326(555, "go%0")]) ? $[_0x3c1326(328, "T6l5")](_0x1c05e0[_0x3c1326(663, "uS[b")]) : (_0x2bf9f8 = _0x1c722b[_0x3c1326(670, "%5dh")](_0x2c7770), _0xe004e3[_0x3c1326(378, "235O")] = _0x41ba33[_0x3c1326(369, "*oqe")]?.[_0x3c1326(677, "w$m*")] || "");
          }
        }
      } catch (_0x59b8d0) {
        $[_0x3c1326(561, "X%RW")](_0x59b8d0, _0x864ac4);
      } finally {
        _0x1c05e0[_0x3c1326(385, "!Hr1")](_0x366252);
      } else _0x52263e ? (_0x5d583e[_0x3c1326(551, "FYVz")]("" + _0x55c129[_0x3c1326(371, "t2)k")](_0x4be8ab)), _0x2a8c3c[_0x3c1326(686, "luX#")](_0x3c1326(633, "G!cU"))) : (_0xd45960[_0x3c1326(735, "%5dh")] = _0xb5f0d[_0x3c1326(342, "KO)n")](/"score":(\d+)/) ? _0x2540cf[_0x3c1326(394, "FYVz")](/"score":(\d+)/)[1] : 0, _0x14185d[_0x3c1326(549, "(YAL")] = _0x96a55c[_0x3c1326(655, "go%0")](/"currentBeanNum":(\d+)/) ? _0x33a6a0[_0x3c1326(765, "RT3Y")](/"currentBeanNum":(\d+)/)[1] : 0, _0x5076e0[_0x3c1326(736, ")5Fz")] = _0x3e4574[_0x3c1326(574, "JS4z")](/"showName":"(.*?)"/) ? _0x58e74b[_0x3c1326(759, "CE$y")](/"showName":"(.*?)"/)[1] : _0x120b08[_0x3c1326(529, "go%0")]);
    });
  });
}
async function _0x4abefe() {
  const _0x3c4147 = _0x4712a7,
    _0x412823 = {
      "lgOvZ": function (_0x54e8f9) {
        return _0x54e8f9();
      },
      "jZAaJ": function (_0x364f8f, _0x2ea772) {
        return _0x364f8f !== _0x2ea772;
      },
      "GfWRY": _0x3c4147(544, "yZBE"),
      "Torgs": _0x3c4147(295, "luX#"),
      "mhnOW": _0x3c4147(728, "eWo7")
    };
  let _0x52ba66 = {
    "url": _0x3c4147(302, "FYVz"),
    "body": _0x3c4147(667, "(YAL") + Date[_0x3c4147(396, "f^Jz")]() + _0x3c4147(698, "wTrx"),
    "headers": {
      "Cookie": cookie,
      "User-Agent": $["UA"],
      "Origin": _0x412823[_0x3c4147(350, "NlkG")],
      "Referer": _0x412823[_0x3c4147(467, "@Ay7")]
    }
  };
  return new Promise(_0x439bd0 => {
    const _0x3692a6 = _0x3c4147;
    _0x412823[_0x3692a6(729, "&K^Y")](_0x412823[_0x3692a6(669, "&K^Y")], _0x412823[_0x3692a6(652, "Nxi#")]) ? (_0x486f7c[_0x3692a6(328, "T6l5")]("" + _0x36596e[_0x3692a6(562, "TD*7")](_0x40d1d8)), _0x4d1484[_0x3692a6(364, "jA8N")](_0x3692a6(725, "KO)n"))) : $[_0x3692a6(375, "RT3Y")](_0x52ba66, async (_0x14b1d5, _0x121b8b, _0xfca4f) => {
      const _0x33ec4b = _0x3692a6;
      try {
        _0x14b1d5 ? (console[_0x33ec4b(534, "235O")]("" + JSON[_0x33ec4b(337, "*oqe")](_0x14b1d5)), console[_0x33ec4b(377, "eWo7")](_0x33ec4b(584, "%5dh"))) : ($[_0x33ec4b(478, "Oply")] = _0xfca4f[_0x33ec4b(546, "))rI")](/"score":(\d+)/) ? _0xfca4f[_0x33ec4b(319, "Nxi#")](/"score":(\d+)/)[1] : 0, $[_0x33ec4b(763, "DR[p")] = _0xfca4f[_0x33ec4b(486, "&K^Y")](/"currentBeanNum":(\d+)/) ? _0xfca4f[_0x33ec4b(701, "xp0d")](/"currentBeanNum":(\d+)/)[1] : 0, $[_0x33ec4b(510, "t2)k")] = _0xfca4f[_0x33ec4b(771, "*oqe")](/"showName":"(.*?)"/) ? _0xfca4f[_0x33ec4b(658, "wTrx")](/"showName":"(.*?)"/)[1] : $[_0x33ec4b(517, ")Jy3")]);
      } catch (_0x161645) {
        $[_0x33ec4b(657, "Nxi#")](_0x161645, _0x121b8b);
      } finally {
        _0x412823[_0x33ec4b(433, "TD*7")](_0x439bd0);
      }
    });
  });
}
async function queryScores() {
  const _0xebf137 = _0x4712a7,
    _0x1732ca = {
      "fsnwA": _0xebf137(511, ")Jy3"),
      "iKmDB": function (_0x3584d1) {
        return _0x3584d1();
      },
      "NVYvc": function (_0xa34788, _0x4b7fb2) {
        return _0xa34788 !== _0x4b7fb2;
      },
      "dQoKY": _0xebf137(690, "xp0d"),
      "QJjfR": _0xebf137(315, "jfo6"),
      "DfJzo": function (_0x5d616e, _0x11c83c) {
        return _0x5d616e == _0x11c83c;
      },
      "kXkCB": _0xebf137(459, "@Ay7"),
      "gEwYP": function (_0x341f73, _0x245c70) {
        return _0x341f73 === _0x245c70;
      },
      "skWag": _0xebf137(347, "CZ@B"),
      "bbXOr": _0xebf137(487, "6FWW"),
      "pwYFR": _0xebf137(656, "CE$y"),
      "IFjYX": _0xebf137(326, "aJRe"),
      "YCZSI": _0xebf137(409, "GCbz")
    };
  let _0x4ee7ac = "",
    _0x23a607 = {
      "appId": _0x1732ca[_0xebf137(739, "yZBE")],
      "functionId": _0x1732ca[_0xebf137(501, "NlkG")],
      "body": {},
      "appid": _0x1732ca[_0xebf137(455, "DR[p")],
      "user": $[_0xebf137(300, "uS[b")],
      "code": 0,
      "ua": $["UA"]
    };
  body = await _0x16ca3a[_0xebf137(358, "GCbz")](_0x23a607);
  let _0x1c120b = {
    "url": _0xebf137(352, "*oqe") + body + _0xebf137(339, "w$m*"),
    "headers": {
      "Cookie": cookie,
      "User-Agent": $["UA"],
      "Referer": _0x1732ca[_0xebf137(769, "uS[b")]
    }
  };
  return new Promise(_0x893d23 => {
    const _0x5e3c22 = _0xebf137,
      _0x26d860 = {
        "jNXmy": _0x1732ca[_0x5e3c22(522, "luX#")],
        "JmvxL": function (_0x1b54d7) {
          const _0x36d7ae = _0x5e3c22;
          return _0x1732ca[_0x36d7ae(388, "G!cU")](_0x1b54d7);
        },
        "FqXhN": function (_0x78c257, _0x3e3bf4) {
          const _0x1adc8a = _0x5e3c22;
          return _0x1732ca[_0x1adc8a(530, "DR[p")](_0x78c257, _0x3e3bf4);
        },
        "Nfvfm": _0x1732ca[_0x5e3c22(672, "eWo7")],
        "mGdJf": _0x1732ca[_0x5e3c22(642, "(YAL")],
        "GDSAd": function (_0x25c5d0, _0x12c637) {
          const _0x5e4a03 = _0x5e3c22;
          return _0x1732ca[_0x5e4a03(542, "xjx%")](_0x25c5d0, _0x12c637);
        },
        "zxoNI": _0x1732ca[_0x5e3c22(422, "%5dh")]
      };
    _0x1732ca[_0x5e3c22(335, "&K^Y")](_0x1732ca[_0x5e3c22(367, "aJRe")], _0x1732ca[_0x5e3c22(360, "235O")]) ? $[_0x5e3c22(654, "Gnx*")](_0x1c120b, async (_0x59697b, _0x27beeb, _0x197f84) => {
      const _0x51f6c3 = _0x5e3c22,
        _0x28b97a = {
          "GoonT": _0x26d860[_0x51f6c3(704, "Nxi#")],
          "MFUhL": function (_0x110f23) {
            const _0x43ef37 = _0x51f6c3;
            return _0x26d860[_0x43ef37(389, "Oply")](_0x110f23);
          }
        };
      try {
        if (_0x26d860[_0x51f6c3(528, ")Jy3")](_0x26d860[_0x51f6c3(724, "*oqe")], _0x26d860[_0x51f6c3(628, "uS[b")])) {
          const _0x3062cf = JSON[_0x51f6c3(589, "eWo7")](_0x197f84);
          _0x26d860[_0x51f6c3(651, "))rI")](_0x3062cf[_0x51f6c3(308, "xp0d")], 1000) && ($[_0x51f6c3(571, "))rI")] = _0x3062cf["rs"][_0x51f6c3(680, "HmSO")][_0x51f6c3(775, "%5dh")]);
        } else return _0x45c54f[_0x51f6c3(547, "KO)n")]()[_0x51f6c3(678, "jfo6")](hlbgbx[_0x51f6c3(495, "5Qc[")])[_0x51f6c3(532, "K#RX")]()[_0x51f6c3(538, "yZBE")](_0x5e15b3)[_0x51f6c3(742, "&K^Y")](hlbgbx[_0x51f6c3(463, "KO)n")]);
      } catch (_0x374719) {
        _0x26d860[_0x51f6c3(531, "Nxi#")](_0x26d860[_0x51f6c3(699, "jA8N")], _0x26d860[_0x51f6c3(480, "Gnx*")]) ? _0x28b97a[_0x51f6c3(483, ")Jy3")](_0x29c978) : $[_0x51f6c3(330, "&K*%")](_0x374719, _0x27beeb);
      } finally {
        _0x26d860[_0x51f6c3(764, "CE$y")](_0x893d23);
      }
    }) : _0x54deef[_0x5e3c22(442, "yZBE")] = _0x39452e["rs"][_0x5e3c22(301, "235O")][_0x5e3c22(338, "G!cU")] ? !![] : ![];
  });
}
async function fruitinfo() {
  const _0x42402e = _0x4712a7,
    _0x92c061 = {
      "pwvgJ": _0x42402e(460, "luX#"),
      "Ahcgs": function (_0x49d62d, _0x33c421) {
        return _0x49d62d === _0x33c421;
      },
      "YmHQm": _0x42402e(519, "5Qc["),
      "eDkCC": _0x42402e(376, "&K*%"),
      "oerIA": function (_0x64c00c, _0x161e29) {
        return _0x64c00c(_0x161e29);
      },
      "ZWGxK": function (_0x33fa93, _0x134771) {
        return _0x33fa93 === _0x134771;
      },
      "vlfiZ": _0x42402e(421, "G!cU"),
      "CBZzi": function (_0x421a58, _0x24dab8) {
        return _0x421a58 === _0x24dab8;
      },
      "bHdpA": _0x42402e(605, "KO)n"),
      "svJNI": function (_0x45dcaa) {
        return _0x45dcaa();
      },
      "fryap": _0x42402e(696, "jm&3"),
      "UziNv": _0x42402e(693, "Nxi#"),
      "fQdDW": _0x42402e(716, "%5dh"),
      "UFLWW": _0x42402e(709, "f^Jz"),
      "EOQwQ": _0x42402e(673, "f^Jz"),
      "NOrAp": _0x42402e(305, "TD*7"),
      "Bqscf": _0x42402e(643, "xjx%")
    };
  return new Promise(_0x577a3d => {
    const _0x84f52c = _0x42402e,
      _0x53efca = {
        "rwzRH": _0x92c061[_0x84f52c(340, "jm&3")],
        "XCCnf": function (_0x244f3f, _0x5a7598) {
          const _0x585662 = _0x84f52c;
          return _0x92c061[_0x585662(477, "Nxi#")](_0x244f3f, _0x5a7598);
        },
        "suCyR": _0x92c061[_0x84f52c(400, "6FWW")],
        "WdVwF": _0x92c061[_0x84f52c(720, "G!cU")],
        "pHfxh": function (_0x9218ce, _0x1ce546) {
          const _0x2a528f = _0x84f52c;
          return _0x92c061[_0x2a528f(543, "235O")](_0x9218ce, _0x1ce546);
        },
        "PghtH": function (_0x2ea0c6, _0x31e077) {
          const _0x6d75b1 = _0x84f52c;
          return _0x92c061[_0x6d75b1(318, "Gnx*")](_0x2ea0c6, _0x31e077);
        },
        "OCxrd": _0x92c061[_0x84f52c(626, "GCbz")],
        "tWJyV": function (_0x5646b5, _0x4b1728) {
          const _0x5db569 = _0x84f52c;
          return _0x92c061[_0x5db569(405, "CZ@B")](_0x5646b5, _0x4b1728);
        },
        "Edhuk": _0x92c061[_0x84f52c(717, "G!cU")],
        "GjoqS": function (_0x318a4a) {
          const _0x31c2d = _0x84f52c;
          return _0x92c061[_0x31c2d(622, "jA8N")](_0x318a4a);
        }
      };
    if (_0x92c061[_0x84f52c(700, "NlkG")](_0x92c061[_0x84f52c(306, "rWlV")], _0x92c061[_0x84f52c(749, "Gnx*")])) {
      const _0x123d29 = {
        "url": _0x84f52c(418, "%5dh"),
        "body": _0x84f52c(610, "6FWW") + _0x92c061[_0x84f52c(447, "KO)n")](encodeURIComponent, JSON[_0x84f52c(524, "NlkG")]({
          "version": 24,
          "channel": 1,
          "babelChannel": _0x92c061[_0x84f52c(565, "rcGB")],
          "lat": "0",
          "lng": "0"
        })) + _0x84f52c(392, "X%RW"),
        "headers": {
          "accept": _0x92c061[_0x84f52c(732, "jm&3")],
          "accept-encoding": _0x92c061[_0x84f52c(757, "t2)k")],
          "accept-language": _0x92c061[_0x84f52c(601, "jfo6")],
          "cookie": cookie,
          "origin": _0x92c061[_0x84f52c(505, "GCbz")],
          "referer": _0x92c061[_0x84f52c(348, "JS4z")],
          "User-Agent": $["UA"],
          "Content-Type": _0x92c061[_0x84f52c(512, "CXyr")]
        },
        "timeout": 10000
      };
      $[_0x84f52c(489, "CXyr")](_0x123d29, (_0x54b2a0, _0x52fe81, _0x53c570) => {
        const _0x515240 = _0x84f52c;
        try {
          if (_0x54b2a0) !llgeterror && (console[_0x515240(708, "uS[b")](_0x53efca[_0x515240(406, "CE$y")]), console[_0x515240(611, "GCbz")](JSON[_0x515240(419, "Gnx*")](_0x54b2a0))), llgeterror = !![];else {
            if (_0x53efca[_0x515240(750, "HmSO")](_0x53efca[_0x515240(556, "yZBE")], _0x53efca[_0x515240(623, "RT3Y")])) _0x2a487e ? (_0x1c1071[_0x515240(554, "JS4z")](_0x515240(625, "5Qc[")), _0x519c4a[_0x515240(758, "jfo6")](_0x28a45a)) : (_0x2ee962 = _0x3cb7f4[_0x515240(504, "&K*%")](_0x21a8c7), _0x105df5[_0x515240(578, "rWlV")] = _0x2ba88a[_0x515240(368, "jfo6")]?.[_0x515240(617, "HmSO")] || "");else {
              llgeterror = ![];
              if (_0x53efca[_0x515240(473, "&3kO")](safeGet, _0x53c570)) {
                $[_0x515240(516, "JS4z")] = JSON[_0x515240(595, "235O")](_0x53c570);
                if ($[_0x515240(712, "X%RW")][_0x515240(492, "uS[b")]) {
                  if (_0x53efca[_0x515240(612, "uS[b")](_0x53efca[_0x515240(345, "f^Jz")], _0x53efca[_0x515240(312, ")Jy3")])) $[_0x515240(327, "uS[b")] = $[_0x515240(440, "xp0d")][_0x515240(475, "DR[p")][_0x515240(411, "&K^Y")], $[_0x515240(323, "rWlV")] = $[_0x515240(637, "w$m*")][_0x515240(688, "G!cU")][_0x515240(450, "t2)k")], $[_0x515240(457, "DR[p")] = $[_0x515240(515, "GCbz")][_0x515240(336, "K#RX")][_0x515240(490, "@Ay7")], $[_0x515240(407, "*oqe")] = $[_0x515240(435, "eWo7")][_0x515240(727, "*oqe")][_0x515240(778, "G!cU")];else {
                    const _0x5dda4e = _0x1c8c7f ? function () {
                      const _0x4801fc = _0x515240;
                      if (_0x3bf69c) {
                        const _0x352d1b = _0x3bf2b1[_0x4801fc(711, "TD*7")](_0x574921, arguments);
                        return _0x369d97 = null, _0x352d1b;
                      }
                    } : function () {};
                    return _0x306a27 = ![], _0x5dda4e;
                  }
                }
              }
            }
          }
        } catch (_0x1017ca) {
          $[_0x515240(697, "CE$y")](_0x1017ca, _0x52fe81);
        } finally {
          _0x53efca[_0x515240(636, "CE$y")](_0x53efca[_0x515240(403, "wTrx")], _0x53efca[_0x515240(434, "rcGB")]) ? _0x53efca[_0x515240(766, ")Jy3")](_0x577a3d) : _0x380841[_0x515240(777, "Gnx*")](_0x3905a3, _0x206cb2);
        }
      });
    } else _0x84fa2f[_0x84f52c(629, "wTrx")](_0x314375, _0x21ec8b);
  });
}
async function fruitnew(_0x394da0 = 500) {
  const _0x297fb2 = _0x4712a7,
    _0x3e39c5 = {
      "IFxWG": function (_0x40adc4) {
        return _0x40adc4();
      },
      "aBSKu": function (_0x25cfaa, _0x26bd0b) {
        return _0x25cfaa === _0x26bd0b;
      },
      "xehgc": _0x297fb2(748, "CE$y"),
      "pGXvH": _0x297fb2(387, "go%0"),
      "FLbqK": _0x297fb2(702, "wTrx"),
      "QMrqL": function (_0x280d06, _0x106fe1) {
        return _0x280d06 !== _0x106fe1;
      },
      "MvvkI": _0x297fb2(398, ")Jy3"),
      "PTQJu": function (_0x5b9a22, _0x366c79) {
        return _0x5b9a22(_0x366c79);
      },
      "XlIIc": _0x297fb2(410, "RT3Y"),
      "nUKJS": function (_0x8be2f1, _0x1223b5, _0x335f94) {
        return _0x8be2f1(_0x1223b5, _0x335f94);
      },
      "OnKMW": _0x297fb2(640, "t2)k"),
      "pFePf": _0x297fb2(577, "X%RW"),
      "McBjg": _0x297fb2(641, "wTrx"),
      "FViOf": _0x297fb2(444, "X%RW"),
      "jDgEQ": _0x297fb2(671, "eWo7"),
      "xOnZv": _0x297fb2(344, ")Jy3"),
      "RquGW": _0x297fb2(382, "!Hr1"),
      "mRryq": _0x297fb2(503, "JS4z"),
      "LFpLq": _0x297fb2(436, "uS[b"),
      "vumAb": _0x297fb2(598, "rWlV")
    };
  let _0x26629f = {
      "version": 1
    },
    _0x199ba2 = {
      "appId": _0x3e39c5[_0x297fb2(722, "w$m*")],
      "fn": _0x3e39c5[_0x297fb2(653, "*oqe")],
      "body": _0x26629f,
      "apid": _0x3e39c5[_0x297fb2(602, "wTrx")],
      "ver": $["UA"][_0x297fb2(743, "w$m*")](";")[2],
      "cl": _0x3e39c5[_0x297fb2(380, "w$m*")],
      "user": $[_0x297fb2(420, "X%RW")],
      "code": 1,
      "ua": $["UA"]
    };
  _0x26629f = await _0x2e48f4[_0x297fb2(608, "t2)k")](_0x199ba2);
  let _0x571dcc = {
    "url": JD_API_HOST + "?" + _0x26629f,
    "headers": {
      "Host": _0x3e39c5[_0x297fb2(304, "eWo7")],
      "Accept": _0x3e39c5[_0x297fb2(499, "aJRe")],
      "Origin": _0x3e39c5[_0x297fb2(685, "))rI")],
      "Accept-Encoding": _0x3e39c5[_0x297fb2(349, ")5Fz")],
      "User-Agent": $["UA"],
      "Accept-Language": _0x3e39c5[_0x297fb2(356, "NlkG")],
      "Referer": _0x3e39c5[_0x297fb2(527, "f^Jz")],
      "Cookie": cookie
    },
    "timeout": 30000
  };
  return new Promise(_0x3a6734 => {
    const _0x389217 = _0x297fb2;
    _0x3e39c5[_0x389217(500, "X%RW")](setTimeout, () => {
      const _0x14cd2b = _0x389217,
        _0x2f0bb8 = {
          "VFfps": function (_0x3e18d0) {
            const _0x2e54dc = _0x178e;
            return _0x3e39c5[_0x2e54dc(587, "KO)n")](_0x3e18d0);
          },
          "qpaQB": function (_0x193a12, _0xa16b95) {
            const _0x9a1367 = _0x178e;
            return _0x3e39c5[_0x9a1367(545, "luX#")](_0x193a12, _0xa16b95);
          },
          "PGsil": _0x3e39c5[_0x14cd2b(630, "wTrx")],
          "PmMxS": _0x3e39c5[_0x14cd2b(621, "K#RX")],
          "jALiE": function (_0x572539, _0x185617) {
            const _0x167f5d = _0x14cd2b;
            return _0x3e39c5[_0x167f5d(751, "jA8N")](_0x572539, _0x185617);
          },
          "ADtKZ": _0x3e39c5[_0x14cd2b(613, "luX#")],
          "uayJu": function (_0x48e309, _0x4aeb7d) {
            const _0x3dc109 = _0x14cd2b;
            return _0x3e39c5[_0x3dc109(593, "HmSO")](_0x48e309, _0x4aeb7d);
          },
          "FggEJ": _0x3e39c5[_0x14cd2b(332, "t2)k")],
          "NxJbS": function (_0x33bf00, _0x73000e) {
            const _0x25b93b = _0x14cd2b;
            return _0x3e39c5[_0x25b93b(773, "jfo6")](_0x33bf00, _0x73000e);
          }
        };
      _0x3e39c5[_0x14cd2b(760, "(YAL")](_0x3e39c5[_0x14cd2b(363, "X%RW")], _0x3e39c5[_0x14cd2b(397, "*oqe")]) ? _0x2e3ae7[_0x14cd2b(723, "(YAL")](_0x4e9716, _0x3d1083) : $[_0x14cd2b(548, "aJRe")](_0x571dcc, (_0x178502, _0x23ab9d, _0x498ffa) => {
        const _0x41eb31 = _0x14cd2b,
          _0x12ef6e = {
            "CNOaL": function (_0xd11f5) {
              const _0x46be45 = _0x178e;
              return _0x2f0bb8[_0x46be45(451, "GCbz")](_0xd11f5);
            }
          };
        if (_0x2f0bb8[_0x41eb31(325, "jA8N")](_0x2f0bb8[_0x41eb31(432, "HmSO")], _0x2f0bb8[_0x41eb31(453, "DR[p")])) _0x1db34b[_0x41eb31(462, "HmSO")] = _0x16c073[_0x41eb31(559, "xp0d")](_0x5bf9e7), _0x26d090[_0x41eb31(755, "NlkG")][_0x41eb31(541, "w$m*")] && (_0x320a19[_0x41eb31(497, "KO)n")] = _0x24b95b[_0x41eb31(768, "*oqe")][_0x41eb31(674, "RT3Y")][_0x41eb31(370, "%5dh")], _0x5d7796[_0x41eb31(429, "&3kO")] = _0x3ac5e9[_0x41eb31(576, "6FWW")][_0x41eb31(386, "Oply")][_0x41eb31(689, "&K*%")], _0x41e9f0[_0x41eb31(533, "Gnx*")] = _0xfc7509[_0x41eb31(361, "))rI")][_0x41eb31(553, "jm&3")][_0x41eb31(776, "*oqe")], _0x16a962[_0x41eb31(557, "TD*7")] = _0x174c7f[_0x41eb31(552, "jA8N")][_0x41eb31(570, "GCbz")][_0x41eb31(694, "JS4z")]);else try {
          _0x178502 ? _0x2f0bb8[_0x41eb31(372, "*oqe")](_0x2f0bb8[_0x41eb31(676, "TD*7")], _0x2f0bb8[_0x41eb31(402, "5Qc[")]) ? (console[_0x41eb31(395, "rcGB")](_0x41eb31(615, "yZBE")), $[_0x41eb31(596, "go%0")](_0x178502)) : _0x12ef6e[_0x41eb31(537, "xjx%")](_0x49c747) : (_0x498ffa = JSON[_0x41eb31(746, "*oqe")](_0x498ffa), $[_0x41eb31(558, "G!cU")] = _0x498ffa[_0x41eb31(616, "GCbz")]?.[_0x41eb31(513, "aJRe")] || "");
        } catch (_0x4dcea3) {
          $[_0x41eb31(449, "KO)n")](_0x4dcea3, _0x23ab9d);
        } finally {
          _0x2f0bb8[_0x41eb31(309, "&K*%")](_0x2f0bb8[_0x41eb31(331, "HmSO")], _0x2f0bb8[_0x41eb31(737, "5Qc[")]) ? _0x178b29[_0x41eb31(351, "eWo7")](_0x239ac1, _0x1c0f59) : _0x2f0bb8[_0x41eb31(721, "KO)n")](_0x3a6734, _0x498ffa);
        }
      });
    }, _0x394da0);
  });
}
async function checkplus() {
  const _0x5bca60 = _0x4712a7,
    _0x8d02bf = {
      "zYKzy": _0x5bca60(494, "%5dh"),
      "WCeAg": function (_0x16215e, _0x2e857d) {
        return _0x16215e == _0x2e857d;
      },
      "HFzkA": _0x5bca60(416, "w$m*"),
      "IJwCA": function (_0x41ee0, _0x595fd4) {
        return _0x41ee0 === _0x595fd4;
      },
      "xXpnP": _0x5bca60(471, "5Qc["),
      "rbSXW": _0x5bca60(752, "GCbz"),
      "Ewrjy": function (_0x477c6a, _0x5a4c00) {
        return _0x477c6a == _0x5a4c00;
      },
      "CmvTg": function (_0x3bf691, _0x5b15e2) {
        return _0x3bf691 !== _0x5b15e2;
      },
      "asEqF": _0x5bca60(588, "aJRe"),
      "pAszI": function (_0x3b42c5) {
        return _0x3b42c5();
      },
      "FhThX": _0x5bca60(550, "G!cU"),
      "ljTru": _0x5bca60(464, "FYVz"),
      "ipcgw": _0x5bca60(355, "t2)k"),
      "eYOJv": _0x5bca60(745, "xp0d"),
      "ODGjU": _0x5bca60(583, "TD*7"),
      "lbYvl": _0x5bca60(592, "&K*%"),
      "ahcXK": _0x5bca60(393, "!Hr1"),
      "bdGaz": _0x5bca60(705, "JS4z"),
      "xTbzO": _0x5bca60(446, "RT3Y")
    };
  let _0x10cc4f = {
      "contentType": _0x8d02bf[_0x5bca60(465, "f^Jz")],
      "qids": _0x8d02bf[_0x5bca60(566, "go%0")],
      "checkLevel": 1
    },
    _0x5de7ee = {
      "appId": _0x8d02bf[_0x5bca60(424, "JS4z")],
      "functionId": _0x8d02bf[_0x5bca60(581, "DR[p")],
      "body": _0x10cc4f,
      "appid": _0x8d02bf[_0x5bca60(715, "Gnx*")],
      "user": $[_0x5bca60(472, "jA8N")],
      "code": 1,
      "ua": $["UA"]
    };
  _0x10cc4f = await _0x16ca3a[_0x5bca60(470, "TD*7")](_0x5de7ee);
  let _0x42eb51 = {
    "url": _0x5bca60(481, "CZ@B"),
    "body": _0x10cc4f,
    "headers": {
      "User-Agent": $["UA"],
      "Cookie": cookie,
      "Origin": _0x8d02bf[_0x5bca60(521, "uS[b")],
      "Referer": _0x8d02bf[_0x5bca60(454, "*oqe")]
    }
  };
  return new Promise(async _0x4187b6 => {
    const _0x43addf = _0x5bca60,
      _0x583420 = {
        "Recnh": _0x8d02bf[_0x43addf(299, "CZ@B")],
        "XAtlM": function (_0x19d81b, _0x289803) {
          const _0x34af4d = _0x43addf;
          return _0x8d02bf[_0x34af4d(738, "Gnx*")](_0x19d81b, _0x289803);
        },
        "saHpY": _0x8d02bf[_0x43addf(310, "K#RX")],
        "MqwZm": function (_0x16afda, _0x33d502) {
          const _0x4906d9 = _0x43addf;
          return _0x8d02bf[_0x4906d9(540, "w$m*")](_0x16afda, _0x33d502);
        },
        "pYffQ": _0x8d02bf[_0x43addf(359, "jm&3")],
        "SmONG": _0x8d02bf[_0x43addf(366, "rWlV")],
        "LBRVm": function (_0x47c32d, _0x2d6a40) {
          const _0x31aa77 = _0x43addf;
          return _0x8d02bf[_0x31aa77(681, "!Hr1")](_0x47c32d, _0x2d6a40);
        },
        "NKSvw": function (_0x5c2ec2, _0x2fd68f) {
          const _0x2e5e86 = _0x43addf;
          return _0x8d02bf[_0x2e5e86(379, "CE$y")](_0x5c2ec2, _0x2fd68f);
        },
        "IeJyE": _0x8d02bf[_0x43addf(297, "T6l5")],
        "rVCTy": function (_0x3170e5) {
          const _0x5ceed4 = _0x43addf;
          return _0x8d02bf[_0x5ceed4(607, "&3kO")](_0x3170e5);
        }
      };
    _0x8d02bf[_0x43addf(591, "DR[p")](_0x8d02bf[_0x43addf(756, "T6l5")], _0x8d02bf[_0x43addf(714, "wTrx")]) ? $[_0x43addf(320, "K#RX")](_0x42eb51, async (_0x3b1b0c, _0xb31c02, _0x32028a) => {
      const _0x5eadef = _0x43addf,
        _0x19fdab = {
          "vFzAP": _0x583420[_0x5eadef(779, "%5dh")],
          "llZUM": function (_0x976462, _0x362cef) {
            const _0x4033dd = _0x5eadef;
            return _0x583420[_0x4033dd(740, "w$m*")](_0x976462, _0x362cef);
          },
          "zeskA": _0x583420[_0x5eadef(772, "NlkG")]
        };
      try {
        if (_0x583420[_0x5eadef(649, "KO)n")](_0x583420[_0x5eadef(514, "f^Jz")], _0x583420[_0x5eadef(391, "DR[p")])) {
          if (_0x3b1b0c) console[_0x5eadef(534, "235O")]("" + JSON[_0x5eadef(744, "jfo6")](_0x3b1b0c)), console[_0x5eadef(679, "Nxi#")](_0x5eadef(624, "CXyr"));else {
            if (_0x583420[_0x5eadef(298, "eWo7")](_0x583420[_0x5eadef(687, "CZ@B")], _0x583420[_0x5eadef(761, "6FWW")])) {
              _0x32028a = JSON[_0x5eadef(594, "jfo6")](_0x32028a);
              if (_0x583420[_0x5eadef(600, "wTrx")](_0x32028a[_0x5eadef(357, "TD*7")], 1711000)) $[_0x5eadef(707, "Oply")] = _0x32028a["rs"][_0x5eadef(631, "(YAL")][_0x5eadef(466, "CZ@B")] ? !![] : ![];else {}
            } else {
              const _0x343442 = _0x19fdab[_0x5eadef(664, "f^Jz")][_0x5eadef(498, "K#RX")]("|");
              let _0x475201 = 0;
              while (!![]) {
                switch (_0x343442[_0x475201++]) {
                  case "0":
                    _0x22835c[_0x5eadef(365, "yZBE")] = _0x4c9108[_0x5eadef(614, "T6l5")]?.[_0x5eadef(718, "go%0")]?.[_0x5eadef(606, "235O")] || "";
                    continue;
                  case "1":
                    _0x4cb569[_0x5eadef(329, "RT3Y")] = _0x19fdab[_0x5eadef(469, "@Ay7")](_0x599ee1[_0x5eadef(368, "jfo6")]?.[_0x5eadef(635, "eWo7")]?.[_0x5eadef(520, "w$m*")], 1);
                    continue;
                  case "2":
                    _0x5f0fb9[_0x5eadef(567, "&K*%")] = _0x4a000c[_0x5eadef(369, "*oqe")]?.[_0x5eadef(634, "!Hr1")]?.[_0x5eadef(414, "CE$y")]?.[_0x5eadef(568, "wTrx")];
                    continue;
                  case "3":
                    _0x39d0c3[_0x5eadef(780, "X%RW")] = _0x1baab4[_0x5eadef(417, "%5dh")];
                    continue;
                  case "4":
                    _0x57ba80[_0x5eadef(343, "FYVz")] = _0x2aeb53[_0x5eadef(373, "wTrx")]?.[_0x5eadef(695, ")Jy3")]?.[_0x5eadef(564, "%5dh")] || 0;
                    continue;
                }
                break;
              }
            }
          }
        } else !_0x227600 && (_0x1650e1[_0x5eadef(423, "*oqe")](_0x19fdab[_0x5eadef(482, "w$m*")]), _0x542fdb[_0x5eadef(665, "xp0d")](_0x336e09[_0x5eadef(518, "&K^Y")](_0x396ae1))), _0x1482f4 = !![];
      } catch (_0x1d25e2) {
        $[_0x5eadef(341, ")5Fz")](_0x1d25e2, _0xb31c02);
      } finally {
        if (_0x583420[_0x5eadef(719, "t2)k")](_0x583420[_0x5eadef(346, "TD*7")], _0x583420[_0x5eadef(627, "CE$y")])) {
          const _0x5352f8 = _0x5b71e0[_0x5eadef(401, "&3kO")](_0x536064, arguments);
          return _0x30070c = null, _0x5352f8;
        } else _0x583420[_0x5eadef(307, "rcGB")](_0x4187b6);
      }
    }) : (_0x1ac639[_0x43addf(668, "DR[p")] = _0x1f97e2[_0x43addf(509, "!Hr1")](/"score":(\d+)/) ? _0x47abaa[_0x43addf(441, "&K*%")](/"score":(\d+)/)[1] : 0, _0x2866fa[_0x43addf(506, "RT3Y")] = _0x2d5cb0[_0x43addf(321, "(YAL")](/"currentBeanNum":(\d+)/) ? _0x356653[_0x43addf(655, "go%0")](/"currentBeanNum":(\d+)/)[1] : 0, _0x29fbd8[_0x43addf(646, "CE$y")] = _0x36a7d5[_0x43addf(658, "wTrx")](/"showName":"(.*?)"/) ? _0x246f7e[_0x43addf(713, "uS[b")](/"showName":"(.*?)"/)[1] : _0x54f45a[_0x43addf(620, "GCbz")]);
  });
}
var version_ = "jsjiami.com.v7";
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00cookie\n\u76F4\u63A5\u4F7F\u7528NobyDa\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.pt_pin = cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.CryptoJS = $.isNode() ? require("crypto-js") : CryptoJS;
      $.index = i + 1;
      $.beanCount = 0;
      $.incomeBean = 0;
      $.expenseBean = 0;
      $.todayIncomeBean = 0;
      $.todayOutcomeBean = 0;
      $.errorMsg = "";
      $.isLogin = true;
      $.nickName = "";
      $.levelName = "";
      $.message = "";
      $.balance = 0;
      $.expiredBalance = 0;
      $.JdFarmProdName = "";
      $.JdtreeEnergy = 0;
      $.JdtreeTotalEnergy = 0;
      $.treeState = 0;
      $.JdwaterTotalT = 0;
      $.JdwaterD = 0;
      $.JDwaterEveryDayT = 0;
      $.JDtotalcash = 0;
      $.jdCash = 0;
      $.isPlusVip = false;
      $.isRealNameAuth = false;
      $.JingXiang = "";
      $.allincomeBean = 0; //月收入
      $.allexpenseBean = 0; //月支出
      $.beanChangeXi = 0;
      $.YunFeiTitle = "";
      $.YunFeiQuan = 0;
      $.YunFeiQuanEndTime = "";
      $.YunFeiTitle2 = "";
      $.YunFeiQuan2 = 0;
      $.YunFeiQuanEndTime2 = "";
      $.JoyRunningAmount = "";
      $.ECardinfo = "";
      $.PlustotalScore = 0;
      $.CheckTime = "";
      $.beanCache = 0;
      $.fruitnewinfo = "";
      $.newfarm_info = "";
      TempBaipiao = "";
      strGuoqi = "";
      $.wyw_score = "";
      $.wb_score = "";
      console.log(`******开始查询【京东账号${$.index}】${$.nickName || $.UserName}*********`);
      $.UA = require("./USER_AGENTS").UARAM();
      await getuserinfo_6dy();
      //await TotalBean2();
      if ($.beanCount == 0) {
        console.log("\u6570\u636E\u83B7\u53D6\u5931\u8D25\uFF0C\u7B49\u5F8530\u79D2\u540E\u91CD\u8BD5....");
        await $.wait(30000);
        await TotalBean();
      }
      if ($.beanCount == 0) {
        console.log("\u7591\u4F3C\u83B7\u53D6\u5931\u8D25,\u7B49\u5F8510\u79D2\u540E\u7528\u7B2C\u4E8C\u4E2A\u63A5\u53E3\u8BD5\u8BD5....");
        await $.wait(10000);
        var userdata = await getuserinfo();
        if (userdata.code == 1) {
          $.beanCount = userdata.content.jdBean;
        }
      }
      if (!$.isLogin) {
        await isLoginByX1a0He();
      }
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue;
      }
      if (TempBeanCache) {
        for (let j = 0; j < TempBeanCache.length; j++) {
          if (TempBeanCache[j].pt_pin == $.UserName) {
            $.CheckTime = TempBeanCache[j].CheckTime;
            $.beanCache = TempBeanCache[j].BeanNum;
            break;
          }
        }
      }
      var llfound = false;
      var timeString = "";
      var nowHour = new Date().getHours();
      var nowMinute = new Date().getMinutes();
      if (nowHour < 10) timeString += "0" + nowHour + ":";else timeString += nowHour + ":";
      if (nowMinute < 10) timeString += "0" + nowMinute;else timeString += nowMinute;
      if (TodayCache) {
        for (let j = 0; j < TodayCache.length; j++) {
          if (TodayCache[j].pt_pin == $.UserName) {
            TodayCache[j].CheckTime = timeString;
            TodayCache[j].BeanNum = $.beanCount;
            llfound = true;
            break;
          }
        }
      }
      if (!llfound) {
        var tempAddCache = {
          "pt_pin": $.UserName,
          "CheckTime": timeString,
          "BeanNum": $.beanCount
        };
        TodayCache.push(tempAddCache);
      }
      await getjdfruitinfo(); //老农场
      await $.wait(1000);
      await fruitnew();
      //await checkplus();
      await Promise.all([wanyiwan(), wb_info(), bean(),
      //京豆查询
      queryScores(), getek(), newfarm_info()]);
      await showMsg();
      if (intPerSent > 0) {
        if ((i + 1) % intPerSent == 0) {
          console.log("\u5206\u6BB5\u901A\u77E5\u6761\u4EF6\u8FBE\u6210\uFF0C\u5904\u7406\u53D1\u9001\u901A\u77E5....");
          if ($.isNode() && allMessage) {
            var TempMessage = allMessage;
            if (strAllNotify) allMessage = strAllNotify + `\n` + allMessage;
            await notify.sendNotify(`${$.name}`, `${allMessage}`, {
              url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
            }, undefined, TempMessage);
          }
          if ($.isNode() && allMessageMonth) {
            await notify.sendNotify(`京东月资产统计`, `${allMessageMonth}`, {
              url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
            });
          }
          allMessage = "";
          allMessageMonth = "";
        }
      }
    }
  }
  var str = JSON.stringify(TodayCache, null, 2);
  fs.writeFile(strNewBeanCache, str, function (err) {
    if (err) {
      console.log(err);
      console.log("\u6DFB\u52A0\u7F13\u5B58" + TodayDate + ".json\u5931\u8D25!");
    } else {
      console.log("\u6DFB\u52A0\u7F13\u5B58" + TodayDate + ".json\u6210\u529F!");
    }
  });

  //组1通知
  if (ReceiveMessageGp4) {
    allMessage2Gp4 = `【⏰商品白嫖清单⏰】\n` + ReceiveMessageGp4;
  }
  if (WarnMessageGp4) {
    if (allMessage2Gp4) {
      allMessage2Gp4 = `\n` + allMessage2Gp4;
    }
    allMessage2Gp4 = `【⏰商品白嫖活动任务提醒⏰】\n` + WarnMessageGp4 + allMessage2Gp4;
  }

  //组2通知
  if (ReceiveMessageGp2) {
    allMessage2Gp2 = `【⏰商品白嫖清单⏰】\n` + ReceiveMessageGp2;
  }
  if (WarnMessageGp2) {
    if (allMessage2Gp2) {
      allMessage2Gp2 = `\n` + allMessage2Gp2;
    }
    allMessage2Gp2 = `【⏰商品白嫖活动任务提醒⏰】\n` + WarnMessageGp2 + allMessage2Gp2;
  }

  //组3通知
  if (ReceiveMessageGp3) {
    allMessage2Gp3 = `【⏰商品白嫖清单⏰】\n` + ReceiveMessageGp3;
  }
  if (WarnMessageGp3) {
    if (allMessage2Gp3) {
      allMessage2Gp3 = `\n` + allMessage2Gp3;
    }
    allMessage2Gp3 = `【⏰商品白嫖活动任务提醒⏰】\n` + WarnMessageGp3 + allMessage2Gp3;
  }

  //其他通知
  if (allReceiveMessage) {
    allMessage2 = `【⏰商品白嫖清单⏰】\n` + allReceiveMessage;
  }
  if (allWarnMessage) {
    if (allMessage2) {
      allMessage2 = `\n` + allMessage2;
    }
    allMessage2 = `【⏰商品白嫖活动任务提醒⏰】\n` + allWarnMessage + allMessage2;
  }
  if (intPerSent > 0) {
    //console.log("分段通知还剩下" + cookiesArr.length % intPerSent + "个账号需要发送...");
    if (allMessage || allMessageMonth) {
      console.log("\u5206\u6BB5\u901A\u77E5\u6536\u5C3E\uFF0C\u5904\u7406\u53D1\u9001\u901A\u77E5....");
      if ($.isNode() && allMessage) {
        var TempMessage = allMessage;
        if (strAllNotify) allMessage = strAllNotify + `\n` + allMessage;
        await notify.sendNotify(`${$.name}`, `${allMessage}`, {
          url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
        }, undefined, TempMessage);
      }
      if ($.isNode() && allMessageMonth) {
        await notify.sendNotify(`京东月资产统计`, `${allMessageMonth}`, {
          url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
        });
      }
    }
  } else {
    if ($.isNode() && allMessageGp2) {
      var TempMessage = allMessageGp2;
      if (strAllNotify) allMessageGp2 = strAllNotify + `\n` + allMessageGp2;
      await notify.sendNotify(`${$.name}#2`, `${allMessageGp2}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      }, undefined, TempMessage);
      await $.wait(10000);
    }
    if ($.isNode() && allMessageGp3) {
      var TempMessage = allMessageGp3;
      if (strAllNotify) allMessageGp3 = strAllNotify + `\n` + allMessageGp3;
      await notify.sendNotify(`${$.name}#3`, `${allMessageGp3}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      }, undefined, TempMessage);
      await $.wait(10000);
    }
    if ($.isNode() && allMessageGp4) {
      var TempMessage = allMessageGp4;
      if (strAllNotify) allMessageGp4 = strAllNotify + `\n` + allMessageGp4;
      await notify.sendNotify(`${$.name}#4`, `${allMessageGp4}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      }, undefined, TempMessage);
      await $.wait(10000);
    }
    if ($.isNode() && allMessage) {
      var TempMessage = allMessage;
      if (strAllNotify) allMessage = strAllNotify + `\n` + allMessage;
      await notify.sendNotify(`${$.name}`, `${allMessage}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      }, undefined, TempMessage);
      await $.wait(10000);
    }
    if ($.isNode() && allMessageMonthGp2) {
      await notify.sendNotify(`京东月资产统计#2`, `${allMessageMonthGp2}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      });
      await $.wait(10000);
    }
    if ($.isNode() && allMessageMonthGp3) {
      await notify.sendNotify(`京东月资产统计#3`, `${allMessageMonthGp3}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      });
      await $.wait(10000);
    }
    if ($.isNode() && allMessageMonthGp4) {
      await notify.sendNotify(`京东月资产统计#4`, `${allMessageMonthGp4}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      });
      await $.wait(10000);
    }
    if ($.isNode() && allMessageMonth) {
      await notify.sendNotify(`京东月资产统计`, `${allMessageMonth}`, {
        url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
      });
      await $.wait(10000);
    }
  }
  if ($.isNode() && allMessage2Gp2) {
    allMessage2Gp2 += RemainMessage;
    await notify.sendNotify("\u4EAC\u4E1C\u767D\u5AD6\u63D0\u9192#2", `${allMessage2Gp2}`, {
      url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
    });
    await $.wait(10000);
  }
  if ($.isNode() && allMessage2Gp3) {
    allMessage2Gp3 += RemainMessage;
    await notify.sendNotify("\u4EAC\u4E1C\u767D\u5AD6\u63D0\u9192#3", `${allMessage2Gp3}`, {
      url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
    });
    await $.wait(10000);
  }
  if ($.isNode() && allMessage2Gp4) {
    allMessage2Gp4 += RemainMessage;
    await notify.sendNotify("\u4EAC\u4E1C\u767D\u5AD6\u63D0\u9192#4", `${allMessage2Gp4}`, {
      url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
    });
    await $.wait(10000);
  }
  if ($.isNode() && allMessage2) {
    allMessage2 += RemainMessage;
    await notify.sendNotify("\u4EAC\u4E1C\u767D\u5AD6\u63D0\u9192", `${allMessage2}`, {
      url: `https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean`
    });
    await $.wait(10000);
  }
})().catch(e => {
  $.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
}).finally(() => {
  $.done();
});
async function showMsg() {
  //if ($.errorMsg)
  //return
  ReturnMessageTitle = "";
  ReturnMessage = "";
  var strsummary = "";
  if (MessageUserGp2) {
    userIndex2 = MessageUserGp2.findIndex(item => item === $.pt_pin);
  }
  if (MessageUserGp3) {
    userIndex3 = MessageUserGp3.findIndex(item => item === $.pt_pin);
  }
  if (MessageUserGp4) {
    userIndex4 = MessageUserGp4.findIndex(item => item === $.pt_pin);
  }
  if (userIndex2 != -1) {
    IndexGp2 += 1;
    ReturnMessageTitle = `【账号${IndexGp2}🆔】${$.nickName || $.UserName}`;
  }
  if (userIndex3 != -1) {
    IndexGp3 += 1;
    ReturnMessageTitle = `【账号${IndexGp3}🆔】${$.nickName || $.UserName}`;
  }
  if (userIndex4 != -1) {
    IndexGp4 += 1;
    ReturnMessageTitle = `【账号${IndexGp4}🆔】${$.nickName || $.UserName}`;
  }
  if (userIndex2 == -1 && userIndex3 == -1 && userIndex4 == -1) {
    IndexAll += 1;
    ReturnMessageTitle = `【账号${IndexAll}🆔】${$.nickName || $.UserName}`;
  }
  if ($.JingXiang || 1) {
    if ($.isRealNameAuth) {
      if (cookie.includes("app_open")) ReturnMessageTitle += `(wskey已实名)\n`;else ReturnMessageTitle += `(已实名)\n`;
    } else if (cookie.includes("app_open")) ReturnMessageTitle += `(wskey未实名)\n`;else ReturnMessageTitle += `(未实名)\n`;
    ReturnMessage += `【账号信息】`;
    if ($.isPlusVip) {
      ReturnMessage += `Plus会员`;
    } else {
      ReturnMessage += `普通会员`;
    }
    if ($.PlustotalScore) ReturnMessage += `(${$.PlustotalScore}分)`;
    ReturnMessage += `\n`;
    //ReturnMessage += `,京享值${$.JingXiang}\n`;
  } else {
    ReturnMessageTitle += `\n`;
  }
  if (llShowMonth) {
    ReturnMessageMonth = ReturnMessage;
    ReturnMessageMonth += `\n【上月收入】：${$.allincomeBean}京豆 🐶\n`;
    ReturnMessageMonth += `【上月支出】：${$.allexpenseBean}京豆 🐶\n`;
    console.log(ReturnMessageMonth);
    if (userIndex2 != -1) {
      allMessageMonthGp2 += ReturnMessageMonth + `\n`;
    }
    if (userIndex3 != -1) {
      allMessageMonthGp3 += ReturnMessageMonth + `\n`;
    }
    if (userIndex4 != -1) {
      allMessageMonthGp4 += ReturnMessageMonth + `\n`;
    }
    if (userIndex2 == -1 && userIndex3 == -1 && userIndex4 == -1) {
      allMessageMonth += ReturnMessageMonth + `\n`;
    }
    if ($.isNode() && WP_APP_TOKEN_ONE) {
      try {
        await notify.sendNotifybyWxPucher("\u4EAC\u4E1C\u6708\u8D44\u4EA7\u7EDF\u8BA1", `${ReturnMessageMonth}`, `${$.UserName}`);
      } catch {
        $.log(`一对一推送异常，请拷贝库里的sendnotify.js文件到deps目录下，在拉库重试！！！\n`);
      }
    }
  }
  if (EnableCheckBean) {
    if (checkbeanDetailMode == 0) {
      ReturnMessage += `【今日京豆】收${$.todayIncomeBean}豆`;
      strsummary += `收${$.todayIncomeBean}豆,`;
      if ($.todayOutcomeBean != 0) {
        ReturnMessage += `,支${$.todayOutcomeBean}豆`;
      }
      ReturnMessage += `\n`;
      ReturnMessage += `【昨日京豆】收${$.incomeBean}豆`;
      if ($.expenseBean != 0) {
        ReturnMessage += `,支${$.expenseBean}豆`;
      }
      ReturnMessage += `\n`;
    } else {
      if (TempBeanCache) {
        ReturnMessage += `【京豆变动】${$.beanCount - $.beanCache}豆(与${matchtitle}${$.CheckTime}比较)`;
        strsummary += `变动${$.beanCount - $.beanCache}豆,`;
        ReturnMessage += `\n`;
      } else {
        ReturnMessage += `【京豆变动】未找到缓存,下次出结果统计`;
        ReturnMessage += `\n`;
      }
    }
  }
  if ($.beanCount) {
    ReturnMessage += `【当前京豆】${$.beanCount - $.beanChangeXi}豆(≈${(($.beanCount - $.beanChangeXi) / 100).toFixed(2)}元)\n`;
  } else {
    if ($.levelName || $.JingXiang) ReturnMessage += `【当前京豆】获取失败,接口返回空数据\n`;else {
      ReturnMessage += `【当前京豆】${$.beanCount - $.beanChangeXi}豆(≈${(($.beanCount - $.beanChangeXi) / 100).toFixed(2)}元)\n`;
    }
  }
  if ($.JDtotalcash) {
    ReturnMessage += `【特价金币】${$.JDtotalcash}币(≈${($.JDtotalcash / 10000).toFixed(2)}元)\n`;
  }
  if ($.ECardinfo) ReturnMessage += `【礼品卡额】${$.ECardinfo}元\n`;
  if ($.JoyRunningAmount) ReturnMessage += `【汪汪赛跑】${$.JoyRunningAmount}元\n`;
  if ($.JdFarmProdName != "") {
    if ($.JdtreeEnergy != 0) {
      if ($.treeState === 2 || $.treeState === 3) {
        ReturnMessage += `【老农场】${$.JdFarmProdName} 可以兑换了!\n`;
        TempBaipiao += `【老农场】${$.JdFarmProdName} 可以兑换了!\n`;
        if (userIndex2 != -1) {
          ReceiveMessageGp2 += `【账号${IndexGp2} ${$.nickName || $.UserName}】${$.JdFarmProdName} (老农场)\n`;
        }
        if (userIndex3 != -1) {
          ReceiveMessageGp3 += `【账号${IndexGp3} ${$.nickName || $.UserName}】${$.JdFarmProdName} (老农场)\n`;
        }
        if (userIndex4 != -1) {
          ReceiveMessageGp4 += `【账号${IndexGp4} ${$.nickName || $.UserName}】${$.JdFarmProdName} (老农场)\n`;
        }
        if (userIndex2 == -1 && userIndex3 == -1 && userIndex4 == -1) {
          allReceiveMessage += `【账号${IndexAll} ${$.nickName || $.UserName}】${$.JdFarmProdName} (老农场)\n`;
        }
      } else {
        //if ($.JdwaterD != 'Infinity' && $.JdwaterD != '-Infinity') {
        //ReturnMessage += `【老农场】${$.JdFarmProdName}(${(($.JdtreeEnergy / $.JdtreeTotalEnergy) * 100).toFixed(0)}%,${$.JdwaterD}天)\n`;
        //} else {
        ReturnMessage += `【老农场】${$.JdFarmProdName}(${($.JdtreeEnergy / $.JdtreeTotalEnergy * 100).toFixed(0)}%)\n`;

        //}
      }
    } else {
      if ($.treeState === 0) {
        TempBaipiao += `【老农场】水果领取后未重新种植!\n`;
        if (userIndex2 != -1) {
          WarnMessageGp2 += `【账号${IndexGp2} ${$.nickName || $.UserName}】水果领取后未重新种植! (老农场)\n`;
        }
        if (userIndex3 != -1) {
          WarnMessageGp3 += `【账号${IndexGp3} ${$.nickName || $.UserName}】水果领取后未重新种植! (老农场)\n`;
        }
        if (userIndex4 != -1) {
          WarnMessageGp4 += `【账号${IndexGp4} ${$.nickName || $.UserName}】水果领取后未重新种植! (老农场)\n`;
        }
        if (userIndex2 == -1 && userIndex3 == -1 && userIndex4 == -1) {
          allWarnMessage += `【账号${IndexAll} ${$.nickName || $.UserName}】水果领取后未重新种植! (老农场)\n`;
        }
      } else if ($.treeState === 1) {
        ReturnMessage += `【老农场】${$.JdFarmProdName}种植中...\n`;
      } else {
        TempBaipiao += `【老农场】状态异常!\n`;
        if (userIndex2 != -1) {
          WarnMessageGp2 += `【账号${IndexGp2} ${$.nickName || $.UserName}】状态异常! (老农场)\n`;
        }
        if (userIndex3 != -1) {
          WarnMessageGp3 += `【账号${IndexGp3} ${$.nickName || $.UserName}】状态异常! (老农场)\n`;
        }
        if (userIndex4 != -1) {
          WarnMessageGp4 += `【账号${IndexGp4} ${$.nickName || $.UserName}】状态异常! (老农场)\n`;
        }
        if (userIndex2 == -1 && userIndex3 == -1 && userIndex4 == -1) {
          allWarnMessage += `【账号${IndexAll} ${$.nickName || $.UserName}】状态异常! (老农场)\n`;
        }
        //ReturnMessage += `【老农场】${$.JdFarmProdName}状态异常${$.treeState}...\n`;
      }
    }
  }
  if ($.fruitnewinfo) {
    //ReturnMessage += `【新农场】种植进度${$.fruitnewinfo}\n`;
    if ($.fruitnewinfo.skuName && $.fruitnewinfo.treeFullStage == 5) {
      ReturnMessage += `【新农场】种植完成!\n`;
      TempBaipiao += `【新农场】种植完成!\n`;
      allReceiveMessage += `【账号${IndexAll} ${$.nickName || $.UserName}】种植完成，去领取吧 (新农场)\n`;
    } else if ($.fruitnewinfo.skuName && $.fruitnewinfo.treeCurrentState === 0) {
      ReturnMessage += "\u3010\u65B0\u519C\u573A\u3011\u79CD\u690D\u8FDB\u5EA6" + $.fruitnewinfo.treeFullStage + "/5(" + $.fruitnewinfo.currentProcess + "%)\n";
    } else if ($.fruitnewinfo.treeFullStage === 0) {
      ReturnMessage += `【新农场】未种植!\n`;
      //TempBaipiao += `【新农场】未种植!\n`;
      //allWarnMessage += `【账号${IndexAll} ${$.nickName || $.UserName}】未种植，快去种植吧! (新农场)\n`;
    } else {
      ReturnMessage += "\u3010\u65B0\u519C\u573A\u3011\u53EF\u80FD\u67AF\u840E\u4E86\uFF0C\u8BF7\u91CD\u65B0\u79CD\u690D\uFF01\n";
    }
  }
  if ($.newfarm_info) {
    //ReturnMessage += `【新农场】奖品未兑换!\n`;
    TempBaipiao += `【新农场】奖品未兑换!\n`;
    allReceiveMessage += `【账号${IndexAll} ${$.nickName || $.UserName}】\n ${$.newfarm_info}\n 快去兑换吧 (新农场)\n`;
  }
  let dwscore = await dwappinfo();
  if (dwscore) {
    let dwappex = await dwappexpire();
    ReturnMessage += `【话费积分】${dwscore}`;
    if (dwappex) {
      ReturnMessage += `(近7日将过期${dwappex})`;
    }
    ReturnMessage += `\n`;
  }
  let marketcard = await marketCard();
  if (marketcard && marketcard.balance != "0.00") {
    ReturnMessage += `【超市卡】${marketcard.balance}元`;
    if (marketcard.expirationGiftAmountDes) {
      ReturnMessage += `(${marketcard.expirationGiftAmountDes})`;
    }
    ReturnMessage += `\n`;
  }
  if ($.wyw_score != "") {
    ReturnMessage += `【玩一玩奖票】${$.wyw_score}个`;
    ReturnMessage += `\n`;
  }
  if ($.wb_score != "") {
    ReturnMessage += `【汪贝余额】${$.wb_score}${$.wb_expire != 0 ? "(\u8FD17\u65E5\u5C06\u8FC7\u671F" + $.wb_expire + ")" : ""}`;
    ReturnMessage += `\n`;
  }
  if ($.jdCash) {
    ReturnMessage += `【其他信息】`;
    if ($.jdCash) {
      ReturnMessage += `领现金:${$.jdCash}元`;
    }
    ReturnMessage += `\n`;
  }
  if (strGuoqi) {
    ReturnMessage += `💸💸💸临期京豆明细💸💸💸\n`;
    ReturnMessage += `${strGuoqi}`;
  }
  ReturnMessage += `🧧🧧🧧红包明细🧧🧧🧧\n`;
  ReturnMessage += `${$.message}`;
  strsummary += `红包${$.balance}元`;
  if ($.YunFeiQuan) {
    var strTempYF = "\u3010\u514D\u8FD0\u8D39\u5238\u3011" + $.YunFeiQuan + "\u5F20";
    if ($.YunFeiQuanEndTime) strTempYF += "(\u6709\u6548\u671F\u81F3" + $.YunFeiQuanEndTime + ")";
    strTempYF += "\n";
    ReturnMessage += strTempYF;
  }
  if ($.YunFeiQuan2) {
    var strTempYF2 = "\u3010\u514D\u8FD0\u8D39\u5238\u3011" + $.YunFeiQuan2 + "\u5F20";
    if ($.YunFeiQuanEndTime2) strTempYF += "(\u6709\u6548\u671F\u81F3" + $.YunFeiQuanEndTime2 + ")";
    strTempYF2 += "\n";
    ReturnMessage += strTempYF2;
  }
  if (userIndex2 != -1) {
    allMessageGp2 += ReturnMessageTitle + ReturnMessage + `\n`;
  }
  if (userIndex3 != -1) {
    allMessageGp3 += ReturnMessageTitle + ReturnMessage + `\n`;
  }
  if (userIndex4 != -1) {
    allMessageGp4 += ReturnMessageTitle + ReturnMessage + `\n`;
  }
  if (userIndex2 == -1 && userIndex3 == -1 && userIndex4 == -1) {
    allMessage += ReturnMessageTitle + ReturnMessage + `\n------\n`;
  }
  console.log(`${ReturnMessageTitle + ReturnMessage}`);
  if ($.isNode() && WP_APP_TOKEN_ONE) {
    var strTitle = "\u4EAC\u4E1C\u8D44\u4EA7\u7EDF\u8BA1";
    if ($.JingXiang || 1) {
      if ($.isRealNameAuth) {
        if (cookie.includes("app_open")) ReturnMessage = `【账号名称】${$.nickName || $.UserName}(wskey已实名)\n` + ReturnMessage;else ReturnMessage = `【账号名称】${$.nickName || $.UserName}(已实名)\n` + ReturnMessage;
      } else if (cookie.includes("app_open")) ReturnMessage = `【账号名称】${$.nickName || $.UserName}(wskey未实名)\n` + ReturnMessage;else ReturnMessage = `【账号名称】${$.nickName || $.UserName}(未实名)\n` + ReturnMessage;
    } else {
      ReturnMessage = `【账号名称】${$.nickName || $.UserName}\n` + ReturnMessage;
    }
    if (TempBaipiao) {
      TempBaipiao = `【⏰商品白嫖活动提醒⏰】\n` + TempBaipiao;
      ReturnMessage = TempBaipiao + `\n` + ReturnMessage;
    }
    ReturnMessage += RemainMessage;
    if (strAllNotify) ReturnMessage = strAllNotify + `\n` + ReturnMessage;
    try {
      await notify.sendNotifybyWxPucher(strTitle, `${ReturnMessage}`, `${$.UserName}`, undefined, strsummary);
    } catch {
      $.log(`一对一推送异常，请拷贝库里的sendnotify.js文件到deps目录下，在拉库重试！！！\n`);
    }
  }

  //$.msg($.name, '', ReturnMessage , {"open-url": "https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean"});
}
async function bean() {
  if (EnableCheckBean && checkbeanDetailMode == 0) {
    // console.log(`北京时间零点时间戳:${parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000}`);
    // console.log(`北京时间2020-10-28 06:16:05::${new Date("2020/10/28 06:16:05+08:00").getTime()}`)
    // 不管哪个时区。得到都是当前时刻北京时间的时间戳 new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000

    //前一天的0:0:0时间戳
    const tm = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000 - 1440 * 60 * 1000;
    // 今天0:0:0时间戳
    const tm1 = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000;
    let page = 1,
      t = 0,
      yesterdayArr = [],
      todayArr = [];
    do {
      let response = await getJingBeanBalanceDetail(page);
      await $.wait(1000);
      // console.log(`第${page}页: ${JSON.stringify(response)}`);
      if (response && response.code === "0") {
        page++;
        let detailList = response.jingDetailList;
        if (detailList && detailList.length > 0) {
          for (let item of detailList) {
            const date = item.date.replace(/-/g, "/") + "+08:00";
            if (new Date(date).getTime() >= tm1 && !item["eventMassage"].includes("\u9000\u8FD8") && !item["eventMassage"].includes("\u7269\u6D41") && !item["eventMassage"].includes("\u6263\u8D60")) {
              todayArr.push(item);
            } else if (tm <= new Date(date).getTime() && new Date(date).getTime() < tm1 && !item["eventMassage"].includes("\u9000\u8FD8") && !item["eventMassage"].includes("\u7269\u6D41") && !item["eventMassage"].includes("\u6263\u8D60")) {
              //昨日的
              yesterdayArr.push(item);
            } else if (tm > new Date(date).getTime()) {
              //前天的
              t = 1;
              break;
            }
          }
        } else {
          $.errorMsg = `数据异常`;
          $.msg($.name, ``, `账号${$.index}：${$.nickName}\n${$.errorMsg}`);
          t = 1;
        }
      } else if (response && response.code === "3") {
        console.log(`cookie已过期，或者填写不规范，跳出`);
        t = 1;
      } else {
        console.log(`未知情况：${JSON.stringify(response)}`);
        console.log(`未知情况，跳出`);
        t = 1;
      }
    } while (t === 0);
    for (let item of yesterdayArr) {
      if (Number(item.amount) > 0) {
        $.incomeBean += Number(item.amount);
      } else if (Number(item.amount) < 0) {
        $.expenseBean += Number(item.amount);
      }
    }
    for (let item of todayArr) {
      if (Number(item.amount) > 0) {
        $.todayIncomeBean += Number(item.amount);
      } else if (Number(item.amount) < 0) {
        $.todayOutcomeBean += Number(item.amount);
      }
    }
    $.todayOutcomeBean = -$.todayOutcomeBean;
    $.expenseBean = -$.expenseBean;
  }
  if (EnableOverBean) {
    await jingBeanDetail(); //过期京豆	    
  }
  await redPacket();
  if (EnableChaQuan) await getCoupon();
}
async function Monthbean() {
  let time = new Date();
  let year = time.getFullYear();
  let month = parseInt(time.getMonth()); //取上个月
  if (month == 0) {
    //一月份，取去年12月，所以月份=12，年份减1
    month = 12;
    year -= 1;
  }

  //开始时间 时间戳
  let start = new Date(year + "-" + month + "-01 00:00:00").getTime();
  console.log(`计算月京豆起始日期:` + GetDateTime(new Date(year + "-" + month + "-01 00:00:00")));

  //结束时间 时间戳
  if (month == 12) {
    //取去年12月，进1个月，所以月份=1，年份加1
    month = 1;
    year += 1;
  }
  let end = new Date(year + "-" + (month + 1) + "-01 00:00:00").getTime();
  console.log(`计算月京豆结束日期:` + GetDateTime(new Date(year + "-" + (month + 1) + "-01 00:00:00")));
  let allpage = 1,
    allt = 0,
    allyesterdayArr = [];
  do {
    let response = await getJingBeanBalanceDetail(allpage);
    await $.wait(1000);
    // console.log(`第${allpage}页: ${JSON.stringify(response)}`);
    if (response && response.code === "0") {
      allpage++;
      let detailList = response.jingDetailList;
      if (detailList && detailList.length > 0) {
        for (let item of detailList) {
          const date = item.date.replace(/-/g, "/") + "+08:00";
          if (start <= new Date(date).getTime() && new Date(date).getTime() < end) {
            //日期区间内的京豆记录
            allyesterdayArr.push(item);
          } else if (start > new Date(date).getTime()) {
            //前天的
            allt = 1;
            break;
          }
        }
      } else {
        $.errorMsg = `数据异常`;
        $.msg($.name, ``, `账号${$.index}：${$.nickName}\n${$.errorMsg}`);
        allt = 1;
      }
    } else if (response && response.code === "3") {
      console.log(`cookie已过期，或者填写不规范，跳出`);
      allt = 1;
    } else {
      console.log(`未知情况：${JSON.stringify(response)}`);
      console.log(`未知情况，跳出`);
      allt = 1;
    }
  } while (allt === 0);
  for (let item of allyesterdayArr) {
    if (Number(item.amount) > 0) {
      $.allincomeBean += Number(item.amount);
    } else if (Number(item.amount) < 0) {
      $.allexpenseBean += Number(item.amount);
    }
  }
}
function apptaskUrl(functionId = "", body = "") {
  return {
    url: `${JD_API_HOST}?functionId=${functionId}`,
    body,
    headers: {
      "Cookie": cookie,
      "Host": "api.m.jd.com",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "",
      "User-Agent": "JD4iPhone/167774 (iPhone; iOS 14.7.1; Scale/3.00)",
      "Accept-Language": "zh-Hans-CN;q=1",
      "Accept-Encoding": "gzip, deflate, br"
    },
    timeout: 10000
  };
}
function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.UA
      }
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`TotalBean API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["retcode"] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data["retcode"] === 0) {
              //$.nickName = (data['base'] && data['base'].nickname) || $.UserName;
              $.nickName = $.UserName;
              //$.isPlusVip=data['isPlusVip'];
              $.isRealNameAuth = data["isRealNameAuth"];
              $.beanCount = data["base"] && data["base"].jdNum || 0;
              $.JingXiang = data["base"] && data["base"].jvalue || 0;
            } else {
              $.nickName = $.UserName;
            }
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function TotalBean2() {
  return new Promise(async resolve => {
    const options = {
      url: `https://wxapp.m.jd.com/kwxhome/myJd/home.json?&useGuideModule=0&bizId=&brandId=&fromType=wxapp&timestamp=${Date.now()}`,
      headers: {
        Cookie: cookie,
        "content-type": `application/x-www-form-urlencoded`,
        Connection: `keep-alive`,
        "Accept-Encoding": `gzip,compress,br,deflate`,
        Referer: `https://servicewechat.com/wxa5bf5ee667d91626/161/page-frame.html`,
        Host: `wxapp.m.jd.com`,
        "User-Agent": `Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN`
      },
      timeout: 10000
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (!data.user) {
              return;
            }
            const userInfo = data.user;
            if (userInfo) {
              if (!$.nickName) $.nickName = userInfo.petName;
              if ($.beanCount == 0) {
                $.beanCount = userInfo.jingBean;
              }
              $.JingXiang = userInfo.uclass;
            }
          } else {
            $.log("\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E");
          }
        }
      } catch (e) {
        $.logErr(e);
      } finally {
        resolve();
      }
    });
  });
}
function wanyiwan() {
  return new Promise(async resolve => {
    const options = {
      url: `http://api.m.jd.com/client.action`,
      body: `functionId=wanyiwan_exchange_page&appid=signed_wh5&body={"version":1}&&networkType=wifi&client=ios&clientVersion=${$.UA.split(";")[2]}&t=${Date.now()}`,
      headers: {
        Cookie: cookie,
        "content-type": `application/x-www-form-urlencoded`,
        // 'Accept-Encoding': `gzip,compress,br,deflate`,
        Origin: `https://pro.m.jd.com`,
        Referer: `https://pro.m.jd.com/`,
        "User-Agent": $.UA
      },
      timeout: 30000
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err);
        } else {
          if (data) {
            data = $.toObj(data);
            if (data.data.bizCode == 0) {
              $.wyw_score = data.data.result.score || 0;
            }
          } else {
            $.log("\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E");
          }
        }
      } catch (e) {
        $.logErr(e);
      } finally {
        resolve();
      }
    });
  });
}
function wb_info() {
  return new Promise(async resolve => {
    const options = {
      url: `http://api.m.jd.com/functionId=atop_channel_my_score`,
      body: `appid=jd-super-market&functionId=atop_channel_my_score&client=m&body=%7B%22bizCode%22%3A%22cn_retail_jdsupermarket%22%2C%22scenario%22%3A%22sign%22%2C%22babelChannel%22%3A%22ttt1%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D&t=${Date.now()}`,
      headers: {
        Cookie: cookie,
        "content-type": `application/x-www-form-urlencoded`,
        // 'Accept-Encoding': `gzip,compress,br,deflate`,
        Origin: `https://pro.m.jd.com`,
        Referer: `https://pro.m.jd.com/`,
        "User-Agent": $.UA
      },
      timeout: 30000
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err);
        } else {
          if (data) {
            data = $.toObj(data);
            if (data.success) {
              try {
                $.wb_score = data.data.floorData.items[0].restScore || 0;
                $.wb_expire = data.data.floorData.items[0].nexp || 0;
              } catch {}
            }
          } else {
            $.log("\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E");
          }
        }
      } catch (e) {
        $.logErr(e);
      } finally {
        resolve();
      }
    });
  });
}
function isLoginByX1a0He() {
  return new Promise(resolve => {
    const options = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {
        "Cookie": cookie,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": "jdapp;iPhone;10.1.2;15.0;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
      },
      timeout: 10000
    };
    $.get(options, (err, resp, data) => {
      try {
        if (data) {
          data = JSON.parse(data);
          if (data.islogin === "1") {
            console.log(`使用X1a0He写的接口加强检测: Cookie有效\n`);
          } else if (data.islogin === "0") {
            $.isLogin = false;
            console.log(`使用X1a0He写的接口加强检测: Cookie无效\n`);
          } else {
            console.log(`使用X1a0He写的接口加强检测: 未知返回，不作变更...\n`);
            $.error = `${$.nickName} :` + `使用X1a0He写的接口加强检测: 未知返回...\n`;
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        resolve();
      }
    });
  });
}
function getJingBeanBalanceDetail(page) {
  return new Promise(async resolve => {
    const options = {
      "url": `https://bean.m.jd.com/beanDetail/detail.json?page=${page}`,
      "body": `body=${escape(JSON.stringify({
        "pageSize": "20",
        "page": page.toString()
      }))}&appid=ld`,
      "headers": {
        "User-Agent": $.UA,
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie
      }
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`getJingBeanBalanceDetail API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            // console.log(data)
          } else {
            // console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
  });
}
function jingBeanDetail() {
  return new Promise(async resolve => {
    setTimeout(async () => {
      var strsign = "";
      if (epsignurl) {
        strsign = await getepsign("jingBeanDetail", {
          "pageSize": "20",
          "page": "1"
        });
        strsign = strsign.body;
      } else strsign = await dyx.getbody("jingBeanDetail", {
        "pageSize": "20",
        "page": "1"
      });
      const options = {
        "url": `https://api.m.jd.com/client.action?functionId=jingBeanDetail`,
        "body": strsign,
        "headers": {
          "User-Agent": $.UA,
          "Host": "api.m.jd.com",
          "Content-Type": "application/x-www-form-urlencoded",
          "Cookie": cookie
        }
      };
      $.post(options, (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} jingBeanDetail API请求失败，请检查网路重试`);
          } else {
            if (data) {
              data = JSON.parse(data);
              if (data?.others?.jingBeanExpiringInfo?.detailList) {
                const {
                  detailList = []
                } = data?.others?.jingBeanExpiringInfo;
                detailList.map(item => {
                  strGuoqi += `【${item["eventMassage"].replace("\u5373\u5C06\u8FC7\u671F\u4EAC\u8C46", "").replace("\u5E74", "-").replace("\u6708", "-").replace("\u65E5", "")}】过期${item["amount"]}豆\n`;
                });
              }
            } else {
              console.log(`jingBeanDetail 京东服务器返回空数据`);
            }
          }
        } catch (e) {
          if (epsignurl) $.logErr(e, resp);else console.log("\u56E0\u4E3A\u6CA1\u6709\u6307\u5B9A\u5E26ep\u7684Sign,\u83B7\u53D6\u8FC7\u671F\u8C46\u5B50\u4FE1\u606F\u6B21\u6570\u591A\u4E86\u5C31\u4F1A\u5931\u8D25.");
        } finally {
          resolve(data);
        }
      });
    }, 0);
  });
}
function getepsign(n, o, t = "sign") {
  let e = {
    url: epsignurl,
    form: {
      functionId: n,
      body: $.toStr(o)
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return new Promise(n => {
    $.post(e, async (o, t, e) => {
      try {
        o ? console.log(o) : e = JSON.parse(e);
        if (e.code === 200 && e.data) {
          n({
            body: e.data.convertUrlNew
          });
        }
      } catch (n) {
        $.logErr(n, t);
      } finally {
        n({
          body: e.convertUrlNew
        });
      }
    });
  });
}
function getSignfromNolan(functionId, body) {
  var strsign = "";
  let data = {
    "fn": functionId,
    "body": body
  };
  return new Promise(resolve => {
    let url = {
      url: jdSignUrl,
      body: JSON.stringify(data),
      followRedirect: false,
      headers: {
        "Accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "Content-Type": "application/json"
      },
      timeout: 30000
    };
    $.post(url, async (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if (data && data.body) {
          if (data.body) strsign = data.body || "";
          if (strsign != "") resolve(strsign);else console.log("\u7B7E\u540D\u83B7\u53D6\u5931\u8D25.");
        } else {
          console.log("\u7B7E\u540D\u83B7\u53D6\u5931\u8D25.");
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(strsign);
      }
    });
  });
}
function redPacket() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://api.m.jd.com/client.action?functionId=myhongbao_getUsableHongBaoList&body=%7B%22appId%22%3A%22appHongBao%22%2C%22appToken%22%3A%22apphongbao_token%22%2C%22platformId%22%3A%22appHongBao%22%2C%22platformToken%22%3A%22apphongbao_token%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22country%22%3A%22cn%22%2C%22childActivityId%22%3A%22-1%22%2C%22childActiveName%22%3A%22-1%22%2C%22childActivityTime%22%3A%22-1%22%2C%22childActivityUrl%22%3A%22-1%22%2C%22openId%22%3A%22-1%22%2C%22activityArea%22%3A%22-1%22%2C%22applicantErp%22%3A%22-1%22%2C%22eid%22%3A%22-1%22%2C%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22shshshfpb%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22activityType%22%3A%221%22%2C%22isRvc%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22extend%22%3A%22-1%22%2C%22organization%22%3A%22JD%22%7D&appid=JDReactMyRedEnvelope&client=apple&clientVersion=7.0.0`,
      "headers": {
        "Host": "api.m.jd.com",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Accept-Language": "zh-cn",
        "Referer": "https://h5.m.jd.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": cookie,
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
      }
    };
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`redPacket API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            $.jxRed = 0, $.jsRed = 0, $.jdRed = 0, $.jdhRed = 0, $.jdwxRed = 0, $.jdGeneralRed = 0, $.jxRedExpire = 0, $.jsRedExpire = 0, $.jdRedExpire = 0, $.jdhRedExpire = 0;
            $.jdwxRedExpire = 0, $.jdGeneralRedExpire = 0;
            let t = new Date();
            t.setDate(t.getDate() + 1);
            t.setHours(0, 0, 0, 0);
            t = parseInt((t - 1) / 1000) * 1000;
            for (let vo of data.hongBaoList || []) {
              if (vo.orgLimitStr) {
                if (vo.orgLimitStr.includes("\u4EAC\u559C") && !vo.orgLimitStr.includes("\u7279\u4EF7")) {
                  $.jxRed += parseFloat(vo.balance);
                  if (vo["endTime"] === t) {
                    $.jxRedExpire += parseFloat(vo.balance);
                  }
                  continue;
                } else if (vo.orgLimitStr.includes("\u8D2D\u7269\u5C0F\u7A0B\u5E8F")) {
                  $.jdwxRed += parseFloat(vo.balance);
                  if (vo["endTime"] === t) {
                    $.jdwxRedExpire += parseFloat(vo.balance);
                  }
                  continue;
                } else if (vo.orgLimitStr.includes("\u4EAC\u4E1C\u5546\u57CE")) {
                  $.jdRed += parseFloat(vo.balance);
                  if (vo["endTime"] === t) {
                    $.jdRedExpire += parseFloat(vo.balance);
                  }
                  continue;
                } else if (vo.orgLimitStr.includes("\u6781\u901F") || vo.orgLimitStr.includes("\u4EAC\u4E1C\u7279\u4EF7") || vo.orgLimitStr.includes("\u4EAC\u559C\u7279\u4EF7")) {
                  $.jsRed += parseFloat(vo.balance);
                  if (vo["endTime"] === t) {
                    $.jsRedExpire += parseFloat(vo.balance);
                  }
                  continue;
                } else if (vo.orgLimitStr && vo.orgLimitStr.includes("\u4EAC\u4E1C\u5065\u5EB7")) {
                  $.jdhRed += parseFloat(vo.balance);
                  if (vo["endTime"] === t) {
                    $.jdhRedExpire += parseFloat(vo.balance);
                  }
                  continue;
                }
              }
              $.jdGeneralRed += parseFloat(vo.balance);
              if (vo["endTime"] === t) {
                $.jdGeneralRedExpire += parseFloat(vo.balance);
              }
            }
            $.balance = ($.jxRed + $.jsRed + $.jdRed + $.jdhRed + $.jdwxRed + $.jdGeneralRed).toFixed(2);
            $.jxRed = $.jxRed.toFixed(2);
            $.jsRed = $.jsRed.toFixed(2);
            $.jdRed = $.jdRed.toFixed(2);
            $.jdhRed = $.jdhRed.toFixed(2);
            $.jdwxRed = $.jdwxRed.toFixed(2);
            $.jdGeneralRed = $.jdGeneralRed.toFixed(2);
            $.expiredBalance = ($.jxRedExpire + $.jsRedExpire + $.jdRedExpire + $.jdhRedExpire + $.jdwxRedExpire + $.jdGeneralRedExpire).toFixed(2);
            $.message += `【红包总额】${$.balance}(总过期${$.expiredBalance})元 \n`;
            if ($.jxRed > 0) {
              if ($.jxRedExpire > 0) $.message += `【京喜红包】${$.jxRed}(将过期${$.jxRedExpire.toFixed(2)})元 \n`;else $.message += `【京喜红包】${$.jxRed}元 \n`;
            }
            if ($.jsRed > 0) {
              if ($.jsRedExpire > 0) $.message += `【京喜特价】${$.jsRed}(将过期${$.jsRedExpire.toFixed(2)})元 \n`;else $.message += `【京喜特价】${$.jsRed}元 \n`;
            }
            if ($.jdRed > 0) {
              if ($.jdRedExpire > 0) $.message += `【京东红包】${$.jdRed}(将过期${$.jdRedExpire.toFixed(2)})元 \n`;else $.message += `【京东红包】${$.jdRed}元 \n`;
            }
            if ($.jdhRed > 0) {
              if ($.jdhRedExpire > 0) $.message += `【健康红包】${$.jdhRed}(将过期${$.jdhRedExpire.toFixed(2)})元 \n`;else $.message += `【健康红包】${$.jdhRed}元 \n`;
            }
            if ($.jdwxRed > 0) {
              if ($.jdwxRedExpire > 0) $.message += `【微信小程序】${$.jdwxRed}(将过期${$.jdwxRedExpire.toFixed(2)})元 \n`;else $.message += `【微信小程序】${$.jdwxRed}元 \n`;
            }
            if ($.jdGeneralRed > 0) {
              if ($.jdGeneralRedExpire > 0) $.message += `【全平台通用】${$.jdGeneralRed}(将过期${$.jdGeneralRedExpire.toFixed(2)})元 \n`;else $.message += `【全平台通用】${$.jdGeneralRed}元 \n`;
            }
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}
function getCoupon() {
  return new Promise(resolve => {
    let options = {
      url: `https://wq.jd.com/activeapi/queryjdcouponlistwithfinance?state=1&wxadd=1&filterswitch=1&_=${Date.now()}&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls`,
      headers: {
        "authority": "wq.jd.com",
        "User-Agent": $.UA,
        "accept": "*/*",
        "referer": "https://wqs.jd.com/",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cookie": cookie
      },
      timeout: 10000
    };
    $.get(options, async (err, resp, data) => {
      try {
        data = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[1]);
        let couponTitle = "";
        let couponId = "";
        // 删除可使用且非超市、生鲜、京贴;
        let useable = data.coupon.useable;
        $.todayEndTime = new Date(new Date(new Date().getTime()).setHours(23, 59, 59, 999)).getTime();
        $.tomorrowEndTime = new Date(new Date(new Date().getTime() + 1440 * 60 * 1000).setHours(23, 59, 59, 999)).getTime();
        $.platFormInfo = "";
        for (let i = 0; i < useable.length; i++) {
          //console.log(useable[i]);
          if (useable[i].limitStr.indexOf("\u5168\u54C1\u7C7B") > -1) {
            $.beginTime = useable[i].beginTime;
            if ($.beginTime < new Date().getTime() && useable[i].quota <= 100 && useable[i].coupontype === 1) {
              //$.couponEndTime = new Date(parseInt(useable[i].endTime)).Format('yyyy-MM-dd');
              $.couponName = useable[i].limitStr;
              if (useable[i].platFormInfo) $.platFormInfo = useable[i].platFormInfo;
              var decquota = parseFloat(useable[i].quota).toFixed(2);
              var decdisc = parseFloat(useable[i].discount).toFixed(2);
              if (useable[i].quota > useable[i].discount + 5 && useable[i].discount < 2) continue;
              $.message += `【全品类券】满${decquota}减${decdisc}元`;
              if (useable[i].endTime < $.todayEndTime) {
                $.message += `(今日过期,${$.platFormInfo})\n`;
              } else if (useable[i].endTime < $.tomorrowEndTime) {
                $.message += `(明日将过期,${$.platFormInfo})\n`;
              } else {
                $.message += `(${$.platFormInfo})\n`;
              }
            }
          }
          if (useable[i].couponTitle.indexOf("\u8FD0\u8D39\u5238") > -1 && useable[i].limitStr.indexOf("\u81EA\u8425\u5546\u54C1\u8FD0\u8D39") > -1) {
            if (!$.YunFeiTitle) {
              $.YunFeiTitle = useable[i].couponTitle;
              $.YunFeiQuanEndTime = new Date(parseInt(useable[i].endTime)).Format("yyyy-MM-dd");
              $.YunFeiQuan += 1;
            } else {
              if ($.YunFeiTitle == useable[i].couponTitle) {
                $.YunFeiQuanEndTime = new Date(parseInt(useable[i].endTime)).Format("yyyy-MM-dd");
                $.YunFeiQuan += 1;
              } else {
                if (!$.YunFeiTitle2) $.YunFeiTitle2 = useable[i].couponTitle;
                if ($.YunFeiTitle2 == useable[i].couponTitle) {
                  $.YunFeiQuanEndTime2 = new Date(parseInt(useable[i].endTime)).Format("yyyy-MM-dd");
                  $.YunFeiQuan2 += 1;
                }
              }
            }
          }
          if (useable[i].couponTitle.indexOf("\u7279\u4EF7\u7248APP\u6D3B\u52A8") > -1 && useable[i].limitStr == "\u4EC5\u53EF\u8D2D\u4E70\u6D3B\u52A8\u5546\u54C1") {
            $.beginTime = useable[i].beginTime;
            if ($.beginTime < new Date().getTime() && useable[i].coupontype === 1) {
              if (useable[i].platFormInfo) $.platFormInfo = useable[i].platFormInfo;
              var decquota = parseFloat(useable[i].quota).toFixed(2);
              var decdisc = parseFloat(useable[i].discount).toFixed(2);
              $.message += `【特价版券】满${decquota}减${decdisc}元`;
              if (useable[i].endTime < $.todayEndTime) {
                $.message += `(今日过期,${$.platFormInfo})\n`;
              } else if (useable[i].endTime < $.tomorrowEndTime) {
                $.message += `(明日将过期,${$.platFormInfo})\n`;
              } else {
                $.message += `(${$.platFormInfo})\n`;
              }
            }
          }
          //8是支付券， 7是白条券
          if (useable[i].couponStyle == 7 || useable[i].couponStyle == 8) {
            $.beginTime = useable[i].beginTime;
            if ($.beginTime > new Date().getTime() || useable[i].quota > 50 || useable[i].coupontype != 1) {
              continue;
            }
            if (useable[i].couponStyle == 8) {
              $.couponType = "\u652F\u4ED8\u7ACB\u51CF";
            } else {
              $.couponType = "\u767D\u6761\u4F18\u60E0";
            }
            if (useable[i].discount < useable[i].quota) $.message += `【${$.couponType}】满${useable[i].quota}减${useable[i].discount}元`;else $.message += `【${$.couponType}】立减${useable[i].discount}元`;
            if (useable[i].platFormInfo) $.platFormInfo = useable[i].platFormInfo;

            //$.couponEndTime = new Date(parseInt(useable[i].endTime)).Format('yyyy-MM-dd');

            if (useable[i].endTime < $.todayEndTime) {
              $.message += `(今日过期,${$.platFormInfo})\n`;
            } else if (useable[i].endTime < $.tomorrowEndTime) {
              $.message += `(明日将过期,${$.platFormInfo})\n`;
            } else {
              $.message += `(${$.platFormInfo})\n`;
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function jdfruitRequest(function_id, body = {}, timeout = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      $.get(taskfruitUrl(function_id, body), (err, resp, data) => {
        try {
          if (err) {
            console.log("\n\u8001\u519C\u573A: API\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25 \u203C\uFE0F\u203C\uFE0F");
            console.log(JSON.stringify(err));
            console.log(`function_id:${function_id}`);
            $.logErr(err);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.code == "400") {
                console.log("\u8001\u519C\u573A: " + data.message);
                llgeterror = true;
              } else $.JDwaterEveryDayT = data.firstWaterInit.totalWaterTimes;
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      });
    }, timeout);
  });
}
async function getjdfruitinfo() {
  if (EnableJdFruit) {
    llgeterror = false;

    //await jdfruitRequest('taskInitForFarm', {
    //    "version": 14,
    //    "channel": 1,
    //    "babelChannel": "120"
    //});
    //
    //if (llgeterror)
    //	return
    //
    await fruitinfo();
    if (llgeterror) {
      console.log(`老农场API查询失败,等待10秒后再次尝试...`);
      await $.wait(10000);
      await fruitinfo();
    }
    if (llgeterror) {
      console.log(`老农场API查询失败,有空重启路由器换个IP吧.`);
    }
  }
  return;
}
async function getjdfruit() {
  return new Promise(resolve => {
    const option = {
      url: `${JD_API_HOST}?functionId=initForFarm`,
      body: `body=${escape(JSON.stringify({
        "version": 4
      }))}&appid=wh5&clientVersion=9.1.0`,
      headers: {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "cookie": cookie,
        "origin": "https://home.m.jd.com",
        "pragma": "no-cache",
        "referer": "https://home.m.jd.com/myJd/newhome.action",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 10000
    };
    $.post(option, (err, resp, data) => {
      try {
        if (err) {
          if (!llgeterror) {
            console.log("\n\u8001\u519C\u573A: API\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25 \u203C\uFE0F\u203C\uFE0F");
            console.log(JSON.stringify(err));
          }
          llgeterror = true;
        } else {
          llgeterror = false;
          if (safeGet(data)) {
            $.farmInfo = JSON.parse(data);
            if ($.farmInfo.farmUserPro) {
              $.JdFarmProdName = $.farmInfo.farmUserPro.name;
              $.JdtreeEnergy = $.farmInfo.farmUserPro.treeEnergy;
              $.JdtreeTotalEnergy = $.farmInfo.farmUserPro.treeTotalEnergy;
              $.treeState = $.farmInfo.treeState;
              let waterEveryDayT = $.JDwaterEveryDayT;
              let waterTotalT = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10; //一共还需浇多少次水
              let waterD = Math.ceil(waterTotalT / waterEveryDayT);
              $.JdwaterTotalT = waterTotalT;
              $.JdwaterD = waterD;
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function taskfruitUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}?functionId=${function_id}&body=${encodeURIComponent(JSON.stringify(body))}&appid=wh5`,
    headers: {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": cookie
    },
    timeout: 10000
  };
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function taskcashUrl(functionId, body = {}) {
  const struuid = randomString(16);
  let nowTime = Date.now();
  let _0x7683x5 = `${"lite-android&"}${JSON["stringify"](body)}${"&android&3.1.0&"}${functionId}&${nowTime}&${struuid}`;
  let _0x7683x6 = "12aea658f76e453faf803d15c40a72e0";
  const _0x7683x7 = $["isNode"]() ? require("crypto-js") : CryptoJS;
  let sign = _0x7683x7.HmacSHA256(_0x7683x5, _0x7683x6).toString();
  let strurl = JD_API_HOST + "api?functionId=" + functionId + "&body=" + `${escape(JSON["stringify"](body))}&appid=lite-android&client=android&uuid=` + struuid + `&clientVersion=3.1.0&t=${nowTime}&sign=${sign}`;
  return {
    url: strurl,
    headers: {
      "Host": "api.m.jd.com",
      "accept": "*/*",
      "kernelplatform": "RN",
      "user-agent": "JDMobileLite/3.1.0 (iPad; iOS 14.4; Scale/2.00)",
      "accept-language": "zh-Hans-CN;q=1, ja-CN;q=0.9",
      "Cookie": cookie
    },
    timeout: 10000
  };
}
function randomString(e) {
  e = e || 32;
  let t = "0123456789abcdef",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
Date.prototype.Format = function (fmt) {
  var e,
    n = this,
    d = fmt,
    l = {
      "M+": n.getMonth() + 1,
      "d+": n.getDate(),
      "D+": n.getDate(),
      "h+": n.getHours(),
      "H+": n.getHours(),
      "m+": n.getMinutes(),
      "s+": n.getSeconds(),
      "w+": n.getDay(),
      "q+": Math.floor((n.getMonth() + 3) / 3),
      "S+": n.getMilliseconds()
    };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$1, "".concat(n.getFullYear()).substr(4 - RegExp.$1.length)));
  for (var k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      var t,
        a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$1, 1 == RegExp.$1.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length));
    }
  }
  return d;
};
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, "", "\u8BF7\u52FF\u968F\u610F\u5728BoxJs\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\n\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6cookie");
      return [];
    }
  }
}
function timeFormat(time) {
  let date;
  if (time) {
    date = new Date(time);
  } else {
    date = new Date();
  }
  return date.getFullYear() + "-" + (date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) + "-" + (date.getDate() >= 10 ? date.getDate() : "0" + date.getDate());
}
function GetDateTime(date) {
  var timeString = "";
  var timeString = date.getFullYear() + "-";
  if (date.getMonth() + 1 < 10) timeString += "0" + (date.getMonth() + 1) + "-";else timeString += date.getMonth() + 1 + "-";
  if (date.getDate() < 10) timeString += "0" + date.getDate() + " ";else timeString += date.getDate() + " ";
  if (date.getHours() < 10) timeString += "0" + date.getHours() + ":";else timeString += date.getHours() + ":";
  if (date.getMinutes() < 10) timeString += "0" + date.getMinutes() + ":";else timeString += date.getMinutes() + ":";
  if (date.getSeconds() < 10) timeString += "0" + date.getSeconds();else timeString += date.getSeconds();
  return timeString;
}
async function getuserinfo() {
  var body = [{
    "pin": "$cooMrdGatewayUid$"
  }];
  var ua = `jdapp;iPhone;${random(["11.1.0", "10.5.0", "10.3.6"])};${random(["13.5", "14.0", "15.0"])};${uuidRandom()};network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,6;addressid/7565095847;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`;
  let config = {
    url: "https://lop-proxy.jd.com/JingIntegralApi/userAccount",
    body: JSON.stringify(body),
    headers: {
      "host": "lop-proxy.jd.com",
      "jexpress-report-time": Date.now().toString(),
      "access": "H5",
      "source-client": "2",
      "accept": "application/json, text/plain, */*",
      "d_model": "iPhone11,6",
      "accept-encoding": "gzip",
      "lop-dn": "jingcai.jd.com",
      "user-agent": ua,
      "partner": "",
      "screen": "375*812",
      "cookie": cookie,
      "x-requested-with": "XMLHttpRequest",
      "version": "1.0.0",
      "uuid": randomNumber(10),
      "clientinfo": "{\"appName\":\"jingcai\",\"client\":\"m\"}",
      "d_brand": "iPhone",
      "appparams": "{\"appid\":158,\"ticket_type\":\"m\"}",
      "sdkversion": "1.0.7",
      "area": area(),
      "client": "iOS",
      "referer": "https://jingcai-h5.jd.com/",
      "eid": "",
      "osversion": random(["13.5", "14.0", "15.0"]),
      "networktype": "wifi",
      "jexpress-trace-id": uuid(),
      "origin": "https://jingcai-h5.jd.com",
      "app-key": "jexpress",
      "event-id": uuid(),
      "clientversion": random(["11.1.0", "10.5.0", "10.3.6"]),
      "content-type": "application/json;charset=utf-8",
      "build": "167541",
      "biz-type": "service-monitor",
      "forcebot": "0"
    }
  };
  return new Promise(resolve => {
    $.post(config, async (err, resp, data) => {
      try {
        //console.log(data)
        if (err) {
          console.log(err);
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data || "");
      }
    });
  });
}
function dwappinfo() {
  let ts = Date.now();
  let opt = {
    url: `https://dwapp.jd.com/user/dwSignInfo`,
    body: JSON.stringify({
      "t": ts,
      "channelSource": "txzs",
      "encStr": CR.MD5(ts + "e9c398ffcb2d4824b4d0a703e38yffdd").toString()
    }),
    headers: {
      "Origin": "https://txsm-m.jd.com",
      "Content-Type": "application/json",
      "User-Agent": $.UA,
      "Cookie": cookie
    }
  };
  return new Promise(async resolve => {
    $.post(opt, async (err, resp, data) => {
      let ccc = "";
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`dwappinfo 请求失败，请检查网路重试`);
        } else {
          data = JSON.parse(data);
          if (data.code == 200) {
            ccc = data.data.balanceNum;
          } else {
            console.log(data.msg);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(ccc);
      }
    });
  });
}
function dwappexpire() {
  let opt = {
    url: `https://api.m.jd.com/api?functionId=DATAWALLET_USER_QUERY_EXPIRED_SCORE&appid=h5-sep&body=%7B%22expireDayNum%22%3A7%7D&client=m&clientVersion=6.0.0`,
    headers: {
      "Origin": "https://prodev.m.jd.com",
      "User-Agent": $.UA,
      "Cookie": cookie
    }
  };
  return new Promise(async resolve => {
    $.post(opt, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`dwappexpire 请求失败，请检查网路重试`);
        } else {
          data = JSON.parse(data);
          if (data.code == 200) {
            data = data.data.expireNum;
          } else {
            //console.log(data.msg);
            data = "";
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}
function getek() {
  let opt = {
    url: `https://mygiftcard.jd.com/giftcard/queryChannelUserCard`,
    //body: `appid=wh5&clientVersion=1.0.0&functionId=wanrentuan_superise_send&body={"channel":2}&area=2_2813_61130_0`,
    headers: {
      //'Host': 'api.m.jd.com',
      "Origin": "https://o.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": cookie
    }
  };
  return new Promise(async resolve => {
    $.get(opt, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`getek请求失败!!!!`);
        } else {
          data = JSON.parse(data);
          if (data.code == 0) {
            $.ECardinfo = Number(data.data.totalAmount);
          } else {
            console.log(data.msg);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}
function marketCard() {
  let opt = {
    url: `https://api.m.jd.com/atop_channel_marketCard_cardInfo`,
    body: `appid=jd-super-market&t=${Date.now()}&functionId=atop_channel_marketCard_cardInfo&client=m&uuid=&body=%7B%22babelChannel%22%3A%22ttt9%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D`,
    headers: {
      "Origin": "https://pro.m.jd.com",
      "User-Agent": $.UA,
      "Cookie": cookie
    }
  };
  let carddata = "";
  return new Promise(async resolve => {
    $.post(opt, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`marketCard 请求失败，请检查网路重试`);
        } else {
          data = JSON.parse(data);
          if (data.success) {
            carddata = data.data?.floorData?.items ? data.data?.floorData?.items[0].marketCardVO : "";
          } else {}
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(carddata);
      }
    });
  });
}
function newfarm_info() {
  let opt = {
    url: `https://api.m.jd.com/client.action`,
    body: `appid=signed_wh5&client=android&clientVersion=12.4.2&screen=393*0&wqDefault=false&build=99108&osVersion=12&t=${Date.now()}&body={"version":1,"type":1}&functionId=farm_award_detail`,
    headers: {
      "Origin": "https://h5.m.jd.com",
      "User-Agent": $.UA,
      "Cookie": cookie
    }
  };
  return new Promise(async resolve => {
    $.post(opt, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`newfarm_info 请求失败，请检查网路重试`);
        } else {
          data = JSON.parse(data);
          if (data.data.success) {
            if (data.data.result.plantAwards && data.data.result.plantAwards.length > 0) {
              for (let i of data.data.result.plantAwards) {
                if (i.awardStatus == 1) {
                  $.newfarm_info = `${i.skuName} -> ${i.exchangeRemind}`;
                }
              }
            }
          } else {}
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function area() {
  let i = getRand(1, 30);
  let o = getRand(70, 3000);
  let x = getRand(900, 60000);
  let g = getRand(600, 30000);
  let a = i + "_" + o + "_" + x + "_" + g;
  return a;
}
;
function getRand(min, max) {
  return parseInt(Math.random() * (max - min)) + min;
}
;
function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
}
;
function uuidRandom() {
  return Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
}
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumber(len) {
  let chars = "0123456789";
  let maxPos = chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return Date.now() + str;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}