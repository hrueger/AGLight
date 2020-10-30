import { Component } from "@angular/core";

@Component({
    selector: "app-show",
    styleUrls: ["./show.component.scss"],
    templateUrl: "./show.component.html",
})
export class ShowComponent {
    public async showViewerWindow(): Promise<void> {
        /* ipcRenderer.send("viewerEvent", "showWindow");
        ipcRenderer.on("viewerIsReady", async () => {
            ipcRenderer.send("viewerEvent",
                "getFixtures", await this.showService.connection.getRepository(Fixture).find());
        }); */
    }
}
