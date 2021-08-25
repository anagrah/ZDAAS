import { Injectable} from '@angular/core';
import { FileName } from '../Models/FileName';
import { RFPFile } from '../Models/RFPFile';
import { DialogService } from '../../shared/services/dialog.service';
import { Observable } from 'rxjs';

import { RFPManipulationWebApiService } from './rfpmanipulation-web-api.service';

import { ViewDocumentRes } from '../Models/ViewDocumentRes';
import { RFPOpportunity } from '../Models/RFPOpportunity';

import { NotificationService } from '../../shared/services/notification.service';

import { CategoryName } from '../models/CategoryName';
import { SharepointService } from './sharepoint.service';
import { SharePointResponse } from '../models/SharePointResponse';
import { SummaryField } from '../models/SummaryField';
import { DocumentUploadComponent } from '../components/document-upload/document-upload.component';

import { CategoryData } from '../Models/CategoryData';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { WebResponse } from 'src/app/shared/models/WebResponse';
import {RfpSummaryViewModel, SavedEmptyOpportunityRes} from '../models/SavedEmptyOpportunityRes'

@Injectable({
  providedIn: 'root'
})
export class DocumentUploadService {

  opportunityIdForLoadingOpportunity: number;
  //private _rfpFileList: RFPFile[] = [];
  private _filenameList: FileName[] = [];
  private _duplicateFileList: FileName[] = [];


  private _numberOfAttachedfile: number = 0;
  private _numberOfSavedfile: string = '';
  private _numberOfParssedfile: string = '';
  private _dropDownMessage: string = "Attach file";
  //private _opportunityName: string = "";
  private _selectedFileName: string;

  private _deleteButtonDisable: boolean = true;
  private _saveButtonDisable: boolean = true;
  private _saveAllButtonDisable: boolean = true;
  private _viewButtonDisable: boolean = true;
  private _parseButtonDisable: boolean = true;
  private _publishButtonDisable: boolean = true;
  private _savefileMessageColor;
  private _categoryNameList: CategoryName[];




  private _RFPOpportunity: RFPOpportunity = new RFPOpportunity();

  constructor(private dialogService: DialogService, private rfpManipulationWebApiService: RFPManipulationWebApiService,
    private notification: NotificationService, private sharepointService: SharepointService,
    public progressSpinnerService: ProgressSpinnerService) {
    this.GetCategoryNameList();
  }


  public get CategoryNameList(): CategoryName[] {

    return this._categoryNameList;
  }


  public set CategoryNameList(value: CategoryName[]) {
    this._categoryNameList = value;
  }

  public get RFPOpportunity(): RFPOpportunity {
    return this._RFPOpportunity;
  }

  // public set RFPOpportunity(value: RFPOpportunity) {
  //   this._RFPOpportunity = value;
  // }


  public get SavefileMessageColor(): string {
    return this._savefileMessageColor;
  }

  public get SelectedFileName(): string {
    return this._selectedFileName;
  }

  public set SelectedFileName(value: string) {
    this._selectedFileName = value;
  }

  public get DeleteButtonDisable(): boolean {
    return this._deleteButtonDisable;
  }
  public get SaveButtonDisable(): boolean {
    return this._saveButtonDisable
  }

  // public set SaveButtonDisable(value: boolean) {
  //   this._saveButtonDisable = value;
  // }

  public get SaveAllButtonDisable(): boolean {
    return this._saveAllButtonDisable
  }
  public get ViewButtonDisable(): boolean {
    return this._viewButtonDisable
  }
  public get ParseButtonDisable(): boolean {
    return this._parseButtonDisable
  }
  public get PublishButtonDisable(): boolean {
    return this._publishButtonDisable
  }

  public get duplicateFileList() {
    return this._duplicateFileList;
  }


  public get NumberOfAttachedfile(): number {
    return this._numberOfAttachedfile;
  }

  public get NumberOfSavedfile(): string {
    return this._numberOfSavedfile;
  }

  public get NumberOfParssedfile() {
    return this._numberOfParssedfile;
  }
  public get DropDownMessage(): string {
    return this._dropDownMessage;
  }


