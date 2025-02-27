"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[773],{

/***/ 9404:
/*!*****************************************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/pages/dashboard/dashboard-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPageComponent: () => (/* binding */ DashboardPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 8403);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1640);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 7212);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6347);
/* harmony import */ var _js_camp_angular_core_services_anime_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/core/services/anime.service */ 6654);











function DashboardPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-spinner", 0);
  }
}
function DashboardPageComponent_Conditional_2_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
  }
}
function DashboardPageComponent_Conditional_2_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
  }
}
function DashboardPageComponent_Conditional_2_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 15);
  }
}
function DashboardPageComponent_Conditional_2_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", anime_r1.poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", anime_r1.name);
  }
}
function DashboardPageComponent_Conditional_2_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_2_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", anime_r2.titleEnglish, " ");
  }
}
function DashboardPageComponent_Conditional_2_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title Japanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_2_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", anime_r3.titleJapanese, " ");
  }
}
function DashboardPageComponent_Conditional_2_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title Japanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_2_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, anime_r4.aired.start), " ");
  }
}
function DashboardPageComponent_Conditional_2_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_2_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", anime_r5.type, " ");
  }
}
function DashboardPageComponent_Conditional_2_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_2_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", anime_r6.status, " ");
  }
}
function DashboardPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardPageComponent_Conditional_2_tr_2_Template, 1, 0, "tr", 3)(3, DashboardPageComponent_Conditional_2_tr_3_Template, 1, 0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardPageComponent_Conditional_2_th_5_Template, 1, 0, "th", 6)(6, DashboardPageComponent_Conditional_2_td_6_Template, 2, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardPageComponent_Conditional_2_th_8_Template, 2, 0, "th", 6)(9, DashboardPageComponent_Conditional_2_td_9_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardPageComponent_Conditional_2_th_11_Template, 2, 0, "th", 6)(12, DashboardPageComponent_Conditional_2_td_12_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DashboardPageComponent_Conditional_2_th_14_Template, 2, 0, "th", 6)(15, DashboardPageComponent_Conditional_2_td_15_Template, 3, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DashboardPageComponent_Conditional_2_th_17_Template, 2, 0, "th", 6)(18, DashboardPageComponent_Conditional_2_td_18_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DashboardPageComponent_Conditional_2_th_20_Template, 2, 0, "th", 6)(21, DashboardPageComponent_Conditional_2_td_21_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
  }
}
/** Dashboard page component. */
let DashboardPageComponent = /*#__PURE__*/(() => {
  class DashboardPageComponent {
    constructor() {
      /** Loading state. */
      this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
      this.animeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_js_camp_angular_core_services_anime_service__WEBPACK_IMPORTED_MODULE_0__.AnimeService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
      /** Columns. */
      this.displayedColumns = ['poster', 'titleEnglish', 'titleJapanese', 'airedStart', 'type', 'status'];
      this.animes$ = this.createAnimeStream();
    }
    createAnimeStream() {
      this.isLoading$.next(true);
      return this.animeService.getAnimeList().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.isLoading$.next(false)));
    }
    static {
      this.ɵfac = function DashboardPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DashboardPageComponent,
        selectors: [["camp-dashboard-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 6,
        consts: [["color", "primary", "mode", "indeterminate", "diameter", "36", 1, "spinner"], [1, "table-wrapper"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "poster"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "titleEnglish"], ["matColumnDef", "titleJapanese"], ["matColumnDef", "airedStart"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", ""], ["mat-cell", ""], [1, "poster", 3, "src", "alt"]],
        template: function DashboardPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DashboardPageComponent_Conditional_0_Template, 1, 0, "mat-progress-spinner", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardPageComponent_Conditional_2_Template, 22, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
          }
          if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.isLoading$)) ? 0 : -1, tmp_0_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.animes$)) ? 2 : -1, tmp_1_0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner],
        styles: [".table-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.poster[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  padding: 8px;\n  object-fit: contain;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}"],
        changeDetection: 0
      });
    }
  }
  return DashboardPageComponent;
})();

/***/ }),

/***/ 2432:
/*!*************************************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/pages/details/details-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsPageComponent: () => (/* binding */ DetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);


/** Anime details page component. */
let DetailsPageComponent = /*#__PURE__*/(() => {
  class DetailsPageComponent {
    static {
      this.ɵfac = function DetailsPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DetailsPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DetailsPageComponent,
        selectors: [["camp-details-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 0,
        template: function DetailsPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "details-page works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
        changeDetection: 0
      });
    }
  }
  return DetailsPageComponent;
})();

/***/ }),

/***/ 4773:
/*!**************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/routes.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoutesModule: () => (/* binding */ RoutesModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _pages_dashboard_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard-page.component */ 9404);
/* harmony import */ var _pages_details_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/details/details-page.component */ 2432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2978);





/** Routes object. */
const routes = [{
  path: '',
  component: _pages_dashboard_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__.DashboardPageComponent
}, {
  path: ':id',
  component: _pages_details_details_page_component__WEBPACK_IMPORTED_MODULE_1__.DetailsPageComponent
}];
/** Anime routes module. */
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

/***/ 6654:
/*!*********************************************************!*\
  !*** ./apps/angular/src/core/services/anime.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimeService: () => (/* binding */ AnimeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6409);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3527);
/* harmony import */ var _js_camp_core_mappers_anime_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/core/mappers/anime.mapper */ 228);
/* harmony import */ var _js_camp_core_mappers_pagination_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/core/mappers/pagination.mapper */ 1012);
/* harmony import */ var _js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-camp/angular/environments/environment */ 3110);







/** Endpoints for anime API. */
let AnimeService = /*#__PURE__*/(() => {
  class AnimeService {
    constructor() {
      this.httpService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
      /** Url for this service. */
      this.animeApiUrl = `${_js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/api/v1/anime/`;
    }
    /**
     * Get anime list from server.
     */
    getAnimeList() {
      return this.httpService.get(this.animeApiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => _js_camp_core_mappers_pagination_mapper__WEBPACK_IMPORTED_MODULE_1__.PaginationMapper.fromDto(data, _js_camp_core_mappers_anime_mapper__WEBPACK_IMPORTED_MODULE_0__.AnimeMapper.fromDto)));
    }
    static {
      this.ɵfac = function AnimeService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AnimeService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AnimeService,
        factory: AnimeService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AnimeService;
})();

/***/ }),

/***/ 8679:
/*!*******************************************!*\
  !*** ./libs/core/mappers/aired.mapper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiredMapper: () => (/* binding */ AiredMapper)
/* harmony export */ });
var AiredMapper;
(function (AiredMapper) {
  /**
   * Convert aired from model to DTO.
   * @param model Aired.
   */
  function toDto(model) {
    return {
      start: model.start?.toISOString() ?? null,
      end: model.end?.toISOString() ?? null
    };
  }
  AiredMapper.toDto = toDto;
  /**
   * Convert aired from DTO to mode.
   * @param dto Aired DTO.
   */
  function fromDto(dto) {
    return {
      start: dto.start ? new Date(dto.start) : null,
      end: dto.end ? new Date(dto.end) : null
    };
  }
  AiredMapper.fromDto = fromDto;
})(AiredMapper || (AiredMapper = {}));

/***/ }),

/***/ 228:
/*!*******************************************!*\
  !*** ./libs/core/mappers/anime.mapper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimeMapper: () => (/* binding */ AnimeMapper)
/* harmony export */ });
/* harmony import */ var _models_anime_anime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/anime/anime */ 3158);
/* harmony import */ var _aired_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aired.mapper */ 8679);


var AnimeMapper;
(function (AnimeMapper) {
  /**
   * Maps dto to model.
   * @param dto Anime dto.
   */
  function fromDto(dto) {
    return new _models_anime_anime__WEBPACK_IMPORTED_MODULE_0__.Anime({
      id: dto.id,
      created: new Date(dto.created),
      modified: new Date(dto.modified),
      score: dto.score,
      userScore: dto.user_score,
      titleEnglish: dto.title_eng,
      titleJapanese: dto.title_jpn,
      poster: dto.image,
      type: dto.type,
      status: dto.status,
      aired: _aired_mapper__WEBPACK_IMPORTED_MODULE_1__.AiredMapper.fromDto(dto.aired)
    });
  }
  AnimeMapper.fromDto = fromDto;
})(AnimeMapper || (AnimeMapper = {}));

/***/ }),

/***/ 1012:
/*!************************************************!*\
  !*** ./libs/core/mappers/pagination.mapper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationMapper: () => (/* binding */ PaginationMapper)
/* harmony export */ });
/** Pagination mapper. */
var PaginationMapper;
(function (PaginationMapper) {
  /**
   * Converts pagination DTO to pagination model.
   * @param pagination DTO.
   * @param dtoMapper Mapper DTO to model.
   */
  function fromDto(pagination, dtoMapper) {
    return {
      count: pagination.count,
      next: pagination.next,
      previous: pagination.previous,
      items: pagination.results.map(item => dtoMapper(item))
    };
  }
  PaginationMapper.fromDto = fromDto;
})(PaginationMapper || (PaginationMapper = {}));

/***/ }),

/***/ 3158:
/*!*****************************************!*\
  !*** ./libs/core/models/anime/anime.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anime: () => (/* binding */ Anime)
/* harmony export */ });
/** Anime. */
class Anime {
  constructor(data) {
    this.id = data.id;
    this.titleEnglish = data.titleEnglish;
    this.titleJapanese = data.titleJapanese;
    this.poster = data.poster;
    this.created = data.created;
    this.modified = data.modified;
    this.type = data.type;
    this.status = data.status;
    this.aired = data.aired;
    this.score = data.score;
    this.userScore = data.userScore;
  }
}

/***/ }),

/***/ 9090:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 907);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 4808);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ 8129:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEvent: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 8621);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 9406);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 7567);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 5206);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 4418);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 6219);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 2489:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 3806);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 8621);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 8448);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 2363);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 333);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 2708:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 9406);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 4929);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 1677);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 7786);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 594:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audit: () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 9867);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 8621);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 6111);



function audit(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    let isComplete = false;
    const endDuration = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
      isComplete && subscriber.complete();
    };
    const cleanupDuration = () => {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      lastValue = value;
      if (!durationSubscriber) {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, endDuration, cleanupDuration));
      }
    }, () => {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ 5271:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auditTime: () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 4929);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 594);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 2708);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ 7769:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pairwise: () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 9867);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 6111);


function pairwise() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let prev;
    let hasPrev = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      const p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
      hasPrev = true;
    }));
  });
}
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ 7782:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/share.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   share: () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 8621);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 907);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 1421);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 9867);




function share(options = {}) {
  const {
    connector = () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject(),
    resetOnError = true,
    resetOnComplete = true,
    resetOnRefCountZero = true
  } = options;
  return wrapperSource => {
    let connection;
    let resetConnection;
    let subject;
    let refCount = 0;
    let hasCompleted = false;
    let hasErrored = false;
    const cancelReset = () => {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = undefined;
    };
    const reset = () => {
      cancelReset();
      connection = subject = undefined;
      hasCompleted = hasErrored = false;
    };
    const resetAndUnsubscribe = () => {
      const conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(() => {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
          next: value => dest.next(value),
          error: err => {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: () => {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on, ...args) {
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  const onSubscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
    next: () => {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(on(...args)).subscribe(onSubscriber);
}
//# sourceMappingURL=share.js.map

/***/ }),

/***/ 6661:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 9090);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 7782);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ 2460:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrameAction: () => (/* binding */ AnimationFrameAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 7243);
/* harmony import */ var _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrameProvider */ 4744);


class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.requestAnimationFrame(() => scheduler.flush(undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = undefined;
    }
    return undefined;
  }
}
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ 9125:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrameScheduler: () => (/* binding */ AnimationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 24);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ 9894:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapAction: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 7243);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./immediateProvider */ 3802);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 9555:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapScheduler: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 24);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 3854:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFrame: () => (/* binding */ animationFrame),
/* harmony export */   animationFrameScheduler: () => (/* binding */ animationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 2460);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 9125);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ 4744:
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrameProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFrameProvider: () => (/* binding */ animationFrameProvider)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2486);

const animationFrameProvider = {
  schedule(callback) {
    let request = requestAnimationFrame;
    let cancel = cancelAnimationFrame;
    const {
      delegate
    } = animationFrameProvider;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    const handle = request(timestamp => {
      cancel = undefined;
      callback(timestamp);
    });
    return new _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription(() => cancel === null || cancel === void 0 ? void 0 : cancel(handle));
  },
  requestAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame)(...args);
  },
  cancelAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame)(...args);
  },
  delegate: undefined
};
//# sourceMappingURL=animationFrameProvider.js.map

/***/ }),

/***/ 1828:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asap: () => (/* binding */ asap),
/* harmony export */   asapScheduler: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 9894);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 9555);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 3802:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   immediateProvider: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ 6101);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ 6101:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate),
/* harmony export */   TestTools: () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 7786:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 2067:
/*!************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/collections.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayDataSource: () => (/* binding */ ArrayDataSource),
/* harmony export */   DataSource: () => (/* binding */ DataSource),
/* harmony export */   SelectionModel: () => (/* binding */ SelectionModel),
/* harmony export */   UniqueSelectionDispatcher: () => (/* binding */ UniqueSelectionDispatcher),
/* harmony export */   _DisposeViewRepeaterStrategy: () => (/* binding */ _DisposeViewRepeaterStrategy),
/* harmony export */   _RecycleViewRepeaterStrategy: () => (/* binding */ _RecycleViewRepeaterStrategy),
/* harmony export */   _VIEW_REPEATER_STRATEGY: () => (/* binding */ _VIEW_REPEATER_STRATEGY),
/* harmony export */   _ViewRepeaterOperation: () => (/* binding */ _ViewRepeaterOperation),
/* harmony export */   getMultipleValuesInSingleSelectionError: () => (/* binding */ getMultipleValuesInSingleSelectionError),
/* harmony export */   isDataSource: () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9086);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2978);



class DataSource {}
/** Checks whether an object is a data source. */
function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource. We also can't use `isObservable`
  // here, because of some internal apps.
  return value && typeof value.connect === 'function' && !(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.ConnectableObservable);
}

/** DataSource wrapper for a native array. */
class ArrayDataSource extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(this._data) ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this._data);
  }
  disconnect() {}
}

