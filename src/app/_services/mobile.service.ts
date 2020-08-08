import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as express from "express";
import { StatusbarService } from "./statusbar.service";
import { QRCodeComponent } from "../_components/qrcode/qrcode.component";
import { ShowService } from "./show.service";
import { WidgetGridComponent } from "../_components/widget-grid/widget-grid.component";
import { LibraryService } from "./library.service";
import { DialogService } from "./dialog.service";
import { DmxService } from "./dmx.service";

@Injectable({
    providedIn: "root",
})
export class MobileService {
    private server: express.Express;
    constructor(
        private statusbarService: StatusbarService,
        private modalService: NgbModal,
        private showService: ShowService,
        private libraryService: LibraryService,
        private dialogService: DialogService,
        private dmxService: DmxService,
    ) { }

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
            r.get("/widgets", async (req, res) => {
                if (!this.showService.showLoaded) {
                    res.status(500).send({ error: "No show loaded!" });
                }
                const wgc = new WidgetGridComponent(
                    this.showService,
                    this.libraryService,
                    this.dmxService,
                    this.modalService,
                    this.dialogService,
                );
                wgc.editMode = true;
                await wgc.ngOnInit();
                res.send({ widgets: wgc.widgets });
            });
            this.server.use(r);
            this.server.listen(4573, () => {
                // eslint-disable-next-line no-console
                console.log("listening on port 4573");
            });
        })();
    }
    public async connect(): Promise<void> {
        this.modalService.open(QRCodeComponent);
    }
}
