import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  ingredientEdited = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tamatoes', 10),
  ];

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    });

    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredientList() {
    return this.ingredients.slice();
  }

  getIngredient(i: number) {
    return this.ingredients.slice()[i];
  }

  updateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = new Ingredient(
      updatedIngredient.name,
      updatedIngredient.amount
    );
    this.ingredientChanged.next(this.ingredients.slice());
  }
  
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
