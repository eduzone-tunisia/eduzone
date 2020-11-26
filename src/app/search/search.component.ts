import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CousesService } from '../services/course.service';
import {SharedSearchService} from '../services/sharedsearch.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  courses: Array<any> = []
  allcourses: any;
  searchText:string = "";
  target : any;
  constructor(private readonly courseServie: CousesService , private router : Router , private sharedSearchService :SharedSearchService) {

  }
  // this is  a life cycle method ruun after changing text in the search text 
  modelChangeFn(value: string) {
    this.searchText = value
  if (this.searchText.length < 1){
      this.courses = this.allcourses
  }
}

  ngOnInit() {
    this.courseServie.getAllcourses().subscribe( (res) => {
      this.courses = res
      this.allcourses=res
      console.log("courses",this.courses)
    })
  }

 
    // send the section to the server 
  

    // this.character = // response;
  
  title = 'angular-text-search-highlight';
  // characters = [
  //   'Ant-Man',
  //   'Aquaman',
  //   'Asterix',
  //   'The Atom',
  //   'The Avengers',
  //   'Batgirl',
  //   'Batman',
  //   'Batwoman',
  // ]
  clickOnMe(item : any){
    console.log(this)
    let filter = this.courses.filter((course) =>  course.title === item.title)
    this.courses = filter
    console.log("after search", this.courses)
    this.sharedSearchService.sendCourse(this.courses)
    this.router.navigateByUrl('/searchResult')
  }
}
