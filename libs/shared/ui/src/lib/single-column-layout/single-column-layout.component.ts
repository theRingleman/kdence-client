import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'kdence-client-single-column-layout',
  templateUrl: './single-column-layout.component.html',
  styleUrls: ['./single-column-layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleColumnLayoutComponent {}
