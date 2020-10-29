import { Product } from "./product";
import { Widget } from "./widget";
import { MultiActionItem } from "./multi-action-item";

export class Fixture {
    public id: string;
    public displayName: string;
    public number: number;
    public startAddress: number;
    public name: string;
    public channelMode: string;
    public widgets: Widget[];
    public multiActionItems: MultiActionItem[];
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
    }
}
