import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
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
  // previewImagePath: string = 'https://pngimage.net/wp-content/uploads/2018/06/image-not-available-png-5-300x200.png'
  constructor(private recepieService: RecepieService, private router: ActivatedRoute) { 
    this.initForm();
    
  }
  ngOnInit(): void {
    // console.log(this.router.);
    this.router.params.subscribe((params:Params)=>{
      this.index = +params['id']===NaN ? undefined : params['id'];
      this.initForm();
    })

  }
  private initForm(){
      let name: string ='';
      let imagePath: string= '';
      let description: string='';
      let ingredients = new FormArray([]);
      
      if(this.index!== undefined){
        let recepie = this.recepieService.getRecepieById(this.index);
        console.log(this.index);
        name=recepie.name;
        imagePath = recepie.imagePath;
        description = recepie.description;
        let ingrArr = recepie.ingredients.forEach((i)=>{
          ingredients.push(this.createIngredient(i.name,i.amount))
        });
      }
      
      this.recepieForm = new FormGroup({
        'name' :new FormControl(name,Validators.required),
        'imagePath' : new FormControl(imagePath,Validators.required),
        'description' : new FormControl(description),
        'ingredients': ingredients,
      });
  }

  createIngredient(name: string,amount:number | undefined):FormGroup{
    return new FormGroup({
      name: new FormControl(name),
      amount: new FormControl(amount)
    });
  }

  getFormIngredients(){
    return this.recepieForm.get('ingredients') as FormArray;
  }
  onSubmit(){
    const recepie = this.recepieForm.value;    
    if(this.index=== undefined){
      this.recepieService.addRecepie(recepie);
    }else{
      this.recepieService.EditRecepie(recepie,this.index);
    }
  }

  onAddIngredient(){
    this.recepieIngredients = this.getFormIngredients();
    this.recepieIngredients.push(this.createIngredient('', undefined));
  }
  onRemoveIngredient(i:number){
    this.recepieIngredients = this.getFormIngredients();    
    this.recepieIngredients.removeAt(i)
  }
 
}
