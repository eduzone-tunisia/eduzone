import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../services/upload.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
const uri = 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  downloadURL: Observable<string> | undefined;
  files: File[] = [];
  course: any = {
    teacher: '',
    title: '',
    description: '',
    videoUrl: '',
    imgUrl: '',
    price: '',
    sections: '',
  };

  uploader: FileUploader = new FileUploader({ url: uri });

  attachmentList: any = [];

  constructor(private _fileService: UploadService) {
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      this.attachmentList.push(JSON.parse(response));
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createCourse() {
    this._fileService.createCourse(this.course).subscribe((res) => {
      console.log(res);
    });
  }

  selectedFile(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'dev_setups');
    data.append('cloud_name', 'dxg5qywkt');
    console.log('elyes', data);
    this._fileService.uploadVideo(data).subscribe((res) => {
      console.log(res);
      this.downloadURL = res;
    });
  }

  onSubmit() {
    const data = {
      teacher: localStorage.getItem('id'),
      title: this.course.title,
      description: this.course.description,
      price: this.course.price,
      sections: this.course.sections,
      videoUrl: this.downloadURL,
      imgUrl: this.course.imgUrl,
    };
    console.log(data);
    this._fileService.createCourse(data).subscribe((res) => {
      console.log(res);
    });
  }

  // var img = document.getElementsByTagName('a');
  // f.value.imgUrl = img[img.length - 1].innerHTML;

  // if (f.value.imgUrl === '') {
  //   alert('must upload a picture');
  //   location.reload();
  // }
  // console.log('here');
  // this.UserService.createRegister(f.value).subscribe(
  //   (res) => {
  //     console.log(res);
  //     this.router.navigateByUrl('/');
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}