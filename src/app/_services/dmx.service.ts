import { Injectable } from "@angular/core";
import { StatusbarService } from "./statusbar.service";
import * as DMX from "dmx";
import * as smalltalkSelect from "../_utils/smalltalk-select";
import * as smalltalk from "smalltalk";

@Injectable({
    providedIn: "root",
})
export class DmxService {
    private dmx: DMX;
    private universe: any;
    private readonly connectOption = {
        text: "Connect...",
        type: "primary",
        service: "dmxService",
        action: "connectToDevice"
    };
    private readonly devices: {
        [key: string]: {
            name: string,
            description: string,
            deviceId: string,
            deviceIdDescription: string,
    } } = {
        artnet: {
            name: "Artnet",
            description: "Driver for all Artnet Devices like the EnttecODE.",
            deviceId: "127.0.0.1",
            deviceIdDescription: "IP-Adress of the device",
        },
        bbdmx: {
            name: "BeagleBone-DMX",
            description: "A driver for the \"BeagleBone-DMX\" Interface.",
            deviceId: "COM5",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
        },
        dmx4all: {
            name: "DMX4ALL",
            description: "A driver for DMX4ALL devices like the \"NanoDMX USB Interface\"",
            deviceId: "COM5",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
        },
        "enttec-usb-dmx-pro": {
            name: "Enttec USB DMX Pro",
            description: "A driver for devices using a \"Enttec USB DMX Pro\" chip like those Enttec devices or the \"DMXKing ultraDMX Micro\".",
            deviceId: "COM5",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
        },
        "enttec-open-usb-dmx": {
            name: "Enttec Open DMX USB",
            description: "A driver for \"Enttec Open DMX USB\". This device is NOT recommended, there are known hardware limitations and this driver is not very stable. (If possible better obtain a device with the \"pro\" chip)",
            deviceId: "COM5",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
        },
        "dmxking-utra-dmx-pro": {
            name: "DMXKing Ultra DMX pro",
            description: "A driver for the \"DMXKing Ultra DMX pro\" interface. This driver supports multiple universe specify the options with Port = A or Port = B",
            deviceId: "COM5",
            deviceIdDescription: "Serial port of the device. For windows it is COM1, COM2, ...; For Linux it will be /dev/something",
        },
    }
    constructor(private statusbarService: StatusbarService) {}

    public init() {
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
                ]
            }
        });
    }
    public async connectToDevice() {
        const opts = Object.keys(this.devices).map((key) => (
            {
                description: this.devices[key].description,
                name: this.devices[key].name,
                value: key,
            }
        ));
        smalltalkSelect.select("Connect DMX Interface", "Choose the driver for the device you want to connect to.", opts, {}).then((key: string) => {
            smalltalk.prompt("Device Identifier", this.devices[key].deviceIdDescription, this.devices[key].deviceId).then((deviceId) => {
                let connectedSuccessfully = true;
                // tslint:disable-next-line: no-console
                const originalWarn = console.warn; // needed because the driver does not throw an error...
                const onError = (e) => {
                    smalltalk.alert("Error while connecting", e.toString());
                    this.statusbarService.setItem({
                        name: "Error while connecting",
                        icon: "exclamation-triangle",
                        id: "dmx",
                        dropup: {
                            title: "Error while connecting",
                            content: `The following error occured: '${e}'`,
                            actions: [
                                this.connectOption,
                            ]
                        }
                    });
                    // tslint:disable-next-line: no-console
                    console.warn = originalWarn;
                    connectedSuccessfully = false;
                };
                try {
                    // tslint:disable-next-line: no-console
                    console.warn = (msg) => {
                        onError(msg);
                        throw Error(msg);
                        connectedSuccessfully = false;
                    };
                    this.universe = this.dmx.addUniverse("u1", key, deviceId);
                } catch(e) {
                    // tslint:disable-next-line: no-console
                    console.error(e);
                    onError(e);
                    connectedSuccessfully = false;
                }
                setTimeout(() => {
                    if (connectedSuccessfully) {
                        this.statusbarService.setItem({
                            name: this.devices[key].name,
                            icon: "plug",
                            id: "dmx",
                            dropup: {
                                title: "Successfully connected",
                                content: `to an ${this.devices[key].name} on '${deviceId}'.`
                            },
                            actions: [
                                {
                                    text: "Disconnect",
                                    type: "primary",
                                    service: "dmxService",
                                    action: "disconnect"
                                }
                            ]
                        });
                        this.testDmxDimming();
                    }
                }, 500)
            });
        });
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
        }, 25)
    }
}
