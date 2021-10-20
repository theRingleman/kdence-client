import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-child-index',
  templateUrl: './child-index.component.html',
  styleUrls: ['./child-index.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
