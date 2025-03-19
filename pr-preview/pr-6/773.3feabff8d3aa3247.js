"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[773],{

/***/ 4446:
/*!*******************************************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/components/filter-bar/filter-bar.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterBarComponent: () => (/* binding */ FilterBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 9344);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6182);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 2221);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 2583);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 3788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 6865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 7222);
/* harmony import */ var _js_camp_core_models_enums_anime_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/core/models/enums/anime-type */ 381);












function FilterBarComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.animeType.toReadable(type_r1));
  }
}
/** Filter bar component. */
let FilterBarComponent = /*#__PURE__*/(() => {
  class FilterBarComponent {
    constructor() {
      /** Search emit. */
      this.search = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      /** Filter emit. */
      this.filter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      /** Types list. */
      this.types = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
      /** Selected types. */
      this.selectedTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)([]);
      /** Search value. */
      this.searchValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
      /** Is hidden clear button. */
      this.isHiddenClearButton = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(true);
      /** Anime type enum. */
      this.animeType = _js_camp_core_models_enums_anime_type__WEBPACK_IMPORTED_MODULE_0__.AnimeType;
      /** Form builder. */
      this.formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NonNullableFormBuilder);
      /** Search form group. */
      this.searchForm = this.formBuilder.group({
        search: ''
      });
    }
    /**
     * Change filter.
     * @param event Filter change event.
     */
    onFilterChange(event) {
      this.filter.emit(event.value);
    }
    /** Input search value. */
    onInputSearchValue() {
      this.isHiddenClearButton.set(this.searchForm.value.search === '');
    }
    /** Search movie. */
    onSearch() {
      this.search.emit(this.searchForm.value.search);
    }
    /** Clear search. */
    onClearSearch() {
      this.searchForm.setValue({
        search: ''
      });
      this.isHiddenClearButton.set(true);
      this.search.emit('');
    }
    /** @inheritdoc */
    ngOnInit() {
      this.searchForm.setValue({
        search: this.searchValue() ?? ''
      });
      this.isHiddenClearButton.set(!this.searchValue());
    }
    static {
      this.ɵfac = function FilterBarComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FilterBarComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FilterBarComponent,
        selectors: [["camp-filter-bar"]],
        inputs: {
          types: [1, "types"],
          selectedTypes: [1, "selectedTypes"],
          searchValue: [1, "searchValue"]
        },
        outputs: {
          search: "search",
          filter: "filter"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 16,
        vars: 5,
        consts: [[1, "filter-bar"], ["multiple", "", 3, "selectionChange", "value"], [3, "value"], [1, "search", 3, "submit", "formGroup"], ["matInput", "", "placeholder", "Search anime", "formControlName", "search", 3, "input", "value"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["type", "submit", "mat-icon-button", "", "matSuffix", ""]],
        template: function FilterBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field")(2, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filter by Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function FilterBarComponent_Template_mat_select_selectionChange_4_listener($event) {
              return ctx.onFilterChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](5, FilterBarComponent_For_6_Template, 2, 2, "mat-option", 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function FilterBarComponent_Template_form_submit_7_listener() {
              return ctx.onSearch();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field")(9, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function FilterBarComponent_Template_input_input_9_listener() {
              return ctx.onInputSearchValue();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBarComponent_Template_button_click_10_listener() {
              return ctx.onClearSearch();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6)(14, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedTypes());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.types());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchForm.value.search);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isHiddenClearButton() ? "is-hidden-clear" : "");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
        styles: [".filter-bar[_ngcontent-%COMP%] {\n  padding: var(--space-sm) 0;\n  display: flex;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-left: var(--space-lg);\n}\n\n.is-hidden-clear[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}"]
      });
    }
  }
  return FilterBarComponent;
})();

/***/ }),

/***/ 9404:
/*!*****************************************************************************************!*\
  !*** ./apps/angular/src/app/features/anime/pages/dashboard/dashboard-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPageComponent: () => (/* binding */ DashboardPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9102);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 8403);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2029);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 8966);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 6865);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6182);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9344);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1640);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 7212);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2831);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6347);
/* harmony import */ var _js_camp_angular_core_services_anime_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/angular/core/services/anime.service */ 6654);
/* harmony import */ var _js_camp_core_models_enums_anime_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/core/models/enums/anime-type */ 381);
/* harmony import */ var _js_camp_core_models_enums_anime_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-camp/core/models/enums/anime-status */ 5255);
/* harmony import */ var _js_camp_core_mappers_anime_http_params_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-camp/core/mappers/anime-http-params.mapper */ 8000);
/* harmony import */ var _js_camp_angular_app_features_anime_components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-camp/angular/app/features/anime/components/filter-bar/filter-bar.component */ 4446);























function DashboardPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-spinner", 0);
  }
}
function DashboardPageComponent_Conditional_1_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 16);
  }
}
function DashboardPageComponent_Conditional_1_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 17);
  }
}
function DashboardPageComponent_Conditional_1_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th", 18);
  }
}
function DashboardPageComponent_Conditional_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", anime_r3.poster, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", anime_r3.name);
  }
}
function DashboardPageComponent_Conditional_1_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Title English");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](anime_r4.titleEnglish);
  }
}
function DashboardPageComponent_Conditional_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Title Japanese");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](anime_r5.titleJapanese);
  }
}
function DashboardPageComponent_Conditional_1_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, anime_r6.aired.start));
  }
}
function DashboardPageComponent_Conditional_1_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_1_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.animeType.toReadable(anime_r7.type));
  }
}
function DashboardPageComponent_Conditional_1_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_Conditional_1_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anime_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.animeStatus.toReadable(anime_r8.status));
  }
}
function DashboardPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "camp-filter-bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filter", function DashboardPageComponent_Conditional_1_Template_camp_filter_bar_filter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFilterChange($event));
    })("search", function DashboardPageComponent_Conditional_1_Template_camp_filter_bar_search_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onSearch($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function DashboardPageComponent_Conditional_1_Template_table_matSortChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onSortChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardPageComponent_Conditional_1_tr_3_Template, 1, 0, "tr", 4)(4, DashboardPageComponent_Conditional_1_tr_4_Template, 1, 0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DashboardPageComponent_Conditional_1_th_6_Template, 1, 0, "th", 7)(7, DashboardPageComponent_Conditional_1_td_7_Template, 2, 2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DashboardPageComponent_Conditional_1_th_9_Template, 2, 0, "th", 10)(10, DashboardPageComponent_Conditional_1_td_10_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, DashboardPageComponent_Conditional_1_th_12_Template, 2, 0, "th", 7)(13, DashboardPageComponent_Conditional_1_td_13_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DashboardPageComponent_Conditional_1_th_15_Template, 2, 0, "th", 10)(16, DashboardPageComponent_Conditional_1_td_16_Template, 3, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, DashboardPageComponent_Conditional_1_th_18_Template, 2, 0, "th", 7)(19, DashboardPageComponent_Conditional_1_td_19_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, DashboardPageComponent_Conditional_1_th_21_Template, 2, 0, "th", 10)(22, DashboardPageComponent_Conditional_1_td_22_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-paginator", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function DashboardPageComponent_Conditional_1_Template_mat_paginator_page_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const animes_r9 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("types", ctx_r1.types)("selectedTypes", ctx_r1.selectedTypes())("searchValue", ctx_r1.searchValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", animes_r9.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", animes_r9.count)("pageSize", ctx_r1.queryParams.limit)("pageIndex", ctx_r1.queryParams.offset)("pageSizeOptions", ctx_r1.pageSizeOptions);
  }
}
/** Dashboard page component. */
let DashboardPageComponent = /*#__PURE__*/(() => {
  class DashboardPageComponent {
    constructor() {
      /** Loading state. */
      this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(false);
      /** Selected types. */
      this.selectedTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)([]);
      /** Search value. */
      this.searchValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)('');
      /** Anime type enum. */
      this.animeType = _js_camp_core_models_enums_anime_type__WEBPACK_IMPORTED_MODULE_1__.AnimeType;
      /** Anime status enum. */
      this.animeStatus = _js_camp_core_models_enums_anime_status__WEBPACK_IMPORTED_MODULE_2__.AnimeStatus;
      /** Anime types list. */
      this.types = _js_camp_core_models_enums_anime_type__WEBPACK_IMPORTED_MODULE_1__.AnimeType.toArray();
      /** Page size options. */
      this.pageSizeOptions = _js_camp_core_mappers_anime_http_params_mapper__WEBPACK_IMPORTED_MODULE_3__.AnimeHttpParamsMapper.PAGE_SIZES;
      this.animeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_js_camp_angular_core_services_anime_service__WEBPACK_IMPORTED_MODULE_0__.AnimeService);
      this.activeRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.DestroyRef);
      /** Columns. */
      this.displayedColumns = ['poster', 'titleEnglish', 'titleJapanese', 'airedStart', 'type', 'status'];
      this.animes$ = this.createAnimeStream();
      this.searchValue.set(this.queryParams.search);
    }
    /**
     * Get anime list.
     * @param params Query params.
     */
    getAnimeList(params) {
      return this.animeService.getAnimeList({
        limit: params.limit,
        offset: params.offset,
        search: params.search,
        typeIn: params.typeIn,
        sort: params.sort
      });
    }
    createAnimeStream() {
      this.isLoading.set(true);
      return this.activeRoute.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(query => this.transformQueryParams(query)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => this.getAnimeList(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
        this.isLoading.set(false);
        this.selectedTypes.set(this.queryParams.typeIn?.split(',') ?? []);
      }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef))));
    }
    /**
     * Transform query parameters.
     * @param query Query parameters.
     */
    transformQueryParams(query) {
      const params = _js_camp_core_mappers_anime_http_params_mapper__WEBPACK_IMPORTED_MODULE_3__.AnimeHttpParamsMapper.fromDto(query);
      this.setQueryParams(params);
      return params;
    }
    /**
     * Change page parameter.
     * @param event Page event.
     */
    onPageChange(event) {
      this.setQueryParams({
        offset: event.pageIndex,
        limit: event.pageSize
      });
    }
    /**
     * Change filter.
     * @param types Anime types list.
     */
    onFilterChange(types) {
      this.setQueryParams({
        typeIn: types.toString(),
        offset: 0
      });
    }
    /**
     * Search movie.
     * @param search Search text.
     */
    onSearch(search) {
      this.setQueryParams({
        search,
        offset: 0
      });
    }
    /**
     * Change table sort.
     * @param sort Event.
     */
    onSortChange(sort) {
      let ordering = '';
      if (sort.direction === 'asc') {
        ordering = sort.active;
      }
      if (sort.direction === 'desc') {
        ordering = `-${sort.active}`;
      }
      this.setQueryParams({
        sort: ordering
      });
    }
    /** Query params. */
    get queryParams() {
      const {
        queryParams
      } = this.activeRoute.snapshot;
      return {
        search: queryParams['search'],
        offset: queryParams['offset'],
        limit: queryParams['limit'],
        sort: queryParams['sort'],
        typeIn: queryParams['typeIn']
      };
    }
    /**
     * Sets query params.
     * @param params Changed params.
     */
    setQueryParams(params) {
      const pathname = this.router.url.split('?')[0];
      this.router.navigate([pathname], {
        queryParams: {
          ...this.queryParams,
          ...params
        }
      });
    }
    static {
      this.ɵfac = function DashboardPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardPageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: DashboardPageComponent,
        selectors: [["camp-dashboard-page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 4,
        consts: [["color", "primary", "mode", "indeterminate", "diameter", "36", 1, "spinner"], [1, "table-wrapper"], [3, "filter", "search", "types", "selectedTypes", "searchValue"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "matSortChange", "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "poster"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "titleEnglish"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "titleJapanese"], ["matColumnDef", "airedStart"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["aria-label", "Select page", 1, "paginator", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["loading", "lazy", 1, "poster", 3, "src", "alt"], ["mat-header-cell", "", "mat-sort-header", ""]],
        template: function DashboardPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DashboardPageComponent_Conditional_0_Template, 1, 0, "mat-progress-spinner", 0)(1, DashboardPageComponent_Conditional_1_Template, 24, 11, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
          }
          if (rf & 2) {
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isLoading() ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx.animes$)) ? 1 : -1, tmp_1_0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _js_camp_angular_app_features_anime_components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__.FilterBarComponent],
        styles: [".table-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.paginator[_ngcontent-%COMP%] {\n  margin: var(--space-md) 0;\n}\n\n.poster[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  padding: 8px;\n  object-fit: contain;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}"]
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
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
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
  title: 'Dashboard',
  path: '',
  component: _pages_dashboard_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__.DashboardPageComponent
}, {
  title: 'Details',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6409);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3527);
