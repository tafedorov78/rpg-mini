System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, Label, ProgressBar, sp, tween, v3, Vec3, EventManager, BulletComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HeroComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTeam(extras) {
    _reporterNs.report("Team", "../../Scripts/components/BattleComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolObjectComponent(extras) {
    _reporterNs.report("PoolObjectComponent", "../../Scripts/components/poolFactory/PoolObjectComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroConfig(extras) {
    _reporterNs.report("HeroConfig", "../../Scripts/ConfigTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../Scripts/eventManager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletComponent(extras) {
    _reporterNs.report("BulletComponent", "../bullet/scripts/BulletComponent", _context.meta, extras);
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
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      BulletComponent = _unresolved_3.BulletComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e84c3cuf2FJpJOzqgjyEwaM", "HeroComponent", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'Label', 'Node', 'ProgressBar', 'sp', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroComponent", HeroComponent = (_dec = ccclass('HeroComponent'), _dec2 = property(sp.Skeleton), _dec3 = property(Label), _dec4 = property(ProgressBar), _dec(_class = (_class2 = class HeroComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Spine", _descriptor, this);

          _initializerDefineProperty(this, "HPLabel", _descriptor2, this);

          _initializerDefineProperty(this, "HPBar", _descriptor3, this);

          this.hp = 0;
          this.heroConfig = void 0;
          this.bulletFactory = void 0;
          this.targetTeam = void 0;
          this.bulletNames = ['0', '1', '2'];
          this.damageNames = ['GetPoisoned', 'GetFreez', 'GetHit'];
          this.attackSpeed = 0;
          this.hitPower = 0;
          this.team = void 0;
          this.isAlive = true;
          this.isIdle = true;

          this.hit = () => {
            if (!this.isAlive) return;
            this.attack();
          };
        }

        start() {
          this.HPBar.progress = this.hp / this.heroConfig.hp;
        }

        init(heroConfig, bulletFactory) {
          this.heroConfig = heroConfig;
          this.bulletFactory = bulletFactory;
          this.hp = this.heroConfig.hp;
          this.attackSpeed = this.heroConfig.attackSpeed;
          this.hitPower = this.heroConfig.hitPower;
          var bundle = assetManager.getBundle('Characters');
          bundle.load("" + heroConfig.spinePath, sp.SkeletonData, (err, skeletonData) => {
            if (err) {
              console.error('Error loading SkeletonData from bundle:', err);
              return;
            }

            this.Spine.skeletonData = skeletonData;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch('readyToPosition', this);
            this.playIdle();
          });
        }

        startAttack(targetTeam) {
          this.targetTeam = targetTeam;
          this.schedule(this.hit, 100 / this.attackSpeed);
        }

        attack() {
          var target = this.targetTeam.heroes[Math.floor(Math.random() * this.targetTeam.heroes.length)];

          if (!target || !this.isIdle || !this.isAlive) {
            return;
          }

          this.isIdle = false;
          var r = Math.floor(Math.random() * this.bulletNames.length);
          var bulletName = this.bulletNames[r];
          var damageName = this.damageNames[r];
          this.animateBullet(target.node.getPosition(), bulletName);
          this.Spine.setAnimation(0, 'Attack', false);
          var time = bulletName === '2' ? 0.8 : 0.5;
          this.scheduleOnce(() => {
            target.getHit(this.hitPower, damageName);
            this.playIdle();
          }, time);
        }

        getHit(damage, damageName) {
          if (!this.isAlive) return;
          this.isIdle = false;
          this.Spine.setAnimation(0, damageName, false);
          this.applyDamage(damage);
          this.scheduleOnce(() => {
            this.playIdle();
          }, 0.8);
        }

        playIdle() {
          if (!this.isAlive) return;
          this.isIdle = true;
          this.Spine.setAnimation(0, 'Idle', true);
        }

        die() {
          this.isIdle = false;
          this.Spine.setAnimation(0, 'Death', false);
        }

        applyDamage(value) {
          if (!this.isAlive) return;
          this.hp -= value;
          this.HPBar.progress = this.hp / this.heroConfig.hp;
          this.HPLabel.string = this.hp.toFixed(0) + '%';

          if (this.hp <= 0) {
            this.hp = 0;
            this.HPBar.node.active = false;
            this.HPLabel.node.active = false;
            this.isAlive = false;
            this.die();
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch('death', this);
          }
        }

        playWalk() {
          this.Spine.setAnimation(0, 'Walk', true);

          if (this.team.isLeft) {
            this.Spine.node.setScale(new Vec3(-1, 1, 1));
          }
        }

        positionTo(pos, onComplete) {
          this.playWalk();
          tween(this.node).to(2, {
            position: pos
          }).call(() => {
            this.playIdle();
            onComplete();
          }).start();
        }

        animateBullet(targetPos, bulletName) {
          var bullet = this.bulletFactory.get();
          var pos = this.node.getPosition();
          this.node.parent.addChild(bullet);
          bullet.setPosition(pos.x, pos.y + 100, pos.z);
          var targetPosition = v3(targetPos.x, targetPos.y + 100, targetPos.z);
          bullet.getComponent(_crd && BulletComponent === void 0 ? (_reportPossibleCrUseOfBulletComponent({
            error: Error()
          }), BulletComponent) : BulletComponent).animate(targetPosition, bulletName, this.team.isLeft, bullet => {
            this.bulletFactory.put(bullet);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "HPLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "HPBar", [_dec4], {
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
//# sourceMappingURL=9c1ac6ae1b615a0ea3516444413c58a3e41633e0.js.map