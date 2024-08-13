import { _decorator, assetManager, Component, instantiate, Node, Prefab, ScrollView, SpriteFrame } from 'cc';
import Facade from '../Facade';
import { HeroCardComponent } from '../../prefabs/heroCard/scripts/HeroCardComponent';
import { GameConfig, HeroConfig } from '../ConfigTypes';
const { ccclass, property } = _decorator;

@ccclass('HeroesTabComponent')
export class HeroesTabComponent extends Component {

    @property({ type: Prefab })
    public heroCard: Prefab = null;

    @property({ type: ScrollView })
    public ScrollView: ScrollView = null;

    public checkedHeroes: HeroConfig[] = [];

    private cards: HeroCardComponent[] = [];
    private gameConfig: GameConfig;
    private heroesConfig: HeroConfig[];

    onLoad() {
        this.gameConfig = Facade.json;
        this.heroesConfig = this.gameConfig.heroesConfig;

        const bundle = assetManager.getBundle('HeroesIcon');

        this.heroesConfig.forEach((hero: HeroConfig) => {
            bundle.load(`${hero.icon}/spriteFrame`, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                    console.error('Error loading SpriteFrame from bundle:', err);
                    return;
                }
                const card = this.createCard(spriteFrame, hero);
                card.node.on('checked', this.onCardChecked);
                card.node.on('unchecked', this.onCardUnchecked);
                this.cards.push(card);

                this.ScrollView.content.addChild(card.node);
            });
        });
    }

    private onCardChecked = (id: number) => {
        const heroConfig = this.heroesConfig.find((hero: HeroConfig) => hero.id === id);
        this.checkedHeroes.push(heroConfig);
    }

    private onCardUnchecked = (id: number) => {
        const heroConfig = this.heroesConfig.find((hero: HeroConfig) => hero.id === id);
        this.checkedHeroes.splice(this.checkedHeroes.indexOf(heroConfig), 1);
    }

    private createCard(spriteFrame: SpriteFrame, data: HeroConfig): HeroCardComponent {
        const card = instantiate(this.heroCard);
        const heroCardComponent = card.getComponent(HeroCardComponent);
        heroCardComponent.setIcon(spriteFrame);
        heroCardComponent.setData(data);
        return heroCardComponent;
    }
}

