import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddfieldComponent } from '../Dialogs/addfield/addfield.component';
let DocumentSummaryComponent = class DocumentSummaryComponent {
    constructor(fb, documentSummaryService, notification, validateChange, dialog, route, documentUploadService, progressSpinnerService, rfpManipulationWebApiService) {
        this.fb = fb;
        this.documentSummaryService = documentSummaryService;
        this.notification = notification;
        this.validateChange = validateChange;
        this.dialog = dialog;
        this.route = route;
        this.documentUploadService = documentUploadService;
        this.progressSpinnerService = progressSpinnerService;
        this.rfpManipulationWebApiService = rfpManipulationWebApiService;
        this.Test1 = 20;
        this.ONE_DANK_REGEX = /^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d$|^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ]([1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ][ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$/;
    }
    try() { return true; }
    ngOnInit() {
        this.groupForm = this.fb.group({});
        this.summarArray = new Array();
    }
    ;
    createGroup(summaryFieldArray) {
        if (summaryFieldArray != undefined) {
            // this.groupForm.reset();
            this.summarArray = summaryFieldArray;
            this.validateChange.initDataSummary(summaryFieldArray, null);
            this.drawFields(summaryFieldArray);
            // console.log(this.groupForm);
        }
        ;
    }
    ;
    drawFields(summaryFieldArray) {
        this.removeControlIfExist(this.groupForm);
        summaryFieldArray.forEach(control => {
            //console.log('>>>>>>'+control.FiledTypeId+'<<<<<');
            if (control.FieldDisplayName == "Solicitation Title") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.required, Validators.maxLength(250)]));
            }
            else if (control.FieldDisplayName == "Solicitation Number") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.required, Validators.maxLength(50)]));
            }
            else if (control.FieldDisplayName == "Requesting Agency") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.required, Validators.maxLength(250)]));
            }
            else if (control.FieldDisplayName == "Original Posted Date") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.required, Validators.pattern(this.ONE_DANK_REGEX)]));
            }
            else if (control.FieldDisplayName == "Question Due Date") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.pattern(this.ONE_DANK_REGEX)]));
            }
            else if (control.FieldDisplayName == "Pre-bid Date") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.pattern(this.ONE_DANK_REGEX)]));
            }
            else if (control.FieldDisplayName == "Closing Date and Time") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.required, Validators.pattern(this.ONE_DANK_REGEX)]));
            }
            else if (control.FiledTypeId == "3") {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.pattern(this.ONE_DANK_REGEX)]));
            }
            else {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.maxLength(250)]));
            }
        });
    }
    removeControlIfExist(group) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            group.removeControl(key);
        });
    }
    addField(index, summaryField) {
        let fieldTypeId;
        if (summaryField.ControlType.toString() == 'TextBox') {
            summaryField.FiledTypeId = 1;
            summaryField.ControlType = 'text';
        }
        else if (summaryField.ControlType.toString() == 'textarea') {
            fieldTypeId = 2;
        }
        else {
            summaryField.FiledTypeId = 3;
            summaryField.ControlType = 'date';
        }
        this.summarArray.splice(index + 1, 0, summaryField);
        this.summarArray.forEach(control => {
            //console.log('>>>>>> fieldID >>>>'+control.FiledTypeId+'<<<<<');
            if (control.FiledTypeId === 3) {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.pattern(this.ONE_DANK_REGEX)]));
            }
            else {
                this.groupForm.addControl(control.FieldDisplayName, this.fb.control(control.FieldText, [Validators.maxLength(250)]));
            }
        });
    }
    openDialog(e, index) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        //dialogConfig.width = '250px';
        //dialogConfig.height = '300px';
        //console.log('---------------');
        dialogConfig.data = {
            id: index,
            summary: this
        };
        const dialogRef = this.dialog.open(AddfieldComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(summaryField => {
            if (summaryField !== undefined) {
                this.addField(index, summaryField);
            }
        });
    }
    deleteField(index) {
        let deletedElement = this.summarArray[index];
        this.summarArray.splice(index, 1);
        this.groupForm.removeControl(deletedElement.FieldDisplayName);
    }
    onSubmit(documentUpload, isOpportunity, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.mapFormValuesToSummaryModel();
            debugger;
            this.opportunityName == undefined;
            let createedOpportunity = false;
            if (isOpportunity == true) {
                createedOpportunity = true;
            }
            let fieldTextString = "";
            let summaryObjArray = [];
            //let fieldsValidated = this.SummaryFieldValidation();
            let fieldsValidated = this.SummaryFieldValid();
            Object.keys(this.groupForm.controls).forEach((key) => {
                const abstractControl = this.groupForm.get(key);
                // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
                let summaryIndex = this.summarArray.findIndex(el => el.FieldDisplayName == key);
                let summary = this.summarArray[summaryIndex];
                if (key == "Solicitation Title") {
                    this.opportunityName = abstractControl.value;
                }
                let summaryObj = { key: key, Value: abstractControl.value, DisplayOrder: summaryIndex + 1, FiledTypeId: summary.FiledTypeId }; //console.log(abstractControl.value);
                summaryObjArray.push(summaryObj);
                fieldTextString += abstractControl.value;
            });
            if (fieldsValidated) {
                if (!this.validateChange.isEqualSummary(fieldTextString, this.summarArray)) {
                    createedOpportunity = false;
                    if (documentUpload.isLoadingSmall == false) {
                        documentUpload.isLoadingSmall = true;
                    }
                    yield this.SaveSummary(documentUpload, isOpportunity, fieldTextString, summaryObjArray);
                }
                if (isOpportunity == true && createedOpportunity == true) {
                    documentUpload.publish();
                }
            }
        });
    }
    SaveSummary(documentUpload, isOpportunity, fieldTextString, summaryObjArray = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            if (this.documentUploadService.RFPOpportunity.OpportunityId && summaryObjArray.length > 0) {
                let compId = localStorage.getItem('compId');
                let userid = localStorage.getItem('userid');
                formData.append('userId', userid);
                formData.append('companyId', compId);
                formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
                formData.append('summary', JSON.stringify(summaryObjArray));
            }
            //this.documentSummaryService.addSummary(formData).subscribe((response) => {
            this.rfpManipulationWebApiService.save(formData).subscribe((response) => {
                this.SaveSummaryResponse(response, documentUpload, fieldTextString, isOpportunity);
                // if (response.status != "error") {
                //   this.notification.success("Summary has been successfully saved.");
                //   documentUpload.ChangeOpportunityNameTransfer(this.opportunityName);
                //   this.validateChange.initDataSummary(this.summarArray, fieldTextString);
                //   documentUpload.isLoadingSmall = false;
                //   if (isOpportunity == true) {
                //     documentUpload.publish();
                //   }
                // } else {
                //   documentUpload.isLoadingSmall = false;
                //   this.notification.error(response.message);
                // }
            }, (error) => {
                documentUpload.isLoadingSmall = false;
                this.notification.error(error);
            });
        });
    }
    SaveSummaryResponse(webResponse, documentUpload, fieldTextString, isOpportunity) {
        debugger;
        if (webResponse.code == "1") {
            this.notification.success("Summary has been successfully saved.");
            documentUpload.ChangeOpportunityNameTransfer(this.opportunityName);
            this.validateChange.initDataSummary(this.summarArray, fieldTextString);
            documentUpload.isLoadingSmall = false;
            if (isOpportunity == true) {
                documentUpload.publish();
            }
        }
        else {
            documentUpload.isLoadingSmall = false;
            this.notification.error("'Something bad happened. Please try again later.'");
        }
    }
    SummaryFieldValid() {
        return this.groupForm.valid;
    }
    MaxlengthErrorMessage(fieldName) {
        let errorMessage = "";
        if (this.groupForm.get(fieldName).errors != null &&
            this.groupForm.get(fieldName).errors.maxlength != null &&
            this.groupForm.get(fieldName).errors.maxlength.requiredLength != null) {
            errorMessage = fieldName + ' must be less than ' + this.groupForm.get(fieldName).errors.maxlength.requiredLength + ' character';
        }
        return errorMessage;
    }
    InvalidDateErrorMessage(fieldName) {
        let errorMessage = "";
        if (this.groupForm.get(fieldName).errors.pattern != null) {
            //console.log(fieldName);
            errorMessage = 'Date format must be like mm/dd/yyyy or mm-dd-yyyy or July 8, 2018 00:00 PM';
        }
        return errorMessage;
    }
    SaveChangedCategoriesSummaryData(documentUpload, categoryDataList, requestedEvent) {
        debugger;
        this.opportunityName == undefined;
        let fieldTextString = "";
        let summaryObjArray = [];
        let fieldsValidated = this.SummaryFieldValid();
        Object.keys(this.groupForm.controls).forEach((key) => {
            const abstractControl = this.groupForm.get(key);
            let summaryIndex = this.summarArray.findIndex(el => el.FieldDisplayName == key);
            let summary = this.summarArray[summaryIndex];
            if (key == "Solicitation Title") {
                this.opportunityName = abstractControl.value;
            }
            let summaryObj = { key: key, Value: abstractControl.value, DisplayOrder: summaryIndex + 1, FiledTypeId: summary.FiledTypeId }; //console.log(abstractControl.value);
            summaryObjArray.push(summaryObj);
            fieldTextString += abstractControl.value;
        });
        //if (fieldsValidated) {
        if (requestedEvent == 'save') {
            let result = this.validateChange.isEqualSummary(fieldTextString, this.summarArray);
            if (!result || (categoryDataList != undefined && categoryDataList != null && categoryDataList.length > 0)) {
                debugger;
                this.SaveChangedSummaryCategory(documentUpload, fieldTextString, summaryObjArray, categoryDataList, requestedEvent);
            }
            else {
                if (documentUpload.isLoadingSmall == true) {
                    documentUpload.isLoadingSmall = false;
                }
                if (this.progressSpinnerService.isLoading == true) {
                    this.progressSpinnerService.isLoading = false;
                }
            }
        }
        if (requestedEvent == 'parse') {
            documentUpload.parsing();
        }
        else if (requestedEvent == 'OpportunityLoading') {
            this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, documentUpload);
        }
        //}
        return [];
    }
    SaveChangedSummaryCategory(documentUpload, fieldTextString, summaryObjArray = [], categoryDataList, requestedEvent) {
        if (documentUpload.isLoadingSmall == false) {
            documentUpload.isLoadingSmall = true;
        }
        const formData = new FormData();
        if (summaryObjArray.length > 0) {
            formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
            formData.append('categoriesData', JSON.stringify(categoryDataList));
            formData.append('summary', JSON.stringify(summaryObjArray));
            formData.append('companyId', localStorage.getItem('compId'));
            formData.append('userId', localStorage.getItem('userid'));
        }
        this.documentUploadService.SaveChangedCategoriesAndSummaryData(formData).subscribe((response) => {
            if (response.status != "error") {
                documentUpload.ChangeOpportunityNameTransfer(this.opportunityName);
                this.validateChange.initDataSummary(this.summarArray, fieldTextString);
                this.documentUploadService.UpdateCategoryData(categoryDataList);
                if (requestedEvent == 'save') {
                    this.notification.success("Data has been successfully saved.");
                    this.progressSpinnerService.isLoading = false;
                }
                documentUpload.isLoadingSmall = false;
                if (requestedEvent == 'parse') {
                    documentUpload.parsing();
                }
                else if (requestedEvent == 'OpportunityLoading') {
                    this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, documentUpload);
                }
            }
            else {
                documentUpload.isLoadingSmall = false;
                this.progressSpinnerService.isLoading = false;
                this.notification.error(response.message);
            }
        }, (error) => {
            this.progressSpinnerService.isLoading = false;
            documentUpload.isLoadingSmall = false;
            this.notification.error(error);
        });
    }
};
DocumentSummaryComponent = __decorate([
    Component({
        selector: 'app-document-summary',
        templateUrl: './document-summary.component.html',
        styleUrls: ['./document-summary.component.css']
    })
], DocumentSummaryComponent);
export { DocumentSummaryComponent };
//# sourceMappingURL=document-summary.component.js.map