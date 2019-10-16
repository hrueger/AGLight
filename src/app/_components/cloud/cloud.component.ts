import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cloud",
  styleUrls: ["./cloud.component.scss"],
  templateUrl: "./cloud.component.html",
})
export class CloudComponent {
  public loggedin: boolean = false;
  public msgCredentialsWrong: boolean = false;
  public email: string = "";
  public password: string = "";

  public login() {
    // ToDo: use real https authentication
    if (this.email == "info@example.com" && this.password == "secret") {
      this.loggedin = true;
      this.msgCredentialsWrong = false;
    } else {
      this.msgCredentialsWrong = true;
    }
  }

}
