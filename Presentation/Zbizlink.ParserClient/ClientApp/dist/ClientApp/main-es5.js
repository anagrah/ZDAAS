function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Module/escape-html.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/Module/escape-html.module.ts ***!
    \**********************************************/

  /*! exports provided: EscapeHtmlModule */

  /***/
  function srcAppModuleEscapeHtmlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscapeHtmlModule", function () {
      return EscapeHtmlModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Shared/pipes/EscapeHtmlPipe */
    "./src/app/Shared/pipes/EscapeHtmlPipe.ts");

    var EscapeHtmlModule = function EscapeHtmlModule() {
      _classCallCheck(this, EscapeHtmlModule);
    };

    EscapeHtmlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EscapeHtmlModule
    });
    EscapeHtmlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EscapeHtmlModule_Factory(t) {
        return new (t || EscapeHtmlModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EscapeHtmlModule, {
        declarations: [_Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_2__["EscapeHtmlPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_2__["EscapeHtmlPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EscapeHtmlModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_2__["EscapeHtmlPipe"]],
          exports: [_Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_2__["EscapeHtmlPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/addfield/addfield.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/addfield/addfield.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AddfieldComponent */

  /***/
  function srcAppParserComponentsDialogsAddfieldAddfieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfieldComponent", function () {
      return AddfieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_Parser_Shared_models_SummaryField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Parser/Shared/models/SummaryField */
    "./src/app/Parser/Shared/models/SummaryField.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddfieldComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All fields are required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddfieldComponent_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fields_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", fields_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fields_r2);
      }
    }

    var AddfieldComponent =
    /*#__PURE__*/
    function () {
      function AddfieldComponent(fb, dialogRef, data) {
        _classCallCheck(this, AddfieldComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.id = 0;
        this.fieldtypes = ['TextBox', 'DateTime'];
        this.fieldLabel = '';
        this.required = false;
        this.controlTypes = [{
          typeCode: 1,
          typeValue: 'TextBox'
        }, {
          typeCode: 3,
          typeValue: 'DateTime'
        }];
        console.log('--->' + data.id + '<---');
        this.id = data.id;
        this.summary = data.summary;
      }

      _createClass(AddfieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groupForm = this.fb.group({
            labelfield: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
            typefield: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "Cancel",
        value: function Cancel() {
          this.dialogRef.close();
        }
      }, {
        key: "ChangeFieldType",
        value: function ChangeFieldType(e) {
          var strValue = e.target.value;
          var arr = strValue.indexOf(':') === 1 ? strValue.split(': ') : [0];
          this.fieldType = arr[0] === 0 ? strValue : arr[1].toString();
        }
      }, {
        key: "Done",
        value: function Done() {
          if (this.groupForm.valid) {
            console.log('---> ' + this.fieldLabel + ' <---');
            console.log('---> ' + this.fieldType + ' <---'); //this.summary.addField(this,this.id,this.fieldLabel,this.fieldType);
            //this.dialogRef.close();
            //this.summarArray = new Array<SummaryField>();

            this.summaryField = new src_app_Parser_Shared_models_SummaryField__WEBPACK_IMPORTED_MODULE_3__["SummaryField"](this.fieldLabel, this.fieldType, "", 0, 0);
            this.dialogRef.close(this.summaryField);
          } else {
            this.required = true;
          }
        }
      }]);

      return AddfieldComponent;
    }();

    AddfieldComponent.ɵfac = function AddfieldComponent_Factory(t) {
      return new (t || AddfieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    AddfieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddfieldComponent,
      selectors: [["app-addfield-dialog"]],
      decls: 15,
      vars: 4,
      consts: [[1, "dailog_h1"], [3, "formGroup"], ["style", "color: crimson", 4, "ngIf"], ["formControlName", "labelfield", "type", "text", "placeholder", "Please enter the label name", 1, "dialog_inputbox", 3, "ngModel", "ngModelChange"], ["formControlName", "typefield", 1, "custom-select", "dialog_selectbox", 3, "change"], ["value", "", "disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "mat-raised-button", "canecl_btn", 3, "click"], [1, "mat-raised-button", "mat-primary", "done_btn", 3, "click"], [2, "color", "crimson"], [3, "ngValue"]],
      template: function AddfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Custom Field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddfieldComponent_div_4_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddfieldComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.fieldLabel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddfieldComponent_Template_select_change_6_listener($event) {
            return ctx.ChangeFieldType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose Field Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddfieldComponent_option_9_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddfieldComponent_Template_button_click_11_listener() {
            return ctx.Cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddfieldComponent_Template_button_click_13_listener() {
            return ctx.Done();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fieldLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fieldtypes);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"]],
      styles: [".dialog_inputbox[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    height: 42px;\r\n    border: 1px solid #dddddd;\r\n    border-radius: 4px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin-bottom: 20px;\r\n    margin-top:15px;\r\n}\r\n.dialog_inputbox[_ngcontent-%COMP%]:focus{ outline: none;}\r\n.dialog_selectbox[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 42px;\r\n    border: 1px solid #dddddd;\r\n    border-radius: 4px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n.dialog_selectbox[_ngcontent-%COMP%]:focus{ outline: none; box-shadow: none;}\r\n.canecl_btn[_ngcontent-%COMP%]{ border-radius: 4px; background: #007bff; box-shadow:none; color:#fff;}\r\n.done_btn[_ngcontent-%COMP%]{ border-radius: 4px; background: #ed3304; box-shadow:none; color:#fff;}\r\n.dailog_h1[_ngcontent-%COMP%]{\r\nfont-weight:800;\r\nfont-size: 18px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvRGlhbG9ncy9hZGRmaWVsZC9hZGRmaWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0Esd0JBQXdCLGFBQWEsQ0FBQztBQUV0QztJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBLHlCQUF5QixhQUFhLEVBQUUsZ0JBQWdCLENBQUM7QUFFekQsYUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDO0FBQ2xGLFdBQVcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQztBQUNoRjtBQUNBLGVBQWU7QUFDZixlQUFlOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvRGlhbG9ncy9hZGRmaWVsZC9hZGRmaWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ19pbnB1dGJveHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4uZGlhbG9nX2lucHV0Ym94OmZvY3VzeyBvdXRsaW5lOiBub25lO31cclxuXHJcbi5kaWFsb2dfc2VsZWN0Ym94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kaWFsb2dfc2VsZWN0Ym94OmZvY3VzeyBvdXRsaW5lOiBub25lOyBib3gtc2hhZG93OiBub25lO31cclxuXHJcbi5jYW5lY2xfYnRueyBib3JkZXItcmFkaXVzOiA0cHg7IGJhY2tncm91bmQ6ICMwMDdiZmY7IGJveC1zaGFkb3c6bm9uZTsgY29sb3I6I2ZmZjt9XHJcbi5kb25lX2J0bnsgYm9yZGVyLXJhZGl1czogNHB4OyBiYWNrZ3JvdW5kOiAjZWQzMzA0OyBib3gtc2hhZG93Om5vbmU7IGNvbG9yOiNmZmY7fVxyXG4uZGFpbG9nX2gxe1xyXG5mb250LXdlaWdodDo4MDA7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddfieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addfield-dialog',
          templateUrl: './addfield.component.html',
          styleUrls: ['./addfield.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/confirmation-message/confirmation-message.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/confirmation-message/confirmation-message.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ConfirmationMessageComponent */

  /***/
  function srcAppParserComponentsDialogsConfirmationMessageConfirmationMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationMessageComponent", function () {
      return ConfirmationMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var ConfirmationMessageComponent =
    /*#__PURE__*/
    function () {
      function ConfirmationMessageComponent(data, dialogRef) {
        _classCallCheck(this, ConfirmationMessageComponent);

        this.data = data;
        this.dialogRef = dialogRef;
      }

      _createClass(ConfirmationMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close(false);
        }
      }]);

      return ConfirmationMessageComponent;
    }();

    ConfirmationMessageComponent.ɵfac = function ConfirmationMessageComponent_Factory(t) {
      return new (t || ConfirmationMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    ConfirmationMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationMessageComponent,
      selectors: [["app-confirmation-message"]],
      decls: 19,
      vars: 3,
      consts: [[2, "height", "50px"], [2, "float", "left", "width", "95%", "font-size", "medium"], [1, "fill-remaining-space"], ["mat-icon-button", "", 3, "click"], ["mat-dialog-content", ""], [1, "content-span", "full-width"], [1, "confirm-dialog-container"], ["mat-flat-button", "", "id", "no-button", 3, "mat-dialog-close"], ["mat-flat-button", "", "id", "yes-button", 3, "mat-dialog-close"]],
      template: function ConfirmationMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmation Dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationMessageComponent_Template_button_click_6_listener() {
            return ctx.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\xA0\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".confirm-dialog-container[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%] {\r\n    border-radius: .25em .25em .4em .4em;\r\n    padding: 0px;\r\n}\r\n.confirm-dialog-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{\r\n    margin: 5px 5px 15px 5px;\r\n    color: #8f9cb5;\r\n    display: flex;\r\n}\r\n.confirm-dialog-container[_ngcontent-%COMP%]   #close-icon[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    order: 2;\r\n    font-weight: bolder;\r\n}\r\n.confirm-dialog-container[_ngcontent-%COMP%]   #close-icon[_ngcontent-%COMP%]:hover{\r\ncursor: pointer;\r\n}\r\n.confirm-dialog-container[_ngcontent-%COMP%]   #no-button[_ngcontent-%COMP%]{\r\nheight: 40px;\r\nwidth: 50%;\r\nbackground-color: #fc7169;\r\ncolor:white;\r\nborder-radius: 0px;\r\n}\r\n.confirm-dialog-container[_ngcontent-%COMP%]   #yes-button[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 50%;\r\n    background-color: #b6bece;\r\n    color:white;\r\n    border-radius: 0px;\r\n}\r\n.confirm-dialog-container[_ngcontent-%COMP%]   span.content-span[_ngcontent-%COMP%]{\r\n    padding:  35px 16px;\r\n    text-align: center;\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvRGlhbG9ncy9jb25maXJtYXRpb24tbWVzc2FnZS9jb25maXJtYXRpb24tbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBRUE7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9QYXJzZXIvQ29tcG9uZW50cy9EaWFsb2dzL2NvbmZpcm1hdGlvbi1tZXNzYWdlL2NvbmZpcm1hdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jb25maXJtLWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtIC4yNWVtIC40ZW0gLjRlbTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uY29uZmlybS1kaWFsb2ctY29udGFpbmVyIC5jb250ZW50LWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNXB4IDVweCAxNXB4IDVweDtcclxuICAgIGNvbG9yOiAjOGY5Y2I1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29uZmlybS1kaWFsb2ctY29udGFpbmVyICNjbG9zZS1pY29ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcmRlcjogMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmNvbmZpcm0tZGlhbG9nLWNvbnRhaW5lciAjY2xvc2UtaWNvbjpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29uZmlybS1kaWFsb2ctY29udGFpbmVyICNuby1idXR0b257XHJcbmhlaWdodDogNDBweDtcclxud2lkdGg6IDUwJTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZjNzE2OTtcclxuY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmNvbmZpcm0tZGlhbG9nLWNvbnRhaW5lciAjeWVzLWJ1dHRvbntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiZWNlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5jb25maXJtLWRpYWxvZy1jb250YWluZXIgc3Bhbi5jb250ZW50LXNwYW57XHJcbiAgICBwYWRkaW5nOiAgMzVweCAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirmation-message',
          templateUrl: './confirmation-message.component.html',
          styleUrls: ['./confirmation-message.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/document-list/document-list.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/document-list/document-list.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PendingDocsList, DocumentListComponent */

  /***/
  function srcAppParserComponentsDialogsDocumentListDocumentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingDocsList", function () {
      return PendingDocsList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function () {
      return DocumentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Shared/Services/document-parser-form.service */
    "./src/app/Parser/Shared/Services/document-parser-form.service.ts");
    /* harmony import */


    var _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../Shared/services/notification.service */
    "./src/app/Shared/services/notification.service.ts");
    /* harmony import */


    var src_app_Parser_Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Parser/Shared/Services/rfp-database.service */
    "./src/app/Parser/Shared/Services/rfp-database.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    function DocumentListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.closeDialogOpp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.onSearchClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_header_cell_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Opportunity ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r60 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r60.OpportunityName, " ");
      }
    }

    function DocumentListComponent_mat_header_cell_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Solicitation No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r61.solicitationNo, " ");
      }
    }

    function DocumentListComponent_mat_header_cell_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_header_cell_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r62.DueDate, " ");
      }
    }

    function DocumentListComponent_mat_header_cell_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remaining Days ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r63.RemainingDays);
      }
    }

    function DocumentListComponent_mat_header_cell_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r64.Agency, " ");
      }
    }

    function DocumentListComponent_mat_header_cell_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_mat_cell_31_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var e_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.actionHandler(e_r65.id, "download");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cloud_download");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_mat_cell_31_div_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var e_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.actionHandler(e_r65.RfpdocumentId, "export");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "import_export");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Export");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r68);
      }
    }

    function DocumentListComponent_mat_cell_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_mat_cell_31_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var e_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.loadOppertunity(e_r65.opportunityId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings_backup_restore");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Load ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_cell_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocumentListComponent_mat_cell_31_div_1_Template, 16, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentListComponent_mat_cell_31_div_2_Template, 5, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r49.popUpHeaderFlag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.popUpHeaderFlag);
      }
    }

    function DocumentListComponent_mat_footer_cell_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-footer-cell", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading data...\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_footer_cell_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-footer-cell", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No pending document.\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_mat_header_row_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function DocumentListComponent_mat_row_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "hide": a0
      };
    };

    function DocumentListComponent_mat_footer_row_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-row", 37);
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r54.oppertunityList != null));
      }
    }

    function DocumentListComponent_mat_footer_row_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-row", 37);
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !(ctx_r55.oppertunityList != null && ctx_r55.oppertunityList.data.length == 0)));
      }
    }

    var _c1 = function _c1() {
      return ["loading"];
    };

    var _c2 = function _c2() {
      return ["noData"];
    };

    var _c3 = function _c3() {
      return [5, 10, 25, 100];
    };

    var PendingDocsList = function PendingDocsList() {
      _classCallCheck(this, PendingDocsList);
    };

    var DocumentListComponent =
    /*#__PURE__*/
    function () {
      function DocumentListComponent(router, documentParserForm, notification, rfpDatabaseService, dialogRef, data) {
        _classCallCheck(this, DocumentListComponent);

        this.router = router;
        this.documentParserForm = documentParserForm;
        this.notification = notification;
        this.rfpDatabaseService = rfpDatabaseService;
        this.dialogRef = dialogRef;
        this.columnsToDisplay = ['OpportunityName', 'DueDate', 'RemainingDays', 'Agency', 'action'];
        this.publishFlag = true;

        if (data) {
          this.popUpHeaderFlag = data.headerFlag;
          this.DocumentParserFormComponent = data.opportunityComponent;
          this.publishFlag = data.publish;
        }
      }

      _createClass(DocumentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompanyOppertunityList();
        }
      }, {
        key: "closeDialogOpp",
        value: function closeDialogOpp() {
          this.dialogRef.close();
        }
      }, {
        key: "remainingDays",
        value: function remainingDays(value) {
          var todayDate = new Date();
          var diff = null;
          var diffDays = null;

          if (value != "") {
            if (new Date(value) > todayDate) {
              diff = Math.abs(new Date(value).getTime() - todayDate.getTime());
              diffDays = Math.ceil(diff / (1000 * 3600 * 24));
              return diffDays;
            } else {
              diff = Math.abs(new Date(value).getTime() - todayDate.getTime());
              diffDays = Math.ceil(diff / (1000 * 3600 * 24) - 365);
              return "-" + diffDays;
            }
          } else {
            return 0;
          }
        }
      }, {
        key: "actionHandler",
        value: function actionHandler(id, actionName) {
          debugger;
          alert("Id:" + id + " , Action Name:" + actionName);
        }
      }, {
        key: "onSearchClear",
        value: function onSearchClear() {
          this.searchKey = "";
          this.applyFilter();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.oppertunityList.filter = this.searchKey.trim().toLowerCase();
        }
      }, {
        key: "getCompanyOppertunityList",
        value: function getCompanyOppertunityList() {
          var _this = this;

          this.rfpDatabaseService.getCompanyOppertunityList(this.publishFlag, localStorage.getItem('compId')).subscribe(function (response) {
            _this.CompanyOppertunityListReponse(response); // var docList: Array<PendingDocsList> = [];
            // docList = this.ExtractSummaryField(response);
            //console.log(response);
            // for(var dList in response.documentNameList)
            // {
            //   var pp = new PendingDocsList();
            //   //RfpdocumentId
            //   if(response.documentNameList[dList].Rfpsummary !== null && response.documentNameList[dList].Rfpsummary.length > 0){
            //     console.log(response.documentNameList[dList]);
            //   }
            //   pp.DocName = response.documentNameList[dList].DocName;
            //   pp.DueDate = Object.keys(response.documentNameList[dList].Rfpsummary).length > 0 ? response.documentNameList[dList].Rfpsummary[0].FieldValue : null;
            //   if(Object.keys(response.documentNameList[dList].Rfpsummary).length === 0)
            //   {
            //     pp.RemainingDays=0;
            //   }
            //   else
            //   {
            //     pp.RemainingDays=this.remainingDays(response.documentNameList[dList].Rfpsummary[0].FieldValue) > -1 ? this.remainingDays(response.documentNameList[dList].Rfpsummary[0].FieldValue):0;
            //   }
            //   pp.Agency= typeof response.documentNameList[dList].Rfpsummary[1].FieldValue==='undefined'?null:response.documentNameList[dList].Rfpsummary[1].FieldValue;
            //   pp.RfpdocumentId =  typeof response.documentNameList[dList].RfpdocumentId==='undefined'?null:response.documentNameList[dList].RfpdocumentId;
            //   docList.push(pp);
            // }
            // docList.sort(d => d.RemainingDays)
            // this.oppertunityList = new MatTableDataSource(docList);
            // this.oppertunityList.sort = this.sort;
            // debugger;
            // this.oppertunityList.paginator = this.paginator;

          }, function (error) {
            console.log(error);

            _this.notification.error(error);
          });
        } // ExtractSummaryField(response: any): Array<PendingDocsList> {
        //   var docList: Array<PendingDocsList> = [];
        //   for (var dList in response.documentNameList) {
        //     var pp = new PendingDocsList();
        //     if (response.documentNameList[dList].Rfpsummary !== null && response.documentNameList[dList].Rfpsummary.length > 0) {
        //       pp.DueDate = Object.keys(response.documentNameList[dList].Rfpsummary).length > 0 ? response.documentNameList[dList].Rfpsummary[0].FieldValue : null;
        //       if (Object.keys(response.documentNameList[dList].Rfpsummary).length === 0) {
        //         pp.RemainingDays = 0;
        //       }
        //       else {
        //         pp.RemainingDays = this.remainingDays(response.documentNameList[dList].Rfpsummary[0].FieldValue) > -1 ? this.remainingDays(response.documentNameList[dList].Rfpsummary[0].FieldValue) : 0;
        //       }
        //       pp.Agency = typeof response.documentNameList[dList].Rfpsummary[1].FieldValue === 'undefined' ? null : response.documentNameList[dList].Rfpsummary[1].FieldValue;
        //     }
        //     pp.DocName = response.documentNameList[dList].DocName;
        //     pp.RfpdocumentId = typeof response.documentNameList[dList].RfpdocumentId === 'undefined' ? null : response.documentNameList[dList].RfpdocumentId;
        //     docList.push(pp);
        //   }
        //   return docList;
        // }

      }, {
        key: "CompanyOppertunityListReponse",
        value: function CompanyOppertunityListReponse(companyOppertunityListReponse) {
          if (companyOppertunityListReponse.apiStatusCode == "1") {
            var docList = [];
            docList = this.ExtractSummaryField(companyOppertunityListReponse.opportunityNameList);
            docList.sort(function (d) {
              return d.RemainingDays;
            });
            this.oppertunityList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](docList);
            this.oppertunityList.sort = this.sort;
            debugger;
            this.oppertunityList.paginator = this.paginator;
          }
        }
      }, {
        key: "ExtractSummaryField",
        value: function ExtractSummaryField(opportunityNameList) {
          //let opportunityNameList: Array<OpportunityName> = companyOppertunityListReponse.opportunityNameList;
          var docList = []; //for (var dList in response.documentNameList) {

          for (var dList in opportunityNameList) {
            var pp = new PendingDocsList();

            if (opportunityNameList[dList].ClosingDateAndTime !== null && opportunityNameList[dList].ClosingDateAndTime.length > 0) {
              pp.DueDate = opportunityNameList[dList].ClosingDateAndTime.length > 0 ? opportunityNameList[dList].ClosingDateAndTime : null;

              if (opportunityNameList[dList].ClosingDateAndTime.length === 0) {
                pp.RemainingDays = 0;
              } else {
                pp.RemainingDays = this.remainingDays(opportunityNameList[dList].ClosingDateAndTime) > -1 ? this.remainingDays(opportunityNameList[dList].ClosingDateAndTime) : 0;
              }

              pp.Agency = typeof opportunityNameList[dList].RequestingAgency === 'undefined' ? null : opportunityNameList[dList].RequestingAgency;
            }

            pp.OpportunityName = opportunityNameList[dList].OpportunityName;
            pp.opportunityId = typeof opportunityNameList[dList].OpportunityId === 'undefined' ? null : opportunityNameList[dList].OpportunityId;
            docList.push(pp);
          }

          return docList;
        }
      }, {
        key: "loadOppertunity",
        value: function loadOppertunity(opportunityId) {
          console.log('>>>>>loadOppertunity<<<<<');
          this.dialogRef.close(opportunityId); //this.DocumentParserFormComponent.getSavedDocInfo(null, null, RfpdocumentId);
          //const queryParams = { 'category': 'summary' };
          //this.router.navigate(['/'], { queryParams })
        }
      }]);

      return DocumentListComponent;
    }();

    DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) {
      return new (t || DocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_6__["DocumentParserFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Parser_Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_8__["RfpDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8));
    };

    DocumentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentListComponent,
      selectors: [["app-document-list"]],
      viewQuery: function DocumentListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 41,
      vars: 13,
      consts: [[1, "mat-elevation-z8"], [2, "float", "left", "width", "95%"], [1, "fill-remaining-space"], [4, "ngIf"], ["floatLabel", "never", 1, "search-form-field"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSort", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "OpportunityName"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "solicitationNo"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "startDate"], ["matColumnDef", "DueDate"], ["matColumnDef", "RemainingDays"], ["matColumnDef", "Agency"], ["matColumnDef", "action"], ["matColumnDef", "loading"], ["colspan", "4", 4, "matFooterCellDef"], ["matColumnDef", "noData"], ["colspan", "6", 4, "matFooterCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-sort-header", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", 3, "click"], ["colspan", "4"], ["colspan", "6"], [3, "ngClass"]],
      template: function DocumentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Opportunity List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentListComponent_div_7_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocumentListComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.searchKey = $event;
          })("keyup", function DocumentListComponent_Template_input_keyup_9_listener() {
            return ctx.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DocumentListComponent_button_10_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DocumentListComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DocumentListComponent_mat_cell_14_Template, 2, 1, "mat-cell", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DocumentListComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DocumentListComponent_mat_cell_17_Template, 2, 1, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DocumentListComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DocumentListComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DocumentListComponent_mat_cell_22_Template, 2, 1, "mat-cell", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DocumentListComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DocumentListComponent_mat_cell_25_Template, 2, 1, "mat-cell", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DocumentListComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DocumentListComponent_mat_cell_28_Template, 2, 1, "mat-cell", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DocumentListComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DocumentListComponent_mat_cell_31_Template, 3, 2, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DocumentListComponent_mat_footer_cell_33_Template, 2, 0, "mat-footer-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DocumentListComponent_mat_footer_cell_35_Template, 2, 0, "mat-footer-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DocumentListComponent_mat_header_row_36_Template, 1, 0, "mat-header-row", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DocumentListComponent_mat_row_37_Template, 1, 0, "mat-row", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DocumentListComponent_mat_footer_row_38_Template, 1, 3, "mat-footer-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DocumentListComponent_mat_footer_row_39_Template, 1, 3, "mat-footer-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-paginator", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popUpHeaderFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.oppertunityList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterRow"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
      styles: [".hide[_ngcontent-%COMP%]{\r\n    display:none;\r\n  }\r\n  .data-table[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n    overflow-x: hidden !important;\r\n  \r\n  }\r\n  mat-footer-row[_ngcontent-%COMP%]   mat-footer-cell[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    font-style:italic;\r\n  }\r\n  mat-header-row[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    color:#00BFFF;\r\n    width: 350px;\r\n  }\r\n  mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .mat-column-DocName[_ngcontent-%COMP%] {\r\n    word-wrap: break-word !important;\r\n    white-space: unset !important;\r\n    flex: 0 0 32% !important;\r\n    width: 32% !important;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n    -ms-hyphens: auto;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n  }\r\n  .mat-column-DueDate[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 10px;\r\n  }\r\n  .mat-column-RemainingDays[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 25px;\r\n    word-wrap: break-word !important;\r\n    white-space: unset !important;\r\n    flex: 0 0 18% !important;\r\n    width: 18% !important;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n    -ms-hyphens: auto;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n  }\r\n  .mat-column-Agency[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 25px;\r\n    word-wrap: break-word !important;\r\n    white-space: unset !important;\r\n    flex: 0 0 25% !important;\r\n    width: 25% !important;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n    -ms-hyphens: auto;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n  }\r\n  .mat-column-action[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 10px;\r\n  }\r\n  .search-div[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n  }\r\n  .search-form-field[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    padding: 5px 10px; \r\n    border-radius: 5px;\r\n     }\r\n  .search-form-field[_ngcontent-%COMP%]   div.mat-form-field-underline[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .search-form-field[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{\r\n    border-top: 0px;\r\n  }\r\n  .search-form-field[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%]{\r\n    padding-bottom: 0px;\r\n  }\r\n  .search-form-field[_ngcontent-%COMP%]   div.mat-form-field-suffix[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    height: 32px;\r\n    width: 32px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvRGlhbG9ncy9kb2N1bWVudC1saXN0L2RvY3VtZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2QkFBNkI7O0VBRS9CO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBOztJQUVFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtLQUNqQjtFQUNIO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9QYXJzZXIvQ29tcG9uZW50cy9EaWFsb2dzL2RvY3VtZW50LWxpc3QvZG9jdW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGV7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gIC5kYXRhLXRhYmxlIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgbWF0LWZvb3Rlci1yb3cgbWF0LWZvb3Rlci1jZWxse1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxuICB9XHJcbiAgbWF0LWhlYWRlci1yb3cgbWF0LWhlYWRlci1jZWxse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IzAwQkZGRjtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtY29sdW1uLURvY05hbWUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAzMiUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMiUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuICAubWF0LWNvbHVtbi1EdWVEYXRlXHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAubWF0LWNvbHVtbi1SZW1haW5pbmdEYXlzXHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxOCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuICAubWF0LWNvbHVtbi1BZ2VuY3lcclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDI1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfVxyXG4gIC5tYXQtY29sdW1uLWFjdGlvblxyXG4gIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1kaXZ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgfVxyXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtc3VmZml4IGJ1dHRvbntcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-document-list',
          templateUrl: './document-list.component.html',
          styleUrls: ['./document-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_6__["DocumentParserFormService"]
        }, {
          type: _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
        }, {
          type: src_app_Parser_Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_8__["RfpDatabaseService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/document-upload-option/document-upload-option.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/document-upload-option/document-upload-option.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: DocumentUploadOptionComponent */

  /***/
  function srcAppParserComponentsDialogsDocumentUploadOptionDocumentUploadOptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentUploadOptionComponent", function () {
      return DocumentUploadOptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Shared_models_ParsingDialogOutput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Shared/models/ParsingDialogOutput */
    "./src/app/Shared/models/ParsingDialogOutput.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_Parser_Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Parser/Shared/Services/document-upload.service */
    "./src/app/Parser/Shared/Services/document-upload.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function DocumentUploadOptionComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r78.requiredYesNoMessage);
      }
    }

    function DocumentUploadOptionComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r79.requiredCategoryMessage);
      }
    }

    function DocumentUploadOptionComponent_mat_form_field_27_mat_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var categoryName_r83 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categoryName_r83.CategoryId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoryName_r83.Name, "");
      }
    }

    function DocumentUploadOptionComponent_mat_form_field_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DocumentUploadOptionComponent_mat_form_field_27_Template_mat_select_valueChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.categoryMultiDropdownSelectedValue = $event;
        })("selectionChange", function DocumentUploadOptionComponent_mat_form_field_27_Template_mat_select_selectionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.onMultiDropdownValueChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentUploadOptionComponent_mat_form_field_27_mat_option_2_Template, 2, 2, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r80.categoryMultiDropdownSelectedValue)("disabled", ctx_r80.yesOrNoRadioGroupDisable());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r80.categoryNameList);
      }
    }

    function DocumentUploadOptionComponent_mat_form_field_28_mat_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var categoryName_r88 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categoryName_r88.CategoryId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoryName_r88.Name, "");
      }
    }

    function DocumentUploadOptionComponent_mat_form_field_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DocumentUploadOptionComponent_mat_form_field_28_Template_mat_select_valueChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.categorySingleDropdownSelectedValue = $event;
        })("selectionChange", function DocumentUploadOptionComponent_mat_form_field_28_Template_mat_select_selectionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.onMultiDropdownValueChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentUploadOptionComponent_mat_form_field_28_mat_option_2_Template, 2, 2, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r81.categorySingleDropdownSelectedValue)("disabled", ctx_r81.yesOrNoRadioGroupDisable());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r81.categoryNameList);
      }
    }

    var DocumentUploadOptionComponent =
    /*#__PURE__*/
    function () {
      //checked: boolean = true;
      // auto: string = 'auto';
      // manual: string = 'manual';
      function DocumentUploadOptionComponent(dialogRef, documentUploadService) {
        _classCallCheck(this, DocumentUploadOptionComponent);

        this.dialogRef = dialogRef;
        this.documentUploadService = documentUploadService;
        this.checked = true;
        this.multiSelectionDropdown = false;
        this.singleSelectionDropdown = true;
        this.yesOrNoRadiobuttonGroupDisable = true;
        this.yesOrNoRadioBtnChecked = false;
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.requiredYesNo = false;
        this.requiredCategory = false;
        this.autoParsing = 'multiple';
        this.categories = [{
          value: 'category_2',
          viewValue: 'Scope'
        }, {
          value: 'category_3',
          viewValue: 'Background'
        }, {
          value: 'category_4',
          viewValue: 'Labor'
        }];
      }

      _createClass(DocumentUploadOptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.parsingDialogOutput = new src_app_Shared_models_ParsingDialogOutput__WEBPACK_IMPORTED_MODULE_1__["ParsingDialogOutput"]();
          this.categoryNameList = this.documentUploadService.CategoryNameList;
          this.parsingDialogOutput.ParsingAuto = true;
        }
      }, {
        key: "yesOrNoRadioGroupDisable",
        value: function yesOrNoRadioGroupDisable() {
          return this.yesOrNoRadiobuttonGroupDisable;
        }
      }, {
        key: "yesOrNoRadioButtonChecked",
        value: function yesOrNoRadioButtonChecked() {
          return this.yesOrNoRadioBtnChecked;
        } // singleSelectedVaule: string;
        // multipleSelectedVaule: string;

      }, {
        key: "closeDialogOpp",
        value: function closeDialogOpp() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          debugger;

          if (this.parsingDialogOutput.ParsingManual == true && this.parsingDialogOutput.wholeDocumentNo == false && this.parsingDialogOutput.wholeDocumentYes == false) {
            this.requiredYesNo = true;
            this.requiredYesNoMessage = "Must select one option Yes/No";
            return;
          }

          if (this.parsingDialogOutput.ParsingManual == true && this.parsingDialogOutput.wholeDocumentYes == true && this.categorySingleDropdownSelectedValue == "") {
            this.requiredCategory = true;
            this.requiredCategoryMessage = "Must select category";
          }

          if (this.parsingDialogOutput.ParsingManual == true && this.parsingDialogOutput.wholeDocumentNo == true && this.categoryMultiDropdownSelectedValue == "") {
            this.requiredCategory = true;
            this.requiredCategoryMessage = "Must select category";
          }

          if (this.multiSelectionDropdown == true) {
            this.parsingDialogOutput.SelectedCategory = this.categoryMultiDropdownSelectedValue;
          }

          if (this.singleSelectionDropdown == true) {
            this.parsingDialogOutput.SelectedCategory = this.categorySingleDropdownSelectedValue;
          }

          this.parsingDialogOutput.Ok = true;
          this.dialogRef.close(this.parsingDialogOutput);
        }
      }, {
        key: "onChange",
        value: function onChange(mrChange) {
          var mrButton = mrChange.source;

          if (mrChange.value == 'yes' && mrButton.checked == true) {
            this.parsingDialogOutput.wholeDocumentNo = false;
            this.parsingDialogOutput.wholeDocumentYes = true;
            this.parsingDialogOutput.ParsingAuto = false;
            this.multiSelectionDropdown = false;
            this.singleSelectionDropdown = true;
            this.categorySingleDropdownSelectedValue = '';
            this.requiredYesNoMessage = "";
            this.requiredYesNo = false;
          } else if (mrChange.value == 'no' && mrButton.checked == true) {
            this.parsingDialogOutput.wholeDocumentNo = true;
            this.parsingDialogOutput.wholeDocumentYes = false;
            this.parsingDialogOutput.ParsingAuto = false;
            this.singleSelectionDropdown = false;
            this.multiSelectionDropdown = true;
            this.categoryMultiDropdownSelectedValue = '';
            this.requiredYesNoMessage = "";
            this.requiredYesNo = false;
          } else if (mrChange.value == 'auto' && mrButton.checked == true) {
            this.yesOrNoRadioBtnChecked = false;
            this.parsingDialogOutput.ParsingAuto = true;
            this.yesOrNoRadiobuttonGroupDisable = true;
            this.categoryMultiDropdownSelectedValue = '';
            this.categorySingleDropdownSelectedValue = '';
            this.requiredYesNo = false;
            this.requiredYesNoMessage = "";
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
          } else if (mrChange.value == 'manual' && mrButton.checked == true) {
            this.yesOrNoRadiobuttonGroupDisable = false;
            this.parsingDialogOutput.ParsingManual = true;
            this.parsingDialogOutput.ParsingAuto = false;
          } else {
            this.parsingDialogOutput.wholeDocumentYes = false;
            this.parsingDialogOutput.wholeDocumentNo = false;
            this.parsingDialogOutput.ParsingAuto = false;
            this.parsingDialogOutput.ParsingManual = false;
          }
        }
      }, {
        key: "onMultiDropdownValueChange",
        value: function onMultiDropdownValueChange(event) {
          if (this.parsingDialogOutput.wholeDocumentNo == true && this.categoryMultiDropdownSelectedValue != "") {
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
          }

          if (this.parsingDialogOutput.wholeDocumentYes == true && this.categorySingleDropdownSelectedValue != "") {
            this.requiredCategory = false;
            this.requiredCategoryMessage = "";
          }
        }
      }]);

      return DocumentUploadOptionComponent;
    }();

    DocumentUploadOptionComponent.ɵfac = function DocumentUploadOptionComponent_Factory(t) {
      return new (t || DocumentUploadOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Parser_Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_4__["DocumentUploadService"]));
    };

    DocumentUploadOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentUploadOptionComponent,
      selectors: [["app-document-upload-option"]],
      inputs: {
        checked: "checked"
      },
      decls: 36,
      vars: 5,
      consts: [[2, "float", "left", "font-size", "small"], [1, "fill-remaining-space"], [2, "font-size", "small"], ["value", "auto", "checked", "", 2, "padding-right", "20px", 3, "change"], ["value", "manual", 3, "change"], ["style", "color: crimson; font-size:  small;", 4, "ngIf"], [3, "disabled"], ["value", "yes", 2, "padding-right", "20px", 3, "change"], ["value", "no", 3, "change"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], [2, "color", "crimson", "font-size", "small"], ["placeholder", "Select category", "multiple", "", 3, "value", "disabled", "valueChange", "selectionChange"], ["style", "width:300px; font-size: small;", 3, "value", 4, "ngFor", "ngForOf"], [2, "width", "300px", "font-size", "small", 3, "value"], ["placeholder", "Select category", 3, "value", "disabled", "valueChange", "selectionChange"]],
      template: function DocumentUploadOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parsing Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadOptionComponent_Template_mat_radio_button_change_9_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Auto parsing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadOptionComponent_Template_mat_radio_button_change_11_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Slective Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DocumentUploadOptionComponent_div_15_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Do you move whole document content? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-group", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadOptionComponent_Template_mat_radio_button_change_19_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentUploadOptionComponent_Template_mat_radio_button_change_21_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DocumentUploadOptionComponent_div_25_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DocumentUploadOptionComponent_mat_form_field_27_Template, 3, 3, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DocumentUploadOptionComponent_mat_form_field_28_Template, 3, 3, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \xA0\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadOptionComponent_Template_button_click_31_listener() {
            return ctx.closeDialogOpp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentUploadOptionComponent_Template_button_click_34_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requiredYesNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.yesOrNoRadioGroupDisable());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requiredCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiSelectionDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleSelectionDropdown);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhcnNlci9Db21wb25lbnRzL0RpYWxvZ3MvZG9jdW1lbnQtdXBsb2FkLW9wdGlvbi9kb2N1bWVudC11cGxvYWQtb3B0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-document-upload-option',
          templateUrl: './document-upload-option.component.html',
          styleUrls: ['./document-upload-option.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: src_app_Parser_Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_4__["DocumentUploadService"]
        }];
      }, {
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/duplicate-document-list/duplicate-document-list.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/duplicate-document-list/duplicate-document-list.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: DuplicateDocumentListComponent */

  /***/
  function srcAppParserComponentsDialogsDuplicateDocumentListDuplicateDocumentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DuplicateDocumentListComponent", function () {
      return DuplicateDocumentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DuplicateDocumentListComponent_mat_list_item_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var duplicateFile_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", duplicateFile_r32.Name, "");
      }
    }

    var DuplicateDocumentListComponent =
    /*#__PURE__*/
    function () {
      function DuplicateDocumentListComponent(data, dialogRef) {
        _classCallCheck(this, DuplicateDocumentListComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.duplicateFileList = [];
        debugger;
        this.duplicateFileList = data.duplicateFileList;
      }

      _createClass(DuplicateDocumentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SetMessage();
        }
      }, {
        key: "SetMessage",
        value: function SetMessage() {
          if (this.duplicateFileList.length === 1) {
            this.message = "Following file is already attached. this file can not be re-attached";
          } else if (this.duplicateFileList.length > 1) {
            this.message = "Following files are already attached. these files can not be re-attached";
          }
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close();
        }
      }]);

      return DuplicateDocumentListComponent;
    }();

    DuplicateDocumentListComponent.ɵfac = function DuplicateDocumentListComponent_Factory(t) {
      return new (t || DuplicateDocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    DuplicateDocumentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DuplicateDocumentListComponent,
      selectors: [["app-duplicate-document-list"]],
      decls: 22,
      vars: 2,
      consts: [[2, "float", "left", "width", "95%"], [1, "fill-remaining-space"], ["mat-icon-button", "", 3, "click"], [1, "confirm-dialog-container"], [1, "content-span", "full-width"], ["style", "font-size: small;", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "id", "yes-button", 3, "click"], [2, "font-size", "small"]],
      template: function DuplicateDocumentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Message Dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuplicateDocumentListComponent_Template_button_click_6_listener() {
            return ctx.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DuplicateDocumentListComponent_mat_list_item_16_Template, 2, 1, "mat-list-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\xA0\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuplicateDocumentListComponent_Template_button_click_20_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.duplicateFileList);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhcnNlci9Db21wb25lbnRzL0RpYWxvZ3MvZHVwbGljYXRlLWRvY3VtZW50LWxpc3QvZHVwbGljYXRlLWRvY3VtZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DuplicateDocumentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-duplicate-document-list',
          templateUrl: './duplicate-document-list.component.html',
          styleUrls: ['./duplicate-document-list.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/file-list-message/file-list-message.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/file-list-message/file-list-message.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: FileListMessageComponent */

  /***/
  function srcAppParserComponentsDialogsFileListMessageFileListMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileListMessageComponent", function () {
      return FileListMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FileListMessageComponent_mat_list_item_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rfpFile_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rfpFile_r34.FileName, "");
      }
    }

    var FileListMessageComponent =
    /*#__PURE__*/
    function () {
      function FileListMessageComponent(data, dialogRef) {
        _classCallCheck(this, FileListMessageComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        debugger;
        this.rfpFileList = data.rfpFileList;
        this.message = data.message;
      }

      _createClass(FileListMessageComponent, [{
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          debugger;
        }
      }]);

      return FileListMessageComponent;
    }();

    FileListMessageComponent.ɵfac = function FileListMessageComponent_Factory(t) {
      return new (t || FileListMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    FileListMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileListMessageComponent,
      selectors: [["app-file-list-message"]],
      decls: 22,
      vars: 2,
      consts: [[2, "float", "left", "width", "95%"], [1, "fill-remaining-space"], ["mat-icon-button", "", 3, "click"], [1, "confirm-dialog-container"], [1, "content-span", "full-width"], ["style", "font-size: small;", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "id", "yes-button", 3, "click"], [2, "font-size", "small"]],
      template: function FileListMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error Dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileListMessageComponent_Template_button_click_6_listener() {
            return ctx.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FileListMessageComponent_mat_list_item_16_Template, 2, 1, "mat-list-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileListMessageComponent_Template_button_click_20_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rfpFileList);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhcnNlci9Db21wb25lbnRzL0RpYWxvZ3MvZmlsZS1saXN0LW1lc3NhZ2UvZmlsZS1saXN0LW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileListMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-file-list-message',
          templateUrl: './file-list-message.component.html',
          styleUrls: ['./file-list-message.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/opportunity-name/opportunity-name.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/opportunity-name/opportunity-name.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: OpportunityNameComponent */

  /***/
  function srcAppParserComponentsDialogsOpportunityNameOpportunityNameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpportunityNameComponent", function () {
      return OpportunityNameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OpportunityNameComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage());
      }
    }

    var OpportunityNameComponent =
    /*#__PURE__*/
    function () {
      function OpportunityNameComponent(dialogRef) {
        _classCallCheck(this, OpportunityNameComponent);

        this.dialogRef = dialogRef;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
      }

      _createClass(OpportunityNameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialogOpp",
        value: function closeDialogOpp() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(name); //debugger;

          if (String(this.name.value).trim() !== "") {
            this.dialogRef.close(this.name.value);
          } else {
            this.name.setValue("");
          }
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          if (this.name.hasError('required')) {
            return 'You must enter a value';
          }
        }
      }]);

      return OpportunityNameComponent;
    }();

    OpportunityNameComponent.ɵfac = function OpportunityNameComponent_Factory(t) {
      return new (t || OpportunityNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], 8));
    };

    OpportunityNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OpportunityNameComponent,
      selectors: [["app-opportunity-name"]],
      decls: 22,
      vars: 3,
      consts: [[2, "height", "50px"], [2, "float", "left", "width", "95%", "font-size", "medium"], [1, "fill-remaining-space"], ["mat-icon-button", "", 3, "click"], ["mat-dialog-content", ""], ["matInput", "", "required", "", "cdkFocusInitial", "", 3, "formControl"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function OpportunityNameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opportunity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpportunityNameComponent_Template_button_click_6_listener() {
            return ctx.closeDialogOpp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OpportunityNameComponent_mat_error_15_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpportunityNameComponent_Template_button_click_17_listener() {
            return ctx.closeDialogOpp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpportunityNameComponent_Template_button_click_20_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.name.valid);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhcnNlci9Db21wb25lbnRzL0RpYWxvZ3Mvb3Bwb3J0dW5pdHktbmFtZS9vcHBvcnR1bml0eS1uYW1lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpportunityNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-opportunity-name',
          templateUrl: './opportunity-name.component.html',
          styleUrls: ['./opportunity-name.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/Dialogs/tinymce/tinymce.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Parser/Components/Dialogs/tinymce/tinymce.component.ts ***!
    \************************************************************************/

  /*! exports provided: TinymceComponent */

  /***/
  function srcAppParserComponentsDialogsTinymceTinymceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TinymceComponent", function () {
      return TinymceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");

    var _c0 = function _c0() {
      return {
        height: "600px",
        width: "650px",
        plugins: "link table | fullscreen | lists",
        toolbar: "formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | outdent indent | removeformat | addcomment | fullscreen | fontsizeselect | numlist bullist"
      };
    };

    var TinymceComponent =
    /*#__PURE__*/
    function () {
      function TinymceComponent(fb, dialogRef, data) {
        _classCallCheck(this, TinymceComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.OppoertunityDataArray = [];
        this.description = data.title;
        this.OppoertunityDataArray = data.opportunityData;
      }

      _createClass(TinymceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tinyData = this.getDataForTinymce();
        }
      }, {
        key: "getDataForTinymce",
        value: function getDataForTinymce() {
          var data = "";
          var onlyData = "";

          if (this.OppoertunityDataArray.length === 1 && this.OppoertunityDataArray[0].getAttribute('data-temptrow') !== null) {
            if (this.OppoertunityDataArray[0].getAttribute('data-temptrow').valueOf() === 'true') {
              return "";
            }
          }

          for (var index = 0; index < this.OppoertunityDataArray.length; index++) {
            var element = this.OppoertunityDataArray[index]; //let el: Element = element.getAttribute("");

            onlyData = element.innerHTML;
            data += element.outerHTML;
          }

          if (onlyData.trim() == '.') {
            data = undefined;
          }

          return data;
        }
      }, {
        key: "ok",
        value: function ok() {
          debugger;
          this.dialogRef.close(this.tinyData);
        }
      }, {
        key: "Cancel",
        value: function Cancel() {
          this.dialogRef.close();
        }
      }]);

      return TinymceComponent;
    }();

    TinymceComponent.ɵfac = function TinymceComponent_Factory(t) {
      return new (t || TinymceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    TinymceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TinymceComponent,
      selectors: [["app-tinymce"]],
      decls: 9,
      vars: 4,
      consts: [["mat-dialog-title", ""], ["apiKey", "n8trjkankxflr6d8m87r9cb5x34yak4ofq25hq05b0skama3", 3, "ngModel", "init", "ngModelChange"], [1, "mat-raised-button", 3, "click"], [1, "mat-raised-button", "mat-primary", 3, "click"]],
      template: function TinymceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "editor", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TinymceComponent_Template_editor_ngModelChange_3_listener($event) {
            return ctx.tinyData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TinymceComponent_Template_button_click_5_listener() {
            return ctx.Cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TinymceComponent_Template_button_click_7_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tinyData)("init", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhcnNlci9Db21wb25lbnRzL0RpYWxvZ3MvdGlueW1jZS90aW55bWNlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TinymceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tinymce',
          templateUrl: './tinymce.component.html',
          styleUrls: ['./tinymce.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/document-parser-form/document-parser-form.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/Parser/Components/document-parser-form/document-parser-form.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: DocumentParserFormComponent */

  /***/
  function srcAppParserComponentsDocumentParserFormDocumentParserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentParserFormComponent", function () {
      return DocumentParserFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-contextmenu */
    "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Dialogs/tinymce/tinymce.component */
    "./src/app/Parser/Components/Dialogs/tinymce/tinymce.component.ts");
    /* harmony import */


    var _document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../document-upload/document-upload.component */
    "./src/app/Parser/Components/document-upload/document-upload.component.ts");
    /* harmony import */


    var _document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../document-summary/document-summary.component */
    "./src/app/Parser/Components/document-summary/document-summary.component.ts");
    /* harmony import */


    var _Shared_models_OppertunityCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../Shared/models/OppertunityCategory */
    "./src/app/Shared/models/OppertunityCategory.ts");
    /* harmony import */


    var _Shared_Models_CategoryData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../Shared/Models/CategoryData */
    "./src/app/Parser/Shared/Models/CategoryData.ts");
    /* harmony import */


    var _Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../Shared/Services/document-upload.service */
    "./src/app/Parser/Shared/Services/document-upload.service.ts");
    /* harmony import */


    var _Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../Shared/Services/rfp-database.service */
    "./src/app/Parser/Shared/Services/rfp-database.service.ts");
    /* harmony import */


    var _Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../Shared/Services/document-parser-form.service */
    "./src/app/Parser/Shared/Services/document-parser-form.service.ts");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _shared_services_insert_category_attribute_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/services/insert-category-attribute.service */
    "./src/app/shared/services/insert-category-attribute.service.ts");
    /* harmony import */


    var _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../Shared/services/notification.service */
    "./src/app/Shared/services/notification.service.ts");
    /* harmony import */


    var _Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../Shared/Services/ValidateChangeInDataService */
    "./src/app/Parser/Shared/Services/ValidateChangeInDataService.ts");
    /* harmony import */


    var src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/Shared/services/dialog.service */
    "./src/app/Shared/services/dialog.service.ts");

    function DocumentParserFormComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentParserFormComponent_div_15_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "escapeHtml");
      }

      if (rf & 2) {
        var line_r107 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, line_r107.outerHTML, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DocumentParserFormComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentParserFormComponent_div_15_div_3_Template, 2, 4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r99.RfpDataArray);
      }
    }

    function DocumentParserFormComponent_div_16_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "escapeHtml");
      }

      if (rf & 2) {
        var line_r109 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, line_r109.outerHTML, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DocumentParserFormComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragulaModelChange", function DocumentParserFormComponent_div_16_Template_div_dragulaModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.RfpDataArray = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentParserFormComponent_div_16_div_3_Template, 2, 4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragulaModel", ctx_r100.RfpDataArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r100.RfpDataArray);
      }
    }

    var _c0 = function _c0() {
      return {
        "display": "inline-block"
      };
    };

    function DocumentParserFormComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Saving data...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("diameter", 20);
      }
    }

    var _c1 = function _c1() {
      return {
        category: "summary"
      };
    };

    function DocumentParserFormComponent_a_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentParserFormComponent_a_32_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r98.Save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Summary ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r102.categoryName == "summary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    var _c2 = function _c2(a0) {
      return {
        category: a0
      };
    };

    function DocumentParserFormComponent_a_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentParserFormComponent_a_33_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r98.Save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r114 = ctx.$implicit;

        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r103.categoryName == cat_r114.CategoryId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, cat_r114.CategoryId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r114.Name, " ");
      }
    }

    var _c3 = function _c3(a0, a1) {
      return [a0, a1];
    };

    function DocumentParserFormComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function DocumentParserFormComponent_div_39_Template_div_dblclick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var i_r119 = ctx.index;

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r120.OpenEditor([$event, i_r119]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "escapeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r118 = ctx.$implicit;
        var i_r119 = ctx.index;

        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, line_r118.outerHTML, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("contextMenu", ctx_r104.basicMenu)("contextMenuSubject", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c3, ctx_r104.filteredOpportunityDataArray, i_r119));
      }
    }

    function DocumentParserFormComponent_ng_template_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Delete ");
      }
    }

    var DocumentParserFormComponent =
    /*#__PURE__*/
    function () {
      function DocumentParserFormComponent(route, documentUploadService, rfpDatabaseService, documentParserFormService, dragulaService, dialog, insertCategoryAttributeService, router, notification, validateChange, dialogService) {
        _classCallCheck(this, DocumentParserFormComponent);

        this.route = route;
        this.documentUploadService = documentUploadService;
        this.rfpDatabaseService = rfpDatabaseService;
        this.documentParserFormService = documentParserFormService;
        this.dragulaService = dragulaService;
        this.dialog = dialog;
        this.insertCategoryAttributeService = insertCategoryAttributeService;
        this.router = router;
        this.notification = notification;
        this.validateChange = validateChange;
        this.dialogService = dialogService;
        this.isLoading = false;
        this.isSummary = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.categoryArray = [];
        this.catValues = [];
        this.RfpDataArray = [];
        this.filteredOpportunityDataArray = [];
        this.categoryArray = [];
        this.oppertunityCategoryArray = new Array();
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {// Show loading indicator
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {}

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {}
        }); //................
      }

      _createClass(DocumentParserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dragulaConfig();
          this.RouteParam();
          this.getRoutParamsBizlink();
          this.documentId = localStorage.getItem('documentId');
        }
      }, {
        key: "onPopulateCategoryNameList",
        value: function onPopulateCategoryNameList(categoryNameList) {
          this.categoryArray = categoryNameList;
        }
      }, {
        key: "getRoutParamsBizlink",
        value: function getRoutParamsBizlink() {
          var _this2 = this;

          var companyid = "";
          var userid = "";
          var rfpdocumentid = "";
          this.route.queryParamMap.subscribe(function (params) {
            //console.log('>>>>>getRoutParamsBizlink<<<<<');
            if (params.has('companyid') && params.has('userid') && !params.has('rfpdocumentid') && !params.has('companySegmentID')) {
              companyid = params.get('companyid');
              userid = params.get('userid'); // alert("*******  Welcome *******  \n You're landing from Bizlink with ! \n  company Id = "+companyid +"user Id = "+ userid);
              //console.log('>>>>>getRoutParamsBizlink>>call 1<<<<<');

              _this2.getSavedDocInfo(companyid, userid, null);
            } else if (params.has('rfpdocumentid')) {
              rfpdocumentid = params.get('rfpdocumentid'); //console.log('>>>>>getRoutParamsBizlink>>call 2<<<<<');

              _this2.getSavedDocInfo(null, null, rfpdocumentid);
            }
          });
        }
      }, {
        key: "activeClass",
        value: function activeClass(cat) {
          //console.log(cat);+
          cat.active = true;
        }
      }, {
        key: "onRfpDocumentNameReceived",
        value: function onRfpDocumentNameReceived(docNameList) {
          this.documentNameList = docNameList;
        }
      }, {
        key: "fileDropDownSelectedValue",
        value: function fileDropDownSelectedValue(name) {
          debugger;
          this.selectedfileDropDownValue = name;
        }
      }, {
        key: "onOpportunityDataOnCreationTransfer",
        value: function onOpportunityDataOnCreationTransfer() {
          debugger; //this.ClearForm();
          //this.documentName = docUploadResponse.documentName;// rfpDocument[4];
          //this.categoryArray = docUploadResponse.category;// rfpDocument[1];
          //let data: string = docUploadResponse.document;// rfpDocument[0];

          this.summaryFieldArray = this.documentUploadService.RFPOpportunity.SummaryFieldList; //docUploadResponse.summary;// rfpDocument[2];
          //this.documentID = docUploadResponse.documentId;// rfpDocument[3];
          //this.documentName = docUploadResponse.documentName;// rfpDocument[4];

          this.CategoryData = []; // docUploadResponse.CategoryData;// rfpDocument[5];
          //this.LoadRfpData(data, "fromFileUpload");

          this.documentSummaryComponent.createGroup(this.summaryFieldArray);
          this.fillOppeCatArray(this.categoryArray, this.CategoryData);
          this.RouteParam(); //}
          //}
        }
      }, {
        key: "RfpDocumentReceived",
        value: function RfpDocumentReceived(docUploadResponse) {
          this.ClearForm();
          this.documentName = docUploadResponse.documentName; // rfpDocument[4];

          this.categoryArray = docUploadResponse.category; // rfpDocument[1];

          var data = docUploadResponse.document; // rfpDocument[0];

          this.summaryFieldArray = docUploadResponse.summary; // rfpDocument[2];

          this.documentID = docUploadResponse.documentId; // rfpDocument[3];

          this.documentName = docUploadResponse.documentName; // rfpDocument[4];

          this.CategoryData = docUploadResponse.CategoryData; // rfpDocument[5];

          this.LoadRfpData(data, "fromFileUpload");
          this.documentSummaryComponent.createGroup(this.summaryFieldArray);
          this.fillOppeCatArray(this.categoryArray, this.CategoryData);
          this.RouteParam(); //}
          //}
        }
      }, {
        key: "onShowRFPDocument",
        value: function onShowRFPDocument() {
          var _this3 = this;

          this.RfpDataArray = [];
          var rfpFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (file) {
            return file.FileName == _this3.documentUploadService.SelectedFileName;
          });

          if (rfpFileIndex == -1) {
            return;
          }

          if (rfpFileIndex == -1) {
            this.documentName = '';
            this.opportunityName = this.documentUploadService.RFPOpportunity.OpportunityName;
            this.RfpDataArray = [];
            return;
          }

          var rfpfile = this.documentUploadService.RFPOpportunity.RfpFileList[rfpFileIndex];

          if (rfpfile.HTMLFile === undefined || rfpfile.HTMLFile === null || rfpfile.HTMLFile == '') {
            this.documentName = '';
            this.opportunityName = this.documentUploadService.RFPOpportunity.OpportunityName;
            this.RfpDataArray = [];
            return;
          }

          this.documentName = rfpfile.FileName;
          this.opportunityName = this.documentUploadService.RFPOpportunity.OpportunityName;
          var doc = new DOMParser().parseFromString(rfpfile.HTMLFile, "text/html");
          var div = doc.querySelector("div");
          this.loadLeftPaneData(div.children);
        }
      }, {
        key: "fillOppeCatArray",
        value: function fillOppeCatArray(categoryArray, CategoryData) {
          var _this4 = this;

          var self = this;

          if (categoryArray != null && categoryArray.length > 0) {
            if (this.oppertunityCategoryArray.length > 0) {
              this.oppertunityCategoryArray.length = 0;
              this.oppertunityCategoryArray = [];
            }

            categoryArray.forEach(function (cat) {
              var ObjOppCat = new _Shared_models_OppertunityCategory__WEBPACK_IMPORTED_MODULE_8__["OppertunityCategory"]();
              ObjOppCat.categoryId = null;
              ObjOppCat.categoryName = null;

              if (ObjOppCat.categoryData) {
                ObjOppCat.categoryData.length = 0;
                ObjOppCat.categoryData = [];
              }

              ObjOppCat.categoryId = cat.CategoryId;
              ObjOppCat.categoryName = cat.Name;
              var data = {};

              if (CategoryData) {
                data = CategoryData.filter(function (item) {
                  if (item.CategoryId == cat.CategoryId) return item.CategoryData;
                }).shift();

                if (data != undefined) {
                  //  debugger;
                  ObjOppCat.categoryData = _this4.RestDataIndexAttribute(data.CategoryData, cat.CategoryId);
                  self.oppertunityCategoryArray.push(ObjOppCat);
                } else {
                  ObjOppCat.categoryData = _this4.CreateElementForEmptyCategory(ObjOppCat.categoryId);
                  self.oppertunityCategoryArray.push(ObjOppCat);
                }
              }
            });
          }
        }
      }, {
        key: "dragulaConfig",
        value: function dragulaConfig() {
          var _this5 = this;

          var newAddElement;
          var siblingOfNewAddElement;
          var isNewElement;
          var sourceIndexId;
          var targetIndexId;
          var sourceId;
          var siblingCopy;
          var isCopied;
          this.dragulaService.createGroup('Copy', {
            direction: 'horizontal',
            copy: function copy(element, source) {
              console.log(source.id);
              return source.id === 'left';
            },
            copyItem: function copyItem(element) {
              console.log("copyItem");
              console.log(element);
              isNewElement = true;
              element.setAttribute("data-new", "true"); //this.AddDocumentIdInNewAddNode(element);

              return element.cloneNode(true);
            },
            accepts: function accepts(el, target, source, sibling) {
              console.log("accept");
              console.log(target.id);
              return target.id !== 'left';
            }
          });
          this.subs.add(this.dragulaService.dropModel("Copy").subscribe(function (_ref) {
            var name = _ref.name,
                el = _ref.el,
                target = _ref.target,
                source = _ref.source,
                sibling = _ref.sibling,
                item = _ref.item,
                sourceModel = _ref.sourceModel,
                targetModel = _ref.targetModel,
                sourceIndex = _ref.sourceIndex,
                targetIndex = _ref.targetIndex;

            if (source.id == 'right') {
              //console.log("Source Index >>>>> "+sourceIndex);
              //console.log("target Index >>>>> "+targetIndex);
              sourceIndexId = sourceIndex;
              targetIndexId = targetIndex;
              sourceId = source.id;
              siblingCopy = sibling;
              isCopied = true;
            }

            siblingOfNewAddElement = sibling;
          }));
          this.subs.add(this.dragulaService.dragend("Copy").subscribe(function (_ref2) {
            var name = _ref2.name,
                el = _ref2.el;

            //console.log("dragend");
            if (isNewElement === true) {
              newAddElement = el.querySelector("div *");

              _this5.ResetOppertunityDataListNewAddElement(newAddElement, siblingOfNewAddElement);

              isNewElement = false;
            } else {
              //debugger;
              if (sourceId == 'right' && isCopied === true) {
                isCopied = false;

                _this5.copyNodes(sourceIndexId, targetIndexId, siblingCopy, el);
              }
            }
          }));
        }
      }, {
        key: "copyNodes",
        value: function copyNodes(sourceIndex, targetIndex, sibling, el) {
          //debugger;
          if (sourceIndex > targetIndex) {
            var asibling = sibling.querySelector("div *");
            var siblingIndex = asibling.getAttribute("data-index").valueOf(); // console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");

            var siblingNode = this.filteredOpportunityDataArray.find(function (n) {
              return n.getAttribute("data-index").valueOf() === siblingIndex;
            }); // console.log("Sibling Node"+ siblingNode);

            var index = this.filteredOpportunityDataArray.indexOf(siblingNode);
            var diffIndex = sourceIndex - targetIndex;
            var getsiblingIndex = +index;
            var getsourceIndex = getsiblingIndex + diffIndex;
            var gettargetIndex = +index;

            if (gettargetIndex >= 0) {
              //console.log(getsourceIndex);
              //console.log(this.filteredOpportunityDataArray.length);
              //console.log(index);
              var newAddElementCopy = el.querySelector("div *");
              this.ResetOppertunityDataListCopyElement(newAddElementCopy, sibling, diffIndex, true); //console.log(newAddElementCopy);

              this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, this.filteredOpportunityDataArray.length, this.categoryName);
              this.resetDataIndexAttr();
              this.pushIntoFilteredArray();
            }
          } else {
            //console.log(sibling);
            if (sibling != null) {
              var _asibling = sibling.querySelector("div *");

              var _siblingIndex = _asibling.getAttribute("data-index").valueOf(); // console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");


              var _siblingNode = this.filteredOpportunityDataArray.find(function (n) {
                return n.getAttribute("data-index").valueOf() === _siblingIndex;
              }); // console.log("Sibling Node"+ siblingNode);


              var _index = this.filteredOpportunityDataArray.indexOf(_siblingNode);

              var diffIndex = targetIndex - sourceIndex; // console.log(diffIndex);

              var getsiblingIndex = +_index;
              var getsourceIndex = getsiblingIndex - (diffIndex + 1);
              var gettargetIndex = getsiblingIndex; //console.log(getsourceIndex);
              //console.log(getsiblingIndex);
              //console.log(index);

              var newAddElementCopy = el.querySelector("div *");
              this.ResetOppertunityDataListCopyElement(newAddElementCopy, sibling, diffIndex, false);
            } else {
              el.setAttribute("data-new", "true");
              var newAddElementCopy = el.querySelector("div *");
              var diffIndex = targetIndex - sourceIndex;

              if (this.filteredOpportunityDataArray.length > 15) {
                this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length, 0, newAddElementCopy);
                this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length - (diffIndex + 2), 1);
              } else {
                this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length, 0, newAddElementCopy);
                this.filteredOpportunityDataArray.splice(this.filteredOpportunityDataArray.length - 1, 1);
              }

              newAddElementCopy.removeAttribute("data-new");
              this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, this.filteredOpportunityDataArray.length, this.categoryName);
              this.resetDataIndexAttr();
              this.pushIntoFilteredArray();
            }
          }
        }
      }, {
        key: "ResetOppertunityDataListCopyElement",
        value: function ResetOppertunityDataListCopyElement(newAddElement, sibling, diffIndex, direction) {
          //debugger;
          var addNodeIndex = this.filteredOpportunityDataArray.findIndex(function (line) {
            return line.getAttribute("data-new") == "true";
          }); //console.log(">>>>>>add node index--"+ addNodeIndex+"--<<<<<<");

          var index;
          var indexSibling;
          var indexInArr = 0;
          var getsiblingIndex;

          if (sibling != null) {
            var asibling = sibling.querySelector("div *");
            var siblingIndex = asibling.getAttribute("data-index").valueOf();
            getsiblingIndex = +siblingIndex; // console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");

            var siblingNode = this.filteredOpportunityDataArray.find(function (n) {
              return n.getAttribute("data-index").valueOf() === siblingIndex;
            });
            index = siblingNode == null ? 0 : this.filteredOpportunityDataArray.indexOf(siblingNode);
          } else {
            index = this.filteredOpportunityDataArray.length;
          }

          if (index > 15) {
            if (direction) {
              this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
              this.filteredOpportunityDataArray.splice(index + diffIndex + 1, 1); //console.log("Length >>>>> "+this.filteredOpportunityDataArray.length);
            } else {
              this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
              this.filteredOpportunityDataArray.splice(index - (diffIndex + 1), 1);
              this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, index, this.categoryName);
              this.resetDataIndexAttr();
              this.pushIntoFilteredArray();
            } //newAddElement.removeAttribute("data-new");

          } else {
            if (direction) {
              if (this.filteredOpportunityDataArray.length < 15) {
                this.filteredOpportunityDataArray.splice(index, 0, newAddElement);

                if (this.filteredOpportunityDataArray.length > 9) {
                  this.filteredOpportunityDataArray.splice(diffIndex + index + 1, 1);
                } else {
                  this.filteredOpportunityDataArray.splice(index - 1, 1);
                }
              } else {
                if (this.filteredOpportunityDataArray.length > 9 && index < 15) {//this.filteredOpportunityDataArray.splice(index,0,newAddElement);
                  //this.filteredOpportunityDataArray.splice(diffIndex + index + 1,1);
                } else {
                  this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
                  this.filteredOpportunityDataArray.splice(index - 1, 1);
                }
              }
            } else {
              debugger;

              if (diffIndex > index) {
                this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
                this.filteredOpportunityDataArray.splice(diffIndex + (index + 1), 1);
                this.pushIntoFilteredArray();
              } else {
                this.pushIntoFilteredArray();
              }
            }
          } //console.log(">>>>>>Sibling Index -->"+ index +"<--<<<<<<");

        }
      }, {
        key: "ResetOppertunityDataListNewAddElement",
        value: function ResetOppertunityDataListNewAddElement(newAddElement, sibling) {
          // debugger;
          try {
            this.RemoveEmptyElement();
            var addNodeIndex = this.filteredOpportunityDataArray.findIndex(function (line) {
              return line.getAttribute("data-new") == "true";
            }); //console.log(">>>>>>--"+ addNodeIndex+"--<<<<<<");

            this.filteredOpportunityDataArray.splice(addNodeIndex, 1);
            var index;
            var indexSibling;
            var indexInArr = 0;

            if (sibling != null) {
              var asibling = sibling.querySelector("div *"); //console.log(">>>>>>Sibling Index -->"+ asibling +"<--<<<<<<");

              var siblingIndex = asibling.hasAttribute("data-index") ? asibling.getAttribute("data-index").valueOf() : 0; //console.log(">>>>>>Sibling Index -->"+ siblingIndex +"<--<<<<<<");

              var siblingNode = this.filteredOpportunityDataArray.find(function (n) {
                return n.getAttribute("data-index").valueOf() === siblingIndex;
              });
              index = siblingNode == null ? 0 : this.filteredOpportunityDataArray.indexOf(siblingNode); //index =  this.filteredOpportunityDataArray.length ===1 ? 0 : null;
            } else {
              index = this.filteredOpportunityDataArray.length;
            }

            if (index != null) {
              //console.log("---->"+index+"<------");
              var dataKey = newAddElement.getAttribute('data-key') == null ? "" : newAddElement.getAttribute('data-key').valueOf();
              newAddElement.innerHTML; //add new element

              newAddElement.removeAttribute("data-new");
              newAddElement.removeAttribute("data-key");

              if (dataKey != "") {
                for (var i = 0; i < this.RfpDataArray.length; i++) {
                  indexInArr = newAddElement.innerHTML === this.RfpDataArray[i].innerHTML ? i : 0;
                  if (indexInArr > 0) break;
                }

                console.log("----" + this.RfpDataArray[i].getAttribute('data-key') + "----" + indexInArr);
                indexSibling = index;

                for (var kk = indexInArr; kk < this.RfpDataArray.length; kk++) {
                  var getDataKey = this.RfpDataArray[kk].getAttribute('data-key');

                  if (getDataKey != null) {
                    //console.log(">>>>>>>>>>>>>>> -- index --"+kk+""+this.RfpDataArray[kk]+"-->DK-->"+getDataKey+"<<<<<<<<<<<<<");
                    var parentKey = dataKey.split('/'); //console.log(">>>>>>>>>>>>>>>"+parentKey+'<<<<<<<<<<<<<<');

                    var childKey = getDataKey != null ? getDataKey.split('/') : [0];
                    var consParentKey = "";
                    var consChildKey = "";
                    console.log("---------" + childKey + "---------");

                    if (childKey.length >= parentKey.length) {
                      for (var l = 0; l < parentKey.length; l++) {
                        consParentKey += parentKey[l];
                        consChildKey += childKey[l];
                      } //console.log(">>>>>>>>>>>>>>>"+consParentKey+"---"+consChildKey+"--<<<<<<<<<<<<<");


                      if (consParentKey === consChildKey) {
                        if (indexSibling === index) {
                          this.filteredOpportunityDataArray.splice(index, 0, this.RfpDataArray[kk]);
                          indexSibling = indexSibling + 1;
                        } else {
                          this.filteredOpportunityDataArray.splice(indexSibling, 0, this.RfpDataArray[kk]);
                          indexSibling = indexSibling + 1;
                        } //console.log(">>>>>>>>>>>>>>>--matched Child--> "+getDataKey+"--<<<<<<<<<<<<<");

                      } else {
                        break;
                      }
                    }
                  }
                }
              } else {
                if (sibling != null) {
                  this.filteredOpportunityDataArray.splice(index, 0, newAddElement);
                } else {
                  this.filteredOpportunityDataArray.push(newAddElement);
                }
              }

              this.insertCategoryAttributeService.resetOpportunityData(this.filteredOpportunityDataArray, index, this.categoryName);
              this.resetDataIndexAttr();
              this.pushIntoFilteredArray();
            }
          } catch (error) {//console.log("---->"+this.filteredOpportunityDataArray.length+"<----");
            //console.log(">>>>>>>>>>>>>>>Error--> "+error+"--<<<<<<<<<<<<<");
          }
        }
      }, {
        key: "resetDataIndexAttr",
        value: function resetDataIndexAttr() {
          var datakey = "";

          for (var index = 0; index < this.filteredOpportunityDataArray.length; index++) {
            this.filteredOpportunityDataArray[index].setAttribute("data-index", index.toString());
            this.filteredOpportunityDataArray[index].setAttribute("data-cat", ""); //............. setting data-key    start  

            if (!this.filteredOpportunityDataArray[index].hasAttribute("data-key")) {
              // if data-key attr is not present
              this.filteredOpportunityDataArray[index].setAttribute("data-key", index.toString());

              if (index - 1 !== -1) {
                datakey = this.filteredOpportunityDataArray[index - 1].getAttribute("data-key");
                this.filteredOpportunityDataArray[index].setAttribute("data-key", datakey); //console.log( datakey,this.filteredOpportunityDataArray[index-1].outerHTML);
              } else {
                if (this.filteredOpportunityDataArray[index + 1] != undefined) {
                  datakey = this.filteredOpportunityDataArray[index + 1].getAttribute("data-key");
                  this.filteredOpportunityDataArray[index].setAttribute("data-key", datakey);
                }
              }
            } //.............  setting data-key    end 

          }
        }
      }, {
        key: "LoadRfpData",
        value: function LoadRfpData(rfpDoc, flag) {
          if (rfpDoc != null) {
            var doc = new DOMParser().parseFromString(rfpDoc, "text/html");
            var div = doc.querySelector("div");

            switch (flag) {
              case 'fromFileUpload':
                this.loadLeftPaneData(div.children); //this.loadOppertunityData(doc);

                break;

              case "fromDbExistingFile":
                this.loadLeftPaneData(div.children);
                break;
            }
          } else {
            this.RfpDataArray.length = 0;
            this.RfpDataArray = [];
            this.filteredOpportunityDataArray.length = 0;
            this.filteredOpportunityDataArray = [];
            this.isSummary = false;
          }
        }
      }, {
        key: "loadLeftPaneData",
        value: function loadLeftPaneData(htmlCollection) {
          var _this6 = this;

          [].forEach.call(htmlCollection, function (item, index) {
            item.setAttribute("data-draggable", "true"); //item.style.cursor = "move";

            _this6.RfpDataArray.push(item);
          });
          this.RfpDataArray = Array.from(this.RfpDataArray);
        }
      }, {
        key: "RestDataIndexAttribute",
        value: function RestDataIndexAttribute(stringHtml, categoryId) {
          var dataCategoryList = [];
          var dataCategoryListElements = [];
          var doc = new DOMParser().parseFromString(stringHtml, "text/html");
          dataCategoryList = Array.from(doc.querySelectorAll("[data-cat]"));
          [].forEach.call(dataCategoryList, function (item, index) {
            item.setAttribute("data-index", index.toString());
            dataCategoryListElements.push(item);
          });
          return dataCategoryListElements;
        }
      }, {
        key: "RouteParam",
        value: function RouteParam() {
          var _this7 = this;

          this.route.queryParamMap.subscribe(function (params) {
            _this7.categoryName = params.get('category');
            console.log(_this7.categoryName);

            if (_this7.categoryName == 'summary') {
              _this7.filteredOpportunityDataArray = [];
              _this7.isSummary = true;
            } else if (_this7.categoryName === null && typeof _this7.categoryArray !== "undefined") {
              _this7.categoryName = 'summary';
              _this7.isSummary = true;
            } else {
              _this7.isSummary = false;

              _this7.filteredOppoertunity();

              if (_this7.filteredOpportunityDataArray.length > 0) {
                _this7.validateChange.initData(_this7.filteredOpportunityDataArray);
              }
            }
          });
        }
      }, {
        key: "filteredOppoertunity",
        value: function filteredOppoertunity() {
          var categoryId = this.categoryName;
          ;
          var obj = this.oppertunityCategoryArray.find(function (element) {
            return element.categoryId == categoryId;
          });
          this.filteredOpportunityDataArray = obj != undefined ? obj.categoryData : [];
        }
      }, {
        key: "OpenEditor",
        value: function OpenEditor(event) {
          var _this8 = this;

          event[0].stopPropagation(event[0]);
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = '700px';
          dialogConfig.data = {
            id: 1,
            title: 'Editor',
            opportunityData: this.filteredOpportunityDataArray
          };
          var dialogRef = this.dialog.open(_Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_5__["TinymceComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
              _this8.InsertDataInCategory(data);
            }
          });
        }
      }, {
        key: "onOpportunityDataTransfer",
        value: function onOpportunityDataTransfer(rfpOpportunity) {
          this.summaryFieldArray = this.documentUploadService.RFPOpportunity.SummaryFieldList;
          this.onShowRFPDocument();
          this.CategoryData = rfpOpportunity.CatetoryDataList;
          this.documentSummaryComponent.createGroup(this.summaryFieldArray);
          this.fillOppeCatArray(this.categoryArray, this.CategoryData);
          this.RouteParam();
        }
      }, {
        key: "onParsingDataTransfer",
        value: function onParsingDataTransfer(autoParsingResponse) {
          this.CleanSummaryDataAndCategoryData();
          this.summaryFieldArray = autoParsingResponse.summary;
          this.CategoryData = autoParsingResponse.CategoryData;
          this.documentSummaryComponent.createGroup(this.summaryFieldArray);
          this.fillOppeCatArray(this.categoryArray, this.CategoryData);
          this.RouteParam();
        }
      }, {
        key: "onDeleteFileDataTransfer",
        value: function onDeleteFileDataTransfer(deleteFileDataReponse) {
          this.filteredOpportunityDataArray = [];
          this.fillOppeCatArray(this.categoryArray, []);
          this.onShowRFPDocument();
          this.CategoryData = deleteFileDataReponse.CategoryData;
          this.fillOppeCatArray(this.categoryArray, this.CategoryData);
          var queryParams = {
            'category': 'summary'
          };
          this.router.navigate(['/'], {
            queryParams: queryParams
          });
        }
      }, {
        key: "InsertDataInCategory",
        value: function InsertDataInCategory(data) {
          var _this9 = this;

          if (data == "") {
            data = this.GetEmptyElement().outerHTML;
          }

          var categoryData = [];
          var doc = new DOMParser().parseFromString(data, "text/html");
          var doc1 = doc.documentElement.innerHTML;
          var dataCategoryList = doc.querySelector("body");
          [].forEach.call(dataCategoryList.children, function (item, index) {
            item.setAttribute("data-category", _this9.categoryName);
            categoryData.push(item);
          });
          this.filteredOpportunityDataArray = [];
          this.filteredOpportunityDataArray = categoryData;
          this.pushIntoFilteredArray();
        }
      }, {
        key: "DeleteOpportunityText",
        value: function DeleteOpportunityText(deletedInfo) {
          if (this.filteredOpportunityDataArray.length === 1) {
            var deletedNode = this.filteredOpportunityDataArray[deletedInfo[1]];

            if (deletedNode.hasAttribute("data-temptrow")) {
              return;
            } else {
              this.filteredOpportunityDataArray = [];
              this.filteredOpportunityDataArray[0] = this.GetEmptyElement();
              this.resetDataIndexAttr();
              this.pushIntoFilteredArray();
            }
          } else if (this.filteredOpportunityDataArray.length > 1) {
            if (deletedInfo.length > 1) {
              var opportunityData = deletedInfo[0];
              var deteletedTextIndex1 = deletedInfo[1];
              this.filteredOpportunityDataArray = this.filteredOpportunityDataArray.filter(function (a, index) {
                return index !== deteletedTextIndex1;
              }); /// ....

              this.pushIntoFilteredArray(); ///....
            }
          }
        }
      }, {
        key: "pushIntoFilteredArray",
        value: function pushIntoFilteredArray() {
          var categoryId;
          this.route.queryParamMap.subscribe(function (params) {
            if (params.has('category')) {
              categoryId = params.get('category');
            }
          });
          var catIndex = this.oppertunityCategoryArray.findIndex(function (item) {
            return item.categoryId == categoryId;
          });
          if (catIndex == -1) return;

          if (this.oppertunityCategoryArray[catIndex].categoryData.length > 0) {
            this.oppertunityCategoryArray[catIndex].categoryData.length = 0;
            this.oppertunityCategoryArray[catIndex].categoryData = [];
          }

          this.oppertunityCategoryArray[catIndex].categoryData = this.filteredOpportunityDataArray;
        }
      }, {
        key: "navigateToDefaultPath",
        value: function navigateToDefaultPath() {
          this.router.navigate(['/opportunity']);
        }
      }, {
        key: "getSavedDocInfo",
        value: function getSavedDocInfo(companyId, userId, documentId) {
          var _this10 = this;

          this.isLoading = true;
          this.dialog.closeAll();
          this.ClearForm();
          this.documentParserFormService.getSavedDocInfo(companyId, userId, documentId).subscribe(function (response) {
            _this10.documentName = response.documentName;

            _this10.LoadRfpData(response.document, "fromDbExistingFile");

            var self = _this10;

            if (self.categoryArray != null && self.categoryArray.length > 0) {
              self.categoryArray.length = 0;
            }

            if (response.categoryData) {
              response.categoryData.forEach(function (element) {
                var categoryObj = {
                  CategoryId: element.CategoryId,
                  Name: element.Name
                };
                self.categoryArray.push(categoryObj);
              });

              _this10.fillOppeCatArray(_this10.categoryArray, response.categoryData);
            }

            localStorage.setItem('documentId', response.documentId);

            _this10.documentSummaryComponent.createGroup(response.summary);

            if (response.status !== 'error' && _this10.categoryArray.length !== null && _this10.categoryArray.length != 0) {
              _this10.RouteParam();

              _this10.documentUploadComponent.isBtnPubDisabled = false;

              _this10.notification.success("Record retrived from cloud.");

              var queryParams = {
                'category': 'summary'
              };

              _this10.router.navigate(['/'], {
                queryParams: queryParams
              });

              _this10.isLoading = false;
            } else {
              if (response.documentId == 0 || response.documentId == '0') {
                _this10.notification.warning("No pending document found. ");
              } else {
                _this10.notification.error(response.message);
              }
            }

            _this10.isLoading = false;
          }, function (error) {
            _this10.isLoading = false; //console.log(error);

            _this10.notification.error(error);
          });
        } // getSavedDocInfo(companyId: any, userId: any, documentId: any) {
        //   this.isLoading = true;
        //   this.dialog.closeAll();
        //   this.ClearForm();
        //   this.documentParserFormService.getSavedDocInfo(companyId, userId, documentId).subscribe(
        //     (response) => {
        //       this.documentName = response.documentName;
        //       this.LoadRfpData(response.document, "fromDbExistingFile")
        //       let self = this;
        //       if (self.categoryArray != null && self.categoryArray.length > 0) { self.categoryArray.length = 0; }
        //       if (response.categoryData) {
        //         response.categoryData.forEach(function (element) {
        //           let categoryObj = {
        //             CategoryId: element.CategoryId,
        //             Name: element.Name
        //           }
        //           self.categoryArray.push(categoryObj);
        //         });
        //         this.fillOppeCatArray(this.categoryArray, response.categoryData);
        //       }
        //       localStorage.setItem('documentId', response.documentId);
        //       this.documentSummaryComponent.createGroup(response.summary);
        //       if (response.status !== 'error' && this.categoryArray.length !== null && this.categoryArray.length != 0) {
        //         this.RouteParam();
        //         this.documentUploadComponent.isBtnPubDisabled = false;
        //         this.notification.success("Record retrived from cloud.");
        //         const queryParams = { 'category': 'summary' };
        //         this.router.navigate(['/'], { queryParams })
        //         this.isLoading = false;
        //       }
        //       else {
        //         if (response.documentId == 0 || response.documentId == '0') {
        //           this.notification.warning("No pending document found. ");
        //         }
        //         else {
        //           this.notification.error(response.message);
        //         }
        //       }
        //       this.isLoading = false;
        //     },
        //     (error: any) => {
        //       this.isLoading = false;
        //       //console.log(error);
        //       this.notification.error(error);
        //     });
        // }

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var bag = this.dragulaService.find('Copy');
          if (bag !== undefined) this.dragulaService.destroy('Copy');
          this.subs.unsubscribe();
        }
      }, {
        key: "ClearForm",
        value: function ClearForm() {
          this.isSummary = false;
          this.RfpDataArray = [];
          this.filteredOpportunityDataArray = [];
        }
      }, {
        key: "CreateElementForEmptyCategory",
        value: function CreateElementForEmptyCategory(categoryId) {
          var divString = this.GetEmptyElement().outerHTML;
          return this.RestDataIndexAttribute(divString, categoryId);
        }
      }, {
        key: "NotDeletedRow",
        value: function NotDeletedRow(element) {
          //debugger;
          var attribute = element.getAttribute("data-lastrow");

          if (attribute == undefined && attribute == null) {
            return false;
          }

          return true;
        }
      }, {
        key: "GetEmptyElementString",
        value: function GetEmptyElementString() {
          //debugger;
          var categoryId;
          this.route.queryParamMap.subscribe(function (params) {
            if (params.has('category')) {
              categoryId = params.get('category');
            }
          });
          var divString = "<div data-temptrow=true data-category=" + categoryId + " data-cat='' data-key='1'><< Double click / drop text here >></div>";
          return divString;
        }
      }, {
        key: "GetEmptyElement",
        value: function GetEmptyElement() {
          //debugger;
          var categoryId;
          this.route.queryParamMap.subscribe(function (params) {
            if (params.has('category')) {
              categoryId = params.get('category');
            }
          });
          var bElement = document.createElement("b");
          var content = document.createTextNode("<< Double click / drop text here >>");
          bElement.appendChild(content);
          var divElement = document.createElement("div");
          divElement.appendChild(bElement);
          divElement.setAttribute("data-temptrow", "true");
          divElement.setAttribute("data-category", categoryId);
          divElement.setAttribute("data-cat", "");
          divElement.setAttribute("data-key", "1");
          return divElement;
        }
      }, {
        key: "RemoveEmptyElement",
        value: function RemoveEmptyElement() {
          //debugger;
          if (this.filteredOpportunityDataArray.length > 0) {
            var elementIndex = this.filteredOpportunityDataArray.findIndex(function (el) {
              return el.getAttribute('data-temptrow') === 'true';
            });
            console.log("---->element index--" + elementIndex + "---<----");

            if (elementIndex >= 0) {
              this.filteredOpportunityDataArray.splice(elementIndex, 1);
            }
          }
        }
      }, {
        key: "onCleanFormControls",
        value: function onCleanFormControls() {
          this.documentName = "";
          this.opportunityName = "";
          this.filteredOpportunityDataArray = [];
          this.RfpDataArray = [];
          this.documentSummaryComponent.createGroup([]);
          this.fillOppeCatArray(this.categoryArray, []);
        }
      }, {
        key: "CleanSummaryDataAndCategoryData",
        value: function CleanSummaryDataAndCategoryData() {
          this.filteredOpportunityDataArray = []; //this.RfpDataArray = [];

          this.documentSummaryComponent.createGroup([]);
          this.fillOppeCatArray(this.categoryArray, []);
        } /////////////multiple document upload

      }, {
        key: "AddDocumentIdInNewAddNode",
        value: function AddDocumentIdInNewAddNode(element) {
          var _this11 = this;

          var userSelectedFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (file) {
            return file.OrignalFile.name == _this11.documentName;
          });
          var userSelectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[userSelectedFileIndex];
          element.setAttribute("data-docid", userSelectedRfpFile.fileRFPDbId.toString());
        }
      }, {
        key: "onDeleteCategoryData",
        value: function onDeleteCategoryData(DeletedFileDocId) {
          debugger;
          var catDataArray = new Array();
          var catElementArray = new Array();
          var DeletedFileDocumentId = DeletedFileDocId.toString();

          for (var index = 0; index < this.oppertunityCategoryArray.length; index++) {
            var oppCategory = this.oppertunityCategoryArray[index];
            var catData = new _Shared_Models_CategoryData__WEBPACK_IMPORTED_MODULE_9__["CategoryData"]();
            catData.CategoryId = parseInt(oppCategory.categoryId);
            catData.Name = oppCategory.categoryName;

            for (var _index2 = 0; _index2 < oppCategory.categoryData.length; _index2++) {
              var element = oppCategory.categoryData[_index2];

              if (element.getAttribute("data-docid") !== null) {
                var documentId = element.getAttribute("data-docid").valueOf();

                if (documentId != DeletedFileDocumentId) {
                  catElementArray.push(element);
                  catData.CategoryData = catData.CategoryData + element.outerHTML;
                }
              } else {
                catElementArray.push(element);
                catData.CategoryData = catData.CategoryData + element.outerHTML;
              }
            }

            oppCategory.categoryData = catElementArray;
            catDataArray.push(catData);
          }

          this.filteredOpportunityDataArray = []; //this.RfpDataArray = [];

          this.fillOppeCatArray(this.categoryArray, []);
          this.fillOppeCatArray(this.categoryArray, catDataArray);
          this.filteredOppoertunity();
        }
      }, {
        key: "onMoveWholeDocument",
        value: function onMoveWholeDocument(categoryId) {
          this.isLoading = true;
          var queryParams = {
            'category': categoryId
          };
          this.router.navigate(['/'], {
            queryParams: queryParams
          });
          this.RemoveEmptyElement();
          var data;
          var status = false;

          for (var index = 0; index < this.filteredOpportunityDataArray.length; index++) {
            var element = this.filteredOpportunityDataArray[index];

            if (status == false) {
              data = element.outerHTML;
              status = true;
            } else {
              data = data + element.outerHTML;
            }
          }

          for (var _index3 = 0; _index3 < this.RfpDataArray.length; _index3++) {
            var HTMLElement = this.RfpDataArray[_index3];
            var _element = this.RfpDataArray[_index3];

            var hasElement = _element.hasAttribute("data-cat");

            if (hasElement == false) {
              _element.setAttribute("data-cat", "");
            }

            var RfpDataElement = _element.outerHTML;

            if (status == false) {
              data = RfpDataElement;
              status = true;
            } else {
              data = data + RfpDataElement;
            }
          }

          this.WholeDocumentParseDataSave(data, categoryId);
        }
      }, {
        key: "WholeDocumentParseDataSave",
        value: function WholeDocumentParseDataSave(categorydata, categoryId) {
          var _this12 = this;

          var SelectedFileNameIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (f) {
            return f.FileName == _this12.documentUploadService.SelectedFileName;
          });
          var rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[SelectedFileNameIndex];
          var formData = new FormData();
          formData.append('documentId', rfpFile.fileRFPDbId.toString());
          formData.append('categoryId', categoryId);
          formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
          formData.append('categoryData', categorydata);
          this.rfpDatabaseService.WholeDocumentParseDataSave(formData).subscribe(function (res) {
            return _this12.WholeDocumentParseDataSaveResponse(res, categorydata, rfpFile);
          }, function (err) {
            return _this12.UploadError(err);
          });
        }
      }, {
        key: "WholeDocumentParseDataSaveResponse",
        value: function WholeDocumentParseDataSaveResponse(apiReponse, categorydata, rfpFile) {
          if (apiReponse.apiStatusCode === "1") {
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.InsertDataInCategory(categorydata);
            this.notification.success("Parsing is completed successfully !");
            this.isLoading = false;
          } else if (apiReponse.apiStatusCode === "0") {
            this.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (apiReponse.apiStatusCode !== undefined) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "onSave",
        value: function onSave() {
          this.documentUploadComponent.isLoading = true;
          this.documentUploadComponent.SaveCategoriesDataAndSummaryData(this.oppertunityCategoryArray);
        }
      }, {
        key: "UploadError",
        value: function UploadError(parm) {
          this.uploadError = parm;
          this.isLoading = false;
          this.notification.error(this.uploadError);
        }
      }]);

      return DocumentParserFormComponent;
    }();

    DocumentParserFormComponent.ɵfac = function DocumentParserFormComponent_Factory(t) {
      return new (t || DocumentParserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_10__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_11__["RfpDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_12__["DocumentParserFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_13__["DragulaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_insert_category_attribute_service__WEBPACK_IMPORTED_MODULE_14__["InsertCategoryAttributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_16__["ValidateChangeInDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_17__["DialogService"]));
    };

    DocumentParserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentParserFormComponent,
      selectors: [["app-document-parser-form"]],
      viewQuery: function DocumentParserFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSummaryComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_6__["DocumentUploadComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.documentSummaryComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicMenu = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.documentUploadComponent = _t.first);
        }
      },
      decls: 44,
      vars: 15,
      consts: [["class", "loading-indicator", 4, "ngIf"], [3, "summary", "opportunityData", "receivedRFPDocument", "receivedRFPDocumentName", "ClearOpportunityForm", "SelectedFile", "PopulateCategoryNameList", "showRFPDocument", "opportunityDataOnCreationTransfer", "opportunityDataTransfer", "parsingDataTransfer", "CleanDocumentParserFormControls", "DeleteFileDataTransfer", "DeleteCategoryData", "MoveWholeDocument"], ["fileUploadComponent", ""], [1, "row"], [1, "col-sm-5"], [1, "card"], [1, "card-header"], [2, "font-size", "small"], [2, "font-weight", "bold"], [1, "card-block"], ["id", "notepad"], [4, "ngIf"], ["style", "cursor:move !important;", 4, "ngIf"], [1, "col-sm-7"], [3, "ngStyle", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Save opportunity", "title", "Save", 2, "font-size", "small", 3, "disabled", "click"], [1, "card-block", 2, "padding", "0px"], [1, "row", "no-gutter"], [1, "col-sm-3", "col-md-3", "px-0"], [1, "list-group", 2, "font-size", "small"], ["routerLink", "/", "class", "list-group-item list-group-item-action", 3, "queryParams", "active", "click", 4, "ngIf"], ["routerLink", "/", "class", "list-group-item list-group-item-action", 3, "queryParams", "active", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-9", "col-md-9", "px-0"], ["id", "notepadExtracted"], ["autosize", "", 3, "itemSize"], [3, "hidden"], ["dragula", "Copy", "id", "right", 1, "container", 3, "dragulaModel", "dragulaModelChange"], [3, "innerHTML", "contextMenu", "contextMenuSubject", "dblclick", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["contextMenuItem", "", 3, "execute"], [1, "loading-indicator"], ["mode", "indeterminate"], [1, "container"], ["style", "cursor:text !important;", 3, "innerHTML", 4, "cdkVirtualFor", "cdkVirtualForOf"], [2, "cursor", "text !important", 3, "innerHTML"], [2, "cursor", "move !important"], ["dragula", "Copy", "id", "left", 1, "container", 3, "dragulaModel", "dragulaModelChange"], [3, "innerHTML", 4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "innerHTML"], [3, "ngStyle"], ["color", "Primary", "mode", "indeterminate", 3, "ngStyle", "diameter"], [2, "font-style", "italic", "color", "indigo"], ["routerLink", "/", 1, "list-group-item", "list-group-item-action", 3, "queryParams", "click"], [3, "innerHTML", "contextMenu", "contextMenuSubject", "dblclick"]],
      template: function DocumentParserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocumentParserFormComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-document-upload", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("receivedRFPDocument", function DocumentParserFormComponent_Template_app_document_upload_receivedRFPDocument_1_listener($event) {
            return ctx.RfpDocumentReceived($event);
          })("receivedRFPDocumentName", function DocumentParserFormComponent_Template_app_document_upload_receivedRFPDocumentName_1_listener($event) {
            return ctx.onRfpDocumentNameReceived($event);
          })("ClearOpportunityForm", function DocumentParserFormComponent_Template_app_document_upload_ClearOpportunityForm_1_listener() {
            return ctx.ClearForm();
          })("SelectedFile", function DocumentParserFormComponent_Template_app_document_upload_SelectedFile_1_listener($event) {
            return ctx.fileDropDownSelectedValue($event);
          })("PopulateCategoryNameList", function DocumentParserFormComponent_Template_app_document_upload_PopulateCategoryNameList_1_listener($event) {
            return ctx.onPopulateCategoryNameList($event);
          })("showRFPDocument", function DocumentParserFormComponent_Template_app_document_upload_showRFPDocument_1_listener() {
            return ctx.onShowRFPDocument();
          })("opportunityDataOnCreationTransfer", function DocumentParserFormComponent_Template_app_document_upload_opportunityDataOnCreationTransfer_1_listener() {
            return ctx.onOpportunityDataOnCreationTransfer();
          })("opportunityDataTransfer", function DocumentParserFormComponent_Template_app_document_upload_opportunityDataTransfer_1_listener($event) {
            return ctx.onOpportunityDataTransfer($event);
          })("parsingDataTransfer", function DocumentParserFormComponent_Template_app_document_upload_parsingDataTransfer_1_listener($event) {
            return ctx.onParsingDataTransfer($event);
          })("CleanDocumentParserFormControls", function DocumentParserFormComponent_Template_app_document_upload_CleanDocumentParserFormControls_1_listener() {
            return ctx.onCleanFormControls();
          })("DeleteFileDataTransfer", function DocumentParserFormComponent_Template_app_document_upload_DeleteFileDataTransfer_1_listener($event) {
            return ctx.onDeleteFileDataTransfer($event);
          })("DeleteCategoryData", function DocumentParserFormComponent_Template_app_document_upload_DeleteCategoryData_1_listener($event) {
            return ctx.onDeleteCategoryData($event);
          })("MoveWholeDocument", function DocumentParserFormComponent_Template_app_document_upload_MoveWholeDocument_1_listener($event) {
            return ctx.onMoveWholeDocument($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\xA0\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Document Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DocumentParserFormComponent_div_15_Template, 4, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DocumentParserFormComponent_div_16_Template, 4, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Opportunity Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DocumentParserFormComponent_div_24_Template, 5, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentParserFormComponent_Template_button_click_25_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DocumentParserFormComponent_a_32_Template, 2, 4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DocumentParserFormComponent_a_33_Template, 2, 6, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "cdk-virtual-scroll-viewport", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-document-summary", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragulaModelChange", function DocumentParserFormComponent_Template_div_dragulaModelChange_38_listener($event) {
            return ctx.filteredOpportunityDataArray = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DocumentParserFormComponent_div_39_Template, 2, 9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "context-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DocumentParserFormComponent_ng_template_41_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function DocumentParserFormComponent_Template_ng_template_execute_41_listener($event) {
            return ctx.DeleteOpportunityText($event.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        }

        if (rf & 2) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("summary", ctx.documentSummaryComponent)("opportunityData", ctx.filteredOpportunityDataArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.documentName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSummary == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSummary == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.opportunityName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r98.isLoadingSmall);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.documentUploadService.SaveButtonDisable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryArray !== undefined && ctx.categoryArray.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isSummary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragulaModel", ctx.filteredOpportunityDataArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.filteredOpportunityDataArray);
        }
      },
      styles: [".row.no-gutter[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n  \r\n    .row.no-gutter[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%]:not(:first-child), .row.no-gutter[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%]:not(:last-child) {\r\n      padding-right: 0;\r\n      padding-left: 0;\r\n    }\r\n  \r\n    .maxHeightForOppertuity[_ngcontent-%COMP%]{\r\n      height:500px\r\n    }\r\n  \r\n    cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n }\r\n  \r\n    body[_ngcontent-%COMP%] {\r\n    overflow : hidden !important;\r\n  }\r\n  \r\n    .list_active[_ngcontent-%COMP%]{\r\n    background: #f8f9fa !important;\r\n  }\r\n  \r\n    .rfpDocument-viewport[_ngcontent-%COMP%] {\r\n    height: 525px;\r\n    width: 568px;\r\n    \r\n  }\r\n  \r\n    .rfpDocument-card[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n    width: 700px;\r\n  }\r\n  \r\n    .rfpDocumentHeader-card[_ngcontent-%COMP%]{\r\n    background-color: lightblue;\r\n  }\r\n  \r\n    mat-grid-tile[_ngcontent-%COMP%] {\r\n    background: lightblue;\r\n  }\r\n  \r\n    .loading-indicator[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n  \r\n    \r\n  \r\n    .loading-indicator[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n  }\r\n  \r\n    \r\n  \r\n    .mat-dialog-container[_ngcontent-%COMP%]{\r\n    padding:0px !important;\r\n  }\r\n  \r\n    .fill-remaining-space[_ngcontent-%COMP%] {\r\n    \r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n    div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvZG9jdW1lbnQtcGFyc2VyLWZvcm0vZG9jdW1lbnQtcGFyc2VyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztJQUVFOztNQUVFLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCOztJQUVBO01BQ0U7SUFDRjs7SUFHRjtJQUNFLGFBQWE7Q0FDaEI7O0lBQ0M7SUFDRSw0QkFBNEI7RUFDOUI7O0lBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7O0lBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTs7RUFFZDs7SUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0lBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0lBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0lBR0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7O0lBRUEsd0JBQXdCOztJQUN4QjtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7RUFDbkM7O0lBR0E7O0tBRUc7O0lBSUg7SUFDRSxzQkFBc0I7RUFDeEI7O0lBQ0E7SUFDRTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7SUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvZG9jdW1lbnQtcGFyc2VyLWZvcm0vZG9jdW1lbnQtcGFyc2VyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cubm8tZ3V0dGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAgIC5yb3cubm8tZ3V0dGVyIFtjbGFzcyo9J2NvbC0nXTpub3QoOmZpcnN0LWNoaWxkKSxcclxuICAgIC5yb3cubm8tZ3V0dGVyIFtjbGFzcyo9J2NvbC0nXTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1heEhlaWdodEZvck9wcGVydHVpdHl7XHJcbiAgICAgIGhlaWdodDo1MDBweFxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gfVxyXG4gIGJvZHkge1xyXG4gICAgb3ZlcmZsb3cgOiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3RfYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmZwRG9jdW1lbnQtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiA1MjVweDtcclxuICAgIHdpZHRoOiA1NjhweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucmZwRG9jdW1lbnQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxuICBcclxuICAucmZwRG9jdW1lbnRIZWFkZXItY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiAgbWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBvdmVyZmxvdzogc2hvdztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4gIC5sb2FkaW5nLWluZGljYXRvcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogW2RhdGEtZHJhZ2dhYmxlPVwidHJ1ZVwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgZGl2IGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentParserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-document-parser-form',
          templateUrl: './document-parser-form.component.html',
          styleUrls: ['./document-parser-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_10__["DocumentUploadService"]
        }, {
          type: _Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_11__["RfpDatabaseService"]
        }, {
          type: _Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_12__["DocumentParserFormService"]
        }, {
          type: ng2_dragula__WEBPACK_IMPORTED_MODULE_13__["DragulaService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _shared_services_insert_category_attribute_service__WEBPACK_IMPORTED_MODULE_14__["InsertCategoryAttributeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"]
        }, {
          type: _Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_16__["ValidateChangeInDataService"]
        }, {
          type: src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_17__["DialogService"]
        }];
      }, {
        documentSummaryComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSummaryComponent"], {
            "static": true
          }]
        }],
        basicMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], {
            "static": true
          }]
        }],
        documentUploadComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_6__["DocumentUploadComponent"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/document-summary/document-summary.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/Parser/Components/document-summary/document-summary.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DocumentSummaryComponent */

  /***/
  function srcAppParserComponentsDocumentSummaryDocumentSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentSummaryComponent", function () {
      return DocumentSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Dialogs/addfield/addfield.component */
    "./src/app/Parser/Components/Dialogs/addfield/addfield.component.ts");
    /* harmony import */


    var _Shared_Services_document_summary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Shared/Services/document-summary.service */
    "./src/app/Parser/Shared/Services/document-summary.service.ts");
    /* harmony import */


    var _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Shared/services/notification.service */
    "./src/app/Shared/services/notification.service.ts");
    /* harmony import */


    var _Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Shared/Services/ValidateChangeInDataService */
    "./src/app/Parser/Shared/Services/ValidateChangeInDataService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../Shared/Services/document-upload.service */
    "./src/app/Parser/Shared/Services/document-upload.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"); //'../Dialogs/addfield-dialog/addfield-dialog.component';//'./addfield-dialog/addfield-dialog.component';


    function DocumentSummaryComponent_div_3_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", field_r5.FieldDisplayName, " is required ");
      }
    }

    function DocumentSummaryComponent_div_3_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.MaxlengthErrorMessage(field_r5.FieldDisplayName), "");
      }
    }

    function DocumentSummaryComponent_div_3_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.InvalidDateErrorMessage(field_r5.FieldDisplayName), "");
      }
    }

    function DocumentSummaryComponent_div_3_mat_form_field_4_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentSummaryComponent_div_3_mat_form_field_4_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.deleteField(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentSummaryComponent_div_3_mat_form_field_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentSummaryComponent_div_3_mat_form_field_4_Template_button_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.openDialog($event, i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DocumentSummaryComponent_div_3_mat_form_field_4_button_4_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", field_r5.FieldDisplayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", field_r5.FieldDisplayName)("id", field_r5.FieldDisplayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r5.FieldDisplayName != "Solicitation Title" && field_r5.FieldDisplayName != "Requesting Agency" && field_r5.FieldDisplayName != "Solicitation Number");
      }
    }

    function DocumentSummaryComponent_div_3_mat_form_field_5_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentSummaryComponent_div_3_mat_form_field_5_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.deleteField(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentSummaryComponent_div_3_mat_form_field_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentSummaryComponent_div_3_mat_form_field_5_Template_button_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.openDialog($event, i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DocumentSummaryComponent_div_3_mat_form_field_5_button_4_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", field_r5.FieldDisplayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", field_r5.FieldDisplayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r5.FieldDisplayName != "Original Posted Date" && field_r5.FieldDisplayName != "Question Due Date" && field_r5.FieldDisplayName != "Pre-bid Date" && field_r5.FieldDisplayName != "Closing Date and Time");
      }
    }

    function DocumentSummaryComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DocumentSummaryComponent_div_3_mat_error_1_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DocumentSummaryComponent_div_3_mat_error_2_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DocumentSummaryComponent_div_3_mat_error_3_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DocumentSummaryComponent_div_3_mat_form_field_4_Template, 5, 4, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DocumentSummaryComponent_div_3_mat_form_field_5_Template, 5, 3, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.groupForm.get(field_r5.FieldDisplayName).errors == null ? null : ctx_r4.groupForm.get(field_r5.FieldDisplayName).errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.groupForm.get(field_r5.FieldDisplayName).errors == null ? null : ctx_r4.groupForm.get(field_r5.FieldDisplayName).errors.maxlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.groupForm.get(field_r5.FieldDisplayName).errors == null ? null : ctx_r4.groupForm.get(field_r5.FieldDisplayName).errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r5.ControlType == "text" || field_r5.ControlType == "textarea");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r5.ControlType == "date");
      }
    }

    var DocumentSummaryComponent =
    /*#__PURE__*/
    function () {
      function DocumentSummaryComponent(fb, documentSummaryService, notification, validateChange, dialog, route, documentUploadService) {
        _classCallCheck(this, DocumentSummaryComponent);

        this.fb = fb;
        this.documentSummaryService = documentSummaryService;
        this.notification = notification;
        this.validateChange = validateChange;
        this.dialog = dialog;
        this.route = route;
        this.documentUploadService = documentUploadService;
        this.Test1 = 20;
        this.ONE_DANK_REGEX = /^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d$|^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ]([1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ][ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$/;
      }

      _createClass(DocumentSummaryComponent, [{
        key: "try",
        value: function _try() {
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groupForm = this.fb.group({});
          this.summarArray = new Array();
        }
      }, {
        key: "createGroup",
        value: function createGroup(summaryFieldArray) {
          if (summaryFieldArray != undefined) {
            // this.groupForm.reset();
            this.summarArray = summaryFieldArray;
            this.validateChange.initDataSummary(summaryFieldArray, null);
            this.drawFields(summaryFieldArray); // console.log(this.groupForm);
          }

          ;
        }
      }, {
        key: "drawFields",
        value: function drawFields(summaryFieldArray) {
          var _this13 = this;

          this.removeControlIfExist(this.groupForm);
          summaryFieldArray.forEach(function (control) {
            //console.log('>>>>>>'+control.FiledTypeId+'<<<<<');
            if (control.FieldDisplayName == "Solicitation Title") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]));
            } else if (control.FieldDisplayName == "Solicitation Number") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]));
            } else if (control.FieldDisplayName == "Requesting Agency") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]));
            } else if (control.FieldDisplayName == "Original Posted Date") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this13.ONE_DANK_REGEX)]));
            } else if (control.FieldDisplayName == "Question Due Date") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this13.ONE_DANK_REGEX)]));
            } else if (control.FieldDisplayName == "Pre-bid Date") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this13.ONE_DANK_REGEX)]));
            } else if (control.FieldDisplayName == "Closing Date and Time") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this13.ONE_DANK_REGEX)]));
            } else if (control.FiledTypeId == "3") {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this13.ONE_DANK_REGEX)]));
            } else {
              _this13.groupForm.addControl(control.FieldDisplayName, _this13.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]));
            }
          });
        }
      }, {
        key: "removeControlIfExist",
        value: function removeControlIfExist(group) {
          Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            group.removeControl(key);
          });
        }
      }, {
        key: "addField",
        value: function addField(index, summaryField) {
          var _this14 = this;

          var fieldTypeId;

          if (summaryField.ControlType.toString() == 'TextBox') {
            summaryField.FiledTypeId = 1;
            summaryField.ControlType = 'text';
          } else if (summaryField.ControlType.toString() == 'textarea') {
            fieldTypeId = 2;
          } else {
            summaryField.FiledTypeId = 3;
            summaryField.ControlType = 'date';
          }

          this.summarArray.splice(index + 1, 0, summaryField);
          this.summarArray.forEach(function (control) {
            //console.log('>>>>>> fieldID >>>>'+control.FiledTypeId+'<<<<<');
            if (control.FiledTypeId === 3) {
              _this14.groupForm.addControl(control.FieldDisplayName, _this14.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this14.ONE_DANK_REGEX)]));
            } else {
              _this14.groupForm.addControl(control.FieldDisplayName, _this14.fb.control(control.FieldText, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]));
            }
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(e, index) {
          var _this15 = this;

          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = '500px';
          dialogConfig.height = '300px'; //console.log('---------------');

          dialogConfig.data = {
            id: index,
            summary: this
          };
          var dialogRef = this.dialog.open(_Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_4__["AddfieldComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (summaryField) {
            if (summaryField !== undefined) {
              _this15.addField(index, summaryField);
            }
          });
        }
      }, {
        key: "deleteField",
        value: function deleteField(index) {
          var deletedElement = this.summarArray[index];
          this.summarArray.splice(index, 1);
          this.groupForm.removeControl(deletedElement.FieldDisplayName);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(documentUpload, isOpportunity, categoryId, documentId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this16 = this;

            var createedOpportunity, fieldTextString, summaryObjArray, fieldsValidated;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // this.mapFormValuesToSummaryModel();
                    debugger;
                    createedOpportunity = false;

                    if (isOpportunity == true) {
                      createedOpportunity = true;
                    }

                    fieldTextString = "";
                    summaryObjArray = []; //let fieldsValidated = this.SummaryFieldValidation();

                    fieldsValidated = this.SummaryFieldValid();
                    Object.keys(this.groupForm.controls).forEach(function (key) {
                      var abstractControl = _this16.groupForm.get(key); // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);


                      var summaryIndex = _this16.summarArray.findIndex(function (el) {
                        return el.FieldDisplayName == key;
                      });

                      var summary = _this16.summarArray[summaryIndex];
                      var summaryObj = {
                        key: key,
                        Value: abstractControl.value,
                        DisplayOrder: summaryIndex + 1,
                        FiledTypeId: summary.FiledTypeId
                      }; //console.log(abstractControl.value);

                      summaryObjArray.push(summaryObj);
                      fieldTextString += abstractControl.value;
                    });

                    if (!fieldsValidated) {
                      _context.next = 14;
                      break;
                    }

                    if (this.validateChange.isEqualSummary(fieldTextString, this.summarArray)) {
                      _context.next = 13;
                      break;
                    }

                    createedOpportunity = false;
                    documentUpload.isLoadingSmall = true;
                    _context.next = 13;
                    return this.SaveSummary(documentUpload, isOpportunity, documentId, fieldTextString, summaryObjArray);

                  case 13:
                    if (isOpportunity == true && createedOpportunity == true) {
                      documentUpload.publish();
                    }

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "SaveSummary",
        value: function SaveSummary(documentUpload, isOpportunity, documentId, fieldTextString) {
          var summaryObjArray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this17 = this;

            var formData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    formData = new FormData();

                    if (documentId && summaryObjArray.length > 0) {
                      formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
                      formData.append('summary', JSON.stringify(summaryObjArray));
                    }

                    this.documentSummaryService.addSummary(formData).subscribe(function (response) {
                      if (response.status != "error") {
                        _this17.notification.success("Summary has been successfully saved.");

                        _this17.validateChange.initDataSummary(_this17.summarArray, fieldTextString);

                        documentUpload.isLoadingSmall = false;

                        if (isOpportunity == true) {
                          documentUpload.publish();
                        }
                      } else {
                        documentUpload.isLoadingSmall = false;

                        _this17.notification.error(response.message);
                      }
                    }, function (error) {
                      documentUpload.isLoadingSmall = false;

                      _this17.notification.error(error);
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "SummaryFieldValid",
        value: function SummaryFieldValid() {
          return this.groupForm.valid;
        }
      }, {
        key: "MaxlengthErrorMessage",
        value: function MaxlengthErrorMessage(fieldName) {
          var errorMessage = "";

          if (this.groupForm.get(fieldName).errors != null && this.groupForm.get(fieldName).errors.maxlength != null && this.groupForm.get(fieldName).errors.maxlength.requiredLength != null) {
            errorMessage = fieldName + ' must be less than ' + this.groupForm.get(fieldName).errors.maxlength.requiredLength + ' character';
          }

          return errorMessage;
        }
      }, {
        key: "InvalidDateErrorMessage",
        value: function InvalidDateErrorMessage(fieldName) {
          var errorMessage = "";

          if (this.groupForm.get(fieldName).errors.pattern != null) {
            //console.log(fieldName);
            errorMessage = 'Date format must be like mm/dd/yyyy or mm-dd-yyyy or July 8, 2018 00:00 PM';
          }

          return errorMessage;
        }
      }, {
        key: "SaveChangedCategoriesSummaryData",
        value: function SaveChangedCategoriesSummaryData(documentUpload, categoryDataList) {
          var _this18 = this;

          debugger;
          var fieldTextString = "";
          var summaryObjArray = [];
          var fieldsValidated = this.SummaryFieldValid();
          Object.keys(this.groupForm.controls).forEach(function (key) {
            var abstractControl = _this18.groupForm.get(key);

            var summaryIndex = _this18.summarArray.findIndex(function (el) {
              return el.FieldDisplayName == key;
            });

            var summary = _this18.summarArray[summaryIndex];
            var summaryObj = {
              key: key,
              Value: abstractControl.value,
              DisplayOrder: summaryIndex + 1,
              FiledTypeId: summary.FiledTypeId
            }; //console.log(abstractControl.value);

            summaryObjArray.push(summaryObj);
            fieldTextString += abstractControl.value;
          });

          if (fieldsValidated) {
            if (!this.validateChange.isEqualSummary(fieldTextString, this.summarArray) || categoryDataList != undefined && categoryDataList != null && categoryDataList.length > 0) {
              this.SaveChangedSummary(documentUpload, fieldTextString, summaryObjArray, categoryDataList);
            }
          }

          return [];
        }
      }, {
        key: "SaveChangedSummary",
        value: function SaveChangedSummary(documentUpload, fieldTextString) {
          var _this19 = this;

          var summaryObjArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var categoryDataList = arguments.length > 3 ? arguments[3] : undefined;
          var formData = new FormData();

          if (summaryObjArray.length > 0) {
            formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
            formData.append('categoriesData', JSON.stringify(categoryDataList));
            formData.append('summary', JSON.stringify(summaryObjArray));
          }

          this.documentUploadService.SaveChangedCategoriesAndSummaryData(formData).subscribe(function (response) {
            if (response.status != "error") {
              _this19.notification.success("Data has been successfully saved.");

              _this19.validateChange.initDataSummary(_this19.summarArray, fieldTextString);

              documentUpload.isLoading = false;
              documentUpload.isLoadingSmall = false;
            } else {
              documentUpload.isLoadingSmall = false;
              documentUpload.isLoading = false;

              _this19.notification.error(response.message);
            }
          }, function (error) {
            documentUpload.isLoading = false;
            documentUpload.isLoadingSmall = false;

            _this19.notification.error(error);
          });
        }
      }]);

      return DocumentSummaryComponent;
    }();

    DocumentSummaryComponent.ɵfac = function DocumentSummaryComponent_Factory(t) {
      return new (t || DocumentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_document_summary_service__WEBPACK_IMPORTED_MODULE_5__["DocumentSummaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_7__["ValidateChangeInDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_9__["DocumentUploadService"]));
    };

    DocumentSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentSummaryComponent,
      selectors: [["app-document-summary"]],
      decls: 4,
      vars: 2,
      consts: [[1, "zdass-mat-card"], [1, "zdass-container", 3, "formGroup"], ["class", "zdass-container input_box", 4, "ngFor", "ngForOf"], [1, "zdass-container", "input_box"], [4, "ngIf"], ["matInput", "", 1, "form-control", 3, "formControlName", "placeholder", "id"], [1, "plusbtn", 3, "click"], ["class", "plusbtn2", 3, "click", 4, "ngIf"], [1, "plusbtn2", 3, "click"], ["matInput", "", 1, "form-control", 3, "formControlName", "placeholder"]],
      template: function DocumentSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DocumentSummaryComponent_div_3_Template, 6, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.groupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.summarArray);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".zdass-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .plusbtn[_ngcontent-%COMP%]{ margin-top: -20px;  background: #007bff ; border: 0px; border-radius: 4px !important; color: #fff; font-size: 14px; padding: 3px 10px; float: right; margin-left: 5px; }\r\n  \r\n  .plusbtn2[_ngcontent-%COMP%]{ margin-top: -20px;  background: #ed3304 ; border: 0px; border-radius: 4px !important; color: #fff; font-size: 14px; float: right; \r\n     padding: 3px 10px;  }\r\n  \r\n  .form-control[_ngcontent-%COMP%]:focus{ outline: none !important; box-shadow: none !important;}\r\n  \r\n  .input_box[_ngcontent-%COMP%]{ margin-top: 0px !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvZG9jdW1lbnQtc3VtbWFyeS9kb2N1bWVudC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUEsVUFBVSxpQkFBaUIsR0FBRyxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsNkJBQTZCLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUU7O0VBRWpMLFdBQVcsaUJBQWlCLEdBQUcsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLDZCQUE2QixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsWUFBWTtLQUN4SSxpQkFBaUIsR0FBRzs7RUFHdEIscUJBQXFCLHdCQUF3QixFQUFFLDJCQUEyQixDQUFDOztFQUUzRSxZQUFZLDBCQUEwQixDQUFDOztFQUV2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QkEiLCJmaWxlIjoic3JjL2FwcC9QYXJzZXIvQ29tcG9uZW50cy9kb2N1bWVudC1zdW1tYXJ5L2RvY3VtZW50LXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi56ZGFzcy1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAucGx1c2J0bnsgbWFyZ2luLXRvcDogLTIwcHg7ICBiYWNrZ3JvdW5kOiAjMDA3YmZmIDsgYm9yZGVyOiAwcHg7IGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50OyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOiAzcHggMTBweDsgZmxvYXQ6IHJpZ2h0OyBtYXJnaW4tbGVmdDogNXB4OyB9XHJcbiAgXHJcbiAgLnBsdXNidG4yeyBtYXJnaW4tdG9wOiAtMjBweDsgIGJhY2tncm91bmQ6ICNlZDMzMDQgOyBib3JkZXI6IDBweDsgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE0cHg7IGZsb2F0OiByaWdodDsgXHJcbiAgICAgcGFkZGluZzogM3B4IDEwcHg7ICB9XHJcbiAgXHJcbiAgXHJcbiAgIC5mb3JtLWNvbnRyb2w6Zm9jdXN7IG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O31cclxuICBcclxuICAgLmlucHV0X2JveHsgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7fVxyXG5cclxuICAgLyogLm1hdC1lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICBcclxufVxyXG5cclxuLm1hdC1lcnJvcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgI2Y0NDMzNjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMnB4O1xyXG4gICBcclxuICAgXHJcbn0gKi9cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-document-summary',
          templateUrl: './document-summary.component.html',
          styleUrls: ['./document-summary.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _Shared_Services_document_summary_service__WEBPACK_IMPORTED_MODULE_5__["DocumentSummaryService"]
        }, {
          type: _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
        }, {
          type: _Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_7__["ValidateChangeInDataService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_9__["DocumentUploadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Components/document-upload/document-upload.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Parser/Components/document-upload/document-upload.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DocumentUploadComponent */

  /***/
  function srcAppParserComponentsDocumentUploadDocumentUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentUploadComponent", function () {
      return DocumentUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_models_DocUploadResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Shared/models/DocUploadResponse */
    "./src/app/Parser/Shared/models/DocUploadResponse.ts");
    /* harmony import */


    var src_app_Shared_models_DocUploadOptionResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Shared/models/DocUploadOptionResponse */
    "./src/app/Shared/models/DocUploadOptionResponse.ts");
    /* harmony import */


    var _Dialogs_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Dialogs/confirmation-message/confirmation-message.component */
    "./src/app/Parser/Components/Dialogs/confirmation-message/confirmation-message.component.ts");
    /* harmony import */


    var _Dialogs_opportunity_name_opportunity_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Dialogs/opportunity-name/opportunity-name.component */
    "./src/app/Parser/Components/Dialogs/opportunity-name/opportunity-name.component.ts");
    /* harmony import */


    var _Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Dialogs/file-list-message/file-list-message.component */
    "./src/app/Parser/Components/Dialogs/file-list-message/file-list-message.component.ts");
    /* harmony import */


    var _Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Dialogs/document-list/document-list.component */
    "./src/app/Parser/Components/Dialogs/document-list/document-list.component.ts");
    /* harmony import */


    var _Dialogs_document_upload_option_document_upload_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Dialogs/document-upload-option/document-upload-option.component */
    "./src/app/Parser/Components/Dialogs/document-upload-option/document-upload-option.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Shared_Models_CategoryData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../Shared/Models/CategoryData */
    "./src/app/Parser/Shared/Models/CategoryData.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../Shared/Services/document-parser-form.service */
    "./src/app/Parser/Shared/Services/document-parser-form.service.ts");
    /* harmony import */


    var _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../Shared/services/notification.service */
    "./src/app/Shared/services/notification.service.ts");
    /* harmony import */


    var _Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../Shared/Services/ValidateChangeInDataService */
    "./src/app/Parser/Shared/Services/ValidateChangeInDataService.ts");
    /* harmony import */


    var src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/Shared/services/dialog.service */
    "./src/app/Shared/services/dialog.service.ts");
    /* harmony import */


    var _Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../Shared/Services/document-upload.service */
    "./src/app/Parser/Shared/Services/document-upload.service.ts");
    /* harmony import */


    var _Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../Shared/Services/rfp-database.service */
    "./src/app/Parser/Shared/Services/rfp-database.service.ts");
    /* harmony import */


    var _Shared_Services_sharepoint_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../Shared/Services/sharepoint.service */
    "./src/app/Parser/Shared/Services/sharepoint.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function DocumentUploadComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function DocumentUploadComponent_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rfpFile_r95 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", rfpFile_r95.FileName)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, rfpFile_r95.FileNameColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rfpFile_r95.FileName, "");
      }
    }

    var DocumentUploadComponent =
    /*#__PURE__*/
    function () {
      function DocumentUploadComponent(router, documentParserFormService, route, notification, validateChange, dialogService, documentUploadService, rfpDatabaseService, sharepointService) {
        _classCallCheck(this, DocumentUploadComponent);

        this.router = router;
        this.documentParserFormService = documentParserFormService;
        this.route = route;
        this.notification = notification;
        this.validateChange = validateChange;
        this.dialogService = dialogService;
        this.documentUploadService = documentUploadService;
        this.rfpDatabaseService = rfpDatabaseService;
        this.sharepointService = sharepointService; //unsaveRfpFileOnSharePointList: RFPFile[] = [];

        this.showRFPDocument = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.OrignalHtmlDocument = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.PopulateCategoryNameList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opportunityDataOnCreationTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opportunityDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parsingDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CleanDocumentParserFormControls = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.DeleteFileDataTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.DeleteCategoryData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.MoveWholeDocument = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.receivedRFPDocument = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.receivedRFPDocumentName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.SelectedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.docUploadResponse = new _Shared_models_DocUploadResponse__WEBPACK_IMPORTED_MODULE_2__["DocUploadResponse"]();
        this.docUploadOptionResponse = new src_app_Shared_models_DocUploadOptionResponse__WEBPACK_IMPORTED_MODULE_3__["DocUploadOptionResponse"]();
        this.popUpOpportunityName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ClearOpportunityForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoadingSmall = false;
        this.isLoading = false;
        this.userSelectedFileList = [];
        this.RfpDataArray = [];
        this.responseSave = false;
        this.isPublish = false;
        this.ONE_DANK_REGEX = /^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d$|^([0]{0,1}[1-9]|1[012])\/([1-9]|([012][0-9])|(3[01]))\/\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d[ ]([0]{0,1}[1-9]|1[012]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[ ]([1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$|^(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[1-9]|[1-2][0-9]|3[0-1])[,][ ](20)[0-9]{2}[ ][ ]([1-9]|(?=[0-1])[0-1][0-9]|(?=2)2[0-4]):([0-5][0-9])[ ](AM|PM|am|pm)$/; //receivedRFPDocument: EventEmitter<any> = new EventEmitter<any>();

        this.fileUpload = {
          status: '',
          category: [],
          document: '',
          filePath: '',
          summary: '',
          documentId: '',
          documentName: '',
          CategoryData: '',
          message: ''
        };
      }

      _createClass(DocumentUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetCategoryNameListFromDB(undefined); // this.formGroupCB = new FormGroup({
          //   private:new FormControl()
          // });

          this.isBtnPubDisabled = true;
          this["private"] = "1";
        }
      }, {
        key: "getRouteParam",
        value: function getRouteParam() {
          var _this20 = this;

          this.route.queryParamMap.subscribe(function (params) {
            _this20.categoryName = params.get('category');
          });
        }
      }, {
        key: "onAttachedFile",
        value: function onAttachedFile(event) {
          this.isLoading = true;

          if (event.target.files.length > 0) {
            this.event = event;

            if (this.documentUploadService.CategoryNameList === undefined) {
              this.GetCategoryNameListFromDB("onAttachedFile");
            } else {
              this.AttachedFile();
            }
          } else {
            this.isLoading = false;
            event.target.value = null;
          }
        }
      }, {
        key: "AttachedFile",
        value: function AttachedFile() {
          this.uploadError = "";
          var validationCode = this.documentUploadService.ValidationFileName(this.event);

          if (validationCode == "1") {
            this.uploadError = 'Invalid type of file. Only [PDF] or [MS Word] file can be attached.';
            this.notification.warning(this.uploadError);
            this.isLoading = false;
            this.event.target.value = null;
            return true;
          } else if (validationCode == "2") {
            this.uploadError = 'Invalid Name of file. must not contain special character, (& , #).';
            this.notification.warning(this.uploadError);
            this.isLoading = false;
            this.event.target.value = null;
            return true;
          }

          this.documentUploadService.PopulateRfpFileCollection(this.event);
          this.documentUploadService.SetDropDownMessage();

          if (this.documentUploadService.duplicateFileList.length > 0) {
            this.uploadError = 'Same name file cannot be reattached.';
            this.notification.warning(this.uploadError);
            this.isLoading = false;
          }

          this.documentUploadService.TogglingEnableDisableButton();
          this.documentUploadService.SetNumberOfFileSatusCount();

          if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined && this.documentUploadService.RFPOpportunity.OpportunityId != null && this.documentUploadService.RFPOpportunity.OpportunityId != '') {
            this.UploadFilesSharePoint(undefined);
          } else {
            this.isLoading = false;
          }

          this.event.target.value = null;
        }
      }, {
        key: "onSelectionChangeFileDropDown",
        value: function onSelectionChangeFileDropDown(value) {
          this.documentUploadService.SelectedFileName = value;
          this.documentUploadService.TogglingEnableDisableButton(); //this.SelectedFile.emit(value);

          var fileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (file) {
            return file.FileName == value;
          });

          if (fileIndex >= 0) {
            var rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[fileIndex];
            this.showRFPDocument.emit();
          }
        }
      }, {
        key: "click",
        value: function click() {} // console.log(this.fileDropdownSelectedValue);
        //this.uploadError = "";
        //this.RfpDataArray = [];
        // OpenEmptyOpportunityDialog(saveAllfile: boolean) {
        //   if (this.documentUploadService.RFPOpportunity.OpportunityName != "") {
        //     this.CreateEmptyOpportunity(this.documentUploadService.RFPOpportunity.OpportunityId,
        //       this.documentUploadService.RFPOpportunity.OpportunityName,
        //       saveAllfile, 'true');
        //     return;
        //   }
        //   const dialogRef = this.dialogService.openDialog({
        //     width: '350px',
        //     dailogComponent: OpportunityNameComponent
        //   });
        //   dialogRef.afterClosed().subscribe(
        //     data => {
        //       if (data !== undefined && data !== '') {
        //         this.CreateEmptyOpportunity('', data, saveAllfile, 'false');
        //       }
        //     }
        //   );
        // }
        // CreateEmptyOpportunity(OpportunityId: string, opportunityName: string, saveAllfile: boolean, update: string) {
        //   //debugger;
        //   this.ClearOpportunityForm.emit(null);
        //   this.uploadError = "";
        //   this.isBtnPubDisabled = true;
        //   this.isLoading = true;
        //   this.RfpDataArray = [];
        //   debugger;
        //   // if (localStorage.getItem('userid') != null && localStorage.getItem('compId') != '0' && localStorage.getItem('userid') != '0') {
        //   //   //Invoke webservice to upload document over sharepoint
        //   //   const formDataSharePoint = new FormData();
        //   //   console.log(localStorage.getItem('compId'));
        //   //   formDataSharePoint.append('CompanyId', localStorage.getItem('compId'));
        //   //   console.log(localStorage.getItem('userid'));
        //   //   formDataSharePoint.append('UserId', localStorage.getItem('userid'));
        //   //   console.log(localStorage.getItem('clientID'));
        //   //   formDataSharePoint.append('ClientId', localStorage.getItem('clientID'));
        //   //   console.log(localStorage.getItem('companySegmentID'));
        //   //   formDataSharePoint.append('SegmentId', localStorage.getItem('companySegmentID'));
        //   //   formDataSharePoint.append('File', this.file);
        //   //   this.documentParserFormService.uploadSharePoint(formDataSharePoint).subscribe(
        //   //     res => this.SharePointUploadResponse(res),
        //   //     err => this.UploadError(err)
        //   //   );
        //   // }
        //   // else {
        //   //debugger;
        //   let fileNameList: FileName[];
        //   if (saveAllfile == true) {
        //     fileNameList = this.documentUploadService.GetFileNameList(undefined);
        //   } else {
        //     fileNameList = this.documentUploadService.GetFileNameList(this.documentUploadService.SelectedFileName);
        //   }
        //   const formData = new FormData();
        //   // for (let index = 0; index < this.attachedFileList.length; index++) {
        //   //  let f = this.attachedFileList[index].file
        //   //   formData.append('fileNameList', this.attachedFileList[index].file.name);      
        //   // }
        //   let jsonFileNameList = JSON.stringify(fileNameList);
        //   formData.append('fileNameJsonList', jsonFileNameList);
        //   formData.append('opportunityName', opportunityName);
        //   formData.append('opportunityIdForUpdate', OpportunityId);
        //   formData.append('update', update);
        //   formData.append('companyID', '');
        //   formData.append('userId', '');
        //   formData.append('clientId', '');
        //   formData.append('SegmentId', '');
        //   //debugger;
        //   this.documentUploadService.CreateEmptyOpportunity(formData).subscribe(
        //     res => this.SaveFileResponse(res),
        //     err => this.UploadError(err)
        //   );
        //   //}
        //   //    let parserRequestStatus: ParserRequestStatus = this.documentUploadService.CreateEmptyOpportunity(formData);
        //   //    //this.isLoading = false;
        //   // if(parserRequestStatus.Code === "1"){
        //   //   this.notification.success(parserRequestStatus.Message);
        //   //}
        // }
        // SaveFileResponse(createOpportunityResponse: CreateOpportunityResponse): void {
        //   if (createOpportunityResponse.apiStatusCode === "1") {
        //     this.documentUploadService.PopulateDocumentId(createOpportunityResponse.fileNameList,
        //       createOpportunityResponse.opportunityName, createOpportunityResponse.opportunityId, createOpportunityResponse.htmlfile);
        //     this.documentUploadService.TogglingEnableDisableButton();
        //     this.documentUploadService.SetNumberOfFileSatusCount();
        //     this.isLoading = false;
        //     if (createOpportunityResponse.fileNameList.length === 1) {
        //       this.notification.success("1 File is saved successfully !");
        //     } else if (createOpportunityResponse.fileNameList.length > 1) {
        //       this.notification.success(createOpportunityResponse.fileNameList.length + " Files are saved successfully !");
        //     }
        //     //const queryParams = { 'category': 'summary' };
        //     //this.router.navigate(['/'], { queryParams })
        //   } else if (createOpportunityResponse.apiStatusCode === "0") {
        //     this.isLoading = false;
        //     this.notification.error("'Something bad happened. Please try again later.'");
        //   } else {
        //     if (createOpportunityResponse.apiStatusCode !== undefined) {
        //       this.isLoading = false;
        //       this.notification.error("'Something bad happened. Please try again later.'");
        //     }
        //   }
        // }

      }, {
        key: "UploadError",
        value: function UploadError(parm) {
          this.uploadError = parm;
          this.isLoading = false;
          this.notification.error(this.uploadError);
        }
      }, {
        key: "doPublish",
        value: function doPublish(isOpportunity) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.responseSave === false)) {
                      _context3.next = 5;
                      break;
                    }

                    _context3.next = 3;
                    return this.Save(isOpportunity);

                  case 3:
                    _context3.next = 6;
                    break;

                  case 5:
                    this.isPublish = true;

                  case 6:
                    console.log("----" + this.responseSave + "---");

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "Save",
        value: function Save(isOpportunity) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var createOpporturnity, categoryId, documentId, categoryData, SummaryFieldValidationResult, _createOpporturnity, _categoryId, _documentId, _categoryData, queryParams;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    //console.log("Save");
                    //console.log('>>>>>>>>>>>> clicked <<<<<<<<<<<<'+isOpportunity);
                    this.responseSave = true;

                    if (!(isOpportunity === false)) {
                      _context4.next = 20;
                      break;
                    }

                    createOpporturnity = false;
                    categoryId = this.GetCategoridIdFromQueryparameter();
                    documentId = localStorage.getItem('documentId');

                    if (!(categoryId && documentId && categoryId != 'summary')) {
                      _context4.next = 15;
                      break;
                    }

                    categoryData = this.CategoryDataConvertArrayIntoString();

                    if (this.validateChange.isEqual(categoryData)) {
                      _context4.next = 13;
                      break;
                    }

                    createOpporturnity = false;
                    this.isLoadingSmall = true;
                    _context4.next = 12;
                    return this.SaveCategory(categoryData, documentId, categoryId, isOpportunity);

                  case 12:
                    this.isLoadingSmall = false;

                  case 13:
                    _context4.next = 18;
                    break;

                  case 15:
                    if (!(this.summary.SummaryFieldValid() && (categoryId == 'summary' || categoryId == null))) {
                      _context4.next = 18;
                      break;
                    }

                    _context4.next = 18;
                    return this.summary.onSubmit(this, isOpportunity, categoryId, documentId);

                  case 18:
                    _context4.next = 48;
                    break;

                  case 20:
                    if (!(isOpportunity === true)) {
                      _context4.next = 48;
                      break;
                    }

                    SummaryFieldValidationResult = this.SummaryFieldValidation();

                    if (!(SummaryFieldValidationResult && isOpportunity === true)) {
                      _context4.next = 42;
                      break;
                    }

                    this.isBtnPubDisabled = true;
                    this.isLoading = true;
                    _createOpporturnity = false;

                    if (isOpportunity == true) {
                      _createOpporturnity = true;
                    }

                    _categoryId = this.GetCategoridIdFromQueryparameter();
                    _documentId = localStorage.getItem('documentId');

                    if (!(_categoryId && _documentId && _categoryId != 'summary')) {
                      _context4.next = 39;
                      break;
                    }

                    _categoryData = this.CategoryDataConvertArrayIntoString();

                    if (this.validateChange.isEqual(_categoryData)) {
                      _context4.next = 36;
                      break;
                    }

                    _createOpporturnity = false;
                    this.isLoadingSmall = true;
                    _context4.next = 36;
                    return this.SaveCategory(_categoryData, _documentId, _categoryId, isOpportunity);

                  case 36:
                    if (isOpportunity == true && _createOpporturnity == true) {
                      this.publish();
                    }

                    _context4.next = 40;
                    break;

                  case 39:
                    if (_categoryId == 'summary' || _categoryId == null) {
                      this.summary.onSubmit(this, isOpportunity, _categoryId, _documentId);
                    }

                  case 40:
                    _context4.next = 48;
                    break;

                  case 42:
                    if (!(!SummaryFieldValidationResult && isOpportunity === true)) {
                      _context4.next = 48;
                      break;
                    }

                    //console.log('navigate it now');
                    queryParams = {
                      'category': 'summary'
                    };
                    this.router.navigate(['/'], {
                      queryParams: queryParams
                    });
                    this.isLoading = false;
                    this.responseSave = false;
                    return _context4.abrupt("return");

                  case 48:
                    if (!(this.isPublish === true)) {
                      _context4.next = 53;
                      break;
                    }

                    this.isPublish = false;
                    _context4.next = 52;
                    return this.Save(true);

                  case 52:
                    console.log("published");

                  case 53:
                    this.responseSave = false;

                  case 54:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onOpportunityListShow",
        value: function onOpportunityListShow() {
          var _this21 = this;

          localStorage.setItem('pendinglist', 'clicked');
          var data = {
            headerFlag: true,
            publish: false
          };
          var dialogRef = this.dialogService.openDialog({
            width: '70%',
            data: data,
            dailogComponent: _Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_7__["DocumentListComponent"]
          });
          dialogRef.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
              _this21.isLoading = true; //this.getSavedDocInfo(null, null, data);

              _this21.CleanFormControls(); //this.showRFPDocument.emit(undefined);


              _this21.opportunityId = data;

              if (_this21.documentUploadService.CategoryNameList === undefined) {
                _this21.GetCategoryNameListFromDB("GetSavedEmptyOpportunity");
              } else {
                _this21.documentUploadService.GetSavedEmptyOpportunity(_this21.opportunityId, _this21);
              }
            }
          });
        } //this method is called from documentuploadservice
        //do not call in this component.

      }, {
        key: "GetSaveEmptyOpportunity",
        value: function GetSaveEmptyOpportunity(rfpOpportunity) {
          this.opportunityDataTransfer.emit(rfpOpportunity);
        }
      }, {
        key: "getOpportunity",
        value: function getOpportunity() {
          var _this22 = this;

          this.documentParserFormService.getOpportunity().subscribe(function (response) {
            transfertoZbizlinkData(response);
          }, function (error) {
            console.log(error);

            _this22.notification.error(error);
          });
        }
      }, {
        key: "publish",
        value: function publish() {
          var _this23 = this;

          var OpportunityId = this.documentUploadService.RFPOpportunity.OpportunityId; //*************Loader********
          //this.isLoading = true;
          //**************************

          this.isBtnPubDisabled = true;
          this.documentParserFormService.publish(OpportunityId).subscribe(function (response) {
            try {
              if (response.Status == "1") {
                _this23.notification.success("Oppertunity publlished succefully ");

                _this23.isLoading = false;
                _this23.documentPublished = true;
                transfertoZbizlinkData(response);
              } else if (response.Status == "-1") {
                _this23.notification.success("Oppertunity creation process fail");

                _this23.isLoading = false;
                _this23.isBtnPubDisabled = false;
                _this23.documentPublished = false;
              }
            } catch (err) {
              _this23.isLoading = false;
              _this23.isBtnPubDisabled = false;
              _this23.documentPublished = false;
              console.log(err);
            }
          }, function (error) {
            _this23.isLoading = false;
            _this23.isBtnPubDisabled = false;
            _this23.documentPublished = false;

            _this23.notification.error(error);
          });
        }
      }, {
        key: "SaveCategory",
        value: function SaveCategory(CategoryData, documentId, categoryId, isOpportunity) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this24 = this;

            var formData;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    formData = new FormData();
                    formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
                    formData.append('categoryId', categoryId);
                    formData.append('categoryData', CategoryData);
                    formData.append('summary', null);
                    this.documentParserFormService.save(formData).subscribe(function (response) {
                      if (response.status != "error") {
                        _this24.isLoadingSmall = false;

                        _this24.notification.success("Your data has been successfully saved.");

                        if (isOpportunity == true) {
                          _this24.publish();
                        }
                      } else {
                        _this24.isLoadingSmall = false;

                        _this24.notification.error(response.message);
                      }
                    }, function (error) {
                      _this24.isLoadingSmall = false;

                      _this24.notification.error(error);
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "CategoryDataConvertArrayIntoString",
        value: function CategoryDataConvertArrayIntoString() {
          var rfpDoc = "";

          for (var index = 0; index < this.opportunityData.length; index++) {
            var element = this.opportunityData[index];

            if (element.getAttribute("data-lastrow") == null || element.getAttribute("data-lastrow").valueOf().trim() != ".") {
              rfpDoc += element.outerHTML;
            }
          }

          return rfpDoc;
        }
      }, {
        key: "GetCategoridIdFromQueryparameter",
        value: function GetCategoridIdFromQueryparameter() {
          var categoryId;
          this.route.queryParamMap.subscribe(function (params) {
            if (params.has('category')) {
              categoryId = params.get('category');
            }
          });
          return categoryId;
        }
      }, {
        key: "SummaryFieldValidation",
        value: function SummaryFieldValidation() {
          var result = this.summary.SummaryFieldValid();

          if (!result) {
            this.notification.error("One or more fields are required");
            return false;
          }

          return true;
        }
      }, {
        key: "onParse",
        value: function onParse() {
          var _this25 = this;

          var data = {
            CategoryNameList: this.documentUploadService.CategoryNameList
          };
          var matDialogRef = this.dialogService.openDialog({
            data: data,
            width: '350px',
            dailogComponent: _Dialogs_document_upload_option_document_upload_option_component__WEBPACK_IMPORTED_MODULE_8__["DocumentUploadOptionComponent"]
          });
          matDialogRef.afterClosed().subscribe(function (res) {
            if (res !== undefined) {
              var parsingDialogOutput = res;

              if (parsingDialogOutput.Ok = true) {}

              _this25.GetParsingData(res);
            }
          });
        }
      }, {
        key: "GetParsingData",
        value: function GetParsingData(parsingDialogOutput) {
          this.isLoading = true;

          if (parsingDialogOutput.ParsingAuto == true) {
            this.AutoParsing("0");
          } else if (parsingDialogOutput.wholeDocumentYes == true) {
            this.wholeDocumentMove(parseInt(parsingDialogOutput.SelectedCategory));
          } else if (parsingDialogOutput.wholeDocumentNo == true) {
            this.AutoParsing(parsingDialogOutput.SelectedCategory);
          }
        }
      }, {
        key: "wholeDocumentMove",
        value: function wholeDocumentMove(categoryId) {
          var _this26 = this;

          this.MoveWholeDocument.emit(categoryId);
          var selectedFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (f) {
            return f.FileName = _this26.documentUploadService.SelectedFileName;
          });
          var selectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];
          selectedRfpFile.Parsed = true;
          this.isLoading = false;
        }
      }, {
        key: "AutoParsing",
        value: function AutoParsing(categoriesId) {
          var _this27 = this;

          var fromData = new FormData();
          var userSelectedFileName = this.documentUploadService.SelectedFileName;
          var userSelectedRFPFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (file) {
            return file.FileName == userSelectedFileName;
          });
          var userSelectedRFPFile = this.documentUploadService.RFPOpportunity.RfpFileList[userSelectedRFPFileIndex];
          fromData.append("opportunityId", this.documentUploadService.RFPOpportunity.OpportunityId);
          fromData.append("documentId", userSelectedRFPFile.fileRFPDbId.toString());
          fromData.append("categoriesId", categoriesId);
          this.rfpDatabaseService.AutoParsing(fromData).subscribe(function (res) {
            return _this27.AutoParsingResponse(res, userSelectedRFPFile);
          }, function (err) {
            return _this27.UploadError(err);
          });
        }
      }, {
        key: "AutoParsingResponse",
        value: function AutoParsingResponse(autoParsingResponse, userSelectedRFPFile) {
          if (autoParsingResponse.apiStatusCode == "1") {
            userSelectedRFPFile.Parsed = true;
            this.documentUploadService.RFPOpportunity.SummaryFieldList = autoParsingResponse.summary;
            this.documentUploadService.RFPOpportunity.CatetoryDataList = autoParsingResponse.CategoryData;
            this.documentUploadService.TogglingEnableDisableButton();
            this.parsingDataTransfer.emit(autoParsingResponse);
            this.isLoading = false;
          } else if (autoParsingResponse.apiStatusCode == "0") {
            this.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (autoParsingResponse.apiStatusCode !== undefined) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "onDeleteFile",
        value: function onDeleteFile() {
          var _this28 = this;

          if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined && this.documentUploadService.RFPOpportunity.OpportunityId !== null && this.documentUploadService.RFPOpportunity.OpportunityId != "" && this.documentUploadService.RFPOpportunity.RfpFileList.length == 1) {
            this.isLoading = false;
            this.notification.error("'Last file in an opportunity can not be deleted'");
            return;
          }

          var data = {
            message: "Are you sure to delete this file ?"
          };
          var matDialogRef = this.dialogService.openDialog({
            width: '395px',
            data: data,
            dailogComponent: _Dialogs_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationMessageComponent"]
          });
          matDialogRef.afterClosed().subscribe(function (res) {
            if (res === true) {
              _this28.DeleteFile();
            }
          });
        }
      }, {
        key: "DeleteFile",
        value: function DeleteFile() {
          var _this29 = this;

          this.isLoading = true;
          var selectedFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (file) {
            return file.FileName === _this29.documentUploadService.SelectedFileName;
          });
          var rfpFile;

          if (selectedFileIndex == -1) {
            this.isLoading = false;
            return;
          }

          rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList[selectedFileIndex];

          if (rfpFile.SavedSharePoint == true) {
            this.DeleteFormSharePoint(rfpFile);
          } else {
            this.documentUploadService.RFPOpportunity.RfpFileList.splice(selectedFileIndex, 1);
            this.documentUploadService.SelectedFileName = '';
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.documentUploadService.SetDropDownMessage();
            this.isLoading = false;
            return;
          } // this.documentUploadService.RFPOpportunity.RfpFileList.splice(selectedFileIndex, 1);
          // this.documentUploadService.SelectedFileName = '';
          // this.documentUploadService.TogglingEnableDisableButton();
          // this.documentUploadService.SetNumberOfFileSatusCount();
          // this.documentUploadService.SetDropDownMessage();

        }
      }, {
        key: "DeleteFormSharePoint",
        value: function DeleteFormSharePoint(rfpFile) {
          var _this30 = this;

          var compId = localStorage.getItem('compId');
          var userid = localStorage.getItem('userid');
          var clientID = localStorage.getItem('clientID');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]();
          params = params.append('CompanyId', compId);
          params = params.append('UserId', userid);
          params = params.append('ClientId', clientID);
          params = params.append('filePath', rfpFile.FilePathSharePoint);
          this.sharepointService.DeleteFilesSharePoint(params).subscribe(function (res) {
            return _this30.DeleteFilesSharePointResponse(res, rfpFile);
          }, function (err) {
            return _this30.UploadError(err);
          });
        }
      }, {
        key: "DeleteFilesSharePointResponse",
        value: function DeleteFilesSharePointResponse(sharePointResponse, rfpFile) {
          if (sharePointResponse.Status == true) {
            if (rfpFile.fileRFPDbId !== undefined || rfpFile.fileRFPDbId !== null) {
              this.DeleteFormRFPDatabase(rfpFile.fileRFPDbId);
            } else {
              this.isLoading = false;
              this.notification.success("'File has been deleted Successfully'");
            }
          } else {
            this.notification.error("'Something bad happened. Please try again later.'");
            this.isLoading = false;
          }
        }
      }, {
        key: "DeleteFormRFPDatabase",
        value: function DeleteFormRFPDatabase(documentId) {
          var _this31 = this;

          var formData = new FormData();
          formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
          formData.append('documentId', documentId.toString());
          formData.append('deleteOnlyFile', 'true');
          this.documentUploadService.DeleteRfpFile(formData).subscribe(function (res) {
            return _this31.DeleteFileResponse(res, documentId);
          }, function (err) {
            return _this31.UploadError(err);
          });
        }
      }, {
        key: "DeleteFileResponse",
        value: function DeleteFileResponse(deleteFileResponse, documentId) {
          if (deleteFileResponse.apiStatusCode == '1') {
            var rfpFileIndex = this.documentUploadService.RFPOpportunity.RfpFileList.findIndex(function (file) {
              return file.fileRFPDbId == documentId;
            });

            if (rfpFileIndex >= 0) {
              this.documentUploadService.RFPOpportunity.RfpFileList.splice(rfpFileIndex, 1);
              this.documentUploadService.SelectedFileName = '';
              this.documentUploadService.TogglingEnableDisableButton();
              this.documentUploadService.SetNumberOfFileSatusCount();
              this.documentUploadService.SetDropDownMessage();
              this.DeleteFileDataTransfer.emit(deleteFileResponse); //this.showRFPDocument.emit();

              this.isLoading = false;
              this.notification.success("'File has been deleted Successfully'");
            }
          } else if (deleteFileResponse.apiStatusCode === "0") {
            this.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (deleteFileResponse.apiStatusCode !== undefined) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "onPreviewDocument",
        value: function onPreviewDocument() {
          var _this32 = this;

          this.isLoading = true;
          var UserSelectedRfpFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(function (file) {
            return file.FileName === _this32.documentUploadService.SelectedFileName;
          });

          if (UserSelectedRfpFile === null || UserSelectedRfpFile === undefined) {
            this.isLoading = false;
            return;
          }

          if (UserSelectedRfpFile.HTMLFile === null) {
            //strart only for Testing [skip share point process]
            this.GetFileSharePoint(UserSelectedRfpFile.FilePathSharePoint, UserSelectedRfpFile); //end only for Testing [skip share point process]

            this.isLoading = false;
            return;
          }

          if (this.documentUploadService.RFPOpportunity.OpportunityId !== undefined && this.documentUploadService.RFPOpportunity.OpportunityId != null && this.documentUploadService.RFPOpportunity.OpportunityId != '') {
            this.PreviewDocument(UserSelectedRfpFile);
            return;
          }

          if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined || this.documentUploadService.RFPOpportunity.OpportunityId == '') {
            var dialogRef = this.dialogService.openDialog({
              width: '350px',
              dailogComponent: _Dialogs_opportunity_name_opportunity_name_component__WEBPACK_IMPORTED_MODULE_5__["OpportunityNameComponent"]
            });
            dialogRef.afterClosed().subscribe(function (data) {
              if (data !== undefined && data !== '') {
                _this32.UploadFilesSharePoint(data); //strart only for Testing [skip share point process]
                //this.CreateEmptyOpportunity(data);
                //end only for Testing [skip share point process]

              } else {
                _this32.isLoading = false;
              }
            });
          }
        }
      }, {
        key: "GetFileSharePoint",
        value: function GetFileSharePoint(filepath, UserSelectedRfpFile) {
          var _this33 = this;

          var formDataSharePoint = new FormData();
          var compId = localStorage.getItem('compId');
          var userid = localStorage.getItem('userid');
          var clientID = localStorage.getItem('clientID');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]();
          params = params.append('CompanyId', compId);
          params = params.append('UserId', userid);
          params = params.append('ClientId', clientID);
          params = params.append('filePath', filepath);
          this.sharepointService.GetFileSharePoint(params).subscribe(function (res) {
            return _this33.GetFileSharePointResponse(res, UserSelectedRfpFile);
          }, function (err) {
            return _this33.UploadError(err);
          });
        }
      }, {
        key: "GetFileSharePointResponse",
        value: function GetFileSharePointResponse(res, UserSelectedRfpFile) {
          var _this34 = this;

          var file = res._buffer;
          var formData = new FormData();
          formData.append('file', file);
          formData.append('fileName', UserSelectedRfpFile.FileName);
          formData.append('documentId', UserSelectedRfpFile.fileRFPDbId.toString());
          this.rfpDatabaseService.ViewSharePointDocument(formData).subscribe(function (res) {
            return _this34.ViewSharePointDocumentReponse(res, UserSelectedRfpFile);
          }, function (err) {
            return _this34.UploadError(err);
          });
        }
      }, {
        key: "ViewSharePointDocumentReponse",
        value: function ViewSharePointDocumentReponse(viewSharePointDocumentResponse, UserSelectedRfpFile) {
          if (viewSharePointDocumentResponse.apiStatusCode == '1') {
            UserSelectedRfpFile.HTMLFile = viewSharePointDocumentResponse.htmlFile;
            UserSelectedRfpFile.View = true;
            this.documentUploadService.TogglingEnableDisableButton();
            this.showRFPDocument.emit();
            this.isLoading = false;
          }
        }
      }, {
        key: "UploadFilesSharePoint",
        value: function UploadFilesSharePoint(opportunityName) {
          var _this35 = this;

          var formDataSharePoint = new FormData();
          console.log(">>>>>>companyId = " + localStorage.getItem('compId') + "<<<<<<<<<");
          formDataSharePoint.append('CompanyId', localStorage.getItem('compId'));
          console.log(">>>>>>userid = " + localStorage.getItem('userid') + "<<<<<<<<<");
          formDataSharePoint.append('UserId', localStorage.getItem('userid'));
          console.log(">>>>>>clientID = " + localStorage.getItem('clientID') + "<<<<<<<<<");
          formDataSharePoint.append('ClientId', localStorage.getItem('clientID'));
          var rfpFileList;

          if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined) {
            rfpFileList = this.documentUploadService.RFPOpportunity.RfpFileList;
          } else {
            rfpFileList = this.documentUploadService.RFPOpportunity.RfpFileList.filter(function (file) {
              return file.SavedSharePoint === undefined || file.SavedSharePoint == null || file.SavedSharePoint == false;
            });
          }

          if (rfpFileList.length == 0) {
            this.isLoading = false;
            return;
          }

          var fileName;

          for (var index = 0; index < rfpFileList.length; index++) {
            var rfpFile = rfpFileList[index];
            formDataSharePoint.append('File', rfpFile.OrignalFile);
            fileName += rfpFile.OrignalFile.name + "  ";
          }

          console.log(">>>>>>>>>>>>>>>>Upload to SharePoint, FileName: " + fileName + "<<<<<<<<<<<<<<<<<<<<");
          this.documentUploadService.UploadFilesSharePoint(formDataSharePoint).subscribe(function (res) {
            return _this35.UploadFilesSharePointResponse(res, rfpFileList.length, opportunityName);
          }, function (err) {
            return _this35.UploadError(err);
          });
        }
      }, {
        key: "UploadFilesSharePointResponse",
        value: function UploadFilesSharePointResponse(sharePointDocUploadResponseList, totalFile, opportunityName) {
          if (sharePointDocUploadResponseList === undefined || sharePointDocUploadResponseList.length == 0) {
            console.log(">>>>>Fail from share point<<<<<");
            this.notification.error("'Something bad happened. Please try again later.'");
            this.isLoading = false;
            return;
          }

          var sharePointUnsaveFileList = this.documentUploadService.SetFileSavedStatusOnsharePoint(sharePointDocUploadResponseList);

          if (totalFile == sharePointUnsaveFileList.length) {
            console.log(">>>>>Fail from share point<<<<<");
            this.notification.error("'Something bad happened. Please try again later.'");
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.isLoading = false;
            return;
          }

          if (sharePointUnsaveFileList.length > 0) {
            var message;

            if (sharePointUnsaveFileList.length == 1) {
              message = "Following file was not processed. Trying again, in case of failure contact to administrator";
            } else {
              message = "Following files were not processed. Trying again, in case of failure contact to administrator";
            }

            var data = {
              rfpFileList: sharePointUnsaveFileList,
              message: message
            };
            var sharePointUnsaveFileListDialog = this.dialogService.openDialog({
              width: '595px',
              data: data,
              dailogComponent: _Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_6__["FileListMessageComponent"]
            });
          }

          if (this.documentUploadService.RFPOpportunity.OpportunityId === undefined || this.documentUploadService.RFPOpportunity.OpportunityId == null || this.documentUploadService.RFPOpportunity.OpportunityId == '') {
            this.CreateEmptyOpportunity(opportunityName);
          } else {
            this.SaveFileInRfpDB();
          }
        }
      }, {
        key: "PreviewDocument",
        value: function PreviewDocument(rfpFile) {
          var _this36 = this;

          var formData = new FormData();
          formData.append('file', rfpFile.OrignalFile);
          formData.append('documentId', rfpFile.fileRFPDbId.toString());
          this.documentUploadService.ViewDocument(formData).subscribe(function (res) {
            return _this36.ViewDocumentResponse(res, rfpFile);
          }, function (err) {
            return _this36.UploadError(err);
          });
        }
      }, {
        key: "ViewDocumentResponse",
        value: function ViewDocumentResponse(viewDocumentResponse, rfpFile) {
          if (viewDocumentResponse.apiStatusCode === "1") {
            this.documentUploadService.PopulateHtmlFile(viewDocumentResponse);
            this.documentUploadService.TogglingEnableDisableButton();
            this.showRFPDocument.emit();
            this.isLoading = false; //this.isBtnPubDisabled = false;
            //const queryParams = { 'category': 'summary' };
            //this.router.navigate(['/'], { queryParams })
          } else if (viewDocumentResponse.apiStatusCode === "0") {
            this.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (viewDocumentResponse.apiStatusCode !== undefined) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "CreateEmptyOpportunity",
        value: function CreateEmptyOpportunity(opportunityName) {
          var _this37 = this;

          if (this.documentUploadService.RFPOpportunity.RfpFileList === undefined || this.documentUploadService.RFPOpportunity.RfpFileList.length == 0) {
            this.isLoading = false;
            return;
          }

          var fileNameList = this.documentUploadService.GetFileNameList(undefined);
          var rfpFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(function (file) {
            return file.OrignalFile.name === _this37.documentUploadService.SelectedFileName;
          });
          var formData = new FormData();
          var requierdCategoryNameList = "false";
          var jsonFileNameList = JSON.stringify(fileNameList);
          formData.append('fileNameJsonList', jsonFileNameList);
          formData.append('opportunityName', opportunityName);

          if (rfpFile !== undefined && rfpFile.OrignalFile !== undefined) {
            formData.append('file', rfpFile.OrignalFile);
          }

          formData.append('companyID', localStorage.getItem('compId'));
          formData.append('userId', localStorage.getItem('userid'));
          formData.append('clientId', localStorage.getItem('clientID'));
          formData.append('SegmentId', localStorage.getItem('companySegmentID'));
          this.documentUploadService.CreateEmptyOpportunity(formData).subscribe(function (res) {
            return _this37.CreateEmptyOpportunityResponse(res, rfpFile);
          }, function (err) {
            return _this37.UploadError(err);
          });
        }
      }, {
        key: "CreateEmptyOpportunityResponse",
        value: function CreateEmptyOpportunityResponse(createOpportunityResponse, rfpfile) {
          if (createOpportunityResponse.apiStatusCode === "1") {
            this.documentUploadService.PopulateDocumentId(createOpportunityResponse.fileNameList, createOpportunityResponse.opportunityName, createOpportunityResponse.opportunityId, createOpportunityResponse.summary);
            this.showRFPDocument.emit();
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.isLoading = false;
            this.opportunityDataOnCreationTransfer.emit();
            this.notification.success("Oppotunity is created successfully !");
          } else if (createOpportunityResponse.apiStatusCode === "0") {
            this.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (createOpportunityResponse.apiStatusCode !== undefined) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "SaveFileInRfpDB",
        value: function SaveFileInRfpDB() {
          var _this38 = this;

          var fileNameList = this.documentUploadService.GetFileNameList(undefined); //let rfpFile: RFPFile = this.documentUploadService.RFPOpportunity.RfpFileList.find(file => file.OrignalFile.name === this.documentUploadService.SelectedFileName)

          var formData = new FormData();
          var jsonFileNameList = JSON.stringify(fileNameList);
          formData.append('fileNameJsonList', jsonFileNameList); //formData.append('file', rfpFile.OrignalFile);

          formData.append('opportunityId', this.documentUploadService.RFPOpportunity.OpportunityId);
          formData.append('companyID', localStorage.getItem('compId'));
          formData.append('userId', localStorage.getItem('userid'));
          formData.append('clientId', localStorage.getItem('clientID'));
          formData.append('SegmentId', localStorage.getItem('companySegmentID')); //debugger;

          this.documentUploadService.SaveFiles(formData).subscribe(function (res) {
            return _this38.SaveFileInRfpDBResponse(res);
          }, function (err) {
            return _this38.UploadError(err);
          });
        }
      }, {
        key: "SaveFileInRfpDBResponse",
        value: function SaveFileInRfpDBResponse(res) {
          if (res.apiStatusCode === "1") {
            this.documentUploadService.PopulateDocumentId(res.fileNameList, res.opportunityName, res.opportunityId, undefined); //let fileNameIndex: number = createOpportunityResponse.fileNameList.findIndex(file => file.Name == this.documentUploadService.SelectedFileName);
            //let htmlFile: string = createOpportunityResponse.fileNameList[fileNameIndex].HtmlFile;

            this.showRFPDocument.emit(undefined);
            this.documentUploadService.TogglingEnableDisableButton();
            this.documentUploadService.SetNumberOfFileSatusCount();
            this.isLoading = false; //this.OpenDialogForUnsaveRfpFileOnSharePoint(unsaveRfpFileOnSharePointList);

            this.notification.success("Fie has been saved successfully !"); //const queryParams = { 'category': 'summary' };
            //this.router.navigate(['/'], { queryParams })
          } else if (res.apiStatusCode === "0") {
            this.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (res.apiStatusCode !== undefined) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "GetCategoryNameListFromDB",
        value: function GetCategoryNameListFromDB(methodName) {
          var _this39 = this;

          this.documentUploadService.GetCategoryNameList().subscribe(function (response) {
            _this39.FillCategoryNameList(response, methodName);
          }, function (err) {
            return _this39.UploadError(err);
          });
        }
      }, {
        key: "FillCategoryNameList",
        value: function FillCategoryNameList(categoryNameListResponse, methodName) {
          if (categoryNameListResponse.apiStatusCode == '1') {
            this.documentUploadService.CategoryNameList = categoryNameListResponse.categoryNameList;
            this.PopulateCategoryNameList.emit(categoryNameListResponse.categoryNameList);

            if (methodName !== undefined && methodName != null && methodName.length > 2) {
              if (methodName == "onAttachedFile") {
                this.AttachedFile();
                this.isLoading = false;
              } else if (methodName == "GetSavedEmptyOpportunity") {
                this.documentUploadService.GetSavedEmptyOpportunity(this.opportunityId, this);
              }
            }
          } else if (categoryNameListResponse.apiStatusCode === "0") {
            console.log(">>>>>>>Fail to retrieve Category List from Server<<<<<<<<<<<<<<");

            if (methodName !== undefined && methodName != null && methodName.length > 2) {
              this.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          } else {
            if (categoryNameListResponse.apiStatusCode !== undefined) {
              if (methodName !== undefined && methodName != null && methodName.length > 2) {
                console.log(">>>>>>>Fail to retrieve Category List from Server<<<<<<<<<<<<<<");
                this.isLoading = false;
                this.notification.error("'Something bad happened. Please try again later.'");
              }
            }
          }
        }
      }, {
        key: "OpenDialogForUnsaveRfpFileOnSharePoint",
        value: function OpenDialogForUnsaveRfpFileOnSharePoint(unsaveRfpFileOnSharePointList) {
          var message;

          if (unsaveRfpFileOnSharePointList.length == 1) {
            message = "Following file was not processed. Trying again, in case of failure contact to administrator";
          } else {
            message = "Following files were not processed. Trying again, in case of failure contact to administrator";
          }

          var data = {
            rfpFileList: unsaveRfpFileOnSharePointList,
            message: message
          };
          this.dialogService.openDialog({
            width: '595px',
            data: data,
            dailogComponent: _Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_6__["FileListMessageComponent"]
          });
        }
      }, {
        key: "onGoToPage2",
        value: function onGoToPage2() {
          var t = "";
        }
      }, {
        key: "CleanFormControls",
        value: function CleanFormControls() {
          this.documentUploadService.CleanFormControlVariables();
          this.fileDropdownSelectedValue = '';
          this.CleanDocumentParserFormControls.emit();
          this.documentUploadService.TogglingEnableDisableButton();
        }
      }, {
        key: "SaveCategoriesDataAndSummaryData",
        value: function SaveCategoriesDataAndSummaryData(oppertunityCategoryArray) {
          debugger;
          var categoryDataList = this.GetChangedCategoriesData(oppertunityCategoryArray);
          var result = this.summary.SummaryFieldValid();

          if (result == true) {
            this.summary.SaveChangedCategoriesSummaryData(this, categoryDataList);
            this.notification.error("'One or more Summary mandatory filed empty, fill first'");
          } else {
            this.isLoading = false;
          }
        }
      }, {
        key: "GetChangedCategoriesData",
        value: function GetChangedCategoriesData(oppertunityCategoryArray) {
          var _this40 = this;

          var categoryDataList = new Array();

          var _loop = function _loop(index) {
            var oppertunityCategory = oppertunityCategoryArray[index];

            var savedCategoryDataIndex = _this40.documentUploadService.RFPOpportunity.CatetoryDataList.findIndex(function (c) {
              return c.CategoryId == parseInt(oppertunityCategory.categoryId);
            });

            var dbCategoryData = _this40.documentUploadService.RFPOpportunity.CatetoryDataList[savedCategoryDataIndex];
            var oppertunityCategoryDataStringfy = "";
            var categoryId = void 0;

            for (var _index4 = 0; _index4 < oppertunityCategory.categoryData.length; _index4++) {
              var element = oppertunityCategory.categoryData[_index4];

              if (!element.hasAttribute('data-temptrow')) {
                categoryId = parseInt(oppertunityCategory.categoryId);
                oppertunityCategoryDataStringfy += element.outerHTML;
              }
            }

            if (dbCategoryData === undefined) {
              dbCategoryData = new _Shared_Models_CategoryData__WEBPACK_IMPORTED_MODULE_10__["CategoryData"]();
              dbCategoryData.CategoryId = 0;
              dbCategoryData.Name = "";
              dbCategoryData.CategoryData = "";
            }

            if (dbCategoryData.CategoryData != oppertunityCategoryDataStringfy) {
              var categoryData = new _Shared_Models_CategoryData__WEBPACK_IMPORTED_MODULE_10__["CategoryData"]();
              categoryData.CategoryId = categoryId;
              categoryData.CategoryData = oppertunityCategoryDataStringfy;
              categoryDataList.push(categoryData);
            }
          };

          for (var index = 0; index < oppertunityCategoryArray.length; index++) {
            _loop(index);
          }

          return categoryDataList;
        }
      }]);

      return DocumentUploadComponent;
    }();

    DocumentUploadComponent.ɵfac = function DocumentUploadComponent_Factory(t) {
      return new (t || DocumentUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_12__["DocumentParserFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_14__["ValidateChangeInDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_16__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_17__["RfpDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_Services_sharepoint_service__WEBPACK_IMPORTED_MODULE_18__["SharepointService"]));
    };

    DocumentUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentUploadComponent,
      selectors: [["app-document-upload"]],
      inputs: {
        fileName: "fileName",
        opportunityData: "opportunityData",
        summary: "summary"
      },
      outputs: {
        showRFPDocument: "showRFPDocument",
        OrignalHtmlDocument: "OrignalHtmlDocument",
        PopulateCategoryNameList: "PopulateCategoryNameList",
        opportunityDataOnCreationTransfer: "opportunityDataOnCreationTransfer",
        opportunityDataTransfer: "opportunityDataTransfer",
        parsingDataTransfer: "parsingDataTransfer",
        CleanDocumentParserFormControls: "CleanDocumentParserFormControls",
        DeleteFileDataTransfer: "DeleteFileDataTransfer",
        DeleteCategoryData: "DeleteCategoryData",
        MoveWholeDocument: "MoveWholeDocument",
        receivedRFPDocument: "receivedRFPDocument",
        receivedRFPDocumentName: "receivedRFPDocumentName",
        SelectedFile: "SelectedFile",
        popUpOpportunityName: "popUpOpportunityName",
        ClearOpportunityForm: "ClearOpportunityForm"
      },
      decls: 36,
      vars: 17,
      consts: [["class", "loading-indicator", 4, "ngIf"], [1, "row", 2, "padding-bottom", "10px", "padding-top", "10px"], [1, "col-md-12"], [2, "text-align", "left"], ["mat-mini-fab", "", "color", "primary", "title", "attach file", "matBadgePosition", "before", "matBadgeColor", "accent", 3, "matBadge", "click"], ["type", "file", "name", "upload", "multiple", "multiple", 2, "display", "none", 3, "click", "change"], ["fileInput", ""], [2, "width", "540px"], [2, "font-size", "small", 3, "ngModel", "placeholder", "value", "ngModelChange", "selectionChange", "valueChange"], ["style", "width:540px; font-size: small;", "style", "font-size:small;", 3, "value", "ngStyle", 4, "ngFor", "ngForOf"], [3, "routerLink", "ngStyle", "click"], [3, "routerLink", "click"], ["mat-raised-button", "", "color", "primary", 2, "font-size", "small", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 2, "font-size", "small", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "font-size", "small", 3, "disabled", "click"], [1, "loading-indicator"], ["mode", "indeterminate"], [2, "font-size", "small", 3, "value", "ngStyle"]],
      template: function DocumentUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DocumentUploadComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            return _r93.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "attach_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_input_click_7_listener() {
            return ctx.click();
          })("change", function DocumentUploadComponent_Template_input_change_7_listener($event) {
            return ctx.onAttachedFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DocumentUploadComponent_Template_mat_select_ngModelChange_11_listener($event) {
            return ctx.documentUploadService.SelectedFileName = $event;
          })("selectionChange", function DocumentUploadComponent_Template_mat_select_selectionChange_11_listener($event) {
            return ctx.onSelectionChangeFileDropDown($event.value);
          })("valueChange", function DocumentUploadComponent_Template_mat_select_valueChange_11_listener($event) {
            return ctx.fileDropdownSelectedValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DocumentUploadComponent_mat_option_12_Template, 2, 5, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_a_click_14_listener() {
            return ctx.onGoToPage2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\xA0\xA0\xA0\xA0\xA0-\xA0\xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_a_click_18_listener() {
            return ctx.onGoToPage2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_button_click_21_listener() {
            return ctx.onDeleteFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete File ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_button_click_24_listener() {
            return ctx.onPreviewDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Preview File ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_button_click_27_listener() {
            return ctx.onParse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Parse File ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_button_click_30_listener() {
            return ctx.onOpportunityListShow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Opportunity List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentUploadComponent_Template_button_click_33_listener() {
            return ctx.doPublish(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Publish ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "mat-divider");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matBadge", ctx.documentUploadService.NumberOfAttachedfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.documentUploadService.SelectedFileName)("placeholder", ctx.documentUploadService.DropDownMessage)("value", ctx.fileDropdownSelectedValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentUploadService.RFPOpportunity.RfpFileList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.documentUploadService.SavefileMessageColor));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.documentUploadService.NumberOfSavedfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.documentUploadService.NumberOfSavedfile != "" ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.documentUploadService.NumberOfParssedfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.documentUploadService.DeleteButtonDisable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.documentUploadService.ViewButtonDisable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.documentUploadService.ParseButtonDisable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.documentUploadService.PublishButtonDisable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadge"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatHint"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"]],
      styles: [".loading-indicator[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  \r\n  \r\n  .loading-indicator[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n    .mat-radio-outer-circle {\r\n  height: 15px !important;\r\n  width: 15px !important;\r\n  top: 3px !important;\r\n  border-width: 1px !important;\r\n}\r\n  \r\n    .mat-radio-inner-circle{\r\n  height: 15px !important;\r\n  width: 15px !important;\r\n  top: 3px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFyc2VyL0NvbXBvbmVudHMvZG9jdW1lbnQtdXBsb2FkL2RvY3VtZW50LXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtFQUNWOztFQUVBLHdCQUF3Qjs7RUFDeEI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0VBQ25DOztFQUVBOztPQUVLOztFQUVIOztPQUVHOztFQUNILGdCQUFnQjs7RUFDcEI7O0dBRUc7O0VBQ0g7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0VBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL1BhcnNlci9Db21wb25lbnRzL2RvY3VtZW50LXVwbG9hZC9kb2N1bWVudC11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBvdmVyZmxvdzogc2hvdztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4gIC5sb2FkaW5nLWluZGljYXRvcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcblxyXG4gIC8qIC5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiAuYWRkLWJvdHRvbS1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfSAqL1xyXG4gICAgLyogcmFkaW8gZ3JvdXAgKi9cclxuLyogbWF0LXJhZGlvLWdyb3VwIG1hdC1yYWRpby1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufSAqL1xyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAzcHggIWltcG9ydGFudDtcclxuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtcclxuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-document-upload',
          templateUrl: './document-upload.component.html',
          styleUrls: ['./document-upload.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_12__["DocumentParserFormService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]
        }, {
          type: _Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_14__["ValidateChangeInDataService"]
        }, {
          type: src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"]
        }, {
          type: _Shared_Services_document_upload_service__WEBPACK_IMPORTED_MODULE_16__["DocumentUploadService"]
        }, {
          type: _Shared_Services_rfp_database_service__WEBPACK_IMPORTED_MODULE_17__["RfpDatabaseService"]
        }, {
          type: _Shared_Services_sharepoint_service__WEBPACK_IMPORTED_MODULE_18__["SharepointService"]
        }];
      }, {
        showRFPDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        OrignalHtmlDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        PopulateCategoryNameList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        opportunityDataOnCreationTransfer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        opportunityDataTransfer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        parsingDataTransfer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        CleanDocumentParserFormControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        DeleteFileDataTransfer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        DeleteCategoryData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        MoveWholeDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        fileName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        receivedRFPDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        receivedRFPDocumentName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        SelectedFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        opportunityData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summary: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        popUpOpportunityName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        ClearOpportunityForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Models/CategoryData.ts":
  /*!******************************************************!*\
    !*** ./src/app/Parser/Shared/Models/CategoryData.ts ***!
    \******************************************************/

  /*! exports provided: CategoryData */

  /***/
  function srcAppParserSharedModelsCategoryDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryData", function () {
      return CategoryData;
    });

    var CategoryData = function CategoryData() {
      _classCallCheck(this, CategoryData);
    };
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Models/FileName.ts":
  /*!**************************************************!*\
    !*** ./src/app/Parser/Shared/Models/FileName.ts ***!
    \**************************************************/

  /*! exports provided: FileName */

  /***/
  function srcAppParserSharedModelsFileNameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileName", function () {
      return FileName;
    });

    var FileName = function FileName(iFileNameParam) {
      _classCallCheck(this, FileName);

      this.iFileNameParam = iFileNameParam;
      this.fileRFPDbId = iFileNameParam.fileRFPDbId;
      this.Name = iFileNameParam.Name;
      this.Path = iFileNameParam.Path;
      this.HtmlFile = iFileNameParam.HtmlFile;
    };
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Models/RFPFile.ts":
  /*!*************************************************!*\
    !*** ./src/app/Parser/Shared/Models/RFPFile.ts ***!
    \*************************************************/

  /*! exports provided: RFPFile */

  /***/
  function srcAppParserSharedModelsRFPFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RFPFile", function () {
      return RFPFile;
    });

    var RFPFile = function RFPFile(rfpFileParam) {
      _classCallCheck(this, RFPFile);

      this.rfpFileParam = rfpFileParam;
      this.SavedSharePoint = false;
      this.OpportunityName = rfpFileParam.OpportunityName;
      this.FileName = rfpFileParam.FileName;
      this.FileNameColor = rfpFileParam.FileNameColor;
      this.OrignalFile = rfpFileParam.OrignalFile;
      this.HTMLFile = rfpFileParam.HTMLFile;
      this.fileRFPDbId = rfpFileParam.fileRFPDbId;
      this.SavedSharePoint = rfpFileParam.SavedSharePoint;
      this.FilePathSharePoint = rfpFileParam.FilePathSharePoint;
      this.Parsed = rfpFileParam.Parsed;
      this.Saved = rfpFileParam.Saved;
      this.View = rfpFileParam.View;
    };
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Models/RFPOpportunity.ts":
  /*!********************************************************!*\
    !*** ./src/app/Parser/Shared/Models/RFPOpportunity.ts ***!
    \********************************************************/

  /*! exports provided: RFPOpportunity */

  /***/
  function srcAppParserSharedModelsRFPOpportunityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RFPOpportunity", function () {
      return RFPOpportunity;
    });
    /* harmony import */


    var _CategoryData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./CategoryData */
    "./src/app/Parser/Shared/Models/CategoryData.ts");

    var RFPOpportunity =
    /*#__PURE__*/
    function () {
      function RFPOpportunity() {
        _classCallCheck(this, RFPOpportunity);

        this._rfpFileList = [];
        this._catetoryDataListModified = new Array();
      }

      _createClass(RFPOpportunity, [{
        key: "AddRfpFile",
        value: function AddRfpFile(rfpFile) {
          this._rfpFileList.push(rfpFile);
        }
      }, {
        key: "AddSummaryFieldList",
        value: function AddSummaryFieldList(summaryFieldList) {
          this._summaryFieldList = summaryFieldList;
        }
      }, {
        key: "AddCategoryDataModified",
        value: function AddCategoryDataModified(categoryId, filteredOpportunityDataArray) {
          if (this._catetoryDataListModified.length == 0) {
            var categoryData = new _CategoryData__WEBPACK_IMPORTED_MODULE_0__["CategoryData"]();
            categoryData.CategoryId = categoryId;

            for (var index = 0; index < filteredOpportunityDataArray.length; index++) {
              var element = filteredOpportunityDataArray[index];
              categoryData.CategoryData += element.outerHTML;
            }

            this._catetoryDataListModified.push(categoryData);
          } else {
            var categoryIndex = this._catetoryDataListModified.findIndex(function (c) {
              return c.CategoryId == categoryId;
            });

            if (categoryIndex == -1) {
              var _categoryData2 = new _CategoryData__WEBPACK_IMPORTED_MODULE_0__["CategoryData"]();

              _categoryData2.CategoryId = categoryId;

              for (var _index5 = 0; _index5 < filteredOpportunityDataArray.length; _index5++) {
                var _element2 = filteredOpportunityDataArray[_index5];
                _categoryData2.CategoryData += _element2.outerHTML;
              }

              this._catetoryDataListModified.push(_categoryData2);
            } else {
              var _categoryData3 = this._catetoryDataListModified[categoryIndex];
              _categoryData3.CategoryData = "";

              for (var _index6 = 0; _index6 < filteredOpportunityDataArray.length; _index6++) {
                var _element3 = filteredOpportunityDataArray[_index6];
                _categoryData3.CategoryData += _element3.outerHTML;
              }
            }
          }
        }
      }, {
        key: "CatetoryDataListModified",
        get: function get() {
          return this._catetoryDataListModified;
        }
      }, {
        key: "CategoryNameList",
        get: function get() {
          return this._categoryNameList;
        },
        set: function set(value) {
          this._categoryNameList = value;
        }
      }, {
        key: "OpportunityId",
        get: function get() {
          return this._opportunityId;
        },
        set: function set(value) {
          this._opportunityId = value;
        }
      }, {
        key: "OpportunityName",
        get: function get() {
          return this._opportunityName;
        },
        set: function set(value) {
          this._opportunityName = value;
        }
      }, {
        key: "RfpFileList",
        get: function get() {
          return this._rfpFileList;
        }
      }, {
        key: "SummaryFieldList",
        get: function get() {
          return this._summaryFieldList;
        },
        set: function set(value) {
          this._summaryFieldList = value;
        }
      }, {
        key: "CatetoryDataList",
        get: function get() {
          return this._catetoryDataList;
        },
        set: function set(value) {
          this._catetoryDataList = value;
        }
      }]);

      return RFPOpportunity;
    }();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Services/ValidateChangeInDataService.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Parser/Shared/Services/ValidateChangeInDataService.ts ***!
    \***********************************************************************/

  /*! exports provided: ValidateChangeInDataService */

  /***/
  function srcAppParserSharedServicesValidateChangeInDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateChangeInDataService", function () {
      return ValidateChangeInDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidateChangeInDataService =
    /*#__PURE__*/
    function () {
      function ValidateChangeInDataService() {
        _classCallCheck(this, ValidateChangeInDataService);

        this.filteredOpportunityDataArray = [];
        this.filteredDataArrayString = null;
        this.summaryArray = null;
      }

      _createClass(ValidateChangeInDataService, [{
        key: "onContentBeforeSave",
        value: function onContentBeforeSave() {}
      }, {
        key: "initData",
        value: function initData(filteredOpportunityDataArray) {
          //this.filteredOpportunityDataArray =filteredOpportunityDataArray;
          var rfpDoc = '';

          if (filteredOpportunityDataArray.length > 0) {
            for (var index = 0; index < filteredOpportunityDataArray.length; index++) {
              var element = filteredOpportunityDataArray[index];
              rfpDoc += element.outerHTML;
            }

            this.filteredDataArrayString = rfpDoc;
          } //console.log("filteredOpportunityDataArrayString");
          //console.log(this.filteredDataArrayString);

        }
      }, {
        key: "isEqual",
        value: function isEqual(initialDataStr) {
          var n = initialDataStr.localeCompare(this.filteredDataArrayString);

          switch (n) {
            case 0:
              // 0 if the two strings are equal
              return true;

            default:
              return false;
          }
        }
      }, {
        key: "initDataSummary",
        value: function initDataSummary(summaryFieldArray, fieldTextStr) {
          this.summaryArray = summaryFieldArray;

          if (summaryFieldArray && summaryFieldArray != null && summaryFieldArray.length > 0) {
            var fieldTextString = "";
            summaryFieldArray.forEach(function (x) {
              fieldTextString += x.FieldText;
            });
            this.summaryInitStr = fieldTextString;
          } else if (fieldTextStr) {
            this.summaryInitStr = fieldTextStr;
          }
        }
      }, {
        key: "isEqualSummary",
        value: function isEqualSummary(initialDataStr, summarArray) {
          debugger;

          if (!this.CheckSummarySequenceEqual(summarArray)) {
            return false;
          }

          var n = initialDataStr.localeCompare(this.summaryInitStr);

          switch (n) {
            case 0:
              // 0 if the two strings are equal
              return true;

            default:
              return false;
          }
        }
      }, {
        key: "CheckSummarySequenceEqual",
        value: function CheckSummarySequenceEqual(newSummaryArray) {
          var oldSummaryArrayLength = this.summaryArray.length;
          var newSummaryArrayLength = newSummaryArray.length;

          if (oldSummaryArrayLength != newSummaryArrayLength) {
            return false;
          } else if (!this.OldNewSummarySequenceSame(newSummaryArray)) {
            return false;
          }

          return true;
        }
      }, {
        key: "OldNewSummarySequenceSame",
        value: function OldNewSummarySequenceSame(newSummaryArray) {
          var newSummaryArrayLength = newSummaryArray.length;

          for (var index = 0; index < newSummaryArrayLength; index++) {
            var newSummaryElement = newSummaryArray[index];
            var oldSummaryElement = this.summaryArray[index];

            if (newSummaryElement.FieldDisplayName != oldSummaryElement.FieldDisplayName) {
              return false;
            }
          }

          return true;
        }
      }]);

      return ValidateChangeInDataService;
    }();

    ValidateChangeInDataService.ɵfac = function ValidateChangeInDataService_Factory(t) {
      return new (t || ValidateChangeInDataService)();
    };

    ValidateChangeInDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidateChangeInDataService,
      factory: ValidateChangeInDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateChangeInDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Services/document-parser-form.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Parser/Shared/Services/document-parser-form.service.ts ***!
    \************************************************************************/

  /*! exports provided: DocumentParserFormService */

  /***/
  function srcAppParserSharedServicesDocumentParserFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentParserFormService", function () {
      return DocumentParserFormService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Shared/services/app-config.service */
    "./src/app/Shared/services/app-config.service.ts");

    var DocumentParserFormService =
    /*#__PURE__*/
    function () {
      function DocumentParserFormService(http, appConfigService) {
        _classCallCheck(this, DocumentParserFormService);

        this.http = http;
        this.appConfigService = appConfigService; //apiUrl = environment.baseUrl;
        //sharepointapiUrl = environment.sharepointbaseUrl;
        //apiUrl ="http://localhost:63976/api/";
        // apiUrl ="https://rfpapi.zbizlink.com/api/";

        this.apiUrl = this.appConfigService.apiBaseUrl;
        this.sharepointapiUrl = this.appConfigService.sharepointapiUrl;
      }

      _createClass(DocumentParserFormService, [{
        key: "getRFPFromWebApi",
        value: function getRFPFromWebApi() {
          return this.http.get(this.apiUrl);
        } // upload(formData: any): Observable<any> {
        //   console.log(this.apiUrl);
        //   return this.http.post<any>(`${this.apiUrl + "document/upload"}`, formData, {
        //     observe: 'events'
        //   }).pipe(
        //     map(event => this.getEventMessage(event, formData)),
        //     catchError(this.handleError)
        //   );
        // }

      }, {
        key: "uploadSharePoint",
        value: function uploadSharePoint(formData) {
          debugger;
          console.log('>>>>>share point url<<<<<');
          console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
          return this.http.post("".concat(this.sharepointapiUrl + "api/Document/BulkUpload"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "save",
        value: function save(formData) {
          return this.http.post("".concat(this.apiUrl + "document/Save"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getEventMessage",
        value: function getEventMessage(event, formData) {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
              return this.fileUploadProgress(event);

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
              return this.apiResponse(event);

            default:
              return "File \"".concat(formData.get('file').name, "\" surprising upload event: ").concat(event.type, ".");
          }
        }
      }, {
        key: "fileUploadProgress",
        value: function fileUploadProgress(event) {
          var percentDone = Math.round(100 * event.loaded / event.total);
          return {
            status: 'progress',
            message: percentDone
          };
        }
      }, {
        key: "apiResponse",
        value: function apiResponse(event) {
          return event.body;
        } // getPublicOppertunityList(publishFlag: boolean): Observable<any> {
        //   var companyId=localStorage.getItem('compId');
        //   if (publishFlag == false) {
        //     return this.http.get(`${this.apiUrl}document/GetNonePublishedDocumentList?companyId=${companyId}`)
        //       .pipe(catchError(this.handleError));
        //   }
        //   else {
        //     return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
        //       .pipe(catchError(this.handleError));
        //   }
        // }
        // Waqar 

      }, {
        key: "getOpportunity",
        value: function getOpportunity() {
          return this.http.get("".concat(this.apiUrl, "Opportunity/getopportunity")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        } // getSavedDocInfo(companyId: any, userId: any, documentId: any): Observable<any> {
        //   let Params = new HttpParams();
        //   Params.append('companyId', companyId);
        //   Params.append('userId', userId);
        //   Params.append('documentId', documentId);
        //   // the above paramameter are not in use for instance .
        //   return this.http.post(`${this.apiUrl}document/GetSavedDocInfo?companyId=${companyId}&userId=${userId}&documentId=${documentId}`, null)
        //   .pipe(catchError(this.handleError));
        // }

      }, {
        key: "getSavedDocInfo",
        value: function getSavedDocInfo(companyId, userId, documentId) {
          var Params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
          Params.append('companyId', companyId);
          Params.append('userId', userId);
          Params.append('documentId', documentId); // the above paramameter are not in use for instance .

          return this.http.post("".concat(this.apiUrl, "document/GetSavedDocInfo?companyId=").concat(companyId, "&userId=").concat(userId, "&documentId=").concat(documentId), null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "publish",
        value: function publish(OpportunityId) {
          var OppId = Number(OpportunityId);
          return this.http.post("".concat(this.apiUrl, "Opportunity/publish?OpportunityId=").concat(OppId), null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          debugger;

          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message
          //return throwError(error); 


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened. Please try again later.');
        }
      }]);

      return DocumentParserFormService;
    }();

    DocumentParserFormService.ɵfac = function DocumentParserFormService_Factory(t) {
      return new (t || DocumentParserFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]));
    };

    DocumentParserFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocumentParserFormService,
      factory: DocumentParserFormService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentParserFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Services/document-summary.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Parser/Shared/Services/document-summary.service.ts ***!
    \********************************************************************/

  /*! exports provided: DocumentSummaryService */

  /***/
  function srcAppParserSharedServicesDocumentSummaryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentSummaryService", function () {
      return DocumentSummaryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Shared/services/app-config.service */
    "./src/app/Shared/services/app-config.service.ts");

    var DocumentSummaryService =
    /*#__PURE__*/
    function () {
      function DocumentSummaryService(httpClient, appConfigService) {
        _classCallCheck(this, DocumentSummaryService);

        this.httpClient = httpClient;
        this.appConfigService = appConfigService; //baseUrl = environment.baseUrl;

        this.baseUrl = this.appConfigService.apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers.append('Content-Type', 'application/json');
      }

      _createClass(DocumentSummaryService, [{
        key: "addSummary",
        value: function addSummary(formData) {
          // let body = JSON.stringify(formData);
          return this.httpClient.post("".concat(this.baseUrl + "document/Save"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        } //.......................handleError......................................

      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
          } else {
            console.error('Server Side Error :', errorResponse);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There is a problem with the service. We are notified & working on it. Please try again later.');
        }
      }]);

      return DocumentSummaryService;
    }();

    DocumentSummaryService.ɵfac = function DocumentSummaryService_Factory(t) {
      return new (t || DocumentSummaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]));
    };

    DocumentSummaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocumentSummaryService,
      factory: DocumentSummaryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentSummaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Services/document-upload.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Parser/Shared/Services/document-upload.service.ts ***!
    \*******************************************************************/

  /*! exports provided: DocumentUploadService */

  /***/
  function srcAppParserSharedServicesDocumentUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentUploadService", function () {
      return DocumentUploadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Models_FileName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Models/FileName */
    "./src/app/Parser/Shared/Models/FileName.ts");
    /* harmony import */


    var _Models_RFPFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Models/RFPFile */
    "./src/app/Parser/Shared/Models/RFPFile.ts");
    /* harmony import */


    var _Models_RFPOpportunity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Models/RFPOpportunity */
    "./src/app/Parser/Shared/Models/RFPOpportunity.ts");
    /* harmony import */


    var _models_SummaryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/SummaryField */
    "./src/app/Parser/Shared/models/SummaryField.ts");
    /* harmony import */


    var _Models_CategoryData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Models/CategoryData */
    "./src/app/Parser/Shared/Models/CategoryData.ts");
    /* harmony import */


    var src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Shared/services/dialog.service */
    "./src/app/Shared/services/dialog.service.ts");
    /* harmony import */


    var _rfp_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rfp-database.service */
    "./src/app/Parser/Shared/Services/rfp-database.service.ts");
    /* harmony import */


    var src_app_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Shared/services/notification.service */
    "./src/app/Shared/services/notification.service.ts");
    /* harmony import */


    var _sharepoint_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sharepoint.service */
    "./src/app/Parser/Shared/Services/sharepoint.service.ts");

    var DocumentUploadService =
    /*#__PURE__*/
    function () {
      function DocumentUploadService(dialogService, rfpDatabaseService, notification, sharepointService) {
        _classCallCheck(this, DocumentUploadService);

        this.dialogService = dialogService;
        this.rfpDatabaseService = rfpDatabaseService;
        this.notification = notification;
        this.sharepointService = sharepointService; //private _rfpFileList: RFPFile[] = [];

        this._filenameList = [];
        this._duplicateFileList = [];
        this._numberOfAttachedfile = 0;
        this._numberOfSavedfile = '';
        this._numberOfParssedfile = '';
        this._dropDownMessage = "Attach file";
        this._deleteButtonDisable = true;
        this._saveButtonDisable = true;
        this._saveAllButtonDisable = true;
        this._viewButtonDisable = true;
        this._parseButtonDisable = true;
        this._publishButtonDisable = true;
        this._RFPOpportunity = new _Models_RFPOpportunity__WEBPACK_IMPORTED_MODULE_3__["RFPOpportunity"]();
        this.GetCategoryNameList();
      }

      _createClass(DocumentUploadService, [{
        key: "GetFileNameList",
        value: function GetFileNameList(fileName) {
          this._filenameList = [];

          if (fileName !== undefined) {
            var rfpFileIndex = this.RFPOpportunity.RfpFileList.findIndex(function (file) {
              return file.FileName == fileName && file.Saved === undefined;
            });
            var rfpFile = this.RFPOpportunity.RfpFileList[rfpFileIndex];
            var filename = new _Models_FileName__WEBPACK_IMPORTED_MODULE_1__["FileName"]({
              Name: rfpFile.OrignalFile.name,
              Path: rfpFile.FilePathSharePoint
            });

            this._filenameList.push(filename);

            return this._filenameList;
          }

          for (var index = 0; index < this.RFPOpportunity.RfpFileList.length; index++) {
            var _rfpFile = this.RFPOpportunity.RfpFileList[index];

            if (_rfpFile.SavedSharePoint === true && (_rfpFile.Saved === undefined || _rfpFile.Saved == null || _rfpFile.Saved == false)) {
              var _filename = new _Models_FileName__WEBPACK_IMPORTED_MODULE_1__["FileName"]({
                Name: _rfpFile.OrignalFile.name,
                Path: _rfpFile.FilePathSharePoint
              });

              this._filenameList.push(_filename);
            }
          }

          return this._filenameList;
        }
      }, {
        key: "ValidationFileName",
        value: function ValidationFileName(event) {
          var validRfpFileList = [];
          var reg = /(.*?)\.(doc|docx|pdf)$/;

          for (var index = 0; index < event.target.files.length; index++) {
            var fileName = event.target.files[index].name;

            if (!fileName.match(reg)) {
              return "1";
            } else if (fileName.includes("&") || fileName.includes("#")) {
              return "2";
            }
          }

          return "0";
        }
      }, {
        key: "PopulateRfpFileCollection",
        value: function PopulateRfpFileCollection(event) {
          var _this41 = this;

          var firstFile = true;

          var _loop2 = function _loop2(index) {
            var currentAttachfileName = event.target.files[index].name;

            var DuplicateRFPFileIndex = _this41.RFPOpportunity.RfpFileList.findIndex(function (file) {
              return file.FileName === currentAttachfileName;
            });

            if (DuplicateRFPFileIndex >= 0) {
              var duplicateFileName = new _Models_FileName__WEBPACK_IMPORTED_MODULE_1__["FileName"]({
                Name: currentAttachfileName
              });

              _this41._duplicateFileList.push(duplicateFileName);
            } else {
              var rfpFile = new _Models_RFPFile__WEBPACK_IMPORTED_MODULE_2__["RFPFile"]({
                OrignalFile: event.target.files[index],
                FileName: event.target.files[index].name,
                FileNameColor: 'red'
              });

              if (firstFile == true) {
                _this41._selectedFileName = rfpFile.FileName;
                firstFile = false;
              }

              _this41.RFPOpportunity.AddRfpFile(rfpFile);
            }
          };

          for (var index = 0; index < event.target.files.length; index++) {
            _loop2(index);
          } //this.SetNumberOfFileSatusCount();

        }
      }, {
        key: "PopulateDocumentId",
        value: function PopulateDocumentId(fileNameListReponse, opportunityName, opportunityId, summaryFieldList) {
          var _this42 = this;

          if (this.RFPOpportunity.OpportunityName === undefined) {
            this.RFPOpportunity.OpportunityName = opportunityName;
            this.RFPOpportunity.OpportunityId = opportunityId;
            this.RFPOpportunity.SummaryFieldList = summaryFieldList;
          }

          var _loop3 = function _loop3(index) {
            var fileName = fileNameListReponse[index];

            var rfpFile = _this42.RFPOpportunity.RfpFileList.find(function (file) {
              return file.FileName == fileName.Name;
            });

            if (rfpFile !== undefined) {
              rfpFile.fileRFPDbId = fileName.fileRFPDbId;
              rfpFile.FileNameColor = 'black';
              rfpFile.Saved = true;

              if (rfpFile.FileName == _this42._selectedFileName) {
                if (fileName.HtmlFile !== undefined && fileName.HtmlFile !== null) {
                  rfpFile.HTMLFile = fileName.HtmlFile;
                  rfpFile.View = true;
                }
              }
            }
          };

          for (var index = 0; index < fileNameListReponse.length; index++) {
            _loop3(index);
          }
        }
      }, {
        key: "PopulateHtmlFile",
        value: function PopulateHtmlFile(viewDocumentResponse) {
          var rfpFile = this.RFPOpportunity.RfpFileList.find(function (file) {
            return file.fileRFPDbId == viewDocumentResponse.documentId;
          });
          rfpFile.HTMLFile = viewDocumentResponse.htmlFile;
          rfpFile.View = true;
        }
      }, {
        key: "SetNumberOfFileSatusCount",
        value: function SetNumberOfFileSatusCount() {
          this._numberOfAttachedfile = this.RFPOpportunity.RfpFileList.length;

          if (this._numberOfAttachedfile == 0) {
            this._numberOfSavedfile = "";
            this._numberOfParssedfile = "";
            this._numberOfSavedfile == "";
            this._numberOfParssedfile == "";
            return;
          }

          var numberOfUnsavedfile = this.RFPOpportunity.RfpFileList.filter(function (file) {
            return file.Saved === undefined;
          }).length;
          var numberOfSavedfile = this.RFPOpportunity.RfpFileList.filter(function (file) {
            return file.Saved === undefined;
          }).length;
          var numberOfParssedfile = this.RFPOpportunity.RfpFileList.filter(function (file) {
            return file.Parsed == true;
          }).length;

          if (numberOfUnsavedfile == 0) {
            if (this.RFPOpportunity.RfpFileList.length == 1) {
              this._numberOfSavedfile = "File is saved";
              this._savefileMessageColor = 'green';
            } else {
              this._numberOfSavedfile = "All files are saved";
              this._savefileMessageColor = 'green';
            }
          } else {
            this._savefileMessageColor = 'red';
            this._numberOfSavedfile = numberOfUnsavedfile == 1 ? "1 unsave file" : numberOfUnsavedfile + " unsave files";
          }

          if (numberOfParssedfile == 0) {
            this._numberOfParssedfile = "0 parsed file";
          } else {
            this._numberOfParssedfile = numberOfParssedfile == 1 ? "1 parsed file" : numberOfParssedfile + " parsed files";
          }
        }
      }, {
        key: "TogglingEnableDisableButton",
        value: function TogglingEnableDisableButton() {
          var _this43 = this;

          if (this.RFPOpportunity !== undefined && this.RFPOpportunity !== null && this.RFPOpportunity.OpportunityId !== undefined && this.RFPOpportunity.OpportunityId !== null && this.RFPOpportunity.OpportunityId != "0" && this.RFPOpportunity.OpportunityId != "") {
            this._saveButtonDisable = false;
            this._publishButtonDisable = false;
          } else {
            this._saveButtonDisable = true;
            this._publishButtonDisable = true;
          }

          if (this.RFPOpportunity.RfpFileList.length > 0) {// let unsavefileList = this.RFPOpportunity.RfpFileList.filter(file => file.Saved == undefined);
            // if (unsavefileList.length == 0) {
            //   this._saveAllButtonDisable = true;
            // } else {
            //   this._saveAllButtonDisable = false;
            // }
          } else {
            this._viewButtonDisable = true;
            this._parseButtonDisable = true;
            this._publishButtonDisable = true;
            this._parseButtonDisable = true;
          }

          if (this._selectedFileName === undefined || this._selectedFileName == '') {
            this._deleteButtonDisable = true;
            this._viewButtonDisable = true;
            this._parseButtonDisable = true;
          } else {
            this._deleteButtonDisable = false;
            var selectFileIndex = this.RFPOpportunity.RfpFileList.findIndex(function (file) {
              return file.FileName == _this43._selectedFileName;
            });
            var rfpfile = this.RFPOpportunity.RfpFileList[selectFileIndex];

            if (rfpfile === undefined) {
              this._deleteButtonDisable = true;
              this._viewButtonDisable = true;
              this._parseButtonDisable = true;
              this._publishButtonDisable = true;
              return;
            }

            if (rfpfile.View !== undefined && rfpfile.View === true) {
              this._viewButtonDisable = true;
            } else {
              this._viewButtonDisable = false;
            }

            if (rfpfile.View === undefined || rfpfile.View == null || rfpfile.View == false || rfpfile.Parsed === true) {
              this._parseButtonDisable = true;
            } else if (rfpfile.View === true && (rfpfile.Parsed === undefined || rfpfile.Parsed == null || rfpfile.Parsed == false)) {
              this._parseButtonDisable = false;
            }
          }
        }
      }, {
        key: "SetDropDownMessage",
        value: function SetDropDownMessage() {
          if (this.RFPOpportunity.RfpFileList.length === 0) {
            this._dropDownMessage = "Attach file";
          } else {
            this._dropDownMessage = "Select file";
          }
        }
      }, {
        key: "SetFileSavedStatusOnsharePoint",
        value: function SetFileSavedStatusOnsharePoint(sharePointResponseList) {
          var _this44 = this;

          var sharePointUnsaveFileList = [];

          var _loop4 = function _loop4(index) {
            var sharePointDocUploadResponse = sharePointResponseList[index];

            var fileIndex = _this44.RFPOpportunity.RfpFileList.findIndex(function (file) {
              return file.FileName == sharePointDocUploadResponse.FileName;
            });

            var rfpFile = _this44.RFPOpportunity.RfpFileList[fileIndex];

            if (sharePointDocUploadResponse.Status == true) {
              rfpFile.SavedSharePoint = true;
              rfpFile.FilePathSharePoint = sharePointDocUploadResponse.FilePath;
            } else {
              sharePointUnsaveFileList.push(rfpFile);

              _this44.RFPOpportunity.RfpFileList.splice(fileIndex, 1);
            }
          };

          for (var index = 0; index < sharePointResponseList.length; index++) {
            _loop4(index);
          }

          return sharePointUnsaveFileList;
        }
      }, {
        key: "DeleteRfpFile",
        value: function DeleteRfpFile(formData) {
          return this.rfpDatabaseService.DeleteRfpFile(formData);
        }
      }, {
        key: "CreateEmptyOpportunity",
        value: function CreateEmptyOpportunity(formData) {
          return this.rfpDatabaseService.CreateEmptyOpportunity(formData);
        }
      }, {
        key: "SaveFiles",
        value: function SaveFiles(formData) {
          return this.rfpDatabaseService.SaveFiles(formData);
        }
      }, {
        key: "ViewDocument",
        value: function ViewDocument(formData) {
          return this.rfpDatabaseService.ViewDocument(formData);
        }
      }, {
        key: "GetCategoryNameList",
        value: function GetCategoryNameList() {
          return this.rfpDatabaseService.GetCategoryNameList();
        }
      }, {
        key: "UploadFilesSharePoint",
        value: function UploadFilesSharePoint(formData) {
          return this.sharepointService.UploadFilesSharePoint(formData);
        }
      }, {
        key: "SaveChangedCategoriesAndSummaryData",
        value: function SaveChangedCategoriesAndSummaryData(formData) {
          // let body = JSON.stringify(formData);
          return this.rfpDatabaseService.SaveChangedCategoriesAndSummaryData(formData);
        }
      }, {
        key: "GetSavedEmptyOpportunity",
        value: function GetSavedEmptyOpportunity(opportunityId, documentUploadComponent) {
          var _this45 = this;

          this.rfpDatabaseService.GetSavedEmptyOpportunity(opportunityId).subscribe(function (res) {
            return _this45.GetSavedEmptyOpportunityResponse(res, documentUploadComponent);
          }, function (err) {
            return documentUploadComponent.UploadError(err);
          });
        }
      }, {
        key: "GetSavedEmptyOpportunityResponse",
        value: function GetSavedEmptyOpportunityResponse(savedEmptyOpportunityResponse, documentUploadComponent) {
          if (savedEmptyOpportunityResponse.apiStatusCode == '1') {
            this.PopulateRFPOpertunity(savedEmptyOpportunityResponse);
            this.TogglingEnableDisableButton();
            this.SetNumberOfFileSatusCount();
            documentUploadComponent.GetSaveEmptyOpportunity(this._RFPOpportunity);
            documentUploadComponent.isLoading = false;
          } else if (savedEmptyOpportunityResponse.apiStatusCode == "0") {
            documentUploadComponent.isLoading = false;
            this.notification.error("'Something bad happened. Please try again later.'");
          } else {
            if (savedEmptyOpportunityResponse.apiStatusCode !== undefined) {
              documentUploadComponent.isLoading = false;
              this.notification.error("'Something bad happened. Please try again later.'");
            }
          }
        }
      }, {
        key: "PopulateRFPOpertunity",
        value: function PopulateRFPOpertunity(savedEmptyOpportunityResponse) {
          var rfpOpportunity = new _Models_RFPOpportunity__WEBPACK_IMPORTED_MODULE_3__["RFPOpportunity"]();
          rfpOpportunity.OpportunityId = savedEmptyOpportunityResponse.opportunity.OpportunityId.toString();
          rfpOpportunity.OpportunityName = savedEmptyOpportunityResponse.opportunity.OpportunityName;

          for (var index = 0; index < savedEmptyOpportunityResponse.opportunity.RfpDocumentViewModel.length; index++) {
            var RfpDocument = savedEmptyOpportunityResponse.opportunity.RfpDocumentViewModel[index];
            var rfpfile = new _Models_RFPFile__WEBPACK_IMPORTED_MODULE_2__["RFPFile"]({
              OpportunityName: RfpDocument.OpportunityName,
              FileName: RfpDocument.FileName,
              FileNameColor: RfpDocument.FileNameColor,
              fileRFPDbId: RfpDocument.fileRFPDbId,
              HTMLFile: RfpDocument.HTMLFile,
              SavedSharePoint: RfpDocument.SavedSharePoint,
              FilePathSharePoint: RfpDocument.FilePathSharePoint,
              Saved: RfpDocument.Saved,
              View: RfpDocument.View,
              Parsed: RfpDocument.Parsed
            });
            rfpOpportunity.AddRfpFile(rfpfile);
          }

          var summaryFieldList = new Array();

          for (var _index7 = 0; _index7 < savedEmptyOpportunityResponse.opportunity.RfpSummaryViewModel.length; _index7++) {
            var summary = savedEmptyOpportunityResponse.opportunity.RfpSummaryViewModel[_index7];
            var summaryField = new _models_SummaryField__WEBPACK_IMPORTED_MODULE_4__["SummaryField"](summary.FieldDisplayName, summary.ControlType, summary.FieldText, summary.DisplayOrder, summary.FiledTypeId);
            summaryFieldList.push(summaryField);
          }

          var categoryDataList = new Array();

          for (var _index8 = 0; _index8 < savedEmptyOpportunityResponse.opportunity.RfpCategoryDataViewModel.length; _index8++) {
            var rfpCategoryData = savedEmptyOpportunityResponse.opportunity.RfpCategoryDataViewModel[_index8];
            var categoryData = new _Models_CategoryData__WEBPACK_IMPORTED_MODULE_5__["CategoryData"]();
            categoryData.CategoryId = rfpCategoryData.CategoryId;
            categoryData.Name = rfpCategoryData.Name;
            categoryData.CategoryData = rfpCategoryData.CategoryData;
            categoryDataList.push(categoryData);
          }

          this._RFPOpportunity = rfpOpportunity;
          this._RFPOpportunity.CatetoryDataList = categoryDataList;

          this._RFPOpportunity.AddSummaryFieldList(summaryFieldList);

          this.SelectedFileName = this.RFPOpportunity.RfpFileList[0].FileName;
        }
      }, {
        key: "CleanFormControlVariables",
        value: function CleanFormControlVariables() {
          this._numberOfAttachedfile = 0;
          this._RFPOpportunity = new _Models_RFPOpportunity__WEBPACK_IMPORTED_MODULE_3__["RFPOpportunity"]();
          this._selectedFileName = undefined;
          this._numberOfSavedfile = '';
          this._numberOfParssedfile = '';
        }
      }, {
        key: "CategoryNameList",
        get: function get() {
          return this._categoryNameList;
        },
        set: function set(value) {
          this._categoryNameList = value;
        }
      }, {
        key: "RFPOpportunity",
        get: function get() {
          return this._RFPOpportunity;
        } // public set RFPOpportunity(value: RFPOpportunity) {
        //   this._RFPOpportunity = value;
        // }

      }, {
        key: "SavefileMessageColor",
        get: function get() {
          return this._savefileMessageColor;
        }
      }, {
        key: "SelectedFileName",
        get: function get() {
          return this._selectedFileName;
        },
        set: function set(value) {
          this._selectedFileName = value;
        }
      }, {
        key: "DeleteButtonDisable",
        get: function get() {
          return this._deleteButtonDisable;
        }
      }, {
        key: "SaveButtonDisable",
        get: function get() {
          return this._saveButtonDisable;
        } // public set SaveButtonDisable(value: boolean) {
        //   this._saveButtonDisable = value;
        // }

      }, {
        key: "SaveAllButtonDisable",
        get: function get() {
          return this._saveAllButtonDisable;
        }
      }, {
        key: "ViewButtonDisable",
        get: function get() {
          return this._viewButtonDisable;
        }
      }, {
        key: "ParseButtonDisable",
        get: function get() {
          return this._parseButtonDisable;
        }
      }, {
        key: "PublishButtonDisable",
        get: function get() {
          return this._publishButtonDisable;
        }
      }, {
        key: "duplicateFileList",
        get: function get() {
          return this._duplicateFileList;
        }
      }, {
        key: "NumberOfAttachedfile",
        get: function get() {
          return this._numberOfAttachedfile;
        }
      }, {
        key: "NumberOfSavedfile",
        get: function get() {
          return this._numberOfSavedfile;
        }
      }, {
        key: "NumberOfParssedfile",
        get: function get() {
          return this._numberOfParssedfile;
        }
      }, {
        key: "DropDownMessage",
        get: function get() {
          return this._dropDownMessage;
        }
      }]);

      return DocumentUploadService;
    }();

    DocumentUploadService.ɵfac = function DocumentUploadService_Factory(t) {
      return new (t || DocumentUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rfp_database_service__WEBPACK_IMPORTED_MODULE_7__["RfpDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sharepoint_service__WEBPACK_IMPORTED_MODULE_9__["SharepointService"]));
    };

    DocumentUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocumentUploadService,
      factory: DocumentUploadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_Shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }, {
          type: _rfp_database_service__WEBPACK_IMPORTED_MODULE_7__["RfpDatabaseService"]
        }, {
          type: src_app_Shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }, {
          type: _sharepoint_service__WEBPACK_IMPORTED_MODULE_9__["SharepointService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Services/rfp-database.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Parser/Shared/Services/rfp-database.service.ts ***!
    \****************************************************************/

  /*! exports provided: RfpDatabaseService */

  /***/
  function srcAppParserSharedServicesRfpDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RfpDatabaseService", function () {
      return RfpDatabaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/operators/catchError */
    "./node_modules/rxjs/internal/operators/catchError.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Shared/services/app-config.service */
    "./src/app/Shared/services/app-config.service.ts");

    var RfpDatabaseService =
    /*#__PURE__*/
    function () {
      function RfpDatabaseService(http, appConfigService) {
        _classCallCheck(this, RfpDatabaseService);

        this.http = http;
        this.appConfigService = appConfigService;
        this.apiUrl = this.appConfigService.apiBaseUrl;
      }

      _createClass(RfpDatabaseService, [{
        key: "CreateEmptyOpportunity",
        value: function CreateEmptyOpportunity(formData) {
          var _this46 = this;

          console.log(this.apiUrl);
          return this.http.post("".concat(this.apiUrl + "Opportunity/CreateEmptyOpportunity"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this46.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "SaveFiles",
        value: function SaveFiles(formData) {
          var _this47 = this;

          console.log(this.apiUrl);
          return this.http.post("".concat(this.apiUrl + "document/saveFile"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this47.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "CreateEmptyOpportunityWithAllFileSave",
        value: function CreateEmptyOpportunityWithAllFileSave(formData) {
          var _this48 = this;

          return this.http.post("".concat(this.apiUrl + "Opportunity/CreateEmptyOpportunity"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this48.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "ViewDocument",
        value: function ViewDocument(formData) {
          var _this49 = this;

          console.log(this.apiUrl);
          return this.http.post("".concat(this.apiUrl + "document/viewDocument"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this49.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "ViewSharePointDocument",
        value: function ViewSharePointDocument(formData) {
          var _this50 = this;

          console.log(this.apiUrl);
          return this.http.post("".concat(this.apiUrl + "document/viewSharePointDocument"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this50.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "AutoParsing",
        value: function AutoParsing(formData) {
          var _this51 = this;

          console.log(this.apiUrl);
          return this.http.post("".concat(this.apiUrl + "document/autoParsing"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this51.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteRfpFile",
        value: function DeleteRfpFile(formData) {
          var _this52 = this;

          console.log(this.apiUrl);
          return this.http.post("".concat(this.apiUrl + "document/deleteFile"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this52.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCategoryNameList",
        value: function GetCategoryNameList() {
          console.log(this.apiUrl);
          return this.http.get("".concat(this.apiUrl, "document/getCategoryNameList")).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getCompanyOppertunityList",
        value: function getCompanyOppertunityList(publishFlag, companyId) {
          //var companyId=localStorage.getItem('compId');
          //var companyId = 1;
          //if (publishFlag == false) {
          return this.http.get("".concat(this.apiUrl, "document/getCompanyOppertunityList?companyId=").concat(companyId)).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)); //}
          //else {GetDocumentList
          //  return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
          //    .pipe(catchError(this.handleError));
          //}
        }
      }, {
        key: "GetSavedEmptyOpportunity",
        value: function GetSavedEmptyOpportunity(opportunityId) {
          //var companyId=localStorage.getItem('compId');
          //var companyId = 1;
          //if (publishFlag == false) {
          return this.http.get("".concat(this.apiUrl, "Opportunity/getSavedEmptyOpportunity?opportunityId=").concat(opportunityId)).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)); //}
          //else {GetDocumentList
          //  return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
          //    .pipe(catchError(this.handleError));
          //}
        }
      }, {
        key: "SaveChangedCategoriesAndSummaryData",
        value: function SaveChangedCategoriesAndSummaryData(formData) {
          // let body = JSON.stringify(formData);
          return this.http.post("".concat(this.apiUrl + "document/saveCategoriesAndSummaryData"), formData).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "WholeDocumentParseDataSave",
        value: function WholeDocumentParseDataSave(formData) {
          var _this53 = this;

          return this.http.post("".concat(this.apiUrl + "document/WholeDocumentParseDataSave"), formData, {
            observe: 'events'
          }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return _this53.getEventMessage(event);
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getEventMessage",
        value: function getEventMessage(event) {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
              return this.progress(event);

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
              return this.apiResponse(event);

            default:
              return event.type;
          }
        }
      }, {
        key: "progress",
        value: function progress(event) {
          var percentDone = Math.round(100 * event.loaded / event.total);
          return {
            status: 'progress',
            message: percentDone
          };
        }
      }, {
        key: "apiResponse",
        value: function apiResponse(event) {
          return event.body;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message
          //return throwError(error); 


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened. Please try again later.');
        }
      }]);

      return RfpDatabaseService;
    }();

    RfpDatabaseService.ɵfac = function RfpDatabaseService_Factory(t) {
      return new (t || RfpDatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"]));
    };

    RfpDatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RfpDatabaseService,
      factory: RfpDatabaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfpDatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/Services/sharepoint.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Parser/Shared/Services/sharepoint.service.ts ***!
    \**************************************************************/

  /*! exports provided: SharepointService */

  /***/
  function srcAppParserSharedServicesSharepointServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharepointService", function () {
      return SharepointService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators/catchError */
    "./node_modules/rxjs/internal/operators/catchError.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Shared/services/app-config.service */
    "./src/app/Shared/services/app-config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SharepointService =
    /*#__PURE__*/
    function () {
      function SharepointService(appConfigService, http) {
        _classCallCheck(this, SharepointService);

        this.appConfigService = appConfigService;
        this.http = http;
        this.sharepointapiUrl = this.appConfigService.sharepointapiUrl;
      }

      _createClass(SharepointService, [{
        key: "UploadFilesSharePoint",
        value: function UploadFilesSharePoint(formData) {
          debugger;
          console.log('>>>>>share point url<<<<<');
          console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
          return this.http.post("".concat(this.sharepointapiUrl + "api/Document/BulkUpload"), formData).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteFilesSharePoint",
        value: function DeleteFilesSharePoint(params) {
          debugger;
          console.log('>>>>>share point url<<<<<');
          console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
          return this.http["delete"]("".concat(this.sharepointapiUrl + "api/Document/Delete"), {
            observe: 'body',
            params: params
          }).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "GetFileSharePoint",
        value: function GetFileSharePoint(params) {
          debugger;
          console.log('>>>>>share point url<<<<<');
          console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
          return this.http.get("".concat(this.sharepointapiUrl + "api/Document/Download"), {
            observe: 'body',
            params: params
          }).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message
          //return throwError(error); 


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened. Please try again later.');
        }
      }]);

      return SharepointService;
    }();

    SharepointService.ɵfac = function SharepointService_Factory(t) {
      return new (t || SharepointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    SharepointService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharepointService,
      factory: SharepointService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharepointService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Parser/Shared/models/DocUploadResponse.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Parser/Shared/models/DocUploadResponse.ts ***!
    \***********************************************************/

  /*! exports provided: DocUploadResponse */

  /***/
  function srcAppParserSharedModelsDocUploadResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocUploadResponse", function () {
      return DocUploadResponse;
    });

    var DocUploadResponse = function DocUploadResponse() {
      _classCallCheck(this, DocUploadResponse);
    };
    /***/

  },

  /***/
  "./src/app/Parser/Shared/models/SummaryField.ts":
  /*!******************************************************!*\
    !*** ./src/app/Parser/Shared/models/SummaryField.ts ***!
    \******************************************************/

  /*! exports provided: SummaryField */

  /***/
  function srcAppParserSharedModelsSummaryFieldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryField", function () {
      return SummaryField;
    });

    var SummaryField = function SummaryField(fieldDisplayName, controlType, fieldText, displayOrder, filedTypeId) {
      _classCallCheck(this, SummaryField);

      this.FieldDisplayName = fieldDisplayName;
      this.ControlType = controlType;
      this.FieldText = fieldText;
      this.DisplayOrder = displayOrder;
      this.FiledTypeId = filedTypeId;
    };
    /***/

  },

  /***/
  "./src/app/Parser/parser.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/Parser/parser.module.ts ***!
    \*****************************************/

  /*! exports provided: ParserModule */

  /***/
  function srcAppParserParserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParserModule", function () {
      return ParserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Components_Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Components/Dialogs/addfield/addfield.component */
    "./src/app/Parser/Components/Dialogs/addfield/addfield.component.ts");
    /* harmony import */


    var _Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/document-parser-form/document-parser-form.component */
    "./src/app/Parser/Components/document-parser-form/document-parser-form.component.ts");
    /* harmony import */


    var _Components_document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/document-summary/document-summary.component */
    "./src/app/Parser/Components/document-summary/document-summary.component.ts");
    /* harmony import */


    var _Components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/document-upload/document-upload.component */
    "./src/app/Parser/Components/document-upload/document-upload.component.ts");
    /* harmony import */


    var _Components_Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/Dialogs/document-list/document-list.component */
    "./src/app/Parser/Components/Dialogs/document-list/document-list.component.ts");
    /* harmony import */


    var _Components_Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/Dialogs/tinymce/tinymce.component */
    "./src/app/Parser/Components/Dialogs/tinymce/tinymce.component.ts");
    /* harmony import */


    var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Shared/shared.module */
    "./src/app/Shared/shared.module.ts");
    /* harmony import */


    var _Components_Dialogs_document_upload_option_document_upload_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/Dialogs/document-upload-option/document-upload-option.component */
    "./src/app/Parser/Components/Dialogs/document-upload-option/document-upload-option.component.ts");
    /* harmony import */


    var _Components_Dialogs_opportunity_name_opportunity_name_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Components/Dialogs/opportunity-name/opportunity-name.component */
    "./src/app/Parser/Components/Dialogs/opportunity-name/opportunity-name.component.ts");
    /* harmony import */


    var _Components_Dialogs_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Components/Dialogs/confirmation-message/confirmation-message.component */
    "./src/app/Parser/Components/Dialogs/confirmation-message/confirmation-message.component.ts");
    /* harmony import */


    var _Components_Dialogs_duplicate_document_list_duplicate_document_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Components/Dialogs/duplicate-document-list/duplicate-document-list.component */
    "./src/app/Parser/Components/Dialogs/duplicate-document-list/duplicate-document-list.component.ts");
    /* harmony import */


    var _Components_Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Components/Dialogs/file-list-message/file-list-message.component */
    "./src/app/Parser/Components/Dialogs/file-list-message/file-list-message.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ngx-contextmenu */
    "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ../Shared/pipes/EscapeHtmlPipe */
    "./src/app/Shared/pipes/EscapeHtmlPipe.ts");

    var ParserModule = function ParserModule() {
      _classCallCheck(this, ParserModule);
    };

    ParserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ParserModule
    });
    ParserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ParserModule_Factory(t) {
        return new (t || ParserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParserModule, {
        declarations: [_Components_Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_7__["TinymceComponent"], _Components_Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_2__["AddfieldComponent"], _Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_3__["DocumentParserFormComponent"], _Components_document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_4__["DocumentSummaryComponent"], _Components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocumentUploadComponent"], _Components_Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"], _Components_Dialogs_document_upload_option_document_upload_option_component__WEBPACK_IMPORTED_MODULE_9__["DocumentUploadOptionComponent"], _Components_Dialogs_opportunity_name_opportunity_name_component__WEBPACK_IMPORTED_MODULE_10__["OpportunityNameComponent"], _Components_Dialogs_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationMessageComponent"], _Components_Dialogs_duplicate_document_list_duplicate_document_list_component__WEBPACK_IMPORTED_MODULE_12__["DuplicateDocumentListComponent"], _Components_Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_13__["FileListMessageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
          declarations: [_Components_Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_7__["TinymceComponent"], _Components_Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_2__["AddfieldComponent"], _Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_3__["DocumentParserFormComponent"], _Components_document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_4__["DocumentSummaryComponent"], _Components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocumentUploadComponent"], _Components_Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"], _Components_Dialogs_document_upload_option_document_upload_option_component__WEBPACK_IMPORTED_MODULE_9__["DocumentUploadOptionComponent"], _Components_Dialogs_opportunity_name_opportunity_name_component__WEBPACK_IMPORTED_MODULE_10__["OpportunityNameComponent"], _Components_Dialogs_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationMessageComponent"], _Components_Dialogs_duplicate_document_list_duplicate_document_list_component__WEBPACK_IMPORTED_MODULE_12__["DuplicateDocumentListComponent"], _Components_Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_13__["FileListMessageComponent"]],
          exports: [],
          entryComponents: [_Components_Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_7__["TinymceComponent"], _Components_Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"], _Components_Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_2__["AddfieldComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_3__["DocumentParserFormComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormArrayName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogActions"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Dir"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridAvatarCssMatStyler"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatSuffix"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatTextareaAutosize"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRipple"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatAnchor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardAvatar"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarContainer"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatCalendarHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTextColumn"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuContent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortHeader"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginator"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionPanelContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipTrailingIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioButton"], _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOptgroup"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListAvatarCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListOption"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__["MatBadge"], ng2_dragula__WEBPACK_IMPORTED_MODULE_40__["DragulaDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["CdkScrollable"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["CdkVirtualScrollViewport"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_43__["ɵa"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_43__["ContextMenuComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_43__["ɵb"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_44__["EditorComponent"], _Components_Dialogs_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_7__["TinymceComponent"], _Components_Dialogs_addfield_addfield_component__WEBPACK_IMPORTED_MODULE_2__["AddfieldComponent"], _Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_3__["DocumentParserFormComponent"], _Components_document_summary_document_summary_component__WEBPACK_IMPORTED_MODULE_4__["DocumentSummaryComponent"], _Components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocumentUploadComponent"], _Components_Dialogs_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"], _Components_Dialogs_document_upload_option_document_upload_option_component__WEBPACK_IMPORTED_MODULE_9__["DocumentUploadOptionComponent"], _Components_Dialogs_opportunity_name_opportunity_name_component__WEBPACK_IMPORTED_MODULE_10__["OpportunityNameComponent"], _Components_Dialogs_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationMessageComponent"], _Components_Dialogs_duplicate_document_list_duplicate_document_list_component__WEBPACK_IMPORTED_MODULE_12__["DuplicateDocumentListComponent"], _Components_Dialogs_file_list_message_file_list_message_component__WEBPACK_IMPORTED_MODULE_13__["FileListMessageComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _Shared_pipes_EscapeHtmlPipe__WEBPACK_IMPORTED_MODULE_45__["EscapeHtmlPipe"]]);
    /***/

  },

  /***/
  "./src/app/Shared/models/DocUploadOptionResponse.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Shared/models/DocUploadOptionResponse.ts ***!
    \**********************************************************/

  /*! exports provided: DocUploadOptionResponse */

  /***/
  function srcAppSharedModelsDocUploadOptionResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocUploadOptionResponse", function () {
      return DocUploadOptionResponse;
    });

    var DocUploadOptionResponse = function DocUploadOptionResponse() {
      _classCallCheck(this, DocUploadOptionResponse);
    };
    /***/

  },

  /***/
  "./src/app/Shared/models/OppertunityCategory.ts":
  /*!******************************************************!*\
    !*** ./src/app/Shared/models/OppertunityCategory.ts ***!
    \******************************************************/

  /*! exports provided: OppertunityCategory */

  /***/
  function srcAppSharedModelsOppertunityCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OppertunityCategory", function () {
      return OppertunityCategory;
    });

    var OppertunityCategory = function OppertunityCategory() {
      _classCallCheck(this, OppertunityCategory);

      this.categoryId = null; //  ==> CategoryName

      this.categoryName = null;
      this.categoryData = [];
    };
    /***/

  },

  /***/
  "./src/app/Shared/models/ParsingDialogOutput.ts":
  /*!******************************************************!*\
    !*** ./src/app/Shared/models/ParsingDialogOutput.ts ***!
    \******************************************************/

  /*! exports provided: ParsingDialogOutput */

  /***/
  function srcAppSharedModelsParsingDialogOutputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParsingDialogOutput", function () {
      return ParsingDialogOutput;
    });

    var ParsingDialogOutput = function ParsingDialogOutput() {
      _classCallCheck(this, ParsingDialogOutput);

      this.ParsingAuto = false;
      this.ParsingManual = false;
      this.wholeDocumentYes = false;
      this.wholeDocumentNo = false;
      this.SelectedCategory = '';
      this.Ok = false;
    };
    /***/

  },

  /***/
  "./src/app/Shared/pipes/EscapeHtmlPipe.ts":
  /*!************************************************!*\
    !*** ./src/app/Shared/pipes/EscapeHtmlPipe.ts ***!
    \************************************************/

  /*! exports provided: EscapeHtmlPipe */

  /***/
  function srcAppSharedPipesEscapeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function () {
      return EscapeHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var EscapeHtmlPipe =
    /*#__PURE__*/
    function () {
      function EscapeHtmlPipe(sanitizer) {
        _classCallCheck(this, EscapeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(EscapeHtmlPipe, [{
        key: "transform",
        value: function transform(value, type) {
          switch (type) {
            case 'html':
              return this.sanitizer.bypassSecurityTrustHtml(value);

            case 'style':
              return this.sanitizer.bypassSecurityTrustStyle(value);

            case 'script':
              return this.sanitizer.bypassSecurityTrustScript(value);

            case 'url':
              return this.sanitizer.bypassSecurityTrustUrl(value);

            case 'resourceUrl':
              return this.sanitizer.bypassSecurityTrustResourceUrl(value);

            default:
              throw new Error("Invanglid safe type specified: ".concat(type));
          }
        }
      }]);

      return EscapeHtmlPipe;
    }();

    EscapeHtmlPipe.ɵfac = function EscapeHtmlPipe_Factory(t) {
      return new (t || EscapeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    EscapeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "escapeHtml",
      type: EscapeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EscapeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'escapeHtml'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Shared/services/app-config.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Shared/services/app-config.service.ts ***!
    \*******************************************************/

  /*! exports provided: AppConfigService */

  /***/
  function srcAppSharedServicesAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppConfigService =
    /*#__PURE__*/
    function () {
      function AppConfigService(http) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
      }

      _createClass(AppConfigService, [{
        key: "loadAppConfig",
        value: function loadAppConfig() {
          var _this54 = this;

          return this.http.get('/assets/config.json').toPromise().then(function (data) {
            _this54.appConfig = data;
          });
        }
      }, {
        key: "apiBaseUrl",
        get: function get() {
          if (!this.appConfig) {
            throw Error('Config file not loaded!');
          }

          return this.appConfig.apiBaseUrl + '/api/';
        }
      }, {
        key: "sharepointapiUrl",
        get: function get() {
          if (!this.appConfig) {
            throw Error('Config file not loaded!');
          }

          return this.appConfig.sharepointapiUrl + '/';
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ɵfac = function AppConfigService_Factory(t) {
      return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfigService,
      factory: AppConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Shared/services/dialog.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/Shared/services/dialog.service.ts ***!
    \***************************************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppSharedServicesDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var DialogService =
    /*#__PURE__*/
    function () {
      function DialogService(dialog) {
        _classCallCheck(this, DialogService);

        this.dialog = dialog;
      }

      _createClass(DialogService, [{
        key: "openDialog",
        value: function openDialog(dialogParams) {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.width = dialogParams.width;

          if (dialogParams.disableClose !== undefined) {
            dialogConfig.disableClose = dialogParams.disableClose;
          } else {
            dialogConfig.disableClose = true;
          }

          if (dialogParams.autoFocus !== undefined) {
            dialogConfig.autoFocus = dialogParams.autoFocus;
          } else {
            dialogConfig.autoFocus = true;
          }

          if (dialogParams.data !== undefined) {
            dialogConfig.data = dialogParams.data;
          }

          return this.dialog.open(dialogParams.dailogComponent, dialogConfig);
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Shared/services/notification.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Shared/services/notification.service.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppSharedServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var NotificationService =
    /*#__PURE__*/
    function () {
      function NotificationService(SnackBar) {
        _classCallCheck(this, NotificationService);

        this.SnackBar = SnackBar;
        this.config = {
          duration: 6000,
          horizontalPosition: "right",
          verticalPosition: "bottom"
        };
      }

      _createClass(NotificationService, [{
        key: "success",
        value: function success(msg) {
          this.config['panelClass'] = ['notification', 'success'];
          this.SnackBar.open(msg, '', this.config);
        }
      }, {
        key: "error",
        value: function error(msg) {
          this.config['panelClass'] = ['notification', 'error'];
          this.SnackBar.open(msg, '', this.config);
        }
      }, {
        key: "warning",
        value: function warning(msg) {
          this.config['panelClass'] = ['notification', 'warning'];
          this.SnackBar.open(msg, '', this.config);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/Shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Module/escape-html.module */
    "./src/app/Module/escape-html.module.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-contextmenu */
    "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js"); //import { InsertCategoryAttributeService } from './services/insert-category-attribute.service';


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [//InsertCategoryAttributeService,
      ],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"].forRoot(), _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__["EscapeHtmlModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuModule"].forRoot(), _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"], _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__["EscapeHtmlModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"], _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__["EscapeHtmlModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"], _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__["EscapeHtmlModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"].forRoot(), _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__["EscapeHtmlModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuModule"].forRoot(), _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"], _Module_escape_html_module__WEBPACK_IMPORTED_MODULE_5__["EscapeHtmlModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]],
          providers: [//InsertCategoryAttributeService,
          ]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Parser_Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Parser/Components/document-parser-form/document-parser-form.component */
    "./src/app/Parser/Components/document-parser-form/document-parser-form.component.ts");

    var routes = [{
      path: '',
      component: _Parser_Components_document_parser_form_document_parser_form_component__WEBPACK_IMPORTED_MODULE_2__["DocumentParserFormComponent"]
    }, {
      path: '',
      redirectTo: '/opportunity',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(route) {
        _classCallCheck(this, AppComponent);

        this.route = route;
      } //constructor(){}


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.route.queryParams.forEach(function (params) {
            //debugger;
            //var clientIDTest = localStorage.getItem('clientID').toString();
            //var clientID = parseInt(localStorage.getItem('clientID').length.toString());
            //var companySegmentID = parseInt(localStorage.getItem('companySegmentID').length.toString());
            //var userid = parseInt(localStorage.getItem('userid').length.toString());
            //var compId  = parseInt(localStorage.getItem('compId').length.toString());
            if (typeof params.compid != 'undefined') {
              typeof params.compid === 'undefined' ? localStorage.setItem('compId', '0') : localStorage.setItem('compId', params.compid);
              typeof params.userid === 'undefined' ? localStorage.setItem('userid', '0') : localStorage.setItem('userid', params.userid);
              typeof params.companySegmentID === 'undefined' ? localStorage.setItem('companySegmentID', '0') : localStorage.setItem('companySegmentID', params.companySegmentID);
              typeof params.clientID === 'undefined' ? localStorage.setItem('clientID', '0') : localStorage.setItem('clientID', params.clientID);
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container-fluid"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    padding-left: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _Parser_Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Parser/Shared/Services/document-parser-form.service */
    "./src/app/Parser/Shared/Services/document-parser-form.service.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _Parser_Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Parser/Shared/Services/ValidateChangeInDataService */
    "./src/app/Parser/Shared/Services/ValidateChangeInDataService.ts");
    /* harmony import */


    var _Parser_parser_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Parser/parser.module */
    "./src/app/Parser/parser.module.ts");
    /* harmony import */


    var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Shared/shared.module */
    "./src/app/Shared/shared.module.ts");
    /* harmony import */


    var _Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Shared/services/app-config.service */
    "./src/app/Shared/services/app-config.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_Parser_Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_6__["DocumentParserFormService"], _Parser_Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_11__["ValidateChangeInDataService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        multi: true,
        deps: [_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__["AppConfigService"]],
        useFactory: function useFactory(appConfigService) {
          return function () {
            //Make sure to return a promise!
            return appConfigService.loadAppConfig();
          };
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _Parser_parser_module__WEBPACK_IMPORTED_MODULE_12__["ParserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_10__["EditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _Parser_parser_module__WEBPACK_IMPORTED_MODULE_12__["ParserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_10__["EditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _Parser_parser_module__WEBPACK_IMPORTED_MODULE_12__["ParserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_10__["EditorModule"]],
          providers: [_Parser_Shared_Services_document_parser_form_service__WEBPACK_IMPORTED_MODULE_6__["DocumentParserFormService"], _Parser_Shared_Services_ValidateChangeInDataService__WEBPACK_IMPORTED_MODULE_11__["ValidateChangeInDataService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            multi: true,
            deps: [_Shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__["AppConfigService"]],
            useFactory: function useFactory(appConfigService) {
              return function () {
                //Make sure to return a promise!
                return appConfigService.loadAppConfig();
              };
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " home works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]],
        exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]],
          exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]],
          providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavMenuComponent =
    /*#__PURE__*/
    function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);
      }

      _createClass(NavMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
      return new (t || NavMenuComponent)();
    };

    NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavMenuComponent,
      selectors: [["app-nav-menu"]],
      decls: 7,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand", 2, "font-weight", "bold"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"]],
      template: function NavMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ZDAAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-menu',
          templateUrl: './nav-menu.component.html',
          styleUrls: ['./nav-menu.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/insert-category-attribute.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/insert-category-attribute.service.ts ***!
    \**********************************************************************/

  /*! exports provided: InsertCategoryAttributeService */

  /***/
  function srcAppSharedServicesInsertCategoryAttributeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsertCategoryAttributeService", function () {
      return InsertCategoryAttributeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InsertCategoryAttributeService =
    /*#__PURE__*/
    function () {
      function InsertCategoryAttributeService() {
        _classCallCheck(this, InsertCategoryAttributeService);
      }

      _createClass(InsertCategoryAttributeService, [{
        key: "resetOpportunityData",
        value: function resetOpportunityData(opportunityCollection, currentNodeIndex, categoryName) {
          this.opportunityCollection = opportunityCollection;
          this.currentNodeIndex = currentNodeIndex;
          this.categoryName = categoryName;
          this.SetCategoryName();
          return this.currentNode;
        }
      }, {
        key: "SetCategoryName",
        value: function SetCategoryName() {
          this.currentNode = this.opportunityCollection[this.currentNodeIndex];
          if (this.currentNode === undefined) return;
          this.SetCategory();
        }
      }, {
        key: "SetCategory",
        value: function SetCategory() {
          var isCategoryExist = this.currentNode.hasAttribute("data-index");

          if (isCategoryExist === false) {
            this.currentNode.removeAttribute("data-category");
          }

          this.currentNode.setAttribute("data-category", this.categoryName);
        }
      }]);

      return InsertCategoryAttributeService;
    }();

    InsertCategoryAttributeService.ɵfac = function InsertCategoryAttributeService_Factory(t) {
      return new (t || InsertCategoryAttributeService)();
    };

    InsertCategoryAttributeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InsertCategoryAttributeService,
      factory: InsertCategoryAttributeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsertCategoryAttributeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    //http://localhost:50001/'


    var environment = {
      production: false,
      baseUrl: 'http://localhost:63976/api/',
      sharepointbaseUrl: 'https://tzbl.zbizlink.com/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\RFPParser_trail\Zdaas.RFPClient\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map