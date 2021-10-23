import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { GoalsEntity } from '@kdence-client/goals/models';
import { Router } from '@angular/router';
import { GoalsService } from '@kdence-client/goals/data-access';

@Component({
  selector: 'kdence-client-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalCardComponent implements OnInit {
  @Input() goal!: GoalsEntity;

  isComplete!: boolean;
  id!: number;

  constructor(private router: Router, private goalsService: GoalsService) {}

  ngOnInit(): void {
    if (this.goal) {
      this.isComplete = this.goal.completionValue <= this.goal.earnedValue;
    }
  }

  goalSelected(goal: GoalsEntity) {
    this.goalsService.selectGoal(goal);
    this.router.navigate([`goals/${goal.id}`]);
  }
}
