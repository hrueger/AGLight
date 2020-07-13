import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,
} from "@angular/router";
import { DmxService } from "../_services/dmx.service";

@Injectable({
    providedIn: "root",
})
export class DmxOutputConnectedGuard implements CanActivate {
    constructor(private dmxService: DmxService) {}
    public canActivate(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: ActivatedRouteSnapshot,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: RouterStateSnapshot,
    ): boolean {
        if (this.dmxService.isConnected) {
            return true;
        }
        this.dmxService.connectToDevice();
        return false;
    }
}
