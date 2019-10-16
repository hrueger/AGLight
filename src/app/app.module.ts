import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import "reflect-metadata";
import "../polyfills";
import { AboutComponent } from "./_components/about/about.component";
import { AvalibleHeadsComponent } from "./_components/avalible-heads/avalible-heads.component";
import { CloudComponent } from "./_components/cloud/cloud.component";
import { ConfigureShowComponent } from "./_components/configure-show/configure-show.component";
import { EffectsComponent } from "./_components/effects/effects.component";
import { GroupsComponent } from "./_components/groups/groups.component";
import { HeadsComponent } from "./_components/heads/heads.component";
import { HomeComponent } from "./_components/home/home.component";
import { InfoComponent } from "./_components/info/info.component";
import { LicensesComponent } from "./_components/licenses/licenses.component";
import { ManualComponent } from "./_components/manual/manual.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { ShowComponent } from "./_components/show/show.component";
import { ChannelNumberSumPipe } from "./_pipes/channel-number-sum.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeadsComponent,
    GroupsComponent,
    EffectsComponent,
    AvalibleHeadsComponent,
    ConfigureShowComponent,
    ShowComponent,
    CloudComponent,
    ChannelNumberSumPipe,
    AboutComponent,
    InfoComponent,
    LicensesComponent,
    ManualComponent,
  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AppModule {}
