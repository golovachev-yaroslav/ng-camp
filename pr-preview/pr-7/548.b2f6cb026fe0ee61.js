"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[548],{

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
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 7212);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 7222);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6182);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9344);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 2221);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 2583);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 5670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4526);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8823);
/* harmony import */ var _js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/core/utils/form-validation */ 58);
/* harmony import */ var _js_camp_angular_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/angular/core/services/auth.service */ 2152);

















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
      this.snackBar = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar);
      this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_js_camp_angular_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
      /** Form builder. */
      this.formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NonNullableFormBuilder);
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
        email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
        firstName: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        lastName: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        password: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(this.passwordMinLength)]),
        confirmPassword: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(this.passwordMinLength)])
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
      this.authService.register(this.registerForm.getRawValue()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(errors => {
        this.isLoading.set(false);
        _js_camp_angular_core_utils_form_validation__WEBPACK_IMPORTED_MODULE_0__.FormValidation.fillFormWithError(this.registerForm, errors);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => errors);
      })).subscribe(() => {
        this.snackBar.open('Register has been completed.', undefined, {
          duration: 3000
        });
        this.router.navigate(['/']);
      });
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
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton],
        styles: [".host[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n\n.input-text[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.input-text[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  appearance: textfield;\n}"]
      });
    }
  }
  return RegisterFormComponent;
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

/***/ 5670:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/snack-bar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SNACK_BAR_DATA: () => (/* binding */ MAT_SNACK_BAR_DATA),
/* harmony export */   MAT_SNACK_BAR_DEFAULT_OPTIONS: () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS),
/* harmony export */   MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MatSnackBar: () => (/* binding */ MatSnackBar),
/* harmony export */   MatSnackBarAction: () => (/* binding */ MatSnackBarAction),
/* harmony export */   MatSnackBarActions: () => (/* binding */ MatSnackBarActions),
/* harmony export */   MatSnackBarConfig: () => (/* binding */ MatSnackBarConfig),
/* harmony export */   MatSnackBarContainer: () => (/* binding */ MatSnackBarContainer),
/* harmony export */   MatSnackBarLabel: () => (/* binding */ MatSnackBarLabel),
/* harmony export */   MatSnackBarModule: () => (/* binding */ MatSnackBarModule),
/* harmony export */   MatSnackBarRef: () => (/* binding */ MatSnackBarRef),
/* harmony export */   SimpleSnackBar: () => (/* binding */ SimpleSnackBar),
/* harmony export */   matSnackBarAnimations: () => (/* binding */ matSnackBarAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 2221);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 194);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 6810);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 1992);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 814);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 4212);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 3788);
















/** Maximum amount of milliseconds that can be passed into setTimeout. */
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.action, " ");
  }
}
const _c0 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {}
const MAX_TIMEOUT = /*#__PURE__*/Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
class MatSnackBarRef {
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    /** Subject for notifying the user that the snack bar has been dismissed. */
    this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar has opened and appeared. */
    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar action was called. */
    this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether the snack bar was dismissed using the action button. */
    this._dismissedByAction = false;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    // Note that we need to cap the duration to the maximum value for setTimeout, because
    // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
}

/** Injection token that can be used to access the data that was passed in to a snack bar. */
const MAT_SNACK_BAR_DATA = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 */
class MatSnackBarConfig {
  constructor() {
    /** The politeness level for the MatAriaLiveAnnouncer announcement. */
    this.politeness = 'assertive';
    /**
     * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
     * component or template, the announcement message will default to the specified message.
     */
    this.announcementMessage = '';
    /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
    this.duration = 0;
    /** Data being injected into the child component. */
    this.data = null;
    /** The horizontal position to place the snack bar. */
    this.horizontalPosition = 'center';
    /** The vertical position to place the snack bar. */
    this.verticalPosition = 'bottom';
  }
}

