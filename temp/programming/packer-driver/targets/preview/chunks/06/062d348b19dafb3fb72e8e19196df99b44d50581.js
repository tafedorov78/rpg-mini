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

      _cclegacy._RF.push({}, "a01f0scFWtLoI/2DGnn73Q3", "LoadingScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass
      } = _decorator);

      _export("LoadingScene", LoadingScene = (_dec = ccclass('LoadingScene'), _dec(_class = class LoadingScene extends Component {
        start() {
          // Simulate loading resources or other assets
          this.scheduleOnce(() => {
            director.loadScene('SplashScreenScene'); // Load SplashScene after a delay
          }, 2); // 2-second delay, adjust as needed
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=062d348b19dafb3fb72e8e19196df99b44d50581.js.map