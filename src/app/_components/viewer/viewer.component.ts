import { Component, OnInit } from "@angular/core";
import {
  Camera,
  Color3,
  Color4,
  Engine,
  FreeCamera,
  HemisphericLight,
  ICameraInput,
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Tools,
  Vector3,
} from "babylonjs";
import { ipcRenderer } from "electron";
import * as socketIo from "socket.io-client";
import { Channel } from "../../_entities/channel";
import { Fixture } from "../../_entities/fixture";
import { colors } from "../../_ressources/colors";

@Component({
  selector: "viewer",
  styleUrls: ["./viewer.component.scss"],
  templateUrl: "./viewer.component.html",
})
export class ViewerComponent implements OnInit {
  public showTipps: boolean = true;
  private readonly rainbowColors: string[] = ["red", "yellow", "green", "blue", "purple"];
  private readonly shadeColorFactor: number = 35;
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private scene: Scene;
  private camera: FreeCamera;
  private ground: Mesh;
  private light: HemisphericLight;

  private fixtures: Fixture[] = [];
  private numberOfFixtures: number = 0;

  private readonly fixtureSpace: number = 40;
  private readonly socketIoPort: number = 18909;

  private readonly maxLightMaterialOpacity = 0.5;

  public async ngOnInit() {
    ipcRenderer.send("viewerEvent", "viewerIsReady");
    const client = socketIo.connect(`http://localhost:${this.socketIoPort}`);
    client.on("update", (universe) => {
      universe.forEach((channelVal, channelNr) => {
        this.fixtures.forEach((f) => {
          let totalChannelLength = 0;
          f.channels.forEach((c) => {
            totalChannelLength += c.length;
          });
          if (f.startAddress <= channelNr && f.startAddress + totalChannelLength - 1 >= channelNr) {
            f.channels.forEach((c: Channel) => {
              if (f.startAddress + c.startAddress - 1 <= channelNr &&
                  f.startAddress + c.startAddress + c.length - 2 >= channelNr) {
                // if (value != 0) console.log("found fixture", f.displayName, "with", c.name);
                if (c.type == "Steps") {
                  c.steps.forEach((step, idx) => {
                    if (step.start <= channelVal && (!c.steps[idx + 1] || c.steps[idx + 1].start > channelVal)) {
                      if (this.colorNameToHex(step.name) == "rainbow") {
                        f.object.currentRainbowColorIndex = 0;
                        const that = this;
                        f.object.rainbowInterval = setInterval(() => {
                          f.object.currentRainbowColorIndex += 1;
                          if (f.object.currentRainbowColorIndex == that.rainbowColors.length) {
                            f.object.currentRainbowColorIndex = 0;
                          }
                          f.object.fixtureLight.material =
                            that.createMaterial(
                              that.color3FromHex(
                                that.colorNameToHex(that.rainbowColors[f.object.currentRainbowColorIndex]),
                              ),
                            that.maxLightMaterialOpacity);
                            }, 500);
                      } else {
                        if (f.object.rainbowInterval) {
                          clearInterval(f.object.rainbowInterval);
                        }
                        f.object.fixtureLight.material =
                        this.createMaterial(
                          this.color3FromHex(
                            this.colorNameToHex(step.name),
                          ),
                        this.maxLightMaterialOpacity);
                      }
                    }
                  });
                } else if (c.type == "Rotation") {
                  if (c.startAddress == f.startAddress) {
                    // tslint:disable-next-line: no-console
                    console.log("first one");
                  } else if (c.startAddress == f.startAddress + 1) {
                    // tslint:disable-next-line: no-console
                    console.log("second");
                  } else {
                    // tslint:disable-next-line: no-console
                    console.log("anders");
                  }
                } else {
                  // tslint:disable-next-line: no-console
                  console.log("non step channel found!", c);
                }
              }
            });
          }
        });
      });
    });

    ipcRenderer.on("getFixtures", (e, a) => {
      this.fixtures = a;
      this.canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
      this.engine = new Engine(this.canvas, true);
      this.createScene();
      this.camera.position = new Vector3(this.numberOfFixtures * this.fixtureSpace * 0.5, 60, -200);
      this.camera.rotation = this.vectorFromAngles(0, 0, 0);
      this.setupResizeListeners();
      this.setupKeyEvents();
      this.engine.runRenderLoop(() => this.scene.render());
    });
  }
  private createScene(): void {
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(0, 0, 0, 0);

    this.camera = new FreeCamera("Camera", new Vector3(0, 3, 0), this.scene);
    this.camera.attachControl(this.canvas, false);

    this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    this.ground = MeshBuilder.CreateGround("ground", {width: 600, height: 600}, this.scene);
    this.ground.material = this.createMaterial(new Color3(0.06, 0.06, 0.06));

    const centerbox = Mesh.CreateBox("centerbox", 1, this.scene);
    centerbox.position = new Vector3(0, 0, 0);

    this.fixtures.forEach((head, idx: number) => {
      this.createFixture(idx);
    });
  }

