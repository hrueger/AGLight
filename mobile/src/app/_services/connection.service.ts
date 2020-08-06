import { Injectable } from "@angular/core";
import { SocketIO } from "nativescript-socketio";

@Injectable({ providedIn: "root" })
export class ConnectionService {
    private socketConnection: SocketIO;
    private _isConnected = false;
    public connect(ip: string): boolean {
        this._isConnected = true;
        return true;
        // this.socketConnection = new SocketIO(`${ip}:4573`);
    }
    public get isConnected(): boolean {
        return this._isConnected;
    }
}
