import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseholdListComponent } from './household-list/household-list.component';
import { MatTableModule } from '@angular/material/table';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  declarations: [HouseholdListComponent, SidePanelComponent],
  exports: [HouseholdListComponent],
})
export class HouseholdsUiModule {}
