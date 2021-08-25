import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentSummaryComponent } from '../../document-summary/document-summary.component';//'../opportunity/summary/summary.component';
//import { SummaryField } from '../../../Shared/models/SummaryField';

//import { ControlType } from '../../../Shared/Models/ControlType';
//import { SummaryField } from 'src/app/Parser/Shared/models/SummaryField';

import { ControlType } from '../../../Models/ControlType';
import { SummaryField } from 'src/app/parser/models/SummaryField';

import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-addfield-dialog',
  templateUrl: './addfield.component.html',
  styleUrls: ['./addfield.component.css']
})
export class AddfieldComponent implements OnInit {
  id: number = 0;
  fieldType: string;
  fieldtypes: any = ['TextBox', 'DateTime'];
  fieldLabel: string = '';
  groupForm: FormGroup;
  required: Boolean = false;
  summary: DocumentSummaryComponent;
  //summarArray: Array<SummaryField>;
  summaryField: SummaryField;

  @ViewChild("fieldtype", { static: false }) fieldTypeElement: MatSelect;
  selectedTypeCode: string;
  controlTypes: ControlType[] = [
    { typeCode: 1, typeValue: 'TextBox' },
    { typeCode: 3, typeValue: 'DateTime' }
  ]
  constructor(private fb: FormBuilder, private el: ElementRef,
    public dialogRef: MatDialogRef<AddfieldComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log('--->' + data.id + '<---');
    this.id = data.id;
    this.summary = data.summary;
  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      labelfield: ['', [Validators.required]],
      typefield: ['', [Validators.required]]
    });
  }
  Cancel() {
    this.dialogRef.close();
  }

  ChangeFieldType(e) {
    debugger;
    if (e !== undefined && e.value !== undefined) {
      let strValue = e.value;
      let arr = strValue.indexOf(':') === 1 ? strValue.split(': ') : [0];
      this.fieldType = arr[0] === 0 ? strValue : arr[1].toString();
    }
  }

  getErrorMessage() {
    if (this.groupForm.controls.labelfield.hasError('required')) {
      return 'You must enter a value';
    }

    //return this.groupForm.controls.labelfield.hasError('email') ? 'Not a valid email' : '';
  }

  Done() {
    debugger;
    if (this.groupForm.valid) {
      console.log('---> ' + this.fieldLabel + ' <---');
      console.log('---> ' + this.fieldType + ' <---');
      
      this.summaryField = new SummaryField(this.fieldLabel, this.fieldType, "", 0, 0, false);

      this.dialogRef.close(this.summaryField);
    } else {

      if (this.groupForm.get('typefield').hasError) {

        this.fieldTypeElement.focus();
      }

    }
  }
}