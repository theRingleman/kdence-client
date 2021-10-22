import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@kdence-client/shared/ui';
import { ParentIndexComponent } from './parent-index/parent-index.component';
import { ChildIndexComponent } from './child-index/child-index.component';
import { GoalsUiModule } from '@kdence-client/goals/ui';
import { CreateGoalComponent } from './create-goal/create-goal.component';
import { MatIconModule } from '@angular/material/icon';
import { GoalsDataAccessModule } from '@kdence-client/goals/data-access';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { TasksUiModule } from '@kdence-client/tasks/ui';
import { TasksDataAccessModule } from '@kdence-client/tasks/data-access';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent },
      { path: 'add', component: CreateGoalComponent },
      { path: ':id', component: GoalDetailsComponent },
    ]),
    GoalsUiModule,
    MatIconModule,
    GoalsDataAccessModule,
    TasksUiModule,
    TasksDataAccessModule,
  ],
  declarations: [
    ShellComponent,
    ParentIndexComponent,
    ChildIndexComponent,
    CreateGoalComponent,
    GoalDetailsComponent,
  ],
})
export class GoalsFeaturesModule {}
