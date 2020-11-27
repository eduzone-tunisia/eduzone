import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
})
export class TeacherProfileComponent implements OnInit {
  courses: any;
  id = localStorage.getItem('id');
  constructor(private cousesService: CousesService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.cousesService
      .getTeachercourse({ teacherId: this.id })
      .subscribe((res) => {
        this.courses = res;
        console.log('response', this.courses);
      });
  }
}
