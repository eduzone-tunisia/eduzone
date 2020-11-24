import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const serverUrl = 'http://localhost:8080/course/';

@Injectable({
    providedIn: 'root',
  })

  export class CousesService {
    constructor(private http: HttpClient) {}



    getAllcourses() : Observable<any> {
        return this.http.get(serverUrl)
    }


  }