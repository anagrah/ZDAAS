import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DragulaModule } from 'ng2-dragula';
import { EscapeHtmlModule } from '../Module/escape-html.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from '../app-routing.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { EditorModule } from '@tinymce/tinymce-angular';
import {ProgressSpinnerService} from 'src/app/shared/services/progress-spinner.service'
//import { InsertCategoryAttributeService } from './services/insert-category-attribute.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DragulaModule.forRoot(),
    EscapeHtmlModule,
    ScrollingModule,
    AppRoutingModule,
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
    AppRoutingModule,
    ContextMenuModule, 
    EditorModule
  ],
  providers: [
    ProgressSpinnerService
    //InsertCategoryAttributeService,
  ]
})
export class SharedModule { }
