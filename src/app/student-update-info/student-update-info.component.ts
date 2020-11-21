import { Component , OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-update-info',
  templateUrl: './student-update-info.component.html',
  styleUrls: ['./student-update-info.component.css'],
})


export class StudentInfoComponent implements OnInit{
  updatedInfo : any ={}
  id=window.localStorage.id
  
constructor( private studentService : StudentService){}

ngOnInit(){
  
}
updateInfo(){
  this.studentService.updateInfo(this.id,this.updatedInfo)
  .subscribe(
    (res) => {
      console.log(res);
    },
    (error) => {
      
      console.log(error);
    }
  );

}


}

