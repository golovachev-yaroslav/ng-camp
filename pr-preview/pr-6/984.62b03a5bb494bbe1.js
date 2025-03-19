"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[984],{

/***/ 1984:
/*!********************************************************************************************!*\
  !*** ./apps/angular/src/app/features/auth/components/layout/base/base-layout.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLayoutComponent: () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _js_camp_angular_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/shared/components/header/header.component */ 7295);
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
        consts: [[1, "auth-layout"]],
        template: function BaseLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "camp-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _js_camp_angular_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        styles: [".auth-layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}"]
      });
    }
  }
  return BaseLayoutComponent;
})();

/***/ })

}]);