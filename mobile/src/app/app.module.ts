import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, registerElement } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./_components/home/home.component";
import { ShowComponent } from "./_components/show/show.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";
// eslint-disable-next-line
registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ShowComponent,
        NavbarComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule { }
