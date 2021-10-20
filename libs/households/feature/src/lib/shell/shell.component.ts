import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { HouseholdsFacade } from '@kdence-client/households/data-access';
import { UsersFacade } from '@kdence-client/users/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kdence-client-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit, OnDestroy {
  private currentUserSub!: Subscription;
  householdUsers$ = this.usersFacade.allUsers$;

  constructor(
    public householdsFacade: HouseholdsFacade,
    public usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.currentUserSub = this.usersFacade.currentUser$.subscribe((user) => {
      if (user !== null) {
        this.householdsFacade.loadHousehold(user!.household!.id);
        this.usersFacade.getHouseholdUsers(user!.household!.id);
      }
    });
  }

  ngOnDestroy() {
    this.currentUserSub.unsubscribe();
  }
}
