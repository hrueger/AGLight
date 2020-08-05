import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StatusbarService } from "./statusbar.service";
import { QRCodeComponent } from "../_components/qrcode/qrcode.component";

@Injectable({
    providedIn: "root",
})
export class MobileService {
    constructor(private statusbarService: StatusbarService, private modalService: NgbModal) { }

    public init(): void {
        this.statusbarService.setItem({
            name: "No mobile connected",
            icon: "mobile-alt",
            id: "mobile",
            dropup: {
                title: "Mobiles",
                content: "No mobile connected.",
                actions: [
                    {
                        text: "Connect",
                        type: "primary",
                        service: "mobileService",
                        action: "connect",
                    },
                ],
            },
        });
    }
    public async connect(): Promise<void> {
        this.modalService.open(QRCodeComponent);
    }
}
