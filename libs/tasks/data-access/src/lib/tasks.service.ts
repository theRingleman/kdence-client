import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tasksRoute } from '@kdence-client/core/constants';
import { Observable } from 'rxjs';
import { CreateTaskDto, TasksEntity } from '@kdence-client/tasks/models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  fetchTasksForGoal(
    householdId: number,
    goalId: number
  ): Observable<TasksEntity[]> {
    return this.http.get<TasksEntity[]>(tasksRoute(householdId, goalId));
  }

  createTask(
    householdId: number,
    goalId: number,
    dto: CreateTaskDto
  ): Observable<TasksEntity> {
    return this.http.post<TasksEntity>(tasksRoute(householdId, goalId), {
      ...dto,
    });
  }

  updateTask(
    householdId: number,
    goalId: number,
    task: TasksEntity
  ): Observable<TasksEntity> {
    return this.http.patch<TasksEntity>(tasksRoute(householdId, goalId), {
      ...task,
    });
  }

  approveTask(goalId: number, householdId: number, taskId: number) {
    return this.http.get(
      `${tasksRoute(householdId, goalId)}/tasks/${taskId}/approve`
    );
  }
}
