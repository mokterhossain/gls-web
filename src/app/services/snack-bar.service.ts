import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { AlertSnackBarComponent } from '../shared/alert-snack-bar/alert-snack-bar.component';
import { SnackBar } from './snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  success(message: string, autoClose: boolean = false): void {
    this.openSnackBar(message, SnackBar.success, autoClose);
  }

  danger(message: string, autoClose: boolean = false): void {
    this.openSnackBar(message, SnackBar.danger, autoClose);
  }

  info(message: string, autoClose: boolean = false): void {
    this.openSnackBar(message, SnackBar.info, autoClose);
  }

  warning(message: string, autoClose: boolean = false): void {
    this.openSnackBar(message, SnackBar.warning, autoClose);
  }

  private openSnackBar(message: string, action: string, autoClose: boolean): MatSnackBarRef<any> {
    const panelClass = ['text-white', 'has-text-centered', 'is-shadowless'];
    panelClass.push(`${ 'has-background-' }${ action }`);
    let snackbarConfig: MatSnackBarConfig = {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      panelClass,
      data: {
        message, action
      }
    };
    snackbarConfig = autoClose ? { ...snackbarConfig, duration: 5000 } : snackbarConfig;
    return this.snackBar.openFromComponent(AlertSnackBarComponent, snackbarConfig);
  }
}
