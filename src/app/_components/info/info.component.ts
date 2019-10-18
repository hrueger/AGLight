import { Component, OnInit } from "@angular/core";
import { remote } from "electron";

@Component({
  selector: "app-info",
  styleUrls: ["./info.component.scss"],
  templateUrl: "./info.component.html",
})
export class InfoComponent {
  public openExternalLink(url: string) {
    remote.shell.openExternal(url);
  }
}
