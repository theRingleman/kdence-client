import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TaskFormComponent,
    TaskListComponent
  ],
})
export class TasksUiModule {}
