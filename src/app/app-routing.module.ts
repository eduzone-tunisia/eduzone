import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './About-us/About-us.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { HomeComponent } from './home/home.component';

import {CourseFormComponent} from './course-form/course-form.component';
import {StudentInfoComponent } from "./student-update-info/student-update-info.component"
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TermOfServiceComponent } from './termOfService/termOfService.component';

import { VideoPlayerComponent } from './videoPlayer/videoPlayer.component';

import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FilterComponent } from './filter/filter.component';
import { TypeComponent } from './type/type.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  {path:'type', component:FilterComponent},
  { path:'design', component:TypeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'teacherRegister', component: TeacherRegisterComponent },
  { path: 'teacherLogin', component: TeacherLoginComponent },
  { path: 'Profile', component: StudentProfileComponent },
  { path: 'updateTeacher', component: UpdateTeacherComponent },
  {path : "updateStudentInfo" , component:StudentInfoComponent },
  {path : "servicesTerms", component:TermOfServiceComponent},
  {path: "videoPlayer", component:VideoPlayerComponent},
  {path : "addCourse", component:CourseFormComponent},
  {path : "dashboard", component: TeacherProfileComponent},
  {path : "search", component: SearchComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
