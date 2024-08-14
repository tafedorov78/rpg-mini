System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, TeamsBuilderComponent, Facade, EventManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTeamsBuilderComponent(extras) {
    _reporterNs.report("TeamsBuilderComponent", "../components/TeamsBuilderComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../eventManager/EventManager", _context.meta, extras);
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
      director = _cc.director;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      TeamsBuilderComponent = _unresolved_2.TeamsBuilderComponent;
    }, function (_unresolved_3) {
      Facade = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95bdaIE/fdLPZJNPc1bM4To", "GameScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScene", GameScene = (_dec = ccclass('GameScene'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: _crd && TeamsBuilderComponent === void 0 ? (_reportPossibleCrUseOfTeamsBuilderComponent({
          error: Error()
        }), TeamsBuilderComponent) : TeamsBuilderComponent
      }), _dec(_class = (_class2 = class GameScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "NavigateToMenuButton", _descriptor, this);

          _initializerDefineProperty(this, "TeamsBuilderComponent", _descriptor2, this);

          this.showNavigateButton = () => {
            this.scheduleOnce(() => {
              this.NavigateToMenuButton.active = true;
            }, 2);
          };
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add('roundEnd', this.showNavigateButton);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('roundEnd', this.showNavigateButton);
        }

        start() {
          this.NavigateToMenuButton.active = false;
          this.scheduleOnce(() => {
            this.TeamsBuilderComponent.init((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).battleData);
          }, 1);
        }

        onNavigateToMenu() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('victory', this.showNavigateButton);
          director.loadScene('MainMenuScene');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NavigateToMenuButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TeamsBuilderComponent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d5562698e441ffb1f9bcaca967797b791f781af.js.map