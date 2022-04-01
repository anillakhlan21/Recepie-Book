import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tamatoes',10)
      ];

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(new Ingredient(ingredient.name,ingredient.amount));
          this.ingredientChanged.emit(this.ingredients.slice());
      }
      getIngredientList(){
          return this.ingredients.slice();
      }
}