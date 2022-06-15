import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  
  constructor(private foodService:FoodService, private router:Router) {

    this.food={
      id:0,
      name:"",
      rating:0,
      price:0
    }
   }

  food:Food;


  save(foodForm: NgForm) {
    console.log(foodForm.form);
    console.log('Saved: ' + JSON.stringify(foodForm.value));
    this.foodService.insertFood(this.food).subscribe(
      (response)=>{
        alert("food sucessfully inserted")
       this.router.navigate(['/foodList']);
      }
     

    )

  }
  

  ngOnInit(): void {

  }
}