  private setupKeyEvents() {
    this.camera.inputs.removeByType("FreeCameraKeyboardMoveInput");
    this.camera.inputs.add(new FreeCameraKeyboardMoveInput());
    /*
    document.onkeydown = (e) => {
      switch (e.which || e.keyCode) {
        case 37: // left
          //e.preventDefault();
          //e.stopPropagation();
          //this.camera.position.y += this.cameraMoveFactor;
          //this.camera.updateUpVectorFromRotation = false;
          break;
        case 38: // up
          //e.preventDefault();
          //e.stopPropagation();
          break;

        case 39: // right
          //e.preventDefault();
          //e.stopPropagation();
          break;

        case 40: // down
          //e.preventDefault();
          //e.stopPropagation();
          break;

        default: return;
      }
    };
    */
  }

  private createFixture(headIdx: number) {
    const fixture = Mesh.CreateBox(`fixture_${Math.random().toString()}`, 6, this.scene, false);
    fixture.material = this.createMaterial(new Color3(12, 67, 238));
    fixture.position = new Vector3(this.fixtureSpace * this.numberOfFixtures, 10, 10);
    fixture.rotation = this.vectorFromAngles(0, -90, 90);
    const fixtureLight = Mesh.CreateCylinder(`fixtureLight_${Math.random().toString()}`,
      80, 0, 40, 64, 16, this.scene, false);
    fixtureLight.material =
      this.createMaterial(this.color3FromHex(this.colorNameToHex("white")), this.maxLightMaterialOpacity);
    fixtureLight.parent = fixture;
    fixtureLight.position.y -= 42;
    this.numberOfFixtures++;
    this.fixtures[headIdx].object = {
      fixture,
      fixtureLight,
    }; /*
    setTimeout(() => {
      this.heads[headIdx].viewer.fixtureLight.material =
      this.createMaterial(this.color3FromHex(this.colorNameToHex("green")), 0.2);
    }, 1000);*/
  }

  private createMaterial(color: Color3, alpha: number = 1, noRefection = true) {
    const m = new StandardMaterial(`material_${Math.random().toString()}`, this.scene);
    m.diffuseColor = color;
    m.alpha = alpha;
    if (noRefection) {
      m.specularColor = new Color3(0, 0, 0);
    }
    return m;
  }

  private setupResizeListeners() {
    const that = this;
    window.addEventListener("resize", () => {
      that.engine.resize();
    });
  }

  private vectorFromAngles(x: number, y: number, z: number) {
    x = 2 * Math.PI * x / 360;
    y = 2 * Math.PI * y / 360;
    z = 2 * Math.PI * z / 360;
    return new Vector3(x, y, z);
  }

  private color3FromHex(hex: string): Color3 {
    const rgb = this.hexToRgb(hex);
    return new Color3(rgb.r / 255, rgb.g / 255, rgb.b / 255);
  }

