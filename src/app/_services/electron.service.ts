import { Injectable } from "@angular/core";
import * as childProcess from "child_process";
import { ipcRenderer, remote, webFrame } from "electron";
import * as fs from "fs";

@Injectable({
  providedIn: "root",
})
export class ElectronService {
  public ipcRenderer: typeof ipcRenderer;
  public webFrame: typeof webFrame;
  public remote: typeof remote;
  public childProcess: typeof childProcess;
  public fs: typeof fs;

  get isElectron() {
    return window && window.process && window.process.type;
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require("electron").ipcRenderer;
      this.webFrame = window.require("electron").webFrame;
      this.remote = window.require("electron").remote;
      this.childProcess = window.require("child_process");
      this.fs = window.require("fs");
    }
  }
}
