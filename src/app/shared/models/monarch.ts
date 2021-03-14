import * as uuid from 'uuid';

export class Monarch {
    private _reinforcedBy: Monarch;

    name: string;
    keepLevel: number;
    keepPower: number;
    uId: string;
    reinforcing: Monarch[];

    public get reinforcedBy() {
        return this._reinforcedBy;
    }

    public set reinforcedBy(val: Monarch) {
        if (this._reinforcedBy === val) {
            return;
        }
        if (this._reinforcedBy) {
            this._reinforcedBy.reinforcing = this._reinforcedBy.reinforcing.filter(x => x !== this);
        }

        val.reinforcing.push(this);
        this._reinforcedBy = val;
    }

    public addReinforcing(val: Monarch) {
        val.reinforcedBy = this;
    }

    constructor(options: {
        name: string,
        keepLevel?: number,
        keepPower?: number,
        children?: Monarch[]
    }) {
        this.name = options.name;
        this.keepLevel = options.keepLevel ?? 0;
        this.keepPower = options.keepPower ?? 0;
        this.uId = uuid.v4();
        this.reinforcing = options.children || [];
    }
}
