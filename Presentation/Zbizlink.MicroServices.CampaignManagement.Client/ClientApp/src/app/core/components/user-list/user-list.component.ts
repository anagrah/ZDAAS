import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Email', 'UserType', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  Email: string;
  UserType: string;
  Action: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},
  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'},

  {Email: 'kashif@zd-techsolutions.com', UserType: 'admin', Action: 'Delete'}   
];