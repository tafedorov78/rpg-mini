System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, Animation, Node, Facade, HeroesTabComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MainMenuScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroesTabComponent(extras) {
    _reporterNs.report("HeroesTabComponent", "../components/HeroesTabComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroConfig(extras) {
    _reporterNs.report("HeroConfig", "../ConfigTypes", _context.meta, extras);
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
      Button = _cc.Button;
      director = _cc.director;
      Animation = _cc.Animation;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }, function (_unresolved_3) {
      HeroesTabComponent = _unresolved_3.HeroesTabComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79240dvVKdARZ+gU5iBeIKK", "MainMenuScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Button', 'director', 'Animation', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenuScene", MainMenuScene = (_dec = ccclass('MainMenuScene'), _dec2 = property(Button), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class MainMenuScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startGameButton", _descriptor, this);

          _initializerDefineProperty(this, "HeroesTab", _descriptor2, this);
        }

        start() {
          this.startGameButton.node.on('click', this.onStartGame, this);
          this.startGameButton.node.active = false;
        }

        onStartGame() {
          director.loadScene('GameScene'); // Switch to GameScene when the button is clicked
        }

        showHeroesTab() {
          this.HeroesTab.getComponent(Animation).play('HeroesTabOpen');
        }

        closeHeroesTab() {
          (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).battleData = {
            team1: {
              name: 'player',
              heroes: this.HeroesTab.getComponent(_crd && HeroesTabComponent === void 0 ? (_reportPossibleCrUseOfHeroesTabComponent({
                error: Error()
              }), HeroesTabComponent) : HeroesTabComponent).checkedHeroes
            },
            team2: {
              name: 'pc',
              heroes: this.getEnemyTeam((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
                error: Error()
              }), Facade) : Facade).json.heroesConfig, 5)
            }
          };
          this.HeroesTab.getComponent(Animation).play('HeroesTabClose');

          if ((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).battleData.team1.heroes.length > 0 && (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).battleData.team2.heroes.length > 0) {
            this.startGameButton.node.active = true;
          }
        }

        getEnemyTeam(heroesConfig, count) {
          const uniqueElements = Array.from(new Set(heroesConfig));

          for (let i = uniqueElements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [uniqueElements[i], uniqueElements[j]] = [uniqueElements[j], uniqueElements[i]];
          }

          return uniqueElements.slice(0, count);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startGameButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "HeroesTab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f39d870a8bdc819c446eaacb2fccd004d7cf2e5.js.map