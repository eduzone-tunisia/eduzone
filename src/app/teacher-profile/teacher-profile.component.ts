import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
})
export class TeacherProfileComponent implements OnInit {
  courses: any;
  teacher: any;
  id = localStorage.getItem('id');
  constructor(
    private cousesService: CousesService,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    this.getCourses();
    this.getTeacher();
  }

  getCourses() {
    this.cousesService
      .getTeachercourse({ teacherId: this.id })
      .subscribe((res) => {
        this.courses = res;
        console.log('response', this.courses);
      });
  }

  getTeacher() {
    this.teacherService.getConnectedTeacher(this.id).subscribe((res) => {
      this.teacher = res;
    });
  }
}
