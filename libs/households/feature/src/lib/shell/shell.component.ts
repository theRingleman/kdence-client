import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { HouseholdsFacade } from '@kdence-client/households/data-access';
import { Role, UsersFacade } from '@kdence-client/users/data-access';
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
  isParent = false;

  constructor(
    public householdsFacade: HouseholdsFacade,
    public usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.currentUserSub = this.usersFacade.currentUser$.subscribe((user) => {
      if (user) {
        this.householdsFacade.loadHousehold(user.household.id);
        this.usersFacade.getHouseholdUsers(user.household.id);
        this.isParent = !!user.roles.find((r) => r.name === Role.Parent);
      }
    });
  }

  ngOnDestroy() {
    this.currentUserSub.unsubscribe();
  }
}
