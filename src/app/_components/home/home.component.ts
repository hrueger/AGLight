import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { remote } from "electron";
import { RecentShowsService } from "../../_services/recent-shows.service";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  public recentShows: any[] = [];
  public showRecentDropdown: boolean = false;
  constructor(private showService: ShowService,
              private router: Router,
              private recentShowsService: RecentShowsService) {}

  public ngOnInit() {
    this.recentShows = this.recentShowsService.get();
  }
  public newShow() {
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
  public recentShow(i) {
    const path = this.recentShows[i];
    this.showService.loadShow(path);
  }
  public openShow() {
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
}
