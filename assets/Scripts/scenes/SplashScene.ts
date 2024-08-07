import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('SplashScene')
export class SplashScene extends Component {

    start() {
        // Automatically transition to MainMenuScene after a short delay
        this.scheduleOnce(() => {
            director.loadScene('MainMenuScene');
        }, 3); // 3-second delay for the splash screen, adjust as needed
    }
}
