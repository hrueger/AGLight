import { Injectable } from "@angular/core";
import { StatusbarService } from "./statusbar.service";
import * as SerialPort from "serialport";
import * as Readline from "@serialport/parser-readline";

const READY_TO_CONNECT = "ready_to_connect";
const DELIMITER = "________";

@Injectable({
    providedIn: "root",
})
export class ConsoleService {
    private connection: SerialPort;
    private isConnected: boolean = false;
    private consoleName: string;
    private consoleVersion: string;
    constructor(private statusbarService: StatusbarService) { }

    public init() {
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
                        action: "connect"
                    }
                ]
            }
        });
    }
    public async connect() {
        this.statusbarService.setItem({
            name: "Connecting to console",
            icon: "spinner fa-spin",
            id: "console",
            dropup: {
                title: "Connecting",
                content: "Connecting can take up to a minute, depending on the speed of your computer."
            }
        });
        SerialPort.list().then((d) => {
            if (d && d[0]) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject("Timeout");
                    }, 5000);
                    this.connection = new SerialPort(d[0].path, { baudRate: 115200 }, (e) => {
                        reject(e);
                    });
                    resolve();
                }).then(
                    () => {
                        const parser = this.connection.pipe(new Readline({ delimiter: "\n" }));
                        this.connection.on("open", () => {
                            this.statusbarService.setItem({
                                name: "Loading info",
                                icon: "plug",
                                id: "console",
                                dropup: {
                                    title: "Connected",
                                    content: "loading more info..."
                                },
                                actions: [],
                            });
                        });
                        parser.on("data", (data) => {
                            this.newMessage(data.trim());
                        });
                    },
                    (err) => {
                        // tslint:disable-next-line: no-console
                        console.log(err);
                        this.statusbarService.setItem({
                            name: "Error while connecting",
                            icon: "times",
                            id: "console",
                            dropup: {
                                title: "Error",
                                content: "Could not connect to console. Reason: " + err,
                                actions: [
                                    {
                                        text: "Try again",
                                        type: "primary",
                                        service: "consoleService",
                                        action: "connect"
                                    }
                                ]
                            }
                        });
                    }
                // tslint:disable-next-line: no-console
                ).catch(err => console.error("caught", err));
            }
        });
    }

    public newMessage(m: string) {
        if (!this.isConnected && m.endsWith(READY_TO_CONNECT)) {
            const p = m.split(DELIMITER);
            this.isConnected = true;
            this.consoleName = p[0];
            this.consoleVersion = p[1];
            this.statusbarService.setItem({
                name: `${this.consoleName} ${this.consoleVersion}`,
                icon: "plug",
                id: "console",
                dropup: {
                    title: "Connected",
                    content: `to ${this.consoleName} ${this.consoleVersion}.`,
                    actions: [
                        {
                            text: "Disconnect",
                            type: "primary",
                            service: "consoleService",
                            action: "disconnect"
                        }
                    ],
                },
            });
            this.sendMessage("connected");
        } else {
            // tslint:disable-next-line: no-console
            console.warn(m);
        }
    }

    public async sendMessage(m: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.write(`${m}\n`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    public disconnect() {
        if (this.connection.isOpen) {
            this.connection.close();
        }
        this.init();
    }
}
