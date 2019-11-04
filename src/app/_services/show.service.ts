import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { remote } from "electron";
import * as fs from "fs";
import * as db from "typeorm";
import { Channel } from "../_entities/channel";
import { ChannelMode } from "../_entities/channelMode";
import { Effect } from "../_entities/effect";
import { Fixture } from "../_entities/fixture";
import { Head } from "../_entities/head";
import { Step } from "../_entities/step";
import { Widget } from "../_entities/widget";
import { RecentShowsService } from "./recent-shows.service";

@Injectable({
  providedIn: "root",
})
export class ShowService {

  public get showLoaded() {
    return this.pshowLoaded;
  }
  public connection: db.Connection;
  private pshowLoaded: boolean = false;
  private currentShowFilePath: string;

  constructor(private recentShowsService: RecentShowsService, private router: Router) {}

  public async loadShow(path: string) {
    if (this.connection) {
      this.connection.close();
      this.connection = undefined;
    }
    this.connection = await db.createConnection({
      database: path,
      entities: [Head, Widget, Channel, ChannelMode, Step, Fixture],
      type: "sqlite",
    });
    await this.connection.synchronize();
    this.pshowLoaded = true;
    this.recentShowsService.add(path);
    this.currentShowFilePath = path;
    this.router.navigate(["fixtures"]);
  }

  public createShow(path: string) {
    if (this.connection) {
      this.connection.close();
      this.connection = undefined;
    }
    return this.loadShow(path);
  }
}
