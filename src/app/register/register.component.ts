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
    password : ''
  };
  registred=false;
  validationError="";

  constructor( private StudentService: StudentService) { }

  ngOnInit(): void {
   
  }

  register(){
    const studentInfo=this.student
    this.StudentService.studentRegister(studentInfo)
    .subscribe(
      res=>{
        this.registred=!this.registred
        console.log(res)
      },
      error=>{
        this.validationError=error.error;
        console.log(this.validationError)
        
      }
    )
 
    
   }

}