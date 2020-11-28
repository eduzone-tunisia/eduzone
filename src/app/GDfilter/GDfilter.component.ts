import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';

@Component({
  selector: 'app-GDfilter',
  templateUrl: './GDfilter.component.html',
  styleUrls: ['./GDfilter.component.scss']
})
export class GDfilterComponent implements OnInit {
  courses: any;
  backcourses: any;
  constructor(private coursesService: CousesService) { }

  ngOnInit() {
    this.coursesService.getAllcourses().subscribe((res) => {
      this.courses = res;
      this.backcourses = this.courses.filter(
        (course: any) => course.sections === 'graphic design'
      );
      console.log('math', this.backcourses);
    });
  }

}
