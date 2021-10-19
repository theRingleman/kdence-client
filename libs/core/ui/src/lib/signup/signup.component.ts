import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateUserDto, Role } from '@kdence-client/users/data-access';

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

  @Output() signupEvent = new EventEmitter<CreateUserDto>();

  constructor(private fb: FormBuilder) {}

  signup() {
    if (this.signupForm.valid) {
      this.signupEvent.emit({
        ...this.signupForm.value,
        roleType: Role.Parent,
      });
    }
  }
}
