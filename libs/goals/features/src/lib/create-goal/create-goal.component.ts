import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UsersFacade } from '@kdence-client/users/data-access';
import { CreateGoalDto } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGoalComponent {
  currentUser$ = this.usersFacade.currentUser$;

  constructor(private usersFacade: UsersFacade) {}

  createGoal(dto: CreateGoalDto) {
    console.log(dto);
  }
}
