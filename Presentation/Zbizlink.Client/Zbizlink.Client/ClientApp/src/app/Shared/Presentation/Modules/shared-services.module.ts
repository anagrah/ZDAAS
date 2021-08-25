import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ApiCallRetryFacadeService } from "../../Abstraction/Facade/api-call-retry-facade.service";
import { LogoutFacadeService } from "../../Abstraction/Facade/logout-facade.service";
import { NotificationFacadeService } from "../../Abstraction/Facade/notification-facade.service";
import { ApiCallRetryService } from "../../Core/services/ApiCallRetry.service";
import { LogoutService } from "../../Core/services/logout.service";
import { NotificationService } from "../../Core/services/notification.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
//Micro-Services
  ApiCallRetryService,
  NotificationService,
  LogoutService,
  // AppConfigService, //Don't call register it here, as we are directly calling it's facade service in app.module.ts. Otherwise it may cause conflicts for repeated declaration.

//Facade-Services
  ApiCallRetryFacadeService,
  NotificationFacadeService,
  LogoutFacadeService,
  // AppConfigFacadeService, //Don't call register it here, as we are directly calling it in app.module.ts. Otherwise it may cause conflicts for repeated declaration.


  ]
})
export class SharedServicesModule { }
