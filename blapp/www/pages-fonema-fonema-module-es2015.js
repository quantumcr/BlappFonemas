(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fonema-fonema-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonema/fonema.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonema/fonema.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-phoneme-view></app-phoneme-view>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/fonema/fonema-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/fonema/fonema-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FonemaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonemaPageRoutingModule", function() { return FonemaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fonema_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonema.page */ "./src/app/pages/fonema/fonema.page.ts");




const routes = [
    {
        path: '',
        component: _fonema_page__WEBPACK_IMPORTED_MODULE_3__["FonemaPage"]
    }
];
let FonemaPageRoutingModule = class FonemaPageRoutingModule {
};
FonemaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FonemaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fonema/fonema.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/fonema/fonema.module.ts ***!
  \***********************************************/
/*! exports provided: FonemaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonemaPageModule", function() { return FonemaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fonema_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonema-routing.module */ "./src/app/pages/fonema/fonema-routing.module.ts");
/* harmony import */ var _fonema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonema.page */ "./src/app/pages/fonema/fonema.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let FonemaPageModule = class FonemaPageModule {
};
FonemaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fonema_routing_module__WEBPACK_IMPORTED_MODULE_5__["FonemaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_fonema_page__WEBPACK_IMPORTED_MODULE_6__["FonemaPage"]]
    })
], FonemaPageModule);



/***/ }),

/***/ "./src/app/pages/fonema/fonema.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/fonema/fonema.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 100%;\n  height: 100%;\n  background: url('fondo.svg');\n}\n\n.component {\n  width: 1142px;\n  height: 624px;\n  margin-top: 48px;\n  margin-left: 70px;\n  margin-right: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9uZW1hL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxwYWdlc1xcZm9uZW1hXFxmb25lbWEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb25lbWEvZm9uZW1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb25lbWEvZm9uZW1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb25kby5zdmcnKTtcclxufVxyXG4uY29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjhweDtcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2ZvbmRvLnN2Z1wiKTtcbn1cblxuLmNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/fonema/fonema.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/fonema/fonema.page.ts ***!
  \*********************************************/
/*! exports provided: FonemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonemaPage", function() { return FonemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FonemaPage = class FonemaPage {
    constructor() { }
    ngOnInit() {
    }
};
FonemaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fonema',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fonema.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonema/fonema.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fonema.page.scss */ "./src/app/pages/fonema/fonema.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FonemaPage);



/***/ })

}]);
//# sourceMappingURL=pages-fonema-fonema-module-es2015.js.map