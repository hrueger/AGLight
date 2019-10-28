import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { remote } from "electron";
import * as fs from "fs";
import * as db from "typeorm";
import { RecentShowsService } from "./recent-shows.service";

@Injectable({
  providedIn: "root",
})
export class ShowService {
  private pshowLoaded: boolean = false;
  private showData: any[] = [];
  private currentShowFilePath: string;
  private connection: db.Connection;

  constructor(private recentShowsService: RecentShowsService, private router: Router) {}

  public get showLoaded() {
    return this.pshowLoaded;
  }

  public setData(key, val) {
    if (!this.pshowLoaded) {
      remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {
        message: "No show loaded! Please go to dashboard, open a show and try again.",
        title: "Error occured",
      });
      this.router.navigate(["home"]);
    }
    this.showData[key] = val;
    // console.log("written:", JSON.stringify(this.showData));
    // console.log("to", this.currentShowFilePath);
    fs.writeFileSync(this.currentShowFilePath, JSON.stringify(this.showData));
  }

  public async loadShow(path: string) {
    this.connection = await db.createConnection({
      database: path,
      entities: ["../_entities/*.ts"],
      type: "sqlite",
    });
    // this.showData = this.parseDataFile(path);
    return;
    // console.log("show loaded with loaded data", this.showData)
    if (this.showData) {
      this.pshowLoaded = true;
      this.recentShowsService.add(path);
      this.currentShowFilePath = path;
      return true;
    } else {
      return false;
    }
  }

  public createShow(path: string) {
    fs.writeFileSync(path, JSON.stringify({
      usedHeads: [],
    }));
    return this.loadShow(path);
  }

  public getData(a) {
    return a;
  }
}
