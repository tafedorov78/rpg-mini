System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventManager, GameEvents, BaseState, FinishState, _crd;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../eventManager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvents(extras) {
    _reporterNs.report("GameEvents", "../../../gameEvents/GameEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseState(extras) {
    _reporterNs.report("BaseState", "../../../state-machine/BaseState", _context.meta, extras);
  }

  _export("FinishState", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "829cfpUVFhFm7cGDAiacl5C", "FinishState", undefined);

      _export("FinishState", FinishState = class FinishState extends (_crd && BaseState === void 0 ? (_reportPossibleCrUseOfBaseState({
        error: Error()
      }), BaseState) : BaseState) {
        constructor(...args) {
          super(...args);

          this.end = () => {};
        }

        begin(data) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvents === void 0 ? (_reportPossibleCrUseOfGameEvents({
            error: Error()
          }), GameEvents) : GameEvents).FINISH_START);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add((_crd && GameEvents === void 0 ? (_reportPossibleCrUseOfGameEvents({
            error: Error()
          }), GameEvents) : GameEvents).FINISH_END, this.end);
        }

        cleanUp() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3095c90091aa0433c16dea065db3175809080ac9.js.map