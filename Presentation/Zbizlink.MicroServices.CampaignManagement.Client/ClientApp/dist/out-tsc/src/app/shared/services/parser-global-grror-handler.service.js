import { __decorate } from "tslib";
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
let ParserGlobalGrrorHandlerService = class ParserGlobalGrrorHandlerService extends ErrorHandler {
    constructor(progressSpinnerService) {
        super();
        this.progressSpinnerService = progressSpinnerService;
    }
    handleError(error) {
        debugger;
        if (this.progressSpinnerService.isLoading == true) {
            this.progressSpinnerService.isLoading = false;
        }
        if (Error instanceof HttpErrorResponse) {
            console.log(error.status);
        }
        else {
            console.error(error);
        }
        alert(`Fatal error occurred, refresh the page and try again. If you experience this error continuously, contact to administrator.`);
    }
};
ParserGlobalGrrorHandlerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ParserGlobalGrrorHandlerService);
export { ParserGlobalGrrorHandlerService };
//# sourceMappingURL=parser-global-grror-handler.service.js.map