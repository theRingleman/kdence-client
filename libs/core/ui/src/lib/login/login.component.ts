import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginInput } from '@kdence-client/users/data-access';

@Component({
  selector: 'kdence-client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  @Output()
  loginEvent = new EventEmitter<LoginInput>();

  constructor(private fb: FormBuilder) {}

  login() {
    if (this.loginForm.valid) {
      this.loginEvent.emit(this.loginForm.value);
    }
  }
}
