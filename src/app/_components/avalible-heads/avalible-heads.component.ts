import { Component } from "@angular/core";
import * as electron from "electron";
import * as path from "path";
import * as smalltalk from "smalltalk";
import * as db from "typeorm";
import { Channel } from "../../_entities/channel";
import { ChannelMode } from "../../_entities/channelMode";
import { Fixture } from "../../_entities/fixture";
import { Head } from "../../_entities/head";
import { Step } from "../../_entities/step";
import { channelTypes } from "../../_ressources/channel-types";
import { stepModes } from "../../_ressources/config-node-modes";
import * as smalltalkSelect from "../../_utils/smalltalk-select";

@Component({
  selector: "app-avalible-heads",
  styleUrls: ["./avalible-heads.component.scss"],
  templateUrl: "./avalible-heads.component.html",
})
export class AvalibleHeadsComponent {
  public heads: Head[] = [];
  public clipboard: any = [];
  public connection: db.Connection;

  public async ngOnInit() {
    let storagePath = (electron.app || electron.remote.app).getPath("userData");
    storagePath = path.join(storagePath, "heads.db");
    try {
      this.connection = await db.createConnection({
        database: storagePath,
        entities: [Head, Channel, ChannelMode, Step, Fixture],
        // logging: true,
        type: "sqlite",
      });
    } catch (err) {
      if (err.name === "AlreadyHasActiveConnectionError") {
        this.connection = db.getConnectionManager().get("default");
      } else {
        throw err;
      }
    }
    await this.connection.synchronize();
    this.heads = await this.connection.getRepository(Head).find();
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
    smalltalk.confirm("Delete head",
    "Are you sure that this head should be deleted? You won't be able to restore it.").then(async () => {
      await this.connection.getRepository(Head).remove(this.heads[i]);
      this.heads.splice(i, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannelMode(i: number, j: number) {
    smalltalk.confirm("Detele channel mode",
    "Are you sure that this channel mode should be deleted? You won't be able to restore it.").then(async () => {
      await this.connection.getRepository(ChannelMode).remove(this.heads[i].channelModes[j]);
      this.heads[i].channelModes.splice(j, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannel(i: number, j: number, k: number) {
    smalltalk.confirm("Delete channel",
    "Are you sure that this channel should be deleted? You won't be able to restore it.").then(async () => {
      await this.connection.getRepository(Channel).remove(this.heads[i].channelModes[j].channels[k]);
      this.heads[i].channelModes[j].channels.splice(k, 1);
      this.save();
    }, () => undefined);
  }
  public deleteChannelStep(i: number, j: number, k: number, l: number) {
    smalltalk.confirm("Delete step",
    "Are you sure that this step should be deleted? You won't be able to restore it.").then(async () => {
      await this.connection.getRepository(Step).remove(this.heads[i].channelModes[j].channels[k].steps[l]);
      this.heads[i].channelModes[j].channels[k].steps.splice(l, 1);
      this.save();
    }, () => undefined);
  }

  public addHead() {
    this.heads.push(new Head("Unnamed Head", "Unnamed Company", [this.createChannelMode()]));
    this.save();
  }
  public addChannelMode(i: number) {
    this.heads[i].channelModes.push(this.createChannelMode());
    this.save();
  }
  public addChannel(i: number, j: number) {
    let n;
    if (this.heads[i].channelModes[j].channels && this.heads[i].channelModes[j].channels.length > 0) {
      n = this.heads[i].channelModes[j].channels[this.heads[i].channelModes[j].channels.length - 1].startAddress + 1;
    } else {
      n = 1;
    }
    this.heads[i].channelModes[j].channels.push(this.createChannel(n));
    this.save();
  }
  public addChannelStep(i: number, j: number, k: number) {
    let start = 0;
    if (!this.heads[i].channelModes[j].channels[k].steps) {
      this.heads[i].channelModes[j].channels[k].steps = [];
    } else {
      start = 254;
    }
    this.heads[i].channelModes[j].channels[k].steps.push(this.createStep(start));
    this.sortSteps(i, j, k);
  }
  public autoFillSteps(i: number, j: number, k: number) {
    smalltalk.prompt("Autofill steps", "How wide should each step be?").then((res) => {
      if (res) {
        res = parseInt(res, undefined);
        if (res > 0) {
          let start;
          const end = 255;
          if (this.heads[i].channelModes[j].channels[k].steps
            && this.heads[i].channelModes[j].channels[k].steps.length) {
            start = this.heads[i].channelModes[j].channels[k].steps.reduce((prev, curr) => {
              return prev.start < (curr.start + 1) ? prev : curr;
            }).start + 2;
          } else {
            start = 0;
          }
          let counter = start;
          while (counter < end) {
            this.heads[i].channelModes[j].channels[k].steps.push(
              this.createStep(counter));
            counter += res;
          }
        }
        this.save();
      }
    });
  }

  public createChannelMode() {
    return new ChannelMode([this.createChannel()]);
  }
  public createChannel(n: number = 1) {
    const channel = new Channel(n, "Please select", "Unnamed channel", 1, [this.createStep(1)]);
    return channel;
  }
  public createStep(start) {
    return new Step(start, "Equal mode", "Unnamed step");
  }

  public copyChannelSteps(i: number, j: number, k: number) {
    this.clipboard = this.heads[i].channelModes[j].channels[k].steps;
  }
  public pasteChannelSteps(i: number, j: number, k: number) {
    smalltalk.confirm("Paste channel steps",
    "Are you sure that the steps sould be pasted here? You won't be able to undo it.").then(() => {
      if (!this.heads[i].channelModes[j].channels[k].steps) {
        this.heads[i].channelModes[j].channels[k].steps = [];
      }
      this.heads[i].channelModes[j].channels[k].steps =
        this.heads[i].channelModes[j].channels[k].steps.concat(this.clipboard);
      this.clipboard = [];
      this.save();
    }, () => undefined);
  }

  public save() {
    this.connection.getRepository(Head).save(this.heads);
    console.log("saved");
  }

  public async ngOnDestroy() {
    if (this.connection) {
      await this.connection.close();
    }
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
        val = this.heads[i].channelModes[j].channels[k].startAddress;
        title = "Edit channel number";
        message = "Enter the channel number:";
        break;

      case "start":
        val = this.heads[i].channelModes[j].channels[k].steps[l].start;
        title = "Edit step start value";
        message = "Enter the start value of that step (0 - 255):";
        break;
      case "stepName":
        val = this.heads[i].channelModes[j].channels[k].steps[l].name;
        title = "Edit step name";
        message = "Enter the name of that step:";
        break;
      case "stepMode":
        val = this.heads[i].channelModes[j].channels[k].steps[l].mode;
        title = "Select step mode";
        message = "Select the mode of that step:";
        selectBox = true;
        options = stepModes;
        break;
      case "stepType":
        return;
        val = this.heads[i].channelModes[j].channels[k].steps[l].mode;
        title = "Select step mode";
        message = "Select the mode of that step:";
        selectBox = true;
        options = stepModes;
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
              this.heads[i].channelModes[j].channels[k].startAddress = parseInt(res, undefined);
              this.sortChannels(i, j);
              break;

            case "start":
              this.heads[i].channelModes[j].channels[k].steps[l].start = parseInt(res, undefined);
              this.sortSteps(i, j, k);
              break;
            case "stepName":
              this.heads[i].channelModes[j].channels[k].steps[l].name = res;
              break;
          }
          this.save();
        }
      }, () => undefined);
    } else {
      smalltalkSelect.select(title, message, options, {}).then((res) => {
        if (res) {
          switch (field) {
            case "stepMode":
              this.heads[i].channelModes[j].channels[k].steps[l].mode =
              options.filter((o) => o.value == res)[0].name;
              break;
            case "stepType":
              this.heads[i].channelModes[j].channels[k].steps[l].mode =
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

  private sortSteps(i: number, j: number, k: number) {
    this.heads[i].channelModes[j].channels[k].steps =
      this.heads[i].channelModes[j].channels[k].steps.sort((a, b) => {
        if (a.start > b.start) {
          return 1;
        }
        if (a.start < b.start) {
          return -1;
        }
        return 0;
    });
  }
  private sortChannels(i: number, j: number) {
    this.heads[i].channelModes[j].channels =
      this.heads[i].channelModes[j].channels.sort((a, b) => {
        if (a.startAddress > b.startAddress) {
          return 1;
        }
        if (a.startAddress < b.startAddress) {
          return -1;
        }
        return 0;
    });
  }
}
