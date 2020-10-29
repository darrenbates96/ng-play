import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CameraComponent } from "./camera/camera.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { ShopComponent } from "./shop/shop.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "shop", component: ShopComponent },
    { path: "camera", component: CameraComponent },
    { path: "info", component: InfoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
