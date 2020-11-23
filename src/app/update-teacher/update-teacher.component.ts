import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css'],
})
export class UpdateTeacherComponent implements OnInit {
 
  registred = false;
  validationError = '';
  constructor(private teacherService: TeacherService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.teacherService
      .teacherUpdate(f.value, localStorage.getItem('id'))
      .subscribe(
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
