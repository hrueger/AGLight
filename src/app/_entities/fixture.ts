import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Head } from "./head";

@Entity()
export class Fixture extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public displayName: string;

    @Column()
    public number: number;

    @Column()
    public startAddress: number;

    @ManyToOne((type) => Head, (head) => head.fixtures,
    {cascade: ["insert", "update", "remove"], eager: true})
    public head: Head;

    // tslint:disable-next-line: variable-name
    constructor(displayName: string, number: number, startAdress: number, head: Head) {
        super();
        this.displayName = displayName;
        this.number = number;
        this.startAddress = startAdress;
    }

}
