import { _decorator, Component, Label, Node, Sprite, SpriteFrame, Toggle } from 'cc';
import { HeroConfig } from '../../../Scripts/ConfigTypes';
const { ccclass, property } = _decorator;

@ccclass('HeroCardComponent')
export class HeroCardComponent extends Component {

    @property({ type: Sprite })
    public Icon: Sprite = null;

    @property({ type: Node })
    public Checkmark: Node = null;

    @property({ type: Label })
    public IDValue: Label = null;

    @property({ type: Label })
    public HitPower: Label = null;

    @property({ type: Label })
    public AttackSpeed: Label = null;

    private isChecked: boolean = false;

    private data: HeroConfig = null;

    protected onLoad(): void {
        this.Checkmark.active = this.isChecked;
    }

    public setIcon(spriteFrame: SpriteFrame): void {
        this.Icon.spriteFrame = spriteFrame;
    }

    public setData(data: HeroConfig): void {
        this.data = data;
        this.HitPower.string = data.hitPower.toString();
        this.AttackSpeed.string = data.attackSpeed.toString();
        this.IDValue.string = data.id.toString();
    }

    public check() {
        this.isChecked = !this.isChecked;
        this.Checkmark.active = this.isChecked;


        const eventName = this.isChecked ? 'checked' : 'unchecked';
        this.node.emit(eventName, this.data.id);
    }

}

