import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateAccountComponent } from './core/components/create-account/create-account.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LoginComponent } from './core/components/login/login.component';
import { MarketingCampaignComponent } from './core/components/marketing-campaign/marketing-campaign.component';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { DocumentParserFormComponent } from './parser/Components/document-parser-form/document-parser-form.component';
//import { AuthGuard } from './shared/services/auth.guard';
const routes = [
    { path: '', component: DocumentParserFormComponent },
    //{ path: '', component: LoginComponent }, 
    { path: 'login-user', component: LoginComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'marketing-campaign', component: MarketingCampaignComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map