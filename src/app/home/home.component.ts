import { Component, OnInit } from '@angular/core';
// import {CousesService} from '../couses.service'
import { CousesService } from '../services/course.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  courses: any;
  CScourses: any;
  mathcourses: any;
  sciencecourse : any;
  gDcourse : any;
  constructor(private coursesService: CousesService) {
    //console.log(this.coursesService.courses)
    // this.CScourses = this.courses.filter((cours: any ) => cours.sections==="computer science")
    // this.backcourses = this.coursesService.courses.filter(cate => cate.cate==="back-end")
  }

  ngOnInit() {
    this.getAllCourses();
   
  }

  getAllCourses() {
    this.coursesService.getAllcourses().subscribe((res) => {
      console.log(res);
      this.courses = res;
      if (this.courses) {
        this.CScourses = this.courses.filter((cours: any) => 
          cours.sections === 'computer science'
        )
     
        this.mathcourses = this.courses.filter((cours: any) => 
        cours.sections === 'math'
      )
     
      this.sciencecourse= this.courses.filter((cours :any) => 
       cours.sections ==="science")
       this.gDcourse= this.courses.filter((cours :any) => 
       cours.sections ==="graphic design")
      }
    });
  }
  
  onClick(item: any){
    console.log(item)
  }
}
