import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentParserFormComponent } from '../parser/Components/document-parser-form/document-parser-form.component';

import { CampaignComponent } from './campaign.component';
import { CategorySynonymComponent } from './components/category-synonym/category-synonym.component';
import { CreateAccountComponent } from './components/create-account/create-account.component'; 
import { LoginComponent } from './components/login/login.component';
import { MarketingCampaignComponent } from './components/marketing-campaign/marketing-campaign.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CampaignAuthService } from './services/campaign-auth.service';
import { SummarySynonymComponent } from './components/summary-synonym/summary-synonym.component';
import { AgencyComponent } from './components/agency/agency.component';
import { StateComponent } from './components/state/state.component';
import { ContractVehicleComponent } from './components/contract-vehicle/contract-vehicle.component';
import { IndustryComponent } from './components/industry/industry.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SynonymsComponent } from './components/synonyms/synonyms.component';
import { SummarySynonymMoveComponent } from './components/summary-synonym-move/summary-synonym-move.component';
import { SummarySynonymListComponent } from './components/summary-synonym-list/summary-synonym-list.component';
import { CategorySynonymMoveComponent } from './components/category-synonym-move/category-synonym-move.component';

const routes: Routes = [
  {
    path: '', component: CampaignComponent,
    children: [      
      { path: 'category-synonym', component: CategorySynonymComponent,canActivate:[CampaignAuthService]},
      { path: 'campaign', component: DocumentParserFormComponent,canActivate:[CampaignAuthService] },
      // { path: 'create-account', component: CreateAccountComponent,canActivate:[CampaignAuthService] }, 
      { path: 'login', component: LoginComponent },
      { path: 'agency', component: AgencyComponent,canActivate:[CampaignAuthService]},
      { path: 'state', component: StateComponent,canActivate:[CampaignAuthService]},
      { path: 'contract-vehicle', component: ContractVehicleComponent,canActivate:[CampaignAuthService]},
      { path: 'industry', component: IndustryComponent,canActivate:[CampaignAuthService]},
      { path: 'summary-synonym', component: SummarySynonymComponent,canActivate:[CampaignAuthService]},
      { path: 'summary-synonym-move', component: SummarySynonymMoveComponent,canActivate:[CampaignAuthService]},
      { path: 'category-synonym-move', component: CategorySynonymMoveComponent,canActivate:[CampaignAuthService]},
      { path: 'summary-synonym-list', component: SummarySynonymListComponent,canActivate:[CampaignAuthService]},
      { path: 'synonyms', component: SynonymsComponent,canActivate:[CampaignAuthService]},
      { path: 'summary', component: SummaryComponent,canActivate:[CampaignAuthService]},

      // { path: 'user-list', component: UserListComponent ,canActivate:[CampaignAuthService]},
      { path: 'marketing-campaign', component: MarketingCampaignComponent,canActivate:[CampaignAuthService] }
    ]
  },
  
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
