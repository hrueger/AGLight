import { Injectable } from "@angular/core";
import { StatusbarService } from "./statusbar.service";
import * as DMX from "dmx";
import * as smalltalkSelect from "../_utils/smalltalk-select";

@Injectable({
    providedIn: "root",
})
export class DmxService {
    private dmx: DMX;
    private universe: any;
    private readonly devices: { [key: string]: string } = { 
        artnet: "Driver for EnttecODE",
        bbdmx: "driver for BeagleBone-DMX",
        dmx4all: "driver for DMX4ALL devices like the \"NanoDMX USB Interface\"",
        "enttec-usb-dmx-pro": "a driver for devices using a Enttec USB DMX Pro chip like the \"DMXKing ultraDMX Micro\".",
        "enttec-open-usb-dmx": "driver for \"Enttec Open DMX USB\". This device is NOT recommended, there are known hardware limitations and this driver is not very stable. (If possible better obtain a device with the \"pro\" chip)",
        "dmxking-utra-dmx-pro": "driver for the DMXKing Ultra DMX pro interface. This driver support multiple universe specify the options with Port = A or B",
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
                    {
                        text: "Connect...",
                        type: "primary",
                        service: "dmxService",
                        action: "connectToDevice"
                    }
                ]
            }
        });
    }
    public connectToDevice() {
        const opts = Object.keys(this.devices).map((key) => ({description: this.devices[key], name: key.replace(/-/g, " ").replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()), value: key}))
        smalltalkSelect.select("Connect DMX Interface",
            "Choose the head from which you want to add a control.", opts, {}).then((key: string) => {
                console.log(key);
            });
        // pseudo code
        this.statusbarService.setItem({
            name: "Searching for dmx devices",
            icon: "spinner fa-spin",
            id: "dmx",
            dropup: {
                title: "Searching for DMX devices",
                content: "Searching can take up to a minute, depending on the speed of your computer."
            }
        });
        const that = this;
        // this won't be there later ;-)
        setTimeout(() => {
            that.statusbarService.setItem({
                name: "Enttec OpenDMX",
                icon: "plug",
                id: "dmx",
                dropup: {
                    title: "Connected",
                    content: "to an Enttec OpenDMX. More info will be here. Maybe. Later. And hopefully."
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
        }, 3000);
    }
}
