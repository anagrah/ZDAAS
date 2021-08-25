(self["webpackChunkzbizlink_client"] = self["webpackChunkzbizlink_client"] || []).push([["src_app_Features_RolesManagement_Presentation_Module_RolesModule_ts"],{

/***/ 80797:
/*!*****************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/Module/RolesModule.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": function() { return /* binding */ RolesModule; }
/* harmony export */ });
/* harmony import */ var _Helper_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../Helper/material/material.module */ 78135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _roles_services_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles-services.module */ 34640);
/* harmony import */ var _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-edit-group/add-edit-group.component */ 80973);
/* harmony import */ var _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-edit-roles/add-edit-roles.component */ 43091);
/* harmony import */ var _add_edit_screen_add_edit_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-edit-screen/add-edit-screen.component */ 31897);
/* harmony import */ var _groupview_groupview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../groupview/groupview.component */ 509);
/* harmony import */ var _rolesview_rolesview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rolesview/rolesview.component */ 27170);
/* harmony import */ var _screenview_screenview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screenview/screenview.component */ 85072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    {
        path: '', children: [
            {
                path: 'add-edit-group',
                component: _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__.AddEditGroupComponent,
            },
            {
                path: 'add-edit-roles',
                component: _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_3__.AddEditRolesComponent,
            },
            {
                path: 'add-edit-screen',
                component: _add_edit_screen_add_edit_screen_component__WEBPACK_IMPORTED_MODULE_4__.AddEditScreenComponent,
            },
            {
                path: 'group-view',
                component: _groupview_groupview_component__WEBPACK_IMPORTED_MODULE_5__.GroupviewComponent,
            },
            {
                path: 'roles-view',
                component: _rolesview_rolesview_component__WEBPACK_IMPORTED_MODULE_6__.RolesviewComponent,
            },
            {
                path: 'screen-view',
                component: _screenview_screenview_component__WEBPACK_IMPORTED_MODULE_7__.ScreenviewComponent,
            }
        ],
    },
];
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _groupview_groupview_component__WEBPACK_IMPORTED_MODULE_5__.GroupviewComponent,
            _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__.AddEditGroupComponent,
            _add_edit_screen_add_edit_screen_component__WEBPACK_IMPORTED_MODULE_4__.AddEditScreenComponent,
            _screenview_screenview_component__WEBPACK_IMPORTED_MODULE_7__.ScreenviewComponent,
            _rolesview_rolesview_component__WEBPACK_IMPORTED_MODULE_6__.RolesviewComponent,
            _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_3__.AddEditRolesComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _Helper_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _roles_services_module__WEBPACK_IMPORTED_MODULE_1__.RolesServicesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
        ],
        exports: [_roles_services_module__WEBPACK_IMPORTED_MODULE_1__.RolesServicesModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
        providers: [_roles_services_module__WEBPACK_IMPORTED_MODULE_1__.RolesServicesModule],
        bootstrap: [
            _groupview_groupview_component__WEBPACK_IMPORTED_MODULE_5__.GroupviewComponent,
            _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__.AddEditGroupComponent,
            _add_edit_screen_add_edit_screen_component__WEBPACK_IMPORTED_MODULE_4__.AddEditScreenComponent,
            _screenview_screenview_component__WEBPACK_IMPORTED_MODULE_7__.ScreenviewComponent,
            _rolesview_rolesview_component__WEBPACK_IMPORTED_MODULE_6__.RolesviewComponent,
            _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_3__.AddEditRolesComponent,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_ELEMENTS_SCHEMA],
        entryComponents: [_add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__.AddEditGroupComponent]
    })
], RolesModule);



/***/ }),

