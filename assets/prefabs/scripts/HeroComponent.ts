import { _decorator, assetManager, Component, Label, Node, ProgressBar, sp, tween, v3, Vec3 } from 'cc';
import { Team } from '../../Scripts/components/BattleComponent';
import { PoolObjectComponent } from '../../Scripts/components/poolFactory/PoolObjectComponent';
import { HeroConfig } from '../../Scripts/ConfigTypes';
import EventManager from '../../Scripts/eventManager/EventManager';
import { BulletComponent } from '../bullet/scripts/BulletComponent';
const { ccclass, property } = _decorator;

@ccclass('HeroComponent')
export class HeroComponent extends Component {

    @property(sp.Skeleton)
    private Spine: sp.Skeleton = null;

    @property(Label)
    private HPLabel: Label = null;

    @property(ProgressBar)
    private HPBar: ProgressBar = null;

    private hp: number = 0;
    private heroConfig: HeroConfig;
    private bulletFactory: PoolObjectComponent;

    private targetTeam: Team;

    private bulletNames: string[] = ['0', '1', '2'];
    private damageNames: string[] = ['GetPoisoned', 'GetFreez', 'GetHit'];

    public attackSpeed: number = 0;
    public hitPower: number = 0;

    public team: Team;

    public isAlive: boolean = true;
    public isIdle: boolean = true;

    protected start(): void {
        this.HPBar.progress = this.hp / this.heroConfig.hp;
    }

    init(heroConfig: HeroConfig, bulletFactory: PoolObjectComponent): void {
        this.heroConfig = heroConfig;
        this.bulletFactory = bulletFactory;
        this.hp = this.heroConfig.hp;
        this.attackSpeed = this.heroConfig.attackSpeed;
        this.hitPower = this.heroConfig.hitPower;

        const bundle = assetManager.getBundle('Characters');
        bundle.load(`${heroConfig.spinePath}`, sp.SkeletonData, (err, skeletonData) => {
            if (err) {
                console.error('Error loading SkeletonData from bundle:', err);
                return;
            }

            this.Spine.skeletonData = skeletonData;
            EventManager.dispatch('readyToPosition', this);
            this.playIdle();
        });
    }

    public startAttack(targetTeam: Team): void {
        this.targetTeam = targetTeam;
        this.schedule(this.hit, 100 / this.attackSpeed);
    }

    hit = (): void => {
        if (!this.isAlive) return;

        this.attack();
    }

    private attack(): void {
        const target: HeroComponent = this.targetTeam.heroes[Math.floor(Math.random() * this.targetTeam.heroes.length)];

        if (!target || !this.isIdle || !this.isAlive) {
            return;
        }

        this.isIdle = false;

        const r = Math.floor(Math.random() * this.bulletNames.length);
        const bulletName = this.bulletNames[r];
        const damageName = this.damageNames[r];

        this.animateBullet(target.node.getPosition(), bulletName);
        this.Spine.setAnimation(0, 'Attack', false);

        const time = bulletName === '2' ? 0.8 : 0.5;

        this.scheduleOnce(() => {
            target.getHit(this.hitPower, damageName);
            this.playIdle();
        }, time);
    }

    public getHit(damage: number, damageName: string): void {
        if (!this.isAlive) return;

        this.isIdle = false;

        this.Spine.setAnimation(0, damageName, false);
        this.applyDamage(damage);

        this.scheduleOnce(() => {
            this.playIdle();
        }, 0.8);
    }

    public playIdle(): void {
        if (!this.isAlive) return;
        this.isIdle = true;
        this.Spine.setAnimation(0, 'Idle', true);
    }

    public die(): void {
        this.isIdle = false;
        this.Spine.setAnimation(0, 'Death', false);
    }

    private applyDamage(value: number): void {
        if (!this.isAlive) return;

        this.hp -= value;
        this.HPBar.progress = this.hp / this.heroConfig.hp;
        this.HPLabel.string = this.hp.toFixed(0) + '%';

        if (this.hp <= 0) {
            this.hp = 0;
            this.HPBar.node.active = false;
            this.HPLabel.node.active = false;
            this.isAlive = false;
            this.die();
            EventManager.dispatch('death', this);
        }
    }

    private playWalk(): void {
        this.Spine.setAnimation(0, 'Walk', true);
        if (this.team.isLeft) {
            this.Spine.node.setScale(new Vec3(-1, 1, 1));
        }
    }

    public positionTo(pos: Vec3, onComplete: Function): void {
        this.playWalk();

        tween(this.node)
            .to(2, { position: pos })
            .call(() => {
                this.playIdle();
                onComplete();
            })
            .start();
    }

    private animateBullet(targetPos: Vec3, bulletName: string): void {
        const bullet: Node = this.bulletFactory.get();
        const pos = this.node.getPosition();
        this.node.parent.addChild(bullet);
        bullet.setPosition(pos.x, pos.y + 100, pos.z);
        const targetPosition = v3(targetPos.x, targetPos.y + 100, targetPos.z);

        bullet.getComponent(BulletComponent).animate(targetPosition, bulletName, this.team.isLeft, (bullet) => {
            this.bulletFactory.put(bullet);
        })
    }
}
