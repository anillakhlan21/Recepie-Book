import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit{
  recepieForm: FormGroup;
  recepieIngredients: FormArray;
  constructor(private recepieService: RecepieService, private formBuilder: FormBuilder) { 
    this.initForm();
    
  }
  ngOnInit(): void {
    // console.log(this.editableRecepie);
    this.recepieService.addNewRecepieButton.subscribe((o)=>{
      this.recepieService.editMode =false;
      this.initForm();
    });
  }
  
  
  private initForm(){
      let name: string ='';
      let imagePath: string='';
      let description: string='';
      let ingredients = new FormArray([]);
      if(this.recepieService.editMode){
        let recepie = this.recepieService.editableRecepie;
        name=recepie.name;
        imagePath = recepie.imagePath;
        description = recepie.description;
        let ingrArr = recepie.ingredients.forEach((i)=>{
          ingredients.push(this.createIngredient1(i))
        });
      }
      
      this.recepieForm = new FormGroup({
        'name' :new FormControl(name,Validators.required),
        'imagePath' : new FormControl(imagePath,Validators.required),
        'description' : new FormControl(description),
        'ingredients': ingredients,
      });
      
     
  }

  onSubmit(){
    const recepie = this.recepieForm.value;
    // console.log(recepie);
    if(this.recepieService.editMode){
      this.recepieService.EditRecepie(recepie)
      
    }else{
      this.recepieService.addRecepie(recepie);
    }
  }
  createIngredient1(ingredient:Ingredient):FormGroup{
    return new FormGroup({
      name: new FormControl(ingredient.name),
      amount: new FormControl(ingredient.amount)
    })
  }
  
  createIngredient():FormGroup{
    return new FormGroup({
      name: new FormControl(null),
      amount: new FormControl(null)
    });
  }
  getFormIngredients(){
    return this.recepieForm.get('ingredients') as FormArray;
  }
  onAddIngredient(){
    this.recepieIngredients = this.getFormIngredients();
    this.recepieIngredients.push(this.createIngredient());
    // console.log(this.recepieForm.get('ingredients'));
    
  }
  onRemoveIngredient(i:number){
    this.recepieIngredients = this.getFormIngredients();
    this.recepieIngredients.removeAt(i);
    this.ngOnInit();
  }
  OnCancel(){
    this.recepieService.addNewRecepieButton.emit(true);
  }
}
