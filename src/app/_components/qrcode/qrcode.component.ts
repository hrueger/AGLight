import { Component } from "@angular/core";
import * as os from "os";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-qrcode",
    templateUrl: "./qrcode.component.html",
    styleUrls: ["./qrcode.component.css"],
})
export class QRCodeComponent {
    public interfaces: { name: string, ip: string }[] = [];
    public currentInterfaceIndex: number;
    constructor(public activeModal: NgbActiveModal) {
        const ifaces = os.networkInterfaces();

        for (const ifname of Object.keys(ifaces)) {
            ifaces[ifname].forEach((iface) => {
                if (iface.family !== "IPv4" || iface.internal !== false) {
                    return;
                }
                this.interfaces.push({ name: ifname, ip: iface.address });
            });
        }
    }
}
