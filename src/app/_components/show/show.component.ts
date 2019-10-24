import { Component, OnInit } from "@angular/core";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "app-show",
  styleUrls: ["./show.component.scss"],
  templateUrl: "./show.component.html",
})
export class ShowComponent implements OnInit {

  public heads;
  public ui: Array<{
    x: number,
    y: number,
    rows: number,
    cols: number,
    widget: string,
    effectOrHead: string,
    headIdx: number,
    effectOrChannelIdx: number,
    effectParamIdx?: number,
  }>;

  constructor(private showService: ShowService) {}

  public ngOnInit() {
    this.heads = this.showService.getData("usedHeads");
    this.ui = this.showService.getData("ui") || [];
  }
}
