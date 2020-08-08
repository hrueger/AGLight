import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ConnectionService {
    public socketConnection: any;
    constructor(private httpClient: HttpClient) {}
    private _isConnected = false;
    private apiUrl: string;
    public async connect(ip: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.apiUrl = `http://${ip}:4573/`;
            this.httpClient.get(`${this.apiUrl}testConnection`).subscribe((d: any) => {
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

    public get isConnected(): boolean {
        return this._isConnected;
    }
}
