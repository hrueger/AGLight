import { Component, OnInit } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import * as smalltalk from "smalltalk";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";

@Component({
  selector: "app-configure-show",
  styleUrls: ["./configure-show.component.scss"],
  templateUrl: "./configure-show.component.html",
})
export class ConfigureShowComponent implements OnInit {
  public options: GridsterConfig;
  public ui: GridsterItem[];
  public heads;
  constructor(private showService: ShowService) {}

  public ngOnInit() {
    this.heads = this.showService.getData("usedHeads");
    this.ui = this.showService.getData("ui") || [];
    this.options = {
      displayGrid: "always",
      draggable: {enabled: true},
      itemChangeCallback: this.onItemChanged,
      resizable: {enabled: true},
    };

    this.ui = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 },
    ];
  }

  public removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.ui.splice(this.ui.indexOf(item), 1);
  }

  public addItem() {
    let options = this.heads.map((head, i) => {
      return {
        description: `${head.number}x ${head.manufacturer} ${head.name}`,
        name: head.displayName,
        value: i,
      };
    });
    smalltalkSelect.select("Add control",
        "Choose the head from which you want to add a control.", options, {}).then((i: string) => {
          const headIdx = parseInt(i, undefined);
          options = [
            {
              description: "Add a control from a head.",
              name: "Head",
              value: "head",
            },
            {
              description: "Add a control from a effect.",
              name: "Effect",
              value: "effect",
            },
          ];
          smalltalkSelect.select("Add control",
          "Choose the general type from which you want to add a control.", options, {}).then((effectOrHead) => {
          let msg;
          if (effectOrHead == "head") {
            msg = "Choose the channel:";
            options = this.heads[headIdx].channelMode.channels.map((channel, index) => {
              return {
                description: `Type: ${channel.type}`,
                name: `${channel.number + "" +
                  (channel.length > 1 ? "-" + (channel.length + channel.number - 1) : "")}: ${channel.name}`,
                value: index,
              };
            });
          } else {
            msg = "Choose the effect:";
            options = this.heads[headIdx].effects.map((effect, index) => {
              return {
                description: `Group: ${effect.group}`,
                name: `Effect: ${effect.name}`,
                value: index,
              };
            });
          }
          if (options.length) {
            smalltalkSelect.select("Add control", msg, options, {}).then((j: string) => {
              const effectOrChannelIdx = parseInt(j, undefined);
              let effectParamIdx;
              if (effectOrHead == "effect") {
                options = this.heads[headIdx].effects[effectOrChannelIdx].params.map((param, index) => {
                  return {
                    description: `Type: ${param.type}`,
                    name: `${param.name}`,
                    value: index,
                  };
                });
                smalltalkSelect.select("Add control",
                  "Choose the effect parameter to control", options, {}).then((k: string) => {
                  effectParamIdx = parseInt(k, undefined);
                }, () => undefined);
              }

              const controlType = (effectOrHead == "head" ?
              this.heads[headIdx].channelMode.channels[effectOrChannelIdx].type :
              this.heads[headIdx].effects[effectOrChannelIdx].params[effectParamIdx].type);
              console.log(controlType);
              // ask for wanted control
            }, () => undefined);
          } else {
            smalltalk.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
          }
        }, () => undefined);

  }, () => undefined);
    this.ui.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  public onItemChanged(gridsterItem, gridsterItemComponent) {
    console.log("changes: ", gridsterItem, gridsterItemComponent);
  }
}
