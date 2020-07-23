import {
    Component, Input, EventEmitter, Output,
} from "@angular/core";
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

    @Output() public onChange: EventEmitter<number | string> = new EventEmitter<number | string>();

    public changed(val: number | string): void {
        this.config.value = val;
        this.onChange.emit(val);
    }
}
