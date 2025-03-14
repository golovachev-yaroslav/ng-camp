"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[685],{

/***/ 5418:
/*!******************************************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/components/login-form/login-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginFormComponent: () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);


/** Login form component. */
let LoginFormComponent = /*#__PURE__*/(() => {
  class LoginFormComponent {
    static {
      this.ɵfac = function LoginFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LoginFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginFormComponent,
        selectors: [["camp-login-form"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 0,
        template: function LoginFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login-form works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
      });
    }
  }
  return LoginFormComponent;
})();

/***/ }),

/***/ 716:
/*!************************************************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/components/register-form/register-form.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterFormComponent: () => (/* binding */ RegisterFormComponent)
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
/* harmony import */ var _js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/core/utils/form-validation */ 58);
/* harmony import */ var _js_camp_angular_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/angular/core/services/auth.service */ 2152);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4526);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8823);
















function RegisterFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
function RegisterFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.registerForm.get("firstName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
function RegisterFormComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.registerForm.get("lastName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
function RegisterFormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
function RegisterFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Must be at least ", ctx_r0.passwordMinLength, " characters");
  }
}
function RegisterFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["invalid"]);
  }
}
function RegisterFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Must be at least ", ctx_r0.passwordMinLength, " characters");
  }
}
function RegisterFormComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password did not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
/** Register form component. */
let RegisterFormComponent = /*#__PURE__*/(() => {
  class RegisterFormComponent {
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
      /** Us hidden confirm password. */
      this.isHiddenConfirmPassword = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(true);
      /** Password minimal length. */
      this.passwordMinLength = 8;
      /** Register form group. */
      this.registerForm = this.formBuilder.group({
        email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
        firstName: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        lastName: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        password: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(this.passwordMinLength)]),
        confirmPassword: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(this.passwordMinLength)])
      }, {
        validators: [_js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__.FormValidation.matchControlValues('password', 'confirmPassword')]
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
    /**
     * Toggle confirm password.
     * @param event Mouse event.
     */
    onToggleConfirmPassword(event) {
      event.stopPropagation();
      this.isHiddenConfirmPassword.set(!this.isHiddenConfirmPassword());
    }
    /** Register a user. */
    onRegister() {
      if (this.registerForm.invalid) {
        return;
      }
      this.isLoading.set(true);
      this.authService.register(this.registerForm.getRawValue()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(errors => {
        this.isLoading.set(false);
        _js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__.FormValidation.fillFormWithError(this.registerForm, errors);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => errors);
      })).subscribe(() => this.router.navigate(['/']));
    }
    static {
      this.ɵfac = function RegisterFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RegisterFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: RegisterFormComponent,
        selectors: [["camp-register-form"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
        decls: 47,
        vars: 24,
        consts: [[1, "host", 3, "submit", "formGroup"], [1, "mat-title-large"], [1, "row"], [1, "cell-item-12"], [1, "full-width"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "type", "email", 1, "input-text"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstName", 1, "input-text"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastName", 1, "input-text"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 1, "input-text", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "placeholder", "Re-type Password", "formControlName", "confirmPassword", 1, "input-text", 3, "type"], ["mat-button", "", "type", "submit", 1, "full-width", 3, "disabled"]],
        template: function RegisterFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RegisterFormComponent_Template_form_submit_0_listener() {
              return ctx.onRegister();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Register a user");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RegisterFormComponent_Conditional_7_Template, 2, 0, "mat-error")(8, RegisterFormComponent_Conditional_8_Template, 2, 1, "mat-error")(9, RegisterFormComponent_Conditional_9_Template, 2, 0, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterFormComponent_Conditional_14_Template, 2, 0, "mat-error")(15, RegisterFormComponent_Conditional_15_Template, 2, 1, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RegisterFormComponent_Conditional_20_Template, 2, 0, "mat-error")(21, RegisterFormComponent_Conditional_21_Template, 2, 1, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2)(23, "div", 3)(24, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterFormComponent_Template_button_click_26_listener($event) {
              return ctx.onTogglePassword($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RegisterFormComponent_Conditional_29_Template, 2, 0, "mat-error")(30, RegisterFormComponent_Conditional_30_Template, 2, 1, "mat-error")(31, RegisterFormComponent_Conditional_31_Template, 2, 1, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2)(33, "div", 3)(34, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterFormComponent_Template_button_click_36_listener($event) {
              return ctx.onToggleConfirmPassword($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, RegisterFormComponent_Conditional_39_Template, 2, 0, "mat-error")(40, RegisterFormComponent_Conditional_40_Template, 2, 1, "mat-error")(41, RegisterFormComponent_Conditional_41_Template, 2, 1, "mat-error")(42, RegisterFormComponent_Conditional_42_Template, 2, 0, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 2)(44, "div", 3)(45, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            let tmp_7_0;
            let tmp_12_0;
            let tmp_13_0;
            let tmp_14_0;
            let tmp_19_0;
            let tmp_20_0;
            let tmp_21_0;
            let tmp_22_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_1_0 = ctx.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 7 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["invalid"]) ? 8 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]) ? 9 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_4_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 14 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_5_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["invalid"]) ? 15 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_6_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) ? 20 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_7_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["invalid"]) ? 21 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.isHiddenPassword() ? "password" : "text");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.isHiddenPassword());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isHiddenPassword() ? "visibility_off" : "visibility");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["required"]) ? 29 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_13_0 = ctx.registerForm.get("password")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["invalid"]) ? 30 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_14_0 = ctx.registerForm.get("password")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["minlength"]) ? 31 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.isHiddenConfirmPassword() ? "password" : "text");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.isHiddenConfirmPassword());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isHiddenConfirmPassword() ? "visibility_off" : "visibility");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_19_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]) ? 39 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_20_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors["invalid"]) ? 40 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_21_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["minlength"]) ? 41 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_22_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["matching"]) ? 42 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton],
        styles: [".host[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n\n.input-text[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.input-text[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  appearance: textfield;\n}"]
      });
    }
  }
  return RegisterFormComponent;
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

