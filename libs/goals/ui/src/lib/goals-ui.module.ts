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
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    GoalCardComponent,
    GoalProgressBarComponent,
    GoalsListComponent,
    GoalFormComponent,
  ],
  exports: [
    GoalsListComponent,
    GoalCardComponent,
    GoalsListComponent,
    GoalFormComponent,
  ],
})
export class GoalsUiModule {}
