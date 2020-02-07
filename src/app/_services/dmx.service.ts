import { Injectable } from "@angular/core";
import { StatusbarService } from "./statusbar.service";

@Injectable({
    providedIn: "root",
})
export class DmxService {
    constructor(private statusbarService: StatusbarService) {}

    public init() {
        this.statusbarService.setItem({
            name: "No dmx device connected",
            icon: "times",
            id: "dmx",
            dropup: {
                title: "DMX Output device",
                content: "No dmx device connected.",
                actions: [
                    {
                        text: "Search",
                        type: "primary",
                        service: "dmxService",
                        action: "searchDevices"
                    }
                ]
            }
        });
    }
    public searchDevices() {
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
