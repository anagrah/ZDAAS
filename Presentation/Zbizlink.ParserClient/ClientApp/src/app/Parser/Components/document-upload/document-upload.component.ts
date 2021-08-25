import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup } from '@angular/forms';
import { DocumentSummaryComponent } from '../../../parser/Components/document-summary/document-summary.component';//'../opportunity/summary/summary.component';

import { NotificationService } from '../../../shared/services/notification.service';
import { ValidateChangeInDataService } from '../../services/ValidateChangeInDataService';

//import { OpportunityNameResponse } from 'src/app/Shared/models/OpportunityNameResponse';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { ConfirmationMessageComponent } from '../Dialogs/confirmation-message/confirmation-message.component';
import { RFPFile } from '../../Models/RFPFile';
import { DocumentUploadService } from '../../services/document-upload.service';
import { OpportunityNameComponent } from '../Dialogs/opportunity-name/opportunity-name.component';

import { RFPManipulationWebApiService } from '../../services/rfpmanipulation-web-api.service';
import { ViewDocumentRes } from '../../Models/ViewDocumentRes';
import { FileName } from '../../Models/FileName';

import { CategoryName } from 'src/app/parser/models/CategoryName';

import { FileListMessageComponent } from '../Dialogs/file-list-message/file-list-message.component';
import { SharepointService } from '../../services/sharepoint.service';
import { SharePointResponse } from 'src/app/parser/models/SharePointResponse';
import { DocumentListComponent } from '../Dialogs/document-list/document-list.component';
import { RFPOpportunity } from '../../Models/RFPOpportunity';
import { DocumentUploadOptionComponent } from '../Dialogs/document-upload-option/document-upload-option.component';
import { ParsingDialogOutput } from 'src/app/parser/models/ParsingDialogOutput';
import { HttpParams } from '@angular/common/http';

import { AutoParsingRes } from '../../Models/AutoParsingRes';
import { DeleteFileRes } from '../../Models/DeleteFileRes';
import { OppertunityCategory } from 'src/app/parser/models/OppertunityCategory';
import { CategoryData } from '../../Models/CategoryData';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';

import { WebResponse } from '../../../shared/models/WebResponse';

import { CreateOpportunityRes } from '../../models/CreateOpportunityRes';
import { Publish } from '../../models/Publish'
import { AuthGuard } from '../../../shared/services/auth.guard';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

