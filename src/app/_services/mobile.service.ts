import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as socketIO from "socket.io";
import { StatusbarService } from "./statusbar.service";
import { QRCodeComponent } from "../_components/qrcode/qrcode.component";

@Injectable({
    providedIn: "root",
})
export class MobileService {
    private server: socketIO.Server;
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
            this.server = socketIO.listen(4573, {
                serveClient: false,
            });
            console.log(this.server);
            this.server.on("connection", (socket) => {
                console.log("user connected");
                socket.emit("welcome", "welcome man");
            });
            this.server.on("hello", (socket) => {
                console.log("hello");
            });
        })();
    }
    public async connect(): Promise<void> {
        this.modalService.open(QRCodeComponent);
    }
}
