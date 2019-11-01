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

    @Column()
    public length: number;

    @Column()
    public number: number;

    @OneToMany((type) => Step, (step) => step.channel,
    {cascade: ["insert", "update", "remove"], eager: true})
    public steps: Step[];

    @ManyToOne((type) => ChannelMode, (channelMode) => channelMode.channels)
    public channelMode: ChannelMode;

    constructor(
        startAdress: number,
        type: string,
        name: string,
        length: number,
        // tslint:disable-next-line: variable-name
        number: number,
        steps: Step[]) {

        super();
        this.startAdress = startAdress;
        this.type = type;
        this.name = name;
        this.length = length;
        this.steps = steps;
        this.number = number;
    }
}
