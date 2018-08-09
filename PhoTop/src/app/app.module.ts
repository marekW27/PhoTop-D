import { platformBrowser } from '@angular/platform-browser/public_api';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ZdjComponent } from './zdj/zdj.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { NavComponent } from './nav/nav.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { EdycjaComponent } from './edycja/edycja.component';
import { ZmianaHComponent } from './zmiana-h/zmiana-h.component';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ZdjComponent,
    LogowanieComponent,
    NavComponent,
    RejestracjaComponent,
    EdycjaComponent,
    ZmianaHComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
