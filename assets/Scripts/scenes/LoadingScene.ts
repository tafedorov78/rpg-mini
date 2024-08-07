import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('LoadingScene')
export class LoadingScene extends Component {

    start() {
        // Simulate loading resources or other assets
        this.scheduleOnce(() => {
            director.loadScene('SplashScreenScene'); // Load SplashScene after a delay
        }, 2); // 2-second delay, adjust as needed
    }
}
