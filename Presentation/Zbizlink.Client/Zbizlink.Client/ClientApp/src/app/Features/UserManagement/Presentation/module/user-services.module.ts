import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccountActivationFacadeService } from "../../Abstraction/Facade/account-activation-facade.service";
import { AuthenticationFacadeService } from "../../Abstraction/Facade/authentication-facade.service";
import { EmailConfirmationFacadeService } from "../../Abstraction/Facade/email-confirmation-facade.service";
import { ForgotPasswordFacadeService } from "../../Abstraction/Facade/forgot-password-facade.service";
import { RegistrationFacadeService } from "../../Abstraction/Facade/registration-facade.service";
import { ResetPasswordFacadeService } from "../../Abstraction/Facade/reset-password-facade.service";
import { ResetPasswordRequestFacadeService } from "../../Abstraction/Facade/reset-password-request-facade.service";
import { ResetPasswordRequestSuccessFacadeService } from "../../Abstraction/Facade/reset-password-request-success-facade.service";
import { ResetPasswordSuccessFacadeService } from "../../Abstraction/Facade/reset-password-success-facade.service";
import { AccountActivationService } from "../../Core/Services/account-activation.service";
import { AuthenticationService } from "../../Core/Services/authentication.service";
import { EmailConfirmationService } from "../../Core/Services/email-confirmation.service";
import { ForgotPasswordService } from "../../Core/Services/forgot-password.service";
import { RegistrationService } from "../../Core/Services/registration.service";
import { ResetPasswordRequestSuccessService } from "../../Core/Services/reset-password-request-success.service";
import { ResetPasswordRequestService } from "../../Core/Services/reset-password-request.service";
import { ResetPasswordSuccessService } from "../../Core/Services/reset-password-success.service";
import { ResetPasswordService } from "../../Core/Services/reset-password.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
//Micro-Services
AccountActivationService,
AuthenticationService,
EmailConfirmationService,
ForgotPasswordService,
RegistrationService,
ResetPasswordRequestSuccessService,
ResetPasswordRequestService,
ResetPasswordSuccessService,
ResetPasswordService,

//Facade-Services
AccountActivationFacadeService,
AuthenticationFacadeService,
EmailConfirmationFacadeService,
ForgotPasswordFacadeService,
RegistrationFacadeService,
ResetPasswordFacadeService,
ResetPasswordRequestFacadeService,
ResetPasswordRequestSuccessFacadeService,
ResetPasswordSuccessFacadeService,

  ]
})
export class UserServicesModule { }
