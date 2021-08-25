import { Component, OnInit } from '@angular/core';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.css']
})
export class UserRightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userGroups: string[] = [
    'Zbizlink User', 'Parser User','Campaign User','CRM User'
  ];
  ViewName: string[] =  ['Add Opportunity','Edit Opportunity','Delete Opportunity','Add Proposal','Edit Proposal', 'Delete Proposal'];

  tiles: Tile[] = [
    {text: 'Add', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Edit', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Delete', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'View', cols:1, rows: 1, color: 'lightblue'}
  ];
}
