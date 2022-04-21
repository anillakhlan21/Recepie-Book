import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
  index:number;
  constructor(private recepieService: RecepieService, private router: ActivatedRoute) { 
    this.initForm();
    
  }
  ngOnInit(): void {
    // console.log(this.router.);
    this.router.params.subscribe((params:Params)=>{
      this.index = +params['id']
      // console.log(this.index);
      this.initForm()
      
    })
  }
  
  
  private initForm(){
      let name: string ='';
      let imagePath: string='';
      let description: string='';
      let ingredients = new FormArray([]);
      console.log(this.index);
      
      if(this.index!=undefined){
        let recepie = this.recepieService.getRecepieById(this.index);
        // console.log(recepie);
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
 
}
