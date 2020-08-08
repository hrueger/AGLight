import { Component } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";
import { ConnectionService } from "../../_services/connection.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent {
    constructor(private connectionService: ConnectionService, private router: Router) { }
    public scan(): void {
        const barcodeScanner = new BarcodeScanner();
        barcodeScanner.scan({
            formats: "QR_CODE",
            message: " ",
            showFlipCameraButton: false,
            preferFrontCamera: false,
            showTorchButton: false,
            beepOnScan: false,
            fullScreen: true,
            torchOn: false,
            resultDisplayDuration: 0,
            openSettingsIfPermissionWasPreviouslyDenied: true,
            presentInRootViewController: true,
        }).then((result) => {
            if (result.text.startsWith("aglight://")) {
                this.connect(result.text.replace("aglight://", ""));
            }
        }, () => undefined);
    }

    public type(): void {
        dialogs.prompt({
            title: "Connect",
            message: "Type in the IP address",
            okButtonText: "Connect",
            defaultText: "192.168.178.100",
            inputType: dialogs.inputType.text,
        }).then((r) => this.connect(r.text));
    }

    private connect(ip: string): void {
        this.connectionService.connect(ip).then(() => {
            this.router.navigate(["/show"]);
        }, () => {
            dialogs.alert("Something went wrong.");
        });
    }
}
