import { Component } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";
import { ConnectionService } from "../../_services/connection.service";

@Component({
    selector: "app-show",
    templateUrl: "./show.component.html",
})
export class ShowComponent {
    public widgets: any[] = [];
    constructor(private connectionService: ConnectionService, private router: Router) { }

    public ngOnInit(): void {
        this.connectionService.get("widgets").subscribe((data) => {
            if (data && data.widgets) {
                this.widgets = data.widgets;
            }
        }, (error) => {
            if (error && error.error && error.error.error) {
                if (error.error.noShowLoaded) {
                    dialogs.confirm({
                        title: "No show loaded",
                        message: "Do you want to open a recent show?",
                        okButtonText: "Yes",
                        cancelButtonText: "No",
                        neutralButtonText: "",
                    }).then((v) => {
                        if (v) {
                            this.connectionService.get("recentShows").subscribe((shows) => {
                                dialogs.action({
                                    title: "Open recent show",
                                    message: "Select a show file to open it",
                                    actions: shows,
                                }).then((show) => {
                                    this.connectionService.post("openRecentShow", { show }).subscribe((d) => {
                                        if (d && d.success) {
                                            dialogs.alert("Show loaded successfully!");
                                            this.ngOnInit();
                                        } else {
                                            dialogs.alert("Unknown error occurred");
                                        }
                                    }, (e) => {
                                        dialogs.alert(e);
                                    });
                                });
                            });
                        }
                    });
                } else {
                    dialogs.alert(error.error.error);
                    this.router.navigate(["/home"]);
                }
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
