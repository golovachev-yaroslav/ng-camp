"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[685],{

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);



/** Routes object. */
const routes = [{
  title: 'Register',
  path: 'register',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(250), __webpack_require__.e(194), __webpack_require__.e(330), __webpack_require__.e(212), __webpack_require__.e(548)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register-page.component */ 2548)).then(m => m.RegisterPageComponent)
}, {
  title: 'Login',
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(250), __webpack_require__.e(194), __webpack_require__.e(330), __webpack_require__.e(368)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login-page.component */ 9368)).then(m => m.LoginPageComponent)
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
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RoutesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });
    }
  }
  return RoutesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutesModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ })

}]);