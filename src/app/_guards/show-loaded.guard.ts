import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,
} from "@angular/router";
import { ShowService } from "../_services/show.service";

@Injectable({
    providedIn: "root",
})
export class ShowLoadedGuard implements CanActivate {
    constructor(private showService: ShowService, private router: Router) {}
    public canActivate(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: ActivatedRouteSnapshot,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: RouterStateSnapshot,
    ): boolean {
        if (this.showService.showLoaded) {
            return true;
        }
        this.router.navigate(["home"]);
        return false;
    }
}
