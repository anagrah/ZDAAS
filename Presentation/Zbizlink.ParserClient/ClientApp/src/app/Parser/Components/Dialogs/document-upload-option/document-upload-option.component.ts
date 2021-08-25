import { Component, OnInit, Optional, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { ParsingDialogOutput } from 'src/app/parser/models/ParsingDialogOutput';
import { DocumentUploadService } from 'src/app/parser/services/document-upload.service';
import { CategoryName } from 'src/app/parser/models/CategoryName';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-document-upload-option',
  templateUrl: './document-upload-option.component.html',
  styleUrls: ['./document-upload-option.component.css']
})
export class DocumentUploadOptionComponent implements OnInit {

  @Input()
  checked: Boolean = true;

  private parsingDialogOutput: ParsingDialogOutput;


  categoryMultiDropdownSelectedValue: string;
  categorySingleDropdownSelectedValue: string;
  categoryNameList: CategoryName[];

  multiSelectionDropdown: boolean = false;
  singleSelectionDropdown: boolean = true;

  yesOrNoRadiobuttonGroupDisable: boolean = true;

  yesOrNoRadioBtnChecked: boolean = false;

  disableSelect = new FormControl(false);

  requiredYesNo: boolean = false;
  requiredYesNoMessage: string;

  requiredCategory: boolean = false;
  requiredCategoryMessage: string;
  //checked: boolean = true;
  // auto: string = 'auto';
  // manual: string = 'manual';
  constructor(@Optional()
  public dialogRef: MatDialogRef<any>,
    private documentUploadService: DocumentUploadService) {

  }

  autoParsing: string = 'multiple';
  ngOnInit(): void {
    this.parsingDialogOutput = new ParsingDialogOutput();
    this.categoryNameList = this.documentUploadService.CategoryNameList;
    this.parsingDialogOutput.ParsingAuto = true;
  }

  yesOrNoRadioGroupDisable(): boolean { 
    return this.yesOrNoRadiobuttonGroupDisable;
  }

  yesOrNoRadioButtonChecked(): boolean {
    return this.yesOrNoRadioBtnChecked;
  }

  categories = [
    { value: 'category_2', viewValue: 'Scope' },
    { value: 'category_3', viewValue: 'Background' },
    { value: 'category_4', viewValue: 'Labor' }
  ];
  // singleSelectedVaule: string;
  // multipleSelectedVaule: string;

  closeDialogOpp(): void {

    this.dialogRef.close();
  }

  ok(): void {
    debugger;

    
    if (this.parsingDialogOutput.ParsingManual == true &&
      this.parsingDialogOutput.wholeDocumentNo == false &&
      this.parsingDialogOutput.wholeDocumentYes == false) {
      this.requiredYesNo = true;
      this.requiredYesNoMessage = "Must select one option Yes/No"
      return;
    }

    if (this.parsingDialogOutput.ParsingManual == true &&
      this.parsingDialogOutput.wholeDocumentYes == true &&
      this.categorySingleDropdownSelectedValue == ""){
        this.requiredCategory = true;
      this.requiredCategoryMessage = "Must select category";
      return;
      }

      if (this.parsingDialogOutput.ParsingManual == true &&
        this.parsingDialogOutput.wholeDocumentNo == true &&
        this.categoryMultiDropdownSelectedValue == ""){
          this.requiredCategory = true;
        this.requiredCategoryMessage = "Must select category";
        return;
        }
  
    if (this.multiSelectionDropdown == true) {
      this.parsingDialogOutput.SelectedCategory = this.categoryMultiDropdownSelectedValue;
    }
    if (this.singleSelectionDropdown == true) {
      this.parsingDialogOutput.SelectedCategory = this.categorySingleDropdownSelectedValue;
    }

  

    this.parsingDialogOutput.Ok = true;
    this.dialogRef.close(this.parsingDialogOutput);
  }

  onChange(mrChange: MatRadioChange) {
   debugger;
    let mrButton: MatRadioButton = mrChange.source;

    if (mrChange.value == 'yes' && mrButton.checked == true) {
      this.parsingDialogOutput.wholeDocumentNo = false;
      this.parsingDialogOutput.wholeDocumentYes = true;
      this.parsingDialogOutput.ParsingAuto = false;
      this.multiSelectionDropdown = false;
      this.singleSelectionDropdown = true;
      this.categorySingleDropdownSelectedValue = '';
      this.requiredYesNoMessage = "";
      this.requiredYesNo = false;

    } else if (mrChange.value == 'no' && mrButton.checked == true) {
      this.parsingDialogOutput.wholeDocumentNo = true;
      this.parsingDialogOutput.wholeDocumentYes = false;
      this.parsingDialogOutput.ParsingAuto = false;
      this.singleSelectionDropdown = false;
      this.multiSelectionDropdown = true;
      this.categoryMultiDropdownSelectedValue = '';
      this.requiredYesNoMessage = "";
      this.requiredYesNo = false;
    }
    else if (mrChange.value == 'auto' && mrButton.checked == true) {
      this.yesOrNoRadioBtnChecked = false;
      this.parsingDialogOutput.ParsingManual = false;
      this.parsingDialogOutput.ParsingAuto = true;
      this.yesOrNoRadiobuttonGroupDisable = true;
      this.categoryMultiDropdownSelectedValue = '';
      this.categorySingleDropdownSelectedValue = '';

      this.requiredYesNo = false;
      this.requiredYesNoMessage = "";
      this.requiredCategory = false;
      this.requiredCategoryMessage = ""
    }
    else if (mrChange.value == 'manual' && mrButton.checked == true) {
      this.yesOrNoRadiobuttonGroupDisable = false;
      this.parsingDialogOutput.ParsingManual = true;
      this.parsingDialogOutput.ParsingAuto = false;


    } else {
      this.parsingDialogOutput.wholeDocumentYes = false;
      this.parsingDialogOutput.wholeDocumentNo = false;
      this.parsingDialogOutput.ParsingAuto = false;
      this.parsingDialogOutput.ParsingManual = false;
    }

  }

  onMultiDropdownValueChange(event: any) {
    if (this.parsingDialogOutput.wholeDocumentNo == true && this.categoryMultiDropdownSelectedValue != "") {
      this.requiredCategory = false;
      this.requiredCategoryMessage = "";
    }
    if (this.parsingDialogOutput.wholeDocumentYes == true && this.categorySingleDropdownSelectedValue != "") {
      this.requiredCategory = false;
      this.requiredCategoryMessage = "";
    }
  }
}



