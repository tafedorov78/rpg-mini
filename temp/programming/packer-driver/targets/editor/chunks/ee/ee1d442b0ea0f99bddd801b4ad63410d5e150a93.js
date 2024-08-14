System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ProgressBar, EventManager, Facade, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BattleComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroComponent(extras) {
    _reporterNs.report("HeroComponent", "../../prefabs/scripts/HeroComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../eventManager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeam(extras) {
    _reporterNs.report("Team", "./TeamsBuilderComponent", _context.meta, extras);
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
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Facade = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e68204IuBtCWpc9FANp16gf", "BattleComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleComponent", BattleComponent = (_dec = ccclass('BattleComponent'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class BattleComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameProgress", _descriptor, this);

          this.team1 = void 0;
          this.team2 = void 0;
          this.totalHP1 = 0;
          this.totalHP2 = 0;

          this.onHeroDead = hero => {
            hero.team.heroes.splice(hero.team.heroes.indexOf(hero), 1);

            if (this.isBattleOver()) {
              this.endBattle();
            }
          };

          this.onHP = team => {
            const total = this.getTotalTeamHP(team);
            const initial = team.id === 1 ? this.totalHP1 : this.totalHP2;
            const percentage = this.calculatePercentage(initial, total);
            const progressBarName = team.id === 1 ? 'GreenProgressBar' : 'RedProgressBar';
            this.GameProgress.getChildByName(progressBarName).getComponent(ProgressBar).progress = percentage;
          };

          this.calculatePercentage = (initialValue, currentValue) => {
            if (initialValue <= 0) {
              throw new Error("Initial value must be greater than 0");
            }

            const percentage = currentValue / initialValue;
            return Math.max(percentage, 0); // Ensure the percentage doesn't go below 0
          };
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add('hp', this.onHP);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add('death', this.onHeroDead);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('hp', this.onHP);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('death', this.onHeroDead);
        }

        initBattle(team1, team2) {
          this.team1 = team1;
          this.team2 = team2;
          this.totalHP1 = this.getTotalTeamHP(this.team1);
          this.totalHP2 = this.getTotalTeamHP(this.team2);
          this.startAttackCycles(this.team1, this.team2);
          this.startAttackCycles(this.team2, this.team1);
        }

        getTotalTeamHP(team) {
          return team.heroes.reduce((total, hero) => {
            return total + hero.HP;
          }, 0);
        }

        startAttackCycles(team, targetTeam) {
          for (const hero of team.heroes) {
            hero.startAttack(targetTeam);
          }
        }

        isBattleOver() {
          return this.team1.heroes.length === 0 || this.team2.heroes.length === 0;
        }

        endBattle() {
          if (this.team1.heroes.length > 0) {
            console.log('Win team 1');
          } else {
            console.log('Win team 2');
          }

          (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).team = this.team1;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch('roundEnd');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameProgress", [_dec2], {
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
//# sourceMappingURL=ee1d442b0ea0f99bddd801b4ad63410d5e150a93.js.map