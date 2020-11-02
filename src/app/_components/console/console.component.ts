import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GridsterConfig } from "angular-gridster2";
import { TileConfig } from "../../_services/console.service";

@Component({
    selector: "app-console",
    templateUrl: "./console.component.html",
    styleUrls: ["./console.component.scss"],
})
export class ConsoleComponent {
    public tiles: TileConfig[] = [];
    public options: GridsterConfig = {
        displayGrid: "none",
        draggable: { enabled: true },
        itemChangeCallback: () => {
            // that.showService.save();
        },
        mobileBreakpoint: 0,
        resizable: { enabled: false },
        gridType: "fixed",
        fixedColWidth: 80,
        fixedRowHeight: 80,
    };
    constructor(public activeModal: NgbActiveModal) { }
}
