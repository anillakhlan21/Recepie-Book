import { Component, Input, OnInit,} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent implements OnInit {
  recepie: Recepie;
  index:number

  constructor(private shoppingListService: ShoppingListService, private recepieService: RecepieService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.index = +params['id'];
      this.recepie = this.recepieService.getRecepieById(this.index);

    });
    console.log(this.index);
    
  }
  addIngredientToSL(){
    this.recepie.ingredients.forEach(
      (ingredient)=>{
        this.shoppingListService.addIngredient(ingredient);
      }
    )
  }
  onEditRecepie(){
    this.recepieService.addNewRecepieButton.emit(true);
    this.recepieService.editableRecepie = this.recepie;
    this.recepieService.editMode = true;
  }
  onDeleteRecepie(){
    this.recepieService.deleteRecepie(this.recepie);
  }
  
}
