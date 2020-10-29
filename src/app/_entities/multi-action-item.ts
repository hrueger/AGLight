export class MultiActionItem {
    public id: string;
    public channel: string;
    public customChannel: string;
    public value: number;
    public transitionTime: number;
    public fixtureId: string;
    public widgetId: string;

    constructor(id: string, channel: string,
        customChannel: string, value: number,
        fixtureId: string, widgetId: string,
        transitionTime = 1000) {
        this.id = id;
        this.channel = channel;
        this.customChannel = customChannel;
        this.value = value;
        this.transitionTime = transitionTime;
        this.fixtureId = fixtureId;
        this.widgetId = widgetId;
    }
}
