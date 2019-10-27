import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Channel } from "./channel";
import { Head } from "./head";

@Entity()
export class ChannelMode extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @OneToMany((type) => Channel, (channel) => channel.channelMode)
    public channels: Channel[];

    @ManyToOne((type) => Head, (head) => head.channelModes)
    public head: Head;

}
