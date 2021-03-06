import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./_components/about/about.component";
import { ConfigureShowComponent } from "./_components/configure-show/configure-show.component";
import { FixturesComponent } from "./_components/fixtures/fixtures.component";
import { HomeComponent } from "./_components/home/home.component";
import { InfoComponent } from "./_components/info/info.component";
import { LicensesComponent } from "./_components/licenses/licenses.component";
import { ManualComponent } from "./_components/manual/manual.component";
import { ShowComponent } from "./_components/show/show.component";
import { ViewerComponent } from "./_components/viewer/viewer.component";
import { ShowLoadedGuard } from "./_guards/show-loaded.guard";
import { DmxOutputConnectedGuard } from "./_guards/dmx-output-connected.guard";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
    },
    {
        component: HomeComponent,
        path: "home",
    },
    {
        canActivate: [ShowLoadedGuard],
        component: FixturesComponent,
        path: "fixtures",
    },
    {
        canActivate: [ShowLoadedGuard],
        component: ConfigureShowComponent,
        path: "configureShow",
    },
    {
        canActivate: [ShowLoadedGuard, DmxOutputConnectedGuard],
        component: ShowComponent,
        path: "show",
    },
    {
        component: AboutComponent,
        path: "about",
    },
    {
        component: InfoComponent,
        path: "info",
    },
    {
        component: ViewerComponent,
        path: "viewer",
    },
    {
        component: LicensesComponent,
        path: "licenses",
    },
    {
        component: ManualComponent,
        path: "manual",
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule {}
