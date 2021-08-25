import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class ApiCallRetryService{
  private readonly retryCountTimes: number = 3;
  constructor(
  ){}
  get retryCount(){
    return this.retryCountTimes;
  }
}
