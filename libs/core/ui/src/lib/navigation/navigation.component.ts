import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'kd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
