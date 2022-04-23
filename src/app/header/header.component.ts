import { Component } from "@angular/core";
import { DatabseService } from "../shared/database.service";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    collapsed=true
    constructor(private dbService: DatabseService){
    }
    onSaveData(){
        this.dbService.saveRecepies();
    }
    onFetchData(){
        this.dbService.fetchRecepieData().subscribe();
    }
    
}