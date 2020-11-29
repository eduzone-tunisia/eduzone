import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';
@Component({
  selector: 'app-science-filter',
  templateUrl: './science-filter.component.html',
  styleUrls: ['./science-filter.component.scss']
})
export class ScienceFilterComponent implements OnInit {
  courses: any;
  backcourses: any;
  constructor(private coursesService: CousesService) { }

  ngOnInit() {
    this.coursesService.getAllcourses().subscribe((res) => {
      this.courses = res;
      this.backcourses = this.courses.filter(
        (course: any) => course.sections === 'science'
      );
      console.log('math', this.backcourses);
    });
  }

}



