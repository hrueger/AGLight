import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "app-configure-effect",
  styleUrls: ["./configure-effect.component.scss"],
  templateUrl: "./configure-effect.component.html",
})
export class ConfigureEffectComponent implements OnInit {
  public heads: any;
  private headid: number;
  private effectid: number;
  constructor(private route: ActivatedRoute, private showService: ShowService) { }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.headid = +params.head;
      this.effectid = +params.effect;
      this.heads = this.showService.getData("usedHeads");

   });
  }

  public save() {
    this.showService.setData("usedHeads", this.heads);
  }
}
