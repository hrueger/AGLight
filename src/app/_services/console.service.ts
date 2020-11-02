import { Injectable } from "@angular/core";
import { hub, Tile as TileType, TileEncoder12, TileEncoder8, TileFader4, TileLedButton12, TileLedButton8 } from " ../../../../makehaus-js/dist";
import { StatusbarService } from "./statusbar.service";
import { DialogService } from "./dialog.service";

type Tile = TileLedButton8 | TileLedButton12 | TileEncoder8 | TileEncoder12 | TileFader4;

@Injectable({
    providedIn: "root",
})
export class ConsoleService {
    private isConnected = false;
    private tiles: Tile[] = [];
    constructor(
        private statusbarService: StatusbarService,
        private dialogService: DialogService,
    ) { }

    public init(): void {
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
    public async connect(): Promise<void> {
        this.statusbarService.setItem({
            name: "Connecting to console",
            icon: "spinner fa-spin",
            id: "console",
            dropup: {
                title: "Connecting",
                content: "Please wait...",
            },
        });
        this.dialogService.prompt("Connect to console", "Input the IP Address of your console.", "192.168.178.85").then((ip: string) => {
            hub.init(ip, 8192).then(() => {
                hub.on(TileType.LEDBUTTON12, (t) => this.tiles.push(t));
                hub.on(TileType.LEDBUTTON8, (t) => this.tiles.push(t));
                hub.on(TileType.MOTORFADER4, (t) => this.tiles.push(t));
                hub.on(TileType.ENCODER8, (t) => this.tiles.push(t));
                hub.on(TileType.ENCODER12, (t) => this.tiles.push(t));

                setTimeout(() => {
                    if (this.tiles.length > 0) {
                        this.statusbarService.setItem({
                            name: "MakeHaus",
                            icon: "home",
                            id: "console",
                            dropup: {
                                title: "Connected",
                                content: "",
                            },
                        });
                    } else {
                        this.showError("No tiles found.");
                    }
                }, 1000);
            }, (e) => {
                this.showError(e);
            });
        }, () => {
            this.init();
        });
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
