import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as electron from "electron";
import * as path from "path";
import * as smalltalk from "smalltalk";
import * as db from "typeorm";
import { Channel } from "../../_entities/channel";
import { ChannelMode } from "../../_entities/channelMode";
import { Fixture } from "../../_entities/fixture";
import { Head } from "../../_entities/head";
import { Step } from "../../_entities/step";
import { Widget } from "../../_entities/widget";
import { effects } from "../../_ressources/effects";
import { ShowService } from "../../_services/show.service";
import { LibraryService } from "../../_services/library.service";
import * as smalltalkSelect from "../../_utils/smalltalk-select";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { shell } from "electron";

@Component({
  selector: "app-fixtures",
  styleUrls: ["./fixtures.component.scss"],
  templateUrl: "./fixtures.component.html",
})
export class FixturesComponent implements OnInit {
  public searchValue: string = "";
  public fixtures: Fixture[] = [];
  public displayHeads: any[];
  public heads: any[];
  public currentHead: any;

  constructor(private showService: ShowService, private modalService: NgbModal, private libraryService: LibraryService) {}

  public async ngOnInit() {

    this.heads = this.getHeads();
    this.displayHeads = this.heads;
    this.sortDisplayHeads();
    this.fixtures = await (this.showService.connection.getRepository(Fixture).find());
    /*const that = this;
    window.setTimeout(() => {
      that.ngOnInit();
      console.log("Updated!");
    }, 1500)*/
  }

  public getHeads(): any[] {
    return this.libraryService.getFixtures();
  }

  public search(e) {
    if (this.heads) {
        this.displayHeads = this.heads.filter((h) => {
        const toSearch = h.name.toLowerCase() + " " + h.manufacturer.name.toLowerCase();
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
  }

  public openBrowser(event: Event, url: string) {
    event.preventDefault();
    shell.openExternal(url);
  }

  public addHead(head: Head, content) {
    this.currentHead = head;
    this.modalService.open(content, {size: "xl"}).result.then((result) => {
      // console.log(result);
    }, () => {
      //
    });
    return;
    const options = this.getSelectOptionsFromHead(head);
    smalltalk.prompt("Number of heads", "Type in the number of heads you want to add:", 2).then((n) => {
      smalltalkSelect.select("Channel mode",
      "Choose the channel mode to use for this head(s)", options, {}).then((channelMode: ChannelMode) => {
        channelMode.channels.map((channel) => {
          channel.id = undefined;
          channel.steps = channel.steps.map((step) => {
            step.id = undefined;
            return step;
          });
          return channel;
        });
        const fixture = new Fixture("Change this", n, 1, head, channelMode.channels);
        this.fixtures.push(fixture);
        this.sortUsedHeads();
        this.save();
      }, () => undefined);
    }, () => undefined);
  }

  public getAffectedChannel(i: number, j: number, k: number) {
    /* const c = this.fixtures[i].channelMode.channels.filter(
      (channel) => channel.startAddress == this.fixtures[i].effects[j].affects[k].channel);
    if (c && c[0]) {
        return `${c[0].startAddress}: ${c[0].name}`;
      } else {
        return "Please select";
      } */
  }

  public addEffect(i: number) {
    return;
    /*
    const groups = this.getSelectOptionsFromEffectGroups();
    smalltalkSelect.select("Add effect",
      "Choose the effect group to see the effects listed in there", groups, {}).then((g: string) => {
        const e = this.getSelectOptionsFromEffects(g);
        smalltalkSelect.select("Add effect",
          "Choose the effect to add to this head", e, {}).then((res) => {
            if (!this.fixtures[i].effects) {
              this.fixtures[i].effects = [];
            }
            const effect = effects.filter((f) => f.name == res)[0];
            this.fixtures[i].effects.push(effect);
            this.save();
          }, () => undefined);
      }, () => undefined);*/
  }

  public configureEffect(i: number, j: number) {
    // this.router.navigate(["configureEffect", i, j]);
  }

  public change(field: string, i: number, j: number = null, k: number = null) {
    let val;
    let title;
    let message;
    let selectBox = false;
    let options = [];
    switch (field) {
      case "number":
        val = this.fixtures[i].number;
        title = "Change number of heads";
        message = "Enter the number of the heads:";
        break;
      case "startAddress":
        val = this.fixtures[i].startAddress;
        title = "Change start address";
        message = "Enter the head's start address:";
        break;
      case "displayName":
        val = this.fixtures[i].displayName;
        title = "Change display name";
        message = "Enter the head's display name:";
        break;
      case "channelMode":
        val = null;
        title = "Choose channel mode";
        message = "Choose the channel mode of that head:";
        selectBox = true;
        options = this.getSelectOptionsFromHead(this.heads.filter((h) => (h.name == this.fixtures[i].head.name))
          .filter((h) => h.manufacturer == this.fixtures[i].head.manufacturer)[0]);
        break;
      case "affectedChannel":
        val = null;
        title = "Choose affected channel";
        message = "Choose the channel which this effect should affect:";
        selectBox = true;
        // options = this.getPossibleChannelsToAffect(i, j, k);
        break;

    }
    if (!selectBox) {
      smalltalk.prompt(title, message, val).then((res) => {
        if (res) {
          switch (field) {
            case "number":
              this.fixtures[i].number = parseInt(res, undefined);
              break;
            case "displayName":
              this.fixtures[i].displayName = res;
              break;
            case "startAddress":
              this.fixtures[i].startAddress = parseInt(res, undefined);
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
        smalltalkSelect.select(title, message, options, {}).then((res: ChannelMode) => {
          if (res) {
            switch (field) {
              case "channelMode":
                res.channels.map((channel) => { channel.id = undefined; return channel; });
                this.fixtures[i].channels = res.channels;
                break;
              case "affectedChannel":
                // this.fixtures[i].effects[j].affects[k].channel = res;
            }
          }
          this.save();
        }, () => undefined);
      }
    }
  }

  public deleteFixture(i: number) {
    smalltalk.confirm("Delete fixture(s)",
    "Are you sure that this fixture(s) should be deleted? You won't be able to restore it.").then(async () => {
      await this.showService.connection.getRepository(Fixture).remove(this.fixtures[i]);
      this.fixtures.splice(i, 1);
      this.save();
    }, () => undefined);
  }

  public deleteEffect(i: number, j: number) {
    smalltalk.confirm("Delete effect",
    "Are you sure that this effect should be deleted? You won't be able to restore it.").then(() => {
      // this.fixtures[i].effects.splice(j, 1);
      this.save();
    }, () => undefined);
  }

  public save() {
    // console.log("saving");
    this.showService.connection.getRepository(Fixture).save(this.fixtures);
  }

  private sortUsedHeads() {
    this.fixtures.sort((a, b) => {
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

    /* return this.fixtures[i].channelMode.channels
    .filter((channel) => !channel.effect && channel.type == this.fixtures[i].effects[j].affects[k].name)
    .map((channel) => {
      return {
        description: channel.name,
        name: channel.name,
        value: channel.startAddress,
      };
    }); */
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
      if (a && b && a.name && b.name && a.manufacturer && b.manufacturer && a.manufacturer.name && b.manufacturer.name) {
        if ([a.manufacturer.name, b.manufacturer.name].sort()[0] == b.manufacturer.name) {
          return 1;
        }
        if ([a.manufacturer.name, b.manufacturer.name].sort()[0] == a.manufacturer.name) {
          return -1;
        }
        if ([a.name, b.name].sort()[0] == a.name) {
          return 1;
        }
        if ([a.name, b.name].sort()[0] == b.name) {
          return -1;
        }
        return 0;
      }
    });
  }
}
