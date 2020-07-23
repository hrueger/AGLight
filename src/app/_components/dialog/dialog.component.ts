import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
    constructor(public activeModal: NgbActiveModal) { }

    @Input() public config: {
        type: "prompt" | "confirm" | "select",
        title: string,
        message: string,
        isNumber?: boolean,
        value?: string | number,
    }
}
