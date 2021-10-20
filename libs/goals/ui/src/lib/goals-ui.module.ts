import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalCardComponent } from './goal-card/goal-card.component';
import { GoalProgressBarComponent } from './goal-progress-bar/goal-progress-bar.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
  ],
  declarations: [
    GoalCardComponent,
    GoalProgressBarComponent,
    GoalsListComponent,
    GoalFormComponent,
  ],
  exports: [GoalsListComponent, GoalCardComponent, GoalsListComponent],
})
export class GoalsUiModule {}
