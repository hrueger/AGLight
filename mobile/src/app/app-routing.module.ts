import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./_components/home/home.component";
import { ShowComponent } from "./_components/show/show.component";
import { SearchComponent } from "./_components/search/search.component";
import { FeaturedComponent } from "./_components/featured/featured.component";
import { SettingsComponent } from "./_components/settings/settings.component";
import { ConnectedGuard } from "./_guards/connected.guard";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "show", component: ShowComponent, canActivate: [ConnectedGuard] },
    { path: "search", component: SearchComponent },
    { path: "featured", component: FeaturedComponent },
    { path: "settings", component: SettingsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
