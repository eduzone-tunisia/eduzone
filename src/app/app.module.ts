import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RegisterComponent} from './register/register.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent ,
    RegisterComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   


    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
