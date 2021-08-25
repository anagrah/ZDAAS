import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
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
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuState:string = 'out';
  isShowDiv = false;
  toggleMenu(){
 this.isShowDiv = this.menuState === 'out' ? true : false;
    this.menuState = this.menuState === 'out' ? 'in' : 'out';

  }


}
