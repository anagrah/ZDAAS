import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SFCRMTablesComponent } from './components/crmtables/crmtables.component';
import { FieldsMappingComponent } from './components/fieldsmapping/fieldsmapping.component';
import { SalesForceCRMComponent } from './components/salesforce/salesforce.component';
import { CRMSelectionComponent } from './components/selection/selection.component';
import { CRMTablesComponent } from './components/tables/tables.component';
import { CRMTablesViewComponent } from './components/tableview/tableview.component';
import { ZohoCRMComponent } from './components/zoho/zoho.component';
import { CRMComponent } from './crm.component';


const routes: Routes = [
  {
    path: 'crm', component: CRMComponent,
    children: [
      { path: '', redirectTo:'selection', pathMatch:'full' },
      { path: 'selection', component: CRMSelectionComponent, data: { title: 'Selection' } },
      { path: 'salesforce', component: SalesForceCRMComponent, data: { title: 'Selection' } },
      { path: 'zoho', component: ZohoCRMComponent, data: { title: 'Zoho' } },
      { path: 'tables', component: CRMTablesComponent, data: { title: 'Tables' } },
      { path: 'crmtables', component: SFCRMTablesComponent, data: { title: 'Tables' } },
      { path: 'tablesview', component: CRMTablesViewComponent, data: { title: 'TablesView' } },
      { path: 'mapping', component: FieldsMappingComponent, data: { title: 'mapping' } }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
