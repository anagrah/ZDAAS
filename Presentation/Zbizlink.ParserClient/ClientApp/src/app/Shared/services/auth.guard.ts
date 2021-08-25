import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { UtilityService } from '../../shared/services/utility.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router:Router,
    private utility:UtilityService){

  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
     if (this.isZibilinkUser()) {
      return true;
    } else {
      if (this.utility.loggedIn()) { 
        return true;
      } else {  
       this.router.navigate(['/login-user'], { queryParams: { returnUrl: state.url }}); 
        return false;
      }
    }
  }
  // check ,zbizlink user
  public isZibilinkUser() { 
    //if(localStorage.length==0)
       this.getParamValueQueryString();

    console.log("Company id = "+localStorage.getItem('compId') +" company SegmentID = "+ localStorage.getItem('companySegmentID') +" clientID =  "+ localStorage.getItem('clientID'))
    if (localStorage.getItem('compId') && localStorage.getItem('companySegmentID') && localStorage.getItem('clientID')) {
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
      var compId = httpParams.get('compid');
      var userid = httpParams.get('userid');
      var companySegmentID = httpParams.get('companySegmentID');
      var clientID = httpParams.get('clientID');
      // set values in session
      if (userid!=null && companySegmentID!=null && clientID!=null ) {  
        localStorage.setItem('compId',compId);
        localStorage.setItem('userid', userid);
        localStorage.setItem('companySegmentID', companySegmentID);
        localStorage.setItem('clientID', clientID);
             console.log("TRFP Parser url + params = "+url + "Company id = "+localStorage.getItem('compId') +" company SegmentID = "+ localStorage.getItem('companySegmentID') +" clientID =  "+ localStorage.getItem('clientID'));
             // clear token if it exists 
          //   localStorage.removeItem('Token');
      } 
    } else{
      localStorage.removeItem('compId');
      localStorage.removeItem('userid');
      localStorage.removeItem('companySegmentID');
      localStorage.removeItem('clientID');
    }
  }
}
