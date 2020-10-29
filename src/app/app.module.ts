import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ShopComponent } from "./shop/shop.component";
import { CameraComponent } from "./camera/camera.component";
import { InfoComponent } from "./info/info.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HomeComponent,
        ShopComponent,
        CameraComponent,
        InfoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
