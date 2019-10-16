import { Injectable } from "@angular/core";
import { Store } from "../_utils/store";

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
  public add(path: string) {
    this.data = this.data.filter((p) => {
      return p != path;
    });
    this.data.push(path);
    this.store.set(this.data);
  }
  public get(reverse: boolean = true) {
    if (reverse) {
      return this.data.reverse();
    } else {
      return this.data;
    }
  }
}
