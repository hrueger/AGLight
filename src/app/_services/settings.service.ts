import { Injectable } from "@angular/core";
import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";

type Value = string | number | Record<string, unknown> | [] | Array<unknown>;

@Injectable({
    providedIn: "root",
})
export class SettingsService {
    private settingsFolder = path.join((electron.app || electron.remote.app).getPath("userData"), "settings");
    private settingsPath = path.join(this.settingsFolder, "settings.json");
    private settings: {
        [key: string]: any;
    }
    constructor() {
        if (!fs.existsSync(this.settingsFolder)) {
            fs.mkdirSync(this.settingsFolder, { recursive: true });
        }
        if (!fs.existsSync(this.settingsPath)) {
            fs.writeFileSync(this.settingsPath, JSON.stringify({}));
        } else {
            this.settings = JSON.parse(fs.readFileSync(this.settingsPath).toString() || "{}") || {};
        }
    }

    public get(key: string): any {
        return this.settings[key] || null;
    }

    public set(key: string, value: Value,
        replacer?: (this: any, key: string, value: any) => any): void {
        this.settings[key] = value;
        fs.writeFileSync(this.settingsPath, JSON.stringify(this.settings, replacer, 4));
    }
}
