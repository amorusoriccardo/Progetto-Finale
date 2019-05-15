import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import { UtentiComponent } from './utenti/utenti.component';



@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent
  ],
 imports: [
    BrowserModule, NgbModule,  FormsModule,
 ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
