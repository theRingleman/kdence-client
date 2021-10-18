import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import { LoginInput, UsersFacade } from '@kdence-client/users/data-access';

@Component({
  selector: 'kdence-client-login-signup-wrapper',
  templateUrl: './login-signup-wrapper.component.html',
  styleUrls: ['./login-signup-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSignupWrapperComponent {
  constructor(private usersFacade: UsersFacade) {}

  login(input: LoginInput) {
    this.usersFacade.login(input.email, input.password);
  }
}
