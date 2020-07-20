import {
    Component, Input, Output, EventEmitter, OnInit,
} from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import * as smalltalk from "smalltalk";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { FixedChannel } from "../../_entities/fixed-channel";
import { Fixture } from "../../_entities/fixture";
import { Widget, WidgetType } from "../../_entities/widget";
import { colors } from "../../_ressources/colors";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";
import { LibraryService } from "../../_services/library.service";
import { DmxService } from "../../_services/dmx.service";
import { beautifyCamelCase } from "../../_utils/camelcase-beautifier";
import { findChannelAddresses, findChannelAddresses2 } from "../../_utils/find-channel-addresses";
import { widgets, effectWidgets } from "../../_ressources/widgets";

@Component({
    selector: "widget-grid",
    styleUrls: ["./widget-grid.component.scss"],
    templateUrl: "./widget-grid.component.html",
})
export class WidgetGridComponent implements OnInit {
    public options: GridsterConfig;
    public fixtures: Fixture[] = [];
    public widgets: Widget[] = [];
    public currentWidget: Widget;
    public widgetTypes = widgets;
    @Input() public editMode = false;
    @Input() public previewEnabled = false;
    @Input() public fixedChannels: FixedChannel[] = [];
    @Output() public fixedChannelAdded: EventEmitter<FixedChannel>
        = new EventEmitter<FixedChannel>();

    private debouncedSave: Subject<any> = new Subject<any>();
    private readonly shadeColorFactor = 35;

    constructor(
        private showService: ShowService,
        private libraryService: LibraryService,
        private dmxService: DmxService,
        private modalService: NgbModal,
    ) { }

    public saveDebounced(): void {
        this.debouncedSave.next();
    }