/***/ 80973:
/*!**************************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/add-edit-group/add-edit-group.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditGroupComponent": function() { return /* binding */ AddEditGroupComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_add_edit_group_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-edit-group.component.html */ 54795);
/* harmony import */ var _add_edit_group_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-group.component.css */ 44834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AddEditGroupComponent = class AddEditGroupComponent {
    constructor(ref) {
        this.ref = ref;
        this.users = [
            { value: 'Imran Munir', viewValue: 'Imran Munir' },
            { value: 'Mahmood', viewValue: 'Mahmood' },
            { value: 'Tahir Aziz', viewValue: 'Tahir Aziz' },
            { value: 'Tahir Bashir', viewValue: 'Tahir Bashir' },
            { value: 'Ahmad', viewValue: 'Ahmad' },
            { value: 'Sajjad', viewValue: 'Sajjad' }
        ];
        this.roles = [
            { value: 'Role 1', viewValue: 'Role 1' },
            { value: 'Role 2', viewValue: 'Role 2' },
            { value: 'Role 3', viewValue: 'Role 3' },
            { value: 'Role 4', viewValue: 'Role 4' },
            { value: 'Role 5', viewValue: 'Role 5' },
            { value: 'Role 6', viewValue: 'Role 6' }
        ];
    }
    // roles = new FormControl();
    // roleList: string[] = ['Role 1', 'Role 2', 'Role 3', 'Role 4', 'Role 5', 'Role 6'];
    // selectedRoles;
    ngOnInit() {
    }
};
AddEditGroupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef }
];
AddEditGroupComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-edit-group',
        template: _raw_loader_add_edit_group_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_edit_group_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddEditGroupComponent);



/***/ }),

/***/ 43091:
/*!**************************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/add-edit-roles/add-edit-roles.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditRolesComponent": function() { return /* binding */ AddEditRolesComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_add_edit_roles_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-edit-roles.component.html */ 21101);
/* harmony import */ var _add_edit_roles_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-roles.component.css */ 98715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AddEditRolesComponent = class AddEditRolesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddEditRolesComponent.ctorParameters = () => [];
AddEditRolesComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-add-edit-roles',
        template: _raw_loader_add_edit_roles_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_edit_roles_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddEditRolesComponent);



/***/ }),

/***/ 31897:
/*!****************************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/add-edit-screen/add-edit-screen.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditScreenComponent": function() { return /* binding */ AddEditScreenComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_add_edit_screen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-edit-screen.component.html */ 75459);
/* harmony import */ var _add_edit_screen_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-screen.component.css */ 73869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AddEditScreenComponent = class AddEditScreenComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddEditScreenComponent.ctorParameters = () => [];
AddEditScreenComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-add-edit-screen',
        template: _raw_loader_add_edit_screen_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_edit_screen_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddEditScreenComponent);



/***/ }),

/***/ 509:
/*!****************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/groupview/groupview.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupviewComponent": function() { return /* binding */ GroupviewComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_groupview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./groupview.component.html */ 25766);
/* harmony import */ var _groupview_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupview.component.css */ 44173);
/* harmony import */ var _add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../add-edit-group/add-edit-group.component */ 80973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const ELEMENT_DATA = [
    { groupname: 'Market Segment Group', description: 'Marketing segment group', },
    { groupname: 'Proposal Group Test AB', description: 'Write Proposal Group', },
    { groupname: 'Proposal Reviewers', description: 'Group for proposal reviewrs', },
    { groupname: 'Marketing Group', description: 'Group of marketing Managment', },
    { groupname: 'Group A', description: 'Group A for testing', },
];
/**
 * @title Basic use of `<table mat-table>`
 */
let GroupviewComponent = class GroupviewComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['groupname', 'description',];
        this.dataSource = ELEMENT_DATA;
    }
    openDialog() {
        const dailogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dailogConfig.disableClose = true;
        this.dialog.open(_add_edit_group_add_edit_group_component__WEBPACK_IMPORTED_MODULE_2__.AddEditGroupComponent, dailogConfig);
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
    }
};
GroupviewComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog }
];
GroupviewComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-groupview',
        template: _raw_loader_groupview_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_groupview_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GroupviewComponent);



/***/ }),

/***/ 27170:
/*!****************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/rolesview/rolesview.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesviewComponent": function() { return /* binding */ RolesviewComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_rolesview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rolesview.component.html */ 33676);
/* harmony import */ var _rolesview_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolesview.component.css */ 45247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let RolesviewComponent = class RolesviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
RolesviewComponent.ctorParameters = () => [];
RolesviewComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-rolesview',
        template: _raw_loader_rolesview_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rolesview_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RolesviewComponent);



/***/ }),

/***/ 85072:
/*!******************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/screenview/screenview.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenviewComponent": function() { return /* binding */ ScreenviewComponent; }
/* harmony export */ });
/* harmony import */ var _raw_loader_screenview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./screenview.component.html */ 19762);
/* harmony import */ var _screenview_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenview.component.css */ 53581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ScreenviewComponent = class ScreenviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
ScreenviewComponent.ctorParameters = () => [];
ScreenviewComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-screenview',
        template: _raw_loader_screenview_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_screenview_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScreenviewComponent);



