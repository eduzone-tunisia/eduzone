import { Component, OnInit } from '@angular/core';
import {StudentService } from '../services/student.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    dateOfBirth: '',
    phoneNumber : '',
   
  };

  emailExsits=""

  constructor( private StudentService: StudentService) { }

  ngOnInit(): void {
   
  }

  register(){
    const studentInfo=this.student
    this.StudentService.studentRegister(studentInfo)
    .subscribe(
      res=>{
        console.log(res)
      },
      error=>{
        this.emailExsits=error.error;
        console.log(this.emailExsits)
        alert(this.emailExsits)
      }
    )
 
    
   }

}