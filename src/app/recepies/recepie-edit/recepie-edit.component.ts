import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  recepieForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.recepieForm = new FormGroup({
      name :new FormControl(null,Validators.required),
      imageUrl : new FormControl(null,Validators.required),
      description : new FormControl(null),
    });
  }
  onSubmit(){
    console.log(this.recepieForm);
    
  }
}