  private colorNameToHex(name: string): string {
    name = name.toLowerCase().replace("-", " ");
    const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
    if (c) { // color found in list
      return c.hex;
    } else if (name.startsWith("rainbow")) { // check for special words
      return "rainbow";
    } else {
      const parts = name.split("+");
      const clrs: string[] = [];
      parts.forEach((part) => {
        part = part.replace(/[^a-zA-Z0-9]/g, "");
        const col = colors.filter((color) =>
        color.name.toLowerCase() == part || color.name.toLowerCase().replace(" ", "") == part.replace(" ", ""))[0];
        if (col) { // color found in list
          clrs.push(col.hex);
        } else {
          const n = this.replaceDarkOrLight(part);
          if (n) {
            clrs.push(n);
          } else {
            clrs.push("#757575");
          }
        }
      });
      if (clrs.length == 1) {
        return clrs[0];
      } else {
        return clrs[0]; // ToDo
      }
    }
  }

  private hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      // tslint:disable-next-line: object-literal-sort-keys
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  }

  private replaceDarkOrLight(name) {
    if (name.startsWith("dark")) {
      name = name.replace("dark", "").replace(/[^a-zA-Z0-9]/g, "");
      const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
      if (c) {
        const hex = this.shadeColor(c.hex, -this.shadeColorFactor);
        return hex;
      }
    } else if (name.startsWith("light")) {
      name = name.replace("light", "").replace(/[^a-zA-Z0-9]/g, "");
      const c = colors.filter((color) => color.name.toLowerCase() == name)[0];
      if (c) {
        const hex = this.shadeColor(c.hex, this.shadeColorFactor);
        return hex;
      }
    }
  }

  private shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    // @ts-ignore
    // tslint:disable-next-line: radix
    R = parseInt(R * (100 + percent) / 100);
    // @ts-ignore
    // tslint:disable-next-line: radix
    G = parseInt(G * (100 + percent) / 100);
    // @ts-ignore
    // tslint:disable-next-line: radix
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
  }

}

// tslint:disable-next-line: max-classes-per-file
class FreeCameraKeyboardMoveInput implements ICameraInput<Camera> {
  public keys = [];

  public keysRotateLeft = [37];
  public keysRotateRight = [39];
  public keysRotateUp = [38];
  public keysRotateDown = [40];

  public keysMoveForward = [87];
  public keysMoveBackward = [83];
  public keysMoveLeft = [65];
  public keysMoveRight = [68];

  public keysMoveUp = [32];
  public keysMoveDown = [16];

  public rotationSensibility = 0.01;
  public movementSensibility = 1;
  public camera: FreeCamera;
  public onKeyDown: (evt: any) => void;
  public onKeyUp: (evt: any) => void;
  public onLostFocus: (e: FocusEvent) => any;

  public getTypeName(): string {
    return "typeName";
  }

  public getSimpleName(): string  {
    return "simpleName";
  }

  public getClassName(): string {
    return "className";
  }

