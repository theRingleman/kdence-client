import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { HouseholdsFacade } from '@kdence-client/households/data-access';
import { UsersEntity, UsersFacade } from '@kdence-client/users/data-access';
import { first } from 'rxjs/operators';

@Component({
  selector: 'kdence-client-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  currentUser!: UsersEntity | null;

  constructor(
    public householdsFacade: HouseholdsFacade,
    public usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    if (this.currentUser?.household) {
      this.householdsFacade.loadHousehold(this.currentUser.household.id);
      this.usersFacade.init(this.currentUser.household.id);
    }
  }

  private getCurrentUser(): void {
    this.usersFacade.currentUser$
      .pipe(first())
      .subscribe((user) => (this.currentUser = user));
  }
}
