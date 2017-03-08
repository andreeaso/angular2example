import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WeekelyMenuComponent} from "./weekelyMenu.component";
import {ShoppingListComponent} from "./shoppingList.component";

const routes: Routes = [
    {path: 'menu', component: WeekelyMenuComponent},
    {path: 'shoppingList', component: ShoppingListComponent},
    {path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}