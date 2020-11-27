import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  course: any;
  constructor() {}

  sendCourse(data: any) {
    this.course = data;
  }

  getCourse() {
    return this.course;
  }
}
