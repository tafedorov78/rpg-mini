System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseState, _crd;

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  _export("BaseState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0b63ll00xHu43ynoZAqHom", "BaseState", undefined);

      _export("BaseState", BaseState = class BaseState {
        constructor(stateMachine, id, model) {
          this.stateMachine = void 0;
          this.model = void 0;
          this.id = void 0;

          this.end = data => {};

          this.stateMachine = stateMachine;
          this.model = model;
          this.id = id;
        }

        begin(data) {}

        cleanUp() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16a31ff9c1943f1ce1e28af0881cf4c5f8b48d96.js.map