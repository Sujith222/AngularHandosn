import { FoodService } from './food.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FoodFormComponent } from './food-form/food-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food.component';
@NgModule({
  declarations: [
    AppComponent,
    
      FoodComponent,    
        FoodFormComponent,
        FooterComponent,
        HeaderComponent,
        FoodDetailsComponent,
        HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
