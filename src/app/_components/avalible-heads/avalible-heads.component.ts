import { Component } from "@angular/core";
import * as smalltalk from "smalltalk";
import { channelTypes } from "../../_ressources/channel-types";
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

  public toggleShowChannelModes(i) {
    this.heads[i].showChannelModes = (this.heads[i].showChannelModes ? !this.heads[i].showChannelModes : true);
    this.save();
  }

  public deleteHead(i) {
    smalltalk.confirm("Detele head",
    "Are you sure that this head should be deleted? You won't be able to restore it.").then(() => {
      this.heads.splice(i, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannelMode(i, j) {
    smalltalk.confirm("Detele channel mode",
    "Are you sure that this channel mode should be deleted? You won't be able to restore it.").then(() => {
      this.heads[i].channelModes.splice(j, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannel(i, j, k) {
    smalltalk.confirm("Detele channel",
    "Are you sure that this channel should be deleted? You won't be able to restore it.").then(() => {
      this.heads[i].channelModes[j].channels.splice(k, 1);
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
  public addChannelMode(i) {
    this.heads[i].channelModes.push(this.createChannelMode());
    this.save();
  }
  public addChannel(i, j) {
    let n;
    if (this.heads[i].channelModes[j].channels && this.heads[i].channelModes[j].channels.length > 0) {
      n = this.heads[i].channelModes[j].channels[this.heads[i].channelModes[j].channels.length - 1].number + 1;
    } else {
      n = 1;
    }
    this.heads[i].channelModes[j].channels.push(this.createChannel(n));
    this.save();
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

  public save() {
    this.store.set("heads", this.heads);
  }
  public change(field, i, j = 0, k = 0) {
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
          }
          this.save();
        }
      }, () => undefined);
    } else {
      smalltalkSelect.select(title, message, options, {}).then((res) => {
        this.heads[i].channelModes[j].channels[k].type = options.filter((option) => option.value == res)[0].name;
        this.heads[i].channelModes[j].channels[k].length = options.filter((option) => option.value == res)[0].length;
        this.save();
      }, () => undefined);
    }
  }
}
