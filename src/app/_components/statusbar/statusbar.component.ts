import { Component, ChangeDetectorRef } from "@angular/core";
import { StatusbarService } from "../../_services/statusbar.service";
import { LibraryService } from "../../_services/library.service";

@Component({
  selector: "app-statusbar",
  styleUrls: ["./statusbar.component.scss"],
  templateUrl: "./statusbar.component.html",
})
export class StatusbarComponent {
  public showSettingsDropdown: boolean = false;
  public canNavigate: boolean = true;

  public menuItems: any[] = [];
  constructor(private cdr: ChangeDetectorRef, private statusbarService: StatusbarService, private libraryService: LibraryService) {}

  public ngOnInit() {
    this.statusbarService.data.subscribe((d) => {
      this.menuItems = d;
      this.cdr.detectChanges();
    });
  }

  public clicked(item) {
    if (item.showDropup) {
      item.showDropup = false;
    } else {
      item.showDropup = true;
    }
    this.cdr.detectChanges();
  }

  public btnClicked(btn) {
    this[btn.service][btn.action]();
  }
}
