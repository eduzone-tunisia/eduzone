import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  student = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  registred = false;
  validationError = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    const studentInfo = this.student;
    this.studentService.studentRegister(studentInfo).subscribe(
      (res) => {
        this.registred = !this.registred;
        console.log(res);
        ///send email to student
        this.studentService.sendEmail({ email: this.student.email });
        this.router.navigateByUrl('/home');
      },
      (error) => {
        this.validationError = error.error;
        console.log(this.validationError);
      }
    );
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import {StudentService } from '../services/student.service'
// import {Router} from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   signupForm;
//   constructor(private router: Router, private formBuilder: FormBuilder, private studentService: StudentService) {
//     this.signupForm = this.formBuilder.group({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       phoneNumber: "",
//       specialNeed: false,
//       type: "client",
//       address: "",
//       name: ""
//     });
//   }

//   ngOnInit(): void {

//   }

//   onSubmit(userInfo) {
//     console.log(userInfo);
//     const companyInfo ={
//     type: userInfo.type,
//     name: userInfo.name,
//     emailCompany: userInfo.email,
//     passwordCompany: userInfo.password,
//     phoneNumberCompany: userInfo.phoneNumber,
//     adress: userInfo.address,
//     imgUrlCompany: "http://company.jpg",
//     }
//     const clientInfo ={
//       type: userInfo.type,
//       firstName: userInfo.firstName,
//       lastName: userInfo.lastName,
//       email: userInfo.email,
//       password: userInfo.password,
//       phoneNumber: userInfo.phoneNumber,
//       specialNeed: userInfo.specialNeed,
//       imgUrl: "http://client.jpg",
//     }
//     if(userInfo.type === "student") {
//       this.studentService.studentRegister(companyInfo).subscribe((company: any) => {
//         if(company.message) {
//           alert(company.message)
//           return;
//         }
//         console.log("account successfully created", company);
//         this.router.navigate(['login'])
//       })
//     }else{
//       this.userService.addNewClient(clientInfo).subscribe((client:any) => {
//         if(client.message) {
//           alert(client.message)
//           return;
//         }
//         console.log("account successfully created", client);
//         this.router.navigate(['login'])
//       })
//     }

//   }

// }
