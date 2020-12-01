import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { CousesService } from '../services/course.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
<<<<<<< HEAD


export class StudentProfileComponent implements OnInit{
student :any ={}
id : any =window.localStorage.id
loggedIn :any=false
constructor( private studentService : StudentService ,private coursesService:CousesService ){}
//dummy data to display in the profile
myCourses = this.coursesService.courses.filter(cate => cate.cate==="front-end")
ngOnInit(){
this.getStudentProfile()


}
getStudentProfile(){
    this.studentService.studentProfile(this.id).subscribe(
        (res) => {
          this.student=res
          this.loggedIn=true
        
        
        },
        (error) => {
          console.log(error);
=======
export class StudentProfileComponent implements OnInit {
  student: any;
  id = window.localStorage.id;
  myCourses: Array<any> = [];
  video: any;
  course: any;
  loggedIn = false;
  constructor(
    private coursesService: CousesService,
    private router: Router,
    private studentService: StudentService,
    private sharedService: SharedService
  ) {}
  //dummy data to display in the profile
  // myCourses = this.coursesService.courses.filter(cate => cate.cate==="front-end")
  ngOnInit() {
    this.getStudentProfile();
  }
  getStudentProfile() {
    this.studentService.studentProfile(this.id).subscribe(
      (res) => {
        console.log('res', res.videos);
        this.student = res;
        this.video = res.videos;
        console.log('video', this.video);
        for (let i = 0; i < this.video.length; i++) {
          this.coursesService.getOne(this.video[i]).subscribe((res) => {
            console.log(res);
            this.myCourses.push(res);
            console.log('my courses in get one', this.myCourses);
          });
>>>>>>> 91fa94f2fe60e79dda5b3e07ccca8666ccb8bb40
        }
        // console.log('student in profile', this.student.videos);
        this.loggedIn = !this.loggedIn;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onClick(item: any) {
    console.log('item', item);
    this.course = item;
    if (this.course) {
      this.sharedService.sendCourse(this.course);
    }
    // console.log('course', this.course)
    this.router.navigateByUrl('/videoPlayer');
  }
}
