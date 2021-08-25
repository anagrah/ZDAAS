import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavMenuComponent } from './Core/components/nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ValidateChangeInDataService } from './parser/services/ValidateChangeInDataService';
import { ParserModule } from './parser/parser.module';
import { SharedModule } from './shared/shared.module';
import { AppConfigService } from './shared/services/app-config.service';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { ParserGlobalGrrorHandlerService } from './shared/services/parser-global-grror-handler.service';
import { CoreModule } from './core/core.module';
//import { NgxDropzoneModule } from 'ngx-dropzone/lib/ngx-dropzone.module';
//import { NgxDropzoneModule } from 'ngx-dropzone'; ngx-dropzone\lib\ngx-dropzone
//import { CRMModule } from './crm/crm.module';
// @Injectable()
// class ParserErrorHandler extends ErrorHandler {
//   constructor(private progressSpinnerService: ProgressSpinnerService) {
//     super();
//   }
//   handleError(error) {
//     debugger
//   if(this.progressSpinnerService.isLoading == true){
//     this.progressSpinnerService.isLoading = false;
//   }
//     super.handleError(error);
//    alert(`Fatal error occurred, refresh the page and try again. If you experience this error continuously, contact to administrator.`);
//   }
// }
let AppModule = class AppModule {
    /**
     *
     */
    constructor(parserGlobalGrrorHandlerService) {
        this.parserGlobalGrrorHandlerService = parserGlobalGrrorHandlerService;
    }
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent //, 
            //NavMenuComponent
        ],
        imports: [
            CoreModule,
            BrowserModule,
            ParserModule,
            FormsModule,
            SharedModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            EditorModule
        ],
        providers: [
            AuthGuard,
            ValidateChangeInDataService,
            {
                provide: APP_INITIALIZER,
                multi: true,
                deps: [AppConfigService],
                useFactory: (appConfigService) => {
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
        entryComponents: []
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map