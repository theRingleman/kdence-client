import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Goal } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalCardComponent implements OnInit {
  @Input() goal!: Goal;

  isComplete!: boolean;

  ngOnInit(): void {
    this.isComplete = this.goal.completionValue <= this.goal.earnedValue;
  }
}