/* harmony import */ var _js_camp_core_mappers_anime_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-camp/core/mappers/anime.mapper */ 228);
/* harmony import */ var _js_camp_core_mappers_pagination_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-camp/core/mappers/pagination.mapper */ 1012);
/* harmony import */ var _js_camp_core_mappers_anime_http_params_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-camp/core/mappers/anime-http-params.mapper */ 8000);
/* harmony import */ var _js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-camp/angular/environments/environment */ 3110);








/** Endpoints for anime API. */
let AnimeService = /*#__PURE__*/(() => {
  class AnimeService {
    constructor() {
      this.httpService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient);
      /** Url for this service. */
      this.animeApiUrl = `${_js_camp_angular_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/api/v1/anime/`;
    }
    /**
     * Get anime list from server.
     * @param parameters Anime query params.
     */
    getAnimeList(parameters) {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams({
        fromObject: {
          ..._js_camp_core_mappers_anime_http_params_mapper__WEBPACK_IMPORTED_MODULE_2__.AnimeHttpParamsMapper.toDto(parameters)
        }
      });
      return this.httpService.get(this.animeApiUrl, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(data => _js_camp_core_mappers_pagination_mapper__WEBPACK_IMPORTED_MODULE_1__.PaginationMapper.fromDto(data, _js_camp_core_mappers_anime_mapper__WEBPACK_IMPORTED_MODULE_0__.AnimeMapper.fromDto)));
    }
    static {
      this.ɵfac = function AnimeService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AnimeService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
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
/** Aired mapper. */
var AiredMapper;
(function (AiredMapper) {
  /**
   * Converts model to dto.
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
   * Converts dto to model.
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

/***/ 8000:
/*!*******************************************************!*\
  !*** ./libs/core/mappers/anime-http-params.mapper.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimeHttpParamsMapper: () => (/* binding */ AnimeHttpParamsMapper)
/* harmony export */ });
/* harmony import */ var _models_enums_anime_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/enums/anime-sort */ 3745);

/** Anime http parameters mapper. */
var AnimeHttpParamsMapper;
(function (AnimeHttpParamsMapper) {
  const DEFAULT_PAGE_SIZE = 10;
  /** Page sizes. */
  AnimeHttpParamsMapper.PAGE_SIZES = [5, 10, 25, 100];
  /**
   * Converts model to dto.
   * @param model Params model.
   */
  function toDto(model) {
    return {
      ordering: _models_enums_anime_sort__WEBPACK_IMPORTED_MODULE_0__.AnimeSort.toReadable(model.sort),
      search: model.search,
      limit: model?.limit ?? DEFAULT_PAGE_SIZE,
      offset: model.offset ? model.offset * (model?.limit ?? DEFAULT_PAGE_SIZE) : undefined,
      type__in: model.typeIn?.toString() ?? ''
    };
  }
  AnimeHttpParamsMapper.toDto = toDto;
  /**
   * Converts dto to model.
   * @param params Unknown params.
   */
  function fromDto(params) {
    return {
      offset: params['offset'] ?? 0,
      limit: params['limit'] ?? DEFAULT_PAGE_SIZE,
      sort: params['sort'] ?? '',
      search: params['search'] ?? '',
      typeIn: params['typeIn'] ?? ''
    };
  }
  AnimeHttpParamsMapper.fromDto = fromDto;
})(AnimeHttpParamsMapper || (AnimeHttpParamsMapper = {}));

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


/** Anime mapper. */
var AnimeMapper;
(function (AnimeMapper) {
  /**
   * Converts dto to model.
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

/***/ 3745:
/*!**********************************************!*\
  !*** ./libs/core/models/enums/anime-sort.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimeSort: () => (/* binding */ AnimeSort)
/* harmony export */ });
/* harmony import */ var _utils_enum_to_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/enum-to-array */ 7197);

/** Anime sort. */
var AnimeSort = /*#__PURE__*/function (AnimeSort) {
  AnimeSort["TitleEnglishAsc"] = "titleEnglish";
  AnimeSort["TitleEnglishDesc"] = "-titleEnglish";
  AnimeSort["StatusAsc"] = "status";
  AnimeSort["StatusDesc"] = "-status";
  AnimeSort["AiredStartAsc"] = "airedStart";
  AnimeSort["AiredStartDesc"] = "-airedStart";
  AnimeSort["None"] = "";
  return AnimeSort;
}(AnimeSort || {});
/** Anime ordering. */
(function (AnimeSort) {
  /** Anime ordering map-object to title view. */
  const TO_TITLE_MAP = {
    [AnimeSort.TitleEnglishAsc]: 'title_eng',
    [AnimeSort.TitleEnglishDesc]: '-title_eng',
    [AnimeSort.StatusAsc]: 'status',
    [AnimeSort.StatusDesc]: '-status',
    [AnimeSort.AiredStartAsc]: 'aired__startswith',
    [AnimeSort.AiredStartDesc]: '-aired__startswith',
    [AnimeSort.None]: ''
  };
  /** Converts anime ordering enum to array. */
  function toArray() {
    return (0,_utils_enum_to_array__WEBPACK_IMPORTED_MODULE_0__.enumToArray)(AnimeSort);
  }
  AnimeSort.toArray = toArray;
  /**
   * Converts an anime status to readable title.
   * @param value Anime status.
   */
  function toReadable(value) {
    return TO_TITLE_MAP[value];
  }
  AnimeSort.toReadable = toReadable;
})(AnimeSort || (AnimeSort = {}));

/***/ }),

/***/ 5255:
/*!************************************************!*\
  !*** ./libs/core/models/enums/anime-status.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimeStatus: () => (/* binding */ AnimeStatus)
/* harmony export */ });
/* harmony import */ var _utils_enum_to_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/enum-to-array */ 7197);

/** Anime statuses. */
var AnimeStatus = /*#__PURE__*/function (AnimeStatus) {
  AnimeStatus["Finished"] = "AIRING";
  AnimeStatus["Airing"] = "FINISHED";
  AnimeStatus["NotYetAired"] = "NOT_YET_AIRED";
  return AnimeStatus;
}(AnimeStatus || {});
/** Anime status. */
(function (AnimeStatus) {
  /** Anime status map-object to title view. */
  const TO_TITLE_MAP = {
    [AnimeStatus.Finished]: 'Finished',
    [AnimeStatus.Airing]: 'Airing',
    [AnimeStatus.NotYetAired]: 'Not yet aired'
  };
  /** Converts anime status enum to array. */
  function toArray() {
    return (0,_utils_enum_to_array__WEBPACK_IMPORTED_MODULE_0__.enumToArray)(AnimeStatus);
  }
  AnimeStatus.toArray = toArray;
  /**
   * Converts an anime status to readable title.
   * @param value Anime status.
   */
  function toReadable(value) {
    return TO_TITLE_MAP[value];
  }
  AnimeStatus.toReadable = toReadable;
})(AnimeStatus || (AnimeStatus = {}));

/***/ }),

/***/ 381:
/*!**********************************************!*\
  !*** ./libs/core/models/enums/anime-type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimeType: () => (/* binding */ AnimeType)
/* harmony export */ });
/* harmony import */ var _utils_enum_to_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/enum-to-array */ 7197);

/** Anime type. */
var AnimeType = /*#__PURE__*/function (AnimeType) {
  AnimeType["Tv"] = "TV";
  AnimeType["Ova"] = "OVA";
  AnimeType["Movie"] = "MOVIE";
  AnimeType["Special"] = "SPECIAL";
  AnimeType["Ona"] = "ONA";
  AnimeType["Music"] = "MUSIC";
  AnimeType["PromotionalVideos"] = "PROMOTIONAL_VIDEOS";
  AnimeType["Unknown"] = "Unknown";
  return AnimeType;
}(AnimeType || {});
/** Anime types. */
(function (AnimeType) {
  /** Anime types map-object to title view. */
  const TO_TITLE_MAP = {
    [AnimeType.Movie]: 'Movie',
    [AnimeType.Music]: 'Music',
    [AnimeType.Ona]: 'Ona',
    [AnimeType.Ova]: 'Ova',
    [AnimeType.Special]: 'Special',
    [AnimeType.Tv]: 'Tv',
    [AnimeType.PromotionalVideos]: 'Promotional Videos',
    [AnimeType.Unknown]: 'Unknown'
  };
  /** Converts anime type enum to array. */
  function toArray() {
    return (0,_utils_enum_to_array__WEBPACK_IMPORTED_MODULE_0__.enumToArray)(AnimeType);
  }
  AnimeType.toArray = toArray;
  /**
   * Converts an anime types to readable title.
   * @param value Anime types.
   */
  function toReadable(value) {
    return TO_TITLE_MAP[value];
  }
  AnimeType.toReadable = toReadable;
})(AnimeType || (AnimeType = {}));

/***/ }),

/***/ 7197:
/*!******************************************!*\
  !*** ./libs/core/utils/enum-to-array.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enumToArray: () => (/* binding */ enumToArray)
/* harmony export */ });
/**
 * Helper to produce an array of enum values.
 * @param enumeration Enumeration object.
 */
function enumToArray(enumeration) {
  return Object.keys(enumeration).filter(key => isNaN(Number(key))).map(key => enumeration[key]).filter(val => typeof val === 'number' || typeof val === 'string');
}

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

/***/ 8966:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/paginator.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_PAGINATOR_DEFAULT_OPTIONS: () => (/* binding */ MAT_PAGINATOR_DEFAULT_OPTIONS),
/* harmony export */   MAT_PAGINATOR_INTL_PROVIDER: () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER),
/* harmony export */   MAT_PAGINATOR_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER_FACTORY),
/* harmony export */   MatPaginator: () => (/* binding */ MatPaginator),
/* harmony export */   MatPaginatorIntl: () => (/* binding */ MatPaginatorIntl),
/* harmony export */   MatPaginatorModule: () => (/* binding */ MatPaginatorModule),
/* harmony export */   PageEvent: () => (/* binding */ PageEvent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9090);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 2221);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 6865);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6566);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 3788);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9344);









