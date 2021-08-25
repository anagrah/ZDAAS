import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 
import { CampaignUtilityService } from './campaign-utility.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignAuthService implements CanActivate {
  constructor(
    private router:Router,
    private utility:CampaignUtilityService
    )
    {

  }
  canActivate(): boolean { 
      if (this.utility.loggedIn()) {
        return true;
      } 
      else { 
        this.router.navigate(['/login'])
        return false;
      }
    }
 
}
