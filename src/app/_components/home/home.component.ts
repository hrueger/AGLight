import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ipcRenderer, remote, shell } from "electron";
import { RecentShowsService } from "../../_services/recent-shows.service";
import { ShowService } from "../../_services/show.service";
import { LibraryService } from "../../_services/library.service";
import { DmxService } from "../../_services/dmx.service";
import { ConsoleService } from "../../_services/console.service";

@Component({
    selector: "app-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html",
})
export class HomeComponent {
    public recentShows: any[] = [];
    public showRecentDropdown = false;
    private readonly waitTime: number = 3000;
    constructor(private showService: ShowService,
        private router: Router,
        private recentShowsService: RecentShowsService,
        private libraryService: LibraryService,
        private dmxService: DmxService,
        private consoleService: ConsoleService) { }

    public async ngOnInit(): Promise<void> {
        setTimeout(() => {
            ipcRenderer.send("ready");
        }, this.waitTime);
        this.recentShows = this.recentShowsService.get();
        this.dmxService.init();
        this.consoleService.init();
        await this.libraryService.loadIntoCache();
    }
    public newShow(): void {
        const path = remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), {
            buttonLabel: "Create",
            filters: [
                {
                    extensions: ["aglshow"],
                    name: "AGLight show file",
                },
            ],
            message: "Create show file",
            title: "Create show file",
        });
        this.showService.createShow(path);
    }
    public recentShow(i: number): void {
        const path = this.recentShows[i];
        this.showService.loadShow(path);
    }
    public openShow(): void {
        const path = remote.dialog.showOpenDialogSync(remote.getCurrentWindow(), {
            buttonLabel: "Open",
            filters: [
                {
                    extensions: ["aglshow"],
                    name: "AGLight show file",
                },
            ],
            message: "Open show file",
            properties: ["openFile"],
            title: "Open show file",
        })[0];
        this.showService.loadShow(path);
    }

    public openExternal(url: string): void {
        shell.openExternal(url);
    }
}
