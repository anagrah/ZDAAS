

import { Component, OnInit, ViewChild } from '@angular/core';

import { DragulaService } from 'ng2-dragula';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TinymceComponent } from '../Dialogs/tinymce/tinymce.component';
import { InsertCategoryAttributeService } from '../../../shared/services/insert-category-attribute.service';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { DocumentSummaryComponent } from '../document-summary/document-summary.component';
import { SummaryField } from '../../Models/SummaryField';
import { NotificationService } from '../../../shared/services/notification.service';
import { ValidateChangeInDataService } from '../../services/ValidateChangeInDataService';
import { OppertunityCategory } from '../../models/OppertunityCategory';
//import { DocUploadResponse } from '../../models/DocUploadResponse';
import { DocumentUploadService } from '../../services/document-upload.service';
import { RFPFile } from '../../Models/RFPFile';
import { CategoryName } from 'src/app/parser/models/CategoryName';
import { RFPManipulationWebApiService } from '../../services/rfpmanipulation-web-api.service';
import { RFPOpportunity } from '../../Models/RFPOpportunity';

import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import{CategoryDataDownloadService} from '../../Services/category-data-download.service'
import { WebResponse } from 'src/app/shared/models/WebResponse';
import { AutoParsingRes } from '../../Models/AutoParsingRes';
import { DeleteFileRes } from '../../Models/DeleteFileRes';
@Component({
  selector: 'app-document-parser-form',
  templateUrl: './document-parser-form.component.html',
  styleUrls: ['./document-parser-form.component.css']
})
export class DocumentParserFormComponent implements OnInit {
  documentNameList: any;
  selectedfileDropDownValue: string;
  //isLoading: boolean = false;
  isSummary: boolean = false;
  @ViewChild(DocumentSummaryComponent, { static: true }) documentSummaryComponent: DocumentSummaryComponent;
  @ViewChild(ContextMenuComponent, { static: true }) public basicMenu: ContextMenuComponent;
  @ViewChild(DocumentUploadComponent, { static: true }) documentUploadComponent: DocumentUploadComponent;
  subs = new Subscription();
  


  //fileUploadComponent: FileUploadComponent;
  category: string;
  categoryArray: Array<any> = [];
  categoryName: string;
  catValues: Array<any> = [];
  RfpDataArray: Element[] = [];
  uploadError: string;

  filteredOpportunityDataArray: Element[] = [];

  summaryFieldArray: Array<SummaryField>;
  documentID: string;
  documentName: string;
  opportunityName: string;
  redirectURL:string;
  //.....
  CategoryData: Array<any>;
  oppertunityCategoryArray: Array<OppertunityCategory>; // new by Nisar
  

