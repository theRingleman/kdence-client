import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import * as TasksSelectors from './tasks.selectors';
import { CreateTaskDto, TasksEntity } from '@kdence-client/tasks/models';
import { UsersEntity } from '@kdence-client/users/data-access';

@Injectable({
  providedIn: 'root',
})
export class TasksFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TasksSelectors.getTasksLoaded));
  allCore$ = this.store.pipe(select(TasksSelectors.getAllTasks));
  selectedCore$ = this.store.pipe(select(TasksSelectors.getSelected));
  loadedTasks$ = this.store.pipe(select(TasksSelectors.getAllTasks));
  selectedGoalTasks$ = this.store.pipe(select(TasksSelectors.getGoalsTasks));
  allTasks$ = this.store.pipe(select(TasksSelectors.getFetchedTasks));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(TasksActions.init());
  }

  createTask(goalId: number, dto: CreateTaskDto) {
    this.store.dispatch(TasksActions.createTask({ goalId, dto }));
  }

  loadTasks(goalId: number) {
    this.store.dispatch(TasksActions.loadTasksForGoal({ goalId }));
  }

  getGoalTasks(goalId: number) {
    this.store.dispatch(TasksActions.setSelectedGoalId({ goalId }));
  }

  approveTask(goalId: number, task: TasksEntity) {
    this.store.dispatch(TasksActions.approveTask({ goalId, task }));
  }

  fetchTask(goalId: number, taskId: number) {
    this.store.dispatch(TasksActions.fetchTask({ goalId, taskId }));
  }

  completeTask(goalId: number, task: TasksEntity) {
    this.store.dispatch(
      TasksActions.updateTask({
        goalId,
        task: { ...task, completionDate: Date.now() },
      })
    );
  }

  updateTask(goalId: number, task: TasksEntity) {
    this.store.dispatch(
      TasksActions.updateTask({
        goalId,
        task,
      })
    );
  }

  deleteTask(goalId: number, task: TasksEntity) {
    this.store.dispatch(TasksActions.deleteTask({ goalId, taskId: task.id }));
  }

  fetchAllTasks(user: UsersEntity) {
    this.store.dispatch(TasksActions.fetchAllTasks({ user }));
  }
}