/** Directive that should be applied to the text element to be rendered in the snack bar. */
let MatSnackBarLabel = /*#__PURE__*/(() => {
  class MatSnackBarLabel {
    static {
      this.ɵfac = function MatSnackBarLabel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSnackBarLabel)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSnackBarLabel,
        selectors: [["", "matSnackBarLabel", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
        standalone: true
      });
    }
  }
  return MatSnackBarLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Directive that should be applied to the element containing the snack bar's action buttons. */
let MatSnackBarActions = /*#__PURE__*/(() => {
  class MatSnackBarActions {
    static {
      this.ɵfac = function MatSnackBarActions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSnackBarActions)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSnackBarActions,
        selectors: [["", "matSnackBarActions", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
        standalone: true
      });
    }
  }
  return MatSnackBarActions;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Directive that should be applied to each of the snack bar's action buttons. */
let MatSnackBarAction = /*#__PURE__*/(() => {
  class MatSnackBarAction {
    static {
      this.ɵfac = function MatSnackBarAction_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSnackBarAction)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSnackBarAction,
        selectors: [["", "matSnackBarAction", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
        standalone: true
      });
    }
  }
  return MatSnackBarAction;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SimpleSnackBar = /*#__PURE__*/(() => {
  class SimpleSnackBar {
    constructor(snackBarRef, data) {
      this.snackBarRef = snackBarRef;
      this.data = data;
    }
    /** Performs the action on the snack bar. */
    action() {
      this.snackBarRef.dismissWithAction();
    }
    /** If the action button should be shown. */
    get hasAction() {
      return !!this.data.action;
    }
    static {
      this.ɵfac = function SimpleSnackBar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SimpleSnackBar,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-mdc-simple-snack-bar"],
        exportAs: ["matSnackBar"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 2,
        consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"]],
        template: function SimpleSnackBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.hasAction ? 2 : -1);
          }
        },
        dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
        styles: [".mat-mdc-simple-snack-bar{display:flex}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return SimpleSnackBar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
const matSnackBarAnimations = {
  /** Animation that shows and hides a snack bar. */
  snackBarState: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('state', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('void, hidden', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    transform: 'scale(1)',
    opacity: 1
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => visible', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void, * => hidden', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('75ms cubic-bezier(0.4, 0.0, 1, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0
  })))])
};
let uniqueId = 0;
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
let MatSnackBarContainer = /*#__PURE__*/(() => {
  class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.BasePortalOutlet {
    constructor(_ngZone, _elementRef, _changeDetectorRef, _platform, /** The snack bar configuration. */
    snackBarConfig) {
      super();
      this._ngZone = _ngZone;
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._platform = _platform;
      this.snackBarConfig = snackBarConfig;
      this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
      this._trackedModals = new Set();
      /** The number of milliseconds to wait before announcing the snack bar's content. */
      this._announceDelay = 150;
      /** Whether the component has been destroyed. */
      this._destroyed = false;
      /** Subject for notifying that the snack bar has announced to screen readers. */
      this._onAnnounce = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Subject for notifying that the snack bar has exited from view. */
      this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Subject for notifying that the snack bar has finished entering the view. */
      this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** The state of the snack bar animations. */
      this._animationState = 'void';
      /** Unique ID of the aria-live element. */
      this._liveElementId = `mat-snack-bar-container-live-${uniqueId++}`;
      /**
       * Attaches a DOM portal to the snack bar container.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      this.attachDomPortal = portal => {
        this._assertNotAttached();
        const result = this._portalOutlet.attachDomPortal(portal);
        this._afterPortalAttached();
        return result;
      };
      // Use aria-live rather than a live role like 'alert' or 'status'
      // because NVDA and JAWS have show inconsistent behavior with live roles.
      if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
        this._live = 'assertive';
      } else if (snackBarConfig.politeness === 'off') {
        this._live = 'off';
      } else {
        this._live = 'polite';
      }
      // Only set role for Firefox. Set role based on aria-live because setting role="alert" implies
      // aria-live="assertive" which may cause issues if aria-live is set to "polite" above.
      if (this._platform.FIREFOX) {
        if (this._live === 'polite') {
          this._role = 'status';
        }
        if (this._live === 'assertive') {
          this._role = 'alert';
        }
      }
    }
    /** Attach a component portal as content to this snack bar container. */
    attachComponentPortal(portal) {
      this._assertNotAttached();
      const result = this._portalOutlet.attachComponentPortal(portal);
      this._afterPortalAttached();
      return result;
    }
    /** Attach a template portal as content to this snack bar container. */
    attachTemplatePortal(portal) {
      this._assertNotAttached();
      const result = this._portalOutlet.attachTemplatePortal(portal);
      this._afterPortalAttached();
      return result;
    }
    /** Handle end of animations, updating the state of the snackbar. */
    onAnimationEnd(event) {
      const {
        fromState,
        toState
      } = event;
      if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
        this._completeExit();
      }
      if (toState === 'visible') {
        // Note: we shouldn't use `this` inside the zone callback,
        // because it can cause a memory leak.
        const onEnter = this._onEnter;
        this._ngZone.run(() => {
          onEnter.next();
          onEnter.complete();
        });
      }
    }
    /** Begin animation of snack bar entrance into view. */
    enter() {
      if (!this._destroyed) {
        this._animationState = 'visible';
        // _animationState lives in host bindings and `detectChanges` does not refresh host bindings
        // so we have to call `markForCheck` to ensure the host view is refreshed eventually.
        this._changeDetectorRef.markForCheck();
        this._changeDetectorRef.detectChanges();
        this._screenReaderAnnounce();
      }
    }
    /** Begin animation of the snack bar exiting from view. */
    exit() {
      // It's common for snack bars to be opened by random outside calls like HTTP requests or
      // errors. Run inside the NgZone to ensure that it functions correctly.
      this._ngZone.run(() => {
        // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
        // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
        // `MatSnackBar.open`).
        this._animationState = 'hidden';
        this._changeDetectorRef.markForCheck();
        // Mark this element with an 'exit' attribute to indicate that the snackbar has
        // been dismissed and will soon be removed from the DOM. This is used by the snackbar
        // test harness.
        this._elementRef.nativeElement.setAttribute('mat-exit', '');
        // If the snack bar hasn't been announced by the time it exits it wouldn't have been open
        // long enough to visually read it either, so clear the timeout for announcing.
        clearTimeout(this._announceTimeoutId);
      });
      return this._onExit;
    }
    /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
    ngOnDestroy() {
      this._destroyed = true;
      this._clearFromModals();
      this._completeExit();
    }
    /**
     * Removes the element in a microtask. Helps prevent errors where we end up
     * removing an element which is in the middle of an animation.
     */
    _completeExit() {
      queueMicrotask(() => {
        this._onExit.next();
        this._onExit.complete();
      });
    }
    /**
     * Called after the portal contents have been attached. Can be
     * used to modify the DOM once it's guaranteed to be in place.
     */
    _afterPortalAttached() {
      const element = this._elementRef.nativeElement;
      const panelClasses = this.snackBarConfig.panelClass;
      if (panelClasses) {
        if (Array.isArray(panelClasses)) {
          // Note that we can't use a spread here, because IE doesn't support multiple arguments.
          panelClasses.forEach(cssClass => element.classList.add(cssClass));
        } else {
          element.classList.add(panelClasses);
        }
      }
      this._exposeToModals();
      // Check to see if the attached component or template uses the MDC template structure,
      // specifically the MDC label. If not, the container should apply the MDC label class to this
      // component's label container, which will apply MDC's label styles to the attached view.
      const label = this._label.nativeElement;
      const labelClass = 'mdc-snackbar__label';
      label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
    }
    /**
     * Some browsers won't expose the accessibility node of the live element if there is an
     * `aria-modal` and the live element is outside of it. This method works around the issue by
     * pointing the `aria-owns` of all modals to the live element.
     */
    _exposeToModals() {
      // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with the
      // `LiveAnnouncer` and any other usages.
      //
      // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
      // section of the DOM we need to look through. This should cover all the cases we support, but
      // the selector can be expanded if it turns out to be too narrow.
      const id = this._liveElementId;
      const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
      for (let i = 0; i < modals.length; i++) {
        const modal = modals[i];
        const ariaOwns = modal.getAttribute('aria-owns');
        this._trackedModals.add(modal);
        if (!ariaOwns) {
          modal.setAttribute('aria-owns', id);
        } else if (ariaOwns.indexOf(id) === -1) {
          modal.setAttribute('aria-owns', ariaOwns + ' ' + id);
        }
      }
    }
    /** Clears the references to the live element from any modals it was added to. */
    _clearFromModals() {
      this._trackedModals.forEach(modal => {
        const ariaOwns = modal.getAttribute('aria-owns');
        if (ariaOwns) {
          const newValue = ariaOwns.replace(this._liveElementId, '').trim();
          if (newValue.length > 0) {
            modal.setAttribute('aria-owns', newValue);
          } else {
            modal.removeAttribute('aria-owns');
          }
        }
      });
      this._trackedModals.clear();
    }
    /** Asserts that no content is already attached to the container. */
    _assertNotAttached() {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Attempting to attach snack bar content after content is already attached');
      }
    }
    /**
     * Starts a timeout to move the snack bar content to the live region so screen readers will
     * announce it.
     */
    _screenReaderAnnounce() {
      if (!this._announceTimeoutId) {
        this._ngZone.runOutsideAngular(() => {
          this._announceTimeoutId = setTimeout(() => {
            const inertElement = this._elementRef.nativeElement.querySelector('[aria-hidden]');
            const liveElement = this._elementRef.nativeElement.querySelector('[aria-live]');
            if (inertElement && liveElement) {
              // If an element in the snack bar content is focused before being moved
              // track it and restore focus after moving to the live region.
              let focusedElement = null;
              if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
                focusedElement = document.activeElement;
              }
              inertElement.removeAttribute('aria-hidden');
              liveElement.appendChild(inertElement);
              focusedElement?.focus();
              this._onAnnounce.next();
              this._onAnnounce.complete();
            }
          }, this._announceDelay);
        });
      }
    }
    static {
      this.ɵfac = function MatSnackBarContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarConfig));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSnackBarContainer,
        selectors: [["mat-snack-bar-container"]],
        viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container"],
        hostVars: 1,
        hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
              return ctx.onAnimationEnd($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 6,
        vars: 3,
        consts: [["label", ""], [1, "mdc-snackbar__surface", "mat-mdc-snackbar-surface"], [1, "mat-mdc-snack-bar-label"], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
        template: function MatSnackBarContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
          }
        },
        dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet],
        styles: [".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-app-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-app-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-app-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-app-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-app-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-app-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],
        encapsulation: 2,
        data: {
          animation: [matSnackBarAnimations.snackBarState]
        }
      });
    }
  }
  return MatSnackBarContainer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** @docs-private */
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
/** Injection token that can be used to specify default snack bar. */
const MAT_SNACK_BAR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-snack-bar-default-options', {
  providedIn: 'root',
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
/**
 * Service to dispatch Material Design snack bar messages.
 */
