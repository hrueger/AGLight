import { Component, Input, OnInit } from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import { Fixture } from "../../_entities/fixture";
import { Widget } from "../../_entities/widget";
import { colors } from "../../_ressources/colors";
import { ShowService } from "../../_services/show.service";

@Component({
  selector: "widget-grid",
  styleUrls: ["./widget-grid.component.scss"],
  templateUrl: "./widget-grid.component.html",
})
export class WidgetGridComponent implements OnInit {

  public options: GridsterConfig;
  public heads = [];
  @Input() public widgets: [] = [];
  @Input() public editMode: boolean = false;

  private readonly shadeColorFactor = 35;

  constructor(private showService: ShowService) {}

  public async ngOnInit() {
    const that = this;
    this.options = {
      displayGrid: "onDrag&Resize",
      draggable: {enabled: true},
      itemChangeCallback: () => {
        that.save();
      },
      mobileBreakpoint: 0,
      resizable: {enabled: true},
    };
    this.heads = await this.showService.connection.getRepository(Fixture).find();
    
  }

  public save() {
    this.showService.connection.getRepository(Widget).save(this.widgets);
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

}
