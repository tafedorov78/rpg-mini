System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, SplashScene;

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

      _cclegacy._RF.push({}, "8d52anx9QtAHo91E02nF0Af", "SplashScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass
      } = _decorator);

      _export("SplashScene", SplashScene = (_dec = ccclass('SplashScene'), _dec(_class = class SplashScene extends Component {
        start() {
          // Automatically transition to MainMenuScene after a short delay
          this.scheduleOnce(() => {
            director.loadScene('MainMenuScene');
          }, 3); // 3-second delay for the splash screen, adjust as needed
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=321e33bb40acdc6d14d3d88c39f6ccce1a90fd7f.js.map