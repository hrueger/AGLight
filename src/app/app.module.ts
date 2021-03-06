import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GridsterModule } from "angular-gridster2";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { ColorCircleModule } from "ngx-color/circle";
import { ColorSwatchesModule } from "ngx-color/swatches";
import "reflect-metadata";
import "../polyfills";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { QRCodeModule } from "angularx-qrcode";
import { AboutComponent } from "./_components/about/about.component";
import { ConfigureShowComponent } from "./_components/configure-show/configure-show.component";
import { FixturesComponent } from "./_components/fixtures/fixtures.component";
import { HomeComponent } from "./_components/home/home.component";
import { InfoComponent } from "./_components/info/info.component";
import { LicensesComponent } from "./_components/licenses/licenses.component";
import { ManualComponent } from "./_components/manual/manual.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { ShowComponent } from "./_components/show/show.component";
import { ViewerComponent } from "./_components/viewer/viewer.component";
import { WidgetGridComponent } from "./_components/widget-grid/widget-grid.component";
import { ChannelNumberSumPipe } from "./_pipes/channel-number-sum.pipe";
import { EffectAffectsSumPipe } from "./_pipes/effect-affects-sum.pipe";
import { SafePipe } from "./_pipes/safe.pipe";
import { FirstLetterUppercasePipe } from "./_pipes/first-letter-uppercase.pipe";
import { NumberArrayPipe } from "./_pipes/number-array.pipe";
import { EffectNamePipe } from "./_pipes/effect-name.pipe";
import { TruncatePipe } from "./_pipes/truncate.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StatusbarComponent } from "./_components/statusbar/statusbar.component";
import { DialogComponent } from "./_components/dialog/dialog.component";
import { QRCodeComponent } from "./_components/qrcode/qrcode.component";
import { ConsoleComponent } from "./_components/console/console.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FixturesComponent,
        ConfigureShowComponent,
        ShowComponent,
        ChannelNumberSumPipe,
        TruncatePipe,
        AboutComponent,
        InfoComponent,
        LicensesComponent,
        ManualComponent,
        EffectAffectsSumPipe,
        FirstLetterUppercasePipe,
        NumberArrayPipe,
        EffectNamePipe,
        ViewerComponent,
        WidgetGridComponent,
        StatusbarComponent,
        DialogComponent,
        SafePipe,
        QRCodeComponent,
        ConsoleComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        GridsterModule,
        NgxSliderModule,
        ColorCircleModule,
        ColorSwatchesModule,
        QRCodeModule,
    ],
    entryComponents: [
        DialogComponent,
        QRCodeComponent,
        ConsoleComponent,
    ],
    providers: [],
})
export class AppModule {}
