import { Component , OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { CousesService} from  '../couses.service'
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})


export class StudentProfileComponent implements OnInit{
student={}
id=window.localStorage.id
loggedIn=false
constructor( private studentService : StudentService ,private coursesService:CousesService ){}
//dummy data to display in the profile
myCourses = this.coursesService.courses.filter(cate => cate.cate==="front-end")
ngOnInit(){
this.getStudentProfile()

}
getStudentProfile(){
    this.studentService.studentProfile(this.id).subscribe(
        (res) => {
          this.student=res
          this.loggedIn=!this.loggedIn
        
        },
        (error) => {
          console.log(error);
        }
      );

}
}