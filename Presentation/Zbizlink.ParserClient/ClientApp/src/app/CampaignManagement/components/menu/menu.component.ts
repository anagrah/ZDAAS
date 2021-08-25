import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { CampaignUtilityService } from '../../services/campaign-utility.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private router: Router,  
      public nav: NavbarService, private utility: CampaignUtilityService ) {
  }

  ngOnInit() {  
    this.hideShowLogOutBtn();
  }
  logout() { 
    this.nav.logout();
    this.router.navigate(['/login']);
  }
  // If user came from zbizlink site , hide logout button,due to direct login ,Else for parser user it will be shown 
  private hideShowLogOutBtn() {   
    // this.utility.urlDecode();
    if (this.utility.loggedIn())  // For logged in user show logout button
        this.nav.show();
        else
          this.nav.hide(); // For logged out user hide logout button 
  } 
}
