import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SharedSearchService} from '../services/sharedsearch.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-searchResult',
  templateUrl: './searchResult.component.html',
  styleUrls: ['./searchResult.component.scss']
})
export class SearchResultComponent implements OnInit {
  courses : any;
  course : any;

  constructor(private sharedSearchService :SharedSearchService) { }

  ngOnInit()  {
     this.courses = this.sharedSearchService.getCourse()
     console.log("i m in the srearch result", this.courses)
     this.course = this.courses[0]
  }

}
