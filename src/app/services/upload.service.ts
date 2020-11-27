import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/file/';

const video = 'http://localhost:8080/course/';
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  //declare the observable
  constructor(private http: HttpClient) {}

  uploadVideo(data: any): Observable<any> {
    return this.http.post(baseUrl + 'upload', data);
  }
  createCourse(data : any): Observable<any>{
    return this.http.post(video +'addCourse' , data)
  }
}
