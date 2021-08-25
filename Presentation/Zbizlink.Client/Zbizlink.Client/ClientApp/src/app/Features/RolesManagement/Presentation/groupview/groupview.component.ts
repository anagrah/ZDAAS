import { AddEditGroupComponent } from './../add-edit-group/add-edit-group.component';
import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';



export interface PeriodicElement {
  groupname: string;
  description: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { groupname: 'Market Segment Group', description:'Marketing segment group', },
  { groupname: 'Proposal Group Test AB', description:'Write Proposal Group', },
  { groupname: 'Proposal Reviewers', description:'Group for proposal reviewrs', },
  { groupname: 'Marketing Group', description:'Group of marketing Managment', },
  { groupname: 'Group A', description:'Group A for testing', },


];




/**
 * @title Basic use of `<table mat-table>`
 */

 @Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})



export class GroupviewComponent {

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['groupname', 'description', ];
  dataSource = ELEMENT_DATA;

  openDialog() {
   
    const dailogConfig = new MatDialogConfig();
    dailogConfig.disableClose = true;
    this.dialog.open(AddEditGroupComponent, dailogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    }
  }