/** Indicates how a view was changed by a {@link _ViewRepeater}. */
var _ViewRepeaterOperation = /*#__PURE__*/function (_ViewRepeaterOperation) {
  /** The content of an existing view was replaced with another item. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
  /** A new view was created with `createEmbeddedView`. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
  /** The position of a view changed, but the content remains the same. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
  /** A view was detached from the view container. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
  return _ViewRepeaterOperation;
}(_ViewRepeaterOperation || {});
/**
 * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
 * @docs-private
 */
const _VIEW_REPEATER_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('_ViewRepeater');

/**
 * A repeater that destroys views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _DisposeViewRepeaterStrategy {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {}
}

/**
 * A repeater that caches views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _RecycleViewRepeaterStrategy {
  constructor() {
    /**
     * The size of the cache used to store unused views.
     * Setting the cache size to `0` will disable caching. Defaults to 20 views.
     */
    this.viewCacheSize = 20;
    /**
     * View cache that stores embedded view instances that have been previously stamped out,
     * but don't are not currently rendered. The view repeater will reuse these views rather than
     * creating brand new ones.
     *
     * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
     */
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    // Rearrange the views to put them in the right location.
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        // Item added.
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        // Item removed.
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        // Item moved.
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return undefined;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      // The host component could remove views from the container outside of
      // the view repeater. It's unlikely this will occur, but just in case,
      // destroy the view on its own, otherwise destroy it through the
      // container to ensure that all the references are removed.
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
}

/**
 * Class to be used to power selecting one or more options from a list.
 */
class SelectionModel {
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    /** Currently-selected values. */
    this._selection = new Set();
    /** Keeps track of the deselected options that haven't been emitted by the change event. */
    this._deselectedToEmit = [];
    /** Keeps track of the selected options that haven't been emitted by the change event. */
    this._selectedToEmit = [];
    /** Event emitted when the value has changed. */
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      // Clear the array in order to avoid firing the change event for preselected values.
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values);
    values.forEach(value => this._markSelected(value));
    oldValues.filter(value => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    // Clear the selected values so they can be re-cached.
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
let UniqueSelectionDispatcher = /*#__PURE__*/(() => {
  class UniqueSelectionDispatcher {
    constructor() {
      this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    notify(id, name) {
      for (let listener of this._listeners) {
        listener(id, name);
      }
    }
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    listen(listener) {
      this._listeners.push(listener);
      return () => {
        this._listeners = this._listeners.filter(registered => {
          return listener !== registered;
        });
      };
    }
    ngOnDestroy() {
      this._listeners = [];
    }
    static {
      this.ɵfac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UniqueSelectionDispatcher)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: UniqueSelectionDispatcher,
        factory: UniqueSelectionDispatcher.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UniqueSelectionDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=collections.mjs.map

/***/ }),

/***/ 1381:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/scrolling.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkFixedSizeVirtualScroll: () => (/* binding */ CdkFixedSizeVirtualScroll),
/* harmony export */   CdkScrollable: () => (/* binding */ CdkScrollable),
/* harmony export */   CdkScrollableModule: () => (/* binding */ CdkScrollableModule),
/* harmony export */   CdkVirtualForOf: () => (/* binding */ CdkVirtualForOf),
/* harmony export */   CdkVirtualScrollViewport: () => (/* binding */ CdkVirtualScrollViewport),
/* harmony export */   CdkVirtualScrollable: () => (/* binding */ CdkVirtualScrollable),
/* harmony export */   CdkVirtualScrollableElement: () => (/* binding */ CdkVirtualScrollableElement),
/* harmony export */   CdkVirtualScrollableWindow: () => (/* binding */ CdkVirtualScrollableWindow),
/* harmony export */   DEFAULT_RESIZE_TIME: () => (/* binding */ DEFAULT_RESIZE_TIME),
/* harmony export */   DEFAULT_SCROLL_TIME: () => (/* binding */ DEFAULT_SCROLL_TIME),
/* harmony export */   FixedSizeVirtualScrollStrategy: () => (/* binding */ FixedSizeVirtualScrollStrategy),
/* harmony export */   ScrollDispatcher: () => (/* binding */ ScrollDispatcher),
/* harmony export */   ScrollingModule: () => (/* binding */ ScrollingModule),
/* harmony export */   VIRTUAL_SCROLLABLE: () => (/* binding */ VIRTUAL_SCROLLABLE),
/* harmony export */   VIRTUAL_SCROLL_STRATEGY: () => (/* binding */ VIRTUAL_SCROLL_STRATEGY),
/* harmony export */   ViewportRuler: () => (/* binding */ ViewportRuler),
/* harmony export */   _fixedSizeVirtualScrollStrategyFactory: () => (/* binding */ _fixedSizeVirtualScrollStrategyFactory)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8129);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3854);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 1828);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 2486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 2319);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3793);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 965);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 7769);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 2831);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 6661);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 3126);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/collections */ 2067);













/** The injection token used to specify the virtual scrolling strategy. */
const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');

/** Virtual scrolling strategy for lists with items of known fixed size. */
class FixedSizeVirtualScrollStrategy {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    this.scrolledIndexChange = this._scrolledIndexChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
    /** The attached viewport. */
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
    /* no-op */
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
    /* no-op */
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    // Prevent NaN as result when dividing by zero.
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    // If user scrolls to the bottom of the list and data changes to a smaller list
    if (newRange.end > dataLength) {
      // We have to recalculate the first visible index based on new data length and viewport size.
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      // If first visible index changed we must update scroll offset to handle start/end buffers
      // Current range must also be adjusted to cover the new position (bottom of new list).
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */
let CdkFixedSizeVirtualScroll = /*#__PURE__*/(() => {
  class CdkFixedSizeVirtualScroll {
    constructor() {
      this._itemSize = 20;
      this._minBufferPx = 100;
      this._maxBufferPx = 200;
      /** The scroll strategy used by this directive. */
      this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    /** The size of the items in the list (in pixels). */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(value) {
      this._itemSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */
    get minBufferPx() {
      return this._minBufferPx;
    }
    set minBufferPx(value) {
      this._minBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     */
    get maxBufferPx() {
      return this._maxBufferPx;
    }
    set maxBufferPx(value) {
      this._maxBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    ngOnChanges() {
      this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    static {
      this.ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkFixedSizeVirtualScroll)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return CdkFixedSizeVirtualScroll;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Time in ms to throttle the scrolling events by default. */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
let ScrollDispatcher = /*#__PURE__*/(() => {
  class ScrollDispatcher {
    constructor(_ngZone, _platform, document) {
      this._ngZone = _ngZone;
      this._platform = _platform;
      /** Subject for notifying that a registered scrollable reference element has been scrolled. */
      this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Keeps track of the global `scroll` and `resize` subscriptions. */
      this._globalSubscription = null;
      /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
      this._scrolledCount = 0;
      /**
       * Map of all the scrollable references that are registered with the service and their
       * scroll event subscriptions.
       */
      this.scrollContainers = new Map();
      this._document = document;
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable) {
      if (!this.scrollContainers.has(scrollable)) {
        this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
      }
    }
    /**
     * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable) {
      const scrollableReference = this.scrollContainers.get(scrollable);
      if (scrollableReference) {
        scrollableReference.unsubscribe();
        this.scrollContainers.delete(scrollable);
      }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
      if (!this._platform.isBrowser) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
        if (!this._globalSubscription) {
          this._addGlobalListener();
        }
        // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.
        const subscription = auditTimeInMs > 0 ? this._scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
        this._scrolledCount++;
        return () => {
          subscription.unsubscribe();
          this._scrolledCount--;
          if (!this._scrolledCount) {
            this._removeGlobalListener();
          }
        };
      });
    }
    ngOnDestroy() {
      this._removeGlobalListener();
      this.scrollContainers.forEach((_, container) => this.deregister(container));
      this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementOrElementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    ancestorScrolled(elementOrElementRef, auditTimeInMs) {
      const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
      return this.scrolled(auditTimeInMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(target => {
        return !target || ancestors.indexOf(target) > -1;
      }));
    }
    /** Returns all registered Scrollables that contain the provided element. */
    getAncestorScrollContainers(elementOrElementRef) {
      const scrollingContainers = [];
      this.scrollContainers.forEach((_subscription, scrollable) => {
        if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
          scrollingContainers.push(scrollable);
        }
      });
      return scrollingContainers;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
      return this._document.defaultView || window;
    }
    /** Returns true if the element is contained within the provided Scrollable. */
    _scrollableContainsElement(scrollable, elementOrElementRef) {
      let element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
      let scrollableElement = scrollable.getElementRef().nativeElement;
      // Traverse through the element parents until we reach null, checking if any of the elements
      // are the scrollable's element.
      do {
        if (element == scrollableElement) {
          return true;
        }
      } while (element = element.parentElement);
      return false;
    }
    /** Sets up the global scroll listeners. */
    _addGlobalListener() {
      this._globalSubscription = this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window.document, 'scroll').subscribe(() => this._scrolled.next());
      });
    }
    /** Cleans up the global scroll listener. */
    _removeGlobalListener() {
      if (this._globalSubscription) {
        this._globalSubscription.unsubscribe();
        this._globalSubscription = null;
      }
    }
    static {
      this.ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ScrollDispatcher,
        factory: ScrollDispatcher.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ScrollDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
let CdkScrollable = /*#__PURE__*/(() => {
  class CdkScrollable {
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
      this.elementRef = elementRef;
      this.scrollDispatcher = scrollDispatcher;
      this.ngZone = ngZone;
      this.dir = dir;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.elementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(observer)));
    }
    ngOnInit() {
      this.scrollDispatcher.register(this);
    }
    ngOnDestroy() {
      this.scrollDispatcher.deregister(this);
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Returns observable that emits when a scroll event is fired on the host element. */
    elementScrolled() {
      return this._elementScrolled;
    }
    /** Gets the ElementRef for the viewport. */
    getElementRef() {
      return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    scrollTo(options) {
      const el = this.elementRef.nativeElement;
      const isRtl = this.dir && this.dir.value == 'rtl';
      // Rewrite start & end offsets as right or left offsets.
      if (options.left == null) {
        options.left = isRtl ? options.end : options.start;
      }
      if (options.right == null) {
        options.right = isRtl ? options.start : options.end;
      }
      // Rewrite the bottom offset as a top offset.
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      // Rewrite the right offset as a left offset.
      if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NORMAL) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.INVERTED) {
          options.left = options.right;
        } else if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NEGATED) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      this._applyScrollToOptions(options);
    }
    _applyScrollToOptions(options) {
      const el = this.elementRef.nativeElement;
      if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.supportsScrollBehavior)()) {
        el.scrollTo(options);
      } else {
        if (options.top != null) {
          el.scrollTop = options.top;
        }
        if (options.left != null) {
          el.scrollLeft = options.left;
        }
      }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    measureScrollOffset(from) {
      const LEFT = 'left';
      const RIGHT = 'right';
      const el = this.elementRef.nativeElement;
      if (from == 'top') {
        return el.scrollTop;
      }
      if (from == 'bottom') {
        return el.scrollHeight - el.clientHeight - el.scrollTop;
      }
      // Rewrite start & end as left or right offsets.
      const isRtl = this.dir && this.dir.value == 'rtl';
      if (from == 'start') {
        from = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        from = isRtl ? LEFT : RIGHT;
      }
      if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.INVERTED) {
        // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
        // 0 when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        } else {
          return el.scrollLeft;
        }
      } else if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NEGATED) {
        // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
        // 0 when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft + el.scrollWidth - el.clientWidth;
        } else {
          return -el.scrollLeft;
        }
      } else {
        // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
        // (scrollWidth - clientWidth) when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft;
        } else {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        }
      }
    }
    static {
      this.ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
        standalone: true
      });
    }
  }
  return CdkScrollable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Time in ms to throttle the resize events by default. */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
