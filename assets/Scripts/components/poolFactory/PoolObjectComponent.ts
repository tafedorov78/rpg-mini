import { _decorator, CCInteger, Component, instantiate, Node, NodePool, Prefab, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PoolObjectComponent')
export class PoolObjectComponent extends Component {

    @property({ type: Prefab })
    private prefab: Prefab;

    @property({ type: CCInteger })
    public Size: number = 0;

    private _pool: NodePool;

    protected onLoad(): void {
        this.pool = new NodePool();

        for (let i = 0; i < this.Size; i++) {
            const node = instantiate(this.prefab);
            this.pool.put(node);
        }
    }

    public get(): Node {
        let node = this.pool.get();
        if (!node) {
            node = this.decorate(instantiate(this.prefab));
        }
        return node;
    }

    public decorate(node: Node): Node {
        return node;
    }

    public put(node: Node): void {
        node.setScale(v3(1, 1, 1));
        this.pool.put(node);
    }

    set pool(value: NodePool) {
        this._pool = value;
    }

    get pool(): NodePool {
        return this._pool;
    }
}

