import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
})
export class RecepiesComponent implements OnInit {
  recepieObj: Recepie;
  constructor() {}

  ngOnInit(): void {}
  OnRecepieSelect(recepie: Recepie) {
    this.recepieObj = recepie;
  }
}
