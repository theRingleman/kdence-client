import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreUiModule } from '@kdence-client/core/ui';
import { ShellComponent } from './shell/shell.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthModule } from '@kdence-client/auth';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'households',
        pathMatch: 'full',
        loadChildren: () =>
          import('@kdence-client/households/feature').then(
            (m) => m.HouseholdsFeatureModule
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
