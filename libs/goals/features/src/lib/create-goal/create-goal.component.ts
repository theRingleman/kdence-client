import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UsersFacade } from '@kdence-client/users/data-access';
import { CreateGoalDto } from '@kdence-client/goals/models';
import { GoalsFacade } from '@kdence-client/goals/data-access';
import { take } from 'rxjs/operators';

@Component({
  selector: 'kdence-client-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGoalComponent {
  currentUser$ = this.usersFacade.currentUser$;

  constructor(
    private usersFacade: UsersFacade,
    private goalsFacade: GoalsFacade
  ) {}

  createGoal(dto: CreateGoalDto) {
    let householdId: number | undefined;
    this.currentUser$
      .pipe(take(1))
      .subscribe((user) => (householdId = user?.household?.id));
    if (householdId === undefined) {
      throw new Error('User is not attached to a household.');
    } else {
      this.goalsFacade.createGoal(householdId, {
        ...dto,
        completionValue: dto.completionValue * 100,
      });
    }
  }
}
