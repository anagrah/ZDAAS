import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { RegistrationComponent } from '../registration/registration.component';
import { EmailVerificationComponent } from '../email-verification/email-verification.component';
import { AccountActivationComponent } from '../account-activation/account-activation.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordRequestComponent } from '../reset-password-request/reset-password-request.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { ResetPasswordSuccessComponent } from '../reset-password-success/reset-password-success.component';
import { ResetPasswordRequestSuccessComponent } from '../reset-password-request-success/reset-password-request-success.component';
import { MaterialModule } from "../../../../Helper/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from "../../../../Shared/Presentation/Modules/sharedModule/shared.module";
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxModule } from "src/app/Helper/ngx/ngx.module";
import { UserServicesModule } from "./user-services.module";
import { EffectsModule } from "@ngrx/effects";






const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', redirectTo: 'authentication'
      },
      {
        path: 'authentication',
        component: AuthenticationComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'account-activation',
        component: AccountActivationComponent
      },
      {
        path: 'email-verification/:email',
        component: EmailVerificationComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'reset-password-request',
        component: ResetPasswordRequestComponent
      },
      {
        path: 'reset-password-request-success',
        component: ResetPasswordRequestSuccessComponent
      },
      {
        path: 'reset-password-success',
        component: ResetPasswordSuccessComponent
      }
    ],
  },
];


@NgModule({
  declarations: [
    AuthenticationComponent,
    RegistrationComponent,
    EmailVerificationComponent,
    AccountActivationComponent,
    ForgotPasswordComponent,
    ResetPasswordRequestComponent,
    ResetPasswordComponent,
    ResetPasswordSuccessComponent,
    ResetPasswordRequestSuccessComponent,

  ],
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      NgxModule,
      FlexLayoutModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes),
      EffectsModule.forRoot(),
      UserServicesModule,

    ],

    exports: [RouterModule, UserServicesModule],
    providers:[UserServicesModule],
    bootstrap: [
      AuthenticationComponent,
      RegistrationComponent,
      EmailVerificationComponent,
      AccountActivationComponent,
      ForgotPasswordComponent,
      ResetPasswordRequestComponent,
      ResetPasswordComponent,
      ResetPasswordSuccessComponent,
      ResetPasswordRequestSuccessComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: []
  })
export class UserModule{}
