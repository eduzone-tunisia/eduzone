import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  constructor() { }
  share() {
    console.log("The Course has been Add!")
    window.alert('The Course has been Add!');
  }


  

  ngOnInit() {
  }

}
