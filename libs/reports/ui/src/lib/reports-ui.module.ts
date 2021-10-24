import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTaskReportComponent } from './completed-task-report/completed-task-report.component';
import { ApprovedTaskReportComponent } from './approved-task-report/approved-task-report.component';
import { CompletedGoalsReportComponent } from './completed-goals-report/completed-goals-report.component';
import { ActiveGoalsReportComponent } from './active-goals-report/active-goals-report.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'complete', component: CompletedTaskReportComponent },
      { path: 'approved', component: ApprovedTaskReportComponent },
      { path: 'completed', component: CompletedGoalsReportComponent },
      { path: 'active', component: ActiveGoalsReportComponent },
    ]),
    MatTableModule,
  ],
  declarations: [
    CompletedTaskReportComponent,
    ApprovedTaskReportComponent,
    CompletedGoalsReportComponent,
    ActiveGoalsReportComponent,
  ],
})
export class ReportsUiModule {}
