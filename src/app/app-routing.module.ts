import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ListpokemonsComponent } from "./components/listpokemons/listpokemons.component";

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch: 'full' },
  { path: 'home',component: HomeComponent, pathMatch:'full'},
  { path: 'api-pokemons',component: ListpokemonsComponent, pathMatch:'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
