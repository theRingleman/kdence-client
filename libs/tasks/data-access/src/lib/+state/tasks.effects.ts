import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as TasksActions from './tasks.actions';
import { TasksService } from '../tasks.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TasksEffects {
  $loadGoalTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasksForGoal),
      switchMap(({ goalId }) =>
        this.tasksService.fetchTasksForGoal(goalId).pipe(
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
      switchMap(({ goalId, dto }) =>
        this.tasksService.createTask(goalId, dto).pipe(
          map((task) => {
            TasksActions.loadTasksForGoal({ goalId });
            return TasksActions.createTaskSuccess({ goalId, task });
          }),
          catchError((error) => of(TasksActions.createTaskFailure({ error })))
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.updateTask),
      switchMap(({ goalId, task }) =>
        this.tasksService.updateTask(goalId, task).pipe(
          map((task) => TasksActions.updateTaskSuccess({ goalId, task })),
          catchError((error) => of(TasksActions.updateTaskFailure({ error })))
        )
      )
    )
  );

  approveTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.approveTask),
      switchMap(({ goalId, task }) =>
        this.tasksService.approveTask(goalId, task).pipe(
          map(() => TasksActions.approveTaskSuccess()),
          catchError((error) => of(TasksActions.approveTaskFailure({ error })))
        )
      )
    )
  );

  fetchTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.fetchTask),
      switchMap(({ goalId, taskId }) =>
        this.tasksService.fetchTask(goalId, taskId).pipe(
          map((task) => TasksActions.fetchTaskSuccess({ task })),
          catchError((error) => of(TasksActions.fetchTaskFailure({ error })))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.deleteTask),
      switchMap(({ goalId, taskId }) =>
        this.tasksService.deleteTask(goalId, taskId).pipe(
          map(() => {
            this.snackBar.open('Task Deleted Successfully', 'Dismiss', {
              duration: 3000,
            });
            return TasksActions.deleteTaskSuccess();
          }),
          catchError((error) => of(TasksActions.fetchTaskFailure({ error })))
        )
      )
    )
  );
  constructor(
    private readonly actions$: Actions,
    private tasksService: TasksService,
    private snackBar: MatSnackBar
  ) {}
}
