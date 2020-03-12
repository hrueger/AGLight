import { Injectable } from "@angular/core";
import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";
import * as rimraf from "rimraf";
import * as unzipper from "unzipper";
import * as request from "request";
import { StatusbarService } from "./statusbar.service";
import { Product } from "../_entities/product";

@Injectable({
    providedIn: "root",
})
export class LibraryService {
    private tempStoragePath = path.join((electron.app || electron.remote.app).getPath("userData"), "temp.zip");
    private libraryPath = path.join((electron.app || electron.remote.app).getPath("userData"), "library");
    private productCache: Product[] = [];

    constructor(private statusbarService: StatusbarService) {}

    public getProducts(): Product[] {
        return this.productCache;
    }

    public getProduct(name): Product {
        const f = this.productCache.filter((fixture) => fixture.name == name);
        if (f && f[0]) {
            return f[0];
        }
    }

    public loadIntoCache() {
        this.statusbarService.setItem({
            name: "Loading fixtures",
            icon: "spinner fa-spin",
            id: "library",
        });
        if (!fs.existsSync(path.join(this.libraryPath, "manufacturers.json"))) {
            this.sync();
        }
        const manufacturerCache = JSON.parse(fs.readFileSync(path.join(this.libraryPath, "manufacturers.json")).toString());
        this.walk(this.libraryPath, (err, files) => {
            files.forEach((file) => {
                const content = JSON.parse(fs.readFileSync(file).toString());
                content.manufacturer = manufacturerCache[content.manufacturerKey];
                this.productCache.push(content as Product);
            });
            this.statusbarService.setItem({
                name: "Library loaded",
                icon: "check",
                id: "library",
                dropup: {
                    title: "Library status",
                    content: `Library loaded succcessfully. There are ${this.productCache.length} fixtures from ${Object.keys(manufacturerCache).length} manufacturers available.`,
                    actions: [
                        {
                            text: "Update",
                            type: "primary",
                            service: "libraryService",
                            action: "sync"
                        }
                    ]
                }
            });
        });
    }

    public sync() {
        this.statusbarService.setItem({
            name: "Downloading library: 0%",
            icon: "spinner fa-spin",
            id: "library",
        });
        let receivedBytes = 0;
        let totalBytes = 0;

        const req = request({
            method: 'GET',
            uri: "https://open-fixture-library.org/download.ofl"
        });

        const out = fs.createWriteStream(this.tempStoragePath);
        req.pipe(out);

        req.on('response', (data) => {
            // Change the total bytes value to get progress later.
            totalBytes = parseInt(data.headers['content-length'], undefined);
        });

        req.on('data', (chunk) => {
            // Update the received bytes
            receivedBytes += chunk.length;
            this.statusbarService.setItem({
                name: `Downloading library: ${Math.ceil(receivedBytes * 100 / totalBytes)}%`,
                icon: "spinner fa-spin",
                id: "library",
            });
        });

        req.on('end', () => {
            this.statusbarService.setItem({
                name: `Unzipping library`,
                icon: "spinner fa-spin",
                id: "library",
            });
            this.unzip();
        });
    }
    private unzip() {
        if (fs.existsSync(this.libraryPath)) {
            rimraf.sync(this.libraryPath);
        }
        fs.mkdirSync(this.libraryPath);
        fs.createReadStream(this.tempStoragePath).pipe(unzipper.Extract({ path: this.libraryPath }).on("finish", () => {
            rimraf.sync(this.tempStoragePath);
            this.statusbarService.setItem({
                name: `Library updated successfully!`,
                icon: "check",
                id: "library",
            });
            const that = this;
            setTimeout(() => {
                that.loadIntoCache();
            }, 2000);
        }));
    }

    private walk(dir, done) {
        const that = this;
        let results = [];
        fs.readdir(dir, (err, list) => {
            if (err) return done(err);
            let i = 0;
            (function next() {
                let file = list[i++];
                if (!file) return done(null, results);
                file = path.resolve(dir, file);
                fs.stat(file, (er, stat) => {
                    if (stat && stat.isDirectory()) {
                        that.walk(file, (e, res) => {
                            results = results.concat(res);
                            next();
                        });
                    } else {
                        results.push(file);
                        next();
                    }
                });
            })();
        });
    }
}
