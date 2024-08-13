System.register(["__unresolved_0", "cc", "scripts/libs/state-machine/BaseState", "__unresolved_1", "scripts/libs/state-machine/events/EventManager", "scripts/gameEvents/GameEvents", "scripts/settings/GameSettings"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseState, GameStates, EventManager, GameEvents, GameSettings, PlaningState, _crd;

  function _reportPossibleCrUseOfBaseState(extras) {
    _reporterNs.report("BaseState", "scripts/libs/state-machine/BaseState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStates(extras) {
    _reporterNs.report("GameStates", "../StatesEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "scripts/libs/state-machine/events/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvents(extras) {
    _reporterNs.report("GameEvents", "scripts/gameEvents/GameEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSettings(extras) {
    _reporterNs.report("GameSettings", "scripts/settings/GameSettings", _context.meta, extras);
  }

  _export("PlaningState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_scriptsLibsStateMachineBaseState) {
      BaseState = _scriptsLibsStateMachineBaseState.BaseState;
    }, function (_unresolved_2) {
      GameStates = _unresolved_2.GameStates;
    }, function (_scriptsLibsStateMachineEventsEventManager) {
      EventManager = _scriptsLibsStateMachineEventsEventManager.default;
    }, function (_scriptsGameEventsGameEvents) {
      GameEvents = _scriptsGameEventsGameEvents.GameEvents;
    }, function (_scriptsSettingsGameSettings) {
      GameSettings = _scriptsSettingsGameSettings.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36fd6kDLFxN0pBBtFh6ON11", "PositioningState-001", undefined);

      _export("PlaningState", PlaningState = class PlaningState extends (_crd && BaseState === void 0 ? (_reportPossibleCrUseOfBaseState({
        error: Error()
      }), BaseState) : BaseState) {
        constructor(...args) {
          super(...args);

          this.end = () => {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && GameEvents === void 0 ? (_reportPossibleCrUseOfGameEvents({
              error: Error()
            }), GameEvents) : GameEvents).PLANING_END);
            this.stateMachine.setState((_crd && GameStates === void 0 ? (_reportPossibleCrUseOfGameStates({
              error: Error()
            }), GameStates) : GameStates).ACTION);
          };
        }

        begin(data) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvents === void 0 ? (_reportPossibleCrUseOfGameEvents({
            error: Error()
          }), GameEvents) : GameEvents).PLANING_START, {
            duration: (_crd && GameSettings === void 0 ? (_reportPossibleCrUseOfGameSettings({
              error: Error()
            }), GameSettings) : GameSettings).PLANING_DURATION
          });
          setTimeout(this.end, (_crd && GameSettings === void 0 ? (_reportPossibleCrUseOfGameSettings({
            error: Error()
          }), GameSettings) : GameSettings).PLANING_DURATION * 1000);
        }

        cleanUp() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88366665067a523decdb3332a370b020c27d8e8e.js.map