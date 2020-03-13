function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-docentes-docentes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/docentes/docentes.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/docentes/docentes.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDocentesDocentesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-professor></app-professor>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/docentes/docentes-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/docentes/docentes-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: DocentesPageRoutingModule */

  /***/
  function srcAppPagesDocentesDocentesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocentesPageRoutingModule", function () {
      return DocentesPageRoutingModule;
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


    var _docentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./docentes.page */
    "./src/app/pages/docentes/docentes.page.ts");

    var routes = [{
      path: '',
      component: _docentes_page__WEBPACK_IMPORTED_MODULE_3__["DocentesPage"]
    }];

    var DocentesPageRoutingModule = function DocentesPageRoutingModule() {
      _classCallCheck(this, DocentesPageRoutingModule);
    };

    DocentesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DocentesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/docentes/docentes.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/docentes/docentes.module.ts ***!
    \***************************************************/

  /*! exports provided: DocentesPageModule */

  /***/
  function srcAppPagesDocentesDocentesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocentesPageModule", function () {
      return DocentesPageModule;
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


    var _docentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./docentes-routing.module */
    "./src/app/pages/docentes/docentes-routing.module.ts");
    /* harmony import */


    var _docentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./docentes.page */
    "./src/app/pages/docentes/docentes.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var DocentesPageModule = function DocentesPageModule() {
      _classCallCheck(this, DocentesPageModule);
    };

    DocentesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _docentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocentesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_docentes_page__WEBPACK_IMPORTED_MODULE_6__["DocentesPage"]]
    })], DocentesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/docentes/docentes.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/docentes/docentes.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDocentesDocentesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 100%;\n  height: 100%;\n  background: url('fondo.svg');\n}\n\n.component {\n  width: 1081px;\n  height: 696px;\n  margin-top: 52px;\n  margin-left: 47px;\n  margin-right: 127px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jZW50ZXMvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxkb2NlbnRlc1xcZG9jZW50ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kb2NlbnRlcy9kb2NlbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jZW50ZXMvZG9jZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2ZvbmRvLnN2ZycpO1xyXG59XHJcbi5jb21wb25lbnR7XHJcbiAgICB3aWR0aDogMTA4MXB4O1xyXG4gICAgaGVpZ2h0OiA2OTZweDtcclxuICAgIG1hcmdpbi10b3A6IDUycHg7XHJcbiAgICBtYXJnaW4tbGVmdDo0N3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMjdweDtcclxufVxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb25kby5zdmdcIik7XG59XG5cbi5jb21wb25lbnQge1xuICB3aWR0aDogMTA4MXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xuICBtYXJnaW4tdG9wOiA1MnB4O1xuICBtYXJnaW4tbGVmdDogNDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMjdweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/docentes/docentes.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/docentes/docentes.page.ts ***!
    \*************************************************/

  /*! exports provided: DocentesPage */

  /***/
  function srcAppPagesDocentesDocentesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocentesPage", function () {
      return DocentesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocentesPage =
    /*#__PURE__*/
    function () {
      function DocentesPage() {
        _classCallCheck(this, DocentesPage);
      }

      _createClass(DocentesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocentesPage;
    }();

    DocentesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-docentes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./docentes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/docentes/docentes.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./docentes.page.scss */
      "./src/app/pages/docentes/docentes.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DocentesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-docentes-docentes-module-es5.js.map