/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pageSizeOption_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._changePageSize($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const selectRef_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](selectRef_r4.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1._pageSizeLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.firstPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.lastPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
let MatPaginatorIntl = /*#__PURE__*/(() => {
  class MatPaginatorIntl {
    constructor() {
      /**
       * Stream to emit from when labels are changed. Use this to notify components when the labels have
       * changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** A label for the page size selector. */
      this.itemsPerPageLabel = 'Items per page:';
      /** A label for the button that increments the current page. */
      this.nextPageLabel = 'Next page';
      /** A label for the button that decrements the current page. */
      this.previousPageLabel = 'Previous page';
      /** A label for the button that moves to the first page. */
      this.firstPageLabel = 'First page';
      /** A label for the button that moves to the last page. */
      this.lastPageLabel = 'Last page';
      /** A label for the range of items within the current page and the length of the whole list. */
      this.getRangeLabel = (page, pageSize, length) => {
        if (length == 0 || pageSize == 0) {
          return `0 of ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} – ${endIndex} of ${length}`;
      };
    }
    static {
      this.ɵfac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatPaginatorIntl)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatPaginatorIntl,
        factory: MatPaginatorIntl.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MatPaginatorIntl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */
const MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
class PageEvent {}
/** Injection token that can be used to provide the default options for the paginator module. */
const MAT_PAGINATOR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS');
let nextUniqueId = 0;
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
let MatPaginator = /*#__PURE__*/(() => {
  class MatPaginator {
    /** The zero-based page index of the displayed list of items. Defaulted to 0. */
    get pageIndex() {
      return this._pageIndex;
    }
    set pageIndex(value) {
      this._pageIndex = Math.max(value || 0, 0);
      this._changeDetectorRef.markForCheck();
    }
    /** The length of the total number of items that are being paginated. Defaulted to 0. */
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value || 0;
      this._changeDetectorRef.markForCheck();
    }
    /** Number of items to display on a page. By default set to 50. */
    get pageSize() {
      return this._pageSize;
    }
    set pageSize(value) {
      this._pageSize = Math.max(value || 0, 0);
      this._updateDisplayedPageSizeOptions();
    }
    /** The set of provided page size options to display to the user. */
    get pageSizeOptions() {
      return this._pageSizeOptions;
    }
    set pageSizeOptions(value) {
      this._pageSizeOptions = (value || []).map(p => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(p, 0));
      this._updateDisplayedPageSizeOptions();
    }
    constructor(_intl, _changeDetectorRef, defaults) {
      this._intl = _intl;
      this._changeDetectorRef = _changeDetectorRef;
      /** ID for the DOM node containing the paginator's items per page label. */
      this._pageSizeLabelId = `mat-paginator-page-size-label-${nextUniqueId++}`;
      this._isInitialized = false;
      this._initializedStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
      this._pageIndex = 0;
      this._length = 0;
      this._pageSizeOptions = [];
      /** Whether to hide the page size selection UI from the user. */
      this.hidePageSize = false;
      /** Whether to show the first/last buttons UI to the user. */
      this.showFirstLastButtons = false;
      /** Used to configure the underlying `MatSelect` inside the paginator. */
      this.selectConfig = {};
      /** Whether the paginator is disabled. */
      this.disabled = false;
      /** Event emitted when the paginator changes the page size or page index. */
      this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the paginator is initialized. */
      this.initialized = this._initializedStream;
      this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
      if (defaults) {
        const {
          pageSize,
          pageSizeOptions,
          hidePageSize,
          showFirstLastButtons
        } = defaults;
        if (pageSize != null) {
          this._pageSize = pageSize;
        }
        if (pageSizeOptions != null) {
          this._pageSizeOptions = pageSizeOptions;
        }
        if (hidePageSize != null) {
          this.hidePageSize = hidePageSize;
        }
        if (showFirstLastButtons != null) {
          this.showFirstLastButtons = showFirstLastButtons;
        }
      }
      this._formFieldAppearance = defaults?.formFieldAppearance || 'outline';
    }
    ngOnInit() {
      this._isInitialized = true;
      this._updateDisplayedPageSizeOptions();
      this._initializedStream.next();
    }
    ngOnDestroy() {
      this._initializedStream.complete();
      this._intlChanges.unsubscribe();
    }
    /** Advances to the next page if it exists. */
    nextPage() {
      if (!this.hasNextPage()) {
        return;
      }
      const previousPageIndex = this.pageIndex;
      this.pageIndex = this.pageIndex + 1;
      this._emitPageEvent(previousPageIndex);
    }
    /** Move back to the previous page if it exists. */
    previousPage() {
      if (!this.hasPreviousPage()) {
        return;
      }
      const previousPageIndex = this.pageIndex;
      this.pageIndex = this.pageIndex - 1;
      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the first page if not already there. */
    firstPage() {
      // hasPreviousPage being false implies at the start
      if (!this.hasPreviousPage()) {
        return;
      }
      const previousPageIndex = this.pageIndex;
      this.pageIndex = 0;
      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the last page if not already there. */
    lastPage() {
      // hasNextPage being false implies at the end
      if (!this.hasNextPage()) {
        return;
      }
      const previousPageIndex = this.pageIndex;
      this.pageIndex = this.getNumberOfPages() - 1;
      this._emitPageEvent(previousPageIndex);
    }
    /** Whether there is a previous page. */
    hasPreviousPage() {
      return this.pageIndex >= 1 && this.pageSize != 0;
    }
    /** Whether there is a next page. */
    hasNextPage() {
      const maxPageIndex = this.getNumberOfPages() - 1;
      return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }
    /** Calculate the number of pages */
    getNumberOfPages() {
      if (!this.pageSize) {
        return 0;
      }
      return Math.ceil(this.length / this.pageSize);
    }
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    _changePageSize(pageSize) {
      // Current page needs to be updated to reflect the new page size. Navigate to the page
      // containing the previous page's first item.
      const startIndex = this.pageIndex * this.pageSize;
      const previousPageIndex = this.pageIndex;
      this.pageIndex = Math.floor(startIndex / pageSize) || 0;
      this.pageSize = pageSize;
      this._emitPageEvent(previousPageIndex);
    }
    /** Checks whether the buttons for going forwards should be disabled. */
    _nextButtonsDisabled() {
      return this.disabled || !this.hasNextPage();
    }
    /** Checks whether the buttons for going backwards should be disabled. */
    _previousButtonsDisabled() {
      return this.disabled || !this.hasPreviousPage();
    }
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */
    _updateDisplayedPageSizeOptions() {
      if (!this._isInitialized) {
        return;
      }
      // If no page size is provided, use the first page size option or the default page size.
      if (!this.pageSize) {
        this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
      }
      this._displayedPageSizeOptions = this.pageSizeOptions.slice();
      if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
        this._displayedPageSizeOptions.push(this.pageSize);
      }
      // Sort the numbers using a number-specific sort function.
      this._displayedPageSizeOptions.sort((a, b) => a - b);
      this._changeDetectorRef.markForCheck();
    }
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */
    _emitPageEvent(previousPageIndex) {
      this.page.emit({
        previousPageIndex,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        length: this.length
      });
    }
    static {
      this.ɵfac = function MatPaginator_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPaginator,
        selectors: [["mat-paginator"]],
        hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
        inputs: {
          color: "color",
          pageIndex: [2, "pageIndex", "pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          length: [2, "length", "length", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          pageSize: [2, "pageSize", "pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          pageSizeOptions: "pageSizeOptions",
          hidePageSize: [2, "hidePageSize", "hidePageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          selectConfig: "selectConfig",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          page: "page"
        },
        exportAs: ["matPaginator"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 14,
        vars: 14,
        consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
        template: function MatPaginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
              return ctx.previousPage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
              return ctx.nextPage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.hidePageSize ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showFirstLastButtons ? 6 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showFirstLastButtons ? 13 : -1);
          }
        },
        dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip],
        styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-app-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-app-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-app-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-app-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-app-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-app-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-app-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatPaginator;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatPaginatorModule = /*#__PURE__*/(() => {
  class MatPaginatorModule {
    static {
      this.ɵfac = function MatPaginatorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatPaginatorModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPaginatorModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MAT_PAGINATOR_INTL_PROVIDER],
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, MatPaginator]
      });
    }
  }
  return MatPaginatorModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=paginator.mjs.map

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

/***/ 6865:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/select.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SELECT_CONFIG: () => (/* binding */ MAT_SELECT_CONFIG),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY_PROVIDER: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   MAT_SELECT_TRIGGER: () => (/* binding */ MAT_SELECT_TRIGGER),
/* harmony export */   MatError: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField),
/* harmony export */   MatHint: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatHint),
/* harmony export */   MatLabel: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel),
/* harmony export */   MatOptgroup: () => (/* reexport safe */ _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptgroup),
/* harmony export */   MatOption: () => (/* reexport safe */ _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatPrefix),
/* harmony export */   MatSelect: () => (/* binding */ MatSelect),
/* harmony export */   MatSelectChange: () => (/* binding */ MatSelectChange),
/* harmony export */   MatSelectModule: () => (/* binding */ MatSelectModule),
/* harmony export */   MatSelectTrigger: () => (/* binding */ MatSelectTrigger),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix),
/* harmony export */   matSelectAnimations: () => (/* binding */ matSelectAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 4212);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 3788);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 9344);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1381);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ 1992);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 3126);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 2067);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6809);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 7222);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 965);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2831);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 3793);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 8486);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 194);






const _c0 = ["trigger"];
const _c1 = ["panel"];
const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_10_Template_div_animation_transformPanel_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._panelDoneAnimatingStream.next($event.toState));
    })("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._handleKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", ctx_r1._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.panelClass)("@transformPanel", "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "-panel")("aria-multiselectable", ctx_r1.multiple)("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby());
  }
}

















/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */
const matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('transformPanelWrap', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)('@transformPanel', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animateChild)()], {
    optional: true
  }))]),
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('transformPanel', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => showing', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  }))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('100ms linear', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0
  })))])
};

