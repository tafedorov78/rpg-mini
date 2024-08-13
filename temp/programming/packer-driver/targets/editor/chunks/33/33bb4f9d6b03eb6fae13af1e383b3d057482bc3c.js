System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NodePool, instantiate, PoolFactory, _crd;

  _export("PoolFactory", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a67c29jvdNvqyulMmsACo9", "PoolFactory", undefined);

      __checkObsolete__(['Node', 'Prefab', 'NodePool', 'instantiate']);

      _export("PoolFactory", PoolFactory = class PoolFactory {
        constructor(prefab, size, name = 'pool') {
          this.prefab = void 0;
          this._pool = void 0;
          this.prefab = prefab;
          this.pool = new NodePool(name);

          for (let i = 0; i < size; i++) {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33bb4f9d6b03eb6fae13af1e383b3d057482bc3c.js.map