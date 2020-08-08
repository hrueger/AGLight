import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { registerElement } from "@nativescript/angular";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./_components/home/home.component";
import { FeaturedComponent } from "./_components/featured/featured.component";
import { ShowComponent } from "./_components/show/show.component";
import { SearchComponent } from "./_components/search/search.component";
import { SettingsComponent } from "./_components/settings/settings.component";
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
        FeaturedComponent,
        ShowComponent,
        SearchComponent,
        SettingsComponent,
        NavbarComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule { }
