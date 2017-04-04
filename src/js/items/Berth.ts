export class Berth {
    bridge: string;
    position: number;

    constructor(bridge: string, position: number) {
        this.bridge = bridge;
        this.position = position;
    }

    toString() {
        return this.bridge + '-' + this.position;
    }
}