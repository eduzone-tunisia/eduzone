import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import{ RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AboutUsComponent} from './About-us/About-us.component'


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  // {path:'home',component:AppComponent},
  {path:'register',component:RegisterComponent},
  {path :"login" ,component:LoginComponent},
  {path :"aboutUs" ,component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
