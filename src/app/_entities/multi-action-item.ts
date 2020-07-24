import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from "typeorm";
import { Fixture } from "./fixture";
import { Widget } from "./widget";

@Entity()
export class MultiActionItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public channel: string;

    @Column({ default: "" })
    public customChannel: string;

    @Column({ default: 0 })
    public value: number;

    @Column({ default: 1000 })
    public transitionTime: number;

    @ManyToOne(() => Fixture, (fixture) => fixture.multiActionItems)
    public fixture: Fixture;

    @ManyToOne(() => Widget, (widget) => widget.multiActionItems)
    public widget: Widget;
}
