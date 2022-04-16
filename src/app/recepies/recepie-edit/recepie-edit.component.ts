import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  recepieForm: FormGroup;
  constructor(private recepieService: RecepieService) { }
  ngOnInit(): void {
    this.recepieForm = new FormGroup({
      name :new FormControl(null,Validators.required),
      imageUrl : new FormControl(null,Validators.required),
      description : new FormControl(null),
      ingredientName: new FormControl(null),
      ingredientNumber: new FormControl(null)
    });
  }
  onSubmit(){
    const recepie = this.recepieForm.value;
    this.recepieService.addRecepie(recepie.name, recepie.description, recepie.imageUrl,recepie.ingredientName,recepie.ingredientNumber);
  }
}
