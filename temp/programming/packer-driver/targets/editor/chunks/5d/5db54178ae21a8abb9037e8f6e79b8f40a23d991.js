System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StateMachine, BattleState, BuildState, FinishState, PositioningState, GameStateMachine, _crd;

  function _reportPossibleCrUseOfIStateMachine(extras) {
    _reporterNs.report("IStateMachine", "../../state-machine/IStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../state-machine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleState(extras) {
    _reporterNs.report("BattleState", "./states/BattleState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildState(extras) {
    _reporterNs.report("BuildState", "./states/BuildState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFinishState(extras) {
    _reporterNs.report("FinishState", "./states/FinishState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPositioningState(extras) {
    _reporterNs.report("PositioningState", "./states/PositioningState", _context.meta, extras);
  }

  _export("GameStateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StateMachine = _unresolved_2.StateMachine;
    }, function (_unresolved_3) {
      BattleState = _unresolved_3.BattleState;
    }, function (_unresolved_4) {
      BuildState = _unresolved_4.BuildState;
    }, function (_unresolved_5) {
      FinishState = _unresolved_5.FinishState;
    }, function (_unresolved_6) {
      PositioningState = _unresolved_6.PositioningState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c350e/bFOpMcLL1qSj83maT", "GameStateMachine", undefined);

      _export("GameStateMachine", GameStateMachine = class GameStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        constructor(model, stateEnum) {
          super(model, stateEnum);
        }

        init(stateEnum) {
          super.init(stateEnum);
          this.addState(_crd && BuildState === void 0 ? (_reportPossibleCrUseOfBuildState({
            error: Error()
          }), BuildState) : BuildState, stateEnum.BUILDING);
          this.addState(_crd && PositioningState === void 0 ? (_reportPossibleCrUseOfPositioningState({
            error: Error()
          }), PositioningState) : PositioningState, stateEnum.POSITIONING);
          this.addState(_crd && BattleState === void 0 ? (_reportPossibleCrUseOfBattleState({
            error: Error()
          }), BattleState) : BattleState, stateEnum.BATTLE);
          this.addState(_crd && FinishState === void 0 ? (_reportPossibleCrUseOfFinishState({
            error: Error()
          }), FinishState) : FinishState, stateEnum.FINISH);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5db54178ae21a8abb9037e8f6e79b8f40a23d991.js.map