/***/ }),

/***/ 2548:
/*!**************************************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/pages/register/register-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageComponent: () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/register-form/register-form.component */ 716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2978);



/** Register page component. */
let RegisterPageComponent = /*#__PURE__*/(() => {
  class RegisterPageComponent {
    static {
      this.ɵfac = function RegisterPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RegisterPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterPageComponent,
        selectors: [["camp-register-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        template: function RegisterPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "camp-register-form");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_0__.RegisterFormComponent]
      });
    }
  }
  return RegisterPageComponent;
})();

/***/ }),

/***/ 5685:
/*!*************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/routes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoutesModule: () => (/* binding */ RoutesModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _pages_register_register_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/register/register-page.component */ 2548);
/* harmony import */ var _pages_login_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login-page.component */ 9368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2978);





/** Routes object. */
const routes = [{
  title: 'Register',
  path: 'register',
  component: _pages_register_register_page_component__WEBPACK_IMPORTED_MODULE_0__.RegisterPageComponent
}, {
  title: 'Login',
  path: 'login',
  component: _pages_login_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent
}];
/** Auth routes module. */
let RoutesModule = /*#__PURE__*/(() => {
  class RoutesModule {
    static {
      this.ɵfac = function RoutesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoutesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: RoutesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });
    }
  }
  return RoutesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoutesModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 2152:
/*!********************************************************!*\
  !*** ./apps/angular/src/core/services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6409);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4526);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8823);
/* harmony import */ var _js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/environments/environment */ 3110);
/* harmony import */ var _js_camp_core_mappers_user_secret_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/core/mappers/user-secret.mapper */ 4650);
/* harmony import */ var _js_camp_core_mappers_register_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-camp/core/mappers/register.mapper */ 3443);
/* harmony import */ var _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-camp/core/models/app-error */ 9917);








/** Endpoints for auth API. */
let AuthService = /*#__PURE__*/(() => {
  class AuthService {
    constructor() {
      this.httpService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient);
      /** Url for this service. */
      this.authApiUrl = `${_js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/v1/auth/`;
      /** Url for register a user. */
      this.registerApiUrl = `${this.authApiUrl}register/`;
    }
    /**
     * Register a user.
     * @param data Register data.
     */
    register(data) {
      return this.httpService.post(this.registerApiUrl, _js_camp_core_mappers_register_mapper__WEBPACK_IMPORTED_MODULE_2__.RegisterMapper.toDto(data)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(secretDto => _js_camp_core_mappers_user_secret_mapper__WEBPACK_IMPORTED_MODULE_1__.UserSecretMapper.fromDto(secretDto)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
          const mappedError = _js_camp_core_mappers_register_mapper__WEBPACK_IMPORTED_MODULE_2__.RegisterMapper.validationErrorFromDto(error.error.errors);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => new _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_3__.AppValidationError(error.message, mappedError));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => new Error('Unknown error'));
      }));
    }
    static {
      this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AuthService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AuthService;
})();

