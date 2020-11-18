import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CousesService} from './couses.service'
import * as $ from 'jquery';
@NgModule({
  declarations: [	AppComponent,
      HomeComponent
   ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
  providers: [CousesService],
  bootstrap: [AppComponent, HomeComponent],
})
export class AppModule {}
