import { Component, ViewChild } from "@angular/core";
import { LibraryService } from "../../_services/library.service";
import { Fixture } from "../../_entities/fixture";
import { Product } from "../../_entities/product";
import { ShowService } from "../../_services/show.service";
import { WidgetGridComponent } from "../widget-grid/widget-grid.component";
import { DmxService } from "../../_services/dmx.service";
import { DialogService } from "../../_services/dialog.service";
import { FixedChannel } from "../../_entities/fixed-channel";

@Component({
    selector: "app-configure-show",
    styleUrls: ["./configure-show.component.scss"],
    templateUrl: "./configure-show.component.html",
})
export class ConfigureShowComponent {
    public displayFixtures: Fixture[] = [];
    public searchValue = "";
    public previewEnabled = false;
    public products: Product[] = [];
    @ViewChild("widgetGrid") public widgetGrid: WidgetGridComponent;
    constructor(
        private libraryService: LibraryService,
        private showService: ShowService,
        private dmxService: DmxService,
        private dialogService: DialogService,
    ) { }

    public async ngOnInit(): Promise<void> {
        this.products = this.libraryService.getProducts();
        this.displayFixtures = this.showService.showData.fixtures;
    }

    public editFixedChannel(fixedChannel: FixedChannel): void {
        this.dialogService.prompt("Edit the value of the fixed channel", "Type in a value between 0 and 255", fixedChannel.value, true).then(async (v: number) => {
            fixedChannel.value = v;
            this.widgetGrid.updateFixedChannels();
        });
    }

    public async removeFixedChannel(fixture: Fixture, fixedChannel: FixedChannel): Promise<void> {
        this.dialogService.confirm("Are you sure?", "Do you really want to remove this fixed channel?").then(async () => {
            fixture.fixedChannels = fixture.fixedChannels.filter((f) => f.id != fixedChannel.id);
            this.showService.save();
        }, () => undefined);
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
        if (this.showService.showData.fixtures) {
            this.displayFixtures = this.showService.showData.fixtures.filter((h) => {
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

    public displayFixedChannels(): boolean {
        for (const fixture of this.showService.showData.fixtures) {
            if (fixture.fixedChannels?.length > 0) {
                return true;
            }
        }
        return false;
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
