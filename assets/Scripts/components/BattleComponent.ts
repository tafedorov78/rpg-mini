import { _decorator, Component, Node, ProgressBar } from 'cc';
import { HeroComponent } from '../../prefabs/scripts/HeroComponent';
import EventManager from '../eventManager/EventManager';
import Facade from '../Facade';
import { Team } from './TeamsBuilderComponent';
const { ccclass, property } = _decorator;


@ccclass('BattleComponent')
export class BattleComponent extends Component {

    @property({ type: Node })
    public GameProgress: Node = null;

    private team1: Team;
    private team2: Team;

    private totalHP1: number = 0;
    private totalHP2: number = 0;

    protected onLoad(): void {
        EventManager.add('hp', this.onHP);
        EventManager.add('death', this.onHeroDead);
    }

    protected onDestroy(): void {
        EventManager.remove('hp', this.onHP);
        EventManager.remove('death', this.onHeroDead);
    }

    initBattle(team1: Team, team2: Team) {
        this.team1 = team1;
        this.team2 = team2;

        this.totalHP1 = this.getTotalTeamHP(this.team1);
        this.totalHP2 = this.getTotalTeamHP(this.team2);

        this.startAttackCycles(this.team1, this.team2);
        this.startAttackCycles(this.team2, this.team1);
    }

    private getTotalTeamHP(team: Team): number {
        return team.heroes.reduce((total, hero: HeroComponent) => {
            return total + hero.HP;
        }, 0);
    }

    private startAttackCycles(team: Team, targetTeam: Team) {
        for (const hero of team.heroes) {
            hero.startAttack(targetTeam);
        }
    }

    private onHeroDead = (hero: HeroComponent): void => {
        hero.team.heroes.splice(hero.team.heroes.indexOf(hero), 1);

        if (this.isBattleOver()) {
            this.endBattle();
        }
    }

    private onHP = (team: Team): void => {
        const total = this.getTotalTeamHP(team);
        const initial = team.id === 1 ? this.totalHP1 : this.totalHP2;
        const percentage = this.calculatePercentage(initial, total);

        const progressBarName = team.id === 1 ? 'GreenProgressBar' : 'RedProgressBar';
        this.GameProgress.getChildByName(progressBarName).getComponent(ProgressBar).progress = percentage;
    }

    private calculatePercentage = (initialValue: number, currentValue: number): number => {
        if (initialValue <= 0) {
            throw new Error("Initial value must be greater than 0");
        }

        const percentage = currentValue / initialValue;
        return Math.max(percentage, 0); // Ensure the percentage doesn't go below 0
    }

    private isBattleOver(): boolean {
        return this.team1.heroes.length === 0 || this.team2.heroes.length === 0;
    }

    private endBattle() {
        if (this.team1.heroes.length > 0) {
            console.log('Win team 1');
        } else {
            console.log('Win team 2');
        }

        Facade.team = this.team1;
        EventManager.dispatch('roundEnd');
    }
}