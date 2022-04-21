import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component";
import { RecepieEditComponent } from "./recepies/recepie-edit/recepie-edit.component";
import { RecepieStartComponent } from "./recepies/recepie-start/recepie-start.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '' , redirectTo:'recepies', pathMatch: 'full' },
    { path: 'recepies', component: RecepiesComponent, children:[
        {path: '', component: RecepieStartComponent},
        { path: 'new', component: RecepieEditComponent},
        { path: 'edit', component: RecepieEditComponent},
        {path: ':id', component: RecepieDetailComponent},
    ] },
    { path: 'shopping-list', component: ShoppingListComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}