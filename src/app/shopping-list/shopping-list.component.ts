import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tamatoes',10)
  ];
  name:string;
  amount:number;
  constructor() { }

  ngOnInit(): void {
  }
  addIngredient(event:Ingredient){
    // this.name=name;
    this.ingredients.push(new Ingredient(event.name,event.amount));
    console.log(event);
    
  }
}
