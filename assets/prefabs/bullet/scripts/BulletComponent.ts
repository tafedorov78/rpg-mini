import { _decorator, Component, Node, tween, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletComponent')
export class BulletComponent extends Component {

    images: Node[] = [];

    protected onLoad(): void {
        this.setType('2');
    }


    public setType(name: string, isLeft = false) {
        this.node.children.forEach((child) => {
            child.active = false;
        })

        const node = this.node.getChildByName(name);
        node.active = true;

        if (isLeft) {
            node.setScale(v3(-1, 1, 1));
        }
    }

    public animate(targetPosition: Vec3, bulletName: string, isLeft: boolean, callback: (bullet: Node) => void): void {
        this.setType(bulletName, isLeft);

        const update = bulletName === '2'
            ? (target: Node, ratio: number) => {
                const yOffset = 100 * (4 * ratio * (1 - ratio));
                const newY = targetPosition.y + yOffset;
                target.setPosition(target.position.x, newY, target.position.z);
            }
            : null

        const time = bulletName === '2' ? 0.8 : 0.5;
        tween(this.node)
            .to(time, { position: targetPosition }, {
                onUpdate: update
            })
            .call(() => {
                callback(this.node);
            })
            .start();
    }
}