let ViewportRuler = /*#__PURE__*/(() => {
  class ViewportRuler {
    constructor(_platform, ngZone, document) {
      this._platform = _platform;
      /** Stream of viewport change events. */
      this._change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Event listener that will be used to handle the viewport change events. */
      this._changeListener = event => {
        this._change.next(event);
      };
      this._document = document;
      ngZone.runOutsideAngular(() => {
        if (_platform.isBrowser) {
          const window = this._getWindow();
          // Note that bind the events ourselves, rather than going through something like RxJS's
          // `fromEvent` so that we can ensure that they're bound outside of the NgZone.
          window.addEventListener('resize', this._changeListener);
          window.addEventListener('orientationchange', this._changeListener);
        }
        // Clear the cached position so that the viewport is re-measured next time it is required.
        // We don't need to keep track of the subscription, because it is completed on destroy.
        this.change().subscribe(() => this._viewportSize = null);
      });
    }
    ngOnDestroy() {
      if (this._platform.isBrowser) {
        const window = this._getWindow();
        window.removeEventListener('resize', this._changeListener);
        window.removeEventListener('orientationchange', this._changeListener);
      }
      this._change.complete();
    }
    /** Returns the viewport's width and height. */
    getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }
      const output = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      };
      // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
      if (!this._platform.isBrowser) {
        this._viewportSize = null;
      }
      return output;
    }
    /** Gets a DOMRect for the viewport's bounds. */
    getViewportRect() {
      // Use the document element's bounding rect rather than the window scroll properties
      // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
      // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
      // conceptual viewports. Under most circumstances these viewports are equivalent, but they
      // can disagree when the page is pinch-zoomed (on devices that support touch).
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
      // We use the documentElement instead of the body because, by default (without a css reset)
      // browsers typically give the document body an 8px margin, which is not included in
      // getBoundingClientRect().
      const scrollPosition = this.getViewportScrollPosition();
      const {
        width,
        height
      } = this.getViewportSize();
      return {
        top: scrollPosition.top,
        left: scrollPosition.left,
        bottom: scrollPosition.top + height,
        right: scrollPosition.left + width,
        height,
        width
      };
    }
    /** Gets the (top, left) scroll position of the viewport. */
    getViewportScrollPosition() {
      // While we can get a reference to the fake document
      // during SSR, it doesn't have getBoundingClientRect.
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      }
      // The top-left-corner of the viewport is determined by the scroll position of the document
      // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
      // whether `document.body` or `document.documentElement` is the scrolled element, so reading
      // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
      // `document.documentElement` works consistently, where the `top` and `left` values will
      // equal negative the scroll position.
      const document = this._document;
      const window = this._getWindow();
      const documentElement = document.documentElement;
      const documentRect = documentElement.getBoundingClientRect();
      const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
      const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
      return {
        top,
        left
      };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * This stream emits outside of the Angular zone.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    change(throttleTime = DEFAULT_RESIZE_TIME) {
      return throttleTime > 0 ? this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(throttleTime)) : this._change;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
      return this._document.defaultView || window;
    }
    /** Updates the cached viewport size. */
    _updateViewportSize() {
      const window = this._getWindow();
      this._viewportSize = this._platform.isBrowser ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
    static {
      this.ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ViewportRuler,
        factory: ViewportRuler.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ViewportRuler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const VIRTUAL_SCROLLABLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLLABLE');
/**
 * Extending the {@link CdkScrollable} to be used as scrolling container for virtual scrolling.
 */
let CdkVirtualScrollable = /*#__PURE__*/(() => {
  class CdkVirtualScrollable extends CdkScrollable {
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
      super(elementRef, scrollDispatcher, ngZone, dir);
    }
    /**
     * Measure the viewport size for the provided orientation.
     *
     * @param orientation The orientation to measure the size from.
     */
    measureViewportSize(orientation) {
      const viewportEl = this.elementRef.nativeElement;
      return orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
    }
    static {
      this.ɵfac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkVirtualScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkVirtualScrollable,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkVirtualScrollable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Checks if the given ranges are equal. */
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_13__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_14__.asapScheduler;
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */
let CdkVirtualScrollViewport = /*#__PURE__*/(() => {
  class CdkVirtualScrollViewport extends CdkVirtualScrollable {
    /** The direction the viewport scrolls. */
    get orientation() {
      return this._orientation;
    }
    set orientation(orientation) {
      if (this._orientation !== orientation) {
        this._orientation = orientation;
        this._calculateSpacerSize();
      }
    }
    constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
      super(elementRef, scrollDispatcher, ngZone, dir);
      this.elementRef = elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._scrollStrategy = _scrollStrategy;
      this.scrollable = scrollable;
      this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform);
      /** Emits when the viewport is detached from a CdkVirtualForOf. */
      this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Emits when the rendered range changes. */
      this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._orientation = 'vertical';
      /**
       * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
       * will be removed.
       */
      this.appendOnly = false;
      // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
      // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
      // depending on how the strategy calculates the scrolled index, it may come at a cost to
      // performance.
      /** Emits when the index of the first element visible in the viewport changes. */
      this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
      /** A stream that emits whenever the rendered range changes. */
      this.renderedRangeStream = this._renderedRangeSubject;
      /**
       * The total size of all content (in pixels), including content that is not currently rendered.
       */
      this._totalContentSize = 0;
      /** A string representing the `style.width` property value to be used for the spacer element. */
      this._totalContentWidth = '';
      /** A string representing the `style.height` property value to be used for the spacer element. */
      this._totalContentHeight = '';
      /** The currently rendered range of indices. */
      this._renderedRange = {
        start: 0,
        end: 0
      };
      /** The length of the data bound to this viewport (in number of items). */
      this._dataLength = 0;
      /** The size of the viewport (in pixels). */
      this._viewportSize = 0;
      /** The last rendered content offset that was set. */
      this._renderedContentOffset = 0;
      /**
       * Whether the last rendered content offset was to the end of the content (and therefore needs to
       * be rewritten as an offset to the start of the content).
       */
      this._renderedContentOffsetNeedsRewrite = false;
      /** Whether there is a pending change detection cycle. */
      this._isChangeDetectionPending = false;
      /** A list of functions to run after the next change detection cycle. */
      this._runAfterChangeDetection = [];
      /** Subscription to changes in the viewport size. */
      this._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription.EMPTY;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._isDestroyed = false;
      if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
      }
      this._viewportChanges = viewportRuler.change().subscribe(() => {
        this.checkViewportSize();
      });
      if (!this.scrollable) {
        // No scrollable is provided, so the virtual-scroll-viewport needs to become a scrollable
        this.elementRef.nativeElement.classList.add('cdk-virtual-scrollable');
        this.scrollable = this;
      }
    }
    ngOnInit() {
      // Scrolling depends on the element dimensions which we can't get during SSR.
      if (!this._platform.isBrowser) {
        return;
      }
      if (this.scrollable === this) {
        super.ngOnInit();
      }
      // It's still too early to measure the viewport at this point. Deferring with a promise allows
      // the Viewport to be rendered with the correct size before we measure. We run this outside the
      // zone to avoid causing more change detection cycles. We handle the change detection loop
      // ourselves instead.
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._measureViewportSize();
        this._scrollStrategy.attach(this);
        this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
        this._markChangeDetectionNeeded();
      }));
    }
    ngOnDestroy() {
      this.detach();
      this._scrollStrategy.detach();
      // Complete all subjects
      this._renderedRangeSubject.complete();
      this._detachedSubject.complete();
      this._viewportChanges.unsubscribe();
      this._isDestroyed = true;
      super.ngOnDestroy();
    }
    /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
    attach(forOf) {
      if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('CdkVirtualScrollViewport is already attached.');
      }
      // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
      // changes. Run outside the zone to avoid triggering change detection, since we're managing the
      // change detection loop ourselves.
      this.ngZone.runOutsideAngular(() => {
        this._forOf = forOf;
        this._forOf.dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._detachedSubject)).subscribe(data => {
          const newLength = data.length;
          if (newLength !== this._dataLength) {
            this._dataLength = newLength;
            this._scrollStrategy.onDataLengthChanged();
          }
          this._doChangeDetection();
        });
      });
    }
    /** Detaches the current `CdkVirtualForOf`. */
    detach() {
      this._forOf = null;
      this._detachedSubject.next();
    }
    /** Gets the length of the data bound to this viewport (in number of items). */
    getDataLength() {
      return this._dataLength;
    }
    /** Gets the size of the viewport (in pixels). */
    getViewportSize() {
      return this._viewportSize;
    }
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    getRenderedRange() {
      return this._renderedRange;
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from];
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    setTotalContentSize(size) {
      if (this._totalContentSize !== size) {
        this._totalContentSize = size;
        this._calculateSpacerSize();
        this._markChangeDetectionNeeded();
      }
    }
    /** Sets the currently rendered range of indices. */
    setRenderedRange(range) {
      if (!rangesEqual(this._renderedRange, range)) {
        if (this.appendOnly) {
          range = {
            start: 0,
            end: Math.max(this._renderedRange.end, range.end)
          };
        }
        this._renderedRangeSubject.next(this._renderedRange = range);
        this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
      }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    getOffsetToRenderedContentStart() {
      return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    setRenderedContentOffset(offset, to = 'to-start') {
      // In appendOnly, we always start from the top
      offset = this.appendOnly && to === 'to-start' ? 0 : offset;
      // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
      // in the negative direction.
      const isRtl = this.dir && this.dir.value == 'rtl';
      const isHorizontal = this.orientation == 'horizontal';
      const axis = isHorizontal ? 'X' : 'Y';
      const axisDirection = isHorizontal && isRtl ? -1 : 1;
      let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
      this._renderedContentOffset = offset;
      if (to === 'to-end') {
        transform += ` translate${axis}(-100%)`;
        // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
        // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
        // expand upward).
        this._renderedContentOffsetNeedsRewrite = true;
      }
      if (this._renderedContentTransform != transform) {
        // We know this value is safe because we parse `offset` with `Number()` before passing it
        // into the string.
        this._renderedContentTransform = transform;
        this._markChangeDetectionNeeded(() => {
          if (this._renderedContentOffsetNeedsRewrite) {
            this._renderedContentOffset -= this.measureRenderedContentSize();
            this._renderedContentOffsetNeedsRewrite = false;
            this.setRenderedContentOffset(this._renderedContentOffset);
          } else {
            this._scrollStrategy.onRenderedOffsetChanged();
          }
        });
      }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToOffset(offset, behavior = 'auto') {
      const options = {
        behavior
      };
      if (this.orientation === 'horizontal') {
        options.start = offset;
      } else {
        options.top = offset;
      }
      this.scrollable.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToIndex(index, behavior = 'auto') {
      this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the scrollable (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    measureScrollOffset(from) {
      // This is to break the call cycle
      let measureScrollOffset;
      if (this.scrollable == this) {
        measureScrollOffset = _from => super.measureScrollOffset(_from);
      } else {
        measureScrollOffset = _from => this.scrollable.measureScrollOffset(_from);
      }
      return Math.max(0, measureScrollOffset(from ?? (this.orientation === 'horizontal' ? 'start' : 'top')) - this.measureViewportOffset());
    }
    /**
     * Measures the offset of the viewport from the scrolling container
     * @param from The edge to measure from.
     */
    measureViewportOffset(from) {
      let fromRect;
      const LEFT = 'left';
      const RIGHT = 'right';
      const isRtl = this.dir?.value == 'rtl';
      if (from == 'start') {
        fromRect = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        fromRect = isRtl ? LEFT : RIGHT;
      } else if (from) {
        fromRect = from;
      } else {
        fromRect = this.orientation === 'horizontal' ? 'left' : 'top';
      }
      const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
      const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
      return viewportClientRect - scrollerClientRect;
    }
    /** Measure the combined size of all of the rendered items. */
    measureRenderedContentSize() {
      const contentEl = this._contentWrapper.nativeElement;
      return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    measureRangeSize(range) {
      if (!this._forOf) {
        return 0;
      }
      return this._forOf.measureRangeSize(range, this.orientation);
    }
    /** Update the viewport dimensions and re-render. */
    checkViewportSize() {
      // TODO: Cleanup later when add logic for handling content resize
      this._measureViewportSize();
      this._scrollStrategy.onDataLengthChanged();
    }
    /** Measure the viewport size. */
    _measureViewportSize() {
      this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
    }
    /** Queue up change detection to run. */
    _markChangeDetectionNeeded(runAfter) {
      if (runAfter) {
        this._runAfterChangeDetection.push(runAfter);
      }
      // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
      // properties sequentially we only have to run `_doChangeDetection` once at the end.
      if (!this._isChangeDetectionPending) {
        this._isChangeDetectionPending = true;
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._doChangeDetection();
        }));
      }
    }
    /** Run change detection. */
    _doChangeDetection() {
      if (this._isDestroyed) {
        return;
      }
      this.ngZone.run(() => {
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this._changeDetectorRef.markForCheck();
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          this._isChangeDetectionPending = false;
          const runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];
          for (const fn of runAfterChangeDetection) {
            fn();
          }
        }, {
          injector: this._injector
        });
      });
    }
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    _calculateSpacerSize() {
      this._totalContentHeight = this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
      this._totalContentWidth = this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
    }
    static {
      this.ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLLABLE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation",
          appendOnly: [2, "appendOnly", "appendOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 4,
        consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return CdkVirtualScrollViewport;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Helper to extract the offset of a DOM Node in a certain direction. */
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === 'horizontal') {
    return direction === 'start' ? rect.left : rect.right;
  }
  return direction === 'start' ? rect.top : rect.bottom;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
let CdkVirtualForOf = /*#__PURE__*/(() => {
  class CdkVirtualForOf {
    /** The DataSource to display. */
    get cdkVirtualForOf() {
      return this._cdkVirtualForOf;
    }
    set cdkVirtualForOf(value) {
      this._cdkVirtualForOf = value;
      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__.isDataSource)(value)) {
        this._dataSourceChanges.next(value);
      } else {
        // If value is an an NgIterable, convert it to an array.
        this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__.ArrayDataSource((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.isObservable)(value) ? value : Array.from(value || [])));
      }
    }
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     */
    get cdkVirtualForTrackBy() {
      return this._cdkVirtualForTrackBy;
    }
    set cdkVirtualForTrackBy(fn) {
      this._needsUpdate = true;
      this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
    }
    /** The template used to stamp out new elements. */
    set cdkVirtualForTemplate(value) {
      if (value) {
        this._needsUpdate = true;
        this._template = value;
      }
    }
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */
    get cdkVirtualForTemplateCacheSize() {
      return this._viewRepeater.viewCacheSize;
    }
    set cdkVirtualForTemplateCacheSize(size) {
      this._viewRepeater.viewCacheSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(size);
    }
    constructor( /** The view container to add items to. */
    _viewContainerRef, /** The template to use when stamping out new items. */
    _template, /** The set of available differs. */
    _differs, /** The strategy used to render items in the virtual scroll viewport. */
    _viewRepeater, /** The virtual scrolling viewport that these items are being rendered in. */
    _viewport, ngZone) {
      this._viewContainerRef = _viewContainerRef;
      this._template = _template;
      this._differs = _differs;
      this._viewRepeater = _viewRepeater;
      this._viewport = _viewport;
      /** Emits when the rendered view of the data changes. */
      this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Subject that emits when a new DataSource instance is given. */
      this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Emits whenever the data in the current DataSource changes. */
      this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null),
      // Bundle up the previous and current data sources so we can work with both.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.pairwise)(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.shareReplay)(1));
      /** The differ used to calculate changes to the data. */
      this._differ = null;
      /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
      this._needsUpdate = false;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.dataStream.subscribe(data => {
        this._data = data;
        this._onRenderedDataChange();
      });
      this._viewport.renderedRangeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(range => {
        this._renderedRange = range;
        if (this.viewChange.observers.length) {
          ngZone.run(() => this.viewChange.next(this._renderedRange));
        }
        this._onRenderedDataChange();
      });
      this._viewport.attach(this);
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    measureRangeSize(range, orientation) {
      if (range.start >= range.end) {
        return 0;
      }
      if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`Error: attempted to measure an item that isn't rendered.`);
      }
      // The index into the list of rendered views for the first item in the range.
      const renderedStartIndex = range.start - this._renderedRange.start;
      // The length of the range we're measuring.
      const rangeLen = range.end - range.start;
      // Loop over all the views, find the first and land node and compute the size by subtracting
      // the top of the first node from the bottom of the last one.
      let firstNode;
      let lastNode;
      // Find the first node by starting from the beginning and going forwards.
      for (let i = 0; i < rangeLen; i++) {
        const view = this._viewContainerRef.get(i + renderedStartIndex);
        if (view && view.rootNodes.length) {
          firstNode = lastNode = view.rootNodes[0];
          break;
        }
      }
      // Find the last node by starting from the end and going backwards.
      for (let i = rangeLen - 1; i > -1; i--) {
        const view = this._viewContainerRef.get(i + renderedStartIndex);
        if (view && view.rootNodes.length) {
          lastNode = view.rootNodes[view.rootNodes.length - 1];
          break;
        }
      }
      return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
    }
    ngDoCheck() {
      if (this._differ && this._needsUpdate) {
        // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
        // this list being rendered (can use simpler algorithm) vs needs update due to data actually
        // changing (need to do this diff).
        const changes = this._differ.diff(this._renderedItems);
        if (!changes) {
          this._updateContext();
        } else {
          this._applyChanges(changes);
        }
        this._needsUpdate = false;
      }
    }
    ngOnDestroy() {
      this._viewport.detach();
      this._dataSourceChanges.next(undefined);
      this._dataSourceChanges.complete();
      this.viewChange.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._viewRepeater.detach();
    }
    /** React to scroll state changes in the viewport. */
    _onRenderedDataChange() {
      if (!this._renderedRange) {
        return;
      }
      this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
      if (!this._differ) {
        // Use a wrapper function for the `trackBy` so any new values are
        // picked up automatically without having to recreate the differ.
        this._differ = this._differs.find(this._renderedItems).create((index, item) => {
          return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
        });
      }
      this._needsUpdate = true;
    }
    /** Swap out one `DataSource` for another. */
    _changeDataSource(oldDs, newDs) {
      if (oldDs) {
        oldDs.disconnect(this);
      }
      this._needsUpdate = true;
      return newDs ? newDs.connect(this) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }
    /** Update the `CdkVirtualForOfContext` for all views. */
    _updateContext() {
      const count = this._data.length;
      let i = this._viewContainerRef.length;
      while (i--) {
        const view = this._viewContainerRef.get(i);
        view.context.index = this._renderedRange.start + i;
        view.context.count = count;
        this._updateComputedContextProperties(view.context);
        view.detectChanges();
      }
    }
    /** Apply changes to the DOM. */
    _applyChanges(changes) {
      this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), record => record.item);
      // Update $implicit for any items that had an identity change.
      changes.forEachIdentityChange(record => {
        const view = this._viewContainerRef.get(record.currentIndex);
        view.context.$implicit = record.item;
      });
      // Update the context variables on all items.
      const count = this._data.length;
      let i = this._viewContainerRef.length;
      while (i--) {
        const view = this._viewContainerRef.get(i);
        view.context.index = this._renderedRange.start + i;
        view.context.count = count;
        this._updateComputedContextProperties(view.context);
      }
    }
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    _updateComputedContextProperties(context) {
      context.first = context.index === 0;
      context.last = context.index === context.count - 1;
      context.even = context.index % 2 === 0;
      context.odd = !context.even;
    }
    _getEmbeddedViewArgs(record, index) {
      // Note that it's important that we insert the item directly at the proper index,
      // rather than inserting it and the moving it in place, because if there's a directive
      // on the same node that injects the `ViewContainerRef`, Angular will insert another
      // comment node which can throw off the move when it's being repeated for all items.
      return {
        templateRef: this._template,
        context: {
          $implicit: record.item,
          // It's guaranteed that the iterable is not "undefined" or "null" because we only
          // generate views for elements if the "cdkVirtualForOf" iterable has elements.
          cdkVirtualForOf: this._cdkVirtualForOf,
          index: -1,
          count: -1,
          first: false,
          last: false,
          odd: false,
          even: false
        },
        index
      };
    }
    static {
      this.ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate",
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._RecycleViewRepeaterStrategy
        }])]
      });
    }
  }
  return CdkVirtualForOf;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Provides a virtual scrollable for the element it is attached to.
 */
