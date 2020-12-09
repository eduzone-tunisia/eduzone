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
  { data: [0, 55, 110, 175, 215, 270, 320,370,410,525,625], label: ' Balance' },
];

public chartLabels: Array<any> = ['1 November', '5 November', '10 November', ' 15 November', '20 November', '25 November', ' 30 November', '1 December', '5 December','10 December','15 December'];

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
