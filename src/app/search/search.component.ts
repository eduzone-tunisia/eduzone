import { Component, Input, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  courses: Array<any> = []
  allcourses: any;
  searchText:string = "";
  constructor(private readonly courseServie: CousesService) {

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
    let filter = this.courses.filter((course) =>  course.title === item.title)
    this.courses = filter
  }
}
