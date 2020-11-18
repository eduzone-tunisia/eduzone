import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {RegisterComponent} from './register/register.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { AboutUsComponent } from './About-us/About-us.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [					
      AppComponent,
      LandingPageComponent,
      NavbarComponent,
      FooterComponent,
      MiddleComponent,
      AboutUsComponent,
      RegisterComponent
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
