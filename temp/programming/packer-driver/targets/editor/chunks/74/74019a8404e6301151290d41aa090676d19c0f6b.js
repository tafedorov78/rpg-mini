System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, instantiate, Component, CCInteger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, PoolFactoryComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function property(arg0) {
    throw new Error('Function not implemented.');
  }

  function ccclass(arg0) {
    throw new Error('Function not implemented.');
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Component = _cc.Component;
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "934a5WZWEVFV4F5mxaJ4hwa", "PoolFactoryComponent", undefined);

      __checkObsolete__(['Node', 'Prefab', 'NodePool', 'instantiate', 'Component', 'CCInteger']);

      _export("PoolFactoryComponent", PoolFactoryComponent = (_dec = ccclass('PoolFactoryComponent'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = class PoolFactoryComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefab", _descriptor, this);

          _initializerDefineProperty(this, "Size", _descriptor2, this);

          this._pool = void 0;
        }

        onLoad() {
          for (let i = 0; i < this.Size; i++) {
            const coin = instantiate(this.prefab);
            this.pool.put(coin);
          }
        }

        get() {
          let node = this.pool.get();

          if (!node) {
            node = this.decorate(instantiate(this.prefab));
          }

          return node;
        }

        decorate(node) {
          return node;
        }

        put(coin) {
          this.pool.put(coin);
        }

        set pool(value) {
          this._pool = value;
        }

        get pool() {
          return this._pool;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Size", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74019a8404e6301151290d41aa090676d19c0f6b.js.map