let CdkVirtualScrollableElement = /*#__PURE__*/(() => {
  class CdkVirtualScrollableElement extends CdkVirtualScrollable {
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
      super(elementRef, scrollDispatcher, ngZone, dir);
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
    }
    static {
      this.ɵfac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkVirtualScrollableElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkVirtualScrollableElement,
        selectors: [["", "cdkVirtualScrollingElement", ""]],
        hostAttrs: [1, "cdk-virtual-scrollable"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLLABLE,
          useExisting: CdkVirtualScrollableElement
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkVirtualScrollableElement;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Provides as virtual scrollable for the global / window scrollbar.
 */
let CdkVirtualScrollableWindow = /*#__PURE__*/(() => {
  class CdkVirtualScrollableWindow extends CdkVirtualScrollable {
    constructor(scrollDispatcher, ngZone, dir) {
      super(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
      this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(document, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(observer)));
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from];
    }
    static {
      this.ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkVirtualScrollableWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkVirtualScrollableWindow,
        selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLLABLE,
          useExisting: CdkVirtualScrollableWindow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkVirtualScrollableWindow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkScrollableModule = /*#__PURE__*/(() => {
  class CdkScrollableModule {
    static {
      this.ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkScrollableModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CdkScrollableModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return CdkScrollableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-primary-export
 */
let ScrollingModule = /*#__PURE__*/(() => {
  class ScrollingModule {
    static {
      this.ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScrollingModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule]
      });
    }
  }
  return ScrollingModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=scrolling.mjs.map

/***/ }),

/***/ 3448:
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/table.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseCdkCell: () => (/* binding */ BaseCdkCell),
/* harmony export */   BaseRowDef: () => (/* binding */ BaseRowDef),
/* harmony export */   CDK_ROW_TEMPLATE: () => (/* binding */ CDK_ROW_TEMPLATE),
/* harmony export */   CDK_TABLE: () => (/* binding */ CDK_TABLE),
/* harmony export */   CDK_TABLE_TEMPLATE: () => (/* binding */ CDK_TABLE_TEMPLATE),
/* harmony export */   CdkCell: () => (/* binding */ CdkCell),
/* harmony export */   CdkCellDef: () => (/* binding */ CdkCellDef),
/* harmony export */   CdkCellOutlet: () => (/* binding */ CdkCellOutlet),
/* harmony export */   CdkColumnDef: () => (/* binding */ CdkColumnDef),
/* harmony export */   CdkFooterCell: () => (/* binding */ CdkFooterCell),
/* harmony export */   CdkFooterCellDef: () => (/* binding */ CdkFooterCellDef),
/* harmony export */   CdkFooterRow: () => (/* binding */ CdkFooterRow),
/* harmony export */   CdkFooterRowDef: () => (/* binding */ CdkFooterRowDef),
/* harmony export */   CdkHeaderCell: () => (/* binding */ CdkHeaderCell),
/* harmony export */   CdkHeaderCellDef: () => (/* binding */ CdkHeaderCellDef),
/* harmony export */   CdkHeaderRow: () => (/* binding */ CdkHeaderRow),
/* harmony export */   CdkHeaderRowDef: () => (/* binding */ CdkHeaderRowDef),
/* harmony export */   CdkNoDataRow: () => (/* binding */ CdkNoDataRow),
/* harmony export */   CdkRecycleRows: () => (/* binding */ CdkRecycleRows),
/* harmony export */   CdkRow: () => (/* binding */ CdkRow),
/* harmony export */   CdkRowDef: () => (/* binding */ CdkRowDef),
/* harmony export */   CdkTable: () => (/* binding */ CdkTable),
/* harmony export */   CdkTableModule: () => (/* binding */ CdkTableModule),
/* harmony export */   CdkTextColumn: () => (/* binding */ CdkTextColumn),
/* harmony export */   DataRowOutlet: () => (/* binding */ DataRowOutlet),
/* harmony export */   DataSource: () => (/* reexport safe */ _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource),
/* harmony export */   FooterRowOutlet: () => (/* binding */ FooterRowOutlet),
/* harmony export */   HeaderRowOutlet: () => (/* binding */ HeaderRowOutlet),
/* harmony export */   NoDataRowOutlet: () => (/* binding */ NoDataRowOutlet),
/* harmony export */   STICKY_DIRECTIONS: () => (/* binding */ STICKY_DIRECTIONS),
/* harmony export */   STICKY_POSITIONING_LISTENER: () => (/* binding */ STICKY_POSITIONING_LISTENER),
/* harmony export */   StickyStyler: () => (/* binding */ StickyStyler),
/* harmony export */   TEXT_COLUMN_OPTIONS: () => (/* binding */ TEXT_COLUMN_OPTIONS),
/* harmony export */   _COALESCED_STYLE_SCHEDULER: () => (/* binding */ _COALESCED_STYLE_SCHEDULER),
/* harmony export */   _CoalescedStyleScheduler: () => (/* binding */ _CoalescedStyleScheduler),
/* harmony export */   _Schedule: () => (/* binding */ _Schedule),
/* harmony export */   mixinHasStickyInput: () => (/* binding */ mixinHasStickyInput)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 3126);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 2067);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1381);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 756);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);


const _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
const _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 2)(4, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tfoot", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](6, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}











/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
const CDK_TABLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('text-column-options');

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
let CdkCellDef = /*#__PURE__*/(() => {
  class CdkCellDef {
    constructor( /** @docs-private */template) {
      this.template = template;
    }
    static {
      this.ɵfac = function CdkCellDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkCellDef,
        selectors: [["", "cdkCellDef", ""]],
        standalone: true
      });
    }
  }
  return CdkCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
let CdkHeaderCellDef = /*#__PURE__*/(() => {
  class CdkHeaderCellDef {
    constructor( /** @docs-private */template) {
      this.template = template;
    }
    static {
      this.ɵfac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkHeaderCellDef,
        selectors: [["", "cdkHeaderCellDef", ""]],
        standalone: true
      });
    }
  }
  return CdkHeaderCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
let CdkFooterCellDef = /*#__PURE__*/(() => {
  class CdkFooterCellDef {
    constructor( /** @docs-private */template) {
      this.template = template;
    }
    static {
      this.ɵfac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkFooterCellDef,
        selectors: [["", "cdkFooterCellDef", ""]],
        standalone: true
      });
    }
  }
  return CdkFooterCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
let CdkColumnDef = /*#__PURE__*/(() => {
  class CdkColumnDef {
    /** Unique name for this column. */
    get name() {
      return this._name;
    }
    set name(name) {
      this._setNameInput(name);
    }
    /** Whether the cell is sticky. */
    get sticky() {
      return this._sticky;
    }
    set sticky(value) {
      if (value !== this._sticky) {
        this._sticky = value;
        this._hasStickyChanged = true;
      }
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd() {
      return this._stickyEnd;
    }
    set stickyEnd(value) {
      if (value !== this._stickyEnd) {
        this._stickyEnd = value;
        this._hasStickyChanged = true;
      }
    }
    constructor(_table) {
      this._table = _table;
      this._hasStickyChanged = false;
      this._sticky = false;
      this._stickyEnd = false;
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this.resetStickyChanged();
      return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */
    _updateColumnCssClassName() {
      this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setNameInput(value) {
      // If the directive is set without a name (updated programmatically), then this setter will
      // trigger with an empty string and should not overwrite the programmatically set value.
      if (value) {
        this._name = value;
        this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, '-');
        this._updateColumnCssClassName();
      }
    }
    static {
      this.ɵfac = function CdkColumnDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkColumnDef,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkCellDef, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
          }
        },
        inputs: {
          name: [0, "cdkColumnDef", "name"],
          sticky: [2, "sticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          stickyEnd: [2, "stickyEnd", "stickyEnd", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: CdkColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkColumnDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
}
/** Header cell template container that adds the right classes and role. */
let CdkHeaderCell = /*#__PURE__*/(() => {
  class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
      super(columnDef, elementRef);
    }
    static {
      this.ɵfac = function CdkHeaderCell_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkHeaderCell,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkHeaderCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer cell template container that adds the right classes and role. */
let CdkFooterCell = /*#__PURE__*/(() => {
  class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
      super(columnDef, elementRef);
      const role = columnDef._table?._getCellRole();
      if (role) {
        elementRef.nativeElement.setAttribute('role', role);
      }
    }
    static {
      this.ɵfac = function CdkFooterCell_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkFooterCell,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: [1, "cdk-footer-cell"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkFooterCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Cell template container that adds the right classes and role. */
let CdkCell = /*#__PURE__*/(() => {
  class CdkCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
      super(columnDef, elementRef);
      const role = columnDef._table?._getCellRole();
      if (role) {
        elementRef.nativeElement.setAttribute('role', role);
      }
    }
    static {
      this.ɵfac = function CdkCell_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkCell,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: [1, "cdk-cell"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @docs-private
 */
class _Schedule {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }
}
/** Injection token used to provide a coalesced style scheduler. */
const _COALESCED_STYLE_SCHEDULER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */
let _CoalescedStyleScheduler = /*#__PURE__*/(() => {
  class _CoalescedStyleScheduler {
    constructor(_unusedNgZone) {
      this._currentSchedule = null;
      this._ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    }
    /**
     * Schedules the specified task to run at the end of the current VM turn.
     */
    schedule(task) {
      this._createScheduleIfNeeded();
      this._currentSchedule.tasks.push(task);
    }
    /**
     * Schedules the specified task to run after other scheduled tasks at the end of the current
     * VM turn.
     */
    scheduleEnd(task) {
      this._createScheduleIfNeeded();
      this._currentSchedule.endTasks.push(task);
    }
    _createScheduleIfNeeded() {
      if (this._currentSchedule) {
        return;
      }
      this._currentSchedule = new _Schedule();
      this._ngZone.runOutsideAngular(() =>
      // TODO(mmalerba): Scheduling this using something that runs less frequently
      //  (e.g. requestAnimationFrame, setTimeout, etc.) causes noticeable jank with the column
      //  resizer. We should audit the usages of schedule / scheduleEnd in that component and see
      //  if we can refactor it so that we don't need to flush the tasks quite so frequently.
      queueMicrotask(() => {
        while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
          const schedule = this._currentSchedule;
          // Capture new tasks scheduled by the current set of tasks.
          this._currentSchedule = new _Schedule();
          for (const task of schedule.tasks) {
            task();
          }
          for (const task of schedule.endTasks) {
            task();
          }
        }
        this._currentSchedule = null;
      }));
    }
    static {
      this.ɵfac = function _CoalescedStyleScheduler_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CoalescedStyleScheduler,
        factory: _CoalescedStyleScheduler.ɵfac
      });
    }
  }
  return _CoalescedStyleScheduler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
let BaseRowDef = /*#__PURE__*/(() => {
  class BaseRowDef {
    constructor( /** @docs-private */template, _differs) {
      this.template = template;
      this._differs = _differs;
    }
    ngOnChanges(changes) {
      // Create a new columns differ if one does not yet exist. Initialize it based on initial value
      // of the columns property or an empty array if none is provided.
      if (!this._columnsDiffer) {
        const columns = changes['columns'] && changes['columns'].currentValue || [];
        this._columnsDiffer = this._differs.find(columns).create();
        this._columnsDiffer.diff(columns);
      }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff() {
      return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column) {
      if (this instanceof CdkHeaderRowDef) {
        return column.headerCell.template;
      }
      if (this instanceof CdkFooterRowDef) {
        return column.footerCell.template;
      } else {
        return column.cell.template;
      }
    }
    static {
      this.ɵfac = function BaseRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseRowDef,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return BaseRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
let CdkHeaderRowDef = /*#__PURE__*/(() => {
  class CdkHeaderRowDef extends BaseRowDef {
    /** Whether the row is sticky. */
    get sticky() {
      return this._sticky;
    }
    set sticky(value) {
      if (value !== this._sticky) {
        this._sticky = value;
        this._hasStickyChanged = true;
      }
    }
    constructor(template, _differs, _table) {
      super(template, _differs);
      this._table = _table;
      this._hasStickyChanged = false;
      this._sticky = false;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
      super.ngOnChanges(changes);
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this.resetStickyChanged();
      return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    static {
      this.ɵfac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkHeaderRowDef,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
          columns: [0, "cdkHeaderRowDef", "columns"],
          sticky: [2, "cdkHeaderRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return CdkHeaderRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
let CdkFooterRowDef = /*#__PURE__*/(() => {
  class CdkFooterRowDef extends BaseRowDef {
    /** Whether the row is sticky. */
    get sticky() {
      return this._sticky;
    }
    set sticky(value) {
      if (value !== this._sticky) {
        this._sticky = value;
        this._hasStickyChanged = true;
      }
    }
    constructor(template, _differs, _table) {
      super(template, _differs);
      this._table = _table;
      this._hasStickyChanged = false;
      this._sticky = false;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
      super.ngOnChanges(changes);
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this.resetStickyChanged();
      return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    static {
      this.ɵfac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkFooterRowDef,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: [0, "cdkFooterRowDef", "columns"],
          sticky: [2, "cdkFooterRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return CdkFooterRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
let CdkRowDef = /*#__PURE__*/(() => {
  class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    constructor(template, _differs, _table) {
      super(template, _differs);
      this._table = _table;
    }
    static {
      this.ɵfac = function CdkRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkRowDef,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: [0, "cdkRowDefColumns", "columns"],
          when: [0, "cdkRowDefWhen", "when"]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return CdkRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
let CdkCellOutlet = /*#__PURE__*/(() => {
  class CdkCellOutlet {
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    static {
      this.mostRecentCellOutlet = null;
    }
    constructor(_viewContainer) {
      this._viewContainer = _viewContainer;
      CdkCellOutlet.mostRecentCellOutlet = this;
    }
    ngOnDestroy() {
      // If this was the last outlet being rendered in the view, remove the reference
      // from the static property after it has been destroyed to avoid leaking memory.
      if (CdkCellOutlet.mostRecentCellOutlet === this) {
        CdkCellOutlet.mostRecentCellOutlet = null;
      }
    }
    static {
      this.ɵfac = function CdkCellOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkCellOutlet,
        selectors: [["", "cdkCellOutlet", ""]],
        standalone: true
      });
    }
  }
  return CdkCellOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */
let CdkHeaderRow = /*#__PURE__*/(() => {
  class CdkHeaderRow {
    static {
      this.ɵfac = function CdkHeaderRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkHeaderRow)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkHeaderRow,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
      });
    }
  }
  return CdkHeaderRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
let CdkFooterRow = /*#__PURE__*/(() => {
  class CdkFooterRow {
    static {
      this.ɵfac = function CdkFooterRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkFooterRow)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkFooterRow,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
      });
    }
  }
  return CdkFooterRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
let CdkRow = /*#__PURE__*/(() => {
  class CdkRow {
    static {
      this.ɵfac = function CdkRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkRow)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkRow,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
      });
    }
  }
  return CdkRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Row that can be used to display a message when no data is shown in the table. */
let CdkNoDataRow = /*#__PURE__*/(() => {
  class CdkNoDataRow {
    constructor(templateRef) {
      this.templateRef = templateRef;
      this._contentClassName = 'cdk-no-data-row';
    }
    static {
      this.ɵfac = function CdkNoDataRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkNoDataRow,
        selectors: [["ng-template", "cdkNoDataRow", ""]],
        standalone: true
      });
    }
  }
  return CdkNoDataRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._elemSizeCache = new WeakMap();
    this._resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver(entries => this._updateCachedSizes(entries)) : null;
    this._updatedStickyColumnsParamsToReplay = [];
    this._stickyColumnsReplayTimeout = null;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      'top': `${_stickCellCss}-border-elem-top`,
      'bottom': `${_stickCellCss}-border-elem-bottom`,
      'left': `${_stickCellCss}-border-elem-left`,
      'right': `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes('left') || stickyDirections.includes('right')) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      // If the row isn't an element (e.g. if it's an `ng-container`),
      // it won't have inline styles or `children` so we skip it.
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row);
      for (let i = 0; i < row.children.length; i++) {
        elementsToClear.push(row.children[i]);
      }
    }
    // Coalesce with sticky row/column updates (and potentially other changes like column resize).
    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   * @param replay Whether to enqueue this call for replay after a ResizeObserver update.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) || stickyEndStates.some(state => state))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }
      return;
    }
    // Coalesce with sticky row updates (and potentially other changes like column resize).
    this._coalescedStyleScheduler.schedule(() => {
      const firstRow = rows[0];
      const numCells = firstRow.children.length;
      const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
      const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
      const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      const lastStickyStart = stickyStartStates.lastIndexOf(true);
      const firstStickyEnd = stickyEndStates.indexOf(true);
      const isRtl = this.direction === 'rtl';
      const start = isRtl ? 'right' : 'left';
      const end = isRtl ? 'left' : 'right';
      for (const row of rows) {
        for (let i = 0; i < numCells; i++) {
          const cell = row.children[i];
          if (stickyStartStates[i]) {
            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
          }
          if (stickyEndStates[i]) {
            this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
          }
        }
      }
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    // Since we can't measure the rows on the server, we can't stick the rows properly.
    if (!this._isBrowser) {
      return;
    }
    // Coalesce with other sticky row updates (top/bottom), sticky columns updates
    // (and potentially other changes like column resize).
    this._coalescedStyleScheduler.schedule(() => {
      // If positioning the rows to the bottom, reverse their order when evaluating the sticky
      // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
      // sticky states need to be reversed as well.
      const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
      const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
      // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
      const stickyOffsets = [];
      const stickyCellHeights = [];
      const elementsToStick = [];
      for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        stickyOffsets[rowIndex] = stickyOffset;
        const row = rows[rowIndex];
        elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
        const height = this._retrieveElementSize(row).height;
        stickyOffset += height;
        stickyCellHeights[rowIndex] = height;
      }
      const borderedRowIndex = states.lastIndexOf(true);
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;
        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }
      if (position === 'top') {
        this._positionListener?.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        this._positionListener?.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    // Coalesce with other sticky updates (and potentially other changes like column resize).
    this._coalescedStyleScheduler.schedule(() => {
      const tfoot = tableElement.querySelector('tfoot');
      if (tfoot) {
        if (stickyStates.some(state => !state)) {
          this._removeStickyStyle(tfoot, ['bottom']);
        } else {
          this._addStickyStyle(tfoot, 'bottom', 0, false);
        }
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = '';
      element.classList.remove(this._borderCellCss[dir]);
    }
    // If the element no longer has any more sticky directions, remove sticky positioning and
    // the sticky CSS class.
    // Short-circuit checking element.style[dir] for stickyDirections as they
    // were already removed above.
    const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      // When not hasDirection, _getCalculatedZIndex will always return ''.
      element.style.zIndex = '';
      if (this._needsPositionStickyOnElement) {
        element.style.position = '';
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
    // loses the array generic type in the `for of`. But we *also* have to use `Array` because
    // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : '';
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Retreives the most recently observed size of the specified element from the cache, or
   * meaures it directly if not yet cached.
   */
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: 'border-box'
    });
    return size;
  }
  /**
   * Conditionally enqueue the requested sticky update and clear previously queued updates
   * for the same rows.
   */
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    // No need to replay if a flush is pending.
    if (this._stickyColumnsReplayTimeout) {
      return;
    }
    this._updatedStickyColumnsParamsToReplay.push(params);
  }
  /** Remove updates for the specified rows from the queue. */
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter(row => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter(update => !!update.rows.length);
  }
  /** Update _elemSizeCache with the observed sizes. */
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
}
function isCell(element) {
  return ['cdk-cell', 'cdk-header-cell', 'cdk-footer-cell'].some(klass => element.classList.contains(klass));
}

/**
 * Returns an error to be thrown when attempting to find an nonexistent column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the` + `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
  return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}

/** The injection token used to specify the StickyPositioningListener. */
const STICKY_POSITIONING_LISTENER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_SPL');

/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
let CdkRecycleRows = /*#__PURE__*/(() => {
  class CdkRecycleRows {
    static {
      this.ɵfac = function CdkRecycleRows_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkRecycleRows)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkRecycleRows,
        selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
        }])]
      });
    }
  }
  return CdkRecycleRows;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
let DataRowOutlet = /*#__PURE__*/(() => {
  class DataRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_TABLE);
      table._rowOutlet = this;
      table._outletAssigned();
    }
    static {
      this.ɵfac = function DataRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DataRowOutlet,
        selectors: [["", "rowOutlet", ""]],
        standalone: true
      });
    }
  }
  return DataRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
let HeaderRowOutlet = /*#__PURE__*/(() => {
  class HeaderRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_TABLE);
      table._headerRowOutlet = this;
      table._outletAssigned();
    }
    static {
      this.ɵfac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HeaderRowOutlet,
        selectors: [["", "headerRowOutlet", ""]],
        standalone: true
      });
    }
  }
  return HeaderRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
let FooterRowOutlet = /*#__PURE__*/(() => {
  class FooterRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_TABLE);
      table._footerRowOutlet = this;
      table._outletAssigned();
    }
    static {
      this.ɵfac = function FooterRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FooterRowOutlet,
        selectors: [["", "footerRowOutlet", ""]],
        standalone: true
      });
    }
  }
  return FooterRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */
let NoDataRowOutlet = /*#__PURE__*/(() => {
  class NoDataRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_TABLE);
      table._noDataRowOutlet = this;
      table._outletAssigned();
    }
    static {
      this.ɵfac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NoDataRowOutlet,
        selectors: [["", "noDataRowOutlet", ""]],
        standalone: true
      });
    }
  }
  return NoDataRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
const CDK_TABLE_TEMPLATE =
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"/>
  <ng-content select="colgroup, col"/>

  <!--
    Unprojected content throws a hydration error so we need this to capture it.
    It gets removed on the client so it doesn't affect the layout.
  -->
  @if (_isServer) {
    <ng-content/>
  }

  @if (_isNativeHtmlTable) {
    <thead role="rowgroup">
      <ng-container headerRowOutlet/>
    </thead>
    <tbody role="rowgroup">
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
    </tbody>
    <tfoot role="rowgroup">
      <ng-container footerRowOutlet/>
    </tfoot>
  } @else {
    <ng-container headerRowOutlet/>
    <ng-container rowOutlet/>
    <ng-container noDataRowOutlet/>
    <ng-container footerRowOutlet/>
  }
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_0__.EmbeddedViewRef {}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
let CdkTable = /*#__PURE__*/(() => {
  class CdkTable {
    /** Aria role to apply to the table's cells based on the table's own role. */
    _getCellRole() {
      // Perform this lazily in case the table's role was updated by a directive after construction.
      if (this._cellRoleInternal === undefined) {
        // Note that we set `role="cell"` even on native `td` elements,
        // because some browsers seem to require it. See #29784.
        const tableRole = this._elementRef.nativeElement.getAttribute('role');
        return tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
      }
      return this._cellRoleInternal;
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
      return this._trackByFn;
    }
    set trackBy(fn) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
        console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
      }
      this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
      return this._dataSource;
    }
    set dataSource(dataSource) {
      if (this._dataSource !== dataSource) {
        this._switchDataSource(dataSource);
      }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
      return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(value) {
      this._multiTemplateDataRows = value;
      // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
      // this setter will be invoked before the row outlet has been defined hence the null check.
      if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
        this._forceRenderDataRows();
        this.updateStickyColumnStyles();
      }
    }
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */
    get fixedLayout() {
      return this._fixedLayout;
    }
    set fixedLayout(value) {
      this._fixedLayout = value;
      // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.
      this._forceRecalculateCellWidths = true;
      this._stickyColumnStylesNeedReset = true;
    }
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler,
    /**
     * @deprecated `_stickyPositioningListener` parameter to become required.
     * @breaking-change 13.0.0
     */
    _stickyPositioningListener,
    /**
     * @deprecated `_unusedNgZone` parameter to be removed.
     * @breaking-change 19.0.0
     */
    _unusedNgZone) {
      this._differs = _differs;
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._dir = _dir;
      this._platform = _platform;
      this._viewRepeater = _viewRepeater;
      this._coalescedStyleScheduler = _coalescedStyleScheduler;
      this._viewportRuler = _viewportRuler;
      this._stickyPositioningListener = _stickyPositioningListener;
      /** Subject that emits when the component has been destroyed. */
      this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Map of all the user's defined columns (header, data, and footer cell template) identified by
       * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
       * any custom column definitions added to `_customColumnDefs`.
       */
      this._columnDefsByName = new Map();
      /**
       * Column definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * column definitions as *its* content child.
       */
      this._customColumnDefs = new Set();
      /**
       * Data row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * built-in data rows as *its* content child.
       */
      this._customRowDefs = new Set();
      /**
       * Header row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * built-in header rows as *its* content child.
       */
      this._customHeaderRowDefs = new Set();
      /**
       * Footer row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
       * built-in footer row as *its* content child.
       */
      this._customFooterRowDefs = new Set();
      /**
       * Whether the header row definition has been changed. Triggers an update to the header row after
       * content is checked. Initialized as true so that the table renders the initial set of rows.
       */
      this._headerRowDefChanged = true;
      /**
       * Whether the footer row definition has been changed. Triggers an update to the footer row after
       * content is checked. Initialized as true so that the table renders the initial set of rows.
       */
      this._footerRowDefChanged = true;
      /**
       * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
       * change.
       */
      this._stickyColumnStylesNeedReset = true;
      /**
       * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
       * `false`, cached values will be used instead. This is only applicable to tables with
       * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
       */
      this._forceRecalculateCellWidths = true;
      /**
       * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
       * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
       * the cached `RenderRow` objects when possible, the row identity is preserved when the data
       * and row template matches, which allows the `IterableDiffer` to check rows by reference
       * and understand which rows are added/moved/removed.
       *
       * Implemented as a map of maps where the first key is the `data: T` object and the second is the
       * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
       * contains an array of created pairs. The array is necessary to handle cases where the data
       * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
       * stored.
       */
      this._cachedRenderRowsMap = new Map();
      /**
       * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
       * table subclasses.
       */
      this.stickyCssClass = 'cdk-table-sticky';
      /**
       * Whether to manually add position: sticky to all sticky cell elements. Not needed if
       * the position is set in a selector associated with the value of stickyCssClass. May be
       * overridden by table subclasses
       */
      this.needsPositionStickyOnElement = true;
      /** Whether the no data row is currently showing anything. */
      this._isShowingNoDataRow = false;
      /** Whether the table has rendered out all the outlets for the first time. */
      this._hasAllOutlets = false;
      /** Whether the table is done initializing. */
      this._hasInitialized = false;
      this._cellRoleInternal = undefined;
      this._multiTemplateDataRows = false;
      this._fixedLayout = false;
      /**
       * Emits when the table completes rendering a set of data rows based on the latest data from the
       * data source, even if the set of rows is empty.
       */
      this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      // TODO(andrewseguin): Remove max value as the end index
      //   and instead calculate the view on init and scroll.
      /**
       * Stream containing the latest information on what rows are being displayed on screen.
       * Can be used by the data source to as a heuristic of what data should be provided.
       *
       * @docs-private
       */
      this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
        start: 0,
        end: Number.MAX_VALUE
      });
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      if (!role) {
        _elementRef.nativeElement.setAttribute('role', 'table');
      }
      this._document = _document;
      this._isServer = !_platform.isBrowser;
      this._isNativeHtmlTable = _elementRef.nativeElement.nodeName === 'TABLE';
    }
    ngOnInit() {
      this._setupStickyStyler();
      // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
      // the user has provided a custom trackBy, return the result of that function as evaluated
      // with the values of the `RenderRow`'s data and index.
      this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
        return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
      });
      this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(() => {
        this._forceRecalculateCellWidths = true;
      });
    }
    ngAfterContentInit() {
      this._hasInitialized = true;
    }
    ngAfterContentChecked() {
      // Only start re-rendering in `ngAfterContentChecked` after the first render.
      if (this._canRender()) {
        this._render();
      }
    }
    ngOnDestroy() {
      [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(def => {
        def?.clear();
      });
      this._headerRowDefs = [];
      this._footerRowDefs = [];
      this._defaultRowDef = null;
      this._onDestroy.next();
      this._onDestroy.complete();
      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.isDataSource)(this.dataSource)) {
        this.dataSource.disconnect(this);
      }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
      this._renderRows = this._getAllRenderRows();
      const changes = this._dataDiffer.diff(this._renderRows);
      if (!changes) {
        this._updateNoDataRow();
        this.contentChanged.next();
        return;
      }
      const viewContainer = this._rowOutlet.viewContainer;
      this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), record => record.item.data, change => {
        if (change.operation === _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._ViewRepeaterOperation.INSERTED && change.context) {
          this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
        }
      });
      // Update the meta context of a row's context data (index, count, first, last, ...)
      this._updateRowIndexContext();
      // Update rows that did not get added/removed/moved but may have had their identity changed,
      // e.g. if trackBy matched data on some property but the actual data reference changed.
      changes.forEachIdentityChange(record => {
        const rowView = viewContainer.get(record.currentIndex);
        rowView.context.$implicit = record.item.data;
      });
      this._updateNoDataRow();
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        this.updateStickyColumnStyles();
      }, {
        injector: this._injector
      });
      this.contentChanged.next();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
      this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
      this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
      this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
      this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.add(headerRowDef);
      this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.delete(headerRowDef);
      this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.add(footerRowDef);
      this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.delete(footerRowDef);
      this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */
    setNoDataRow(noDataRow) {
      this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
      const headerRows = this._getRenderedRows(this._headerRowOutlet);
      // Hide the thead element if there are no header rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.
      if (this._isNativeHtmlTable) {
        const thead = closestTableSection(this._headerRowOutlet, 'thead');
        if (thead) {
          thead.style.display = headerRows.length ? '' : 'none';
        }
      }
      const stickyStates = this._headerRowDefs.map(def => def.sticky);
      this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
      this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
      // Reset the dirty state of the sticky input change since it has been used.
      this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
      const footerRows = this._getRenderedRows(this._footerRowOutlet);
      // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.
      if (this._isNativeHtmlTable) {
        const tfoot = closestTableSection(this._footerRowOutlet, 'tfoot');
        if (tfoot) {
          tfoot.style.display = footerRows.length ? '' : 'none';
        }
      }
      const stickyStates = this._footerRowDefs.map(def => def.sticky);
      this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
      this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
      this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
      // Reset the dirty state of the sticky input change since it has been used.
      this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
      const headerRows = this._getRenderedRows(this._headerRowOutlet);
      const dataRows = this._getRenderedRows(this._rowOutlet);
      const footerRows = this._getRenderedRows(this._footerRowOutlet);
      // For tables not using a fixed layout, the column widths may change when new rows are rendered.
      // In a table using a fixed layout, row content won't affect column width, so sticky styles
      // don't need to be cleared unless either the sticky column config changes or one of the row
      // defs change.
      if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        this._stickyColumnStylesNeedReset = false;
      }
      // Update the sticky styles for each header row depending on the def's sticky state
      headerRows.forEach((headerRow, i) => {
        this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
      });
      // Update the sticky styles for each data row depending on its def's sticky state
      this._rowDefs.forEach(rowDef => {
        // Collect all the rows rendered with this row definition.
        const rows = [];
        for (let i = 0; i < dataRows.length; i++) {
          if (this._renderRows[i].rowDef === rowDef) {
            rows.push(dataRows[i]);
          }
        }
        this._addStickyColumnStyles(rows, rowDef);
      });
      // Update the sticky styles for each footer row depending on the def's sticky state
      footerRows.forEach((footerRow, i) => {
        this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
      });
      // Reset the dirty state of the sticky input change since it has been used.
      Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /** Invoked whenever an outlet is created and has been assigned to the table. */
    _outletAssigned() {
      // Trigger the first render once all outlets have been assigned. We do it this way, as
      // opposed to waiting for the next `ngAfterContentChecked`, because we don't know when
      // the next change detection will happen.
      // Also we can't use queries to resolve the outlets, because they're wrapped in a
      // conditional, so we have to rely on them being assigned via DI.
      if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
        this._hasAllOutlets = true;
        // In some setups this may fire before `ngAfterContentInit`
        // so we need a check here. See #28538.
        if (this._canRender()) {
          this._render();
        }
      }
    }
    /** Whether the table has all the information to start rendering. */
    _canRender() {
      return this._hasAllOutlets && this._hasInitialized;
    }
    /** Renders the table if its state has changed. */
    _render() {
      // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
      this._cacheRowDefs();
      this._cacheColumnDefs();
      // Make sure that the user has at least added header, footer, or data row def.
      if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingRowDefsError();
      }
      // Render updates if the list of columns have been changed for the header, row, or footer defs.
      const columnsChanged = this._renderUpdatedColumns();
      const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
      // Ensure sticky column styles are reset if set to `true` elsewhere.
      this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
      this._forceRecalculateCellWidths = rowDefsChanged;
      // If the header row definition has been changed, trigger a render to the header row.
      if (this._headerRowDefChanged) {
        this._forceRenderHeaderRows();
        this._headerRowDefChanged = false;
      }
      // If the footer row definition has been changed, trigger a render to the footer row.
      if (this._footerRowDefChanged) {
        this._forceRenderFooterRows();
        this._footerRowDefChanged = false;
      }
      // If there is a data source and row definitions, connect to the data source unless a
      // connection has already been made.
      if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
        this._observeRenderChanges();
      } else if (this._stickyColumnStylesNeedReset) {
        // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
        // called when it row data arrives. Otherwise, we need to call it proactively.
        this.updateStickyColumnStyles();
      }
      this._checkStickyStates();
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
      const renderRows = [];
      // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
      // new cache while unused ones can be picked up by garbage collection.
      const prevCachedRenderRows = this._cachedRenderRowsMap;
      this._cachedRenderRowsMap = new Map();
      // For each data object, get the list of rows that should be rendered, represented by the
      // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
      for (let i = 0; i < this._data.length; i++) {
        let data = this._data[i];
        const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
        if (!this._cachedRenderRowsMap.has(data)) {
          this._cachedRenderRowsMap.set(data, new WeakMap());
        }
        for (let j = 0; j < renderRowsForData.length; j++) {
          let renderRow = renderRowsForData[j];
          const cache = this._cachedRenderRowsMap.get(renderRow.data);
          if (cache.has(renderRow.rowDef)) {
            cache.get(renderRow.rowDef).push(renderRow);
          } else {
            cache.set(renderRow.rowDef, [renderRow]);
          }
          renderRows.push(renderRow);
        }
      }
      return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
      const rowDefs = this._getRowDefs(data, dataIndex);
      return rowDefs.map(rowDef => {
        const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
        if (cachedRenderRows.length) {
          const dataRow = cachedRenderRows.shift();
          dataRow.dataIndex = dataIndex;
          return dataRow;
        } else {
          return {
            data,
            rowDef,
            dataIndex
          };
        }
      });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
      this._columnDefsByName.clear();
      const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
      columnDefs.forEach(columnDef => {
        if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableDuplicateColumnNameError(columnDef.name);
        }
        this._columnDefsByName.set(columnDef.name, columnDef);
      });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
      this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
      this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
      this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
      // After all row definitions are determined, find the row definition to be considered default.
      const defaultRowDefs = this._rowDefs.filter(def => !def.when);
      if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMultipleDefaultRowDefsError();
      }
      this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
      const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
      // Force re-render data rows if the list of column definitions have changed.
      const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
      if (dataColumnsChanged) {
        this._forceRenderDataRows();
      }
      // Force re-render header/footer rows if the list of column definitions have changed.
      const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
      if (headerColumnsChanged) {
        this._forceRenderHeaderRows();
      }
      const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
      if (footerColumnsChanged) {
        this._forceRenderFooterRows();
      }
      return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
      this._data = [];
      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.isDataSource)(this.dataSource)) {
        this.dataSource.disconnect(this);
      }
      // Stop listening for data from the previous data source.
      if (this._renderChangeSubscription) {
        this._renderChangeSubscription.unsubscribe();
        this._renderChangeSubscription = null;
      }
      if (!dataSource) {
        if (this._dataDiffer) {
          this._dataDiffer.diff([]);
        }
        if (this._rowOutlet) {
          this._rowOutlet.viewContainer.clear();
        }
      }
      this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
      // If no data source has been set, there is nothing to observe for changes.
      if (!this.dataSource) {
        return;
      }
      let dataStream;
      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.isDataSource)(this.dataSource)) {
        dataStream = this.dataSource.connect(this);
      } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(this.dataSource)) {
        dataStream = this.dataSource;
      } else if (Array.isArray(this.dataSource)) {
        dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.dataSource);
      }
      if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableUnknownDataSourceError();
      }
      this._renderChangeSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(data => {
        this._data = data || [];
        this.renderRows();
      });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
      // Clear the header row outlet if any content exists.
      if (this._headerRowOutlet.viewContainer.length > 0) {
        this._headerRowOutlet.viewContainer.clear();
      }
      this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
      this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
      // Clear the footer row outlet if any content exists.
      if (this._footerRowOutlet.viewContainer.length > 0) {
        this._footerRowOutlet.viewContainer.clear();
      }
      this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
      this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
      const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
        const columnDef = this._columnDefsByName.get(columnName);
        if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnName);
        }
        return columnDef;
      });
      const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
      const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
      this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
      const renderedRows = [];
      for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
        const viewRef = rowOutlet.viewContainer.get(i);
        renderedRows.push(viewRef.rootNodes[0]);
      }
      return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
      if (this._rowDefs.length == 1) {
        return [this._rowDefs[0]];
      }
      let rowDefs = [];
      if (this.multiTemplateDataRows) {
        rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
      } else {
        let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
        if (rowDef) {
          rowDefs.push(rowDef);
        }
      }
      if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingMatchingRowDefError(data);
      }
      return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
      const rowDef = renderRow.rowDef;
      const context = {
        $implicit: renderRow.data
      };
      return {
        templateRef: rowDef.template,
        context,
        index
      };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
      // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
      const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
      this._renderCellTemplateForItem(rowDef, context);
      return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
      for (let cellTemplate of this._getCellTemplates(rowDef)) {
        if (CdkCellOutlet.mostRecentCellOutlet) {
          CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
        }
      }
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
      const viewContainer = this._rowOutlet.viewContainer;
      for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
        const viewRef = viewContainer.get(renderIndex);
        const context = viewRef.context;
        context.count = count;
        context.first = renderIndex === 0;
        context.last = renderIndex === count - 1;
        context.even = renderIndex % 2 === 0;
        context.odd = !context.even;
        if (this.multiTemplateDataRows) {
          context.dataIndex = this._renderRows[renderIndex].dataIndex;
          context.renderIndex = renderIndex;
        } else {
          context.index = this._renderRows[renderIndex].dataIndex;
        }
      }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
      if (!rowDef || !rowDef.columns) {
        return [];
      }
      return Array.from(rowDef.columns, columnId => {
        const column = this._columnDefsByName.get(columnId);
        if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnId);
        }
        return rowDef.extractCellTemplate(column);
      });
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
      this._dataDiffer.diff([]);
      this._rowOutlet.viewContainer.clear();
      this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
      const stickyCheckReducer = (acc, d) => {
        return acc || d.hasStickyChanged();
      };
      // Note that the check needs to occur for every definition since it notifies the definition
      // that it can reset its dirty state. Using another operator like `some` may short-circuit
      // remaining definitions and leave them in an unchecked state.
      if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyHeaderRowStyles();
      }
      if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyFooterRowStyles();
      }
      if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
        this._stickyColumnStylesNeedReset = true;
        this.updateStickyColumnStyles();
      }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
      const direction = this._dir ? this._dir.value : 'ltr';
      this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
      (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(value => {
        this._stickyStyler.direction = value;
        this.updateStickyColumnStyles();
      });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
      return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
      const noDataRow = this._customNoDataRow || this._noDataRow;
      if (!noDataRow) {
        return;
      }
      const shouldShow = this._rowOutlet.viewContainer.length === 0;
      if (shouldShow === this._isShowingNoDataRow) {
        return;
      }
      const container = this._noDataRowOutlet.viewContainer;
      if (shouldShow) {
        const view = container.createEmbeddedView(noDataRow.templateRef);
        const rootNode = view.rootNodes[0];
        // Only add the attributes if we have a single root node since it's hard
        // to figure out which one to add it to when there are multiple.
        if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
          rootNode.setAttribute('role', 'row');
          rootNode.classList.add(noDataRow._contentClassName);
        }
      } else {
        container.clear();
      }
      this._isShowingNoDataRow = shouldShow;
      this._changeDetectorRef.markForCheck();
    }
    static {
      this.ɵfac = function CdkTable_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkTable,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkRowDef, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
          }
        },
        hostAttrs: [1, "cdk-table"],
        hostVars: 2,
        hostBindings: function CdkTable_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
          }
        },
        inputs: {
          trackBy: "trackBy",
          dataSource: "dataSource",
          multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          fixedLayout: [2, "fixedLayout", "fixedLayout", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          contentChanged: "contentChanged"
        },
        exportAs: ["cdkTable"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_TABLE,
          useExisting: CdkTable
        }, {
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
        }, {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 2,
        consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function CdkTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CdkTable_Conditional_2_Template, 1, 0)(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isServer ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isNativeHtmlTable ? 3 : 4);
          }
        },
        dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
        styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
        encapsulation: 2
      });
    }
  }
  return CdkTable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
/**
 * Finds the closest table section to an outlet. We can't use `HTMLElement.closest` for this,
 * because the node representing the outlet is a comment.
 */
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    // 1 is an element node.
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === 'TABLE') {
      // Stop traversing past the `table` node.
      break;
    }
    current = current.parentNode;
  }
  return null;
}

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
let CdkTextColumn = /*#__PURE__*/(() => {
  class CdkTextColumn {
    /** Column name that should be used to reference this column. */
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
      // With Ivy, inputs can be initialized before static query results are
      // available. In that case, we defer the synchronization until "ngOnInit" fires.
      this._syncColumnDefName();
    }
    constructor(
    // `CdkTextColumn` is always requiring a table, but we just assert it manually
    // for better error reporting.
    // tslint:disable-next-line: lightweight-tokens
    _table, _options) {
      this._table = _table;
      this._options = _options;
      /** Alignment of the cell values. */
      this.justify = 'start';
      this._options = _options || {};
    }
    ngOnInit() {
      this._syncColumnDefName();
      if (this.headerText === undefined) {
        this.headerText = this._createDefaultHeaderText();
      }
      if (!this.dataAccessor) {
        this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
      }
      if (this._table) {
        // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
        // since the columnDef will not pick up its content by the time the table finishes checking
        // its content and initializing the rows.
        this.columnDef.cell = this.cell;
        this.columnDef.headerCell = this.headerCell;
        this._table.addColumnDef(this.columnDef);
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getTableTextColumnMissingParentTableError();
      }
    }
    ngOnDestroy() {
      if (this._table) {
        this._table.removeColumnDef(this.columnDef);
      }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText() {
      const name = this.name;
      if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableTextColumnMissingNameError();
      }
      if (this._options && this._options.defaultHeaderTextTransform) {
        return this._options.defaultHeaderTextTransform(name);
      }
      return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */
    _syncColumnDefName() {
      if (this.columnDef) {
        this.columnDef.name = this.name;
      }
    }
    static {
      this.ɵfac = function CdkTextColumn_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkTextColumn,
        selectors: [["cdk-text-column"]],
        viewQuery: function CdkTextColumn_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CdkColumnDef, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CdkCellDef, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CdkHeaderCellDef, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          }
        },
        inputs: {
          name: "name",
          headerText: "headerText",
          dataAccessor: "dataAccessor",
          justify: "justify"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 0,
        consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
        template: function CdkTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
        encapsulation: 2
      });
    }
  }
  return CdkTextColumn;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
let CdkTableModule = /*#__PURE__*/(() => {
  class CdkTableModule {
    static {
      this.ɵfac = function CdkTableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkTableModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CdkTableModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollingModule]
      });
    }
  }
  return CdkTableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 * @deprecated Implement the `CanStick` interface instead.
 * @breaking-change 19.0.0
 */
function mixinHasStickyInput(base) {
  return class extends base {
    /** Whether sticky positioning should be applied. */
    get sticky() {
      return this._sticky;
    }
    set sticky(v) {
      const prevValue = this._sticky;
      this._sticky = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(v);
      this._hasStickyChanged = prevValue !== this._sticky;
    }
    /** Whether the sticky value has changed since this was last called. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this._hasStickyChanged = false;
      return hasStickyChanged;
    }
    /** Resets the dirty check for cases where the sticky state has been used without checking. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    constructor(...args) {
      super(...args);
      this._sticky = false;
      /** Whether the sticky input has changed since it was last checked. */
      this._hasStickyChanged = false;
    }
  };
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=table.mjs.map

/***/ }),

/***/ 7212:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outputFromObservable: () => (/* binding */ outputFromObservable),
/* harmony export */   outputToObservable: () => (/* binding */ outputToObservable),
/* harmony export */   takeUntilDestroyed: () => (/* binding */ takeUntilDestroyed),
/* harmony export */   toObservable: () => (/* binding */ toObservable),
/* harmony export */   toSignal: () => (/* binding */ toSignal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9090);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6340);
/**
 * @license Angular v18.2.13
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * Operator which completes the Observable when the calling context (component, directive, service,
 * etc) is destroyed.
 *
 * @param destroyRef optionally, the `DestroyRef` representing the current context. This can be
 *     passed explicitly to use `takeUntilDestroyed` outside of an [injection
 * context](guide/di/dependency-injection-context). Otherwise, the current `DestroyRef` is injected.
 *
 * @developerPreview
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(takeUntilDestroyed);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  }
  const destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return source => {
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroyed$));
  };
}

/**
 * Implementation of `OutputRef` that emits values from
 * an RxJS observable source.
 *
 * @internal
 */
class OutputFromObservableRef {
  constructor(source) {
    this.source = source;
    this.destroyed = false;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  subscribe(callbackFn) {
    if (this.destroyed) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](953 /* ɵRuntimeErrorCode.OUTPUT_REF_DESTROYED */, ngDevMode && 'Unexpected subscription to destroyed `OutputRef`. ' + 'The owning directive/component is destroyed.');
    }
    // Stop yielding more values when the directive/component is already destroyed.
    const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: value => callbackFn(value)
    });
    return {
      unsubscribe: () => subscription.unsubscribe()
    };
  }
}
/**
 * Declares an Angular output that is using an RxJS observable as a source
 * for events dispatched to parent subscribers.
 *
 * The behavior for an observable as source is defined as followed:
 *    1. New values are forwarded to the Angular output (next notifications).
 *    2. Errors notifications are not handled by Angular. You need to handle these manually.
 *       For example by using `catchError`.
 *    3. Completion notifications stop the output from emitting new values.
 *
 * @usageNotes
 * Initialize an output in your directive by declaring a
 * class field and initializing it with the `outputFromObservable()` function.
 *
 * ```ts
 * @Directive({..})
 * export class MyDir {
 *   nameChange$ = <some-observable>;
 *   nameChange = outputFromObservable(this.nameChange$);
 * }
 * ```
 *
 * @developerPreview
 */
function outputFromObservable(observable, opts) {
  ngDevMode && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(outputFromObservable);
  return new OutputFromObservableRef(observable);
}

/**
 * Converts an Angular output declared via `output()` or `outputFromObservable()`
 * to an observable.
 *
 * You can subscribe to the output via `Observable.subscribe` then.
 *
 * @developerPreview
 */
function outputToObservable(ref) {
  const destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵgetOutputDestroyRef"])(ref);
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    // Complete the observable upon directive/component destroy.
    // Note: May be `undefined` if an `EventEmitter` is declared outside
    // of an injection context.
    destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe(v => observer.next(v));
    return () => subscription.unsubscribe();
  });
}

/**
 * Exposes the value of an Angular `Signal` as an RxJS `Observable`.
 *
 * The signal's value will be propagated into the `Observable`'s subscribers using an `effect`.
 *
 * `toObservable` must be called in an injection context unless an injector is provided via options.
 *
 * @developerPreview
 */
function toObservable(source, options) {
  !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toObservable);
  const injector = options?.injector ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
  const watcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.error(err));
      return;
    }
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}

/**
 * Get the current value of an `Observable` as a reactive `Signal`.
 *
 * `toSignal` returns a `Signal` which provides synchronous reactive access to values produced
 * by the given `Observable`, by subscribing to that `Observable`. The returned `Signal` will always
 * have the most recent value emitted by the subscription, and will throw an error if the
 * `Observable` errors.
 *
 * With `requireSync` set to `true`, `toSignal` will assert that the `Observable` produces a value
 * immediately upon subscription. No `initialValue` is needed in this case, and the returned signal
 * does not include an `undefined` type.
 *
 * By default, the subscription will be automatically cleaned up when the current [injection
 * context](guide/di/dependency-injection-context) is destroyed. For example, when `toSignal` is
 * called during the construction of a component, the subscription will be cleaned up when the
 * component is destroyed. If an injection context is not available, an explicit `Injector` can be
 * passed instead.
 *
 * If the subscription should persist until the `Observable` itself completes, the `manualCleanup`
 * option can be specified instead, which disables the automatic subscription teardown. No injection
 * context is needed in this configuration as well.
 *
 * @developerPreview
 */
function toSignal(source, options) {
  ngDevMode && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertNotInReactiveContext)(toSignal, 'Invoking `toSignal` causes new subscriptions every time. ' + 'Consider moving `toSignal` outside of the reactive context and read the signal value where needed.');
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  // Note: T is the Observable value type, and U is the initial value type. They don't have to be
  // the same - the returned signal gives values of type `T`.
  let state;
  if (options?.requireSync) {
    // Initially the signal is in a `NoValue` state.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 0 /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    // If an initial value was passed, use it. Otherwise, use `undefined` as the initial value.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 1 /* StateKind.Value */,
      value: options?.initialValue
    }, {
      equal
    });
  }
  // Note: This code cannot run inside a reactive context (see assertion above). If we'd support
  // this, we would subscribe to the observable outside of the current reactive context, avoiding
  // that side-effect signal reads/writes are attribute to the current consumer. The current
  // consumer only needs to be notified when the `state` signal changes through the observable
  // subscription. Additional context (related to async pipe):
  // https://github.com/angular/angular/pull/50522.
  const sub = source.subscribe({
    next: value => state.set({
      kind: 1 /* StateKind.Value */,
      value
    }),
    error: error => {
      if (options?.rejectErrors) {
        // Kick the error back to RxJS. It will be caught and rethrown in a macrotask, which causes
        // the error to end up as an uncaught exception.
        throw error;
      }
      state.set({
        kind: 2 /* StateKind.Error */,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0 /* StateKind.NoValue */) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
  }
  // Unsubscribe when the current context is destroyed, if requested.
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  // The actual returned signal is a `computed` of the `State` signal, which maps the various states
  // to either values or errors.
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const current = state();
    switch (current.kind) {
      case 1 /* StateKind.Value */:
        return current.value;
      case 2 /* StateKind.Error */:
        throw current.error;
      case 0 /* StateKind.NoValue */:
        // This shouldn't really happen because the error is thrown on creation.
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 /* StateKind.Value */ && b.kind === 1 /* StateKind.Value */ && userEquality(a.value, b.value);
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=rxjs-interop.mjs.map

/***/ }),

/***/ 1640:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/progress-spinner.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS: () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS),
/* harmony export */   MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MatProgressSpinner: () => (/* binding */ MatProgressSpinner),
/* harmony export */   MatProgressSpinnerModule: () => (/* binding */ MatProgressSpinnerModule),
/* harmony export */   MatSpinner: () => (/* binding */ MatSpinner)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 3788);





/** Injection token to be used to override the default options for `mat-progress-spinner`. */
const _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0._viewBox());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._circleRadius());
  }
}
const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-progress-spinner-default-options', {
  providedIn: 'root',
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
/**
 * Base reference size of the spinner.
 */
const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 */
const BASE_STROKE_WIDTH = 10;
let MatProgressSpinner = /*#__PURE__*/(() => {
  class MatProgressSpinner {
    // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
    /**
     * Theme color of the progress spinner. This API is supported in M2 themes only, it
     * has no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     */
    get color() {
      return this._color || this._defaultColor;
    }
    set color(value) {
      this._color = value;
    }
    constructor(_elementRef, animationMode, defaults) {
      this._elementRef = _elementRef;
      this._defaultColor = 'primary';
      this._value = 0;
      this._diameter = BASE_SIZE;
      this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;
      this.mode = _elementRef.nativeElement.nodeName.toLowerCase() === 'mat-spinner' ? 'indeterminate' : 'determinate';
      if (defaults) {
        if (defaults.color) {
          this.color = this._defaultColor = defaults.color;
        }
        if (defaults.diameter) {
          this.diameter = defaults.diameter;
        }
        if (defaults.strokeWidth) {
          this.strokeWidth = defaults.strokeWidth;
        }
      }
    }
    /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() {
      return this.mode === 'determinate' ? this._value : 0;
    }
    set value(v) {
      this._value = Math.max(0, Math.min(100, v || 0));
    }
    /** The diameter of the progress spinner (will set width and height of svg). */
    get diameter() {
      return this._diameter;
    }
    set diameter(size) {
      this._diameter = size || 0;
    }
    /** Stroke width of the progress spinner. */
    get strokeWidth() {
      return this._strokeWidth ?? this.diameter / 10;
    }
    set strokeWidth(value) {
      this._strokeWidth = value || 0;
    }
    /** The radius of the spinner, adjusted for stroke width. */
    _circleRadius() {
      return (this.diameter - BASE_STROKE_WIDTH) / 2;
    }
    /** The view box of the spinner's svg element. */
    _viewBox() {
      const viewBox = this._circleRadius() * 2 + this.strokeWidth;
      return `0 0 ${viewBox} ${viewBox}`;
    }
    /** The stroke circumference of the svg circle. */
    _strokeCircumference() {
      return 2 * Math.PI * this._circleRadius();
    }
    /** The dash offset of the svg circle. */
    _strokeDashOffset() {
      if (this.mode === 'determinate') {
        return this._strokeCircumference() * (100 - this._value) / 100;
      }
      return null;
    }
    /** Stroke width of the circle in percent. */
    _circleStrokeWidth() {
      return this.strokeWidth / this.diameter * 100;
    }
    static {
      this.ɵfac = function MatProgressSpinner_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressSpinner,
        selectors: [["mat-progress-spinner"], ["mat-spinner"]],
        viewQuery: function MatProgressSpinner_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._determinateCircle = _t.first);
          }
        },
        hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
        hostVars: 18,
        hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + ctx.color);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mdc-circular-progress-size", ctx.diameter + "px")("--mdc-circular-progress-active-indicator-width", ctx.diameter + "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          value: [2, "value", "value", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          diameter: [2, "diameter", "diameter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          strokeWidth: [2, "strokeWidth", "strokeWidth", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
        },
        exportAs: ["matProgressSpinner"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 14,
        vars: 11,
        consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
        template: function MatProgressSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](9, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](11, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            const circle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx._circleRadius());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", circle_r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", circle_r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", circle_r2);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-app-primary))}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatProgressSpinner;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @deprecated Import Progress Spinner instead. Note that the
 *    `mat-spinner` selector isn't deprecated.
 * @breaking-change 16.0.0
 */
// tslint:disable-next-line:variable-name
const MatSpinner = MatProgressSpinner;
let MatProgressSpinnerModule = /*#__PURE__*/(() => {
  class MatProgressSpinnerModule {
    static {
      this.ɵfac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatProgressSpinnerModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressSpinnerModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
      });
    }
  }
  return MatProgressSpinnerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=progress-spinner.mjs.map

/***/ }),

/***/ 8403:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/table.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatCell: () => (/* binding */ MatCell),
/* harmony export */   MatCellDef: () => (/* binding */ MatCellDef),
/* harmony export */   MatColumnDef: () => (/* binding */ MatColumnDef),
/* harmony export */   MatFooterCell: () => (/* binding */ MatFooterCell),
/* harmony export */   MatFooterCellDef: () => (/* binding */ MatFooterCellDef),
/* harmony export */   MatFooterRow: () => (/* binding */ MatFooterRow),
/* harmony export */   MatFooterRowDef: () => (/* binding */ MatFooterRowDef),
/* harmony export */   MatHeaderCell: () => (/* binding */ MatHeaderCell),
/* harmony export */   MatHeaderCellDef: () => (/* binding */ MatHeaderCellDef),
/* harmony export */   MatHeaderRow: () => (/* binding */ MatHeaderRow),
/* harmony export */   MatHeaderRowDef: () => (/* binding */ MatHeaderRowDef),
/* harmony export */   MatNoDataRow: () => (/* binding */ MatNoDataRow),
/* harmony export */   MatRecycleRows: () => (/* binding */ MatRecycleRows),
/* harmony export */   MatRow: () => (/* binding */ MatRow),
/* harmony export */   MatRowDef: () => (/* binding */ MatRowDef),
/* harmony export */   MatTable: () => (/* binding */ MatTable),
/* harmony export */   MatTableDataSource: () => (/* binding */ MatTableDataSource),
/* harmony export */   MatTableModule: () => (/* binding */ MatTableModule),
/* harmony export */   MatTextColumn: () => (/* binding */ MatTextColumn)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ 3448);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 2067);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 3788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 199);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3527);









/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
const _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
const _c1 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 3)(4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tfoot", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](6, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
let MatRecycleRows = /*#__PURE__*/(() => {
  class MatRecycleRows {
    static {
      this.ɵfac = function MatRecycleRows_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatRecycleRows)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRecycleRows,
        selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
        }])]
      });
    }
  }
  return MatRecycleRows;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatTable = /*#__PURE__*/(() => {
  class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable {
    constructor() {
      super(...arguments);
      /** Overrides the sticky CSS class set by the `CdkTable`. */
      this.stickyCssClass = 'mat-mdc-table-sticky';
      /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
      this.needsPositionStickyOnElement = false;
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatTable_BaseFactory;
        return function MatTable_Factory(__ngFactoryType__) {
          return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable)))(__ngFactoryType__ || MatTable);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTable,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
        hostVars: 2,
        hostBindings: function MatTable_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-table-fixed-layout", ctx.fixedLayout);
          }
        },
        exportAs: ["matTable"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
          useExisting: MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
          useExisting: MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
          useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
          useValue: null
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 2,
        consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function MatTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTable_Conditional_2_Template, 1, 0)(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isServer ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isNativeHtmlTable ? 3 : 4);
          }
        },
        dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.NoDataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.FooterRowOutlet],
        styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-app-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-app-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-app-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-app-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-app-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
        encapsulation: 2
      });
    }
  }
  return MatTable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
let MatCellDef = /*#__PURE__*/(() => {
  class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatCellDef_BaseFactory;
        return function MatCellDef_Factory(__ngFactoryType__) {
          return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef)))(__ngFactoryType__ || MatCellDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCellDef,
        selectors: [["", "matCellDef", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
          useExisting: MatCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
let MatHeaderCellDef = /*#__PURE__*/(() => {
  class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatHeaderCellDef_BaseFactory;
        return function MatHeaderCellDef_Factory(__ngFactoryType__) {
          return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef)))(__ngFactoryType__ || MatHeaderCellDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderCellDef,
        selectors: [["", "matHeaderCellDef", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
          useExisting: MatHeaderCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatHeaderCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
let MatFooterCellDef = /*#__PURE__*/(() => {
  class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatFooterCellDef_BaseFactory;
        return function MatFooterCellDef_Factory(__ngFactoryType__) {
          return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef)))(__ngFactoryType__ || MatFooterCellDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterCellDef,
        selectors: [["", "matFooterCellDef", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
          useExisting: MatFooterCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatFooterCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
let MatColumnDef = /*#__PURE__*/(() => {
  class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef {
    /** Unique name for this column. */
    get name() {
      return this._name;
    }
    set name(name) {
      this._setNameInput(name);
    }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
      super._updateColumnCssClassName();
      this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatColumnDef_BaseFactory;
        return function MatColumnDef_Factory(__ngFactoryType__) {
          return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef)))(__ngFactoryType__ || MatColumnDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatColumnDef,
        selectors: [["", "matColumnDef", ""]],
        inputs: {
          name: [0, "matColumnDef", "name"]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
          useExisting: MatColumnDef
        }, {
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: MatColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatColumnDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header cell template container that adds the right classes and role. */
let MatHeaderCell = /*#__PURE__*/(() => {
  class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCell {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatHeaderCell_BaseFactory;
        return function MatHeaderCell_Factory(__ngFactoryType__) {
          return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell)))(__ngFactoryType__ || MatHeaderCell);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderCell,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatHeaderCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer cell template container that adds the right classes and role. */
let MatFooterCell = /*#__PURE__*/(() => {
  class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCell {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatFooterCell_BaseFactory;
        return function MatFooterCell_Factory(__ngFactoryType__) {
          return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell)))(__ngFactoryType__ || MatFooterCell);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterCell,
        selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
        hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatFooterCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Cell template container that adds the right classes and role. */
let MatCell = /*#__PURE__*/(() => {
  class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCell {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatCell_BaseFactory;
        return function MatCell_Factory(__ngFactoryType__) {
          return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell)))(__ngFactoryType__ || MatCell);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCell,
        selectors: [["mat-cell"], ["td", "mat-cell", ""]],
        hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// We can't reuse `CDK_ROW_TEMPLATE` because it's incompatible with local compilation mode.
const ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
let MatHeaderRowDef = /*#__PURE__*/(() => {
  class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatHeaderRowDef_BaseFactory;
        return function MatHeaderRowDef_Factory(__ngFactoryType__) {
          return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef)))(__ngFactoryType__ || MatHeaderRowDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderRowDef,
        selectors: [["", "matHeaderRowDef", ""]],
        inputs: {
          columns: [0, "matHeaderRowDef", "columns"],
          sticky: [2, "matHeaderRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
          useExisting: MatHeaderRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatHeaderRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
let MatFooterRowDef = /*#__PURE__*/(() => {
  class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatFooterRowDef_BaseFactory;
        return function MatFooterRowDef_Factory(__ngFactoryType__) {
          return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef)))(__ngFactoryType__ || MatFooterRowDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterRowDef,
        selectors: [["", "matFooterRowDef", ""]],
        inputs: {
          columns: [0, "matFooterRowDef", "columns"],
          sticky: [2, "matFooterRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
          useExisting: MatFooterRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatFooterRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
let MatRowDef = /*#__PURE__*/(() => {
  class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatRowDef_BaseFactory;
        return function MatRowDef_Factory(__ngFactoryType__) {
          return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef)))(__ngFactoryType__ || MatRowDef);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRowDef,
        selectors: [["", "matRowDef", ""]],
        inputs: {
          columns: [0, "matRowDefColumns", "columns"],
          when: [0, "matRowDefWhen", "when"]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
          useExisting: MatRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */
let MatHeaderRow = /*#__PURE__*/(() => {
  class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatHeaderRow_BaseFactory;
        return function MatHeaderRow_Factory(__ngFactoryType__) {
          return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow)))(__ngFactoryType__ || MatHeaderRow);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatHeaderRow,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
        exportAs: ["matHeaderRow"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
          useExisting: MatHeaderRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });
    }
  }
  return MatHeaderRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
let MatFooterRow = /*#__PURE__*/(() => {
  class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatFooterRow_BaseFactory;
        return function MatFooterRow_Factory(__ngFactoryType__) {
          return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow)))(__ngFactoryType__ || MatFooterRow);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatFooterRow,
        selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
        exportAs: ["matFooterRow"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
          useExisting: MatFooterRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });
    }
  }
  return MatFooterRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
let MatRow = /*#__PURE__*/(() => {
  class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatRow_BaseFactory;
        return function MatRow_Factory(__ngFactoryType__) {
          return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow)))(__ngFactoryType__ || MatRow);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatRow,
        selectors: [["mat-row"], ["tr", "mat-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
        exportAs: ["matRow"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
          useExisting: MatRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });
    }
  }
  return MatRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Row that can be used to display a message when no data is shown in the table. */
let MatNoDataRow = /*#__PURE__*/(() => {
  class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow {
    constructor() {
      super(...arguments);
      this._contentClassName = 'mat-mdc-no-data-row';
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatNoDataRow_BaseFactory;
        return function MatNoDataRow_Factory(__ngFactoryType__) {
          return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow)))(__ngFactoryType__ || MatNoDataRow);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatNoDataRow,
        selectors: [["ng-template", "matNoDataRow", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
          useExisting: MatNoDataRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatNoDataRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
let MatTextColumn = /*#__PURE__*/(() => {
  class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTextColumn {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatTextColumn_BaseFactory;
        return function MatTextColumn_Factory(__ngFactoryType__) {
          return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn)))(__ngFactoryType__ || MatTextColumn);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTextColumn,
        selectors: [["mat-text-column"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 0,
        consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
        template: function MatTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
        encapsulation: 2
      });
    }
  }
  return MatTextColumn;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const EXPORTED_DECLARATIONS = [
// Table
MatTable, MatRecycleRows,
// Template defs
MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef,
// Cell directives
MatHeaderCell, MatCell, MatFooterCell,
// Row directives
MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
let MatTableModule = /*#__PURE__*/(() => {
  class MatTableModule {
    static {
      this.ɵfac = function MatTableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTableModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatTableModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });
    }
  }
  return MatTableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterPredicate,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
class MatTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource {
  /** Array of data that should be rendered by the table, where each object represents one row. */
  get data() {
    return this._data.value;
  }
  set data(data) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);
    // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */
  get filter() {
    return this._filter.value;
  }
  set filter(filter) {
    this._filter.next(filter);
    // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */
  get sort() {
    return this._sort;
  }
  set sort(sort) {
    this._sort = sort;
    this._updateChangeSubscription();
  }
  /**
   * Instance of the paginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the paginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */
  get paginator() {
    return this._paginator;
  }
  set paginator(paginator) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }
  constructor(initialData = []) {
    super();
    /** Stream emitting render data to the table (depends on ordered data changes). */
    this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    /** Stream that emits when a new filter string is set on the data source. */
    this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    /** Used to react to internal changes of the paginator that are made by the data source itself. */
    this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */
    this._renderChangesSubscription = null;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * @param data Data object that is being accessed.
     * @param sortHeaderId The name of the column that represents the data.
     */
    this.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      if ((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__._isNumberValue)(value)) {
        const numberValue = Number(value);
        // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we leave them as strings.
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }
      return value;
    };
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * @param data The array of data that should be sorted.
     * @param sort The connected MatSort that holds the current sort state.
     */
    this.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction == '') {
        return data;
      }
      return data.sort((a, b) => {
        let valueA = this.sortingDataAccessor(a, active);
        let valueB = this.sortingDataAccessor(b, active);
        // If there are data in the column that can be converted to a number,
        // it must be ensured that the rest of the data
        // is of the same type so as not to order incorrectly.
        const valueAType = typeof valueA;
        const valueBType = typeof valueB;
        if (valueAType !== valueBType) {
          if (valueAType === 'number') {
            valueA += '';
          }
          if (valueBType === 'number') {
            valueB += '';
          }
        }
        // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).
        let comparatorResult = 0;
        if (valueA != null && valueB != null) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }
        return comparatorResult * (direction == 'asc' ? 1 : -1);
      });
    };
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * @param data Data object used to check against the filter.
     * @param filter Filter string that has been set on the data source.
     * @returns Whether the filter matches against the data
     */
    this.filterPredicate = (data, filter) => {
      // Transform the data into a lowercase string of all property values.
      const dataStr = Object.keys(data).reduce((currentTerm, key) => {
        // Use an obscure Unicode character to delimit the words in the concatenated string.
        // This avoids matches where the values of two columns combined will match the user's query
        // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
        // that has a very low chance of being typed in by somebody in a text field. This one in
        // particular is "White up-pointing triangle with dot" from
        // https://en.wikipedia.org/wiki/List_of_Unicode_characters
        return currentTerm + data[key] + '◬';
      }, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(initialData);
    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */
  _updateChangeSubscription() {
    // Sorting and/or pagination should be watched if sort and/or paginator are provided.
    // The events should emit whenever the component emits a change or initializes, or if no
    // component is provided, a stream with just a null event should be provided.
    // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
    // pipeline can progress to the next step. Note that the value from these streams are not used,
    // they purely act as a signal to progress in the pipeline.
    const sortChange = this._sort ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._sort.sortChange, this._sort.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    const pageChange = this._paginator ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    const dataStream = this._data;
    // Watch for base data or filter changes to provide a filtered set of data.
    const filteredData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([dataStream, this._filter]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._filterData(data)));
    // Watch for filtered data or sort changes to provide an ordered set of data.
    const orderedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([filteredData, sortChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._orderData(data)));
    // Watch for ordered data or page changes to provide a paged set of data.
    const paginatedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([orderedData, pageChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._pageData(data)));
    // Watched for paged data changes and send the result to the table to render.
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterPredicate function. If no filter is set, returns the data array
   * as provided.
   */
  _filterData(data) {
    // If there is a filter string, filter out data that does not contain it.
    // Each data object is converted to a string using the function defined by filterPredicate.
    // May be overridden for customization.
    this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }
    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */
  _orderData(data) {
    // If there is no active sort or direction, return the data without trying to sort.
    if (!this.sort) {
      return data;
    }
    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided paginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */
  _pageData(data) {
    if (!this.paginator) {
      return data;
    }
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */
  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;
      if (!paginator) {
        return;
      }
      paginator.length = filteredDataLength;
      // If the page index is set beyond the page, reduce it to the last page.
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
          // Since the paginator only emits after user-generated changes,
          // we need our own stream so we know to should re-render the data.
          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */
  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */
  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=table.mjs.map

/***/ })

}]);