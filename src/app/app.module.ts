import {NgModule} from '@angular/core';
import  {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {WeekelyMenuComponent} from "./weekelyMenu.component";
import {ShoppingListComponent} from "./shoppingList.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        WeekelyMenuComponent,
        ShoppingListComponent
    ]
})
export class AppModule {


}