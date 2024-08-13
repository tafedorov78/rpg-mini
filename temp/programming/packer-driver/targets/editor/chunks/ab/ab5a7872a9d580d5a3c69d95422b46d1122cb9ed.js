System.register(["__unresolved_0", "cc", "scripts/libs/state-machine/StateMachine", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StateMachine, ActionState, PlaningState, GameStateMachine, _crd;

  function _reportPossibleCrUseOfIStateMachine(extras) {
    _reporterNs.report("IStateMachine", "scripts/libs/state-machine/IStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "scripts/libs/state-machine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "./states/ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaningState(extras) {
    _reporterNs.report("PlaningState", "./states/PlanningState", _context.meta, extras);
  }

  _export("GameStateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_scriptsLibsStateMachineStateMachine) {
      StateMachine = _scriptsLibsStateMachineStateMachine.StateMachine;
    }, function (_unresolved_2) {
      ActionState = _unresolved_2.ActionState;
    }, function (_unresolved_3) {
      PlaningState = _unresolved_3.PlaningState;
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
          this.addState(_crd && PlaningState === void 0 ? (_reportPossibleCrUseOfPlaningState({
            error: Error()
          }), PlaningState) : PlaningState, stateEnum.PLANING);
          this.addState(_crd && ActionState === void 0 ? (_reportPossibleCrUseOfActionState({
            error: Error()
          }), ActionState) : ActionState, stateEnum.ACTION);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab5a7872a9d580d5a3c69d95422b46d1122cb9ed.js.map