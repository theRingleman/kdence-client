import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-active-goals-report',
  templateUrl: './active-goals-report.component.html',
  styleUrls: ['./active-goals-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveGoalsReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
