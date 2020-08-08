import { Component } from "@angular/core";
import { ConnectionService } from "../../_services/connection.service";

@Component({
    selector: "app-show",
    templateUrl: "./show.component.html",
})
export class ShowComponent {
    constructor(private connectionService: ConnectionService) { }

    public send(): void {
        this.connectionService.get("widgets").subscribe((data) => {
            console.log("data", data);
        });
    }
}
