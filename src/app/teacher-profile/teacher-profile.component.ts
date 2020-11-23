import { Component , OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { CousesService} from  '../couses.service'
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
})


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