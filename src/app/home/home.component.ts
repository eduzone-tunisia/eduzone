import { Component, OnInit } from '@angular/core';
import {CousesService} from '../couses.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: any;
  frontcourses: any;
  backcourses: any;
  constructor(private coursesService: CousesService) { 
    this.frontcourses = this.coursesService.courses.filter(cate => cate.cate==="front-end")
    this.backcourses = this.coursesService.courses.filter(cate => cate.cate==="back-end")
  }

  ngOnInit() {
    
  }


 

}
