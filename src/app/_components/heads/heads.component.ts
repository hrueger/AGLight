import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import * as smalltalk from "smalltalk";
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
  private store: Store;
  private heads: any[];
  private displayHeads: any[];

  constructor(private showService: ShowService, private cdr: ChangeDetectorRef) {}

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
    console.log(this.usedHeads);
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

  public change(field: string, i: number) {
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
      smalltalkSelect.select(title, message, options, {}).then((res) => {
        if (res) {
          switch (field) {
            case "channelMode":
              this.usedHeads[i].channelMode = res;
              break;
          }
        }
        this.save();
      }, () => undefined);
    }
  }

  public deleteHead(i: number) {
    smalltalk.confirm("Delete head(s)",
    "Are you sure that this head(s) should be deleted? You won't be able to restore it.").then(() => {
      this.usedHeads.splice(i, 1);
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

}
