import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ValidationErrors } from '@angular/forms';


// http-status.service.ts
@Injectable({
    // important to provide this service to the 
    // injector of the root module 
    providedIn: 'root'
  })
  export class HttpStatusService {
    // regular subject because we don't want to replay
    // the validationerrors
    private validationErrorsSub$ 
      = new Subject<ValidationErrors[]>();
  
    // 2 subjects that replays the last value 
    // (ideal for state)
    private loadingSub$ = new ReplaySubject<boolean>(1);
    private actingSub$ = new ReplaySubject<boolean>(1);
  
    // we don't want to expose the subject for
    // encapsulation purposes. That's why we convert them
    // into observables
    getvalidationErrors$ = 
      this.validationErrorsSub$.asObservable();
    loading$ = 
      this.loadingSub$.pipe(distinctUntilChanged());
    acting$ = 
      this.actingSub$.pipe(distinctUntilChanged());
  
    // these are just some regular setters to next 
    // the values in our subjects
    set validationErrors(errors: ValidationErrors[]) {
      this.validationErrorsSub$.next(errors);
    }
  
    set loading(val: boolean) {
      this.loadingSub$.next(val);
    }
  
    set acting(val: boolean) {
      this.actingSub$.next(val);
    }
  }