// Note that these have been copied over verbatim from
// `material/select` so that we don't have to expose them publicly.
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */
function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
let nextUniqueId = 0;
/** Injection token that determines the scroll handling while a select is open. */
const MAT_SELECT_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-select-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */
const MAT_SELECT_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SELECT_CONFIG');
/** @docs-private */
const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SELECT_TRIGGER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSelectTrigger');
/** Change event object that is emitted when the select value has changed. */
class MatSelectChange {
  constructor( /** Reference to the select that emitted the change event. */
  source, /** Current value of the select that emitted the event. */
  value) {
    this.source = source;
    this.value = value;
  }
}
let MatSelect = /*#__PURE__*/(() => {
  class MatSelect {
    /** Scrolls a particular option into the view. */
    _scrollOptionIntoView(index) {
      const option = this.options.toArray()[index];
      if (option) {
        const panel = this.panel.nativeElement;
        const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);
        const element = option._getHostElement();
        if (index === 0 && labelCount === 1) {
          // If we've got one group label before the option and we're at the top option,
          // scroll the list to the top. This is better UX than scrolling the list to the
          // top of the option, because it allows the user to read the top group's label.
          panel.scrollTop = 0;
        } else {
          panel.scrollTop = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
        }
      }
    }
    /** Called when the panel has been opened and the overlay has settled on its final position. */
    _positioningSettled() {
      this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
    }
    /** Creates a change event object that should be emitted by the select. */
    _getChangeEvent(value) {
      return new MatSelectChange(this, value);
    }
    /** Whether the select is focused. */
    get focused() {
      return this._focused || this._panelOpen;
    }
    /** Whether checkmark indicator for single-selection options is hidden. */
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = value;
      this._syncParentProperties();
    }
    /** Placeholder to be shown if no value has been selected. */
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    /** Whether the component is required. */
    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required) ?? false;
    }
    set required(value) {
      this._required = value;
      this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectDynamicMultipleError();
      }
      this._multiple = value;
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() {
      return this._compareWith;
    }
    set compareWith(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonFunctionValueError();
      }
      this._compareWith = fn;
      if (this._selectionModel) {
        // A different comparator means the selection could change.
        this._initializeSelection();
      }
    }
    /** Value of the select control. */
    get value() {
      return this._value;
    }
    set value(newValue) {
      const hasAssigned = this._assignValue(newValue);
      if (hasAssigned) {
        this._onChange(newValue);
      }
    }
    /** Object used to control when error messages are shown. */
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    /** Unique id of the element. */
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value || this._uid;
      this.stateChanges.next();
    }
    /** Whether the select is in an error state. */
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    constructor(_viewportRuler, _changeDetectorRef,
    /**
     * @deprecated Unused param, will be removed.
     * @breaking-change 19.0.0
     */
    _unusedNgZone, defaultErrorStateMatcher, _elementRef, _dir, parentForm, parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
      this._viewportRuler = _viewportRuler;
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._dir = _dir;
      this._parentFormField = _parentFormField;
      this.ngControl = ngControl;
      this._liveAnnouncer = _liveAnnouncer;
      this._defaultOptions = _defaultOptions;
      /**
       * This position config ensures that the top "start" corner of the overlay
       * is aligned with with the top "start" of the origin by default (overlapping
       * the trigger completely). If the panel cannot fit below the trigger, it
       * will fall back to a position above the trigger.
       */
      this._positions = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        panelClass: 'mat-mdc-select-panel-above'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        panelClass: 'mat-mdc-select-panel-above'
      }];
      /** Whether or not the overlay panel is open. */
      this._panelOpen = false;
      /** Comparison function to specify which option is displayed. Defaults to object equality. */
      this._compareWith = (o1, o2) => o1 === o2;
      /** Unique id for this input. */
      this._uid = `mat-select-${nextUniqueId++}`;
      /** Current `aria-labelledby` value for the select trigger. */
      this._triggerAriaLabelledBy = null;
      /** Emits whenever the component is destroyed. */
      this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      /**
       * Disable the automatic labeling to avoid issues like #27241.
       * @docs-private
       */
      this.disableAutomaticLabeling = true;
      /** `View -> model callback called when value changes` */
      this._onChange = () => {};
      /** `View -> model callback called when select has been touched` */
      this._onTouched = () => {};
      /** ID for the DOM node containing the select's value. */
      this._valueId = `mat-select-value-${nextUniqueId++}`;
      /** Emits when the panel element is finished transforming in. */
      this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      this._overlayPanelClass = this._defaultOptions?.overlayPanelClass || '';
      this._focused = false;
      /** A name for this control that can be used by `mat-form-field`. */
      this.controlType = 'mat-select';
      /** Whether the select is disabled. */
      this.disabled = false;
      /** Whether ripples in the select are disabled. */
      this.disableRipple = false;
      /** Tab index of the select. */
      this.tabIndex = 0;
      this._hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      this._multiple = false;
      /** Whether to center the active option over the trigger. */
      this.disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
      /** Aria label of the select. */
      this.ariaLabel = '';
      /**
       * Width of the panel. If set to `auto`, the panel will match the trigger width.
       * If set to null or an empty string, the panel will grow to match the longest option's text.
       */
      this.panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== 'undefined' ? this._defaultOptions.panelWidth : 'auto';
      this._initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      /** Combined stream of all of the child options' change events. */
      this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.defer)(() => {
        const options = this.options;
        if (options) {
          return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...options.map(option => option.onSelectionChange))));
        }
        return this._initialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.optionSelectionChanges));
      });
      /** Event emitted when the select panel has been toggled. */
      this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the select has been opened. */
      this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {}));
      /** Event emitted when the select has been closed. */
      this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {}));
      /** Event emitted when the selected value has been changed by the user. */
      this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Event that emits whenever the raw value of the select changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
       * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
       * panel. Track the modal we have changed so we can undo the changes on destroy.
       */
      this._trackedModal = null;
      // `skipPredicate` determines if key manager should avoid putting a given option in the tab
      // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
      // recommendation.
      //
      // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
      // makes a few exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      //
      // The user can focus disabled options using the keyboard, but the user cannot click disabled
      // options.
      this._skipPredicate = option => {
        if (this.panelOpen) {
          // Support keyboard focusing disabled options in an ARIA listbox.
          return false;
        }
        // When the panel is closed, skip over disabled options. Support options via the UP/DOWN arrow
        // keys on a closed select. ARIA listbox interaction pattern is less relevant when the panel is
        // closed.
        return option.disabled;
      };
      if (this.ngControl) {
        // Note: we provide the value accessor through here, instead of
        // the `providers` to avoid running into a circular import.
        this.ngControl.valueAccessor = this;
      }
      // Note that we only want to set this when the defaults pass it in, otherwise it should
      // stay as `undefined` so that it falls back to the default in the key manager.
      if (_defaultOptions?.typeaheadDebounceInterval != null) {
        this.typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
      }
      this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_1__._ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
      this._scrollStrategyFactory = scrollStrategyFactory;
      this._scrollStrategy = this._scrollStrategyFactory();
      this.tabIndex = parseInt(tabIndex) || 0;
      // Force setter to be called in case id was not specified.
      this.id = this.id;
    }
    ngOnInit() {
      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(this.multiple);
      this.stateChanges.next();
      // We need `distinctUntilChanged` here, because some browsers will
      // fire the animation end event twice for the same animation. See:
      // https://github.com/angular/angular/issues/24084
      this._panelDoneAnimatingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen));
      this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => {
        if (this.panelOpen) {
          this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
          this._changeDetectorRef.detectChanges();
        }
      });
    }
    ngAfterContentInit() {
      this._initialized.next();
      this._initialized.complete();
      this._initKeyManager();
      this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(event => {
        event.added.forEach(option => option.select());
        event.removed.forEach(option => option.deselect());
      });
      this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => {
        this._resetOptions();
        this._initializeSelection();
      });
    }
    ngDoCheck() {
      const newAriaLabelledby = this._getTriggerAriaLabelledby();
      const ngControl = this.ngControl;
      // We have to manage setting the `aria-labelledby` ourselves, because part of its value
      // is computed as a result of a content query which can cause this binding to trigger a
      // "changed after checked" error.
      if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
        const element = this._elementRef.nativeElement;
        this._triggerAriaLabelledBy = newAriaLabelledby;
        if (newAriaLabelledby) {
          element.setAttribute('aria-labelledby', newAriaLabelledby);
        } else {
          element.removeAttribute('aria-labelledby');
        }
      }
      if (ngControl) {
        // The disabled state might go out of sync if the form group is swapped out. See #17860.
        if (this._previousControl !== ngControl.control) {
          if (this._previousControl !== undefined && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
            this.disabled = ngControl.disabled;
          }
          this._previousControl = ngControl.control;
        }
        this.updateErrorState();
      }
    }
    ngOnChanges(changes) {
      // Updating the disabled state is handled by the input, but we need to additionally let
      // the parent form field know to run change detection when the disabled state changes.
      if (changes['disabled'] || changes['userAriaDescribedBy']) {
        this.stateChanges.next();
      }
      if (changes['typeaheadDebounceInterval'] && this._keyManager) {
        this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
      }
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._destroy.next();
      this._destroy.complete();
      this.stateChanges.complete();
      this._clearFromModal();
    }
    /** Toggles the overlay panel open or closed. */
    toggle() {
      this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */
    open() {
      if (!this._canOpen()) {
        return;
      }
      // It's important that we read this as late as possible, because doing so earlier will
      // return a different element since it's based on queries in the form field which may
      // not have run yet. Also this needs to be assigned before we measure the overlay width.
      if (this._parentFormField) {
        this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
      }
      this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
      this._applyModalPanelOwnership();
      this._panelOpen = true;
      this._keyManager.withHorizontalOrientation(null);
      this._highlightCorrectOption();
      this._changeDetectorRef.markForCheck();
      // Required for the MDC form field to pick up when the overlay has been opened.
      this.stateChanges.next();
    }
    /**
     * If the autocomplete trigger is inside of an `aria-modal` element, connect
     * that modal to the options panel with `aria-owns`.
     *
     * For some browser + screen reader combinations, when navigation is inside
     * of an `aria-modal` element, the screen reader treats everything outside
     * of that modal as hidden or invisible.
     *
     * This causes a problem when the combobox trigger is _inside_ of a modal, because the
     * options panel is rendered _outside_ of that modal, preventing screen reader navigation
     * from reaching the panel.
     *
     * We can work around this issue by applying `aria-owns` to the modal with the `id` of
     * the options panel. This effectively communicates to assistive technology that the
     * options panel is part of the same interaction as the modal.
     *
     * At time of this writing, this issue is present in VoiceOver.
     * See https://github.com/angular/components/issues/20694
     */
    _applyModalPanelOwnership() {
      // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with
      // the `LiveAnnouncer` and any other usages.
      //
      // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
      // section of the DOM we need to look through. This should cover all the cases we support, but
      // the selector can be expanded if it turns out to be too narrow.
      const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
      if (!modal) {
        // Most commonly, the autocomplete trigger is not inside a modal.
        return;
      }
      const panelId = `${this.id}-panel`;
      if (this._trackedModal) {
        (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.removeAriaReferencedId)(this._trackedModal, 'aria-owns', panelId);
      }
      (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.addAriaReferencedId)(modal, 'aria-owns', panelId);
      this._trackedModal = modal;
    }
    /** Clears the reference to the listbox overlay element from the modal it was added to. */
    _clearFromModal() {
      if (!this._trackedModal) {
        // Most commonly, the autocomplete trigger is not used inside a modal.
        return;
      }
      const panelId = `${this.id}-panel`;
      (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.removeAriaReferencedId)(this._trackedModal, 'aria-owns', panelId);
      this._trackedModal = null;
    }
    /** Closes the overlay panel and focuses the host element. */
    close() {
      if (this._panelOpen) {
        this._panelOpen = false;
        this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
        this._changeDetectorRef.markForCheck();
        this._onTouched();
        // Required for the MDC form field to pick up when the overlay has been closed.
        this.stateChanges.next();
      }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value) {
      this._assignValue(value);
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */
    get panelOpen() {
      return this._panelOpen;
    }
    /** The currently selected option. */
    get selected() {
      return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
    }
    /** The value displayed in the trigger. */
    get triggerValue() {
      if (this.empty) {
        return '';
      }
      if (this._multiple) {
        const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
        if (this._isRtl()) {
          selectedOptions.reverse();
        }
        // TODO(crisbeto): delimiter should be configurable for proper localization.
        return selectedOptions.join(', ');
      }
      return this._selectionModel.selected[0].viewValue;
    }
    /** Refreshes the error state of the select. */
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    /** Whether the element is in RTL mode. */
    _isRtl() {
      return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */
    _handleKeydown(event) {
      if (!this.disabled) {
        this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
      }
    }
    /** Handles keyboard events while the select is closed. */
    _handleClosedKeydown(event) {
      const keyCode = event.keyCode;
      const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.RIGHT_ARROW;
      const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE;
      const manager = this._keyManager;
      // Open the select on ALT + arrow key to match the native <select>
      if (!manager.isTyping() && isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event) || (this.multiple || event.altKey) && isArrowKey) {
        event.preventDefault(); // prevents the page from scrolling down when pressing space
        this.open();
      } else if (!this.multiple) {
        const previouslySelectedOption = this.selected;
        manager.onKeydown(event);
        const selectedOption = this.selected;
        // Since the value has changed, we need to announce it ourselves.
        if (selectedOption && previouslySelectedOption !== selectedOption) {
          // We set a duration on the live announcement, because we want the live element to be
          // cleared after a while so that users can't navigate to it using the arrow keys.
          this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
        }
      }
    }
    /** Handles keyboard events when the selected is open. */
    _handleOpenKeydown(event) {
      const manager = this._keyManager;
      const keyCode = event.keyCode;
      const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW;
      const isTyping = manager.isTyping();
      if (isArrowKey && event.altKey) {
        // Close the select on ALT + arrow key to match the native <select>
        event.preventDefault();
        this.close();
        // Don't do anything in this case if the user is typing,
        // because the typing sequence can include the space key.
      } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE) && manager.activeItem && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
        event.preventDefault();
        manager.activeItem._selectViaInteraction();
      } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.A && event.ctrlKey) {
        event.preventDefault();
        const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
        this.options.forEach(option => {
          if (!option.disabled) {
            hasDeselectedOptions ? option.select() : option.deselect();
          }
        });
      } else {
        const previouslyFocusedIndex = manager.activeItemIndex;
        manager.onKeydown(event);
        if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
          manager.activeItem._selectViaInteraction();
        }
      }
    }
    _onFocus() {
      if (!this.disabled) {
        this._focused = true;
        this.stateChanges.next();
      }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    _onBlur() {
      this._focused = false;
      this._keyManager?.cancelTypeahead();
      if (!this.disabled && !this.panelOpen) {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    _onAttached() {
      this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe(() => {
        this._changeDetectorRef.detectChanges();
        this._positioningSettled();
      });
    }
    /** Returns the theme to be used on the panel. */
    _getPanelTheme() {
      return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
    }
    /** Whether the select has a value. */
    get empty() {
      return !this._selectionModel || this._selectionModel.isEmpty();
    }
    _initializeSelection() {
      // Defer setting the value in order to avoid the "Expression
      // has changed after it was checked" errors from Angular.
      Promise.resolve().then(() => {
        if (this.ngControl) {
          this._value = this.ngControl.value;
        }
        this._setSelectionByValue(this._value);
        this.stateChanges.next();
      });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    _setSelectionByValue(value) {
      this.options.forEach(option => option.setInactiveStyles());
      this._selectionModel.clear();
      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectNonArrayValueError();
        }
        value.forEach(currentValue => this._selectOptionByValue(currentValue));
        this._sortValues();
      } else {
        const correspondingOption = this._selectOptionByValue(value);
        // Shift focus to the active item. Note that we shouldn't do this in multiple
        // mode, because we don't know what option the user interacted with last.
        if (correspondingOption) {
          this._keyManager.updateActiveItem(correspondingOption);
        } else if (!this.panelOpen) {
          // Otherwise reset the highlighted option. Note that we only want to do this while
          // closed, because doing it while open can shift the user's focus unnecessarily.
          this._keyManager.updateActiveItem(-1);
        }
      }
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    _selectOptionByValue(value) {
      const correspondingOption = this.options.find(option => {
        // Skip options that are already in the model. This allows us to handle cases
        // where the same primitive value is selected multiple times.
        if (this._selectionModel.isSelected(option)) {
          return false;
        }
        try {
          // Treat null as a special reset value.
          return option.value != null && this._compareWith(option.value, value);
        } catch (error) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            // Notify developers of errors in their comparator.
            console.warn(error);
          }
          return false;
        }
      });
      if (correspondingOption) {
        this._selectionModel.select(correspondingOption);
      }
      return correspondingOption;
    }
    /** Assigns a specific value to the select. Returns whether the value has changed. */
    _assignValue(newValue) {
      // Always re-assign an array, because it might have been mutated.
      if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
        if (this.options) {
          this._setSelectionByValue(newValue);
        }
        this._value = newValue;
        return true;
      }
      return false;
    }
    /** Gets how wide the overlay panel should be. */
    _getOverlayWidth(preferredOrigin) {
      if (this.panelWidth === 'auto') {
        const refToMeasure = preferredOrigin instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
        return refToMeasure.nativeElement.getBoundingClientRect().width;
      }
      return this.panelWidth === null ? '' : this.panelWidth;
    }
    /** Syncs the parent state with the individual options. */
    _syncParentProperties() {
      if (this.options) {
        for (const option of this.options) {
          option._changeDetectorRef.markForCheck();
        }
      }
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    _initKeyManager() {
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(['shiftKey']).skipPredicate(this._skipPredicate);
      this._keyManager.tabOut.subscribe(() => {
        if (this.panelOpen) {
          // Select the active item when tabbing away. This is consistent with how the native
          // select behaves. Note that we only want to do this in single selection mode.
          if (!this.multiple && this._keyManager.activeItem) {
            this._keyManager.activeItem._selectViaInteraction();
          }
          // Restore focus to the trigger before closing. Ensures that the focus
          // position won't be lost if the user got focus into the overlay.
          this.focus();
          this.close();
        }
      });
      this._keyManager.change.subscribe(() => {
        if (this._panelOpen && this.panel) {
          this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
        } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
      });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */
    _resetOptions() {
      const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.options.changes, this._destroy);
      this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(changedOrDestroyed)).subscribe(event => {
        this._onSelect(event.source, event.isUserInput);
        if (event.isUserInput && !this.multiple && this._panelOpen) {
          this.close();
          this.focus();
        }
      });
      // Listen to changes in the internal state of the options and react accordingly.
      // Handles cases like the labels of the selected options changing.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...this.options.map(option => option._stateChanges)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(changedOrDestroyed)).subscribe(() => {
        // `_stateChanges` can fire as a result of a change in the label's DOM value which may
        // be the result of an expression changing. We have to use `detectChanges` in order
        // to avoid "changed after checked" errors (see #14793).
        this._changeDetectorRef.detectChanges();
        this.stateChanges.next();
      });
    }
    /** Invoked when an option is clicked. */
    _onSelect(option, isUserInput) {
      const wasSelected = this._selectionModel.isSelected(option);
      if (option.value == null && !this._multiple) {
        option.deselect();
        this._selectionModel.clear();
        if (this.value != null) {
          this._propagateChanges(option.value);
        }
      } else {
        if (wasSelected !== option.selected) {
          option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
        }
        if (isUserInput) {
          this._keyManager.setActiveItem(option);
        }
        if (this.multiple) {
          this._sortValues();
          if (isUserInput) {
            // In case the user selected the option with their mouse, we
            // want to restore focus back to the trigger, in order to
            // prevent the select keyboard controls from clashing with
            // the ones from `mat-option`.
            this.focus();
          }
        }
      }
      if (wasSelected !== this._selectionModel.isSelected(option)) {
        this._propagateChanges();
      }
      this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */
    _sortValues() {
      if (this.multiple) {
        const options = this.options.toArray();
        this._selectionModel.sort((a, b) => {
          return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
        });
        this.stateChanges.next();
      }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
      let valueToEmit;
      if (this.multiple) {
        valueToEmit = this.selected.map(option => option.value);
      } else {
        valueToEmit = this.selected ? this.selected.value : fallbackValue;
      }
      this._value = valueToEmit;
      this.valueChange.emit(valueToEmit);
      this._onChange(valueToEmit);
      this.selectionChange.emit(this._getChangeEvent(valueToEmit));
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first *enabled* option.
     */
    _highlightCorrectOption() {
      if (this._keyManager) {
        if (this.empty) {
          // Find the index of the first *enabled* option. Avoid calling `_keyManager.setActiveItem`
          // because it activates the first option that passes the skip predicate, rather than the
          // first *enabled* option.
          let firstEnabledOptionIndex = -1;
          for (let index = 0; index < this.options.length; index++) {
            const option = this.options.get(index);
            if (!option.disabled) {
              firstEnabledOptionIndex = index;
              break;
            }
          }
          this._keyManager.setActiveItem(firstEnabledOptionIndex);
        } else {
          this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
      }
    }
    /** Whether the panel is allowed to open. */
    _canOpen() {
      return !this._panelOpen && !this.disabled && this.options?.length > 0;
    }
    /** Focuses the select element. */
    focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    /** Gets the aria-labelledby for the select panel. */
    _getPanelAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }
      const labelId = this._parentFormField?.getLabelId();
      const labelExpression = labelId ? labelId + ' ' : '';
      return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */
    _getAriaActiveDescendant() {
      if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
        return this._keyManager.activeItem.id;
      }
      return null;
    }
    /** Gets the aria-labelledby of the select component trigger. */
    _getTriggerAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }
      const labelId = this._parentFormField?.getLabelId();
      let value = (labelId ? labelId + ' ' : '') + this._valueId;
      if (this.ariaLabelledby) {
        value += ' ' + this.ariaLabelledby;
      }
      return value;
    }
    /** Called when the overlay panel is done animating. */
    _panelDoneAnimating(isOpen) {
      this.openedChange.emit(isOpen);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
      if (ids.length) {
        this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
      } else {
        this._elementRef.nativeElement.removeAttribute('aria-describedby');
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
      this.focus();
      this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
      // Since the panel doesn't overlap the trigger, we
      // want the label to only float when there's a value.
      return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
    }
    static {
      this.ɵfac = function MatSelect_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSelect,
        selectors: [["mat-select"]],
        contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
          }
        },
        viewQuery: function MatSelect_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkConnectedOverlay, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
          }
        },
        hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
        hostVars: 19,
        hostBindings: function MatSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatSelect_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSelect_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple);
          }
        },
        inputs: {
          userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
          panelClass: "panelClass",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
          hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          placeholder: "placeholder",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          compareWith: "compareWith",
          value: "value",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          errorStateMatcher: "errorStateMatcher",
          typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          sortComparator: "sortComparator",
          id: "id",
          panelWidth: "panelWidth"
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          _closedStream: "closed",
          selectionChange: "selectionChange",
          valueChange: "valueChange"
        },
        exportAs: ["matSelect"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldControl,
          useExisting: MatSelect
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT,
          useExisting: MatSelect
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c3,
        decls: 11,
        vars: 8,
        consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "backdropClick", "attach", "detach", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"]],
        template: function MatSelect_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSelect_Conditional_4_Template, 2, 1, "span", 4)(5, MatSelect_Conditional_5_Template, 3, 1, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MatSelect_ng_template_10_Template, 3, 9, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.close());
            })("attach", function MatSelect_Template_ng_template_attach_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onAttached());
            })("detach", function MatSelect_Template_ng_template_detach_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.close());
            });
          }
          if (rf & 2) {
            const fallbackOverlayOrigin_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._valueId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.empty ? 4 : 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || fallbackOverlayOrigin_r4)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth);
          }
        },
        dependencies: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkOverlayOrigin, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass],
        styles: [".mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-app-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-app-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-app-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-app-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-app-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-app-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-app-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-app-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color, var(--mat-app-surface-container))}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-app-on-surface-variant))}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}"],
        encapsulation: 2,
        data: {
          animation: [matSelectAnimations.transformPanel]
        },
        changeDetection: 0
      });
    }
  }
  return MatSelect;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