/***/ }),

/***/ 58:
/*!********************************************************!*\
  !*** ./apps/angular/src/core/utils/form-validation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormValidation: () => (/* binding */ FormValidation)
/* harmony export */ });
/* harmony import */ var _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/core/models/app-error */ 9917);

/** Form validation. */
class FormValidation {
  /**
   * Check equal values.
   * @param controlName First value to compare.
   * @param checkControlName Second value to compare.
   */
  static matchControlValues(controlName, checkControlName) {
    return controls => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({
          matching: true
        });
        return {
          matching: true
        };
      }
      return null;
    };
  }
  /**
   * Fill the form with error data.
   * @param form Form to fill.
   * @param errors Array of errors.
   */
  static fillFormWithError(form, errors) {
    if (errors instanceof _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_0__.AppValidationError && errors.validationData) {
      const controlKeys = Object.keys(form.controls);
      controlKeys.forEach(key => {
        const error = errors?.validationData?.[key];
        const control = form.controls[key];
        if (error && control) {
          control.setErrors({
            invalid: error
          });
        }
      });
    }
  }
}

/***/ }),

/***/ 3443:
/*!**********************************************!*\
  !*** ./libs/core/mappers/register.mapper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterMapper: () => (/* binding */ RegisterMapper)
/* harmony export */ });
/* harmony import */ var _utils_extract_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extract-error */ 1802);

/** Register mapper. */
var RegisterMapper;
(function (RegisterMapper) {
  /** @inheritdoc */
  function validationErrorFromDto(errorDto) {
    return {
      email: (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'email') || (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'unique'),
      lastName: (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'last_name'),
      firstName: (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'first_name'),
      password: (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'password_too_common') || (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'password') || (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'password_entirely_numeric')
    };
  }
  RegisterMapper.validationErrorFromDto = validationErrorFromDto;
  /**
   * Converts model to dto.
   * @param model User Secret model.
   */
  function toDto(model) {
    return {
      email: model.email,
      last_name: model.lastName,
      first_name: model.firstName,
      password: model.password
    };
  }
  RegisterMapper.toDto = toDto;
})(RegisterMapper || (RegisterMapper = {}));

/***/ }),

/***/ 4650:
/*!*************************************************!*\
  !*** ./libs/core/mappers/user-secret.mapper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSecretMapper: () => (/* binding */ UserSecretMapper)
/* harmony export */ });
/** User secret mapper. */
var UserSecretMapper;
(function (UserSecretMapper) {
  /**
   * Converts model to dto.
   * @param model User Secret model.
   */
  function toDto(model) {
    return {
      access: model.accessToken,
      refresh: model.refreshToken
    };
  }
  UserSecretMapper.toDto = toDto;
  /**
   * Converts dto to model.
   * @param dto User Secret DTO.
   */
  function fromDto(dto) {
    return {
      accessToken: dto.access,
      refreshToken: dto.refresh
    };
  }
  UserSecretMapper.fromDto = fromDto;
})(UserSecretMapper || (UserSecretMapper = {}));

/***/ }),

/***/ 9917:
/*!***************************************!*\
  !*** ./libs/core/models/app-error.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppError: () => (/* binding */ AppError),
/* harmony export */   AppValidationError: () => (/* binding */ AppValidationError)
/* harmony export */ });
/**
 * Common application error.
 */
class AppError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}
/**
 * Application validation error for certain Entity.
 */
class AppValidationError extends AppError {
  constructor(message, validationData) {
    super(message);
    this.validationData = validationData;
  }
}

/***/ }),

/***/ 1802:
/*!******************************************!*\
  !*** ./libs/core/utils/extract-error.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractErrorMessages: () => (/* binding */ extractErrorMessages)
/* harmony export */ });
/**
 * Finds and extract errors by attribute.
 * @param errorsDto Validation DTO errors.
 * @param attribute Attribute.
 */
function extractErrorMessages(errorsDto, attribute) {
  return errorsDto?.filter(errorDto => errorDto['code'] === attribute).map(errorDto => errorDto['detail']).join(' ');
}

/***/ })

}]);