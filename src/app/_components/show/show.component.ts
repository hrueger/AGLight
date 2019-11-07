import { Component, OnInit } from "@angular/core";
import { ipcRenderer } from "electron";
import { Fixture } from "../../_entities/fixture";
import { Widget } from "../../_entities/widget";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "app-show",
  styleUrls: ["./show.component.scss"],
  templateUrl: "./show.component.html",
})
export class ShowComponent implements OnInit {
  public widgets: Widget[] = [];

  constructor(private showService: ShowService) {}

  public async ngOnInit() {
    this.widgets = await this.showService.connection.getRepository(Widget).find();
  }

  public async showViewerWindow() {
    ipcRenderer.send("viewerEvent", "showWindow");
    ipcRenderer.on("viewerIsReady", async () => {
      ipcRenderer.send("viewerEvent", "getFixtures", await this.showService.connection.getRepository(Fixture).find());
    });
  }
}
