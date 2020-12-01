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

 public chartType: string = 'line';
 public chartDatasets: Array<any> = [
  { data: [0, 32, 42, 55, 60, 61, 80], label: ' Balance' },
];

public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

public chartColors: Array<any> = [
  
  {
    backgroundColor: 'rgba(0, 137, 132, .2)',
    borderColor: 'rgba(0, 10, 130, .7)',
    borderWidth: 2,
  }
];

public chartOptions: any = {
  responsive: true
};


  constructor(private teacherService:TeacherService ) { }

  ngOnInit() {
    this.teacherService.getConnectedTeacher(this.id).subscribe(res => {
      console.log(res);
      this.teacher= res;
      this.balance = this.teacher.balance
    })
  }
  
}
