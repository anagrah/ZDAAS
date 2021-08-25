import { __decorate, __param } from "tslib";
import { Component, Optional } from '@angular/core';
import { CategoryDownload } from 'src/app/parser/Models/CategoryDownload';
let CategorydataDownloadComponent = class CategorydataDownloadComponent {
    constructor(dialogRef, documentUploadService) {
        this.dialogRef = dialogRef;
        this.documentUploadService = documentUploadService;
        this.checked = true;
        this.multiSelectionDropdown = false;
        this.singleSelectionDropdown = true;
        this.yesOrNoRadiobuttonGroupDisable = true;
        this.yesOrNoRadioBtnChecked = false;
        this.requiredYesNo = false;
        this.requiredCategory = false;
    }
    ngOnInit() {
        this.categoryDownload = new CategoryDownload();
        this.categoryNameList = this.documentUploadService.CategoryNameList;
        this.categoryDownload.ExportToExcel = true;
    }
    //
    yesOrNoRadioGroupDisable() {
        return this.yesOrNoRadiobuttonGroupDisable;
    }
    yesOrNoRadioButtonChecked() {
        return this.yesOrNoRadioBtnChecked;
    }
    ok() {
        if ((this.categoryDownload.ExportToExcel == true || this.categoryDownload.ExportToWord == true) &&
            this.categoryDownload.wholeDocumentNo == false &&
            this.categoryDownload.wholeDocumentYes == false) {
            this.requiredYesNo = true;
            this.requiredYesNoMessage = "Must select one option Yes/No";
            return;
        }
        if (this.categoryDownload.wholeDocumentNo == true && this.requiredCategory == true) {
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
    closeDialogOpp() {
        this.dialogRef.close();
    }
    onChange(mrChange) {
        let mrButton = mrChange.source;
        if (mrChange.value == 'yes' && mrButton.checked == true) {
            this.categoryDownload.wholeDocumentNo = false;
            this.categoryDownload.wholeDocumentYes = true;
            this.multiSelectionDropdown = false;
            this.singleSelectionDropdown = false;
            this.categorySingleDropdownSelectedValue = '';
            this.requiredYesNoMessage = "";
            this.requiredYesNo = false;
            this.requiredCategoryMessage = "";
        }
        else if (mrChange.value == 'no' && mrButton.checked == true) {
            this.categoryDownload.wholeDocumentNo = true;
            this.categoryDownload.wholeDocumentYes = false;
            this.singleSelectionDropdown = false;
            this.multiSelectionDropdown = true;
            this.categoryMultiDropdownSelectedValue = '';
            this.requiredYesNoMessage = "";
            this.requiredCategory = true;
            this.requiredYesNo = false;
            this.requiredCategoryMessage = "";
        }
        else if (mrChange.value == 'ExportToWord' && mrButton.checked == true) {
            this.yesOrNoRadioBtnChecked = false;
            this.categoryDownload.ExportToExcel = false;
            this.categoryDownload.ExportToWord = true;
            this.yesOrNoRadiobuttonGroupDisable = true;
            this.categoryMultiDropdownSelectedValue = '';
            this.categorySingleDropdownSelectedValue = '';
            this.requiredYesNo = false;
            this.requiredYesNoMessage = "";
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
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
    onMultiDropdownValueChange(event) {
        if (this.categoryDownload.wholeDocumentNo == true && this.categoryMultiDropdownSelectedValue != "") {
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
        }
        if (this.categoryDownload.wholeDocumentYes == true && this.categorySingleDropdownSelectedValue != "") {
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
        }
    }
};
CategorydataDownloadComponent = __decorate([
    Component({
        selector: 'app-categorydata-download',
        templateUrl: './categorydata-download.component.html',
        styleUrls: ['./categorydata-download.component.css']
    }),
    __param(0, Optional())
], CategorydataDownloadComponent);
export { CategorydataDownloadComponent };
//# sourceMappingURL=categorydata-download.component.js.map