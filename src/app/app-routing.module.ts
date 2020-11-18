import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import{ RegisterComponent } from './register/register.component'
import {LandingPageComponent} from './landing-page/landing-page.component'

const routes: Routes = [
   {path:'', component:LandingPageComponent },
  {path:'home',component:AppComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
