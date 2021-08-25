import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ValidateChangeInDataService } from './parser/services/ValidateChangeInDataService';
import { ParserModule } from './parser/parser.module';
import { SharedModule } from './shared/shared.module';
import { AppConfigService } from './shared/services/app-config.service';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { ParserGlobalGrrorHandlerService } from './shared/services/parser-global-grror-handler.service';

import { CRMModule } from './crm/crm.module';
import { CampaignManagementModule } from './CampaignManagement/campaign.module';


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [   
    BrowserModule,
    FormsModule,
    SharedModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    EditorModule,
    CRMModule,
    CampaignManagementModule,    
    ParserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    ValidateChangeInDataService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      }
    },
    {
      provide: ErrorHandler,
      useClass: ParserGlobalGrrorHandlerService
    }
  ],

  bootstrap: [
    AppComponent
  ],
  entryComponents: [
  ]
})
export class AppModule {

  /**
   *
   */
  constructor(private parserGlobalGrrorHandlerService: ParserGlobalGrrorHandlerService) {


  }
}
