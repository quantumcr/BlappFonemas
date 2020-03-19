(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fonemas-fonemas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonemas/fonemas.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonemas/fonemas.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row class=\"component\">\r\n        <ion-col >\r\n          <app-phoneme></app-phoneme>\r\n        </ion-col>\r\n      </ion-row>   \r\n    </ion-grid>\r\n\r\n    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n      <ion-img src=\"assets/svg/shapes/vocalForm.svg\"></ion-img>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; left: 1192px; top: 120px;\">\r\n      <ion-img src=\"assets/svg/shapes/aquaCircle.svg\"></ion-img>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; left: 60px; top: 600px;\">\r\n      <ion-img src=\"assets/svg/shapes/purpleCircle.svg\"></ion-img>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background: url('phoneme.svg');\n    background-size: 100%;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background: url('phoneme.svg');\n    background-size: 100%;\n  }\n\n  .component {\n    width: 1142px;\n    height: 624px;\n    margin-top: 48px;\n    margin-left: 70px;\n    margin-right: 68px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9uZW1hcy9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxccGFnZXNcXGZvbmVtYXNcXGZvbmVtYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb25lbWFzL2ZvbmVtYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7RUNDTjtBQUNGO0FESUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7SUFDQSxxQkFBQTtFQ0ZOOztFRElFO0lBQ0ksYUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9uZW1hcy9mb25lbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9waG9uZW1lLnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIH0gXHJcbiAgICAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMjgwcHgpe1xyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvcGhvbmVtZS5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMTQycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL3Bob25lbWUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5wcmluY2lwYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvcGhvbmVtZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB9XG5cbiAgLmNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDExNDJweDtcbiAgICBoZWlnaHQ6IDYyNHB4O1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xuICB9XG59Il19 */");

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