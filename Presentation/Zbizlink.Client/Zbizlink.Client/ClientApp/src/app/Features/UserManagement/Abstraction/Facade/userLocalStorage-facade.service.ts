import { Injectable, Injector } from '@angular/core';
import { UserLocalStorageService } from '../../Core/Services/userLocalStorage.service';
import { UserResponse_db } from '../../Core/models/userResponse_db.model';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageFacadeService {

    //SignUp
    private _userLocalStorageService: UserLocalStorageService;
    public get userLocalStorageService(): UserLocalStorageService {
      if(!this._userLocalStorageService){
        this._userLocalStorageService = this.injector.get(UserLocalStorageService);
      }
      return this._userLocalStorageService;
    };

  constructor(private injector: Injector) { }

  formatUser(userData:any) {
    return this.userLocalStorageService.formatUser(userData);
  }

  setUserInLocalStorage(user: UserResponse_db) {
    return this.userLocalStorageService.setUserInLocalStorage(user);
  }

  getUserFromLocalStorage() {
    return this.userLocalStorageService.getUserFromLocalStorage();
  }


}