let MatSnackBar = /*#__PURE__*/(() => {
  class MatSnackBar {
    /** Reference to the currently opened snackbar at *any* level. */
    get _openedSnackBarRef() {
      const parent = this._parentSnackBar;
      return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
    }
    set _openedSnackBarRef(value) {
      if (this._parentSnackBar) {
        this._parentSnackBar._openedSnackBarRef = value;
      } else {
        this._snackBarRefAtThisLevel = value;
      }
    }
    constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
      this._overlay = _overlay;
      this._live = _live;
      this._injector = _injector;
      this._breakpointObserver = _breakpointObserver;
      this._parentSnackBar = _parentSnackBar;
      this._defaultConfig = _defaultConfig;
      /**
       * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
       * If there is a parent snack-bar service, all operations should delegate to that parent
       * via `_openedSnackBarRef`.
       */
      this._snackBarRefAtThisLevel = null;
      /** The component that should be rendered as the snack bar's simple component. */
      this.simpleSnackBarComponent = SimpleSnackBar;
      /** The container component that attaches the provided template or component. */
      this.snackBarContainerComponent = MatSnackBarContainer;
      /** The CSS class to apply for handset mode. */
      this.handsetCssClass = 'mat-mdc-snack-bar-handset';
    }
    /**
     * Creates and dispatches a snack bar with a custom component for the content, removing any
     * currently opened snack bars.
     *
     * @param component Component to be instantiated.
     * @param config Extra configuration for the snack bar.
     */
    openFromComponent(component, config) {
      return this._attach(component, config);
    }
    /**
     * Creates and dispatches a snack bar with a custom template for the content, removing any
     * currently opened snack bars.
     *
     * @param template Template to be instantiated.
     * @param config Extra configuration for the snack bar.
     */
    openFromTemplate(template, config) {
      return this._attach(template, config);
    }
    /**
     * Opens a snackbar with a message and an optional action.
     * @param message The message to show in the snackbar.
     * @param action The label for the snackbar action.
     * @param config Additional configuration options for the snackbar.
     */
    open(message, action = '', config) {
      const _config = {
        ...this._defaultConfig,
        ...config
      };
      // Since the user doesn't have access to the component, we can
      // override the data to pass in our own message and action.
      _config.data = {
        message,
        action
      };
      // Since the snack bar has `role="alert"`, we don't
      // want to announce the same message twice.
      if (_config.announcementMessage === message) {
        _config.announcementMessage = undefined;
      }
      return this.openFromComponent(this.simpleSnackBarComponent, _config);
    }
    /**
     * Dismisses the currently-visible snack bar.
     */
    dismiss() {
      if (this._openedSnackBarRef) {
        this._openedSnackBarRef.dismiss();
      }
    }
    ngOnDestroy() {
      // Only dismiss the snack bar at the current level on destroy.
      if (this._snackBarRefAtThisLevel) {
        this._snackBarRefAtThisLevel.dismiss();
      }
    }
    /**
     * Attaches the snack bar container component to the overlay.
     */
    _attachSnackBarContainer(overlayRef, config) {
      const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
      const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
        parent: userInjector || this._injector,
        providers: [{
          provide: MatSnackBarConfig,
          useValue: config
        }]
      });
      const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
      const containerRef = overlayRef.attach(containerPortal);
      containerRef.instance.snackBarConfig = config;
      return containerRef.instance;
    }
    /**
     * Places a new component or a template as the content of the snack bar container.
     */
    _attach(content, userConfig) {
      const config = {
        ...new MatSnackBarConfig(),
        ...this._defaultConfig,
        ...userConfig
      };
      const overlayRef = this._createOverlay(config);
      const container = this._attachSnackBarContainer(overlayRef, config);
      const snackBarRef = new MatSnackBarRef(container, overlayRef);
      if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.TemplatePortal(content, null, {
          $implicit: config.data,
          snackBarRef
        });
        snackBarRef.instance = container.attachTemplatePortal(portal);
      } else {
        const injector = this._createInjector(config, snackBarRef);
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(content, undefined, injector);
        const contentRef = container.attachComponentPortal(portal);
        // We can't pass this via the injector, because the injector is created earlier.
        snackBarRef.instance = contentRef.instance;
      }
      // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
      // appropriate. This class is applied to the overlay element because the overlay must expand to
      // fill the width of the screen for full width snackbars.
      this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.HandsetPortrait).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(overlayRef.detachments())).subscribe(state => {
        overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
      });
      if (config.announcementMessage) {
        // Wait until the snack bar contents have been announced then deliver this message.
        container._onAnnounce.subscribe(() => {
          this._live.announce(config.announcementMessage, config.politeness);
        });
      }
      this._animateSnackBar(snackBarRef, config);
      this._openedSnackBarRef = snackBarRef;
      return this._openedSnackBarRef;
    }
    /** Animates the old snack bar out and the new one in. */
    _animateSnackBar(snackBarRef, config) {
      // When the snackbar is dismissed, clear the reference to it.
      snackBarRef.afterDismissed().subscribe(() => {
        // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
        if (this._openedSnackBarRef == snackBarRef) {
          this._openedSnackBarRef = null;
        }
        if (config.announcementMessage) {
          this._live.clear();
        }
      });
      if (this._openedSnackBarRef) {
        // If a snack bar is already in view, dismiss it and enter the
        // new snack bar after exit animation is complete.
        this._openedSnackBarRef.afterDismissed().subscribe(() => {
          snackBarRef.containerInstance.enter();
        });
        this._openedSnackBarRef.dismiss();
      } else {
        // If no snack bar is in view, enter the new snack bar.
        snackBarRef.containerInstance.enter();
      }
      // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
      if (config.duration && config.duration > 0) {
        snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
      }
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @param config The user-specified snack bar config.
     */
    _createOverlay(config) {
      const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayConfig();
      overlayConfig.direction = config.direction;
      let positionStrategy = this._overlay.position().global();
      // Set horizontal position.
      const isRtl = config.direction === 'rtl';
      const isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
      const isRight = !isLeft && config.horizontalPosition !== 'center';
      if (isLeft) {
        positionStrategy.left('0');
      } else if (isRight) {
        positionStrategy.right('0');
      } else {
        positionStrategy.centerHorizontally();
      }
      // Set horizontal position.
      if (config.verticalPosition === 'top') {
        positionStrategy.top('0');
      } else {
        positionStrategy.bottom('0');
      }
      overlayConfig.positionStrategy = positionStrategy;
      return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a snack bar component.
     * @param config Config that was used to create the snack bar.
     * @param snackBarRef Reference to the snack bar.
     */
    _createInjector(config, snackBarRef) {
      const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
        parent: userInjector || this._injector,
        providers: [{
          provide: MatSnackBarRef,
          useValue: snackBarRef
        }, {
          provide: MAT_SNACK_BAR_DATA,
          useValue: config.data
        }]
      });
    }
    static {
      this.ɵfac = function MatSnackBar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatSnackBar,
        factory: MatSnackBar.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MatSnackBar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
let MatSnackBarModule = /*#__PURE__*/(() => {
  class MatSnackBarModule {
    static {
      this.ɵfac = function MatSnackBarModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSnackBarModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSnackBarModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MatSnackBar],
        imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, SimpleSnackBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
      });
    }
  }
  return MatSnackBarModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=snack-bar.mjs.map

/***/ })

}]);