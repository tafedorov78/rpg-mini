System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, LoadingScene;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d52anx9QtAHo91E02nF0Af", "Scene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass
      } = _decorator);

      _export("LoadingScene", LoadingScene = (_dec = ccclass('LoadingScene'), _dec(_class = class LoadingScene extends Component {
        start() {
          // Simulate loading resources or other assets
          this.scheduleOnce(() => {
            director.loadScene('SplashScene'); // Load SplashScene after a delay
          }, 2); // 2-second delay, adjust as needed
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4e52c4642d1b2c6b774e10c68a9c1869703b247.js.map