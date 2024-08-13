System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameEvents;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05963g2VadOKKLeZePXUR+u", "GameEvents", undefined);

      _export("GameEvents", GameEvents = /*#__PURE__*/function (GameEvents) {
        GameEvents["BUILD_START"] = "BUILD_START";
        GameEvents["BUILD_END"] = "BUILD_END";
        GameEvents["POSITION_START"] = "POSITION_START";
        GameEvents["POSITION_END"] = "POSITION_END";
        GameEvents["BATTLE_START"] = "BATTLE_START";
        GameEvents["BATTLE_END"] = "BATTLE_END";
        GameEvents["FINISH_START"] = "FINISH_START";
        GameEvents["FINISH_END"] = "FINISH_END";
        return GameEvents;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b52bac560769ba5d52043ae1c963113c905ed23.js.map