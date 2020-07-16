import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router,
} from "@angular/router";
import { DmxService } from "../_services/dmx.service";

@Injectable({
    providedIn: "root",
})
export class DmxOutputConnectedGuard implements CanActivate {
    constructor(private dmxService: DmxService, private router: Router) {}
    public canActivate(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: ActivatedRouteSnapshot,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: RouterStateSnapshot,
    ): boolean {
        if (this.dmxService.isConnected) {
            return true;
        }
        this.dmxService.connectToDevice(() => {
            this.router.navigate(["show"]);
        });
        return false;
    }
}
