import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate,Route,Router} from '@angular/router';
import { UserManagementWebapiService } from 'src/app/core/services/user-management-webapi.service';
import { UtilityService } from '../../shared/services/utility.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private UserManagementWebapiService:UserManagementWebapiService,
    private router:Router,
    private utility:UtilityService){

  }
  canActivate(): boolean { 
     if (this.isZibilinkUser()) {
      return true;
    } else {
      if (this.utility.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login-user'])
        return false;
      }
    }
  }
  // check ,zbizlink user
  public isZibilinkUser() {
    if(sessionStorage.length==0)
      this.getParamValueQueryString();
    console.log("Company id = "+sessionStorage.getItem('compId') +" company SegmentID = "+ sessionStorage.getItem('companySegmentID') +" clientID =  "+ sessionStorage.getItem('clientID'))
    if (sessionStorage.getItem('compId') && sessionStorage.getItem('companySegmentID') && sessionStorage.getItem('clientID')) {
      return true;
    }
    else
      return false;
  }
 private getParamValueQueryString() {
    const url = window.location.href;
    console.log("TRFP Parser url = "+url);
      if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });      
      var compId = httpParams.get('compId');
      var userid = httpParams.get('userid');
      var companySegmentID = httpParams.get('companySegmentID');
      var clientID = httpParams.get('clientID');
      // set values in session
      if (userid!=null && companySegmentID!=null && clientID!=null ) {  
             sessionStorage.setItem('compId',compId);
             sessionStorage.setItem('userid', userid);
             sessionStorage.setItem('companySegmentID', companySegmentID);
             sessionStorage.setItem('clientID', clientID);
             console.log("TRFP Parser url + params = "+url + "Company id = "+sessionStorage.getItem('compId') +" company SegmentID = "+ sessionStorage.getItem('companySegmentID') +" clientID =  "+ sessionStorage.getItem('clientID'));
             // clear token if it exists 
             localStorage.removeItem('Token');
      } 
    } 
  }
}
