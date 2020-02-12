import { Component, ChangeDetectorRef } from "@angular/core";
import { StatusbarService } from "../../_services/statusbar.service";
import { LibraryService } from "../../_services/library.service";
import { DmxService } from "../../_services/dmx.service";
import { ConsoleService } from "../../_services/console.service";

@Component({
  selector: "app-statusbar",
  styleUrls: ["./statusbar.component.scss"],
  templateUrl: "./statusbar.component.html",
})
export class StatusbarComponent {
  public showSettingsDropdown: boolean = false;
  public canNavigate: boolean = true;

  public menuItems: any[] = [];
  constructor(private cdr: ChangeDetectorRef,
    private statusbarService: StatusbarService,
    private libraryService: LibraryService,
    private dmxService: DmxService,
    private consoleService: ConsoleService,
    ) {}

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
      this.menuItems = this.menuItems.map((i) => {
        i.showDropup = false;
        return i;
      });
      item.showDropup = true;
    }
    this.cdr.detectChanges();
  }

  public btnClicked(btn) {
    this[btn.service][btn.action]();
  }
}
