import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ChannelMode } from "./channelMode";

@Entity()
export class Head extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public manufacturer: string;

    @OneToMany((type) => ChannelMode, (channelMode) => channelMode.head)
    public channelModes: ChannelMode[];

}
