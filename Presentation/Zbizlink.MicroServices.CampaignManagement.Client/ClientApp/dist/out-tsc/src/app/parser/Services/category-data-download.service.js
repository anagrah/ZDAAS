import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { asBlob } from 'html-docx-js-typescript';
//import {Workbook} from 'exceljs';
import * as fs from 'file-saver';
import { CategorydataDownloadComponent } from 'src/app/parser/Components/Dialogs/categorydata-download/categorydata-download.component';
let CategoryDataDownloadService = class CategoryDataDownloadService {
    constructor(documentUploadService, dialogService, notification, progressSpinnerService) {
        this.documentUploadService = documentUploadService;
        this.dialogService = dialogService;
        this.notification = notification;
        this.progressSpinnerService = progressSpinnerService;
        // category: string;
        this.categoryArray = [];
        this.filteredOpportunityDataArray = [];
        this.categoryArray = [];
    }
    ;
    // Added by Kashif
    downloadCategoryData() {
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
    export(res) {
        let categoryDownload = res;
        if (categoryDownload.Ok = true) {
            let categoryListData = [];
            if (categoryDownload.SelectedCategory.length > 0 || categoryDownload.wholeDocumentNo == true) {
                for (let index = 0; index < categoryDownload.SelectedCategory.length; index++) {
                    let savedCategoryDataIndex = this.documentUploadService.RFPOpportunity.CatetoryDataList.findIndex(c => c.CategoryId == parseInt(categoryDownload.SelectedCategory[index]));
                    let dbCategoryData = this.documentUploadService.RFPOpportunity.CatetoryDataList[savedCategoryDataIndex];
                    categoryListData.push(dbCategoryData);
                }
            }
            else {
                categoryListData = this.documentUploadService.RFPOpportunity.CatetoryDataList;
            }
            categoryListData.sort((a, b) => a.CategoryId - b.CategoryId); // Sort categories  
            if (categoryDownload.ExportToExcel == true) {
                // check cases for all or for parts of categories
                this.exportToExcel(categoryListData);
            }
            else {
                this.htmlToWordExport(categoryListData);
            }
        }
    }
    // Export to Excel
    exportToExcel(categoryListData) {
        if (this.progressSpinnerService.isLoading == false) {
            this.progressSpinnerService.isLoading = true;
        }
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const fileName = this.documentUploadService.RFPOpportunity.OpportunityName + '_';
        let dataCategoryListForExcelExport = [];
        categoryListData.forEach(function (value) {
            if (value != undefined) {
                let categoryName = "";
                if (value.CategoryData != "") {
                    categoryName = value.Name;
                    if (categoryName != null || categoryName != "")
                        dataCategoryListForExcelExport.push({ Name: categoryName });
                    var doc = (new DOMParser).parseFromString(value.CategoryData, "text/html");
                    let dataCategoryList = doc.querySelector("body");
                    [].forEach.call(dataCategoryList.children, (item, index) => {
                        let hasElement = item.hasAttribute("data-cat");
                        dataCategoryListForExcelExport.push({ Category: item.innerText });
                    });
                }
            }
        });
        if (dataCategoryListForExcelExport.length > 0) {
            const ws = XLSX.utils.json_to_sheet(dataCategoryListForExcelExport, { header: ["Name", "Category"], skipHeader: true });
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            /* save to file */
            XLSX.writeFile(wb, fileName + new Date().getTime() + EXCEL_EXTENSION);
        }
        else
            this.notification.warning("No data exist in this category.");
        this.progressSpinnerService.isLoading = false;
    }
    // Export to word document
    htmlToWordExport(categoryListData) {
        if (this.progressSpinnerService.isLoading == false) {
            this.progressSpinnerService.isLoading = true;
        }
        const header = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body>`;
        const footer = `</body></html>`;
        let categoryDataOutPut = "";
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
                fs(data, fileName + new Date().getTime() + Word_Extension); // save as docx file
            });
        }
        else
            this.notification.warning("No data exist in this category.");
        this.progressSpinnerService.isLoading = false;
    }
};
CategoryDataDownloadService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoryDataDownloadService);
export { CategoryDataDownloadService };
//# sourceMappingURL=category-data-download.service.js.map