import { Product } from "./product";
import { Widget } from "./widget";
import { FixedChannel } from "./fixed-channel";

export class Fixture {
    public id: string;
    public displayName: string;
    public number: number;
    public startAddress: number;
    public name: string;
    public channelMode: string;
    public widgets: Widget[];
    public fixedChannels: FixedChannel[];
    public product: Product;

    constructor(
        id: string,
        displayName: string,
        number: number,
        startAddress: number,
        name: string,
        channelMode: string,
    ) {
        this.id = id;
        this.displayName = displayName;
        this.number = number;
        this.startAddress = startAddress;
        this.channelMode = channelMode;
        this.name = name;
        this.widgets = [];
        this.fixedChannels = [];
    }
}
