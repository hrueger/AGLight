import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import * as smalltalk from "smalltalk";
import { colors } from "../../_ressources/colors";
import { controls } from "../../_ressources/controls";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";

@Component({
  selector: "app-configure-show",
  styleUrls: ["./configure-show.component.scss"],
  templateUrl: "./configure-show.component.html",
})
export class ConfigureShowComponent implements OnInit {
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
          // @ts-ignore
        "Choose the head from which you want to add a control.", options, {}).then((i: string) => {
          const headIdx = parseInt(i, undefined);
          options = [
            {
              description: "Add a control from a channel.",
              name: "Channel",
              value: "head",
            },
            {
              description: "Add a control from a effect.",
              name: "Effect",
              value: "effect",
            },
          ];
          smalltalkSelect.select("Add control",
          "Choose the general type from which you want to add a control.", options, {}).then((effectOrHead: string) => {
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
            smalltalkSelect.select("Add control", msg, options, {}).then(async (j: string) => {
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
                // @ts-ignore
                effectParamIdx = parseInt(await (smalltalkSelect.select("Add control",
                  "Choose the effect parameter to control", options, {})), undefined);
              }

              const controlType = (effectOrHead == "head" ?
              this.heads[headIdx].channelMode.channels[effectOrChannelIdx].type :
              this.heads[headIdx].effects[effectOrChannelIdx].params[effectParamIdx].type);

              options = controls.filter((control) => {
                return control.type == controlType;
              })[0].usefulWidgets.map((widget) => {
                return {
                  description: `Add a ${widget}.`,
                  name: widget,
                  value: widget,
                };
              });
              if (options.length) {
                smalltalkSelect.select("Add control",
                  "Choose the control you want to add:", options, {}).then((widget: string) => {
                  this.ui.push({
                    cols: 1,
                    effectOrChannelIdx,
                    effectOrHead,
                    effectParamIdx,
                    headIdx,
                    rows: 1,
                    widget,
                    x: 0,
                    y: 0,
                  });
                  this.save();
                }, () => undefined);
              } else {
                this.alertNothingToDisplay();
              }
            }, () => undefined);
          } else {
            this.alertNothingToDisplay();
          }
        }, () => undefined);

   }, () => undefined);
  }

  public save() {
    this.showService.setData("ui", this.ui);
  }

  private alertNothingToDisplay() {
    smalltalk.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
  }
}
