import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FileName } from '../Models/FileName';
import { RFPFile } from '../Models/RFPFile';
import { RFPOpportunity } from '../Models/RFPOpportunity';
import { SummaryField } from '../models/SummaryField';
import { CategoryData } from '../Models/CategoryData';
let DocumentUploadService = class DocumentUploadService {
    constructor(dialogService, rfpManipulationWebApiService, notification, sharepointService, progressSpinnerService) {
        this.dialogService = dialogService;
        this.rfpManipulationWebApiService = rfpManipulationWebApiService;
        this.notification = notification;
        this.sharepointService = sharepointService;
        this.progressSpinnerService = progressSpinnerService;
        //private _rfpFileList: RFPFile[] = [];
        this._filenameList = [];
        this._duplicateFileList = [];
        this._numberOfAttachedfile = 0;
        this._numberOfSavedfile = '';
        this._numberOfParssedfile = '';
        this._dropDownMessage = "Attach file";
        this._deleteButtonDisable = true;
        this._saveButtonDisable = true;
        this._saveAllButtonDisable = true;
        this._viewButtonDisable = true;
        this._parseButtonDisable = true;
        this._publishButtonDisable = true;
        this._RFPOpportunity = new RFPOpportunity();
        this.GetCategoryNameList();
    }
    get CategoryNameList() {
        return this._categoryNameList;
    }
    set CategoryNameList(value) {
        this._categoryNameList = value;
    }
    get RFPOpportunity() {
        return this._RFPOpportunity;
    }
    // public set RFPOpportunity(value: RFPOpportunity) {
    //   this._RFPOpportunity = value;
    // }
    get SavefileMessageColor() {
        return this._savefileMessageColor;
    }
    get SelectedFileName() {
        return this._selectedFileName;
    }
    set SelectedFileName(value) {
        this._selectedFileName = value;
    }
    get DeleteButtonDisable() {
        return this._deleteButtonDisable;
    }
    get SaveButtonDisable() {
        return this._saveButtonDisable;
    }
    // public set SaveButtonDisable(value: boolean) {
    //   this._saveButtonDisable = value;
    // }
    get SaveAllButtonDisable() {
        return this._saveAllButtonDisable;
    }
    get ViewButtonDisable() {
        return this._viewButtonDisable;
    }
    get ParseButtonDisable() {
        return this._parseButtonDisable;
    }
    get PublishButtonDisable() {
        return this._publishButtonDisable;
    }
    get duplicateFileList() {
        return this._duplicateFileList;
    }
    get NumberOfAttachedfile() {
        return this._numberOfAttachedfile;
    }
    get NumberOfSavedfile() {
        return this._numberOfSavedfile;
    }
    get NumberOfParssedfile() {
        return this._numberOfParssedfile;
    }
    get DropDownMessage() {
        return this._dropDownMessage;
    }
    GetFileNameList(fileName) {
        this._filenameList = [];
        if (fileName !== undefined) {
            let rfpFileIndex = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == fileName &&
                file.Saved === undefined);
            let rfpFile = this.RFPOpportunity.RfpFileList[rfpFileIndex];
            let filename = new FileName();
            filename.Name = rfpFile.OrignalFile.name;
            filename.Path = rfpFile.FilePathSharePoint;
            // let filename: FileName = new FileName(
            //   {
            //     Name: rfpFile.OrignalFile.name,
            //     Type: rfpFile.FileType,
            //     Path: rfpFile.FilePathSharePoint
            //   }
            // );
            this._filenameList.push(filename);
            return this._filenameList;
        }
        for (let index = 0; index < this.RFPOpportunity.RfpFileList.length; index++) {
            let rfpFile = this.RFPOpportunity.RfpFileList[index];
            if (rfpFile.SavedSharePoint === true && (rfpFile.Saved === undefined || rfpFile.Saved == null || rfpFile.Saved == false)) {
                let filename = new FileName();
                filename.Name = rfpFile.OrignalFile.name;
                filename.Path = rfpFile.FilePathSharePoint;
                //let filename: FileName = new FileName(
                //   {
                //     Name: rfpFile.OrignalFile.name,
                //     Path: rfpFile.FilePathSharePoint,
                //     Type: rfpFile.FileType
                //   }
                // );
                this._filenameList.push(filename);
            }
        }
        return this._filenameList;
    }
    ValidationFileName(event) {
        let validRfpFileList = [];
        let reg = /(.*?)\.(doc|docx|pdf)$/;
        for (let index = 0; index < event.target.files.length; index++) {
            let fileName = event.target.files[index].name;
            if (!fileName.match(reg)) {
                return "1";
            }
            else if (fileName.includes("&") || fileName.includes("#")) {
                return "2";
            }
        }
        return "0";
    }
    ValidationFileType(fileName) {
        let reg = /(.*?)\.(doc|docx|pdf)$/;
        if (!fileName.match(reg)) {
            return "1";
        }
        return "0";
    }
    ValidationCorruptFile() {
        let sharePointCorruptFileList = [];
        let rfpfile = this.RFPOpportunity.RfpFileList[0];
        for (let index = 0; index < this.RFPOpportunity.RfpFileList.length; index++) {
            let rfpfile = this.RFPOpportunity.RfpFileList[index];
            let orignalfile = rfpfile.OrignalFile;
            if (orignalfile.size == 0) {
                sharePointCorruptFileList.push(rfpfile);
            }
        }
        return sharePointCorruptFileList;
    }
    PopulateRfpFileCollection(event) {
        let firstFile = true;
        for (let index = 0; index < event.target.files.length; index++) {
            let currentAttachfileName = event.target.files[index].name;
            let DuplicateRFPFileIndex = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName === currentAttachfileName);
            if (DuplicateRFPFileIndex >= 0) {
                let duplicateFileName = new FileName();
                duplicateFileName.Name = currentAttachfileName;
                //let duplicateFileName: FileName = new FileName({ Name: currentAttachfileName, Type:  event.target.files[index].FileType});
                this._duplicateFileList.push(duplicateFileName);
            }
            else {
                let rfpFile = new RFPFile({
                    OrignalFile: event.target.files[index],
                    FileName: event.target.files[index].name,
                    FileNameColor: 'red'
                });
                if (firstFile == true) {
                    this._selectedFileName = rfpFile.FileName;
                    firstFile = false;
                }
                this.RFPOpportunity.AddRfpFile(rfpFile);
            }
        }
        //this.SetNumberOfFileSatusCount();
    }
    ClearDuplicateFileList() {
        this._duplicateFileList = [];
    }
    PopulateDocumentId(fileNameListReponse, opportunityName, opportunityId, summaryFieldList) {
        if (this.RFPOpportunity.OpportunityName === undefined) {
            this.RFPOpportunity.OpportunityName = opportunityName;
            this.RFPOpportunity.OpportunityId = opportunityId;
            this.RFPOpportunity.SummaryFieldList = summaryFieldList;
        }
        for (let index = 0; index < fileNameListReponse.length; index++) {
            let fileName = fileNameListReponse[index];
            let rfpFile = this.RFPOpportunity.RfpFileList.find(file => file.FileName == fileName.Name);
            if (rfpFile !== undefined) {
                rfpFile.fileRFPDbId = fileName.fileRFPDbId;
                rfpFile.FileNameColor = 'black';
                rfpFile.Saved = true;
                if (rfpFile.FileName == this._selectedFileName) {
                    if (fileName.HtmlFile !== undefined && fileName.HtmlFile !== null) {
                        rfpFile.HTMLFile = fileName.HtmlFile;
                        rfpFile.View = true;
                    }
                }
            }
        }
    }
    PopulateHtmlFile(viewDocumentRes) {
        let rfpFile = this.RFPOpportunity.RfpFileList.find(file => file.fileRFPDbId == viewDocumentRes.documentId);
        rfpFile.HTMLFile = viewDocumentRes.htmlFile;
        rfpFile.View = true;
    }
    SetNumberOfFileSatusCount() {
        this._numberOfAttachedfile = this.RFPOpportunity.RfpFileList.length;
        if (this._numberOfAttachedfile == 0) {
            this._numberOfSavedfile = "";
            this._numberOfParssedfile = "";
            this._numberOfSavedfile == "";
            this._numberOfParssedfile == "";
            return;
        }
        let numberOfUnsavedfile = this.RFPOpportunity.RfpFileList.filter(file => file.Saved === undefined).length;
        let numberOfSavedfile = this.RFPOpportunity.RfpFileList.filter(file => file.Saved === undefined).length;
        let numberOfParssedfile = this.RFPOpportunity.RfpFileList.filter(file => file.Parsed == true).length;
        if (numberOfUnsavedfile == 0) {
            if (this.RFPOpportunity.RfpFileList.length == 1) {
                this._numberOfSavedfile = "File is saved";
                this._savefileMessageColor = 'green';
            }
            else {
                this._numberOfSavedfile = "All files are saved";
                this._savefileMessageColor = 'green';
            }
        }
        else {
            this._savefileMessageColor = 'red';
            this._numberOfSavedfile = (numberOfUnsavedfile == 1) ? "1 unsave file" : numberOfUnsavedfile + " unsave files";
        }
        if (numberOfParssedfile == 0) {
            this._numberOfParssedfile = "0 parsed file";
        }
        else {
            this._numberOfParssedfile = (numberOfParssedfile == 1) ? "1 parsed file" : numberOfParssedfile + " parsed files";
        }
    }
    TogglingEnableDisableButton() {
        if (this.RFPOpportunity !== undefined && this.RFPOpportunity !== null &&
            this.RFPOpportunity.OpportunityId !== undefined && this.RFPOpportunity.OpportunityId !== null &&
            this.RFPOpportunity.OpportunityId != "0" && this.RFPOpportunity.OpportunityId != "") {
            this._saveButtonDisable = false;
            this._publishButtonDisable = false;
        }
        else {
            this._saveButtonDisable = true;
            this._publishButtonDisable = true;
        }
        if (this.RFPOpportunity.RfpFileList.length > 0) {
            // let unsavefileList = this.RFPOpportunity.RfpFileList.filter(file => file.Saved == undefined);
            // if (unsavefileList.length == 0) {
            //   this._saveAllButtonDisable = true;
            // } else {
            //   this._saveAllButtonDisable = false;
            // }
        }
        else {
            this._viewButtonDisable = true;
            this._parseButtonDisable = true;
            this._publishButtonDisable = true;
            this._parseButtonDisable = true;
        }
        if (this._selectedFileName === undefined || this._selectedFileName == '') {
            this._deleteButtonDisable = true;
            this._viewButtonDisable = true;
            this._parseButtonDisable = true;
        }
        else {
            this._deleteButtonDisable = false;
            let selectFileIndex = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == this._selectedFileName);
            let rfpfile = this.RFPOpportunity.RfpFileList[selectFileIndex];
            if (rfpfile === undefined) {
                this._deleteButtonDisable = true;
                this._viewButtonDisable = true;
                this._parseButtonDisable = true;
                this._publishButtonDisable = true;
                return;
            }
            if (rfpfile.View !== undefined && rfpfile.View === true) {
                this._viewButtonDisable = true;
            }
            else {
                this._viewButtonDisable = false;
            }
            if ((rfpfile.View === undefined || rfpfile.View == null || rfpfile.View == false)) {
                this._parseButtonDisable = true;
            }
            else if (rfpfile.View === true) {
                this._parseButtonDisable = false;
            }
            // if ((rfpfile.View === undefined || rfpfile.View == null || rfpfile.View == false) || (rfpfile.Parsed === true)) {
            //   this._parseButtonDisable = true;
            // }
            // else if ((rfpfile.View === true) && (rfpfile.Parsed === undefined || rfpfile.Parsed == null || rfpfile.Parsed == false)) {
            //   this._parseButtonDisable = false;
            // }
        }
    }
    SetDropDownMessage() {
        if (this.RFPOpportunity.RfpFileList.length === 0) {
            this._dropDownMessage = "Attach file";
        }
        else {
            this._dropDownMessage = "Select file";
        }
    }
    SetFileSavedStatusOnsharePoint(sharePointResponseList) {
        let sharePointUnsaveFileList = [];
        for (let index = 0; index < sharePointResponseList.length; index++) {
            const sharePointDocUploadResponse = sharePointResponseList[index];
            let fileIndex = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == sharePointDocUploadResponse.FileName);
            let rfpFile = this.RFPOpportunity.RfpFileList[fileIndex];
            if (sharePointDocUploadResponse.Status == true) {
                rfpFile.SavedSharePoint = true;
                rfpFile.FilePathSharePoint = sharePointDocUploadResponse.FilePath;
            }
            else {
                sharePointUnsaveFileList.push(rfpFile);
                this.RFPOpportunity.RfpFileList.splice(fileIndex, 1);
            }
        }
        return sharePointUnsaveFileList;
    }
    DeleteRfpFile(formData) {
        return this.rfpManipulationWebApiService.DeleteRfpFile(formData);
    }
    CreateEmptyOpportunity(formData) {
        return this.rfpManipulationWebApiService.CreateEmptyOpportunity(formData);
    }
    SaveFiles(formData) {
        return this.rfpManipulationWebApiService.SaveFiles(formData);
    }
    ViewDocument(formData) {
        return this.rfpManipulationWebApiService.ViewDocument(formData);
    }
    GetCategoryNameList() {
        return this.rfpManipulationWebApiService.GetCategoryNameList();
    }
    UploadFilesSharePoint(formData) {
        return this.sharepointService.UploadFilesSharePoint(formData);
    }
    SaveChangedCategoriesAndSummaryData(formData) {
        // let body = JSON.stringify(formData);
        return this.rfpManipulationWebApiService.SaveChangedCategoriesAndSummaryData(formData);
    }
    GetSavedEmptyOpportunity(opportunityId, documentUploadComponent) {
        if (this.progressSpinnerService.isLoading == false) {
            this.progressSpinnerService.isLoading = true;
        }
        this.rfpManipulationWebApiService.GetSavedEmptyOpportunity(opportunityId).subscribe(res => this.GetSavedEmptyOpportunityResponse(res, documentUploadComponent), err => documentUploadComponent.UploadError(err));
    }
    GetSavedEmptyOpportunityResponse(webResponse, documentUploadComponent) {
        if (webResponse.code == '1') {
            documentUploadComponent.CleanFormControls();
            this.PopulateRFPOpertunity(webResponse.response);
            this.TogglingEnableDisableButton();
            this.SetNumberOfFileSatusCount();
            documentUploadComponent.GetSaveEmptyOpportunity(this._RFPOpportunity);
            this.progressSpinnerService.isLoading = false;
        }
        else if (webResponse.code == "2") {
            this.progressSpinnerService.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
        }
        else {
            if (webResponse.code !== undefined) {
                this.progressSpinnerService.isLoading = false;
                this.notification.error("'Something bad happened. Please try again later.'");
            }
        }
    }
    PopulateRFPOpertunity(savedEmptyOpportunityResponse) {
        let rfpOpportunity = new RFPOpportunity();
        rfpOpportunity.OpportunityId = savedEmptyOpportunityResponse.OpportunityId.toString();
        rfpOpportunity.OpportunityName = savedEmptyOpportunityResponse.OpportunityName;
        for (let index = 0; index < savedEmptyOpportunityResponse.RfpDocumentViewModel.length; index++) {
            const RfpDocument = savedEmptyOpportunityResponse.RfpDocumentViewModel[index];
            let rfpfile = new RFPFile({
                OpportunityName: RfpDocument.OpportunityName,
                FileName: RfpDocument.FileName,
                FileNameColor: RfpDocument.FileNameColor,
                fileRFPDbId: RfpDocument.fileRFPDbId,
                HTMLFile: RfpDocument.HTMLFile,
                SavedSharePoint: RfpDocument.SavedSharePoint,
                FilePathSharePoint: RfpDocument.FilePathSharePoint,
                Saved: RfpDocument.Saved,
                View: RfpDocument.View,
                Parsed: RfpDocument.Parsed,
            });
            rfpOpportunity.AddRfpFile(rfpfile);
        }
        let summaryFieldList = new Array();
        for (let index = 0; index < savedEmptyOpportunityResponse.RfpSummaryViewModel.length; index++) {
            const summary = savedEmptyOpportunityResponse.RfpSummaryViewModel[index];
            let summaryField = new SummaryField(summary.FieldDisplayName, summary.ControlType, summary.FieldText, summary.DisplayOrder, summary.FiledTypeId);
            summaryFieldList.push(summaryField);
        }
        let categoryDataList = new Array();
        for (let index = 0; index < savedEmptyOpportunityResponse.RfpCategoryDataViewModel.length; index++) {
            const rfpCategoryData = savedEmptyOpportunityResponse.RfpCategoryDataViewModel[index];
            let categoryData = new CategoryData;
            categoryData.CategoryId = rfpCategoryData.CategoryId;
            categoryData.Name = rfpCategoryData.Name;
            categoryData.CategoryData = rfpCategoryData.CategoryData;
            categoryDataList.push(categoryData);
        }
        this._RFPOpportunity = rfpOpportunity;
        this._RFPOpportunity.CatetoryDataList = categoryDataList;
        this._RFPOpportunity.AddSummaryFieldList(summaryFieldList);
        this.SelectedFileName = this.RFPOpportunity.RfpFileList[0].FileName;
    }
    CleanFormControlVariables() {
        this._numberOfAttachedfile = 0;
        this._RFPOpportunity = new RFPOpportunity();
        this._selectedFileName = undefined;
        this._numberOfSavedfile = '';
        this._numberOfParssedfile = '';
    }
    UpdateCategoryData(categoryDataList) {
        let categoryDataArray;
        for (let index = 0; index < categoryDataList.length; index++) {
            let catIndex = this._RFPOpportunity.CatetoryDataList.findIndex(cat => cat.CategoryId == categoryDataList[index].CategoryId);
            if (categoryDataList[index].CategoryData.includes("drop text here")) {
                categoryDataList[index].CategoryData.trim();
                this._RFPOpportunity.CatetoryDataList.splice(catIndex, 1);
            }
            else {
                if (catIndex != -1) {
                    // check if id exists in data array list
                    categoryDataArray = this._RFPOpportunity.CatetoryDataList[catIndex];
                    categoryDataArray.CategoryData = categoryDataList[index].CategoryData; // update category data 
                }
                else {
                    this._RFPOpportunity.CatetoryDataList.push(categoryDataList[index]);
                }
            }
        }
    }
};
DocumentUploadService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DocumentUploadService);
export { DocumentUploadService };
//# sourceMappingURL=document-upload.service.js.map