import { Component } from "@angular/core";
import { ElectronService } from "./_services/electron.service";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor(
    public electronService: ElectronService,
    ) {
    // console.log("AppConfig", AppConfig);

        if (electronService.isElectron) {
            // console.log(process.env);
            // console.log("Mode electron");
            // console.log("Electron ipcRenderer", electronService.ipcRenderer);
            // console.log("NodeJS childProcess", electronService.childProcess);
        } else {
            // console.log("Mode web");
        }
    }
}
