import { _decorator, Component, director, Node } from 'cc';
import { TeamsBuilderComponent } from '../components/TeamsBuilderComponent';
import Facade from '../Facade';
import EventManager from '../eventManager/EventManager';
const { ccclass, property } = _decorator;

@ccclass('GameScene')
export class GameScene extends Component {

    @property({ type: Node })
    public NavigateToMenuButton: Node = null;

    @property({ type: TeamsBuilderComponent })
    public TeamsBuilderComponent: TeamsBuilderComponent = null;

    protected onLoad(): void {
        EventManager.add('victory', this.showNavigateButton);
    }

    start() {
        this.NavigateToMenuButton.active = false;
        this.scheduleOnce(() => {
            this.TeamsBuilderComponent.init(Facade.battleData);
        }, 1);
    }

    showNavigateButton = (): void => {
        this.scheduleOnce(() => {
            this.NavigateToMenuButton.active = true;
        }, 2);
    }

    onNavigateToMenu() {
        EventManager.remove('victory', this.showNavigateButton);
        director.loadScene('MainMenuScene');
    }


}