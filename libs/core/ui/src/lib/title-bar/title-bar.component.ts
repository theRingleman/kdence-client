import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'kdence-client-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBarComponent implements OnInit {
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}
}
