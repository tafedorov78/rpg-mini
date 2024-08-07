import { _decorator, Component, Button, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenuScene')
export class MainMenuScene extends Component {

    @property(Button)
    startGameButton: Button = null;

    start() {
        this.startGameButton.node.on('click', this.onStartGame, this);
    }

    onStartGame() {
        director.loadScene('GameScene'); // Switch to GameScene when the button is clicked
    }
}
