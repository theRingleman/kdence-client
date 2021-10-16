import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavigationComponent, LoginComponent],
})
export class CoreUiModule {}
