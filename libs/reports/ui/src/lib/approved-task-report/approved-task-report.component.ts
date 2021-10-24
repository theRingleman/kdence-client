import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-approved-task-report',
  templateUrl: './approved-task-report.component.html',
  styleUrls: ['./approved-task-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovedTaskReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
