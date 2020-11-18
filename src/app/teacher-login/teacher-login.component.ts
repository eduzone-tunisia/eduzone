import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  teacher = {
    email: '',
    password: '',
  };
  loggedIn = false;

  validationError = '';
  constructor( private teacherService : TeacherService) { }

  ngOnInit() {
  }


  login() {
    const userInfo = this.teacher;
    this.teacherService.teacherLogin(userInfo).subscribe(
      (res) => {
        this.loggedIn = !this.loggedIn;
        console.log(res);
      },
      (error) => {
        this.validationError = error.error;
        console.log(this.validationError);
      }
    );
  }
}
