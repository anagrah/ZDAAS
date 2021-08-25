(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkzbizlink_client"] = self["webpackChunkzbizlink_client"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    98220:
    /*!**********************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Abstraction/Facade/add-edit-group-facade.service.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEditGroupFacadeService": function AddEditGroupFacadeService() {
          return (
            /* binding */
            _AddEditGroupFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AddEditGroupFacadeService = function AddEditGroupFacadeService() {
        _classCallCheck(this, AddEditGroupFacadeService);
      };

      _AddEditGroupFacadeService.ctorParameters = function () {
        return [];
      };

      _AddEditGroupFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AddEditGroupFacadeService);
      /***/
    },

    /***/
    99847:
    /*!**********************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Abstraction/Facade/add-edit-roles-facade.service.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEditRolesFacadeService": function AddEditRolesFacadeService() {
          return (
            /* binding */
            _AddEditRolesFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AddEditRolesFacadeService = function AddEditRolesFacadeService() {
        _classCallCheck(this, AddEditRolesFacadeService);
      };

      _AddEditRolesFacadeService.ctorParameters = function () {
        return [];
      };

      _AddEditRolesFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AddEditRolesFacadeService);
      /***/
    },

    /***/
    36554:
    /*!***********************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Abstraction/Facade/add-edit-screen-facade.service.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEditScreenFacadeService": function AddEditScreenFacadeService() {
          return (
            /* binding */
            _AddEditScreenFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AddEditScreenFacadeService = function AddEditScreenFacadeService() {
        _classCallCheck(this, AddEditScreenFacadeService);
      };

      _AddEditScreenFacadeService.ctorParameters = function () {
        return [];
      };

      _AddEditScreenFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AddEditScreenFacadeService);
      /***/
    },

    /***/
    55211:
    /*!******************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Abstraction/Facade/group-view-facade.service.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupViewFacadeService": function GroupViewFacadeService() {
          return (
            /* binding */
            _GroupViewFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _GroupViewFacadeService = function GroupViewFacadeService() {
        _classCallCheck(this, GroupViewFacadeService);
      };

      _GroupViewFacadeService.ctorParameters = function () {
        return [];
      };

      _GroupViewFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _GroupViewFacadeService);
      /***/
    },

    /***/
    60596:
    /*!******************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Abstraction/Facade/roles-view-facade.service.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolesViewFacadeService": function RolesViewFacadeService() {
          return (
            /* binding */
            _RolesViewFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RolesViewFacadeService = function RolesViewFacadeService() {
        _classCallCheck(this, RolesViewFacadeService);
      };

      _RolesViewFacadeService.ctorParameters = function () {
        return [];
      };

      _RolesViewFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _RolesViewFacadeService);
      /***/
    },

    /***/
    72181:
    /*!*******************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Abstraction/Facade/screen-view-facade.service.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScreenViewFacadeService": function ScreenViewFacadeService() {
          return (
            /* binding */
            _ScreenViewFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ScreenViewFacadeService = function ScreenViewFacadeService() {
        _classCallCheck(this, ScreenViewFacadeService);
      };

      _ScreenViewFacadeService.ctorParameters = function () {
        return [];
      };

      _ScreenViewFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ScreenViewFacadeService);
      /***/
    },

    /***/
    70580:
    /*!**********************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Core/Services/add-edit-group.service.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEditGroupService": function AddEditGroupService() {
          return (
            /* binding */
            _AddEditGroupService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AddEditGroupService = function AddEditGroupService() {
        _classCallCheck(this, AddEditGroupService);
      };

      _AddEditGroupService.ctorParameters = function () {
        return [];
      };

      _AddEditGroupService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AddEditGroupService);
      /***/
    },

    /***/
    63845:
    /*!**********************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Core/Services/add-edit-roles.service.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEditRolesService": function AddEditRolesService() {
          return (
            /* binding */
            _AddEditRolesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AddEditRolesService = function AddEditRolesService() {
        _classCallCheck(this, AddEditRolesService);
      };

      _AddEditRolesService.ctorParameters = function () {
        return [];
      };

      _AddEditRolesService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AddEditRolesService);
      /***/
    },

    /***/
    16591:
    /*!***********************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Core/Services/add-edit-screen.service.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEditScreenService": function AddEditScreenService() {
          return (
            /* binding */
            _AddEditScreenService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AddEditScreenService = function AddEditScreenService() {
        _classCallCheck(this, AddEditScreenService);
      };

      _AddEditScreenService.ctorParameters = function () {
        return [];
      };

      _AddEditScreenService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AddEditScreenService);
      /***/
    },

    /***/
    79563:
    /*!******************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Core/Services/group-view.service.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupViewService": function GroupViewService() {
          return (
            /* binding */
            _GroupViewService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _GroupViewService = function GroupViewService() {
        _classCallCheck(this, GroupViewService);
      };

      _GroupViewService.ctorParameters = function () {
        return [];
      };

      _GroupViewService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _GroupViewService);
      /***/
    },

    /***/
    78557:
    /*!******************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Core/Services/roles-view.service.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolesViewService": function RolesViewService() {
          return (
            /* binding */
            _RolesViewService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RolesViewService = function RolesViewService() {
        _classCallCheck(this, RolesViewService);
      };

      _RolesViewService.ctorParameters = function () {
        return [];
      };

      _RolesViewService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _RolesViewService);
      /***/
    },

    /***/
    89808:
    /*!*******************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Core/Services/screen-view.service.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScreenViewService": function ScreenViewService() {
          return (
            /* binding */
            _ScreenViewService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ScreenViewService = function ScreenViewService() {
        _classCallCheck(this, ScreenViewService);
      };

      _ScreenViewService.ctorParameters = function () {
        return [];
      };

      _ScreenViewService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ScreenViewService);
      /***/
    },

    /***/
    34640:
    /*!***************************************************************************************!*\
      !*** ./src/app/Features/RolesManagement/Presentation/Module/roles-services.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolesServicesModule": function RolesServicesModule() {
          return (
            /* binding */
            _RolesServicesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Abstraction_Facade_add_edit_group_facade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../Abstraction/Facade/add-edit-group-facade.service */
      98220);
      /* harmony import */


      var _Abstraction_Facade_add_edit_roles_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Abstraction/Facade/add-edit-roles-facade.service */
      99847);
      /* harmony import */


      var _Abstraction_Facade_add_edit_screen_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Abstraction/Facade/add-edit-screen-facade.service */
      36554);
      /* harmony import */


      var _Abstraction_Facade_group_view_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Abstraction/Facade/group-view-facade.service */
      55211);
      /* harmony import */


      var _Abstraction_Facade_roles_view_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../Abstraction/Facade/roles-view-facade.service */
      60596);
      /* harmony import */


      var _Abstraction_Facade_screen_view_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Abstraction/Facade/screen-view-facade.service */
      72181);
      /* harmony import */


      var _Core_Services_add_edit_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Core/Services/add-edit-group.service */
      70580);
      /* harmony import */


      var _Core_Services_add_edit_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../Core/Services/add-edit-roles.service */
      63845);
      /* harmony import */


      var _Core_Services_add_edit_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../Core/Services/add-edit-screen.service */
      16591);
      /* harmony import */


      var _Core_Services_group_view_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../Core/Services/group-view.service */
      79563);
      /* harmony import */


      var _Core_Services_roles_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Core/Services/roles-view.service */
      78557);
      /* harmony import */


      var _Core_Services_screen_view_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../Core/Services/screen-view.service */
      89808);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RolesServicesModule = function RolesServicesModule() {
        _classCallCheck(this, RolesServicesModule);
      };

      _RolesServicesModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule],
        declarations: [],
        providers: [//Micro-Services
        _Core_Services_add_edit_group_service__WEBPACK_IMPORTED_MODULE_6__.AddEditGroupService, _Core_Services_add_edit_roles_service__WEBPACK_IMPORTED_MODULE_7__.AddEditRolesService, _Core_Services_add_edit_screen_service__WEBPACK_IMPORTED_MODULE_8__.AddEditScreenService, _Core_Services_group_view_service__WEBPACK_IMPORTED_MODULE_9__.GroupViewService, _Core_Services_roles_view_service__WEBPACK_IMPORTED_MODULE_10__.RolesViewService, _Core_Services_screen_view_service__WEBPACK_IMPORTED_MODULE_11__.ScreenViewService, //Facade-Services
        _Abstraction_Facade_add_edit_group_facade_service__WEBPACK_IMPORTED_MODULE_0__.AddEditGroupFacadeService, _Abstraction_Facade_add_edit_roles_facade_service__WEBPACK_IMPORTED_MODULE_1__.AddEditRolesFacadeService, _Abstraction_Facade_add_edit_screen_facade_service__WEBPACK_IMPORTED_MODULE_2__.AddEditScreenFacadeService, _Abstraction_Facade_group_view_facade_service__WEBPACK_IMPORTED_MODULE_3__.GroupViewFacadeService, _Abstraction_Facade_roles_view_facade_service__WEBPACK_IMPORTED_MODULE_4__.RolesViewFacadeService, _Abstraction_Facade_screen_view_facade_service__WEBPACK_IMPORTED_MODULE_5__.ScreenViewFacadeService]
      })], _RolesServicesModule);
      /***/
    },

    /***/
    40435:
    /*!*************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/account-activation-facade.service.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountActivationFacadeService": function AccountActivationFacadeService() {
          return (
            /* binding */
            _AccountActivationFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AccountActivationFacadeService = function AccountActivationFacadeService() {
        _classCallCheck(this, AccountActivationFacadeService);
      };

      _AccountActivationFacadeService.ctorParameters = function () {
        return [];
      };

      _AccountActivationFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AccountActivationFacadeService);
      /***/
    },

    /***/
    37802:
    /*!*********************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/authentication-facade.service.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationFacadeService": function AuthenticationFacadeService() {
          return (
            /* binding */
            _AuthenticationFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AuthenticationFacadeService = function AuthenticationFacadeService() {
        _classCallCheck(this, AuthenticationFacadeService);
      };

      _AuthenticationFacadeService.ctorParameters = function () {
        return [];
      };

      _AuthenticationFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AuthenticationFacadeService);
      /***/
    },

    /***/
    40589:
    /*!*************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/email-verification-facade.service.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailVerificationFacadeService": function EmailVerificationFacadeService() {
          return (
            /* binding */
            _EmailVerificationFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _EmailVerificationFacadeService = function EmailVerificationFacadeService() {
        _classCallCheck(this, EmailVerificationFacadeService);
      };

      _EmailVerificationFacadeService.ctorParameters = function () {
        return [];
      };

      _EmailVerificationFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _EmailVerificationFacadeService);
      /***/
    },

    /***/
    51796:
    /*!**********************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/forgot-password-facade.service.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordFacadeService": function ForgotPasswordFacadeService() {
          return (
            /* binding */
            _ForgotPasswordFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ForgotPasswordFacadeService = function ForgotPasswordFacadeService() {
        _classCallCheck(this, ForgotPasswordFacadeService);
      };

      _ForgotPasswordFacadeService.ctorParameters = function () {
        return [];
      };

      _ForgotPasswordFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ForgotPasswordFacadeService);
      /***/
    },

    /***/
    41178:
    /*!*******************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/registration-facade.service.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationFacadeService": function RegistrationFacadeService() {
          return (
            /* binding */
            _RegistrationFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RegistrationFacadeService = function RegistrationFacadeService() {
        _classCallCheck(this, RegistrationFacadeService);
      };

      _RegistrationFacadeService.ctorParameters = function () {
        return [];
      };

      _RegistrationFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _RegistrationFacadeService);
      /***/
    },

    /***/
    65091:
    /*!*********************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/reset-password-facade.service.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordFacadeService": function ResetPasswordFacadeService() {
          return (
            /* binding */
            _ResetPasswordFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordFacadeService = function ResetPasswordFacadeService() {
        _classCallCheck(this, ResetPasswordFacadeService);
      };

      _ResetPasswordFacadeService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordFacadeService);
      /***/
    },

    /***/
    87766:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/reset-password-request-facade.service.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordRequestFacadeService": function ResetPasswordRequestFacadeService() {
          return (
            /* binding */
            _ResetPasswordRequestFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordRequestFacadeService = function ResetPasswordRequestFacadeService() {
        _classCallCheck(this, ResetPasswordRequestFacadeService);
      };

      _ResetPasswordRequestFacadeService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordRequestFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordRequestFacadeService);
      /***/
    },

    /***/
    55698:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/reset-password-request-success-facade.service.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordRequestSuccessFacadeService": function ResetPasswordRequestSuccessFacadeService() {
          return (
            /* binding */
            _ResetPasswordRequestSuccessFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordRequestSuccessFacadeService = function ResetPasswordRequestSuccessFacadeService() {
        _classCallCheck(this, ResetPasswordRequestSuccessFacadeService);
      };

      _ResetPasswordRequestSuccessFacadeService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordRequestSuccessFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordRequestSuccessFacadeService);
      /***/
    },

    /***/
    49562:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Abstraction/Facade/reset-password-success-facade.service.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordSuccessFacadeService": function ResetPasswordSuccessFacadeService() {
          return (
            /* binding */
            _ResetPasswordSuccessFacadeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordSuccessFacadeService = function ResetPasswordSuccessFacadeService() {
        _classCallCheck(this, ResetPasswordSuccessFacadeService);
      };

      _ResetPasswordSuccessFacadeService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordSuccessFacadeService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordSuccessFacadeService);
      /***/
    },

    /***/
    8466:
    /*!*************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/account-activation.service.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountActivationService": function AccountActivationService() {
          return (
            /* binding */
            _AccountActivationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AccountActivationService = function AccountActivationService() {
        _classCallCheck(this, AccountActivationService);
      };

      _AccountActivationService.ctorParameters = function () {
        return [];
      };

      _AccountActivationService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AccountActivationService);
      /***/
    },

    /***/
    58037:
    /*!*********************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/authentication.service.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationService": function AuthenticationService() {
          return (
            /* binding */
            _AuthenticationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AuthenticationService = function AuthenticationService() {
        _classCallCheck(this, AuthenticationService);
      };

      _AuthenticationService.ctorParameters = function () {
        return [];
      };

      _AuthenticationService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _AuthenticationService);
      /***/
    },

    /***/
    67895:
    /*!*************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/email-verification.service.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailVerificationService": function EmailVerificationService() {
          return (
            /* binding */
            _EmailVerificationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _EmailVerificationService = function EmailVerificationService() {
        _classCallCheck(this, EmailVerificationService);
      };

      _EmailVerificationService.ctorParameters = function () {
        return [];
      };

      _EmailVerificationService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _EmailVerificationService);
      /***/
    },

    /***/
    33694:
    /*!**********************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/forgot-password.service.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordService": function ForgotPasswordService() {
          return (
            /* binding */
            _ForgotPasswordService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ForgotPasswordService = function ForgotPasswordService() {
        _classCallCheck(this, ForgotPasswordService);
      };

      _ForgotPasswordService.ctorParameters = function () {
        return [];
      };

      _ForgotPasswordService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ForgotPasswordService);
      /***/
    },

    /***/
    5138:
    /*!*******************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/registration.service.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationService": function RegistrationService() {
          return (
            /* binding */
            _RegistrationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RegistrationService = function RegistrationService() {
        _classCallCheck(this, RegistrationService);
      };

      _RegistrationService.ctorParameters = function () {
        return [];
      };

      _RegistrationService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _RegistrationService);
      /***/
    },

    /***/
    31591:
    /*!*************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/reset-password-request-success.service.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordRequestSuccessService": function ResetPasswordRequestSuccessService() {
          return (
            /* binding */
            _ResetPasswordRequestSuccessService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordRequestSuccessService = function ResetPasswordRequestSuccessService() {
        _classCallCheck(this, ResetPasswordRequestSuccessService);
      };

      _ResetPasswordRequestSuccessService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordRequestSuccessService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordRequestSuccessService);
      /***/
    },

    /***/
    34463:
    /*!*****************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/reset-password-request.service.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordRequestService": function ResetPasswordRequestService() {
          return (
            /* binding */
            _ResetPasswordRequestService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordRequestService = function ResetPasswordRequestService() {
        _classCallCheck(this, ResetPasswordRequestService);
      };

      _ResetPasswordRequestService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordRequestService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordRequestService);
      /***/
    },

    /***/
    44485:
    /*!*****************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/reset-password-success.service.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordSuccessService": function ResetPasswordSuccessService() {
          return (
            /* binding */
            _ResetPasswordSuccessService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordSuccessService = function ResetPasswordSuccessService() {
        _classCallCheck(this, ResetPasswordSuccessService);
      };

      _ResetPasswordSuccessService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordSuccessService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordSuccessService);
      /***/
    },

    /***/
    3927:
    /*!*********************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/Services/reset-password.service.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordService": function ResetPasswordService() {
          return (
            /* binding */
            _ResetPasswordService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ResetPasswordService = function ResetPasswordService() {
        _classCallCheck(this, ResetPasswordService);
      };

      _ResetPasswordService.ctorParameters = function () {
        return [];
      };

      _ResetPasswordService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ResetPasswordService);
      /***/
    },

    /***/
    81423:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Core/StateManagement/NgRx/registrationState/registration.effects.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationEffects": function RegistrationEffects() {
          return (
            /* binding */
            _RegistrationEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/effects */
      85322);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RegistrationEffects = function RegistrationEffects(actions$) {
        _classCallCheck(this, RegistrationEffects);

        this.actions$ = actions$;
      };

      _RegistrationEffects.ctorParameters = function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions
        }];
      };

      _RegistrationEffects = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _RegistrationEffects);
      /***/
    },

    /***/
    54715:
    /*!*************************************************************************************!*\
      !*** ./src/app/Features/UserManagement/Presentation/module/user-services.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserServicesModule": function UserServicesModule() {
          return (
            /* binding */
            _UserServicesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Abstraction_Facade_account_activation_facade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../Abstraction/Facade/account-activation-facade.service */
      40435);
      /* harmony import */


      var _Abstraction_Facade_authentication_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Abstraction/Facade/authentication-facade.service */
      37802);
      /* harmony import */


      var _Abstraction_Facade_email_verification_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Abstraction/Facade/email-verification-facade.service */
      40589);
      /* harmony import */


      var _Abstraction_Facade_forgot_password_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Abstraction/Facade/forgot-password-facade.service */
      51796);
      /* harmony import */


      var _Abstraction_Facade_registration_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../Abstraction/Facade/registration-facade.service */
      41178);
      /* harmony import */


      var _Abstraction_Facade_reset_password_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Abstraction/Facade/reset-password-facade.service */
      65091);
      /* harmony import */


      var _Abstraction_Facade_reset_password_request_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Abstraction/Facade/reset-password-request-facade.service */
      87766);
      /* harmony import */


      var _Abstraction_Facade_reset_password_request_success_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../Abstraction/Facade/reset-password-request-success-facade.service */
      55698);
      /* harmony import */


      var _Abstraction_Facade_reset_password_success_facade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../Abstraction/Facade/reset-password-success-facade.service */
      49562);
      /* harmony import */


      var _Core_Services_account_activation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../Core/Services/account-activation.service */
      8466);
      /* harmony import */


      var _Core_Services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Core/Services/authentication.service */
      58037);
      /* harmony import */


      var _Core_Services_email_verification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../Core/Services/email-verification.service */
      67895);
      /* harmony import */


      var _Core_Services_forgot_password_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../Core/Services/forgot-password.service */
      33694);
      /* harmony import */


      var _Core_Services_registration_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../Core/Services/registration.service */
      5138);
      /* harmony import */


      var _Core_Services_reset_password_request_success_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../Core/Services/reset-password-request-success.service */
      31591);
      /* harmony import */


      var _Core_Services_reset_password_request_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../Core/Services/reset-password-request.service */
      34463);
      /* harmony import */


      var _Core_Services_reset_password_success_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../Core/Services/reset-password-success.service */
      44485);
      /* harmony import */


      var _Core_Services_reset_password_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../Core/Services/reset-password.service */
      3927);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _UserServicesModule = function UserServicesModule() {
        _classCallCheck(this, UserServicesModule);
      };

      _UserServicesModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule],
        declarations: [],
        providers: [//Micro-Services
        _Core_Services_account_activation_service__WEBPACK_IMPORTED_MODULE_9__.AccountActivationService, _Core_Services_authentication_service__WEBPACK_IMPORTED_MODULE_10__.AuthenticationService, _Core_Services_email_verification_service__WEBPACK_IMPORTED_MODULE_11__.EmailVerificationService, _Core_Services_forgot_password_service__WEBPACK_IMPORTED_MODULE_12__.ForgotPasswordService, _Core_Services_registration_service__WEBPACK_IMPORTED_MODULE_13__.RegistrationService, _Core_Services_reset_password_request_success_service__WEBPACK_IMPORTED_MODULE_14__.ResetPasswordRequestSuccessService, _Core_Services_reset_password_request_service__WEBPACK_IMPORTED_MODULE_15__.ResetPasswordRequestService, _Core_Services_reset_password_success_service__WEBPACK_IMPORTED_MODULE_16__.ResetPasswordSuccessService, _Core_Services_reset_password_service__WEBPACK_IMPORTED_MODULE_17__.ResetPasswordService, //Facade-Services
        _Abstraction_Facade_account_activation_facade_service__WEBPACK_IMPORTED_MODULE_0__.AccountActivationFacadeService, _Abstraction_Facade_authentication_facade_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationFacadeService, _Abstraction_Facade_email_verification_facade_service__WEBPACK_IMPORTED_MODULE_2__.EmailVerificationFacadeService, _Abstraction_Facade_forgot_password_facade_service__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordFacadeService, _Abstraction_Facade_registration_facade_service__WEBPACK_IMPORTED_MODULE_4__.RegistrationFacadeService, _Abstraction_Facade_reset_password_facade_service__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordFacadeService, _Abstraction_Facade_reset_password_request_facade_service__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordRequestFacadeService, _Abstraction_Facade_reset_password_request_success_facade_service__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordRequestSuccessFacadeService, _Abstraction_Facade_reset_password_success_facade_service__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordSuccessFacadeService]
      })], _UserServicesModule);
      /***/
    },

    /***/
    78135:
    /*!****************************************************!*\
      !*** ./src/app/Helper/material/material.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      _MaterialModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
      })], _MaterialModule);
      /***/
    },

    /***/
    91937:
    /*!**********************************************************************!*\
      !*** ./src/app/Shared/LogOut/StateManagement/NgRx/logout.effects.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoutEffects": function LogoutEffects() {
          return (
            /* binding */
            _LogoutEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/effects */
      85322);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _LogoutEffects = function LogoutEffects(actions$) {
        _classCallCheck(this, LogoutEffects);

        this.actions$ = actions$;
      };

      _LogoutEffects.ctorParameters = function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions
        }];
      };

      _LogoutEffects = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _LogoutEffects);
      /***/
    },

    /***/
    44433:
    /*!*******************************************************!*\
      !*** ./src/app/Shared/Module/shared/shared.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../header/header.component */
      99907);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../nav-menu/nav-menu.component */
      61378);
      /* harmony import */


      var src_app_Helper_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Helper/material/material.module */
      78135);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      _SharedModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_Helper_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        entryComponents: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent]
      })], _SharedModule);
      /***/
    },

    /***/
    99907:
    /*!***************************************************!*\
      !*** ./src/app/Shared/header/header.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./header.component.html */
      67595);
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component.css */
      1809);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../nav-menu/nav-menu.component */
      61378);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(dialog) {
          _classCallCheck(this, HeaderComponent);

          this.dialog = dialog;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dailogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
            dailogConfig.disableClose = true;
            this.dialog.open(_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__.NavMenuComponent, dailogConfig); // dialogRef.afterClosed().subscribe(result => {
            //   console.log(`Dialog result: ${result}`);
          }
        }]);

        return HeaderComponent;
      }();

      _HeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog
        }];
      };

      _HeaderComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeaderComponent);
      /***/
    },

    /***/
    61378:
    /*!*******************************************************!*\
      !*** ./src/app/Shared/nav-menu/nav-menu.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavMenuComponent": function NavMenuComponent() {
          return (
            /* binding */
            _NavMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./nav-menu.component.html */
      30969);
      /* harmony import */


      var _nav_menu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-menu.component.css */
      1943);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _NavMenuComponent = /*#__PURE__*/function () {
        function NavMenuComponent(ref) {
          _classCallCheck(this, NavMenuComponent);

          this.ref = ref;
        }

        _createClass(NavMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavMenuComponent;
      }();

      _NavMenuComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef
        }];
      };

      _NavMenuComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nav-menu',
        template: _raw_loader_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nav_menu_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NavMenuComponent);
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [//userManagement module is Lazily Loaded
      {
        path: 'user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_Features_UserManagement_Presentation_module_UserModule_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./Features/UserManagement/Presentation/module/UserModule */
          7702)).then(function (um) {
            return um.UserModule;
          });
        }
      }, // userManagement module is Lazily Loaded
      {
        path: 'roles',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_Features_RolesManagement_Presentation_Module_RolesModule_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./Features/RolesManagement/Presentation/Module/RolesModule */
          80797)).then(function (rm) {
            return rm.RolesModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      _AppComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _Helper_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Helper/material/material.module */
      78135);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _Shared_Module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Shared/Module//shared/shared.module */
      44433);
      /* harmony import */


      var _Features_UserManagement_Presentation_module_user_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Features/UserManagement/Presentation/module/user-services.module */
      54715);
      /* harmony import */


      var _Features_RolesManagement_Presentation_Module_roles_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Features/RolesManagement/Presentation/Module/roles-services.module */
      34640);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngrx/store */
      86710);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngrx/effects */
      85322);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      93572);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./reducers */
      61697);
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ngrx/router-store */
      39667);
      /* harmony import */


      var _Shared_LogOut_StateManagement_NgRx_logout_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Shared/LogOut/StateManagement/NgRx/logout.effects */
      91937);
      /* harmony import */


      var _Features_UserManagement_Core_StateManagement_NgRx_registrationState_registration_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Features/UserManagement/Core/StateManagement/NgRx/registrationState/registration.effects */
      81423);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule.withServerTransition({
          appId: 'ng-cli-universal'
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _Helper_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _Shared_Module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _Features_UserManagement_Presentation_module_user_services_module__WEBPACK_IMPORTED_MODULE_4__.UserServicesModule, _Features_RolesManagement_Presentation_Module_roles_services_module__WEBPACK_IMPORTED_MODULE_5__.RolesServicesModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forRoot({}, {}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsModule.forRoot([_Shared_LogOut_StateManagement_NgRx_logout_effects__WEBPACK_IMPORTED_MODULE_8__.LogoutEffects, _Features_UserManagement_Core_StateManagement_NgRx_registrationState_registration_effects__WEBPACK_IMPORTED_MODULE_9__.RegistrationEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
        }), _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__.reducers, {
          metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__.metaReducers
        }), !_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule.instrument() : [], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__.StoreRouterConnectingModule.forRoot()],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    61697:
    /*!***********************************!*\
      !*** ./src/app/reducers/index.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reducers": function reducers() {
          return (
            /* binding */
            _reducers
          );
        },

        /* harmony export */
        "metaReducers": function metaReducers() {
          return (
            /* binding */
            _metaReducers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _reducers = {};

      var _metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getBaseUrl": function getBaseUrl() {
          return (
            /* binding */
            _getBaseUrl
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      function _getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
      }

      var providers = [{
        provide: 'BASE_URL',
        useFactory: _getBaseUrl,
        deps: []
      }];

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    1809:
    /*!****************************************************!*\
      !*** ./src/app/Shared/header/header.component.css ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    1943:
    /*!********************************************************!*\
      !*** ./src/app/Shared/nav-menu/nav-menu.component.css ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    67595:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/header/header.component.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\n    <div fxLayout=\"row wrap\">\n      <div fxFlex=\"15%\" fxFlex.xs=\"100%\" fxFlex.sm=\"50%\" >\n        <div class=\"zbizlink_logo\"><img src=\"https://zbizlink.com/wp-content/themes/zbizlink/images/logo.svg\"></div>\n      </div>\n  \n      <div fxFlex=\"85%\" fxFlex.xs=\"100%\" fxFlex.sm=\"50%\" >\n        <button mat-flat-button class=\"form_input_btn\" (click)=\"openDialog()\">Nav Menu</button>\n      </div>\n  \n  \n  </div>\n  \n   \n  \n  \n  \n  \n  </header>";
      /***/
    },

    /***/
    30969:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/nav-menu/nav-menu.component.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>nav-menu works!</p>\n\n<button mat-flat-button class=\"form_input_btn_black\" mat-dialog-close> Cancel</button>";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body>\r\n<app-header></app-header>\r\n\r\n    <router-outlet></router-outlet>\r\n  \r\n</body>\r\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map