import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  course: any;
  selectedValue: any;
  constructor() {}

  sendCourse(data: any) {
    this.course = data;
  }

  getCourse() {
    return this.course;
  }

  sendValue(data : any){
    this.selectedValue = data
  }

  getValue(){
    return this.selectedValue
  }
}
