import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Goal } from '@kdence-client/goals/models';
import { ActivatedRoute, Router } from '@angular/router';

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
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isComplete = this.goal.completionValue <= this.goal.earnedValue;
    this.route.queryParams.subscribe((params) => (this.id = params['id']));
  }
}
