import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { GoalsFacade } from '@kdence-client/goals/data-access';
import {
  Role,
  UsersEntity,
  UsersFacade,
} from '@kdence-client/users/data-access';
import { take, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {
  TaskControlService,
  TasksFacade,
} from '@kdence-client/tasks/data-access';
import { TasksEntity } from '@kdence-client/tasks/models';
import { GoalsService } from '@kdence-client/goals/data-access';
import { GoalsEntity } from '@kdence-client/goals/models';
import { getNullTask } from '@kdence-client/core/utils';

@Component({
  selector: 'kdence-client-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalDetailsComponent implements OnInit, OnDestroy {
  isParent = false;
  tasks$ = this.tasksFacade.selectedGoalTasks$;
  selectedGoal!: GoalsEntity;
  currentUser!: UsersEntity;
  private currentUserSubscription!: Subscription;
  private selectedGoalSubscription!: Subscription;

  constructor(
    private goalsFacade: GoalsFacade,
    private usersFacade: UsersFacade,
    private tasksFacade: TasksFacade,
    private goalsService: GoalsService,
    private taskControlService: TaskControlService
  ) {}

  ngOnInit(): void {
    this.selectedGoalSubscription = this.goalsService.selectedGoal$
      .pipe(
        tap((goal) => {
          this.selectedGoal = goal;
          this.tasksFacade.loadTasks(goal.id);
          this.tasksFacade.getGoalTasks(goal.id);
        })
      )
      .subscribe();
    this.currentUserSubscription = this.usersFacade.currentUser$
      .pipe(take(1))
      .subscribe((user) => {
        if (user) {
          this.currentUser = user;
          this.isParent = !!user.roles.find(
            (role) => role.name === Role.Parent
          );
          this.goalsFacade.loadActiveGoals(user.household.id);
        }
      });
  }

  ngOnDestroy() {
    this.selectedGoalSubscription.unsubscribe();
    this.currentUserSubscription.unsubscribe();
  }

  taskComplete($event: TasksEntity) {
    this.tasksFacade.completeTask(this.selectedGoal.id, $event);
  }

  taskApproved($event: TasksEntity) {
    if (
      this.isParent &&
      $event.approval === null &&
      $event.completionDate !== null
    ) {
      this.tasksFacade.approveTask(this.selectedGoal.id, $event);
      this.goalsFacade.loadActiveGoals(this.currentUser.household.id);
    }
  }

  resetTask() {
    this.taskControlService.selectTask(getNullTask());
  }
}
