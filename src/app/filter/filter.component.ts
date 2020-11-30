import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';
// import {CousesService} from '../couses.service'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  courses: any;
  backcourses: any;
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(private coursesService: CousesService) {}

  ngOnInit() {
    this.coursesService.getAllcourses().subscribe((res) => {
      this.courses = res;
      this.backcourses = this.courses.filter(
        (course: any) => course.sections === 'computer science'
      );
      console.log('math', this.backcourses);
    });
  }
}
