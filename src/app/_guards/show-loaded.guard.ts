import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ShowService } from "../_services/show.service";

@Injectable({
  providedIn: "root",
})
export class ShowLoadedGuard implements CanActivate {
  constructor(private showService: ShowService, private router: Router) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      /*if (this.showService.showLoaded) {
        return true;
      } else {
        this.router.navigate(["home"]);
      }*/
      return true;
  }
}
