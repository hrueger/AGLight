import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { HomeComponent } from "./_components/home/home.component";
import { ShowComponent } from "./_components/show/show.component";
import { ConnectedGuard } from "./_guards/connected.guard";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "show", component: ShowComponent, canActivate: [ConnectedGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
