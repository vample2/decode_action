//Thu Dec 12 2024 04:19:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function _calMyqlChar(_0x1bde3c) {
  if (!_0x1bde3c) {
    return 0;
  }
  let _0x9044fe = _0x1bde3c.split("");
  let _0x2600de = 0;
  for (var _0x5a8854 in _0x9044fe) {
    _0x2600de += _0x9044fe[_0x5a8854].charCodeAt();
  }
  return _0x2600de;
}
function _getMyqlcRealStr(_0x32f761) {
  if (!_0x32f761) {
    return null;
  }
  const _0x589ff3 = "s8db41whij9xzn0pa3q5u7glmyof2ret6vck";
  let _0x3a1974 = "";
  let _0x5a26c8 = _0x32f761.split("");
  for (var _0x8c8fbe in _0x5a26c8) {
    let _0x2b5148 = _0x589ff3.indexOf(_0x5a26c8[_0x8c8fbe]);
    if (_0x2b5148 < 0 || _0x2b5148 > _0x589ff3.length) {
      return null;
    }
    if (_0x2b5148 < 10) {
      _0x3a1974 = _0x3a1974 + _0x2b5148 + "";
    } else {
      _0x2b5148 = _0x2b5148 + 97 - 10;
      _0x3a1974 = _0x3a1974 + String.fromCharCode(_0x2b5148);
    }
  }
  return _0x3a1974;
}
function getQmExpireDate(_0x151956, _0x3754e2) {
  try {
    const _0x22a3cb = "ddi4vgek41dih|";
    if (_0x22a3cb.indexOf(_0x151956) > -1) {
      return false;
    }
    const _0x5dfbe2 = [88239, 54342, 52312, 7212, 2356, 23256, 34353, 41515, 24124, 32323];
    let _0x2469d1 = _getMyqlcRealStr(_0x151956);
    let _0x427ccc = parseInt(_0x2469d1.substring(11, 12));
    if (_calMyqlChar(_0x2469d1.substring(0, 12)) % 10 != parseInt(_0x2469d1.substring(12, 13))) {
      return false;
    }
    let _0x16449b = parseInt(_0x2469d1.substring(0, 1));
    if (_0x3754e2 && _0x3754e2 != _0x16449b) {
      return false;
    }
    let _0x45b03c = parseInt(_0x2469d1.substring(1, 4) + _0x2469d1.substring(8, 11)) - _0x5dfbe2[_0x16449b - 1] - _0x427ccc + "";
    let _0x1065a7 = "20" + _0x45b03c.substring(0, 2) + "/" + _0x45b03c.substring(2, 4) + "/" + _0x45b03c.substring(4, 6) + " " + "23:59:59";
    if (new Date(_0x1065a7).getTime() < new Date().getTime()) {
      return false;
    } else {
      return true;
    }
  } catch (_0xc9529d) {
    return false;
  }
}
_0xod2 = "jsjiami.com.v6";
const $ = new Env("领取优惠券");
const nowVersion = "202404192版本";
console.log("当前版本" + nowVersion);
var _0xod2 = "jsjiami.com.v6",
  _0xod2_ = function () {
    return ["‮_0xod2"], _0x5555 = [_0xod2, "wrPDqTMFw6A=", "CsKbwoQ2wrRewrt9w7lg", "NMK8w4jovaPmnZzvvIY=", "FcKQwocawr8=", "LX9Iw5IL", "w5rDhcKeLVfCnMKpGcOowprCq8OBVMKp", "w7grw4TDqEU=", "wofDsREGw4Y=", "w4LCoz7CmSI=", "GcKgwqEhwqI=", "dlBrwr3CgkfCkE1oQyLCkHHCncOlUHVWwqLCvsOW", "d8KEWcKQLBVPw5l3e8KiCMOmegfDjRsz", "w5jDvA3CgSI8wobCizjDpi7ClTN6", "wqRZw7fCrcOF", "w7jDv8Knw43CoQ==", "AOW/p+Wklemjq+WPiA==", "wpDotonljL4=", "UMKhwogswrw=", "wqF1Dw==", "wq/DhkHDtcOa", "wpvDlsKHwq3Dvg==", "IMKww7nCjg4=", "CSLDjsKuQg==", "F1x+w5Ud", "e312wqDChA==", "J3XCn8KoYw==", "NWJhw5UN", "MVJ3wrnCr2gqXnfCkH9mGMOUZMK5dA==", "w5J0LsKadw==", "wobDvMKbwovDgA==", "OQDDm8KDwr8=", "wrDDnxA6w7w=", "T8KGwpUxwo9+wrk=", "woZhw4LCjA==", "w4nDg8OXC2HDv8K1", "wrB6YMOn", "M1FrwobDtg==", "w73CuiLCmQI=", "wpw5RcOUUA==", "w5oyw7DDrX8=", "HsKqw43CmRU=", "AcKIwrU=", "wr/Cq8KC6K6J5rKU5aek6LSh772l6K6n5qCY5pyY576g57ip6Ya+6K2d", "w7kLw7fDsQ==", "ScOFFsOww6rCusOTBMO6wqs=", "w68mX8OIw6dlUTMHe8OUAMK2FDzDqMKOw6lYw49Wwoo2KjXCtmg+acORw5/Cm8OF", "a8KVVcKUcEcUwptoecKuVsO8ckDDjRUqw63DiMK6a8OYwp/CmR/DssOiw4TClgLCu8OiLnfDl8KDK8O0AwbCiMOzw6fDlMKeRE43wo1WwpsAwo7Dgl7Di8OLTcOkw77Cvjt1HMKUwqQ2w4DCuMOXw5lewqrCiGFxCW3Ds8Omw5IxwrwBwokvw59dw6PDsMO1wqlHw65ndC4rU8OvworDmcKwwqp/JzFCw77DksOLC8OOw5PDpcO1LsK2DSchwr0L", "wqlxwpDDvRVVIWzDnMOcw5XCvE/CocKzwq3CpA==", "wo7Dtw8bw4Y=", "wpVLwqFWLA==", "wrzDmcKDXTw=", "cMKKw7LDk8OV", "GMKfw7TChhw=", "w5PCpjzCgzQp", "ZsK+VAM=", "wqZQw4DClcO7", "HUTCrMK+WBll", "wq1kwpfDrlgB", "bcKww43DhyJz", "w7NvFDfDog==", "wqlnwrhGNA==", "wprjgpfotYHljp0=", "wpTChwE5w4E=", "w6rDg8OkHGE=", "wofDqcK+VB8=", "C8KowqAuwqU=", "wqzDqQMPw5J6GQ==", "w6c4S8OBw7ZJVg==", "wpMfUsOJdw==", "HcKfwrAzwqw=", "bcKaQcKZKA==", "wpgrQlDCuA==", "blFswqU=", "JMKmw4bCqQXCkQ==", "fsKnw4HDoyY=", "ccK+VB0r", "w4fDhsOmHVo=", "FwHDn8KcwpI=", "w7sOWMO0w5g=", "w79+U8Kj", "XMKdwosOWg==", "w51XLsKVYA==", "w7sIw5DDmlo=", "LQsJES8=", "w7x0TsKzPsK9wp1DwoxU", "OElzwqw=", "woQAWmbCiw==", "wpPCkcOdw5jCnw==", "KGrCrcKeXQ==", "wq3Dh8KzwrjDng==", "wrPDsXPDnsO2", "NMOASOitpOawiuWnt+i3pe+8l+iviuajjuadiue9r+e6u+mFvOislA==", "ZMOue8Ovw60=", "wpPCmsK/HcK+", "wpMoVg==", "XcKIR8KuPA==", "JV18worDrCwrdmLCmw==", "w6HDscKQw5nCmw==", "wpwRSkrCg8K2Aw==", "VMK8w4HDrcO0", "wrJOcsONw7B7wpA=", "wovCkjsQw6E=", "w6lXD8KH", "wqdew5BJaA==", "wpxpwrR2Cg==", "wq1owqhAJE7Diw==", "bMKFT8KjMEsF", "wpFJwohGFw==", "GT3DrcKSwp/CviY=", "woZ+wqZrPw==", "w5M9VT97", "fUgsGcOb", "w4jmlIPplaXmnrTli7XnubXnur/vvYM=", "RE4/LcOK", "A07Cuw==", "wqTDm8KdwrXDig==", "wpxqw7vCjMO/", "w57CiCLCkTo=", "wpvCm8O1w7vCvcOdNA==", "w7RDMRbDpQ==", "DVF0w4Y1", "woTDrcKNcxo=", "YsKuVB8=", "NjTDrA==", "wrDCihAhw6U=", "w7oPdhha", "w4zDpMOkOUM=", "w6slw6PDvQ==", "NBM5Fg==", "w5vCvBxN", "BUvCpcKKcg==", "wqjCsMKKO8K+", "wqIXWHDCuw==", "w6EwTBk=", "44OJ6Lam5Y+j", "ecKWZMKrLw==", "4oKF4oGRXBrov5/mnK4s", "DsKtw67CoiE=", "w57DsMKLw5/Csg==", "wp7Dj8KM", "w5fCgybCoTo=", "FcK/woYDwqU=", "wqvDsgUvw74=", "w7ZCEA8=", "wp7CmsO2w5vCt8Og", "ClZDw4U7B8Osw5dww5M=", "w67Dg8OKGFE=", "HAw1Ahk=", "w5QAX8Omw6w=", "BcO2e8OdJw==", "ZsKew4/DmcOy", "w6HCjihHw7M=", "w7rDocKqw6XCmcKaT8K2JzfDiMKzwrfDtivDj8Kjw5wGw4oOw7TCjsKEw4DCnTlTw7ERw5XCmjvDokrDjnnDnsKHQnvDlsO3fj15GMO6YMOCwoXDiwHCqnFSUBfCjBwGW8OQBiPDgyDCmwVHL8Ohw43Cvz3CksOhw6w=", "QsK6wpHCq1k=", "Rnk/NsOs", "wr/DgMK6wos=", "wonDvy4sw5k=", "esKXw5I=", "wp8FWnrCiQ==", "ZMKaw6HDkyE=", "WcKIwroI", "csOjG8OQw7A=", "wpHDlcKZaw3CscKhRsKkV8Kuw4E=", "wpQnRMOkbQ==", "dXDCt8KRRw==", "wpXDhcKfTQHCssKw", "w4LCnyxDw64=", "wrF1w4VwZG0h", "w6N+R8KSAsKg", "w4lbCsKLXg==", "Nk9Dw5ou", "fMKzw73DjcOU", "ccKhwoTCn1/ChMO1", "V8K8wpg5wpI=", "wqwgbgrCh8Oxw7MQwps=", "CsKCwqYgwqArUA==", "SXMKBcO7", "wonDocK6wq/Diw==", "w5HDucOaA3w=", "w70iw4LDsWc=", "wp5Ow5HCicOIwozCq8OW", "w69zMSbDkQ==", "R8KCXMKrJQ==", "wpbDgsKzSSU=", "w6UzVsOX", "wqhkwovDiFgWLQ==", "EMO+dw==", "VcK0csKkGm01wrE=", "LcKnw5c=", "J8Kjwo0wwowEYMOF", "wrBxw51XaA==", "UMOZFA==", "dG8N", "ZcKJw5vDs8KAV10dc1TCvMK9RMOdXS7DiMO/wqokwrXDh0LDrg==", "O8K5w43ChQM=", "wqxaYA==", "YcKrSx4lw4g=", "wrfCrz4=", "wrB1ccOjw7o=", "ccOZCcOrw5nCt8OVTsKhw7FLwp/Dp8K6w7XCllPCp11twqTCrMKSwqPCoMKAWMKIw5dmITwzYkFcw7hOwoAlw7/Cq03CkMK7wofDhcKzVFbDnHIzwojCpcK4VCsBEBPDo8Kaw6bDncO4w5bDmcKoFykEfMOjBBIHP8O9wpHDr1FtMjjDrsK8EXrDgsOCwojDlVVwGDfDksOLbcK1w63DrHPCiCPCk8Kvd0R0UsKowpVAVXDDgT8KEcODEBHChXY0AsOAJsK0RMOYBMKlHQTDgSNtc0PDu3BafX3Dj8OdBxUUw58GwpBAHTxIGTrDtxhewoFOBMKzasOaw7s7w7fDijjCg8OFwqfCiBQMH8OJZMKJJMOtRk7DmWEzTcKgw7VTw4HDisOlFCLDkyZiHGNYwqEDw58efMOhw68hflXDrTFswqLCj3/Di8OAdcKENsO9w6vDqRfDhHFgwpjCnGY0cAvDpnJpwoU+cnjDocKSMsKYw4RGJEzCu39DO311wrjDvmzChsO7JMKdD2HDrRY1w5PCnlnCiMO3wqp3w4luw4TDm8O3w53CpMO1wq4bGFzCl8KKVsOMAcO4EsOgw4XDrsKCVAoGRMK8EUIRGsO8M8K4w77Cg8O4w5rCjiI6w5dpGkVLwpzCqcKjZmJ0NXFRS0YNw5DCqsOJaTPCh8O3f8KXSxRrWjfCisOIwqlNw43CnsOEP8KPRMKAPMK8B8O9Y8OzCMOmQ8KtwrR7bRvClibDicOLwrMfH8O1UsKIw58KPsKvGcK3U3wgw5hPV8Kdw5Yfw5fDtTtpIMOhUMOiKGLCrCkYQsOYwog5wokFwoPCr0MATMKkIcONw5nDhGzCv0Y+Z2hkw6jCoMOWAMKhLwgDMcKnQ8OIw5x3w7d9YGEbPQgqwpBTOx0KwrfCjMO2wqN+w6NWRXfCoEbCr8OzHMKBOcKZccKAw7LDg0/Dl8K4LkVtOCDCpFZ3w7oUw5spw5DCkn9UwoTCkk0vwrh3YknDtEjDucKuw4DDvMK5w793w5/CjMKcSgvDgUkpUcOBa2lxw5IfwptNwq7CocOZwpUNbsOWwoTDmnccacOIw6sRdSzChMOJWcOHw6oMw71y", "w7FWCMKfRU7DgMKPP8Kjw65AwoE7wpkMwpcAeUk+fsKywoXDpA==", "wpPDkMKbdQHCvMK0ZsKkVcKlw5wMVMKra8OHw4TDoSXDhMKwwp3CrQEZUHHCskRlwqUL", "W8KXwq4Bd8OnNMOewo7CjMKZT8K+JlM4eMKAUcO3w7HCtmRww7A+w77Ciy5UbWM7", "wpXCj8O4w67DqcKyNjzCvMO5Qm/DmcOAMMKKJA==", "w7RDBMOCVxPCisKdYg==", "w5LCrcKiwqfDhQ==", "woZuw5PCiMOY", "wp5Ow5bCgMOFwqfCqA==", "6YW66J2E55iS5p2E", "PsKzw5jCiAY=", "wqTDgcKFYRg=", "w4fCtsK2wqDDoQ==", "wp4zbMKzwoTDkAA=", "w6dbBAg=", "w6A1VsOdw7c=", "w4HDqsOaN1I=", "w4jDmcOHHmrCisO8XsK+wo7Du8KTH8Oiw7g4wpLDgsKawpLCgMOPw48k", "ZcKNwo/Cv0c=", "ARLDucKe", "woAjRcOhRF/CpmdHw4E=", "wrx1w5xnTg==", "w6stEjJWHXd0woNRd8KKwoAC", "LHnCjsKUTg==", "VQoM", "wprCgcOlw67CtsKofXbCucO6VmvDk8KCPsKFeEbDpMKjwqwFQ3U=", "W8KXwq4EesK5JcOGwpLCkMKoAsKzeE0hasOeRA==", "woYoT8ORfg==", "w7kxSwFrCyIzw4hMP8OJwoBWYD0NGcOqJiM=", "eMK7w7vDnsOS", "DmRWw54=", "w7BMGMKKTjvCiQ==", "w7zDlsKQw5zCpQ==", "YEALJw==", "fcKhwoTCvkbCv8O2", "w6ckf8K2B8KzwoJPwrVaf8OWTcOC", "YsKjwrA8wpU=", "asKDSMKSAE4HwpNqIQ==", "XsKdwqcDSg==", "w6fDu8Kkw7fCmQ==", "wp7Cjg4ww5U=", "w5HDrMODBw==", "f8KWw5HDssOlwqEU", "wrQccMOWbw==", "w547esO1w7c=", "YcKjSDUj", "Y8KaVx4=", "woLDlcKYcQ==", "Um/Clg==", "A0Vowp7Dqw==", "wqNjw5RWUmEjw5FZZQ==", "w6QrRRNr", "acKJw6fDhsKm", "wofCv8KxM8KV", "wqLDmMKKYC4=", "Okd5", "wrF1wqlXA2DDisORW8Ot", "wrTDpMKRbQ0=", "WsKPw7DDksOP", "w5PDmMORHW3Dgg==", "RRUWwo1UVg==", "RcO4SsOJw5c=", "JRM8IAQ=", "wpXCkMOlw4rCrMO/Nw==", "wpURY3PCuQ==", "w7LCtsKywpnDlA==", "dmQPBsOuMMKnLg==", "UcK6wpUlwo0=", "wr7DpWDDs8O7czLCvA==", "ZcKIw5nDvsOp", "woM3UUzCrQ==", "T8OGH8Orw4E=", "wpdcwopiNQ==", "wqHCs8Ofw5XCog==", "wpzCmsOmw5HClA==", "w6F+V8KYIQ==", "w459KzfDnw==", "w6xjJT7Drg==", "w6vDocOWKEw=", "FzbDvcK6wojCnzRF", "w6h0VMKaH8K8wp1C", "acK6w5fDqSxpChs=", "wpI1VMOXekrCpA==", "woszbMKCwpfDikU=", "wqNjwrhhPXXDiA==", "AmB2wpzDkA==", "w4UNVyRL", "HMKBw4nCuSQ=", "wr3DocKMwpHDtw==", "Y08+IMOu", "w4fDiMOHKGzDnMK/KMK2worDpA==", "wqNjwrhoM2/DmcOc", "wqnCjhwmw4g=", "fMKRw6bDiiw=", "VcK6w5DDmsKh", "w6kzW8Ogw69yVQ==", "TE7CtMK9Ug==", "w4rCvh/CiDc=", "w6t3KXjDncK9wrtW", "WMORExkywoDCjcOy", "wozCtcKOEMK5", "MsK+w6zChBU=", "wrF1w4VpZG4xw4BSYg==", "W8OTB8OPw5zCtcOBFcOxwqw=", "w75HCMK8UxfCgMOONsK1", "wpBFw4bCqMOUwoTCosOMwqtYw5fCnMOlwpl/", "5Yqc6L+L6IaZ5ayY5Lu8wprDpCjCrg==", "TMKiw6jDgsKsbQ==", "XHHDpcKYwoDDk3oP", "NDY/", "wqfClcKiG8Ki", "wqZeZMORw612woYLaMOoclNhwrnDrQ==", "wq7Ciz4Zw5A=", "w4fCpgg=", "OcKtw6LCiRI=", "wrXDqmXDgcOc", "wrDCucO8w6fCi8OOBMO2K2XCm8K/", "VcKFw7bDtcKy", "FBAkJSE=", "wrfCpTcvw5MN", "wqjDjnXDlsOx", "YFUSI8Ok", "wp8RW2E=", "V8KywpsBwpA=", "w4laT8K0Ew==", "wqVlw5NXeXItw5pQ", "w4TCosKmwqDDsMOYV2l/", "e8K1QxI+w6Jo", "wo1ow5nCosOM", "fWQVKcO1LQ==", "LOe4n+e5mO++jQ==", "w74HVsOsw6c=", "wp3CusKtPMKH", "wqVlwozDgX0=", "dcKXw4/DvMKb", "SmPCusKjUw==", "LjjDgMKWVA==", "asKxwqUywoM=", "Kz3DucKsdA==", "wqHCmcOaw5/Cqg==", "cMOcDjAq", "fsK0QA==", "wpUFWVjCig==", "ZEVuwpzClw==", "w4BwLjPDpA==", "6K+y5Y2Z546g5aCP5Y2d6YSb5o6S6ZmA55i/5L6P5oOe5YmM5LiJ77ym", "w7nDpcOiMUvDtcKePsKFwq4=", "TcKHwrHChGzCtcOdw7Z4woU=", "Z8K/wozCsko=", "w6cYw73DnVY=", "XcOOfcK1YQ==", "wqrDsHjDksOg", "wpwRSnrCmMKg", "JcKow5XCjx8=", "wop6wo3DoGA=", "wq9mw7fCocO7", "wobDrcK+WjE=", "VsKIwrk=", "w7DDj8OdHV8=", "JcOyb8OgDg==", "KMK3wpbDlzc6", "Ii9LdQ==", "Z1E+OsOu", "PsKswrQ1wrw=", "NMKvGg==", "QcKiw6o=", "woInXG7Ctg==", "MsKUwqYf", "wrXCry4=", "w5fCrDzCqzAk", "w4PCuMKvwrbDqg==", "wrHDqDQew5hcESU=", "wrjDsGTDssOw", "LjTDmMKSSMOtLzY=", "wobDtR4aw55aNRE=", "FVpnwrnDtycEaA==", "e0p8", "bsKNwok=", "wrTDoWQ=", "eMOgLRUr", "DFVKw54Q", "w4fCrAFCw67CmA==", "wq8kYcK2woLDkWov", "YsKXw6bDo8OvwoccTA==", "UsKHwqIgwoVYwrF/", "LsKVwqsEwr0pf8OR", "w6p/Qw==", "w5V7dMKVNg==", "RcKaecKiGQ==", "w4IDw6HDk1s=", "w57CvMKdwp7DrQ==", "IMKOwpoiwqs=", "w79ZV8KEIw==", "WcKIwrAOf8Ow", "wrVUQ8O6w612wpsH", "ccK0SRQnw5k=", "W8Kiw47DhsKxanwo", "wpHDj8KFegnCqw==", "d8KIw4XDnsO5", "w5/CpjxRw6jCmcOUw7U=", "HEpIw5QFEg==", "w5jCu8KnwoPDow==", "w4HCpgZL", "44KW5o+n56WZ44G26K2D5Ya25aCV5Ym9w4cn6Le85Y6T5Li4w4TDq8OVw7PDvHs=", "wo/Csgw9w6E=", "wqvDqEoJw4tWFyc=", "TsK9w63DnsKqYHM7Q2TClMOdfMOsewQ=", "wqZ/wo3DvUpPaibDicOEwprCokPDo8O0wrfCv8O+w7lZwqw=", "K8Kmw5PCnw==", "CkzCrMKmQA==", "wo1Iwp/CpsOzw4TCtMONw6NMwonDg8Klw4QgwpElw4J/O8OCd8K0w40/M8Oswp1Cw5LCogtMw5RQ", "w4PDm8Kh", "X3DCgcKaWQ==", "woPDpR0bw70=", "w6kxR8Ovw7Q=", "HjzDvg==", "bMKcRMKDOg==", "V8OAEyEuw4/DkMKuwr1lw7AHwoxewqvDs10Cw6nDq8K+wr/DtF82w5PDqMKSVULCm8O7GTw7w4AIwqAFw7lwwrwoYg==", "cmAYOsO0NsO7N1oXBMOtw5g=", "NDTCpsKFW8OnKTQ=", "I8KCwrQ7wp8=", "GlLCucKgZhtnVMOBNQ==", "w4tgQ8KYCQ==", "ZcKMw4fDvsOzwokbTUs=", "wqRyXcObw60=", "SMKHwoY=", "woXCkMOz", "w4DCpiHClA==", "BsKXwqYBwo4=", "wrvDgMKiwprDtg==", "ZMKdw4HDosOvwoBS", "w4rCpQhK", "wrbCssOnw5TCnw==", "W8K3W8KqBQ==", "KMKjwqcOwq8=", "woA5f8KDwoTDjA==", "NC7DpsKEX8O2", "BsOkc8O6JsKh", "wq9nwonDpVgXIH0=", "LhUtw77DhUjCiVUgFjbCgTzClMKuXHYQwqjCu8OQTHPDgQ5zwqTCpcObPGMveBg1wrdOwo3Dr8OJdBvDvsO5w44/VyZlIg/DmsKOw5oEwpbDp1Q9woloAcOHeQ==", "SsKNwp8zwoNZ", "ZcKRw4/Dsg==", "d8K0TsKnBw==", "w6h7PkTDpsKxwrlA", "wrrDtWfDj8O7awTCpsO3cA==", "esKFw6TDkTM=", "w7jDnsKkw77CrA==", "w7hAH8KLUxLCiMOIO8Ksw6hOwoknw5gWwpRcYFlla8KqwpDCsjgXIGzCtilAG8OTMsOlETlowp7DicOHwo3CssKcIsKydMK/O8Knw5U=", "c8OdEice", "wqXDksKuQzw=", "Q8KnwrnCtEc=", "HUDCssK2Vhc=", "woFlw6hRag==", "L1FnwrDCrgUDFnXCmA==", "XMKrYRIV", "I8KXwpQRwpo=", "cEto", "44Oi6LeT5Y2m", "wpFSw4RJfQ==", "4oON4oKUd8OQ6L2T5pyZYQ==", "CjfDocKFdg==", "eMKVWcKkPlsF", "wr7DpWDDv8O1ciU=", "w5fCrCbCqDoowp/CnQ==", "wpBFw4bCqMOUwobCu8ORwr1O", "wogBXFrCicKxCXRQZQ==", "dmQPCsOgPA==", "wqdXf8Ohw60=", "w4IPw4zDrXw=", "ccKdw4HDmsOywoAGQw==", "CsKCwqY5wqAqWcOrw6rCpmLDqcOzw6HCgQ==", "wpsBW30=", "TcORFz08wpbCmg==", "wqbDqAkJw4tB", "esK6w5DDkA==", "eMO7NMObw5o=", "wo4ifsKQwqU=", "eMKqwo7CvErCmA==", "RcKHwp83wpZF", "w5TCuMKqwrDDpcOe", "wpRPw5zChsOcwpw=", "wp7DhcKFfhzCtw==", "wqhIXsOhw7t6", "UQpMw5MuC8Klw5ht", "fcKyw4LDlytSChpQwqw=", "w6ZibsK4FMK3", "XnzDo8KTwr7CmTFsw6XDg8OmYMO+P13DvEA=", "w7g2cR58VA==", "PMO0VBIow4lAB8OyIsOqAw==", "Q8Kiw7o=", "5p6i5Y6b54y3w6tSw5UvLx3DmTrCgyA4DsOQ5pWe5LiK5LqB5Lyq6L2A6KCq6YOo552L77yA", "w5fCiFZZw5vDhsOGw5NpT8KlwqrDrjA=", "WcOYBQ==", "LMOYUMOMGsKDwo1Ua0s=", "w4XDg8OF", "w4BqLcKwZDHCosOvBMKD", "wp8mdMKvwoI=", "woAzdsKhwoLDlg==", "W27Chw==", "TsKIwpICacOhJ8OpwobCkMKS", "b8Kzw48=", "6K2q5Y6T546Q5aOy5Y+A6Ye+5o6f6Zm455i85Ly45oKq5YqC5LqU77yh5LmD5ou15Ly16ICy5ouJ5p2A55uK5Yua776Y", "6K295Y+h54+M5aOk5Y2s6YSx5oyZ6Zq555iJ5L275oC65Ymc5LiC7769", "bMOheQ==", "R2xOwpLCozjDsi1Oag==", "w7xMCg==", "w7s6w6vDsUM=", "CMKJwqQ=", "w6pYBA==", "6KyJ5Y22542E5aKa5Y6w6YSQ56ie5Y2h5oqq6KG25L+T5oCT5Yme5Lid77+e", "w4gNbi5WflpOw61u", "wqtlwo8=", "Z0jCoMKMc3DCusOBwr/Dvw==", "wr9jw79LaWU=", "R8KYwpgYwp5Cwqs=", "w6hsHcKCUw==", "wrTDhhcD", "ZMK6wpPCsw==", "woA5fw==", "5Yqf6L+J6IaN5a+L5LiUwrTCr8OIw6Q=", "woQeQcO+fg==", "w6B9Og==", "5py16Ya9572D6ISK5a+F5LmmIcKmTe+9lA==", "d8K1UQ==", "wqvCvcOAw4HChMOCGw==", "wrDDrnDDnsOsSSY=", "M0Zo", "BsOgbcO6PA==", "w70gURZsWQ==", "6K+t5Yyu54ya5aCU5Y2F6YSh5omi5Yq077yo", "w6p/Vg==", "Ck/Cqg==", "w6HDpcKyw7zCng==", "wq1efsOpw6t3", "wr1kw6bCjMOQwo3ChMOC", "b8KhwpUlXA==", "w4TCssKqwrfDisOFSm5+w7A=", "woYY5p2x6YCq552Xw6jCi1zvvrjCjsOgw6oAOVJpFTzCtMKkwpt5w47Dn0QtPH7CknogE8O8UsKZw7AmaiI=", "esOqe8Oow6TCoGE=", "wp5Tw7zCisOZwo0=", "w6d3JEM=", "csKgwpLCnl/Ck8O4", "wrzDrmI=", "wpfDjsKd", "XMK8w6rDk8OYwqwnbA==", "GURKw4QB", "wqPDgMKu", "MhIr", "wr1kw7TCpMO+wrzCgcO3woFiw7LCvMOZwr9Fwq8Swq5oL8K2U8OHwqk=", "esKeWw==", "woXDq8KPwr7Dm8Ktw5/CsVkmw6LChmfCoHcnwpZBYV4kfQ5N", "w6Urw7c=", "w7VHDw7Dl8Kb", "wpnCnsK/GsK3wqFl", "wqwLR2LChcK3LF4=", "WMOREzU8woHCng==", "w4VYDAzDncKbw4HCmcK/", "wpI1VMO3ekrCoA==", "w5IqUBpxVH5Ww7w=", "wp/ClMOh", "w79LEMKbUwY=", "K+aXt+mWj+adpOWKsee6oue4uO+9hw==", "wogeQXnDgMOyAn9SesKLwo/Dt0I5cwc=", "w6NKUcKseFjClcOIacK3wr4Sw4pw", "5p+u5Y+X5428Vjlvw4nDulrDrcOXdXloCMKf5pa55LqD5Lme5Lys6L6+6KO66YGN556y772i", "5r2w5rey56GT5bSS6L6S5p2C77+s", "44CP5oyg56SX44Ox6K6o5YWn5aO+5YmWThHot6nlj5Hkuox9RsOBHzfDoQ==", "T31WwrTClA==", "5rmo56qd57+B5ays77+I", "5LmD5q+o5oiD5YuU5paB6ZSX776E", "56qD5Y665oiD5YuU772/6LSy5ayS6K2L5byx5YqT6Zqz5ous56WP55SM6K+o546D5aGy5Y2Z6YWB77+s772g", "BxTCg8KzThtrVMOwNi3DmMO/Wg==", "w4jCuxZVw67Cn8KXw7gr", "wqPDlcKOdC8=", "5ZCr56SY77+r", "5rOR5p2a5L6R5oCX5Yuf6Z+x6KeB6aKr5Y2D776r", "cMKjwooEc8OhH8ON", "YcO7e8O8w7bDri8Lw4jCuVNaWVjDgcKZwpXDrg==", "w5Apw4HDqGY=", "CsK7w6/CnS8=", "w59GEVfDvQ==", "wrwcV8OlbA==", "5Yuq5ZGY5byY5aSN5LiN5Yif77ys6K6L5Luo6KSQ57qK5p+k5Lis5YqS776G", "5ois5Yip6aO15Y2U55ix55ez5oqD5p2o776O", "WcOBIcODw5Y=", "ccKhwpY=", "wq5ow6PCusOswqTCkcO2wpF6w7o=", "U8KVwpbCuXM=", "XW8aO8OW", "w6N+Rw==", "eMKbd8K3Fw==", "R2xOwpLCoDHDoDFRaBk=", "CgzDrsK+VA==", "wr8zTVHCgg==", "HDzDrg==", "ETXDvcKQQw==", "w5TDu8OyHkk=", "w6UTfgFI", "VsK9wrsYwps=", "wqVmwq/DgU0=", "E8OEQ8ObBA==", "wrXCgsOZw47CqA==", "w4HDpsK2w7zCkg==", "woLDsC86w4c=", "JMKmw4Y=", "w415BWPDvw==", "wqluwo3DiVgBIA==", "w4Qww73DsX4=", "wqNjwrhtM3TDn8OH", "w61mcsKlNQ==", "w5oxZsOqw6k=", "w4LDr8OUAFs=", "wq1Udw==", "w78kUhQ=", "MgTlpK7ot6jDkF3ljKDlmoIiDw==", "wqrDpWDDkcOnaS4=", "IzPDusKnasOtCTBJw6PDisKbK8Kawq3Crg==", "w7VNGw==", "VmNGwqHClw==", "FV59wqbDjQ==", "w6I5SA==", "wpgqUErCqA==", "wrjDocKxwrzDnA==", "w5xeNxLDgw==", "LMKmw5PChTY=", "wqhjwqJCKGk=", "RcO1dcOlw4w=", "DmtHw5oB", "woBMaMOpw5c=", "wp0YecKrwpM=", "d0p7wqjCiTLDmQ==", "ZsKrw5fDlDA9UVxPw7FKwr9OwrbCnMKzw703", "wqjDgWTDkg==", "wr9+w5VBdU8i", "f8OECsOyw4HCtMO+Mg==", "V8K5woPCtHA=", "TnXCgsK7", "TMKDRcKJJw==", "w5vCssKqwrTDsMOC", "TMOjOcOOw5k=", "JEDCvsK5cw==", "wqdxw7vCo8O6", "c8KVQ8KHK0c=", "w4PDoMK7w7jCrQ==", "YXQIJg==", "w5QsVsOow70=", "V8KmwpA5wpI=", "w6NzUMKxAA==", "worDiQ0cw6U=", "U8ObAA==", "KsK4w63CoTE=", "w6FSFwPDlcKKw6o=", "CsKCwqYQwqgyVA==", "w796HcK3eA==", "EB/Dn8KPV8OhCzY=", "S8KzwrcAew==", "w455Eh3DrQ==", "HDbDp8KQwpPCmQ==", "w77CohVcw50=", "W8OTB8Oow4bCtMOa", "HB/DhcKOSg==", "wpbDj8KZcCk=", "w6PDlMKuw7w=", "w7vDu8K6w7DCksOvBg==", "wqXCpcO9w5DCgg==", "w6hkF0bDhA==", "w7d2Ew4=", "wqhVdMOrw6dQwpM=", "IsKIw6vCqg0=", "c0Vrwq7CmQ==", "Oh0pEB0=", "UFHCoQ==", "w7/jgr3otpXljpk=", "wo7CqyMxw6A=", "ZcOgaA==", "DMOdecO9PQ==", "wrYsYMKRwoI=", "P0Z6wqzDuwco", "w4s8w6TDt3k=", "wqDDv8KawrbDvg==", "woYKTGzClMKdAA==", "wr3Dr2bDksOV", "wrRSw4vClcOJwofChMO2", "woUlVsKpwpLDmw==", "woTDjsKrwpTDkg==", "OSnDssKWTsOrbDtJ", "w7jCnSNCw5U=", "w789dBt7", "wqwSS2bCog==", "OjDDpMKYwqM=", "bsOHBiUF", "wq1lwo7Di3I=", "w75jNhPDkA==", "Y8K8w4TDqgQ=", "c1NHwqfCpA==", "w71UNsKZQA==", "AGJfwrPDlQ==", "dMKxwowAWw==", "w7jDmMO5An4=", "woMLTw==", "w4gVTsOIw4o=", "DMO/Y8ObOA==", "GsKGwrsA", "wp0XaMKv", "w5rCnQZIw78=", "wptPw5U=", "bFd8wqXCuw==", "AR3DqMKawoI=", "w7fDvsO+J1A=", "CERPw4M=", "wrXDpXrDnMOgbg==", "w5HDo8OSA3w=", "CER2w743", "P8Kow7HCpSQ=", "w7DDocOxBWE=", "OcKHw4DCgRI=", "ZMObHMO0w5Y=", "KsK+w7PCnjI=", "wrDClBMdw4o=", "WsODNRA+", "wqNqwo3DrlE=", "W8ObCTQ=", "w4zDgsOU", "VMOnMSMf", "w6Qlw6A=", "wpkPfMKewoE=", "DsKNw6/ChAc=", "wp7CmsO2", "w57CqD/ChQ==", "w5lw5aSR6La2Oh7ljZ7lm6ITwpU=", "aMK2w43DhS9rBw==", "MTNIdMK0fMOvaAc=", "FcO6B8OKdeW8r+Wmq+mhsOWIvOOBhQ==", "5q+36K+n5rOzDicq", "TU3Ch8KEbQ==", "wpvDgcKNYSk=", "w63DrMOVF2s=", "5b6G5ae85oiE6KCr6LaS5YyJ", "F1fCssK3WA==", "woYCd8OnYg==", "woMJcMO3dQ==", "6K+35Yuj5beV5paX5omQ6IKo5peu6LWO5Y2x6Z2L6KSN6K6N5rKN77yi", "U8ORCTYpwp0=", "UmXCn8K0SVc=", "dcKUecK5PA==", "w6TCj8KrwpbDiA==", "VsKkbMKSDA==", "BMOeYMO+LQ==", "wrE5WsOrQg==", "w7VHEsKIQhw=", "XWvCuMK9WVrClQ==", "wqvClMO7w4fCtg==", "wp1bwqPDjHw=", "e8OwAsOzw4E=", "woUucm/Ctg==", "wqZdRsONw5Q=", "w5HDq8O6C0o=", "wpk/Rw==", "woV0wot/Pg==", "wrzDm8K7wpbDtsKew7nChXk=", "RMO9F8Okw4E=", "dsKUw4fDgjc=", "wpjCtxYKw44=", "VlHCmMKKfA==", "NcKJwrs1wpo=", "GynDjMK8WA==", "wpXCkMOlw5bCqsOnICo=", "6Iy45Y+HasKT5paG6ZSm5aeY6LSP", "wpQ5QcO7Qw==", "w617PFjDqg==", "csKRWcKDNw==", "wqxaZMOtw7c=", "w7BMH8KDQxDCisOT", "wprDr2DDqsOB", "wr3Dnei0t+i8lOi2ouWNnQ==", "w40hYMOmw6c=", "wolJUsO5w5I=", "ccKqYCMU", "wpYuTU/Cig==", "w7dBDhPDoA==", "woPDrsKKdA0=", "U8OFNCE8wpbCmg==", "wqABbMObSw==", "GcO/Zg==", "wrnCuhgpw4Y=", "w6N+NVjDiA==", "IB00Bw==", "w4BrPcKZVQ==", "w7hwScKj", "w4dFJD3Dlg==", "JV18wrrDtzonVXY=", "CsO6w5k=", "ScKSwrweasO2PMOEwoA=", "w4hvKsK6Qg==", "wqJkwp4=", "wptjw4rCr8OF", "w47Cpwthw7vChMOf", "wpfDjsKPXQnCq8Kw", "w4bCg8Ktwr7DoQ==", "w5c3RcO9w70=", "FD7DocKOQw==", "GktCw7MFEsOu", "wqluwo3DmVAYIA==", "XcKCwqo5d8OpMA==", "w6ARVhx9", "P0Z9wqXDtiwrSA==", "6Kyk5YiD5bei5pWu5oqJ5bet57im5py/77y2", "wq5NwrxrKQ==", "wqZ3w6vCnMOo", "w5TCgMKFwrvDqQ==", "w6Pnuafnu7nvvqE=", "jSsjiaytgmi.EJcNoBmX.Zvzh6INEh=="];
  }();
