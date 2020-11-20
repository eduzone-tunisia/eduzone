import { Component, OnInit , AfterContentChecked } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private teacherService: TeacherService) {}

  ngOnInit() { }
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
