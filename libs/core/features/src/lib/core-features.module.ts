import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CoreUiModule,
  LoginSignupWrapperComponent,
} from '@kdence-client/core/ui';
import { ShellComponent } from './shell/shell.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthModule } from '@kdence-client/auth';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../../auth/src/lib/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'households',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('@kdence-client/households/feature').then(
            (m) => m.HouseholdsFeatureModule
          ),
      },
      {
        path: 'auth',
        component: LoginSignupWrapperComponent,
        loadChildren: () =>
          import('@kdence-client/core/ui').then((m) => m.CoreUiModule),
      },
      {
        path: 'tasks',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('@kdence-client/tasks/features').then(
            (m) => m.TasksFeaturesModule
          ),
      },
      {
        path: 'goals',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('@kdence-client/goals/features').then(
            (m) => m.GoalsFeaturesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    CoreUiModule,
    MatGridListModule,
    AuthModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent, RouterModule],
})
export class CoreFeaturesModule {}
