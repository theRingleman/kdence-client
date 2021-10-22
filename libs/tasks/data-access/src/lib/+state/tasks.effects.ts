import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as TasksActions from './tasks.actions';
import { TasksService } from '../tasks.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {
  $loadGoalTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasksForGoal),
      switchMap(({ goalId, householdId }) =>
        this.tasksService.fetchTasksForGoal(householdId, goalId).pipe(
          map((tasks) =>
            TasksActions.loadTasksForGoalSuccess({ goalId, tasks })
          ),
          catchError((error) =>
            of(TasksActions.loadTasksForGoalFailure({ error }))
          )
        )
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.createTask),
      switchMap(({ goalId, householdId, dto }) =>
        this.tasksService.createTask(goalId, householdId, dto).pipe(
          map((task) => TasksActions.createTaskSuccess({ goalId, task })),
          catchError((error) => of(TasksActions.createTaskFailure({ error })))
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.updateTask),
      switchMap(({ goalId, householdId, task }) =>
        this.tasksService.updateTask(goalId, householdId, task).pipe(
          map((task) => TasksActions.updateTaskSuccess({ goalId, task })),
          catchError((error) => of(TasksActions.updateTaskFailure({ error })))
        )
      )
    )
  );

  approveTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.approveTask),
      switchMap(({ goalId, householdId, taskId }) =>
        this.tasksService.approveTask(goalId, householdId, taskId).pipe(
          map(() => TasksActions.approveTaskSuccess()),
          catchError((error) => of(TasksActions.approveTaskFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private tasksService: TasksService
  ) {}
}
