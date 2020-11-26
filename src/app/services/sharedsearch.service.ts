import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedSearchService {
  course: any;
  constructor() {}

  sendCourse(data: any) {
    this.course = data;
  }

  getCourse() {
    return this.course;
  }
}