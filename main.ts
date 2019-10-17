import { Color, Titlebar } from "custom-electron-titlebar";
import { app, BrowserWindow, globalShortcut, Menu, screen } from "electron";
import * as path from "path";
import * as url from "url";

let win;
let serve;
const args = process.argv.slice(1);
serve = args.some(val => val === "--serve");

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    frame: false,
    height: size.height,
    show: false,
    webPreferences: { nodeIntegration: true },
    width: size.width,
    x: 0,
    y: 0,
  });
  win.maximize();
  win.show();
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
  createMenu(win);
  globalShortcut.register("CommandOrControl+Shift+R", () => {
    win.reload();
  });
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    win.webContents.toggleDevTools();
  });

  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on("ready", createWindow);

  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
}

function createMenu(win) {
  const template = [
    {
      label: "Über",
      role: "help",
      submenu: [
        {
          label: "Made with ❤ and Electron",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://electronjs.org");
          },
        },
        {
          label: "Über",
          click: async () => {
            const { dialog } = require("electron");
            dialog.showMessageBox(win, {
              message: "© 2019, Hannes Rüger",
              title: "Über den Pistenführerscheingenerator",
            });
          },
        },
      ],
    },
  ];
  // @ts-ignore
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
