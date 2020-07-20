import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import { Fixture } from "./fixture";
import { EffectOptionsData, EffectWidgetOption } from "../_ressources/widgets";
import { MultiActionItem } from "./multi-action-item";

export type WidgetType = "Fader" | "Button" | "Colorpicker" | "RGB Colorpicker" | "ButtonGrid" | "BlackoutButton" | "MultiAction";

@Entity()
export class Widget extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public x: number;

    @Column({ nullable: true })
    public y: number;

    @Column({ nullable: true })
    public rows: number;

    @Column({ nullable: true })
    public cols: number;

    @Column({ nullable: true })
    public type: WidgetType;

    @Column({ default: "", nullable: true })
    public effect?: string;

    @Column({ nullable: true })
    public channel: string;

    @Column({ default: "" })
    public customChannel: string;

    @Column({ default: "" })
    public displayName: string;

    @Column({ type: "simple-json", default: "" })
    public config: {
        name?: string;
        transitionTime?: number;
        buttonValue?: number;
        buttonName?: string;
    };

    @Column({ type: "simple-json", default: "" })
    public effectConfig: EffectOptionsData;

    public effectData?: EffectWidgetOption;

    @ManyToOne(() => Fixture, (fixture) => fixture.widgets)
    public fixture: Fixture;

    @ManyToOne(() => MultiActionItem, (item) => item.widget)
    public multiActionItems: MultiActionItem[];

    constructor(x: number, y: number, rows: number, cols: number, type: WidgetType,
        channel: string, fixture: Fixture, customChannel = "", effect?: string) {
        super();
        this.x = x || 0;
        this.y = y || 0;
        this.cols = cols || 1;
        this.rows = rows || 1;
        this.type = type || "Button";
        this.channel = channel || "";
        this.fixture = fixture;
        this.customChannel = customChannel;
        this.effect = effect;
        this.config = {
            transitionTime: 1000,
        };
    }
}
