import { Component } from "@angular/core";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "app-navbar",
  styleUrls: ["./navbar.component.scss"],
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  public showLoaded: boolean = false;
  public showSettingsDropdown = false;
  public menuItems: any[] = [
    {
      name: "Heads",
      url: "heads",
    },
    {
      name: "Effects",
      url: "effects",
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
  constructor(private showService: ShowService) {}

  public ngAfterContentChecked() {
    this.showLoaded = this.showService.showLoaded;
  }
  public toggleSettingsDropdown(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showSettingsDropdown = !this.showSettingsDropdown;
  }
}
