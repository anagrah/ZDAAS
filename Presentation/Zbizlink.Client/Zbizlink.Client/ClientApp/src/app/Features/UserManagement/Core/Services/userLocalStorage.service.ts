import { ApiCallRetryFacadeService } from './../../../../Shared/Abstraction/Facade/api-call-retry-facade.service';
// import { AppConfigService } from '../../../../Shared/Core/services/app-config.service';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, shareReplay } from "rxjs/operators";
import { UserResponse_db } from '../models/userResponse_db.model';
import { ApiCallRetryService } from 'src/app/Shared/Core/services/ApiCallRetry.service';
// import { AppConfigFacadeService } from 'src/app/Shared/Abstraction/Facade/app-config-facade.service';


@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {
  // private userAuthApiUrl = this.appConfigFacadeService.userAuthApiUrl; //https://localhost:44362/api/
  private webApiController = '/Account/'; // /User/

  constructor(private http: HttpClient,  private apiCallRetryFacadeService: ApiCallRetryFacadeService){ }


  // format User
  formatUser(userData: any) {
    const user = new UserResponse_db(userData.id,userData.firstName, userData.middleName,
                 userData.lastName, userData.email, userData.userName, userData.phoneNumber,
                 userData.businessName, userData.password, userData.confirmPassword, userData.isEnabled,
                  userData.userTypeId, userData.token, userData.message, userData.code, userData.errors);
    return user;
  }


  //Function for setting user login data into local storage: And auto-logout/session expiration:
  setUserInLocalStorage(user: UserResponse_db) {
    localStorage.setItem('user', JSON.stringify(user));
  }


  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('user');
    if(userDataString)
    {
      const user = JSON.parse(userDataString);
      const userData = new UserResponse_db(user.id,user.firstName, user.middleName,
        user.lastName, user.email, user.userName, user.phoneNumber,
        user.businessName, user.password, user.confirmPassword, user.isEnabled,
         user.userTypeId, user.token, user.message, user.code, user.errors);
      return userData;
    }
    return null;

  }

}
