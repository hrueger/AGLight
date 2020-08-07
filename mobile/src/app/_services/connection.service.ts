import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SocketIO = require("nativescript-socket.io");

@Injectable({ providedIn: "root" })
export class ConnectionService {
    private socketConnection: any;
    constructor(private httpClient: HttpClient) {}
    private _isConnected = false;
    public connect(ip: string): boolean {
        console.log(`http://${ip}:4573/socket.io/`);
        this.httpClient.get(`http://${ip}:4573/socket.io/`).subscribe((d) => {
            console.log(d);
        }, (e) => {
            console.log(e);
        });
        SocketIO.enableDebug();
        this._isConnected = true;
        this.socketConnection = SocketIO.connect(`http://${ip}:4573/socket.io/`, {
            secure: false,
        });
        console.log(this.socketConnection.android);
        this.socketConnection.on("connect", () => {
            console.log("connect");
        });

        this.socketConnection.on("welcome", function () {
            console.log("welcome", arguments);
        });

        this.socketConnection.on("request", (info, ack) => {
            console.log("request", info);
            if (info === "datetime") {
                ack(new Date());
            } else if (info === "random") {
                ack(Math.random());
            } else {
                ack(null);
            }
        });

        this.socketConnection.emit("hello", {
            username: "someone",
        });

        this.socketConnection.emit("hello-ack", {
            username: "someone",
        }, function ack() {
            console.log("hello-ack", arguments);
        });
        return true;
    }
    public get isConnected(): boolean {
        return this._isConnected;
    }
}
