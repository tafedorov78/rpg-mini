System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ImageSwitcher;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a82d9zv2hhFSbQsi4RRD7GM", "ImageSwitcher", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'SpriteFrame', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ImageSwitcher", ImageSwitcher = (_dec = ccclass('ImageSwitcher'), _dec2 = property([SpriteFrame]), _dec3 = property(Sprite), _dec(_class = (_class2 = class ImageSwitcher extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "images", _descriptor, this);

          _initializerDefineProperty(this, "displaySprite", _descriptor2, this);

          this.currentIndex = 0;
        }

        start() {
          this.updateImage();
        }

        switchImage() {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
          this.updateImage();
        }

        updateImage() {
          if (this.images.length > 0 && this.displaySprite) {
            this.displaySprite.spriteFrame = this.images[this.currentIndex];
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "images", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "displaySprite", [_dec3], {
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
//# sourceMappingURL=e87da22c77d985e1235881e9d0b179045c500f91.js.map