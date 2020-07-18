/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-var-requires */
import {
    app, BrowserWindow, globalShortcut, ipcMain,
} from "electron";
import { initSplashScreen, OfficeTemplate } from "electron-splashscreen";
import * as path from "path";
import * as url from "url";

let win: BrowserWindow;
let viewerWindow;
const args = process.argv.slice(1);
const serve = args.some((val) => val === "--serve");

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        frame: false,
        icon: path.join(__dirname, "src/assets/icons/favicon.png"),
        show: false,
        webPreferences: { nodeIntegration: true },
        x: 0,
        y: 0,
    });
    win.maximize();
    win.hide();
    if (serve) {
        require("electron-reload")(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`),
        });
        win.loadURL("http://localhost:4200");
    } else {
        win.loadURL(
            url.format({
                pathname: path.join(__dirname, "dist/index.html"),
                protocol: "file:",
                slashes: true,
            }),
        );
    }
    globalShortcut.register("CommandOrControl+Shift+R", () => {
        win.reload();
    });
    globalShortcut.register("CommandOrControl+Shift+I", () => {
        win.webContents.toggleDevTools();
    });

    if (serve) {
    // win.webContents.openDevTools();
    }
    const hideSplashscreen = initSplashScreen({
        brand: "H. Rüger",
        color: "#f1c40f",
        height: 300,
        logo: path.join(__dirname, "src/assets/icons/favicon.png"),
        mainWindow: win,
        productName: "AGLight",
        text: "Initializing ...",
        url: OfficeTemplate,
        website: "https://github.com/hrueger/AGLight",
        width: 500,
    });

    ipcMain.on("ready", () => {
        hideSplashscreen();
        win.maximize();
    });
    ipcMain.on("viewerEvent", (e, a, arg) => {
        switch (a) {
        case "viewerIsReady":
            win.webContents.send("viewerIsReady");
            break;
        case "showWindow":
            showViewerWindow();
            break;
        case "getFixtures":
            viewerWindow.webContents.send("getFixtures", arg);
            break;
        default:
            break;
        }
    });

    win.on("closed", () => {
        win = null;
    });
}

try {
    app.on("ready", createWindow);
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });

    app.on("activate", () => {
        if (win === null) {
            createWindow();
        }
    });
} catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
}

function showViewerWindow() {
    viewerWindow = new BrowserWindow({
        frame: false,
        parent: win,
        webPreferences: { nodeIntegration: true },
    });
    if (serve) {
        require("electron-reload")(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`),
        });
        viewerWindow.loadURL("http://localhost:4200/#/viewer");
        viewerWindow.webContents.openDevTools();
    } else {
        viewerWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, "dist/index.html#/viewer"),
                protocol: "file:",
                slashes: true,
            }),
        );
    }
}
