import { __decorate, __param } from "tslib";
import { Component, Optional, Input } from '@angular/core';
import { ParsingDialogOutput } from 'src/app/parser/models/ParsingDialogOutput';
import { FormControl } from '@angular/forms';
let DocumentUploadOptionComponent = class DocumentUploadOptionComponent {
    //checked: boolean = true;
    // auto: string = 'auto';
    // manual: string = 'manual';
    constructor(dialogRef, documentUploadService) {
        this.dialogRef = dialogRef;
        this.documentUploadService = documentUploadService;
        this.checked = true;
        this.multiSelectionDropdown = false;
        this.singleSelectionDropdown = true;
        this.yesOrNoRadiobuttonGroupDisable = true;
        this.yesOrNoRadioBtnChecked = false;
        this.disableSelect = new FormControl(false);
        this.requiredYesNo = false;
        this.requiredCategory = false;
        this.autoParsing = 'multiple';
        this.categories = [
            { value: 'category_2', viewValue: 'Scope' },
            { value: 'category_3', viewValue: 'Background' },
            { value: 'category_4', viewValue: 'Labor' }
        ];
    }
    ngOnInit() {
        this.parsingDialogOutput = new ParsingDialogOutput();
        this.categoryNameList = this.documentUploadService.CategoryNameList;
        this.parsingDialogOutput.ParsingAuto = true;
    }
    yesOrNoRadioGroupDisable() {
        return this.yesOrNoRadiobuttonGroupDisable;
    }
    yesOrNoRadioButtonChecked() {
        return this.yesOrNoRadioBtnChecked;
    }
    // singleSelectedVaule: string;
    // multipleSelectedVaule: string;
    closeDialogOpp() {
        this.dialogRef.close();
    }
    ok() {
        debugger;
        if (this.parsingDialogOutput.ParsingManual == true &&
            this.parsingDialogOutput.wholeDocumentNo == false &&
            this.parsingDialogOutput.wholeDocumentYes == false) {
            this.requiredYesNo = true;
            this.requiredYesNoMessage = "Must select one option Yes/No";
            return;
        }
        if (this.parsingDialogOutput.ParsingManual == true &&
            this.parsingDialogOutput.wholeDocumentYes == true &&
            this.categorySingleDropdownSelectedValue == "") {
            this.requiredCategory = true;
            this.requiredCategoryMessage = "Must select category";
            return;
        }
        if (this.parsingDialogOutput.ParsingManual == true &&
            this.parsingDialogOutput.wholeDocumentNo == true &&
            this.categoryMultiDropdownSelectedValue == "") {
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
    onChange(mrChange) {
        debugger;
        let mrButton = mrChange.source;
        if (mrChange.value == 'yes' && mrButton.checked == true) {
            this.parsingDialogOutput.wholeDocumentNo = false;
            this.parsingDialogOutput.wholeDocumentYes = true;
            this.parsingDialogOutput.ParsingAuto = false;
            this.multiSelectionDropdown = false;
            this.singleSelectionDropdown = true;
            this.categorySingleDropdownSelectedValue = '';
            this.requiredYesNoMessage = "";
            this.requiredYesNo = false;
        }
        else if (mrChange.value == 'no' && mrButton.checked == true) {
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
            this.requiredCategoryMessage = "";
        }
        else if (mrChange.value == 'manual' && mrButton.checked == true) {
            this.yesOrNoRadiobuttonGroupDisable = false;
            this.parsingDialogOutput.ParsingManual = true;
            this.parsingDialogOutput.ParsingAuto = false;
        }
        else {
            this.parsingDialogOutput.wholeDocumentYes = false;
            this.parsingDialogOutput.wholeDocumentNo = false;
            this.parsingDialogOutput.ParsingAuto = false;
            this.parsingDialogOutput.ParsingManual = false;
        }
    }
    onMultiDropdownValueChange(event) {
        if (this.parsingDialogOutput.wholeDocumentNo == true && this.categoryMultiDropdownSelectedValue != "") {
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
        }
        if (this.parsingDialogOutput.wholeDocumentYes == true && this.categorySingleDropdownSelectedValue != "") {
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
        }
    }
};
__decorate([
    Input()
], DocumentUploadOptionComponent.prototype, "checked", void 0);
DocumentUploadOptionComponent = __decorate([
    Component({
        selector: 'app-document-upload-option',
        templateUrl: './document-upload-option.component.html',
        styleUrls: ['./document-upload-option.component.css']
    }),
    __param(0, Optional())
], DocumentUploadOptionComponent);
export { DocumentUploadOptionComponent };
//# sourceMappingURL=document-upload-option.component.js.map