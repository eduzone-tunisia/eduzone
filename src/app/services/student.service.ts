import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

const serverUrl = 'http://localhost:8080/student/';


   @Injectable({
    providedIn:'root'
  })

  export class StudentService { 

   constructor (private http :HttpClient ) {}

   studentRegister(studentInfo : any ) : Observable <any> {
       return this.http.post( serverUrl + "studentRegistration",studentInfo)
   }
       login(userInfo :any) :Observable <any>{
         return this.http.post( serverUrl + "login",userInfo )
       }
  }