import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CampaignRoutingModule } from './campaign.routing.module';
import { ToastrModule } from 'ngx-toastr';
import { UserRightsComponent } from './components/user-rights/user-rights.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CampaignComponent } from './campaign.component';
import { MaterialModule } from '../material/material.module';
import { MarketingCampaignComponent } from './components/marketing-campaign/marketing-campaign.component';
import { CategorySynonymComponent } from './components/category-synonym/category-synonym.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddCategoryFieldComponent } from './shared/add-category-field/add-category-field.component';

import { ViewAllSynonymListsComponent } from './components/view-all-synonym-lists/view-all-synonym-lists.component';
import { OpportunityLinkComponent } from './shared/opportunity-link/opportunity-link.component';
import { SummarySynonymComponent } from './components/summary-synonym/summary-synonym.component';
import { ViewAllSummarySynonymComponent } from './components/CampaignDialogs/view-all-summary-synonym/view-all-summary-synonym.component';
import { SaveChangesBeforeMoveComponent } from './shared/save-changes-before-move/save-changes-before-move.component';
import { StateComponent } from './components/state/state.component';
import { AgencyComponent } from './components/agency/agency.component';
import { IndustryComponent } from './components/industry/industry.component';
import { ContractVehicleComponent } from './components/contract-vehicle/contract-vehicle.component';
// search module 
import { MatSelectFilterModule } from 'mat-select-filter'; 
import {MatListModule} from '@angular/material/list';
import { SummaryComponent } from './components/summary/summary.component';
import { SynonymsComponent } from './components/synonyms/synonyms.component';
import { AddEditSummaryComponent } from './components/Dialogs/add-edit-summary/add-edit-summary.component';
import { SummarySynonymMoveComponent } from './components/summary-synonym-move/summary-synonym-move.component';
import {CategorySynonymMoveComponent} from './components/category-synonym-move/category-synonym-move.component';
import { ConfirmationDialogComponent } from './components/Dialogs/confirmation-dialog/confirmation-dialog.component';
import { AddEditSynonymsComponent } from './components/Dialogs/add-edit-synonyms/add-edit-synonyms.component';
import { SummarySynonymListComponent } from './components/summary-synonym-list/summary-synonym-list.component';
import { AddEditSummarySynonymsComponent } from './components/Dialogs/add-edit-summary-synonyms/add-edit-summary-synonyms.component';
import { AddEditAgencyComponent } from './components/Dialogs/add-edit-agency/add-edit-agency.component';
import { AddEditContractVehicleComponent } from './components/Dialogs/add-edit-contract-vehicle/add-edit-contract-vehicle.component';
import { AddEditIndustryComponent } from './components/Dialogs/add-edit-industry/add-edit-industry.component';


@NgModule({
  declarations: [
    MenuComponent,
    CreateAccountComponent,
    LoginComponent,
    UserListComponent,
    DashboardComponent,
    MarketingCampaignComponent,
    UserRightsComponent,
    SendEmailComponent,
    UpdateUserComponent,
    CampaignComponent,
    CategorySynonymComponent,
    SummarySynonymComponent,
    AddCategoryFieldComponent,
    OpportunityLinkComponent,
    ViewAllSynonymListsComponent,
    ViewAllSummarySynonymComponent,
    SaveChangesBeforeMoveComponent,
    StateComponent,
    AgencyComponent,
    IndustryComponent,
    ContractVehicleComponent,
    SummaryComponent,
    SynonymsComponent,
    AddEditSummaryComponent,
    SummarySynonymMoveComponent,
    CategorySynonymMoveComponent,
    ConfirmationDialogComponent,
    AddEditSynonymsComponent,
    SummarySynonymListComponent,
    AddEditSummarySynonymsComponent,
    AddEditAgencyComponent,
    AddEditContractVehicleComponent,
    AddEditIndustryComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    SharedModule,
    CampaignRoutingModule,
    MatCheckboxModule,
    MaterialModule, 
    MatSelectFilterModule, 
    MatListModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
  ,
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
   // MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    SharedModule,
    CampaignRoutingModule,
    MatCheckboxModule,MaterialModule
  ]
})
export class CampaignManagementModule { }
