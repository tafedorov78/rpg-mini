import { HeroConfig } from "./ConfigTypes";

export type BattleData = {
    team1: TeamData;
    team2: TeamData;
    data?: any
}

export type TeamData = {
    name: string;
    heroes: HeroConfig[];
}