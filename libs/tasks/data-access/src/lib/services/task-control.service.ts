import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TasksEntity } from '@kdence-client/tasks/models';

@Injectable({ providedIn: 'root' })
export class TaskControlService {
  private selectedTaskSubject = new BehaviorSubject<TasksEntity>({
    description: '',
    value: 0,
    id: 0,
  });
  selectedTask$ = this.selectedTaskSubject.asObservable();

  selectTask(task: TasksEntity) {
    this.selectedTaskSubject.next(task);
  }
}
