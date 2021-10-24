import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-completed-goals-report',
  templateUrl: './completed-goals-report.component.html',
  styleUrls: ['./completed-goals-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedGoalsReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
