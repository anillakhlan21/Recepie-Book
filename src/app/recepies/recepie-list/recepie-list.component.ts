import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[];
  @Output() recepieSelectEvent = new EventEmitter<Recepie>();
  onClickRecepie(recepie:Recepie){
    this.recepieSelectEvent.emit(recepie);
  }
  constructor(private recepieService:RecepieService) {}

  ngOnInit(): void {
    this.recepies = this.recepieService.getRecepie();
  }
}
