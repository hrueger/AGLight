import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as smalltalk from "smalltalk";
import { effects } from "../../_ressources/effects";
import { ShowService } from "../../_services/show.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";
import { Store } from "../../_utils/store";

@Component({
  selector: "app-heads",
  styleUrls: ["./heads.component.scss"],
  templateUrl: "./heads.component.html",
})
export class HeadsComponent implements OnInit {
  public searchValue: string = "";
  public usedHeads: any[] = [];
  public displayHeads: any[];
  public heads: any[];
  private store: Store;

  constructor(private showService: ShowService, private router: Router) {}

  public ngOnInit() {
    this.store = new Store({
      configName: "heads",
      defaults: {
        heads: [],
      },
    });
    this.heads = this.store.get();
    this.displayHeads = this.heads;
    this.sortDisplayHeads();
    this.usedHeads = this.showService.getData("usedHeads");
    /*const that = this;
    window.setTimeout(() => {
      that.ngOnInit();
      console.log("Updated!");
    }, 1500)*/
  }

  public search(e) {
    this.displayHeads = this.heads.filter((h) => {
      const toSearch = h.name.toLowerCase() + " " + h.manufacturer.toLowerCase();
      let notFound: boolean = false;
      for (const q of e.split(" "))  {
        if (toSearch.indexOf(q.toLowerCase()) == -1) {
            notFound = true;
        }
      }
      return (notFound ? false : true);
    });
    this.sortDisplayHeads();
  }

  public addHead(head) {
    const options = this.getSelectOptionsFromHead(head);
    smalltalk.prompt("Number of heads", "Type in the number of heads you want to add:", 2).then((n) => {
      smalltalkSelect.select("Channel mode",
      "Choose the channel mode to use for this head(s)", options, {}).then((channelMode) => {
        this.usedHeads.push({
          channelMode,
          displayName: "Change this",
          manufacturer: head.manufacturer,
          name: head.name,
          number: n,
          startAddress: 1,
        });
        this.sortUsedHeads();
        this.save();
      }, () => undefined);
    }, () => undefined);
  }

  public getAffectedChannel(i: number, j: number, k: number) {
    const c = this.usedHeads[i].channelMode.channels.filter(
      (channel) => channel.number == this.usedHeads[i].effects[j].affects[k].channel);
    if (c && c[0]) {
        return `${c[0].number}: ${c[0].name}`;
      } else {
        return "Please select";
      }
  }

  public addEffect(i: number) {
    const groups = this.getSelectOptionsFromEffectGroups();
    smalltalkSelect.select("Add effect",
      "Choose the effect group to see the effects listed in there", groups, {}).then((g: string) => {
        const e = this.getSelectOptionsFromEffects(g);
        smalltalkSelect.select("Add effect",
          "Choose the effect to add to this head", e, {}).then((res) => {
            if (!this.usedHeads[i].effects) {
              this.usedHeads[i].effects = [];
            }
            const effect = effects.filter((f) => f.name == res)[0];
            // tslint:disable-next-line: no-string-literal
            effect["guid"] = this.genGUID();
            this.usedHeads[i].effects.push(effect);
            this.save();
          }, () => undefined);
      }, () => undefined);
  }

  public configureEffect(i: number, j: number) {
    this.router.navigate(["configureEffect", i, j]);
  }

  public change(field: string, i: number, j: number = null, k: number = null) {
    let val;
    let title;
    let message;
    let selectBox = false;
    let options = [];
    switch (field) {
      case "number":
        val = this.usedHeads[i].number;
        title = "Change number of heads";
        message = "Enter the number of the heads:";
        break;
      case "startAddress":
        val = this.usedHeads[i].startAddress;
        title = "Change start address";
        message = "Enter the head's start address:";
        break;
      case "displayName":
        val = this.usedHeads[i].displayName;
        title = "Change display name";
        message = "Enter the head's display name:";
        break;
      case "channelMode":
        val = null;
        title = "Choose channel mode";
        message = "Choose the channel mode of that head:";
        selectBox = true;
        options = this.getSelectOptionsFromHead(
          this.heads.filter((h) => h.name == this.usedHeads[i].name)
          .filter((h) => h.manufacturer == this.usedHeads[i].manufacturer)[0]);
        break;
      case "affectedChannel":
        val = null;
        title = "Choose affected channel";
        message = "Choose the channel which this effect should affect:";
        selectBox = true;
        options = this.getPossibleChannelsToAffect(i, j, k);
        break;

    }
    if (!selectBox) {
      smalltalk.prompt(title, message, val).then((res) => {
        if (res) {
          switch (field) {
            case "number":
              this.usedHeads[i].number = parseInt(res, undefined);
              break;
            case "displayName":
              this.usedHeads[i].displayName = res;
              break;
            case "startAddress":
              this.usedHeads[i].startAddress = parseInt(res, undefined);
              this.sortUsedHeads();
              break;
          }
          this.save();
        }
      }, () => undefined);
    } else {
      if (options.length == 0) {
        if (field == "affectedChannel") {
          smalltalk.alert("Error", "Unfortunately, this effect can't be applied to this head(s).");
        }
      } else {
        smalltalkSelect.select(title, message, options, {}).then((res) => {
          if (res) {
            switch (field) {
              case "channelMode":
                this.usedHeads[i].channelMode = res;
                break;
              case "affectedChannel":
                this.usedHeads[i].effects[j].affects[k].channel = res;
            }
          }
          this.save();
        }, () => undefined);
      }
    }
  }