if (function (_0x296ed8, _0x23950e, _0x4ba96f) {
  function _0x46776c(_0x3cd582, _0x3031ae, _0x196b24, _0x485284, _0x48b48f, _0x49d3aa) {
    _0x3031ae = _0x3031ae >> 8;
    _0x48b48f = "po";
    var _0x3e6558 = "shift",
      _0x107274 = "push",
      _0x49d3aa = "‮";
    if (_0x3031ae < _0x3cd582) {
      while (--_0x3cd582) {
        _0x485284 = _0x296ed8[_0x3e6558]();
        if (_0x3031ae === _0x3cd582 && _0x49d3aa === "‮" && _0x49d3aa.length === 1) {
          _0x3031ae = _0x485284;
          _0x196b24 = _0x296ed8[_0x48b48f + "p"]();
        } else if (_0x3031ae && _0x196b24.replace(/[SytgEJNBXZzhINEh=]/g, "") === _0x3031ae) {
          _0x296ed8[_0x107274](_0x485284);
        }
      }
      _0x296ed8[_0x107274](_0x296ed8[_0x3e6558]());
    }
    return 1360649;
  }
  return _0x46776c(++_0x23950e, _0x4ba96f) >> _0x23950e ^ _0x4ba96f;
}(_0x5555, 481, 123136), _0x5555) {
  _0xod2_ = _0x5555.length ^ 481;
}
function _0x5052(_0x2f02f9, _0x4a2e48) {
  _0x2f02f9 = ~~"0x".concat(_0x2f02f9.slice(1));
  var _0x160757 = _0x5555[_0x2f02f9];
  if (_0x5052.FClwrp === undefined) {
    (function () {
      var _0xf475db = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var _0x4a86dc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0xf475db.atob || (_0xf475db.atob = function (_0x32391e) {
        var _0x56f15e = String(_0x32391e).replace(/=+$/, "");
        for (var _0x5c3900 = 0, _0x36b3b1, _0x3a7424, _0x6d808b = 0, _0x28c133 = ""; _0x3a7424 = _0x56f15e.charAt(_0x6d808b++); ~_0x3a7424 && (_0x36b3b1 = _0x5c3900 % 4 ? _0x36b3b1 * 64 + _0x3a7424 : _0x3a7424, _0x5c3900++ % 4) ? _0x28c133 += String.fromCharCode(255 & _0x36b3b1 >> (-2 * _0x5c3900 & 6)) : 0) {
          _0x3a7424 = _0x4a86dc.indexOf(_0x3a7424);
        }
        return _0x28c133;
      });
    })();
    function _0x41d183(_0x8e39a1, _0x4a2e48) {
      var _0x5d6c4b = [],
        _0x3c9672 = 0,
        _0xa9b0f5,
        _0x304d98 = "",
        _0x4df264 = "";
      _0x8e39a1 = atob(_0x8e39a1);
      for (var _0x5b4ee7 = 0, _0x2d826d = _0x8e39a1.length; _0x5b4ee7 < _0x2d826d; _0x5b4ee7++) {
        _0x4df264 += "%" + ("00" + _0x8e39a1.charCodeAt(_0x5b4ee7).toString(16)).slice(-2);
      }
      _0x8e39a1 = decodeURIComponent(_0x4df264);
      for (var _0x58f68e = 0; _0x58f68e < 256; _0x58f68e++) {
        _0x5d6c4b[_0x58f68e] = _0x58f68e;
      }
      for (_0x58f68e = 0; _0x58f68e < 256; _0x58f68e++) {
        _0x3c9672 = (_0x3c9672 + _0x5d6c4b[_0x58f68e] + _0x4a2e48.charCodeAt(_0x58f68e % _0x4a2e48.length)) % 256;
        _0xa9b0f5 = _0x5d6c4b[_0x58f68e];
        _0x5d6c4b[_0x58f68e] = _0x5d6c4b[_0x3c9672];
        _0x5d6c4b[_0x3c9672] = _0xa9b0f5;
      }
      _0x58f68e = 0;
      _0x3c9672 = 0;
      for (var _0x1a99e9 = 0; _0x1a99e9 < _0x8e39a1.length; _0x1a99e9++) {
        _0x58f68e = (_0x58f68e + 1) % 256;
        _0x3c9672 = (_0x3c9672 + _0x5d6c4b[_0x58f68e]) % 256;
        _0xa9b0f5 = _0x5d6c4b[_0x58f68e];
        _0x5d6c4b[_0x58f68e] = _0x5d6c4b[_0x3c9672];
        _0x5d6c4b[_0x3c9672] = _0xa9b0f5;
        _0x304d98 += String.fromCharCode(_0x8e39a1.charCodeAt(_0x1a99e9) ^ _0x5d6c4b[(_0x5d6c4b[_0x58f68e] + _0x5d6c4b[_0x3c9672]) % 256]);
      }
      return _0x304d98;
    }
    _0x5052.lkXTSw = _0x41d183;
    _0x5052.ufPkHL = {};
    _0x5052.FClwrp = true;
  }
  var _0x30e73f = _0x5052.ufPkHL[_0x2f02f9];
  if (_0x30e73f === undefined) {
    if (_0x5052.IjImuK === undefined) {
      _0x5052.IjImuK = true;
    }
    _0x160757 = _0x5052.lkXTSw(_0x160757, _0x4a2e48);
    _0x5052.ufPkHL[_0x2f02f9] = _0x160757;
  } else {
    _0x160757 = _0x30e73f;
  }
  return _0x160757;
}
const jdCookieNode = $[_0x5052("‫0", "C97v")]() ? require("./jdCookie.js") : "";
const smashUtils = require(_0x5052("‫1", "8sVZ"))[_0x5052("‫2", "Am3d")];
let apiList = $[_0x5052("‮3", "YiMU")]() ? require(_0x5052("‮4", "8uLF")).apiList : [];
let notify = "";
let jdNotify = true;
try {
  notify = $[_0x5052("‫5", "0uP&")]() ? require(_0x5052("‫6", "41@J")) : "";
} catch (_0x2a449a) {
  jdNotify = false;
  console[_0x5052("‮7", "DR0N")](_0x5052("‫8", "mKg6"));
}
let tryNum = 4;
let maxQq = 20;
let maxXc = 3;
let qqjgTime = 250;
let maxAccount = 8;
let ycTime = 300;
let cookiesArr = [],
  cookie = "";
