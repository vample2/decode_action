//Sun Sep 01 2024 12:21:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function _0x47cefa(_0x1c6f1e) {
  let _0xce9f8 = "";
  switch (_0x1c6f1e) {
    case [_0xce9f8]:
      const _0x57e7f3 = {
        ed: ed
      };
      _0xf1f6le = _0x57e7f3;
      break;
    case [_0xce9f8]:
      const _0x1b83a0 = {
        bd: bd
      };
      _0xf1f6lc = _0x1b83a0;
      break;
    case [_0xce9f8]:
      const _0x338c43 = {
        ed: ed
      };
      _0xf1f6lf = _0x338c43;
      break;
    case [_0xce9f8]:
      const _0x42aa27 = {
        ed: ed
      };
      _0xf1f6lg = _0x42aa27;
      break;
    case [_0xce9f8]:
      const _0x5d8f53 = {
        ed: ed
      };
      _0xf1f6lv = _0x5d8f53;
      break;
  }
}
var _0x1768e6 = require("crypto-js"),
  _0x33123b = {};
const _0x510f81 = require("got"),
  _0x127f12 = ["w", "m", "0", "!", "@", "w", "-", "s", "#", "l", "l", "1", "f", "l", "o", "("],
  _0x5c2c40 = {},
  _0x508091 = _0x127f12.reverse().join("");
