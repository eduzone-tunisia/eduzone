import { Component , OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})


export class StudentProfileComponent implements OnInit{
student={}
id=window.localStorage.id
constructor( private studentService : StudentService){}

ngOnInit(){
this.getStudentProfile()

}
getStudentProfile(){
    this.studentService.studentProfile(this.id).subscribe(
        (res) => {
          this.student=res
          console.log(this.student);
        },
        (error) => {
         
          console.log(error);
        }
      );

}
}