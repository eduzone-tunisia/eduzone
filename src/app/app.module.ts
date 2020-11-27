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
import { StudentInfoComponent } from './student-update-info/student-update-info.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
// import { CousesService } from './couses.service';

import { UploadService } from './services/upload.service';
import { HomeComponent } from './home/home.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FileUploadModule } from 'ng2-file-upload';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TermOfServiceComponent } from './termOfService/termOfService.component';
import { VideoPlayerComponent } from './videoPlayer/videoPlayer.component';
import { FilterComponent } from './filter/filter.component';
import { TypeComponent } from './type/type.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
 //pipe/search/filter
import { FilterPipe  } from './search/filter.pipe';
import { SearchComponent } from './search/search.component';
import { HighlightDirective } from './search/highlight.directive'
import { SearchResultComponent } from './searchResult/searchResult.component';
import { CheckOutPayementComponent } from './checkOutPayement/checkOutPayement.component';
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
    TermOfServiceComponent,
    FilterComponent,
    CourseFormComponent,
    TypeComponent,
    TeacherProfileComponent,
  VideoPlayerComponent,
      SearchComponent,
      //search/pipe
      FilterPipe,
      HighlightDirective,
      SearchResultComponent,
      CheckOutPayementComponent
   ],


  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    NgxDropzoneModule,
    
  ],

  providers: [UploadService],
  bootstrap: [AppComponent, HomeComponent, CourseFormComponent],
})
export class AppModule {}
