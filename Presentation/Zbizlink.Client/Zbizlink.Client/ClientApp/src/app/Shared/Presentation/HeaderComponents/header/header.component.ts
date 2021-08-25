import { Component, OnInit, } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {

    const dailogConfig = new MatDialogConfig();
    dailogConfig.disableClose = true;
    dailogConfig.panelClass='navmenu_poup',
    this.dialog.open(NavMenuComponent, dailogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    }
    menuState:string = 'out';
    isShowDiv = false;
  toggleMenu(){
 this.isShowDiv = this.menuState === 'out' ? true : false;
    this.menuState = this.menuState === 'out' ? 'in' : 'out';

  }
}
