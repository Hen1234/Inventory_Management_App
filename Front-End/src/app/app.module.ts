import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './primary-btn/primary-btn.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './items-list/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    ItemsListComponent,
    ItemComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
