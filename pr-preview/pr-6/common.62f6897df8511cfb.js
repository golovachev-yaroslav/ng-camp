"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[76],{

/***/ 2152:
/*!********************************************************!*\
  !*** ./apps/angular/src/core/services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6409);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4526);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8823);
/* harmony import */ var _js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/environments/environment */ 3110);
/* harmony import */ var _js_camp_core_mappers_user_secret_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/core/mappers/user-secret.mapper */ 4650);
/* harmony import */ var _js_camp_core_mappers_register_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-camp/core/mappers/register.mapper */ 3443);
/* harmony import */ var _js_camp_core_mappers_login_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-camp/core/mappers/login.mapper */ 1095);
/* harmony import */ var _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-camp/core/models/app-error */ 9917);









/** Endpoints for auth API. */
let AuthService = /*#__PURE__*/(() => {
  class AuthService {
    constructor() {
      this.httpService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient);
      /** Url for this service. */
      this.authApiUrl = `${_js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/v1/auth/`;
      /** Url for register a user. */
      this.registerApiUrl = `${this.authApiUrl}register/`;
      /** Url for login a user. */
      this.loginApiUrl = `${this.authApiUrl}login/`;
    }
    /**
     * Register a user.
     * @param data Register data.
     */
    register(data) {
      return this.httpService.post(this.registerApiUrl, _js_camp_core_mappers_register_mapper__WEBPACK_IMPORTED_MODULE_2__.RegisterMapper.toDto(data)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(secretDto => _js_camp_core_mappers_user_secret_mapper__WEBPACK_IMPORTED_MODULE_1__.UserSecretMapper.fromDto(secretDto)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
          const mappedError = _js_camp_core_mappers_register_mapper__WEBPACK_IMPORTED_MODULE_2__.RegisterMapper.validationErrorFromDto(error.error.errors);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => new _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_4__.AppValidationError(error.message, mappedError));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => new Error('Unknown error'));
      }));
    }
    /**
     * Login.
     * @param data Login data.
     */
    login(data) {
      return this.httpService.post(this.loginApiUrl, _js_camp_core_mappers_login_mapper__WEBPACK_IMPORTED_MODULE_3__.LoginMapper.toDto(data)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(secretDto => _js_camp_core_mappers_user_secret_mapper__WEBPACK_IMPORTED_MODULE_1__.UserSecretMapper.fromDto(secretDto)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
          const mappedError = _js_camp_core_mappers_login_mapper__WEBPACK_IMPORTED_MODULE_3__.LoginMapper.validationErrorFromDto(error.error.errors);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => new _js_camp_core_models_app_error__WEBPACK_IMPORTED_MODULE_4__.AppValidationError(error.message, mappedError));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => new Error('Unknown error'));
      }));
    }
    static {
      this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AuthService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
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

/***/ 7295:
/*!***********************************************************************!*\
  !*** ./apps/angular/src/shared/components/header/header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 3550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 2221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);





/** Header component. */
let HeaderComponent = /*#__PURE__*/(() => {
  class HeaderComponent {
    static {
      this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HeaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["camp-header"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 8,
        vars: 0,
        consts: [[1, "root"], ["mat-button", "", "routerLink", "/"], [1, "buttons"], ["mat-button", "", "color", "primary", "routerLink", "/auth/register", 1, "button"], ["mat-button", "", "color", "primary", "routerLink", "/auth/login", 1, "button"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anime Application");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
        },
        dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
        styles: [".root[_ngcontent-%COMP%] {\n  background-color: var(--mdc-switch-selected-focus-handle-color);\n  color: var(--mat-stepper-header-selected-state-icon-background-color);\n  margin-bottom: var(--space-md);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  .button {\n    margin: 0 var(--space-md);\n  }\n}"]
      });
    }
  }
  return HeaderComponent;
})();

/***/ }),

/***/ 1095:
/*!*******************************************!*\
  !*** ./libs/core/mappers/login.mapper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginMapper: () => (/* binding */ LoginMapper)
/* harmony export */ });
/* harmony import */ var _utils_extract_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extract-error */ 1802);

/** Login mapper. */
var LoginMapper;
(function (LoginMapper) {
  /** @inheritdoc */
  function validationErrorFromDto(errorDto) {
    return {
      email: (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'email') || (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'no_active_account'),
      password: (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'password') || (0,_utils_extract_error__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessages)(errorDto, 'password_entirely_numeric')
    };
  }
  LoginMapper.validationErrorFromDto = validationErrorFromDto;
  /**
   * Converts model to dto.
   * @param model User Secret model.
   */
  function toDto(model) {
    return {
      email: model.email,
      password: model.password
    };
  }
  LoginMapper.toDto = toDto;
})(LoginMapper || (LoginMapper = {}));

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

/***/ }),

/***/ 3550:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/toolbar.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatToolbar: () => (/* binding */ MatToolbar),
/* harmony export */   MatToolbarModule: () => (/* binding */ MatToolbarModule),
/* harmony export */   MatToolbarRow: () => (/* binding */ MatToolbarRow),
/* harmony export */   throwToolbarMixedModesError: () => (/* binding */ throwToolbarMixedModesError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 3788);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6610);





const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
let MatToolbarRow = /*#__PURE__*/(() => {
  class MatToolbarRow {
    static {
      this.ɵfac = function MatToolbarRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatToolbarRow)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: true
      });
    }
  }
  return MatToolbarRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatToolbar = /*#__PURE__*/(() => {
  class MatToolbar {
    constructor(_elementRef, _platform, document) {
      this._elementRef = _elementRef;
      this._platform = _platform;
      // TODO: make the document a required param when doing breaking changes.
      this._document = document;
    }
    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        this._checkToolbarMixedModes();
        this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
      }
    }
    /**
     * Throws an exception when developers are attempting to combine the different toolbar row modes.
     */
    _checkToolbarMixedModes() {
      if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        // Check if there are any other DOM nodes that can display content but aren't inside of
        // a <mat-toolbar-row> element.
        const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains('mat-toolbar-row'))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !!(node.textContent && node.textContent.trim()));
        if (isCombinedUsage) {
          throwToolbarMixedModesError();
        }
      }
    }
    static {
      this.ɵfac = function MatToolbar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatToolbar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}
let MatToolbarModule = /*#__PURE__*/(() => {
  class MatToolbarModule {
    static {
      this.ɵfac = function MatToolbarModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatToolbarModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatToolbarModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });
    }
  }
  return MatToolbarModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=toolbar.mjs.map

/***/ })

}]);