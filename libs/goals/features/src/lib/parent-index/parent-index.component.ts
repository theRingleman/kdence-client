import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { getGoalsMock } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-parent-index',
  templateUrl: './parent-index.component.html',
  styleUrls: ['./parent-index.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentIndexComponent implements OnInit {
  goal = getGoalsMock();
  constructor() {}

  ngOnInit(): void {}
}
