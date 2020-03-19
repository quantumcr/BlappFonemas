(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"assets/img/logo/logoBlapp.png\" class=\"logo\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"titulo\">INICIAR SESIÓN</ion-label>\r\n      </ion-col>\r\n    </ion-row>   \r\n    <ion-row class=\"loginComponent\">\r\n      <ion-col>\r\n        <app-login usuario=\"Usuario\" clave=\"Contraseña\" comando=\"Aceptar\"></app-login>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let InicioPageModule = class InicioPageModule {
};
InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 100%;\n  height: 100%;\n  background: url('login.svg');\n  background-size: 100%;\n}\n\n.logo {\n  position: absolute;\n  max-width: 181px;\n  max-height: 147px;\n  min-width: 181px;\n  min-height: 147px;\n  left: 549px;\n  right: 550px;\n  top: 76px;\n}\n\n.loginComponent {\n  top: 20px;\n  left: 360px;\n  right: 366px;\n}\n\n.titulo {\n  position: absolute;\n  max-width: 229px;\n  max-height: 45px;\n  min-width: 229px;\n  min-height: 45px;\n  margin-left: 526px;\n  margin-right: 525px;\n  top: 253px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 45px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxwYWdlc1xcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0RSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0RSOztBREtJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRlI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvbG9naW4uc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgfSAgICAgIFxyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4MXB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE0N3B4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTgxcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTQ3cHg7XHJcbiAgICAgICAgbGVmdDogNTQ5cHg7XHJcbiAgICAgICAgcmlnaHQ6IDU1MHB4O1xyXG4gICAgICAgIHRvcDogNzZweDsgICBcclxuICAgIH0gICAgXHJcbiAgIFxyXG5cclxuICAgIC5sb2dpbkNvbXBvbmVudHtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogMzYwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDM2NnB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMjlweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjI5cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTI2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MjVweDtcclxuICAgICAgICB0b3A6IDI1M3B4OyAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvbG9naW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDE4MXB4O1xuICBtYXgtaGVpZ2h0OiAxNDdweDtcbiAgbWluLXdpZHRoOiAxODFweDtcbiAgbWluLWhlaWdodDogMTQ3cHg7XG4gIGxlZnQ6IDU0OXB4O1xuICByaWdodDogNTUwcHg7XG4gIHRvcDogNzZweDtcbn1cblxuLmxvZ2luQ29tcG9uZW50IHtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAzNjBweDtcbiAgcmlnaHQ6IDM2NnB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDIyOXB4O1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBtaW4td2lkdGg6IDIyOXB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogNTI2cHg7XG4gIG1hcmdpbi1yaWdodDogNTI1cHg7XG4gIHRvcDogMjUzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzVGNjU5Qztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InicioPage = class InicioPage {
    constructor() { }
    ngOnInit() {
    }
};
InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module-es2015.js.map