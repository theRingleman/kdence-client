import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedUiModule } from '@kdence-client/shared/ui';
import { TasksUiModule } from '@kdence-client/tasks/ui';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  imports: [CommonModule, SharedUiModule, TasksUiModule],
  declarations: [ShellComponent, AddTaskComponent, EditTaskComponent],
})
export class TasksFeaturesModule {}
