const electron = require("electron");
const path = require("path");
const fs = require("fs");

class Store {
    private path: string;
    private data: any[];
    constructor(opts: {
      configName: string,
      defaults: any
    }) {
        const userDataPath = (electron.app || electron.remote.app).getPath("userData");
        this.path = path.join(userDataPath, opts.configName + ".json");
        this.data = parseDataFile(this.path, opts.defaults);
    }

    public get() {
        return this.data;
    }

    public set(val) {
        this.data = val;
        const data = JSON.stringify(this.data);
        fs.writeFileSync(this.path, data);
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