declare function transfertoZbizlink(): any;
declare function transfertoZbizlinkData(data): any;

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  parsingTypeRadioSelectedVaule: string;
  categoryDropdownSelectedValue: string;
  fileDropdownSelectedValue: string;
  proposalSynonymsSourceDataList: any;
  parsingDialogOutput: ParsingDialogOutput;
  @Output()
  showRFPDocument: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  OrignalHtmlDocument: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  PopulateCategoryNameList: EventEmitter<CategoryName[]> = new EventEmitter<CategoryName[]>();
  @Output()
  opportunityDataOnCreationTransfer: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  opportunityDataTransfer: EventEmitter<RFPOpportunity> = new EventEmitter<RFPOpportunity>();
  @Output()
  parsingDataTransfer: EventEmitter<AutoParsingRes> = new EventEmitter<AutoParsingRes>();
  @Output()
  CleanDocumentParserFormControls: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  DeleteFileDataTransfer: EventEmitter<DeleteFileRes> = new EventEmitter<DeleteFileRes>();
  @Output()
  SaveCategorySummaryData: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  DeleteCategoryData: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  MoveWholeDocument: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  ChangeOpportunityName: EventEmitter<string> = new EventEmitter<string>();
  event: any;



  @Input()
  fileName

  @Output()
  receivedRFPDocumentName: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  SelectedFile: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  opportunityData: Element[];
  @Input()
  summary: DocumentSummaryComponent;

  isBtnPubDisabled: boolean;
  // isCategoryLoaded:boolean = false;



  // @Output()
  // popUpOpportunityName: EventEmitter<OpportunityNameResponse> = new EventEmitter<OpportunityNameResponse>();

  @Output()
  ClearOpportunityForm: EventEmitter<any> = new EventEmitter();

  isLoadingSmall: boolean = false;

  file: any;




  userSelectedFileList = [];
  RfpDataArray: Element[] = [];
  profileForm: FormGroup;
  uploadError: string;
  saveError: string;
  rfpDocument: string;
  categoryName: string;
  shredValue: string = '0';
  //formGroupCB:FormGroup;
  private: string; // radioButton
  documentPublished: boolean;
  responseSave: boolean = false;
  isPublish: boolean = false;
  isPublishButtonVisible = true;
  isButtonShown: boolean = false;
  campaignEmailURL: string = undefined;
  opportunityURL: string = '';
  ONE_DANK_REGEX = /^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d$|^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ]([1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ][ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$/;


  fileUpload = { status: '', category: [], document: '', filePath: '', summary: '', documentId: '', documentName: '', CategoryData: '', message: '' };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private validateChange: ValidateChangeInDataService,
    private dialogService: DialogService,
    public documentUploadService: DocumentUploadService,
    private rfpManipulationWebApiService: RFPManipulationWebApiService,
    private sharepointService: SharepointService,
    private auth: AuthGuard,
    public progressSpinnerService: ProgressSpinnerService,
    private appConfigService: AppConfigService) {


  }


  ngOnInit() {
    // checking user type
    debugger;
    if (!this.auth.isZibilinkUser()) {
      if (!localStorage.getItem('Token') && !sessionStorage.getItem('CampaignUser')) {
        return this.router.navigateByUrl('login-user');
      } else {
        // hide publish opportunity button for both parser and campaign 

        this.disableButtons();

        this.isPublishButtonVisible = false;
        localStorage.removeItem('zbizlinkUser');
        var OpportunityId = parseInt(sessionStorage.getItem("OpportunityId"));
        if (sessionStorage.getItem("OpportunityId") === null) {
          this.urlDecode();
        }
      }
    } else {

      this.isPublishButtonVisible = true;
      this.isButtonShown = true;
    }
    if (sessionStorage.getItem("OpportunityId") !== undefined && sessionStorage.getItem("OpportunityId") !== "" && sessionStorage.getItem("OpportunityId") !== null) {
      this.campaignEmailURL = "campaignOpportunityFromEmailURL";
    }

    this.GetCategoryNameListFromDB(this.campaignEmailURL);
    this.isBtnPubDisabled = true;
    this.private = "1";
    this.CleanFormControls();
  }

  disableButtons() {
    var source = localStorage.getItem('Source');
    if (source == 'RFPParser') {
      this.isButtonShown = false;
    } else {
      this.isButtonShown = true;
    }
  }
  getRouteParam(): void {
    this.route.queryParamMap.subscribe(params => {
      this.categoryName = params.get('category');
    });
  }


  onAttachedFile(event: any) {


    this.progressSpinnerService.isLoading = true;

    if (event.target.files.length > 0) {

      this.event = event;

      if (this.documentUploadService.CategoryNameList === undefined) {

        this.GetCategoryNameListFromDB("onAttachedFile");

      } else {

        this.AttachedFile();

      }
    } else {
      this.progressSpinnerService.isLoading = false;
      event.target.value = null
    }
  }

  AttachedFile(): boolean {
    debugger;
    this.uploadError = "";

    let validationCode: string = this.documentUploadService.ValidationFileName(this.event);
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
      this.event.target.value = null
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
    } else {
      this.progressSpinnerService.isLoading = false;
    }
    this.event.target.value = null
  }

  onSelectionChangeFileDropDown(value) {
    debugger;
    this.documentUploadService.SelectedFileName = value;
    this.documentUploadService.TogglingEnableDisableButton();
    //this.SelectedFile.emit(value);

    let fileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == value);
    if (fileIndex >= 0) {
      let rfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[fileIndex];


      this.showRFPDocument.emit();


    }
  }

  UploadError(parm: any): void {
    this.uploadError = parm;
    this.progressSpinnerService.isLoading = false;
    this.notification.error(this.uploadError);
  }

  async doPublish(isOpportunity: boolean) {
    debugger;
    if (this.responseSave === false) {
      await this.Save(isOpportunity);
    }
    else {
      this.isPublish = true;
    }
    console.log("----" + this.responseSave + "---");
  }

  async Save(isOpportunity: boolean) {

    if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined ||
      this.documentUploadService.RFPOpportunity.OpportunityId == null) {
      return;
    }

    console.log("Save");
    console.log('>>>>>>>>>>>> clicked <<<<<<<<<<<<' + isOpportunity);


    this.responseSave = true;
    if (isOpportunity === false) {

      let createOpporturnity: boolean = false;
      let categoryId: string = this.GetCategoridIdFromQueryparameter();
      //let documentId = localStorage.getItem('documentId');
      if (categoryId &&
        this.documentUploadService.RFPOpportunity.OpportunityId != null &&
        this.documentUploadService.RFPOpportunity.OpportunityId !== undefined &&
        categoryId != 'summary') {

        let categoryData = this.CategoryDataConvertArrayIntoString();
        if (!this.validateChange.isEqual(categoryData)) {
          createOpporturnity = false;
          this.isLoadingSmall = true;
          await this.SaveCategory(categoryData, categoryId, isOpportunity);

        }
      }
      else if (this.summary.SummaryFieldValid() && (categoryId == 'summary' || categoryId == null)) {

        await this.summary.onSubmit(this, isOpportunity, categoryId);
      }
    }
    else if (isOpportunity === true) {
      let SummaryFieldValidationResult = this.SummaryFieldValidation()
      if (SummaryFieldValidationResult && isOpportunity === true) {
        this.isBtnPubDisabled = true;
        this.progressSpinnerService.isLoading = true;

        let createOpporturnity: boolean = false;
        if (isOpportunity == true) {
          createOpporturnity = true;
        }

        let categoryId: string = this.GetCategoridIdFromQueryparameter();

        let documentId = localStorage.getItem('documentId');

        if (categoryId && this.documentUploadService.RFPOpportunity.OpportunityId != null &&
          this.documentUploadService.RFPOpportunity.OpportunityId !== undefined && categoryId != 'summary') {

          let categoryData = this.CategoryDataConvertArrayIntoString();

          if (!this.validateChange.isEqual(categoryData)) {
            createOpporturnity = false;
            this.isLoadingSmall = true;
            await this.SaveCategory(categoryData, categoryId, isOpportunity);
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
        this.router.navigate(['/parser'], { queryParams })
        this.progressSpinnerService.isLoading = false;
        this.responseSave = false;
        return;
      }
    }
    if (this.isPublish === true) {
      this.isPublish = false;
      await this.Save(true);
      console.log("published");
    }
    this.responseSave = false;
  }


  onOpportunityListShow(): void { // open the dialogue in oppertunity componenet 

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

    dialogRef.afterClosed().subscribe(
      data => {
        this.documentUploadService.opportunityIdForLoadingOpportunity = undefined;
        if (data !== undefined) {
          this.progressSpinnerService.isLoading = true;
          //this.getSavedDocInfo(null, null, data);
          //this.CleanFormControls();
          //this.showRFPDocument.emit(undefined);
          this.documentUploadService.opportunityIdForLoadingOpportunity = data;
          if (this.documentUploadService.CategoryNameList === undefined) {
            this.GetCategoryNameListFromDB("GetSavedEmptyOpportunity");
          } else {
            if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined ||
              this.documentUploadService.RFPOpportunity.OpportunityId == null ||
              this.documentUploadService.RFPOpportunity.OpportunityId == '') {

              this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, this);

            } else {
              this.SaveCategorySummaryData.emit("OpportunityLoading");
              //this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, this);
            }

          }
        }
      }
    );

  }

  //this method is called from documentuploadservice
  //do not call in this component.
  public GetSaveEmptyOpportunity(rfpOpportunity: RFPOpportunity) {

    this.opportunityDataTransfer.emit(rfpOpportunity);

  }

  getOpportunity() {

    this.rfpManipulationWebApiService.getOpportunity().subscribe(
      (response) => {
        transfertoZbizlinkData(response);
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
      }
    )
  }

  publish(): void {
    let OpportunityId = this.documentUploadService.RFPOpportunity.OpportunityId;
    //*************Loader********
    //this.isLoading = true;
    //**************************
    this.isBtnPubDisabled = true;
    let compId: any = localStorage.getItem('compId');
    let userid: any = localStorage.getItem('userid');
    let clientID: any = localStorage.getItem('clientID');
    let SegmentId: any = localStorage.getItem('companySegmentID');
    console.log('>>>>>>>>>>>>>>>>> publish segmentID = ' + SegmentId + " <<<<<<<<<<<<<<<<<<<<<")
    this.rfpManipulationWebApiService.publish(OpportunityId, userid, compId, clientID, SegmentId).subscribe(
      (response) => {
        if (response !== undefined) {
          this.publishResponse(response);
        }
      },
      (error: any) => {
        this.progressSpinnerService.isLoading = false;
        this.isBtnPubDisabled = false;
        this.documentPublished = false;
        this.notification.error(error);
      }
    )
  }

  publishResponse(webResponse: WebResponse<Publish>) {

    try {
      if (webResponse.code == "1") {
        this.notification.success("Oppertunity publlished succefully ");
        this.progressSpinnerService.isLoading = false;
        this.documentPublished = true;

        transfertoZbizlinkData(webResponse);
      } else if (webResponse.code == "2") {
        this.notification.success("Oppertunity creation process fail");
        this.progressSpinnerService.isLoading = false;
        this.isBtnPubDisabled = false;
        this.documentPublished = false;
      }

    } catch (err) {
      this.progressSpinnerService.isLoading = false;
      this.isBtnPubDisabled = false;
      this.documentPublished = false;
      console.log(err);
    }
  }


  async SaveCategory(CategoryData: string, categoryId: string, isOpportunity: boolean) {

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
    },
      (error: any) => {

        this.isLoadingSmall = false;
        this.notification.error(error);

      });
  }

  SaveCategoryResponse(webResponse: WebResponse<String>, CategoryData: string, categoryId: string, isOpportunity: boolean) {
    if (webResponse.code == "1") {
      //formData.append('categoryData', CategoryData);
      debugger;
      this.updateOpportunityCategoryList(categoryId, CategoryData);
      this.isLoadingSmall = false;
      this.notification.success("Your data has been successfully saved.");
      if (isOpportunity == true) {
        this.publish()
      }
    }
    else {
      this.isLoadingSmall = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    }
  }

  CategoryDataConvertArrayIntoString(): string {

    let rfpDoc: string = "";
    for (let index = 0; index < this.opportunityData.length; index++) {
      const element = this.opportunityData[index];
      if (element.getAttribute("data-lastrow") == null || element.getAttribute("data-lastrow").valueOf().trim() != ".") {
        rfpDoc += element.outerHTML;
      }
    }
    return rfpDoc;
  }

  GetCategoridIdFromQueryparameter(): string {

    let categoryId: string;
    this.route.queryParamMap.subscribe(params => {
      if (params.has('category')) {
        categoryId = params.get('category');
      }

    });
    return categoryId;
  }

  SummaryFieldValidation(): boolean {
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
        let parsingDialogOutput: ParsingDialogOutput = res;
        if (parsingDialogOutput.Ok = true) {
        }
        this.GetParsingData(res);
      }
    });
  }

  GetParsingData(parseDialogOutput: ParsingDialogOutput) {
    this.parsingDialogOutput = parseDialogOutput;
    this.SaveCategorySummaryData.emit("parse");

  }

  parsing() {
    if (this.progressSpinnerService.isLoading == false) {
      this.progressSpinnerService.isLoading = true;
    }
    if (this.parsingDialogOutput.ParsingAuto == true) {
      this.AutoParsing("0");
    } else if (this.parsingDialogOutput.wholeDocumentYes == true) {
      this.wholeDocumentMove(parseInt(this.parsingDialogOutput.SelectedCategory));
    } else if (this.parsingDialogOutput.wholeDocumentNo == true) {
      this.AutoParsing(this.parsingDialogOutput.SelectedCategory);
    }
  }

  wholeDocumentMove(categoryId: number) {

    this.MoveWholeDocument.emit(categoryId);
    // let selectedFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(f => f.FileName = this.documentUploadService.SelectedFileName);
    // let selectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];
    // selectedRfpFile.Parsed = true;

  }

  AutoParsing(categoriesId: string) {

    let fromData = new FormData();
    let userSelectedFileName = this.documentUploadService.SelectedFileName;
    let userSelectedRFPFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == userSelectedFileName);
    let userSelectedRFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[userSelectedRFPFileIndex];



    fromData.append("opportunityId", this.documentUploadService.RFPOpportunity.OpportunityId);
    fromData.append("documentId", userSelectedRFPFile.fileRFPDbId.toString());
    fromData.append("categoriesId", categoriesId);
    this.rfpManipulationWebApiService.AutoParsing(fromData).subscribe(
      res => this.AutoParsingResponse(res, userSelectedRFPFile),
      err => this.UploadError(err)
    );

  }


  AutoParsingResponse(webResponse: WebResponse<AutoParsingRes>, userSelectedRFPFile: RFPFile) {

    if (webResponse.code == "1") {
      userSelectedRFPFile.Parsed = true;
      this.documentUploadService.RFPOpportunity.SummaryFieldList = webResponse.response.summary
      this.documentUploadService.RFPOpportunity.CatetoryDataList = webResponse.response.CategoryData;
      this.documentUploadService.TogglingEnableDisableButton();
      this.parsingDataTransfer.emit(webResponse.response);
      this.progressSpinnerService.isLoading = false;
    } else if (webResponse.code == "0") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    } else {
      if (webResponse.code !== undefined) {
        this.progressSpinnerService.isLoading = false;

        this.notification.error("'Something bad happened. Please try again later.'");
      }
    }
  }


  onDeleteFile() {



    if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined &&
      this.documentUploadService.RFPOpportunity.OpportunityId !== null &&
      this.documentUploadService.RFPOpportunity.OpportunityId != "" &&
      this.documentUploadService.RFPOpportunity.RfpFileList.length == 1) {
      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Last file in an opportunity can not be deleted'");
      return;
    }

    let data = { message: "Are you sure to delete this file ?" };

    let matDialogRef = this.dialogService.openDialog(
      {
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

  private DeleteFile() {
    this.progressSpinnerService.isLoading = true;
    let selectedFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName === this.documentUploadService.SelectedFileName);

    let rfpFile: RFPFile;
    if (selectedFileIndex == -1) {
      this.progressSpinnerService.isLoading = false;
      return;
    }

    rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];
    debugger;
    if (rfpFile.SavedSharePoint == true) {
      this.DeleteFormSharePoint(rfpFile);
    } else {
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

  DeleteFormSharePoint(rfpFile: RFPFile) {
    debugger;
    let params = new HttpParams();
    if (sessionStorage.getItem('CampaignUser')) {
      // please comment below lines efore deploying to test / production
      if (this.appConfigService.PraserDebugSetting === true) {
        sessionStorage.setItem('compId', '180589');
        sessionStorage.setItem('ClientID', '10370');
        sessionStorage.setItem('userId', '192702');
      }
      params = params.append('CompanyId', sessionStorage.getItem('compId'));
      params = params.append('userId', sessionStorage.getItem('userId'));
      params = params.append('ClientId', sessionStorage.getItem("ClientID"));
      params = params.append('SegmentId', "1");
    } else {

      // let compId = localStorage.getItem('compId');
      // let userid = localStorage.getItem('userid');
      // let clientID = localStorage.getItem('clientID');

      // params = params.append('CompanyId', compId);
      // params = params.append('UserId', userid);
      // params = params.append('ClientId', clientID);

      // please comment below lines efore deploying to test / production
      debugger;
      if (this.appConfigService.PraserDebugSetting === true) {
        localStorage.setItem('compId', '180589');
        localStorage.setItem('ClientID', '10370');
        localStorage.setItem('userid', '192702');
      }

      params = params.append('CompanyId', localStorage.getItem('compId'));
      params = params.append('userId', localStorage.getItem('userid'));
      params = params.append('ClientId', localStorage.getItem('clientID'));
    }


    params = params.append('filePath', rfpFile.FilePathSharePoint);

    this.sharepointService.DeleteFilesSharePoint(params).subscribe(
      res => this.DeleteFilesSharePointResponse(res, rfpFile),
      err => this.UploadError(err)
    );

  }

  DeleteFilesSharePointResponse(sharePointResponse: SharePointResponse, rfpFile: RFPFile) {
    debugger;
    if (sharePointResponse.Status == true) {
      console.log(">>>>>>>>>>> Delete file from sharepoint success <<<<<<<<<<<<<<<");
      console.log(sharePointResponse);
      if (rfpFile.fileRFPDbId !== undefined || rfpFile.fileRFPDbId !== null) {
        this.DeleteFormRFPDatabase(rfpFile.fileRFPDbId);
      } else {
        this.progressSpinnerService.isLoading = false;
        this.notification.success("'File has been deleted Successfully'");
      }

    } else {
      console.log(">>>>>>>>>>> Delete file from sharepoint fail <<<<<<<<<<<<<<<<<<<");
      console.log(sharePointResponse);
      this.notification.error("'Something bad happened. Please try again later.'");
      this.progressSpinnerService.isLoading = false;
    }
  }

  DeleteFormRFPDatabase(documentId: number) {

    const formData = new FormData();

    formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
    formData.append('documentId', documentId.toString());
    formData.append('deleteOnlyFile', 'true');

    this.documentUploadService.DeleteRfpFile(formData).subscribe(
      res => this.DeleteFileResponse(res, documentId),
      err => this.UploadError(err)
    );

  }


  DeleteFileResponse(webResponse: WebResponse<string>, documentId: number) {

    if (webResponse.code == '1') {
      let rfpFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.fileRFPDbId == documentId);
      if (rfpFileIndex >= 0) {
        this.documentUploadService.RFPOpportunity.RfpFileList.splice(rfpFileIndex, 1);
        this.documentUploadService.SelectedFileName = '';
        this.documentUploadService.TogglingEnableDisableButton();
        this.documentUploadService.SetNumberOfFileSatusCount();
        this.documentUploadService.SetDropDownMessage()
        this.DeleteFileDataTransfer.emit();
        //this.showRFPDocument.emit();
        this.progressSpinnerService.isLoading = false;
        this.notification.success("'File has been deleted Successfully'");
      }
    } else if (webResponse.code === "0") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    } else {
      if (webResponse.code !== undefined) {
        this.progressSpinnerService.isLoading = false;

        this.notification.error("'Something bad happened. Please try again later.'");
      }
    }
  }

  onPreviewDocument() {
    this.progressSpinnerService.isLoading = true;
    debugger;
    let UserSelectedRfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(file => file.FileName === this.documentUploadService.SelectedFileName)

    if (UserSelectedRfpFile === null || UserSelectedRfpFile === undefined) {
      this.progressSpinnerService.isLoading = false;
      return;

    }

    let validationCode: string = this.documentUploadService.ValidationFileType(UserSelectedRfpFile.FileName);
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

      this.rfpManipulationWebApiService.getProposalSourcesSynonymsList().subscribe(
        (response) => {

          if (response.code === 1) {
            this.proposalSynonymsSourceDataList = response.response;
          }

        },
        err => this.UploadError(err)
      );
      debugger;
      const dialogRef = this.dialogService.openDialog({
        width: '400px',
        dailogComponent: OpportunityNameComponent,
        data: this.proposalSynonymsSourceDataList
      });

      dialogRef.afterClosed().subscribe(
        data => {
          debugger;
          if (data !== undefined && data !== '') {
            debugger;
            this.UploadFilesSharePoint(data);
            //strart only for Testing [skip share point process]
            //this.CreateEmptyOpportunity(data);
            //end only for Testing [skip share point process]
          } else {
            this.progressSpinnerService.isLoading = false;
          }
        }
      );
      // this.rfpManipulationWebApiService.getProposalSourcesSynonymsList().subscribe(
      //   (response) => {

      //     if (response.code === 1) {
      //       this.proposalSynonymsSourceDataList = response.response;
      //     }

      //   },
      //   err => this.UploadError(err)
      // );


    }

  }

  GetFileSharePoint(filepath: string, UserSelectedRfpFile: RFPFile) {

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

    this.sharepointService.GetFileSharePoint(params).subscribe(
      res => this.GetFileSharePointResponse(res, UserSelectedRfpFile),
      err => this.UploadError(err)
    );
  }

  GetFileSharePointResponse(res: any, UserSelectedRfpFile: RFPFile) {

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
    let file: any = res._buffer;
    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('fileName', UserSelectedRfpFile.FileName);
    formData.append('documentId', UserSelectedRfpFile.fileRFPDbId.toString());

    this.rfpManipulationWebApiService.ViewSharePointDocument(formData).subscribe(
      res => this.ViewSharePointDocumentReponse(res, UserSelectedRfpFile),
      err => this.UploadError(err)
    );


  }

  ViewSharePointDocumentReponse(webResponse: WebResponse<string>, UserSelectedRfpFile: RFPFile) {
    if (webResponse.code == '1') {

      UserSelectedRfpFile.HTMLFile = webResponse.response;
      UserSelectedRfpFile.View = true;
      this.documentUploadService.TogglingEnableDisableButton();
      this.showRFPDocument.emit();
      this.progressSpinnerService.isLoading = false;
    }
  }

  private UploadFilesSharePoint(data: any) {
debugger;
    const formDataSharePoint = new FormData();
    console.log("Company id on start of UploadFilesSharePoint method is = " + sessionStorage.getItem('compId'));

    console.log("CampaignUser value = " + sessionStorage.getItem('CampaignUser'));
    debugger;
    if (sessionStorage.getItem('CampaignUser') === 'true') {
      console.log(sessionStorage.getItem('CampaignUser'));
debugger;
      // coment below lines before deploying to test/prod
if(this.appConfigService.PraserDebugSetting == true){
      sessionStorage.setItem('compId','180589');
      sessionStorage.setItem('ClientID','10370');
      sessionStorage.setItem('userId','192702'); 
}
      formDataSharePoint.append('ClientId', sessionStorage.getItem("ClientID"));
      formDataSharePoint.append('CompanyId', sessionStorage.getItem('compId'));
      formDataSharePoint.append('userId', sessionStorage.getItem('userId'));
      formDataSharePoint.append('SegmentId', "1");

      console.log("Campaign SharePoint ids");
      console.log(">>>>>>ClientID = " + sessionStorage.getItem('ClientID') + "<<<<<<<<<");
      console.log(">>>>>>compId = " + sessionStorage.getItem('compId') + "<<<<<<<<<");
      console.log(">>>>>>userId = " + sessionStorage.getItem('UserId') + "<<<<<<<<<");

      console.log(" // Display the key/value pairs of supplied parameters")
      // formDataSharePoint.forEach((value,key) => {
      //     console.log(key+" "+value)
      // });


    } else {
      debugger;

      // please comment below lines efore deploying to test / production

     let test = this.appConfigService.PraserDebugSetting;
      if (this.appConfigService.PraserDebugSetting === true) {
        localStorage.setItem('compId', '180589');
        localStorage.setItem('clientID', '10370');
        localStorage.setItem('userid', '192702');
      }

      console.log(">>>>>>companyId = " + localStorage.getItem('compId') + "<<<<<<<<<")
      formDataSharePoint.append('CompanyId', localStorage.getItem('compId'));

      console.log(">>>>>>userid = " + localStorage.getItem('userid') + "<<<<<<<<<")
      formDataSharePoint.append('userId', localStorage.getItem('userid'));


      console.log(">>>>>>clientID = " + localStorage.getItem('clientID') + "<<<<<<<<<")
      formDataSharePoint.append('ClientId', localStorage.getItem('clientID'));
    }
    let rfpFileList: RFPFile[];
    if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined) {
      rfpFileList = this.documentUploadService.RFPOpportunity.RfpFileList;
    } else {

      rfpFileList = this.documentUploadService.RFPOpportunity.RfpFileList.filter(file =>
        file.SavedSharePoint === undefined ||
        file.SavedSharePoint == null ||
        file.SavedSharePoint == false);
    }

    if (rfpFileList.length == 0) {
      this.progressSpinnerService.isLoading = false;
      return;
    }


    let fileName: string = "";
    for (let index = 0; index < rfpFileList.length; index++) {
      const rfpFile = rfpFileList[index];
      formDataSharePoint.append('File', rfpFile.OrignalFile);
      fileName += rfpFile.OrignalFile.name + "  ";
    }
    console.log(" // Display the key/value pairs of supplied parameters")
    // formDataSharePoint.forEach((value,key) => {
    //     console.log(key+" "+value)
    // });

    console.log(">>>>>>>>>>>>>>>>Upload to SharePoint, FileName: " + fileName + "<<<<<<<<<<<<<<<<<<<<")
    console.log(rfpFileList);
    debugger;
    this.documentUploadService.UploadFilesSharePoint(formDataSharePoint).subscribe(
      res => this.UploadFilesSharePointResponse(res, rfpFileList.length, data),
      err => this.UploadError(err)
    );
  }

  UploadFilesSharePointResponse(sharePointDocUploadResponseList: SharePointResponse[], totalFile: number,
    data: any): void {


    console.log(">>>>>start save from share point no response<<<<<");
    console.log(sharePointDocUploadResponseList);
    if (sharePointDocUploadResponseList === undefined || sharePointDocUploadResponseList.length == 0) {
      console.log(">>>>>Fail from share point no response<<<<<");
      console.log(sharePointDocUploadResponseList);
      this.notification.error("'Something bad happened. Please try again later.'");
      this.progressSpinnerService.isLoading = false;
      return;
    } else {
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

    let sharePointUnsaveFileList: RFPFile[] = this.documentUploadService.SetFileSavedStatusOnsharePoint(sharePointDocUploadResponseList);

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


      let message: string;
      if (sharePointUnsaveFileList.length == 1) {
        message = "Following file was not processed. Trying again, in case of failure contact to administrator";
      } else {
        message = "Following files were not processed. Trying again, in case of failure contact to administrator";
      }
      let data = {
        rfpFileList: sharePointUnsaveFileList,
        message: message
      };

      let sharePointUnsaveFileListDialog = this.dialogService.openDialog(
        {
          width: '595px',
          data: data,
          dailogComponent: FileListMessageComponent
        });

    }

    if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined ||
      this.documentUploadService.RFPOpportunity.OpportunityId == null ||
      this.documentUploadService.RFPOpportunity.OpportunityId == '') {
      this.CreateEmptyOpportunity(data);
    } else {
      this.SaveFileInRfpDB();
    }


  }

  public PreviewDocument(rfpFile: RFPFile) {

    const formData = new FormData();
    formData.append('file', rfpFile.OrignalFile);
    formData.append('documentId', rfpFile.fileRFPDbId.toString());

    this.documentUploadService.ViewDocument(formData).subscribe(
      res => this.ViewDocumentResponse(res, rfpFile),
      err => this.UploadError(err)
    );
  }

  ViewDocumentResponse(webResponse: WebResponse<ViewDocumentRes>, rfpFile: RFPFile) {

    if (webResponse.code == "1") {

      this.documentUploadService.PopulateHtmlFile(webResponse.response);
      this.documentUploadService.TogglingEnableDisableButton();
      this.showRFPDocument.emit();
      this.progressSpinnerService.isLoading = false;

      //this.isBtnPubDisabled = false;
      //const queryParams = { 'category': 'summary' };
      //this.router.navigate(['/'], { queryParams })

    } else if (webResponse.code == "2") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Password protected file can’t be processed.'");

    } else if (webResponse.code == "3") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    } else {
      if (webResponse.code !== undefined) {
        this.progressSpinnerService.isLoading = false;

        this.notification.error("'Something bad happened. Please try again later.'");
      }
    }

  }

  CreateEmptyOpportunity(data: any) {
    if (this.documentUploadService.RFPOpportunity.RfpFileList === undefined ||
      this.documentUploadService.RFPOpportunity.RfpFileList.length == 0) {

      this.progressSpinnerService.isLoading = false;
      return;

    }

    let rfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(file => file.OrignalFile.name === this.documentUploadService.SelectedFileName)

    // if (rfpFile.FileType != "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
    //   rfpFile.FileType != "application/pdf") {
    //   this.notification.error("'Selected file must be PDF or MS Word Document'");
    //   this.progressSpinnerService.isLoading = false;
    //   return;
    // }

    let fileNameList: FileName[] = this.documentUploadService.GetFileNameList(undefined);


    const formData = new FormData();
    let requierdCategoryNameList: string = "false";

    let jsonFileNameList = JSON.stringify(fileNameList);
    formData.append('fileNameJsonList', jsonFileNameList);

    formData.append('opportunityName', data.opportunityName);
    formData.append('type', data.selectedSourceName);
    debugger;
    formData.append('agencyId', data.selectedSourceDetails.agencyId);
    formData.append('stateId', data.selectedSourceDetails.stateId);
    formData.append('contractVehicleId', data.selectedSourceDetails.contractVehicleId);
    formData.append('industryId', data.selectedSourceDetails.industryId);

    if (rfpFile !== undefined && rfpFile.OrignalFile !== undefined) {
      formData.append('file', rfpFile.OrignalFile);
    }
    debugger;
    console.log("Line # 1183 , Company id on start of CreateEmptyOpportunity method is = " + sessionStorage.getItem('compId'));
    if (sessionStorage.getItem('CampaignUser')) {

      console.log(" End of if condition in sharepoint method. at line # 1203");

      console.log(sessionStorage.getItem('CampaignUser'));
      console.log("Line # 1186 , Company id within if condition of CreateEmptyOpportunity method is = " + sessionStorage.getItem('compId'));
      debugger;
      // please comment below lines efore deploying to test / production
      if (this.appConfigService.PraserDebugSetting === true) {
        sessionStorage.setItem('compId', '180589');
        sessionStorage.setItem('ClientID', '10370');
        sessionStorage.setItem('userId', '192702');
      }
      formData.append('ClientId', sessionStorage.getItem("ClientID"));
      formData.append('CompanyId', sessionStorage.getItem('compId'));
      formData.append('userId', sessionStorage.getItem('userId'));
      formData.append('CampaignUser', sessionStorage.getItem('CampaignUser'));
      formData.append('SegmentId', "1");
    } else {
      formData.append('companyID', localStorage.getItem('compId'));
      formData.append('userId', localStorage.getItem('userid'));
      formData.append('clientId', localStorage.getItem('clientID'));
      formData.append('SegmentId', localStorage.getItem('companySegmentID'));

      localStorage.setItem('CampaignUser', 'false');
      formData.append('CampaignUser', localStorage.getItem('CampaignUser'));

      console.log(">>>>CreateOpportunity>>>>>>SegmentId = " + localStorage.getItem('companySegmentID') + "<<<<<<<<<")
    }
    debugger;
    console.log('comp id' + localStorage.getItem('compId'));
    this.documentUploadService.CreateEmptyOpportunity(formData).subscribe(
      res => this.CreateEmptyOpportunityResponse(res, rfpFile),
      err => this.UploadError(err)
    );
  }


  CreateEmptyOpportunityResponse(webReponse: WebResponse<CreateOpportunityRes>, rfpfile: RFPFile) {

    debugger;
    if (webReponse.code == "1") {

      this.documentUploadService.PopulateDocumentId(webReponse.response.fileNameList,
        webReponse.response.opportunityName, webReponse.response.opportunityId,
        webReponse.response.summary);

      this.showRFPDocument.emit();
      this.documentUploadService.TogglingEnableDisableButton();
      this.documentUploadService.SetNumberOfFileSatusCount();
      this.progressSpinnerService.isLoading = false;

      this.opportunityDataOnCreationTransfer.emit();
      this.notification.success("Opportunity is created successfully !");

    } else if (webReponse.code === "2") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Password protected file can’t be processed.'");
    } else if (webReponse.code === "0") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    } else {
      if (webReponse.code !== undefined) {
        this.progressSpinnerService.isLoading = false;

        this.notification.error("'Something bad happened. Please try again later.'");
      }
    }
  }

  private SaveFileInRfpDB(): void {

    let fileNameList: FileName[] = this.documentUploadService.GetFileNameList(undefined);
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

    this.documentUploadService.SaveFiles(formData).subscribe(
      res => this.SaveFileInRfpDBResponse(res),
      err => this.UploadError(err)
    );

  }

  private SaveFileInRfpDBResponse(webResponse: WebResponse<FileName[]>) {

    if (webResponse.code == "1") {

      this.documentUploadService.PopulateDocumentId(webResponse.response,
        undefined, undefined, undefined);
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

    } else if (webResponse.code == "0") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    } else {
      if (webResponse.code !== undefined) {
        this.progressSpinnerService.isLoading = false;

        this.notification.error("'Something bad happened. Please try again later.'");
      }
    }

  }


  private GetCategoryNameListFromDB(methodName: string) {

    // this.documentUploadService.GetCategoryNameList().subscribe(
    //   (response) => {
    //     this.FillCategoryNameList(response, methodName);
    //   },
    //   err => this.UploadError(err)
    // );
    this.documentUploadService.GetCategoryNameList().subscribe(
      (response) => {
        this.FillCategoryNameList(response, methodName);
      },
      err => this.UploadError(err)
    );

  }

  private FillCategoryNameList(webResponse: WebResponse<CategoryName[]>, methodName: string): void {

    if (webResponse.code == '1') {

      this.documentUploadService.CategoryNameList = webResponse.response;

      this.PopulateCategoryNameList.emit(this.documentUploadService.CategoryNameList);
      if (methodName !== undefined && methodName != null && methodName.length > 2) {
        if (methodName == "onAttachedFile") {
          debugger;
          this.AttachedFile();
          this.progressSpinnerService.isLoading = false;
        } else if (methodName == "GetSavedEmptyOpportunity") {
          this.documentUploadService.GetSavedEmptyOpportunity(this.documentUploadService.opportunityIdForLoadingOpportunity, this);
        }
        else if (methodName == "campaignOpportunityFromEmailURL") {
          this.getOpportunityOnCampaignURLClick();
        }
      }
    } else if (webResponse.code === "0") {
      console.log(">>>>>>>Fail to retrieve Category List from Server<<<<<<<<<<<<<<");
      if (methodName !== undefined && methodName != null && methodName.length > 2) {
        this.progressSpinnerService.isLoading = false;
        this.notification.error("'Something bad happened. Please try again later.'");
      }
    } else {
      if (webResponse.code !== undefined) {
        if (methodName !== undefined && methodName != null && methodName.length > 2) {
          console.log(">>>>>>>Fail to retrieve Category List from Server<<<<<<<<<<<<<<");
          this.progressSpinnerService.isLoading = false;

          this.notification.error("'Something bad happened. Please try again later.'");
        }
      }
    }
  }

  private OpenDialogForUnsaveRfpFileOnSharePoint(unsaveRfpFileOnSharePointList: RFPFile[]) {

    let message: string;
    if (unsaveRfpFileOnSharePointList.length == 1) {
      message = "Following file was not processed. Trying again, in case of failure contact to administrator";
    } else {
      message = "Following files were not processed. Trying again, in case of failure contact to administrator";
    }
    let data = {
      rfpFileList: unsaveRfpFileOnSharePointList,
      message: message
    };

    this.dialogService.openDialog(
      {
        width: '595px',
        data: data,
        dailogComponent: FileListMessageComponent
      });
  }

  private FileListMessageBox(unsaveRfpFileOnSharePointList: RFPFile[], message: string) {

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

    this.dialogService.openDialog(
      {
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

  SaveCategoriesDataAndSummaryData(oppertunityCategoryArray: Array<OppertunityCategory>, requestedEvent: string) {
debugger;
    let categoryDataList: Array<CategoryData> = this.GetChangedCategoriesData(oppertunityCategoryArray);

    this.summary.SaveChangedCategoriesSummaryData(this, categoryDataList, requestedEvent)

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

  GetChangedCategoriesData(oppertunityCategoryArray: Array<OppertunityCategory>): Array<CategoryData> {

    let categoryDataList: Array<CategoryData> = new Array<CategoryData>();

    for (let index = 0; index < oppertunityCategoryArray.length; index++) {
      const oppertunityCategory: OppertunityCategory = oppertunityCategoryArray[index];

      // if (this.documentUploadService.RFPOpportunity.CatetoryDataList === undefined) {
      //   continue;
      // }
      console.log('GetChangedCategoriesData : ' + this.documentUploadService.RFPOpportunity);
      let savedCategoryDataIndex: number = this.documentUploadService.RFPOpportunity.CatetoryDataList.findIndex(c => c.CategoryId == parseInt(oppertunityCategory.categoryId));


      let dbCategoryData: CategoryData = this.documentUploadService.RFPOpportunity.CatetoryDataList[savedCategoryDataIndex];

      let oppertunityCategoryDataStringfy: string = "";
      let categoryId: number = parseInt(oppertunityCategory.categoryId);
      let categoryName: string = oppertunityCategory.categoryName;
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
        let categoryData: CategoryData = new CategoryData();
        categoryData.CategoryId = categoryId;
        categoryData.Name = categoryName;
        categoryData.CategoryData = oppertunityCategoryDataStringfy;
        categoryDataList.push(categoryData);

      }
    }
    return categoryDataList;
  }


  ChangeOpportunityNameTransfer(opportunityName: string) {

    if (this.documentUploadService.RFPOpportunity.OpportunityName != opportunityName)
      this.documentUploadService.RFPOpportunity.OpportunityName = opportunityName;
    this.ChangeOpportunityName.emit(opportunityName);


  }
  // Decode URL and get Opportunity id 
  public urlDecode() {
    let opportunityURL = window.location.search.replace('?', "").trim();
    if (opportunityURL != "" && opportunityURL != null && !opportunityURL.includes('category=')) {
      // Decode URL 
      //  if (opportunityURL.includes('%3D')){
      //    opportunityURL = opportunityURL.replace('%3D','=');        

      opportunityURL = decodeURIComponent(opportunityURL);
      if (opportunityURL.endsWith('=')) {
        opportunityURL = opportunityURL.replace(/=/g, '');
      }
      // Decode URL 
      var OpportunityId = window.atob(opportunityURL).split('=');
      if (OpportunityId.length > 0)
        sessionStorage.setItem("OpportunityId", OpportunityId[1]);

      //  }  
    }
  }
  private getOpportunityOnCampaignURLClick() {
    var OpportunityId = parseInt(sessionStorage.getItem("OpportunityId"));
    if (OpportunityId > 0) {
      this.documentUploadService.GetSavedEmptyOpportunity(OpportunityId, this);
      sessionStorage.removeItem("OpportunityId");
    }
  }

  private updateOpportunityCategoryList(categoryId: string, catData: string) {

    let catIndex: number = this.documentUploadService.CategoryNameList.findIndex(cat => cat.CategoryId == categoryId);

    if (catIndex == -1) {
      return;
    }

    let categoryName: CategoryName = this.documentUploadService.CategoryNameList[catIndex];

    let catetoryDataList: Array<CategoryData> = new Array<CategoryData>();

    let categoryData: CategoryData = new CategoryData();
    categoryData.CategoryId = parseInt(categoryId);
    categoryData.Name = categoryName.Name;
    categoryData.CategoryData = catData;
    catetoryDataList.push(categoryData);

    this.documentUploadService.UpdateCategoryData(catetoryDataList);
  }
}
