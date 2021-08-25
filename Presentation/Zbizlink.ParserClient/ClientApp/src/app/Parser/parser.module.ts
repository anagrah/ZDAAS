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

import { ParserComponent } from './parser.component';
import { ParserRoutingModule } from './parser-routing.module';
import { CoreModule } from './Core/core.module';
import { MaterialModule } from '../material/material.module';
import { MatSelectFilterModule } from 'mat-select-filter';


@NgModule({
  imports: [
    CommonModule,
    SharedModule, ParserRoutingModule, CoreModule,MaterialModule,MatSelectFilterModule
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
    ParserComponent
  ],
  exports: [
    CommonModule,
    SharedModule, ParserRoutingModule, CoreModule,MaterialModule
  ],
  entryComponents: [
    TinymceComponent,
    DocumentListComponent,
    AddfieldComponent
  ]
})
export class ParserModule { }
