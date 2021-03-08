import * as uuid from 'uuid';

export class Monarch {
    name: string;
    keepLevel: number;
    keepPower: number;
    uId: string;
    reinforcing: Monarch[];

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
