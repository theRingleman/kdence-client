import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HouseholdsUiModule } from '@kdence-client/households/ui';
import { SharedUiModule } from '@kdence-client/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    HouseholdsUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ShellComponent },
    ]),
    SharedUiModule,
  ],
  declarations: [ShellComponent],
})
export class HouseholdsFeatureModule {}
