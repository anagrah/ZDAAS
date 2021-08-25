import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

import { UtilityService } from 'src/app/shared/services/utility.service';
import { NavbarService } from '../../Services/navbar.service';
import { UserManagementWebapiService } from '../../services/user-management-webapi.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isHidden: boolean = false;
  constructor(private router: Router, private userManagementWebapiService: UserManagementWebapiService, 
    private auth: AuthGuard, public nav: NavbarService, private utility: UtilityService ) {
  }

  ngOnInit() { 
    this.hideShowLogOutBtn();
  }
  logout() {
    this.nav.logout();
    this.router.navigate(['/login-user']);
  }
  // If user came from zbizlink site , hide logout button,due to direct login ,Else for parser user it will be shown 
  private hideShowLogOutBtn() {  
    console.log("Hide logout button ,if user came from zbizlink");     
      if (this.auth.isZibilinkUser()) // For zbizlink user hide logout button
        {
          this.nav.hide();
        }else{
          if (this.utility.loggedIn()){
            // For logged in user show logout button
         this.nav.show(); 
       }
         else{
           this.nav.hide(); // For logged out user hide logout button
         } 
        }  
 }
}
