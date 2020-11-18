import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css'],
})
export class TeacherRegisterComponent implements OnInit {
  teacher = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  registred = false;
  validationError = '';
  constructor(private teacherService: TeacherService) {}

  ngOnInit() {}

  register() {
    const teacherInfo = this.teacher;
    this.teacherService.teacherRegister(teacherInfo).subscribe(
      (res) => {
        this.registred = !this.registred;
        console.log(res);
      },
      (error) => {
        this.validationError = error.error;
        console.log(this.validationError);
      }
    );
  }
}
