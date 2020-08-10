import { Injectable, NgZone } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import * as express from "express";
import { Router } from "@angular/router";
import { StatusbarService } from "./statusbar.service";
import { QRCodeComponent } from "../_components/qrcode/qrcode.component";
import { ShowService } from "./show.service";
import { WidgetGridComponent } from "../_components/widget-grid/widget-grid.component";
import { LibraryService } from "./library.service";
import { DialogService } from "./dialog.service";
import { DmxService } from "./dmx.service";
import { RecentShowsService } from "./recent-shows.service";

@Injectable({
    providedIn: "root",
})
export class MobileService {
    private server: express.Express;
    private connectedMobiles: {
        device: {
            model: string;
            deviceType: string;
            os: string;
            osVersion: string;
            sdkVersion: string;
            language: string;
            manufacturer: string;
            uuid: string;
            region: string;
        }
    }[] = [];
    private modal: NgbModalRef;
    private expressRunning = false;
    constructor(
        private statusbarService: StatusbarService,
        private modalService: NgbModal,
        private showService: ShowService,
        private libraryService: LibraryService,
        private dialogService: DialogService,
        private dmxService: DmxService,
        private recentShowsService: RecentShowsService,
        private router: Router,
        private zone: NgZone,
    ) { }

    public init(): void {
        this.updateStatusbar();
        (() => {
            if (this.expressRunning) {
                return;
            }
            this.server = express();
            this.server.use((req: any, res, next) => {
                let data = "";
                req.on("data", (chunk) => { data += chunk; });
                req.on("end", () => {
                    req.rawBody = data;
                    req.jsonBody = JSON.parse(data || "null");
                    next();
                });
            });
            const r = express.Router();
            r.post("/connect", (req: any, res) => {
                this.connectedMobiles.push({
                    device: req.jsonBody.device,
                });
                res.send({ success: true });
                this.updateStatusbar();
                if (this.modal) {
                    try {
                        this.modal.dismiss();
                        this.modal = undefined;
                    } catch {
                        //
                    }
                }
            });
            r.get("/recentShows", (req: any, res) => {
                res.send(this.recentShowsService.get());
            });
            r.post("/openRecentShow", async (req: any, res) => {
                await this.showService.loadShow(req.jsonBody.show);
                this.zone.run(() => {
                    this.router.navigate(["/fixtures"]);
                });
                res.send({ success: true });
            });
            r.post("/disconnect", (req: any, res) => {
                this.connectedMobiles = this.connectedMobiles.filter(
                    (d) => d.device.uuid !== req.jsonBody.deviceId,
                );
                res.send({ success: true });
                this.updateStatusbar();
            });
            r.get("/widgets", async (req, res) => {
                if (!this.showService.showLoaded) {
                    res.status(500).send({ error: "No show loaded!", noShowLoaded: true });
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
                this.expressRunning = true;
            });
        })();
    }
    public updateStatusbar(): void {
        if (this.connectedMobiles.length == 0) {
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
            return;
        }
        this.statusbarService.setItem({
            name: `${this.connectedMobiles.length} mobile${this.connectedMobiles.length > 1 ? "s" : ""} connected`,
            icon: "mobile-alt",
            id: "mobile",
            dropup: {
                title: "Connected mobiles",
                content: `<ul>${this.connectedMobiles.map((m) => `<li>${m.device.manufacturer[0].toUpperCase() + m.device.manufacturer.slice(1)} ${m.device.model}</li>`).join("")}</ul>`,
                actions: [
                    {
                        text: "Connect another device",
                        type: "primary",
                        service: "mobileService",
                        action: "connect",
                    },
                ],
            },
        });
    }
    public async connect(): Promise<void> {
        this.modal = this.modalService.open(QRCodeComponent);
        this.modal.result.then(() => {
            this.modal = undefined;
        }, () => undefined);
    }
}
