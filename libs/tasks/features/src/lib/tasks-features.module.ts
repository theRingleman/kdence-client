import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedUiModule } from '@kdence-client/shared/ui';
import { TasksUiModule } from '@kdence-client/tasks/ui';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    TasksUiModule,
    // RouterModule.forChild([{ path: '', component: TaskSearchComponent }]),
    RouterModule.forChild([{ path: '', component: TaskSearchComponent }]),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ShellComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskSearchComponent,
  ],
})
export class TasksFeaturesModule {}
