import { Component } from "@angular/core";
import { remote } from "electron";

@Component({
    selector: "app-info",
    styleUrls: ["./info.component.scss"],
    templateUrl: "./info.component.html",
})
export class InfoComponent {
    public openExternalLink(url: string): void {
        remote.shell.openExternal(url);
    }
}
