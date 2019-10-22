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
  public options: GridsterConfig;
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
  public heads;
  private readonly shadeColorFactor = 35;

  constructor(private showService: ShowService) {}

  public ngOnInit() {
    const that = this;
    this.heads = this.showService.getData("usedHeads");
    this.ui = this.showService.getData("ui") || [];
    this.options = {
      displayGrid: "onDrag&Resize",
      draggable: {enabled: true},
      itemChangeCallback: () => {
        that.save();
      },
      mobileBreakpoint: 0,
      resizable: {enabled: true},
    };
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
                effectParamIdx = parseInt(await (smalltalkSelect.select("Add control",
                  "Choose the effect parameter to control", options, {}) as Promise<string>), undefined);
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

  public getButtongridRowArray(control) {
    const nodes: [] = (control.effectOrHead == "head" ?
    (this.heads[control.headIdx].channelMode.channels[control.effectOrChannelIdx].configNodes) :
    ((this.heads[control.headIdx].effects[control.effectOrChannelIdx].params[control.effectParamIdx].configNodes)));
    const rows = Math.floor(Math.sqrt(nodes.length));
    // const cols = nodes.length / rows;
    return Array.from(Array(rows).keys());
  }

  public getButtongridColArray(control, i) {
    const nodes: [] = (control.effectOrHead == "head" ?
    (this.heads[control.headIdx].channelMode.channels[control.effectOrChannelIdx].configNodes) :
    ((this.heads[control.headIdx].effects[control.effectOrChannelIdx].params[control.effectParamIdx].configNodes)));
    const rows = Math.floor(Math.sqrt(nodes.length));
    const cols = nodes.length / rows;
    return Array.from(Array(cols).keys()).map((n) => n + (i * rows) + i);
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
          //console.log(n);
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

      /*if (name.startsWith("light") || name.startsWith("dark")) {
      const newColor = this.replaceDarkOrLight(name);
      if (newColor) {
        return newColor;
      }
    }*/
    }
    /* else {
      return {
        backgroundColor: "#757575",
      };
    }*/
  }

  private alertNothingToDisplay() {
    smalltalk.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
  }

  private replaceDarkOrLight(name) {
    if (name.startsWith("dark")) {
      name = name.replace("dark", "").replace(/[^a-zA-Z0-9]/g, "");
      // console.log("dark, looking for", name);
      // console.log(colors);
      const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
      // console.log(c);
      if (c) {
        const hex = this.shadeColor(c.hex, -this.shadeColorFactor);
        return {
          backgroundColor: hex,
          color: this.isColorLight(c.hex) ? "#000" : "#fff",
        };
      }
    } else if (name.startsWith("light")) {
      name = name.replace("light", "").replace(/[^a-zA-Z0-9]/g, "");
      // console.log("light, looking for", name)
      const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
      // console.log(c);
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
}