  constructor(private route: ActivatedRoute,
    public documentUploadService: DocumentUploadService,
    public categoryDataDownloadService:CategoryDataDownloadService,
    private rfpManipulationWebApiService: RFPManipulationWebApiService,
    private dragulaService: DragulaService,
    private dialog: MatDialog,
    private insertCategoryAttributeService: InsertCategoryAttributeService,
    private router: Router,
    private notification: NotificationService,
    private validateChange: ValidateChangeInDataService,
    public progressSpinnerService: ProgressSpinnerService) {
    this.categoryArray = []
    this.oppertunityCategoryArray = new Array<OppertunityCategory>();

    router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationStart) {
          // Show loading indicator
        }
        if (event instanceof NavigationEnd) {


        }
        if (event instanceof NavigationError) {



        }
      });
    //................
  };

  documentId: string; // temp


  ngOnInit() {
debugger;
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirectURL =  'campaign';
	  } 
    else{
      this.redirectURL = 'parser';
    }
    // else if(localStorage.getItem('Token')){ // checking for parser user
    //   this.redirectURL = 'parser';
    // }
    this.dragulaConfig();
    this.RouteParam();
    this.getRoutParamsBizlink();
    this.documentId = localStorage.getItem('documentId');

  }

  onPopulateCategoryNameList(categoryNameList: CategoryName[]) {
    this.categoryArray = categoryNameList;
  }

  getRoutParamsBizlink(): void {

    let companyid = "";
    let userid = "";
    let rfpdocumentid = "";
    this.route.queryParamMap.subscribe(params => {
      //console.log('>>>>>getRoutParamsBizlink<<<<<');
      if (params.has('companyid') && params.has('userid') && !params.has('rfpdocumentid') && !params.has('companySegmentID')) {

        companyid = params.get('companyid');
        userid = params.get('userid');
        // alert("*******  Welcome *******  \n You're landing from Bizlink with ! \n  company Id = "+companyid +"user Id = "+ userid);
        //console.log('>>>>>getRoutParamsBizlink>>call 1<<<<<');
        this.getSavedDocInfo(companyid, userid, null);
      }
      else if (params.has('rfpdocumentid')) {
        rfpdocumentid = params.get('rfpdocumentid');
        //console.log('>>>>>getRoutParamsBizlink>>call 2<<<<<');
        this.getSavedDocInfo(null, null, rfpdocumentid);
      }
    });

  }

  activeClass(cat) {
    //console.log(cat);+









    cat.active = true;
  }

  onRfpDocumentNameReceived(docNameList: any): void {

    this.documentNameList = docNameList;
  }

  fileDropDownSelectedValue(name: string): void {
    
    this.selectedfileDropDownValue = name;
  }

  onOpportunityDataOnCreationTransfer(): void {
    
    //this.ClearForm();
    //this.documentName = docUploadResponse.documentName;// rfpDocument[4];
    //this.categoryArray = docUploadResponse.category;// rfpDocument[1];
    //let data: string = docUploadResponse.document;// rfpDocument[0];
    this.summaryFieldArray = this.documentUploadService.RFPOpportunity.SummaryFieldList; //docUploadResponse.summary;// rfpDocument[2];
    //this.documentID = docUploadResponse.documentId;// rfpDocument[3];
    //this.documentName = docUploadResponse.documentName;// rfpDocument[4];
    this.CategoryData = []// docUploadResponse.CategoryData;// rfpDocument[5];
    //this.LoadRfpData(data, "fromFileUpload");
    this.documentSummaryComponent.createGroup(this.summaryFieldArray);
    this.fillOppeCatArray(this.categoryArray, this.CategoryData);
    this.RouteParam();
    //}
    //}
  }

  // RfpDocumentReceived(docUploadResponse: DocUploadResponse): void {
  //   this.ClearForm();
  //   this.documentName = docUploadResponse.documentName;// rfpDocument[4];
  //   this.categoryArray = docUploadResponse.category;// rfpDocument[1];
  //   let data: string = docUploadResponse.document;// rfpDocument[0];
  //   this.summaryFieldArray = docUploadResponse.summary;// rfpDocument[2];
  //   this.documentID = docUploadResponse.documentId;// rfpDocument[3];
  //   this.documentName = docUploadResponse.documentName;// rfpDocument[4];
  //   this.CategoryData = docUploadResponse.CategoryData;// rfpDocument[5];
  //   this.LoadRfpData(data, "fromFileUpload");
  //   this.documentSummaryComponent.createGroup(this.summaryFieldArray);
  //   this.fillOppeCatArray(this.categoryArray, this.CategoryData);
  //   this.RouteParam();
  //   //}
  //   //}
  // }

  onShowRFPDocument(): void {
    this.RfpDataArray = [];
    let rfpFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == this.documentUploadService.SelectedFileName)

    if (rfpFileIndex == -1) {
     this.RfpDataArray = [];
      return;
    }

    if (rfpFileIndex == -1) {
      this.documentName = '';
      this.opportunityName = this.documentUploadService.RFPOpportunity.OpportunityName;
      this.RfpDataArray = [];
      return;
    }
    let rfpfile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[rfpFileIndex];

    if (rfpfile.HTMLFile === undefined || rfpfile.HTMLFile === null || rfpfile.HTMLFile == '') {
      this.documentName = '';
      this.opportunityName = this.documentUploadService.RFPOpportunity.OpportunityName;
      this.RfpDataArray = [];
      return;
    }

    this.documentName = rfpfile.FileName;
    this.opportunityName = this.documentUploadService.RFPOpportunity.OpportunityName;

    let doc = new DOMParser().parseFromString(rfpfile.HTMLFile, "text/html");
    let div = doc.querySelector("div");
    this.loadLeftPaneData(div.children);


  }



  fillOppeCatArray(categoryArray: Array<any>, CategoryData: Array<any>) {

debugger;
// if (CategoryData === undefined || CategoryData === null  ) {
//   if (categoryArray !== undefined && categoryArray !== null && categoryArray.length > 0) {
//     categoryArray.forEach((element) => {
    
//     });
//   }
// }

    let self = this;
    if (categoryArray != null && categoryArray.length > 0) {
      if (this.oppertunityCategoryArray.length > 0) {
        this.oppertunityCategoryArray.length = 0
        this.oppertunityCategoryArray = [];
      }


      categoryArray.forEach(cat => {

        let ObjOppCat = new OppertunityCategory();
        ObjOppCat.categoryId = null;
        ObjOppCat.categoryName = null;

        if (ObjOppCat.categoryData) {
          ObjOppCat.categoryData.length = 0;
          ObjOppCat.categoryData = [];
        }

        ObjOppCat.categoryId = cat.CategoryId;
        ObjOppCat.categoryName = cat.Name;

        let data: any = {};

        if (CategoryData) {

          data = CategoryData.filter((item) => {
            if (item.CategoryId == cat.CategoryId) return item.CategoryData;
          }).shift();
          if (data != undefined) {
            //  
            ObjOppCat.categoryData = this.RestDataIndexAttribute(data.CategoryData);

            self.oppertunityCategoryArray.push(ObjOppCat);
          } else {
            ObjOppCat.categoryData = this.CreateElementForEmptyCategory(ObjOppCat.categoryId);
            self.oppertunityCategoryArray.push(ObjOppCat);
          }
        }
      });
    }
  }

  dragulaConfig() {

    let newAddElement: Element;
    let siblingOfNewAddElement: Element;
    let isNewElement: Boolean;
    let sourceIndexId: number;
    let targetIndexId: number;
    let sourceId: string;
    let siblingCopy: Element;
    let isCopied: boolean;
    this.dragulaService.createGroup('Copy', {
      direction: 'horizontal',
      copy: (element: Element, source) => {

        console.log(source.id);
        return source.id === 'left';
      },

      copyItem: (element: Element) => {
        console.log("copyItem");
        console.log(element);
        isNewElement = true;
        element.setAttribute("data-new", "true");
        this.AddDocumentIdInNewAddNode(element);
        return <Element>element.cloneNode(true);
      },

      accepts: (el, target) => {
        console.log("accept");
        console.log(target.id);
        return target.id !== 'left';

      }
    });



    this.subs.add(this.dragulaService.dropModel("Copy")
      .subscribe(({ source,
        sibling,
        sourceIndex,
        targetIndex }) => {

        if (source.id == 'right') {
          //console.log("Source Index >>>>> "+sourceIndex);
          //console.log("target Index >>>>> "+targetIndex);
          sourceIndexId = sourceIndex;
          targetIndexId = targetIndex;
          sourceId = source.id;
          siblingCopy = sibling;
          isCopied = true;
        }
        siblingOfNewAddElement = sibling;

      })
    );

    this.subs.add(this.dragulaService.dragend("Copy")
      .subscribe(({ el }) => {
        //console.log("dragend");
        if (isNewElement === true) {

          newAddElement = el.querySelector("div *");

          this.ResetOppertunityDataListNewAddElement(newAddElement, siblingOfNewAddElement);
          isNewElement = false;
        } else {


          //
          if (sourceId == 'right' && isCopied === true) {
            isCopied = false;
            this.copyNodes(sourceIndexId, targetIndexId, siblingCopy, el);
          }
        }
      })
    );

  }

  copyNodes(sourceIndex, targetIndex, sibling, el) {
    //
    if (sourceIndex > targetIndex) {
      let asibling = sibling.querySelector("div *");
      let siblingIndex = asibling.getAttribute("data-index").valueOf();
      // console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");
      let siblingNode = this.filteredOpportunityDataArray.find(n => n.getAttribute("data-index").valueOf() === siblingIndex);
      // console.log("Sibling Node"+ siblingNode);
      let index = this.filteredOpportunityDataArray.indexOf(siblingNode);
      var diffIndex = sourceIndex - targetIndex;
      var getsiblingIndex: number = +index;
      var gettargetIndex: number = +index;
      if (gettargetIndex >= 0) {
        //console.log(getsourceIndex);
        //console.log(this.filteredOpportunityDataArray.length);
        //console.log(index);
        var newAddElementCopy = el.querySelector("div *");
        this.ResetOppertunityDataListCopyElement(newAddElementCopy, sibling, diffIndex, true);
        //console.log(newAddElementCopy);
        this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, this.filteredOpportunityDataArray.length, this.categoryName);
        this.resetDataIndexAttr();
        this.pushIntoFilteredArray();
      }
    }
    else {
      //console.log(sibling);

      if (sibling != null) {
        let asibling = sibling.querySelector("div *");
        let siblingIndex = asibling.getAttribute("data-index").valueOf();
        // console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");
        let siblingNode = this.filteredOpportunityDataArray.find(n => n.getAttribute("data-index").valueOf() === siblingIndex);
        // console.log("Sibling Node"+ siblingNode);
        let index = this.filteredOpportunityDataArray.indexOf(siblingNode);
        var diffIndex = targetIndex - sourceIndex;
        // console.log(diffIndex);
        var getsiblingIndex: number = +index;
        var gettargetIndex = getsiblingIndex;
        //console.log(getsourceIndex);
        //console.log(getsiblingIndex);
        //console.log(index);
        var newAddElementCopy = el.querySelector("div *");
        this.ResetOppertunityDataListCopyElement(newAddElementCopy, sibling, diffIndex, false);

      }
      else {
        el.setAttribute("data-new", "true");
        var newAddElementCopy = el.querySelector("div *");
        var diffIndex = targetIndex - sourceIndex;
        if (this.filteredOpportunityDataArray.length > 15) {
          this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length, 0, newAddElementCopy);
          this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length - (diffIndex + 2), 1);
        }
        else {
          this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length, 0, newAddElementCopy);
          this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length - 1, 1);
        }
        newAddElementCopy.removeAttribute("data-new");
        this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, this.filteredOpportunityDataArray.length, this.categoryName);
        this.resetDataIndexAttr();
        this.pushIntoFilteredArray();
      }
    }
  }

  ResetOppertunityDataListCopyElement(newAddElement: Element, sibling: Element, diffIndex: number, direction: boolean): void {
    //console.log(">>>>>>add node index--"+ addNodeIndex+"--<<<<<<");


    let index: number;
    if (sibling != null) {
      let asibling = sibling.querySelector("div *");
      let siblingIndex = asibling.getAttribute("data-index").valueOf();
      // console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");
      let siblingNode = this.filteredOpportunityDataArray.find(n => n.getAttribute("data-index").valueOf() === siblingIndex);
      index = siblingNode == null ? 0 : this.filteredOpportunityDataArray.indexOf(siblingNode);
    }
    else {
      index = this.filteredOpportunityDataArray.length;
    }
    if (index > 15) {

      if (direction) {
        this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
        this.filteredOpportunityDataArray.splice(index + diffIndex + 1, 1);
        //console.log("Length >>>>> "+this.filteredOpportunityDataArray.length);
      }
      else {
        this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
        this.filteredOpportunityDataArray.splice(index - (diffIndex + 1), 1);
        this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, index, this.categoryName);
        this.resetDataIndexAttr();
        this.pushIntoFilteredArray();
      }
      //newAddElement.removeAttribute("data-new");
    }
    else {
      if (direction) {


        if (this.filteredOpportunityDataArray.length < 15) {
          this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
          if (this.filteredOpportunityDataArray.length > 9) {
            this.filteredOpportunityDataArray.splice(diffIndex + index + 1, 1);
          }
          else {
            this.filteredOpportunityDataArray.splice(index - 1, 1);
          }
        }
        else {
          if (this.filteredOpportunityDataArray.length > 9 && index < 15) {
            //this.filteredOpportunityDataArray.splice(index,0,newAddElement);
            //this.filteredOpportunityDataArray.splice(diffIndex + index + 1,1);
          }
          else {
            this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
            this.filteredOpportunityDataArray.splice(index - 1, 1);
          }
        }
      }
      else {
        
        if (diffIndex > index) {

          this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
          this.filteredOpportunityDataArray.splice(diffIndex + (index + 1), 1);
          this.pushIntoFilteredArray();
        }
        else {

          this.pushIntoFilteredArray();
        }
      }

    }

    //console.log(">>>>>>Sibling Index -->"+ index +"<--<<<<<<");
  }

  ResetOppertunityDataListNewAddElement(newAddElement: Element, sibling: Element): void {
    // 
    try {

      this.RemoveEmptyElement();

      let addNodeIndex = this.filteredOpportunityDataArray.findIndex(line => line.getAttribute("data-new") == "true");
      //console.log(">>>>>>--"+ addNodeIndex+"--<<<<<<");
      this.filteredOpportunityDataArray.splice(addNodeIndex, 1);
      let index: number;
      let indexSibling: number;
      let indexInArr = 0;
      if (sibling != null) {
        let asibling = sibling.querySelector("div *");
        //console.log(">>>>>>Sibling Index -->"+ asibling +"<--<<<<<<");
        let siblingIndex = asibling.hasAttribute("data-index") ? asibling.getAttribute("data-index").valueOf() : 0;
        //console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");
        let siblingNode = this.filteredOpportunityDataArray.find(n => n.getAttribute("data-index").valueOf() === siblingIndex);
        index = siblingNode == null ? 0 : this.filteredOpportunityDataArray.indexOf(siblingNode);
        //index =  this.filteredOpportunityDataArray.length ===1 ? 0 : null;
      }
      else {
        index = this.filteredOpportunityDataArray.length;
      }

      if (index != null) {
        //console.log("---->"+index+"<------");
        let dataKey = newAddElement.getAttribute('data-key') == null ? "" : newAddElement.getAttribute('data-key').valueOf();
        newAddElement.innerHTML
        //add new element
        newAddElement.removeAttribute("data-new");
        newAddElement.removeAttribute("data-key");
        if (dataKey != "") {
          for (var i = 0; i < this.RfpDataArray.length; i++) {

            indexInArr = newAddElement.innerHTML === this.RfpDataArray[i].innerHTML ? i : 0
            if (indexInArr > 0)
              break;
          }
          console.log("----" + this.RfpDataArray[i].getAttribute('data-key') + "----" + indexInArr);
          indexSibling = index;
          for (var kk = indexInArr; kk < this.RfpDataArray.length; kk++) {
            var getDataKey = this.RfpDataArray[kk].getAttribute('data-key');
            if (getDataKey != null) {
              //console.log(">>>>>>>>>>>>>>> -- index --"+kk+""+this.RfpDataArray[kk]+"-->DK-->"+getDataKey+"<<<<<<<<<<<<<");
              var parentKey = dataKey.split('/');
              //console.log(">>>>>>>>>>>>>>>"+parentKey+'<<<<<<<<<<<<<<');
              var childKey = getDataKey != null ? getDataKey.split('/') : [0];
              var consParentKey = "";
              var consChildKey = "";
              console.log("---------" + childKey + "---------");
              if (childKey.length >= parentKey.length) {
                for (var l = 0; l < parentKey.length; l++) {
                  consParentKey += parentKey[l];
                  consChildKey += childKey[l];
                }
                //console.log(">>>>>>>>>>>>>>>"+consParentKey+"---"+consChildKey+"--<<<<<<<<<<<<<");
                if (consParentKey === consChildKey) {
                  if (indexSibling === index) {
                    this.filteredOpportunityDataArray.splice(index, 0, this.RfpDataArray[kk]);
                    indexSibling = indexSibling + 1;
                  }
                  else {
                    this.filteredOpportunityDataArray.splice(indexSibling, 0, this.RfpDataArray[kk]);
                    indexSibling = indexSibling + 1;
                  }
                  //console.log(">>>>>>>>>>>>>>>--matched Child--> "+getDataKey+"--<<<<<<<<<<<<<");
                } else { break; }
              }
            }
          }
        }
        else {
          if (sibling != null) {
            this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
          }
          else {
            this.filteredOpportunityDataArray.push(newAddElement);
          }
        }

        this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, index, this.categoryName);
        this.resetDataIndexAttr();
        this.pushIntoFilteredArray();

      }
    }
    catch (error) {
      //console.log("---->"+this.filteredOpportunityDataArray.length+"<----");
      //console.log(">>>>>>>>>>>>>>>Error--> "+error+"--<<<<<<<<<<<<<");
    }
  }

  resetDataIndexAttr(): void {
    let datakey: string = "";
    for (let index = 0; index < this.filteredOpportunityDataArray.length; index++) {
      this.filteredOpportunityDataArray[index].setAttribute("data-index", index.toString());
      this.filteredOpportunityDataArray[index].setAttribute("data-cat", "");
      //............. setting data-key    start
      if (!this.filteredOpportunityDataArray[index].hasAttribute("data-key")) { // if data-key attr is not present

        this.filteredOpportunityDataArray[index].setAttribute("data-key", index.toString());

        if (index - 1 !== -1) {
          datakey = this.filteredOpportunityDataArray[index - 1].getAttribute("data-key");
          this.filteredOpportunityDataArray[index].setAttribute("data-key", datakey);
          //console.log( datakey,this.filteredOpportunityDataArray[index-1].outerHTML);
        }
        else {
          if (this.filteredOpportunityDataArray[index + 1] != undefined) {
            datakey = this.filteredOpportunityDataArray[index + 1].getAttribute("data-key");
            this.filteredOpportunityDataArray[index].setAttribute("data-key", datakey);
          }
        }
      }
      //.............  setting data-key    end
    }
  }

  LoadRfpData(rfpDoc: string, flag: string): void {
    if (rfpDoc != null) {
      let doc = new DOMParser().parseFromString(rfpDoc, "text/html");
      let div = doc.querySelector("div");
      switch (flag) {
        case 'fromFileUpload':
          this.loadLeftPaneData(div.children);
          //this.loadOppertunityData(doc);
          break;
        case "fromDbExistingFile":
          this.loadLeftPaneData(div.children);
          break
      }
    }
    else {
      this.RfpDataArray.length = 0;
      this.RfpDataArray = [];
      this.filteredOpportunityDataArray.length = 0;
      this.filteredOpportunityDataArray = [];
      this.isSummary = false;

    }
  }

  loadLeftPaneData(htmlCollection: HTMLCollection): void {

    [].forEach.call(htmlCollection, (item: HTMLElement) => {
      item.setAttribute("data-draggable", "true");
      //item.style.cursor = "move";
      this.RfpDataArray.push(item);
    });
    this.RfpDataArray = Array.from(this.RfpDataArray);
  }


  RestDataIndexAttribute(stringHtml: any): Array<Element> {
    let dataCategoryList = [];
    let dataCategoryListElements: Array<Element> = [];
    let doc = new DOMParser().parseFromString(stringHtml, "text/html");
    dataCategoryList = Array.from(doc.querySelectorAll("[data-cat]"));

    [].forEach.call(dataCategoryList, (item: HTMLElement, index: number) => {
      item.setAttribute("data-index", index.toString());
      dataCategoryListElements.push(item);

    });
    return dataCategoryListElements;
  }

  RouteParam(): void {

    this.route.queryParamMap.subscribe(params => {

      this.categoryName = params.get('category');

      console.log(this.categoryName);
      if (this.categoryName == 'summary') {
        this.filteredOpportunityDataArray = [];
        this.isSummary = true;
      }
      else if (this.categoryName === null && (typeof this.categoryArray !== "undefined")) {

        this.categoryName = 'summary';
        this.isSummary = true;
      }
      else {
        this.isSummary = false;

        this.filteredOppoertunity();
        if (this.filteredOpportunityDataArray.length > 0) {

          this.validateChange.initData(this.filteredOpportunityDataArray);
        }
      }
    });
  }


  filteredOppoertunity(): void {
    let categoryId = this.categoryName;
    var obj: OppertunityCategory = this.oppertunityCategoryArray.find(element => {
      return element.categoryId == categoryId;
    });
    this.filteredOpportunityDataArray = obj != undefined ? obj.categoryData : [];
  }


  OpenEditor(event: any) {
    event[0].stopPropagation(event[0]);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
  
    dialogConfig.data = {
      id: 1,
      title: 'Editor',
      opportunityData: this.filteredOpportunityDataArray
    };

    const dialogRef = this.dialog.open(TinymceComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data !== undefined) {

          this.InsertDataInCategory(data);

        }

      });
  }

  onOpportunityDataTransfer(rfpOpportunity: RFPOpportunity) {

    this.summaryFieldArray = this.documentUploadService.RFPOpportunity.SummaryFieldList;

    this.onShowRFPDocument();
    this.CategoryData = rfpOpportunity.CatetoryDataList;
    this.documentSummaryComponent.createGroup(this.summaryFieldArray);
    this.fillOppeCatArray(this.categoryArray, this.CategoryData);
    this.RouteParam();

  }

  onParsingDataTransfer(autoParsingResponse: AutoParsingRes) {
    this.CleanSummaryDataAndCategoryData();
    this.summaryFieldArray = autoParsingResponse.summary;

    this.CategoryData = autoParsingResponse.CategoryData;
    this.documentSummaryComponent.createGroup(this.summaryFieldArray);
    this.fillOppeCatArray(this.categoryArray, this.CategoryData);
    this.RouteParam();

  }

  onDeleteFileDataTransfer(deleteFileDataReponse: DeleteFileRes) {
debugger;
    this.filteredOpportunityDataArray = [];
    this.fillOppeCatArray(this.categoryArray, []);

    this.onShowRFPDocument();
    //this.CategoryData = deleteFileDataReponse.CategoryData;
    //this.fillOppeCatArray(this.categoryArray, this.CategoryData);
    this.onCleanFormControls();
    const queryParams = {  'category': 'summary' };
    this.router.navigate([this.redirectURL + '/'], { queryParams })
  }





  InsertDataInCategory(data: string): void {
    if (data == "") {

      data = this.GetEmptyElement().outerHTML;

    }

    let categoryData: Element[] = [];
    var doc = new DOMParser().parseFromString(data, "text/html");
    //let doc1 = doc.documentElement.innerHTML;
    let dataCategoryList = doc.querySelector("body");
    [].forEach.call(dataCategoryList.children, (item: HTMLElement) => {
      let hasElement: boolean = item.hasAttribute("data-cat");
      if (hasElement == false) {
        item.setAttribute("data-cat", "")
      }
      item.setAttribute("data-category", this.categoryName);
      categoryData.push(item);
    });


    this.filteredOpportunityDataArray = [];
    this.filteredOpportunityDataArray = categoryData;
    this.pushIntoFilteredArray();
  }

  DeleteOpportunityText(deletedInfo: any) {
    if (this.filteredOpportunityDataArray.length === 1) {

      let deletedNode: Element = this.filteredOpportunityDataArray[deletedInfo[1]]

      if (deletedNode.hasAttribute("data-temptrow")) {
        return;
      }
      else {


        this.filteredOpportunityDataArray = [];
        this.filteredOpportunityDataArray[0] = this.GetEmptyElement();
        this.resetDataIndexAttr();
        this.pushIntoFilteredArray();

      }

    }
    else if (this.filteredOpportunityDataArray.length > 1) {

      if (deletedInfo.length > 1) {
        let deteletedTextIndex1 = deletedInfo[1];
        this.filteredOpportunityDataArray = this.filteredOpportunityDataArray.filter((a, index) => index !== deteletedTextIndex1);
        /// ....
        this.pushIntoFilteredArray();
        ///....
      }
    }
  }

  pushIntoFilteredArray(): void {

    let categoryId: string;
    this.route.queryParamMap.subscribe(params => {
      if (params.has('category')) {

        categoryId = params.get('category');
      }
    });

    let catIndex = this.oppertunityCategoryArray.findIndex(item => item.categoryId == categoryId);

    if (catIndex == -1) return;

    if (this.oppertunityCategoryArray[catIndex].categoryData.length > 0) {
      this.oppertunityCategoryArray[catIndex].categoryData.length = 0;
      this.oppertunityCategoryArray[catIndex].categoryData = [];
    }

    this.oppertunityCategoryArray[catIndex].categoryData = this.filteredOpportunityDataArray;
  }

  navigateToDefaultPath() {
    this.router.navigate(['/opportunity']);
  }


  getSavedDocInfo(companyId: any, userId: any, documentId: any) {

    this.progressSpinnerService.isLoading = true;
    this.dialog.closeAll();
    this.ClearForm();

    this.rfpManipulationWebApiService.getSavedDocInfo(companyId, userId, documentId).subscribe(
      (response) => {

        this.documentName = response.documentName;
        this.LoadRfpData(response.document, "fromDbExistingFile")
        let self = this;
        if (self.categoryArray != null && self.categoryArray.length > 0) {
          self.categoryArray.length = 0;
        }
        if (response.categoryData) {

          response.categoryData.forEach(function (element) {
            let categoryObj = {
              CategoryId: element.CategoryId,
              Name: element.Name
            }
            self.categoryArray.push(categoryObj);
          });
          this.fillOppeCatArray(this.categoryArray, response.categoryData);
        }

        localStorage.setItem('documentId', response.documentId);
        this.documentSummaryComponent.createGroup(response.summary);

        if (response.status !== 'error' && this.categoryArray.length !== null && this.categoryArray.length != 0) {
          this.RouteParam();
          this.documentUploadComponent.isBtnPubDisabled = false;
          this.notification.success("Record retrived from cloud.");
          const queryParams = { 'category': 'summary' };
          this.router.navigate(['/'], { queryParams })
          this.progressSpinnerService.isLoading = false;

        }
        else {
          if (response.documentId == 0 || response.documentId == '0') {
            this.notification.warning("No pending document found. ");
          }
          else {
            this.notification.error(response.message);
          }
        }
        this.progressSpinnerService.isLoading = false;
      },
      (error: any) => {
        this.progressSpinnerService.isLoading = false;
        //console.log(error);
        this.notification.error(error);
      });

  }

  // getSavedDocInfo(companyId: any, userId: any, documentId: any) {

  //   this.progressSpinnerService.isLoading = true;
  //   this.dialog.closeAll();
  //   this.ClearForm();

  //   this.documentParserFormService.getSavedDocInfo(companyId, userId, documentId).subscribe(
  //     (response) => {

  //       this.documentName = response.documentName;
  //       this.LoadRfpData(response.document, "fromDbExistingFile")
  //       let self = this;
  //       if (self.categoryArray != null && self.categoryArray.length > 0) { self.categoryArray.length = 0; }
  //       if (response.categoryData) {

  //         response.categoryData.forEach(function (element) {
  //           let categoryObj = {
  //             CategoryId: element.CategoryId,
  //             Name: element.Name
  //           }
  //           self.categoryArray.push(categoryObj);
  //         });
  //         this.fillOppeCatArray(this.categoryArray, response.categoryData);
  //       }

  //       localStorage.setItem('documentId', response.documentId);
  //       this.documentSummaryComponent.createGroup(response.summary);

  //       if (response.status !== 'error' && this.categoryArray.length !== null && this.categoryArray.length != 0) {
  //         this.RouteParam();
  //         this.documentUploadComponent.isBtnPubDisabled = false;
  //         this.notification.success("Record retrived from cloud.");
  //         const queryParams = { 'category': 'summary' };
  //         this.router.navigate(['/'], { queryParams })
  //         this.progressSpinnerService.isLoading = false;

  //       }
  //       else {
  //         if (response.documentId == 0 || response.documentId == '0') {
  //           this.notification.warning("No pending document found. ");
  //         }
  //         else {
  //           this.notification.error(response.message);
  //         }
  //       }
  //       this.progressSpinnerService.isLoading = false;
  //     },
  //     (error: any) => {
  //       this.progressSpinnerService.isLoading = false;
  //       //console.log(error);
  //       this.notification.error(error);
  //     });

  // }


  ngOnDestroy() {
    const bag: any = this.dragulaService.find('Copy');
    if (bag !== undefined) this.dragulaService.destroy('Copy');
    this.subs.unsubscribe();
  }

  ClearForm() {
    this.isSummary = false;
    this.RfpDataArray = [];
    this.filteredOpportunityDataArray = [];
  }


  CreateElementForEmptyCategory(categoryId: string): Array<Element> {
    let divString: string = this.GetEmptyElement().outerHTML;

    return this.RestDataIndexAttribute(divString);

  }

  NotDeletedRow(element: Element): boolean {
    //
    let attribute = element.getAttribute("data-lastrow");
    if (attribute == undefined && attribute == null) {
      return false;
    }
    return true;
  }

  GetEmptyElementString(): string {
    //
    let categoryId: string;

    this.route.queryParamMap.subscribe(params => {
      if (params.has('category')) {

        categoryId = params.get('category');
      }
    });
    let divString: string = "<div data-temptrow=true data-category=" + categoryId + " data-cat='' data-key='1'><< Double click / drop text here >></div>"

    return divString;
  }

  GetEmptyElement(): Element {
    //
    let categoryId: string;

    this.route.queryParamMap.subscribe(params => {
      if (params.has('category')) {

        categoryId = params.get('category');
      }
    });


    let bElement: Element = document.createElement("b");
    let content: Text = document.createTextNode("<< Double click / drop text here >>");

    bElement.appendChild(content)

    let divElement: Element = document.createElement("div");

    divElement.appendChild(bElement);
    divElement.setAttribute("data-temptrow", "true");
    divElement.setAttribute("data-category", categoryId);
    divElement.setAttribute("data-cat", "");
    divElement.setAttribute("data-key", "1");

    return divElement;
  }

  RemoveEmptyElement() {
    //
    if (this.filteredOpportunityDataArray.length > 0) {

      let elementIndex: number = this.filteredOpportunityDataArray.findIndex(el => el.getAttribute('data-temptrow') === 'true');
      console.log("---->element index--" + elementIndex + "---<----");
      if (elementIndex >= 0) {
        this.filteredOpportunityDataArray.splice(elementIndex, 1)
      }

    }
  }

  onCleanFormControls() {
    this.documentName = "";
    this.opportunityName = "";
    this.filteredOpportunityDataArray = [];
    this.RfpDataArray = [];
    this.documentSummaryComponent.createGroup([]);
    this.fillOppeCatArray(this.categoryArray, []);
  }

  CleanSummaryDataAndCategoryData() {
    this.filteredOpportunityDataArray = [];
    //this.RfpDataArray = [];
    this.documentSummaryComponent.createGroup([]);
    this.fillOppeCatArray(this.categoryArray, []);
  }
  /////////////multiple document upload

  AddDocumentIdInNewAddNode(element: Element) {

    let userSelectedFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == this.documentName)
    let userSelectedRfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[userSelectedFileIndex];

    element.setAttribute("data-docid", userSelectedRfpFile.fileRFPDbId.toString());
  }

  // onDeleteCategoryData(DeletedFileDocId: number) {
  //   
  //   let catDataArray: Array<CategoryData> = new Array<CategoryData>();
  //   let catElementArray: Array<Element> = new Array<Element>();
  //   let DeletedFileDocumentId: string = DeletedFileDocId.toString();


  //   for (let index = 0; index < this.oppertunityCategoryArray.length; index++) {
  //     let oppCategory: OppertunityCategory = this.oppertunityCategoryArray[index];

  //     let catData: CategoryData = new CategoryData();
  //     catData.CategoryId = parseInt(oppCategory.categoryId);
  //     catData.Name = oppCategory.categoryName;

  //     for (let index = 0; index < oppCategory.categoryData.length; index++) {
  //       let element: Element = oppCategory.categoryData[index];
  //       if (element.getAttribute("data-docid") !== null) {

  //         let documentId: string = element.getAttribute("data-docid").valueOf();

  //         if (documentId != DeletedFileDocumentId) {
  //           catElementArray.push(element);
  //           catData.CategoryData = catData.CategoryData + element.outerHTML;
  //         }
  //       } else {
  //         catElementArray.push(element);
  //         catData.CategoryData = catData.CategoryData + element.outerHTML;
  //       }
  //     }
  //     oppCategory.categoryData = catElementArray;
  //     catDataArray.push(catData);
  //   }
  //   this.filteredOpportunityDataArray = [];
  //   //this.RfpDataArray = [];

  //   this.fillOppeCatArray(this.categoryArray, []);

  //   this.fillOppeCatArray(this.categoryArray, catDataArray);
  //   this.filteredOppoertunity();
  // }

  onMoveWholeDocument(categoryId: string) {
    
    this.progressSpinnerService.isLoading = true;
    const queryParams = { 'category': categoryId };
    this.router.navigate(['/'], { queryParams })

    let OppertunityCategoryIndex: number = this.oppertunityCategoryArray.findIndex(catId => catId.categoryId == categoryId);
    let oppertunityCategory = this.oppertunityCategoryArray[OppertunityCategoryIndex];


    let elementIndex: number = oppertunityCategory.categoryData.findIndex(el => el.getAttribute('data-temptrow') === 'true');
    if (elementIndex >= 0) {
      oppertunityCategory.categoryData.splice(elementIndex, 1)
    }


    let data: string;
    let status: boolean = false;
    if (oppertunityCategory.categoryData.length > 0) {
      for (let index = 0; index < this.filteredOpportunityDataArray.length; index++) {
        const element = this.filteredOpportunityDataArray[index];
        if (status == false) {
          data = element.outerHTML;
          status = true;
        } else {
          data = data + element.outerHTML;
        }
      }
    }

    let userSelectedFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(file => file.FileName == this.documentName)
    let userSelectedRfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[userSelectedFileIndex];

    for (let index = 0; index < this.RfpDataArray.length; index++) {


      let element: Element = this.RfpDataArray[index];
      

      let hasElement: boolean = element.hasAttribute("data-cat");
      if (hasElement == false) {
        element.setAttribute("data-cat", "")
      }
      this.AddDocumentIdInNewAddNode(element);

      let RfpDataElement: string = element.outerHTML;

      if (status == false) {
        data = RfpDataElement;
        status = true;
      } else {
        data = data + RfpDataElement;
      }
    }
    this.WholeDocumentParseDataSave(data, categoryId);
  }

  CheckElementAlreadyParsed(element: Element): boolean {





    return true;
  }

  WholeDocumentParseDataSave(categorydata: string, categoryId: string) {


    let SelectedFileNameIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(f => f.FileName == this.documentUploadService.SelectedFileName)
    let rfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[SelectedFileNameIndex];

    const formData = new FormData();
    formData.append('companyId', localStorage.getItem('compId'));
    formData.append('userId', localStorage.getItem('userid'));
    formData.append('documentId', rfpFile.fileRFPDbId.toString());
    formData.append('categoryId', categoryId);
    formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
    formData.append('categoryData', categorydata);

    this.rfpManipulationWebApiService.WholeDocumentParseDataSave(formData).subscribe(
      res => this.WholeDocumentParseDataSaveResponse(res, categorydata),
      err => this.UploadError(err)
    );
  }

  WholeDocumentParseDataSaveResponse(webResponse: WebResponse<string>, categorydata: string) {

    if (webResponse.code == "1") {
      let selectedFileIndex: number = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(f => f.FileName = this.documentUploadService.SelectedFileName);
      let selectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];
      selectedRfpFile.Parsed = true;
      this.documentUploadService.TogglingEnableDisableButton();
      this.documentUploadService.SetNumberOfFileSatusCount();

      this.InsertDataInCategory(categorydata);

      this.notification.success("Parsing is completed successfully !");
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

  onSave() {

    if(this.progressSpinnerService.isLoading == false){
      this.progressSpinnerService.isLoading = true;
     }
    this.documentUploadComponent.SaveCategoriesDataAndSummaryData(this.oppertunityCategoryArray,'save')

  }
  onsaveBeforeOtherEvent(value: any){
    
    if(this.progressSpinnerService.isLoading == false){
      this.progressSpinnerService.isLoading = true;
     }

    this.documentUploadComponent.SaveCategoriesDataAndSummaryData(this.oppertunityCategoryArray, value)

  }
  // added by Kashif 
  downloadCategoryData(){
     this.categoryDataDownloadService.downloadCategoryData(); 
  }
  onChangeOpportunityName(opportunitName: string){
    
this.opportunityName = opportunitName;
  }
  // onsaveBeforeOpportunityLoading(value: any){
  //   if(this.documentUploadComponent.isLoading == false){
  //     this.documentUploadComponent.isLoading = true;
  //    }

  //   this.documentUploadComponent.SaveCategoriesDataAndSummaryData(this.oppertunityCategoryArray, 'OpportunityLoading')

  // }

  UploadError(parm: any): void {
    this.uploadError = parm;
    this.progressSpinnerService.isLoading = false;
    this.notification.error(this.uploadError);
  }

}

