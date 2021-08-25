import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragemanagerService {

  constructor() { }

  public localStorageSetItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  public localStorageGetItem(key: string) {   
    return JSON.parse(localStorage.getItem(key));
  }
}
