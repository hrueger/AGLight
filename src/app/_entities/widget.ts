import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import { Fixture } from "./fixture";
import { EffectOptionsData, EffectWidgetOption } from "../_ressources/widgets";

export type WidgetType = "Fader" | "Button" | "Colorpicker" | "RGB Colorpicker" | "ButtonGrid" | "BlackoutButton";

@Entity()
export class Widget extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public x: number;

    @Column()
    public y: number;

    @Column()
    public rows: number;

    @Column()
    public cols: number;

    @Column({ nullable: true })
    public type: WidgetType;

    @Column({ default: "", nullable: true })
    public effect?: string;

    @Column()
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

    constructor(x: number, y: number, rows: number, cols: number, type: WidgetType,
        channel: string, fixture: Fixture, customChannel = "", effect?: string) {
        super();
        this.x = x;
        this.y = y;
        this.cols = cols;
        this.rows = rows;
        this.type = type;
        this.channel = channel;
        this.fixture = fixture;
        this.customChannel = customChannel;
        this.effect = effect;
        this.config = {
            transitionTime: 1000,
        };
    }
}
