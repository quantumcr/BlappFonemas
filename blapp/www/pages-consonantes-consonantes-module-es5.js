function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consonantes-consonantes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consonantes/consonantes.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consonantes/consonantes.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConsonantesConsonantesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-phoneme-consonant-view [phoneme]=\"phonemeConsonant\"></app-phoneme-consonant-view>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/consonantes/consonantes-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/consonantes/consonantes-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ConsonantesPageRoutingModule */

  /***/
  function srcAppPagesConsonantesConsonantesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantesPageRoutingModule", function () {
      return ConsonantesPageRoutingModule;
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


    var _consonantes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./consonantes.page */
    "./src/app/pages/consonantes/consonantes.page.ts");

    var routes = [{
      path: '',
      component: _consonantes_page__WEBPACK_IMPORTED_MODULE_3__["ConsonantesPage"]
    }];

    var ConsonantesPageRoutingModule = function ConsonantesPageRoutingModule() {
      _classCallCheck(this, ConsonantesPageRoutingModule);
    };

    ConsonantesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConsonantesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/consonantes/consonantes.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/consonantes/consonantes.module.ts ***!
    \*********************************************************/

  /*! exports provided: ConsonantesPageModule */

  /***/
  function srcAppPagesConsonantesConsonantesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantesPageModule", function () {
      return ConsonantesPageModule;
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


    var _consonantes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./consonantes-routing.module */
    "./src/app/pages/consonantes/consonantes-routing.module.ts");
    /* harmony import */


    var _consonantes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consonantes.page */
    "./src/app/pages/consonantes/consonantes.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var ConsonantesPageModule = function ConsonantesPageModule() {
      _classCallCheck(this, ConsonantesPageModule);
    };

    ConsonantesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consonantes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsonantesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_consonantes_page__WEBPACK_IMPORTED_MODULE_6__["ConsonantesPage"]]
    })], ConsonantesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/consonantes/consonantes.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/consonantes/consonantes.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConsonantesConsonantesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 100%;\n  height: 100%;\n  background: url('vocalConsonat.svg');\n  background-size: 100%;\n}\n\n.component {\n  width: 1142px;\n  height: 624px;\n  margin-left: 70px;\n  margin-right: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc29uYW50ZXMvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxjb25zb25hbnRlc1xcY29uc29uYW50ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25zb25hbnRlcy9jb25zb25hbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uc29uYW50ZXMvY29uc29uYW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvdm9jYWxDb25zb25hdC5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG4uY29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC92b2NhbENvbnNvbmF0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4uY29tcG9uZW50IHtcbiAgd2lkdGg6IDExNDJweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogNjhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/consonantes/consonantes.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/consonantes/consonantes.page.ts ***!
    \*******************************************************/

  /*! exports provided: ConsonantesPage */

  /***/
  function srcAppPagesConsonantesConsonantesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantesPage", function () {
      return ConsonantesPage;
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

    var ConsonantesPage =
    /*#__PURE__*/
    function () {
      //public valueFonema = null;
      //public mensajeFonema: string;
      function ConsonantesPage(activatedRoute) {
        _classCallCheck(this, ConsonantesPage);

        this.activatedRoute = activatedRoute;
      }

      _createClass(ConsonantesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.phonemeConsonant = JSON.parse(params['phoneme']);
          }); //this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
          //console.log(this.valueFonema);
        }
      }]);

      return ConsonantesPage;
    }();

    ConsonantesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ConsonantesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consonantes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consonantes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consonantes/consonantes.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consonantes.page.scss */
      "./src/app/pages/consonantes/consonantes.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ConsonantesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-consonantes-consonantes-module-es5.js.map