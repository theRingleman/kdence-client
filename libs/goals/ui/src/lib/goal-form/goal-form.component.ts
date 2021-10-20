import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
