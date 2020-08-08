import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as express from "express";
import { StatusbarService } from "./statusbar.service";
import { QRCodeComponent } from "../_components/qrcode/qrcode.component";

@Injectable({
    providedIn: "root",
})
export class MobileService {
    private server: express.Express;
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
        (() => {
            this.server = express();
            const r = express.Router();
            r.get("/testConnection", (req, res) => {
                res.send({ success: true });
            });
            this.server.use(r);
            this.server.listen(4573, () => {
                console.log("listening on port 4573");
            });
        })();
    }
    public async connect(): Promise<void> {
        this.modalService.open(QRCodeComponent);
    }
}
