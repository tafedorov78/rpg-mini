System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, v3, _dec, _class, _crd, ccclass, property, BulletComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ba347Hn6xHm4ou+QFPjnLQ", "BulletComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletComponent", BulletComponent = (_dec = ccclass('BulletComponent'), _dec(_class = class BulletComponent extends Component {
        constructor() {
          super(...arguments);
          this.images = [];
        }

        onLoad() {
          this.setType('2');
        }

        setType(name, isLeft) {
          if (isLeft === void 0) {
            isLeft = false;
          }

          this.node.children.forEach(child => {
            child.active = false;
          });
          var node = this.node.getChildByName(name);
          node.active = true;

          if (isLeft) {
            node.setScale(v3(-1, 1, 1));
          }
        }

        animate(targetPosition, bulletName, isLeft, callback) {
          this.setType(bulletName, isLeft);
          var update = bulletName === '2' ? (target, ratio) => {
            var yOffset = 100 * (4 * ratio * (1 - ratio));
            var newY = targetPosition.y + yOffset;
            target.setPosition(target.position.x, newY, target.position.z);
          } : null;
          var time = bulletName === '2' ? 0.8 : 0.5;
          tween(this.node).to(time, {
            position: targetPosition
          }, {
            onUpdate: update
          }).call(() => {
            callback(this.node);
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30d06e77b734eddeab10f0b4743a735a070cc296.js.map