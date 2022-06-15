import { HttpClient } from '@angular/common/http';
import { Food } from './food';
import { filter, map, Observable, of, from, observable, interval } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url="http://localhost:8082/foods/";
  func(){
    return 10;
  }


  constructor(private httpClient:HttpClient) { 
    console.log("inside the food")

  }

  getFoodDetails():Observable<Food[]>{
    console.log("inside get details")
   return this.httpClient.get<Food[]>("http://localhost:8082/foods/");
  }

  getFoodDetailById(foodId:string):Observable<Food>{
    console.log("inside get details")
   return this.httpClient.get<Food>("http://localhost:8082/foods/"+foodId);
  }

  insertFood(food:Food):Observable<Object>{
    return this.httpClient.post("http://localhost:8082/foods/",food);

  }
  


}