    public async ngOnInit(): Promise<void> {
        this.debouncedSave.asObservable().pipe(debounceTime(1000)).subscribe(() => {
            this.save();
        });

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
        if (!this.dmxService.isConnected && !this.editMode) {
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

    public openConfig($event: Event, item: Widget, modal: unknown): void {
        this.currentWidget = item;
        $event.preventDefault();
        $event.stopPropagation();
        this.modalService.open(modal, { size: "lg" }).result.then(() => {
            this.save();
        }, () => undefined);
    }

    public preview(widget: Widget, value: number): void {
        if (!this.previewEnabled || !this.editMode) {
            return;
        }
        this.dmxService.updateMultiple(value, findChannelAddresses(widget));
    }

    public addWidget(fixture: Fixture, isEffect = false, isFixedChannelValue = false): void {
        const { channels } = fixture.product.modes.filter(
            (m) => m.name == fixture.channelMode,
        )[0];
        const opts3 = channels.map((ch, idx) => {
            const [channel, isFineChannel] = this.removeFineSuffix(ch);
            return {
                description: `
                    <table><thead><tr><th></th><th></th></tr></thead><tbody>
                    ${fixture.product.availableChannels[channel].capabilities.map((c: any) => `<tr>

                    <td class="text-muted">${c.dmxRange ? `${c.dmxRange[0]} - ${c.dmxRange[1]}` : "0 - 255"}:</td>
                    <td><b>${beautifyCamelCase(c.type)}${isFineChannel ? " fine" : ""}</b> ${c.effectPreset ? `(${beautifyCamelCase(c.effectPreset)})` : ""}</td></tr>
                    ${c.comment ? `<tr><td></td><td><i>${c.comment}</i></td></tr>` : ""}
                    
                    `).join("")}
                    </tbody></table>
                  `,
                name: `${fixture.startAddress - 1 + idx}: ${channel}${isFineChannel ? " fine" : ""}`,
                value: ch,
            };
        });
        if (!isFixedChannelValue) {
            const mappedChannels = channels.map((c) => {
                const [ch, isFineChannel] = this.removeFineSuffix(c);
                return {
                    key: c, // ch
                    value: fixture.product.availableChannels[ch], // ch
                    isFineChannel,
                };
            });
            mappedChannels.forEach((channel, idx) => {
                if (
                    channel.value.singleCapability && channel.value.capabilities[0].type == "ColorIntensity"
                    && mappedChannels[idx + 1] && mappedChannels[idx + 1].value.singleCapability && mappedChannels[idx + 1].value.capabilities[0].type == "ColorIntensity"
                    && mappedChannels[idx + 2] && mappedChannels[idx + 2].value.singleCapability && mappedChannels[idx + 2].value.capabilities[0].type == "ColorIntensity"
                ) {
                    opts3.unshift({
                        description: "This is a virtual channel. It bundles the Red, Green and Blue channel of the fixture(s). You can use this for colorpickers.",
                        name: "RGB Channel (3 Channels)",
                        value: `CUSTOM:rgb:${channel.key}`,
                    });
                }
            });
        }
        if (opts3.length) {
            smalltalkSelect.select("Add widget", "Choose the channel:", opts3).then(async (channel: string) => {
                if (isFixedChannelValue) {
                    const w = new FixedChannel(fixture, channel);
                    await this.showService.connection.manager.save(w);
                    this.fixedChannels.push(w);
                    this.updateFixedChannels();
                    this.fixedChannelAdded.emit(w);
                    return;
                }
                let availableWidgets;
                if (isEffect) {
                    availableWidgets = effectWidgets.filter((w) => {
                        if (channel.startsWith("CUSTOM")) {
                            if (w.customChannelRequired && channel.startsWith(`CUSTOM:${w.customChannelRequired}`)) {
                                return true;
                            }
                        } else if (
                            w.singleCapability
                                && fixture.product.availableChannels[channel].singleCapability
                                && w.possibleCapabilities.includes(
                                    fixture.product.availableChannels[channel].capabilities[0].type,
                                )
                        ) {
                            return true;
                        } else if (fixture.product.availableChannels[channel].capabilities
                            .filter((c) => !w.possibleCapabilities.includes(c.type)).length > 0) {
                            //
                        }
                        return false;
                    });
                } else {
                    availableWidgets = widgets.filter((w) => (w.customChannelRequired ? channel.startsWith(`CUSTOM:${w.customChannelRequired}`) : !channel.startsWith("CUSTOM")));
                }
                if (availableWidgets.length) {
                    smalltalkSelect.select(
                        "Add widget",
                        "Choose the widget you want to add:",
                        availableWidgets,
                    ).then(async (control: WidgetType) => {
                        const { customChannelRequired } = (isEffect ? effectWidgets : widgets)
                            .filter((x) => x.value == control)[0];
                        const w = new Widget(0, 0, 1, 1, isEffect ? undefined : control, customChannelRequired ? channel.split(":")[2] : channel, fixture, customChannelRequired, isEffect ? control : undefined);
                        await this.showService.connection.manager.save(w);
                        await this.loadAll();
                    }, () => undefined);
                } else {
                    this.alertNothingToDisplay();
                }
            }, () => undefined);
        } else {
            this.alertNothingToDisplay();
        }
    }

    private removeFineSuffix(channel: string): [string, boolean] {
        if (channel.endsWith(" fine")) {
            return [channel.replace(" fine", ""), true];
        }
        return [channel, false];
    }

    public toggleEffect(event: Event, widget: Widget): void {
        if ((event.target as any).checked) {
            this.dmxService.activateEffect(widget);
        } else {
            this.dmxService.deactivateEffect(widget);
        }
    }

    public addEffectWidget(fixture: Fixture): void {
        this.addWidget(fixture, true);
    }

    public addFixedChannelWidget(fixture: Fixture): void {
        this.addWidget(fixture, false, true);
    }

    public async addGeneralWidget(t: "blackout" | "multiaction"): Promise<void> {
        let w;
        switch (t) {
        case "blackout":
            w = new Widget(0, 0, 1, 1, "BlackoutButton", "", undefined);
            break;
        case "multiaction":
            w = new Widget(0, 0, 1, 1, "MultiAction", "", undefined);
            break;
        default:
            break;
        }
        await this.showService.connection.manager.save(w);
        await this.loadAll();
    }

    public action(type: string, widget: Widget, event: Event | number | any, idx?: number): void {
        if (this.editMode && !this.previewEnabled) {
            return;
        }
        let channels: number[];
        switch (type) {
        case "slider":
            channels = findChannelAddresses(widget);
            this.dmxService.animateMultipleTo(event, channels, widget.config?.transitionTime);
            break;
        case "button":
            channels = findChannelAddresses(widget);
            this.dmxService.animateMultipleTo(
                widget.config?.buttonValue ? widget.config.buttonValue : 0,
                channels,
                widget.config?.transitionTime,
            );
            break;
        case "blackoutbutton":
            for (const f of this.fixtures) {
                const cm = f.product.modes.filter((m) => m.name == f.channelMode)[0];
                for (let channelName of cm.channels) {
                    channelName = channelName.replace(" fine", "");
                    if (f.product.availableChannels[channelName].singleCapability && (f.product.availableChannels[channelName].capabilities[0].type == "Intensity" || f.product.availableChannels[channelName].capabilities[0].type == "ColorIntensity")) {
                        channels = findChannelAddresses2(f, channelName);
                        this.dmxService.animateMultipleTo(
                            0,
                            channels,
                            widget.config?.transitionTime,
                        );
                    }
                }
            }
            break;
        case "buttongrid":
            // chl = findChannelAddress(widget);
            // val = widget.channel.steps[idx].start;
            // this.universe.update({ [chl]: val });
            break;
        case "wheel":
            const capability = widget.fixture.product.availableChannels[widget.channel].capabilities.filter((s) => s.type == "WheelSlot" && s.slotNumber == idx + 1)[0];
            this.dmxService.animateMultipleTo(
                Math.round((capability.dmxRange[0] + capability.dmxRange[1]) / 2),
                findChannelAddresses(widget),
                widget.config?.transitionTime,
            );
            break;
        case "colorpicker":
            channels = findChannelAddresses(widget);
            for (const c of channels) {
                this.dmxService.animateTo(
                    {
                        [c]: event.color.rgb.r,
                        [c + 1]: event.color.rgb.g,
                        [c + 2]: event.color.rgb.b,
                    },
                    widget.config?.transitionTime,
                );
            }
            break;
        default:
            break;
        }
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
            if (w.fixture) {
                [w.fixture.product] = products.filter((p) => p.name == w.fixture.name);
            }
            if (w.effect) {
                [w.effectData] = effectWidgets.filter((e) => e.value == w.effect);
            }
        }

        this.updateFixedChannels();
    }

    public updateFixedChannels(): void {
        setTimeout(() => {
            if ((this.dmxService.isConnected && this.previewEnabled) || !this.editMode) {
                for (const f of this.fixedChannels) {
                    this.dmxService.updateMultiple(f.value, findChannelAddresses(f));
                }
            }
        }, 200);
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
