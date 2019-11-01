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
    if (path && this.showService.createShow(path)) {
      console.log("Erfolg3");
    }
  }
  public recentShow(i) {
    const path = this.recentShows[i];
    console.log("before navigating");
    if (this.showService.loadShow(path)) {
      console.log("now navigating");
      console.log("Erfolg3");
    }
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
    if (path && this.showService.loadShow(path)) {
      console.log("Erfolg3");
    }
  }
}
