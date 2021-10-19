import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UsersFacade } from '@kdence-client/users/data-access';
import { AuthFacade } from '@kdence-client/auth';

@Component({
  selector: 'kdence-client-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  currentUser$ = this.usersFacade.currentUser$;
  isLoggedIn$ = this.authFacade.loggedIn$;

  constructor(
    private usersFacade: UsersFacade,
    private authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this.authFacade.isLoggedIn();
  }
}
