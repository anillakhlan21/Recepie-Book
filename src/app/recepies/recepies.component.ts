import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepies.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers:[RecepieService]
})
export class RecepiesComponent implements OnInit {
  recepieObj: Recepie;
  constructor() {}

  ngOnInit(): void {}
}
