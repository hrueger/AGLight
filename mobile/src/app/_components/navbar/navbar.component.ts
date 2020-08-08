import { Component, Input } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
    @Input() public title = "AGLight";
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
