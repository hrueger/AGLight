import { Injectable } from "@angular/core";
import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";

class Store {
    private path: string;
    private data: any[];
    constructor(opts: {
      configName: string,
      defaults: any,
    }) {
        const userDataPath = (electron.app || electron.remote.app).getPath("userData");
        this.path = path.join(userDataPath, opts.configName + ".json");
        this.data = parseDataFile(this.path, opts.defaults);
    }

    public get() {
        return this.data;
    }

    public set(val) {
        this.data = val;
        const data = JSON.stringify(this.data);
        fs.writeFileSync(this.path, data);
    }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath).toString());
  } catch (error) {
    return defaults;
  }
}

// tslint:disable-next-line: max-classes-per-file
@Injectable({
  providedIn: "root",
})
export class RecentShowsService {
  private store: Store;
  private data: any;
  constructor() {
    this.store = new Store({
      configName: "recentShows",
      defaults: {
        shows: [],
      },
    });
    this.data = this.store.get();
    if (!this.data) {
      this.data = [];
    }
  }
  public add(pth: string) {
    this.data = this.data.filter((p) => {
      return p != pth;
    });
    this.data.push(pth);
    this.store.set(this.data);
  }
  public get(reverse: boolean = true, doExistingCheck = true) {
    if (doExistingCheck) {
      this.data = this.data.filter((p) => {
        return (fs.existsSync(p) ? true : false);
      });
    }
    if (reverse) {
      return this.data.reverse();
    } else {
      return this.data;
    }
  }
}
