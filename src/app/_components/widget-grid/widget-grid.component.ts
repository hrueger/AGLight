import { Component, Input, OnInit } from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import * as smalltalk from "smalltalk";
import { Channel } from "../../_entities/channel";
import { Fixture } from "../../_entities/fixture";
import { Step } from "../../_entities/step";
import { Widget } from "../../_entities/widget";
import { colors } from "../../_ressources/colors";
import { controls } from "../../_ressources/controls";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";
const DMX = require("dmx");

@Component({
  selector: "widget-grid",
  styleUrls: ["./widget-grid.component.scss"],
  templateUrl: "./widget-grid.component.html",
})
export class WidgetGridComponent implements OnInit {

  public options: GridsterConfig;
  public fixtures = [];
  public widgets: Widget[] = [];
  @Input() public editMode: boolean = false;
  private dmx: any;
  private universe: any;

  private readonly shadeColorFactor = 35;

  constructor(private showService: ShowService) {}

  public async ngOnInit() {
    const that = this;
    this.options = {
      displayGrid: "onDrag&Resize",
      draggable: {enabled: this.editMode},
      itemChangeCallback: () => {
        that.save();
      },
      mobileBreakpoint: 0,
      resizable: {enabled: this.editMode},
    };
    this.fixtures = await this.showService.connection.getRepository(Fixture).find();
    this.widgets = await this.showService.connection.getRepository(Widget)
    .createQueryBuilder("widget")
    .leftJoinAndSelect("widget.channel", "channel")
    .leftJoinAndSelect("channel.fixture", "fixture")
    .leftJoinAndSelect("channel.steps", "step")
    .getMany();
    if (!this.editMode) {
      this.setupDmx();
    }
  }

  public async removeItem($event, item: Widget) {
    $event.preventDefault();
    $event.stopPropagation();
    await this.showService.connection.getRepository(Widget).remove(item);
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

  public action(type: string, widget: Widget, event: Event | number, idx?: number) {
    if (this.editMode) {
      return;
    }
    let chl: number;
    let val;
    switch (type) {
      case "slider":
        chl = widget.channel.startAddress + widget.channel.fixture.startAddress - 1;
        val = event;
        this.universe.update({[chl]: val});
        break;
      case "button":
        break;
      case "buttongrid":
        switch (widget.channel.name) {
          case "Color Wheel":
            chl = widget.channel.startAddress + widget.channel.fixture.startAddress - 1;
            val = widget.channel.steps[idx].start;
            this.universe.update({[chl]: val});
            break;
          default:
            // tslint:disable-next-line: no-console
            console.log(widget.channel.name);
            break;
        }
        break;
      default:
        break;
    }
  }

  public save() {
    this.showService.connection.getRepository(Widget).save(this.widgets);
  }

  public getButtongridRowArray(widget: Widget) {
    const nodes: Step[] = widget.channel.steps;
    const rows = Math.floor(Math.sqrt(nodes.length));
    return Array.from(Array(rows).keys());
  }

  public getButtongridColArray(widget: Widget, i: number) {
    const nodes: Step[] = widget.channel.steps;
    const rows = Math.floor(Math.sqrt(nodes.length));
    const cols = nodes.length / rows;
    return Array.from(Array(cols).keys()).map((n) => n + (i * rows) + i);
  }

  public ngOnDestroy() {
    if (this.universe) {
      // tslint:disable-next-line: no-console
      console.log(this.universe.server.close());
      this.universe.close(() => undefined);
    }
  }

  public tryGetBackgroundColor(name: string) {
    name = name.toLowerCase().replace("-", " ");
    const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
    if (c) { // color found in list
      return {
        backgroundColor: c.hex,
        color: this.isColorLight(c.hex) ? "#000" : "#fff",
      };
    } else if (name.startsWith("rainbow")) { // check for special words
      return {
        background: "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",
        textShadow: "2px 2px 2px #000",
      };
    } else {
      const parts = name.split("+");
      const clrs: string[] = [];
      parts.forEach((part) => {
        part = part.replace(/[^a-zA-Z0-9]/g, "");
        const col = colors.filter((color) =>
        color.name.toLowerCase() == part || color.name.toLowerCase().replace(" ", "") == part.replace(" ", ""))[0];
        if (col) { // color found in list
          clrs.push(col.hex);
        } else {
          const n = this.replaceDarkOrLight(part);
          if (n) {
            clrs.push(n.backgroundColor);
          } else {
            clrs.push("#757575");
          }
        }
      });
      if (clrs.length == 1) {
        return {
          backgroundColor: clrs[0],
          color: this.isColorLight(clrs[0]) ? "#000" : "#fff",
        };
      } else {
        return {
          background: `linear-gradient(to right, ${clrs.join(", ")})`,
          textShadow: "2px 2px 2px #000",
        };
      }
    }
  }

  private replaceDarkOrLight(name) {
    if (name.startsWith("dark")) {
      name = name.replace("dark", "").replace(/[^a-zA-Z0-9]/g, "");
      const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
      if (c) {
        const hex = this.shadeColor(c.hex, -this.shadeColorFactor);
        return {
          backgroundColor: hex,
          color: this.isColorLight(c.hex) ? "#000" : "#fff",
        };
      }
    } else if (name.startsWith("light")) {
      name = name.replace("light", "").replace(/[^a-zA-Z0-9]/g, "");
      const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
      if (c) {
        const hex = this.shadeColor(c.hex, this.shadeColorFactor);
        return {
          backgroundColor: hex,
          color: this.isColorLight(c.hex) ? "#000" : "#fff",
        };
      }
    }
  }
  private isColorLight(color) {
    // tslint:disable-next-line: one-variable-per-declaration
    let r, g, b, hsp;
    if (color.match(/^rgb/)) {
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    } else {
        color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, "$&$&"));
        // tslint:disable-next-line: no-bitwise
        r = color >> 16;
        // tslint:disable-next-line: no-bitwise
        g = color >> 8 & 255;
        // tslint:disable-next-line: no-bitwise
        b = color & 255;
    }

    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b),
    );
    if (hsp > 127.5) {
        return true;
    } else {
        return false;
    }
  }

  private shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    // @ts-ignore
    // tslint:disable-next-line: radix
    R = parseInt(R * (100 + percent) / 100);
    // @ts-ignore
    // tslint:disable-next-line: radix
    G = parseInt(G * (100 + percent) / 100);
    // @ts-ignore
    // tslint:disable-next-line: radix
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
  }

  private setupDmx() {
    this.dmx = new DMX();
    this.universe = this.dmx.addUniverse("AGLight universe #1", "socketio", undefined, {debug: true});
    this.universe.updateAll(0); // ToDo init
  }

  private alertNothingToDisplay() {
    smalltalk.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
  }
}
