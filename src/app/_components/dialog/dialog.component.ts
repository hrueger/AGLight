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
    constructor(public activeModal: NgbActiveModal) {}

    @Input() public config: {
        type: "prompt" | "confirm" | "alert" | "select",
        title: string,
        message: string,
        isNumber?: boolean,
        value?: string | number,
        options?: { name: string, value: any, description: string }[],
    }

    @Output() public onChange: EventEmitter<number | string> = new EventEmitter<number | string>();

    public changed(val: number | string): void {
        this.config.value = val;
        this.onChange.emit(val);
    }

    public enterPressed(e: KeyboardEvent): void {
        if (e.key == "Enter") {
            this.activeModal.close(this.config.value);
        }
    }
}
