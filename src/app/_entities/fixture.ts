import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ChannelMode } from "./channelMode";
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
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public head: Head;

    @ManyToOne((type) => ChannelMode, (channelMode) => channelMode.fixtures,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public channelMode: ChannelMode;

    // tslint:disable-next-line: variable-name
    constructor(displayName: string, number: number, startAddress: number, head: Head, channelMode: ChannelMode) {
        super();
        this.displayName = displayName;
        this.number = number;
        this.startAddress = startAddress;
        this.head = head;
        this.channelMode = channelMode;
    }

}