  public GetFileNameList(fileName: string): FileName[] {

    this._filenameList = [];

    if (fileName !== undefined) {
      let rfpFileIndex: number = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == fileName &&
        file.Saved === undefined);
      let rfpFile = this.RFPOpportunity.RfpFileList[rfpFileIndex];

      let filename: FileName = new FileName();

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

        let filename: FileName = new FileName();

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


  public ValidationFileName(event: any): string {
    let validRfpFileList: RFPFile[] = [];
    let reg = /(.*?)\.(doc|docx|pdf)$/;

    for (let index = 0; index < event.target.files.length; index++) {

      let fileName: string = event.target.files[index].name;

      if (!fileName.match(reg)) {
        return "1";
      } else if (fileName.includes("&") || fileName.includes("#")) {
        return "2";
      }
    }

    return "0";
  }

  public ValidationFileType(fileName: string): string {

    let reg = /(.*?)\.(doc|docx|pdf)$/;
    if (!fileName.match(reg)) {
      return "1";
    }
    return "0";
  }

  public ValidationCorruptFile(): RFPFile[] {

    let sharePointCorruptFileList: RFPFile[] = [];

     let rfpfile: RFPFile = this.RFPOpportunity.RfpFileList[0];

    for (let index = 0; index < this.RFPOpportunity.RfpFileList.length; index++) {
      let rfpfile: RFPFile = this.RFPOpportunity.RfpFileList[index];
      let orignalfile: File = rfpfile.OrignalFile;
      if (orignalfile.size == 0) {
        sharePointCorruptFileList.push(rfpfile);
      }
    }
    
    return sharePointCorruptFileList;
  }

  public PopulateRfpFileCollection(event: any) { 
    let firstFile: boolean = true;

    for (let index = 0; index < event.target.files.length; index++) {

      let currentAttachfileName: string = event.target.files[index].name;

      let DuplicateRFPFileIndex: number = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName === currentAttachfileName)

      if (DuplicateRFPFileIndex >= 0) {

        let duplicateFileName: FileName = new FileName();
        duplicateFileName.Name = currentAttachfileName;

        //let duplicateFileName: FileName = new FileName({ Name: currentAttachfileName, Type:  event.target.files[index].FileType});

        this._duplicateFileList.push(duplicateFileName);
      } else {
        let rfpFile: RFPFile = new RFPFile(
          {
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
  public PopulateDocumentId(fileNameListReponse: FileName[], opportunityName: string, opportunityId: string,
    summaryFieldList: Array<SummaryField>) {

    if (this.RFPOpportunity.OpportunityName === undefined) {
      this.RFPOpportunity.OpportunityName = opportunityName;
      this.RFPOpportunity.OpportunityId = opportunityId;
      this.RFPOpportunity.SummaryFieldList = summaryFieldList;
    }

    for (let index = 0; index < fileNameListReponse.length; index++) {
      let fileName = fileNameListReponse[index];
      let rfpFile: RFPFile = this.RFPOpportunity.RfpFileList.find(file => file.FileName == fileName.Name)

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

  public PopulateHtmlFile(viewDocumentRes: ViewDocumentRes) {
    let rfpFile: RFPFile = this.RFPOpportunity.RfpFileList.find(file => file.fileRFPDbId == viewDocumentRes.documentId);

    rfpFile.HTMLFile = viewDocumentRes.htmlFile;
    rfpFile.View = true;

  }

  public SetNumberOfFileSatusCount() {

    this._numberOfAttachedfile = this.RFPOpportunity.RfpFileList.length;
    if (this._numberOfAttachedfile == 0) {
      this._numberOfSavedfile = "";
      this._numberOfParssedfile = "";
      this._numberOfSavedfile == "";
      this._numberOfParssedfile == "";
      return;
    }

    let numberOfUnsavedfile: number = this.RFPOpportunity.RfpFileList.filter(file => file.Saved === undefined).length;
    let numberOfSavedfile: number = this.RFPOpportunity.RfpFileList.filter(file => file.Saved === undefined).length;
    let numberOfParssedfile: number = this.RFPOpportunity.RfpFileList.filter(file => file.Parsed == true).length;

    if (numberOfUnsavedfile == 0) {
      if (this.RFPOpportunity.RfpFileList.length == 1) {
        this._numberOfSavedfile = "File is saved";
        this._savefileMessageColor = 'green';
      } else {
        this._numberOfSavedfile = "All files are saved";
        this._savefileMessageColor = 'green';
      }

    } else {
      this._savefileMessageColor = 'red';
      this._numberOfSavedfile = (numberOfUnsavedfile == 1) ? "1 unsave file" : numberOfUnsavedfile + " unsave files";

    }

    if (numberOfParssedfile == 0) {
      this._numberOfParssedfile = "0 parsed file";
    } else {
      this._numberOfParssedfile = (numberOfParssedfile == 1) ? "1 parsed file" : numberOfParssedfile + " parsed files";
    }

  }

  public TogglingEnableDisableButton() {

    if (this.RFPOpportunity !== undefined && this.RFPOpportunity !== null &&
      this.RFPOpportunity.OpportunityId !== undefined && this.RFPOpportunity.OpportunityId !== null &&
      this.RFPOpportunity.OpportunityId != "0" && this.RFPOpportunity.OpportunityId != "") {
      this._saveButtonDisable = false;
      this._publishButtonDisable = false;
    } else {
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


    } else {

      this._viewButtonDisable = true;
      this._parseButtonDisable = true;
      this._publishButtonDisable = true;
      this._parseButtonDisable = true;
    }

    if (this._selectedFileName === undefined || this._selectedFileName == '') {

      this._deleteButtonDisable = true;
      this._viewButtonDisable = true;
      this._parseButtonDisable = true;
    } else {

      this._deleteButtonDisable = false;

      let selectFileIndex: number = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == this._selectedFileName);
      let rfpfile: RFPFile = this.RFPOpportunity.RfpFileList[selectFileIndex];

      if (rfpfile === undefined) {
        this._deleteButtonDisable = true;
        this._viewButtonDisable = true;
        this._parseButtonDisable = true;
        this._publishButtonDisable = true;
        return;
      }

      if (rfpfile.View !== undefined && rfpfile.View === true) {
        this._viewButtonDisable = true;
      } else {
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

  public SetDropDownMessage() {
    if (this.RFPOpportunity.RfpFileList.length === 0) {
      this._dropDownMessage = "Attach file";
    } else {
      this._dropDownMessage = "Select file";
    }
  }

  public SetFileSavedStatusOnsharePoint(sharePointResponseList: SharePointResponse[]): RFPFile[] {

    let sharePointUnsaveFileList: RFPFile[] = [];
    for (let index = 0; index < sharePointResponseList.length; index++) {
      const sharePointDocUploadResponse = sharePointResponseList[index];
      let fileIndex: number = this.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == sharePointDocUploadResponse.FileName)
      let rfpFile: RFPFile = this.RFPOpportunity.RfpFileList[fileIndex];
      if (sharePointDocUploadResponse.Status == true) {

        rfpFile.SavedSharePoint = true;
        rfpFile.FilePathSharePoint = sharePointDocUploadResponse.FilePath;
      } else {

        sharePointUnsaveFileList.push(rfpFile)
        this.RFPOpportunity.RfpFileList.splice(fileIndex, 1);
      }
    }
    return sharePointUnsaveFileList;
  }


  DeleteRfpFile(formData: FormData): Observable<any> {

    return this.rfpManipulationWebApiService.DeleteRfpFile(formData);
  }

  CreateEmptyOpportunity(formData: FormData): Observable<any> {

    return this.rfpManipulationWebApiService.CreateEmptyOpportunity(formData);
  }

  SaveFiles(formData: FormData): Observable<any> {
    return this.rfpManipulationWebApiService.SaveFiles(formData);
  }
  ViewDocument(formData: FormData): Observable<any> {

    return this.rfpManipulationWebApiService.ViewDocument(formData);

  }

  public GetCategoryNameList(): Observable<any> {

    return this.rfpManipulationWebApiService.GetCategoryNameList();

  }

  public UploadFilesSharePoint(formData: FormData): Observable<any> {

    return this.sharepointService.UploadFilesSharePoint(formData);

  }

  public SaveChangedCategoriesAndSummaryData(formData: FormData): Observable<any> {
    // let body = JSON.stringify(formData);
    return this.rfpManipulationWebApiService.SaveChangedCategoriesAndSummaryData(formData);
  }

  public GetSavedEmptyOpportunity(opportunityId: number, documentUploadComponent: DocumentUploadComponent) {

    if (this.progressSpinnerService.isLoading == false) {
      this.progressSpinnerService.isLoading = true;
    }
    this.rfpManipulationWebApiService.GetSavedEmptyOpportunity(opportunityId).subscribe(
      res => this.GetSavedEmptyOpportunityResponse(res, documentUploadComponent),
      err => documentUploadComponent.UploadError(err)
    );
  }

  private GetSavedEmptyOpportunityResponse(webResponse: WebResponse<SavedEmptyOpportunityRes>, documentUploadComponent: DocumentUploadComponent) {

    if (webResponse.code == '1') {
      documentUploadComponent.CleanFormControls();
      this.PopulateRFPOpertunity(webResponse.response);
      
      this.TogglingEnableDisableButton();
      this.SetNumberOfFileSatusCount();
      documentUploadComponent.GetSaveEmptyOpportunity(this._RFPOpportunity);
      this.progressSpinnerService.isLoading = false;
    } else if (webResponse.code == "2") {

      this.progressSpinnerService.isLoading = false;
      this.notification.error("'Something bad happened. Please try again later.'");
    } else {
      if (webResponse.code !== undefined) {
        this.progressSpinnerService.isLoading = false;

        this.notification.error("'Something bad happened. Please try again later.'");
      }
    }
  }




  PopulateRFPOpertunity(savedEmptyOpportunityResponse: SavedEmptyOpportunityRes) { 
    let rfpOpportunity = new RFPOpportunity();

    rfpOpportunity.OpportunityId = savedEmptyOpportunityResponse.OpportunityId.toString();
    rfpOpportunity.OpportunityName = savedEmptyOpportunityResponse.OpportunityName;

    for (let index = 0; index < savedEmptyOpportunityResponse.RfpDocumentViewModel.length; index++) {
      const RfpDocument = savedEmptyOpportunityResponse.RfpDocumentViewModel[index];

      let rfpfile: RFPFile = new RFPFile({
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

    let summaryFieldList: Array<SummaryField> = new Array();
    for (let index = 0; index < savedEmptyOpportunityResponse.RfpSummaryViewModel.length; index++) {
      const summary: RfpSummaryViewModel = savedEmptyOpportunityResponse.RfpSummaryViewModel[index];
      let summaryField: SummaryField = new SummaryField(summary.FieldDisplayName, summary.ControlType,
        summary.FieldText, summary.DisplayOrder, summary.FiledTypeId);
      summaryFieldList.push(summaryField);
    }

    let categoryDataList: Array<CategoryData> = new Array();
    for (let index = 0; index < savedEmptyOpportunityResponse.RfpCategoryDataViewModel.length; index++) {

      const rfpCategoryData: CategoryData = savedEmptyOpportunityResponse.RfpCategoryDataViewModel[index];

      let categoryData: CategoryData = new CategoryData;
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
    this._RFPOpportunity = new RFPOpportunity()
    this._selectedFileName = undefined;
    this._numberOfSavedfile = '';
    this._numberOfParssedfile = '';
  }

  UpdateCategoryData(categoryDataList: Array<CategoryData>) {
 
    let categoryDataArray: CategoryData;
    for (let index = 0; index < categoryDataList.length; index++) {
      
      let catIndex: number = this._RFPOpportunity.CatetoryDataList.findIndex(cat => cat.CategoryId == categoryDataList[index].CategoryId);
 
      if (categoryDataList[index].CategoryData.includes("drop text here")) {
        categoryDataList[index].CategoryData.trim();
        this._RFPOpportunity.CatetoryDataList.splice(catIndex,1);
        
      }else{
        if (catIndex != -1) {
          // check if id exists in data array list
          categoryDataArray = this._RFPOpportunity.CatetoryDataList[catIndex];
          categoryDataArray.CategoryData = categoryDataList[index].CategoryData; // update category data 
        }
        else{
          this._RFPOpportunity.CatetoryDataList.push(categoryDataList[index]);
        }
      }
    }
 
  }
}
