import { _decorator, Component, instantiate, Node, Prefab, v3, Vec3 } from 'cc';
import { HeroComponent } from '../../prefabs/scripts/HeroComponent';
import { HeroConfig } from '../ConfigTypes';
import { BattleData, TeamData } from '../GameTypes';
import EventManager from '../eventManager/EventManager';
import { BattleComponent } from './BattleComponent';
import { PoolObjectComponent } from './poolFactory/PoolObjectComponent';
const { ccclass, property } = _decorator;


export type Team = {
    name: string;
    isLeft: boolean;
    currentHero: HeroComponent;
    currentIndexHero: number;
    targetTeam: Team;
    heroes: HeroComponent[]
}

@ccclass('TeamsBuilderComponent')
export class TeamsBuilderComponent extends Component {

    @property({ type: Prefab })
    public heroPrefab: Prefab = null;

    @property(Node)
    private CharactersContainer: Node = null;

    @property(BattleComponent)
    private BattleComponent: BattleComponent = null;

    private team1: Team;
    private team2: Team;

    battleData: BattleData;
    bulletFactory: PoolObjectComponent;

    private couner: number = 0;

    protected onLoad(): void {
        EventManager.add('readyToPosition', this.onHeroReadyToPosition);
        EventManager.add('readyForBattle', this.onHeroReadyForBattle);
    }

    protected onDestroy(): void {
        EventManager.remove('readyToPosition', this.onHeroReadyToPosition);
        EventManager.remove('readyForBattle', this.onHeroReadyForBattle);
    }

    init(battleData: BattleData) {
        this.bulletFactory = this.node.getComponent(PoolObjectComponent);
        this.battleData = battleData;
        this.initializeTeams();
    }

    private initializeTeams() {
        this.team1 = this.createTeam(this.battleData.team1);
        this.team2 = this.createTeam(this.battleData.team2);
        this.team1.targetTeam = this.team2;
        this.team2.targetTeam = this.team1;
        this.initPosition(this.team1);
        this.initPosition(this.team2);
    }

    private createTeam(config: TeamData): Team {
        const team: Team = {
            name: config.name,
            isLeft: config.name === 'player',
            currentHero: null,
            currentIndexHero: 0,
            targetTeam: null,
            heroes: []
        };

        config.heroes.forEach((heroConfig: HeroConfig) => {
            const hero = instantiate(this.heroPrefab);
            hero.getComponent(HeroComponent).team = team;
            hero.getComponent(HeroComponent).init(heroConfig, this.bulletFactory)
            team.heroes.push(hero.getComponent(HeroComponent));
            this.CharactersContainer.addChild(hero);
        });

        return team;
    }

    initPosition(team: Team): void {
        team.heroes.forEach((hero: HeroComponent, i: number) => {
            const side: string = team.isLeft ? 'left' : 'right';
            const pos: Vec3 = this.CharactersContainer.getChildByName(`${side}Out`).getPosition();

            if (team.isLeft) {
                pos.x -= i * 50;
            } else {
                pos.x += i * 50;
            }
            hero.node.setPosition(pos);
            this.CharactersContainer.addChild(hero.node);
        });
    }

    private onHeroReadyToPosition = (hero: HeroComponent): void => {
        this.couner++;
        if (this.couner === this.battleData.team1.heroes.length + this.battleData.team2.heroes.length) {
            this.walk(this.team1);
            this.walk(this.team2);
            this.couner = 0;
        }
    }

    private onHeroReadyForBattle = (): void => {
        this.couner++;
        if (this.couner === this.battleData.team1.heroes.length + this.battleData.team2.heroes.length) {
            this.BattleComponent.initBattle(this.team1, this.team2);
        }
    }

    walk(team: Team) {
        let m = team.isLeft ? -1 : 1;
        let step = 700 / team.heroes.length;
        team.heroes.forEach((hero: HeroComponent, i: number) => {
            const side: string = hero.team.isLeft ? 'left' : 'right';
            hero.positionTo(v3(i * step * m + (300 * m), 0, 0), this.onHeroReadyForBattle);
        });
        this.couner = 0;

    }
}