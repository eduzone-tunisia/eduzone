import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { AboutUsComponent } from './About-us/About-us.component';
import {StudentInfoComponent} from './student-update-info/student-update-info.component'
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { CousesService } from './couses.service';
import { MatIconModule } from "@angular/material/icon";
import {UploadService} from './services/upload.service';
import { HomeComponent } from './home/home.component';
import { CourseFormComponent } from './course-form/course-form.component';
import {FileUploadModule} from 'ng2-file-upload';
import {StudentProfileComponent} from  './student-profile/student-profile.component'
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TermOfServiceComponent } from './termOfService/termOfService.component';
import { FilterComponent } from './filter/filter.component';
import { TypeComponent } from './type/type.component';

import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StarRatingModule } from 'angular-star-rating';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TestStarComponent } from './test-star/test-star.component';
// import { RatingComponent } from './rating/rating.component';

@NgModule({

  declarations: [					



    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    MiddleComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    TeacherRegisterComponent,


    TeacherLoginComponent,
    HomeComponent,
    StudentInfoComponent,
    StudentProfileComponent,
      UpdateTeacherComponent,
      UpdateTeacherComponent,
      TermOfServiceComponent,
      FilterComponent,
      TypeComponent,
      TestStarComponent,
      // RatingComponent

     
   ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,FileUploadModule,
  MatIconModule,
  CommonModule,
  MatSnackBarModule,
  BrowserAnimationsModule,
  StarRatingModule,
  MatTooltipModule,
  MatIconModule,
  MatFormFieldModule


  ],

providers: [CousesService,UploadService],
  bootstrap: [AppComponent],

})
export class AppModule {}