let MatSelectTrigger = /*#__PURE__*/(() => {
  class MatSelectTrigger {
    static {
      this.ɵfac = function MatSelectTrigger_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSelectTrigger)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSelectTrigger,
        selectors: [["mat-select-trigger"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_SELECT_TRIGGER,
          useExisting: MatSelectTrigger
        }])]
      });
    }
  }
  return MatSelectTrigger;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSelectModule = /*#__PURE__*/(() => {
  class MatSelectModule {
    static {
      this.ɵfac = function MatSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSelectModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSelectModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
      });
    }
  }
  return MatSelectModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=select.mjs.map

/***/ }),

/***/ 2029:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/sort.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SORT_DEFAULT_OPTIONS: () => (/* binding */ MAT_SORT_DEFAULT_OPTIONS),
/* harmony export */   MAT_SORT_HEADER_INTL_PROVIDER: () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER),
/* harmony export */   MAT_SORT_HEADER_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY),
/* harmony export */   MatSort: () => (/* binding */ MatSort),
/* harmony export */   MatSortHeader: () => (/* binding */ MatSortHeader),
/* harmony export */   MatSortHeaderIntl: () => (/* binding */ MatSortHeaderIntl),
/* harmony export */   MatSortModule: () => (/* binding */ MatSortModule),
/* harmony export */   matSortAnimations: () => (/* binding */ matSortAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 1992);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6809);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9090);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2489);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 194);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 3788);








