import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { shell } from "electron";
import { Fixture } from "../../_entities/fixture";
import { Product } from "../../_entities/product";
import { ShowService } from "../../_services/show.service";
import { LibraryService } from "../../_services/library.service";
import { DialogService } from "../../_services/dialog.service";
import { getChannelCount } from "../../_utils/channel-count";

@Component({
    selector: "app-fixtures",
    styleUrls: ["./fixtures.component.scss"],
    templateUrl: "./fixtures.component.html",
})
export class FixturesComponent implements OnInit {
    public searchValue = "";
    public displayFixtures: Product[];
    public allFixtures: Product[];
    public currentFixture: Product;
    public errorMessage = "";
    public getChannelCount = getChannelCount;

    constructor(
        private showService: ShowService,
        private modalService: NgbModal,
        private libraryService: LibraryService,
        private dialogService: DialogService,
    ) { }

    public ngOnInit(): void {
        this.allFixtures = this.getFixtures();
        this.displayFixtures = this.allFixtures;
        this.sortDisplayFixtures();
        for (const fixture of this.showService.showData.fixtures) {
            fixture.product = this.libraryService.getProduct(fixture.name);
        }
        /* const that = this;
      window.setTimeout(() => {
        that.ngOnInit();
        console.log("Updated!");
      }, 1500) */
        this.validate();
    }

    public getFixtures(): any[] {
        return this.libraryService.getProducts();
    }

    public search(e: string): void {
        if (this.allFixtures) {
            this.displayFixtures = this.allFixtures.filter((h) => {
                const toSearch = `${h && h.name ? h.name.toLowerCase() : ""} ${
                    h && h.manufacturer && h.manufacturer.name ? h.manufacturer.name.toLowerCase() : ""}`;
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

    public openBrowser(event: Event, url: string): void {
        event.preventDefault();
        shell.openExternal(url);
    }

    public addFixture(fixture: Fixture, content: unknown): void {
        this.currentFixture = fixture as any;
        this.modalService.open(content, { size: "xl" }).result.then((result) => {
            this.dialogService.prompt("Number of fixtures", "Type in the number of fixtures you want to add:", 2, true).then(async (n: number) => {
                const f = new Fixture("Change this", n, 1, result.fixture.name, result.mode.name);
                f.product = this.libraryService.getProduct(result.fixture.name);
                this.showService.showData.fixtures.push(f);
                this.sortUsedFixtures();
                this.save();
            }, () => undefined);
        }, () => {
            //
        });
    }

    public change(field: string, i: number): void {
        let val;
        let title;
        let message;
        let selectBox = false;
        let options = [];
        switch (field) {
        case "number":
            val = this.showService.showData.fixtures[i].number;
            title = "Change number of fixtures";
            message = "Enter the number of the fixtures:";
            break;
        case "startAddress":
            val = this.showService.showData.fixtures[i].startAddress;
            title = "Change start address";
            message = "Enter the fixture's start address:";
            break;
        case "displayName":
            val = this.showService.showData.fixtures[i].displayName;
            title = "Change display name";
            message = "Enter the fixture's display name:";
            break;
        case "channelMode":
            val = null;
            title = "Choose channel mode";
            message = "Choose the channel mode of that fixture:";
            selectBox = true;
            options = this.getSelectOptionsFromFixture(this.showService.showData.fixtures[i]);
            break;
        default:
            break;
        }
        if (!selectBox) {
            this.dialogService.prompt(title, message, val, field !== "displayName").then(async (res: any) => {
                if (res) {
                    switch (field) {
                    case "number":
                        this.showService.showData.fixtures[i].number = parseInt(res, undefined);
                        break;
                    case "displayName":
                        this.showService.showData.fixtures[i].displayName = res;
                        break;
                    case "startAddress":
                        this.showService.showData.fixtures[i]
                            .startAddress = parseInt(res, undefined);
                        this.sortUsedFixtures();
                        break;
                    default:
                        break;
                    }
                    this.save();
                }
            }, () => undefined);
        } else {
            this.dialogService.select(title, message, options).then((res: any) => {
                if (res) {
                    this.showService.showData.fixtures[i].channelMode = res.name;
                }
                this.save();
            }, () => undefined);
        }
    }

    public deleteFixture(i: number): void {
        this.dialogService.confirm("Delete fixture(s)",
            "Are you sure that this fixture(s) should be deleted? You won't be able to restore it.").then(async () => {
            this.showService.showData.fixtures.splice(i, 1);
            this.save();
        }, () => undefined);
    }

    public save(): void {
        if (this.validate()) {
            this.showService.save();
        }
    }

    private sortUsedFixtures() {
        this.showService.showData.fixtures.sort((a, b) => {
            if (a.startAddress > b.startAddress) {
                return 1;
            }
            if (a.startAddress < b.startAddress) {
                return -1;
            }
            return 0;
        });
    }

    private getSelectOptionsFromFixture(fixture: Fixture) {
        return fixture.product.modes.map((channelMode) => ({
            description: `This mode will use ${channelMode.channels.length == 1 ? "1 Channel" : `${channelMode.channels.length} Channels`}.`,
            name: `Use "${channelMode.name}" Mode
          (${channelMode.channels.length == 1 ? "1 Channel" : `${channelMode.channels.length} Channels`})`,
            value: channelMode,
        }));
    }

    private sortDisplayFixtures() {
        this.displayFixtures.sort((a, b) => {
            if (a && b && a.name && b.name
                && a.manufacturer && b.manufacturer && a.manufacturer.name && b.manufacturer.name) {
                if ([a.manufacturer.name, b.manufacturer.name].sort()[0] == b.manufacturer.name) {
                    return 1;
                }
                if ([a.manufacturer.name, b.manufacturer.name].sort()[0] == a.manufacturer.name) {
                    return -1;
                }
                if ([a.name, b.name].sort()[0] == a.name) {
                    return 1;
                }
                if ([a.name, b.name].sort()[0] == b.name) {
                    return -1;
                }
            }
            return 0;
        });
    }

    private validate() {
        for (const fixture of this.showService.showData.fixtures as any) {
            fixture.endAddress = fixture.startAddress - 1
                + (fixture.number * getChannelCount(fixture));
        }
        for (const a of this.showService.showData.fixtures as any) {
            for (const b of this.showService.showData.fixtures as any) {
                if (
                    (
                        (
                            (a.startAddress > b.startAddress && a.startAddress < b.endAddress)
                            || (a.endAddress > b.startAddress && a.endAddress < b.endAddress)
                        )
                        || a.startAddress == b.endAddress
                        || a.endAddress == b.startAddress
                        || a.startAddress == b.startAddress
                        || a.endAddress == b.endAddress
                    ) && (a.name != b.name || a.displayName != b.displayName)) {
                    this.errorMessage = `Address overlapping of "${a.displayName}" and "${b.displayName}"!`;
                    return false;
                }
            }
        }
        this.errorMessage = "";
        return true;
    }
}
