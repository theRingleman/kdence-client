import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: any): void {
    console.log(error);
    let message = '';
    message += error?.statusText ?? error?.message ?? error;

    this.snackBar.open(`${message} Please try again.`, 'Dismiss', {
      duration: 5000,
    });
  }
}