/***/ }),

/***/ 44834:
/*!***************************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/add-edit-group/add-edit-group.component.css ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popup_btnbox{ text-align: center;}\r\n.form_input_btn_black{ margin-right: 20px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxrQkFBa0IsQ0FBQztBQUNsQyx1QkFBdUIsa0JBQWtCLENBQUMiLCJmaWxlIjoiYWRkLWVkaXQtZ3JvdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cF9idG5ib3h7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5mb3JtX2lucHV0X2J0bl9ibGFja3sgbWFyZ2luLXJpZ2h0OiAyMHB4O31cclxuIl19 */");

/***/ }),

/***/ 98715:
/*!***************************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/add-edit-roles/add-edit-roles.component.css ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntextarea{\r\n  width: 100%;\r\n  height: 100%;\r\n  resize: none;\r\n  padding: 8px;\r\n}\r\n\r\ntable{\r\n  width: 100%;\r\n  border-collapse: separate;\r\n  border-spacing: 0 15px;\r\n}\r\n\r\n.th_screen{\r\n  width: 30%;\r\n}\r\n\r\n.th_permissions{\r\n  padding-left: 14px;\r\n}\r\n\r\n.role_col_lbl{\r\n  border-top: 1px solid #EBEBEB;\r\n  border-left: 1px solid #EBEBEB;\r\n  border-bottom: 1px solid #EBEBEB;\r\n  border-right: none;\r\n  border-radius: 5px;\r\n  background: #F6F6F6;\r\n  padding-left: 5px;\r\n}\r\n\r\n.role_col{\r\n  border-top: 1px solid #EBEBEB;\r\n  border-right: 1px solid #EBEBEB;\r\n  border-bottom: 1px solid #EBEBEB;\r\n  border-left: none;\r\n  border-radius: 5px;\r\n  background: #F6F6F6;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n  display: none;\r\n}\r\n\r\n.checkbox{\r\n  position: relative;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n/* checkbox */\r\n\r\n.checkbox::before{\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z\" fill=\"rgb(99, 99, 99)\"/><path d=\"M0,0H24V24H0Z\" fill=\"none\"/></svg>');\r\n  line-height: 0;\r\n  padding: .75rem;\r\n}\r\n\r\n.checkbox:active::before{\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0,0H24V24H0Z\" fill=\"none\"/><path d=\"M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z\" fill=\"rgb(99, 99, 98)\"/></svg>');\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .checkbox::before{\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0,0H24V24H0Z\" fill=\"none\"/><path d=\"M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z\" fill=\"rgb(43, 133, 255)\"/></svg>');\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .checkbox:active::before{\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0,0H24V24H0Z\" fill=\"none\"/><path d=\"M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z\" fill=\"rgb(99, 99, 98)\"/></svg>');\r\n}\r\n\r\n/* hover indicator */\r\n\r\n.checkbox:after{\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  border-radius: 5rem;\r\n  will-change: transform;\r\n  transition: .3s ease-in-out;\r\n  transform: scale(0);\r\n}\r\n\r\n.checkbox:hover::after{\r\n  background: rgba(var(--theme-color), 0.1);\r\n  transform: scale(1);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXJvbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLGdVQUFnVTtFQUNoVSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdVQUFnVTtBQUNsVTs7QUFFQTtFQUNFLGtVQUFrVTtBQUNwVTs7QUFFQTtFQUNFLGdVQUFnVTtBQUNsVTs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYWRkLWVkaXQtcm9sZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50ZXh0YXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBib3JkZXItc3BhY2luZzogMCAxNXB4O1xyXG59XHJcblxyXG4udGhfc2NyZWVue1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi50aF9wZXJtaXNzaW9uc3tcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5yb2xlX2NvbF9sYmx7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUI7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFQkVCO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI0Y2RjZGNjtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnJvbGVfY29se1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFQkVCRUI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVCRUI7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tib3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBjaGVja2JveCAqL1xyXG5cclxuLmNoZWNrYm94OjpiZWZvcmV7XHJcbiAgY29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOSw1VjE5SDVWNUgxOW0wLTJINUEyLjAwNiwyLjAwNiwwLDAsMCwzLDVWMTlhMi4wMDYsMi4wMDYsMCwwLDAsMiwySDE5YTIuMDA2LDIuMDA2LDAsMCwwLDItMlY1QTIuMDA2LDIuMDA2LDAsMCwwLDE5LDNaXCIgZmlsbD1cInJnYig5OSwgOTksIDk5KVwiLz48cGF0aCBkPVwiTTAsMEgyNFYyNEgwWlwiIGZpbGw9XCJub25lXCIvPjwvc3ZnPicpO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IC43NXJlbTtcclxufVxyXG5cclxuLmNoZWNrYm94OmFjdGl2ZTo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMCwwSDI0VjI0SDBaXCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xOSwzSDVBMiwyLDAsMCwwLDMsNVYxOWEyLDIsMCwwLDAsMiwySDE5YTIsMiwwLDAsMCwyLTJWNUEyLDIsMCwwLDAsMTksM1pNMTAsMTcsNSwxMmwxLjQxLTEuNDFMMTAsMTQuMTdsNy41OS03LjU5TDE5LDhaXCIgZmlsbD1cInJnYig5OSwgOTksIDk4KVwiLz48L3N2Zz4nKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuY2hlY2tib3g6OmJlZm9yZXtcclxuICBjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTAsMEgyNFYyNEgwWlwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTksM0g1QTIsMiwwLDAsMCwzLDVWMTlhMiwyLDAsMCwwLDIsMkgxOWEyLDIsMCwwLDAsMi0yVjVBMiwyLDAsMCwwLDE5LDNaTTEwLDE3LDUsMTJsMS40MS0xLjQxTDEwLDE0LjE3bDcuNTktNy41OUwxOSw4WlwiIGZpbGw9XCJyZ2IoNDMsIDEzMywgMjU1KVwiLz48L3N2Zz4nKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuY2hlY2tib3g6YWN0aXZlOjpiZWZvcmV7XHJcbiAgY29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0wLDBIMjRWMjRIMFpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTE5LDNINUEyLDIsMCwwLDAsMyw1VjE5YTIsMiwwLDAsMCwyLDJIMTlhMiwyLDAsMCwwLDItMlY1QTIsMiwwLDAsMCwxOSwzWk0xMCwxNyw1LDEybDEuNDEtMS40MUwxMCwxNC4xN2w3LjU5LTcuNTlMMTksOFpcIiBmaWxsPVwicmdiKDk5LCA5OSwgOTgpXCIvPjwvc3ZnPicpO1xyXG59XHJcblxyXG4vKiBob3ZlciBpbmRpY2F0b3IgKi9cclxuXHJcbi5jaGVja2JveDphZnRlcntcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5jaGVja2JveDpob3Zlcjo6YWZ0ZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS10aGVtZS1jb2xvciksIDAuMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 73869:
/*!*****************************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/add-edit-screen/add-edit-screen.component.css ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1zY3JlZW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 44173:
/*!*****************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/groupview/groupview.component.css ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addnewgroup_btnalighn{ float: right;}\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QixZQUFZLENBQUM7QUFDckM7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiZ3JvdXB2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkbmV3Z3JvdXBfYnRuYWxpZ2hueyBmbG9hdDogcmlnaHQ7fVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 45247:
/*!*****************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/rolesview/rolesview.component.css ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlc3ZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 53581:
/*!*******************************************************************************************!*\
  !*** ./src/app/Features/RolesManagement/Presentation/screenview/screenview.component.css ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JlZW52aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 54795:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Features/RolesManagement/Presentation/add-edit-group/add-edit-group.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"dialog_section\">\n<div class=\"dialog_heading\"> Add New Group</div>\n\n\n<div class=\"dialog_contentbox\">\n<div class=\"form_input_section\">\n  <mat-label class=\"form_inputlabel\">Group Name <span>*</span></mat-label>\n  <input class=\"form_input\" type=\"text\"  placeholder=\"Please enter group name\">\n</div>\n\n<div class=\"form_input_section\">\n  <mat-label class=\"form_inputlabel\">Description<span>*</span></mat-label>\n  <textarea class=\"form_textarea\" type=\"text\"  placeholder=\"Please enter description\"></textarea>\n</div>\n\n<div class=\"form_input_section\">\n   <mat-label class=\"form_inputlabel\">Add Users <span>*</span></mat-label>\n  <mat-form-field appearance=\"fill\"   class=\"select_box\">\n   <mat-select [(ngModel)]=\"selectedValue\" multiple name=\"user\" [placeholder]=\"'Please select users'\">\n      <mat-option *ngFor=\"let user of users\" [value]=\"user.value\">  {{user.viewValue}} </mat-option>\n    </mat-select>\n  </mat-form-field>\n <div><p class=\"form_input_section\"> {{selectedValue}} </p></div>\n\n</div>\n\n\n<div class=\"form_input_section\">\n  <mat-label class=\"form_inputlabel\">Add Roles <span>*</span></mat-label>\n <mat-form-field appearance=\"fill\"   class=\"select_box\">\n  <mat-select [(ngModel)]=\"selectedRole\" multiple name=\"role\" [placeholder]=\"'Please select user roles'\">\n     <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">  {{role.viewValue}} </mat-option>\n   </mat-select>\n </mat-form-field>\n<div><p class=\"form_input_section\"> {{selectedRole}} </p></div>\n\n</div>\n\n<div class=\"popup_btnbox\">\n<button mat-flat-button class=\"form_input_btn_black\" mat-dialog-close> Cancel</button>\n<button mat-flat-button class=\"form_input_btn\" > Save</button>\n</div>\n\n</div>\n\n</div>\n\n\n");

/***/ }),

