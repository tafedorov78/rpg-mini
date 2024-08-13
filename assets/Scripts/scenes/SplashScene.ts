import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('SplashScene')
export class SplashScene extends Component {

    onLogin() {
        director.loadScene('MainMenuScene');
    }
}
