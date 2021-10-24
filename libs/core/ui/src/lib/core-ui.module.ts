import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignupWrapperComponent } from './login-signup-wrapper/login-signup-wrapper.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UsersDataAccessModule } from '@kdence-client/users/data-access';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { HouseholdsDataAccessModule } from '@kdence-client/households/data-access';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@kdence-client/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    UsersDataAccessModule,
    HouseholdsDataAccessModule,
    SharedUiModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]),
  ],
  declarations: [
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    LoginSignupWrapperComponent,
    TitleBarComponent,
  ],
  exports: [
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    LoginSignupWrapperComponent,
  ],
})
export class CoreUiModule {}
