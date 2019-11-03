import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ChannelMode } from "./channelMode";
import { Head } from "./head";
import { Step } from "./step";

@Entity()
export class Channel extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public startAddress: number;

    @Column()
    public type: string;

    @Column()
    public name: string;

    @Column()
    public length: number;

    @OneToMany((type) => Step, (step) => step.channel,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public steps: Step[];

    @ManyToOne((type) => ChannelMode, (channelMode) => channelMode.channels, {nullable: true, onDelete: "CASCADE" })
    public channelMode: ChannelMode;

    public showChannelConfig?: boolean;

    constructor(
        startAddress: number,
        type: string,
        name: string,
        length: number,
        steps: Step[]) {

        super();
        this.startAddress = startAddress;
        this.type = type;
        this.name = name;
        this.length = length;
        this.steps = steps;
    }
}
