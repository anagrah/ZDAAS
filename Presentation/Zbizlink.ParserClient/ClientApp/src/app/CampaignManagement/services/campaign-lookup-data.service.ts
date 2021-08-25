import { Injectable } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { HttpResponseHandlerService } from '../../shared/services/http-response-handler.service';
import { CategorySynonym } from '../models/Category/CategorySynonym';
import { SummaryFieldSynonym } from '../models/Summary/summary-field-synonym';

@Injectable({
  providedIn: 'root'
})
export class CampaignLookupDataService {

  private RFPWebApiUrl = this.appConfigService.apiBaseUrl; 
  private LookupDataAPIController = 'LookupData/';
  constructor(
    private appConfigService: AppConfigService, private http: HttpClient,
    private httpResponseHandlerService: HttpResponseHandlerService
  ) { }

    // Get all category synonym data
    public GetOpportunityCategoryLookupData(){
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunityCategoryLookupData");
      return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunityCategoryLookupData").pipe(catchError(this.httpResponseHandlerService.handleError));  
    }
     // Get all summary synonym data
    //  public GetOpportunitySummaryLookupData(){
    //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunitySummaryLookupData");
    //   return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunitySummaryLookupData"); 
    // }
     // Get Synonym Bridges Lookup Data
     public GetSynonymBridgesLookupData(synonymId:Number){
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSynonymBridges");
      return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSynonymBridges?synonymId="+synonymId).pipe(catchError(this.httpResponseHandlerService.handleError)); 
    }
    // Get Summary Bridges Lookup Data By Id
    // public GetSynonymBridgesLookupDataById(synonymId:Number){
    //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSummarySynonymBridges");
    //   return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSummarySynonymBridges?synonymId="+synonymId); 
    // }
       //Synonym Insert
       public SaveSynonym(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "categorySynonymInsert");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "categorySynonymInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
 

