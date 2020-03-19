(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-semanticas-semanticas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semanticas/semanticas.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semanticas/semanticas.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row class=\"component\">\r\n        <ion-col >\r\n          <app-semantics></app-semantics>\r\n        </ion-col>\r\n      </ion-row>   \r\n    </ion-grid>\r\n\r\n    <div style=\"position: absolute; left: 1100px; top: 0px;\">\r\n      <ion-img src=\"assets/svg/shapes/semanticsCircle.svg\"></ion-img>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/semanticas/semanticas-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/semanticas/semanticas-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SemanticasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticasPageRoutingModule", function() { return SemanticasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _semanticas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./semanticas.page */ "./src/app/pages/semanticas/semanticas.page.ts");




const routes = [
    {
        path: '',
        component: _semanticas_page__WEBPACK_IMPORTED_MODULE_3__["SemanticasPage"]
    }
];
let SemanticasPageRoutingModule = class SemanticasPageRoutingModule {
};
SemanticasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SemanticasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/semanticas/semanticas.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/semanticas/semanticas.module.ts ***!
  \*******************************************************/
/*! exports provided: SemanticasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticasPageModule", function() { return SemanticasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _semanticas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./semanticas-routing.module */ "./src/app/pages/semanticas/semanticas-routing.module.ts");
/* harmony import */ var _semanticas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./semanticas.page */ "./src/app/pages/semanticas/semanticas.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let SemanticasPageModule = class SemanticasPageModule {
};
SemanticasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _semanticas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SemanticasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_semanticas_page__WEBPACK_IMPORTED_MODULE_6__["SemanticasPage"]]
    })
], SemanticasPageModule);



/***/ }),

/***/ "./src/app/pages/semanticas/semanticas.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/semanticas/semanticas.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background: url('semantics.svg');\n    background-size: 100%;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background: url('semantics.svg');\n    background-size: 100%;\n  }\n\n  .component {\n    width: 1142px;\n    height: 624px;\n    margin-top: 48px;\n    margin-left: 70px;\n    margin-right: 68px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VtYW50aWNhcy9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxccGFnZXNcXHNlbWFudGljYXNcXHNlbWFudGljYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZW1hbnRpY2FzL3NlbWFudGljYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdDQUFBO0lBQ0EscUJBQUE7RUNDTjtBQUNGO0FESUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0NBQUE7SUFDQSxxQkFBQTtFQ0ZOOztFRElFO0lBQ0ksYUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VtYW50aWNhcy9zZW1hbnRpY2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9zZW1hbnRpY3Muc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgfSBcclxuICBcclxuICAgICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6MTI4MHB4KXtcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL3NlbWFudGljcy5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMTQycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9zZW1hbnRpY3Muc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5wcmluY2lwYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvc2VtYW50aWNzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cblxuICAuY29tcG9uZW50IHtcbiAgICB3aWR0aDogMTE0MnB4O1xuICAgIGhlaWdodDogNjI0cHg7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY4cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/semanticas/semanticas.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/semanticas/semanticas.page.ts ***!
  \*****************************************************/
/*! exports provided: SemanticasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticasPage", function() { return SemanticasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticasPage = class SemanticasPage {
    ngOnInit() {
    }
};
SemanticasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semanticas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semanticas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semanticas/semanticas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semanticas.page.scss */ "./src/app/pages/semanticas/semanticas.page.scss")).default]
    })
], SemanticasPage);



/***/ })

}]);
//# sourceMappingURL=pages-semanticas-semanticas-module-es2015.js.map