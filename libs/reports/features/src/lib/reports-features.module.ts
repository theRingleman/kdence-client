import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedUiModule } from '@kdence-client/shared/ui';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'tasks',
            loadChildren: () =>
              import('@kdence-client/reports/ui').then(
                (m) => m.ReportsUiModule
              ),
          },
          {
            path: 'goals',
            loadChildren: () =>
              import('@kdence-client/reports/ui').then(
                (m) => m.ReportsUiModule
              ),
          },
        ],
      },
    ]),
    SharedUiModule,
    MatTabsModule,
    MatCardModule,
  ],
  declarations: [ShellComponent],
})
export class ReportsFeaturesModule {}
