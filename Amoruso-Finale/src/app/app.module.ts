import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import { UtentiComponent } from './utenti/utenti.component';
import { CommentiComponent } from './commenti/commenti.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    CommentiComponent,
    LoginComponent
  ],
 imports: [
    BrowserModule, NgbModule,  FormsModule,
 ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
