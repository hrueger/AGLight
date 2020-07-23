import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { remote } from "electron";
import { ShowService } from "../../_services/show.service";
import { DialogService } from "../../_services/dialog.service";

@Component({
    selector: "app-navbar",
    styleUrls: ["./navbar.component.scss"],
    templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
    public isMaximized = true;
    public showLoaded = false;
    public showSettingsDropdown = false;
    public canNavigate = true;

    public menuItems: any[] = [
        {
            name: "Fixtures",
            url: "fixtures",
        },
        {
            seperator: true,
        },
        {
            name: "Config",
            url: "configureShow",
        },
        {
            seperator: true,
        },
        {
            name: "Show",
            url: "show",
        },
    ];
    private win: any;
    constructor(
        public showService: ShowService,
        private router: Router,
        private dialogService: DialogService,
    ) { }

    public ngOnInit(): void {
        this.win = remote.getCurrentWindow();
        this.router.events.subscribe((event: RouterEvent) => {
            if (event.url && event.url.endsWith("viewer")) {
                this.canNavigate = false;
            }
        });
    }
    public ngAfterContentChecked(): void {
        this.showLoaded = this.showService.showLoaded;
    }
    public toggleSettingsDropdown(e: Event): void {
        e.stopPropagation();
        e.preventDefault();
        this.showSettingsDropdown = !this.showSettingsDropdown;
    }

    public minWindow(): void {
        this.win.minimize();
    }
    public maxWindow(): void {
        if (this.win.isMaximized()) {
            this.win.unmaximize();
            this.isMaximized = false;
        } else {
            this.win.maximize();
            this.isMaximized = true;
        }
    }
    public async closeWindow(): Promise<void> {
        this.dialogService.confirm("Close AGLight", "Do you really want to close the application?").then(() => {
            this.win.close();
            remote.app.quit();
        }, () => undefined);
    }
}
