import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // Get token
  public loggedIn() {
     return !!localStorage.getItem('parserUser');//response;
  }
  // Decode URL and get Opportunity id 
public urlDecode(){   
  let opportunityURL = window.location.search.replace('?',"").trim();     
  if (opportunityURL != "" && opportunityURL != null) {
     // Decode URL 
    //  if (opportunityURL.includes('%3D')){
    //    opportunityURL = opportunityURL.replace('%3D','=');        

   opportunityURL = decodeURIComponent(opportunityURL);
   if (opportunityURL.endsWith('=')) {
        opportunityURL = opportunityURL.replace(/=/g,'');
    }    
       // Decode URL  
   var OpportunityId =   window.atob(opportunityURL).split('=');
   if (OpportunityId.length >0 ) 
        sessionStorage.setItem("OpportunityId", OpportunityId[1]);
//  }  
} 
}
}
