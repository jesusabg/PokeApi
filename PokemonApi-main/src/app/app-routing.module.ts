import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponentComponent } from './components/pokemon-component/pokemon-component.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
  },
  {
  path:"pokemon",
  component:PokemonComponentComponent
  },
  {
    path: '**',
    redirectTo:'/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
