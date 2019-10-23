import { Component, OnInit } from "@angular/core";
import {
  ArcRotateCamera,
  Camera,
  Color3,
  Color4,
  DirectionalLight,
  Engine,
  FreeCamera,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  SpotLight,
  StandardMaterial,
  Texture,
  Vector2,
  Vector3,
  Vector4,
} from "babylonjs";

@Component({
  selector: "app-viewer",
  styleUrls: ["./viewer.component.scss"],
  templateUrl: "./viewer.component.html",
})
export class ViewerComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private scene: Scene;
  private camera: Camera;
  private ground: Mesh;
  private light: HemisphericLight;

  public ngOnInit() {
    this.canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    this.engine = new Engine(this.canvas, true);
    this.createScene();
    this.setupResizeListeners();
    this.engine.runRenderLoop(() => this.scene.render());
  }
  private createScene(): void {
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(0, 0, 0, 0);

    this.camera = new ArcRotateCamera("Camera", -Math.PI / 2, 1, 130, new Vector3(0, 3, 0), this.scene);
    this.camera.attachControl(this.canvas, false);

    this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    this.ground = MeshBuilder.CreateGround("ground", {width: 60, height: 60}, this.scene);
    this.ground.material = this.createMaterial(new Color3(0.06, 0.06, 0.06));

    let box = Mesh.CreateBox("box", 1, this.scene);
    box.position = new Vector3(0,0,0);

    // the light cones
    const wuerfel = Mesh.CreateBox(
      "*cone00",
      4,
      this.scene,
      false,
    );
    wuerfel.material = this.createMaterial(new Color3(12, 67, 238));
    wuerfel.position = new Vector3(10, 10, 10);
    wuerfel.rotation = this.vectorFromAngles(0, 0, 90);

    /*setInterval(() => {
      wuerfel.rotation.x += 0.1;
      console.log(wuerfel.rotation.x);
    }, 100);*/
    // make the volume cones
    const kegel = Mesh.CreateCylinder("*volcone00",
      80,
      3,
      60,
      64,
      16,
      this.scene,
      false,
    );
    const myMaterial = this.createMaterial(new Color3(0.1, 0.1, 0.1));

    kegel.material = myMaterial;
    kegel.parent = wuerfel;
    kegel.position.y -= 42;
  }

  private createMaterial(color: Color3, alpha: number = 1) {
    const myMaterial = new StandardMaterial(`material_${Math.random().toString()}`, this.scene);
    myMaterial.diffuseColor = color;
    // myMaterial.specularColor = color;
    // myMaterial.emissiveColor = color;
    // myMaterial.ambientColor = color;
    myMaterial.alpha = alpha;
    return myMaterial;
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
}
