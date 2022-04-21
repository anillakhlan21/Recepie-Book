import { Component, Input, OnInit,} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Ingredient } from 'src/app/shared/ingredient.model';
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

  constructor(private shoppingListService: ShoppingListService, private recepieService: RecepieService, private route: ActivatedRoute) {    
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.index = +params['id'];
      this.recepie = this.recepieService.getRecepieById(this.index);
    });
    // console.log(this.index);
  }
  onAddIngredientToSL(){
    this.shoppingListService.addIngredients(this.recepie.ingredients)
  }
  onDeleteRecepie(){
    this.recepieService.deleteRecepie(this.index);
  }
  
}
