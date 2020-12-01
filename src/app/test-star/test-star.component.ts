import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CousesService } from '../services/course.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'my-app',
  templateUrl: './test-star.component.html',
  styleUrls: ['./test-star.component.css'],
})
export class TestStarComponent {
  courseId: any;
  stars: number[] = [1, 2, 3, 4, 5];
  @Input() selectedValue: any;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
  snackBarDuration: number = 3000;
  constructor(
    private snackBar: MatSnackBar,
    private sharedService: SharedService,
    private cousesService: CousesService
  ) {}

  ngOnInit() {
    this.courseId = this.sharedService.getValue();
    console.log('courseId', this.courseId);
  }

  countStar(star: number | undefined) {
    this.selectedValue = star;
    this.change.emit(this.selectedValue);
    console.log('selected', this.selectedValue);
    this.cousesService
      .updateCourseRating(this.courseId, { rating: this.selectedValue })
      .subscribe((res) => {
        console.log(res);
      });
    this.snackBar.open('You rated ' + star + ' / ' + this.selectedValue, '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar'],
    });
  }
}
