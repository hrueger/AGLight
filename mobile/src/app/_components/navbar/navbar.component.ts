import { Component, Input } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
    @Input() public title = "AGLight";
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
