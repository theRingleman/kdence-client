import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreUiModule } from '@kdence-client/core/ui';
import { ShellComponent } from './shell/shell.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [CommonModule, CoreUiModule, MatGridListModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class CoreFeaturesModule {}
