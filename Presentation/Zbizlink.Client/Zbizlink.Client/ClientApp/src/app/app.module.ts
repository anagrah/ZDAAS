import { AppConfigFacadeService } from 'src/app/Shared/Abstraction/Facade/app-config-facade.service';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './Helper/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule } from './Shared/Presentation/Modules/sharedModule/shared.module'
import { UserServicesModule } from './Features/UserManagement/Presentation/module/user-services.module';
import { RolesServicesModule } from './Features/RolesManagement/Presentation/Module/roles-services.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LogoutEffects } from './Store/shared/SharedStateManagement/NgRx/LogOutState/logout.effects';
import { RegistrationEffects } from './Features/UserManagement/Core/StateManagement/NgRx/registrationState/registration.effects';
// import { AppConfigService } from './Shared/Core/services/app-config.service';
import { SharedServicesModule } from './Shared/Presentation/Modules/shared-services.module';
import { appReducer } from './Store/AppState/app.state';
import { CustomSerializer } from './Store/router/custom-serializer';
// import { AppConfigFacadeService } from './Shared/Abstraction/Facade/app-config-facade.service';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    SharedModule,
    UserServicesModule,
    RolesServicesModule,
    SharedServicesModule,
    EffectsModule.forRoot([RegistrationEffects]),
    StoreModule.forRoot(appReducer),
     StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),


  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigFacadeService],
      useFactory: (appConfigFacadeService: AppConfigFacadeService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigFacadeService.loadAppConfig();
        };
      }
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
