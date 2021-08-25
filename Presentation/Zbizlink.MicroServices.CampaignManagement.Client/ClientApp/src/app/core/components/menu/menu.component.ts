import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isHidden: boolean = false;
  constructor(private router: Router, 
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
     // this.isHidden = true;
    if (this.utility.loggedIn())  // For logged in user show logout button
        this.nav.show();
        else
          this.nav.hide(); // For logged out user hide logout button
     // this.isHidden = false;
     
  }
}
