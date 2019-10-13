import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvalibleHeadsComponent } from "./_components/avalible-heads/avalible-heads.component";
import { CloudComponent } from "./_components/cloud/cloud.component";
import { ConfigureShowComponent } from "./_components/configure-show/configure-show.component";
import { EffectsComponent } from "./_components/effects/effects.component";
import { GroupsComponent } from "./_components/groups/groups.component";
import { HeadsComponent } from "./_components/heads/heads.component";
import { HomeComponent } from "./_components/home/home.component";
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
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule {}