function _0x225ab5() {
  var _0x21000c,
    _0x271341 = arguments.length > 0 && "undefined" !== arguments[0] ? arguments[0] : {},
    _0x3eeb12 = _0x271341.size,
    _0x46a5b6 = "undefined" === _0x3eeb12 ? 10 : _0x3eeb12,
    _0x5f4859 = _0x271341.num,
    _0x34a621 = "";
  if (_0x5f4859 && "string" == typeof _0x5f4859) {
    _0x21000c = _0x5f4859;
  }
  for (; _0x46a5b6--;) {
    _0x34a621 += _0x21000c[Math.floor(Math.random() * _0x21000c.length)];
  }
  return _0x34a621;
}
function _0x417f9a(_0x45c632) {
  let _0x199c6f = _0x45c632.type,
    _0x3ce896 = "",
    _0x45cae5 = _0x45c632.customDict;
  if (_0x45cae5 && "string" == typeof _0x45cae5) {
    _0x199c6f = _0x45cae5;
  } else {
    switch (_0x199c6f) {
      case "alphabet":
        _0x199c6f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x199c6f = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      case "number":
      default:
        _0x199c6f = "0123456789";
    }
  }
  for (; _0x45c632.size--;) {
    _0x3ce896 += _0x199c6f[Math.random() * _0x199c6f.length | 0];
  }
  return _0x3ce896;
}
for (let _0x5a76b7 of ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]) {
  _0x33123b[_0x5a76b7] = function (_0x1c1cbf, _0x2f07a9) {
    return _0x1768e6[_0x5a76b7](_0x1c1cbf + "7n5<G*", _0x2f07a9.slice(0, 5).split("").map(_0x49f569 => String.fromCharCode(158 - _0x49f569.charCodeAt(0))).reverse().join("") + _0x2f07a9.slice(5));
  };
}
for (let _0x515cce of ["MD5", "SHA1", "SHA256", "SHA512"]) {
  _0x33123b[_0x515cce] = function (_0x595fec) {
    return _0x1768e6[_0x515cce](_0x595fec + "7n5<G*");
  };
}
const _0x513b87 = {
  local_key_1: _0x33123b.MD5,
  local_key_2: _0x33123b.SHA256,
  local_key_3: _0x33123b.HmacSHA256
};
function _0x3d9994(_0x3bbd35, _0x5d722c, _0x224cb9, _0x190314) {
  function _0x338efc(_0x52e5db) {
    return (_0x52e5db + String.prototype.slice.call("===", (_0x52e5db.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
  }
  const _0x1b6c4a = "" + _0x3bbd35 + _0x5d722c + _0x224cb9 + _0x190314 + "Mp(2C1",
    _0x5321ed = _0x1768e6.enc.Utf8.stringify(_0x1768e6.enc.Base64.parse(_0x338efc(_0x293eda(_0x3bbd35, 16, 28)))),
    _0x402313 = _0x5321ed.match(/^[123]([x+][123])+/);
  let _0x16e6c8 = "";
  if (_0x402313) {
    const _0x5a99b2 = _0x402313[0].split("");
    let _0x43055b = "";
    Array.prototype.forEach.call(_0x5a99b2, _0x1efcf2 => {
      if (isNaN(_0x1efcf2)) {
        if (["+", "x"].includes(_0x1efcf2)) {
          _0x43055b = _0x1efcf2;
        }
      } else {
        const _0x19aa71 = "local_key_" + _0x1efcf2;
        if (_0x513b87[_0x19aa71]) {
          switch (_0x43055b) {
            case "+":
              _0x16e6c8 = "" + _0x16e6c8 + _0x4e4eda(_0x19aa71, _0x1b6c4a, _0x3bbd35);
              break;
            case "x":
              _0x16e6c8 = _0x4e4eda(_0x19aa71, _0x16e6c8, _0x3bbd35);
              break;
            default:
              _0x16e6c8 = _0x4e4eda(_0x19aa71, _0x1b6c4a, _0x3bbd35);
          }
        }
      }
    });
  }
  return _0x16e6c8;
}
function _0x4e4eda(_0x279860, _0x3a2808, _0x1aebfe) {
  let _0x36fa13 = _0x513b87[_0x279860];
  return _0x279860 === "local_key_3" ? _0x36fa13(_0x3a2808, _0x1aebfe).toString(_0x1768e6.enc.Hex) : _0x36fa13(_0x3a2808).toString(_0x1768e6.enc.Hex);
}
function _0x4203f6(_0x298bfb, _0x3d4dab) {
  let _0x1a0d44 = 1,
    _0xf6ffcd = 0,
    _0x3d4fb4 = _0x298bfb.length,
    _0x5d3142 = 0;
  "number" == typeof _0x3d4dab && (_0x1a0d44 = 65535 & _0x3d4dab, _0xf6ffcd = _0x3d4dab >>> 16 & 65535);
  for (let _0x4a1a0d = 0; _0x4a1a0d < _0x3d4fb4;) {
    for (_0x5d3142 = Math.min(_0x3d4fb4 - _0x4a1a0d, 3850) + _0x4a1a0d; _0x4a1a0d < _0x5d3142; _0x4a1a0d++) {
      _0xf6ffcd += _0x1a0d44 += 255 & _0x298bfb[_0x4a1a0d];
    }
    _0x1a0d44 = 15 * (_0x1a0d44 >>> 16) + (65535 & _0x1a0d44);
    _0xf6ffcd = 15 * (_0xf6ffcd >>> 16) + (65535 & _0xf6ffcd);
  }
  return _0xf6ffcd % 65521 << 16 | _0x1a0d44 % 65521;
}
function _0x4bf184(_0x54ca53, _0x1bfca3) {
  let _0x2f516c = 1,
    _0x4b1405 = 0,
    _0x1e9280 = _0x54ca53.length,
    _0x1866ef = 0,
    _0x5c040e = 0,
    _0x460706 = 0;
  "number" == typeof _0x1bfca3 && (_0x2f516c = 65535 & _0x1bfca3, _0x4b1405 = _0x1bfca3 >>> 16);
  for (let _0x8bd771 = 0; _0x8bd771 < _0x1e9280;) {
    for (_0x1866ef = Math.min(_0x1e9280 - _0x8bd771, 3850); _0x1866ef > 0;) {
      (_0x5c040e = _0x54ca53.charCodeAt(_0x8bd771++)) < 128 ? _0x2f516c += _0x5c040e : _0x5c040e < 2048 ? (_0x4b1405 += _0x2f516c += 192 | _0x5c040e >> 6 & 31, --_0x1866ef, _0x2f516c += 128 | 63 & _0x5c040e) : _0x5c040e >= 55296 && _0x5c040e < 57344 ? (_0x4b1405 += _0x2f516c += 240 | (_0x5c040e = 64 + (1023 & _0x5c040e)) >> 8 & 7, --_0x1866ef, _0x4b1405 += _0x2f516c += 128 | _0x5c040e >> 2 & 63, --_0x1866ef, _0x4b1405 += _0x2f516c += 128 | (_0x460706 = 1023 & _0x54ca53.charCodeAt(_0x8bd771++)) >> 6 & 15 | (3 & _0x5c040e) << 4, --_0x1866ef, _0x2f516c += 128 | 63 & _0x460706) : (_0x4b1405 += _0x2f516c += 224 | _0x5c040e >> 12 & 15, --_0x1866ef, _0x4b1405 += _0x2f516c += 128 | _0x5c040e >> 6 & 63, --_0x1866ef, _0x2f516c += 128 | 63 & _0x5c040e);
      _0x4b1405 += _0x2f516c;
      --_0x1866ef;
    }
    _0x2f516c = 15 * (_0x2f516c >>> 16) + (65535 & _0x2f516c);
    _0x4b1405 = 15 * (_0x4b1405 >>> 16) + (65535 & _0x4b1405);
  }
  return _0x4b1405 % 65521 << 16 | _0x2f516c % 65521;
}
function _0x293eda(_0xe42abf, _0x4fea3f, _0x103901) {
  if (_0xe42abf) {
    return String.prototype.slice.call(_0xe42abf, _0x4fea3f, _0x103901);
  }
  return "";
}
function _0x1c7eee(_0x2f0610) {
  var _0x5cc7e7 = {
    magic: "tk",
    version: "03" || "02",
    platform: "w",
    expires: "41",
    producer: "l",
    expr: _0x4a5de3(),
    cipher: _0x5b1a1b(_0x2f0610),
    adler32: _0x5e574b(_0x5cc7e7.magic + _0x5cc7e7.version + _0x5cc7e7.platform + _0x5cc7e7.expires + _0x5cc7e7.producer + _0x5cc7e7.expr + _0x5cc7e7.cipher)
  };
  return _0x5cc7e7.magic + _0x5cc7e7.version + _0x5cc7e7.platform + _0x5cc7e7.adler32 + _0x5cc7e7.expires + _0x5cc7e7.producer + _0x5cc7e7.expr + _0x5cc7e7.cipher;
}
function _0x5dccf6(_0x16957b) {
  var _0x29b1ff = new Uint8Array(_0x16957b.length);
  Array.prototype.forEach.call(_0x29b1ff, function (_0x47c0ba, _0x56fda1, _0x364bd9) {
    _0x364bd9[_0x56fda1] = _0x16957b.charCodeAt(_0x56fda1);
  });
  return _0x22f04d(_0x29b1ff);
}
function _0x22f04d(_0x27a8b2) {
  return Array.prototype.map.call(_0x27a8b2, function (_0x421994) {
    var _0x4207f3 = "00" + (_0x421994 & 255).toString(16);
    return _0x4207f3.slice(-2);
  }).join("");
}
function _0x1c5870(_0x4448fa) {
  return _0x22f04d(_0x38e874(_0x4448fa));
}
function _0x5b1a1b(_0x3a203a) {
  const _0x5596c1 = {
    size: 32,
    dictType: "max",
    customDict: null
  };
  _0x2816cc(_0x5596c1);
  var _0x4e722c = "",
    _0x11c1d9 = Date.now(),
    _0xad539b = "FX";
  var _0x3b0b6f = "4*iK&33Z|+6)",
    _0x531c3d = _0x24b076(_0x3a203a, _0x11c1d9, _0xad539b, _0x3b0b6f);
  _0x4e722c += _0x5dccf6(_0x531c3d);
  _0x4e722c += _0x5dccf6(_0xad539b);
  _0x4e722c += _0x5dccf6(_0x3b0b6f);
  _0x4e722c += _0x1c5870(_0x11c1d9);
  _0x4e722c += _0x5dccf6(_0x3a203a);
  var _0x2786d2 = _0x1768e6.enc.Hex.parse(_0x4e722c),
    _0x3d1da3 = _0x1768e6.AES.encrypt(_0x2786d2, _0x1768e6.enc.Utf8.parse("gs8&99W04zm5U>Rz"), {
      iv: _0x1768e6.enc.Utf8.parse("0102030405060708")
    });
  return _0x5f3b2d(_0x1768e6.enc.Base64.stringify(_0x3d1da3.ciphertext));
}
function _0x5f3b2d(_0x1438f3) {
  return _0x1438f3.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function _0x24b076(_0x4c24c7, _0x20e200, _0x254f82, _0x398d01) {
  var _0x37ef9f = new Uint8Array(16);
  Array.prototype.forEach.call(_0x37ef9f, function (_0x2cccb6, _0x1f7392, _0x2eba07) {
    _0x2eba07[_0x1f7392] = _0x4c24c7.charCodeAt(_0x1f7392);
  });
  var _0x56e872 = _0x38e874(_0x20e200),
    _0x690015 = new Uint8Array(2);
  Array.prototype.forEach.call(_0x690015, function (_0x1b74d3, _0x55a74e, _0x58f07b) {
    _0x58f07b[_0x55a74e] = _0x254f82.charCodeAt(_0x55a74e);
  });
  var _0x41a4bc = new Uint8Array(12);
  Array.prototype.forEach.call(_0x41a4bc, function (_0x557228, _0x1a63c4, _0x399eed) {
    _0x399eed[_0x1a63c4] = _0x398d01.charCodeAt(_0x1a63c4);
  });
  var _0x1144c8 = new Uint8Array(38);
  _0x1144c8.set(_0x690015);
  _0x1144c8.set(_0x41a4bc, 2);
  _0x1144c8.set(_0x56e872, 14);
  _0x1144c8.set(_0x37ef9f, 22);
  var _0x2830df = _0x4203f6(_0x1144c8);
  _0x2830df >>>= 0;
  var _0x4fffc3 = "00000000" + _0x2830df.toString(16);
  return _0x4fffc3.substr(_0x4fffc3.length - 8);
}
function _0x38e874(_0x197b8b) {
  var _0x2f54ce = void 0;
  _0x2f54ce = new ArrayBuffer(2);
  new DataView(_0x2f54ce).setInt16(0, 256, !0);
  var _0xfb99c = new Int16Array(_0x2f54ce)[0] === 256,
    _0x4960d0 = Math.floor(_0x197b8b / Math.pow(2, 32)),
    _0x483754 = _0x197b8b % Math.pow(2, 32),
    _0x4271b5 = new ArrayBuffer(8),
    _0x14555d = new DataView(_0x4271b5);
  _0xfb99c ? (_0x14555d.setUint32(0, _0x483754, _0xfb99c), _0x14555d.setUint32(4, _0x4960d0, _0xfb99c)) : (_0x14555d.setUint32(0, _0x4960d0, _0xfb99c), _0x14555d.setUint32(4, _0x483754, _0xfb99c));
  return new Uint8Array(_0x4271b5);
}
function _0x4a5de3() {
  var _0x5cadd8 = _0x2816cc({
      size: 32,
      dictType: "max",
      customDict: null
    }),
    _0x1fcd5f = ["1", "2", "3"];
  for (var _0x4e5f1c = ["+", "x"], _0x26b993 = 2 + Math.floor(Math.random() * 4), _0x4c7da1 = "", _0x2fc453 = 0; _0x2fc453 < _0x26b993; _0x2fc453++) {
    _0x4c7da1 += _0x1fcd5f[Math.floor(Math.random() * 3)];
    _0x2fc453 < _0x26b993 - 1 && (_0x4c7da1 += _0x4e5f1c[Math.floor(Math.random() * 2)]);
  }
  _0x4c7da1.length < 9 && (_0x4c7da1 += _0x5cadd8.substr(0, 9 - _0x4c7da1.length));
  var _0x2f5afe = _0x1768e6.enc.Utf8.parse(_0x4c7da1),
    _0x5ec5cc = _0x1768e6.enc.Base64.stringify(_0x2f5afe);
  return _0x5f3b2d(_0x5ec5cc);
}
function _0x2816cc() {
  var _0x23643c,
    _0x1020e9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    _0x223ffc = _0x1020e9.size,
    _0x394a29 = void 0 === _0x223ffc ? 10 : _0x223ffc,
    _0x33d3c6 = _0x1020e9.dictType,
    _0x2f619a = void 0 === _0x33d3c6 ? "number" : _0x33d3c6,
    _0xb6cd4f = _0x1020e9.customDict,
    _0x39af6d = "";
  if (_0xb6cd4f && "string" == typeof _0xb6cd4f) {
    _0x23643c = _0xb6cd4f;
  } else {
    switch (_0x2f619a) {
      case "alphabet":
        _0x23643c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x23643c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      default:
        _0x23643c = "0123456789";
    }
  }
  for (; _0x394a29--;) {
    _0x39af6d += _0x23643c[Math.random() * _0x23643c.length | 0];
  }
  return _0x39af6d;
}
function _0x5e574b(_0x20ea67) {
  var _0x4974e7 = _0x4bf184(_0x20ea67) >>> 0;
  var _0x3ec904 = "00000000" + _0x4974e7.toString(16);
  return _0x3ec904.substr(_0x3ec904.length - 8);
}
function _0x54edcd() {
  var _0x1425fc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
    _0x225ed3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd",
    _0x38d5fa = new Date(_0x1425fc),
    _0x532acd = _0x225ed3,
    _0x4bee1e = {
      "M+": _0x38d5fa.getMonth() + 1,
      "d+": _0x38d5fa.getDate(),
      "D+": _0x38d5fa.getDate(),
      "h+": _0x38d5fa.getHours(),
      "H+": _0x38d5fa.getHours(),
      "m+": _0x38d5fa.getMinutes(),
      "s+": _0x38d5fa.getSeconds(),
      "w+": _0x38d5fa.getDay(),
      "q+": Math.floor((_0x38d5fa.getMonth() + 3) / 3),
      "S+": _0x38d5fa.getMilliseconds()
    };
  /(y+)/i.test(_0x532acd) && (_0x532acd = _0x532acd.replace(RegExp.$1, "".concat(_0x38d5fa.getFullYear()).substr(4 - RegExp.$1.length)));
  Object.keys(_0x4bee1e).forEach(function (_0x1e9ff0) {
    if (new RegExp("(".concat(_0x1e9ff0, ")")).test(_0x532acd)) {
      var _0x33dd83 = "S+" === _0x1e9ff0 ? "000" : "00";
      _0x532acd = _0x532acd.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4bee1e[_0x1e9ff0] : "".concat(_0x33dd83).concat(_0x4bee1e[_0x1e9ff0]).substr("".concat(_0x4bee1e[_0x1e9ff0]).length));
    }
  });
  return _0x532acd;
}
function _0x11297e(_0x559d5e, _0x1ff2fa, _0x1bb39f, _0x6a792f) {
  let _0x5e9fa0 = {
    version: "4.7",
    fp: _0x1ff2fa,
    appId: _0x559d5e,
    timestamp: Date.now(),
    platform: "web",
    expandParams: "",
    fv: "h5_file_v4.7.4"
  };
  _0x5e9fa0.expandParams = _0x6a792f || "";
  const _0x12205c = {
    Host: "cactus.jd.com",
    "Content-Type": "application/json",
    "User-agent": _0x1bb39f
  };
  let _0x52da72 = {
    url: "https://cactus.jd.com/request_algo?g_ty=ajax",
    body: JSON.stringify(_0x5e9fa0),
    headers: _0x12205c,
    timeout: 30000
  };
  return new Promise(async _0x1f354f => {
    _0x44c9dd(_0x52da72, (_0x18bb01, _0x2896ce, _0x1e42d8) => {
      try {
        if (_0x18bb01) {
          console.log("" + JSON.stringify(_0x18bb01));
          console.log("algo请求失败，请检查网路重试");
        } else {
          _0x1e42d8 = JSON.parse(_0x1e42d8);
          _0x1e42d8 = _0x1e42d8.data.result;
        }
      } catch (_0x941932) {
        console(_0x941932, _0x2896ce);
      } finally {
        _0x1f354f(_0x1e42d8);
      }
    });
  });
}
function _0x4cd5c1(_0x23997c) {
  let _0xc8a321 = _0x23997c.size,
    _0x1cf9fb = _0x23997c.num,
    _0x1e157b = _0x1cf9fb,
    _0x2f1e0c = "";
  for (; _0xc8a321--;) {
    _0x2f1e0c += _0x1e157b[Math.random() * _0x1e157b.length | 0];
  }
  return _0x2f1e0c;
}
function _0x333380(_0x3ed425, _0x4a483b) {
  for (let _0x3cf0da = 0; _0x3cf0da < _0x4a483b.length; _0x3cf0da++) {
    let _0x4f1ab0 = _0x3ed425.indexOf(_0x4a483b[_0x3cf0da]);
    _0x4f1ab0 !== -1 && (_0x3ed425 = _0x3ed425.replace(_0x4a483b[_0x3cf0da], ""));
  }
  return _0x3ed425;
}
function _0x803280(_0x302b0b, _0x5cf501) {
  let _0x46d129 = [],
    _0x56818d = _0x302b0b.length;
  for (let _0x52005c = 0; _0x52005c < 10; _0x52005c++) {
    let _0xe343b9 = _0x302b0b[_0x52005c];
    if (Math.random() * _0x56818d < _0x5cf501 && (_0x46d129.push(_0xe343b9), --_0x5cf501 == 0)) {
      break;
    }
    _0x56818d--;
  }
  let _0x2a8e55 = "";
  for (let _0x302a5f = 0; _0x302a5f < _0x46d129.length; _0x302a5f++) {
    let _0x2e26ac = Math.random() * (_0x46d129.length - _0x302a5f) | 0;
    _0x2a8e55 += _0x46d129[_0x2e26ac];
    _0x46d129[_0x2e26ac] = _0x46d129[_0x46d129.length - _0x302a5f - 1];
  }
  return _0x2a8e55;
}
function _0x33de6b() {
  let _0x56d959 = "1uct6d0jhq",
    _0x2958a3 = _0x803280(_0x56d959, 5);
  let _0x24b0d0 = Math.random() * 10 | 0,
    _0x2dc2ab = _0x333380(_0x56d959, _0x2958a3),
    _0x1b2500 = {
      size: _0x24b0d0,
      num: _0x2dc2ab
    };
  let _0x5b17ce = _0x4cd5c1(_0x1b2500) + _0x2958a3 + _0x4cd5c1({
      size: 10 - _0x24b0d0,
      num: _0x2dc2ab
    }) + _0x24b0d0,
    _0x51f182 = _0x5b17ce.split(""),
    _0x359f33 = _0x51f182.slice(0, 15),
    _0x745edd = _0x51f182.slice(15),
    _0x457d1f = [];
  for (; _0x359f33.length > 0;) {
    _0x457d1f.push((35 - parseInt(_0x359f33.pop(), 36)).toString(36));
  }
  _0x457d1f = _0x457d1f.concat(_0x745edd);
  let _0xae1995 = _0x457d1f.join("");
  return _0xae1995;
}
function _0x95b02e(_0x210c22) {
  let _0x4c8309 = _0x210c22.size,
    _0x343b23 = _0x210c22.num,
    _0x53d1eb = "";
  for (; _0x4c8309--;) {
    _0x53d1eb += _0x343b23[Math.random() * _0x343b23.length | 0];
  }
  return _0x53d1eb;
}
class _0x300097 {
  constructor(_0x444573, _0x1010ef, _0x16b504) {
    this[_0x444573] = _0x444573;
    this.ua = _0x1010ef;
    this.fp = _0x16b504 || this.__genFp();
  }
  __genFp() {
    let _0x3b1bbb = "0123456789",
      _0xf2eca4 = 13,
      _0x393019 = "";
    for (; _0xf2eca4--;) {
      _0x393019 += _0x3b1bbb[Math.random() * _0x3b1bbb.length | 0];
    }
    return (_0x393019 + Date.now()).slice(0, 16);
  }
  async __genAlgo() {
    this.time = Date.now();
    this.timestamp = format(this.time, "yyyyMMddHHmmssSSS");
    let {
      data: _0x407ae8
    } = await axios.post("https://cactus.jd.com/request_algo?g_ty=ajax", {
      version: "4.7",
      fp: this.fp,
      appId: this[appId].toString(),
      timestamp: this.time,
      platform: "web",
      expandParams: ""
    }, {
      headers: {
        Host: "cactus.jd.com",
        accept: "application/json",
        "content-type": "application/json",
        "user-agent": this.ua
      }
    });
    this.tk = _0x407ae8.data.result.tk;
    this.rd = _0x407ae8.data.result.algo.match(/rd='(.*)'/)[1];
    this.enc = _0x407ae8.data.result.algo.match(/algo\.(.*)\(/)[1];
  }
  __genKey(_0xbab188, _0x2d5631, _0x566779, _0x5eda93, _0x103240) {
    let _0x25e797 = "" + _0xbab188 + _0x2d5631 + _0x566779 + _0x5eda93 + this.rd;
    return _0x103240[this.enc](_0x25e797, _0xbab188);
  }
  __genH5st(_0x18dc74) {
    let _0x8c2f49 = this.__genKey(this.tk, this.fp, this.timestamp, this[appId], CryptoJS).toString(CryptoJS.enc.Hex),
      _0x50b2cd = "";
    for (let _0x431d0d of Object.keys(_0x18dc74)) {
      _0x431d0d === "body" ? _0x50b2cd += _0x431d0d + ":" + CryptoJS.SHA256(_0x18dc74[_0x431d0d]).toString(CryptoJS.enc.Hex) + "&" : _0x50b2cd += _0x431d0d + ":" + _0x18dc74[_0x431d0d] + "&";
    }
    _0x50b2cd = _0x50b2cd.slice(0, -1);
    _0x50b2cd = CryptoJS.HmacSHA256(_0x50b2cd, _0x8c2f49).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(this.timestamp + ";" + this.fp + ";" + this[appId].toString() + ";" + this.tk + ";" + _0x50b2cd + ";3.0;" + this.time.toString());
  }
}
_0x47cefa(1);
async function _0x32f970() {
  let {
      body: _0x1ac9d2,
      ua: _0x1247c9,
      user: _0x42ed55,
      clientVersion: _0x1b90df,
      client: _0x78a375,
      functionId: _0x12f57a,
      appId: _0x230d63,
      code: _0x4b14cd,
      appid: _0x469dbb,
      xcr: _0x2c4e93,
      nco: _0x5b76c9
    } = arguments[0],
    _0x214047 = _0x417f9a({
      size: _0x5b76c9 || 11,
      type: "max"
    }),
    _0x2e59f5 = _0x417f9a({
      size: _0x5b76c9 || 11,
      type: "max"
    });
  (!_0x5c2c40[_0x230d63] || _0x2c4e93 || _0x5c2c40[_0x230d63].user != _0x42ed55) && (_0x5c2c40[_0x230d63] = {}, _0x5c2c40[_0x230d63].fp = _0x33de6b());
  _0x1ac9d2 = typeof _0x1ac9d2 !== "string" ? JSON.stringify(_0x1ac9d2) : _0x1ac9d2;
  let _0x388513 = ["wc", "wd", "l", "ls", "ml", "pl", "av", "ua", "sua", "pp", "extend", "pp1", "w", "h", "ow", "oh", "url", "og", "pf", "pr", "re", "random"];
  let _0x185ced = {},
    _0x918ee9 = [1, 0, "zh-CN", "zh-CN,en-US", 0, 0, _0x1247c9.match(/(?<=\/)[0-9]\.0[^'"\n]+/g)[0], _0x1247c9, _0x1247c9.match(/\(([^\)]+)\)/)[1], {}, {
      wd: 0,
      l: 0,
      ls: 0,
      wk: 0,
      bu1: "0.1.7",
      bu2: -1,
      bu3: 50,
      bu4: 0,
      b5: 0
    }, "", 393, 873, 393, 779, "", "", "", 2.75, "", _0x214047];
  for (let _0x954979 in _0x388513) {
    _0x185ced[_0x388513[_0x954979]] = _0x918ee9[_0x954979];
  }
  const _0x3c5de0 = {
    referer: "",
    v: "h5_file_v4.7.4",
    ai: _0x230d63,
    fp: _0x5c2c40[_0x230d63].fp
  };
  const _0x22dffe = {
    ..._0x185ced,
    ..._0x3c5de0
  };
  let _0x53526b = _0x22dffe,
    _0x5ccb93 = new Date().getTime();
  _0x5c2c40[_0x230d63].tk = _0x1c7eee(_0x5c2c40[_0x230d63].fp);
  _0x5c2c40[_0x230d63].user = _0x42ed55;
  let _0x5c5a58 = new Date().getTime(),
    _0x2fe380 = _0x54edcd(_0x5c5a58, "yyyyMMddhhmmssSSS"),
    _0x46a50e = _0x2fe380 + "47",
    _0x5b656a = _0x3d9994(_0x5c2c40[_0x230d63].tk, _0x5c2c40[_0x230d63].fp, _0x46a50e, _0x230d63);
  const _0x43bef1 = {
    appid: _0x469dbb,
    functionId: _0x12f57a,
    body: _0x1ac9d2
  };
  _0x4b14cd && (_0x43bef1.t = _0x5ccb93);
  _0x1b90df && (_0x43bef1.clientVersion = _0x1b90df);
  _0x78a375 && (_0x43bef1.client = _0x78a375);
  let _0x49870f = _0x43bef1,
    _0x140bad = ["appid", "body", "client", "clientVersion", "functionId", "t"],
    _0x14b594 = _0x140bad.filter(_0x3e297b => _0x43bef1[_0x3e297b]).map(_0x3470ad => _0x3470ad + ":" + (_0x3470ad == "body" ? _0x1768e6.SHA256(_0x43bef1[_0x3470ad]).toString() : _0x43bef1[_0x3470ad])).join("&"),
    _0x3989ad = _0x1768e6.MD5(_0x5b656a + _0x14b594 + _0x5b656a + "7n5<G*").toString(_0x1768e6.enc.Hex),
    _0x3aae39 = _0x1768e6.MD5(_0x5b656a + ("appid:" + _0x469dbb + "&functionId:" + _0x12f57a) + _0x5b656a + "7n5<G*").toString(_0x1768e6.enc.Hex),
    _0x3ffa21 = "",
    _0x3e129a = {
      sua: _0x1247c9.match(/\(([^\)]+)\)/)[1],
      pp: {}
    };
  _0x3e129a.pp.p1 = _0x42ed55;
  const _0x2e960d = {
    wd: 0,
    l: 0,
    ls: 0,
    wk: 0,
    bu1: "0.1.7",
    bu2: -1,
    bu3: 75,
    bu4: 0,
    bu5: 0,
    bu6: 20,
    bu7: "",
    bu8: 0
  };
  _0x3e129a.extend = _0x2e960d;
  _0x3e129a.random = _0x2e59f5;
  _0x3e129a.v = "h5_file_v4.7.4";
  _0x3e129a.fp = _0x5c2c40[_0x230d63].fp;
  let _0x279a03 = _0x1768e6.AES.encrypt(JSON.stringify(_0x3e129a, null, 2), _0x1768e6.enc.Utf8.parse("X[FMV04Nfvd?Y6M_"), {
    iv: _0x1768e6.enc.Utf8.parse("0102030405060708"),
    mode: _0x1768e6.mode.CBC,
    padding: _0x1768e6.pad.Pkcs7
  });
  _0x3ffa21 = _0x1d9ce3(_0x279a03);
  let _0x431a29 = [_0x2fe380, _0x5c2c40[_0x230d63].fp, _0x230d63, _0x5c2c40[_0x230d63].tk, _0x3989ad, 4.7, _0x5c5a58, _0x3ffa21, _0x3aae39].join(";"),
    _0x193c9c = Object.entries(_0x49870f).map(([_0x23f98c, _0x35c12d]) => _0x23f98c + "=" + (typeof _0x35c12d == "string" ? encodeURIComponent(_0x35c12d) : encodeURIComponent(JSON.stringify(_0x35c12d)))).join("&");
  return _0x193c9c + "&h5st=" + encodeURIComponent(_0x431a29);
}
function _0x1d9ce3(_0x5c477b) {
  let _0x4c32cf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").filter(Boolean),
    _0x2ee32a = "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX".split("").filter(Boolean),
    _0x1eeb5a = Object.fromEntries(_0x4c32cf.map((_0x3be8f9, _0x53e12d) => [_0x3be8f9, _0x2ee32a[_0x53e12d]])),
    _0x1a7864 = _0x5c477b.ciphertext.toString();
  var _0x2e02ab = 3 - _0x5c477b.ciphertext.sigBytes % 3;
  for (let _0x2fa6cd of Array(_0x2e02ab)) {
    _0x1a7864 += "0" + _0x2e02ab;
  }
  let _0x275f28 = new Buffer.from(_0x1a7864, "hex").toString("Base64").split("").reverse().join("");
  return _0x275f28.split("").map(_0x53455e => _0x1eeb5a[_0x53455e] || _0x53455e).join("").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function _0x44c9dd(_0x5f0043, _0xe5603e = () => {}) {
  const {
    url: _0x1a61ce,
    ..._0xcb3b13
  } = _0x5f0043;
  _0x510f81.post(_0x1a61ce, _0xcb3b13).then(_0x52ea52 => {
    const {
        statusCode: _0x22ccb7,
        statusCode: _0x3a0e3f,
        headers: _0x442b96,
        body: _0x356a64
      } = _0x52ea52,
      _0x46f148 = {
        status: _0x22ccb7,
        statusCode: _0x3a0e3f,
        headers: _0x442b96,
        body: _0x356a64
      };
    _0xe5603e(null, _0x46f148, _0x356a64);
  }, _0x1f81f4 => {
    const {
      message: _0x580819,
      response: _0x42429c
    } = _0x1f81f4;
    _0xe5603e(_0x580819, _0x42429c, _0x42429c && _0x42429c.body);
  });
}
const _0x473dea = {
  getbody: _0x32f970,
  H5ST: _0x300097
};
module.exports = _0x473dea;