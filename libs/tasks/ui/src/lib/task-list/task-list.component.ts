import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { TasksEntity } from '@kdence-client/tasks/models';
import { SelectionModel } from '@angular/cdk/collections';
import { Role, UsersFacade } from '@kdence-client/users/data-access';
import { take, tap } from 'rxjs/operators';
import {
  TaskControlService,
  TasksFacade,
} from '@kdence-client/tasks/data-access';
import { Router } from '@angular/router';
import { GoalsService } from '@kdence-client/goals/data-access';
import { Subscription } from 'rxjs';
import { GoalsEntity } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit, OnDestroy {
  displayedColumns = ['description', 'value', 'complete', 'approved'];
  @Input() tasks: TasksEntity[] = [];
  selection = new SelectionModel<TasksEntity>(true, []);
  @Output() completionEvent = new EventEmitter<TasksEntity>();
  @Output() approvalEvent = new EventEmitter<TasksEntity>();
  isParent = true;
  selectedGoalSub!: Subscription;
  private selectedGoal!: GoalsEntity;

  constructor(
    private usersFacade: UsersFacade,
    private tasksFacade: TasksFacade,
    private router: Router,
    private taskControlService: TaskControlService,
    private goalsService: GoalsService
  ) {}

  ngOnInit(): void {
    this.usersFacade.currentUser$
      .pipe(take(1))
      .subscribe(
        (user) =>
          (this.isParent = !!user?.roles.find((r) => r.name === Role.Parent))
      );

    this.selectedGoalSub = this.goalsService.selectedGoal$
      .pipe(tap((goal) => (this.selectedGoal = goal)))
      .subscribe();
  }

  ngOnDestroy() {
    this.selectedGoalSub.unsubscribe();
  }

  editEvent(task: TasksEntity) {
    this.taskControlService.selectTask(task);
    this.router.navigate([`${this.router.url}/tasks/${task.id}/edit`]);
  }

  deleteEvent(task: TasksEntity) {
    this.tasksFacade.deleteTask(this.selectedGoal.id, task);
    this.router.navigate([`goals`]);
  }
}
