import { Component, ElementRef, EventEmitter, NgModule, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  AddOrUpdate:string = 'Add';
  igEditSub: Subscription
  editableIngredient: {index:number,ingDetail:Ingredient};

  ingredient:Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
      this.igEditSub = this.shoppingListService.ingredientEdited.subscribe((i)=>{
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

  updateIngredient(){
    this.shoppingListService.updateIngredient(this.editableIngredient.index, this.form.value);
    this.AddOrUpdate = 'Add';
    this.form.reset();
  }
  
  onClear(){
    this.form.reset();
    this.AddOrUpdate = 'Add';
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editableIngredient.index)
    this.onClear();
  }
  ngOnDestroy(): void {
      this.igEditSub.unsubscribe();
  }
}
