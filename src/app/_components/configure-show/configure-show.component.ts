import { Component, ViewChild } from "@angular/core";
import { LibraryService } from "../../_services/library.service";
import { Fixture } from "../../_entities/fixture";
import { ShowService } from "../../_services/show.service";
import { WidgetGridComponent } from "../widget-grid/widget-grid.component";

@Component({
    selector: "app-configure-show",
    styleUrls: ["./configure-show.component.scss"],
    templateUrl: "./configure-show.component.html",
})
export class ConfigureShowComponent {
    public allFixtures: Fixture[] = [];
    public displayFixtures: Fixture[] = [];
    public searchValue = "";
    @ViewChild("widgetGrid") public widgetGrid: WidgetGridComponent;
    constructor(private libraryService: LibraryService, private showService: ShowService) { }

    public async ngOnInit(): Promise<void> {
        const products = this.libraryService.getProducts();
        this.allFixtures = await this.showService.connection.getRepository(Fixture).find();
        for (const fixture of this.allFixtures) {
            fixture.product = products.filter((p) => p.name == fixture.name)[0];
        }
        this.displayFixtures = this.allFixtures;
    }

    public search(e) {
        if (this.allFixtures) {
            this.displayFixtures = this.allFixtures.filter((h) => {
                const toSearch = (h && h.displayName ? h.displayName.toLowerCase() : "") + " " +
                    (h && h.product && h.product.name ? h.product.name.toLowerCase() : "");
                let notFound: boolean = false;
                for (const q of e.split(" ")) {
                    if (toSearch.indexOf(q.toLowerCase()) == -1) {
                        notFound = true;
                    }
                }
                return (notFound ? false : true);
            });
            this.sortDisplayFixtures();
        }
    }

    private sortDisplayFixtures() {
        this.displayFixtures.sort((a, b) => {
            if (a && b && a.displayName && b.displayName && a.product && b.product && a.product.name && b.product.name) {
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
                return 0;
            }
        });
    }
}
