import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ConnectionService } from "../_services/connection.service";

@Injectable({ providedIn: "root" })
export class ConnectedGuard implements CanActivate {
    constructor(private connectionService: ConnectionService, private router: Router) { }

    public canActivate(): boolean {
        if (this.connectionService.isConnected) {
            return true;
        }
        dialogs.alert({
            title: "Not connected",
            message: "You need to be connected to a device running AGLight Desktop!",
            okButtonText: "Go to the 'Connect' page",
        });
        this.router.navigate(["/home"]);
        return false;
    }
}
