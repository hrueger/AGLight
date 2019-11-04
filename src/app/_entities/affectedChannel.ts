import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Channel } from "./channel";
import { Fixture } from "./fixture";
import { Head } from "./head";

@Entity()
export class AffectedChannel extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    constructor() {
        super();
    }

}
