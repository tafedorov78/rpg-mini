System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MainMenuScene;

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
      Button = _cc.Button;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79240dvVKdARZ+gU5iBeIKK", "MainMenuScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Button', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenuScene", MainMenuScene = (_dec = ccclass('MainMenuScene'), _dec2 = property(Button), _dec(_class = (_class2 = class MainMenuScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startGameButton", _descriptor, this);
        }

        start() {
          this.startGameButton.node.on('click', this.onStartGame, this);
        }

        onStartGame() {
          director.loadScene('GameScene'); // Switch to GameScene when the button is clicked
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startGameButton", [_dec2], {
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
//# sourceMappingURL=59e7a01739c7256725c549e1179ea02db8c0fe9b.js.map