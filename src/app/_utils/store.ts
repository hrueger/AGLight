const electron = require("electron");
const path = require("path");
const fs = require("fs");

class Store {
    private path: string;
    private data: any[];
    constructor(opts) {
        const userDataPath = (electron.app || electron.remote.app).getPath("userData");
        this.path = path.join(userDataPath, opts.configName + ".json");
        this.data = parseDataFile(this.path, opts.defaults);
    }

    public get(key) {
        return this.data[key];
    }

    public set(key, val) {
        this.data[key] = val;
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (error) {
    return defaults;
  }
}

export { Store };
