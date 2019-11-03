import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Channel } from "./channel";
import { ChannelMode } from "./channelMode";
import { Head } from "./head";

@Entity()
export class Step extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public start: number;

    @Column()
    public mode: string;

    @Column()
    public name: string;

    @ManyToOne((type) => Channel, (channel) => channel.steps, {nullable: true, onDelete: "CASCADE" })
    public channel: Channel;

    constructor(start: number, mode: string, name: string) {
        super();
        this.start = start;
        this.mode = mode;
        this.name = name;
    }

}
