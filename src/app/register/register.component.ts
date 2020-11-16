import { Component, OnInit } from '@angular/core';
import {StudentService } from '../services/student.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    dateOfBirth: '',
    phoneNumber : '',
    imgUrl : ''
  };

  constructor( private StudentService: StudentService) { }

  ngOnInit(): void {
  }

  register(){
    const studentInfo={
      firstName:this.user.firstName,
      lastName:this.user.lastName,
      email:this.user.email,
      password:this.user.password,
      dateOfBirth:this.user.dateOfBirth,
      phoneNumber:this.user.phoneNumber,
      imgUrl:this.user.imgUrl
    }
    this.StudentService.studentRegister(studentInfo)
    .subscribe(
      res=>{
        console.log(res)
      },
      error=>{
        console.log(error)
      }
    )
    console.log(studentInfo)
   }

 

}