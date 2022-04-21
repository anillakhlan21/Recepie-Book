import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepies.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent implements OnInit {
  recepie: Recepie;
  @Input() index:number;
  constructor(private recepieService :RecepieService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.recepie = this.recepieService.getRecepieById(this.index);
  }
}
