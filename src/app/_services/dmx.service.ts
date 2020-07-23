import { Injectable } from "@angular/core";
import * as DMX from "dmx";
import * as serialport from "serialport";
import { StatusbarService } from "./statusbar.service";
import * as smalltalkSelect from "../_utils/smalltalk-select";
import { Widget } from "../_entities/widget";
import { findChannelAddresses } from "../_utils/find-channel-addresses";
import { DialogService } from "./dialog.service";

@Injectable({
    providedIn: "root",
})
export class DmxService {
    public get isConnected(): boolean {
        return !!this.universe;
    }
    private dmx: DMX;
    private universe: any;
    private readonly connectOption = {
        text: "Connect...",
        type: "primary",
        service: "dmxService",
        action: "connectToDevice",
    };
    private readonly devices: {
        [key: string]: {
            name: string,
            description: string,
            deviceId: string,
            deviceIdDescription: string,
            hasSerialport: boolean;
    } } = {
        artnet: {
            name: "Artnet",
            description: "Driver for all Artnet Devices like the EnttecODE.",
            deviceId: "127.0.0.1",
            deviceIdDescription: "IP-Adress of the device",
            hasSerialport: false,
        },
        bbdmx: {
            name: "BeagleBone-DMX",
            description: "A driver for the \"BeagleBone-DMX\" Interface.",
            deviceId: "",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
            hasSerialport: true,
        },
        dmx4all: {
            name: "DMX4ALL",
            description: "A driver for DMX4ALL devices like the \"NanoDMX USB Interface\"",
            deviceId: "",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
            hasSerialport: true,
        },
        "enttec-usb-dmx-pro": {
            name: "Enttec USB DMX Pro",
            description: "A driver for devices using a \"Enttec USB DMX Pro\" chip like those Enttec devices or the \"DMXKing ultraDMX Micro\".",
            deviceId: "",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
            hasSerialport: true,
        },
        "enttec-open-usb-dmx": {
            name: "Enttec Open DMX USB",
            description: "A driver for \"Enttec Open DMX USB\". This device is NOT recommended, there are known hardware limitations and this driver is not very stable. (If possible better obtain a device with the \"pro\" chip)",
            deviceId: "",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
            hasSerialport: true,
        },
        "dmxking-utra-dmx-pro": {
            name: "DMXKing Ultra DMX pro",
            description: "A driver for the \"DMXKing Ultra DMX pro\" interface. This driver supports multiple universe specify the options with Port = A or Port = B",
            deviceId: "",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
            hasSerialport: true,
        },
    }
    private runningEffects: Widget[] = [];
    constructor(private statusbarService: StatusbarService, private dialogService: DialogService) {}

    public init(): void {
        this.dmx = new DMX();
        this.statusbarService.setItem({
            name: "No dmx device connected",
            icon: "times",
            id: "dmx",
            dropup: {
                title: "DMX Output device",
                content: "No dmx device connected.",
                actions: [
                    this.connectOption,
                ],
            },
        });
        setTimeout(() => this.calculateEffects(), 1000);
    }

    private calculateEffects() {
        if (this.runningEffects.length) {
            const data = {};
            const t = Date.now();
            for (const e of this.runningEffects) {
                const channelAddresses = findChannelAddresses(e);
                e.effectData.f.forEach((f, idx) => {
                    for (const a of channelAddresses) {
                        data[a + idx] = f(t, e.effectConfig);
                    }
                });
            }
            this.update(data);
        }
        setTimeout(() => this.calculateEffects(), 10);
    }

    public activateEffect(widget: Widget): void {
        if (!widget.effect) {
            return;
        }
        this.runningEffects.push(widget);
    }

    public deactivateEffect(widget: Widget): void {
        this.runningEffects = this.runningEffects.filter((w) => {
            if (w.id == widget.id) {
                const channelAddresses = findChannelAddresses(w);
                this.animateMultipleTo(0, channelAddresses, 500);
                return false;
            }
            return true;
        });
    }

    public update(data: { [ch: number]: number}): void {
        this.universe.update(data);
    }

    public updateMultiple(value: number, channels: number[]): void {
        const data = this.getChannelObject(channels, value);
        this.universe.update(data);
    }

    public animateTo(data: { [ch: number]: number }, duration: number): void {
        if (!duration || duration <= 0) {
            this.update(data);
            return;
        }
        new DMX.Animation().add(data, duration).run(this.universe);
    }

