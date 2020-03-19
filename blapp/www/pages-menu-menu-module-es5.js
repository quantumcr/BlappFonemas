function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"component\">\r\n      <ion-col>\r\n        <app-menu-panel [tipo]=\"tipoUsuario\"></app-menu-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/menu/menu-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/menu/menu-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppPagesMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
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


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/pages/menu/menu.page.ts");

    var routes = [{
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }];

    var MenuPageRoutingModule = function MenuPageRoutingModule() {
      _classCallCheck(this, MenuPageRoutingModule);
    };

    MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/menu/menu.module.ts ***!
    \*******************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppPagesMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
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


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/pages/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/pages/menu/menu.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/menu/menu.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 800px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background-image: url('menu.svg');\n  }\n\n  .component {\n    width: 715px;\n    height: 664px;\n    margin-left: 42px;\n    margin-top: 43px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 100%;\n    height: 100%;\n    background-image: url('menu.svg');\n  }\n\n  .component {\n    width: 1144px;\n    height: 664px;\n    margin-left: 68px;\n    margin-top: 68px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxccGFnZXNcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlDQUFBO0VDRE47O0VER0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNBTjtBQUNGO0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUNBQUE7RUNBTjs7RURFRTtJQUNJLGFBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzIwcHgpe31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9tZW51LnN2ZycpO1xyXG4gICAgfSAgXHJcbiAgICAuY29tcG9uZW50e1xyXG4gICAgICAgIHdpZHRoOiA3MTVweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQzcHg7ICAgIFxyXG4gICAgfSAgICAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9tZW51LnN2ZycpO1xyXG4gICAgfVxyXG4gICAgLmNvbXBvbmVudHtcclxuICAgICAgICB3aWR0aDogMTE0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNjY0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjhweDsgICAgXHJcbiAgICB9ICAgIFxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvYmFja2dyb3VuZC9tZW51LnN2Z1wiKTtcbiAgfVxuXG4gIC5jb21wb25lbnQge1xuICAgIHdpZHRoOiA3MTVweDtcbiAgICBoZWlnaHQ6IDY2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgIG1hcmdpbi10b3A6IDQzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kL21lbnUuc3ZnXCIpO1xuICB9XG5cbiAgLmNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDExNDRweDtcbiAgICBoZWlnaHQ6IDY2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xuICAgIG1hcmdpbi10b3A6IDY4cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/menu/menu.page.ts ***!
    \*****************************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppPagesMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
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

    var MenuPage =
    /*#__PURE__*/
    function () {
      function MenuPage(activatedRoute) {
        _classCallCheck(this, MenuPage);

        this.activatedRoute = activatedRoute;
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.tipoUsuario = JSON.parse(params['tipo']);
          });
        }
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/pages/menu/menu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map