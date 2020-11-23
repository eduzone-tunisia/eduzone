import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UploadService} from '../services/upload.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
const uri = 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  course: any = {
    teacher:'', 
    title:'',
    description:'',
    videoUrl: '',
    price:'',
    sections: '',
  }
  
  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

  constructor(private _fileService:UploadService){

      this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
          this.attachmentList.push(JSON.parse(response));
      }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createCourse() {
    this._fileService.createCourse(this.course).subscribe( res => {
      console.log(res)
    })
  }

  
}
