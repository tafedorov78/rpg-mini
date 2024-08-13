import { _decorator, assetManager, Component, director, JsonAsset, resources } from 'cc';
import Facade from '../Facade';
const { ccclass } = _decorator;

@ccclass('LoadingScene')
export class LoadingScene extends Component {

    start() {
        const bundleNames = ['Characters', 'HeroesIcon'];
        let loadedBundles = 0;

        // Load each bundle
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

    loadJSON(): void {
        resources.load('json/GameConfig', JsonAsset, (err, jsonAsset) => {
            if (err) {
                console.error('Failed to load JSON file:', err);
                return;
            }
            Facade.json = jsonAsset.json;
            director.loadScene('SplashScreenScene');
        });
    }
}
