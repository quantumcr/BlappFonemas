function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fonema-fonema-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonema/fonema.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonema/fonema.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFonemaFonemaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-phoneme-view [phoneme]=\"phonemeVocal\"></app-phoneme-view>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/fonema/fonema-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/fonema/fonema-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: FonemaPageRoutingModule */

  /***/
  function srcAppPagesFonemaFonemaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FonemaPageRoutingModule", function () {
      return FonemaPageRoutingModule;
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


    var _fonema_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fonema.page */
    "./src/app/pages/fonema/fonema.page.ts");

    var routes = [{
      path: '',
      component: _fonema_page__WEBPACK_IMPORTED_MODULE_3__["FonemaPage"]
    }];

    var FonemaPageRoutingModule = function FonemaPageRoutingModule() {
      _classCallCheck(this, FonemaPageRoutingModule);
    };

    FonemaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FonemaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fonema/fonema.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/fonema/fonema.module.ts ***!
    \***********************************************/

  /*! exports provided: FonemaPageModule */

  /***/
  function srcAppPagesFonemaFonemaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FonemaPageModule", function () {
      return FonemaPageModule;
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


    var _fonema_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fonema-routing.module */
    "./src/app/pages/fonema/fonema-routing.module.ts");
    /* harmony import */


    var _fonema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fonema.page */
    "./src/app/pages/fonema/fonema.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var FonemaPageModule = function FonemaPageModule() {
      _classCallCheck(this, FonemaPageModule);
    };

    FonemaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fonema_routing_module__WEBPACK_IMPORTED_MODULE_5__["FonemaPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_fonema_page__WEBPACK_IMPORTED_MODULE_6__["FonemaPage"]]
    })], FonemaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fonema/fonema.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/fonema/fonema.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFonemaFonemaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 100%;\n  height: 100%;\n  background: url('vocalConsonat.svg');\n  background-size: 100%;\n}\n\n.component {\n  width: 1142px;\n  height: 624px;\n  margin-left: 70px;\n  margin-right: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9uZW1hL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxwYWdlc1xcZm9uZW1hXFxmb25lbWEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb25lbWEvZm9uZW1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb25lbWEvZm9uZW1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL3ZvY2FsQ29uc29uYXQuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuLmNvbXBvbmVudHtcclxuICAgIHdpZHRoOiAxMTQycHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjhweDtcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvdm9jYWxDb25zb25hdC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuLmNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/fonema/fonema.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/fonema/fonema.page.ts ***!
    \*********************************************/

  /*! exports provided: FonemaPage */

  /***/
  function srcAppPagesFonemaFonemaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FonemaPage", function () {
      return FonemaPage;
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

    var FonemaPage =
    /*#__PURE__*/
    function () {
      //public valueFonema = null;
      //public mensajeFonema: string;
      function FonemaPage(activatedRoute) {
        _classCallCheck(this, FonemaPage);

        this.activatedRoute = activatedRoute;
      }

      _createClass(FonemaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.phonemeVocal = JSON.parse(params['phoneme']);
          }); //this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
          //console.log(this.valueFonema);
        }
      }]);

      return FonemaPage;
    }();

    FonemaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    FonemaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fonema',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fonema.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fonema/fonema.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fonema.page.scss */
      "./src/app/pages/fonema/fonema.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], FonemaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-fonema-fonema-module-es5.js.map