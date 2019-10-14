import { Component } from "@angular/core";
import * as smalltalk from "smalltalk";
import { channelTypes } from "../../_ressources/channel-types";
import { configNodeModes } from "../../_ressources/config-node-modes";
import * as smalltalkSelect from "../../_utils/smalltalk-select";
import { Store } from "../../_utils/store";

@Component({
  selector: "app-avalible-heads",
  styleUrls: ["./avalible-heads.component.scss"],
  templateUrl: "./avalible-heads.component.html",
})
export class AvalibleHeadsComponent {
  public heads: any[] = [];
  private store: Store;

  public ngOnInit() {
    this.store = new Store({
      configName: "heads",
      defaults: {
        heads: [],
      },
    });
    this.heads = this.store.get("heads");
  }

  public toggleShowChannelModes(i: number) {
    this.heads[i].showChannelModes = (this.heads[i].showChannelModes ? !this.heads[i].showChannelModes : true);
    this.save();
  }
  public toggleShowChannelConfig(i: number, j: number, k: number) {
    this.heads[i].channelModes[j].channels[k].showChannelConfig =
    (this.heads[i].channelModes[j].channels[k].showChannelConfig ?
      !this.heads[i].channelModes[j].channels[k].showChannelConfig : true);
    this.save();
  }

  public deleteHead(i: number) {
    smalltalk.confirm("Detele head",
    "Are you sure that this head should be deleted? You won't be able to restore it.").then(() => {
      this.heads.splice(i, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannelMode(i: number, j: number) {
    smalltalk.confirm("Detele channel mode",
    "Are you sure that this channel mode should be deleted? You won't be able to restore it.").then(() => {
      this.heads[i].channelModes.splice(j, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannel(i: number, j: number, k: number) {
    smalltalk.confirm("Delete channel",
    "Are you sure that this channel should be deleted? You won't be able to restore it.").then(() => {
      this.heads[i].channelModes[j].channels.splice(k, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannelConfigNode(i: number, j: number, k: number, l: number) {
    smalltalk.confirm("Delete step",
    "Are you sure that this step should be deleted? You won't be able to restore it.").then(() => {
      this.heads[i].channelModes[j].channels[k].configNodes.splice(l, 1);
      this.save();
    }, () => undefined);
  }

  public addHead() {
    this.heads.push({
      channelModes: [
      this.createChannelMode(),
    ],
      manufacturer: "Unnamed Company",
      name: "Unnamed Head",
    });
    this.save();
  }
  public addChannelMode(i: number) {
    this.heads[i].channelModes.push(this.createChannelMode());
    this.save();
  }
  public addChannel(i: number, j: number) {
    let n;
    if (this.heads[i].channelModes[j].channels && this.heads[i].channelModes[j].channels.length > 0) {
      n = this.heads[i].channelModes[j].channels[this.heads[i].channelModes[j].channels.length - 1].number + 1;
    } else {
      n = 1;
    }
    this.heads[i].channelModes[j].channels.push(this.createChannel(n));
    this.save();
  }
  public addChannelConfigNode(i: number, j: number, k: number) {
    if (!this.heads[i].channelModes[j].channels[k].configNodes) {
      this.heads[i].channelModes[j].channels[k].configNodes = [];
    }
    this.heads[i].channelModes[j].channels[k].configNodes.push(this.createConfigNode());
  }

  public createChannelMode() {
    return {
      channels: [
      this.createChannel(),
    ],
    };
  }
  public createChannel(n: number = 1) {
    return {
      length: 1,
      name: "Unnamed Channel",
      number: n,
      type: "Please select",
    };
  }
  public createConfigNode() {
    return {
      end: 255,
      mode: "Linear",
      name: "Unnamed step",
      start: 0,
    };
  }

  public save() {
    this.store.set("heads", this.heads);
  }
  public change(field: string, i: number, j: number = 0, k: number = 0, l: number = 0) {
    let val;
    let title;
    let message;
    let selectBox = false;
    let options = [];
    switch (field) {
      case "name":
        val = this.heads[i].name;
        title = "Rename head";
        message = "Enter the name of the head:";
        break;
      case "manufacturer":
        val = this.heads[i].manufacturer;
        title = "Change manufacturer";
        message = "Enter the manufacturer's name:";
        break;
      case "channelType":
        val = this.heads[i].channelModes[j].channels[k].type;
        title = "Choose channel type";
        message = "Choose the type of the channel:";
        selectBox = true;
        options = channelTypes;
        break;
      case "channelName":
        val = this.heads[i].channelModes[j].channels[k].name;
        title = "Rename channel";
        message = "Enter the channel name:";
        break;
      case "channelNumber":
        val = this.heads[i].channelModes[j].channels[k].number;
        title = "Edit channel number";
        message = "Enter the channel number:";
        break;

      case "start":
        val = this.heads[i].channelModes[j].channels[k].configNodes[l].start;
        title = "Edit step start value";
        message = "Enter the start value of that step (0 - 255):";
        break;
      case "end":
        val = this.heads[i].channelModes[j].channels[k].configNodes[l].end;
        title = "Edit step end value";
        message = "Enter the end value of that step (0 - 255):";
        break;
      case "configNodeName":
        val = this.heads[i].channelModes[j].channels[k].configNodes[l].name;
        title = "Edit step name";
        message = "Enter the name of that step:";
        break;
      case "configNodeMode":
        val = this.heads[i].channelModes[j].channels[k].configNodes[l].mode;
        title = "Select step mode";
        message = "Select the mode of that step:";
        selectBox = true;
        options = configNodeModes;
        break;
      case "configNodeType":
        return;
        val = this.heads[i].channelModes[j].channels[k].configNodes[l].mode;
        title = "Select step mode";
        message = "Select the mode of that step:";
        selectBox = true;
        options = configNodeModes;
        break;
    }
    if (!selectBox) {
      smalltalk.prompt(title, message, val).then((res) => {
        if (res) {
          switch (field) {
            case "name":
              this.heads[i].name = res;
              break;
            case "manufacturer":
              this.heads[i].manufacturer = res;
              break;
            case "channelName":
              this.heads[i].channelModes[j].channels[k].name = res;
              break;
            case "channelNumber":
              this.heads[i].channelModes[j].channels[k].number = parseInt(res, undefined);
              break;

            case "start":
              this.heads[i].channelModes[j].channels[k].configNodes[l].start = parseInt(res, undefined);
              break;
            case "end":
              this.heads[i].channelModes[j].channels[k].configNodes[l].end = parseInt(res, undefined);
              break;
            case "configNodeName":
              this.heads[i].channelModes[j].channels[k].configNodes[l].name = res;
              break;
          }
          this.save();
        }
      }, () => undefined);
    } else {
      smalltalkSelect.select(title, message, options, {}).then((res) => {
        if (res) {
          switch (field) {
            case "configNodeMode":
              this.heads[i].channelModes[j].channels[k].configNodes[l].mode =
              options.filter((o) => o.value == res)[0].name;
              break;
            case "configNodeType":
              this.heads[i].channelModes[j].channels[k].configNodes[l].type =
              options.filter((o) => o.value == res)[0].name;
              break;
            case "channelType":
              this.heads[i].channelModes[j].channels[k].type = options.filter((o) => o.value == res)[0].name;
              this.heads[i].channelModes[j].channels[k].length = options.filter((o) => o.value == res)[0].length;
              break;
          }
        }
        this.save();
      }, () => undefined);
    }
  }
}
