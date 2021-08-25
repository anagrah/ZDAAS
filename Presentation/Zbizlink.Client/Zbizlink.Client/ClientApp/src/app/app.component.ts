import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { skip, take } from 'rxjs/operators';
import { AppState } from './Store/AppState/app.state';
import { getErrorMessage } from './Store/shared/SharedStateManagement/NgRx/errorMessageState/errorMessage.Selectors';
import { setErrorMessage } from './Store/shared/SharedStateManagement/NgRx/errorMessageState/errorMessage.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  errorMessage: Observable<string> | undefined;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    // this.errorMessage = this.store.select(getErrorMessage);
    // this.store.dispatch(setErrorMessage({ message: ''}));
  }
}
