export class FixedChannel {
    public id: string;
    public channel: string;
    public value: number;

    constructor(id: string, channel: string) {
        this.channel = channel;
        this.id = id;
        this.value = 255;
    }
}
