import { Injectable } from "@angular/core";
import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";
import * as request from "request";
import * as smalltalk from "smalltalk";
import * as rimraf from "rimraf";
import { StatusbarService } from "./statusbar.service";
import { Product } from "../_entities/product";

@Injectable({
    providedIn: "root",
})
export class LibraryService {
    private libraryPath = path.join((electron.app || electron.remote.app).getPath("userData"), "library/library.json");
    private tempStoragePath = path.join((electron.app || electron.remote.app).getPath("userData"), "library.tmp");
    private productCache: Product[] = [];

    constructor(private statusbarService: StatusbarService) { }

    public getProducts(): Product[] {
        return this.productCache;
    }

    public getProduct(name: string): Product {
        const f = this.productCache.filter((fixture) => fixture.name == name);
        if (f && f[0]) {
            return f[0];
        }
        return undefined;
    }

    public loadIntoCache(): void {
        this.statusbarService.setItem({
            name: "Loading fixtures",
            icon: "spinner fa-spin",
            id: "library",
        });
        if (!fs.existsSync(path.join(this.libraryPath))) {
            this.sync();
        }
        this.productCache.push(...JSON.parse(
            fs.readFileSync(this.libraryPath).toString(),
        ).fixtures);
        this.statusbarService.setItem({
            name: "Library loaded",
            icon: "check",
            id: "library",
            dropup: {
                title: "Library status",
                content: `Library loaded succcessfully. There are ${this.productCache.length} fixtures available.`,
                actions: [
                    {
                        text: "Update",
                        type: "primary",
                        service: "libraryService",
                        action: "sync",
                    },
                ],
            },
        });
    }

    public sync(): void {
        this.statusbarService.setItem({
            name: "Downloading library: 0%",
            icon: "spinner fa-spin",
            id: "library",
        });
        let receivedBytes = 0;
        let totalBytes = 0;

        const req = request({
            method: "GET",
            uri: "http://localhost:5000/download.aglight",
        });

        const out = fs.createWriteStream(this.tempStoragePath);
        req.pipe(out);

        req.on("response", (data) => {
            // Change the total bytes value to get progress later.
            totalBytes = parseInt(data.headers["content-length"], undefined);
        });

        req.on("data", (chunk) => {
            // Update the received bytes
            receivedBytes += chunk.length;
            this.statusbarService.setItem({
                // eslint-disable-next-line no-mixed-operators
                name: `Downloading library: ${Math.ceil(receivedBytes * 100 / totalBytes)}%`,
                icon: "spinner fa-spin",
                id: "library",
            });
        });

        req.on("end", () => {
            this.statusbarService.setItem({
                name: "Library downloaded!",
                icon: "check",
                id: "library",
            });
            fs.copyFileSync(this.tempStoragePath, this.libraryPath);
            rimraf.sync(this.tempStoragePath);
            setTimeout(() => {
                this.loadIntoCache();
            }, 2000);
        });

        req.on("error", (e: string) => {
            this.statusbarService.setItem({
                name: "Couldn't update library. No internet?",
                icon: "",
                id: "library",
                dropup: {
                    title: "Library status",
                    content: "The library couldn't be updated. However, this is no problem. The cache version will be used.",
                },
            });
            // eslint-disable-next-line no-console
            console.log(e);
            smalltalk.alert("Library status", "The library couldn't be updated. However, this is no problem. The cache version will be used.");
            this.loadIntoCache();
        });
    }
}
