import { Injectable } from "@angular/core";
import { remote } from "electron";
import * as fs from "fs";
import { RecentShowsService } from "./recent-shows.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ShowService {
  private pshowLoaded: boolean = false;
  private showData: any[] = [];
  private currentShowFilePath: string;

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

  public getData(key) {
    // console.log("get data for", key, "with result", this.showData[key]);
    return this.showData[key];
  }

  public loadShow(path: string) {
    this.showData = this.parseDataFile(path);
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

  private parseDataFile(filePath: string) {
    try {
      const data = fs.readFileSync(filePath).toString();
      // @ts-ignore
      return JSON.parse(data);
    } catch (error) {
      remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {
          message: error,
          title: "Error occured",
      });
      return undefined;
    }
  }
}
