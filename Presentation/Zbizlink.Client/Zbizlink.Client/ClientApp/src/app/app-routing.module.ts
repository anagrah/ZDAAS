import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  //UserManagement module is Lazily Loaded
  {
    path: 'user',
    loadChildren: () =>
    import('./Features/UserManagement/Presentation/module/UserModule').then(um => um.UserModule)
  },

  // RolesManagement module is Lazily Loaded
  {
    path: 'roles',
    loadChildren: () =>
    import('./Features/RolesManagement/Presentation/Module/RolesModule').then(rm => rm.RolesModule)
  },

    // CompanyManagement module is Lazily Loaded
    {
      path: 'company',
      loadChildren: () =>
      import('./Features/CompanyManagement/Presentation/Module/company.module').then(cm => cm.CompanyModule)
    },

];

@NgModule({

    imports: [

        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
