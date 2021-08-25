import { Injectable } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponseHandlerService } from '../../shared/services/http-response-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummarySynonymbridgesLookupService {

  private RFPWebApiUrl = this.appConfigService.apiBaseUrl; 
  private LookupDataAPIController = 'LookupData/';
  constructor(
    private appConfigService: AppConfigService, private http: HttpClient,
    private httpResponseHandlerService: HttpResponseHandlerService
  ) { }

    // Get all category synonym data
    // public GetOpportunityCategoryLookupData(){
    //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunityCategoryLookupData");
    //   return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunityCategoryLookupData"); 
    // }
     // Get all summary synonym data
     public GetOpportunitySummaryLookupData(){
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunitySummaryLookupData");
      return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getOpportunitySummaryLookupData")
      .pipe(catchError(this.httpResponseHandlerService.handleError)); 
    }
     // Get Synonym Bridges Lookup Data
    //  public GetSynonymBridgesLookupData(synonymId:Number){
    //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSynonymBridges");
    //   return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSynonymBridges?synonymId="+synonymId); 
    // }
    // Get Summary Bridges Lookup Data By Id
    public GetSynonymBridgesLookupDataById(synonymId:Number){
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSummarySynonymBridges");
      return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSummarySynonymBridges?synonymId="+synonymId) .pipe(catchError(this.httpResponseHandlerService.handleError));  
    }
    // Delete Summary Synonym mBridges
    public DeleteSummarySynonymBridges(groupForm: any): Observable<any> {
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "BridgeSummarySynonymDelete");
      return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "BridgeSummarySynonymDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
        return this.httpResponseHandlerService.getEventMessage(event)
  
      }), catchError(this.httpResponseHandlerService.handleError)
      );
    }
    //
    // Get Summary Synonym
    public GetSummarySynonym(){
      console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSummarySynonym");
      return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSummarySynonym") .pipe(catchError(this.httpResponseHandlerService.handleError));  
    }
       //summary Synonym Insert
       public SaveSummarySynonym(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "summarySynonymInsert");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "summarySynonymInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
// summarySynonymEdit
public SummarySynonymEdit(groupForm: any): Observable<any> {
  console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "summarySynonymEdit");
  return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "summarySynonymEdit"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
    return this.httpResponseHandlerService.getEventMessage(event)

  }), catchError(this.httpResponseHandlerService.handleError)
  );
}

