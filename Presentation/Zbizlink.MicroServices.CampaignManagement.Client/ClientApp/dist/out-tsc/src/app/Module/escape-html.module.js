import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from '../shared/pipes/EscapeHtmlPipe';
let EscapeHtmlModule = class EscapeHtmlModule {
};
EscapeHtmlModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [EscapeHtmlPipe],
        exports: [EscapeHtmlPipe]
    })
], EscapeHtmlModule);
export { EscapeHtmlModule };
//# sourceMappingURL=escape-html.module.js.map