/** @docs-private */
const _c0 = ["mat-sort-header", ""];
const _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._disableViewStateAnimation = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5)(4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r1._getArrowViewState())("@arrowPosition", ctx_r1._getArrowViewState())("@allowChildren", ctx_r1._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r1._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r1._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r1._getArrowDirectionState());
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/** Injection token to be used to override the default options for `mat-sort`. */
const MAT_SORT_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS');
/** Container for MatSortables to manage the sort state and provide default sort parameters. */
let MatSort = /*#__PURE__*/(() => {
  class MatSort {
    /** The sort direction of the currently active MatSortable. */
    get direction() {
      return this._direction;
    }
    set direction(direction) {
      if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getSortInvalidDirectionError(direction);
      }
      this._direction = direction;
    }
    constructor(_defaultOptions) {
      this._defaultOptions = _defaultOptions;
      this._initializedStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
      /** Collection of all registered sortables that this directive manages. */
      this.sortables = new Map();
      /** Used to notify any child components listening to state changes. */
      this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * The direction to set when an MatSortable is initially sorted.
       * May be overridden by the MatSortable's sort start.
       */
      this.start = 'asc';
      this._direction = '';
      /** Whether the sortable is disabled. */
      this.disabled = false;
      /** Event emitted when the user changes either the active sort or sort direction. */
      this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the paginator is initialized. */
      this.initialized = this._initializedStream;
    }
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     */
    register(sortable) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!sortable.id) {
          throw getSortHeaderMissingIdError();
        }
        if (this.sortables.has(sortable.id)) {
          throw getSortDuplicateSortableIdError(sortable.id);
        }
      }
      this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     */
    deregister(sortable) {
      this.sortables.delete(sortable.id);
    }
    /** Sets the active sort id and determines the new sort direction. */
    sort(sortable) {
      if (this.active != sortable.id) {
        this.active = sortable.id;
        this.direction = sortable.start ? sortable.start : this.start;
      } else {
        this.direction = this.getNextSortDirection(sortable);
      }
      this.sortChange.emit({
        active: this.active,
        direction: this.direction
      });
    }
    /** Returns the next sort direction of the active sortable, checking for potential overrides. */
    getNextSortDirection(sortable) {
      if (!sortable) {
        return '';
      }
      // Get the sort direction cycle with the potential sortable overrides.
      const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
      let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
      // Get and return the next direction in the cycle
      let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
      if (nextDirectionIndex >= sortDirectionCycle.length) {
        nextDirectionIndex = 0;
      }
      return sortDirectionCycle[nextDirectionIndex];
    }
    ngOnInit() {
      this._initializedStream.next();
    }
    ngOnChanges() {
      this._stateChanges.next();
    }
    ngOnDestroy() {
      this._stateChanges.complete();
      this._initializedStream.complete();
    }
    static {
      this.ɵfac = function MatSort_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSort,
        selectors: [["", "matSort", ""]],
        hostAttrs: [1, "mat-sort"],
        inputs: {
          active: [0, "matSortActive", "active"],
          start: [0, "matSortStart", "start"],
          direction: [0, "matSortDirection", "direction"],
          disableClear: [2, "matSortDisableClear", "disableClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "matSortDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          sortChange: "matSortChange"
        },
        exportAs: ["matSort"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return MatSort;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push('');
  }
  return sortOrder;
}
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.AnimationCurves.STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */
const matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('indicator', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0px)'
  })),
  /*#__PURE__*/
  // 10px is the height of the sort indicator, minus the width of the pointers
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(10px)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('leftPointer', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rightPointer', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowOpacity', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-active, asc-to-active, active', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 1
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0.54
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0
  })),
  /*#__PURE__*/
  // Transition between all states except for immediate transitions
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc, * => desc, * => active, * => hint, * => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0ms')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowPosition', [
  /*#__PURE__*/
  // Hidden Above => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => desc-to-hint, * => desc-to-active', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))),
  /*#__PURE__*/
  // Hint Center => Hidden Below
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-desc, * => active-to-desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  })]))),
  /*#__PURE__*/
  // Hidden Below => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc-to-hint, * => asc-to-active', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))),
  /*#__PURE__*/
  // Hint Center => Hidden Above
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-asc, * => active-to-asc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })]))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-asc, active-to-asc, asc', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }))]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('allowChildren', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)('@*', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animateChild)(), {
    optional: true
  })])])
};

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
let MatSortHeaderIntl = /*#__PURE__*/(() => {
  class MatSortHeaderIntl {
    constructor() {
      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    static {
      this.ɵfac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSortHeaderIntl)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatSortHeaderIntl,
        factory: MatSortHeaderIntl.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MatSortHeaderIntl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
let MatSortHeader = /*#__PURE__*/(() => {
  class MatSortHeader {
    /**
     * Description applied to MatSortHeader's button element with aria-describedby. This text should
     * describe the action that will occur when the user clicks the sort header.
     */
    get sortActionDescription() {
      return this._sortActionDescription;
    }
    set sortActionDescription(value) {
      this._updateSortActionDescription(value);
    }
    constructor(
    /**
     * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
     * @breaking-change 13.0.0
     */
    _intl, _changeDetectorRef,
    // `MatSort` is not optionally injected, but just asserted manually w/ better error.
    // tslint:disable-next-line: lightweight-tokens
    _sort, _columnDef, _focusMonitor, _elementRef, /** @breaking-change 14.0.0 _ariaDescriber will be required. */
    _ariaDescriber, defaultOptions) {
      this._intl = _intl;
      this._changeDetectorRef = _changeDetectorRef;
      this._sort = _sort;
      this._columnDef = _columnDef;
      this._focusMonitor = _focusMonitor;
      this._elementRef = _elementRef;
      this._ariaDescriber = _ariaDescriber;
      /**
       * Flag set to true when the indicator should be displayed while the sort is not active. Used to
       * provide an affordance that the header is sortable by showing on focus and hover.
       */
      this._showIndicatorHint = false;
      /**
       * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
       * position through the animation. If animations are currently disabled, the fromState is removed
       * so that there is no animation displayed.
       */
      this._viewState = {};
      /** The direction the arrow should be facing according to the current state. */
      this._arrowDirection = '';
      /**
       * Whether the view state animation should show the transition between the `from` and `to` states.
       */
      this._disableViewStateAnimation = false;
      /** Sets the position of the arrow that displays when sorted. */
      this.arrowPosition = 'after';
      /** whether the sort header is disabled. */
      this.disabled = false;
      // Default the action description to "Sort" because it's better than nothing.
      // Without a description, the button's label comes from the sort header text content,
      // which doesn't give any indication that it performs a sorting operation.
      this._sortActionDescription = 'Sort';
      // Note that we use a string token for the `_columnDef`, because the value is provided both by
      // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
      // and we want to avoid having the sort header depending on the CDK table because
      // of this single reference.
      if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getSortHeaderNotContainedWithinSortError();
      }
      if (defaultOptions?.arrowPosition) {
        this.arrowPosition = defaultOptions?.arrowPosition;
      }
      this._handleStateChanges();
    }
    ngOnInit() {
      if (!this.id && this._columnDef) {
        this.id = this._columnDef.name;
      }
      // Initialize the direction of the arrow and set the view state to be immediately that state.
      this._updateArrowDirection();
      this._setAnimationTransitionState({
        toState: this._isSorted() ? 'active' : this._arrowDirection
      });
      this._sort.register(this);
      this._sortButton = this._elementRef.nativeElement.querySelector('.mat-sort-header-container');
      this._updateSortActionDescription(this._sortActionDescription);
    }
    ngAfterViewInit() {
      // We use the focus monitor because we also want to style
      // things differently based on the focus origin.
      this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
        const newState = !!origin;
        if (newState !== this._showIndicatorHint) {
          this._setIndicatorHintVisible(newState);
          this._changeDetectorRef.markForCheck();
        }
      });
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._sort.deregister(this);
      this._rerenderSubscription.unsubscribe();
      if (this._sortButton) {
        this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      }
    }
    /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     */
    _setIndicatorHintVisible(visible) {
      // No-op if the sort header is disabled - should not make the hint visible.
      if (this._isDisabled() && visible) {
        return;
      }
      this._showIndicatorHint = visible;
      if (!this._isSorted()) {
        this._updateArrowDirection();
        if (this._showIndicatorHint) {
          this._setAnimationTransitionState({
            fromState: this._arrowDirection,
            toState: 'hint'
          });
        } else {
          this._setAnimationTransitionState({
            fromState: 'hint',
            toState: this._arrowDirection
          });
        }
      }
    }
    /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     */
    _setAnimationTransitionState(viewState) {
      this._viewState = viewState || {};
      // If the animation for arrow position state (opacity/translation) should be disabled,
      // remove the fromState so that it jumps right to the toState.
      if (this._disableViewStateAnimation) {
        this._viewState = {
          toState: viewState.toState
        };
      }
    }
    /** Triggers the sort on this sort header and removes the indicator hint. */
    _toggleOnInteraction() {
      this._sort.sort(this);
      // Do not show the animation if the header was already shown in the right position.
      if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
        this._disableViewStateAnimation = true;
      }
    }
    _handleClick() {
      if (!this._isDisabled()) {
        this._sort.sort(this);
      }
    }
    _handleKeydown(event) {
      if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER)) {
        event.preventDefault();
        this._toggleOnInteraction();
      }
    }
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    _isSorted() {
      return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    }
    /** Returns the animation state for the arrow direction (indicator and pointers). */
    _getArrowDirectionState() {
      return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
    }
    /** Returns the arrow position state (opacity, translation). */
    _getArrowViewState() {
      const fromState = this._viewState.fromState;
      return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
    }
    /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     */
    _updateArrowDirection() {
      this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
    }
    _isDisabled() {
      return this._sort.disabled || this.disabled;
    }
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */
    _getAriaSortAttribute() {
      if (!this._isSorted()) {
        return 'none';
      }
      return this._sort.direction == 'asc' ? 'ascending' : 'descending';
    }
    /** Whether the arrow inside the sort header should be rendered. */
    _renderArrow() {
      return !this._isDisabled() || this._isSorted();
    }
    _updateSortActionDescription(newDescription) {
      // We use AriaDescriber for the sort button instead of setting an `aria-label` because some
      // screen readers (notably VoiceOver) will read both the column header *and* the button's label
      // for every *cell* in the table, creating a lot of unnecessary noise.
      // If _sortButton is undefined, the component hasn't been initialized yet so there's
      // nothing to update in the DOM.
      if (this._sortButton) {
        // removeDescription will no-op if there is no existing message.
        // TODO(jelbourn): remove optional chaining when AriaDescriber is required.
        this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
        this._ariaDescriber?.describe(this._sortButton, newDescription);
      }
      this._sortActionDescription = newDescription;
    }
    /** Handles changes in the sorting state. */
    _handleStateChanges() {
      this._rerenderSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
        if (this._isSorted()) {
          this._updateArrowDirection();
          // Do not show the animation if the header was already shown in the right position.
          if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
          }
          this._setAnimationTransitionState({
            fromState: this._arrowDirection,
            toState: 'active'
          });
          this._showIndicatorHint = false;
        }
        // If this header was recently active and now no longer sorted, animate away the arrow.
        if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
          this._disableViewStateAnimation = false;
          this._setAnimationTransitionState({
            fromState: 'active',
            toState: this._arrowDirection
          });
        }
        this._changeDetectorRef.markForCheck();
      });
    }
    static {
      this.ɵfac = function MatSortHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSortHeader,
        selectors: [["", "mat-sort-header", ""]],
        hostAttrs: [1, "mat-sort-header"],
        hostVars: 3,
        hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
              return ctx._handleClick();
            })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(true);
            })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(false);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
          }
        },
        inputs: {
          id: [0, "mat-sort-header", "id"],
          arrowPosition: "arrowPosition",
          start: "start",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          sortActionDescription: "sortActionDescription",
          disableClear: [2, "disableClear", "disableClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        exportAs: ["matSortHeader"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 7,
        consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
        template: function MatSortHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_Conditional_3_Template, 6, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._renderArrow() ? 3 : -1);
          }
        },
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color, var(--mat-app-on-surface));opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
        encapsulation: 2,
        data: {
          animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
        },
        changeDetection: 0
      });
    }
  }
  return MatSortHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSortModule = /*#__PURE__*/(() => {
  class MatSortModule {
    static {
      this.ɵfac = function MatSortModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSortModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSortModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MAT_SORT_HEADER_INTL_PROVIDER],
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });
    }
  }
  return MatSortModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=sort.mjs.map

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

