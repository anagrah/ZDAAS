import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import{MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
//import { NgxDropzoneModule } from 'ngx-dropzone/lib/ngx-dropzone.module';

@NgModule({
  declarations: [],
  imports: [
    //NgxDropzoneModule,
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule ,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule ,
    MatListModule,
    MatBadgeModule 
  ],
  exports:[
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule { }
