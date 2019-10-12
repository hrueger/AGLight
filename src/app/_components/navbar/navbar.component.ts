import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  styleUrls: ["./navbar.component.scss"],
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  public showSettingsDropdown = false;
  public menuItems: any[] = [
    {
      name: "Heads",
      url: "heads",
    },
    {
      name: "Groups",
      url: "groups",
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
  public toggleSettingsDropdown(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showSettingsDropdown = !this.showSettingsDropdown;
  }
}
