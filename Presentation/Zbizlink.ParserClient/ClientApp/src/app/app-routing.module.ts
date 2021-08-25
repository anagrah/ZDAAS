import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/ErrorPage/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crm', loadChildren: () => import('./crm/crm.module').then(m => m.CRMModule) },
    ]
  },
  {
    path: '',
    children: [
      { path: 'campaign', loadChildren: () => import('./CampaignManagement/campaign.module').then(m => m.CampaignManagementModule) },
    ]
  },  
  {
    path: '',
    children: [
      { path: 'parser', loadChildren: () => import('./parser/parser.module').then(m => m.ParserModule) },
    ]
  },
  {
    path: "404",
    component: PageNotFoundComponent,
 },
 {
    path: "**",
    redirectTo: '404' 
 }
  //{ path: '**', redirectTo: 'login', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    
