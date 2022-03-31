import { Component, Input, OnInit} from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepies.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie: Recepie;
  constructor(private recepieService :RecepieService) {}

  ngOnInit(){}
  onItemSelect(recepie:Recepie){
    this.recepieService.selectedRecepie.emit(recepie);
  }
}
