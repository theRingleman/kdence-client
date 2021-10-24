import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { GoalsEntity } from '@kdence-client/goals/models';
import { GoalsFacade } from '@kdence-client/goals/data-access';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersEntity, UsersFacade } from '@kdence-client/users/data-access';

@Component({
  selector: 'kdence-client-completed-goals-report',
  templateUrl: './completed-goals-report.component.html',
  styleUrls: ['./completed-goals-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedGoalsReportComponent implements OnInit, OnDestroy {
  currentUser?: UsersEntity;
  currentUserSub?: Subscription;
  completedGoals$ = this.goalsFacade.completedGoals$;
  displayedColumns = [
    'id',
    'name',
    'item',
    'earnedValue',
    'ownedBy',
    'completionDate',
  ];

  constructor(
    private goalsFacade: GoalsFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnDestroy(): void {
    this.currentUserSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.currentUserSub = this.usersFacade.currentUser$
      .pipe(
        tap((user) => {
          if (user) {
            this.currentUser = user;
            this.goalsFacade.loadCompletedGoals(user.household.id);
          }
        })
      )
      .subscribe();
  }

  getCompletionDate(goal: GoalsEntity) {
    return Number(goal.completionDate);
  }
}
