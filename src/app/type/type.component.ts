import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';
// import {CousesService} from '../couses.service'
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
})
export class TypeComponent implements OnInit {
  courses: any;
  mathCourses: any;
  // frontcourses: any;
  constructor(private coursesService: CousesService) {
    //   this.frontcourses = this.coursesService.courses.filter(cate => cate.cate==="front-end")
  }

  ngOnInit() {
    this.coursesService.getAllcourses().subscribe((res) => {
      this.courses = res;
      this.mathCourses = this.courses.filter(
        (course: any) => course.sections === 'math'
      );
      console.log('math', this.mathCourses);
    });
  }
}
