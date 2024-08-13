System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HeroCardComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroConfig(extras) {
    _reporterNs.report("HeroConfig", "../../../Scripts/ConfigTypes", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7790dQ6CPpLFoaVguIriMjk", "HeroCardComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroCardComponent", HeroCardComponent = (_dec = ccclass('HeroCardComponent'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec(_class = (_class2 = class HeroCardComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Icon", _descriptor, this);

          _initializerDefineProperty(this, "Checkmark", _descriptor2, this);

          _initializerDefineProperty(this, "IDValue", _descriptor3, this);

          _initializerDefineProperty(this, "HitPower", _descriptor4, this);

          _initializerDefineProperty(this, "AttackSpeed", _descriptor5, this);

          this.isChecked = false;
          this.data = null;
        }

        onLoad() {
          this.Checkmark.active = this.isChecked;
        }

        setIcon(spriteFrame) {
          this.Icon.spriteFrame = spriteFrame;
        }

        setData(data) {
          this.data = data;
          this.HitPower.string = data.hitPower.toString();
          this.AttackSpeed.string = data.attackSpeed.toString();
          this.IDValue.string = data.id.toString();
        }

        check() {
          this.isChecked = !this.isChecked;
          this.Checkmark.active = this.isChecked;
          const eventName = this.isChecked ? 'checked' : 'unchecked';
          this.node.emit(eventName, this.data.id);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Checkmark", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "IDValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HitPower", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "AttackSpeed", [_dec6], {
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
//# sourceMappingURL=566a862660f4bda301a34c60526d63ca3f83a237.js.map