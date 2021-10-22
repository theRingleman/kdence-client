import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  loadCurrentUserSuccess,
  UsersFacade,
} from '@kdence-client/users/data-access';
import {
  AuthActionTypes,
  AuthFacade,
  fromAuthActions,
  LoginSuccess,
} from '@kdence-client/auth';
import { ofType } from '@ngrx/effects';
import { Subscription } from 'rxjs';
import { ActionsSubject } from '@ngrx/store';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'kdence-client-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit, OnDestroy {
  currentUser$ = this.usersFacade.currentUser$;
  private loggedInSub?: Subscription;

  constructor(
    private usersFacade: UsersFacade,
    public authFacade: AuthFacade,
    private actionsSubject: ActionsSubject,
    private router: Router
  ) {}

  logout() {
    this.authFacade.logout();
  }

  ngOnDestroy(): void {
    this.loggedInSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.loggedInSub = this.actionsSubject
      .pipe(ofType(loadCurrentUserSuccess))
      .subscribe(() => this.router.navigate(['goals']));
  }
}
