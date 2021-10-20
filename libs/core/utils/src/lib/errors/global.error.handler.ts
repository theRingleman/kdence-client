import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: any): void {
    if (!(error instanceof HttpErrorResponse)) {
      error = error.erjection;
    }

    this.snackBar.open(`${error.statusText}. Please try again.`, 'Dismiss', {
      duration: 5000,
    });
  }
}
