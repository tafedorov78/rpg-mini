System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventManager, _dec, _class, _crd, ccclass, property, BattleComponent;

  function _reportPossibleCrUseOfHeroComponent(extras) {
    _reporterNs.report("HeroComponent", "../../prefabs/scripts/HeroComponent", _context.meta, extras);
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
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e68204IuBtCWpc9FANp16gf", "BattleComponent", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleComponent", BattleComponent = (_dec = ccclass('BattleComponent'), _dec(_class = class BattleComponent extends Component {
        constructor(...args) {
          super(...args);
          this.team1 = void 0;
          this.team2 = void 0;

          this.onHeroDead = hero => {
            hero.team.heroes.splice(hero.team.heroes.indexOf(hero), 1);

            if (this.isBattleOver()) {
              this.endBattle();
            }
          };
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).add('death', this.onHeroDead);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).remove('death', this.onHeroDead);
        }

        initBattle(team1, team2) {
          this.team1 = team1;
          this.team2 = team2;
          this.startAttackCycles(this.team1, this.team2);
          this.startAttackCycles(this.team2, this.team1);
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
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch('victory', 1);
          } else {
            console.log('Win team 2');
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch('victory', 2);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee1d442b0ea0f99bddd801b4ad63410d5e150a93.js.map