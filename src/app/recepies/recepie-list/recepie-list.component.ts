import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie(
      'test-recepie',
      'this is test description for test-recepie',
      'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/09/11/637971-pjimage26.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
