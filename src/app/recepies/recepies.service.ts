import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recepie } from './recepie.model';

export class RecepieService {
  selectedRecepie = new EventEmitter<Recepie>();
  recepieListChanged = new EventEmitter<Recepie[]>();
  addNewRecepieButton =new EventEmitter<Boolean>();
  private recepies: Recepie[] = [
    new Recepie(
      'test-recepie 1',
      'this is test description for test-recepie for recepie 1',
      'https://www.westernricemills.com/uploads/1/3/1/8/131866278/bibimbap-rice-bowl_orig.jpg',
      [
        new Ingredient('bread', 8), new Ingredient('french fries', 20)
      ]
    ),
    new Recepie(
      'test-recepie 2',
      'this is test description for test-recepie for recepie 2',
      'https://www.westernricemills.com/uploads/1/3/1/8/131866278/sky-high-chicken-and-vegetable-pie_orig.jpg',
      [
        new Ingredient('bun', 12), new Ingredient('artiicial flavour', 5)
      ]
    ),
    new Recepie(
      'test-recepie 3',
      'this is test description for test-recepie for recepie 3',
      'https://www.westernricemills.com/uploads/1/3/1/8/131866278/swiss-chard-lentil-and-rice-dolmades-web-img_orig.jpg',
      [
        new Ingredient('buns', 13), new Ingredient('artiicial red flavour', 9)
      ]
    ),
  ];

  getRecepie() {
    return this.recepies.slice();
  }
  addRecepie(recepie:Recepie){
    this.recepies.push(new Recepie(recepie.name,recepie.description,recepie.imagePath,recepie.ingredients.map((i)=>i = new Ingredient(i.name,i.amount))));
    this.recepieListChanged.emit(this.recepies);
  }
}
