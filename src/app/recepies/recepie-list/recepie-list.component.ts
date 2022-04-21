import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[];
  addNewRecepieButton: Boolean = true;
  index: number;
  constructor(private recepieService:RecepieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.index = +this.route.snapshot.params['id'];
    this.recepies = this.recepieService.getRecepie();
    this.recepieService.recepieListChanged.subscribe((list)=> this.recepies= list);
  }
  OnNewRecepieClick(){
    this.addNewRecepieButton= true;
    this.recepieService.addNewRecepieButton.emit(this.addNewRecepieButton);
    this.recepieService.editMode =false;
  }
}
