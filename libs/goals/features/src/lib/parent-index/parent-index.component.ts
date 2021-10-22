import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GoalsFacade } from '@kdence-client/goals/data-access';
import { UsersFacade } from '@kdence-client/users/data-access';
import { take } from 'rxjs/operators';

@Component({
  selector: 'kdence-client-parent-index',
  templateUrl: './parent-index.component.html',
  styleUrls: ['./parent-index.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentIndexComponent implements OnInit {
  goals$ = this.goalsFacade.activeGoals$;

  constructor(
    private goalsFacade: GoalsFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.usersFacade.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.goalsFacade.loadActiveGoals(user.household.id);
      } else {
        throw new Error(
          'There is not an active user available, please login and try again.'
        );
      }
    });
  }
}
