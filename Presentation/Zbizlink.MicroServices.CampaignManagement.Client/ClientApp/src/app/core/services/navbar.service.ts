import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  visible: boolean = false;

  constructor() {
    this.ifTokenExists();
  }
  ngOnInit(): void {
  }
  hide() {
    this.visible = false;
  }
  ifTokenExists() {
    if (localStorage.getItem('Token'))
      this.visible = true;
  }
  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }


  // Logout user
  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('Token');
    sessionStorage.clear();
    localStorage.clear();
    this.hide(); 
    return true;
  }
}
