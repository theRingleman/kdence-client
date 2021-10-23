import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tasksRoute } from '@kdence-client/core/constants';
import { Observable } from 'rxjs';
import { CreateTaskDto, Task, TasksEntity } from '@kdence-client/tasks/models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  fetchTasksForGoal(goalId: number): Observable<TasksEntity[]> {
    return this.http.get<TasksEntity[]>(tasksRoute(goalId));
  }

  createTask(goalId: number, dto: CreateTaskDto): Observable<TasksEntity> {
    return this.http.post<TasksEntity>(tasksRoute(goalId), {
      ...dto,
    });
  }

  updateTask(goalId: number, task: TasksEntity): Observable<TasksEntity> {
    return this.http.patch<TasksEntity>(`${tasksRoute(goalId)}/${task.id}`, {
      ...task,
    });
  }

  approveTask(goalId: number, task: TasksEntity) {
    return this.http.get(`${tasksRoute(goalId)}/${task.id}/approve`);
  }

  fetchTask(goalId: number, taskId: number): Observable<TasksEntity> {
    return this.http.get<TasksEntity>(`${tasksRoute(goalId)}/${taskId}`);
  }

  deleteTask(goalId: number, taskId: number) {
    return this.http.delete(`${tasksRoute(goalId)}/${taskId}`);
  }
}
