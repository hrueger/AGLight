import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import { Fixture } from "./fixture";

@Entity()
export class FixedChannel extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public channel: string;

    @Column({ default: 0, nullable: true })
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
