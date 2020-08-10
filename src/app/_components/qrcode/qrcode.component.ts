import { Component } from "@angular/core";
import * as os from "os";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import * as sudo from "sudo-prompt";
import { remote } from "electron";
import { execSync } from "child_process";
import { DialogService } from "../../_services/dialog.service";

@Component({
    selector: "app-qrcode",
    templateUrl: "./qrcode.component.html",
    styleUrls: ["./qrcode.component.css"],
})
export class QRCodeComponent {
    public interfaces: { name: string, ip: string }[] = [];
    public currentInterfaceIndex: number;
    public readonly isWindows = process.platform === "win32";
    constructor(public activeModal: NgbActiveModal, private dialogService: DialogService) {
        const ifaces = os.networkInterfaces();

        for (const ifname of Object.keys(ifaces)) {
            ifaces[ifname].forEach((iface) => {
                if (iface.family !== "IPv4" || iface.internal !== false) {
                    return;
                }
                this.interfaces.push({ name: ifname, ip: iface.address });
            });
        }

        let ruleExists = false;
        try {
            if (execSync("netsh advfirewall firewall show rule name=AGLight").toString().trim().endsWith("OK.")) {
                ruleExists = true;
            }
        } catch {
            //
        }
        if (this.isWindows && !ruleExists) {
            remote.dialog.showMessageBox(undefined, {
                message: "The Windows Firewall rule required to be able to have mobiles connect to AGLight Desktop is missing. Do you want to add it now? Administrator rights are necessary.",
                title: "Windows Firewall Rule missing",
                defaultId: 1,
                cancelId: 0,
                buttons: ["Yes", "No"],
            }).then((val) => {
                if (val.response == 0) {
                    this.configWinFirewall();
                }
            });
        }
    }

    public async configWinFirewall(): Promise<void> {
        if (!this.isWindows) {
            return;
        }
        const electronExe = remote.app.getPath("exe");
        sudo.exec(`netsh advfirewall firewall add rule name="AGLight" dir=in action=allow program="${electronExe}" enable=yes`,
            {},
            (error) => {
                if (error) {
                    remote.dialog.showErrorBox("Error while configuring Windows Firewall", `The following error occured:\n\n${error}`);
                } else {
                    remote.dialog.showMessageBox(undefined, {
                        message: "The Windows Firewall was configured successfully.",
                        title: "Windows Firewall configured successfully",
                        buttons: ["OK"],
                    });
                }
            });
    }
}
