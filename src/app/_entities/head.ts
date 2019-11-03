import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ChannelMode } from "./channelMode";
import { Fixture } from "./fixture";

@Entity()
export class Head extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public manufacturer: string;

    @OneToMany((type) => ChannelMode, (channelMode) => channelMode.head,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true})
    public channelModes: ChannelMode[];

    @OneToMany((type) => Fixture, (fixture) => fixture.head, {nullable: true, onDelete: "CASCADE" })
    public fixtures: Fixture[];

    public showChannelModes?: boolean;

    constructor(name: string, manufacturer: string, channelModes: ChannelMode[]) {
        super();
        this.name = name;
        this.manufacturer = manufacturer;
        this.channelModes = channelModes;
    }

}
