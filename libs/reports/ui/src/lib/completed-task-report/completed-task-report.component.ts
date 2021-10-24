import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-completed-task-report',
  templateUrl: './completed-task-report.component.html',
  styleUrls: ['./completed-task-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedTaskReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
