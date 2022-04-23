import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DatabseService } from "../shared/database.service";
import { Recepie } from "./recepie.model";
import { RecepieService } from "./recepies.service";


@Injectable({providedIn:'root'})
export class RecepiesResolverService implements Resolve<Recepie[]>{ 
    constructor(private dbService: DatabseService, private recepieService: RecepieService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recepies = this.recepieService.getRecepies();
        if(recepies.length===0){
            return this.dbService.fetchRecepieData();
        }else{
            return recepies;
        }
    }
}