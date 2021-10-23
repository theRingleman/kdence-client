import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { TasksEntity } from '@kdence-client/tasks/models';
import { Router } from '@angular/router';
import { TasksFacade } from '@kdence-client/tasks/data-access';
import { GoalsService } from '@kdence-client/goals/data-access';
import { Subscription } from 'rxjs';
import { GoalsEntity } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskComponent implements OnInit, OnDestroy {
  private selectedGoalSubscription!: Subscription;
  private selectedGoal!: GoalsEntity;

  constructor(
    private router: Router,
    private tasksFacade: TasksFacade,
    private goalsService: GoalsService
  ) {}

  submitted(task: TasksEntity) {
    this.tasksFacade.updateTask(this.selectedGoal.id, task);
    this.tasksFacade.loadTasks(this.selectedGoal.id);
    this.router.navigate([`goals`]);
  }

  ngOnDestroy(): void {
    this.selectedGoalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.selectedGoalSubscription = this.goalsService.selectedGoal$.subscribe(
      (goal) => (this.selectedGoal = goal)
    );
  }
}
