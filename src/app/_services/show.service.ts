import { Injectable } from "@angular/core";
import { remote } from "electron";
import * as fs from "fs";
import { RecentShowsService } from "./recent-shows.service";

@Injectable({
  providedIn: "root",
})
export class ShowService {
  private pshowLoaded: boolean = false;
  private showData: any[] = [];

  constructor(private recentShowsService: RecentShowsService) {}

  public get showLoaded() {
    return this.pshowLoaded;
  }

  public loadShow(path: string) {
    this.showData = this.parseDataFile(path);
    if (this.showData) {
      this.pshowLoaded = true;
      this.recentShowsService.add(path);
      console.info("loaded show!");
      return true;
    } else {
      return false;
    }
  }

  public createShow(path: string) {
    fs.writeFileSync(path, JSON.stringify({}));
    return this.loadShow(path);
  }

  private parseDataFile(filePath: string) {
    try {
      // @ts-ignore
      return JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
      remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {
          message: error,
          title: "Error occured:",
      });
      return undefined;
    }
  }
}
