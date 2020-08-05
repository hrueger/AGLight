import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { registerElement } from "@nativescript/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./_components/home/home.component";
import { FeaturedComponent } from "./_components/featured/featured.component";
import { BrowseComponent } from "./_components/browse/browse.component";
import { SearchComponent } from "./_components/search/search.component";
import { SettingsComponent } from "./_components/settings/settings.component";
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
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FeaturedComponent,
        BrowseComponent,
        SearchComponent,
        SettingsComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule { }
