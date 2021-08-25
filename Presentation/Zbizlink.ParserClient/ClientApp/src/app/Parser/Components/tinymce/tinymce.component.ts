import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { empty } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements OnInit {
  OppoertunityDataArray: Element[] = [];
  tinyData: string;
  description: string;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<TinymceComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.title;
    this.OppoertunityDataArray = data.opportunityData;

  }

  ngOnInit() {

    this.tinyData = this.getDataForTinymce();

  }

  getDataForTinymce(): string {
    debugger;
    let data: string = "";
    let onlyData: string = "";

    if(this.OppoertunityDataArray.length === 1 && this.OppoertunityDataArray[0].getAttribute('data-temptrow') !== null){

      if(this.OppoertunityDataArray[0].getAttribute('data-temptrow').valueOf() === 'true'){
        return "";
      }
          
    }

    for (let index = 0; index < this.OppoertunityDataArray.length; index++) {
      const element = this.OppoertunityDataArray[index];
     //let el: Element = element.getAttribute("");

      onlyData = element.innerHTML;
      data += element.outerHTML;

    }

    if (onlyData.trim() == '.') {
      data = undefined;
    }

    return data
  }

  


  ok() {

    this.dialogRef.close(this.tinyData);
  }

  Cancel() {

    this.dialogRef.close();

  }
}
