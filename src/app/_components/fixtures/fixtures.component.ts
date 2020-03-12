import { Component, OnInit } from "@angular/core";
import * as smalltalk from "smalltalk";
import { Fixture } from "../../_entities/fixture";
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

  constructor(private showService: ShowService, private modalService: NgbModal, private libraryService: LibraryService) { }

  public async ngOnInit() {

    this.heads = this.getHeads();
    this.displayHeads = this.heads;
    this.sortDisplayHeads();
    this.fixtures = await (this.showService.connection.getRepository(Fixture).find());
    for (const fixture of this.fixtures) {
      fixture.product = this.libraryService.getProduct(fixture.name);
    }
    /*const that = this;
    window.setTimeout(() => {
      that.ngOnInit();
      console.log("Updated!");
    }, 1500)*/
  }

  public getHeads(): any[] {
    return this.libraryService.getProducts();
  }

  public getChannelNumber(fixture) {
    return fixture.product.modes.filter((f) => f.name == fixture.channelMode)[0].channels.length;
  }

  public search(e) {
    if (this.heads) {
      this.displayHeads = this.heads.filter((h) => {
        const toSearch = (h && h.name ? h.name.toLowerCase() : "") + " " +
          (h && h.manufacturer && h.manufacturer.name ? h.manufacturer.name.toLowerCase() : "");
        let notFound: boolean = false;
        for (const q of e.split(" ")) {
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

  public addHead(head, content) {
    this.currentHead = head;
    this.modalService.open(content, { size: "xl" }).result.then((result) => {
      smalltalk.prompt("Number of heads", "Type in the number of heads you want to add:", 2).then((n) => {
        const fixture = new Fixture("Change this", n, 1, result.fixture.name, result.mode.name);
        fixture.product = this.libraryService.getProduct(result.fixture.name);
        this.fixtures.push(fixture);
        this.sortUsedHeads();
        this.save();
      }, () => undefined);
    }, () => {
      //
    });
  }

  public change(field: string, i: number) {
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
        options = this.getSelectOptionsFromHead(this.fixtures[i]);
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
      smalltalkSelect.select(title, message, options, {}).then((res: string) => {
        if (res) {
          this.fixtures[i].channelMode = res.name;
        }
        this.save();
      }, () => undefined);
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

  private getSelectOptionsFromHead(fixture: Fixture) {
    return fixture.product.modes.map((channelMode) => {
      return {
        description: `This mode will use ${channelMode.channels.length == 1 ? "1 Channel" : `${channelMode.channels.length} Channels`}.`,
        name: `Use "${channelMode.name}" Mode
          (${channelMode.channels.length == 1 ? "1 Channel" : `${channelMode.channels.length} Channels`})`,
        value: channelMode,
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
