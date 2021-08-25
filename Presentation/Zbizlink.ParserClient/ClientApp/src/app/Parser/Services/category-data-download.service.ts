import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { asBlob } from 'html-docx-js-typescript';
//import {Workbook} from 'exceljs';
import * as fs from 'file-saver';
//import * as docx from "docx";
//import { Document, Packer, Paragraph, TextRun, PictureRun, IParagraphOptions } from "docx";
import { CategoryData } from '../Models/CategoryData';
import { CategoryDownload } from 'src/app/parser/Models/CategoryDownload';
import { CategorydataDownloadComponent } from 'src/app/parser/Components/Dialogs/categorydata-download/categorydata-download.component';
//import { ProgressSpinnerService } from '../../shared/Services/progress-spinner.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DocumentUploadService } from '../services/document-upload.service';
import { CategoryName } from 'src/app/parser/models/CategoryName';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryDataDownloadService {
  
  // category: string;
  categoryArray: Array<any> = [];
  filteredOpportunityDataArray: Element[] = [];

  constructor(
    public documentUploadService: DocumentUploadService,
    private dialogService: DialogService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService) {
    this.categoryArray = []
  };



  // Added by Kashif
 public downloadCategoryData() {
    // show popup diloge asking type of download 
    let data = { CategoryNameList: this.documentUploadService.CategoryNameList };
    const matDialogRef = this.dialogService.openDialog({
      data: data,
      width: '350px',
      dailogComponent: CategorydataDownloadComponent
    });
    matDialogRef.afterClosed().subscribe(res => {
      if (res !== undefined) { 
       this.export(res);
      }
    });
  }

 private export(res: any){
    let categoryDownload: CategoryDownload = res;
        if (categoryDownload.Ok = true) {
          let categoryListData = [];
          if (categoryDownload.SelectedCategory.length > 0 || categoryDownload.wholeDocumentNo == true) {
            for (let index = 0; index < categoryDownload.SelectedCategory.length; index++) {
              let savedCategoryDataIndex: number = this.documentUploadService.RFPOpportunity.CatetoryDataList.findIndex(c => c.CategoryId == parseInt(categoryDownload.SelectedCategory[index]));
              let dbCategoryData: CategoryData = this.documentUploadService.RFPOpportunity.CatetoryDataList[savedCategoryDataIndex];
              categoryListData.push(dbCategoryData);
            }
          } else {
            categoryListData = this.documentUploadService.RFPOpportunity.CatetoryDataList;
          } 
          categoryListData.sort((a,b)=> a.CategoryId-b.CategoryId); // Sort categories  
          if (categoryDownload.ExportToExcel == true) {
            // check cases for all or for parts of categories
            this.exportToExcel(categoryListData);
          } else {
            this.htmlToWordExport(categoryListData);
          }
        }
  }

  // Export to Excel
 private exportToExcel(categoryListData) {
    if (this.progressSpinnerService.isLoading == false) {
      this.progressSpinnerService.isLoading = true;
    }
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = this.documentUploadService.RFPOpportunity.OpportunityName + '_';
    let dataCategoryListForExcelExport = [];
    categoryListData.forEach(function (value) {
      if (value != undefined) {
        let categoryName: String = "";
        if (value.CategoryData != "") {
          categoryName = value.Name;
          if (categoryName != null || categoryName != "")
            dataCategoryListForExcelExport.push({ Name: categoryName });
          var doc = (new DOMParser).parseFromString(value.CategoryData, "text/html");
          let dataCategoryList = doc.querySelector("body");
          [].forEach.call(dataCategoryList.children, (item: HTMLElement, index: number) => {
            let hasElement: boolean = item.hasAttribute("data-cat");
            dataCategoryListForExcelExport.push({ Category: item.innerText });
          });
        }
      }
    });

    if (dataCategoryListForExcelExport.length > 0) {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataCategoryListForExcelExport, { header: ["Name", "Category"], skipHeader: true });
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      /* save to file */
      XLSX.writeFile(wb, fileName + new Date().getTime() + EXCEL_EXTENSION);
    }
    else
      this.notification.warning("No data exist in this category.");
    this.progressSpinnerService.isLoading = false;
  }

  // Export to word document
 private htmlToWordExport(categoryListData) {
    if (this.progressSpinnerService.isLoading == false) {
      this.progressSpinnerService.isLoading = true;
    }
    const header = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body>`;
    const footer = `</body></html>`;
    let categoryDataOutPut: string = "";
    const Word_Extension = '.docx';
    var replacedCategoryData;
    const fileName = this.documentUploadService.RFPOpportunity.OpportunityName + '_';
    categoryListData.forEach(function (value) {
      if (value != undefined && value.CategoryData != "") { // For later use this  //  height: 16.35pt; border: 0.48pt solid #000000; background-color: #d9d9d9;| width: 488.05pt; height: 16.35pt; border: 0.48pt solid #000000; background-color: #dfdfdf; | width: 488.05pt; height: 15.40pt; border: 0.48pt solid #000000; background-color: #d9d9d9;
        replacedCategoryData = value.CategoryData.replace(/width: 488.05pt;/g, "margin-left: 0px; margin-right: 0px; width: 50%; height: 0px; border: 0.48pt solid #000000; background-color: #d9d9d9;");
        categoryDataOutPut += replacedCategoryData + '<br>';
      }
    });
    if (categoryDataOutPut != "") {
      const categoryListHtmlString = header + categoryDataOutPut + footer;
      asBlob(categoryListHtmlString).then(data => {
        fs(data, fileName + new Date().getTime() + Word_Extension);// save as docx file
      })
    }
    else
      this.notification.warning("No data exist in this category.");

    this.progressSpinnerService.isLoading = false;
  }
  // End of exporting word docx
}
