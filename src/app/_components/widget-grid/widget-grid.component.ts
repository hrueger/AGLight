import { Component, Input, OnInit } from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import * as smalltalk from "smalltalk";
import { Fixture } from "../../_entities/fixture";
import { Widget, WidgetType } from "../../_entities/widget";
import { colors } from "../../_ressources/colors";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";
import { LibraryService } from "../../_services/library.service";
import { DmxService } from "../../_services/dmx.service";
import { beautifyCamelCase } from "../../_utils/camelcase-beautifier";
import { getChannelCount } from "../../_utils/channel-count";

const widgets: { name: string, value: string, description: string }[] = [
    {
        name: "Fader",
        value: "Fader",
        description: "A simple fader to drag and drop and select a channel value.",
    },
    {
        name: "Button",
        value: "Button",
        description: "A button to quickly go to the channel value you predefined.",
    },
    {
        name: "Colorpicker",
        value: "Colorpicker",
        description: "A simple colorpicker with predefined color swatches to quickly select a nice color.",
    },
    {
        name: "RGB Colorpicker",
        value: "RGB Colorpicker",
        description: "A full RGB colorpicker to select every color you can imagine.",
    },
    {
        name: "Button Grid",
        value: "Button Grid",
        description: "A grid of buttons to have quick access to multiple channel values.",
    },
];

@Component({
    selector: "widget-grid",
    styleUrls: ["./widget-grid.component.scss"],
    templateUrl: "./widget-grid.component.html",
})
export class WidgetGridComponent implements OnInit {
    public options: GridsterConfig;
    public fixtures: Fixture[] = [];
    public widgets: Widget[] = [];
    @Input() public editMode = false;

    private readonly shadeColorFactor = 35;

    constructor(
        private showService: ShowService,
        private libraryService: LibraryService,
        private dmxService: DmxService,
    ) { }

    public async ngOnInit(): Promise<void> {
        const that = this;
        this.options = {
            displayGrid: "onDrag&Resize",
            draggable: { enabled: this.editMode },
            itemChangeCallback: () => {
                that.save();
            },
            mobileBreakpoint: 0,
            resizable: { enabled: this.editMode },
        };
        if (!this.dmxService.isConnected && !this.editMode && !true) {
            smalltalk.alert("Error", "No DMX output connected!<br>Click the button in the statusbar to get to the DMX setup wizard.");
        } else {
            await this.loadAll();
        }
    }

    public async removeItem($event: Event, item: Widget): Promise<void> {
        $event.preventDefault();
        $event.stopPropagation();
        smalltalk.confirm("Are you sure?", "Do you really want to remove this widget?").then(async () => {
            await this.showService.connection.getRepository(Widget).remove(item);
            this.widgets.splice(this.widgets.indexOf(item), 1);
        }, () => undefined);
    }

