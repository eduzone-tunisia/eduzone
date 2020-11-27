import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule  } from '@angular/material/snack-bar';
@Component({
  selector: 'my-app',
  templateUrl: './test-star.component.html',
  styleUrls: [ './test-star.component.css' ]
})
export class TestStarComponent  {
    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: any;
    snackBarDuration: number = 3000;
    constructor(private snackBar: MatSnackBar) { }
    
    ngOnInit() {
    }
    
    countStar(star: number | undefined) {
      this.selectedValue = star;
      console.log(this.selectedValue)
      this.snackBar.open('You rated ' + star + ' / ' + this.selectedValue, '', {
        duration: this.snackBarDuration,
        panelClass: ['snack-bar']
      });
    }
}