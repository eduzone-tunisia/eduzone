import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  teacherloggedIn: boolean = false;
  studentloggedIn: boolean = false;
  id = localStorage.getItem('id');
  student: any = {};
  user: any = {};
  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService
  ) {}

  ngOnInit() {}

  getConnectedTeacher() {
    console.log('id', this.id);
    this.teacherService.getConnectedTeacher(this.id).subscribe((res) => {
      this.user = res;
      if (this.user) this.teacherloggedIn = true;
      console.log(res);
      console.log('user', this.user);
    });
  }

  getStudentProfile() {
    this.studentService.studentProfile(this.id).subscribe(
      (res) => {
        console.log(res);
        this.student = res;
        if (this.student) this.studentloggedIn = true;
        console.log('student', this.student);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterContentChecked() {
    this.isLoggedIn();
    this.getConnectedTeacher();
    this.getStudentProfile();
  }

  isLoggedIn(){
    if (typeof localStorage.getItem('token') === 'string') {
      this.loggedIn = true;
    }
  }

  clearStorage() {
    localStorage.clear();
    location.reload();
  }
}
