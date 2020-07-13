import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import { Fixture } from "./fixture";

export type WidgetType = "Fader" | "Button" | "Colorpicker" | "RGB Colorpicker" | "ButtonGrid";

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

    @Column()
    public type: WidgetType;

    @Column()
    public channel: string;

    @Column({ default: "" })
    public displayName: string;

    @Column({ type: "simple-json", default: "" })
    public config: {
        name?: string;
        transitionTime?: number;
        buttonValue?: number;
    };

    @ManyToOne(() => Fixture, (fixture) => fixture.widgets)
    public fixture: Fixture;

    constructor(x: number, y: number, rows: number, cols: number, type: WidgetType,
        channel: string, fixture: Fixture) {
        super();
        this.x = x;
        this.y = y;
        this.cols = cols;
        this.rows = rows;
        this.type = type;
        this.channel = channel;
        this.fixture = fixture;
    }
}
