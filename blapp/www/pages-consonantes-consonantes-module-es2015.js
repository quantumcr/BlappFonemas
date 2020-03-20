(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consonantes-consonantes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consonantes/consonantes.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consonantes/consonantes.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-phoneme-consonant-view [phoneme]=\"phonemeConsonant\"></app-phoneme-consonant-view>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/consonantes/consonantes-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/consonantes/consonantes-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConsonantesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantesPageRoutingModule", function() { return ConsonantesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _consonantes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consonantes.page */ "./src/app/pages/consonantes/consonantes.page.ts");




const routes = [
    {
        path: '',
        component: _consonantes_page__WEBPACK_IMPORTED_MODULE_3__["ConsonantesPage"]
    }
];
let ConsonantesPageRoutingModule = class ConsonantesPageRoutingModule {
};
ConsonantesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsonantesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/consonantes/consonantes.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/consonantes/consonantes.module.ts ***!
  \*********************************************************/
/*! exports provided: ConsonantesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantesPageModule", function() { return ConsonantesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _consonantes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consonantes-routing.module */ "./src/app/pages/consonantes/consonantes-routing.module.ts");
/* harmony import */ var _consonantes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consonantes.page */ "./src/app/pages/consonantes/consonantes.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let ConsonantesPageModule = class ConsonantesPageModule {
};
ConsonantesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consonantes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsonantesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_consonantes_page__WEBPACK_IMPORTED_MODULE_6__["ConsonantesPage"]]
    })
], ConsonantesPageModule);



/***/ }),

/***/ "./src/app/pages/consonantes/consonantes.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/consonantes/consonantes.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 100%;\n  height: 100%;\n  background: url('vocalConsonat.svg');\n  background-size: 100%;\n}\n\n.component {\n  width: 1142px;\n  height: 624px;\n  margin-top: 48px;\n  margin-left: 70px;\n  margin-right: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc29uYW50ZXMvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxjb25zb25hbnRlc1xcY29uc29uYW50ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25zb25hbnRlcy9jb25zb25hbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25zb25hbnRlcy9jb25zb25hbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC92b2NhbENvbnNvbmF0LnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcbi5jb21wb25lbnR7XHJcbiAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC92b2NhbENvbnNvbmF0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4uY29tcG9uZW50IHtcbiAgd2lkdGg6IDExNDJweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogNjhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/consonantes/consonantes.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/consonantes/consonantes.page.ts ***!
  \*******************************************************/
/*! exports provided: ConsonantesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantesPage", function() { return ConsonantesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ConsonantesPage = class ConsonantesPage {
    //public valueFonema = null;
    //public mensajeFonema: string;
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.phonemeConsonant = JSON.parse(params['phoneme']);
        });
        //this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
        //console.log(this.valueFonema);
    }
};
ConsonantesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ConsonantesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonantes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonantes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consonantes/consonantes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonantes.page.scss */ "./src/app/pages/consonantes/consonantes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ConsonantesPage);



/***/ })

}]);
//# sourceMappingURL=pages-consonantes-consonantes-module-es2015.js.map