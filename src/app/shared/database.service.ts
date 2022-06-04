import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recepie } from '../recepies/recepie.model';
import { RecepieService } from '../recepies/recepies.service';
import * as dotenv from 'dotenv';
@Injectable({ providedIn: 'root' })
export class DatabseService {
  constructor(
    private http: HttpClient,
    private recepieService: RecepieService
  ) {}
  saveRecepies() {
    const recepies = this.recepieService.getRecepies();
    // console.log(recepies);
    console.log(process.env);
    

    this.http
      .put(
        'https://recipe-book-project-e1830-default-rtdb.firebaseio.com/recepies.json',
        recepies
      )
      .subscribe((response) => {
        // console.log(response);
      });
  }
  fetchRecepieData() {
    return this.http
      .get<Recepie[]>(
        'https://recipe-book-project-e1830-default-rtdb.firebaseio.com/recepies.json'
      )
      .pipe(
        map((recepies) => {
          return recepies.map((recepie) => {
            return {
              ...recepie,
              ingredients: recepie.ingredients ? recepie.ingredients : [],
            };
          });
        }),
        tap((recepies) => {
          this.recepieService.setRecepies(recepies);
        })
      );
  }


}
