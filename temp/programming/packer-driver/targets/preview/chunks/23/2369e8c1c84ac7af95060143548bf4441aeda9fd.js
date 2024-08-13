System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventManager, StateMachineEvents, StateMachine, _crd;

  function _reportPossibleCrUseOfIStateMachine(extras) {
    _reporterNs.report("IStateMachine", "./IStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseState(extras) {
    _reporterNs.report("BaseState", "./BaseState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./events/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachineEvents(extras) {
    _reporterNs.report("StateMachineEvents", "./StateMachineEvents", _context.meta, extras);
  }

  _export("StateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      StateMachineEvents = _unresolved_3.StateMachineEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "558bcExDXxGe7yCBADVtVT9", "StateMachine", undefined);

      _export("StateMachine", StateMachine = class StateMachine {
        constructor(model, stateEnum) {
          this.model = void 0;
          this.currentState = void 0;
          this.idsMap = void 0;
          this.statesMap = void 0;
          this.currentStateName = void 0;
          this.statesEnum = void 0;
          this.model = model;
          this.currentState = null;
          this.idsMap = new Map();
          this.statesMap = new Map();
          this.currentStateName = "";
          this.init(stateEnum);
        }

        init(stateEnum) {
          this.statesEnum = stateEnum;
        }

        addState(StatesEnum, id) {
          var stateId = this.getStateId(id);

          if (this.idsMap.has(stateId)) {
            throw new Error("State already defined: " + stateId);
          }

          this.idsMap.set(id, stateId);
          this.statesMap.set(id, new StatesEnum(this, id, this.model));
        }

        getStateId(id) {
          for (var name in this.statesEnum) {
            if (id === this.statesEnum[name]) {
              return name;
            }
          }
        }

        setState(id, data, isSkipped) {
          if (this.currentState) {
            this.currentState.cleanUp();
          }

          this.currentState = this.statesMap.get(id);
          this.currentStateName = this.idsMap.get(id);
          this.stateChanged(this.idsMap.get(id), this.model);
          this.currentState.begin(data);
        }

        stateChanged(id, model) {
          console.log("STATE CHANGED::" + id);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && StateMachineEvents === void 0 ? (_reportPossibleCrUseOfStateMachineEvents({
            error: Error()
          }), StateMachineEvents) : StateMachineEvents).STATE_CHANGED, id);
          model.currentState = this.currentStateName;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2369e8c1c84ac7af95060143548bf4441aeda9fd.js.map