import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from './components/primary-btn/primary-btn.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/items-list/item/item.component';
import { ItemsPageComponent } from './components/items-page/items-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    ItemsListComponent,
    ItemComponent,
    ItemsPageComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, NgbModule,
    FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
