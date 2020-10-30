import {
    Component, Input, Output, EventEmitter, OnInit,
} from "@angular/core";
import { GridsterConfig } from "angular-gridster2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { FixedChannel } from "../../_entities/fixed-channel";
import { Fixture } from "../../_entities/fixture";
import { Widget, WidgetType } from "../../_entities/widget";
import { colors } from "../../_ressources/colors";
import { ShowService } from "../../_services/show.service";
import { LibraryService } from "../../_services/library.service";
import { DialogService } from "../../_services/dialog.service";
import { DmxService } from "../../_services/dmx.service";
import { beautifyCamelCase } from "../../_utils/camelcase-beautifier";
import { findChannelAddresses, findChannelAddresses2 } from "../../_utils/find-channel-addresses";
import { widgets, effectWidgets } from "../../_ressources/widgets";
import { MultiActionItem } from "../../_entities/multi-action-item";

@Component({
    selector: "widget-grid",
    styleUrls: ["./widget-grid.component.scss"],
    templateUrl: "./widget-grid.component.html",
})
export class WidgetGridComponent implements OnInit {
    public options: GridsterConfig;
    public currentWidget: Widget;
    public currentFixture: Fixture;
    public widgetTypes = widgets;
    @Input() public editMode = false;
    @Input() public previewEnabled = false;

    private debouncedSave: Subject<any> = new Subject<any>();
    private readonly shadeColorFactor = 35;

    constructor(
        private showService: ShowService,
        private dmxService: DmxService,
        private modalService: NgbModal,
        private dialogService: DialogService,
    ) { }

    public saveDebounced(): void {
        this.debouncedSave.next();
    }

    public async ngOnInit(): Promise<void> {
        this.debouncedSave.asObservable().pipe(debounceTime(1000)).subscribe(() => {
            this.showService.save();
        });

        const that = this;
        this.options = {
            displayGrid: "onDrag&Resize",
            draggable: { enabled: this.editMode },
            itemChangeCallback: () => {
                that.showService.save();
            },
            mobileBreakpoint: 0,
            resizable: { enabled: this.editMode },
        };
        if (!this.dmxService.isConnected && !this.editMode) {
            this.dialogService.alert("Error", "No DMX output connected!<br>Click the button in the statusbar to get to the DMX setup wizard.");
        } else {
            await this.loadAll();
        }
    }

    public async removeItem($event: Event, item: Widget): Promise<void> {
        $event.preventDefault();
        $event.stopPropagation();
        this.dialogService.confirm("Are you sure?", "Do you really want to remove this widget?").then(async () => {
            for (const fixture of this.showService.showData.fixtures) {
                fixture.widgets = fixture.widgets.filter((w) => w.id !== item.id);
            }
            this.showService.save();
        }, () => undefined);
    }

    public openConfig($event: Event, fixture: Fixture, item: Widget, modal: unknown): void {
        this.currentWidget = item;
        this.currentFixture = fixture;
        $event.preventDefault();
        $event.stopPropagation();
        this.modalService.open(modal, { size: "lg" }).result.then(() => {
            this.showService.save();
        }, () => undefined);
    }

    public preview(fixture: Fixture, widget: Widget, value: number): void {
        if (!this.previewEnabled || !this.editMode) {
            return;
        }
        this.dmxService.updateMultiple(value, findChannelAddresses(fixture, widget));
    }

    public addMultiActionItemToCurrentWidget(): void {
        this.dialogService.select("Add Multi Action", "Choose the fixture:", this.showService.showData.fixtures.map((f) => ({
            name: f.displayName,
            description: `${f.number}x ${f.product.name} <span class="text-muted">(${f.product.manufacturer.name})</span>`,
            value: f.id,
        }))).then(async (fixtureId: string) => {
            this.dialogService.select("Add Multi Action", "Choose the channel:", this.getSelectChannelOptions(this.showService.showData.fixtures.find((f) => f.id == fixtureId))).then((channel: string) => {
                this.dialogService.prompt("Add Multi Action", "Input the value for that channel:", 0, true).then(async (val: number) => {
                    const item = new MultiActionItem(channel,
                        undefined, val, fixtureId, this.currentWidget.id);
                    if (!this.currentWidget.multiActionItems) {
                        this.currentWidget.multiActionItems = [];
                    }
                    this.currentWidget.multiActionItems.push(item);
                    this.showService.save();
                });
            });
        });
    }

