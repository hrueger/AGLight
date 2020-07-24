import { Component, OnInit } from "@angular/core";
import { ipcRenderer } from "electron";
import { Fixture } from "../../_entities/fixture";
import { Widget } from "../../_entities/widget";
import { FixedChannel } from "../../_entities/fixed-channel";
import { ShowService } from "../../_services/show.service";
import { LibraryService } from "../../_services/library.service";

@Component({
    selector: "app-show",
    styleUrls: ["./show.component.scss"],
    templateUrl: "./show.component.html",
})
export class ShowComponent implements OnInit {
    public widgets: Widget[] = [];
    public fixedChannels: FixedChannel[] = [];

    constructor(private showService: ShowService, private libraryService: LibraryService) { }

    public async ngOnInit(): Promise<void> {
        const products = this.libraryService.getProducts();
        this.widgets = await this.showService.connection.getRepository(Widget).find();
        this.fixedChannels = await this.showService.connection.getRepository(FixedChannel).find({ relations: ["fixture"] });
        for (const f of this.fixedChannels) {
            [f.fixture.product] = products.filter((p) => p.name == f.fixture.name);
        }
    }

    public async showViewerWindow(): Promise<void> {
        ipcRenderer.send("viewerEvent", "showWindow");
        ipcRenderer.on("viewerIsReady", async () => {
            ipcRenderer.send("viewerEvent", "getFixtures", await this.showService.connection.getRepository(Fixture).find());
        });
    }
}