let canTaskFlag = [];
let TgCkArray = [];
let lqSucArray = [];
let AllEendCode = _0x5052("‮9", "LCu@");
let PEendCode = "|A1|A12|A13|A19|A26|";
let JDTimes = new Date().getTime();
let apiArray = [];
let nowIndex = 0;
let JDTimeJg = 0;
let yhqAPiHasSuccess = {};
let nextHour = 0;
let xtTkSign = "";
let ckerror = [];
let removeYhq = [];
let nowRunYhq = "";
if (process[_0x5052("‫a", "2qsx")][_0x5052("‫b", "RzFS")] && process[_0x5052("‫c", ")y5e")][_0x5052("‮d", "W^X#")][_0x5052("‮e", "^Xpb")](",")[_0x5052("‫f", "^Xpb")] >= 1) {
  if (process[_0x5052("‫10", "Mv*p")].YHQ_REMOVE[_0x5052("‮11", "cnfr")]() == _0x5052("‮12", "Am3d")) {
    console.log(_0x5052("‮13", "0uP&"));
    apiList = [];
  } else {
    console.log(_0x5052("‮14", "[4nm") + process[_0x5052("‫15", "QDK4")][_0x5052("‮16", "[]v%")]);
    removeYhq = process[_0x5052("‮17", "W^X#")].YHQ_REMOVE[_0x5052("‫18", "mKg6")](",");
  }
}
if (process[_0x5052("‫19", "8fKk")].YHQ_NOWRUN) {
  console[_0x5052("‮1a", "[4nm")](_0x5052("‮1b", "08T(") + process.env[_0x5052("‫1c", "0uP&")]);
  nowRunYhq = process[_0x5052("‫1d", "PXY&")][_0x5052("‮1e", "Mv*p")];
}
try {
  const apiListMy = $[_0x5052("‫1f", "Yb33")]() ? require("./jdYhqApiListMy.js")[_0x5052("‮20", "jJF3")] : [];
  if (apiListMy[_0x5052("‫f", "^Xpb")] > 0) {
    for (var alm in apiListMy) {
      if (apiListMy[alm][_0x5052("‫21", "W^X#")] && apiListMy[alm][_0x5052("‮22", "9QYx")] && apiListMy[alm].qTime) {
        apiList[_0x5052("‮23", "9w!q")](apiListMy[alm]);
        console[_0x5052("‮24", "^Xpb")](_0x5052("‮25", "TPk]") + apiListMy[alm][_0x5052("‫26", "Epv]")]);
      }
    }
  }
} catch (_0x320ecd) {
  console[_0x5052("‫27", "]bBl")](_0x5052("‫28", "VmNE"));
}
if (process[_0x5052("‫29", "41@J")][_0x5052("‫2a", "]S3K")] && process.env[_0x5052("‫2a", "]S3K")][_0x5052("‫2b", "5EPH")](",") > -1 && process[_0x5052("‫2c", "8PzM")].YHQ_API[_0x5052("‫2d", "RzFS")](",")[_0x5052("‫2e", "0uP&")] >= 5) {
  console.log(_0x5052("‫2f", "]#^o") + process[_0x5052("‫30", "YiMU")].YHQ_API);
  let YHQ_API_ARR = process[_0x5052("‮31", "[J&F")].YHQ_API[_0x5052("‮32", "Go#(")](",");
  tryNum = parseInt(YHQ_API_ARR[0]);
  if (parseInt(YHQ_API_ARR[1]) > maxQq) {
    maxQq = parseInt(YHQ_API_ARR[1]);
  }
  maxXc = parseInt(YHQ_API_ARR[2]);
  qqjgTime = parseInt(YHQ_API_ARR[3]);
  maxAccount = parseInt(YHQ_API_ARR[4]);
  if (YHQ_API_ARR[_0x5052("‮33", "C97v")] >= 6) {
    ycTime = parseInt(YHQ_API_ARR[5]);
  }
}
function myNotice(_0x53e746) {
  var _0x3387dc = {
    "KsWlI": _0x5052("‫34", "UtjC"),
    "UFKHB": "nJfAu"
  };
  if (jdNotify) {
    if (_0x3387dc[_0x5052("‫35", "cnfr")] === "nJfAu") {
      notify[_0x5052("‮36", "8l3E")]($.name, _0x53e746, {}, _0x5052("‮37", "]bBl"));
    } else {
      $[_0x5052("‫38", "QDK4")](JDTimeJg, _0x3387dc.KsWlI);
    }
  }
}
if ($[_0x5052("‫39", "UtjC")]()) {
  Object[_0x5052("‮3a", "]bBl")](jdCookieNode)[_0x5052("‮3b", "9w!q")](_0x517bd2 => {
    cookiesArr.push(jdCookieNode[_0x517bd2]);
  });
  if (process[_0x5052("‮3c", "5EPH")].JD_DEBUG && process[_0x5052("‫3d", "08T(")][_0x5052("‫3e", "]#^o")] === _0x5052("‮3f", "8sVZ")) console[_0x5052("‮40", "*KQ9")] = () => {};
  if (process[_0x5052("‮41", "FG4b")][_0x5052("‫42", "UtjC")]) process[_0x5052("‫43", "VmNE")][_0x5052("‫44", "*KQ9")][_0x5052("‮32", "Go#(")]("&")[_0x5052("‫45", "mKg6")]((_0x3fd34a, _0x3f53c8) => Number(_0x3fd34a) === 0 ? cookiesArr = [] : cookiesArr[_0x5052("‮46", "[4nm")](Number(_0x3fd34a) - 1 - _0x3f53c8, 1));
} else {
  cookiesArr = [$[_0x5052("‫47", "we*^")](_0x5052("‮48", "^KsX")), $[_0x5052("‫49", "TPk]")](_0x5052("‮4a", "[4nm")), ...jsonParse($[_0x5052("‮4b", "Epv]")](_0x5052("‫4c", "0uP&")) || "[]")[_0x5052("‫4d", "]S3K")](_0x94f8 => _0x94f8.cookie)][_0x5052("‮4e", "W^X#")](_0x461d9c => !!_0x461d9c);
}
!(async () => {
  var _0x39531d = {
    "PSjMa": function (_0x3fba8b, _0x2be444) {
      return _0x3fba8b + _0x2be444;
    },
    "Ycmrc": function (_0x5818f1, _0xda2fb0) {
      return _0x5818f1 + _0xda2fb0;
    },
    "gkZWH": _0x5052("‫4f", "4ch@"),
    "tVApP": function (_0x23e7d7, _0x2568fb) {
      return _0x23e7d7 + _0x2568fb;
    },
    "ZzxWt": function (_0x1f384c) {
      return _0x1f384c();
    },
    "mqSmx": _0x5052("‮50", "^KsX"),
    "fTBHL": _0x5052("‮51", "W^X#"),
    "lbpfp": _0x5052("‫52", "T#W%"),
    "HNqzY": function (_0x5739b9, _0x3cb9bf) {
      return _0x5739b9 > _0x3cb9bf;
    },
    "UkzyG": function (_0x33a0f2, _0x241037) {
      return _0x33a0f2 + _0x241037;
    },
    "Sshix": function (_0x362808, _0x491941) {
      return _0x362808(_0x491941);
    },
    "yMxnu": function (_0x46a34f, _0x4ec614) {
      return _0x46a34f + _0x4ec614;
    },
    "CvcoN": function (_0x11a461) {
      return _0x11a461();
    },
    "oPSIf": function (_0x3720ba, _0x26cdd3) {
      return _0x3720ba > _0x26cdd3;
    },
    "doriA": function (_0x15e69c, _0x34c430) {
      return _0x15e69c > _0x34c430;
    },
    "wNxCD": function (_0x5b7f89, _0x507572) {
      return _0x5b7f89 + _0x507572;
    },
    "rschJ": "加载自定义API:",
    "GZvbM": "AVVVQ",
    "LnauW": "ecaQt",
    "bwRrE": function (_0x4becab, _0x4ae7e3) {
      return _0x4becab === _0x4ae7e3;
    },
    "Knvvy": "请增加环境变量YHQ_QL_SIGN！",
    "pUJLl": function (_0x5334cc, _0x212e84, _0x388437) {
      return _0x5334cc(_0x212e84, _0x388437);
    },
    "GwHPm": _0x5052("‫53", "^!R*"),
    "AkXSM": _0x5052("‫54", "VmNE"),
    "LzziI": function (_0x4cccd8, _0x465437) {
      return _0x4cccd8 == _0x465437;
    },
    "TgINg": _0x5052("‮55", "[]v%"),
    "bBgnB": "HmpgO",
    "HGYlf": _0x5052("‫56", "8fKk"),
    "yywIi": _0x5052("‮57", "mtv9"),
    "ZiTuw": ":00:00",
    "AwxgH": function (_0x1185a0, _0x35cce2) {
      return _0x1185a0 + _0x35cce2;
    },
    "AovlP": _0x5052("‫58", "mtv9"),
    "lPvsT": _0x5052("‮59", "[J&F"),
    "Kovyj": _0x5052("‮5a", "LCu@"),
    "qYfUH": function (_0x42b4b5, _0x46f0bb) {
      return _0x42b4b5 - _0x46f0bb;
    },
    "KabkJ": function (_0x4b0729, _0x2e894d) {
      return _0x4b0729(_0x2e894d);
    },
    "PQIFG": function (_0xea6d08, _0x27f2bc) {
      return _0xea6d08 < _0x27f2bc;
    },
    "NDzJo": _0x5052("‫5b", "08T("),
    "ZzyLs": _0x5052("‮5c", "jJF3"),
    "ONjvO": function (_0xf97b51, _0x578d14) {
      return _0xf97b51 <= _0x578d14;
    },
    "bqLMF": _0x5052("‮5d", "8uLF"),
    "QsatX": _0x5052("‫5e", "cnfr"),
    "FDNhp": "yhqAPiHasSuccess",
    "WPlNG": _0x5052("‮5f", "QDK4"),
    "dvJvv": function (_0x4275df, _0x2d21ce) {
      return _0x4275df > _0x2d21ce;
    },
    "jAJFz": _0x5052("‮60", "mKg6"),
    "YhWYW": _0x5052("‫61", "mtv9"),
    "nxKjc": _0x5052("‫62", "]bBl"),
    "JcmoD": function (_0x4d4ecd, _0x313eef) {
      return _0x4d4ecd != _0x313eef;
    },
    "cnwFK": function (_0x54ec6f, _0x4fb59e) {
      return _0x54ec6f + _0x4fb59e;
    },
    "xTUtd": function (_0x303ce0, _0x384f60) {
      return _0x303ce0 * _0x384f60;
    },
    "mcgNG": function (_0x2a17e8, _0x267ef9) {
      return _0x2a17e8 + _0x267ef9;
    },
    "mwXjU": function (_0x3a5afc, _0x4b5e27) {
      return _0x3a5afc(_0x4b5e27);
    },
    "bHWwh": function (_0x27722a, _0x3e272e) {
      return _0x27722a / _0x3e272e;
    },
    "VJAzV": function (_0x46aa90, _0x5ac28d) {
      return _0x46aa90 !== _0x5ac28d;
    },
    "XuJlg": _0x5052("‮63", "Epv]"),
    "FCalD": function (_0x27a8b6, _0x89d2da) {
      return _0x27a8b6 / _0x89d2da;
    },
    "yobHp": _0x5052("‫64", "^Xpb"),
    "WSMII": function (_0x3da841, _0x1982fe) {
      return _0x3da841(_0x1982fe);
    },
    "waPIS": function (_0x4a0ebd, _0x335ea0) {
      return _0x4a0ebd + _0x335ea0;
    },
    "PLBkx": "\n券【",
    "Xmovc": _0x5052("‫65", "2qsx"),
    "kTJUm": _0x5052("‫66", "2qsx"),
    "kSVrB": "\n************************\n",
    "uYdXw": function (_0x52ac73, _0x3d9849) {
      return _0x52ac73(_0x3d9849);
    }
  };
  if (process[_0x5052("‮67", "9w!q")][_0x5052("‮68", "UtjC")]) {
    if (_0x39531d[_0x5052("‮69", "9w!q")] === _0x39531d[_0x5052("‫6a", "4ch@")]) {
      console[_0x5052("‮6b", "YiMU")](_0x39531d.PSjMa(_0x39531d.Ycmrc(timeFormat(), _0x39531d[_0x5052("‮6c", "VmNE")]), retMsg));
    } else {
      xtTkSign = process[_0x5052("‫43", "VmNE")][_0x5052("‫6d", "[]v%")];
    }
  } else {
    if (_0x39531d.bwRrE(_0x5052("‫6e", "R35v"), _0x5052("‫6f", "^KsX"))) {
      console[_0x5052("‫70", "8uLF")](_0x39531d[_0x5052("‫71", "R35v")]);
      myNotice(_0x39531d.Knvvy);
      return;
    } else {
      canTaskFlag[_0x2bde90] = false;
      console.log(_0x39531d[_0x5052("‫72", ")y5e")](_0x39531d[_0x5052("‫73", "0uP&")](_0x39531d.ZzxWt(timeFormat), ":"), retMsg));
    }
  }
  if (!_0x39531d[_0x5052("‫74", "jJF3")](getQmExpireDate, xtTkSign, 2)) {
    if ("kmVLt" !== _0x5052("‫75", "PXY&")) {
      return {
        "url": apiArray[_0x2bde90].qApi,
        "headers": {
          "User-Agent": $.user_agent,
          "accept-encoding": _0x39531d.mqSmx,
          "accept-language": _0x39531d[_0x5052("‮76", "RzFS")],
          "Cookie": cookiesArr[ckindex]
        }
      };
    } else {
      console.log(_0x39531d[_0x5052("‮77", "]S3K")]);
      _0x39531d[_0x5052("‫78", "Go#(")](myNotice, _0x39531d[_0x5052("‫79", "9QYx")]);
      return;
    }
  }
  if (!cookiesArr[0]) {
    console[_0x5052("‮7a", "mtv9")](_0x39531d[_0x5052("‮7b", "]bBl")]);
    return;
  }
  if (new Date()[_0x5052("‮7c", "PXY&")]() == 1 && _0x39531d[_0x5052("‮7d", "mKg6")](new Date()[_0x5052("‫7e", "T#W%")](), 0)) {
    if (_0x39531d[_0x5052("‮7f", "YiMU")](_0x39531d[_0x5052("‮80", "FCiy")], _0x39531d[_0x5052("‫81", ")y5e")])) {
      $[_0x5052("‫82", "C97v")]("", "❌ " + $[_0x5052("‫83", "0uP&")] + _0x5052("‮84", "[]v%") + e + "!", "");
    } else {
      $[_0x5052("‫85", "5EPH")]({}, _0x5052("‫86", "R35v"));
      console[_0x5052("‫87", "W^X#")](_0x39531d[_0x5052("‫88", "[]v%")]);
    }
  }
  nextHour = _0x39531d[_0x5052("‫89", "8PzM")](nextHourF);
  console[_0x5052("‮8a", "FCiy")](_0x39531d[_0x5052("‫8b", "^KsX")](_0x39531d[_0x5052("‫8c", "*KQ9")](_0x39531d.yywIi, nextHour), _0x39531d[_0x5052("‮8d", "[4nm")]));
  for (var _0x494373 in apiList) {
    if (nowRunYhq && _0x39531d[_0x5052("‫8e", "mtv9")](nowRunYhq[_0x5052("‫8f", "T#W%")], 0) && _0x39531d[_0x5052("‫90", "QDK4")](nowRunYhq, apiList[_0x494373][_0x5052("‫91", "8sVZ")])) {
      console.log(_0x39531d[_0x5052("‮92", "C97v")](_0x39531d.AovlP, apiList[_0x494373][_0x5052("‫93", "^Xpb")]));
      if (apiList[_0x494373].qApi[_0x5052("‫94", "[]v%")](_0x5052("‫95", "Am3d")) > -1 || apiList[_0x494373][_0x5052("‮96", "5EPH")][_0x5052("‮97", "Yb33")](_0x39531d.lPvsT) > -1) {
        $[_0x5052("‫98", "2qsx")] = $.isNode() ? require(_0x39531d.Kovyj) : {};
        await _0x39531d[_0x5052("‮99", "9w!q")](requestAlgo);
      }
      apiArray[_0x5052("‮9a", "Mv*p")](apiList[_0x494373]);
      _0x39531d[_0x5052("‫9b", "VmNE")](doAPIList, _0x39531d.qYfUH(apiArray[_0x5052("‫9c", "8l3E")], 1));
      continue;
    }
    if (_0x39531d[_0x5052("‫9d", "2qsx")](checkYhq, apiList[_0x494373], nextHour) && !_0x39531d[_0x5052("‫9e", "[J&F")](isRemoveYhqF, apiList[_0x494373]) && _0x39531d[_0x5052("‫9f", "UtjC")](apiArray[_0x5052("‮a0", "VmNE")], maxQq)) {
      if (_0x39531d.NDzJo === _0x5052("‫a1", "Go#(")) {
        apiArray[_0x5052("‫a2", "4ch@")](apiList[_0x494373]);
        console.log(_0x39531d[_0x5052("‫a3", "FCiy")] + apiList[_0x494373][_0x5052("‫a4", "jJF3")]);
      } else {
        jdNotify = false;
        console.log(_0x39531d[_0x5052("‫a5", "YiMU")]);
      }
    }
  }
  if (_0x39531d[_0x5052("‮a6", "9QYx")](apiArray.length, 0)) {
    console[_0x5052("‫a7", "TPk]")](_0x39531d[_0x5052("‮a8", "mtv9")]);
    return;
  }
  if ($[_0x5052("‮a9", "[4nm")](_0x39531d.QsatX) && $[_0x5052("‮aa", "8fKk")]("JDTimeJg") != 0) {
    if (_0x39531d.bwRrE(_0x5052("‮ab", "W^X#"), "fXaXN")) {
      JDTimeJg = $.getdata(_0x5052("‫ac", "R35v"));
    } else {
      let _0x254b25 = entity[_0x5052("‫ad", "cnfr")].split(",");
      if (_0x39531d[_0x5052("‮ae", "[4nm")](_0x254b25[_0x5052("‫af", "8uLF")], 0) && _0x254b25.includes(_0x39531d[_0x5052("‫b0", "LCu@")](hour, ""))) {
        return true;
      }
    }
  }
  if ($[_0x5052("‮b1", "2qsx")](_0x39531d[_0x5052("‫b2", "R35v")])) {
    yhqAPiHasSuccess = $.getjson("yhqAPiHasSuccess");
  }
  for (let _0x2bde90 in apiArray) {
    if (_0x39531d[_0x5052("‮b3", "08T(")](apiArray[_0x2bde90][_0x5052("‫b4", "Go#(")][_0x5052("‮b5", "Go#(")](_0x39531d[_0x5052("‮b6", "]S3K")]), -1) || _0x39531d[_0x5052("‫b7", "]bBl")](apiArray[_0x2bde90][_0x5052("‫b8", "[4nm")][_0x5052("‮b9", "C97v")]("h5_awake_wxapp"), -1)) {
      if (_0x39531d.bwRrE(_0x39531d[_0x5052("‫ba", "mtv9")], _0x39531d.YhWYW)) {
        cookie = cookiesArr[ckindex];
        let _0x5d3903 = _0x39531d.Sshix(decodeURIComponent, cookie[_0x5052("‮bb", "[]v%")](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x5052("‫bc", "FG4b")](/pt_pin=([^; ]+)(?=;?)/)[1]);
        console.log(_0x5052("‫bd", "R35v") + apiArray[_0x2bde90].qName + _0x5052("‫be", ")y5e") + _0x39531d[_0x5052("‮bf", "FpQe")](ckindex, 1) + "】" + _0x5d3903 + "*");
        console[_0x5052("‫c0", "QDK4")](_0x39531d[_0x5052("‫c1", "RzFS")](_0x39531d[_0x5052("‮c2", "^Xpb")](timeFormat), ":") + data);
        if (_0x39531d.HNqzY(data[_0x5052("‮c3", "8PzM")]("成功"), -1)) {
          lqSucArray[_0x2bde90].push(ckindex);
          yhqAPiHasSuccess[apiArray[_0x2bde90].qName][_0x5d3903] = _0x39531d[_0x5052("‫c4", "mKg6")](getNowDate);
        } else if (_0x39531d[_0x5052("‮c5", "*KQ9")](data[_0x5052("‮c6", "^KsX")]("再来"), -1) || _0x39531d[_0x5052("‮c7", "5EPH")](data[_0x5052("‮97", "Yb33")]("抢光"), -1)) {
          canTaskFlag[_0x2bde90] = false;
        }
      } else {
        try {
          $[_0x5052("‫c8", "UtjC")] = $[_0x5052("‫c9", "^Xpb")]() ? _0x39531d[_0x5052("‮ca", "*KQ9")](require, _0x5052("‮cb", "R35v")) : {};
          await _0x39531d.CvcoN(requestAlgo);
          break;
        } catch (_0x54108c) {
          if (_0x5052("‮cc", "LCu@") === _0x39531d[_0x5052("‮cd", "0uP&")]) {
            break;
          } else {
            yhqAPiHasSuccess[apiArray[_0x2bde90].qName] = {};
          }
        }
      }
    }
  }
  await _0x39531d[_0x5052("‫ce", "^KsX")](getJDTime);
  if (_0x39531d[_0x5052("‮cf", "8uLF")](JDTimeJg, 0)) {
    $.setdata(JDTimeJg, _0x39531d[_0x5052("‫d0", "TPk]")]);
  }
  let _0x227a54 = _0x39531d[_0x5052("‮d1", "PXY&")](jgNextHourF(), JDTimeJg) - ycTime;
  if (_0x39531d.dvJvv(_0x227a54, _0x39531d[_0x5052("‫d2", "[4nm")](10, 60) * 1000)) {
    console.log(_0x39531d[_0x5052("‮d3", "Am3d")](_0x39531d[_0x5052("‮d4", "[]v%")](parseInt, _0x39531d.bHWwh(_0x227a54 / 60, 1000)), "分后才开始！"));
    return;
  }
  if (_0x39531d[_0x5052("‫d5", "W^X#")](_0x227a54, 0)) {
    if (_0x39531d[_0x5052("‫d6", "8PzM")](_0x5052("‫d7", "cnfr"), _0x39531d[_0x5052("‫d8", ")y5e")])) {
      console[_0x5052("‮d9", "^KsX")](_0x39531d.mwXjU(parseInt, _0x39531d[_0x5052("‫da", "FCiy")](_0x227a54, 60) / 1000) + _0x39531d[_0x5052("‮db", "RzFS")]);
      await $[_0x5052("‮dc", "8fKk")](_0x227a54);
    } else {
      if (apiListMy[alm].qName && apiListMy[alm][_0x5052("‫dd", "^Xpb")] && apiListMy[alm][_0x5052("‫de", "LCu@")]) {
        apiList.push(apiListMy[alm]);
        console[_0x5052("‮df", "UtjC")](_0x39531d.wNxCD(_0x39531d[_0x5052("‮e0", "[]v%")], apiListMy[alm].qName));
      }
    }
  }
  for (let _0x2bde90 in apiArray) {
    if (!yhqAPiHasSuccess[apiArray[_0x2bde90][_0x5052("‮e1", "8uLF")]]) {
      yhqAPiHasSuccess[apiArray[_0x2bde90].qName] = {};
    }
    _0x39531d[_0x5052("‮e2", ")y5e")](doAPIList, _0x2bde90);
  }
  await $[_0x5052("‮e3", "8sVZ")](30 * 1000);
  for (let _0x2bde90 in apiArray) {
    let _0xe72acc = "";
    if (_0x39531d.dvJvv(lqSucArray[_0x2bde90][_0x5052("‫e4", "5EPH")], 0)) {
      if (apiArray[_0x2bde90][_0x5052("‮e5", ")y5e")]) {
        _0xe72acc += _0x39531d[_0x5052("‮e6", "8sVZ")](_0x39531d[_0x5052("‮e7", "mtv9")](_0x39531d[_0x5052("‫e8", ")y5e")], apiArray[_0x2bde90][_0x5052("‮e9", "mtv9")]), "】");
      }
      _0xe72acc += _0x39531d[_0x5052("‮ea", "2qsx")];
      for (var _0x22154c in lqSucArray[_0x2bde90]) {
        if (_0x39531d[_0x5052("‮eb", "mtv9")](_0x39531d[_0x5052("‮ec", "FpQe")], _0x5052("‮ed", "TPk]"))) {
          cookie = cookiesArr[lqSucArray[_0x2bde90][_0x22154c]];
          let _0x321357 = decodeURIComponent(cookie[_0x5052("‮ee", "PXY&")](/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          _0xe72acc += "\n" + (lqSucArray[_0x2bde90][_0x22154c] + 1) + "、" + _0x321357;
        } else {
          $[_0x5052("‫ef", "TPk]")]();
        }
      }
      console[_0x5052("‫f0", ")y5e")](_0x39531d[_0x5052("‫f1", "TPk]")]);
      console[_0x5052("‫f2", "mKg6")](_0xe72acc);
    }
    if (_0xe72acc) {
      _0x39531d[_0x5052("‮f3", "^Xpb")](myNotice, _0xe72acc);
      _0xe72acc = "";
    }
  }
  $.setjson(yhqAPiHasSuccess, _0x39531d[_0x5052("‫f4", "mtv9")]);
})().catch(_0x3ce33b => {
  $[_0x5052("‮f5", "]S3K")]("", "❌ " + $[_0x5052("‮f6", "^!R*")] + _0x5052("‫f7", "Epv]") + _0x3ce33b + "!", "");
})[_0x5052("‮f8", "Am3d")](() => {
  $.done();
});
async function doAPIList(_0x5bd3be) {
  var _0x349737 = {
    "ArGZb": function (_0x227c3e, _0x3a05d0) {
      return _0x227c3e + _0x3a05d0;
    },
    "XuBWv": function (_0x2a7bb0) {
      return _0x2a7bb0();
    },
    "XniAS": function (_0x4ef3fe, _0x3d25dd) {
      return _0x4ef3fe >= _0x3d25dd;
    },
    "QMVUt": "%7D",
    "YajYs": function (_0x409399, _0x669903) {
      return _0x409399 > _0x669903;
    },
    "Nejhy": function (_0x567080, _0x3d14c4) {
      return _0x567080 + _0x3d14c4;
    },
    "vIWGH": _0x5052("‮f9", "4ch@"),
    "WuzGo": function (_0x768e5c, _0x4dd39f) {
      return _0x768e5c + _0x4dd39f;
    },
    "LctEU": function (_0x4138c0, _0x362371) {
      return _0x4138c0 < _0x362371;
    },
    "jdTYc": function (_0x317746, _0x592670) {
      return _0x317746 + _0x592670;
    },
    "SXoEL": function (_0x5b0980, _0x2b5d76) {
      return _0x5b0980 + _0x2b5d76;
    },
    "ITArS": _0x5052("‮fa", "VmNE"),
    "DizxY": _0x5052("‫fb", "Yb33"),
    "BlJfk": _0x5052("‫fc", "Mv*p"),
    "WTzIk": _0x5052("‮fd", "08T("),
    "GFqqt": "GrzQa",
    "jJZfZ": function (_0x3382b5, _0x51ebcb) {
      return _0x3382b5 < _0x51ebcb;
    },
    "UQwYR": function (_0xde4a52, _0x5b66b1) {
      return _0xde4a52 + _0x5b66b1;
    },
    "gfVCK": function (_0x1aab1f, _0x306768) {
      return _0x1aab1f === _0x306768;
    },
    "qFIeS": _0x5052("‫fe", ")y5e"),
    "CwOBi": function (_0x1bdc78, _0x56d882) {
      return _0x1bdc78 + _0x56d882;
    },
    "IsAFR": _0x5052("‮ff", "[4nm"),
    "hQiYA": "专属ck:",
    "aiahX": "ZCPCX",
    "Kxaog": function (_0x257d46, _0x4016a3) {
      return _0x257d46(_0x4016a3);
    },
    "CotQU": _0x5052("‮100", "[J&F"),
    "HrBwM": function (_0x4de3bd, _0xa69681) {
      return _0x4de3bd === _0xa69681;
    },
    "cqGTR": _0x5052("‫101", "Epv]"),
    "yJeFf": "lHiwR",
    "CUXTs": function (_0x10ac30, _0x3461cc) {
      return _0x10ac30 != _0x3461cc;
    },
    "qvmtT": function (_0x278a7c, _0xd0259) {
      return _0x278a7c < _0xd0259;
    },
    "UQLHP": _0x5052("‮102", "Epv]"),
    "bzAaa": function (_0x488786, _0x530b67) {
      return _0x488786 + _0x530b67;
    },
    "olhhz": function (_0x51b86c, _0x123f53) {
      return _0x51b86c >= _0x123f53;
    },
    "OBTHd": function (_0x22805a, _0x5d4c0e) {
      return _0x22805a == _0x5d4c0e;
    },
    "DAVRm": function (_0x39157e, _0x57dab9) {
      return _0x39157e % _0x57dab9;
    },
    "YIAvc": function (_0x15d146, _0x1c0cfb) {
      return _0x15d146 - _0x1c0cfb;
    },
    "lCxJx": _0x5052("‮103", "41@J")
  };
  canTaskFlag[_0x5bd3be] = true;
  TgCkArray[_0x5bd3be] = [];
  lqSucArray[_0x5bd3be] = [];
  for (let _0x3785e7 = 1; _0x3785e7 <= tryNum; _0x3785e7++) {
    if (canTaskFlag[_0x5bd3be] && _0x349737.LctEU(TgCkArray[_0x5bd3be][_0x5052("‮104", "TPk]")], cookiesArr[_0x5052("‮105", "Mv*p")]) && _0x349737.LctEU(TgCkArray[_0x5bd3be].length, maxAccount)) {
      console[_0x5052("‮6b", "YiMU")](_0x349737.jdTYc(_0x349737[_0x5052("‫106", "VmNE")](_0x349737[_0x5052("‮107", "8l3E")](_0x349737[_0x5052("‮108", "VmNE")], apiArray[_0x5bd3be][_0x5052("‮109", "RzFS")]), "】第") + _0x3785e7, _0x349737[_0x5052("‫10a", "Epv]")]));
      for (let _0x2fc194 = 0; _0x349737.LctEU(_0x2fc194, cookiesArr[_0x5052("‮10b", "W^X#")]) && _0x2fc194 < maxAccount; _0x2fc194++) {
        if (_0x349737.BlJfk !== _0x349737.WTzIk) {
          let _0x2a85d1 = apiArray[_0x5bd3be].ckIndex ? apiArray[_0x5bd3be][_0x5052("‫10c", "Mv*p")] : 0;
          if (_0x349737[_0x5052("‫10d", "]S3K")](_0x2a85d1, 0)) {
            if (_0x5052("‫10e", "PXY&") !== _0x349737[_0x5052("‫10f", "2qsx")]) {
              if (_0x349737[_0x5052("‫110", "^KsX")](_0x349737.UQwYR(_0x2fc194, 1), _0x2a85d1)) {
                if (_0x349737[_0x5052("‫111", "C97v")](_0x349737.qFIeS, _0x349737[_0x5052("‫112", ")y5e")])) {
                  continue;
                } else {
                  console[_0x5052("‫113", "Epv]")](_0x349737[_0x5052("‮114", "T#W%")](_0x349737.XuBWv(timeFormat) + ":", JSON[_0x5052("‫115", "*KQ9")](data)));
                }
              } else if (_0x349737.CwOBi(_0x2fc194, 1) > _0x2a85d1) {
                break;
              } else {
                if (_0x5052("‮116", "2qsx") === _0x5052("‮117", "Am3d")) {
                  console.log(_0x349737[_0x5052("‫118", "FpQe")](_0x349737.IsAFR + _0x2a85d1, _0x349737[_0x5052("‫119", "Mv*p")]));
                } else {
                  let _0x1c741c = new Date();
                  return _0x349737[_0x5052("‫11a", "8fKk")](_0x349737[_0x5052("‫11b", "R35v")](_0x1c741c.getHours(), 1), 24) ? 0 : _0x1c741c[_0x5052("‫11c", "]S3K")]() + 1;
                }
              }
            } else {
              console[_0x5052("‮1a", "[4nm")](_0x5052("‮11d", "YiMU"));
            }
          }
          if (canTaskFlag[_0x5bd3be]) {
            if (cookiesArr[_0x2fc194]) {
              if (_0x349737[_0x5052("‮11e", "Epv]")] === _0x349737[_0x5052("‫11f", "]bBl")]) {
                let _0x32623b = _0x349737.Kxaog(decodeURIComponent, cookiesArr[_0x2fc194][_0x5052("‮120", "VmNE")](/pt_pin=([^; ]+)(?=;?)/) && cookiesArr[_0x2fc194][_0x5052("‮121", "C97v")](/pt_pin=([^; ]+)(?=;?)/)[1]);
                if (TgCkArray[_0x5bd3be][_0x5052("‫122", "W^X#")](_0x2fc194)) {
                  if (_0x349737.CotQU === _0x349737[_0x5052("‮123", "5EPH")]) {
                    console.log(_0x5052("‫124", "8l3E") + _0x349737[_0x5052("‫125", "FCiy")](_0x2fc194, 1) + ":" + _0x32623b + "！");
                    continue;
                  } else {
                    return true;
                  }
                }
                try {
                  if (_0x349737[_0x5052("‫126", "C97v")](_0x349737[_0x5052("‮127", "41@J")], _0x349737[_0x5052("‮128", "^KsX")])) {
                    resolve(data);
                  } else {
                    if (yhqAPiHasSuccess[apiArray[_0x5bd3be][_0x5052("‫91", "8sVZ")]][_0x32623b] && _0x349737.CUXTs(nextHour, 0)) {
                      let _0x3e570a = getNowDate();
                      if (_0x349737[_0x5052("‫129", "[4nm")](DateDiff(_0x3e570a, yhqAPiHasSuccess[apiArray[_0x5bd3be][_0x5052("‮12a", "08T(")]][_0x32623b]), apiArray[_0x5bd3be][_0x5052("‮12b", "TPk]")])) {
                        if (_0x349737[_0x5052("‮12c", "Epv]")] !== _0x349737.UQLHP) {
                          resolve(data);
                        } else {
                          console[_0x5052("‫12d", "RzFS")]("\n\n其他时间领取成功跳过账号" + _0x349737[_0x5052("‫12e", "FpQe")](_0x2fc194, 1) + ":" + _0x32623b + "！");
                          TgCkArray[_0x5bd3be].push(_0x2fc194);
                          continue;
                        }
                      }
                    }
                  }
                } catch (_0x1b3ff5) {}
                nowIndex++;
                if (_0x349737[_0x5052("‮12f", "]bBl")](nowIndex, maxXc)) {
                  if (_0x349737.OBTHd(_0x349737.DAVRm(nowIndex, maxXc), 0)) {
                    await $[_0x5052("‮130", "FG4b")](_0x349737[_0x5052("‮131", "W^X#")](qqjgTime, 20));
                  } else {
                    await $[_0x5052("‫132", "YiMU")](10);
                  }
                }
                doApiTask(_0x5bd3be, _0x2fc194);
              } else {
                retstr = _0x349737[_0x5052("‫133", "[4nm")](url[_0x5052("‫134", "8PzM")](0, url[_0x5052("‮c3", "8PzM")](_0x5052("‮135", "DR0N"))) + retstr, url[_0x5052("‮136", "cnfr")](url[_0x5052("‮c3", "8PzM")](_0x349737[_0x5052("‫137", "W^X#")]), url.length));
              }
            }
          } else {
            console[_0x5052("‫138", "PXY&")](_0x349737[_0x5052("‫139", "UtjC")]);
            break;
          }
        } else {
          if (!entity[_0x5052("‮13a", "LCu@")]) {
            return true;
          }
          if (entity[_0x5052("‮13b", "08T(")] && entity[_0x5052("‮13c", "8l3E")] && _0x349737[_0x5052("‫13d", "FCiy")](new Date(_0x349737[_0x5052("‮13e", "R35v")](entity[_0x5052("‮13f", "8sVZ")], _0x349737.vIWGH))[_0x5052("‫140", "PXY&")](), new Date()[_0x5052("‮141", "cnfr")]())) {
            let _0x36b673 = entity[_0x5052("‮142", "0uP&")].split(",");
            if (_0x36b673.length > 0 && _0x36b673[_0x5052("‫143", "8PzM")](_0x349737.WuzGo(hour, ""))) {
              return true;
            }
          }
          return false;
        }
      }
    } else {
      break;
    }
  }
}
function doApiTask(_0x17d349, _0x485393) {
  var _0xfc0234 = {
    "fzUcD": _0x5052("‫144", "C97v"),
    "DuRzV": function (_0x322ea6, _0x1761ef) {
      return _0x322ea6 === _0x1761ef;
    },
    "sBWBm": _0x5052("‫145", "T#W%"),
    "kdrog": function (_0x41d95b, _0x59a206) {
      return _0x41d95b !== _0x59a206;
    },
    "GKqLd": _0x5052("‮146", "UtjC"),
    "bhzGF": _0x5052("‮147", "8l3E"),
    "jqgeb": "UnlZu",
    "vJWWN": function (_0x2deec9, _0x1e170a) {
      return _0x2deec9(_0x1e170a);
    },
    "BxjNc": function (_0x25a4af, _0x54c4f7) {
      return _0x25a4af + _0x54c4f7;
    },
    "sdNLq": function (_0x5f0b29, _0x23cec1) {
      return _0x5f0b29 == _0x23cec1;
    },
    "BDtzi": function (_0x3e685c, _0x1c8001) {
      return _0x3e685c == _0x1c8001;
    },
    "PRbXF": function (_0x554374, _0x265d85) {
      return _0x554374 > _0x265d85;
    },
    "XoxSV": function (_0x3d9d75) {
      return _0x3d9d75();
    },
    "nApqo": function (_0x1c13bc, _0x273486) {
      return _0x1c13bc > _0x273486;
    },
    "MdYAW": function (_0x4b4738, _0x136989) {
      return _0x4b4738 == _0x136989;
    },
    "UODcK": function (_0x2f2d13, _0x4f476d) {
      return _0x2f2d13 == _0x4f476d;
    },
    "lIWWZ": function (_0x519a4a) {
      return _0x519a4a();
    },
    "kJIiB": function (_0x484bf3, _0x439956) {
      return _0x484bf3 + _0x439956;
    },
    "ktTJR": _0x5052("‮148", "5EPH"),
    "rtRqQ": _0x5052("‮149", "9QYx"),
    "oVRKU": _0x5052("‮14a", "jJF3"),
    "BUKGz": function (_0x5b913d, _0x3c8291) {
      return _0x5b913d + _0x3c8291;
    },
    "jjyXK": function (_0x1c898d) {
      return _0x1c898d();
    },
    "VKAEh": _0x5052("‫14b", "Am3d"),
    "MspyW": function (_0x8d3b90, _0xeaef3c, _0x50b53a) {
      return _0x8d3b90(_0xeaef3c, _0x50b53a);
    },
    "lJOvG": function (_0x318629, _0xa4ae1d) {
      return _0x318629(_0xa4ae1d);
    },
    "ffIKp": function (_0x21975a, _0x33dc1a) {
      return _0x21975a + _0x33dc1a;
    },
    "FdONV": function (_0x5c33f0, _0x5dc35a) {
      return _0x5c33f0 !== _0x5dc35a;
    },
    "LeUJX": _0x5052("‫14c", "8fKk"),
    "SyEHx": function (_0x3b1aef, _0x3831bb) {
      return _0x3b1aef + _0x3831bb;
    },
    "xXTwl": function (_0x3b8d93, _0x577397) {
      return _0x3b8d93 !== _0x577397;
    },
    "nubET": "pxthw",
    "hyXby": function (_0x55fb45, _0x3fe2d8) {
      return _0x55fb45 === _0x3fe2d8;
    },
    "pfzNo": _0x5052("‮14d", "8sVZ"),
    "JGGbi": function (_0x1a2b1b, _0x411d57) {
      return _0x1a2b1b(_0x411d57);
    },
    "tqIIQ": _0x5052("‮14e", ")y5e"),
    "vFUNN": function (_0x13264b, _0x2d2227) {
      return _0x13264b == _0x2d2227;
    },
    "TyNRf": _0x5052("‮14f", "mKg6"),
    "GtARH": _0x5052("‮150", "9QYx"),
    "poiiy": "ZgNiH",
    "bxCsY": _0x5052("‮151", "^!R*"),
    "eYimu": _0x5052("‮152", "8fKk"),
    "KVRuA": _0x5052("‫153", "[]v%"),
    "ISRtX": "FJZMh",
    "roZMh": _0x5052("‫154", "VmNE"),
    "eyuOu": _0x5052("‫155", "^!R*"),
    "mFGNi": function (_0x5f1930, _0x4024b8, _0xc0380f) {
      return _0x5f1930(_0x4024b8, _0xc0380f);
    },
    "vIyxK": function (_0xbb66fb, _0x36fc26) {
      return _0xbb66fb + _0x36fc26;
    }
  };
  console[_0x5052("‮f5", "]S3K")](_0xfc0234[_0x5052("‮156", "UtjC")]("\n\n" + nowIndex + "、", _0xfc0234[_0x5052("‮157", "Go#(")](timeFormat)) + (_0x5052("‫158", "cnfr") + apiArray[_0x17d349][_0x5052("‫21", "W^X#")] + _0x5052("‮159", "*KQ9") + _0xfc0234[_0x5052("‮15a", "jJF3")](_0x485393, 1)));
  return new Promise(_0x46b396 => {
    var _0x5d7d69 = {
      "uXwPV": function (_0x517fd8, _0x19dc5e) {
        return _0x517fd8(_0x19dc5e);
      },
      "Kphql": _0xfc0234.tqIIQ,
      "QMmsp": "max-age=0",
      "QprpF": function (_0x5b2440, _0xcd93cb) {
        return _0x5b2440 === _0xcd93cb;
      },
      "yhUTq": _0x5052("‫15b", "0uP&"),
      "VNKbO": function (_0x3e9f65, _0x491c6a) {
        return _0xfc0234[_0x5052("‮15c", "5EPH")](_0x3e9f65, _0x491c6a);
      },
      "gRVku": "请增加环境变量YHQ_QL_SIGN！",
      "iieGK": function (_0x10a24e, _0x20cade) {
        return _0x10a24e !== _0x20cade;
      },
      "RxwuH": _0xfc0234[_0x5052("‮15d", "*KQ9")],
      "Vclub": _0xfc0234.GtARH,
      "NyhDT": function (_0x5e04fa, _0x19832e) {
        return _0xfc0234[_0x5052("‫15e", "mtv9")](_0x5e04fa, _0x19832e);
      },
      "PVUjk": _0xfc0234.poiiy,
      "OGXqf": function (_0x43479a, _0x3ae7ac) {
        return _0x43479a + _0x3ae7ac;
      },
      "JnWrx": function (_0x37c89b, _0x4487f3) {
        return _0xfc0234[_0x5052("‮15f", "R35v")](_0x37c89b, _0x4487f3);
      },
      "uIUMw": function (_0x3b18f0) {
        return _0x3b18f0();
      },
      "fOrZl": function (_0x316629, _0x21ff32) {
        return _0x316629 > _0x21ff32;
      },
      "RNGbQ": function (_0x1455b5) {
        return _0xfc0234.jjyXK(_0x1455b5);
      },
      "pxbGe": function (_0x57ab77, _0x2e1113) {
        return _0xfc0234[_0x5052("‫160", "8sVZ")](_0x57ab77, _0x2e1113);
      },
      "wOjYT": _0xfc0234.bxCsY,
      "cesjm": _0xfc0234[_0x5052("‮161", "[]v%")],
      "gkUsC": _0x5052("‫162", "[J&F"),
      "vMfjr": function (_0x164646, _0x49c2cb) {
        return _0xfc0234[_0x5052("‫163", "8sVZ")](_0x164646, _0x49c2cb);
      },
      "NnyvH": _0x5052("‫164", "8PzM"),
      "ZVpBb": _0xfc0234[_0x5052("‫165", "W^X#")]
    };
    if (_0xfc0234[_0x5052("‮166", "*KQ9")] !== _0xfc0234[_0x5052("‮167", "8uLF")]) {
      return _0x5d7d69[_0x5052("‫168", "9QYx")](decodeURIComponent, r[2]);
    } else {
      if (canTaskFlag[_0x17d349]) {
        if (apiArray[_0x17d349].qName[_0x5052("‮169", "jJF3")]("G") > -1 || apiArray[_0x17d349][_0x5052("‮16a", "UtjC")][_0x5052("‮16b", ")y5e")](_0xfc0234.roZMh) > -1 || apiArray[_0x17d349][_0x5052("‮16c", "C97v")].indexOf(_0xfc0234[_0x5052("‫16d", "8PzM")]) > -1) {
          $.get(_0xfc0234[_0x5052("‫16e", "^!R*")](getApiUrlGet, _0x17d349, _0x485393), async (_0x3b1148, _0x4ff49b, _0x27ff64) => {
            try {
              if (_0x3b1148) {
                if (_0x5d7d69[_0x5052("‮16f", "Epv]")](_0x5d7d69[_0x5052("‮170", "mKg6")], _0x5d7d69[_0x5052("‫171", "mtv9")])) {
                  console[_0x5052("‮172", "8fKk")](_0x5052("‫173", "we*^"));
                } else {
                  return {
                    "url": getApiLog(apiArray[_0x17d349][_0x5052("‫174", "mKg6")]),
                    "headers": {
                      "user-agent": $[_0x5052("‫175", "2qsx")],
                      "content-Type": _0x5052("‫176", "FCiy"),
                      "accept": _0x5052("‮177", "VmNE"),
                      "accept-encoding": _0x5052("‫178", "PXY&"),
                      "accept-language": _0x5d7d69[_0x5052("‫179", "9QYx")],
                      "cache-control": _0x5d7d69[_0x5052("‮17a", "T#W%")],
                      "cookie": cookiesArr[_0x485393]
                    }
                  };
                }
              } else {
                if (_0x5d7d69[_0x5052("‮17b", "08T(")](_0x5052("‫17c", "]#^o"), _0x5d7d69[_0x5052("‫17d", "mtv9")])) {
                  if (new RegExp("("[_0x5052("‮17e", "^!R*")](e, ")"))[_0x5052("‫17f", "41@J")](d)) {
                    var _0x3b6640 = _0x5d7d69[_0x5052("‫180", "UtjC")]("S+", e) ? _0x5d7d69.yhUTq : "00";
                    d = d[_0x5052("‮181", "[J&F")](RegExp.$1, _0x5d7d69.VNKbO(1, RegExp.$1[_0x5052("‫8f", "T#W%")]) ? l[e] : "".concat(_0x3b6640)[_0x5052("‫182", "PXY&")](l[e]).substr(""[_0x5052("‫183", "Am3d")](l[e]).length));
                  }
                } else {
                  cookie = cookiesArr[_0x485393];
                  let _0x4e6ca6 = _0x5d7d69[_0x5052("‮184", "[4nm")](decodeURIComponent, cookie[_0x5052("‫185", "T#W%")](/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
                  console.log("\n\n*" + apiArray[_0x17d349].qName + _0x5052("‫186", "9QYx") + _0x5d7d69[_0x5052("‫187", "FpQe")](_0x485393, 1) + "】" + _0x4e6ca6 + "*");
                  console[_0x5052("‮8a", "FCiy")](_0x5d7d69.JnWrx(_0x5d7d69[_0x5052("‮188", ")y5e")](_0x5d7d69[_0x5052("‮189", "08T(")](timeFormat), ":"), _0x27ff64));
                  if (_0x5d7d69[_0x5052("‮18a", "8fKk")](_0x27ff64[_0x5052("‫18b", "9QYx")]("成功"), -1)) {
                    lqSucArray[_0x17d349].push(_0x485393);
                    yhqAPiHasSuccess[apiArray[_0x17d349][_0x5052("‫21", "W^X#")]][_0x4e6ca6] = _0x5d7d69.RNGbQ(getNowDate);
                  } else if (_0x27ff64[_0x5052("‮18c", "FCiy")]("再来") > -1 || _0x5d7d69[_0x5052("‮18d", "Epv]")](_0x27ff64.indexOf("抢光"), -1)) {
                    if (_0x5d7d69[_0x5052("‮18e", "8fKk")](_0x5052("‮18f", "VmNE"), _0x5d7d69[_0x5052("‫190", "^KsX")])) {
                      canTaskFlag[_0x17d349] = false;
                    } else {
                      date = new Date();
                    }
                  }
                }
              }
            } catch (_0x2a2197) {
              TgCkArray[_0x17d349][_0x5052("‮191", "[]v%")](_0x485393);
              $[_0x5052("‫192", "mtv9")](_0x2a2197, _0x4ff49b);
            } finally {
              if (_0x5d7d69[_0x5052("‮193", "Am3d")](_0x5d7d69[_0x5052("‮194", "41@J")], _0x5d7d69[_0x5052("‫195", ")y5e")])) {
                console.log(_0x5d7d69[_0x5052("‫196", "8uLF")]);
                myNotice(_0x5d7d69.gRVku);
                return;
              } else {
                _0x5d7d69[_0x5052("‮197", "FCiy")](_0x46b396, _0x27ff64);
              }
            }
          });
        } else {
          $[_0x5052("‫198", "YiMU")](_0xfc0234.mFGNi(getApiUrl, _0x17d349, _0x485393), async (_0x19abd1, _0x28fed9, _0xb0e62c) => {
            var _0x122ea4 = {
              "gJtAo": _0xfc0234[_0x5052("‫199", "cnfr")]
            };
            if (_0xfc0234[_0x5052("‮19a", "W^X#")](_0xfc0234[_0x5052("‫19b", "mKg6")], _0x5052("‮19c", "FG4b"))) {
              if (jdNotify) {
                notify[_0x5052("‫19d", "YiMU")]($[_0x5052("‫19e", "8PzM")], msg, {}, "\n\n本通知 By：https://github.com/hsdtk/jdYhq");
              }
            } else {
              try {
                if (_0xfc0234[_0x5052("‮19f", "^KsX")](_0x5052("‮1a0", "]S3K"), _0xfc0234[_0x5052("‮1a1", "[J&F")])) {
                  if (_0x19abd1) {
                    if (_0xfc0234.kdrog(_0xfc0234[_0x5052("‮1a2", "*KQ9")], _0xfc0234[_0x5052("‮1a3", "5EPH")])) {
                      console.log(_0x5052("‮1a4", "RzFS"));
                    } else {
                      console.log("没有优惠券需要领取！");
                      return;
                    }
                  } else {
                    cookie = cookiesArr[_0x485393];
                    let _0x529a57 = _0xfc0234.vJWWN(decodeURIComponent, cookie[_0x5052("‮1a5", "QDK4")](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x5052("‫1a6", "we*^")](/pt_pin=([^; ]+)(?=;?)/)[1]);
                    console[_0x5052("‮40", "*KQ9")](_0x5052("‫1a7", "W^X#") + apiArray[_0x17d349][_0x5052("‫91", "8sVZ")] + "_【账号" + _0xfc0234.BxjNc(_0x485393, 1) + "】" + _0x529a57 + "*");
                    _0xb0e62c = JSON.parse(_0xb0e62c);
                    let _0x5d8c13 = "";
                    let _0x139cff = "";
                    try {
                      _0x139cff = _0xfc0234[_0x5052("‮1a8", "VmNE")]("|" + _0xb0e62c.subCode, "|");
                      _0x5d8c13 = _0xb0e62c[_0x5052("‫1a9", "8PzM")] || _0xb0e62c.resultData.msg;
                    } catch (_0x441b12) {}
                    if (_0xb0e62c.subCode && (_0xfc0234[_0x5052("‮1aa", "Go#(")](_0xb0e62c[_0x5052("‮1ab", "^KsX")], "A1") || _0xfc0234[_0x5052("‫1ac", "]#^o")](_0xb0e62c[_0x5052("‫1ad", "C97v")], "0")) || _0x5d8c13 && _0xfc0234[_0x5052("‫1ae", "FpQe")](_0x5d8c13.indexOf("成功"), -1)) {
                      lqSucArray[_0x17d349][_0x5052("‮1af", "W^X#")](_0x485393);
                      yhqAPiHasSuccess[apiArray[_0x17d349][_0x5052("‮1b0", "Yb33")]][_0x529a57] = _0xfc0234[_0x5052("‫1b1", "T#W%")](getNowDate);
                    }
                    if (_0xfc0234.nApqo(AllEendCode[_0x5052("‫1b2", "T#W%")](_0x139cff), -1)) {
                      if (_0xfc0234.MdYAW(_0xb0e62c[_0x5052("‮1b3", "VmNE")], "D2") && _0xfc0234[_0x5052("‫1b4", "T#W%")](_0x5d8c13.substr(_0x5d8c13[_0x5052("‫1b5", "8uLF")]("请") + 1, 2), nextHour)) {
                        console[_0x5052("‮df", "UtjC")](_0xfc0234[_0x5052("‮1b6", "T#W%")](_0xfc0234[_0x5052("‫1b7", "0uP&")](_0xfc0234[_0x5052("‮1b8", "4ch@")](timeFormat), _0x5052("‮1b9", "]S3K")), _0x5d8c13));
                      } else if (_0xfc0234[_0x5052("‫1ba", "4ch@")](nextHour, 0)) {
                        console[_0x5052("‫1bb", "[J&F")](_0xfc0234.kJIiB(_0xfc0234.lIWWZ(timeFormat), _0xfc0234[_0x5052("‮1bc", "*KQ9")]) + _0x5d8c13);
                      } else {
                        canTaskFlag[_0x17d349] = false;
                        console[_0x5052("‮24", "^Xpb")](_0xfc0234[_0x5052("‮1bd", "UtjC")](timeFormat(), ":") + _0x5d8c13);
                      }
                    } else if (_0xfc0234[_0x5052("‫1be", "^!R*")](PEendCode[_0x5052("‫1bf", "]S3K")](_0x139cff), -1)) {
                      if (_0xfc0234.kdrog(_0xfc0234[_0x5052("‫1c0", "[4nm")], _0xfc0234[_0x5052("‮1c1", "8sVZ")])) {
                        maxQq = _0x5d7d69[_0x5052("‮1c2", "08T(")](parseInt, YHQ_API_ARR[1]);
                      } else {
                        TgCkArray[_0x17d349][_0x5052("‫1c3", "41@J")](_0x485393);
                        console[_0x5052("‮1c4", "R35v")](_0xfc0234[_0x5052("‮1c5", "FpQe")](_0xfc0234.kJIiB(_0xfc0234[_0x5052("‮1c6", "0uP&")](_0xfc0234[_0x5052("‮1c7", ")y5e")](timeFormat), ":"), _0x5d8c13) + _0xfc0234.oVRKU, _0x139cff));
                      }
                    } else if (_0xb0e62c[_0x5052("‮1c8", "mKg6")] && _0xfc0234.UODcK(_0xb0e62c[_0x5052("‮1c9", "FG4b")], "3")) {
                      TgCkArray[_0x17d349][_0x5052("‮1ca", "LCu@")](_0x485393);
                      console[_0x5052("‫87", "W^X#")](_0xfc0234.BUKGz(_0xfc0234[_0x5052("‮1cb", "[J&F")](timeFormat), _0xfc0234[_0x5052("‫1cc", "we*^")]));
                      if (!_0xfc0234[_0x5052("‮1cd", "^KsX")](checkHasCz, ckerror, _0x485393)) {
                        ckerror[_0x5052("‫1ce", "0uP&")](_0x485393);
                        _0xfc0234.lJOvG(myNotice, _0x5052("‮1cf", "5EPH") + _0xfc0234[_0x5052("‮1d0", "VmNE")](_0x485393, 1) + "】" + _0x529a57 + _0x5052("‫1d1", "0uP&"));
                      }
                    } else {
                      if (_0xfc0234[_0x5052("‮1d2", "mtv9")](_0xfc0234[_0x5052("‮1d3", "Go#(")], "hXDub")) {
                        console[_0x5052("‫27", "]bBl")](_0xfc0234[_0x5052("‮15f", "R35v")](timeFormat() + ":", JSON.stringify(_0xb0e62c)));
                      } else {
                        console[_0x5052("‮1d4", "08T(")](_0x122ea4[_0x5052("‫1d5", "^!R*")]);
                      }
                    }
                  }
                } else {
                  t = new Date(time);
                }
              } catch (_0x445374) {
                if (_0xfc0234[_0x5052("‫1d6", "8fKk")]("rjLSa", _0xfc0234[_0x5052("‮1d7", "9QYx")])) {
                  TgCkArray[_0x17d349][_0x5052("‮1d8", "[4nm")](_0x485393);
                  $[_0x5052("‮1d9", "]S3K")](_0x445374, _0x28fed9);
                } else {
                  return {
                    "url": apiArray[_0x17d349].qApi,
                    "headers": {
                      "User-Agent": $[_0x5052("‮1da", "8sVZ")],
                      "accept-encoding": _0x5d7d69[_0x5052("‮1db", ")y5e")],
                      "accept-language": _0x5d7d69[_0x5052("‫1dc", "FG4b")],
                      "Cookie": cookiesArr[_0x485393],
                      "origin": _0x5d7d69[_0x5052("‫1dd", "FCiy")]
                    }
                  };
                }
              } finally {
                if (_0xfc0234.hyXby(_0xfc0234[_0x5052("‫1de", "RzFS")], _0xfc0234[_0x5052("‫1df", "]#^o")])) {
                  _0xfc0234[_0x5052("‮1e0", "LCu@")](_0x46b396, _0xb0e62c);
                } else {
                  _0x46b396(_0xb0e62c);
                }
              }
            }
          });
        }
      } else {
        console.log("该券已无或已结束！");
      }
    }
  });
}
function getJDTime() {
  var _0x3fec6f = {
    "jEBwb": function (_0x12046c, _0x4e56b2) {
      return _0x12046c == _0x4e56b2;
    },
    "NUhRE": function (_0x4e0418, _0x5bfcf0) {
      return _0x4e0418(_0x5bfcf0);
    },
    "awdwv": function (_0x12b08b, _0x7f620f) {
      return _0x12b08b == _0x7f620f;
    },
    "KpFBz": function (_0x501bc8, _0x3b3110) {
      return _0x501bc8 != _0x3b3110;
    },
    "iVCft": function (_0x444667, _0x5037f0) {
      return _0x444667 - _0x5037f0;
    },
    "Pyvdh": function (_0x236f53, _0xbc4079) {
      return _0x236f53(_0xbc4079);
    },
    "Vuqpg": function (_0x3664d5, _0x4ccfd6) {
      return _0x3664d5 !== _0x4ccfd6;
    },
    "uYvja": "WxDxm",
    "LxIFs": _0x5052("‮1e1", "Go#(")
  };
  return new Promise(_0x3d9220 => {
    if (_0x3fec6f[_0x5052("‫1e2", "9w!q")](_0x3fec6f.uYvja, _0x5052("‮1e3", "4ch@"))) {
      console.log("API请求失败，请检查网络重试");
    } else {
      $[_0x5052("‫1e4", "*KQ9")]({
        "url": _0x3fec6f[_0x5052("‮1e5", "9QYx")]
      }, async (_0x35eafa, _0x53ca3a, _0x49f3d4) => {
        try {
          if (_0x35eafa) {
            console[_0x5052("‮1e6", "]#^o")]("获取JD时间失败");
          } else {
            _0x49f3d4 = JSON[_0x5052("‫1e7", "^KsX")](_0x49f3d4);
            if (_0x49f3d4.code && _0x3fec6f[_0x5052("‮1e8", "Am3d")](_0x49f3d4[_0x5052("‫1e9", "cnfr")], "0")) {
              JDTimes = _0x3fec6f[_0x5052("‮1ea", "2qsx")](parseInt, _0x49f3d4[_0x5052("‫1eb", "08T(")]);
              if (_0x3fec6f[_0x5052("‫1ec", "Epv]")](JDTimeJg, 0) || _0x3fec6f[_0x5052("‫1ed", "Mv*p")](JDTimeJg, 0) && _0x3fec6f.iVCft(new Date()[_0x5052("‫1ee", "08T(")](), JDTimes) < JDTimeJg) {
                JDTimeJg = _0x3fec6f[_0x5052("‮1ef", "LCu@")](new Date()[_0x5052("‮1f0", "Yb33")](), JDTimes);
              }
            } else {}
          }
        } catch (_0x2423a6) {
          $[_0x5052("‫1f1", "YiMU")](_0x2423a6, _0x53ca3a);
        } finally {
          _0x3fec6f[_0x5052("‫1f2", "W^X#")](_0x3d9220, _0x49f3d4);
        }
      });
    }
  });
}
function checkYhq(_0x5b887b, _0x5e1a7c) {
  var _0x3f2ec2 = {
    "AOMqR": function (_0x1f765a, _0x46cd37) {
      return _0x1f765a > _0x46cd37;
    },
    "iDRAe": function (_0x4dee95, _0x108454) {
      return _0x4dee95 + _0x108454;
    },
    "XrqKz": function (_0x98e2ed, _0x3d736d) {
      return _0x98e2ed !== _0x3d736d;
    },
    "IoVsD": _0x5052("‫1f3", "8sVZ"),
    "FNsPS": "JYnOY",
    "uhEiP": function (_0x126304, _0x128145) {
      return _0x126304 > _0x128145;
    },
    "dbXPM": _0x5052("‫1f4", "]#^o")
  };
  if (!_0x5b887b.endDate) {
    return true;
  }
  if (_0x5b887b[_0x5052("‮1f5", "9w!q")] && _0x5b887b[_0x5052("‫1f6", "jJF3")] && _0x3f2ec2.AOMqR(new Date(_0x3f2ec2.iDRAe(_0x5b887b.endDate, _0x5052("‮1f7", "]bBl")))[_0x5052("‮1f8", "8fKk")](), new Date().getTime())) {
    if (_0x3f2ec2[_0x5052("‮1f9", "4ch@")](_0x3f2ec2.IoVsD, _0x3f2ec2[_0x5052("‮1fa", "*KQ9")])) {
      let _0x318df4 = _0x5b887b[_0x5052("‫1fb", ")y5e")].split(",");
      if (_0x3f2ec2[_0x5052("‫1fc", "mKg6")](_0x318df4.length, 0) && _0x318df4[_0x5052("‮1fd", "UtjC")](_0x3f2ec2[_0x5052("‮1fe", "[4nm")](_0x5e1a7c, ""))) {
        if (_0x3f2ec2[_0x5052("‮1ff", "VmNE")]("ZRGgv", _0x3f2ec2[_0x5052("‫200", "08T(")])) {
          return true;
        } else {
          Object[_0x5052("‮201", "FCiy")](jdCookieNode)[_0x5052("‮202", "PXY&")](_0x5c94f4 => {
            cookiesArr.push(jdCookieNode[_0x5c94f4]);
          });
          if (process[_0x5052("‮203", "RzFS")][_0x5052("‫204", "VmNE")] && process[_0x5052("‮205", "mtv9")][_0x5052("‮206", "8fKk")] === _0x5052("‫207", "Yb33")) console[_0x5052("‮208", "2qsx")] = () => {};
          if (process[_0x5052("‫209", "4ch@")].JDFACTORY_FORBID_ACCOUNT) process.env[_0x5052("‮20a", "DR0N")][_0x5052("‫20b", "mtv9")]("&")[_0x5052("‫20c", "C97v")]((_0x17227e, _0xfb1b9f) => Number(_0x17227e) === 0 ? cookiesArr = [] : cookiesArr[_0x5052("‮20d", "41@J")](Number(_0x17227e) - 1 - _0xfb1b9f, 1));
        }
      }
    } else {
      canTaskFlag[an] = false;
    }
  }
  return false;
}
function isRemoveYhqF(_0x11e50b) {
  let _0x446cc3 = false;
  if (removeYhq && removeYhq[_0x5052("‫e4", "5EPH")] > 0) {
    for (var _0x294c11 in removeYhq) {
      if (_0x11e50b.qName == removeYhq[_0x294c11]) {
        console[_0x5052("‫20e", "FpQe")]("排除优惠券：" + _0x11e50b[_0x5052("‫20f", "C97v")]);
        _0x446cc3 = true;
        break;
      }
    }
  }
  return _0x446cc3;
}
function getApiUrl(_0x370fdd, _0x25b811) {
  var _0x3c0849 = {
    "ezftA": function (_0x35399a, _0xc76e1b) {
      return _0x35399a > _0xc76e1b;
    },
    "vzydq": function (_0x5a8e94, _0x3de6a5) {
      return _0x5a8e94 !== _0x3de6a5;
    },
    "Vanxp": "wFlFd",
    "ncyyy": _0x5052("‮210", "2qsx"),
    "mYXEu": _0x5052("‫211", "W^X#"),
    "RtfJk": _0x5052("‫212", "08T("),
    "aGiYK": _0x5052("‮213", "cnfr"),
    "ichdd": function (_0x4906af, _0x31cffe) {
      return _0x4906af(_0x31cffe);
    },
    "eoXgC": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "jemCC": _0x5052("‫214", "]S3K"),
    "CXRFw": _0x5052("‫215", "W^X#")
  };
  if (_0x3c0849[_0x5052("‮216", "8l3E")](apiArray[_0x370fdd][_0x5052("‮217", "UtjC")][_0x5052("‮218", "UtjC")](_0x5052("‫219", "LCu@")), -1)) {
    if (_0x3c0849[_0x5052("‫21a", "mtv9")](_0x3c0849.Vanxp, _0x3c0849[_0x5052("‫21b", "08T(")])) {
      const {
        ret,
        msg,
        data: {
          result
        } = {}
      } = JSON[_0x5052("‫21c", "8l3E")](data);
      $.token = result.tk;
      $.genKey = new Function(_0x5052("‮21d", "^Xpb") + result[_0x5052("‫21e", "[4nm")])();
    } else {
      return {
        "url": apiArray[_0x370fdd][_0x5052("‫174", "mKg6")],
        "headers": {
          "User-Agent": _0x3c0849[_0x5052("‫21f", "FCiy")],
          "Referer": _0x3c0849.mYXEu,
          "Accept": _0x3c0849.RtfJk,
          "Content-Type": _0x3c0849[_0x5052("‮220", ")y5e")],
          "Origin": _0x5052("‫221", ")y5e"),
          "Cookie": cookiesArr[_0x25b811]
        },
        "body": apiArray[_0x370fdd][_0x5052("‮222", "9w!q")]
      };
    }
  } else {
    return {
      "url": _0x3c0849.ichdd(getApiLog, apiArray[_0x370fdd][_0x5052("‫223", "8uLF")]),
      "headers": {
        "user-agent": $[_0x5052("‫224", "Epv]")],
        "content-Type": "application/x-www-form-urlencoded",
        "accept": _0x3c0849.eoXgC,
        "accept-encoding": _0x3c0849[_0x5052("‮225", "Yb33")],
        "accept-language": _0x5052("‫226", "0uP&"),
        "cache-control": _0x3c0849[_0x5052("‮227", "[J&F")],
        "cookie": cookiesArr[_0x25b811]
      }
    };
  }
}
function getApiUrlGet(_0x493c50, _0x5dbccb) {
  var _0xd3e8c4 = {
    "UmvWh": "加载自定义API:",
    "nCNIO": function (_0x2fa2de, _0x55cdfa) {
      return _0x2fa2de > _0x55cdfa;
    },
    "DKAhb": function (_0x2aaf83, _0x1099a9) {
      return _0x2aaf83(_0x1099a9);
    },
    "dzynT": _0x5052("‫228", "8sVZ"),
    "unzbs": _0x5052("‫214", "]S3K"),
    "PLlOq": "zh-CN,zh;q=0.9,en;q=0.8",
    "ENWxr": _0x5052("‫229", "]S3K"),
    "ALPEt": _0x5052("‮22a", "cnfr"),
    "vHYrF": function (_0x2ceab1, _0x213c3f) {
      return _0x2ceab1 !== _0x213c3f;
    },
    "PmUQy": _0x5052("‫22b", "Epv]"),
    "FDzte": "zh-CN,zh;q=0.9",
    "yDzMC": _0x5052("‮22c", "0uP&"),
    "PxayF": function (_0x2a455b, _0x27fcce) {
      return _0x2a455b === _0x27fcce;
    },
    "yZIhS": "VKShw"
  };
  if (_0xd3e8c4[_0x5052("‫22d", "]#^o")](apiArray[_0x493c50][_0x5052("‫22e", "8sVZ")][_0x5052("‫22f", "W^X#")]("https://s.m.jd.com"), -1) || _0xd3e8c4[_0x5052("‫230", "Go#(")](apiArray[_0x493c50][_0x5052("‫231", "4ch@")][_0x5052("‮232", "9w!q")](_0x5052("‮233", "YiMU")), -1)) {
    return {
      "url": _0xd3e8c4[_0x5052("‫234", "jJF3")](getDecryptUrl, apiArray[_0x493c50].qApi),
      "headers": {
        "User-Agent": $[_0x5052("‫235", "VmNE")],
        "Cookie": cookiesArr[0],
        "Accept": _0xd3e8c4[_0x5052("‫236", "cnfr")],
        "Accept-Encoding": _0xd3e8c4[_0x5052("‮237", "Go#(")],
        "Accept-Language": _0xd3e8c4.PLlOq,
        "Referer": _0xd3e8c4[_0x5052("‮238", "FpQe")]
      }
    };
  } else if (apiArray[_0x493c50][_0x5052("‫239", ")y5e")][_0x5052("‫23a", "]#^o")](_0xd3e8c4[_0x5052("‫23b", "Epv]")]) > -1) {
    if (_0xd3e8c4.vHYrF(_0xd3e8c4[_0x5052("‮23c", "FCiy")], _0x5052("‮23d", "41@J"))) {
      for (var _0x5baf62 in apiListMy) {
        if (apiListMy[_0x5baf62][_0x5052("‮217", "UtjC")] && apiListMy[_0x5baf62][_0x5052("‮23e", "41@J")] && apiListMy[_0x5baf62].qTime) {
          apiList[_0x5052("‮23f", "08T(")](apiListMy[_0x5baf62]);
          console[_0x5052("‮240", "Mv*p")](_0xd3e8c4[_0x5052("‮241", "8PzM")] + apiListMy[_0x5baf62].qName);
        }
      }
    } else {
      return {
        "url": apiArray[_0x493c50].qApi,
        "headers": {
          "User-Agent": $[_0x5052("‫242", "Yb33")],
          "accept-encoding": _0xd3e8c4[_0x5052("‫243", "0uP&")],
          "accept-language": _0xd3e8c4[_0x5052("‮244", "DR0N")],
          "Cookie": cookiesArr[_0x5dbccb],
          "origin": _0xd3e8c4[_0x5052("‮245", "we*^")]
        }
      };
    }
  } else {
    if (_0xd3e8c4[_0x5052("‫246", "08T(")]("HnERt", _0xd3e8c4.yZIhS)) {
      console[_0x5052("‮247", "8PzM")]("API请求失败，请检查网络重试");
    } else {
      return {
        "url": apiArray[_0x493c50][_0x5052("‫239", ")y5e")],
        "headers": {
          "User-Agent": $[_0x5052("‮248", "T#W%")],
          "accept-encoding": "gzip, deflate, br",
          "accept-language": _0xd3e8c4[_0x5052("‫249", "08T(")],
          "Cookie": cookiesArr[_0x5dbccb]
        }
      };
    }
  }
}
function jgNextHourF() {
  var _0x2a94d5 = {
    "LwEER": function (_0x122a32, _0x52036e) {
      return _0x122a32 + _0x52036e;
    },
    "JvboT": function (_0xa1c5a) {
      return _0xa1c5a();
    },
    "roaSq": function (_0x40f654, _0xc55f5e) {
      return _0x40f654 * _0xc55f5e;
    }
  };
  let _0x14d5e4 = _0x2a94d5[_0x5052("‮24a", "]#^o")](timeFormat()[_0x5052("‫24b", ")y5e")](0, 13), _0x5052("‮24c", "8sVZ"));
  let _0x2c221b = _0x2a94d5[_0x5052("‮24d", "QDK4")](Date.parse(new Date(_0x14d5e4)), _0x2a94d5[_0x5052("‫24e", "FG4b")](60 * 60, 1000));
  return _0x2c221b - new Date()[_0x5052("‫24f", "]S3K")]();
}
function nextHourF() {
  var _0x10811d = {
    "zuKzU": function (_0x348439, _0x15a5e7) {
      return _0x348439 >= _0x15a5e7;
    },
    "EavJP": function (_0x2b88fd, _0x157f8b) {
      return _0x2b88fd + _0x157f8b;
    },
    "wRdqz": function (_0x51c665, _0x48b51f) {
      return _0x51c665 + _0x48b51f;
    }
  };
  let _0x458e93 = new Date();
  return _0x10811d[_0x5052("‮250", "^KsX")](_0x10811d[_0x5052("‮251", "8l3E")](_0x458e93[_0x5052("‮252", "4ch@")](), 1), 24) ? 0 : _0x10811d[_0x5052("‫253", "jJF3")](_0x458e93[_0x5052("‮254", "5EPH")](), 1);
}
function DateDiff(_0x2f0eb9, _0xa6fcd9) {
  var _0x5a082f = {
    "lSyEA": function (_0xa262a7, _0x59af2c) {
      return _0xa262a7 + _0x59af2c;
    },
    "SZFGi": function (_0x1ddecc, _0xd687f4) {
      return _0x1ddecc + _0xd687f4;
    },
    "SFNKg": function (_0x396077, _0xcd51f0) {
      return _0x396077(_0xcd51f0);
    },
    "nowOQ": function (_0x2e4a71, _0x24cafc) {
      return _0x2e4a71 / _0x24cafc;
    },
    "HJHPk": function (_0x29346f, _0x48280f) {
      return _0x29346f - _0x48280f;
    }
  };
  var _0x227aa4, _0x167b3e, _0x4fc83a, _0x231172;
  _0x227aa4 = _0x2f0eb9.split("-");
  _0x167b3e = new Date(_0x5a082f[_0x5052("‮256", "^KsX")](_0x227aa4[1] + "-" + _0x227aa4[2] + "-", _0x227aa4[0]));
  _0x227aa4 = _0xa6fcd9[_0x5052("‮257", "2qsx")]("-");
  _0x4fc83a = new Date(_0x5a082f[_0x5052("‮258", "T#W%")](_0x227aa4[1] + "-" + _0x227aa4[2], "-") + _0x227aa4[0]);
  _0x231172 = _0x5a082f[_0x5052("‫259", "]S3K")](parseInt, _0x5a082f[_0x5052("‫25a", "]S3K")](_0x5a082f[_0x5052("‫25b", "YiMU")](Math.abs(_0x5a082f[_0x5052("‫25c", "[4nm")](_0x167b3e, _0x4fc83a)), 1000) / 60, 60) / 24);
  return _0x231172;
}
function getNowDate() {
  var _0xb82b54 = {
    "jTFYZ": function (_0x172ab8, _0x5b7b8f) {
      return _0x172ab8 + _0x5b7b8f;
    },
    "KLeFU": function (_0x3f717d, _0x1298de) {
      return _0x3f717d >= _0x1298de;
    },
    "jJmVv": function (_0x213b77, _0x59a76d) {
      return _0x213b77 + _0x59a76d;
    }
  };
  let _0x51c2bf = new Date();
  return _0xb82b54[_0x5052("‫25d", "[4nm")](_0x51c2bf.getFullYear() + "-" + (_0xb82b54[_0x5052("‫25e", ")y5e")](_0x51c2bf[_0x5052("‮25f", "8uLF")]() + 1, 10) ? _0x51c2bf[_0x5052("‮260", "YiMU")]() + 1 : "0" + (_0x51c2bf[_0x5052("‮261", "Am3d")]() + 1)) + "-", _0x51c2bf[_0x5052("‮262", "Epv]")]() >= 10 ? _0x51c2bf[_0x5052("‫263", "^Xpb")]() : "0" + _0x51c2bf[_0x5052("‫264", "T#W%")]());
}
function timeFormat(_0x2fac80) {
  var _0x2992d6 = {
    "THhUS": function (_0x58c28b, _0x56fa4b) {
      return _0x58c28b + _0x56fa4b;
    },
    "rNEno": function (_0xd9844b, _0x4bd6d9) {
      return _0xd9844b + _0x4bd6d9;
    },
    "zwMhb": function (_0x4a9fce, _0x4fb81d) {
      return _0x4a9fce >= _0x4fb81d;
    }
  };
  let _0x17d3b2;
  if (_0x2fac80) {
    _0x17d3b2 = new Date(_0x2fac80);
  } else {
    _0x17d3b2 = new Date();
  }
  return _0x2992d6[_0x5052("‮265", "8PzM")](_0x2992d6[_0x5052("‫266", "0uP&")](_0x2992d6[_0x5052("‫266", "0uP&")](_0x2992d6[_0x5052("‫267", "mtv9")](_0x2992d6[_0x5052("‮268", "*KQ9")](_0x2992d6[_0x5052("‫269", "4ch@")](_0x17d3b2[_0x5052("‮26a", ")y5e")]() + "-", _0x17d3b2.getMonth() + 1 >= 10 ? _0x17d3b2[_0x5052("‮26b", "T#W%")]() + 1 : _0x2992d6[_0x5052("‫26c", "FpQe")]("0", _0x2992d6[_0x5052("‫26d", "Am3d")](_0x17d3b2[_0x5052("‮261", "Am3d")](), 1))), "-") + (_0x2992d6[_0x5052("‮26e", "DR0N")](_0x17d3b2[_0x5052("‮26f", "FCiy")](), 10) ? _0x17d3b2.getDate() : _0x2992d6[_0x5052("‮270", "Mv*p")]("0", _0x17d3b2.getDate())), " "), _0x2992d6[_0x5052("‫271", "^!R*")](_0x17d3b2[_0x5052("‮272", "]bBl")](), 10) ? _0x17d3b2[_0x5052("‮273", "TPk]")]() : _0x2992d6[_0x5052("‫274", "we*^")]("0", _0x17d3b2.getHours())), ":") + (_0x2992d6[_0x5052("‮275", "mtv9")](_0x17d3b2.getMinutes(), 10) ? _0x17d3b2[_0x5052("‫276", "Yb33")]() : "0" + _0x17d3b2[_0x5052("‮277", "2qsx")]()) + ":", _0x17d3b2.getSeconds() >= 10 ? _0x17d3b2.getSeconds() : "0" + _0x17d3b2[_0x5052("‫278", "W^X#")]()) + ":" + _0x17d3b2[_0x5052("‮279", "UtjC")]();
}
function getApiLog(_0x219f30) {
  var _0x48c379 = {
    "UyPpU": "./jdYhqApiListMy.js",
    "qZjUg": function (_0x3604b6, _0x5931ed) {
      return _0x3604b6 + _0x5931ed;
    },
    "ZlWSW": _0x5052("‮27a", "2qsx"),
    "uKgQw": _0x5052("‮27b", "DR0N"),
    "xZKcq": function (_0x8636e, _0x41f1fb) {
      return _0x8636e(_0x41f1fb);
    },
    "qdCee": function (_0x3d3103, _0x5691b2) {
      return _0x3d3103 + _0x5691b2;
    },
    "ljqzH": _0x5052("‫27c", "8uLF"),
    "zHkGq": _0x5052("‮27d", "4ch@"),
    "ClyVT": function (_0x5ed1f9, _0x3ee477) {
      return _0x5ed1f9 === _0x3ee477;
    },
    "sCtwL": "oWxlO",
    "ZcQWx": _0x5052("‫27e", "we*^"),
    "FKocc": function (_0x1d4879, _0x4a291c) {
      return _0x1d4879 + _0x4a291c;
    }
  };
  let _0x542ef9 = smashUtils.getRandom(8);
  let _0x56278d = (smashUtils[_0x5052("‮27f", "C97v")]({
    "id": _0x48c379[_0x5052("‫280", "FpQe")],
    "data": {
      "random": _0x542ef9
    }
  }, xtTkSign) || {})[_0x5052("‮281", "LCu@")];
  let _0x518a36 = _0x48c379.xZKcq(encodeURIComponent, _0x48c379[_0x5052("‮282", "mtv9")](_0x48c379[_0x5052("‫283", "5EPH")] + _0x56278d + _0x5052("‮284", "Go#(") + _0x542ef9, "\""));
  if (_0x219f30 && _0x219f30[_0x5052("‮16b", ")y5e")](_0x48c379[_0x5052("‮285", "DR0N")]) > -1) {
    if (_0x48c379[_0x5052("‫286", "FG4b")](_0x48c379.sCtwL, _0x48c379.ZcQWx)) {
      const _0x3ffee8 = $.isNode() ? require(_0x48c379.UyPpU).apiList : [];
      if (_0x3ffee8[_0x5052("‫287", "FpQe")] > 0) {
        for (var _0x16a9e9 in _0x3ffee8) {
          if (_0x3ffee8[_0x16a9e9][_0x5052("‫288", "5EPH")] && _0x3ffee8[_0x16a9e9][_0x5052("‫174", "mKg6")] && _0x3ffee8[_0x16a9e9][_0x5052("‮289", "4ch@")]) {
            apiList[_0x5052("‫28a", "^KsX")](_0x3ffee8[_0x16a9e9]);
            console.log(_0x48c379[_0x5052("‫28b", "jJF3")](_0x48c379.ZlWSW, _0x3ffee8[_0x16a9e9][_0x5052("‫288", "5EPH")]));
          }
        }
      }
    } else {
      _0x518a36 = _0x48c379.FKocc(_0x48c379[_0x5052("‮28c", "YiMU")](_0x219f30[_0x5052("‫28d", "Yb33")](0, _0x219f30[_0x5052("‮97", "Yb33")]("%7D")), _0x518a36), _0x219f30[_0x5052("‫28e", "8l3E")](_0x219f30[_0x5052("‮28f", "41@J")](_0x48c379[_0x5052("‫290", "UtjC")]), _0x219f30[_0x5052("‮291", "4ch@")]));
    }
  }
  return _0x518a36;
}
function checkHasCz(_0x5841a4, _0x11c633) {
  var _0xb59dbe = {
    "zaqQf": function (_0x17dbc7, _0x3c1ef0) {
      return _0x17dbc7 + _0x3c1ef0;
    },
    "FGMTP": _0x5052("‫292", "]#^o"),
    "ZZRNX": function (_0x5b8acf, _0x5512ae) {
      return _0x5b8acf === _0x5512ae;
    },
    "tcKpn": _0x5052("‮293", "FCiy"),
    "LYTft": _0x5052("‫294", "we*^"),
    "qfrJN": function (_0x1a6112, _0x28d4ed) {
      return _0x1a6112 == _0x28d4ed;
    },
    "Ohiaw": _0x5052("‮295", "PXY&")
  };
  let _0x3a2c42 = false;
  if (_0x5841a4) {
    if (_0xb59dbe[_0x5052("‫296", "DR0N")](_0xb59dbe[_0x5052("‫297", "Mv*p")], _0xb59dbe[_0x5052("‫298", "R35v")])) {
      for (var _0x59d8f9 in _0x5841a4) {
        if (_0xb59dbe[_0x5052("‫299", "jJF3")] === _0xb59dbe.LYTft) {
          if (_0xb59dbe[_0x5052("‫29a", "R35v")](_0x5841a4[_0x59d8f9], _0x11c633)) {
            if (_0x5052("‮29b", "]S3K") === _0xb59dbe[_0x5052("‮29c", "TPk]")]) {
              cookiesArr.push(jdCookieNode[item]);
            } else {
              _0x3a2c42 = true;
              break;
            }
          }
        } else {
          console[_0x5052("‮29d", "41@J")](_0xb59dbe[_0x5052("‮29e", "^KsX")](_0xb59dbe[_0x5052("‫29f", "[]v%")](timeFormat(), _0xb59dbe[_0x5052("‫2a0", "[4nm")]), retMsg));
        }
      }
    } else {
      console.log(_0x5052("‮2a1", "QDK4") + process[_0x5052("‫19", "8fKk")][_0x5052("‮2a2", ")y5e")]);
      removeYhq = process.env[_0x5052("‮2a3", "9w!q")][_0x5052("‫2a4", "9w!q")](",");
    }
  }
  return _0x3a2c42;
}
function getUrlQueryParams(_0x5c2860, _0x4a474a) {
  var _0x7f99d = {
    "PbnsF": function (_0x21d549, _0x189ed4) {
      return _0x21d549(_0x189ed4);
    },
    "oRzEa": function (_0x29790e, _0x56ceb0) {
      return _0x29790e + _0x56ceb0;
    },
    "DqtmY": function (_0x3a6dc9, _0x1142bb) {
      return _0x3a6dc9 != _0x1142bb;
    },
    "XFEDF": function (_0x3cd8d8, _0x4ea00f) {
      return _0x3cd8d8 === _0x4ea00f;
    },
    "tMUCY": "XWzHt"
  };
  let _0x34979b = new RegExp(_0x7f99d[_0x5052("‮2a5", "mKg6")](_0x5052("‮2a6", "RzFS") + _0x4a474a, "=([^&]*)(&|$)"), "i");
  let _0x1493f0 = _0x5c2860[_0x5052("‮2a7", "5EPH")]("?")[1][_0x5052("‮2a8", "^KsX")](0)[_0x5052("‮2a9", "mtv9")](_0x34979b);
  if (_0x7f99d[_0x5052("‮2aa", "PXY&")](_0x1493f0, null)) {
    if (_0x7f99d[_0x5052("‫2ab", "UtjC")](_0x7f99d[_0x5052("‫2ac", "08T(")], "Njakh")) {
      console[_0x5052("‫2ad", "cnfr")]("激活码已过期！");
      _0x7f99d[_0x5052("‮2ae", ")y5e")](myNotice, "激活码已过期！");
      return;
    } else {
      return _0x7f99d[_0x5052("‫2af", "RzFS")](decodeURIComponent, _0x1493f0[2]);
    }
  }
  return "";
}
function getDecryptUrl(_0x32b821) {
  var _0x3100a1 = {
    "GTJDv": function (_0x1364c1, _0x59e0f8, _0x443643) {
      return _0x1364c1(_0x59e0f8, _0x443643);
    },
    "RNOTC": function (_0x50cf68, _0x1e9cdd) {
      return _0x50cf68 - _0x1e9cdd;
    },
    "vPEto": function (_0x7392f4, _0x25ed63) {
      return _0x7392f4 + _0x25ed63;
    },
    "SKfAu": function (_0x3fdb8e, _0x492806) {
      return _0x3fdb8e + _0x492806;
    },
    "mCtgZ": function (_0x2b3811, _0x271c5e, _0xa539fa) {
      return _0x2b3811(_0x271c5e, _0xa539fa);
    },
    "ZjTBF": function (_0x463900, _0x2bb9cb) {
      return _0x463900 + _0x2bb9cb;
    },
    "JIfKl": function (_0x58531e, _0xd05010) {
      return _0x58531e + _0xd05010;
    },
    "ikYMi": function (_0x168628, _0x522a5c) {
      return _0x168628 + _0x522a5c;
    },
    "MiHVb": _0x5052("‫2b0", "Am3d"),
    "pHwSS": function (_0x4f3dbb, _0x54b28f) {
      return _0x4f3dbb(_0x54b28f);
    },
    "olcPg": _0x5052("‫2b1", "4ch@")
  };
  _0x32b821 = _0x3100a1[_0x5052("‮2b2", "4ch@")](_0x3100a1[_0x5052("‮2b3", "8fKk")](_0x32b821, _0x5052("‫2b4", "41@J")), Date[_0x5052("‮2b5", "DR0N")]());
  stk = _0x3100a1[_0x5052("‮2b6", "^KsX")](getUrlQueryParams, _0x32b821, _0x5052("‫2b7", "8fKk"));
  if (stk) {
    const _0xd6c6b9 = format("yyyyMMddhhmmssSSS", Date[_0x5052("‫2b8", "FpQe")]());
    const _0x4380cc = $[_0x5052("‫2b9", "^!R*")]($[_0x5052("‮2ba", "8l3E")], $.fp.toString(), _0xd6c6b9[_0x5052("‫2bb", "9QYx")](), $[_0x5052("‮2bc", "5EPH")][_0x5052("‫2bd", "R35v")](), $[_0x5052("‫2be", "9QYx")]).toString($[_0x5052("‮2bf", "8PzM")][_0x5052("‮2c0", "[]v%")][_0x5052("‮2c1", "jJF3")]);
    let _0x1405d0 = "";
    stk.split(",")[_0x5052("‮2c2", "5EPH")]((_0x9b89b2, _0x1bd3cc) => {
      _0x1405d0 += _0x9b89b2 + ":" + _0x3100a1[_0x5052("‮2c3", "TPk]")](getUrlQueryParams, _0x32b821, _0x9b89b2) + (_0x1bd3cc === _0x3100a1.RNOTC(stk[_0x5052("‮2c4", "8sVZ")](",")[_0x5052("‫2c5", "LCu@")], 1) ? "" : "&");
    });
    const _0x54d36a = $[_0x5052("‫2c6", "^Xpb")].HmacSHA256(_0x1405d0, _0x4380cc[_0x5052("‫2c7", "]#^o")]())[_0x5052("‫2c8", "jJF3")]($[_0x5052("‮2c9", "8fKk")][_0x5052("‮2ca", "YiMU")].Hex);
    return _0x3100a1[_0x5052("‫2cb", "YiMU")](_0x3100a1[_0x5052("‫2cc", "VmNE")](_0x3100a1[_0x5052("‫2cd", "mKg6")](_0x3100a1[_0x5052("‮2ce", "8l3E")](_0x32b821, _0x3100a1[_0x5052("‫2cf", "8fKk")]), _0x3100a1[_0x5052("‮2d0", "YiMU")](encodeURIComponent, [""[_0x5052("‫2d1", "cnfr")](_0xd6c6b9[_0x5052("‫2d2", "C97v")]()), ""[_0x5052("‫2d3", "41@J")]($.fp[_0x5052("‮2d4", "DR0N")]()), ""[_0x5052("‮2d5", "08T(")]($[_0x5052("‫2d6", "]#^o")][_0x5052("‮2d7", "LCu@")]()), "".concat($.token), ""[_0x5052("‫2d8", "8sVZ")](_0x54d36a), _0x3100a1[_0x5052("‫2d9", "8l3E")].concat(_0xd6c6b9)][_0x5052("‫2da", "LCu@")](";"))), "&__t="), Date.now());
  }
}
async function requestAlgo() {
  var _0x54220c = {
    "kptuG": _0x5052("‫2db", "[4nm"),
    "DGvJZ": _0x5052("‮2dc", "FpQe"),
    "FbzqW": "8ba9b",
    "gghKz": function (_0x5b316e, _0x3bdfeb) {
      return _0x5b316e + _0x3bdfeb;
    },
    "HWNXN": _0x5052("‮2dd", "9QYx"),
    "NefOV": _0x5052("‮2de", "DR0N"),
    "SEVac": _0x5052("‮2df", "PXY&"),
    "BCUhk": _0x5052("‮2e0", "mtv9"),
    "DqcOy": _0x5052("‫2e1", "[J&F"),
    "qSrKC": "https://st.jingxi.com/",
    "ZaZxz": _0x5052("‮2e2", "UtjC"),
    "eIMUr": _0x5052("‮2e3", "]S3K")
  };
  $[_0x5052("‫2e4", "Mv*p")] = _0x54220c[_0x5052("‫2e5", "9QYx")];
  $.fp = _0x54220c[_0x5052("‫2e6", "FCiy")](getRandomIDPro({
    "size": 13
  }), Date[_0x5052("‮2e7", "8uLF")]())[_0x5052("‫2e8", "VmNE")](0, 16);
  const _0x11ab8a = {
    "url": _0x5052("‫2e9", "TPk]"),
    "headers": {
      "Authority": _0x5052("‮2ea", "4ch@"),
      "Pragma": _0x54220c.HWNXN,
      "Cache-Control": _0x5052("‫2eb", "R35v"),
      "Accept": "application/json",
      "Content-Type": _0x54220c[_0x5052("‫2ec", "8fKk")],
      "Origin": _0x54220c.SEVac,
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": $[_0x5052("‮2ed", "[J&F")],
      "Sec-Fetch-Mode": _0x54220c.BCUhk,
      "Sec-Fetch-Dest": _0x54220c[_0x5052("‮2ee", "YiMU")],
      "Referer": _0x54220c.qSrKC,
      "Accept-Language": _0x54220c.ZaZxz
    },
    "body": JSON[_0x5052("‮2ef", "]#^o")]({
      "version": _0x54220c[_0x5052("‮2f0", "C97v")],
      "fp": $.fp,
      "appId": $.appId,
      "timestamp": Date[_0x5052("‮2f1", "jJF3")](),
      "platform": _0x5052("‫2f2", "]S3K"),
      "expandParams": ""
    })
  };
  return new Promise(async _0x488ac6 => {
    $[_0x5052("‫2f3", "^!R*")](_0x11ab8a, (_0x4c3eb9, _0x6fe77c, _0x29dcb7) => {
      var _0x4bb272 = {
        "EDuzf": _0x54220c[_0x5052("‮2f4", "8fKk")]
      };
      try {
        const {
          ret,
          msg,
          data: {
            result
          } = {}
        } = JSON.parse(_0x29dcb7);
        $[_0x5052("‫2f5", "*KQ9")] = result.tk;
        $.genKey = new Function(_0x5052("‫2f6", "]#^o") + result[_0x5052("‫2f7", "LCu@")])();
      } catch (_0xd09983) {
        if (_0x54220c[_0x5052("‫2f8", "]S3K")] !== _0x54220c[_0x5052("‮2f9", "VmNE")]) {
          console[_0x5052("‮df", "UtjC")](_0x4bb272[_0x5052("‫2fa", "8fKk")]);
          return;
        } else {
          $[_0x5052("‫2fb", "^Xpb")](_0xd09983, _0x6fe77c);
        }
      } finally {
        _0x488ac6();
      }
    });
  });
}
function getRandomIDPro() {
  var _0x1fe3eb = {
    "hDcGX": function (_0x5abad3, _0xd378d1) {
      return _0x5abad3 === _0xd378d1;
    },
    "WrEZT": _0x5052("‮2fc", "R35v"),
    "tZGup": _0x5052("‫2fd", "RzFS"),
    "jKzkF": _0x5052("‫2fe", "PXY&"),
    "bimkh": "max",
    "LiuvC": _0x5052("‮2ff", "[]v%"),
    "WhYoy": "0123456789",
    "QnyVe": function (_0x29b9e4, _0x489f80) {
      return _0x29b9e4 * _0x489f80;
    }
  };
  var _0x913bc7,
    _0x4d9ca8,
    _0x4b6846 = _0x1fe3eb.hDcGX(void 0, _0x2a778c = (_0x4d9ca8 = 0 < arguments[_0x5052("‫300", "jJF3")] && void 0 !== arguments[0] ? arguments[0] : {})[_0x5052("‫301", "]#^o")]) ? 10 : _0x2a778c,
    _0x2a778c = _0x1fe3eb[_0x5052("‮302", "VmNE")](void 0, _0x2a778c = _0x4d9ca8[_0x5052("‮303", "]bBl")]) ? _0x1fe3eb.WrEZT : _0x2a778c,
    _0x438168 = "";
  if ((_0x4d9ca8 = _0x4d9ca8[_0x5052("‫304", "5EPH")]) && _0x1fe3eb[_0x5052("‮305", "Am3d")] == typeof _0x4d9ca8) _0x913bc7 = _0x4d9ca8;else switch (_0x2a778c) {
    case _0x1fe3eb[_0x5052("‮306", "Go#(")]:
      _0x913bc7 = _0x5052("‫307", "W^X#");
      break;
    case _0x1fe3eb.bimkh:
      _0x913bc7 = _0x1fe3eb[_0x5052("‮308", "TPk]")];
      break;
    case _0x1fe3eb[_0x5052("‮309", "08T(")]:
    default:
      _0x913bc7 = _0x1fe3eb[_0x5052("‮30a", "9w!q")];
  }
  for (; _0x4b6846--;) _0x438168 += _0x913bc7[_0x1fe3eb.QnyVe(Math[_0x5052("‮30b", "[J&F")](), _0x913bc7.length) | 0];
  return _0x438168;
}
function format(_0x2fe73b, _0x522e5c) {
  var _0x464c0f = {
    "GBump": function (_0x15c517, _0x4c90c6) {
      return _0x15c517 + _0x4c90c6;
    },
    "DMGYo": function (_0x598558, _0x5304b3) {
      return _0x598558 === _0x5304b3;
    },
    "btfVS": function (_0x28fbda, _0x252dd5) {
      return _0x28fbda == _0x252dd5;
    },
    "qlqJe": function (_0x22dc13, _0x1de1be) {
      return _0x22dc13 === _0x1de1be;
    },
    "NpFeS": _0x5052("‫30c", "Yb33"),
    "PljcL": function (_0x413e28, _0x4a8cda) {
      return _0x413e28 + _0x4a8cda;
    },
    "JEKuK": function (_0xfc48a9, _0x516ff0) {
      return _0xfc48a9 / _0x516ff0;
    },
    "qPIcl": function (_0x477476, _0x12f13e) {
      return _0x477476 - _0x12f13e;
    }
  };
  if (!_0x2fe73b) _0x2fe73b = _0x5052("‫30d", "8PzM");
  var _0x5ba465;
  if (!_0x522e5c) {
    if (_0x464c0f.qlqJe(_0x464c0f[_0x5052("‫30e", "41@J")], _0x464c0f[_0x5052("‫30f", "8fKk")])) {
      _0x5ba465 = Date[_0x5052("‮310", "[]v%")]();
    } else {
      ckerror.push(ckindex);
      myNotice(_0x5052("‮311", "]S3K") + _0x464c0f[_0x5052("‮312", "Yb33")](ckindex, 1) + "】" + userName + _0x5052("‮313", "5EPH"));
    }
  } else {
    _0x5ba465 = new Date(_0x522e5c);
  }
  var _0x2506d6 = new Date(_0x5ba465),
    _0x24678f = _0x2fe73b,
    _0x5822b1 = {
      "M+": _0x464c0f[_0x5052("‮314", "R35v")](_0x2506d6.getMonth(), 1),
      "d+": _0x2506d6[_0x5052("‫315", "VmNE")](),
      "D+": _0x2506d6[_0x5052("‫316", "5EPH")](),
      "h+": _0x2506d6[_0x5052("‫317", "^!R*")](),
      "H+": _0x2506d6.getHours(),
      "m+": _0x2506d6[_0x5052("‫318", "UtjC")](),
      "s+": _0x2506d6[_0x5052("‮319", "^KsX")](),
      "w+": _0x2506d6[_0x5052("‫31a", "4ch@")](),
      "q+": Math[_0x5052("‫31b", "C97v")](_0x464c0f[_0x5052("‫31c", "mKg6")](_0x2506d6[_0x5052("‫31d", "]#^o")]() + 3, 3)),
      "S+": _0x2506d6[_0x5052("‮31e", "8fKk")]()
    };
  /(y+)/i[_0x5052("‫31f", "^KsX")](_0x24678f) && (_0x24678f = _0x24678f[_0x5052("‮320", "TPk]")](RegExp.$1, ""[_0x5052("‫321", "9QYx")](_0x2506d6[_0x5052("‮26a", ")y5e")]()).substr(_0x464c0f.qPIcl(4, RegExp.$1[_0x5052("‮33", "C97v")]))));
  Object.keys(_0x5822b1).forEach(_0x213a23 => {
    if (new RegExp("("[_0x5052("‫2d3", "41@J")](_0x213a23, ")"))[_0x5052("‫322", "Am3d")](_0x24678f)) {
      var _0x2fe73b = _0x464c0f[_0x5052("‫323", "2qsx")]("S+", _0x213a23) ? "000" : "00";
      _0x24678f = _0x24678f.replace(RegExp.$1, _0x464c0f[_0x5052("‮324", "^Xpb")](1, RegExp.$1[_0x5052("‮325", "9w!q")]) ? _0x5822b1[_0x213a23] : ""[_0x5052("‫326", "jJF3")](_0x2fe73b)[_0x5052("‮327", "8l3E")](_0x5822b1[_0x213a23]).substr(""[_0x5052("‫328", "UtjC")](_0x5822b1[_0x213a23])[_0x5052("‮329", "08T(")]));
    }
  });
  return _0x24678f;
}
_0xod2 = "jsjiami.com.v6";
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
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
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
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
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
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
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
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
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
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
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
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
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
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
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else if (this.isQuanX()) {
        t.method = "POST";
        this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        }));
        $task.fetch(t).then(t => {
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
        }, t => e(t));
      } else if (this.isNode()) {
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
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
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
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}