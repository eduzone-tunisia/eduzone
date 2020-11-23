import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/file/upload';

const video='http://localhost:8080/course/'
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  //declare the observable
  constructor(private http: HttpClient) {}

  createCourse(data: { videoUrl: any; }): Observable<any> {
  
   
  
    return this.http.post(video + 'addCourse', data);
  }

 
}
