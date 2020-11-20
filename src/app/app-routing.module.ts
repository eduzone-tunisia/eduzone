import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseFormComponent} from './course-form/course-form.component';
import { AppComponent } from './app.component';
import{ RegisterComponent } from './register/register.component'
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component'
import {AboutUsComponent} from './About-us/About-us.component';
import {TeacherRegisterComponent} from './teacher-register/teacher-register.component'
import {TeacherLoginComponent} from './teacher-login/teacher-login.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent },
  {path:'form', component:CourseFormComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path :"login" ,component:LoginComponent},
  {path :"aboutUs" ,component:AboutUsComponent},
  {path :"teacherRegister" ,component: TeacherRegisterComponent},
  {path :"teacherLogin" ,component: TeacherLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
