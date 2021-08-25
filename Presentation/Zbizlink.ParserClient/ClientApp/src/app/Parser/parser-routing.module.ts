import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from '../CampaignManagement/components/create-account/create-account.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { DocumentParserFormComponent } from './Components/document-parser-form/document-parser-form.component';
import { ForgotPasswordComponent } from './Core/components/forgot-password/forgot-password.component';
import { LoginUserComponent } from './Core/components/login-user/login-user.component';
import { RegisterUserComponent } from './Core/components/register-user/register-user.component';
import { ResetPasswordComponent } from './Core/components/reset-password/reset-password.component';
import { ThankYouComponent } from './Core/components/thank-you/thank-you.component';
import { ParserComponent } from './parser.component';
import { ConfirmUserComponent } from './Core/components/confirm-user/confirm-user.component';

const routes: Routes = [
  {
    path: '', component: ParserComponent,
    children: [
      { path: 'parser', component: DocumentParserFormComponent,canActivate: [ AuthGuard ]},
      { path: 'login-user', component: LoginUserComponent }, 
      { path: 'register-user', component: RegisterUserComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'confirm-user', component: ConfirmUserComponent },
      { path: 'thank-you', component: ThankYouComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParserRoutingModule { }
