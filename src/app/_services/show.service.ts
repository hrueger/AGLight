import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ipcRenderer } from "electron";
import * as fs from "fs";
import { RecentShowsService } from "./recent-shows.service";
import { ElectronService } from "./electron.service";
import { ShowFile } from "../_entities/show-file";

@Injectable({
    providedIn: "root",
})
export class ShowService {
    public get showLoaded(): boolean {
        return this.pshowLoaded;
    }
    public currentShowName: string;
    private pshowLoaded = false;
    private currentShowFilePath: string;
    public showData: ShowFile;

    constructor(
        private recentShowsService: RecentShowsService,
        private router: Router,
        private electronService: ElectronService,
    ) {
        ipcRenderer.on("openFile", (_, file: string) => {
            if (file !== "./") {
                this.loadShow(file);
            }
        });
    }

    public async loadShow(path: string): Promise<void> {
        this.currentShowFilePath = path;
        this.showData = JSON.parse(fs.readFileSync(path).toString());
        this.pshowLoaded = true;
        this.recentShowsService.add(path);
        const showname = path.split("\\").pop().replace(".aglshow", "");
        this.electronService.setTitle(showname);
        this.currentShowName = showname;
        this.currentShowFilePath = path;
        this.router.navigate(["fixtures"]);
    }

    public async createShow(path: string): Promise<void> {
        fs.writeFileSync(path, JSON.stringify(new ShowFile()));
        return this.loadShow(path);
    }
}
