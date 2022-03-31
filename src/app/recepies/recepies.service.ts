import { Recepie } from "./recepie.model";

export class RecepieService{
    private recepies: Recepie[] = [
        new Recepie(
          'test-recepie 1',
          'this is test description for test-recepie for recepie 1',
          'https://www.westernricemills.com/uploads/1/3/1/8/131866278/bibimbap-rice-bowl_orig.jpg'
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

      getRecepie(){
          return this.recepies.slice();
      }
}