function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-estudiantes-estudiantes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/estudiantes/estudiantes.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/estudiantes/estudiantes.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEstudiantesEstudiantesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col >\r\n        <app-student-info [_idStudent]=\"_idStudent\"></app-student-info>\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/estudiantes/estudiantes-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/estudiantes/estudiantes-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EstudiantesPageRoutingModule */

  /***/
  function srcAppPagesEstudiantesEstudiantesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudiantesPageRoutingModule", function () {
      return EstudiantesPageRoutingModule;
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


    var _estudiantes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./estudiantes.page */
    "./src/app/pages/estudiantes/estudiantes.page.ts");

    var routes = [{
      path: '',
      component: _estudiantes_page__WEBPACK_IMPORTED_MODULE_3__["EstudiantesPage"]
    }];

    var EstudiantesPageRoutingModule = function EstudiantesPageRoutingModule() {
      _classCallCheck(this, EstudiantesPageRoutingModule);
    };

    EstudiantesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EstudiantesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/estudiantes/estudiantes.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/estudiantes/estudiantes.module.ts ***!
    \*********************************************************/

  /*! exports provided: EstudiantesPageModule */

  /***/
  function srcAppPagesEstudiantesEstudiantesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudiantesPageModule", function () {
      return EstudiantesPageModule;
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


    var _estudiantes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./estudiantes-routing.module */
    "./src/app/pages/estudiantes/estudiantes-routing.module.ts");
    /* harmony import */


    var _estudiantes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./estudiantes.page */
    "./src/app/pages/estudiantes/estudiantes.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var EstudiantesPageModule = function EstudiantesPageModule() {
      _classCallCheck(this, EstudiantesPageModule);
    };

    EstudiantesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _estudiantes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstudiantesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_estudiantes_page__WEBPACK_IMPORTED_MODULE_6__["EstudiantesPage"]]
    })], EstudiantesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/estudiantes/estudiantes.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/estudiantes/estudiantes.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEstudiantesEstudiantesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 100%;\n  height: 100%;\n  background: url('students.svg');\n}\n\n.component {\n  width: 1151px;\n  height: 696px;\n  margin-top: 52px;\n  margin-left: 47px;\n  margin-right: 82px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXN0dWRpYW50ZXMvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxlc3R1ZGlhbnRlc1xcZXN0dWRpYW50ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lc3R1ZGlhbnRlcy9lc3R1ZGlhbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXN0dWRpYW50ZXMvZXN0dWRpYW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2JhY2tncm91bmQvc3R1ZGVudHMuc3ZnJyk7XHJcbn1cclxuLmNvbXBvbmVudHtcclxuICAgIHdpZHRoOiAxMTUxcHg7IFxyXG4gICAgaGVpZ2h0OiA2OTZweDtcclxuICAgIG1hcmdpbi10b3A6IDUycHg7XHJcbiAgICBtYXJnaW4tbGVmdDo0N3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MnB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9zdHVkZW50cy5zdmdcIik7XG59XG5cbi5jb21wb25lbnQge1xuICB3aWR0aDogMTE1MXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xuICBtYXJnaW4tdG9wOiA1MnB4O1xuICBtYXJnaW4tbGVmdDogNDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA4MnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/estudiantes/estudiantes.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/estudiantes/estudiantes.page.ts ***!
    \*******************************************************/

  /*! exports provided: EstudiantesPage */

  /***/
  function srcAppPagesEstudiantesEstudiantesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudiantesPage", function () {
      return EstudiantesPage;
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

    var EstudiantesPage =
    /*#__PURE__*/
    function () {
      function EstudiantesPage(activatedRoute) {
        var _this = this;

        _classCallCheck(this, EstudiantesPage);

        this.activatedRoute = activatedRoute;
        activatedRoute.queryParams.subscribe(function (params) {
          _this._idStudent = params["_id"];
        });
      }

      _createClass(EstudiantesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EstudiantesPage;
    }();

    EstudiantesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    EstudiantesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estudiantes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estudiantes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/estudiantes/estudiantes.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estudiantes.page.scss */
      "./src/app/pages/estudiantes/estudiantes.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], EstudiantesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-estudiantes-estudiantes-module-es5.js.map