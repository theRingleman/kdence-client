import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HouseholdsUiModule } from '@kdence-client/households/ui';
import { SharedUiModule } from '@kdence-client/shared/ui';
import { MatIconModule } from '@angular/material/icon';
import { AddUserComponent } from './add-user/add-user.component';
import { MatCardModule } from '@angular/material/card';
import { UiModule } from '@kd';

@NgModule({
  imports: [
    CommonModule,
    HouseholdsUiModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent },
      { path: 'add-user', component: AddUserComponent },
    ]),
    SharedUiModule,
    MatIconModule,
    MatCardModule,
    UiModule,
  ],
  declarations: [ShellComponent, AddUserComponent],
})
export class HouseholdsFeatureModule {}
