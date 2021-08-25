import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // Get token
  public loggedIn() {
    return !!localStorage.getItem('Token');
  }
}
