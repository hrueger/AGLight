import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Channel } from "./channel";
import { ChannelMode } from "./channelMode";
import { Head } from "./head";

@Entity()
export class Fixture extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public displayName: string;

    @Column()
    public number: number;

    @Column()
    public startAddress: number;

    @ManyToOne((type) => Head, (head) => head.fixtures,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public head: Head;

    @OneToMany((type) => Channel, (channel) => channel.fixture,
    {nullable: true, cascade: ["insert", "update", "remove"], eager: true, onDelete: "CASCADE" })
    public channels: Channel[];

    public object?: {
        fixture: import("babylonjs/Meshes/mesh").Mesh;
        fixtureLight: import("babylonjs/Meshes/mesh").Mesh;
        rainbowInterval?: any;
        currentRainbowColorIndex?: number;
        currentRGBColor?: {
            r: number,
            b: number,
            g: number,
        }
    };

    // tslint:disable-next-line: variable-name
    constructor(displayName: string, number: number, startAddress: number, head: Head, channels: Channel[]) {
        super();
        this.displayName = displayName;
        this.number = number;
        this.startAddress = startAddress;
        this.head = head;
        this.channels = channels;
    }

}
