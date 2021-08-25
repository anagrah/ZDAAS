import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DragulaModule } from 'ng2-dragula'; 
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { ContextMenuModule } from 'ngx-contextmenu';
import { EditorModule } from '@tinymce/tinymce-angular';
import {ProgressSpinnerService} from 'src/app/shared/services/progress-spinner.service' 
import { MaterialModule } from 'src/app/material/material.module';
import { AddCategoryFieldComponent } from './add-category-field/add-category-field.component';
import { OpportunityLinkComponent } from './opportunity-link/opportunity-link.component';
import { SaveChangesBeforeMoveComponent } from './save-changes-before-move/save-changes-before-move.component';




@NgModule({
  declarations: [AddCategoryFieldComponent, OpportunityLinkComponent, SaveChangesBeforeMoveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DragulaModule.forRoot(),    
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
