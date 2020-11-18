import { Component, OnInit } from '@angular/core';
import {CousesService} from '../couses.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: any;
  frontend:any;
  backend:any;
  constructor(private coursesService: CousesService) { 
    this.courses = this.coursesService.courses
  }
  slides: any = [[]];
  chunk(arr: any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      if(arr[i].cate === "front-end"){
      R.push(arr.slice(i, i + chunkSize));
    }
  }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.courses, 3);
  }


  filterCourse(cateid: any) {
    const catecourses = this.courses.filter((course: { cate: any; }) => {
      return course.cate === cateid;
    });
    return catecourses;
  }

}
