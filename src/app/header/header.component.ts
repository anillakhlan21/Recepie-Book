import { Component } from "@angular/core";
import { RecepieService } from "../recepies/recepies.service";
import { DatabseService } from "../shared/database.service";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    collapsed=true
    constructor(private dbService: DatabseService, private recepieService: RecepieService){
    }
    onSaveData(){
        this.dbService.saveRecepies();
    }
    onFetchData(){
        this.dbService.fetchRecepieData().subscribe();
    }
    onDefaultData(){
        this.recepieService.getDefaultRecepie();
    }
    
}