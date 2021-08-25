import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let EscapeHtmlPipe = class EscapeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invanglid safe type specified: ${type}`);
        }
    }
};
EscapeHtmlPipe = __decorate([
    Pipe({
        name: 'escapeHtml'
    })
], EscapeHtmlPipe);
export { EscapeHtmlPipe };
//# sourceMappingURL=EscapeHtmlPipe.js.map