import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as smalltalk from "smalltalk";
import { Channel } from "../../_entities/channel";
import { Fixture } from "../../_entities/fixture";
import { Widget } from "../../_entities/widget";
import { controls } from "../../_ressources/controls";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";

@Component({
  selector: "app-configure-show",
  styleUrls: ["./configure-show.component.scss"],
  templateUrl: "./configure-show.component.html",
})
export class ConfigureShowComponent implements OnInit {
  public fixtures: Fixture[] = [];
  public widgets: Widget[] = [];

  constructor(private showService: ShowService) {}

  public async ngOnInit() {
    await this.loadAll();
  }

  public removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.widgets.splice(this.widgets.indexOf(item), 1);
  }

  public addItem() {
    const opts1 = this.fixtures.map((fixture) => {
      return {
        description: `${fixture.number}x ${fixture.head.manufacturer} ${fixture.head.name}`,
        name: fixture.displayName,
        value: fixture,
      };
    });
    smalltalkSelect.select("Add control",
          // @ts-ignore
        "Choose the head from which you want to add a control.", opts1, {}).then((fixture: Fixture) => {
          const opts2 = [
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
          "Choose the general type from which you want to add a control.", opts2, {}).then((effectOrHead: string) => {
            let msg;
            let opts3;
            if (effectOrHead == "head") {
              msg = "Choose the channel:";
              opts3 = fixture.channels.map((channel) => {
                return {
                  description: `Type: ${channel.type}`,
                  name: `${channel.startAddress + "" +
                    (channel.length > 1 ? "-" + (channel.length + channel.startAddress - 1) : "")}: ${channel.name}`,
                  value: channel,
                };
              });
            } else {
              msg = "Choose the effect:";
              opts3 = []; /*fixture.effects.map((effect, index) => {
                return {
                  description: `Group: ${effect.group}`,
                  name: `Effect: ${effect.name}`,
                  value: index,
                };
              });*/
            }
            if (opts3.length) {
              smalltalkSelect.select("Add control", msg, opts3, {}).then(async (channel: Channel) => {
                // let effectParamIdx;
                if (effectOrHead == "effect") {
                  /*opts = this.fixtures[headIdx].effects[effectOrChannelIdx].params.map((param, index) => {
                    return {
                      description: `Type: ${param.type}`,
                      name: `${param.name}`,
                      value: index,
                    };
                  });
                  // @ts-ignore
                  effectParamIdx = parseInt(await (smalltalkSelect.select("Add control",
                    "Choose the effect parameter to control", opts, {})), undefined);*/
                }

                const controlType = /*(effectOrHead == "head" ?*/
                channel.type/* :
                this.fixtures[headIdx].effects[effectOrChannelIdx].params[effectParamIdx].type)*/;

                const opts4 = controls.filter((control) => {
                  return control.type == controlType;
                })[0].usefulWidgets.map((widget) => {
                  return {
                    description: `Add a ${widget}.`,
                    name: widget,
                    value: widget,
                  };
                });
                if (opts4.length) {
                  smalltalkSelect.select("Add control",
                    "Choose the control you want to add:", opts4, {}).then(async (control: string) => {
                      const w = new Widget(0, 0, 1, 1, control, effectOrHead, channel);
                      this.showService.connection.manager.save(w);
                      this.widgets.push(w);
                      this.loadAll();
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
    this.showService.connection.getRepository(Widget).save(this.widgets);
  }

  private async loadAll() {
    this.widgets = await this.showService.connection.getRepository(Widget).find();
    this.fixtures = await this.showService.connection.getRepository(Fixture).find();
  }

  private alertNothingToDisplay() {
    smalltalk.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
  }
}
