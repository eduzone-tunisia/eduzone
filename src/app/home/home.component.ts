import { Component, Input, OnInit, Output } from '@angular/core';
// import {CousesService} from '../couses.service'
import { CousesService } from '../services/course.service';
import { SharedService } from '../services/shared.service';
import { filter } from 'rxjs/operators';
import { VideoPlayerComponent } from '../videoPlayer/videoPlayer.component';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { ObjectUnsubscribedError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id = window.localStorage.id;
  student: any;
  courses: any;
  CScourses: any;
  mathcourses: any;
  sciencecourse: any;
  gDcourse: any;
  course: any;
  ObjectId: any;
  constructor(
    private coursesService: CousesService,
    private router: Router,
    private studentService: StudentService,
    private sharedService: SharedService
  ) {
    //console.log(this.coursesService.courses)
    // this.CScourses = this.courses.filter((cours: any ) => cours.sections==="computer science")
    // this.backcourses = this.coursesService.courses.filter(cate => cate.cate==="back-end")
  }

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getAllcourses().subscribe((res) => {
      console.log(res);
      this.courses = res;
      if (this.courses) {
        this.CScourses = this.courses.filter(
          (cours: any) => cours.sections === 'computer science'
        );

        this.mathcourses = this.courses.filter(
          (cours: any) => cours.sections === 'math'
        );

        this.sciencecourse = this.courses.filter(
          (cours: any) => cours.sections === 'science'
        );
        this.gDcourse = this.courses.filter(
          (cours: any) => cours.sections === 'graphic design'
        );
      }
    });
  }

 
  clickToBuy(item: any) {
    console.log('hi', item);
    this.studentService.studentProfile(this.id).subscribe(
      (res) => {
        this.student = res;
        if (this.student) {
          this.student.videos.push(item._id);
          this.studentService
            .buyCourse(this.id, this.student)
            .subscribe((res) => {
              console.log(res);
            });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