  public deleteHead(i: number) {
    smalltalk.confirm("Delete head(s)",
    "Are you sure that this head(s) should be deleted? You won't be able to restore it.").then(() => {
      this.usedHeads.splice(i, 1);
      this.save();
    }, () => undefined);
  }

  public deleteEffect(i: number, j: number) {
    smalltalk.confirm("Delete effect",
    "Are you sure that this effect should be deleted? You won't be able to restore it.").then(() => {
      this.usedHeads[i].effects.splice(j, 1);
      this.save();
    }, () => undefined);
  }

  public save() {
    // console.log("saving");
    this.showService.setData("usedHeads", this.usedHeads);
  }

  private sortUsedHeads() {
    this.usedHeads.sort((a, b) => {
        if (a.startAddress > b.startAddress) {
          return 1;
        }
        if (a.startAddress < b.startAddress) {
          return -1;
        }
        return 0;
      });
  }

  private getPossibleChannelsToAffect(i: number, j: number, k: number) {
    // console.log(this.usedHeads[i].channelMode.channels
    //  .filter((channel) => {
        // console.info(channel);
        // console.log(!channel.effect);
        // console.log(channel.type);
        // console.log(this.usedHeads[i].effects[j].affects[k].name);
    //    return !channel.effect && channel.type == this.usedHeads[i].effects[j].affects[k].name;
    //  }));

    return this.usedHeads[i].channelMode.channels
    .filter((channel) => !channel.effect && channel.type == this.usedHeads[i].effects[j].affects[k].name)
    .map((channel) => {
      return {
        description: channel.name,
        name: channel.name,
        value: channel.number,
      };
    });
  }

  private getSelectOptionsFromHead(head: any) {
    return head.channelModes.map((channelMode) => {
      const n = channelMode.channels.reduce((a, b) => a + b.length, 0);
      return {
        description: `This mode will use ${n} channel(s).`,
        name: `${n} channel mode`,
        value: channelMode,
      };
    });
  }

  private getSelectOptionsFromEffects(group: string) {
    // ToDo: check if effect can be applied to head
    return effects.filter((e) => {
      return e.group == group;
      })
      .map((effect) => {
        let affects = "";
        effect.affects.forEach((a) => {
          affects += `${a.name}<br>`;
        });
        return {
          description: `This effect will affect the following channels:<br>${affects}`,
          name: effect.name,
          value: effect.name,
        };
      });
  }

  private getSelectOptionsFromEffectGroups() {
    return effects.filter((e, index, self) => {
      return index === self.findIndex((t) => (
        t.group === e.group
      ));
    }).map((effect) => {
      return {
        description: `See all effects listed in group '${effect.group}'.`,
        name: effect.group[0].toUpperCase() + effect.group.slice(1),
        value: effect.group,
      };
    });
  }

  private sortDisplayHeads() {
    this.displayHeads.sort((a, b) => {
      if ([a.manufacturer, b.manufacturer].sort()[0] == b.manufacturer) {
        return 1;
      }
      if ([a.manufacturer, b.manufacturer].sort()[0] == a.manufacturer) {
        return -1;
      }
      if ([a.name, b.name].sort()[0] == a.name) {
        return 1;
      }
      if ([a.name, b.name].sort()[0] == b.name) {
        return -1;
      }
      return 0;
    });
  }

  private genGUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      // tslint:disable-next-line: one-variable-per-declaration no-bitwise
      const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