	// Get all summary synonym data
  public GetCategorySynonym(){
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getCategoriesSynonym");
    return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getCategoriesSynonym")
    .pipe(catchError(this.httpResponseHandlerService.handleError)); 
  }
  	// Save Summary Synonym
    public CategorySynonymInsert(groupForm: any): Observable<any> {
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "categorySynonymInsert");
      return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "categorySynonymInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
        return this.httpResponseHandlerService.getEventMessage(event)
  
      }), catchError(this.httpResponseHandlerService.handleError)
      );
    }
        //summary Update
        public EditCategoriesAndSynonym(groupForm: any): Observable<any> {
          console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "editCategoriesAndSynonym");
          return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "editCategoriesAndSynonym"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
            return this.httpResponseHandlerService.getEventMessage(event)
      
          }), catchError(this.httpResponseHandlerService.handleError)
          );
        }
      //Category Synonym Delete
  public DeleteCategorySynonym(groupForm: any): Observable<any> {
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "categorySynonymDelete");
    return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "categorySynonymDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)

    }), catchError(this.httpResponseHandlerService.handleError)
    );
  }



       //Agency Insert
       public SaveAgency(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "agencyInsert");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "agencyInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }

       //Industry Insert
       public SaveIndustry(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "industryInsert");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "industryInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }

       //Contract Vehicle Insert
       public SaveContractVehicle(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleInsert");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }

      // Save Synonym Bridges
      public SaveSynonymBridges(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "saveSynonymBridges");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "saveSynonymBridges"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
      // Save Summary Bridges
      // public SaveSummaryBridges(groupForm: any): Observable<any> {
      //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "saveSummarySynonymBridges");
      //   return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "saveSummarySynonymBridges"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      //     return this.httpResponseHandlerService.getEventMessage(event)
    
      //   }), catchError(this.httpResponseHandlerService.handleError)
      //   );
      // }
      //  delete state
      public deleteState(items: any,synonymBridges,bridgeSynonymStatesList) {
        let dBBridgeSynonymStatesList ;
        if(bridgeSynonymStatesList === null) {
          bridgeSynonymStatesList = [];
        }
        if (synonymBridges.BridgeSynonymStatesList.length > 0) {
          dBBridgeSynonymStatesList = synonymBridges.BridgeSynonymStatesList.find(a => a.StateId == items.StateId);
        }
         
        if (dBBridgeSynonymStatesList == null && dBBridgeSynonymStatesList == undefined) {
          let tempStates = bridgeSynonymStatesList.findIndex(a => a.StateId == items.StateId);
          if (tempStates !== -1 && tempStates != null && tempStates !== undefined) {
            bridgeSynonymStatesList.splice(tempStates, 1);
          }
        }
        if (dBBridgeSynonymStatesList !== null && dBBridgeSynonymStatesList !== undefined) {
         
         // console.log('Delete from array. addition of code on 26/5/2021'); 

 if(bridgeSynonymStatesList.length > 0){
  let isExistsState = bridgeSynonymStatesList.find(a => a.StateId == items.StateId && a.DBTransactionType === 2);
 
  if (isExistsState === undefined || isExistsState === null) {
    bridgeSynonymStatesList.push({ BridgeSynonymStatesId: dBBridgeSynonymStatesList.BridgeSynonymStatesId, SynonymId: dBBridgeSynonymStatesList.SynonymId, StateId: dBBridgeSynonymStatesList.StateId, DBTransactionType: 2 });
  }
}else{
  bridgeSynonymStatesList.push({ BridgeSynonymStatesId: dBBridgeSynonymStatesList.BridgeSynonymStatesId, SynonymId: dBBridgeSynonymStatesList.SynonymId, StateId: dBBridgeSynonymStatesList.StateId, DBTransactionType: 2 });
}
  }
        return bridgeSynonymStatesList ;
      }

      // delete Agency
      public deleteAgency(items: any,synonymBridges,bridgeSynonymAgencyList) {
        let dBBridgeSynonymAgencyList;
        if(bridgeSynonymAgencyList === null){
          bridgeSynonymAgencyList = [];
        }
        if (synonymBridges.BridgeSynonymAgencyList.length > 0 ) {
          dBBridgeSynonymAgencyList = synonymBridges.BridgeSynonymAgencyList.find(a => a.AgencyId == items.AgencyID);
        }
        
        if (dBBridgeSynonymAgencyList == null && dBBridgeSynonymAgencyList == undefined) {
          let tempAgency = bridgeSynonymAgencyList.findIndex(a => a.AgencyId == items.AgencyID);
          if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
            bridgeSynonymAgencyList.splice(tempAgency, 1);
          }
        }
        if (dBBridgeSynonymAgencyList !== null && dBBridgeSynonymAgencyList !== undefined) {
          // Delete 
          console.log('Delete from array.');

             // addition of code on 26/5/2021
      if(bridgeSynonymAgencyList.length > 0){
        let isExistsAgency = bridgeSynonymAgencyList.find(a => a.AgencyId == items.AgencyID && a.DBTransactionType === 2);  
        if (isExistsAgency === undefined || isExistsAgency === null) {
          bridgeSynonymAgencyList.push({ BridgeSynonymAgencyId: dBBridgeSynonymAgencyList.BridgeSynonymAgencyId, SynonymId: dBBridgeSynonymAgencyList.SynonymId, AgencyId: dBBridgeSynonymAgencyList.AgencyId, DBTransactionType: 2 });
        }
      }else{
        bridgeSynonymAgencyList.push({ BridgeSynonymAgencyId: dBBridgeSynonymAgencyList.BridgeSynonymAgencyId, SynonymId: dBBridgeSynonymAgencyList.SynonymId, AgencyId: dBBridgeSynonymAgencyList.AgencyId, DBTransactionType: 2 });
    }
 //End of code on 26/5/2021

        }
       
        return bridgeSynonymAgencyList ;
      }

      public deleteIndustry(items: any,synonymBridges,bridgeSynonymIndustryList) {
        let dBBridgeSynonymIndustryList ;
        if (bridgeSynonymIndustryList === null) {
          bridgeSynonymIndustryList = [];
        }
        if (synonymBridges.BridgeSynonymIndustryList.length > 0) {
          dBBridgeSynonymIndustryList = synonymBridges.BridgeSynonymIndustryList.find(a => a.IndustryId == items.IndustryID);
        }
        
        if (dBBridgeSynonymIndustryList == null && dBBridgeSynonymIndustryList == undefined) {
          let tempIndustry = bridgeSynonymIndustryList.findIndex(a => a.IndustryId == items.IndustryID);
          if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
            bridgeSynonymIndustryList.splice(tempIndustry, 1);
          }
        }
        if (dBBridgeSynonymIndustryList !== null && dBBridgeSynonymIndustryList !== undefined) {
          console.log('Delete from array.');

          // addition of code on 26/5/2021
      if(bridgeSynonymIndustryList.length > 0){
        let isExistsIndustry = bridgeSynonymIndustryList.find(a => a.IndustryId == items.IndustryID && a.DBTransactionType === 2);
      
        if (isExistsIndustry === undefined || isExistsIndustry === null) {
          bridgeSynonymIndustryList.push({ BridgeSynonymIndustryId: dBBridgeSynonymIndustryList.BridgeSynonymIndustryId, SynonymId: dBBridgeSynonymIndustryList.SynonymId, IndustryId: dBBridgeSynonymIndustryList.IndustryId, DBTransactionType: 2 });
        }
      }else{
        bridgeSynonymIndustryList.push({ BridgeSynonymIndustryId: dBBridgeSynonymIndustryList.BridgeSynonymIndustryId, SynonymId: dBBridgeSynonymIndustryList.SynonymId, IndustryId: dBBridgeSynonymIndustryList.IndustryId, DBTransactionType: 2 });
    }
 //End of code on 26/5/2021
             }
        return bridgeSynonymIndustryList ; 
      }
      public deleteContractVehicle(items: any,synonymBridges,bridgeSynonymContractVehicleList) {
        let dBBridgeSynonymContractVehicleList;
        if (bridgeSynonymContractVehicleList === null) {
            bridgeSynonymContractVehicleList = [];
        }
        if (synonymBridges.BridgeSynonymContractVehicleList.length > 0) {
          dBBridgeSynonymContractVehicleList = synonymBridges.BridgeSynonymContractVehicleList.find(a => a.ContractVehicleId == items.ContractVehicleId);
        } 
        if (dBBridgeSynonymContractVehicleList == null && dBBridgeSynonymContractVehicleList == undefined) {
          let tempContract = bridgeSynonymContractVehicleList.findIndex(a => a.ContractVehicleId == items.ContractVehicleId);
          if (tempContract !== -1 && tempContract != null && tempContract !== undefined) {
            bridgeSynonymContractVehicleList.splice(tempContract, 1);
          }
        }
        if (dBBridgeSynonymContractVehicleList !== null && dBBridgeSynonymContractVehicleList !== undefined) {
          // Delete 
          console.log('Delete from array.');

 
          // addition of code on 26/5/2021

  if(bridgeSynonymContractVehicleList.length > 0){
    let isExistsContractVehicleList = bridgeSynonymContractVehicleList.find(a => a.ContractVehicleId == items.ContractVehicleId && a.DBTransactionType === 2);
  
    if (isExistsContractVehicleList === undefined || isExistsContractVehicleList === null) {
      bridgeSynonymContractVehicleList.push({ BridgeSynonymContractVehicleId: dBBridgeSynonymContractVehicleList.BridgeSynonymContractVehicleId, SynonymId: dBBridgeSynonymContractVehicleList.SynonymId, ContractVehicleId: dBBridgeSynonymContractVehicleList.ContractVehicleId, DBTransactionType: 2 });
    }
  }else{
    bridgeSynonymContractVehicleList.push({ BridgeSynonymContractVehicleId: dBBridgeSynonymContractVehicleList.BridgeSynonymContractVehicleId, SynonymId: dBBridgeSynonymContractVehicleList.SynonymId, ContractVehicleId: dBBridgeSynonymContractVehicleList.ContractVehicleId, DBTransactionType: 2 });
}

//End of code on 26/5/2021

                 }
        return bridgeSynonymContractVehicleList;
      }
    
      //
      public deleteOpportunityType(items: any,synonymBridges,bridgeSynonymOpportunityTypeList) {
        if(bridgeSynonymOpportunityTypeList === null){
          bridgeSynonymOpportunityTypeList = [];
        }
        let dBBridgeSynonymOpportunityTypeItem;
        if (synonymBridges.BridgeSynonymOpportunityTypeList.length > 0) {
          dBBridgeSynonymOpportunityTypeItem = synonymBridges.BridgeSynonymOpportunityTypeList.find(a => a.OpportunityTypeId == items);
        }
        
        if (dBBridgeSynonymOpportunityTypeItem == null && dBBridgeSynonymOpportunityTypeItem == undefined) {
          let tempOpportunityType = bridgeSynonymOpportunityTypeList.findIndex(a => a.OpportunityTypeId == items);
          if (tempOpportunityType !== -1 && tempOpportunityType != null && tempOpportunityType !== undefined) {
            bridgeSynonymOpportunityTypeList.splice(tempOpportunityType, 1);
          }
        }
        if (dBBridgeSynonymOpportunityTypeItem !== null && dBBridgeSynonymOpportunityTypeItem !== undefined) {
          // Delete 
          console.log('Delete from array.');
          bridgeSynonymOpportunityTypeList.push({ BridgeSynonymOpportunityTypeId: dBBridgeSynonymOpportunityTypeItem.BridgeSynonymOpportunityTypeId, SynonymId: dBBridgeSynonymOpportunityTypeItem.SynonymId, OpportunityTypeId: dBBridgeSynonymOpportunityTypeItem.OpportunityTypeId, DBTransactionType: 2 });
        }
        return bridgeSynonymOpportunityTypeList;
      }

      // Delete Category Synonym mBridges
      public DeleteCategorySynonymBridges(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "BridgeCategorySynonymDelete");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "BridgeCategorySynonymDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
     
      //
      //Start by Akmal

      public GetCategroyAndSynonym(): Observable<any>{
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getCategoriesSynonym");
        return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getCategoriesSynonym")
        .pipe(catchError(this.httpResponseHandlerService.handleError));  
      }

      public movedCatorySynonymEdit(movedCategorySynonym: CategorySynonym[]): Observable<any>{
        
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "movedCatorySynonymEdit");
      
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "movedCatorySynonymEdit"}`, movedCategorySynonym)
      .pipe(catchError(this.httpResponseHandlerService.handleError));  
      }

      public GetSummaryFieldAndSynonym(): Observable<any>{
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSummaryFieldAndSynonym");
        return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSummaryFieldAndSynonym")
        .pipe(catchError(this.httpResponseHandlerService.handleError));  
      }

      public movedSummaryFieldSynonymEdit(movedSummaryFieldSynonym: SummaryFieldSynonym[]): Observable<any>{
   
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "movedSummaryFieldSynonymEdit");
      
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "movedSummaryFieldSynonymEdit"}`, movedSummaryFieldSynonym)
      .pipe(catchError(this.httpResponseHandlerService.handleError));  
      }


      // public GetCategoriesAndSynonym(): Observable<any>{
      //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getCategoriesSynonym");
      //   return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getCategoriesSynonym")
      //   .pipe(catchError(this.httpResponseHandlerService.handleError));  
      // }
      //End by  Akmal

    

      public movedSummaryFieldSynonymEdit1(groupForm: any): Observable<any> {

      let  httpOptions = new Headers({
          'Content-Type': 'application/json'
      });
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "movedSummaryFieldSynonymEdit");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "movedSummaryFieldSynonymEdit1"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
}
