import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameScene')
export class GameScene extends Component {

    start() {
        // Game logic starts here
        console.log('Game has started!');
    }
}
