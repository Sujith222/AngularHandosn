import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food.component';
const routes: Routes = [
  {path:'foodList',component:FoodComponent},
  {path:'foodForm',component:FoodFormComponent},
  {path:'foodDetail/:id',component:FoodDetailsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
