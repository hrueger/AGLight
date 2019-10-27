import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ChannelMode } from "./channelMode";
import { Head } from "./head";
import { Step } from "./step";

@Entity()
export class Channel extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public startAdress: number;

    @Column()
    public type: string;

    @Column()
    public name: string;

    @OneToMany((type) => Step, (step) => step.channel)
    public steps: Step[];

    @ManyToOne((type) => ChannelMode, (channelMode) => channelMode.channels)
    public channelMode: ChannelMode;

}
