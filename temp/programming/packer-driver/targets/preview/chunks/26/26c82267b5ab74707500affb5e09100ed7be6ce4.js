System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventManager, GameEvents, BaseState, GameStates, BuildState, _crd;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../eventManager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvents(extras) {
    _reporterNs.report("GameEvents", "../../../gameEvents/GameEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseState(extras) {
    _reporterNs.report("BaseState", "../../../state-machine/BaseState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStates(extras) {
    _reporterNs.report("GameStates", "../StatesEnum", _context.meta, extras);
  }

  _export("BuildState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      GameEvents = _unresolved_3.GameEvents;
    }, function (_unresolved_4) {
      BaseState = _unresolved_4.BaseState;
    }, function (_unresolved_5) {
      GameStates = _unresolved_5.GameStates;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e6caOgjvpO37WOSbVbQYbh", "BuildState", undefined);

      _export("BuildState", BuildState = class BuildState extends (_crd && BaseState === void 0 ? (_reportPossibleCrUseOfBaseState({
        error: Error()
      }), BaseState) : BaseState) {
        constructor() {
          super(...arguments);

          this.end = data => {
            this.stateMachine.setState((_crd && GameStates === void 0 ? (_reportPossibleCrUseOfGameStates({
              error: Error()
            }), GameStates) : GameStates).POSITIONING, data);
          };
        }

        begin(data) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvents === void 0 ? (_reportPossibleCrUseOfGameEvents({
            error: Error()
          }), GameEvents) : GameEvents).BUILD_START);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add((_crd && GameEvents === void 0 ? (_reportPossibleCrUseOfGameEvents({
            error: Error()
          }), GameEvents) : GameEvents).BUILD_END, this.end);
        }

        cleanUp() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26c82267b5ab74707500affb5e09100ed7be6ce4.js.map