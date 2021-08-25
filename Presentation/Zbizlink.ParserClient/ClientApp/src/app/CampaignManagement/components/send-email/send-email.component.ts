import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { CampaignUserWebapiService } from '../../services/campaign-user-webapi.service';
import * as XLSX from 'xlsx';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
type AOA = any[][];
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  fileToUpload: File = null;
  file: File; 
  removable = true;
  EmailIds:string = '';
  FirstNames: string = '';
  LastNames: string = '';
  CompanyNames: string = '';
  EmailAdresses:  any[] = [];
  FirstName:  any[] = [];
  LastName:  any[] = [];
  CompanyName:  any[] = [];
  jsonData: any[] = [];
  groupForm: FormGroup;
  Message:string='';
  header:string = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body>`;
  footer:string = `</body></html>`;
  MessageHeader:string ="<p>Hi,</p>"+ '\n' + "<p> Our system record indicates that this opportunity matched with your company's profile. It might interest you. Please follow the link below and review the opportunity information already shredded and ready to go for making your go/no go decision. The shredded information can be downloaded in Excel and Work file format.</p>";
  MessageFooter:string="<p>Thank You,</p>" +'\n'+"<p>Zbizlink Support</p>" +'\n'+"<p>1107 North Point Blvd, STE 228</p>" +'\n'+"<p>Baltimore, MD 21224</p>" +'\n'+"<p>URL: https://zbizlink.com </p>" +'\n'+"<p>Phone: +1 443-478-8215 </p>" +'\n'+" ";
  OpportunityURL:string ='';
  OpportunityId:Number=0;
  OpportunityName:string ='';
  emailSuccessFailureMessage: string = '';
  CompanyId:string ='0';
  EmailErrorMessage:string= '';
  EmailCheckerIndex: number = 0;
  FirstNameCheckerIndex: number = 0;
  LastNameCheckerIndex: number = 0;
  CompanyCheckerIndex: number = 0;
  temp: number = 0;
  EmailChecker: string = '';
  FirstNameChecker: string = '';
  LastNameChecker: string = '';
  CompanyNameChecker: string = '';

  campaignId :string = '';
  campaigns: any[] = [];
  AnnualRevenue: any[] = [];
  EntityStructure: any[] = [];
  EmployeesRange: any[] = [];
  Experience: any[] = [];
  federalCheck = false;
  disableCheckBoxes:boolean = true;

  isHidden:boolean= false;
  showDiv:boolean= true;

  ShowErrorMessage:string = "";

        myForm:FormGroup;
        disabled = false;
        ShowFilter = false;
        limitSelection = false;
        cities: any[] = [];
        selectedItems: any[] = [];
        agenciesDropDownSettings: any = {};

@ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  constructor(public dialogRef: MatDialogRef<any>,private fb: FormBuilder, public progressSpinnerService: ProgressSpinnerService,private router: Router ,private notification: NotificationService,
    public campaignUserWebapiService:CampaignUserWebapiService, @Inject(MAT_DIALOG_DATA) public campaignData: any,
    public campaignLookupDataService: CampaignLookupDataService
    ) {  
      debugger;
     }
  ngOnInit(): void {
    if(!sessionStorage.getItem('CampaignUser')) { 
      this.router.navigateByUrl('/');
      debugger; 
      this.cities = [
        { item_id: 1, item_text: 'New Delhi' },
        { item_id: 2, item_text: 'Mumbai' },
        { item_id: 3, item_text: 'Bangalore' },
        { item_id: 4, item_text: 'Pune' },
        { item_id: 5, item_text: 'Chennai' },
        { item_id: 6, item_text: 'Navsari' }
    ];
    this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];
      //setting and support i18n
      this.agenciesDropDownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit:10,
        allowSearchFilter: true
      };
    }
    this.groupForm = this.fb.group({
      Message: new FormControl(),
      OpportunityName: new FormControl(),
      CampaignId:new FormControl(),
      Agency:['']  
    })
   this.fetchOpportunityURL(); 
   this.Message = this.MessageHeader +'\n \n'+this.OpportunityURL +'\n \n \n'+ this.MessageFooter;

   var response = this.GetCampaignOpportunities();
   console.log(response);
  }
  
  // public setForm() {
  //   debugger
  //   this.form = new FormGroup({
  //     name: new FormControl(this.data, Validators.required)
  //   });
  //   this.loadContent = true;
  // }
  //get f() { return this.form.controls; }
  public onFilterChange(item: any) {
    debugger
    console.log(item);
  }
  public onDropDownClose(item: any) {
    debugger
    console.log(item);
  }

  public onItemSelect(item: any) {
    debugger
    console.log(item);
  }
  public onDeSelect(item: any) {
    debugger
    console.log(item);
  }

  public onSelectAll(items: any) {
    debugger
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    debugger
    console.log(items);
  }
  private GetCampaignOpportunities() {
    debugger
    // if (this.progressSpinnerService.isLoading == false)  
      //   this.progressSpinnerService.isLoading = true; 

      this.campaignUserWebapiService.GetAllCampaignList().subscribe((res: WebApiResponse) => {
      console.log("response is = " + res); 
      if (res !== null) {
        this.CampaignList(res);
        console.log(this.CampaignList); 
       this.progressSpinnerService.isLoading = false;
      }
    },
    (error: any) => {
      console.log(error);
      this.notification.error(error);
     this.progressSpinnerService.isLoading = false; 
    }
  
  )
  }
  CampaignList(category: any) { 
    category.forEach((value, key) => { 
      if (value.name !== undefined && value.name !== null && value.name !=="") {
        this.campaigns.push({ '_id': value._id, 'name': value.name });
      }
       // console.log('_id =' + value._id);
        //this.campaigns.push({"CampaignId":"1","Fine":"Fiasal"},{"CampaignId":"2","Fine":"Kashif"});
       
        //this.campaigns.push({ '_id': 1, 'name': "Kashif" },{ '_id': 1, 'name': "rehan" },{ '_id': 1, 'name': "sameer" });
      //  this.AnnualRevenue.push({ '_id': 1, 'name': "Kashif" },{ '_id': 1, 'name': "rehan" },{ '_id': 1, 'name': "sameer" });
       // this.EntityStructure.push({ '_id': 1, 'name': "Kashif" },{ '_id': 1, 'name': "rehan" },{ '_id': 1, 'name': "sameer" });
      //  this.EmployeesRange.push({ '_id': 1, 'name': "Kashif" },{ '_id': 1, 'name': "rehan" },{ '_id': 1, 'name': "sameer" });
      //  this.Experience.push({ '_id': 1, 'name': "Kashif" },{ '_id': 1, 'name': "rehan" },{ '_id': 1, 'name': "sameer" });
    }); 
  }

  private fetchOpportunityURL() { 
    this.OpportunityName = this.campaignData.OpportunityName;
    this.CompanyId = sessionStorage.getItem('compId'); 
    // Encode URL
    var encodedURL = btoa("OpportunityId=" + this.campaignData.OpportunityId).trim(); // encodeURIComponent("/?OpportunityId="+this.campaignData.OpportunityId);

    console.log("URL Encoding = " + encodedURL);
    this.OpportunityURL = window.location.origin + "/parser/?" + encodedURL; //"/?OpportunityId="+this.campaignData.OpportunityId;
    console.log("URL Encoding = " + this.OpportunityURL);
    // Decode URL
    var decodedURL = window.location.origin + "/?" + atob(encodedURL);
    console.log("URL Decoding = " + decodedURL);
  }

    // Your applications input change listener for the CSV File
     fileChangeListener($event: any): void { 
    debugger
  /* wire up file reader */
  const target: DataTransfer = <DataTransfer>($event.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    /* read workbook */
    const bstr: string = e.target.result;
   // debugger
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
    debugger
    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    //debugger
    /* save data */
    this.jsonData = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
  //  debugger; 
  this.AssignIndexes(this.jsonData);
  this.FilterEmailsAddress(this.jsonData);
  this.FilterFirstNames(this.jsonData);
  this.FilterLastNames(this.jsonData);
  this.FilterCompanyNames(this.jsonData);
   // console.log(this.EmailIds);
  };
  reader.readAsBinaryString(target.files[0]);
 //

 // Below code is working fine but in some scenarios it has some issue 

    //   // Select the files from the event
      // const files = $event.srcElement.files;
      // if (files.length !== 1) throw new Error("Cannot use multiple files");

      // var input =  $event.target;
      // var reader = new FileReader();
      // reader.readAsText(input.files[0]);
      // reader.onload = e => {
      // console.log((e.target as FileReader).result);
      // this.EmailIds = (e.target as FileReader).result.toString().trimStart();
      // };
     }
// filter emails
debugger
AssignIndexes(jsonData:any){
  jsonData.forEach(element => {
    
  debugger
 
  
  while(element[this.temp] != 'Email' && this.EmailChecker !== 'Email'){
    this.temp++;    
  }
  
  if(element[this.temp] == 'Email'){
    this.EmailCheckerIndex = this.temp;
    this.EmailChecker = 'Email';
    
    this.temp = 0;
  }
  while(element[this.temp] != 'FirstName' && this.FirstNameChecker !== 'FirstName'){
    this.temp++;    
  }
  
  if(element[this.temp] == 'FirstName'){
    this.FirstNameCheckerIndex = this.temp;
    this.FirstNameChecker = 'FirstName';
    this.temp = 0;
  }
  
  while(element[this.temp] != 'LastName' && this.LastNameChecker !== 'LastName'){
    this.temp++;    
  }
  
  if(element[this.temp] == 'LastName'){
    this.LastNameCheckerIndex = this.temp;
    this.LastNameChecker = 'LastName';
    this.temp = 0;
  }
  while(element[this.temp] != 'CompanyName' && this.CompanyNameChecker !== 'CompanyName'){
    this.temp++;    
  }
  
  if(element[this.temp] == 'CompanyName'){
    this.CompanyCheckerIndex = this.temp;
    this.CompanyNameChecker = 'CompanyName';
    this.temp = 0;
  }
  

  });

  console.log(this.EmailIds); 
}
 
FilterEmailsAddress(jsonData:any){
  jsonData.forEach(element => { 
    if (element.length > 1 && element[this.EmailCheckerIndex] !=="" && element[this.EmailCheckerIndex] !=='undefiend' && this.EmailChecker === 'Email' && element[this.EmailCheckerIndex] !=='Email') {
      this.EmailIds += element[this.EmailCheckerIndex] +";";     
  }
});

  console.log(this.EmailIds); 
}

FilterFirstNames(jsonData:any){
  jsonData.forEach(element => {    
  if (element.length > 1 && element[this.FirstNameCheckerIndex] !=="" && element[this.FirstNameCheckerIndex] !=='undefiend' && this.FirstNameChecker === 'FirstName' && element[this.FirstNameCheckerIndex] !=='FirstName') {
    this.FirstNames += element[this.FirstNameCheckerIndex] +";";     
}
});
  console.log(this.FirstNames); 
}
FilterLastNames(jsonData:any){
  jsonData.forEach(element => {    
  if (element.length > 1 && element[this.LastNameCheckerIndex] !=="" && element[this.LastNameCheckerIndex] !=='undefiend' && this.LastNameChecker === 'LastName' && element[this.LastNameCheckerIndex] !=='LastName') {
    this.LastNames += element[this.LastNameCheckerIndex] +";";     
  }
});
  console.log(this.LastNames); 
}
FilterCompanyNames(jsonData:any){
  jsonData.forEach(element => {   
  debugger
  if (element.length > 1 && element[this.CompanyCheckerIndex] !=="" && element[this.CompanyCheckerIndex] !=='undefiend' && this.CompanyNameChecker === 'CompanyName' && element[this.CompanyCheckerIndex] !=='CompanyName') {
    this.CompanyNames += element[this.CompanyCheckerIndex] +";";     
  }
});
  console.log(this.CompanyNames); 
}
      SendEmail(groupForm: FormGroup){
        debugger
        if(groupForm.value.CampaignId  == null || groupForm.value.CampaingId == ""){
          return this.ShowErrorMessage = "Please select campaign";
        }
     //  groupForm.value.CampaignId  = this.campaignId; 
       groupForm.value.EmailAdresses = this.EmailIds.split(';');//.split(/\r?\n/);
       groupForm.value.FirstName = this.FirstNames.split(';');//.split(/\r?\n/);
       groupForm.value.LastName = this.LastNames.split(';');//.split(/\r?\n/);
       groupForm.value.CompanyName = this.CompanyNames.split(';');//.split(/\r?\n/);
       groupForm.value.Message = this.OpportunityURL;
        if (groupForm.value.Message.includes(this.OpportunityURL)) {
          groupForm.value.OpportunityURL ='' ;
        }else{
          groupForm.value.OpportunityURL = this.OpportunityURL;
        }

        if (groupForm.value.EmailAdresses == "") {
          return this.EmailErrorMessage = "Email address could not be null or empty";
        }
          if (groupForm.valid == true) {
            if (this.progressSpinnerService.isLoading == false)
                 this.progressSpinnerService.isLoading = true;
                 // Get company and user id
                 groupForm.value.UserId  =  sessionStorage.getItem('userId');
                 groupForm.value.CampaignOpportunityId  =  this.campaignData.CampaignOpportunityId;
                 groupForm.value.Message = this.header + groupForm.value.Message + this.footer;
            this.campaignUserWebapiService.CampaignEmail(groupForm.value).subscribe(response => {

             if ( response !=0 && response !== undefined && response != null) {
                console.log(response);
                this.progressSpinnerService.isLoading = false;
               // this.emailSuccessFailureMessage = "Email sent successfully";
                //this.notification.success('Email sent successfully');
                this.notification.success('Email Pushed to Lemlist Seccessfully');
                this.closeDialogOpp();
                localStorage.removeItem("EmailAdresses");
              }
              else{
                this.notification.error('Error sending email');
              }
            })
          }
        }


      onFocus() {
        this.emailSuccessFailureMessage ='';
        this.EmailErrorMessage ='';
        this.ShowErrorMessage = '';
     }


  fileChange(file) {
    this.file = file.target.files[0];
    console.log(this.file.name);
  }
  onAttachedFile(event: any) {
    debugger;


    // this.progressSpinnerService.isLoading = true;

    // if (event.target.files.length > 0) {

    //   this.event = event;

    //   if (this.documentUploadService.CategoryNameList === undefined) {

    //   //  this.GetCategoryNameListFromDB("onAttachedFile");

    //   } else {

    //    // this.AttachedFile();

    //   }
    // } else {
    //  // this.progressSpinnerService.isLoading = false;
    //   event.target.value = null
    // }
  }
  selectCategory($event) {
    debugger;
    this.campaignId = $event.value;
    console.log("campaign Id = " + this.campaignId);
  }

  ok(): void {
   }
  closeDialogOpp(): void {
    this.dialogRef.close();
  }
  onFileComplete($event) {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
onChange($event){ 
  debugger;

  console.log(this.isHidden);
  if ($event.checked) {
    this.isHidden = $event.checked ;
    this.showDiv = false;
     console.log('Check change event, value is = ' +this.isHidden);
  }
  
  else{
    this.showDiv = true;
    this.isHidden = false;
  }
}
}
