import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddfieldComponent } from './Components/Dialogs/addfield/addfield.component';
import { DocumentParserFormComponent } from './Components/document-parser-form/document-parser-form.component';
import { DocumentSummaryComponent } from './Components/document-summary/document-summary.component';
import { DocumentUploadComponent } from './Components/document-upload/document-upload.component';
import { DocumentListComponent } from './Components/Dialogs/document-list/document-list.component';
import { TinymceComponent } from './Components/Dialogs/tinymce/tinymce.component';
import { SharedModule } from '../shared/shared.module';
import { DocumentUploadOptionComponent } from './Components/Dialogs/document-upload-option/document-upload-option.component';
import { OpportunityNameComponent } from './Components/Dialogs/opportunity-name/opportunity-name.component';
import { ConfirmationMessageComponent } from './Components/Dialogs/confirmation-message/confirmation-message.component';
import { DuplicateDocumentListComponent } from './Components/Dialogs/duplicate-document-list/duplicate-document-list.component';
import { FileListMessageComponent } from './Components/Dialogs/file-list-message/file-list-message.component';
import { CategorydataDownloadComponent } from './Components/Dialogs/categorydata-download/categorydata-download.component';
import { RouterModule } from '@angular/router';
import { SendEmailComponent } from './Components/Dialogs/send-email/send-email.component';
let ParserModule = class ParserModule {
};
ParserModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            SharedModule,
            RouterModule.forChild([
                { path: 'Opportunity', component: DocumentParserFormComponent },
            ])
        ],
        declarations: [
            TinymceComponent,
            AddfieldComponent,
            DocumentParserFormComponent,
            DocumentSummaryComponent,
            DocumentUploadComponent,
            DocumentListComponent,
            DocumentUploadOptionComponent,
            OpportunityNameComponent,
            ConfirmationMessageComponent,
            DuplicateDocumentListComponent,
            FileListMessageComponent,
            CategorydataDownloadComponent,
            SendEmailComponent
        ],
        exports: [],
        entryComponents: [
            TinymceComponent,
            DocumentListComponent,
            AddfieldComponent
        ]
    })
], ParserModule);
export { ParserModule };
//# sourceMappingURL=parser.module.js.map