import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie(
      'test-recepie 1',
      'this is test description for test-recepie for recepie 1',
      'https://www.westernricemills.com/uploads/1/3/1/8/131866278/cuban-style-beef-picadillo_orig.jpg'
    ),
    new Recepie(
      'test-recepie 2',
      'this is test description for test-recepie for recepie 2',
      'https://www.westernricemills.com/uploads/1/3/1/8/131866278/sky-high-chicken-and-vegetable-pie_orig.jpg'
    ),
    new Recepie(
      'test-recepie 3',
      'this is test description for test-recepie for recepie 3',
      'https://www.westernricemills.com/uploads/1/3/1/8/131866278/swiss-chard-lentil-and-rice-dolmades-web-img_orig.jpg'
    ),  
    
  ];
  @Output() recepieSelectEvent = new EventEmitter<Recepie>();
  onClickRecepie(recepie:Recepie){
    this.recepieSelectEvent.emit(recepie);
  }
  constructor() {}

  ngOnInit(): void {}
}
