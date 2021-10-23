import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTasks from './+state/tasks.reducer';
import { TasksEffects } from './+state/tasks.effects';
import { TasksService } from './tasks.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTasks.TASKS_FEATURE_KEY, fromTasks.reducer),
    EffectsModule.forFeature([TasksEffects]),
  ],
  providers: [TasksService],
})
export class TasksDataAccessModule {}
