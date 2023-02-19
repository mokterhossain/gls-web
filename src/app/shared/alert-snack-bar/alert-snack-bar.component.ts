import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarData } from 'src/app/services/snack-bar-data';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-alert-snack-bar',
  templateUrl: './alert-snack-bar.component.html',
  styleUrls: ['./alert-snack-bar.component.scss']
})
export class AlertSnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData, private snackBarRef: MatSnackBarRef<SnackBarService>) {}

  ngOnInit(): void {}

  close(): void {
    this.snackBarRef.dismiss();
  }
}
