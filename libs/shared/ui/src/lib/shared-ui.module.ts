import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';
import { SingleColumnLayoutWithOptionalSideContentComponent } from './single-column-layout-with-optional-side-content/single-column-layout-with-optional-side-content.component';
import { FabComponent } from './fab/fab.component';
import { MatButtonModule } from '@angular/material/button';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule],
  declarations: [
    SingleColumnLayoutComponent,
    SingleColumnLayoutWithOptionalSideContentComponent,
    FabComponent,
    FormWrapperComponent,
  ],
  exports: [
    SingleColumnLayoutComponent,
    SingleColumnLayoutWithOptionalSideContentComponent,
    FabComponent,
    FormWrapperComponent,
  ],
})
export class SharedUiModule {}
