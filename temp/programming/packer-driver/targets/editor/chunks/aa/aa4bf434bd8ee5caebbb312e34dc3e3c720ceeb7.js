System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, Sprite, SpriteFrame, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, FrameSwitcher;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a82d9zv2hhFSbQsi4RRD7GM", "ImageSwitcher", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("FrameSwitcher", FrameSwitcher = (_dec = ccclass('FrameSwitcher'), _dec2 = property([SpriteFrame]), _dec3 = property({
        type: CCInteger,
        tooltip: "Index of the frame to display",
        step: 1
      }), _dec(_class = executeInEditMode(_class = (_class2 = class FrameSwitcher extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "frames", _descriptor, this);

          this._currentFrameIndex = 0;
          this.sprite = null;
        }

        get currentFrameIndex() {
          return this._currentFrameIndex;
        }

        set currentFrameIndex(value) {
          if (value >= 0 && value < this.frames.length) {
            this._currentFrameIndex = value;
            this.updateImage();
          } else {
            console.error('Invalid frame index:', value);
          }
        }

        onLoad() {
          this.sprite = this.getComponent(Sprite);
          this.updateImage();
        }

        update(dt) {
          this.updateImage();
        }

        updateImage() {
          if (this.frames.length > 0 && this.sprite) {
            this.sprite.spriteFrame = this.frames[this._currentFrameIndex];
            const spriteFrame = this.frames[this._currentFrameIndex];
            const size = spriteFrame.originalSize;
            const uiTransform = this.getComponent(UITransform);

            if (uiTransform && size) {
              uiTransform.setContentSize(size.width, size.height);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "currentFrameIndex", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "currentFrameIndex"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa4bf434bd8ee5caebbb312e34dc3e3c720ceeb7.js.map