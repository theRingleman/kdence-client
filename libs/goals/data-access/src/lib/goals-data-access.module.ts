import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoals from './+state/goals.reducer';
import { GoalsEffects } from './+state/goals.effects';
import { GoalsFacade } from './+state/goals.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGoals.GOALS_FEATURE_KEY, fromGoals.reducer),
    EffectsModule.forFeature([GoalsEffects]),
  ],
  providers: [GoalsFacade],
})
export class GoalsDataAccessModule {}
