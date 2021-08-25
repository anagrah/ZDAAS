import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DragulaModule } from 'ng2-dragula';
import { EscapeHtmlModule } from '../Module/escape-html.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ContextMenuModule } from 'ngx-contextmenu';
import { EditorModule } from '@tinymce/tinymce-angular';
import {ProgressSpinnerService} from 'src/app/shared/services/progress-spinner.service';
import { PageNotFoundComponent } from './ErrorPage/page-not-found/page-not-found.component';
import { OpportunityUrlComponent } from './opportunity-url/opportunity-url.component';

//import { InsertCategoryAttributeService } from './services/insert-category-attribute.service';



@NgModule({
  declarations: [PageNotFoundComponent, OpportunityUrlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DragulaModule.forRoot(),
    EscapeHtmlModule,
    ScrollingModule,    
    ContextMenuModule.forRoot(), 
    EditorModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DragulaModule,
    EscapeHtmlModule,
    ScrollingModule,    
    ContextMenuModule, 
    EditorModule
  ],
  providers: [
    ProgressSpinnerService
    //InsertCategoryAttributeService,
  ]
})
export class SharedModule { }
