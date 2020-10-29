import { Fixture } from "./fixture";

export class FixedChannel {
    public id: string;
    public channel: string;
    public value: number;
    public fixture: Fixture;

    constructor(id: string, fixture: Fixture, channel: string) {
        this.channel = channel;
        this.id = id;
        this.fixture = fixture;
        this.value = 255;
    }
}
