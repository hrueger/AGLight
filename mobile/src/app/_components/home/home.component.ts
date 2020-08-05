import { Component } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent {
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
                // connect to this ip
            }
        }, () => undefined);
    }

    public type(): void {
        //
    }
}
