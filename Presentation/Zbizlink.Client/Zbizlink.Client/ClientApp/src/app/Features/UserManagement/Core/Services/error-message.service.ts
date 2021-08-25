import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationFacadeService } from 'src/app/Shared/Abstraction/Facade/notification-facade.service';
import { WebApiResponse } from 'src/app/Shared/Core/models/webApiResponse.model';
import { NotificationService } from 'src/app/Shared/Core/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  registrationError: any = '';
  registrationSuccess: any = '';

  constructor(private http: HttpClient, private notificationFacadeService: NotificationFacadeService, private router: Router) { }

  getErrorMessage(user: any, action: any) {
    if(user && user.code != '200'){
      this.registrationError = this.notificationFacadeService.error(user.message + ':  ' + user.errors);
    }
    else if (user && user.code == '200') {
      this.router.navigate(['/user/email-verification', action.email]);
      return this.registrationSuccess = this.notificationFacadeService.success(user.message);
    }
    }

    formResponse(res: WebApiResponse) {
      if (res && res.code != '200') {
        return this.registrationError = this.notificationFacadeService.error(res.message);
      }
      else if (res && res.code == '200') {
        return this.registrationSuccess = this.notificationFacadeService.success(res.message + '  "You can Login now"!');
      }
    }
  };


