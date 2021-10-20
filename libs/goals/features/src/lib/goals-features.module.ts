import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@kdence-client/shared/ui';
import { ParentIndexComponent } from './parent-index/parent-index.component';
import { ChildIndexComponent } from './child-index/child-index.component';
import { GoalsUiModule } from '@kdence-client/goals/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: ShellComponent }]),
    GoalsUiModule,
  ],
  declarations: [ShellComponent, ParentIndexComponent, ChildIndexComponent],
})
export class GoalsFeaturesModule {}
