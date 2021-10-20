import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
