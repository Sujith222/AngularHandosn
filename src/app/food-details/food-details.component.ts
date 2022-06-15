import { FoodService } from './../food.service';
import { Food } from './../food';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  selectedFood:any;

  constructor(private route: ActivatedRoute, private foodService:FoodService) { 
    let foodId:string= this.route.snapshot.paramMap.get('id')||"";
    
    console.log(foodId)
    this.foodService.getFoodDetailById(foodId).subscribe(
      (response:Food)=>{
          this.selectedFood=response;
      }
    )
  }
  
  ngOnInit(): void {
  }
  
}
