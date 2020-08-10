import { Component } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ConnectionService } from "../../_services/connection.service";

@Component({
    selector: "app-show",
    templateUrl: "./show.component.html",
})
export class ShowComponent {
    public widgets: any[] = [];
    constructor(private connectionService: ConnectionService) { }

    public ngOnInit(): void {
        this.connectionService.get("widgets").subscribe((data) => {
            if (data && data.widgets) {
                this.widgets = data.widgets;
            }
        }, (error) => {
            if (error && error.error && error.error.error) {
                dialogs.alert(error.error.error);
            } else {
                dialogs.alert("Unknown error occured");
            }
        });
    }

    public getRows(): string {
        const m = this.widgets.reduce((p, c) => (p.y + p.rows - 1 > c.y + c.rows - 1 ? p : c));
        return Array(m.y + m.rows).fill("*").join(", ");
    }

    public getColumns(): string {
        const m = this.widgets.reduce((p, c) => (p.x + p.cols - 1 > c.x + c.cols - 1 ? p : c));
        return Array(m.x + m.cols).fill("*").join(", ");
    }
}
