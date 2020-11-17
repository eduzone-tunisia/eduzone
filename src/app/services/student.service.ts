import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const studentUrl = 'http://localhost:8080/student/';
const teacherUrl = 'http://localhost:8080/teacher/';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  studentRegister(studentInfo: any): Observable<any> {
    return this.http.post(studentUrl + 'studentRegistration', studentInfo);
  }

  teacherRegister(teacherInfo: any): Observable<any> {
    return this.http.post(teacherUrl + 'add', teacherInfo);
  }
}
