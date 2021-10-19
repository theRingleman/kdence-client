import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LoginInput, UsersFacade } from '@kdence-client/users/data-access';
import { HouseholdsFacade } from '@kdence-client/households/data-access';
import { SignupInput } from '@kdence-client/core/data-access';
import { AuthFacade } from '@kdence-client/auth';

@Component({
  selector: 'kdence-client-login-signup-wrapper',
  templateUrl: './login-signup-wrapper.component.html',
  styleUrls: ['./login-signup-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSignupWrapperComponent {
  constructor(
    private usersFacade: UsersFacade,
    private householdsFacade: HouseholdsFacade,
    private authFacade: AuthFacade
  ) {}

  login(input: LoginInput) {
    this.authFacade.login(input);
    this.usersFacade.loadUser();
  }

  signup(input: SignupInput) {
    this.householdsFacade.createHousehold(input);
  }
}