    public animateMultipleTo(value: number, channels: number[], duration: number): void {
        if (!duration || duration <= 0) {
            this.updateMultiple(value, channels);
            return;
        }
        const data = this.getChannelObject(channels, value);
        new DMX.Animation().add(data, duration).run(this.universe);
    }

    private getChannelObject(channels: number[], value: number) {
        const data = {};
        for (const c of channels) {
            data[c] = value;
        }
        return data;
    }

    public shutdown(): void {
        // ToDo
    }

    public async connectToDevice(onSuccessfulConnection?: () => void): Promise<void> {
        const opts = Object.keys(this.devices).map((key) => (
            {
                description: this.devices[key].description,
                name: this.devices[key].name,
                value: key,
            }
        ));
        smalltalkSelect.select("Connect DMX Interface", "Choose the driver for the device you want to connect to.", opts).then(async (key: string) => {
            let defaultDeviceId = this.devices[key].deviceId;
            if (this.devices[key].hasSerialport) {
                const serialports = await serialport.list();
                if (serialports && serialports[0] && serialports[0].path) {
                    defaultDeviceId = serialports[0].path;
                }
            }
            this.dialogService.prompt("Device Identifier", `${this.devices[key].deviceIdDescription}<br>${defaultDeviceId == this.devices[key].deviceId ? "" : `<br>A device connected to <b>'${defaultDeviceId}'</b> was found. If you want to connect to that, just press 'OK'. In case that's not the correct device, just change it.`}`, defaultDeviceId).then(async (deviceId: string) => {
                let connectedSuccessfully = true;
                // needed because the driver does not throw an error...
                // eslint-disable-next-line no-console
                const originalWarn = console.warn;
                const onError = (e) => {
                    this.dialogService.alert("Error while connecting", e.toString());
                    this.statusbarService.setItem({
                        name: "Error while connecting",
                        icon: "exclamation-triangle",
                        id: "dmx",
                        dropup: {
                            title: "Error while connecting",
                            content: `The following error occured: '${e}'`,
                            actions: [
                                this.connectOption,
                            ],
                        },
                    });
                    // eslint-disable-next-line no-console
                    console.warn = originalWarn;
                    connectedSuccessfully = false;
                };
                try {
                    // eslint-disable-next-line no-console
                    console.warn = (msg) => {
                        onError(msg);
                        throw Error(msg);
                        connectedSuccessfully = false;
                    };
                    this.universe = this.dmx.addUniverse("u1", key, deviceId);
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    onError(e);
                    connectedSuccessfully = false;
                }
                setTimeout(() => {
                    if (connectedSuccessfully) {
                        // eslint-disable-next-line no-console
                        console.warn = originalWarn;
                        this.statusbarService.setItem({
                            name: this.devices[key].name,
                            icon: "plug",
                            id: "dmx",
                            dropup: {
                                title: "Successfully connected",
                                content: `to an ${this.devices[key].name} on '${deviceId}'.`,
                            },
                            actions: [
                                {
                                    text: "Disconnect",
                                    type: "primary",
                                    service: "dmxService",
                                    action: "disconnect",
                                },
                            ],
                        });
                        if (onSuccessfulConnection && typeof onSuccessfulConnection == "function") {
                            onSuccessfulConnection();
                        }
                    }
                }, 500);
            }, () => undefined);
        }, () => undefined);
    }

    private testDmxDimming() {
        let increasing = true;
        let val = 0;
        setInterval(() => {
            val = increasing ? val + 1 : val - 1;
            if (val > 30) {
                increasing = false;
            }
            if (val < 5) {
                increasing = true;
            }
            this.universe.update({
                30: 0,
                31: val,
                32: val,
                33: val,
                36: 0,
                37: val,
                38: val,
                39: val,
            });
        }, 25);
    }

    private testDmxColorRainbow() {
        const b = 0.003;
        // eslint-disable-next-line no-mixed-operators
        const T = 2 * Math.PI / b;
        setInterval(() => {
            const t = Date.now();
            this.universe.update({
                30: 0,
                31: Math.round(127.5 * Math.sin((0.003 * t) + 0 * T) + 127.5),
                32: Math.round(127.5 * Math.sin((0.003 * t) + 1 * T) + 127.5),
                33: Math.round(127.5 * Math.sin((0.003 * t) + 2 * T) + 127.5),
                36: 0,
                37: 0,
                38: 0,
                39: 0,
            });
        }, 50);
    }
}
