"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[368],{

/***/ 5418:
/*!******************************************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/components/login-form/login-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginFormComponent: () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 7212);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 7222);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6182);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9344);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 2221);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 2583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4526);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8823);
/* harmony import */ var _js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/core/utils/form-validation */ 58);
/* harmony import */ var _js_camp_angular_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/angular/core/services/auth.service */ 2152);
















function LoginFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
function LoginFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
/** Login form component. */
let LoginFormComponent = /*#__PURE__*/(() => {
  class LoginFormComponent {
    constructor() {
      this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_js_camp_angular_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
      /** Form builder. */
      this.formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NonNullableFormBuilder);
      /** Loading state. */
      this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
      /** Us hidden password. */
      this.isHiddenPassword = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(true);
      /** Login form group. */
      this.loginForm = this.formBuilder.group({
        email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
        password: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
      });
    }
    /**
     * Toggle password.
     * @param event Mouse event.
     */
    onTogglePassword(event) {
      event.stopPropagation();
      this.isHiddenPassword.set(!this.isHiddenPassword());
    }
    /** Login. */
    onLogin() {
      if (this.loginForm.invalid) {
        return;
      }
      this.isLoading.set(true);
      this.authService.login(this.loginForm.getRawValue()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(errors => {
        this.isLoading.set(false);
        _js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__.FormValidation.fillFormWithError(this.loginForm, errors);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => errors);
      })).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
    static {
      this.ɵfac = function LoginFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LoginFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: LoginFormComponent,
        selectors: [["camp-login-form"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
        decls: 23,
        vars: 11,
        consts: [[1, "host", 3, "submit", "formGroup"], [1, "mat-title-large"], [1, "row"], [1, "cell-item-12"], [1, "full-width"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "type", "email", 1, "input-text"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 1, "input-text", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 1, "full-width", 3, "disabled"]],
        template: function LoginFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginFormComponent_Template_form_submit_0_listener() {
              return ctx.onLogin();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LoginFormComponent_Conditional_7_Template, 2, 0, "mat-error")(8, LoginFormComponent_Conditional_8_Template, 2, 1, "mat-error")(9, LoginFormComponent_Conditional_9_Template, 2, 0, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_14_listener($event) {
              return ctx.onTogglePassword($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginFormComponent_Conditional_17_Template, 2, 0, "mat-error")(18, LoginFormComponent_Conditional_18_Template, 2, 1, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 2)(20, "div", 3)(21, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            let tmp_8_0;
            let tmp_9_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 7 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["invalid"]) ? 8 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]) ? 9 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.isHiddenPassword() ? "password" : "text");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.isHiddenPassword());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isHiddenPassword() ? "visibility_off" : "visibility");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]) ? 17 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["invalid"]) ? 18 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton],
        styles: [".host[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n\n.input-text[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.input-text[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  appearance: textfield;\n}"]
      });
    }
  }
  return LoginFormComponent;
})();

/***/ }),

/***/ 9368:
/*!********************************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/pages/login/login-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/login-form/login-form.component */ 5418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2978);



/** Login page component. */
let LoginPageComponent = /*#__PURE__*/(() => {
  class LoginPageComponent {
    static {
      this.ɵfac = function LoginPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LoginPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginPageComponent,
        selectors: [["camp-login-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        template: function LoginPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "camp-login-form");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__.LoginFormComponent]
      });
    }
  }
  return LoginPageComponent;
})();

/***/ })

}]);