//summary Synonym Delete
public SummarySynonymDelete(groupForm: any): Observable<any> {
  console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "summarySynonymDelete");
  return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "summarySynonymDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
    return this.httpResponseHandlerService.getEventMessage(event)

  }), catchError(this.httpResponseHandlerService.handleError)
  );
}
        //summary Insert
        public SaveSummary(groupForm: any): Observable<any> {
          console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "summaryFieldInsert");
          return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "summaryFieldInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
            return this.httpResponseHandlerService.getEventMessage(event)
      
          }), catchError(this.httpResponseHandlerService.handleError)
          );
        }

          //summary Update
          public UpdateSummary(groupForm: any): Observable<any> {
            console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "summaryFieldEdit");
            return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "summaryFieldEdit"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
              return this.httpResponseHandlerService.getEventMessage(event)
        
            }), catchError(this.httpResponseHandlerService.handleError)
            );
          }

   
  //summary Delete
  public DeleteSummaryField(groupForm: any): Observable<any> {
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "summaryFieldDelete");
    return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "summaryFieldDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
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
      // Delete Agency
      public DeleteAgency(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "AgencyDelete");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "AgencyDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
 // Update Agency
 public UpdateAgency(groupForm: any): Observable<any> {
  console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "agencyEdit");
  return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "agencyEdit"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
    return this.httpResponseHandlerService.getEventMessage(event)

  }), catchError(this.httpResponseHandlerService.handleError)
  );
}
  // Get Agency
  public GetAgencies(){
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getAgencies");
    return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getAgencies") .pipe(catchError(this.httpResponseHandlerService.handleError));  
  }
       //Industry Insert
      //  public SaveIndustry(groupForm: any): Observable<any> {
      //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "industryInsert");
      //   return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "industryInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      //     return this.httpResponseHandlerService.getEventMessage(event)
    
      //   }), catchError(this.httpResponseHandlerService.handleError)
      //   );
      // }

       //Contract Vehicle Insert
      //  public SaveContractVehicle(groupForm: any): Observable<any> {
      //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleInsert");
      //   return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      //     return this.httpResponseHandlerService.getEventMessage(event)
    
      //   }), catchError(this.httpResponseHandlerService.handleError)
      //   );
      // }

      // Save Synonym Bridges
      // public SaveSynonymBridges(groupForm: any): Observable<any> {
      //   console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "saveSynonymBridges");
      //   return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "saveSynonymBridges"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      //     return this.httpResponseHandlerService.getEventMessage(event)
    
      //   }), catchError(this.httpResponseHandlerService.handleError)
      //   );
      // }
      // Save Summary Bridges
      public SaveSummaryBridges(groupForm: any): Observable<any> {
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "saveSummarySynonymBridges");
        return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "saveSummarySynonymBridges"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
          return this.httpResponseHandlerService.getEventMessage(event)
    
        }), catchError(this.httpResponseHandlerService.handleError)
        );
      }
      // Get summay field 
      public GetSummaryField(){
        console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getSummaryField");
        return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getSummaryField") .pipe(catchError(this.httpResponseHandlerService.handleError));  
      }
      //  delete state
      public deleteState(items: any,summarySynonymBridges,bridgeSummarySynonymStatesList) {
        let dBBridgeSummarySynonymStatesList ;
        if(bridgeSummarySynonymStatesList === null) {
          bridgeSummarySynonymStatesList = [];
        }
        if (summarySynonymBridges.BridgeSummarySynonymStatesList.length > 0) {
          dBBridgeSummarySynonymStatesList = summarySynonymBridges.BridgeSummarySynonymStatesList.find(a => a.StateId == items.StateId);
        }
         
        if (dBBridgeSummarySynonymStatesList == null && dBBridgeSummarySynonymStatesList == undefined) {
          let tempStates = bridgeSummarySynonymStatesList.findIndex(a => a.StateId == items.StateId);
          if (tempStates !== -1 && tempStates != null && tempStates !== undefined) {
            bridgeSummarySynonymStatesList.splice(tempStates, 1);
          }
        }
        if (dBBridgeSummarySynonymStatesList !== null && dBBridgeSummarySynonymStatesList !== undefined) {
         
         // console.log('Delete from array. addition of code on 26/5/2021'); 

 if(bridgeSummarySynonymStatesList.length > 0){
  let isExistsState = bridgeSummarySynonymStatesList.find(a => a.StateId == items.StateId && a.DBTransactionType === 2);
 
  if (isExistsState === undefined || isExistsState === null) {
    bridgeSummarySynonymStatesList.push({ BridgeSummarySynonymStatesId: dBBridgeSummarySynonymStatesList.BridgeSummarySynonymStatesId, RfpsummarySynonymId: dBBridgeSummarySynonymStatesList.RfpsummarySynonymId, StateId: dBBridgeSummarySynonymStatesList.StateId, DBTransactionType: 2 });
  }
}else{
  bridgeSummarySynonymStatesList.push({ BridgeSummarySynonymStatesId: dBBridgeSummarySynonymStatesList.BridgeSummarySynonymStatesId, RfpsummarySynonymId: dBBridgeSummarySynonymStatesList.RfpsummarySynonymId, StateId: dBBridgeSummarySynonymStatesList.StateId, DBTransactionType: 2 });
}
  }
        return bridgeSummarySynonymStatesList ;
      }

      // delete Agency summarySynonymBridges
      public deleteAgency(items: any,summarySynonymBridges,bridgeSummarySynonymAgencyList) {
        let dBBridgeSummarySynonymAgencyList;
        if(bridgeSummarySynonymAgencyList === null){
          bridgeSummarySynonymAgencyList = [];
        }
        if (summarySynonymBridges.BridgeSummarySynonymAgencyList.length > 0 ) {
          dBBridgeSummarySynonymAgencyList = summarySynonymBridges.BridgeSummarySynonymAgencyList.find(a => a.AgencyId == items.AgencyID);
        }
        
        if (dBBridgeSummarySynonymAgencyList == null && dBBridgeSummarySynonymAgencyList == undefined) {
          let tempAgency = bridgeSummarySynonymAgencyList.findIndex(a => a.AgencyId == items.AgencyID);
          if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
            bridgeSummarySynonymAgencyList.splice(tempAgency, 1);
          }
        }
        if (dBBridgeSummarySynonymAgencyList !== null && dBBridgeSummarySynonymAgencyList !== undefined) {
          // Delete 
          console.log('Delete from array.');

             // addition of code on 26/5/2021
      if(bridgeSummarySynonymAgencyList.length > 0){
        let isExistsAgency = bridgeSummarySynonymAgencyList.find(a => a.AgencyId == items.AgencyID && a.DBTransactionType === 2);  
        if (isExistsAgency === undefined || isExistsAgency === null) {
          bridgeSummarySynonymAgencyList.push({ BridgeSummarySynonymAgencyId: dBBridgeSummarySynonymAgencyList.BridgeSummarySynonymAgencyId, RfpsummarySynonymId: dBBridgeSummarySynonymAgencyList.RfpsummarySynonymId, AgencyId: dBBridgeSummarySynonymAgencyList.AgencyId, DBTransactionType: 2 });
        }
      }else{
        bridgeSummarySynonymAgencyList.push({ BridgeSummarySynonymAgencyId: dBBridgeSummarySynonymAgencyList.BridgeSummarySynonymAgencyId, RfpsummarySynonymId: dBBridgeSummarySynonymAgencyList.RfpsummarySynonymId, AgencyId: dBBridgeSummarySynonymAgencyList.AgencyId, DBTransactionType: 2 });
    }
 //End of code on 26/5/2021

        }
       
        return bridgeSummarySynonymAgencyList ;
      }

      public deleteIndustry(items: any,summarySynonymBridges,bridgeSummarySynonymIndustryList) {
        let dBBridgeSummarySynonymIndustryList ;
        if (bridgeSummarySynonymIndustryList === null) {
          bridgeSummarySynonymIndustryList = [];
        }
        if (summarySynonymBridges.BridgeSummarySynonymIndustryList.length > 0) {
          dBBridgeSummarySynonymIndustryList = summarySynonymBridges.BridgeSummarySynonymIndustryList.find(a => a.IndustryId == items.IndustryID);
        }
        
        if (dBBridgeSummarySynonymIndustryList == null && dBBridgeSummarySynonymIndustryList == undefined) {
          let tempIndustry = bridgeSummarySynonymIndustryList.findIndex(a => a.IndustryId == items.IndustryID);
          if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
            bridgeSummarySynonymIndustryList.splice(tempIndustry, 1);
          }
        }
        if (dBBridgeSummarySynonymIndustryList !== null && dBBridgeSummarySynonymIndustryList !== undefined) {
          console.log('Delete from array.');

          // addition of code on 26/5/2021
      if(bridgeSummarySynonymIndustryList.length > 0){
        let isExistsIndustry = bridgeSummarySynonymIndustryList.find(a => a.IndustryId == items.IndustryID && a.DBTransactionType === 2);
      
        if (isExistsIndustry === undefined || isExistsIndustry === null) {
          bridgeSummarySynonymIndustryList.push({ BridgeSummarySynonymIndustryId: dBBridgeSummarySynonymIndustryList.BridgeSummarySynonymIndustryId, RfpsummarySynonymId: dBBridgeSummarySynonymIndustryList.RfpsummarySynonymId, IndustryId: dBBridgeSummarySynonymIndustryList.IndustryId, DBTransactionType: 2 });
        }
      }else{
        bridgeSummarySynonymIndustryList.push({ BridgeSummarySynonymIndustryId: dBBridgeSummarySynonymIndustryList.BridgeSummarySynonymIndustryId, RfpsummarySynonymId: dBBridgeSummarySynonymIndustryList.RfpsummarySynonymId, IndustryId: dBBridgeSummarySynonymIndustryList.IndustryId, DBTransactionType: 2 });
    }
 //End of code on 26/5/2021
             }
        return bridgeSummarySynonymIndustryList ; 
      }
      public deleteContractVehicle(items: any,summarySynonymBridges,bridgeSummarySynonymContractVehicleList) {  
        let dBBridgeSummarySynonymContractVehicleList;
        if (bridgeSummarySynonymContractVehicleList === null) {
            bridgeSummarySynonymContractVehicleList = [];
        }
        if (summarySynonymBridges.BridgeSummarySynonymContractVehicleList.length > 0) {
          dBBridgeSummarySynonymContractVehicleList = summarySynonymBridges.BridgeSummarySynonymContractVehicleList.find(a => a.ContractVehicleId == items.ContractVehicleId);
        } 
        if (dBBridgeSummarySynonymContractVehicleList == null && dBBridgeSummarySynonymContractVehicleList == undefined) {
          let tempContract = bridgeSummarySynonymContractVehicleList.findIndex(a => a.ContractVehicleId == items.ContractVehicleId);
          if (tempContract !== -1 && tempContract != null && tempContract !== undefined) {
            bridgeSummarySynonymContractVehicleList.splice(tempContract, 1);
          }
        }
        if (dBBridgeSummarySynonymContractVehicleList !== null && dBBridgeSummarySynonymContractVehicleList !== undefined) {
          // Delete 
          console.log('Delete from array.');

 
          // addition of code on 26/5/2021

  if(bridgeSummarySynonymContractVehicleList.length > 0){
    let isExistsContractVehicleList = bridgeSummarySynonymContractVehicleList.find(a => a.ContractVehicleId == items.ContractVehicleId && a.DBTransactionType === 2);
  
    if (isExistsContractVehicleList === undefined || isExistsContractVehicleList === null) {
      bridgeSummarySynonymContractVehicleList.push({ BridgeSummarySynonymContractVehicleId: dBBridgeSummarySynonymContractVehicleList.BridgeSummarySynonymContractVehicleId, RfpsummarySynonymId: dBBridgeSummarySynonymContractVehicleList.RfpsummarySynonymId, ContractVehicleId: dBBridgeSummarySynonymContractVehicleList.ContractVehicleId, DBTransactionType: 2 });
    }
  }else{
    bridgeSummarySynonymContractVehicleList.push({ BridgeSummarySynonymContractVehicleId: dBBridgeSummarySynonymContractVehicleList.BridgeSummarySynonymContractVehicleId, RfpsummarySynonymId: dBBridgeSummarySynonymContractVehicleList.RfpsummarySynonymId, ContractVehicleId: dBBridgeSummarySynonymContractVehicleList.ContractVehicleId, DBTransactionType: 2 });
}

//End of code on 26/5/2021

                 }
        return bridgeSummarySynonymContractVehicleList;
      }
    
      //
      public deleteOpportunityType(items: any,summarySynonymBridges,bridgeSummarySynonymOpportunityTypeList) {
        if(bridgeSummarySynonymOpportunityTypeList === null){
          bridgeSummarySynonymOpportunityTypeList = [];
        }
        let dBBridgeSummarySynonymOpportunityTypeList;
        if (summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList.length > 0) {
          dBBridgeSummarySynonymOpportunityTypeList = summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList.find(a => a.OpportunityTypeId == items);
        }
        
        if (dBBridgeSummarySynonymOpportunityTypeList == null && dBBridgeSummarySynonymOpportunityTypeList == undefined) {
          let tempOpportunityType = bridgeSummarySynonymOpportunityTypeList.findIndex(a => a.OpportunityTypeId == items);
          if (tempOpportunityType !== -1 && tempOpportunityType != null && tempOpportunityType !== undefined) {
            bridgeSummarySynonymOpportunityTypeList.splice(tempOpportunityType, 1);
          }
        }
        if (dBBridgeSummarySynonymOpportunityTypeList !== null && dBBridgeSummarySynonymOpportunityTypeList !== undefined) {
          // Delete 
          console.log('Delete from array.');
          bridgeSummarySynonymOpportunityTypeList.push({ BridgeSummarySynonymOpportunityTypeId: dBBridgeSummarySynonymOpportunityTypeList.BridgeSummarySynonymOpportunityTypeId, RfpsummarySynonymId: dBBridgeSummarySynonymOpportunityTypeList.RfpsummarySynonymId, OpportunityTypeId: dBBridgeSummarySynonymOpportunityTypeList.OpportunityTypeId, DBTransactionType: 2 });
        }
        return bridgeSummarySynonymOpportunityTypeList;
      }
}
