import { _decorator, Component } from 'cc';
import { HeroComponent } from '../../prefabs/scripts/HeroComponent';
import EventManager from '../eventManager/EventManager';
const { ccclass, property } = _decorator;


export type Team = {
    name: string;
    isLeft: boolean;
    currentHero: HeroComponent;
    currentIndexHero: number;
    targetTeam: Team;
    heroes: HeroComponent[]
}

@ccclass('BattleComponent')
export class BattleComponent extends Component {

    private team1: Team;
    private team2: Team;

    protected onLoad(): void {
        EventManager.add('death', this.onHeroDead);
    }

    protected onDestroy(): void {
        EventManager.remove('death', this.onHeroDead);
    }

    initBattle(team1: Team, team2: Team) {
        this.team1 = team1;
        this.team2 = team2;

        this.startAttackCycles(this.team1, this.team2);
        this.startAttackCycles(this.team2, this.team1);
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

    private isBattleOver(): boolean {
        return this.team1.heroes.length === 0 || this.team2.heroes.length === 0;
    }

    private endBattle() {
        if (this.team1.heroes.length > 0) {
            console.log('Win team 1');

            EventManager.dispatch('victory', 1);
        } else {
            console.log('Win team 2');
            EventManager.dispatch('victory', 2);
        }
    }
}