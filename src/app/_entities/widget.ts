import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, OneToOne} from "typeorm";
import { Fixture } from "./fixture";
import { Channel } from "./channel";

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
    public effectOrHead: string;

    @OneToOne((type) => Channel, (channel) => channel.widget,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public channel: Channel;

    constructor(x: number, y: number, rows: number, cols: number, type: string, effectOrHead: string) {
        super();
        this.x = x;
        this.y = y;
        this.cols = cols;
        this.rows = rows;
        this.type = type;
        this.effectOrHead = effectOrHead;
    }

}
