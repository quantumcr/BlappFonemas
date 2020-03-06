function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"assets/img/logo/logoBlapp.png\" class=\"logo\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"titulo\">INICIAR SESIÓN</ion-label>\r\n      </ion-col>\r\n    </ion-row>   \r\n    <ion-row class=\"loginComponent\">\r\n      <ion-col>\r\n        <app-login usuario=\"Usuario\" clave=\"Contraseña\" comando=\"Aceptar\"></app-login>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: InicioPageRoutingModule */

  /***/
  function srcAppPagesInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
      return InicioPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");

    var routes = [{
      path: '',
      component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }];

    var InicioPageRoutingModule = function InicioPageRoutingModule() {
      _classCallCheck(this, InicioPageRoutingModule);
    };

    InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.module.ts ***!
    \***********************************************/

  /*! exports provided: InicioPageModule */

  /***/
  function srcAppPagesInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/pages/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 100%;\n  height: 100%;\n  background: url('fondo.svg');\n}\n\n.logo {\n  position: absolute;\n  max-width: 181px;\n  max-height: 147px;\n  min-width: 181px;\n  min-height: 147px;\n  left: 549px;\n  right: 550px;\n  top: 76px;\n}\n\n.loginComponent {\n  top: 20px;\n  left: 360px;\n  right: 366px;\n}\n\n.titulo {\n  position: absolute;\n  max-width: 229px;\n  max-height: 45px;\n  min-width: 229px;\n  min-height: 45px;\n  margin-left: 526px;\n  margin-right: 525px;\n  top: 253px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 45px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxwYWdlc1xcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNEUjs7QURLSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFFQSxjQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb25kby5zdmcnKTtcclxuICAgIH0gICAgICBcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxODFweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNDdweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE4MXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE0N3B4O1xyXG4gICAgICAgIGxlZnQ6IDU0OXB4O1xyXG4gICAgICAgIHJpZ2h0OiA1NTBweDtcclxuICAgICAgICB0b3A6IDc2cHg7ICAgXHJcbiAgICB9ICAgIFxyXG4gICBcclxuXHJcbiAgICAubG9naW5Db21wb25lbnR7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDM2MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAzNjZweDtcclxuICAgIH1cclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1heC13aWR0aDogMjI5cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDIyOXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUyNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNTI1cHg7XHJcbiAgICAgICAgdG9wOiAyNTNweDsgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICBcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAiLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb25kby5zdmdcIik7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDE4MXB4O1xuICBtYXgtaGVpZ2h0OiAxNDdweDtcbiAgbWluLXdpZHRoOiAxODFweDtcbiAgbWluLWhlaWdodDogMTQ3cHg7XG4gIGxlZnQ6IDU0OXB4O1xuICByaWdodDogNTUwcHg7XG4gIHRvcDogNzZweDtcbn1cblxuLmxvZ2luQ29tcG9uZW50IHtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAzNjBweDtcbiAgcmlnaHQ6IDM2NnB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDIyOXB4O1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBtaW4td2lkdGg6IDIyOXB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogNTI2cHg7XG4gIG1hcmdpbi1yaWdodDogNTI1cHg7XG4gIHRvcDogMjUzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzVGNjU5Qztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/inicio/inicio.page.ts ***!
    \*********************************************/

  /*! exports provided: InicioPage */

  /***/
  function srcAppPagesInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InicioPage =
    /*#__PURE__*/
    function () {
      function InicioPage() {
        _classCallCheck(this, InicioPage);
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InicioPage;
    }();

    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/pages/inicio/inicio.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map