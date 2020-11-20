import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  teacher = {
    id:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber:'',
    dateOfBirth:'',
    imageUrl:'',
    experience:''
  };
  constructor(private teacherService:TeacherService ) { }

  ngOnInit() {
  }
  update(){
    const teacherInfo = this.teacher;
    this.teacherService.teacherUpdate(teacherInfo).subscribe( (res) => {
      console.log(res);
    },
    (error) => {
     
      console.log(error);
    })

  }

}
