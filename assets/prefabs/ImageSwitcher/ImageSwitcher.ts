import { _decorator, CCInteger, Component, Sprite, SpriteFrame, UITransform } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('FrameSwitcher')
@executeInEditMode
export class FrameSwitcher extends Component {
    @property([SpriteFrame])
    frames: SpriteFrame[] = [];

    @property({
        type: CCInteger,
        tooltip: "Index of the frame to display",
        step: 1,
    })
    get currentFrameIndex() {
        return this._currentFrameIndex;
    }
    set currentFrameIndex(value: number) {
        if (value >= 0 && value < this.frames.length) {
            this._currentFrameIndex = value;
            this.updateImage();
        } else {
            console.error('Invalid frame index:', value);
        }
    }

    private _currentFrameIndex: number = 0;
    private sprite: Sprite = null;

    onLoad() {
        this.sprite = this.getComponent(Sprite);
        this.updateImage();
    }

    protected update(dt: number): void {
        this.updateImage();
    }

    updateImage() {
        if (this.frames.length > 0 && this.sprite) {
            this.sprite.spriteFrame = this.frames[this._currentFrameIndex];
            
            const spriteFrame = this.frames[this._currentFrameIndex];
            const size = spriteFrame.originalSize;

            const uiTransform = this.getComponent(UITransform);
            if (uiTransform && size) {
                uiTransform.setContentSize(size.width, size.height);
            }
        }
    }
}
