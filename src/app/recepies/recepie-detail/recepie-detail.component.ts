import { Component, Input, OnInit,} from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepies.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent implements OnInit {
  @Input() recepie: Recepie;
  constructor(private shoppingListService: ShoppingListService, private recepieService: RecepieService) {}
  ngOnInit(): void {
    
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
  
}
