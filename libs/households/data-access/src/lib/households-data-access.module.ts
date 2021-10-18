import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHouseholds from './+state/households.reducer';
import { HouseholdsEffects } from './+state/households.effects';
import { HouseholdsFacade } from './+state/households.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromHouseholds.HOUSEHOLDS_FEATURE_KEY,
      fromHouseholds.reducer
    ),
    EffectsModule.forFeature([HouseholdsEffects]),
  ],
  providers: [HouseholdsFacade],
})
export class HouseholdsDataAccessModule {}
