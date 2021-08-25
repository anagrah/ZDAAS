import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { RouterModule} from '@angular/router';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component'
import { MaterialModule } from 'src/app/Helper/material/material.module';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    HeaderComponent,
    NavMenuComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,





  ],
  exports:[
HeaderComponent
  ],
  entryComponents: [NavMenuComponent]
})
export class SharedModule { }
