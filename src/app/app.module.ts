import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AcademicComponent } from "./components/navigation/academic/academic.component";
import { LinkComponent } from "./components/navigation/academic/link/link.component";
import { EntertainmentComponent } from "./components/navigation/entertainment/entertainment.component";
import { HomeComponent } from "./components/home/home.component";
import { ListpokemonsComponent } from "./components/listpokemons/listpokemons.component";
import { PokemonComponent } from "./components/listpokemons/pokemon/pokemon.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AcademicComponent,
    LinkComponent,
    EntertainmentComponent,
    HomeComponent,
    ListpokemonsComponent,
    PokemonComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
