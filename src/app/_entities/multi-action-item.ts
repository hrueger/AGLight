import { v4 } from "uuid";

export class MultiActionItem {
    public id: string;
    public channel: string;
    public customChannel: string;
    public value: number;
    public transitionTime: number;
    public fixtureId: string;

    constructor(channel: string,
        customChannel: string, value: number,
        fixtureId: string, widgetId: string,
        transitionTime = 1000) {
        this.id = v4();
        this.channel = channel;
        this.customChannel = customChannel;
        this.value = value;
        this.transitionTime = transitionTime;
        this.fixtureId = fixtureId;
    }
}
