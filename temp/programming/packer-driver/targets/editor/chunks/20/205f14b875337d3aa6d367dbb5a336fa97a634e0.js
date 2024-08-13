System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameStateMachine, GameStates, _dec, _class, _crd, ccclass, property, GameModelComponent;

  function _reportPossibleCrUseOfGameStateMachine(extras) {
    _reporterNs.report("GameStateMachine", "./gameStateMachine/GameStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStates(extras) {
    _reporterNs.report("GameStates", "./gameStateMachine/StatesEnum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameStateMachine = _unresolved_2.GameStateMachine;
    }, function (_unresolved_3) {
      GameStates = _unresolved_3.GameStates;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e5ceGL23VPjaInxWcgy/oH", "GameModelComponent", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameModelComponent", GameModelComponent = (_dec = ccclass('GameModelComponent'), _dec(_class = class GameModelComponent extends Component {
        constructor(...args) {
          super(...args);
          this.gameStateMachine = void 0;
        }

        start() {
          this.gameStateMachine = new (_crd && GameStateMachine === void 0 ? (_reportPossibleCrUseOfGameStateMachine({
            error: Error()
          }), GameStateMachine) : GameStateMachine)(this, _crd && GameStates === void 0 ? (_reportPossibleCrUseOfGameStates({
            error: Error()
          }), GameStates) : GameStates);
          this.gameStateMachine.setState((_crd && GameStates === void 0 ? (_reportPossibleCrUseOfGameStates({
            error: Error()
          }), GameStates) : GameStates).BUILDING);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=205f14b875337d3aa6d367dbb5a336fa97a634e0.js.map