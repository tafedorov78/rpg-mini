System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameStates;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "007e1Fv2RNOqLKs7cspbMjY", "StatesEnum", undefined);

      _export("GameStates", GameStates = /*#__PURE__*/function (GameStates) {
        GameStates["BUILDING"] = "BUILDING";
        GameStates["POSITIONING"] = "POSITIONING";
        GameStates["BATTLE"] = "BATTLE";
        GameStates["FINISH"] = "FINISH";
        return GameStates;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e0172cf40ca9937762de2e7dcbd2aa9cb24b727.js.map