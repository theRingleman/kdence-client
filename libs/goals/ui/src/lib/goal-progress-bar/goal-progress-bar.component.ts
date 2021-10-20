import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Goal } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-goal-progress-bar',
  templateUrl: './goal-progress-bar.component.html',
  styleUrls: ['./goal-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalProgressBarComponent {
  @Input() goal!: Goal;

  getGoalValue(): number {
    return Math.floor(
      (100 * this.goal.earnedValue) / this.goal.completionValue
    );
  }
}
