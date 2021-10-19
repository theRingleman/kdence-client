import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SingleColumnLayoutComponent],
  exports: [SingleColumnLayoutComponent],
})
export class SharedUiModule {}
