import { v4 } from "uuid";
import { EffectOptionsData, EffectWidgetOption } from "../_ressources/widgets";
import { MultiActionItem } from "./multi-action-item";

export type WidgetType = "Fader" | "Button" | "Colorpicker" | "RGB Colorpicker" | "ButtonGrid" | "BlackoutButton" | "MultiAction";

export class Widget {
    public id: string;
    public x: number;
    public y: number;
    public rows: number;
    public cols: number;
    public type: WidgetType;
    public effect?: string;
    public channel: string;
    public customChannel: string;
    public displayName: string;
    public config: {
        name?: string;
        transitionTime?: number;
        buttonValue?: number;
        buttonName?: string;
    };
    public effectConfig: EffectOptionsData;
    public effectData?: EffectWidgetOption;
    public multiActionItems: MultiActionItem[] = [];

    constructor(x: number, y: number, rows: number, cols: number, type: WidgetType,
        channel: string, customChannel = "", effect?: string) {
        this.id = v4();
        this.x = x || 0;
        this.y = y || 0;
        this.cols = cols || 1;
        this.rows = rows || 1;
        this.type = type || "Button";
        this.channel = channel || "";
        this.customChannel = customChannel;
        this.effect = effect;
        this.config = {
            transitionTime: 1000,
        };
    }
}
