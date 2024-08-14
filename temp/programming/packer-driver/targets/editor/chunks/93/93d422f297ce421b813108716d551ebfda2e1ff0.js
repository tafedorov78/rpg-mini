System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, Score;

  function _reportPossibleCrUseOfHeroConfig(extras) {
    _reporterNs.report("HeroConfig", "./ConfigTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caa75l/yHlApoJsvg1NHWcw", "GameTypes", undefined);

      _export("Score", Score = /*#__PURE__*/function (Score) {
        Score[Score["NOT_AVAILABLE"] = 0] = "NOT_AVAILABLE";
        Score[Score["BAD"] = 1] = "BAD";
        Score[Score["AVERAGE"] = 1] = "AVERAGE";
        Score[Score["EXELLENT"] = 3] = "EXELLENT";
        return Score;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93d422f297ce421b813108716d551ebfda2e1ff0.js.map