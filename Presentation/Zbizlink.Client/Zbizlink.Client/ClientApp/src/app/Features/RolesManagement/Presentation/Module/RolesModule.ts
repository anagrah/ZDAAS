import { MaterialModule } from './../../../../Helper/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesServicesModule } from './roles-services.module';
import { AddEditGroupComponent } from '../add-edit-group/add-edit-group.component';
import { AddEditRolesComponent } from '../add-edit-roles/add-edit-roles.component';
import { AddEditScreenComponent } from '../add-edit-screen/add-edit-screen.component';
import { GroupviewComponent } from '../groupview/groupview.component';
import { RolesviewComponent } from '../rolesview/rolesview.component';
import { ScreenviewComponent } from '../screenview/screenview.component';
import { CommonModule } from '@angular/common';





const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'add-edit-group',
        component: AddEditGroupComponent,
      },
      {
        path: 'add-edit-roles',
        component: AddEditRolesComponent,
      },
      {
        path: 'add-edit-screen',
        component: AddEditScreenComponent,
      },
      {
        path: 'group-view',
        component: GroupviewComponent,
      },
      {
        path: 'roles-view',
        component: RolesviewComponent,
      },
      {
        path: 'screen-view',
        component: ScreenviewComponent,
      }
    ],
  },
];





@NgModule({
  declarations: [
    GroupviewComponent,
    AddEditGroupComponent,
    AddEditScreenComponent,
    ScreenviewComponent,
    RolesviewComponent,
    AddEditRolesComponent,
],

    imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RolesServicesModule,
      RouterModule.forChild(routes),
    ],

    exports: [RolesServicesModule, RouterModule],
    providers: [RolesServicesModule],
    bootstrap: [
      GroupviewComponent,
      AddEditGroupComponent,
      AddEditScreenComponent,
      ScreenviewComponent,
      RolesviewComponent,
      AddEditRolesComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    entryComponents: [AddEditGroupComponent]
  })

export class RolesModule{}
