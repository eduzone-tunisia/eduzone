import { Component, Input, OnInit } from '@angular/core';
import { CousesService } from '../services/course.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  characters = [];
  constructor(private readonly courseServie: CousesService) {

  }

  ngOnInit() {
   this.getCourses()
  }

  getCourses(){
    // send the section to the server 
    this.courseServie.getAllcourses().subscribe( (res) => {
      this.characters = res
      console.log("courses",this.characters)
      
    })

    // this.character = // response;
  }
  title = 'angular-text-search-highlight';

  searchText = '';
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
}
