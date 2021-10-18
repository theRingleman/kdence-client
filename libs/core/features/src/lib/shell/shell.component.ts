import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UsersFacade } from '@kdence-client/users/data-access';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'kdence-client-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  currentUser$ = this.usersFacade.currentUser$;
  isLoggedIn$ = this.usersFacade.isLoggedIn$;

  constructor(private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.usersFacade.isLoggedIn();
  }
}
