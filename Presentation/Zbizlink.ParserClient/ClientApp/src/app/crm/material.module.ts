import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
