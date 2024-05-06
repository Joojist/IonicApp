import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map-component/google-map.component';
import { MapsComponent } from './map/maps.component';
import { CommonModule } from '@angular/common';
import {StatisticsComponent} from "./statistics/statistics.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, GoogleMapComponent, MapsComponent, StatisticsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [MapsComponent],
})
export class AppModule {}