    public removeMultiActionItem(item: MultiActionItem): void {
        this.dialogService.confirm("Are you sure?", "Do you really want to remove this Multi Action Item?").then(async () => {
            this.currentWidget.multiActionItems = this.currentWidget
                .multiActionItems.splice(this.currentWidget.multiActionItems.indexOf(item), 1);
            this.showService.save();
        }, () => undefined);
    }

    public changeMultiActionItemChannel(item: MultiActionItem): void {
        this.dialogService.select("Edit Multi Action", "Choose the channel:", this.getSelectChannelOptions(this.showService.showData.fixtures.find((f) => f.id == item.fixtureId))).then(async (channel: string) => {
            item.channel = channel;
            this.showService.save();
        });
    }

    public changeMultiActionItemValue(item: MultiActionItem): void {
        this.dialogService.prompt("Edit Multi Action", "Input the value:", item.value).then(async (value: number) => {
            item.value = value;
            this.showService.save();
        });
    }

    public changeMultiActionItemTransitionTime(item: MultiActionItem): void {
        this.dialogService.prompt("Edit Multi Action", "Input the transition time in milliseconds:", item.transitionTime).then(async (value: number) => {
            item.transitionTime = value;
            this.showService.save();
        });
    }

    public addWidget(
        fixture: Fixture,
        isEffect = false,
        isFixedChannelValue = false,
        returnChannel = false,
    ): Promise<any> {
        return new Promise((resolve) => {
            const opts3 = this.getSelectChannelOptions(fixture, isFixedChannelValue);
            if (opts3.length) {
                this.dialogService.select("Add widget", "Choose the channel:", opts3).then(async (channel: any) => {
                    if (isFixedChannelValue) {
                        const w = new FixedChannel(channel);
                        fixture.fixedChannels.push(w);
                        this.updateFixedChannels();
                        this.showService.save();
                        return;
                    }
                    if (returnChannel) {
                        resolve(channel);
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
                                .filter((c) => !w.possibleCapabilities
                                    .includes(c.type)).length > 0) {
                                //
                            }
                            return false;
                        });
                    } else {
                        availableWidgets = widgets.filter((w) => (w.customChannelRequired ? channel.startsWith(`CUSTOM:${w.customChannelRequired}`) : !channel.startsWith("CUSTOM")));
                    }
                    if (availableWidgets.length) {
                        this.askForWidgetType(availableWidgets, isEffect, channel, fixture);
                    } else {
                        this.alertNothingToDisplay();
                    }
                }, () => undefined);
            } else {
                this.alertNothingToDisplay();
            }
        });
    }

    private getSelectChannelOptions(fixture: Fixture, noCustomChannels = false) {
        const { channels } = fixture.product.modes.filter(
            (m) => m.name == fixture.channelMode,
        )[0];
        const opts3 = channels.map((ch, idx) => {
            const [channel, isFineChannel] = this.removeFineSuffix(ch);
            if (!fixture.product.availableChannels[channel]) {
                fixture.product.availableChannels[channel] = {} as any;
                fixture.product.availableChannels[channel].capabilities = [
                    {
                        type: "Intensity",
                        dmxRange: [0, 255],
                    } as any,
                ];
            }
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
        if (!noCustomChannels) {
            const mappedChannels = channels.map((c) => {
                const [ch, isFineChannel] = this.removeFineSuffix(c);
                return {
                    key: c,
                    value: fixture.product.availableChannels[ch],
                    isFineChannel,
                };
            });
            mappedChannels.forEach((channel, idx) => {
                if (channel.value.singleCapability && channel.value.capabilities[0].type == "ColorIntensity"
                    && mappedChannels[idx + 1] && mappedChannels[idx + 1].value.singleCapability && mappedChannels[idx + 1].value.capabilities[0].type == "ColorIntensity"
                    && mappedChannels[idx + 2] && mappedChannels[idx + 2].value.singleCapability && mappedChannels[idx + 2].value.capabilities[0].type == "ColorIntensity") {
                    opts3.unshift({
                        description: "This is a virtual channel. It bundles the Red, Green and Blue channel of the fixture(s). You can use this for colorpickers.",
                        name: "RGB Channel (3 Channels)",
                        value: `CUSTOM:rgb:${channel.key}`,
                    });
                }
            });
        }
        return opts3;
    }

    public displayWidgetGrid(): boolean {
        for (const f of this.showService.showData.fixtures) {
            if (f.widgets?.length > 0) {
                return true;
            }
        }
        return false;
    }

    private askForWidgetType(
        availableWidgets: any,
        isEffect: boolean,
        channel: string,
        fixture: Fixture,
    ) {
        this.dialogService.select("Add widget", "Choose the widget you want to add:", availableWidgets).then(async (control: WidgetType) => {
            const { customChannelRequired } = (isEffect ? effectWidgets : widgets)
                .filter((x) => x.value == control)[0];
            const w = new Widget(0, 0, 1, 1, isEffect ? undefined : control, customChannelRequired ? channel.split(":")[2] : channel, customChannelRequired, isEffect ? control : undefined);
            fixture.widgets.push(w);
            this.showService.save();
            // await this.loadAll();
        }, () => undefined);
    }

    private removeFineSuffix(channel: string): [string, boolean] {
        if (channel.endsWith(" fine")) {
            return [channel.replace(" fine", ""), true];
        }
        return [channel, false];
    }

    public toggleEffect(event: Event, fixture: Fixture, widget: Widget): void {
        if ((event.target as any).checked) {
            this.dmxService.activateEffect(fixture, widget);
        } else {
            this.dmxService.deactivateEffect(fixture, widget);
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
        this.showService.showData.generalWidgets.push(w);
        this.showService.save();
    }

    public action(type: string, fixture: Fixture,
        widget: Widget, event: Event | number | any, idx?: number): void {
        if (this.editMode && !this.previewEnabled) {
            return;
        }
        let channels: number[];
        switch (type) {
        case "slider":
            channels = findChannelAddresses(fixture, widget);
            this.dmxService.animateMultipleTo(event, channels, widget.config?.transitionTime);
            break;
        case "button":
            channels = findChannelAddresses(fixture, widget);
            this.dmxService.animateMultipleTo(
                widget.config?.buttonValue ? widget.config.buttonValue : 0,
                channels,
                widget.config?.transitionTime,
            );
            break;
        case "blackoutbutton":
            for (const f of this.showService.showData.fixtures) {
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
        case "multiActionButton":
            for (const item of widget.multiActionItems) {
                channels = findChannelAddresses2(
                    this.showService.showData.fixtures.find((f) => f.id == fixture.id),
                    item.channel,
                );
                this.dmxService.animateMultipleTo(
                    item.value ? item.value : 0,
                    channels,
                    item.transitionTime,
                );
            }
            break;
        case "wheel":
            const capability = fixture.product.availableChannels[widget.channel].capabilities.filter((s) => s.type == "WheelSlot" && s.slotNumber == idx + 1)[0];
            this.dmxService.animateMultipleTo(
                Math.round((capability.dmxRange[0] + capability.dmxRange[1]) / 2),
                findChannelAddresses(fixture, widget),
                widget.config?.transitionTime,
            );
            break;
        case "colorpicker":
            channels = findChannelAddresses(fixture, widget);
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
        /* const products = this.libraryService.getProducts();
        for (const fixture of this.showService.showData.fixtures) {
            [fixture.product] = products.filter((p) => p.name == fixture.name);
        }
        for (const w of this.widgets) {
            if (w.fixture) {
                [w.fixture.product] = products.filter((p) => p.name == w.fixture.name);
            }
            if (w.effect) {
                [w.effectData] = effectWidgets.filter((e) => e.value == w.effect);
            }
        } */
        this.updateFixedChannels();
    }

    public updateFixedChannels(): void {
        setTimeout(() => {
            if ((this.dmxService.isConnected && this.previewEnabled) || !this.editMode) {
                for (const fixture of this.showService.showData.fixtures) {
                    for (const fixedChannel of fixture.fixedChannels) {
                        this.dmxService.updateMultiple(fixedChannel.value,
                            findChannelAddresses(fixture, fixedChannel));
                    }
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
        this.dialogService.alert("Error", "Unfortunately there is nothing to display... Please try other options!");
    }
}
