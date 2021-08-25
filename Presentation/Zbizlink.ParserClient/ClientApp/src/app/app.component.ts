import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: ActivatedRoute) {}  
  ngOnInit()
  { 
    this.route.queryParams.forEach(params => 
      {  
        if(typeof params.compid != 'undefined')
        {
          localStorage.setItem('zbizlinkUser', 'true'); 
          console.log("Zbizlink User " + localStorage.getItem('zbizlinkUser'));
          typeof params.compid === 'undefined' ? localStorage.setItem('compId', '0') : localStorage.setItem('compId', params.compid);
          typeof params.userid === 'undefined' ? localStorage.setItem('userid', '0') : localStorage.setItem('userid', params.userid);
          typeof params.companySegmentID === 'undefined' ? localStorage.setItem('companySegmentID', '0') : localStorage.setItem('companySegmentID', params.companySegmentID);
          typeof params.clientID === 'undefined' ? localStorage.setItem('clientID', '0') : localStorage.setItem('clientID', params.clientID);
        }
      });
  } 
}
