import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPokemonComponent } from 'src/app/view-pokemon/view-pokemon.component';
const routes: Routes = [{ path: 'view-pokemon', component: ViewPokemonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
