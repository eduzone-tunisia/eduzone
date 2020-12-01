import {
  Component,
  OnInit,
  AfterContentChecked,
  Output,
  OnChanges,
} from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { StudentService } from '../services/student.service';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() filterTerm: any;
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

  // ngAfterContentInit() {
  //   this.getConnectedTeacher();
  //   this.getStudentProfile();
  // }

  ngOnInit() {
    this.getConnectedTeacher();
    this.getStudentProfile();
  }

  getConnectedTeacher() {
    console.log('id', this.id);
    this.teacherService.getConnectedTeacher(this.id).subscribe((res) => {
      this.user = res;

      console.log(res);
      console.log('user', this.user);
    });
  }

  getStudentProfile() {
    this.studentService.studentProfile(this.id).subscribe(
      (res) => {
        console.log(res);
        this.student = res;

        console.log('student', this.student);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterContentChecked() {
    this.isLoggedIn();
    this.teachers();
    this.students();
  }

  isLoggedIn() {
    if (typeof localStorage.getItem('token') === 'string') {
      this.loggedIn = true;
    }
  }

  teachers() {
    if (this.user && !this.student) this.teacherloggedIn = true;
  }

  students() {
    if (this.student && !this.user) this.studentloggedIn = true;
  }

  clearStorage() {
    localStorage.clear();
    location.reload();
  }
}
