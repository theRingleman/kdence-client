import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { GoalsEntity } from '@kdence-client/goals/models';
import { GoalsFacade } from '@kdence-client/goals/data-access';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'kdence-client-active-goals-report',
  templateUrl: './active-goals-report.component.html',
  styleUrls: ['./active-goals-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveGoalsReportComponent implements OnInit, OnDestroy {
  activeGoals: GoalsEntity[] = [];
  activeGoalsSubscription?: Subscription;
  displayedColumns = [
    'id',
    'name',
    'item',
    'earnedValue',
    'ownedBy',
    'completionDate',
  ];

  constructor(private goalsFacade: GoalsFacade) {}

  getPercentComplete(element: GoalsEntity): number {
    const percent = element.completionValue / element.earnedValue;
    if (!isFinite(percent)) {
      return 0;
    }
    return percent;
  }

  ngOnInit(): void {
    this.activeGoalsSubscription = this.goalsFacade.activeGoals$
      .pipe(tap((goals) => (this.activeGoals = goals)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.activeGoalsSubscription?.unsubscribe();
  }
}
