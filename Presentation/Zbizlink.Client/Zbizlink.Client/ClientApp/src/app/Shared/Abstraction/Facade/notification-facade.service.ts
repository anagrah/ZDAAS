import { Injectable, Injector } from '@angular/core';
import { NotificationService } from '../../Core/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationFacadeService {


      //Instance Creation and injection
      private _notificationService: NotificationService;
      public get notificationService(): NotificationService {
        if(!this._notificationService){
          this._notificationService = this.injector.get(NotificationService);
        }
        return this._notificationService;
      };

      constructor(private injector: Injector) { }


  success(msg:string){
    return this.notificationService.success(msg);
  }
  error(msg:string){
    this.notificationService.error(msg);
  }
  warning(msg:string){
    return this.notificationService.warning(msg);
  }
}
