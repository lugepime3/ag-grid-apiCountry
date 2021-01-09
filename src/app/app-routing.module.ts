import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { CountryBoardComponent } from './country/country-board/country-board.component';
import { CountryFormComponent } from './country/countryForm/country-form.component';

const routes: Routes = [
  {
    path:'country',
    component:CountryBoardComponent
  },
  {
    path:'country/detail/:id',
    component:CountryFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
