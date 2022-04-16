import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  recepieForm: FormGroup;
  recepieIngredients: FormArray;
  constructor(private recepieService: RecepieService, private formBuilder: FormBuilder) { 
    this.initForm();
  }
  ngOnInit(): void {
   
    
  }
  private initForm(){
      let name = '';
      let imagePath = '';
      let description = '';
      var ingredients = new FormArray([this.createIngredient()]);

      this.recepieForm = new FormGroup({
        'name' :new FormControl(null,Validators.required),
        'imagePath' : new FormControl(null,Validators.required),
        'description' : new FormControl(null),
        'ingredients': ingredients,
      });
  }
  onSubmit(){
    const recepie = this.recepieForm.value;
    // console.log(recepie);
    this.recepieService.addRecepie(recepie);
  }
  
  createIngredient():FormGroup{
    return new FormGroup({
      name: new FormControl(null),
      amount: new FormControl(null)
    })
  
  }
  getFormIngredients(){
    return this.recepieForm.get('ingredients') as FormArray;
  }
  onAddIngredient(){
    this.recepieIngredients = this.getFormIngredients();
    this.recepieIngredients.push(this.createIngredient());
    console.log(this.recepieForm.get('ingredients'));
    
  }
}
