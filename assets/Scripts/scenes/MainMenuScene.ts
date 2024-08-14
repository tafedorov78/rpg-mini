import { _decorator, Animation, Button, Component, director, EventTouch, log, Node } from 'cc';
import { FrameSwitcher } from '../../prefabs/ImageSwitcher/ImageSwitcher';
import { Team } from '../components/BattleComponent';
import { HeroesTabComponent } from '../components/HeroesTabComponent';
import { HeroConfig } from '../ConfigTypes';
import Facade from '../Facade';
import { GameLevel, Score } from '../GameTypes';
const { ccclass, property } = _decorator;

@ccclass('MainMenuScene')
export class MainMenuScene extends Component {

    @property(Button)
    startGameButton: Button = null;

    @property({ type: Node })
    public HeroesTab: Node = null;

    @property({ type: Node })
    public LevelsIconsContainer: Node = null;

    protected onEnable(): void {
        if (Facade.team) {
            this.levelIconsUpdate(Facade.team);
            Facade.team = null;
        }
    }

    private levelIconsUpdate = (team: Team): void => {
        let totalHP: number = 0;
        team.heroes.forEach(hero => {
            totalHP += hero.HP;
        });
        let score = this.calculateScore(totalHP);
        Facade.levelsData[Facade.levelid].score = score;
        const icon = this.LevelsIconsContainer.getChildByName(`LevelIcon${Facade.levelid}`);
        if (totalHP === 0) {
            score = Score.NOT_AVAILABLE;
        }
        icon.getComponent(FrameSwitcher).currentFrameIndex = score;

        this.save();
    }

    private calculateScore(value: number): number {
        if (value === 0) return 0;

        if (value > 500) {
            throw new Error("Value must be between 1 and 500");
        }

        const score = ((value - 1) * 2 / 450) + 1;
        return Math.round(score);
    }

    start() {
        this.loadGameProgress();
    }

    private save() {
        localStorage.setItem('levels', JSON.stringify(Facade.levelsData));
    }

    private loadGameProgress(): void {
        Facade.levelsData = JSON.parse(localStorage.getItem('levels'));

        if (Facade.levelsData) {
            Facade.levelsData.forEach((level: GameLevel) => {
                const icon = this.LevelsIconsContainer.getChildByName(`LevelIcon${level.id}`);
                if (icon) {
                    icon.getComponent(FrameSwitcher).currentFrameIndex = level.score;
                }
            });
        } else {
            Facade.levelsData = [];
            for (let i = 0; i < this.LevelsIconsContainer.children.length; i++) {
                const level = {
                    id: i,
                    complete: false,
                    score: Score.NOT_AVAILABLE,
                    available: true,
                    data: null
                }
                Facade.levelsData.push(level);
            }
        }
    }

    onLevelClicked(e: EventTouch, id: number) {
        if (!Facade.battleData) {
            log('YOU HAVE TO PICK UP HEROES!');
            return;
        }

        Facade.levelid = +id;
        director.loadScene('GameScene');
    }

    showHeroesTab() {
        this.HeroesTab.getComponent(Animation).play('HeroesTabOpen');
    }

    closeHeroesTab() {
        Facade.battleData = {
            team1: {
                id: 1,
                heroes: this.HeroesTab.getComponent(HeroesTabComponent).checkedHeroes,
            },
            team2: {
                id: 2,
                heroes: this.getEnemyTeam(Facade.json.heroesConfig, 5)
            }
        }
        this.HeroesTab.getComponent(Animation).play('HeroesTabClose');
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
