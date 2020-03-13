import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Product} from "./product";
import { Widget } from "./widget";

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

    @Column()
    public name: string;

    @Column()
    public channelMode: string;

    @OneToMany((type) => Widget, (widget) => widget.fixture)
    public widgets: Widget[];

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

    public product?: Product;

    // tslint:disable-next-line: variable-name
    constructor(displayName: string, number: number, startAddress: number, name: string, channelMode: string) {
        super();
        this.displayName = displayName;
        this.number = number;
        this.startAddress = startAddress;
        this.channelMode = channelMode;
        this.name = name;
    }

}
