import { Fixture } from "./fixture";
import { Widget } from "./widget";

export class MultiActionItem {
    public id: string;
    public channel: string;
    public customChannel: string;
    public value: number;
    public transitionTime: number;
    public fixture: Fixture;
    public widget: Widget;

    constructor(id: string, channel: string,
        customChannel: string, value: number,
        fixture: Fixture, widget: Widget,
        transitionTime = 1000) {
        this.id = id;
        this.channel = channel;
        this.customChannel = customChannel;
        this.value = value;
        this.transitionTime = transitionTime;
        this.fixture = fixture;
        this.widget = widget;
    }
}
