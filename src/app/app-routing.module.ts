import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
import { ShowComponent } from "./_components/show/show.component";

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
    component: HeadsComponent,
    path: "heads",
  },
  {
    component: GroupsComponent,
    path: "groups",
  },
  {
    component: EffectsComponent,
    path: "effects",
  },
  {
    component: ConfigureShowComponent,
    path: "configureShow",
  },
  {
    component: ShowComponent,
    path: "show",
  },
  {
    component: CloudComponent,
    path: "cloud",
  },
  {
    component: AvalibleHeadsComponent,
    path: "avalibleHeads",
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
