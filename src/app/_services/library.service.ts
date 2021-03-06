import { Injectable } from "@angular/core";
import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";
import * as request from "request";
import * as rimraf from "rimraf";
import { DialogService } from "./dialog.service";
import { StatusbarService } from "./statusbar.service";
import { Product } from "../_entities/product";

@Injectable({
    providedIn: "root",
})
export class LibraryService {
    private libraryFolder = path.join((electron.app || electron.remote.app).getPath("userData"), "library");
    private libraryPath = path.join(this.libraryFolder, "library.json");
    private tempStoragePath = path.join((electron.app || electron.remote.app).getPath("userData"), "library.tmp");
    private productCache: Product[] = [];
    public resources: { gobos: { [key: string]: string } };
    public readonly supportedLibraryVersion = "1.0.0";

    constructor(
        private statusbarService: StatusbarService,
        private dialogService: DialogService,
    ) { }

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
        this.productCache = [];
        const data = JSON.parse(
            fs.readFileSync(this.libraryPath).toString(),
        );
        if (data.version !== this.supportedLibraryVersion) {
            this.dialogService.alert("Error", `The installed library version is not compatible with this version of AGLight. The supported version is ${this.supportedLibraryVersion} but the library is version ${data.version}. Please update the library / AGLight`);
            return;
        }
        this.productCache.push(...data.fixtures);
        this.resources = data.resources;
        this.statusbarService.setItem({
            name: "Library loaded",
            icon: "check",
            id: "library",
            dropup: {
                title: "Library status",
                content: `Library (v${this.supportedLibraryVersion}) loaded succcessfully. There are ${this.productCache.length} fixtures available.`,
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
        if (!fs.existsSync(this.libraryFolder)) {
            fs.mkdirSync(this.libraryFolder, { recursive: true });
        }
        this.statusbarService.setItem({
            name: "Downloading library: 0%",
            icon: "spinner fa-spin",
            id: "library",
        });
        let receivedBytes = 0;
        let totalBytes = 0;

        const req = request({
            method: "GET",
            uri: "https://open-fixture-library.org/download.aglight",
        });

        const out = fs.createWriteStream(this.tempStoragePath);
        req.pipe(out);

        req.on("response", (data) => {
            // Change the total bytes value to get progress later.
            totalBytes = parseInt(data.headers["content-length"], 10);
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
            this.dialogService.alert("Library status", "The library couldn't be updated. However, this is no problem. The cache version will be used.");
            this.loadIntoCache();
        });
    }
}
