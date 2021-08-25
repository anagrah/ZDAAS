import { NgModule } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavMenuComponent,
    LoginUserComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ThankYouComponent,
    ConfirmUserComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    NavMenuComponent//,
    //LoginUserComponent
  ]
})
export class CoreModule { }
