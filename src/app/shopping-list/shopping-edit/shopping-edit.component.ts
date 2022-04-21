import { Component, ElementRef, EventEmitter, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  AddOrUpdate:string = 'Add';
  editableIngredient: {index:number,ingDetail:Ingredient};

  ingredient:Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
      this.shoppingListService.ingredientEdited.subscribe((i)=>{
      this.form.setValue(this.shoppingListService.getIngredient(i));
      this.AddOrUpdate = 'Update';
      this.editableIngredient ={index: i, ingDetail : this.shoppingListService.getIngredient(i)};
    })
  }

  
  addIngredient() {
    this.ingredient = this.form.value;
    this.shoppingListService.addIngredient(this.ingredient);
    this.form.reset();
    
  }

  UpdateIngredient(){
    this.shoppingListService.updateIngredient(this.editableIngredient.index, this.form.value);
    this.AddOrUpdate = 'Add';
    this.form.reset();
    // console.log(this.shoppingListService.getIngredientList());

  }
  
  OnClear(){
    this.form.reset();
    this.AddOrUpdate = 'Add';
  }

  OnDelete(){
    this.shoppingListService.deleteIngredient(this.editableIngredient.index)
    this.OnClear();
  }
}
