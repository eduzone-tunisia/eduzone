import { Component, Input, OnInit, Output } from '@angular/core';
// import {CousesService} from '../couses.service'
import { CousesService } from '../services/course.service';
import { SharedService } from '../services/shared.service';
import { filter } from 'rxjs/operators';
import { VideoPlayerComponent } from '../videoPlayer/videoPlayer.component';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { TeacherService } from '../services/teacher.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id = window.localStorage.id;
  isstudent: boolean = false;
  balance: any;
  student: any;
  courses: any;
  CScourses: any;
  mathcourses: any;
  sciencecourse: any;
  gDcourse: any;
  course: any;
  ObjectId: any;
  selectedValue: any;
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(
    private coursesService: CousesService,
    private router: Router,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private sharedService: SharedService
  ) {
    //console.log(this.coursesService.courses)
    // this.CScourses = this.courses.filter((cours: any ) => cours.sections==="computer science")
    // this.backcourses = this.coursesService.courses.filter(cate => cate.cate==="back-end")
  }

  ngOnInit() {
    this.getAllCourses();
    this.getConnectedStudent();
  }
  getConnectedStudent() {
    this.studentService.studentProfile(this.id).subscribe((res) => {
      this.student = res;
      console.log('student in home', this.student);
      if (this.student !== null) this.isstudent = true;
      console.log('is logged in ', this.isstudent);
    });
  }

  getAllCourses() {
    this.coursesService.getAllcourses().subscribe((res) => {
      console.log(res);
      this.courses = res;
      this.selectedValue = this.courses.rating;
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
        if (this.student && !this.student.videos.includes(item._id)) {
          console.log('item ouss', item);
          this.teacherService
            .getConnectedTeacher(item.teacher)
            .subscribe((res) => {
              console.log(res);
              this.balance = res.balance + item.price;
              console.log('new balance is', this.balance);
              this.teacherService
                .teacherUpdateBalance(item.teacher, { balance: this.balance })
                .subscribe((res) => {
                  console.log(res);
                });
            });
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
