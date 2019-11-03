import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import { Channel } from "./channel";
import { Fixture } from "./fixture";
import { Head } from "./head";

@Entity()
export class Effect extends BaseEntity {

    /*@PrimaryGeneratedColumn()
    public id: number;

    @OneToMany((type) => AffectedChannel, (affectedChannel) => affectedChannel.effect)
    public affectedChannels: AffectedChannel[];

    @Column()
    public get: string;

    @Column()
    public group: string;

    @Column()
    public name: string;

    @Column()
    public params: Array<{name: string, type: string}>;

    @ManyToMany((type) => Fixture, (fixture) => fixture.channelMode, {nullable: true, onDelete: "CASCADE" })
    public fixtures: Fixture[];

    constructor() {
        super();
    }*/

}