/***/ }),

/***/ 6566:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tooltip.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS),
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MatTooltip: () => (/* binding */ MatTooltip),
/* harmony export */   MatTooltipModule: () => (/* binding */ MatTooltipModule),
/* harmony export */   SCROLL_THROTTLE_MS: () => (/* binding */ SCROLL_THROTTLE_MS),
/* harmony export */   TOOLTIP_PANEL_CLASS: () => (/* binding */ TOOLTIP_PANEL_CLASS),
/* harmony export */   TooltipComponent: () => (/* binding */ TooltipComponent),
/* harmony export */   getMatTooltipInvalidPositionError: () => (/* binding */ getMatTooltipInvalidPositionError),
/* harmony export */   matTooltipAnimations: () => (/* binding */ matTooltipAnimations)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 1992);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 3126);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 4212);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1381);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 6810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 194);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 3788);



















/** Time in ms to throttle repositioning after scroll events. */
const _c0 = ["tooltip"];
const SCROLL_THROTTLE_MS = 20;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay);
    return () => overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
/** @docs-private */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
/** @docs-private */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** @docs-private */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * CSS class that will be attached to the overlay panel.
 * @deprecated
 * @breaking-change 13.0.0 remove this variable
 */
const TOOLTIP_PANEL_CLASS = 'mat-mdc-tooltip-panel';
const PANEL_CLASS = 'tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
// These constants were taken from MDC's `numbers` object. We can't import them from MDC,
// because they have some top-level references to `window` which break during SSR.
const MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
const UNBOUNDED_ANCHOR_GAP = 8;
const MIN_HEIGHT = 24;
const MAX_WIDTH = 200;
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
let MatTooltip = /*#__PURE__*/(() => {
  class MatTooltip {
    /** Allows the user to define the position of the tooltip relative to the parent element */
    get position() {
      return this._position;
    }
    set position(value) {
      if (value !== this._position) {
        this._position = value;
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
          this._tooltipInstance?.show(0);
          this._overlayRef.updatePosition();
        }
      }
    }
    /**
     * Whether tooltip should be relative to the click or touch origin
     * instead of outside the element bounding box.
     */
    get positionAtOrigin() {
      return this._positionAtOrigin;
    }
    set positionAtOrigin(value) {
      this._positionAtOrigin = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      this._detach();
      this._overlayRef = null;
    }
    /** Disables the display of the tooltip. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      const isDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      if (this._disabled !== isDisabled) {
        this._disabled = isDisabled;
        // If tooltip is disabled, hide immediately.
        if (isDisabled) {
          this.hide(0);
        } else {
          this._setupPointerEnterEventsIfNeeded();
        }
        this._syncAriaDescription(this.message);
      }
    }
    /** The default delay in ms before showing the tooltip after show is called */
    get showDelay() {
      return this._showDelay;
    }
    set showDelay(value) {
      this._showDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    /** The default delay in ms before hiding the tooltip after hide is called */
    get hideDelay() {
      return this._hideDelay;
    }
    set hideDelay(value) {
      this._hideDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
      if (this._tooltipInstance) {
        this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
      }
    }
    /** The message to be displayed in the tooltip */
    get message() {
      return this._message;
    }
    set message(value) {
      const oldMessage = this._message;
      // If the message is not a string (e.g. number), convert it to a string and trim it.
      // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
      // away the string-conversion: https://github.com/angular/components/issues/20684
      this._message = value != null ? String(value).trim() : '';
      if (!this._message && this._isTooltipVisible()) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
        this._updateTooltipMessage();
      }
      this._syncAriaDescription(oldMessage);
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
    get tooltipClass() {
      return this._tooltipClass;
    }
    set tooltipClass(value) {
      this._tooltipClass = value;
      if (this._tooltipInstance) {
        this._setTooltipClass(this._tooltipClass);
      }
    }
    constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
      this._overlay = _overlay;
      this._elementRef = _elementRef;
      this._scrollDispatcher = _scrollDispatcher;
      this._viewContainerRef = _viewContainerRef;
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._ariaDescriber = _ariaDescriber;
      this._focusMonitor = _focusMonitor;
      this._dir = _dir;
      this._defaultOptions = _defaultOptions;
      this._position = 'below';
      this._positionAtOrigin = false;
      this._disabled = false;
      this._viewInitialized = false;
      this._pointerExitEventsInitialized = false;
      this._tooltipComponent = TooltipComponent;
      this._viewportMargin = 8;
      this._cssClassPrefix = 'mat-mdc';
      /**
       * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
       * uses a long press gesture to show and hide, however it can conflict with the native browser
       * gestures. To work around the conflict, Angular Material disables native gestures on the
       * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
       * elements). The different values for this option configure the touch event handling as follows:
       * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
       *   browser gestures on particular elements. In particular, it allows text selection on inputs
       *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
       * - `on` - Enables touch gestures for all elements and disables native
       *   browser gestures with no exceptions.
       * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
       *   showing on touch devices.
       */
      this.touchGestures = 'auto';
      this._message = '';
      /** Manually-bound passive event listeners. */
      this._passiveListeners = [];
      /** Timer started at the last `touchstart` event. */
      this._touchstartTimeout = null;
      /** Emits when the component is destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._scrollStrategy = scrollStrategy;
      this._document = _document;
      if (_defaultOptions) {
        this._showDelay = _defaultOptions.showDelay;
        this._hideDelay = _defaultOptions.hideDelay;
        if (_defaultOptions.position) {
          this.position = _defaultOptions.position;
        }
        if (_defaultOptions.positionAtOrigin) {
          this.positionAtOrigin = _defaultOptions.positionAtOrigin;
        }
        if (_defaultOptions.touchGestures) {
          this.touchGestures = _defaultOptions.touchGestures;
        }
        if (_defaultOptions.tooltipClass) {
          this.tooltipClass = _defaultOptions.tooltipClass;
        }
      }
      _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
      this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
    }
    ngAfterViewInit() {
      // This needs to happen after view init so the initial values for all inputs have been set.
      this._viewInitialized = true;
      this._setupPointerEnterEventsIfNeeded();
      this._focusMonitor.monitor(this._elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(origin => {
        // Note that the focus monitor runs outside the Angular zone.
        if (!origin) {
          this._ngZone.run(() => this.hide(0));
        } else if (origin === 'keyboard') {
          this._ngZone.run(() => this.show());
        }
      });
    }
    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
      const nativeElement = this._elementRef.nativeElement;
      // Optimization: Do not call clearTimeout unless there is an active timer.
      if (this._touchstartTimeout) {
        clearTimeout(this._touchstartTimeout);
      }
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._tooltipInstance = null;
      }
      // Clean up the event listeners set in the constructor
      this._passiveListeners.forEach(([event, listener]) => {
        nativeElement.removeEventListener(event, listener, passiveListenerOptions);
      });
      this._passiveListeners.length = 0;
      this._destroyed.next();
      this._destroyed.complete();
      this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');
      this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay = this.showDelay, origin) {
      if (this.disabled || !this.message || this._isTooltipVisible()) {
        this._tooltipInstance?._cancelPendingAnimations();
        return;
      }
      const overlayRef = this._createOverlay(origin);
      this._detach();
      this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
      const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
      instance._triggerElement = this._elementRef.nativeElement;
      instance._mouseLeaveHideDelay = this._hideDelay;
      instance.afterHidden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
      this._setTooltipClass(this._tooltipClass);
      this._updateTooltipMessage();
      instance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay = this.hideDelay) {
      const instance = this._tooltipInstance;
      if (instance) {
        if (instance.isVisible()) {
          instance.hide(delay);
        } else {
          instance._cancelPendingAnimations();
          this._detach();
        }
      }
    }
    /** Shows/hides the tooltip */
    toggle(origin) {
      this._isTooltipVisible() ? this.hide() : this.show(undefined, origin);
    }
    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible() {
      return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */
    _createOverlay(origin) {
      if (this._overlayRef) {
        const existingStrategy = this._overlayRef.getConfig().positionStrategy;
        if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
          return this._overlayRef;
        }
        this._detach();
      }
      const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
      // Create connected position strategy that listens for scroll events to reposition.
      const strategy = this._overlay.position().flexibleConnectedTo(this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
      strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(change => {
        this._updateCurrentPositionClass(change.connectionPair);
        if (this._tooltipInstance) {
          if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
            // After position changes occur and the overlay is clipped by
            // a parent scrollable then close the tooltip.
            this._ngZone.run(() => this.hide(0));
          }
        }
      });
      this._overlayRef = this._overlay.create({
        direction: this._dir,
        positionStrategy: strategy,
        panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
        scrollStrategy: this._scrollStrategy()
      });
      this._updatePosition(this._overlayRef);
      this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
      this._overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
      this._overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(event => {
        if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
          event.preventDefault();
          event.stopPropagation();
          this._ngZone.run(() => this.hide(0));
        }
      });
      if (this._defaultOptions?.disableTooltipInteractivity) {
        this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
      }
      return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */
    _detach() {
      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();
      }
      this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */
    _updatePosition(overlayRef) {
      const position = overlayRef.getConfig().positionStrategy;
      const origin = this._getOrigin();
      const overlay = this._getOverlayPosition();
      position.withPositions([this._addOffset({
        ...origin.main,
        ...overlay.main
      }), this._addOffset({
        ...origin.fallback,
        ...overlay.fallback
      })]);
    }
    /** Adds the configured offset to a position. Used as a hook for child classes. */
    _addOffset(position) {
      const offset = UNBOUNDED_ANCHOR_GAP;
      const isLtr = !this._dir || this._dir.value == 'ltr';
      if (position.originY === 'top') {
        position.offsetY = -offset;
      } else if (position.originY === 'bottom') {
        position.offsetY = offset;
      } else if (position.originX === 'start') {
        position.offsetX = isLtr ? -offset : offset;
      } else if (position.originX === 'end') {
        position.offsetX = isLtr ? offset : -offset;
      }
      return position;
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    _getOrigin() {
      const isLtr = !this._dir || this._dir.value == 'ltr';
      const position = this.position;
      let originPosition;
      if (position == 'above' || position == 'below') {
        originPosition = {
          originX: 'center',
          originY: position == 'above' ? 'top' : 'bottom'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        originPosition = {
          originX: 'start',
          originY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        originPosition = {
          originX: 'end',
          originY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }
      const {
        x,
        y
      } = this._invertPosition(originPosition.originX, originPosition.originY);
      return {
        main: originPosition,
        fallback: {
          originX: x,
          originY: y
        }
      };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */
    _getOverlayPosition() {
      const isLtr = !this._dir || this._dir.value == 'ltr';
      const position = this.position;
      let overlayPosition;
      if (position == 'above') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'bottom'
        };
      } else if (position == 'below') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'top'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        overlayPosition = {
          overlayX: 'end',
          overlayY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        overlayPosition = {
          overlayX: 'start',
          overlayY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }
      const {
        x,
        y
      } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
      return {
        main: overlayPosition,
        fallback: {
          overlayX: x,
          overlayY: y
        }
      };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    _updateTooltipMessage() {
      // Must wait for the message to be painted to the tooltip so that the overlay can properly
      // calculate the correct positioning based on the size of the text.
      if (this._tooltipInstance) {
        this._tooltipInstance.message = this.message;
        this._tooltipInstance._markForCheck();
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          if (this._tooltipInstance) {
            this._overlayRef.updatePosition();
          }
        }, {
          injector: this._injector
        });
      }
    }
    /** Updates the tooltip class */
    _setTooltipClass(tooltipClass) {
      if (this._tooltipInstance) {
        this._tooltipInstance.tooltipClass = tooltipClass;
        this._tooltipInstance._markForCheck();
      }
    }
    /** Inverts an overlay position. */
    _invertPosition(x, y) {
      if (this.position === 'above' || this.position === 'below') {
        if (y === 'top') {
          y = 'bottom';
        } else if (y === 'bottom') {
          y = 'top';
        }
      } else {
        if (x === 'end') {
          x = 'start';
        } else if (x === 'start') {
          x = 'end';
        }
      }
      return {
        x,
        y
      };
    }
    /** Updates the class on the overlay panel based on the current position of the tooltip. */
    _updateCurrentPositionClass(connectionPair) {
      const {
        overlayY,
        originX,
        originY
      } = connectionPair;
      let newPosition;
      // If the overlay is in the middle along the Y axis,
      // it means that it's either before or after.
      if (overlayY === 'center') {
        // Note that since this information is used for styling, we want to
        // resolve `start` and `end` to their real values, otherwise consumers
        // would have to remember to do it themselves on each consumption.
        if (this._dir && this._dir.value === 'rtl') {
          newPosition = originX === 'end' ? 'left' : 'right';
        } else {
          newPosition = originX === 'start' ? 'left' : 'right';
        }
      } else {
        newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
      }
      if (newPosition !== this._currentPosition) {
        const overlayRef = this._overlayRef;
        if (overlayRef) {
          const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
          overlayRef.removePanelClass(classPrefix + this._currentPosition);
          overlayRef.addPanelClass(classPrefix + newPosition);
        }
        this._currentPosition = newPosition;
      }
    }
    /** Binds the pointer events to the tooltip trigger. */
    _setupPointerEnterEventsIfNeeded() {
      // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
      if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
        return;
      }
      // The mouse events shouldn't be bound on mobile devices, because they can prevent the
      // first tap from firing its click event or can cause the tooltip to open for clicks.
      if (this._platformSupportsMouseEvents()) {
        this._passiveListeners.push(['mouseenter', event => {
          this._setupPointerExitEventsIfNeeded();
          let point = undefined;
          if (event.x !== undefined && event.y !== undefined) {
            point = event;
          }
          this.show(undefined, point);
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();
        this._passiveListeners.push(['touchstart', event => {
          const touch = event.targetTouches?.[0];
          const origin = touch ? {
            x: touch.clientX,
            y: touch.clientY
          } : undefined;
          // Note that it's important that we don't `preventDefault` here,
          // because it can prevent click events from firing on the element.
          this._setupPointerExitEventsIfNeeded();
          if (this._touchstartTimeout) {
            clearTimeout(this._touchstartTimeout);
          }
          const DEFAULT_LONGPRESS_DELAY = 500;
          this._touchstartTimeout = setTimeout(() => {
            this._touchstartTimeout = null;
            this.show(undefined, origin);
          }, this._defaultOptions.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
        }]);
      }
      this._addListeners(this._passiveListeners);
    }
    _setupPointerExitEventsIfNeeded() {
      if (this._pointerExitEventsInitialized) {
        return;
      }
      this._pointerExitEventsInitialized = true;
      const exitListeners = [];
      if (this._platformSupportsMouseEvents()) {
        exitListeners.push(['mouseleave', event => {
          const newTarget = event.relatedTarget;
          if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
            this.hide();
          }
        }], ['wheel', event => this._wheelListener(event)]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();
        const touchendListener = () => {
          if (this._touchstartTimeout) {
            clearTimeout(this._touchstartTimeout);
          }
          this.hide(this._defaultOptions.touchendHideDelay);
        };
        exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
      }
      this._addListeners(exitListeners);
      this._passiveListeners.push(...exitListeners);
    }
    _addListeners(listeners) {
      listeners.forEach(([event, listener]) => {
        this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
      });
    }
    _platformSupportsMouseEvents() {
      return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Listener for the `wheel` event on the element. */
    _wheelListener(event) {
      if (this._isTooltipVisible()) {
        const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
        const element = this._elementRef.nativeElement;
        // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
        // won't fire if the user scrolls away using the wheel without moving their cursor. We
        // work around it by finding the element under the user's cursor and closing the tooltip
        // if it's not the trigger.
        if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
          this.hide();
        }
      }
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */
    _disableNativeGesturesIfNecessary() {
      const gestures = this.touchGestures;
      if (gestures !== 'off') {
        const element = this._elementRef.nativeElement;
        const style = element.style;
        // If gestures are set to `auto`, we don't disable text selection on inputs and
        // textareas, because it prevents the user from typing into them on iOS Safari.
        if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
          style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
        }
        // If we have `auto` gestures and the element uses native HTML dragging,
        // we don't set `-webkit-user-drag` because it prevents the native behavior.
        if (gestures === 'on' || !element.draggable) {
          style.webkitUserDrag = 'none';
        }
        style.touchAction = 'none';
        style.webkitTapHighlightColor = 'transparent';
      }
    }
    /** Updates the tooltip's ARIA description based on it current state. */
    _syncAriaDescription(oldMessage) {
      if (this._ariaDescriptionPending) {
        return;
      }
      this._ariaDescriptionPending = true;
      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, 'tooltip');
      this._ngZone.runOutsideAngular(() => {
        // The `AriaDescriber` has some functionality that avoids adding a description if it's the
        // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
        // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
        // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
        Promise.resolve().then(() => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
          }
        });
      });
    }
    static {
      this.ɵfac = function MatTooltip_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatTooltip,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-mdc-tooltip-trigger"],
        hostVars: 2,
        hostBindings: function MatTooltip_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tooltip-disabled", ctx.disabled);
          }
        },
        inputs: {
          position: [0, "matTooltipPosition", "position"],
          positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
          disabled: [0, "matTooltipDisabled", "disabled"],
          showDelay: [0, "matTooltipShowDelay", "showDelay"],
          hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
          touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
          message: [0, "matTooltip", "message"],
          tooltipClass: [0, "matTooltipClass", "tooltipClass"]
        },
        exportAs: ["matTooltip"],
        standalone: true
      });
    }
  }
  return MatTooltip;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
let TooltipComponent = /*#__PURE__*/(() => {
  class TooltipComponent {
    constructor(_changeDetectorRef, _elementRef, animationMode) {
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      /* Whether the tooltip text overflows to multiple lines */
      this._isMultiline = false;
      /** Whether interactions on the page should close the tooltip */
      this._closeOnInteraction = false;
      /** Whether the tooltip is currently visible. */
      this._isVisible = false;
      /** Subject for notifying that the tooltip has been hidden from the view */
      this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Name of the show animation and the class that toggles it. */
      this._showAnimation = 'mat-mdc-tooltip-show';
      /** Name of the hide animation and the class that toggles it. */
      this._hideAnimation = 'mat-mdc-tooltip-hide';
      this._animationsDisabled = animationMode === 'NoopAnimations';
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    show(delay) {
      // Cancel the delayed hide if it is scheduled
      if (this._hideTimeoutId != null) {
        clearTimeout(this._hideTimeoutId);
      }
      this._showTimeoutId = setTimeout(() => {
        this._toggleVisibility(true);
        this._showTimeoutId = undefined;
      }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    hide(delay) {
      // Cancel the delayed show if it is scheduled
      if (this._showTimeoutId != null) {
        clearTimeout(this._showTimeoutId);
      }
      this._hideTimeoutId = setTimeout(() => {
        this._toggleVisibility(false);
        this._hideTimeoutId = undefined;
      }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    afterHidden() {
      return this._onHide;
    }
    /** Whether the tooltip is being displayed. */
    isVisible() {
      return this._isVisible;
    }
    ngOnDestroy() {
      this._cancelPendingAnimations();
      this._onHide.complete();
      this._triggerElement = null;
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */
    _handleBodyInteraction() {
      if (this._closeOnInteraction) {
        this.hide(0);
      }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
    _handleMouseLeave({
      relatedTarget
    }) {
      if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
        if (this.isVisible()) {
          this.hide(this._mouseLeaveHideDelay);
        } else {
          this._finalizeAnimation(false);
        }
      }
    }
    /**
     * Callback for when the timeout in this.show() gets completed.
     * This method is only needed by the mdc-tooltip, and so it is only implemented
     * in the mdc-tooltip, not here.
     */
    _onShow() {
      this._isMultiline = this._isTooltipMultiline();
      this._markForCheck();
    }
    /** Whether the tooltip text has overflown to the next line */
    _isTooltipMultiline() {
      const rect = this._elementRef.nativeElement.getBoundingClientRect();
      return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
    }
    /** Event listener dispatched when an animation on the tooltip finishes. */
    _handleAnimationEnd({
      animationName
    }) {
      if (animationName === this._showAnimation || animationName === this._hideAnimation) {
        this._finalizeAnimation(animationName === this._showAnimation);
      }
    }
    /** Cancels any pending animation sequences. */
    _cancelPendingAnimations() {
      if (this._showTimeoutId != null) {
        clearTimeout(this._showTimeoutId);
      }
      if (this._hideTimeoutId != null) {
        clearTimeout(this._hideTimeoutId);
      }
      this._showTimeoutId = this._hideTimeoutId = undefined;
    }
    /** Handles the cleanup after an animation has finished. */
    _finalizeAnimation(toVisible) {
      if (toVisible) {
        this._closeOnInteraction = true;
      } else if (!this.isVisible()) {
        this._onHide.next();
      }
    }
    /** Toggles the visibility of the tooltip element. */
    _toggleVisibility(isVisible) {
      // We set the classes directly here ourselves so that toggling the tooltip state
      // isn't bound by change detection. This allows us to hide it even if the
      // view ref has been detached from the CD tree.
      const tooltip = this._tooltip.nativeElement;
      const showClass = this._showAnimation;
      const hideClass = this._hideAnimation;
      tooltip.classList.remove(isVisible ? hideClass : showClass);
      tooltip.classList.add(isVisible ? showClass : hideClass);
      if (this._isVisible !== isVisible) {
        this._isVisible = isVisible;
        this._changeDetectorRef.markForCheck();
      }
      // It's common for internal apps to disable animations using `* { animation: none !important }`
      // which can break the opening sequence. Try to detect such cases and work around them.
      if (isVisible && !this._animationsDisabled && typeof getComputedStyle === 'function') {
        const styles = getComputedStyle(tooltip);
        // Use `getPropertyValue` to avoid issues with property renaming.
        if (styles.getPropertyValue('animation-duration') === '0s' || styles.getPropertyValue('animation-name') === 'none') {
          this._animationsDisabled = true;
        }
      }
      if (isVisible) {
        this._onShow();
      }
      if (this._animationsDisabled) {
        tooltip.classList.add('_mat-animation-noopable');
        this._finalizeAnimation(isVisible);
      }
    }
    static {
      this.ɵfac = function TooltipComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["mat-tooltip-component"]],
        viewQuery: function TooltipComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
          }
        },
        hostAttrs: ["aria-hidden", "true"],
        hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
              return ctx._handleMouseLeave($event);
            });
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 4,
        consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleAnimationEnd($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tooltip--multiline", ctx._isMultiline);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tooltipClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
        styles: [".mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:\"\";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-app-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-app-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-app-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-app-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-app-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-app-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-app-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return TooltipComponent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by MatTooltip.
 * @docs-private
 */
const matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('state', [
  /*#__PURE__*/
  // TODO(crisbeto): these values are based on MDC's CSS.
  // We should be able to use their styles directly once we land #19432.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('initial, void, hidden', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('visible', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    transform: 'scale(1)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => visible', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => hidden', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('75ms cubic-bezier(0.4, 0, 1, 1)'))])
};
let MatTooltipModule = /*#__PURE__*/(() => {
  class MatTooltipModule {
    static {
      this.ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTooltipModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatTooltipModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.CdkScrollableModule]
      });
    }
  }
  return MatTooltipModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=tooltip.mjs.map

/***/ })

}]);