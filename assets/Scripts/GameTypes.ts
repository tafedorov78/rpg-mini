import { HeroConfig } from "./ConfigTypes";

export type BattleData = {
    team1: TeamData;
    team2: TeamData;
    data?: any
}

export type TeamData = {
    id: number;
    heroes: HeroConfig[];
}

export type GameLevel = {
    id: number;
    complete: boolean;
    score: Score;
    available: boolean;
    data: any
}

export enum Score {
    NOT_AVAILABLE = 0,
    BAD = 1,
    AVERAGE = 1,
    EXELLENT = 3
}