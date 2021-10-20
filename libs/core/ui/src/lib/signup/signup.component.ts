import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Role } from '@kdence-client/users/data-access';
import { Router } from '@angular/router';
import { HouseholdsFacade } from '@kdence-client/households/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'kdence-client-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private householdsFacade: HouseholdsFacade,
    private snackBar: MatSnackBar
  ) {}

  signup() {
    if (this.signupForm.valid) {
      this.householdsFacade.createHousehold({
        ...this.signupForm.value,
        roleType: Role.Parent,
      });
      this.snackBar.open(
        'Signup Successful. Please login to continue.',
        'Dismiss',
        { duration: 5000 }
      );
      this.router.navigate(['auth/login']);
    }
  }
}
