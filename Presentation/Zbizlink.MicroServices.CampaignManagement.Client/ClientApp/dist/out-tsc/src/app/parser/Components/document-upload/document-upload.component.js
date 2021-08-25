import { __awaiter, __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
//import { OpportunityNameResponse } from 'src/app/Shared/models/OpportunityNameResponse';
//import { DialogService } from 'src/app/shared/services/dialog.service';
import { ConfirmationMessageComponent } from '../Dialogs/confirmation-message/confirmation-message.component';
import { OpportunityNameComponent } from '../Dialogs/opportunity-name/opportunity-name.component';
import { FileListMessageComponent } from '../Dialogs/file-list-message/file-list-message.component';
import { DocumentListComponent } from '../Dialogs/document-list/document-list.component';
import { DocumentUploadOptionComponent } from '../Dialogs/document-upload-option/document-upload-option.component';
import { HttpParams } from '@angular/common/http';
import { CategoryData } from '../../Models/CategoryData';
import { SendEmailComponent } from '../Dialogs/send-email/send-email.component';
let DocumentUploadComponent = class DocumentUploadComponent {
    constructor(router, route, notification, validateChange, dialogService, documentUploadService, rfpManipulationWebApiService, sharepointService, progressSpinnerService) {
        this.router = router;
        this.route = route;
        this.notification = notification;
        this.validateChange = validateChange;
        this.dialogService = dialogService;
        this.documentUploadService = documentUploadService;
        this.rfpManipulationWebApiService = rfpManipulationWebApiService;
        this.sharepointService = sharepointService;
        this.progressSpinnerService = progressSpinnerService;
        this.showRFPDocument = new EventEmitter();
        this.OrignalHtmlDocument = new EventEmitter();
        this.PopulateCategoryNameList = new EventEmitter();
        this.opportunityDataOnCreationTransfer = new EventEmitter();
        this.opportunityDataTransfer = new EventEmitter();
        this.parsingDataTransfer = new EventEmitter();
        this.CleanDocumentParserFormControls = new EventEmitter();
        this.DeleteFileDataTransfer = new EventEmitter();
        this.SaveCategorySummaryData = new EventEmitter();
        this.DeleteCategoryData = new EventEmitter();
        this.MoveWholeDocument = new EventEmitter();
        this.ChangeOpportunityName = new EventEmitter();
        this.receivedRFPDocumentName = new EventEmitter();
        this.SelectedFile = new EventEmitter();
        // @Output()
        // popUpOpportunityName: EventEmitter<OpportunityNameResponse> = new EventEmitter<OpportunityNameResponse>();
        this.ClearOpportunityForm = new EventEmitter();
        this.isLoadingSmall = false;
        this.userSelectedFileList = [];
        this.RfpDataArray = [];
        this.responseSave = false;
        this.isPublish = false;
        this.ONE_DANK_REGEX = /^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d$|^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ]([1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ][ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$/;
        this.fileUpload = { status: '', category: [], document: '', filePath: '', summary: '', documentId: '', documentName: '', CategoryData: '', message: '' };
    }
    ngOnInit() {
        this.GetCategoryNameListFromDB(undefined);
        // this.formGroupCB = new FormGroup({
        //   private:new FormControl()
        // });
        this.isBtnPubDisabled = true;
        this.private = "1";
    }
    getRouteParam() {
        this.route.queryParamMap.subscribe(params => {
            this.categoryName = params.get('category');
        });
    }
    onAttachedFile(event) {
        this.progressSpinnerService.isLoading = true;
        if (event.target.files.length > 0) {
            this.event = event;
            if (this.documentUploadService.CategoryNameList === undefined) {
                this.GetCategoryNameListFromDB("onAttachedFile");
            }
            else {
                this.AttachedFile();
            }
        }
        else {
            this.progressSpinnerService.isLoading = false;
            event.target.value = null;
        }
    }
    AttachedFile() {
        this.uploadError = "";
        let validationCode = this.documentUploadService.ValidationFileName(this.event);
        // if (validationCode == "1") {
        //   this.uploadError = 'Invalid type of file. Only [PDF] or [MS Word] file can be attached.';
        //   this.notification.warning(this.uploadError);
        //   this.progressSpinnerService.isLoading = false;
        //   this.event.target.value = null
        //   return true;
        // } else 
        if (validationCode == "2") {
            this.uploadError = 'Invalid Name of file. must not contain special character, (& , #).';
            this.notification.warning(this.uploadError);
            this.progressSpinnerService.isLoading = false;
            this.event.target.value = null;
            return true;
        }
        this.documentUploadService.PopulateRfpFileCollection(this.event);
        this.documentUploadService.SetDropDownMessage();
        if (this.documentUploadService.duplicateFileList.length > 0) {
            this.uploadError = 'Same name file cannot be reattached.';
            this.notification.warning(this.uploadError);
            this.documentUploadService.ClearDuplicateFileList();
            this.progressSpinnerService.isLoading = false;
        }
        this.documentUploadService.TogglingEnableDisableButton();
        this.documentUploadService.SetNumberOfFileSatusCount();
        if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined &&
            this.documentUploadService.RFPOpportunity.OpportunityId != null &&
            this.documentUploadService.RFPOpportunity.OpportunityId != '') {
            this.UploadFilesSharePoint(undefined);
        }
        else {
            this.progressSpinnerService.isLoading = false;
        }
        this.event.target.value = null;
    }
    onSelectionChangeFileDropDown(value) {
        this.documentUploadService.SelectedFileName = value;
        this.documentUploadService.TogglingEnableDisableButton();
        //this.SelectedFile.emit(value);
        let fileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == value);
        if (fileIndex >= 0) {
            let rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[fileIndex];
            this.showRFPDocument.emit();
        }
    }
    UploadError(parm) {
        this.uploadError = parm;
        this.progressSpinnerService.isLoading = false;
        this.notification.error(this.uploadError);
    }
    doPublish(isOpportunity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.responseSave === false) {
                yield this.Save(isOpportunity);
            }
            else {
                this.isPublish = true;
            }
            console.log("----" + this.responseSave + "---");
        });
    }
    Save(isOpportunity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined ||
                this.documentUploadService.RFPOpportunity.OpportunityId == null) {
                return;
            }
            console.log("Save");
            console.log('>>>>>>>>>>>> clicked <<<<<<<<<<<<' + isOpportunity);
            this.responseSave = true;
            if (isOpportunity === false) {
                let createOpporturnity = false;
                let categoryId = this.GetCategoridIdFromQueryparameter();
                //let documentId = localStorage.getItem('documentId');
                if (categoryId &&
                    this.documentUploadService.RFPOpportunity.OpportunityId != null &&
                    this.documentUploadService.RFPOpportunity.OpportunityId !== undefined &&
                    categoryId != 'summary') {
                    let categoryData = this.CategoryDataConvertArrayIntoString();
                    if (!this.validateChange.isEqual(categoryData)) {
                        createOpporturnity = false;
                        this.isLoadingSmall = true;
                        yield this.SaveCategory(categoryData, categoryId, isOpportunity);
                    }
                }
                else if (this.summary.SummaryFieldValid() && (categoryId == 'summary' || categoryId == null)) {
                    yield this.summary.onSubmit(this, isOpportunity, categoryId);
                }
            }
            else if (isOpportunity === true) {
                let SummaryFieldValidationResult = this.SummaryFieldValidation();
                if (SummaryFieldValidationResult && isOpportunity === true) {
                    this.isBtnPubDisabled = true;
                    this.progressSpinnerService.isLoading = true;
                    let createOpporturnity = false;
                    if (isOpportunity == true) {
                        createOpporturnity = true;
                    }
                    let categoryId = this.GetCategoridIdFromQueryparameter();
                    let documentId = localStorage.getItem('documentId');
                    if (categoryId && this.documentUploadService.RFPOpportunity.OpportunityId != null &&
                        this.documentUploadService.RFPOpportunity.OpportunityId !== undefined && categoryId != 'summary') {
                        let categoryData = this.CategoryDataConvertArrayIntoString();
                        if (!this.validateChange.isEqual(categoryData)) {
                            createOpporturnity = false;
                            this.isLoadingSmall = true;
                            yield this.SaveCategory(categoryData, categoryId, isOpportunity);
                        }
                        if (isOpportunity == true && createOpporturnity == true) {
                            this.publish();
                        }
                    }
                    else if (categoryId == 'summary' || categoryId == null) {
                        this.summary.onSubmit(this, isOpportunity, categoryId);
                    }
                }
                else if (!SummaryFieldValidationResult && isOpportunity === true) {
                    //console.log('navigate it now');
                    const queryParams = { 'category': 'summary' };
                    this.router.navigate(['/'], { queryParams });
                    this.progressSpinnerService.isLoading = false;
                    this.responseSave = false;
                    return;
                }
            }
            if (this.isPublish === true) {
                this.isPublish = false;
                yield this.Save(true);
                console.log("published");
            }
            this.responseSave = false;
        });
    }
    openDialog() {
        debugger;
        let data = {
            headerFlag: true,
            publish: false
        };
        const dialogRef = this.dialogService.openDialog({
            width: '50%',
            data: data,
            dailogComponent: SendEmailComponent,
        });
    }
    onOpportunityListShow() {
        localStorage.setItem('pendinglist', 'clicked');
        let data = {
            headerFlag: true,
            publish: false
        };
        const dialogRef = this.dialogService.openDialog({
            width: '70%',
            data: data,
            dailogComponent: DocumentListComponent,
        });
        dialogRef.afterClosed().subscribe(data => {
            this.documentUploadService.opportunityIdForLoadingOpportunity = undefined;
            if (data !== undefined) {
                this.progressSpinnerService.isLoading = true;
                //this.getSavedDocInfo(null, null, data);
                //this.CleanFormControls();
                //this.showRFPDocument.emit(undefined);
                this.documentUploadService.opportunityIdForLoadingOpportunity = data;
                if (this.documentUploadService.CategoryNameList === undefined) {
                    this.GetCategoryNameListFromDB("GetSavedEmptyOpportunity");
                }
                else {
                    if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined ||
                        this.documentUploadService.RFPOpportunity.OpportunityId == null ||
                        this.documentUploadService.RFPOpportunity.OpportunityId == '') {
                        this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, this);
                    }
                    else {
                        this.SaveCategorySummaryData.emit("OpportunityLoading");
                        //this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, this);
                    }
                }
            }
        });
    }
    //this method is called from documentuploadservice
    //do not call in this component.
    GetSaveEmptyOpportunity(rfpOpportunity) {
        this.opportunityDataTransfer.emit(rfpOpportunity);
    }
    getOpportunity() {
        this.rfpManipulationWebApiService.getOpportunity().subscribe((response) => {
            transfertoZbizlinkData(response);
        }, (error) => {
            console.log(error);
            this.notification.error(error);
        });
    }
    publish() {
        let OpportunityId = this.documentUploadService.RFPOpportunity.OpportunityId;
        //*************Loader********
        //this.isLoading = true;
        //**************************
        this.isBtnPubDisabled = true;
        let compId = localStorage.getItem('compId');
        let userid = localStorage.getItem('userid');
        let clientID = localStorage.getItem('clientID');
        let SegmentId = localStorage.getItem('companySegmentID');
        console.log('>>>>>>>>>>>>>>>>> publish segmentID = ' + SegmentId + " <<<<<<<<<<<<<<<<<<<<<");
        this.rfpManipulationWebApiService.publish(OpportunityId, userid, compId, clientID, SegmentId).subscribe((response) => {
            if (response !== undefined) {
                this.publishResponse(response);
            }
        }, (error) => {
            this.progressSpinnerService.isLoading = false;
            this.isBtnPubDisabled = false;
            this.documentPublished = false;
            this.notification.error(error);
        });
    }
    publishResponse(webResponse) {
        try {
            if (webResponse.code == "1") {
                this.notification.success("Oppertunity publlished succefully ");
                this.progressSpinnerService.isLoading = false;
                this.documentPublished = true;
                transfertoZbizlinkData(webResponse);
            }
            else if (webResponse.code == "2") {
                this.notification.success("Oppertunity creation process fail");
                this.progressSpinnerService.isLoading = false;
                this.isBtnPubDisabled = false;
                this.documentPublished = false;
            }
        }
        catch (err) {
            this.progressSpinnerService.isLoading = false;
            this.isBtnPubDisabled = false;
            this.documentPublished = false;
            console.log(err);
        }
    }
    SaveCategory(CategoryData, categoryId, isOpportunity) {
        return __awaiter(this, void 0, void 0, function* () {
            let compId = localStorage.getItem('compId');
            let userid = localStorage.getItem('userid');
            const formData = new FormData();
            formData.append('userId', userid);
            formData.append('companyId', compId);
            formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
            formData.append('categoryId', categoryId);
            formData.append('categoryData', CategoryData);
            formData.append('summary', null);
            this.rfpManipulationWebApiService.save(formData).subscribe((response) => {
                this.SaveCategoryResponse(response, CategoryData, categoryId, isOpportunity);
                // if (response.status != "error") {
                //   //formData.append('categoryData', CategoryData);
                //   this.updateOpportunityCategoryList(categoryId, CategoryData);
                //   this.isLoadingSmall = false;
                //   this.notification.success("Your data has been successfully saved.");
                //   if (isOpportunity == true) {
                //     this.publish()
                //   }
                // }
                // else {
                //   this.isLoadingSmall = false;
                //   this.notification.error(response.message);
                // }
            }, (error) => {
                this.isLoadingSmall = false;
                this.notification.error(error);
            });
        });
    }
    SaveCategoryResponse(webResponse, CategoryData, categoryId, isOpportunity) {
        if (webResponse.code == "1") {
            //formData.append('categoryData', CategoryData);
            this.updateOpportunityCategoryList(categoryId, CategoryData);
            this.isLoadingSmall = false;
            this.notification.success("Your data has been successfully saved.");
            if (isOpportunity == true) {
                this.publish();
            }
        }
        else {
            this.isLoadingSmall = false;
            this.notification.error("'Something bad happened. Please try again later.'");
        }
    }
    CategoryDataConvertArrayIntoString() {
        let rfpDoc = "";
        for (let index = 0; index < this.opportunityData.length; index++) {
            const element = this.opportunityData[index];
            if (element.getAttribute("data-lastrow") == null || element.getAttribute("data-lastrow").valueOf().trim() != ".") {
                rfpDoc += element.outerHTML;
            }
        }
        return rfpDoc;
    }
    GetCategoridIdFromQueryparameter() {
        let categoryId;
        this.route.queryParamMap.subscribe(params => {
            if (params.has('category')) {
                categoryId = params.get('category');
            }
        });
        return categoryId;
    }
    SummaryFieldValidation() {
        let result = this.summary.SummaryFieldValid();
        if (!result) {
            this.notification.error("One or more fields are required");
            return false;
        }
        return true;
    }
    onParse() {
        this.parsingDialogOutput = undefined;
        let data = { CategoryNameList: this.documentUploadService.CategoryNameList };
        const matDialogRef = this.dialogService.openDialog({
            data: data,
            width: '350px',
            dailogComponent: DocumentUploadOptionComponent
        });
        matDialogRef.afterClosed().subscribe(res => {
            if (res !== undefined) {
                let parsingDialogOutput = res;
                if (parsingDialogOutput.Ok = true) {
                }
                this.GetParsingData(res);
            }
        });
    }
    GetParsingData(parseDialogOutput) {
        this.parsingDialogOutput = parseDialogOutput;
        this.SaveCategorySummaryData.emit("parse");
    }
    parsing() {
        if (this.progressSpinnerService.isLoading == false) {
            this.progressSpinnerService.isLoading = true;
        }
        if (this.parsingDialogOutput.ParsingAuto == true) {
            this.AutoParsing("0");
        }
        else if (this.parsingDialogOutput.wholeDocumentYes == true) {
            this.wholeDocumentMove(parseInt(this.parsingDialogOutput.SelectedCategory));
        }
        else if (this.parsingDialogOutput.wholeDocumentNo == true) {
            this.AutoParsing(this.parsingDialogOutput.SelectedCategory);
        }
    }
    wholeDocumentMove(categoryId) {
        this.MoveWholeDocument.emit(categoryId);
        // let selectedFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(f => f.FileName = this.documentUploadService.SelectedFileName);
        // let selectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];
        // selectedRfpFile.Parsed = true;
    }
    AutoParsing(categoriesId) {
        let fromData = new FormData();
        let userSelectedFileName = this.documentUploadService.SelectedFileName;
        let userSelectedRFPFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == userSelectedFileName);
        let userSelectedRFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[userSelectedRFPFileIndex];
        fromData.append("opportunityId", this.documentUploadService.RFPOpportunity.OpportunityId);
        fromData.append("documentId", userSelectedRFPFile.fileRFPDbId.toString());
        fromData.append("categoriesId", categoriesId);
        this.rfpManipulationWebApiService.AutoParsing(fromData).subscribe(res => this.AutoParsingResponse(res, userSelectedRFPFile), err => this.UploadError(err));
    }
    AutoParsingResponse(webResponse, userSelectedRFPFile) {
        if (webResponse.code == "1") {
            userSelectedRFPFile.Parsed = true;
            this.documentUploadService.RFPOpportunity.SummaryFieldList = webResponse.response.summary;
            this.documentUploadService.RFPOpportunity.CatetoryDataList = webResponse.response.CategoryData;
            this.documentUploadService.TogglingEnableDisableButton();
            this.parsingDataTransfer.emit(webResponse.response);
            this.progressSpinnerService.isLoading = false;
        }
        else if (webResponse.code == "0") {
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
    onDeleteFile() {
        debugger;
        if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined &&
            this.documentUploadService.RFPOpportunity.OpportunityId !== null &&
            this.documentUploadService.RFPOpportunity.OpportunityId != "" &&
            this.documentUploadService.RFPOpportunity.RfpFileList.length == 1) {
            this.progressSpinnerService.isLoading = false;
            this.notification.error("'Last file in an opportunity can not be deleted'");
            return;
        }
        let data = { message: "Are you sure to delete this file ?" };
        let matDialogRef = this.dialogService.openDialog({
            width: '395px',
            data: data,
            dailogComponent: ConfirmationMessageComponent
        });
        matDialogRef.afterClosed().subscribe(res => {
            if (res === true) {
                this.DeleteFile();
            }
        });
    }
    DeleteFile() {
        this.progressSpinnerService.isLoading = true;
        let selectedFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName === this.documentUploadService.SelectedFileName);
        let rfpFile;
        if (selectedFileIndex == -1) {
            this.progressSpinnerService.isLoading = false;
            return;
        }
        rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];
        if (rfpFile.SavedSharePoint == true) {
            this.DeleteFormSharePoint(rfpFile);
        }
        else {
            this.documentUploadService.RFPOpportunity.RfpFileList.splice(selectedFileIndex, 1);
            this.documentUploadService.SelectedFileName = '';
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.documentUploadService.SetDropDownMessage();
            this.progressSpinnerService.isLoading = false;
            return;
        }
        // this.documentUploadService.RFPOpportunity.RfpFileList.splice(selectedFileIndex, 1);
        // this.documentUploadService.SelectedFileName = '';
        // this.documentUploadService.TogglingEnableDisableButton();
        // this.documentUploadService.SetNumberOfFileSatusCount();
        // this.documentUploadService.SetDropDownMessage();
    }
    DeleteFormSharePoint(rfpFile) {
        let compId = localStorage.getItem('compId');
        let userid = localStorage.getItem('userid');
        let clientID = localStorage.getItem('clientID');
        let params = new HttpParams();
        params = params.append('CompanyId', compId);
        params = params.append('UserId', userid);
        params = params.append('ClientId', clientID);
        params = params.append('filePath', rfpFile.FilePathSharePoint);
        this.sharepointService.DeleteFilesSharePoint(params).subscribe(res => this.DeleteFilesSharePointResponse(res, rfpFile), err => this.UploadError(err));
    }
    DeleteFilesSharePointResponse(sharePointResponse, rfpFile) {
        if (sharePointResponse.Status == true) {
            console.log(">>>>>>>>>>> Delete file from sharepoint success <<<<<<<<<<<<<<<");
            console.log(sharePointResponse);
            if (rfpFile.fileRFPDbId !== undefined || rfpFile.fileRFPDbId !== null) {
                this.DeleteFormRFPDatabase(rfpFile.fileRFPDbId);
            }
            else {
                this.progressSpinnerService.isLoading = false;
                this.notification.success("'File has been deleted Successfully'");
            }
        }
        else {
            console.log(">>>>>>>>>>> Delete file from sharepoint fail <<<<<<<<<<<<<<<<<<<");
            console.log(sharePointResponse);
            this.notification.error("'Something bad happened. Please try again later.'");
            this.progressSpinnerService.isLoading = false;
        }
    }
    DeleteFormRFPDatabase(documentId) {
        const formData = new FormData();
        formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
        formData.append('documentId', documentId.toString());
        formData.append('deleteOnlyFile', 'true');
        this.documentUploadService.DeleteRfpFile(formData).subscribe(res => this.DeleteFileResponse(res, documentId), err => this.UploadError(err));
    }
    DeleteFileResponse(webResponse, documentId) {
        if (webResponse.code == '1') {
            let rfpFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.fileRFPDbId == documentId);
            if (rfpFileIndex >= 0) {
                this.documentUploadService.RFPOpportunity.RfpFileList.splice(rfpFileIndex, 1);
                this.documentUploadService.SelectedFileName = '';
                this.documentUploadService.TogglingEnableDisableButton();
                this.documentUploadService.SetNumberOfFileSatusCount();
                this.documentUploadService.SetDropDownMessage();
                //this.DeleteFileDataTransfer.emit(deleteFileRes);
                //this.showRFPDocument.emit();
                this.progressSpinnerService.isLoading = false;
                this.notification.success("'File has been deleted Successfully'");
            }
        }
        else if (webResponse.code === "0") {
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
    onPreviewDocument() {
        this.progressSpinnerService.isLoading = true;
        let UserSelectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(file => file.FileName === this.documentUploadService.SelectedFileName);
        if (UserSelectedRfpFile === null || UserSelectedRfpFile === undefined) {
            this.progressSpinnerService.isLoading = false;
            return;
        }
        let validationCode = this.documentUploadService.ValidationFileType(UserSelectedRfpFile.FileName);
        if (validationCode == "1") {
            this.notification.warning('Only [PDF] or [MS Word] file is valid for preview.');
            this.progressSpinnerService.isLoading = false;
            return true;
        }
        // let rfpFile : RFPFile[] = this.documentUploadService.ValidationCorruptFile();
        // if(rfpFile.length > 0){ 
        //   let message: string;
        //   if(rfpFile.length > 1){
        //     message = "Following files are corrupted or deleted, remove from attachment then click on preview button"
        //   }else{
        //     message = "Following file is corrupted or deleted, remove from attachment then click on preview button"
        //   }
        //   this.FileListMessageBox(rfpFile, message)
        //   this.progressSpinnerService.isLoading = false;
        //   return;
        // }
        //   if (UserSelectedRfpFile.FileType != "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        //   UserSelectedRfpFile.FileType != "application/pdf") {
        //   this.notification.error("'Selected file must be PDF or MS Word Document'");
        //   this.progressSpinnerService.isLoading = false;
        //   return;
        // }
        if (UserSelectedRfpFile.HTMLFile === null &&
            UserSelectedRfpFile.SavedSharePoint != null &&
            UserSelectedRfpFile.SavedSharePoint == true) {
            //strart only for Testing [skip share point process]
            this.GetFileSharePoint(UserSelectedRfpFile.FilePathSharePoint, UserSelectedRfpFile);
            //end only for Testing [skip share point process]
            return;
        }
        if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined &&
            this.documentUploadService.RFPOpportunity.OpportunityId != null &&
            this.documentUploadService.RFPOpportunity.OpportunityId != '') {
            this.PreviewDocument(UserSelectedRfpFile);
            return;
        }
        if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined
            || this.documentUploadService.RFPOpportunity.OpportunityId == '') {
            const dialogRef = this.dialogService.openDialog({
                width: '350px',
                dailogComponent: OpportunityNameComponent
            });
            dialogRef.afterClosed().subscribe(data => {
                if (data !== undefined && data !== '') {
                    this.UploadFilesSharePoint(data);
                    //strart only for Testing [skip share point process]
                    //this.CreateEmptyOpportunity(data);
                    //end only for Testing [skip share point process]
                }
                else {
                    this.progressSpinnerService.isLoading = false;
                }
            });
        }
    }
    GetFileSharePoint(filepath, UserSelectedRfpFile) {
        const formDataSharePoint = new FormData();
        let compId = localStorage.getItem('compId');
        let userid = localStorage.getItem('userid');
        let clientID = localStorage.getItem('clientID');
        let params = new HttpParams();
        params = params.append('CompanyId', compId);
        params = params.append('UserId', userid);
        params = params.append('ClientId', clientID);
        params = params.append('filePath', filepath);
        console.log('>>>>> GetFileSharePoint() <<<<<');
        console.log(filepath);
        this.sharepointService.GetFileSharePoint(params).subscribe(res => this.GetFileSharePointResponse(res, UserSelectedRfpFile), err => this.UploadError(err));
    }
    GetFileSharePointResponse(res, UserSelectedRfpFile) {
        if (res == null) {
            console.log(">>>>> GetFileSharePointResponse() response is null<<<<<");
            if (this.progressSpinnerService.isLoading == true) {
                this.notification.error("'Something bad happened. Please try again later.'");
                this.progressSpinnerService.isLoading = false;
            }
            return;
        }
        console.log(">>>>> GetFileSharePointResponse()   success <<<<<");
        console.log(res);
        let file = res._buffer;
        let formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', UserSelectedRfpFile.FileName);
        formData.append('documentId', UserSelectedRfpFile.fileRFPDbId.toString());
        this.rfpManipulationWebApiService.ViewSharePointDocument(formData).subscribe(res => this.ViewSharePointDocumentReponse(res, UserSelectedRfpFile), err => this.UploadError(err));
    }
    ViewSharePointDocumentReponse(webResponse, UserSelectedRfpFile) {
        if (webResponse.code == '1') {
            UserSelectedRfpFile.HTMLFile = webResponse.response;
            UserSelectedRfpFile.View = true;
            this.documentUploadService.TogglingEnableDisableButton();
            this.showRFPDocument.emit();
            this.progressSpinnerService.isLoading = false;
        }
    }
    UploadFilesSharePoint(opportunityName) {
        const formDataSharePoint = new FormData();
        console.log(">>>>>>companyId = " + localStorage.getItem('compId') + "<<<<<<<<<");
        formDataSharePoint.append('CompanyId', localStorage.getItem('compId'));
        console.log(">>>>>>userid = " + localStorage.getItem('userid') + "<<<<<<<<<");
        formDataSharePoint.append('UserId', localStorage.getItem('userid'));
        console.log(">>>>>>clientID = " + localStorage.getItem('clientID') + "<<<<<<<<<");
        formDataSharePoint.append('ClientId', localStorage.getItem('clientID'));
        let rfpFileList;
        if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined) {
            rfpFileList = this.documentUploadService.RFPOpportunity.RfpFileList;
        }
        else {
            rfpFileList = this.documentUploadService.RFPOpportunity.RfpFileList.filter(file => file.SavedSharePoint === undefined ||
                file.SavedSharePoint == null ||
                file.SavedSharePoint == false);
        }
        if (rfpFileList.length == 0) {
            this.progressSpinnerService.isLoading = false;
            return;
        }
        let fileName = "";
        for (let index = 0; index < rfpFileList.length; index++) {
            const rfpFile = rfpFileList[index];
            formDataSharePoint.append('File', rfpFile.OrignalFile);
            fileName += rfpFile.OrignalFile.name + "  ";
        }
        console.log(">>>>>>>>>>>>>>>>Upload to SharePoint, FileName: " + fileName + "<<<<<<<<<<<<<<<<<<<<");
        console.log(rfpFileList);
        this.documentUploadService.UploadFilesSharePoint(formDataSharePoint).subscribe(res => this.UploadFilesSharePointResponse(res, rfpFileList.length, opportunityName), err => this.UploadError(err));
    }
    UploadFilesSharePointResponse(sharePointDocUploadResponseList, totalFile, opportunityName) {
        console.log(">>>>>start save from share point no response<<<<<");
        console.log(sharePointDocUploadResponseList);
        if (sharePointDocUploadResponseList === undefined || sharePointDocUploadResponseList.length == 0) {
            console.log(">>>>>Fail from share point no response<<<<<");
            console.log(sharePointDocUploadResponseList);
            this.notification.error("'Something bad happened. Please try again later.'");
            this.progressSpinnerService.isLoading = false;
            return;
        }
        else {
            const sharePointDocUploadResponse = sharePointDocUploadResponseList[0];
            if (sharePointDocUploadResponse.Status == false) {
                console.log(">>>>>Share point returned status false<<<<<");
                console.log(sharePointDocUploadResponseList);
                this.notification.error("'Something bad happened. Please try again later.'");
                this.documentUploadService.TogglingEnableDisableButton();
                this.documentUploadService.SetNumberOfFileSatusCount();
                this.progressSpinnerService.isLoading = false;
                return;
            }
        }
        let sharePointUnsaveFileList = this.documentUploadService.SetFileSavedStatusOnsharePoint(sharePointDocUploadResponseList);
        if (totalFile == sharePointUnsaveFileList.length) {
            console.log(">>>>>Fail from share point no save<<<<<");
            console.log(sharePointDocUploadResponseList);
            this.notification.error("'Something bad happened. Please try again later.'");
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.progressSpinnerService.isLoading = false;
            return;
        }
        console.log(">>>>> Success from share point<<<<<");
        console.log(sharePointDocUploadResponseList);
        if (sharePointUnsaveFileList.length > 0) {
            let message;
            if (sharePointUnsaveFileList.length == 1) {
                message = "Following file was not processed. Trying again, in case of failure contact to administrator";
            }
            else {
                message = "Following files were not processed. Trying again, in case of failure contact to administrator";
            }
            let data = {
                rfpFileList: sharePointUnsaveFileList,
                message: message
            };
            let sharePointUnsaveFileListDialog = this.dialogService.openDialog({
                width: '595px',
                data: data,
                dailogComponent: FileListMessageComponent
            });
        }
        if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined ||
            this.documentUploadService.RFPOpportunity.OpportunityId == null ||
            this.documentUploadService.RFPOpportunity.OpportunityId == '') {
            this.CreateEmptyOpportunity(opportunityName);
        }
        else {
            this.SaveFileInRfpDB();
        }
    }
    PreviewDocument(rfpFile) {
        const formData = new FormData();
        formData.append('file', rfpFile.OrignalFile);
        formData.append('documentId', rfpFile.fileRFPDbId.toString());
        this.documentUploadService.ViewDocument(formData).subscribe(res => this.ViewDocumentResponse(res, rfpFile), err => this.UploadError(err));
    }
    ViewDocumentResponse(webResponse, rfpFile) {
        if (webResponse.code == "1") {
            this.documentUploadService.PopulateHtmlFile(webResponse.response);
            this.documentUploadService.TogglingEnableDisableButton();
            this.showRFPDocument.emit();
            this.progressSpinnerService.isLoading = false;
            //this.isBtnPubDisabled = false;
            //const queryParams = { 'category': 'summary' };
            //this.router.navigate(['/'], { queryParams })
        }
        else if (webResponse.code == "2") {
            this.progressSpinnerService.isLoading = false;
            this.notification.error("'Password protected file can’t be processed.'");
        }
        else if (webResponse.code == "3") {
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
    CreateEmptyOpportunity(opportunityName) {
        if (this.documentUploadService.RFPOpportunity.RfpFileList === undefined ||
            this.documentUploadService.RFPOpportunity.RfpFileList.length == 0) {
            this.progressSpinnerService.isLoading = false;
            return;
        }
        let rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(file => file.OrignalFile.name === this.documentUploadService.SelectedFileName);
        // if (rfpFile.FileType != "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        //   rfpFile.FileType != "application/pdf") {
        //   this.notification.error("'Selected file must be PDF or MS Word Document'");
        //   this.progressSpinnerService.isLoading = false;
        //   return;
        // }
        let fileNameList = this.documentUploadService.GetFileNameList(undefined);
        const formData = new FormData();
        let requierdCategoryNameList = "false";
        let jsonFileNameList = JSON.stringify(fileNameList);
        formData.append('fileNameJsonList', jsonFileNameList);
        formData.append('opportunityName', opportunityName);
        if (rfpFile !== undefined && rfpFile.OrignalFile !== undefined) {
            formData.append('file', rfpFile.OrignalFile);
        }
        formData.append('companyID', localStorage.getItem('compId'));
        formData.append('userId', localStorage.getItem('userid'));
        formData.append('clientId', localStorage.getItem('clientID'));
        formData.append('SegmentId', localStorage.getItem('companySegmentID'));
        console.log(">>>>CreateOpportunity>>>>>>SegmentId = " + localStorage.getItem('companySegmentID') + "<<<<<<<<<");
        this.documentUploadService.CreateEmptyOpportunity(formData).subscribe(res => this.CreateEmptyOpportunityResponse(res, rfpFile), err => this.UploadError(err));
    }
    CreateEmptyOpportunityResponse(webReponse, rfpfile) {
        if (webReponse.code == "1") {
            this.documentUploadService.PopulateDocumentId(webReponse.response.fileNameList, webReponse.response.opportunityName, webReponse.response.opportunityId, webReponse.response.summary);
            this.showRFPDocument.emit();
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.progressSpinnerService.isLoading = false;
            this.opportunityDataOnCreationTransfer.emit();
            this.notification.success("Opportunity is created successfully !");
        }
        else if (webReponse.code === "2") {
            this.progressSpinnerService.isLoading = false;
            this.notification.error("'Password protected file can’t be processed.'");
        }
        else if (webReponse.code === "0") {
            this.progressSpinnerService.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
        }
        else {
            if (webReponse.code !== undefined) {
                this.progressSpinnerService.isLoading = false;
                this.notification.error("'Something bad happened. Please try again later.'");
            }
        }
    }
    SaveFileInRfpDB() {
        let fileNameList = this.documentUploadService.GetFileNameList(undefined);
        //let rfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(file => file.OrignalFile.name === this.documentUploadService.SelectedFileName)
        const formData = new FormData();
        let jsonFileNameList = JSON.stringify(fileNameList);
        formData.append('fileNameJsonList', jsonFileNameList);
        //formData.append('file', rfpFile.OrignalFile);
        formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
        formData.append('companyID', localStorage.getItem('compId'));
        formData.append('userId', localStorage.getItem('userid'));
        formData.append('clientId', localStorage.getItem('clientID'));
        formData.append('SegmentId', localStorage.getItem('companySegmentID'));
        this.documentUploadService.SaveFiles(formData).subscribe(res => this.SaveFileInRfpDBResponse(res), err => this.UploadError(err));
    }
    SaveFileInRfpDBResponse(webResponse) {
        if (webResponse.code == "1") {
            this.documentUploadService.PopulateDocumentId(webResponse.response, undefined, undefined, undefined);
            //let fileNameIndex: number = createOpportunityResponse.fileNameList.findIndex(file => file.Name == this.documentUploadService.SelectedFileName);
            //let htmlFile: string = createOpportunityResponse.fileNameList[fileNameIndex].HtmlFile;
            this.showRFPDocument.emit(undefined);
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.progressSpinnerService.isLoading = false;
            //this.OpenDialogForUnsaveRfpFileOnSharePoint(unsaveRfpFileOnSharePointList);
            this.notification.success("File has been saved successfully !");
            //const queryParams = { 'category': 'summary' };
            //this.router.navigate(['/'], { queryParams })
        }
        else if (webResponse.code == "0") {
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
    GetCategoryNameListFromDB(methodName) {
        // this.documentUploadService.GetCategoryNameList().subscribe(
        //   (response) => {
        //     this.FillCategoryNameList(response, methodName);
        //   },
        //   err => this.UploadError(err)
        // );
        this.documentUploadService.GetCategoryNameList().subscribe((response) => {
            this.FillCategoryNameList(response, methodName);
        }, err => this.UploadError(err));
    }
    FillCategoryNameList(webResponse, methodName) {
        if (webResponse.code == '1') {
            this.documentUploadService.CategoryNameList = webResponse.response;
            this.PopulateCategoryNameList.emit(this.documentUploadService.CategoryNameList);
            if (methodName !== undefined && methodName != null && methodName.length > 2) {
                if (methodName == "onAttachedFile") {
                    this.AttachedFile();
                    this.progressSpinnerService.isLoading = false;
                }
                else if (methodName == "GetSavedEmptyOpportunity") {
                    this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, this);
                }
            }
        }
        else if (webResponse.code === "0") {
            console.log(">>>>>>>Fail to retrieve Category List from Server<<<<<<<<<<<<<<");
            if (methodName !== undefined && methodName != null && methodName.length > 2) {
                this.progressSpinnerService.isLoading = false;
                this.notification.error("'Something bad happened. Please try again later.'");
            }
        }
        else {
            if (webResponse.code !== undefined) {
                if (methodName !== undefined && methodName != null && methodName.length > 2) {
                    console.log(">>>>>>>Fail to retrieve Category List from Server<<<<<<<<<<<<<<");
                    this.progressSpinnerService.isLoading = false;
                    this.notification.error("'Something bad happened. Please try again later.'");
                }
            }
        }
    }
    OpenDialogForUnsaveRfpFileOnSharePoint(unsaveRfpFileOnSharePointList) {
        let message;
        if (unsaveRfpFileOnSharePointList.length == 1) {
            message = "Following file was not processed. Trying again, in case of failure contact to administrator";
        }
        else {
            message = "Following files were not processed. Trying again, in case of failure contact to administrator";
        }
        let data = {
            rfpFileList: unsaveRfpFileOnSharePointList,
            message: message
        };
        this.dialogService.openDialog({
            width: '595px',
            data: data,
            dailogComponent: FileListMessageComponent
        });
    }
    FileListMessageBox(unsaveRfpFileOnSharePointList, message) {
        // let message: string;
        // if (unsaveRfpFileOnSharePointList.length == 1) {
        //   message = "Following file was not processed. Trying again, in case of failure contact to administrator";
        // } else {
        //   message = "Following files were not processed. Trying again, in case of failure contact to administrator";
        // }
        let data = {
            rfpFileList: unsaveRfpFileOnSharePointList,
            message: message
        };
        this.dialogService.openDialog({
            width: '595px',
            data: data,
            dailogComponent: FileListMessageComponent
        });
    }
    onGoToPage2() {
        let t = "";
    }
    CleanFormControls() {
        this.documentUploadService.CleanFormControlVariables();
        this.fileDropdownSelectedValue = '';
        this.CleanDocumentParserFormControls.emit();
        this.documentUploadService.TogglingEnableDisableButton();
    }
    SaveCategoriesDataAndSummaryData(oppertunityCategoryArray, requestedEvent) {
        let categoryDataList = this.GetChangedCategoriesData(oppertunityCategoryArray);
        this.summary.SaveChangedCategoriesSummaryData(this, categoryDataList, requestedEvent);
        // if (requestedEvent == 'save') {
        //   // let result: boolean = this.summary.SummaryFieldValid();
        //   // if (result == true) {
        //   this.summary.SaveChangedCategoriesSummaryData(this, categoryDataList, requestedEvent)
        //   // } else {
        //   //   this.notification.error("'One or more Summary mandatory filed empty, fill first'");
        //   //   this.progressSpinnerService.isLoading = false;
        //   // }
        // } else if (requestedEvent == 'parse') {
        //   this.summary.SaveChangedCategoriesSummaryData(this, categoryDataList, requestedEvent)
        // } else if (requestedEvent == 'OpportunityLoading') {
        //   this.summary.SaveChangedCategoriesSummaryData(this, categoryDataList, requestedEvent)
        // }
    }
    GetChangedCategoriesData(oppertunityCategoryArray) {
        let categoryDataList = new Array();
        for (let index = 0; index < oppertunityCategoryArray.length; index++) {
            const oppertunityCategory = oppertunityCategoryArray[index];
            // if (this.documentUploadService.RFPOpportunity.CatetoryDataList === undefined) {
            //   continue;
            // }
            console.log('GetChangedCategoriesData : ' + this.documentUploadService.RFPOpportunity);
            let savedCategoryDataIndex = this.documentUploadService.RFPOpportunity.CatetoryDataList.findIndex(c => c.CategoryId == parseInt(oppertunityCategory.categoryId));
            let dbCategoryData = this.documentUploadService.RFPOpportunity.CatetoryDataList[savedCategoryDataIndex];
            let oppertunityCategoryDataStringfy = "";
            let categoryId = parseInt(oppertunityCategory.categoryId);
            let categoryName = oppertunityCategory.categoryName;
            for (let index = 0; index < oppertunityCategory.categoryData.length; index++) {
                const element = oppertunityCategory.categoryData[index];
                if (!(element.hasAttribute('data-temptrow'))) {
                    oppertunityCategoryDataStringfy += element.outerHTML;
                }
            }
            if (dbCategoryData === undefined) {
                dbCategoryData = new CategoryData();
                dbCategoryData.CategoryId = categoryId;
                dbCategoryData.Name = "";
                dbCategoryData.CategoryData = "";
            }
            if (dbCategoryData.CategoryData != oppertunityCategoryDataStringfy) {
                let categoryData = new CategoryData();
                categoryData.CategoryId = categoryId;
                categoryData.Name = categoryName;
                categoryData.CategoryData = oppertunityCategoryDataStringfy;
                categoryDataList.push(categoryData);
            }
        }
        return categoryDataList;
    }
    ChangeOpportunityNameTransfer(opportunityName) {
        if (this.documentUploadService.RFPOpportunity.OpportunityName != opportunityName)
            this.documentUploadService.RFPOpportunity.OpportunityName = opportunityName;
        this.ChangeOpportunityName.emit(opportunityName);
    }
    updateOpportunityCategoryList(categoryId, catData) {
        let catIndex = this.documentUploadService.CategoryNameList.findIndex(cat => cat.CategoryId == categoryId);
        if (catIndex == -1) {
            return;
        }
        let categoryName = this.documentUploadService.CategoryNameList[catIndex];
        let catetoryDataList = new Array();
        let categoryData = new CategoryData();
        categoryData.CategoryId = parseInt(categoryId);
        categoryData.Name = categoryName.Name;
        categoryData.CategoryData = catData;
        catetoryDataList.push(categoryData);
        this.documentUploadService.UpdateCategoryData(catetoryDataList);
    }
};
__decorate([
    Output()
], DocumentUploadComponent.prototype, "showRFPDocument", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "OrignalHtmlDocument", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "PopulateCategoryNameList", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "opportunityDataOnCreationTransfer", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "opportunityDataTransfer", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "parsingDataTransfer", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "CleanDocumentParserFormControls", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "DeleteFileDataTransfer", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "SaveCategorySummaryData", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "DeleteCategoryData", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "MoveWholeDocument", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "ChangeOpportunityName", void 0);
__decorate([
    Input()
], DocumentUploadComponent.prototype, "fileName", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "receivedRFPDocumentName", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "SelectedFile", void 0);
__decorate([
    Input()
], DocumentUploadComponent.prototype, "opportunityData", void 0);
__decorate([
    Input()
], DocumentUploadComponent.prototype, "summary", void 0);
__decorate([
    Output()
], DocumentUploadComponent.prototype, "ClearOpportunityForm", void 0);
DocumentUploadComponent = __decorate([
    Component({
        selector: 'app-document-upload',
        templateUrl: './document-upload.component.html',
        styleUrls: ['./document-upload.component.css']
    })
], DocumentUploadComponent);
export { DocumentUploadComponent };
//# sourceMappingURL=document-upload.component.js.map