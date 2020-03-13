import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Fixture } from "./fixture";

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
    public type: string;

    @Column()
    public channel: string;

    @ManyToOne((type) => Fixture, (fixture) => fixture.widgets)
    public fixture: Fixture;

    constructor(x: number, y: number, rows: number, cols: number, type: string,
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
