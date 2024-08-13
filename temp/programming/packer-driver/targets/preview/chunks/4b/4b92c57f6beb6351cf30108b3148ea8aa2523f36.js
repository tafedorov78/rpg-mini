System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, instantiate, Prefab, ScrollView, SpriteFrame, Facade, HeroCardComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, HeroesTabComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroCardComponent(extras) {
    _reporterNs.report("HeroCardComponent", "../../prefabs/heroCard/scripts/HeroCardComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../ConfigTypes", _context.meta, extras);
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
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }, function (_unresolved_3) {
      HeroCardComponent = _unresolved_3.HeroCardComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9944a7cC2JCQ6gAtHENJro3", "HeroesTabComponent", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'instantiate', 'Node', 'Prefab', 'ScrollView', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroesTabComponent", HeroesTabComponent = (_dec = ccclass('HeroesTabComponent'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: ScrollView
      }), _dec(_class = (_class2 = class HeroesTabComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "heroCard", _descriptor, this);

          _initializerDefineProperty(this, "ScrollView", _descriptor2, this);

          this.checkedHeroes = [];
          this.cards = [];
          this.gameConfig = void 0;
          this.heroesConfig = void 0;

          this.onCardChecked = id => {
            var heroConfig = this.heroesConfig.find(hero => hero.id === id);
            this.checkedHeroes.push(heroConfig);
          };

          this.onCardUnchecked = id => {
            var heroConfig = this.heroesConfig.find(hero => hero.id === id);
            this.checkedHeroes.splice(this.checkedHeroes.indexOf(heroConfig), 1);
          };
        }

        onLoad() {
          this.gameConfig = (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).json;
          this.heroesConfig = this.gameConfig.heroesConfig;
          var bundle = assetManager.getBundle('HeroesIcon');
          this.heroesConfig.forEach(hero => {
            bundle.load(hero.icon + "/spriteFrame", SpriteFrame, (err, spriteFrame) => {
              if (err) {
                console.error('Error loading SpriteFrame from bundle:', err);
                return;
              }

              var card = this.createCard(spriteFrame, hero);
              card.node.on('checked', this.onCardChecked);
              card.node.on('unchecked', this.onCardUnchecked);
              this.cards.push(card);
              this.ScrollView.content.addChild(card.node);
            });
          });
        }

        createCard(spriteFrame, data) {
          var card = instantiate(this.heroCard);
          var heroCardComponent = card.getComponent(_crd && HeroCardComponent === void 0 ? (_reportPossibleCrUseOfHeroCardComponent({
            error: Error()
          }), HeroCardComponent) : HeroCardComponent);
          heroCardComponent.setIcon(spriteFrame);
          heroCardComponent.setData(data);
          return heroCardComponent;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "heroCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView", [_dec3], {
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
//# sourceMappingURL=4b92c57f6beb6351cf30108b3148ea8aa2523f36.js.map