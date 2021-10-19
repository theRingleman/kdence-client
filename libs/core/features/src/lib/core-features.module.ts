import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreUiModule } from '@kdence-client/core/ui';
import { ShellComponent } from './shell/shell.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthModule } from '@kdence-client/auth';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    CoreUiModule,
    MatGridListModule,
    AuthModule,
    MatCardModule,
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class CoreFeaturesModule {}
