System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Button, Component, director, log, Node, FrameSwitcher, HeroesTabComponent, Facade, Score, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MainMenuScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFrameSwitcher(extras) {
    _reporterNs.report("FrameSwitcher", "../../prefabs/ImageSwitcher/ImageSwitcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeam(extras) {
    _reporterNs.report("Team", "../components/BattleComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroesTabComponent(extras) {
    _reporterNs.report("HeroesTabComponent", "../components/HeroesTabComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroConfig(extras) {
    _reporterNs.report("HeroConfig", "../ConfigTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLevel(extras) {
    _reporterNs.report("GameLevel", "../GameTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScore(extras) {
    _reporterNs.report("Score", "../GameTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      log = _cc.log;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      FrameSwitcher = _unresolved_2.FrameSwitcher;
    }, function (_unresolved_3) {
      HeroesTabComponent = _unresolved_3.HeroesTabComponent;
    }, function (_unresolved_4) {
      Facade = _unresolved_4.default;
    }, function (_unresolved_5) {
      Score = _unresolved_5.Score;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79240dvVKdARZ+gU5iBeIKK", "MainMenuScene", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'Component', 'director', 'EventTouch', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenuScene", MainMenuScene = (_dec = ccclass('MainMenuScene'), _dec2 = property(Button), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class MainMenuScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startGameButton", _descriptor, this);

          _initializerDefineProperty(this, "HeroesTab", _descriptor2, this);

          _initializerDefineProperty(this, "LevelsIconsContainer", _descriptor3, this);

          this.levelIconsUpdate = team => {
            let totalHP = 0;
            team.heroes.forEach(hero => {
              totalHP += hero.HP;
            });
            let score = this.calculateScore(totalHP);
            (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).levelsData[(_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).levelid].score = score;
            const icon = this.LevelsIconsContainer.getChildByName(`LevelIcon${(_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).levelid}`);

            if (totalHP === 0) {
              score = (_crd && Score === void 0 ? (_reportPossibleCrUseOfScore({
                error: Error()
              }), Score) : Score).NOT_AVAILABLE;
            }

            icon.getComponent(_crd && FrameSwitcher === void 0 ? (_reportPossibleCrUseOfFrameSwitcher({
              error: Error()
            }), FrameSwitcher) : FrameSwitcher).currentFrameIndex = score;
            this.save();
          };
        }

        onEnable() {
          if ((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).team) {
            this.levelIconsUpdate((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).team);
            (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).team = null;
          }
        }

        calculateScore(value) {
          if (value === 0) return 0;

          if (value > 500) {
            throw new Error("Value must be between 1 and 500");
          }

          const score = (value - 1) * 2 / 450 + 1;
          return Math.round(score);
        }

        start() {
          this.loadGameProgress();
        }

        save() {
          localStorage.setItem('levels', JSON.stringify((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).levelsData));
        }

        loadGameProgress() {
          (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).levelsData = JSON.parse(localStorage.getItem('levels'));

          if ((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).levelsData) {
            (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).levelsData.forEach(level => {
              const icon = this.LevelsIconsContainer.getChildByName(`LevelIcon${level.id}`);

              if (icon) {
                icon.getComponent(_crd && FrameSwitcher === void 0 ? (_reportPossibleCrUseOfFrameSwitcher({
                  error: Error()
                }), FrameSwitcher) : FrameSwitcher).currentFrameIndex = level.score;
              }
            });
          } else {
            (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).levelsData = [];

            for (let i = 0; i < this.LevelsIconsContainer.children.length; i++) {
              const level = {
                id: i,
                complete: false,
                score: (_crd && Score === void 0 ? (_reportPossibleCrUseOfScore({
                  error: Error()
                }), Score) : Score).NOT_AVAILABLE,
                available: true,
                data: null
              };
              (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
                error: Error()
              }), Facade) : Facade).levelsData.push(level);
            }
          }
        }

        onLevelClicked(e, id) {
          if (!(_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).battleData) {
            log('YOU HAVE TO PICK UP HEROES!');
            return;
          }

          (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).levelid = +id;
          director.loadScene('GameScene');
        }

        showHeroesTab() {
          this.HeroesTab.getComponent(Animation).play('HeroesTabOpen');
        }

        closeHeroesTab() {
          (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).battleData = {
            team1: {
              id: 1,
              heroes: this.HeroesTab.getComponent(_crd && HeroesTabComponent === void 0 ? (_reportPossibleCrUseOfHeroesTabComponent({
                error: Error()
              }), HeroesTabComponent) : HeroesTabComponent).checkedHeroes
            },
            team2: {
              id: 2,
              heroes: this.getEnemyTeam((_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
                error: Error()
              }), Facade) : Facade).json.heroesConfig, 5)
            }
          };
          this.HeroesTab.getComponent(Animation).play('HeroesTabClose');
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "LevelsIconsContainer", [_dec4], {
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