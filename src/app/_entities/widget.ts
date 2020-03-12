import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

    constructor(x: number, y: number, rows: number, cols: number, type: string,
                effectOrHead: string) {
        super();
        this.x = x;
        this.y = y;
        this.cols = cols;
        this.rows = rows;
        this.type = type;
        this.effectOrHead = effectOrHead;
    }

}