    public addWidget(fixture: Fixture): void {
        const opts3 = fixture.product.modes.filter(
            (m) => m.name == fixture.channelMode,
        )[0].channels.map((channel, idx) => ({
            description: `
                    <table><thead><tr><th></th><th></th></tr></thead><tbody>
                    ${fixture.product.availableChannels[channel].capabilities.map((c: any) => `<tr>

                    <td class="text-muted">${c.dmxRange ? `${c.dmxRange[0]} - ${c.dmxRange[1]}` : "0 - 255"}:</td>
                    <td><b>${beautifyCamelCase(c.type)}</b> ${c.effectPreset ? `(${beautifyCamelCase(c.effectPreset)})` : ""}</td></tr>
                    ${c.comment ? `<tr><td></td><td><i>${c.comment}</i></td></tr>` : ""}
                    
                    `).join("")}
                    </tbody></table>
                  `,
            name: `${fixture.startAddress - 1 + idx}: ${channel}`,
            value: channel,
        }));
        if (opts3.length) {
            smalltalkSelect.select("Add widget", "Choose the channel:", opts3).then(async (channel: string) => {
                smalltalkSelect.select("Add widget",
                    "Choose the widget you want to add:", widgets).then(async (control: WidgetType) => {
                    const w = new Widget(0, 0, 1, 1, control, channel, fixture);
                    await this.showService.connection.manager.save(w);
                    await this.loadAll();
                    // this.widgets.push(w);
                }, () => undefined);
            }, () => undefined);
        } else {
            this.alertNothingToDisplay();
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public addEffectWidget(fixture: Fixture): void {
        this.alertNothingToDisplay();
    }

    public action(type: string, widget: Widget, event: Event | number | any, idx?: number): void {
        if (this.editMode) {
            return;
        }
        let channels: number[];
        switch (type) {
        case "slider":
            channels = this.findChannelAddresses(widget);
            this.dmxService.updateMultiple(event, channels);
            break;
        case "button":
            break;
        case "buttongrid":
            // chl = this.findChannelAddress(widget);
            // val = widget.channel.steps[idx].start;
            // this.universe.update({ [chl]: val });
            break;
        case "colorpicker":
            channels = this.findChannelAddresses(widget);
            for (const c of channels) {
                this.dmxService.update({
                    [c]: event.color.rgb.r,
                    [c + 1]: event.color.rgb.g,
                    [c + 2]: event.color.rgb.b,
                });
            }
            break;
        default:
            break;
        }
    }

    private findChannelAddresses(widget: Widget): number[] {
        return new Array(widget.fixture.number)
            .fill(null)
            .map((_, idx) => widget.fixture.startAddress
                + (idx * (getChannelCount(widget.fixture) + 1))
                + widget.fixture.product.modes
                    .filter((m) => m.name == widget.fixture.channelMode)[0]
                    .channels.findIndex((c) => c == widget.channel));
    }

    public save(): void {
        this.showService.connection.getRepository(Widget).save(this.widgets);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getButtongridRowArray(widget: Widget): number {
        return 0;
        /* const nodes: Step[] = widget.channel.steps;
        const rows = Math.floor(Math.sqrt(nodes.length));
        return Array.from(Array(rows).keys()); */
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getButtongridColArray(widget: Widget, i: number): number {
        return 0;
        /* const nodes: Step[] = widget.channel.steps;
        const rows = Math.floor(Math.sqrt(nodes.length));
        const cols = nodes.length / rows;
        return Array.from(Array(cols).keys()).map((n) => n + (i * rows) + i); */
    }

    public ngOnDestroy(): void {
        this.dmxService.shutdown();
    }

    public tryGetBackgroundColor(name: string)
        : { background?: string, textShadow?: string, backgroundColor?: string, color?: string } {
        name = name.toLowerCase().replace("-", " ");
        const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
        if (c) { // color found in list
            return {
                backgroundColor: c.hex,
                color: this.isColorLight(c.hex) ? "#000" : "#fff",
            };
        } if (name.startsWith("rainbow")) { // check for special words
            return {
                background: "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",
                textShadow: "2px 2px 2px #000",
            };
        }
        const parts = name.split("+");
        const clrs: string[] = [];
        parts.forEach((part) => {
            part = part.replace(/[^a-zA-Z0-9]/g, "");
            const col = colors.filter((color) => color.name.toLowerCase() == part || color.name.toLowerCase().replace(" ", "") == part.replace(" ", ""))[0];
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
        }
        return {
            background: `linear-gradient(to right, ${clrs.join(", ")})`,
            textShadow: "2px 2px 2px #000",
        };
    }

    private async loadAll() {
        this.fixtures = await this.showService.connection.getRepository(Fixture).find();
        const products = this.libraryService.getProducts();
        for (const fixture of this.fixtures) {
            [fixture.product] = products.filter((p) => p.name == fixture.name);
        }
        this.widgets = await this.showService.connection.getRepository(Widget).find({ relations: ["fixture"] });
        for (const w of this.widgets) {
            [w.fixture.product] = products.filter((p) => p.name == w.fixture.name);
        }
    }

    private replaceDarkOrLight(name: string): {backgroundColor?: string, color?: string} {
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
        return {};
    }
    private isColorLight(color) {
        let r;
        let g;
        let b;
        if (color.match(/^rgb/)) {
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            [r, g, b] = color;
        } else {
            color = +(`0x${color.slice(1).replace(
                color.length < 5 && /./g, "$&$&",
            )}`);
            r = color >> 16;
            // eslint-disable-next-line no-mixed-operators
            g = color >> 8 & 255;
            b = color & 255;
        }

        const hsp = Math.sqrt(
            0.299 * (r * r)
            + 0.587 * (g * g)
            + 0.114 * (b * b),
        );
        if (hsp > 127.5) {
            return true;
        }
        return false;
    }

    private shadeColor(color, percent) {
        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-mixed-operators
        R = parseInt(R * (100 + percent) / 100);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-mixed-operators
        G = parseInt(G * (100 + percent) / 100);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-mixed-operators
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        const RR = ((R.toString(16).length == 1) ? `0${R.toString(16)}` : R.toString(16));
        const GG = ((G.toString(16).length == 1) ? `0${G.toString(16)}` : G.toString(16));
        const BB = ((B.toString(16).length == 1) ? `0${B.toString(16)}` : B.toString(16));

        return `#${RR}${GG}${BB}`;
    }

    private alertNothingToDisplay() {
        smalltalk.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
    }
}
