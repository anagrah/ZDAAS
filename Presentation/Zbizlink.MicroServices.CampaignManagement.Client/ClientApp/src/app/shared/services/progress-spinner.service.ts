import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressSpinnerService {

  isLoading: boolean = false;
  constructor() { }
}
