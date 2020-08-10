import { Component, ChangeDetectorRef } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
import { StatusbarService } from "../../_services/statusbar.service";
import { LibraryService } from "../../_services/library.service";
import { DmxService } from "../../_services/dmx.service";
import { ConsoleService } from "../../_services/console.service";
import { MobileService } from "../../_services/mobile.service";

@Component({
    selector: "app-statusbar",
    styleUrls: ["./statusbar.component.scss"],
    templateUrl: "./statusbar.component.html",
})
export class StatusbarComponent {
  public showSettingsDropdown = false;
  public canNavigate = true;

  public menuItems: any[] = [];
  constructor(private cdr: ChangeDetectorRef,
    private statusbarService: StatusbarService,
    private libraryService: LibraryService,
    private dmxService: DmxService,
    private mobileService: MobileService,
      private consoleService: ConsoleService,
      protected sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
      this.statusbarService.data.subscribe((d) => {
          this.menuItems = d;
          this.cdr.detectChanges();
      });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public clicked(item: any): void {
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public btnClicked(btn: any): void {
      for (const i of this.menuItems) {
          i.showDropup = false;
      }
      this.cdr.detectChanges();
      this[btn.service][btn.action]();
  }

  public secure(value: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
