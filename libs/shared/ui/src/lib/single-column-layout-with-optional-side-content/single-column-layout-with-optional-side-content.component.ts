import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kdence-client-single-column-layout-with-optional-side-content',
  templateUrl: './single-column-layout-with-optional-side-content.component.html',
  styleUrls: ['./single-column-layout-with-optional-side-content.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleColumnLayoutWithOptionalSideContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
