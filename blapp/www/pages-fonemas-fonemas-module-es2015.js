(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fonemas-fonemas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonemas/fonemas.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonemas/fonemas.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-phoneme></app-phoneme>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/fonemas/fonemas-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/fonemas/fonemas-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FonemasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonemasPageRoutingModule", function() { return FonemasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fonemas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonemas.page */ "./src/app/pages/fonemas/fonemas.page.ts");




const routes = [
    {
        path: '',
        component: _fonemas_page__WEBPACK_IMPORTED_MODULE_3__["FonemasPage"]
    }
];
let FonemasPageRoutingModule = class FonemasPageRoutingModule {
};
FonemasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FonemasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fonemas/fonemas.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/fonemas/fonemas.module.ts ***!
  \*************************************************/
/*! exports provided: FonemasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonemasPageModule", function() { return FonemasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fonemas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonemas-routing.module */ "./src/app/pages/fonemas/fonemas-routing.module.ts");
/* harmony import */ var _fonemas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonemas.page */ "./src/app/pages/fonemas/fonemas.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let FonemasPageModule = class FonemasPageModule {
};
FonemasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fonemas_routing_module__WEBPACK_IMPORTED_MODULE_5__["FonemasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_fonemas_page__WEBPACK_IMPORTED_MODULE_6__["FonemasPage"]]
    })
], FonemasPageModule);



/***/ }),

/***/ "./src/app/pages/fonemas/fonemas.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/fonemas/fonemas.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background: url('phoneme.svg');\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background: url('phoneme.svg');\n  }\n\n  .component {\n    width: 1142px;\n    height: 624px;\n    margin-top: 48px;\n    margin-left: 70px;\n    margin-right: 68px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9uZW1hcy9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxccGFnZXNcXGZvbmVtYXNcXGZvbmVtYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb25lbWFzL2ZvbmVtYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VDQ047QUFDRjtBRElBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VDRk47O0VESUU7SUFDSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb25lbWFzL2ZvbmVtYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjgwMHB4KXtcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL3Bob25lbWUuc3ZnJyk7XHJcbiAgICB9IFxyXG4gICAgICAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6MTI4MHB4KXtcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL3Bob25lbWUuc3ZnJyk7XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMTQycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL3Bob25lbWUuc3ZnXCIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9waG9uZW1lLnN2Z1wiKTtcbiAgfVxuXG4gIC5jb21wb25lbnQge1xuICAgIHdpZHRoOiAxMTQycHg7XG4gICAgaGVpZ2h0OiA2MjRweDtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNjhweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/fonemas/fonemas.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/fonemas/fonemas.page.ts ***!
  \***********************************************/
/*! exports provided: FonemasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonemasPage", function() { return FonemasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FonemasPage = class FonemasPage {
    constructor() { }
    ngOnInit() {
    }
};
FonemasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fonemas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fonemas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonemas/fonemas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fonemas.page.scss */ "./src/app/pages/fonemas/fonemas.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FonemasPage);



/***/ })

}]);
//# sourceMappingURL=pages-fonemas-fonemas-module-es2015.js.map