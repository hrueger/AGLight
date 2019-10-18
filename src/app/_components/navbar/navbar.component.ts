import { Component } from "@angular/core";
import { remote } from "electron";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "app-navbar",
  styleUrls: ["./navbar.component.scss"],
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  public isMaximized: boolean = true;
  public showLoaded: boolean = false;
  public showSettingsDropdown = false;

  public menuItems: any[] = [
    {
      name: "Heads",
      url: "heads",
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
  constructor(private showService: ShowService) {}

  public ngOnInit() {
    this.win =  remote.getCurrentWindow();
  }
  public ngAfterContentChecked() {
    this.showLoaded = this.showService.showLoaded;
  }
  public toggleSettingsDropdown(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showSettingsDropdown = !this.showSettingsDropdown;
  }

  public minWindow() {
    this.win.minimize();
  }
  public maxWindow() {
    if (this.win.isMaximized()) {
      this.win.unmaximize();
      this.isMaximized = false;
    } else {
      this.win.maximize();
      this.isMaximized = true;
    }
  }
  public closeWindow() {
    this.win.close();
  }
}
