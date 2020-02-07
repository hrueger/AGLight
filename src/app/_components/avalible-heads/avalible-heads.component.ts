import { Component } from "@angular/core";
import * as electron from "electron";
import * as path from "path";
import * as db from "typeorm";
import { Head } from "../../_entities/head";
import { LibraryService } from "../../_services/library.service";

@Component({
  selector: "app-avalible-heads",
  styleUrls: ["./avalible-heads.component.scss"],
  templateUrl: "./avalible-heads.component.html",
})
export class AvalibleHeadsComponent {
  public heads: Head[] = [];
  public connection: db.Connection;

  constructor(private libraryService: LibraryService) {}

  public async ngOnInit() {
    let storagePath = (electron.app || electron.remote.app).getPath("userData");
    storagePath = path.join(storagePath, "fixturelibrary");
  }

  public sync() {
    this.libraryService.sync();
  }
}