  public attachControl(element: HTMLElement, noPreventDefault?: boolean) {
    const that = this;
    if (!this.onKeyDown) {
        element.tabIndex = 1;
        this.onKeyDown = (evt) => {
            if (that.keysRotateLeft.indexOf(evt.keyCode) !== -1 ||
                that.keysRotateUp.indexOf(evt.keyCode) !== -1 ||
                that.keysRotateDown.indexOf(evt.keyCode) !== -1 ||
                that.keysRotateRight.indexOf(evt.keyCode) !== -1 ||
                that.keysMoveForward.indexOf(evt.keyCode) !== -1 ||
                that.keysMoveBackward.indexOf(evt.keyCode) !== -1 ||
                that.keysMoveLeft.indexOf(evt.keyCode) !== -1 ||
                that.keysMoveRight.indexOf(evt.keyCode) !== -1 ||
                that.keysMoveUp.indexOf(evt.keyCode) !== -1 ||
                that.keysMoveDown.indexOf(evt.keyCode) !== -1
                ) {
                const index = that.keys.indexOf(evt.keyCode);
                if (index === -1) {
                    that.keys.push(evt.keyCode);
                }
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
            }
        };
        this.onKeyUp = (evt) => {
            if (that.keysRotateLeft.indexOf(evt.keyCode) !== -1 ||
                that.keysRotateUp.indexOf(evt.keyCode) !== -1 ||
                that.keysRotateDown.indexOf(evt.keyCode) !== -1 ||
                 that.keysRotateRight.indexOf(evt.keyCode) !== -1 ||
                 that.keysMoveForward.indexOf(evt.keyCode) !== -1 ||
                 that.keysMoveBackward.indexOf(evt.keyCode) !== -1 ||
                 that.keysMoveLeft.indexOf(evt.keyCode) !== -1 ||
                 that.keysMoveRight.indexOf(evt.keyCode) !== -1 ||
                 that.keysMoveUp.indexOf(evt.keyCode) !== -1 ||
                 that.keysMoveDown.indexOf(evt.keyCode) !== -1
                 ) {
                const index = that.keys.indexOf(evt.keyCode);
                if (index >= 0) {
                    that.keys.splice(index, 1);
                }
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
            }
        };

        element.addEventListener("keydown", this.onKeyDown, false);
        element.addEventListener("keyup", this.onKeyUp, false);
        Tools.RegisterTopRootEvents([
            { name: "blur", handler: this.onLostFocus },
        ]);
    }
}

  public detachControl(element: HTMLElement) {
      if (this.onKeyDown) {
          element.removeEventListener("keydown", this.onKeyDown);
          element.removeEventListener("keyup", this.onKeyUp);
          Tools.UnregisterTopRootEvents([
              { name: "blur", handler: this.onLostFocus },
          ]);
          this.keys = [];
          this.onKeyDown = null;
          this.onKeyUp = null;
      }
  }

  public checkInputs() {
    if (this.onKeyDown) {
      const camera = this.camera;
      // Keyboard
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.keys.length; index++) {
          const keyCode = this.keys[index];
          if (this.keysRotateLeft.indexOf(keyCode) !== -1) {
              camera.rotation.y += this.rotationSensibility;
          } else if (this.keysRotateRight.indexOf(keyCode) !== -1) {
              camera.rotation.y -= this.rotationSensibility;
          } else if (this.keysRotateUp.indexOf(keyCode) !== -1) {
            camera.rotation.x -= this.rotationSensibility;
          } else if (this.keysRotateDown.indexOf(keyCode) !== -1) {
            camera.rotation.x += this.rotationSensibility;
            // now movements
          } else if (this.keysMoveForward.indexOf(keyCode) !== -1) {
            camera.position.x += Math.sin(camera.rotation.y) * this.movementSensibility;
            camera.position.z += Math.cos(camera.rotation.y) * this.movementSensibility;
          } else if (this.keysMoveBackward.indexOf(keyCode) !== -1) {
            camera.position.x -= Math.sin(camera.rotation.y) * this.movementSensibility;
            camera.position.z -= Math.cos(camera.rotation.y) * this.movementSensibility;
          } else if (this.keysMoveLeft.indexOf(keyCode) !== -1) {
            camera.position.x += Math.cos(camera.rotation.y) * this.movementSensibility;
            camera.position.z += Math.sin(camera.rotation.y) * this.movementSensibility;
          } else if (this.keysMoveRight.indexOf(keyCode) !== -1) {
            camera.position.x -= Math.cos(camera.rotation.y) * this.movementSensibility;
            camera.position.z -= Math.sin(camera.rotation.y) * this.movementSensibility;
            // now up and down
          } else if (this.keysMoveUp.indexOf(keyCode) !== -1) {
            camera.position.y += this.movementSensibility;
          } else if (this.keysMoveDown.indexOf(keyCode) !== -1) {
            camera.position.y -= this.movementSensibility;
          }
      }
  }
  }
}
