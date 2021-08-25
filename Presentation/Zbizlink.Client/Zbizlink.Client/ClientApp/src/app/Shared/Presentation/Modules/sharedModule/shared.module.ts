import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../HeaderComponents/header/header.component';
import { RouterModule} from '@angular/router';
import { NavMenuComponent } from '../../HeaderComponents/nav-menu/nav-menu.component'
import { MaterialModule } from 'src/app/Helper/material/material.module';
import { SideNavComponent } from '../../HeaderComponents/side-nav/side-nav.component';
import { SharedServicesModule } from '../shared-services.module';






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
  exports: [RouterModule, HeaderComponent, SharedServicesModule],
  providers:[SharedServicesModule],
  entryComponents: [NavMenuComponent]
})
export class SharedModule { }
