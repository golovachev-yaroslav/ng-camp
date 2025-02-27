"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[66],{

/***/ 2148:
/*!***********************************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/components/header/header.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 3550);
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
        decls: 3,
        vars: 0,
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar")(1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anime Application");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        },
        dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar],
        changeDetection: 0
      });
    }
  }
  return HeaderComponent;
})();

/***/ }),

/***/ 9066:
/*!****************************************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/components/layout/base-layout.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLayoutComponent: () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _js_camp_angular_app_features_anime_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/app/features/anime/components/header/header.component */ 2148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2978);



/** Base layout component. */
let BaseLayoutComponent = /*#__PURE__*/(() => {
  class BaseLayoutComponent {
    static {
      this.ɵfac = function BaseLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BaseLayoutComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BaseLayoutComponent,
        selectors: [["camp-base-layout"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 0,
        consts: [[1, "default-layout"]],
        template: function BaseLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "camp-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _js_camp_angular_app_features_anime_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        styles: [".default-layout[_ngcontent-%COMP%] {\n  padding: 0 var(--space-md);\n}"],
        changeDetection: 0
      });
    }
  }
  return BaseLayoutComponent;
})();

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