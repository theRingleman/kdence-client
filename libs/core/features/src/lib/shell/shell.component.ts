import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'kd-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
