import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DocumentUploadService } from 'src/app/parser/services/document-upload.service';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { CategoryDownload } from 'src/app/parser/Models/CategoryDownload';
import { CategoryName } from 'src/app/parser/models/CategoryName';
   
@Component({  
  selector: 'app-categorydata-download',
  templateUrl: './categorydata-download.component.html',
  styleUrls: ['./categorydata-download.component.css']
})
export class CategorydataDownloadComponent implements OnInit {
  
  checked: Boolean = true;

  private categoryDownload: CategoryDownload;


  categoryMultiDropdownSelectedValue: string;
  categorySingleDropdownSelectedValue: string;
  categoryNameList: CategoryName[];

  multiSelectionDropdown: boolean = false;
  singleSelectionDropdown: boolean = true;
  
  yesOrNoRadiobuttonGroupDisable: boolean = true;

  yesOrNoRadioBtnChecked: boolean = false; 

  requiredYesNo: boolean = false;
  requiredYesNoMessage: string;

  requiredCategory: boolean = false;
  requiredCategoryMessage: string;
  constructor(@Optional()
  public dialogRef: MatDialogRef<any>,
    private documentUploadService: DocumentUploadService) {

  }

  ngOnInit(): void {
    this.categoryDownload = new CategoryDownload();
    this.categoryNameList = this.documentUploadService.CategoryNameList;
    this.categoryDownload.ExportToExcel = true;
  }
//
yesOrNoRadioGroupDisable(): boolean { 
  return this.yesOrNoRadiobuttonGroupDisable;
}

yesOrNoRadioButtonChecked(): boolean {
  return this.yesOrNoRadioBtnChecked;
}

ok(): void {   
  if ((this.categoryDownload.ExportToExcel == true || this.categoryDownload.ExportToWord == true) &&
    this.categoryDownload.wholeDocumentNo == false &&
    this.categoryDownload.wholeDocumentYes == false) {
    this.requiredYesNo = true;
    this.requiredYesNoMessage = "Must select one option Yes/No";
    return;
  }   
  if (this.categoryDownload.wholeDocumentNo == true && this.requiredCategory == true) 
  {
     // this.requiredCategory = true;
      this.requiredCategoryMessage = "Must select category";
    return;
  }  
  if (this.multiSelectionDropdown == true) { 
    this.categoryDownload.SelectedCategory = this.categoryMultiDropdownSelectedValue;
  }
  if (this.singleSelectionDropdown == true) {
    this.categoryDownload.SelectedCategory = this.categorySingleDropdownSelectedValue;
  }
  this.categoryDownload.Ok = true;
  this.dialogRef.close(this.categoryDownload);
}



closeDialogOpp(): void {

  this.dialogRef.close();
}
onChange(mrChange: MatRadioChange) { 
  let mrButton: MatRadioButton = mrChange.source; 
  if (mrChange.value == 'yes' && mrButton.checked == true) {
    this.categoryDownload.wholeDocumentNo = false;
    this.categoryDownload.wholeDocumentYes = true; 
    this.multiSelectionDropdown = false;
    this.singleSelectionDropdown = false;
    this.categorySingleDropdownSelectedValue = '';
    this.requiredYesNoMessage = "";
    this.requiredYesNo = false;
    this.requiredCategoryMessage ="";

  } else if (mrChange.value == 'no' && mrButton.checked == true) {
    this.categoryDownload.wholeDocumentNo = true;
    this.categoryDownload.wholeDocumentYes = false; 
    this.singleSelectionDropdown = false;
    this.multiSelectionDropdown = true;
    this.categoryMultiDropdownSelectedValue = '';
    this.requiredYesNoMessage = "";
    this.requiredCategory = true;
    this.requiredYesNo = false;
    this.requiredCategoryMessage ="";
  }else if (mrChange.value == 'ExportToWord' && mrButton.checked == true) {
    this.yesOrNoRadioBtnChecked = false;
    this.categoryDownload.ExportToExcel = false;
    this.categoryDownload.ExportToWord = true;
    this.yesOrNoRadiobuttonGroupDisable = true;
    this.categoryMultiDropdownSelectedValue = '';
    this.categorySingleDropdownSelectedValue = '';

    this.requiredYesNo = false;
    this.requiredYesNoMessage = "";
    this.requiredCategory = false;
    this.requiredCategoryMessage = ""
  }
  else if (mrChange.value == 'ExportToExcel' && mrButton.checked == true) {
    this.yesOrNoRadiobuttonGroupDisable = false;
    this.categoryDownload.ExportToExcel = true;
    this.categoryDownload.ExportToWord = false;


  }
    else {
    this.categoryDownload.wholeDocumentYes = true;
    this.categoryDownload.wholeDocumentNo = false;
    this.categoryDownload.ExportToExcel = true; 
  }

}
onMultiDropdownValueChange(event: any) {
  if (this.categoryDownload.wholeDocumentNo == true && this.categoryMultiDropdownSelectedValue != "") {
    this.requiredCategory = false;
    this.requiredCategoryMessage = "";
  }
  if (this.categoryDownload.wholeDocumentYes == true && this.categorySingleDropdownSelectedValue != "") {
    this.requiredCategory = false;
    this.requiredCategoryMessage = "";
  }
}

}
