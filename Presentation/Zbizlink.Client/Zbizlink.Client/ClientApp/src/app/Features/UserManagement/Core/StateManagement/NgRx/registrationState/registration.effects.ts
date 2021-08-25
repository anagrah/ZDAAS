import { ErrorMessageFacadeService } from './../../../../Abstraction/Facade/error-message-facade.service';
import { RegistrationFacadeService } from './../../../../Abstraction/Facade/registration-facade.service';
import { userRegistrationStart, userRegistrationSuccess } from './registration.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { UserLocalStorageFacadeService } from 'src/app/Features/UserManagement/Abstraction/Facade/userLocalStorage-facade.service';




@Injectable()
export class RegistrationEffects {

  constructor(private actions$: Actions,
    private registrationFacadeService: RegistrationFacadeService,
    private userLocalStorageFacadeService: UserLocalStorageFacadeService,
    private errorMessageFacadeService: ErrorMessageFacadeService) {}


    // Creating a new effect for Registration:
    registration$ = createEffect(() => {
      return this.actions$.pipe(ofType(userRegistrationStart),
      exhaustMap((action) => {
        return this.registrationFacadeService.signUp((JSON.stringify(action)))
        .pipe(map((data) => {
          const user = this.userLocalStorageFacadeService.formatUser(data);
          this.errorMessageFacadeService.getErrorMessage(user, action);
          return userRegistrationSuccess({ user, redirect: true });
        })
        );
      }))
    },
    );

}
