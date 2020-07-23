import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DialogComponent } from "../_components/dialog/dialog.component";

@Injectable({
    providedIn: "root",
})
export class DialogService {
    constructor(private modalService: NgbModal) { }

    public prompt(
        title: string,
        message: string,
        value: string | number,
        isNumber = false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange?: (val: string) => void,
    ): Promise<string | number> {
        return new Promise((resolve, reject) => {
            const modal = this.modalService.open(DialogComponent);
            (modal.componentInstance as DialogComponent).config = {
                type: "prompt",
                title,
                message,
                value,
                isNumber,
            };
            modal.result.then((v) => resolve(v), (e) => reject(e));
        });
    }
}
