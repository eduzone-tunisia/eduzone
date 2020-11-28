import { Component, OnInit } from '@angular/core';

import {TeacherService} from '../services/teacher.service';
@Component({
  selector: 'app-Balance',
  templateUrl: './Balance.component.html',
  styleUrls: ['./Balance.component.scss']
})
export class BalanceComponent implements OnInit {
 id = localStorage.getItem('id');
 teacher:any;
 balance: any;
  constructor(private teacherService:TeacherService ) { }

  ngOnInit() {
    this.teacherService.getConnectedTeacher(this.id).subscribe(res => {
      console.log(res);
      this.teacher= res;
      this.balance = this.teacher.balance
    })
  }
  
}
