(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recuperacion-recuperacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recuperacion/recuperacion.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recuperacion/recuperacion.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"assets/img/logo/logoColetin.png\" class=\"logo\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-restore comando=\"Recuperar\" ></app-restore>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/recuperacion/recuperacion-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/recuperacion/recuperacion-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecuperacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperacionPageRoutingModule", function() { return RecuperacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recuperacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recuperacion.page */ "./src/app/pages/recuperacion/recuperacion.page.ts");




const routes = [
    {
        path: '',
        component: _recuperacion_page__WEBPACK_IMPORTED_MODULE_3__["RecuperacionPage"]
    }
];
let RecuperacionPageRoutingModule = class RecuperacionPageRoutingModule {
};
RecuperacionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecuperacionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recuperacion/recuperacion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recuperacion/recuperacion.module.ts ***!
  \***********************************************************/
/*! exports provided: RecuperacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperacionPageModule", function() { return RecuperacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _recuperacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperacion-routing.module */ "./src/app/pages/recuperacion/recuperacion-routing.module.ts");
/* harmony import */ var _recuperacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperacion.page */ "./src/app/pages/recuperacion/recuperacion.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let RecuperacionPageModule = class RecuperacionPageModule {
};
RecuperacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recuperacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperacionPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_recuperacion_page__WEBPACK_IMPORTED_MODULE_6__["RecuperacionPage"]]
    })
], RecuperacionPageModule);



/***/ }),

/***/ "./src/app/pages/recuperacion/recuperacion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/recuperacion/recuperacion.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 100%;\n  height: 100%;\n  background: url('login.svg');\n  background-size: 100%;\n}\n\n.logo {\n  position: absolute;\n  max-width: 245px;\n  max-height: 145px;\n  min-width: 245px;\n  min-height: 145px;\n  left: 549px;\n  right: 550px;\n  top: 76px;\n}\n\n.component {\n  width: 1081px;\n  height: 696px;\n  margin-top: 202px;\n  margin-left: 45px;\n  margin-right: 45px;\n}\n\n.titulo {\n  position: absolute;\n  max-width: 405px;\n  max-height: 45px;\n  min-width: 405px;\n  min-height: 45px;\n  margin-left: 437px;\n  margin-right: 438px;\n  top: 253px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 45px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjdXBlcmFjaW9uL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxwYWdlc1xccmVjdXBlcmFjaW9uXFxyZWN1cGVyYWNpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWN1cGVyYWNpb24vcmVjdXBlcmFjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0FKOztBRElBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVjdXBlcmFjaW9uL3JlY3VwZXJhY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9sb2dpbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufSBcclxuICAgXHJcblxyXG4ubG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogMjQ1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNDVweDtcclxuICAgIG1pbi13aWR0aDogMjQ1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDVweDtcclxuICAgIGxlZnQ6IDU0OXB4O1xyXG4gICAgcmlnaHQ6IDU1MHB4O1xyXG4gICAgdG9wOiA3NnB4OyAgIFxyXG59ICAgIFxyXG5cclxuXHJcbi5jb21wb25lbnR7XHJcbiAgICB3aWR0aDogMTA4MXB4O1xyXG4gICAgaGVpZ2h0OiA2OTZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxufVxyXG4udGl0dWxve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtaW4td2lkdGg6IDQwNXB4O1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MzdweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDM4cHg7XHJcbiAgICB0b3A6IDI1M3B4OyAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9sb2dpbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogMjQ1cHg7XG4gIG1heC1oZWlnaHQ6IDE0NXB4O1xuICBtaW4td2lkdGg6IDI0NXB4O1xuICBtaW4taGVpZ2h0OiAxNDVweDtcbiAgbGVmdDogNTQ5cHg7XG4gIHJpZ2h0OiA1NTBweDtcbiAgdG9wOiA3NnB4O1xufVxuXG4uY29tcG9uZW50IHtcbiAgd2lkdGg6IDEwODFweDtcbiAgaGVpZ2h0OiA2OTZweDtcbiAgbWFyZ2luLXRvcDogMjAycHg7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi50aXR1bG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNDA1cHg7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIG1pbi13aWR0aDogNDA1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0MzdweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MzhweDtcbiAgdG9wOiAyNTNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/recuperacion/recuperacion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/recuperacion/recuperacion.page.ts ***!
  \*********************************************************/
/*! exports provided: RecuperacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperacionPage", function() { return RecuperacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecuperacionPage = class RecuperacionPage {
    constructor() { }
    ngOnInit() {
    }
};
RecuperacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recuperacion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recuperacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recuperacion/recuperacion.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recuperacion.page.scss */ "./src/app/pages/recuperacion/recuperacion.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RecuperacionPage);



/***/ })

}]);
//# sourceMappingURL=pages-recuperacion-recuperacion-module-es2015.js.map