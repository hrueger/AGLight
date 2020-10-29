import { v4 } from "uuid";

export class FixedChannel {
    public id: string;
    public channel: string;
    public value: number;

    constructor(channel: string) {
        this.id = v4();
        this.channel = channel;
        this.value = 255;
    }
}
