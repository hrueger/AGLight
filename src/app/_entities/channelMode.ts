import {BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Channel } from "./channel";
import { Fixture } from "./fixture";
import { Head } from "./head";

@Entity()
export class ChannelMode extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @OneToMany((type) => Channel, (channel) => channel.channelMode,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public channels: Channel[];

    @ManyToOne((type) => Head, (head) => head.channelModes, {nullable: true, onDelete: "CASCADE" })
    public head: Head;

    constructor(channels: Channel[]) {
        super();
        this.channels = channels;
    }

}