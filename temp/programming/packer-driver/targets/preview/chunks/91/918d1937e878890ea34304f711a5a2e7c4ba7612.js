System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, v3, HeroComponent, EventManager, BattleComponent, PoolObjectComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TeamsBuilderComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroComponent(extras) {
    _reporterNs.report("HeroComponent", "../../prefabs/scripts/HeroComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroConfig(extras) {
    _reporterNs.report("HeroConfig", "../ConfigTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleData(extras) {
    _reporterNs.report("BattleData", "../GameTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamData(extras) {
    _reporterNs.report("TeamData", "../GameTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../eventManager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleComponent(extras) {
    _reporterNs.report("BattleComponent", "./BattleComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolObjectComponent(extras) {
    _reporterNs.report("PoolObjectComponent", "./poolFactory/PoolObjectComponent", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      HeroComponent = _unresolved_2.HeroComponent;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      BattleComponent = _unresolved_4.BattleComponent;
    }, function (_unresolved_5) {
      PoolObjectComponent = _unresolved_5.PoolObjectComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e56f1NghbZMS5XlCNBmvXEP", "TeamsBuilderComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TeamsBuilderComponent", TeamsBuilderComponent = (_dec = ccclass('TeamsBuilderComponent'), _dec2 = property({
        type: Prefab
      }), _dec3 = property(Node), _dec4 = property(_crd && BattleComponent === void 0 ? (_reportPossibleCrUseOfBattleComponent({
        error: Error()
      }), BattleComponent) : BattleComponent), _dec(_class = (_class2 = class TeamsBuilderComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "heroPrefab", _descriptor, this);

          _initializerDefineProperty(this, "CharactersContainer", _descriptor2, this);

          _initializerDefineProperty(this, "BattleComponent", _descriptor3, this);

          this.team1 = void 0;
          this.team2 = void 0;
          this.battleData = void 0;
          this.bulletFactory = void 0;
          this.couner = 0;

          this.onHeroReadyToPosition = hero => {
            this.couner++;

            if (this.couner === this.battleData.team1.heroes.length + this.battleData.team2.heroes.length) {
              this.walk(this.team1);
              this.walk(this.team2);
              this.couner = 0;
            }
          };

          this.onHeroReadyForBattle = () => {
            this.couner++;

            if (this.couner === this.battleData.team1.heroes.length + this.battleData.team2.heroes.length) {
              this.BattleComponent.initBattle(this.team1, this.team2);
            }
          };
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add('readyToPosition', this.onHeroReadyToPosition);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add('readyForBattle', this.onHeroReadyForBattle);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('readyToPosition', this.onHeroReadyToPosition);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('readyForBattle', this.onHeroReadyForBattle);
        }

        init(battleData) {
          this.bulletFactory = this.node.getComponent(_crd && PoolObjectComponent === void 0 ? (_reportPossibleCrUseOfPoolObjectComponent({
            error: Error()
          }), PoolObjectComponent) : PoolObjectComponent);
          this.battleData = battleData;
          this.initializeTeams();
        }

        initializeTeams() {
          this.team1 = this.createTeam(this.battleData.team1);
          this.team2 = this.createTeam(this.battleData.team2);
          this.team1.targetTeam = this.team2;
          this.team2.targetTeam = this.team1;
          this.initPosition(this.team1);
          this.initPosition(this.team2);
        }

        createTeam(config) {
          var team = {
            id: config.id,
            isLeft: config.id === 1,
            currentHero: null,
            currentIndexHero: 0,
            targetTeam: null,
            heroes: []
          };
          config.heroes.forEach(heroConfig => {
            var hero = instantiate(this.heroPrefab);
            hero.getComponent(_crd && HeroComponent === void 0 ? (_reportPossibleCrUseOfHeroComponent({
              error: Error()
            }), HeroComponent) : HeroComponent).team = team;
            hero.getComponent(_crd && HeroComponent === void 0 ? (_reportPossibleCrUseOfHeroComponent({
              error: Error()
            }), HeroComponent) : HeroComponent).init(heroConfig, this.bulletFactory);
            team.heroes.push(hero.getComponent(_crd && HeroComponent === void 0 ? (_reportPossibleCrUseOfHeroComponent({
              error: Error()
            }), HeroComponent) : HeroComponent));
            this.CharactersContainer.addChild(hero);
          });
          return team;
        }

        initPosition(team) {
          team.heroes.forEach((hero, i) => {
            var side = team.isLeft ? 'left' : 'right';
            var pos = this.CharactersContainer.getChildByName(side + "Out").getPosition();

            if (team.isLeft) {
              pos.x -= i * 50;
            } else {
              pos.x += i * 50;
            }

            hero.node.setPosition(pos);
            this.CharactersContainer.addChild(hero.node);
          });
        }

        walk(team) {
          var m = team.isLeft ? -1 : 1;
          var step = 700 / team.heroes.length;
          team.heroes.forEach((hero, i) => {
            var side = hero.team.isLeft ? 'left' : 'right';
            hero.positionTo(v3(i * step * m + 300 * m, 0, 0), this.onHeroReadyForBattle);
          });
          this.couner = 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "heroPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CharactersContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BattleComponent", [_dec4], {
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
//# sourceMappingURL=918d1937e878890ea34304f711a5a2e7c4ba7612.js.map