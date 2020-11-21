import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  user: {} = {};
  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    // console.log('id', localStorage.getItem('id'))
    // this.teacherService
    //   .getConnectedTeacher(localStorage.getItem('id'))
    //   .subscribe((res) => {
    //     this.user = res;
    //     console.log(res);
    //     console.log('user', this.user);
    //   });
  }

  ngAfterContentChecked() {
    if (typeof localStorage.getItem('token') === 'string') {
      this.loggedIn = true;
    }
  }

  clearStorage() {
    localStorage.clear();
    location.reload();
  }
}
