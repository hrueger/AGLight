import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./_components/home/home.component";
import { BrowseComponent } from "./_components/browse/browse.component";
import { SearchComponent } from "./_components/search/search.component";
import { FeaturedComponent } from "./_components/featured/featured.component";
import { SettingsComponent } from "./_components/settings/settings.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "browse", component: BrowseComponent },
    { path: "search", component: SearchComponent },
    { path: "featured", component: FeaturedComponent },
    { path: "settings", component: SettingsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
