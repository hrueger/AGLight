import { Component, ViewChild } from "@angular/core";
import * as smalltalk from "smalltalk";
import { LibraryService } from "../../_services/library.service";
import { Fixture } from "../../_entities/fixture";
import { Product } from "../../_entities/product";
import { ShowService } from "../../_services/show.service";
import { WidgetGridComponent } from "../widget-grid/widget-grid.component";
import { DmxService } from "../../_services/dmx.service";
import { FixedChannel } from "../../_entities/fixed-channel";

@Component({
    selector: "app-configure-show",
    styleUrls: ["./configure-show.component.scss"],
    templateUrl: "./configure-show.component.html",
})
export class ConfigureShowComponent {
    public allFixtures: Fixture[] = [];
    public displayFixtures: Fixture[] = [];
    public searchValue = "";
    public previewEnabled = false;
    public fixedChannels: FixedChannel[] = [];
    public products: Product[] = [];
    @ViewChild("widgetGrid") public widgetGrid: WidgetGridComponent;
    constructor(
        private libraryService: LibraryService,
        private showService: ShowService,
        private dmxService: DmxService,
    ) { }

    public async ngOnInit(): Promise<void> {
        this.products = this.libraryService.getProducts();
        this.allFixtures = await this.showService.connection.getRepository(Fixture).find();
        for (const fixture of this.allFixtures) {
            [fixture.product] = this.products.filter((p) => p.name == fixture.name);
        }
        this.displayFixtures = this.allFixtures;
        this.updateFixedChannels();
    }

    public async updateFixedChannels(): Promise<void> {
        this.fixedChannels = await this.showService.connection.getRepository(FixedChannel).find({ relations: ["fixture"] });
        for (const f of this.fixedChannels) {
            [f.fixture.product] = this.products.filter((p) => p.name == f.fixture.name);
        }
    }

    public onFixedChannedAdded(f: FixedChannel): void {
        this.fixedChannels.push(f);
        for (const c of this.fixedChannels) {
            [c.fixture.product] = this.products.filter((p) => p.name == c.fixture.name);
        }
    }

    public editFixedChannel(fixedChannel: FixedChannel): void {
        smalltalk.prompt("Edit the value of the fixed channel", "Type in a value between 0 and 255", fixedChannel.value).then(async (v) => {
            fixedChannel.value = v;
            await this.showService.connection.getRepository(FixedChannel).save(fixedChannel);
            this.widgetGrid.updateFixedChannels();
        });
    }

    public async removeFixedChannel(fixedChannel: FixedChannel): Promise<void> {
        this.showService.connection.getRepository(FixedChannel).delete(fixedChannel.id);
        this.fixedChannels = this.fixedChannels.filter((f) => f.id !== fixedChannel.id);
    }

    public togglePreview(event: Event): void {
        if (this.previewEnabled) {
            this.previewEnabled = false;
        } else if (this.dmxService.isConnected) {
            this.previewEnabled = true;
        } else {
            this.previewEnabled = false;
            this.dmxService.connectToDevice(() => {
                this.previewEnabled = true;
            });
        }
        event.preventDefault();
    }

    public search(e: string): void {
        if (this.allFixtures) {
            this.displayFixtures = this.allFixtures.filter((h) => {
                const toSearch = `${h && h.displayName ? h.displayName.toLowerCase() : ""} ${
                    h && h.product && h.product.name ? h.product.name.toLowerCase() : ""}`;
                let notFound = false;
                for (const q of e.split(" ")) {
                    if (toSearch.indexOf(q.toLowerCase()) == -1) {
                        notFound = true;
                    }
                }
                return (!notFound);
            });
            this.sortDisplayFixtures();
        }
    }

    private sortDisplayFixtures() {
        this.displayFixtures.sort((a, b) => {
            if (a && b && a.displayName && b.displayName
                && a.product && b.product && a.product.name && b.product.name) {
                if ([a.product.name, b.product.name].sort()[0] == b.product.name) {
                    return 1;
                }
                if ([a.product.name, b.product.name].sort()[0] == a.product.name) {
                    return -1;
                }
                if ([a.displayName, b.displayName].sort()[0] == a.name) {
                    return 1;
                }
                if ([a.displayName, b.displayName].sort()[0] == b.name) {
                    return -1;
                }
            }
            return 0;
        });
    }
}
