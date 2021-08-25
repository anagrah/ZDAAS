import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddEditGroupFacadeService } from "../../Abstraction/Facade/add-edit-group-facade.service";
import { AddEditRolesFacadeService } from "../../Abstraction/Facade/add-edit-roles-facade.service";
import { AddEditScreenFacadeService } from "../../Abstraction/Facade/add-edit-screen-facade.service";
import { GroupViewFacadeService } from "../../Abstraction/Facade/group-view-facade.service";
import { RolesViewFacadeService } from "../../Abstraction/Facade/roles-view-facade.service";
import { ScreenViewFacadeService } from "../../Abstraction/Facade/screen-view-facade.service";
import { AddEditGroupService } from "../../Core/Services/add-edit-group.service";
import { AddEditRolesService } from "../../Core/Services/add-edit-roles.service";
import { AddEditScreenService } from "../../Core/Services/add-edit-screen.service";
import { GroupViewService } from "../../Core/Services/group-view.service";
import { RolesViewService } from "../../Core/Services/roles-view.service";
import { ScreenViewService } from "../../Core/Services/screen-view.service";



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
//Micro-Services
  AddEditGroupService,
  AddEditRolesService,
  AddEditScreenService,
  GroupViewService,
  RolesViewService,
  ScreenViewService,


//Facade-Services
  AddEditGroupFacadeService,
  AddEditRolesFacadeService,
  AddEditScreenFacadeService,
  GroupViewFacadeService,
  RolesViewFacadeService,
  ScreenViewFacadeService,

  ]
})
export class RolesServicesModule { }
