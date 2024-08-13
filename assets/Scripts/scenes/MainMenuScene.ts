import { _decorator, Component, Button, director, Animation, Node } from 'cc';
import Facade from '../Facade';
import { HeroesTabComponent } from '../components/HeroesTabComponent';
import { HeroConfig } from '../ConfigTypes';
const { ccclass, property } = _decorator;

@ccclass('MainMenuScene')
export class MainMenuScene extends Component {

    @property(Button)
    startGameButton: Button = null;

    @property({ type: Node })
    public HeroesTab: Node = null;

    start() {
        this.startGameButton.node.on('click', this.onStartGame, this);
        this.startGameButton.node.active = false;
    }

    onStartGame() {
        director.loadScene('GameScene'); // Switch to GameScene when the button is clicked
    }

    showHeroesTab() {
        this.HeroesTab.getComponent(Animation).play('HeroesTabOpen');
    }

    closeHeroesTab() {
        Facade.battleData = {
            team1: {
                name: 'player',
                heroes: this.HeroesTab.getComponent(HeroesTabComponent).checkedHeroes,
            },
            team2: {
                name: 'pc',
                heroes: this.getEnemyTeam(Facade.json.heroesConfig, 5)
            }
        }

        this.HeroesTab.getComponent(Animation).play('HeroesTabClose');

        if (Facade.battleData.team1.heroes.length > 0 &&
            Facade.battleData.team2.heroes.length > 0) {
            this.startGameButton.node.active = true;
        }
    }

    getEnemyTeam(heroesConfig: HeroConfig[], count: number): HeroConfig[] {
        const uniqueElements = Array.from(new Set(heroesConfig));

        for (let i = uniqueElements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [uniqueElements[i], uniqueElements[j]] = [uniqueElements[j], uniqueElements[i]];
        }

        return uniqueElements.slice(0, count);
    }
}
