import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-document-upload-option',
  templateUrl: './document-upload-option.component.html',
  styleUrls: ['./document-upload-option.component.css']
})
export class DocumentUploadOptionComponent implements OnInit {

  RadioSelectedVaule: string;
  categoryDropdownSelectedValue: string;
  constructor(@Optional()
  public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  categories = [
    { value: 'category_2', viewValue: 'Scope' },
    { value: 'category_3', viewValue: 'Background' },
    { value: 'category_4', viewValue: 'Labor' }
  ];
  parsingTypeRadioSelectedVaule: string;

  closeDialogOpp(): void {

    this.dialogRef.close();
  }

  ok(): void {
    this.dialogRef.close(this.categoryDropdownSelectedValue);
  }
}



