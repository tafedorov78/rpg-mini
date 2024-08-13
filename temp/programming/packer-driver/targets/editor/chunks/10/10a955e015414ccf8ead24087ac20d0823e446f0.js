System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, director, JsonAsset, resources, Facade, _dec, _class, _crd, ccclass, LoadingScene;

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Facade", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      director = _cc.director;
      JsonAsset = _cc.JsonAsset;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a01f0scFWtLoI/2DGnn73Q3", "LoadingScene", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'director', 'JsonAsset', 'resources']);

      ({
        ccclass
      } = _decorator);

      _export("LoadingScene", LoadingScene = (_dec = ccclass('LoadingScene'), _dec(_class = class LoadingScene extends Component {
        start() {
          const bundleNames = ['Characters', 'HeroesIcon'];
          let loadedBundles = 0; // Load each bundle

          bundleNames.forEach(bundleName => {
            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err) {
                console.error(`Failed to load bundle: ${bundleName}`, err);
                return;
              }

              console.log(`Loaded bundle: ${bundleName}`);
              loadedBundles++;

              if (loadedBundles === bundleNames.length) {
                this.loadJSON();
              }
            });
          });
        }

        loadJSON() {
          resources.load('json/GameConfig', JsonAsset, (err, jsonAsset) => {
            if (err) {
              console.error('Failed to load JSON file:', err);
              return;
            }

            (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
              error: Error()
            }), Facade) : Facade).json = jsonAsset.json;
            director.loadScene('SplashScreenScene');
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10a955e015414ccf8ead24087ac20d0823e446f0.js.map