import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import { Fixture } from "./fixture";
import { EffectOptionsData, EffectWidgetOption } from "../_ressources/widgets";

@Entity()
export class FixedChannel extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public channel: string;

    @Column()
    public value: number;

    @ManyToOne(() => Fixture, (fixture) => fixture.widgets)
    public fixture: Fixture;

    constructor(fixture: Fixture, channel: string) {
        super();
        this.channel = channel;
        this.fixture = fixture;
        this.value = 255;
    }
}