/***/ 21101:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Features/RolesManagement/Presentation/add-edit-roles/add-edit-roles.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainwrap_section\">\n  <h2>Add New Role</h2>\n\n  <div class=\"maincontent_section\">\n      <form>\n          <div fxLayout=\"row wrap \" fxLayoutGap=\"30px grid\">\n              <div fxFlex=\"50%\" fxFlex.xs=\"100%\" fxFlex.sm=\"50%\" class=\"fxLayout_padding\">\n                  <div class=\"form_input_section\">\n                      <label class=\"form_inputlabel\">Role Name <span>*</span></label>\n                      <input class=\"form_input\" type=\"text\" placeholder=\"Enter role name\">\n                  </div>\n                  <div class=\"form_input_section\">\n                      <label class=\"form_inputlabel\">Feature <span>*</span></label>\n                      <input class=\"form_input\" type=\"text\" placeholder=\"Enter feature name\">\n                  </div>\n                  <div class=\"form_input_section\">\n                      <label class=\"form_inputlabel\">Module <span>*</span></label>\n                      <input class=\"form_input\" type=\"text\" placeholder=\"Enter module name\">\n                  </div>\n              </div>\n              <div fxFlex=\"50%\" fxFlex.xs=\"100%\" fxFlex.sm=\"50%\" class=\"fxLayout_padding\">\n                  <div class=\"form_input_section\">\n                      <label class=\"form_inputlabel\">Description <span>*</span></label>\n                      <textarea class=\"form_input\" cols=\"30\" rows=\"10\" placeholder=\"Enter description\"></textarea>\n                  </div>\n              </div>\n          </div>\n          <div fxLayout=\"row wrap \" fxLayoutGap=\"30px grid\">\n              <div fxFlex=\"100%\" fxFlex.xs=\"100%\" fxFlex.sm=\"100%\" class=\"fxLayout_padding\">\n                  <h6 style=\"font-weight: bold; margin-bottom: 30px;\">Selected Module Screens:</h6>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th class=\"th_screen\">\n                                  Screens\n                              </th>\n                              <th class=\"th_permissions\">\n                                  Permissions\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td class=\"role_col_lbl\">\n                                  Screen Name A\n                              </td>\n                              <td class=\"role_col\">\n                                 <input id=\"chk_scr_a_full\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_a_full\" class=\"checkbox\">Full</label>\n                                  <input id=\"chk_scr_a_delete\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_a_delete\" class=\"checkbox\">Delete</label>\n                                  <input id=\"chk_scr_a_view\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_a_view\" class=\"checkbox\">View</label>\n                                  <input id=\"chk_scr_a_edit\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_a_edit\" class=\"checkbox\">Edit</label>\n                                  <input id=\"chk_scr_a_manage\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_a_manage\" class=\"checkbox\">Manage</label>\n                              </td>\n                          </tr>\n                          <tr>\n                              <td class=\"role_col_lbl\">\n                                  Screen Name B\n                              </td>\n                              <td class=\"role_col\">\n                                  <input id=\"chk_scr_b_full\" type=\"checkbox\">\n                                  <label for=\"chk_scr_b_full\" class=\"checkbox\">Full</label>\n                                  <input id=\"chk_scr_b_delete\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_b_delete\" class=\"checkbox\">Delete</label>\n                                  <input id=\"chk_scr_b_view\" type=\"checkbox\">\n                                  <label for=\"chk_scr_b_view\" class=\"checkbox\">View</label>\n                                  <input id=\"chk_scr_b_edit\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_b_edit\" class=\"checkbox\">Edit</label>\n                                  <input id=\"chk_scr_b_manage\" type=\"checkbox\">\n                                  <label for=\"chk_scr_b_manage\" class=\"checkbox\">Manage</label>\n                              </td>\n                          </tr>\n                          <tr>\n                              <td class=\"role_col_lbl\">\n                                  Screen Name C\n                              </td>\n                              <td class=\"role_col\">\n                                  <input id=\"chk_scr_c_full\" type=\"checkbox\">\n                                  <label for=\"chk_scr_c_full\" class=\"checkbox\">Full</label>\n                                  <input id=\"chk_scr_c_delete\" type=\"checkbox\">\n                                  <label for=\"chk_scr_c_delete\" class=\"checkbox\">Delete</label>\n                                  <input id=\"chk_scr_c_view\" type=\"checkbox\">\n                                  <label for=\"chk_scr_c_view\" class=\"checkbox\">View</label>\n                                  <input id=\"chk_scr_c_edit\" type=\"checkbox\">\n                                  <label for=\"chk_scr_c_edit\" class=\"checkbox\">Edit</label>\n                                  <input id=\"chk_scr_c_manage\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_c_manage\" class=\"checkbox\">Manage</label>\n                              </td>\n                          </tr>\n                          <tr>\n                              <td class=\"role_col_lbl\">\n                                  Screen Name D\n                              </td>\n                              <td class=\"role_col\">\n                                  <input id=\"chk_scr_d_full\" type=\"checkbox\">\n                                  <label for=\"chk_scr_d_full\" class=\"checkbox\">Full</label>\n                                  <input id=\"chk_scr_d_delete\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_b_delete\" class=\"checkbox\">Delete</label>\n                                  <input id=\"chk_scr_d_view\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_d_view\" class=\"checkbox\">View</label>\n                                  <input id=\"chk_scr_d_edit\" type=\"checkbox\" checked>\n                                  <label for=\"chk_scr_d_edit\" class=\"checkbox\">Edit</label>\n                                  <input id=\"chk_scr_d_manage\" type=\"checkbox\">\n                                  <label for=\"chk_scr_d_manage\" class=\"checkbox\">Manage</label>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </form>\n  </div>\n</div>\n");

