export type GameConfig = {
    heroesConfig: HeroConfig[];
    teamConfig: TeamConfig;
}

export type HeroConfig = {
    id: number;
    name: string;
    attackSpeed: number;
    hp: number;
    hitPower: number;
    icon?: string;
    spinePath?: string;
}

export type TeamConfig = {
    minSize: number;
    maxSize: number;
}