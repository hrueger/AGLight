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
        onChange?: (val: string | number) => void,
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
            if (typeof onChange == "function") {
                (modal.componentInstance as DialogComponent)
                    .onChange.subscribe((val: string | number) => onChange(val));
            }
        });
    }

    public confirm(title: string, message: string): Promise<void> {
        const modal = this.modalService.open(DialogComponent);
        (modal.componentInstance as DialogComponent).config = {
            type: "confirm",
            title,
            message,
        };
        return modal.result;
    }

    public select(
        title: string,
        message: string,
        options: { name: string, value: any, description: string }[],
    ): Promise<any> {
        const modal = this.modalService.open(DialogComponent, { size: "xl" });
        (modal.componentInstance as DialogComponent).config = {
            type: "select",
            title,
            message,
            options,
        };
        return modal.result;
    }

    public alert(title: string, message: string): void {
        const modal = this.modalService.open(DialogComponent);
        (modal.componentInstance as DialogComponent).config = {
            type: "alert",
            title,
            message,
        };
    }
}
