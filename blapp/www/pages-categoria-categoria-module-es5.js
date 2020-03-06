function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categoria-categoria-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriaCategoriaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/categoria/categoria-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CategoriaPageRoutingModule */

  /***/
  function srcAppPagesCategoriaCategoriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaPageRoutingModule", function () {
      return CategoriaPageRoutingModule;
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


    var _categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categoria.page */
    "./src/app/pages/categoria/categoria.page.ts");

    var routes = [{
      path: '',
      component: _categoria_page__WEBPACK_IMPORTED_MODULE_3__["CategoriaPage"]
    }];

    var CategoriaPageRoutingModule = function CategoriaPageRoutingModule() {
      _classCallCheck(this, CategoriaPageRoutingModule);
    };

    CategoriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categoria/categoria.module.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriaPageModule */

  /***/
  function srcAppPagesCategoriaCategoriaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaPageModule", function () {
      return CategoriaPageModule;
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


    var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categoria-routing.module */
    "./src/app/pages/categoria/categoria-routing.module.ts");
    /* harmony import */


    var _categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categoria.page */
    "./src/app/pages/categoria/categoria.page.ts");

    var CategoriaPageModule = function CategoriaPageModule() {
      _classCallCheck(this, CategoriaPageModule);
    };

    CategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriaPageRoutingModule"]],
      declarations: [_categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]]
    })], CategoriaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categoria/categoria.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriaCategoriaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYS9jYXRlZ29yaWEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/categoria/categoria.page.ts ***!
    \***************************************************/

  /*! exports provided: CategoriaPage */

  /***/
  function srcAppPagesCategoriaCategoriaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaPage", function () {
      return CategoriaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriaPage =
    /*#__PURE__*/
    function () {
      function CategoriaPage() {
        _classCallCheck(this, CategoriaPage);
      }

      _createClass(CategoriaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriaPage;
    }();

    CategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categoria',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categoria.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categoria.page.scss */
      "./src/app/pages/categoria/categoria.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-categoria-categoria-module-es5.js.map