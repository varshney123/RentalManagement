import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'cat/:type/:id/:brId',
    component : CategoriesComponent
  },
  {
    path : 'cat/:type/:id',
    component : CategoriesComponent
  },
  {
    path : 'subcat',
    component : CategorydetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