/***/ }),

/***/ 75459:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Features/RolesManagement/Presentation/add-edit-screen/add-edit-screen.component.html ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-edit-screen works!</p>\n");

/***/ }),

/***/ 25766:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Features/RolesManagement/Presentation/groupview/groupview.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"mainwrap_section_fullwidth\">\n  <h2>Manage Group\n   <span class=\"addnewgroup_btnalighn\"> <button mat-flat-button class=\"form_input_btn\" (click)=\"openDialog()\">Add New Group</button></span>\n  <div class=\"clearboth\"></div>\n  </h2>\n\n\n\n\n<div class=\"maincontent_section\">\n\n\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat_table\">\n\n\n\n    <!-- Gropup Name Column -->\n    <ng-container matColumnDef=\"groupname\">\n      <th mat-header-cell *matHeaderCellDef> Gropup Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.groupname}} </td>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}}\n\n        <span class=\"table_btnspan\">\n          <button mat-flat-button class=\"table_editbtn\" (click)=\"openDialog()\">Edit</button>\n          <button mat-flat-button class=\"table_deletebtn\">Delete</button>\n        </span>\n\n      </td>\n     </ng-container>\n  <!-- Description Column -->\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n\n\n\n\n\n</div>\n");

/***/ }),

/***/ 33676:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Features/RolesManagement/Presentation/rolesview/rolesview.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>rolesview works!</p>\n");

/***/ }),

/***/ 19762:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Features/RolesManagement/Presentation/screenview/screenview.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>screenview works!</p>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Features_RolesManagement_Presentation_Module_RolesModule_ts-es2015.js.map