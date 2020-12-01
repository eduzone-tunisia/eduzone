<<<<<<< HEAD
import { Component , OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { CousesService} from  '../couses.service'
=======
import { Component, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';

>>>>>>> 91fa94f2fe60e79dda5b3e07ccca8666ccb8bb40
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
})
<<<<<<< HEAD


export class TeacherProfileComponent implements OnInit{
teacher:any ={}
id : any =window.localStorage.id
loggedIn :any=false
constructor(private teacherService :TeacherService ,private coursesService:CousesService ){}
//dummy data to display in the profile
myCourses = this.coursesService.courses.filter(cate => cate.cate==="front-end")
ngOnInit(){
    this.getTeacherProfile()


}
getTeacherProfile(){
    this.teacherService.getConnectedTeacher(this.id).subscribe(
        (res) => {
          this.teacher=res
          this.loggedIn=true
        
        
        },
        (error) => {
          console.log(error);
        }
      );

}
}
=======
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
>>>>>>> 91fa94f2fe60e79dda5b3e07ccca8666ccb8bb40
