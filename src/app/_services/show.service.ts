import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as db from "typeorm";
import { Fixture } from "../_entities/fixture";
import { Widget } from "../_entities/widget";
import { FixedChannel } from "../_entities/fixed-channel";
import { RecentShowsService } from "./recent-shows.service";
import { ElectronService } from "./electron.service";
import { MultiActionItem } from "../_entities/multi-action-item";

@Injectable({
    providedIn: "root",
})
export class ShowService {
    public get showLoaded(): boolean {
        return this.pshowLoaded;
    }
    public connection: db.Connection;
    public currentShowName: string;
    private pshowLoaded = false;
    private currentShowFilePath: string;

    constructor(
        private recentShowsService: RecentShowsService,
        private router: Router,
        private electronService: ElectronService,
    ) { }

    public async loadShow(path: string): Promise<void> {
        if (this.connection) {
            await this.connection.close();
            this.connection = undefined;
        }
        this.connection = await db.createConnection({
            database: path,
            entities: [Widget, Fixture, FixedChannel, MultiActionItem],
            type: "sqlite",
        });
        await this.connection.synchronize();
        this.pshowLoaded = true;
        this.recentShowsService.add(path);
        const showname = path.split("\\").pop().replace(".aglshow", "");
        this.electronService.setTitle(showname);
        this.currentShowName = showname;
        this.currentShowFilePath = path;
        this.router.navigate(["fixtures"]);
    }

    public async createShow(path: string): Promise<void> {
        if (this.connection) {
            await this.connection.close();
            this.connection = undefined;
        }
        return this.loadShow(path);
    }
}
