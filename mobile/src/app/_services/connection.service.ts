import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Device } from "@nativescript/core";

@Injectable({ providedIn: "root" })
export class ConnectionService {
    public socketConnection: any;
    constructor(private httpClient: HttpClient) {}
    private _isConnected = false;
    private apiUrl: string;
    public async connect(ip: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.apiUrl = `http://${ip}:4573/`;
            this.httpClient.post(`${this.apiUrl}connect`, {
                device: {
                    model: Device.model,
                    deviceType: Device.deviceType,
                    os: Device.os,
                    osVersion: Device.osVersion,
                    sdkVersion: Device.sdkVersion,
                    language: Device.language,
                    manufacturer: Device.manufacturer,
                    uuid: Device.uuid,
                    region: Device.region,
                },
            }).subscribe((d: any) => {
                if (d && d.success === true) {
                    this._isConnected = true;
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }
    public get(url: string): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}${url}`);
    }
    public post(url: string, data: Record<string, unknown>): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}${url}`, data);
    }
    public disconnect(): void {
        this.post("disconnect", { deviceId: Device.uuid }).subscribe(() => {
            this._isConnected = false;
        });
    }

    public get isConnected(): boolean {
        return this._isConnected;
    }
}
