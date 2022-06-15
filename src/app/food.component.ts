import { Component } from "@angular/core"
import { Food } from "./food"
import { FoodService } from "./food.service"
import {  OnInit } from '@angular/core';
@Component({
    template:`
       
        <table border='1'>
        <thead>
        

            <td>Id: </td>
            <td>Name</td>
            <td>RATING</td>
            <td>PRICE</td>
            <td>Delete</td>
        </thead>
        <tr *ngFor="let food of foods">
           
            <td>
            {{food.id}}</td>
            <td>{{food.name}}</td>
            <td> {{food.rating}}</td>
            <td> {{food.price}}</td>
            <td> <button>delete</button> </td>
        </tr>
        </table>
    `,
    selector:"food-comp"
})export class FoodComponent implements OnInit{
    ngOnInit(): void {

    }
    foods:Food[]=[]
    constructor(private foodService:FoodService){
     this.foodService.getFoodDetails().subscribe(
        (response:Food[])=>{
            console.log("res")
            this.foods=response
            console.log(response)

        }
     )
    }
    
    
      

}