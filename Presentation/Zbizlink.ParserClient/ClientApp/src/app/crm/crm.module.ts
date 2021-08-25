import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CRMSelectionComponent } from './components/selection/selection.component';
import { SalesForceCRMComponent } from './components/salesforce/salesforce.component';
import { ZohoCRMComponent } from './components/zoho/zoho.component';
import { CrmServices } from './services/crm.services';
import { CRMTablesComponent } from './components/tables/tables.component';
import { CRMTablesViewComponent } from './components/tableview/tableview.component';
import { MatSelectModule } from '@angular/material/select';
import { SelectedTablesService } from './shared/selectedtables.service';
import { DataFilterCustomPipe } from './shared/datafilter.custompipe';
import { FieldsMappingComponent } from './components/fieldsmapping/fieldsmapping.component';
import { MaterialModule } from '../material/material.module';
import { CRMRoutingModule } from './crm-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CRMComponent } from './crm.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EndpointFactoryService } from './shared/endpoint-factory.service';
import { LoaderService } from './shared/services/loader.service';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { NotificationService } from './shared/services/notification.service';
import { SFCRMTablesComponent } from './components/crmtables/crmtables.component';
   
  

@NgModule({
  imports: [
    CommonModule, MatSelectModule, FormsModule,
    ReactiveFormsModule, MaterialModule, ToastrModule.forRoot(), CRMRoutingModule,
    HttpClientModule, 
    
  ],
  declarations: [
    CRMSelectionComponent, CRMComponent,
    SalesForceCRMComponent, DataFilterCustomPipe,SFCRMTablesComponent,
    ZohoCRMComponent, CRMTablesViewComponent, CRMTablesComponent, CRMTablesComponent,
    FieldsMappingComponent, NavMenuComponent, LoaderComponent

  ],
  providers: [
    CrmServices, SelectedTablesService,
    EndpointFactoryService,
    LoaderService, NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
})
export class CRMModule { }
