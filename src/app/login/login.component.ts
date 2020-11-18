import { Component, OnInit } from '@angular/core';
import {StudentService } from '../services/student.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= {
    email : '',
    password : ''
  };
  loggedIn=false;

  validationError=""

  constructor( private StudentService: StudentService) { }

  ngOnInit(): void {
    
   
  }

  login(){

    const userInfo=this.user
    this.StudentService.login(userInfo)
    .subscribe(
      res=>{
        this.loggedIn=!this.loggedIn
        console.log(res)
      },
      error=>{
        this.validationError=error.error;
        console.log(this.validationError)
        
      }
    )
 
    
   }

}