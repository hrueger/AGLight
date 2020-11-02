import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
    hub, Tile as TileType, TileEncoder12, TileEncoder8, TileFader4, TileLedButton12, TileLedButton8,
} from " ../../../../makehaus-js/dist";
import { StatusbarService } from "./statusbar.service";
import { DialogService } from "./dialog.service";
import { SettingsService } from "./settings.service";
import { ConsoleComponent } from "../_components/console/console.component";

const TileTypes = ["8E", "12E", "4F", "8B", "12B"];
type TileTypeShort = "8E" | "12E" | "4F" | "8B" | "12B";

export class TileConfig {
    tile?: Tile;
    tileType: TileTypeShort;
    x: number;
    y: number;
    rows: number;
    cols: number;
    constructor(tile: Tile, tileType: TileTypeShort, cols: number, rows: number) {
        this.tile = tile;
        this.tileType = tileType;
        this.cols = cols;
        this.rows = rows;
    }
}
export type Tile = TileLedButton8 | TileLedButton12 | TileEncoder8 | TileEncoder12 | TileFader4;
enum Settings {
    CONSOLE_IP = "CONSOLE_IP",
    TILES = "TILES",
}

@Injectable({
    providedIn: "root",
})
export class ConsoleService {
    private isConnected = false;
    private tiles: TileConfig[] = [];
    constructor(
        private statusbarService: StatusbarService,
        private dialogService: DialogService,
        private settingsService: SettingsService,
        private modalService: NgbModal,
    ) { }

    public init(): void {
        this.setStatusbarNotConnected();
        const lastIP = this.settingsService.get(Settings.CONSOLE_IP);
        if (lastIP) {
            this.connectToHub(lastIP, false);
        }
    }
    private setStatusbarNotConnected() {
        this.statusbarService.setItem({
            name: "No console connected",
            icon: "times",
            id: "console",
            dropup: {
                title: "Consoles",
                content: "No console connected.",
                actions: [
                    {
                        text: "Connect",
                        type: "primary",
                        service: "consoleService",
                        action: "connect",
                    },
                ],
            },
        });
    }

    public async connect(userFeedback = true): Promise<void> {
        this.dialogService.prompt("Connect to console", "Input the IP Address of your console.", this.settingsService.get(Settings.CONSOLE_IP) || "").then((ip: string) => {
            this.connectToHub(ip, userFeedback);
        }, () => {
            this.setStatusbarNotConnected();
        });
    }

    private connectToHub(ip: string, userFeedback: boolean) {
        this.statusbarService.setItem({
            name: "Connecting to console",
            icon: "spinner fa-spin",
            id: "console",
            dropup: {
                title: "Connecting",
                content: "Please wait...",
            },
        });
        hub.init(ip, 8192).then(() => {
            hub.on(TileType.LEDBUTTON8, (t: Tile) => this.tiles.push(new TileConfig(t, "8B", 4, 2)));
            hub.on(TileType.LEDBUTTON12, (t: Tile) => this.tiles.push(new TileConfig(t, "12B", 4, 3)));
            hub.on(TileType.MOTORFADER4, (t: Tile) => this.tiles.push(new TileConfig(t, "4F", 4, 4)));
            hub.on(TileType.ENCODER8, (t: Tile) => this.tiles.push(new TileConfig(t, "8E", 4, 2)));
            hub.on(TileType.ENCODER12, (t: Tile) => this.tiles.push(new TileConfig(t, "12E", 4, 3)));

            setTimeout(() => {
                if (this.tiles.length > 0) {
                    this.statusbarService.setItem({
                        name: "MakeHaus",
                        icon: "home",
                        id: "console",
                        dropup: {
                            title: "Connected",
                            content: "",
                            actions: [
                                {
                                    text: "Configure",
                                    type: "primary",
                                    service: "consoleService",
                                    action: "openConfigureConsoleDialog",
                                },
                            ],
                        },
                    });

                    const lastTileConfig: TileConfig[] = this.settingsService.get(Settings.TILES);
                    if (lastTileConfig.length == this.tiles.length) {
                        let isEqual = true;
                        for (const tt of TileTypes) {
                            if (lastTileConfig.filter((t) => t.tileType == tt).length
                                != this.tiles.filter((t) => t.tileType == tt).length) {
                                isEqual = false;
                            }
                        }
                        if (isEqual) {
                            for (const tile of this.tiles) {
                                const t = lastTileConfig.find((tl) => tl.tileType == tile.tileType);
                                tile.x = t.x;
                                tile.y = t.y;
                            }
                        }
                    }

                    this.settingsService.set(Settings.CONSOLE_IP, ip);
                    if (userFeedback) {
                        this.openConfigureConsoleDialog();
                    }
                } else if (userFeedback) {
                    this.showError("No tiles found.");
                } else {
                    this.setStatusbarNotConnected();
                }
            }, 1000);
        }, (e) => {
            if (userFeedback) {
                this.showError(e);
            } else {
                this.setStatusbarNotConnected();
            }
        });
    }

    public openConfigureConsoleDialog(): void {
        const modal = this.modalService.open(ConsoleComponent, { size: "xl" });
        (modal.componentInstance as ConsoleComponent).tiles = this.tiles;
        modal.result.then((tiles) => {
            this.tiles = tiles;
            this.settingsService.set(Settings.TILES, tiles.map((t) => {
                t.tile = undefined; return t;
            }));
        }, () => undefined);
    }

    private showError(e: any) {
        this.statusbarService.setItem({
            name: "Error while connecting",
            icon: "times",
            id: "console",
            dropup: {
                title: "Error",
                content: `Could not connect to console. Reason: ${e}`,
                actions: [
                    {
                        text: "Try again",
                        type: "primary",
                        service: "consoleService",
                        action: "connect",
                    },
                ],
            },
        });
    }
}
