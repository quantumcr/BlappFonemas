function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-categoria-categoria-module~pages-consonantes-consonantes-module~pages-docentes-docente~625ffebc"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategoriesViewCategoriesBarCategoriesBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src={{imagen}} class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n      \r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          \r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-navigation/categories-navigation.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-navigation/categories-navigation.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategoriesViewCategoriesNavigationCategoriesNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment-button value='back' class=\"btnBack\" (click)='back($event)'>\r\n          <ion-icon class=\"backIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-segment-button value=\"home\" class=\"btnHome\" (click)=\"goToHome($event)\">\r\n          <ion-icon class=\"homeIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      \r\n      <ion-col >\r\n        <ion-segment-button value='forward' class=\"btnForward\" (click)=\"forward($event)\">\r\n          <ion-icon class=\"forwardIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategoriesViewCategoriesViewPanelCategoriesViewPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"imagenes\">\r\n      <ion-col>\r\n        <div class=\"sujeto\">\r\n          <div>\r\n            <ion-img src={{imagenSujeto}}></ion-img>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"verbo\">\r\n          <div>\r\n            <ion-img src={{imagenVerbo}}></ion-img>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"predicado\">\r\n          <div>\r\n            <ion-img src={{imagenPredicado}}></ion-img>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-img src=\"assets/svg/semantics/categories-view/trayectoria.svg\" class=\"trayectoria\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">{{sujeto}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">{{verbo}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">{{predicado}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategoriesViewCategoriesViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"bar\">\r\n            <app-categories-bar [titulo]=\"valueCategoriaView\"   (barEvent)=\"selectPanel($event)\" ></app-categories-bar>\r\n          </ion-col>\r\n          <ion-col class=\"panel\">\r\n            <app-categories-view-panel [subcategoria]=\"valueSubCategoriaView\" ></app-categories-view-panel>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"navigation\">\r\n          <ion-col>\r\n            <app-categories-navigation></app-categories-navigation>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid justify-content-center>\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-label class=\"tituloUsuario\">{{usuario}}</ion-label>\r\n        <ion-input class=\"usuario\" (ionInput)=\"setEmail($event)\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row justify-content-center>\r\n      <ion-col >\r\n        <ion-label class=\"tituloClave\">{{clave}}</ion-label>\r\n        <ion-input class=\"clave\" type=\"password\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row justify-content-center>\r\n      <ion-col>\r\n        <ion-button color=\"blappButton\" class=\"btnLogin\" (click)=\"login()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuPanelMenuPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--\r\n        <app-students-menu  titulo=\"Estudiante\" opcion1=\"fonemas\" opcion2=\"categorías semánticas\"></app-students-menu>\r\n        -->\r\n        <app-professor-menu  titulo=\"¡Buenos días, Profe!\" opcion1=\"Fonemas\" opcion2=\"Categorías semánticas\" opcion3=\"estudiantes\"></app-professor-menu>\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuPanelProfessorMenuProfessorMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" class=\"icon\" (click)=\"logout()\">\r\n            <ion-img src=\"assets/icon/logout.svg\"></ion-img>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"titulo\">\r\n        <ion-col>\r\n          <ion-label class=\"texto\">{{titulo}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"opciones\">\r\n        <ion-segment (ionChange)=\"selectTheme($event)\">\r\n          <div> \r\n            <ion-segment-button value=\"fonemas\" class=\"opcionFonema\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion1}}</ion-label>\r\n          \r\n          </div>\r\n  \r\n          <div>\r\n            <ion-segment-button value=\"semanticas\" class=\"opcionSemantica\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion2}}</ion-label>\r\n          </div> \r\n\r\n          <div>\r\n            <ion-segment-button value=\"docentes\" class=\"opcionEstudiantes\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion3}}</ion-label>\r\n          </div>           \r\n        </ion-segment>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuPanelStudentsMenuStudentsMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button fill=\"clear\" class=\"icon\" (click)=\"logout()\">\r\n          <ion-img src=\"assets/icon/logout.svg\"></ion-img>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"titulo\">\r\n      <ion-col>\r\n        <ion-label class=\"texto\">¡Hola {{authenticationService.getUserDetails().nombre}}!<br>¿Qué aprenderemos hoy?</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"opciones\">\r\n      <ion-segment (ionChange)=\"selectTheme($event)\">\r\n        <div>\r\n          <ion-segment-button value=\"fonemas\" class=\"opcionFonema\">\r\n          </ion-segment-button>\r\n          <ion-label class=\"textoOpcion\">{{opcion1}}</ion-label>\r\n        </div>\r\n\r\n        <div class=\"divSemantica\">\r\n          <ion-segment-button value=\"semanticas\" class=\"opcionSemantica\">\r\n          </ion-segment-button>\r\n          <ion-label class=\"textoOpcion\">{{opcion2}}</ion-label>\r\n        </div> \r\n      </ion-segment>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment-button value='back' class=\"btnBack\" (click)='goTo($event)'>\r\n          <ion-icon class=\"backIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-segment-button value=\"home\" class=\"btnHome\" (click)=\"goToHome($event)\">\r\n          <ion-icon class=\"homeIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      \r\n      <ion-col >\r\n        <ion-segment-button value='forward' class=\"btnForward\" (click)=\"goTo($event)\">\r\n          <ion-icon class=\"forwardIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeConsonantViewConsonantBarConsonantBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">FONEMA</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"fonema\">/ {{fonema}} /</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"videoFonema\">\r\n      <div>\r\n        <div >\r\n          <ion-img src={{imagen}} class=\"imagen\"></ion-img>\r\n        </div>\r\n        <div style=\"position: absolute; left: 37px; top: 421px;\">\r\n          <ion-segment-button *ngIf=\"visibleVideo\"  value=\"video\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon  src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button *ngIf=\"visibleAudio\"  value=\"phoneme\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon src=\"assets/icon/audio.svg\"></ion-icon>\r\n          </ion-segment-button>          \r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"mensaje\">{{mensaje}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeConsonantViewConsonantNavigationConsonantNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  consonant-navigation works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeConsonantViewConsonantPhonemePanelConsonantPhonemePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"rowSilaba\">\r\n        <ion-col>\r\n          <ion-segment-button value='0' fill=\"round\" class=\"silaba\" (click)=\"playAudioS($event)\">{{silaba1}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button value= '1' fill=\"round\"  class=\"silaba\" (click)=\"playAudioS($event)\">{{silaba2}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button value='2' fill=\"round\"  class=\"silaba\" (click)=\"playAudioS($event)\">{{silaba3}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button value='3' fill=\"round\"  class=\"silaba\" (click)=\"playAudioS($event)\">{{silaba4}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button value='4' fill=\"round\"  class=\"silaba\" (click)=\"playAudioS($event)\">{{silaba5}}</ion-segment-button>\r\n        </ion-col> \r\n    </ion-row>\r\n    <ion-row class=\"audioFonema\">\r\n      <div>\r\n        <div>\r\n          <ion-img src={{imagen}}  class=\"imagen\"></ion-img>\r\n        </div>\r\n\r\n        <div style=\"position: absolute; left: 227px; top: 346px;\">\r\n          <ion-segment-button value=\"audio\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n        </div>\r\n      </div>    \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"palabra\">{{palabra}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeConsonantViewConsonantPhonemeVideoPanelConsonantPhonemeVideoPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"row\">\r\n      <video fullscreen=\"fullscreen\" src={{video}} autoplay=\"true\"></video>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeConsonantViewPhonemeConsonantViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-consonant-bar [fonema]=\"valueFonemaView\" [imagen]=\"videoData.imagen\" [mensaje]=\"videoData.mensaje\"  (barEvent)=\"selectPanel($event)\" ></app-consonant-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-consonant-phoneme-panel [fonema]=\"valueFonemaView\" *ngIf=\"visiblePhoneme\" [comando]=\"comandoFonema\"></app-consonant-phoneme-panel>\r\n        <app-consonant-phoneme-video-panel [video]=\"videoData.video\" *ngIf=\"visibleVideo\"></app-consonant-phoneme-video-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeViewBarBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">FONEMA</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"fonema\">/ {{fonema}} /</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"videoFonema\">\r\n      <div>\r\n        <div >\r\n          <ion-img src={{imagen}} class=\"imagen\"></ion-img>\r\n        </div>\r\n        <div style=\"position: absolute; left: 37px; top: 421px;\">\r\n          <ion-segment-button *ngIf=\"visibleVideo\"  value=\"video\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon  src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button *ngIf=\"visibleAudio\"  value=\"phoneme\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon src=\"assets/icon/audio.svg\"></ion-icon>\r\n          </ion-segment-button>          \r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"mensaje\">{{mensaje}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeViewPhonemeNavPhonemeNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment-button value='back' class=\"btnBack\" (click)='back($event)'>\r\n          <ion-icon class=\"backIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-segment-button value=\"home\" class=\"btnHome\" (click)=\"goToHome($event)\">\r\n          <ion-icon class=\"homeIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      \r\n      <ion-col >\r\n        <ion-segment-button value='forward' class=\"btnForward\" (click)=\"forward($event)\">\r\n          <ion-icon class=\"forwardIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeViewPhonemePanelPhonemePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"audioFonema\">   \r\n      <div>\r\n        <div>\r\n          <ion-img src={{imagen}}  class=\"imagen\"></ion-img>\r\n        </div>\r\n\r\n        <div style=\"position: absolute; left: 227px; top: 346px;\">\r\n          <ion-segment-button value=\"audio\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n        </div>\r\n      </div>    \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"palabra\">{{palabra}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeViewPhonemeViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-bar [fonema]=\"valueFonemaView\" [imagen]=\"videoData.imagen\" [mensaje]=\"videoData.mensaje\"  (barEvent)=\"selectPanel($event)\" ></app-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-phoneme-panel [fonema]=\"valueFonemaView\" *ngIf=\"visiblePhoneme\" [comando]=\"comandoFonema\"></app-phoneme-panel>\r\n        <app-video-panel [video]=\"videoData.video\" *ngIf=\"visibleVideo\"></app-video-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-phoneme-nav (navigationEvent)=\"ejecutarAccion($event)\"></app-phoneme-nav>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/video-panel/video-panel.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/video-panel/video-panel.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeViewVideoPanelVideoPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"row\">\r\n      <video fullscreen=\"fullscreen\" src={{video}} autoplay=\"true\"></video>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeConsonantPanelConsonantPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"p\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Pp</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"m\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Mm</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"b\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Bb</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>\r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"d\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Dd</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"t\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Tt</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"g\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Gg</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>  \r\n        \r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Cc Kk Qq\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Cc Kk Qq</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"f\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ff</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"ch\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ch ch</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row> \r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"j\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Jj</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"s\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ss</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"n\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Nn</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>   \r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"ñ\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ññ</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"l\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ll</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"LLll Yy\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">LLll Yy</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>\r\n        \r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"r\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Rr</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"rr\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">RR rr</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"x\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Xx</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>        \r\n    </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemePhonemeBarPhonemeBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/fonemas/phoneme-bar/fonemas.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"vocales\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"consonantes\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n          <ion-segment-button value=\"jugar\" class=\"btnComando3\" (click)=\"openPanel($event)\">{{comando3}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemePhonemeGamePanelPhonemeGamePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid>\r\n        <ion-row class=\"rowSilaba\">\r\n            <ion-col>\r\n                <ion-segment-button fill=\"round\" class=\"silaba\">Ma</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button fill=\"round\" class=\"silaba\">Me</ion-segment-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row\">\r\n            <ion-col >\r\n                <div style=\"position: relative;\" cdkDrag>\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value=\"audio1\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"position: relative;\" cdkDrag>\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value=\"audio2\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>              \r\n            </ion-col>  \r\n            <ion-col>\r\n                <div style=\"position: relative;\" cdkDrag>\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value=\"audio3\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>             \r\n            </ion-col>                   \r\n        </ion-row>\r\n    </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemePhonemeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-phoneme-bar titulo=\"FONEMAS\" comando1=\"VOCALES\" comando2=\"CONSONANTES\" comando3=\"JUGAR\" (phonemeBarEvent)=\"selectPanel($event)\" ></app-phoneme-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-vocal-panel *ngIf=\"visibleVocal\"></app-vocal-panel>\r\n        <app-consonant-panel *ngIf=\"visibleConsonant\"></app-consonant-panel> \r\n        <app-phoneme-game-panel *ngIf=\"visibleGame\"></app-phoneme-game-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhonemeVocalPanelVocalPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n    <ion-row class=\"row\">\r\n      <ion-col>\r\n          <ion-segment-button value=\"a\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Aa</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"e\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ee</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"o\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Oo</ion-segment-button>\r\n      </ion-col>                        \r\n    </ion-row>\r\n    <ion-row class=\"rowDebiles\">\r\n      <ion-col>\r\n          <ion-segment-button value=\"i\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ii</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"u\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Uu</ion-segment-button>\r\n      </ion-col>\r\n                       \r\n    </ion-row>    \r\n\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/list/list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/list/list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-row class=\"row\" *ngFor=\"let names of nameStudents\">\r\n    <button class=\"btnEstudiante\" (click)=\"getStudent(names._id)\">{{names.nombre}}</button>\r\n  </ion-row>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/professor.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/professor.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorProfessorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-students-bar titulo=\"ESTUDIANTES\"  comando1=\"AGREGAR\" comando2=\"LISTA COMPLETA\" (studentsBarEvent)=\"selectPanel($event)\" ></app-students-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-register nombre=\"Nombre Completo\" edad=\"Edad\" genero=\"Género\" residencia=\"Lugar de Residencia\" encargado=\"Encargado Legal\" email=\"Email\" password=\"Contraseña\" comando=\"Guardar\" *ngIf=\"visibleRegister\"></app-register>\r\n        <app-list *ngIf=\"visibleList\"></app-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/register/register.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/register/register.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n      <form [formGroup]=\"studentForm\">\r\n        <ion-row style=\"margin-top: 48px;\">\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{nombre}}</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" formControlName=\"nombre\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.nombre\">\r\n            <div *ngIf=\"studentForm.get('nombre').hasError(validation.type) && (studentForm.get('nombre').dirty || studentForm.get('nombre').touched)\" class=\"alert alert-danger\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{edad}}</ion-label>\r\n            <ion-input class=\"input\" type=\"number\" formControlName=\"edad\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.edad\">\r\n            <div *ngIf=\"studentForm.get('edad').hasError(validation.type) && (studentForm.get('edad').dirty || studentForm.get('edad').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{genero}}</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" formControlName=\"sexo\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.sexo\">\r\n            <div *ngIf=\"studentForm.get('sexo').hasError(validation.type) && (studentForm.get('sexo').dirty || studentForm.get('sexo').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <div formGroupName=\"encargadoLegal\">\r\n          <ion-row >\r\n            <ion-col>\r\n              <ion-label class=\"label\">{{residencia}}</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" formControlName=\"direccion\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.encargado_direccion\">\r\n              <div *ngIf=\"studentForm.get('encargadoLegal.direccion').hasError(validation.type) && (studentForm.get('encargadoLegal.direccion').dirty || studentForm.get('encargadoLegal.direccion').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-row >\r\n            <ion-col>\r\n              <ion-label class=\"label\">{{encargado}}</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" formControlName=\"nombre\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.encargado_nombre\">\r\n              <div *ngIf=\"studentForm.get('encargadoLegal.nombre').hasError(validation.type) && (studentForm.get('encargadoLegal.nombre').dirty || studentForm.get('encargadoLegal.nombre').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"userForm\">\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{email}}</ion-label>\r\n            <ion-input class=\"input\" type=\"email\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n            <div *ngIf=\"userForm.get('email').hasError(validation.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{password}}</ion-label>\r\n            <ion-input class=\"input\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n            <div *ngIf=\"userForm.get('password').hasError(validation.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-button class=\"btnGuardar\" color=\"formButton\" shape=\"round\" [disabled]=\"(!userForm.valid  || !studentForm.valid)\" (click)=\"register()\">{{comando}}</ion-button>\r\n      </form>        \r\n    </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorStudentInfoFunctionBarFunctionBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/docentes/students-bar/estudiantes.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"editar\" class=\"btnComando1\" (click)=\"updateStudent()\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"eliminar\" class=\"btnComando2\" (click)=\"deleteStudent()\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorStudentInfoInfoPanelInfoPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row class=\"info\">  \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-label class=\"titulo\" (click)=\"prueba()\">Información Personal</ion-label>\r\n          </ion-row>\r\n          <ion-row>\r\n\r\n              <div>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Nombre:</ion-label>\r\n                        <ion-input id=\"nombre\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.nombre\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Cédula:</ion-label>\r\n                        <ion-input id=\"cedula\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.cedula\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Género:</ion-label>\r\n                        <ion-input id=\"sexo\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.sexo\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Edad:</ion-label>\r\n                        <ion-input id=\"edad\" type=\"number\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.edad\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Email:</ion-label>\r\n                        <ion-input id=\"email\" type=\"email\" class=\"inputInfoPersonal\" [(ngModel)]=\"user.email\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Encargado:</ion-label>\r\n                        <ion-input id=\"encargado_nombre\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.nombre\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Profesión:</ion-label>\r\n                        <ion-input id=\"encargado_profesion\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.profesion\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Teléfono:</ion-label>\r\n                        <ion-input id=\"encargado_telefono\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.telefono\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Dirección:</ion-label>\r\n                        <ion-input id=\"encargado_direccion\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.direccion\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Password:</ion-label>\r\n                        <ion-input id=\"password\" type=\"password\" class=\"inputInfoPersonal\" [(ngModel)]=\"user.password\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            \r\n            <!--<app-personal-info [student]=\"student\" [user]=\"user\"></app-personal-info>-->\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"infoFamilia\">\r\n          <ion-label class=\"titulo\">Familia</ion-label>\r\n\r\n          <ion-list class=\"list\">\r\n            <ion-item lines=\"none\" *ngFor=\"let family_member of student.familia\">\r\n              <ion-col>\r\n                <ion-row>\r\n                  <ion-label>{{\"Nombre \" + family_member.relacion + \":\"}}</ion-label>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-input class=\"input\" [(ngModel)]=\"family_member.nombre\"></ion-input>\r\n                </ion-row>\r\n              </ion-col>      \r\n            </ion-item>\r\n          </ion-list>\r\n          \r\n          <!--<app-family-info [familia]=\"student.familia\"></app-family-info>-->\r\n        </ion-col>\r\n        <ion-col class=\"infoAlimentos\">\r\n          <ion-label class=\"titulo\">Alimentos</ion-label>\r\n            <ion-list class=\"list\">\r\n              <ion-item lines=\"none\" *ngFor=\"let alimento of student.alimentacion\" (click)=\"changeSelected(alimento)\">\r\n                <ion-label class=\"label\" color=\"black\">{{alimento.alimento}}</ion-label>\r\n                <ion-checkbox slot=\"start\" mode=\"ios\" color=\"success\" checked={{alimento.seleccionado}}></ion-checkbox>        \r\n              </ion-item>\r\n            </ion-list>\r\n          <!--<app-food-info [alimetacion]=\"student.alimentacion\"></app-food-info>-->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n            <ion-button color=\"success\" slot=\"start\">Actualizar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorStudentInfoStudentInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-function-bar titulo=\"ESTUDIANTES\" comando1=\"EDITAR INFORMACIÓN\" comando2=\"ELIMINAR ESTUDIANTE\" (deleteStudentEvent)=\"deleteStudent()\" (updateStudentEvent)=\"updateStudent()\"></app-function-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-info-panel [_idStudent]=\"_idStudent\" [boolEdit]=\"boolEdit\"></app-info-panel>     \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessorStudentsBarStudentsBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/docentes/students-bar/estudiantes.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"agregar\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"lista\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsCategoriesPanelCategoriesPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"imagen\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Imagen de<br>mi mismo</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"cuerpo\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Partes del<br>cuerpo</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"familia\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Familia</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row>\r\n\r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"alimentos\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Alimentos</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"animales\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Animales</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"juguetes\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Juguetes</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row>  \r\n      \r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"ropa\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Prendas de<br>vestir</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"casa\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Partes de<br>la casa</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"transporte\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Medios<br>transporte</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row> \r\n\r\n      <ion-row class=\"lastRow\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"\"  class=\"phonemeButton\" (click)=\"goToCategories($event)\">Servidores de<br>la comunidad</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Instrumentos<br>musicales</ion-segment-button>\r\n          </ion-col>                     \r\n      </ion-row>      \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-bar/semantics-bar.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-bar/semantics-bar.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsSemanticsBarSemanticsBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/semanticas/semantics-bar/semanticas.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n      <ion-label class=\"titulo2\">{{titulo2}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"categorias\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"jugar\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsSemanticsGamePanelSemanticsGamePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid class=\"grid\">  \r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"sujeto\">\r\n          <div>\r\n            \r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"verbo\">\r\n          <div>\r\n\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"predicado\">\r\n          <div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">sujeto</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">verbo</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">predicado</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"options\">\r\n      <ion-col>\r\n        <div class=\"element\" cdkDrop>\r\n          <div cdkDrag>\r\n            <ion-img src=\"assets/img/fonemas/game-panel/mama.png\"></ion-img>\r\n          </div>\r\n        </div>        \r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"element\" cdkDrop>\r\n          <div cdkDrag>\r\n            <ion-img src=\"assets/img/fonemas/game-panel/mama.png\"></ion-img>\r\n          </div>\r\n        </div>  \r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"element\" cdkDrop>\r\n          <div cdkDrag>\r\n            <ion-img src=\"assets/img/fonemas/game-panel/mama.png\"></ion-img>\r\n          </div>\r\n        </div>  \r\n      </ion-col>\r\n    </ion-row> \r\n\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsSemanticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-semantics-bar titulo=\"CATEGORÍAS\" titulo2=\"SEMÁNTICAS\" comando1=\"CATEGORÍAS\" comando2=\"JUGAR\" (semanticsBarEvent)=\"selectPanel($event)\" ></app-semantics-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-categories-panel *ngIf=\"visibleCategories\"></app-categories-panel>\r\n        <app-semantics-game-panel *ngIf=\"visibleGame\"></app-semantics-game-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>       \r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsSubcategoriesSubcategoriesBarSubcategoriesBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  subcategories-bar works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsSubcategoriesSubcategoriesPanelSubcategoriesPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  subcategories-panel works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSemanticsSubcategoriesSubcategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  subcategories works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-bar/categories-bar.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-bar/categories-bar.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategoriesViewCategoriesBarCategoriesBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #52D7C6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 44px;\n  right: 45px;\n  top: 43px;\n}\n\n.titulo {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 265px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.titulo2 {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 369px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 442px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 503px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy1iYXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXMtdmlld1xcY2F0ZWdvcmllcy1iYXJcXGNhdGVnb3JpZXMtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLWJhci9jYXRlZ29yaWVzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURBSTtFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFFQSxjQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy1iYXIvY2F0ZWdvcmllcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzMDJweDtcclxuICAgICAgICBoZWlnaHQ6IDYyM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1MkQ3QzY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDIxM3B4O1xyXG4gICAgICAgIGhlaWdodDogMjEzcHg7XHJcbiAgICAgICAgbGVmdDogNDRweDtcclxuICAgICAgICByaWdodDogNDVweDtcclxuICAgICAgICB0b3A6IDQzcHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMjY1cHg7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiAgICB9XHJcbiAgICAudGl0dWxvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMzY5cHg7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvMXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MDZweDsgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NjdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgICAgXHJcbiAgICB9XHJcbiAgICAuY29tYW5kbzN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTIwcHg7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgIFxyXG4gICAgfVxyXG4gICAgLmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgICAgICB0b3A6IDM5MnB4OyAgICAgXHJcbiAgICB9XHJcbiAgICAuYnRuQ29tYW5kbzF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNTlweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICByaWdodDogMjNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgICAgdG9wOiA0NDJweDsgIFxyXG5cclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICBcclxuICAgIH1cclxuICAgIC5idG5Db21hbmRvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0JDRkZGNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgICAgIHRvcDogNTAzcHg7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG4gICAgfSAgICAiLCIucHJpbmNpcGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAycHg7XG4gIGhlaWdodDogNjIzcHg7XG4gIGJhY2tncm91bmQ6ICM1MkQ3QzY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWFnZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMTNweDtcbiAgaGVpZ2h0OiAyMTNweDtcbiAgbGVmdDogNDRweDtcbiAgcmlnaHQ6IDQ1cHg7XG4gIHRvcDogNDNweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDIycHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDI2NXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdHVsbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjBweDtcbiAgdG9wOiAzNjlweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6ICNCQ0ZGRjc7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ0MnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MDNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-bar/categories-bar.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-bar/categories-bar.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CategoriesBarComponent */

  /***/
  function srcAppComponentsCategoriesViewCategoriesBarCategoriesBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesBarComponent", function () {
      return CategoriesBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesBarComponent =
    /*#__PURE__*/
    function () {
      function CategoriesBarComponent() {
        _classCallCheck(this, CategoriesBarComponent);

        this.semanticsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CategoriesBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {}
      }]);

      return CategoriesBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesBarComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesBarComponent.prototype, "imagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesBarComponent.prototype, "comando1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesBarComponent.prototype, "comando2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesBarComponent.prototype, "comando3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoriesBarComponent.prototype, "semanticsBarEvent", void 0);
    CategoriesBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories-bar.component.scss */
      "./src/app/components/categories-view/categories-bar/categories-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriesBarComponent);
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-navigation/categories-navigation.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-navigation/categories-navigation.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategoriesViewCategoriesNavigationCategoriesNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 1145px;\n  height: 57px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.btnBack {\n  width: 42px;\n  height: 42px;\n  margin-left: 30px;\n}\n\n.btnHome {\n  width: 42px;\n  height: 42px;\n  margin-left: 135px;\n}\n\n.btnForward {\n  width: 42px;\n  height: 42px;\n  margin-right: 32px;\n  margin-left: auto;\n}\n\n.backIcon {\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.homeIcon {\n  width: 42px;\n  height: 42px;\n  background: url('home.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.forwardIcon {\n  width: 42px;\n  height: 42px;\n  background: url('forward.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy1uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzLXZpZXdcXGNhdGVnb3JpZXMtbmF2aWdhdGlvblxcY2F0ZWdvcmllcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLW5hdmlnYXRpb24vY2F0ZWdvcmllcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLW5hdmlnYXRpb24vY2F0ZWdvcmllcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMTQ1cHg7XHJcbiAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDsgICAgXHJcbn1cclxuXHJcbi5idG5CYWNre1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uYnRuSG9tZXtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xyXG59XHJcbi5idG5Gb3J3YXJke1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uYmFja0ljb257XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vYmFjay5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5ob21lSWNvbntcclxuXHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5mb3J3YXJkSWNvbntcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9mb3J3YXJkLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNDVweDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYnRuQmFjayB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnRuSG9tZSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzVweDtcbn1cblxuLmJ0bkZvcndhcmQge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYmFja0ljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhvbWVJY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5mb3J3YXJkSWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-navigation/categories-navigation.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-navigation/categories-navigation.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: CategoriesNavigationComponent */

  /***/
  function srcAppComponentsCategoriesViewCategoriesNavigationCategoriesNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesNavigationComponent", function () {
      return CategoriesNavigationComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CategoriesNavigationComponent =
    /*#__PURE__*/
    function () {
      function CategoriesNavigationComponent(navCtrl) {
        _classCallCheck(this, CategoriesNavigationComponent);

        this.navCtrl = navCtrl;
        this.navigationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CategoriesNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToHome",
        value: function goToHome(event) {
          this.navCtrl.navigateForward('/menu');
        }
      }, {
        key: "forward",
        value: function forward(event) {}
      }, {
        key: "back",
        value: function back(event) {}
      }]);

      return CategoriesNavigationComponent;
    }();

    CategoriesNavigationComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoriesNavigationComponent.prototype, "navigationEvent", void 0);
    CategoriesNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-navigation/categories-navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories-navigation.component.scss */
      "./src/app/components/categories-view/categories-navigation/categories-navigation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CategoriesNavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategoriesViewCategoriesViewPanelCategoriesViewPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagenes {\n  margin-top: 95px;\n}\n\n.trayectoria {\n  margin-left: auto;\n  margin-right: auto;\n  width: 532px;\n  height: 97.18px;\n}\n\n.grid {\n  margin-top: 57px;\n  left: 56px;\n}\n\n.sujeto {\n  width: 230px;\n  height: 230px;\n  margin-left: auto;\n  background: url('black.svg');\n  background-size: auto;\n}\n\n.verbo {\n  width: 161px;\n  height: 161px;\n  margin-top: 34px;\n  margin-left: 42px;\n  margin-right: 43px;\n  background: url('red.svg');\n  background-size: auto;\n}\n\n.predicado {\n  width: 230px;\n  height: 230px;\n  margin-right: auto;\n  background: url('green.svg');\n  background-size: auto;\n}\n\n.element {\n  margin-left: auto;\n  margin-right: auto;\n  width: 176px;\n  height: 176px;\n  background: url('element.svg');\n  background-size: auto;\n}\n\n.options {\n  margin-top: 32px;\n}\n\n.palabras {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.semantica {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.imagen {\n  width: 161px;\n  height: 161px;\n}\n\n.example-box {\n  width: 161px;\n  height: 161px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 100px;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy12aWV3LXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzLXZpZXdcXGNhdGVnb3JpZXMtdmlldy1wYW5lbFxcY2F0ZWdvcmllcy12aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLXZpZXctcGFuZWwvY2F0ZWdvcmllcy12aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNTSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtEQUFBO0VBQUEsdURBQUE7RUFDQSwrR0FBQTtBQ1FKOztBREhFO0VBQ0UscUhBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy12aWV3L2NhdGVnb3JpZXMtdmlldy1wYW5lbC9jYXRlZ29yaWVzLXZpZXctcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG4uaW1hZ2VuZXN7XHJcbiAgICBtYXJnaW4tdG9wOiA5NXB4O1xyXG59XHJcbi50cmF5ZWN0b3JpYXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUzMnB4O1xyXG4gICAgaGVpZ2h0OiA5Ny4xOHB4O1xyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNTdweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbn1cclxuLnN1amV0b3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvYmxhY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbn1cclxuLnZlcmJve1xyXG4gICAgd2lkdGg6IDE2MXB4O1xyXG4gICAgaGVpZ2h0OiAxNjFweDtcclxuICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDNweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvcmVkLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ucHJlZGljYWRve1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87ICAgIFxyXG59XHJcbi5lbGVtZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ub3B0aW9uc3tcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLnBhbGFicmFze1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7IFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICMzQzNDM0M7ICAgIFxyXG59XHJcbi5zZW1hbnRpY2F7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWFnZW5lcyB7XG4gIG1hcmdpbi10b3A6IDk1cHg7XG59XG5cbi50cmF5ZWN0b3JpYSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MzJweDtcbiAgaGVpZ2h0OiA5Ny4xOHB4O1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDU3cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5zdWpldG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9ibGFjay5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbn1cblxuLnZlcmJvIHtcbiAgd2lkdGg6IDE2MXB4O1xuICBoZWlnaHQ6IDE2MXB4O1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA0M3B4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9yZWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5wcmVkaWNhZG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5lbGVtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuXG4ub3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWxhYnJhcyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzQzNDM0M7XG59XG5cbi5zZW1hbnRpY2Ege1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMTYxcHg7XG4gIGhlaWdodDogMTYxcHg7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAxNjFweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: CategoriesViewPanelComponent */

  /***/
  function srcAppComponentsCategoriesViewCategoriesViewPanelCategoriesViewPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesViewPanelComponent", function () {
      return CategoriesViewPanelComponent;
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


    var _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../data/categorias/data.subcategorias */
    "./src/data/categorias/data.subcategorias.ts");

    var CategoriesViewPanelComponent =
    /*#__PURE__*/
    function () {
      function CategoriesViewPanelComponent() {
        _classCallCheck(this, CategoriesViewPanelComponent);

        this.ejemplos = [];
      }

      _createClass(CategoriesViewPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEjemplos('Imagen de mí mismo');
          this.sujeto = this.ejemplos[0].sujeto;
          this.verbo = this.ejemplos[0].verbo;
          this.predicado = this.ejemplos[0].predicado;
          this.cantidadEjemplos = 0;
        }
      }, {
        key: "nuevoEjemplo",
        value: function nuevoEjemplo() {
          if (this.cantidadEjemplos > this.ejemplos.length) {
            this.cantidadEjemplos = 0;
          }

          this.sujeto = this.ejemplos[this.cantidadEjemplos].sujeto;
          this.verbo = this.ejemplos[this.cantidadEjemplos].verbo;
          this.predicado = this.ejemplos[this.cantidadEjemplos].predicado;
          this.imagenSujeto = this.ejemplos[this.cantidadEjemplos].imagenSujeto;
          this.imagenVerbo = this.ejemplos[this.cantidadEjemplos].imagenVerbo;
          this.imagenPredicado = this.ejemplos[this.cantidadEjemplos].imagenPredicado;
          this.cantidadEjemplos++;
        }
      }, {
        key: "ejemploAnterior",
        value: function ejemploAnterior() {
          this.cantidadEjemplos--;

          if (this.cantidadEjemplos < this.ejemplos.length) {
            this.cantidadEjemplos = 0;
          }

          this.sujeto = this.ejemplos[this.cantidadEjemplos].sujeto;
          this.verbo = this.ejemplos[this.cantidadEjemplos].verbo;
          this.predicado = this.ejemplos[this.cantidadEjemplos].predicado;
          this.imagenSujeto = this.ejemplos[this.cantidadEjemplos].imagenSujeto;
          this.imagenVerbo = this.ejemplos[this.cantidadEjemplos].imagenVerbo;
          this.imagenPredicado = this.ejemplos[this.cantidadEjemplos].imagenPredicado;
        }
      }, {
        key: "getEjemplos",
        value: function getEjemplos(value) {
          for (var i = 0; i < _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"].length; i++) {
            if (_data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"][i].nombre === value) {
              this.ejemplos = _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"][i].data;
              break;
            }
          }
        }
      }]);

      return CategoriesViewPanelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "subcategoria", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "sujeto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "verbo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "predicado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "imagenSujeto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "imagenVerbo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewPanelComponent.prototype, "imagenPredicado", void 0);
    CategoriesViewPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-view-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories-view-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories-view-panel.component.scss */
      "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriesViewPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-view.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-view.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategoriesViewCategoriesViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXMtdmlld1xcY2F0ZWdvcmllcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy12aWV3L2NhdGVnb3JpZXMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4ucGFuZWx7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4uYmFye1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgaGVpZ2h0OiA2MjNweDsgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/categories-view/categories-view.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/categories-view/categories-view.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CategoriesViewComponent */

  /***/
  function srcAppComponentsCategoriesViewCategoriesViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesViewComponent", function () {
      return CategoriesViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesViewComponent =
    /*#__PURE__*/
    function () {
      function CategoriesViewComponent() {
        _classCallCheck(this, CategoriesViewComponent);
      }

      _createClass(CategoriesViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectPanel",
        value: function selectPanel(event) {}
      }]);

      return CategoriesViewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewComponent.prototype, "valueSubCategoriaView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CategoriesViewComponent.prototype, "valueCategoriaView", void 0);
    CategoriesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories-view.component.scss */
      "./src/app/components/categories-view/categories-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriesViewComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu-panel/menu-panel.component */
    "./src/app/components/menu-panel/menu-panel.component.ts");
    /* harmony import */


    var _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu-panel/professor-menu/professor-menu.component */
    "./src/app/components/menu-panel/professor-menu/professor-menu.component.ts");
    /* harmony import */


    var _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./menu-panel/students-menu/students-menu.component */
    "./src/app/components/menu-panel/students-menu/students-menu.component.ts");
    /* harmony import */


    var _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./phoneme/phoneme.component */
    "./src/app/components/phoneme/phoneme.component.ts");
    /* harmony import */


    var _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./phoneme/phoneme-bar/phoneme-bar.component */
    "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts");
    /* harmony import */


    var _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./phoneme/vocal-panel/vocal-panel.component */
    "./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts");
    /* harmony import */


    var _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./phoneme/consonant-panel/consonant-panel.component */
    "./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts");
    /* harmony import */


    var _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./phoneme/phoneme-game-panel/phoneme-game-panel.component */
    "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts");
    /* harmony import */


    var _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./semantics/semantics.component */
    "./src/app/components/semantics/semantics.component.ts");
    /* harmony import */


    var _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./semantics/semantics-bar/semantics-bar.component */
    "./src/app/components/semantics/semantics-bar/semantics-bar.component.ts");
    /* harmony import */


    var _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./semantics/categories-panel/categories-panel.component */
    "./src/app/components/semantics/categories-panel/categories-panel.component.ts");
    /* harmony import */


    var _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./semantics/semantics-game-panel/semantics-game-panel.component */
    "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts");
    /* harmony import */


    var _professor_professor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./professor/professor.component */
    "./src/app/components/professor/professor.component.ts");
    /* harmony import */


    var _professor_list_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./professor/list/list.component */
    "./src/app/components/professor/list/list.component.ts");
    /* harmony import */


    var _professor_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./professor/register/register.component */
    "./src/app/components/professor/register/register.component.ts");
    /* harmony import */


    var _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./professor/student-info/student-info.component */
    "./src/app/components/professor/student-info/student-info.component.ts");
    /* harmony import */


    var _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./professor/students-bar/students-bar.component */
    "./src/app/components/professor/students-bar/students-bar.component.ts");
    /* harmony import */


    var _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./professor/student-info/function-bar/function-bar.component */
    "./src/app/components/professor/student-info/function-bar/function-bar.component.ts");
    /* harmony import */


    var _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./professor/student-info/info-panel/info-panel.component */
    "./src/app/components/professor/student-info/info-panel/info-panel.component.ts");
    /* harmony import */


    var _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./semantics/subcategories/subcategories.component */
    "./src/app/components/semantics/subcategories/subcategories.component.ts");
    /* harmony import */


    var _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./semantics/subcategories/subcategories-bar/subcategories-bar.component */
    "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts");
    /* harmony import */


    var _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./semantics/subcategories/subcategories-panel/subcategories-panel.component */
    "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts");
    /* harmony import */


    var _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./phoneme-view/phoneme-view.component */
    "./src/app/components/phoneme-view/phoneme-view.component.ts");
    /* harmony import */


    var _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./phoneme-view/bar/bar.component */
    "./src/app/components/phoneme-view/bar/bar.component.ts");
    /* harmony import */


    var _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./phoneme-view/phoneme-panel/phoneme-panel.component */
    "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts");
    /* harmony import */


    var _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./phoneme-view/video-panel/video-panel.component */
    "./src/app/components/phoneme-view/video-panel/video-panel.component.ts");
    /* harmony import */


    var _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./categories-view/categories-view.component */
    "./src/app/components/categories-view/categories-view.component.ts");
    /* harmony import */


    var _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./categories-view/categories-bar/categories-bar.component */
    "./src/app/components/categories-view/categories-bar/categories-bar.component.ts");
    /* harmony import */


    var _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./categories-view/categories-view-panel/categories-view-panel.component */
    "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _phoneme_consonant_view_phoneme_consonant_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./phoneme-consonant-view/phoneme-consonant-view.component */
    "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.ts");
    /* harmony import */


    var _phoneme_consonant_view_consonant_bar_consonant_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./phoneme-consonant-view/consonant-bar/consonant-bar.component */
    "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.ts");
    /* harmony import */


    var _phoneme_consonant_view_consonant_phoneme_panel_consonant_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component */
    "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.ts");
    /* harmony import */


    var _phoneme_consonant_view_consonant_phoneme_video_panel_consonant_phoneme_video_panel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component */
    "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.ts");
    /* harmony import */


    var _categories_view_categories_navigation_categories_navigation_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./categories-view/categories-navigation/categories-navigation.component */
    "./src/app/components/categories-view/categories-navigation/categories-navigation.component.ts");
    /* harmony import */


    var _phoneme_consonant_view_consonant_navigation_consonant_navigation_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./phoneme-consonant-view/consonant-navigation/consonant-navigation.component */
    "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.ts");
    /* harmony import */


    var _phoneme_view_phoneme_nav_phoneme_nav_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./phoneme-view/phoneme-nav/phoneme-nav.component */
    "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__["MenuPanelComponent"], _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProfessorMenuComponent"], _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_8__["StudentsMenuComponent"], _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_9__["PhonemeComponent"], _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_10__["PhonemeBarComponent"], _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_11__["VocalPanelComponent"], _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_12__["ConsonantPanelComponent"], _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_13__["PhonemeGamePanelComponent"], _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_28__["PhonemeViewComponent"], _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_29__["BarComponent"], _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_30__["PhonemePanelComponent"], _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_31__["VideoPanelComponent"], _phoneme_view_phoneme_nav_phoneme_nav_component__WEBPACK_IMPORTED_MODULE_43__["PhonemeNavComponent"], _phoneme_consonant_view_phoneme_consonant_view_component__WEBPACK_IMPORTED_MODULE_37__["PhonemeConsonantViewComponent"], _phoneme_consonant_view_consonant_bar_consonant_bar_component__WEBPACK_IMPORTED_MODULE_38__["ConsonantBarComponent"], _phoneme_consonant_view_consonant_phoneme_panel_consonant_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_39__["ConsonantPhonemePanelComponent"], _phoneme_consonant_view_consonant_phoneme_video_panel_consonant_phoneme_video_panel_component__WEBPACK_IMPORTED_MODULE_40__["ConsonantPhonemeVideoPanelComponent"], _phoneme_consonant_view_consonant_navigation_consonant_navigation_component__WEBPACK_IMPORTED_MODULE_42__["ConsonantNavigationComponent"], _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_14__["SemanticsComponent"], _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_15__["SemanticsBarComponent"], _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesPanelComponent"], _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_17__["SemanticsGamePanelComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"], _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_32__["CategoriesViewComponent"], _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_33__["CategoriesBarComponent"], _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_34__["CategoriesViewPanelComponent"], _categories_view_categories_navigation_categories_navigation_component__WEBPACK_IMPORTED_MODULE_41__["CategoriesNavigationComponent"], _professor_professor_component__WEBPACK_IMPORTED_MODULE_18__["ProfessorComponent"], _professor_list_list_component__WEBPACK_IMPORTED_MODULE_19__["ListComponent"], _professor_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_21__["StudentInfoComponent"], _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_23__["FunctionBarComponent"], _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_24__["InfoPanelComponent"], _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_22__["StudentsBarComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_35__["NavigationComponent"]],
      exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__["MenuPanelComponent"], _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProfessorMenuComponent"], _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_8__["StudentsMenuComponent"], _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_9__["PhonemeComponent"], _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_10__["PhonemeBarComponent"], _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_11__["VocalPanelComponent"], _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_12__["ConsonantPanelComponent"], _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_13__["PhonemeGamePanelComponent"], _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_28__["PhonemeViewComponent"], _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_29__["BarComponent"], _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_30__["PhonemePanelComponent"], _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_31__["VideoPanelComponent"], _phoneme_view_phoneme_nav_phoneme_nav_component__WEBPACK_IMPORTED_MODULE_43__["PhonemeNavComponent"], _phoneme_consonant_view_phoneme_consonant_view_component__WEBPACK_IMPORTED_MODULE_37__["PhonemeConsonantViewComponent"], _phoneme_consonant_view_consonant_bar_consonant_bar_component__WEBPACK_IMPORTED_MODULE_38__["ConsonantBarComponent"], _phoneme_consonant_view_consonant_phoneme_panel_consonant_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_39__["ConsonantPhonemePanelComponent"], _phoneme_consonant_view_consonant_phoneme_video_panel_consonant_phoneme_video_panel_component__WEBPACK_IMPORTED_MODULE_40__["ConsonantPhonemeVideoPanelComponent"], _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_14__["SemanticsComponent"], _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_15__["SemanticsBarComponent"], _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesPanelComponent"], _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_17__["SemanticsGamePanelComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"], _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_32__["CategoriesViewComponent"], _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_33__["CategoriesBarComponent"], _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_34__["CategoriesViewPanelComponent"], _categories_view_categories_navigation_categories_navigation_component__WEBPACK_IMPORTED_MODULE_41__["CategoriesNavigationComponent"], _professor_professor_component__WEBPACK_IMPORTED_MODULE_18__["ProfessorComponent"], _professor_list_list_component__WEBPACK_IMPORTED_MODULE_19__["ListComponent"], _professor_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_21__["StudentInfoComponent"], _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_23__["FunctionBarComponent"], _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_24__["InfoPanelComponent"], _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_22__["StudentsBarComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_35__["NavigationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__["DragDropModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .principal {\n    position: absolute;\n    width: 554px;\n    height: 264px;\n    margin-left: 360px;\n    margin-right: 360px;\n    top: 318px;\n    background: #7A84DD;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .tituloUsuario {\n    top: 16px;\n    margin-left: 241px;\n    margin-right: auto;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n\n  .tituloClave {\n    margin-left: 219px;\n    margin-right: auto;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n\n  .usuario {\n    width: 484px;\n    height: 44px;\n    left: 25px;\n    right: 33px;\n    top: 4px;\n    background: #FFFFFF;\n    border-radius: 3px;\n  }\n\n  .clave {\n    width: 484px;\n    height: 44px;\n    left: 25px;\n    right: 33px;\n    top: 14px;\n    background: #FFFFFF;\n    border-radius: 3px;\n  }\n\n  .btnLogin {\n    position: absolute;\n    width: 150px;\n    height: 44px;\n    left: 203px;\n    right: 201px;\n    top: 18px;\n    bottom: 20px;\n    background: #A9B0F0;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFFQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNETjs7RURJRTtJQUdJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUdBLGNBQUE7RUNOTjs7RURRRTtJQUdJLGtCQUFBO0lBQ0Esa0JBQUE7SUFHQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFJQSxjQUFBO0VDWk47O0VEY0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNYTjs7RURjRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ1hOOztFRGNFO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFFQSxtQkFBQTtJQUNBLGtCQUFBO0VDWk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7ICBcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1NTRweDtcclxuICAgICAgICBoZWlnaHQ6IDI2NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHRvcDogMzE4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzdBODRERDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICAudGl0dWxvVXN1YXJpb3tcclxuICAgICAgICAvL3dpZHRoOiAxMDBweDtcclxuICAgICAgICAvL2hlaWdodDogMzBweDsgICAgXHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNDFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgLy9mb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7IFxyXG5cclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiAgICB9ICAgXHJcbiAgICAudGl0dWxvQ2xhdmV7XHJcbiAgICAgICAgLy93aWR0aDogMTIxcHg7XHJcbiAgICAgICAgLy9oZWlnaHQ6IDMwcHg7ICBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIFxyXG4gICAgICAgIC8vZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG4gICAgfVxyXG4gICAgLnVzdWFyaW97XHJcbiAgICAgICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAzM3B4OyAgICBcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5jbGF2ZXtcclxuICAgICAgICB3aWR0aDogNDg0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDMzcHg7XHJcbiAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmJ0bkxvZ2lue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDIwM3B4O1xyXG4gICAgICAgIHJpZ2h0OiAyMDFweDtcclxuICAgICAgICB0b3A6IDE4cHg7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNBOUIwRjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OyAgICBcclxuICAgIH0gXHJcbiAgICBcclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NTRweDtcbiAgICBoZWlnaHQ6IDI2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2MHB4O1xuICAgIHRvcDogMzE4cHg7XG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAudGl0dWxvVXN1YXJpbyB7XG4gICAgdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuXG4gIC50aXR1bG9DbGF2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgLnVzdWFyaW8ge1xuICAgIHdpZHRoOiA0ODRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGVmdDogMjVweDtcbiAgICByaWdodDogMzNweDtcbiAgICB0b3A6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5jbGF2ZSB7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIHJpZ2h0OiAzM3B4O1xuICAgIHRvcDogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5idG5Mb2dpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGVmdDogMjAzcHg7XG4gICAgcmlnaHQ6IDIwMXB4O1xuICAgIHRvcDogMThweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0E5QjBGMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _models_student__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/student */
    "./src/app/models/student.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(navCtrl, userService, authenticationService, studentService) {
        _classCallCheck(this, LoginComponent);

        this.navCtrl = navCtrl;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.studentService = studentService;
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.newStudent = new _models_student__WEBPACK_IMPORTED_MODULE_7__["Student"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setEmail",
        value: function setEmail(event) {
          this.newUser.email = event.target.value;
        }
      }, {
        key: "setPassword",
        value: function setPassword(event) {
          this.newUser.password = event.target.value;
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.userService.loginUser(this.newUser).then(function (data) {
            _this.authenticationService.saveToken(data.token);

            if (_this.authenticationService.getUserDetails().tipo == "Estudiante") {
              // Redireccionar al menu del estudiante
              _this.navCtrl.navigateForward('/menu');
            } else if (_this.authenticationService.getUserDetails().tipo == "Docente") {
              // Redireccionar al menu del docente
              _this.navCtrl.navigateForward('/menu');
            }
          }).catch(function (err) {
            console.log("Login Incorrecto :(");
          });
        }
      }, {
        key: "goToRegistro",
        value: function goToRegistro() {// this.navCtrl.navigateForward('/registro');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginComponent.prototype, "clave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginComponent.prototype, "comando", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/menu-panel/menu-panel.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/menu-panel/menu-panel.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuPanelMenuPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1144px;\n  height: 664px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LXBhbmVsXFxtZW51LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcGFuZWwvbWVudS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcGFuZWwvbWVudS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0NHB4O1xyXG4gICAgaGVpZ2h0OiA2NjRweDsgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQ0cHg7XG4gIGhlaWdodDogNjY0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/menu-panel/menu-panel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/menu-panel/menu-panel.component.ts ***!
    \***************************************************************/

  /*! exports provided: MenuPanelComponent */

  /***/
  function srcAppComponentsMenuPanelMenuPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPanelComponent", function () {
      return MenuPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuPanelComponent =
    /*#__PURE__*/
    function () {
      function MenuPanelComponent() {
        _classCallCheck(this, MenuPanelComponent);
      }

      _createClass(MenuPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuPanelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuPanelComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuPanelComponent.prototype, "opcion1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuPanelComponent.prototype, "opcion2", void 0);
    MenuPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-panel.component.scss */
      "./src/app/components/menu-panel/menu-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MenuPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/menu-panel/professor-menu/professor-menu.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/menu-panel/professor-menu/professor-menu.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuPanelProfessorMenuProfessorMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 800px) {\n  .principal {\n    width: 715px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 119px;\n    margin-right: 120px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 150px;\n    height: 150px;\n    background: url('fonemas.svg');\n    background-size: 150px 150px;\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 150px;\n    height: 150px;\n    background: url('semanticas.svg');\n    background-size: 150px 150px;\n  }\n\n  .opcionEstudiantes {\n    width: 150px;\n    height: 150px;\n    background: url('estudiantes.svg');\n    background-size: 150px 150px;\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 334px;\n    margin-right: 334px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 230px;\n    height: 230px;\n    background: url('fonemas.svg');\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 230px;\n    height: 230px;\n    background: url('semanticas.svg');\n  }\n\n  .opcionEstudiantes {\n    width: 230px;\n    height: 230px;\n    background: url('estudiantes.svg');\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3Byb2Zlc3Nvci1tZW51L0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LXBhbmVsXFxwcm9mZXNzb3ItbWVudVxccHJvZmVzc29yLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9wcm9mZXNzb3ItbWVudS9wcm9mZXNzb3ItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNDTjs7RURDRztJQUNHLFdBQUE7SUFDQSxZQUFBO0VDRU47O0VEQUU7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNHTjs7RURERTtJQUNJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUMsY0FBQTtFQ0dQOztFRERHO0lBQ0csVUFBQTtFQ0lOOztFREZFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0VDS047O0VESEU7SUFFSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtJQUNBLDRCQUFBO0VDS047O0VESEU7SUFFSyxZQUFBO0lBQ0EsYUFBQTtJQUNELGtDQUFBO0lBQ0EsNEJBQUE7RUNLTjs7RURIRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBRUEsVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUEsNEJBQUE7SUFFQSxjQUFBO0VDRU47O0VEQUU7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDR047QUFDRjtBRERBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsMkNBQUE7SUFDQSxtQkFBQTtFQ0dOOztFRERHO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNJUDs7RURGRztJQUNJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ0tQOztFREhHO0lBQ0csb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQyxjQUFBO0VDS1A7O0VERkc7SUFDSSxVQUFBO0VDS1A7O0VERkc7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VDS1A7O0VERkc7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtFQ0tQOztFRERHO0lBRUcsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtFQ0dOOztFRENHO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQSw0QkFBQTtJQUVBLGNBQUE7RUNGUDs7RURLRztJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNGUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3Byb2Zlc3Nvci1tZW51L3Byb2Zlc3Nvci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiA3MTVweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9IFxyXG4gICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH0gIFxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICAgICAgICB3aWR0aDogNDc2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgICB9IFxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH0gIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgfSAgXHJcbiAgICAub3BjaW9uRm9uZW1he1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgIH0gIFxyXG4gICAgLm9wY2lvblNlbWFudGljYXtcclxuXHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XHJcbiAgICB9IFxyXG4gICAgLm9wY2lvbkVzdHVkaWFudGVze1xyXG4gICAgICAgICAvL2xlZnQ6IDQwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9lc3R1ZGlhbnRlcy5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xyXG4gICAgfSAgIFxyXG4gICAgLnRleHRvT3BjaW9ue1xyXG4gICAgICAgIHdpZHRoOiAzNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgLy9sZWZ0OiAzMTdweDtcclxuICAgICAgICB0b3A6IDYyMXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfSBcclxuICAgIC5idG5Mb2dvdXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgIHRvcDogMTM3cHg7ICAgIFxyXG4gICAgfSAgICAgICAgICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXtcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDExNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9XHJcbiAgICAgLmljb257XHJcbiAgICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgfVxyXG4gICAgIC50aXR1bG97XHJcbiAgICAgICAgIHRvcDogODFweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6MzM0cHg7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogMzM0cHg7XHJcbiAgICAgICAgIHdpZHRoOiA0NzZweDtcclxuICAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgIH1cclxuICAgICAudGV4dG97XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICAgdG9wOiAxNDBweDtcclxuICAgICB9XHJcbiAgICBcclxuICAgICAub3BjaW9uRm9uZW1he1xyXG4gICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnJyk7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5vcGNpb25TZW1hbnRpY2F7XHJcbiAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmcnKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICBcclxuICAgICAub3BjaW9uRXN0dWRpYW50ZXN7XHJcbiAgICAgICAgLy8gbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9lc3R1ZGlhbnRlcy5zdmcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgLnRleHRvT3BjaW9ue1xyXG4gICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgLy9sZWZ0OiAzMTdweDtcclxuICAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuYnRuTG9nb3V0e1xyXG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgICB0b3A6IDEzN3B4OyAgICBcclxuICAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogNzE1cHg7XG4gICAgaGVpZ2h0OiA2NjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cblxuICAudGl0dWxvIHtcbiAgICB0b3A6IDgxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExOXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDQ3NnB4O1xuICAgIGhlaWdodDogMTY0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRleHRvIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5vcGNpb25lcyB7XG4gICAgdG9wOiAxNDBweDtcbiAgfVxuXG4gIC5vcGNpb25Gb25lbWEge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9mb25lbWFzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcbiAgfVxuXG4gIC5vcGNpb25Fc3R1ZGlhbnRlcyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2VzdHVkaWFudGVzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICB9XG5cbiAgLnRleHRvT3BjaW9uIHtcbiAgICB3aWR0aDogMzY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHRvcDogNjIxcHg7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5idG5Mb2dvdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNDJweDtcbiAgICB0b3A6IDEzN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDExNDRweDtcbiAgICBoZWlnaHQ6IDY2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cbiAgLmljb24ge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIC50aXR1bG8ge1xuICAgIHRvcDogODFweDtcbiAgICBtYXJnaW4tbGVmdDogMzM0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMzRweDtcbiAgICB3aWR0aDogNDc2cHg7XG4gICAgaGVpZ2h0OiAxNjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGV4dG8ge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLm9wY2lvbmVzIHtcbiAgICB0b3A6IDE0MHB4O1xuICB9XG5cbiAgLm9wY2lvbkZvbmVtYSB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnXCIpO1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmdcIik7XG4gIH1cblxuICAub3BjaW9uRXN0dWRpYW50ZXMge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9lc3R1ZGlhbnRlcy5zdmdcIik7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLmJ0bkxvZ291dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE0MnB4O1xuICAgIHRvcDogMTM3cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/menu-panel/professor-menu/professor-menu.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/menu-panel/professor-menu/professor-menu.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProfessorMenuComponent */

  /***/
  function srcAppComponentsMenuPanelProfessorMenuProfessorMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessorMenuComponent", function () {
      return ProfessorMenuComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProfessorMenuComponent =
    /*#__PURE__*/
    function () {
      function ProfessorMenuComponent(navCtrl, authenticationService, router) {
        _classCallCheck(this, ProfessorMenuComponent);

        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(ProfessorMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectTheme",
        value: function selectTheme(event) {
          console.log(event.target.value);
          this.navCtrl.navigateForward('/' + event.target.value);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigateByUrl('/');
        }
      }]);

      return ProfessorMenuComponent;
    }();

    ProfessorMenuComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorMenuComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorMenuComponent.prototype, "opcion1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorMenuComponent.prototype, "opcion2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorMenuComponent.prototype, "opcion3", void 0);
    ProfessorMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professor-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professor-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professor-menu.component.scss */
      "./src/app/components/menu-panel/professor-menu/professor-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ProfessorMenuComponent);
    /***/
  },

  /***/
  "./src/app/components/menu-panel/students-menu/students-menu.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/menu-panel/students-menu/students-menu.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuPanelStudentsMenuStudentsMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 800px) {\n  .principal {\n    width: 715px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 119px;\n    margin-right: 120px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 150px;\n    height: 150px;\n    background: url('fonemas.svg');\n    background-size: 150px 150px;\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 150px;\n    height: 150px;\n    background: url('semanticas.svg');\n    background-size: 150px 150px;\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 334px;\n    margin-right: 334px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 254px;\n    margin-left: 190px;\n    margin-right: 190px;\n  }\n\n  .divFonema {\n    width: 274px;\n    margin-right: 118px;\n  }\n\n  .divSemantica {\n    margin-left: 118px;\n  }\n\n  .opcionFonema {\n    width: 264px;\n    height: 264px;\n    background: url('fonemas.png');\n  }\n\n  .opcionSemantica {\n    left: 40px;\n    width: 264px;\n    height: 264px;\n    background: url('semanticas.png');\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3N0dWRlbnRzLW1lbnUvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lbnUtcGFuZWxcXHN0dWRlbnRzLW1lbnVcXHN0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9zdHVkZW50cy1tZW51L3N0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQ0FBQTtJQUNBLG1CQUFBO0VDQU47O0VERUc7SUFDRyxXQUFBO0lBQ0EsWUFBQTtFQ0NOOztFRENFO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDRU47O0VEQUU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVDLGNBQUE7RUNFUDs7RURBRztJQUNHLFVBQUE7RUNHTjs7RURERTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSw0QkFBQTtFQ0lOOztFREZFO0lBRUksVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSw0QkFBQTtFQ0lOOztFREZFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQSw0QkFBQTtJQUVBLGNBQUE7RUNDTjs7RURDRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNFTjtBQUNGO0FEQ0E7RUFDSTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQ0FBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VEQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0VOOztFREFFO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDR047O0VEREU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVBLGNBQUE7RUNHTjs7RURBRTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDR047O0VEREU7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUNJTjs7RURGRTtJQUNJLGtCQUFBO0VDS047O0VESEU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VDTU47O0VESEU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtFQ01OOztFREhFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBRUEsNEJBQUE7SUFFQSxjQUFBO0VDRU47O0VEQ0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9zdHVkZW50cy1tZW51L3N0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiA3MTVweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9IFxyXG4gICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH0gIFxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICAgICAgICB3aWR0aDogNDc2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgICB9IFxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH0gIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgfSAgXHJcbiAgICAub3BjaW9uRm9uZW1he1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgIH0gIFxyXG4gICAgLm9wY2lvblNlbWFudGljYXtcclxuXHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XHJcbiAgICB9ICBcclxuICAgIC50ZXh0b09wY2lvbntcclxuICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIC8vbGVmdDogMzE3cHg7XHJcbiAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxuICAgIH0gXHJcbiAgICAuYnRuTG9nb3V0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxNDJweDtcclxuICAgICAgICB0b3A6IDEzN3B4OyAgICBcclxuICAgIH0gICAgICAgICAgICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpe1xyXG4gICAgLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMTQ0cHg7XHJcbiAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgdG9wOiA4MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzM0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ3NnB4O1xyXG4gICAgICAgIGhlaWdodDogMTY0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgfVxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDI1NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdkZvbmVtYXtcclxuICAgICAgICB3aWR0aDogMjc0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMThweDtcclxuICAgIH1cclxuICAgIC5kaXZTZW1hbnRpY2F7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xyXG4gICAgfVxyXG4gICAgLm9wY2lvbkZvbmVtYXtcclxuICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1wYW5lbC9mb25lbWFzLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGNpb25TZW1hbnRpY2F7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0b09wY2lvbntcclxuICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIC8vbGVmdDogMzE3cHg7XHJcbiAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5idG5Mb2dvdXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgIHRvcDogMTM3cHg7ICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDcxNXB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAub3BjaW9uZXMge1xuICAgIHRvcDogMTQwcHg7XG4gIH1cblxuICAub3BjaW9uRm9uZW1hIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvZm9uZW1hcy5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcbiAgfVxuXG4gIC5vcGNpb25TZW1hbnRpY2Ege1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL3NlbWFudGljYXMuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLmJ0bkxvZ291dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE0MnB4O1xuICAgIHRvcDogMTM3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTE0NHB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMzNHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5vcGNpb25lcyB7XG4gICAgdG9wOiAyNTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcbiAgfVxuXG4gIC5kaXZGb25lbWEge1xuICAgIHdpZHRoOiAyNzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExOHB4O1xuICB9XG5cbiAgLmRpdlNlbWFudGljYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xuICB9XG5cbiAgLm9wY2lvbkZvbmVtYSB7XG4gICAgd2lkdGg6IDI2NHB4O1xuICAgIGhlaWdodDogMjY0cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9tZW51LXBhbmVsL2ZvbmVtYXMucG5nXCIpO1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNDBweDtcbiAgICB3aWR0aDogMjY0cHg7XG4gICAgaGVpZ2h0OiAyNjRweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL21lbnUtcGFuZWwvc2VtYW50aWNhcy5wbmdcIik7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAuYnRuTG9nb3V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTQycHg7XG4gICAgdG9wOiAxMzdweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/menu-panel/students-menu/students-menu.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/menu-panel/students-menu/students-menu.component.ts ***!
    \********************************************************************************/

  /*! exports provided: StudentsMenuComponent */

  /***/
  function srcAppComponentsMenuPanelStudentsMenuStudentsMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsMenuComponent", function () {
      return StudentsMenuComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentsMenuComponent =
    /*#__PURE__*/
    function () {
      function StudentsMenuComponent(navCtrl, authenticationService, router) {
        _classCallCheck(this, StudentsMenuComponent);

        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(StudentsMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectTheme",
        value: function selectTheme(event) {
          console.log(event.target.value);
          this.navCtrl.navigateForward('/' + event.target.value);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigateByUrl('/');
        }
      }]);

      return StudentsMenuComponent;
    }();

    StudentsMenuComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsMenuComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsMenuComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsMenuComponent.prototype, "opcion1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsMenuComponent.prototype, "opcion2", void 0);
    StudentsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-students-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students-menu.component.scss */
      "./src/app/components/menu-panel/students-menu/students-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], StudentsMenuComponent);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 1145px;\n  height: 57px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.btnBack {\n  width: 42px;\n  height: 42px;\n  margin-left: 30px;\n}\n\n.btnHome {\n  width: 42px;\n  height: 42px;\n  margin-left: 135px;\n}\n\n.btnForward {\n  width: 42px;\n  height: 42px;\n  margin-right: 32px;\n  margin-left: auto;\n}\n\n.backIcon {\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.homeIcon {\n  width: 42px;\n  height: 42px;\n  background: url('home.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.forwardIcon {\n  width: 42px;\n  height: 42px;\n  background: url('forward.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QUREQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExNDVweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyAgICBcclxufVxyXG5cclxuLmJ0bkJhY2t7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5idG5Ib21le1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM1cHg7XHJcbn1cclxuLmJ0bkZvcndhcmR7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmhvbWVJY29ue1xyXG5cclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmZvcndhcmRJY29ue1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuIiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNDVweDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYnRuQmFjayB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnRuSG9tZSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzVweDtcbn1cblxuLmJ0bkZvcndhcmQge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYmFja0ljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhvbWVJY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5mb3J3YXJkSWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent(navCtrl) {
        _classCallCheck(this, NavigationComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToHome",
        value: function goToHome(event) {
          this.navCtrl.navigateForward('/menu');
        }
      }, {
        key: "goTo",
        value: function goTo(event) {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/components/navigation/navigation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantBarConsonantBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 263px;\n  height: 262px;\n  left: 16px;\n  right: 23px;\n  top: 206px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 15px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.fonema {\n  position: absolute;\n  width: 301px;\n  height: 74px;\n  left: 96px;\n  right: 41px;\n  top: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.videoFonema {\n  margin-top: 65px;\n  margin-right: 100px;\n}\n\n.mensaje {\n  width: 303px;\n  height: 42px;\n  margin-top: 450px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n\n.btnPlay {\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1iYXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtY29uc29uYW50LXZpZXdcXGNvbnNvbmFudC1iYXJcXGNvbnNvbmFudC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtYmFyL2NvbnNvbmFudC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0w7O0FEQ0M7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDRUw7O0FEQUM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQ0NMOztBRENDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURHQztFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURHQztFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNESjs7QURJQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNETDs7QURHQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURFQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNDTDs7QURDQztFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0VMOztBREFDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR0w7O0FEREM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNJTDs7QURGQztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0tMOztBREZDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtYmFyL2NvbnNvbmFudC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAzMDJweDtcclxuICAgICBoZWlnaHQ6IDYyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNGQ0QyNjA7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxuIH1cclxuIC5pbWFnZW57XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAyNjNweDtcclxuICAgICBoZWlnaHQ6IDI2MnB4O1xyXG4gICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgdG9wOiAyMDZweDsgICAgXHJcbiB9XHJcbiAudGl0dWxve1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjI2cHg7XHJcbiAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgcmlnaHQ6IDQxcHg7XHJcbiAgICAgdG9wOiAxNXB4O1xyXG4gXHJcbiAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgICBcclxuICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiB9XHJcbiAuZm9uZW1he1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwMXB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgbGVmdDogOTZweDtcclxuICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgdG9wOiA4NXB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgXHJcbiB9XHJcblxyXG4gLnZpZGVvRm9uZW1he1xyXG4gICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuIH1cclxuXHJcbiAubWVuc2FqZXtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNDJweDsgXHJcbiAgICBtYXJnaW4tdG9wOjQ1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gXHJcbiAuY29tYW5kbzF7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDA2cHg7ICBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgXHJcbiB9XHJcbiAuY29tYW5kbzJ7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDY3cHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgIFxyXG4gfVxyXG4gLmNvbWFuZG8ze1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDUyMHB4OyBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgICBcclxuIH1cclxuIC5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiAzOTJweDsgICAgIFxyXG4gfVxyXG4gLmJ0bkNvbWFuZG8xe1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiAzOTJweDsgIFxyXG4gfVxyXG4gLmJ0bkNvbWFuZG8ye1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiA0NTNweDtcclxuIH1cclxuIC5idG5Db21hbmRvM3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogNTIwcHg7XHJcbiB9XHJcblxyXG4gLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjYzcHg7XG4gIGhlaWdodDogMjYycHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHJpZ2h0OiAyM3B4O1xuICB0b3A6IDIwNnB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjI2cHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogNTBweDtcbiAgcmlnaHQ6IDQxcHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZm9uZW1hIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAxcHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogOTZweDtcbiAgcmlnaHQ6IDQxcHg7XG4gIHRvcDogODVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udmlkZW9Gb25lbWEge1xuICBtYXJnaW4tdG9wOiA2NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4ubWVuc2FqZSB7XG4gIHdpZHRoOiAzMDNweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tdG9wOiA0NTBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDM5MnB4O1xufVxuXG4uYnRuQ29tYW5kbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNDUzcHg7XG59XG5cbi5idG5Db21hbmRvMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MjBweDtcbn1cblxuLmJ0blBsYXkge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ConsonantBarComponent */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantBarConsonantBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantBarComponent", function () {
      return ConsonantBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConsonantBarComponent =
    /*#__PURE__*/
    function () {
      function ConsonantBarComponent() {
        _classCallCheck(this, ConsonantBarComponent);

        this.barEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleAudio = false;
        this.visibleVideo = true;
      }

      _createClass(ConsonantBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {
          console.log(event.target.value);
          this.barEvent.emit(event.target.value);
          this.setVisible(event.target.value);
        }
      }, {
        key: "playVideo",
        value: function playVideo() {}
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'video') {
            this.visibleVideo = false;
            this.visibleAudio = true;
          }

          if (value === 'phoneme') {
            this.visibleVideo = true;
            this.visibleAudio = false;
          }
        }
      }]);

      return ConsonantBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantBarComponent.prototype, "Video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantBarComponent.prototype, "fonema", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantBarComponent.prototype, "mensaje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantBarComponent.prototype, "imagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ConsonantBarComponent.prototype, "barEvent", void 0);
    ConsonantBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consonant-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consonant-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consonant-bar.component.scss */
      "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConsonantBarComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantNavigationConsonantNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtbmF2aWdhdGlvbi9jb25zb25hbnQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: ConsonantNavigationComponent */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantNavigationConsonantNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantNavigationComponent", function () {
      return ConsonantNavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConsonantNavigationComponent =
    /*#__PURE__*/
    function () {
      function ConsonantNavigationComponent() {
        _classCallCheck(this, ConsonantNavigationComponent);
      }

      _createClass(ConsonantNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsonantNavigationComponent;
    }();

    ConsonantNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consonant-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consonant-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consonant-navigation.component.scss */
      "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConsonantNavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantPhonemePanelConsonantPhonemePanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.audioFonema {\n  text-align: center;\n  margin-left: 226px;\n  margin-right: 235px;\n  margin-top: 55px;\n}\n\n.imagen {\n  width: 287px;\n  height: 287px;\n}\n\n.btnPlay {\n  width: 103px;\n  height: 103px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.rowPalabra {\n  margin-left: 309px;\n  margin-right: 318px;\n}\n\n.palabra {\n  margin-left: auto;\n  margin-right: auto;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 90px;\n  text-align: center;\n  color: #109CF1;\n}\n\n.rowSilaba {\n  margin-top: 50px;\n  margin-left: 53px;\n  margin-right: 62px;\n}\n\n.silaba {\n  width: 87px;\n  height: 87px;\n  border-radius: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 52px;\n  text-transform: initial;\n  background: #A9B0F0;\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1waG9uZW1lLXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLWNvbnNvbmFudC12aWV3XFxjb25zb25hbnQtcGhvbmVtZS1wYW5lbFxcY29uc29uYW50LXBob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtcGhvbmVtZS1wYW5lbC9jb25zb25hbnQtcGhvbmVtZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtY29uc29uYW50LXZpZXcvY29uc29uYW50LXBob25lbWUtcGFuZWwvY29uc29uYW50LXBob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG4uYXVkaW9Gb25lbWF7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG59XHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogMjg3cHg7XHJcbiAgICBoZWlnaHQ6IDI4N3B4OyAgICBcclxufVxyXG4uYnRuUGxheXtcclxuICAgIHdpZHRoOiAxMDNweDtcclxuICAgIGhlaWdodDogMTAzcHg7ICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgIFxyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxufVxyXG4ucm93UGFsYWJyYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDlweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzE4cHg7XHJcbn1cclxuLnBhbGFicmF7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzEwOUNGMTsgIFxyXG59XHJcbi5yb3dTaWxhYmF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYycHg7XHJcbn1cclxuLnNpbGFiYXtcclxuICAgIHdpZHRoOiA4N3B4O1xyXG4gICAgaGVpZ2h0OiA4N3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0E5QjBGMDtcclxuICAgIGNvbG9yOiAjNUY2NTlDO1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmF1ZGlvRm9uZW1hIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjI2cHg7XG4gIG1hcmdpbi1yaWdodDogMjM1cHg7XG4gIG1hcmdpbi10b3A6IDU1cHg7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMjg3cHg7XG4gIGhlaWdodDogMjg3cHg7XG59XG5cbi5idG5QbGF5IHtcbiAgd2lkdGg6IDEwM3B4O1xuICBoZWlnaHQ6IDEwM3B4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn1cblxuLnJvd1BhbGFicmEge1xuICBtYXJnaW4tbGVmdDogMzA5cHg7XG4gIG1hcmdpbi1yaWdodDogMzE4cHg7XG59XG5cbi5wYWxhYnJhIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEwOUNGMTtcbn1cblxuLnJvd1NpbGFiYSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1M3B4O1xuICBtYXJnaW4tcmlnaHQ6IDYycHg7XG59XG5cbi5zaWxhYmEge1xuICB3aWR0aDogODdweDtcbiAgaGVpZ2h0OiA4N3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGJhY2tncm91bmQ6ICNBOUIwRjA7XG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: ConsonantPhonemePanelComponent */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantPhonemePanelConsonantPhonemePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantPhonemePanelComponent", function () {
      return ConsonantPhonemePanelComponent;
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


    var _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../data/audio/fonemas/consonantes/data.consonantes */
    "./src/data/audio/fonemas/consonantes/data.consonantes.ts");

    var ConsonantPhonemePanelComponent =
    /*#__PURE__*/
    function () {
      function ConsonantPhonemePanelComponent() {
        _classCallCheck(this, ConsonantPhonemePanelComponent);

        this.audios = [];
        this.silabas = [];
        this.audio = new Audio();
      }

      _createClass(ConsonantPhonemePanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAudios(this.fonema);
          this.getSilabas();
          this.imagen = this.audios[0].imagen;
          this.palabra = this.audios[0].nombre;
        }
      }, {
        key: "playAudio",
        value: function playAudio(event) {}
      }, {
        key: "playAudioS",
        value: function playAudioS(event) {
          this.audio.src = this.silabas[event.target.value].audio;
          this.audio.load();
          this.audio.play();
        }
      }, {
        key: "getAudios",
        value: function getAudios(value) {
          for (var i = 0; i < _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"].length; i++) {
            if (_data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"][i].consonante === value) {
              this.audios = _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"][i].data;
              this.silabas = _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"][i].dataS;
              break;
            }
          }
        }
      }, {
        key: "getSilabas",
        value: function getSilabas() {
          this.silaba1 = this.silabas[0].nombre;
          this.silaba2 = this.silabas[1].nombre;
          this.silaba3 = this.silabas[2].nombre;
          this.silaba4 = this.silabas[3].nombre;
          this.silaba5 = this.silabas[4].nombre;
        }
      }]);

      return ConsonantPhonemePanelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "fonema", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "imagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "palabra", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "silaba1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "silaba2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "silaba3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "silaba4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemePanelComponent.prototype, "silaba5", void 0);
    ConsonantPhonemePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consonant-phoneme-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consonant-phoneme-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consonant-phoneme-panel.component.scss */
      "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConsonantPhonemePanelComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.scss":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.scss ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantPhonemeVideoPanelConsonantPhonemeVideoPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.row {\n  margin-top: 100px;\n  margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1waG9uZW1lLXZpZGVvLXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLWNvbnNvbmFudC12aWV3XFxjb25zb25hbnQtcGhvbmVtZS12aWRlby1wYW5lbFxcY29uc29uYW50LXBob25lbWUtdmlkZW8tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtcGhvbmVtZS12aWRlby1wYW5lbC9jb25zb25hbnQtcGhvbmVtZS12aWRlby1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1waG9uZW1lLXZpZGVvLXBhbmVsL2NvbnNvbmFudC1waG9uZW1lLXZpZGVvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogODBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: ConsonantPhonemeVideoPanelComponent */

  /***/
  function srcAppComponentsPhonemeConsonantViewConsonantPhonemeVideoPanelConsonantPhonemeVideoPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantPhonemeVideoPanelComponent", function () {
      return ConsonantPhonemeVideoPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConsonantPhonemeVideoPanelComponent =
    /*#__PURE__*/
    function () {
      function ConsonantPhonemeVideoPanelComponent() {
        _classCallCheck(this, ConsonantPhonemeVideoPanelComponent);
      }

      _createClass(ConsonantPhonemeVideoPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsonantPhonemeVideoPanelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ConsonantPhonemeVideoPanelComponent.prototype, "video", void 0);
    ConsonantPhonemeVideoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consonant-phoneme-video-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consonant-phoneme-video-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consonant-phoneme-video-panel.component.scss */
      "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConsonantPhonemeVideoPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeConsonantViewPhonemeConsonantViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLWNvbnNvbmFudC12aWV3XFxwaG9uZW1lLWNvbnNvbmFudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtY29uc29uYW50LXZpZXcvcGhvbmVtZS1jb25zb25hbnQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L3Bob25lbWUtY29uc29uYW50LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLnBhbmVse1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLmJhcntcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGhlaWdodDogNjIzcHg7ICBcclxufVxyXG4ubmF2aWdhdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7ICAgIFxyXG4gICAgfSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTE0MnB4O1xuICBoZWlnaHQ6IDYyNHB4O1xufVxuXG4ucGFuZWwge1xuICBsZWZ0OiAyMnB4O1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5iYXIge1xuICB3aWR0aDogMzAycHg7XG4gIGhlaWdodDogNjIzcHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PhonemeConsonantViewComponent */

  /***/
  function srcAppComponentsPhonemeConsonantViewPhonemeConsonantViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemeConsonantViewComponent", function () {
      return PhonemeConsonantViewComponent;
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


    var _models_video_selected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/video-selected */
    "./src/app/models/video-selected.ts");
    /* harmony import */


    var _data_data_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../data/data.videos */
    "./src/data/data.videos.ts");

    var PhonemeConsonantViewComponent =
    /*#__PURE__*/
    function () {
      function PhonemeConsonantViewComponent() {
        _classCallCheck(this, PhonemeConsonantViewComponent);

        this.videoData = new _models_video_selected__WEBPACK_IMPORTED_MODULE_2__["VideoSelected"]();
        this.visiblePhoneme = true;
        this.visibleVideo = false;
      }

      _createClass(PhonemeConsonantViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getVideo(this.valueFonemaView);
        }
      }, {
        key: "selectPanel",
        value: function selectPanel(value) {
          console.log(value);
          this.setVisible(value);
        }
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'video') {
            this.visibleVideo = true;
            this.visiblePhoneme = false;
          }

          if (value === 'phoneme') {
            this.visibleVideo = false;
            this.visiblePhoneme = true;
          }
        }
      }, {
        key: "getVideo",
        value: function getVideo(value) {
          for (var i = 0; i < _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"].length; i++) {
            if (_data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].nombre === value) {
              this.videoData.nombre = _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].nombre;
              this.videoData.video = _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].video;
              this.videoData.imagen = _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].imagen;
              this.videoData.mensaje = _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].mensaje;
              this.videoData.duracion = _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].duracion;
              this.videoData.reproduciendo = _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"][i].reproduciendo;
              break;
            }
          }
        }
      }]);

      return PhonemeConsonantViewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemeConsonantViewComponent.prototype, "valueFonemaView", void 0);
    PhonemeConsonantViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme-consonant-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme-consonant-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme-consonant-view.component.scss */
      "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonemeConsonantViewComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/bar/bar.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/phoneme-view/bar/bar.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeViewBarBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 263px;\n  height: 262px;\n  left: 16px;\n  right: 23px;\n  top: 206px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 15px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.fonema {\n  position: absolute;\n  width: 301px;\n  height: 74px;\n  left: 96px;\n  right: 41px;\n  top: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.videoFonema {\n  margin-top: 65px;\n  margin-right: 100px;\n}\n\n.mensaje {\n  width: 303px;\n  height: 42px;\n  margin-top: 450px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n\n.btnPlay {\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLXZpZXdcXGJhclxcYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NMOztBRENDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VMOztBREFDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNDTDs7QURDQztFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDQUo7O0FER0M7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQUw7O0FER0M7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDREo7O0FESUM7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDREw7O0FER0M7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQUw7O0FERUM7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ0w7O0FEQ0M7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNFTDs7QURBQztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0dMOztBRERDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDSUw7O0FERkM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNLTDs7QURGQztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMzAycHg7XHJcbiAgICAgaGVpZ2h0OiA2MjNweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xyXG4gICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbiB9XHJcbiAuaW1hZ2Vue1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjYzcHg7XHJcbiAgICAgaGVpZ2h0OiAyNjJweDtcclxuICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIHRvcDogMjA2cHg7ICAgIFxyXG4gfVxyXG4gLnRpdHVsb3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDIyNnB4O1xyXG4gICAgIGhlaWdodDogNzRweDtcclxuICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgIHRvcDogMTVweDtcclxuIFxyXG4gICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICAgXHJcbiAgICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG4gfVxyXG4gLmZvbmVtYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDFweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIGxlZnQ6IDk2cHg7XHJcbiAgICByaWdodDogNDFweDtcclxuICAgIHRvcDogODVweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGOyAgICAgIFxyXG4gfVxyXG5cclxuIC52aWRlb0ZvbmVtYXtcclxuICAgICBtYXJnaW4tdG9wOiA2NXB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiB9XHJcblxyXG4gLm1lbnNhamV7XHJcbiAgICB3aWR0aDogMzAzcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7IFxyXG4gICAgbWFyZ2luLXRvcDo0NTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIFxyXG4gLmNvbWFuZG8xe1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDQwNnB4OyAgXHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG4gfVxyXG4gLmNvbWFuZG8ye1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDQ2N3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgICBcclxuIH1cclxuIC5jb21hbmRvM3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiA1MjBweDsgXHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgXHJcbiB9XHJcbiAuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogMzkycHg7ICAgICBcclxuIH1cclxuIC5idG5Db21hbmRvMXtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogMzkycHg7ICBcclxuIH1cclxuIC5idG5Db21hbmRvMntcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogNDUzcHg7XHJcbiB9XHJcbiAuYnRuQ29tYW5kbzN7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAyNTlweDtcclxuICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgbGVmdDogMjBweDtcclxuICAgICByaWdodDogMjNweDtcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgICB0b3A6IDUyMHB4O1xyXG4gfVxyXG5cclxuIC5idG5QbGF5e1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7ICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgIFxyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxufSIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbiAgYmFja2dyb3VuZDogI0ZDRDI2MDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2M3B4O1xuICBoZWlnaHQ6IDI2MnB4O1xuICBsZWZ0OiAxNnB4O1xuICByaWdodDogMjNweDtcbiAgdG9wOiAyMDZweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDUwcHg7XG4gIHJpZ2h0OiA0MXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZvbmVtYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMXB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDk2cHg7XG4gIHJpZ2h0OiA0MXB4O1xuICB0b3A6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnZpZGVvRm9uZW1hIHtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLm1lbnNhamUge1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLXRvcDogNDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NjdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogMzkycHg7XG59XG5cbi5idG5Db21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ1M3B4O1xufVxuXG4uYnRuQ29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNTIwcHg7XG59XG5cbi5idG5QbGF5IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/bar/bar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/phoneme-view/bar/bar.component.ts ***!
    \**************************************************************/

  /*! exports provided: BarComponent */

  /***/
  function srcAppComponentsPhonemeViewBarBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
      return BarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BarComponent =
    /*#__PURE__*/
    function () {
      function BarComponent() {
        _classCallCheck(this, BarComponent);

        this.barEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleAudio = false;
        this.visibleVideo = true;
      }

      _createClass(BarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {
          console.log(event.target.value);
          this.barEvent.emit(event.target.value);
          this.setVisible(event.target.value);
        }
      }, {
        key: "playVideo",
        value: function playVideo() {}
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'video') {
            this.visibleVideo = false;
            this.visibleAudio = true;
          }

          if (value === 'phoneme') {
            this.visibleVideo = true;
            this.visibleAudio = false;
          }
        }
      }]);

      return BarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BarComponent.prototype, "Video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BarComponent.prototype, "fonema", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BarComponent.prototype, "mensaje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BarComponent.prototype, "imagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BarComponent.prototype, "barEvent", void 0);
    BarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bar.component.scss */
      "./src/app/components/phoneme-view/bar/bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BarComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeViewPhonemeNavPhonemeNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 1145px;\n  height: 57px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.btnBack {\n  width: 42px;\n  height: 42px;\n  margin-left: 30px;\n}\n\n.btnHome {\n  width: 42px;\n  height: 42px;\n  margin-left: 135px;\n}\n\n.btnForward {\n  width: 42px;\n  height: 42px;\n  margin-right: 32px;\n  margin-left: auto;\n}\n\n.backIcon {\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.homeIcon {\n  width: 42px;\n  height: 42px;\n  background: url('home.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.forwardIcon {\n  width: 42px;\n  height: 42px;\n  background: url('forward.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1uYXYvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xccGhvbmVtZS1uYXZcXHBob25lbWUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLW5hdi9waG9uZW1lLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QUREQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1uYXYvcGhvbmVtZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExNDVweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyAgICBcclxufVxyXG5cclxuLmJ0bkJhY2t7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5idG5Ib21le1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM1cHg7XHJcbn1cclxuLmJ0bkZvcndhcmR7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmhvbWVJY29ue1xyXG5cclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmZvcndhcmRJY29ue1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTE0NXB4O1xuICBoZWlnaHQ6IDU3cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5idG5CYWNrIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5idG5Ib21lIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xufVxuXG4uYnRuRm9yd2FyZCB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5iYWNrSWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2JhY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaG9tZUljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmZvcndhcmRJY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZm9yd2FyZC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PhonemeNavComponent */

  /***/
  function srcAppComponentsPhonemeViewPhonemeNavPhonemeNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemeNavComponent", function () {
      return PhonemeNavComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PhonemeNavComponent =
    /*#__PURE__*/
    function () {
      function PhonemeNavComponent(navCtrl) {
        _classCallCheck(this, PhonemeNavComponent);

        this.navCtrl = navCtrl;
        this.navigationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PhonemeNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToHome",
        value: function goToHome(event) {
          this.navCtrl.navigateForward('/menu');
        }
      }, {
        key: "forward",
        value: function forward(event) {
          this.navigationEvent.emit(event.target.value);
        }
      }, {
        key: "back",
        value: function back(event) {
          this.navigationEvent.emit(event.target.value);
        }
      }]);

      return PhonemeNavComponent;
    }();

    PhonemeNavComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PhonemeNavComponent.prototype, "navigationEvent", void 0);
    PhonemeNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme-nav.component.scss */
      "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PhonemeNavComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeViewPhonemePanelPhonemePanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.audioFonema {\n  margin-left: 226px;\n  margin-right: 235px;\n  margin-top: 91px;\n}\n\n.imagen {\n  width: 357px;\n  height: 358px;\n}\n\n.btnPlay {\n  width: 103px;\n  height: 103px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.rowPalabra {\n  margin-left: 309px;\n  margin-right: 318px;\n}\n\n.palabra {\n  margin-left: 309px;\n  margin-right: 318px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 90px;\n  text-align: center;\n  color: #109CF1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZS12aWV3XFxwaG9uZW1lLXBhbmVsXFxwaG9uZW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXBhbmVsL3Bob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXBhbmVsL3Bob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG4uYXVkaW9Gb25lbWF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjI2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOTFweDtcclxufVxyXG4uaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDM1N3B4O1xyXG4gICAgaGVpZ2h0OiAzNThweDsgICAgXHJcbn1cclxuLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogMTAzcHg7XHJcbiAgICBoZWlnaHQ6IDEwM3B4OyAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbn1cclxuLnJvd1BhbGFicmF7XHJcbiAgICBtYXJnaW4tbGVmdDogMzA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMxOHB4O1xyXG59XHJcbi5wYWxhYnJhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzEwOUNGMTsgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmF1ZGlvRm9uZW1hIHtcbiAgbWFyZ2luLWxlZnQ6IDIyNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xuICBtYXJnaW4tdG9wOiA5MXB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDM1N3B4O1xuICBoZWlnaHQ6IDM1OHB4O1xufVxuXG4uYnRuUGxheSB7XG4gIHdpZHRoOiAxMDNweDtcbiAgaGVpZ2h0OiAxMDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG59XG5cbi5yb3dQYWxhYnJhIHtcbiAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMxOHB4O1xufVxuXG4ucGFsYWJyYSB7XG4gIG1hcmdpbi1sZWZ0OiAzMDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMThweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEwOUNGMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PhonemePanelComponent */

  /***/
  function srcAppComponentsPhonemeViewPhonemePanelPhonemePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemePanelComponent", function () {
      return PhonemePanelComponent;
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


    var _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../data/audio/fonemas/vocales/data.vocales */
    "./src/data/audio/fonemas/vocales/data.vocales.ts");

    var PhonemePanelComponent =
    /*#__PURE__*/
    function () {
      function PhonemePanelComponent() {
        _classCallCheck(this, PhonemePanelComponent);

        this.audios = [];
        this.audio = new Audio();
      }

      _createClass(PhonemePanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAudios(this.fonema);
          console.log(this.audios[0].audio);
          this.imagen = this.audios[0].imagen;
          this.palabra = this.audios[0].nombre;
          console.log(this.imagen);
          this.cantidadAudios = 0;
        }
      }, {
        key: "playAudio",
        value: function playAudio(event) {
          if (this.cantidadAudios > this.audios.length) {
            this.cantidadAudios = 0;
          }

          this.palabra = this.audios[this.cantidadAudios].nombre;
          this.imagen = this.audios[this.cantidadAudios].imagen;
          this.audio.src = this.audios[this.cantidadAudios].audio;
          this.audio.load();
          this.audio.play();
          console.log(event.target.value);
          console.log('Soy el audio');
          this.cantidadAudios++;
          console.log(this.comando);
        }
      }, {
        key: "reviewAudio",
        value: function reviewAudio(event) {
          this.cantidadAudios--;

          if (this.cantidadAudios < this.audios.length) {
            this.cantidadAudios = 0;
          }

          this.palabra = this.audios[this.cantidadAudios].nombre;
          this.audio.src = this.audios[this.cantidadAudios].audio;
          this.audio.load();
          this.audio.play();
          console.log(event.target.value);
          console.log('Soy el audio');
        }
      }, {
        key: "getAudios",
        value: function getAudios(value) {
          for (var i = 0; i < _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__["VOCALES"].length; i++) {
            if (_data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__["VOCALES"][i].vocal === value) {
              this.audios = _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__["VOCALES"][i].data;
              break;
            }
          }
        }
      }]);

      return PhonemePanelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemePanelComponent.prototype, "fonema", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemePanelComponent.prototype, "imagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemePanelComponent.prototype, "palabra", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemePanelComponent.prototype, "comando", void 0);
    PhonemePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme-panel.component.scss */
      "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonemePanelComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/phoneme-view.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/phoneme-view/phoneme-view.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeViewPhonemeViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xccGhvbmVtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS12aWV3L3Bob25lbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4ucGFuZWx7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4uYmFye1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgaGVpZ2h0OiA2MjNweDsgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/phoneme-view.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/phoneme-view/phoneme-view.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PhonemeViewComponent */

  /***/
  function srcAppComponentsPhonemeViewPhonemeViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemeViewComponent", function () {
      return PhonemeViewComponent;
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


    var _data_data_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data/data.videos */
    "./src/data/data.videos.ts");
    /* harmony import */


    var _models_video_selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/video-selected */
    "./src/app/models/video-selected.ts");

    var PhonemeViewComponent =
    /*#__PURE__*/
    function () {
      function PhonemeViewComponent() {
        _classCallCheck(this, PhonemeViewComponent);

        this.videoData = new _models_video_selected__WEBPACK_IMPORTED_MODULE_3__["VideoSelected"]();
        this.visiblePhoneme = true;
        this.visibleVideo = false;
      }

      _createClass(PhonemeViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getVideo(this.valueFonemaView);
        }
      }, {
        key: "selectPanel",
        value: function selectPanel(value) {
          console.log(value);
          this.setVisible(value);
        }
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'video') {
            this.visibleVideo = true;
            this.visiblePhoneme = false;
          }

          if (value === 'phoneme') {
            this.visibleVideo = false;
            this.visiblePhoneme = true;
          }
        }
      }, {
        key: "getVideo",
        value: function getVideo(value) {
          for (var i = 0; i < _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"].length; i++) {
            if (_data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].nombre === value) {
              this.videoData.nombre = _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].nombre;
              this.videoData.video = _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].video;
              this.videoData.imagen = _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].imagen;
              this.videoData.mensaje = _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].mensaje;
              this.videoData.duracion = _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].duracion;
              this.videoData.reproduciendo = _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"][i].reproduciendo;
              break;
            }
          }
        }
      }, {
        key: "ejecutarAccion",
        value: function ejecutarAccion($event) {}
      }]);

      return PhonemeViewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemeViewComponent.prototype, "valueFonemaView", void 0);
    PhonemeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme-view.component.scss */
      "./src/app/components/phoneme-view/phoneme-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonemeViewComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/video-panel/video-panel.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/phoneme-view/video-panel/video-panel.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeViewVideoPanelVideoPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.row {\n  margin-top: 100px;\n  margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvdmlkZW8tcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xcdmlkZW8tcGFuZWxcXHZpZGVvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy92aWRlby1wYW5lbC92aWRlby1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvdmlkZW8tcGFuZWwvdmlkZW8tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG5cclxuLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/phoneme-view/video-panel/video-panel.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/phoneme-view/video-panel/video-panel.component.ts ***!
    \******************************************************************************/

  /*! exports provided: VideoPanelComponent */

  /***/
  function srcAppComponentsPhonemeViewVideoPanelVideoPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPanelComponent", function () {
      return VideoPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VideoPanelComponent =
    /*#__PURE__*/
    function () {
      function VideoPanelComponent() {
        _classCallCheck(this, VideoPanelComponent);
      }

      _createClass(VideoPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoPanelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VideoPanelComponent.prototype, "video", void 0);
    VideoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/video-panel/video-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-panel.component.scss */
      "./src/app/components/phoneme-view/video-panel/video-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VideoPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeConsonantPanelConsonantPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 58px;\n  left: 20px;\n}\n\n.row {\n  margin-left: 91px;\n  margin-right: 92px;\n}\n\n.phonemeButton {\n  width: 159px;\n  height: 77px;\n  background: #7A84DD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  line-height: 52px;\n  text-transform: initial;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL2NvbnNvbmFudC1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZVxcY29uc29uYW50LXBhbmVsXFxjb25zb25hbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9jb25zb25hbnQtcGFuZWwvY29uc29uYW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUvY29uc29uYW50LXBhbmVsL2NvbnNvbmFudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiA5MXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5MnB4O1xyXG59XHJcbi5waG9uZW1lQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4OyAgICBcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA5MXB4O1xuICBtYXJnaW4tcmlnaHQ6IDkycHg7XG59XG5cbi5waG9uZW1lQnV0dG9uIHtcbiAgd2lkdGg6IDE1OXB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConsonantPanelComponent */

  /***/
  function srcAppComponentsPhonemeConsonantPanelConsonantPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsonantPanelComponent", function () {
      return ConsonantPanelComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ConsonantPanelComponent =
    /*#__PURE__*/
    function () {
      function ConsonantPanelComponent(navCtrl) {
        _classCallCheck(this, ConsonantPanelComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(ConsonantPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToPhoneme",
        value: function goToPhoneme(event) {
          console.log(event.target.value);
          this.value = event.target.value;
          this.navCtrl.navigateForward(['/consonantes', this.value]);
        }
      }]);

      return ConsonantPanelComponent;
    }();

    ConsonantPanelComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ConsonantPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consonant-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consonant-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consonant-panel.component.scss */
      "./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], ConsonantPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemePhonemeBarPhonemeBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 43px;\n  right: 46px;\n  top: 106px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 319px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUtYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFxwaG9uZW1lLWJhclxccGhvbmVtZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWJhci9waG9uZW1lLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGtCQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWJhci9waG9uZW1lLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGhlaWdodDogNjIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5pbWFnZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBoZWlnaHQ6IDIxM3B4O1xyXG4gICAgbGVmdDogNDNweDtcclxuICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgdG9wOiAxMDZweDsgICAgXHJcbn1cclxuLnRpdHVsb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMjZweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICByaWdodDogNDFweDtcclxuICAgIHRvcDogMzE5cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbn1cclxuXHJcbi5jb21hbmRvMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDA2cHg7ICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG59XHJcbi5jb21hbmRvMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDY3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgICBcclxufVxyXG4uY29tYW5kbzN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyMHB4OyBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgXHJcbn1cclxuLmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogMzkycHg7ICAgICBcclxufVxyXG4uYnRuQ29tYW5kbzF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjU5cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDM5MnB4OyAgXHJcbn1cclxuLmJ0bkNvbWFuZG8ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgdG9wOiA0NTNweDtcclxufVxyXG4uYnRuQ29tYW5kbzN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjU5cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDUyMHB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjEzcHg7XG4gIGhlaWdodDogMjEzcHg7XG4gIGxlZnQ6IDQzcHg7XG4gIHJpZ2h0OiA0NnB4O1xuICB0b3A6IDEwNnB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjI2cHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogNTBweDtcbiAgcmlnaHQ6IDQxcHg7XG4gIHRvcDogMzE5cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDY3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb21hbmRvMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDM5MnB4O1xufVxuXG4uYnRuQ29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogMzkycHg7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA0NTNweDtcbn1cblxuLmJ0bkNvbWFuZG8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDUyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PhonemeBarComponent */

  /***/
  function srcAppComponentsPhonemePhonemeBarPhonemeBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemeBarComponent", function () {
      return PhonemeBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PhonemeBarComponent =
    /*#__PURE__*/
    function () {
      function PhonemeBarComponent() {
        _classCallCheck(this, PhonemeBarComponent);

        this.phonemeBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PhonemeBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {
          console.log(event.target.value);
          this.phonemeBarEvent.emit(event.target.value);
        }
      }]);

      return PhonemeBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemeBarComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemeBarComponent.prototype, "comando1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemeBarComponent.prototype, "comando2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PhonemeBarComponent.prototype, "comando3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PhonemeBarComponent.prototype, "phonemeBarEvent", void 0);
    PhonemeBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme-bar.component.scss */
      "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonemeBarComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemePhonemeGamePanelPhonemeGamePanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.rowSilaba {\n  margin-top: 88px;\n  margin-left: 197px;\n  margin-right: 190px;\n  width: 431px;\n  height: 176px;\n}\n\n.silaba {\n  width: 176px;\n  height: 176px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 65px;\n  line-height: 97px;\n  /* identical to box height */\n  color: #FFFFFF;\n}\n\n.imagen {\n  width: 177px;\n  height: 177px;\n}\n\n.rowBtn {\n  width: 51px;\n  height: 51px;\n}\n\n.btnPlay {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.row {\n  margin-top: 4px;\n  margin-left: 50px;\n  margin-right: 50px;\n  width: 705px;\n  height: 77px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUtZ2FtZS1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZVxccGhvbmVtZS1nYW1lLXBhbmVsXFxwaG9uZW1lLWdhbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWdhbWUtcGFuZWwvcGhvbmVtZS1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFHQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRko7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWdhbWUtcGFuZWwvcGhvbmVtZS1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIC8vbGVmdDogMjJweDtcclxuICAgIC8vdG9wOiA0N3B4OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcblxyXG4ucm93U2lsYWJhe1xyXG4gICAgbWFyZ2luLXRvcDogODhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTkwcHg7XHJcbiAgICB3aWR0aDogNDMxcHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG59XHJcbi5zaWxhYmF7XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZDRDI2MDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDk3cHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxufVxyXG4uaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgaGVpZ2h0OiAxNzdweDsgICAgXHJcbn1cclxuLnJvd0J0bntcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4OyAgICBcclxufVxyXG5cclxuLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREOyAgICAgXHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwNXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJvd1NpbGFiYSB7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcbiAgd2lkdGg6IDQzMXB4O1xuICBoZWlnaHQ6IDE3NnB4O1xufVxuXG4uc2lsYWJhIHtcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDk3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDE3N3B4O1xuICBoZWlnaHQ6IDE3N3B4O1xufVxuXG4ucm93QnRuIHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNTFweDtcbn1cblxuLmJ0blBsYXkge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgd2lkdGg6IDcwNXB4O1xuICBoZWlnaHQ6IDc3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PhonemeGamePanelComponent */

  /***/
  function srcAppComponentsPhonemePhonemeGamePanelPhonemeGamePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemeGamePanelComponent", function () {
      return PhonemeGamePanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PhonemeGamePanelComponent =
    /*#__PURE__*/
    function () {
      function PhonemeGamePanelComponent() {
        _classCallCheck(this, PhonemeGamePanelComponent);

        this.audio = new Audio();
      }

      _createClass(PhonemeGamePanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "playAudio",
        value: function playAudio(event) {
          this.audio.src = 'assets/audio/Mama.mp3';
          this.audio.load();
          this.audio.play();
          console.log(event.target.value);
        }
      }]);

      return PhonemeGamePanelComponent;
    }();

    PhonemeGamePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme-game-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme-game-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme-game-panel.component.scss */
      "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonemeGamePanelComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme/phoneme.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/phoneme/phoneme.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemePhonemeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFxwaG9uZW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUvcGhvbmVtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLnBhbmVse1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLmJhcntcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGhlaWdodDogNjIzcHg7ICAgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/phoneme/phoneme.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/phoneme/phoneme.component.ts ***!
    \*********************************************************/

  /*! exports provided: PhonemeComponent */

  /***/
  function srcAppComponentsPhonemePhonemeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonemeComponent", function () {
      return PhonemeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PhonemeComponent =
    /*#__PURE__*/
    function () {
      function PhonemeComponent() {
        _classCallCheck(this, PhonemeComponent);

        this.visibleVocal = true;
        this.visibleConsonant = false;
        this.visibleGame = false;
      }

      _createClass(PhonemeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectPanel",
        value: function selectPanel(value) {
          console.log(value);
          this.setVisible(value);
        }
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'vocales') {
            this.visibleVocal = true;
            this.visibleConsonant = false;
            this.visibleGame = false;
          }

          if (value === 'consonantes') {
            this.visibleVocal = false;
            this.visibleConsonant = true;
            this.visibleGame = false;
          }

          if (value === 'jugar') {
            this.visibleVocal = false;
            this.visibleConsonant = false;
            this.visibleGame = true;
          }
        }
      }]);

      return PhonemeComponent;
    }();

    PhonemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phoneme',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phoneme.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phoneme.component.scss */
      "./src/app/components/phoneme/phoneme.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonemeComponent);
    /***/
  },

  /***/
  "./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhonemeVocalPanelVocalPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.phonemeButton {\n  width: 159px;\n  height: 77px;\n  background: #7A84DD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 35px;\n  line-height: 52px;\n  text-transform: initial;\n  color: #FFFFFF;\n}\n\n.row {\n  margin-left: 91px;\n  margin-right: 92px;\n}\n\n.rowDebiles {\n  margin-left: 195px;\n  margin-right: 183px;\n}\n\n.grid {\n  margin-top: 218px;\n  left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3ZvY2FsLXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFx2b2NhbC1wYW5lbFxcdm9jYWwtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS92b2NhbC1wYW5lbC92b2NhbC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBR0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3ZvY2FsLXBhbmVsL3ZvY2FsLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIC8vbGVmdDogMjJweDtcclxuICAgIC8vdG9wOiA0N3B4OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5waG9uZW1lQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4OyAgICBcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgICBcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkycHg7XHJcbn1cclxuXHJcbi5yb3dEZWJpbGVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxODNweDtcclxufVxyXG4uZ3JpZHtcclxuICAgIG1hcmdpbi10b3A6IDIxOHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5waG9uZW1lQnV0dG9uIHtcbiAgd2lkdGg6IDE1OXB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA5MXB4O1xuICBtYXJnaW4tcmlnaHQ6IDkycHg7XG59XG5cbi5yb3dEZWJpbGVzIHtcbiAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4M3B4O1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDIxOHB4O1xuICBsZWZ0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts ***!
    \*************************************************************************/

  /*! exports provided: VocalPanelComponent */

  /***/
  function srcAppComponentsPhonemeVocalPanelVocalPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VocalPanelComponent", function () {
      return VocalPanelComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var VocalPanelComponent =
    /*#__PURE__*/
    function () {
      function VocalPanelComponent(navCtrl) {
        _classCallCheck(this, VocalPanelComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(VocalPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToPhoneme",
        value: function goToPhoneme(event) {
          console.log(event.target.value);
          this.value = event.target.value;
          this.navCtrl.navigateForward(['/fonema', this.value]);
        }
      }]);

      return VocalPanelComponent;
    }();

    VocalPanelComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    VocalPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vocal-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vocal-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vocal-panel.component.scss */
      "./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], VocalPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/list/list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/professor/list/list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  --background: transparent;\n  width: 600px;\n  height: 600px;\n  margin-top: 71px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.row {\n  text-align: center;\n  width: 600px;\n  height: 65px;\n  margin-bottom: 39px;\n}\n\n.btnEstudiante {\n  width: 574px;\n  height: 65px;\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvbGlzdC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc29yXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzFweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgICBcclxufVxyXG4ucHJpbmNpcGFsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOXB4O1xyXG59XHJcbi5idG5Fc3R1ZGlhbnRle1xyXG4gICAgd2lkdGg6IDU3NHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW4tdG9wOiA3MXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wcmluY2lwYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM5cHg7XG59XG5cbi5idG5Fc3R1ZGlhbnRlIHtcbiAgd2lkdGg6IDU3NHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/professor/list/list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/professor/list/list.component.ts ***!
    \*************************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsProfessorListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
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


    var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(studentService, router) {
        _classCallCheck(this, ListComponent);

        this.studentService = studentService;
        this.router = router;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNameStudents();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
          //Add '${implements OnChanges}' to the class.
          this.getNameStudents();
        }
      }, {
        key: "getNameStudents",
        value: function getNameStudents() {
          var _this2 = this;

          this.studentService.getNameStudents().then(function (nameStudent) {
            _this2.nameStudents = nameStudent;
          }).catch(function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getStudent",
        value: function getStudent(_idStudent) {
          this.router.navigate(['estudiantes'], {
            queryParams: {
              _id: _idStudent
            }
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ListComponent.prototype, "nombre", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/components/professor/list/list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ListComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/professor.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/professor/professor.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorProfessorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1081px;\n  height: 696px;\n}\n\n.panel {\n  left: 22px;\n  width: 574px;\n  height: 696px;\n}\n\n.bar {\n  width: 345px;\n  height: 696px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3NvclxccHJvZmVzc29yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9wcm9mZXNzb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcHJvZmVzc29yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMDgxcHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4O1xyXG59XHJcbi5wYW5lbHtcclxuICAgIGxlZnQ6IDIycHg7XHJcbiAgICB3aWR0aDogNTc0cHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4O1xyXG59XHJcbi5iYXJ7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4OyAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTA4MXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xufVxuXG4ucGFuZWwge1xuICBsZWZ0OiAyMnB4O1xuICB3aWR0aDogNTc0cHg7XG4gIGhlaWdodDogNjk2cHg7XG59XG5cbi5iYXIge1xuICB3aWR0aDogMzQ1cHg7XG4gIGhlaWdodDogNjk2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/professor/professor.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/professor/professor.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProfessorComponent */

  /***/
  function srcAppComponentsProfessorProfessorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function () {
      return ProfessorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfessorComponent =
    /*#__PURE__*/
    function () {
      function ProfessorComponent() {
        _classCallCheck(this, ProfessorComponent);

        this.visibleRegister = true;
        this.visibleList = false;
      }

      _createClass(ProfessorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectPanel",
        value: function selectPanel(value) {
          console.log(value);
          this.setVisible(value);
        }
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'agregar') {
            this.visibleRegister = true;
            this.visibleList = false;
          }

          if (value === 'lista') {
            this.visibleRegister = false;
            this.visibleList = true;
          }
        }
      }]);

      return ProfessorComponent;
    }();

    ProfessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/professor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professor.component.scss */
      "./src/app/components/professor/professor.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProfessorComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/register/register.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/professor/register/register.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 590px;\n  height: 664px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.label {\n  width: 393px;\n  height: 22px;\n  margin-left: 85px;\n  margin-right: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n\n.grid {\n  margin-left: 99px;\n  margin-right: 98px;\n  text-align: center;\n}\n\n.input {\n  width: 393px;\n  height: 38px;\n  background: #ECEEFD;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 2px;\n}\n\n.btnGuardar {\n  width: 127px;\n  height: 41px;\n  margin-left: 266px;\n  background: #5F659C;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcmVnaXN0ZXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3NvclxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDU5MHB4O1xyXG4gICAgaGVpZ2h0OiA2NjRweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7ICAgXHJcbn1cclxuLnByaW5jaXBhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGFiZWx7XHJcbiAgICB3aWR0aDogMzkzcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODVweDtcclxuICAgIG1hcmdpbi1yaWdodDogODVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbn1cclxuLmdyaWR7XHJcbiAgICBtYXJnaW4tbGVmdDogOTlweDtcclxuICAgIG1hcmdpbi1yaWdodDogOThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXR7XHJcbiAgICB3aWR0aDogMzkzcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7ICBcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgIFxyXG4gICAgLyogTm90ZTogYmFja2Ryb3AtZmlsdGVyIGhhcyBtaW5pbWFsIGJyb3dzZXIgc3VwcG9ydCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4OyAgICAgIFxyXG59XHJcbi5idG5HdWFyZGFye1xyXG4gICAgd2lkdGg6IDEyN3B4O1xyXG4gICAgaGVpZ2h0OiA0MXB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjY2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNUY2NTlDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogNTkwcHg7XG4gIGhlaWdodDogNjY0cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnByaW5jaXBhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwge1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XG4gIG1hcmdpbi1yaWdodDogODVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVGNjU5Qztcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogOTlweDtcbiAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAzOTNweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjRUNFRUZEO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgLyogTm90ZTogYmFja2Ryb3AtZmlsdGVyIGhhcyBtaW5pbWFsIGJyb3dzZXIgc3VwcG9ydCAqL1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5idG5HdWFyZGFyIHtcbiAgd2lkdGg6IDEyN3B4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNjZweDtcbiAgYmFja2dyb3VuZDogIzVGNjU5QztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/professor/register/register.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/professor/register/register.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsProfessorRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models/student */
    "./src/app/models/student.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(studentService, userService, router) {
        _classCallCheck(this, RegisterComponent);

        this.studentService = studentService;
        this.userService = userService;
        this.router = router;
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
          nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z áéíóú]*')])),
          edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(120)])),
          sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z áéíóú]*')])),
          encargadoLegal: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)])),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z áéíóú]*')]))
          })
        });
        this.validation_messages = {
          'nombre': [{
            type: 'required',
            message: 'Nombre es requerido'
          }, {
            type: 'minlength',
            message: 'Nombre debe ser de al menos 3 caracteres'
          }, {
            type: 'pattern',
            message: 'Su nombre debe contener solo letras'
          }],
          'edad': [{
            type: 'required',
            message: 'Edad es requerida'
          }, {
            type: 'min',
            message: 'Edad debe ser mayor de 0'
          }, {
            type: 'max',
            message: 'Edad debe ser menor de 120'
          }],
          'sexo': [{
            type: 'required',
            message: 'Sexo es requerido'
          }, {
            type: 'pattern',
            message: 'Su sexo debe contener solo letras'
          }],
          'encargado_direccion': [{
            type: 'required',
            message: 'Dirección es requerido'
          }, {
            type: 'minlength',
            message: 'Dirección debe ser de al menos 3 caracteres'
          }],
          'encargado_nombre': [{
            type: 'required',
            message: 'Nombre del encargado es requerido'
          }, {
            type: 'minlength',
            message: 'Nombre del encargado debe ser de al menos 3 caracteres'
          }, {
            type: 'pattern',
            message: 'El nombre del encargado debe contener solo letras'
          }],
          'email': [{
            type: 'required',
            message: 'Email es requerido'
          }, {
            type: 'pattern',
            message: 'El email debe contener el formato de un email'
          }],
          'password': [{
            type: 'required',
            message: 'Contraseña es requerida'
          }, {
            type: 'minlength',
            message: 'Contraseña debe ser de al menos 5 caracteres'
          }]
        };
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]))
        });
        this.newStudent = new _models_student__WEBPACK_IMPORTED_MODULE_4__["Student"]();
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this3 = this;

          this.newStudent = this.studentForm.value;
          this.newUser = this.userForm.value;
          delete this.newStudent._id;
          this.studentService.createStudent(this.newStudent).then(function (student) {
            console.log(student);
            delete _this3.newUser._id;
            _this3.newUser.tipo = "Estudiante";
            _this3.newUser.idUsuario = student._id;

            _this3.userService.createUser(_this3.newUser).then(function (userToken) {
              console.log(userToken);

              _this3.router.navigate(['estudiantes'], {
                queryParams: {
                  _id: student._id
                }
              });
            }).catch(function (err) {
              console.log("Error creando usuario", err);
            });
          }).catch(function (err) {
            console.log("Error creando estudiante", err);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "nombre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "edad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "genero", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "residencia", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "encargado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterComponent.prototype, "comando", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/components/professor/register/register.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/student-info/function-bar/function-bar.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/professor/student-info/function-bar/function-bar.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorStudentInfoFunctionBarFunctionBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 345px;\n  height: 696px;\n  background: #7A84DD;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 66px;\n  right: 66px;\n  top: 120px;\n}\n\n.titulo {\n  position: absolute;\n  width: 303px;\n  height: 72px;\n  left: 21px;\n  right: 21px;\n  top: 346px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 41px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 443px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 519px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2Z1bmN0aW9uLWJhci9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc29yXFxzdHVkZW50LWluZm9cXGZ1bmN0aW9uLWJhclxcZnVuY3Rpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vZnVuY3Rpb24tYmFyL2Z1bmN0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFFQSxjQUFBO0FDSEo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzc29yL3N0dWRlbnQtaW5mby9mdW5jdGlvbi1iYXIvZnVuY3Rpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNDVweDtcclxuICAgIGhlaWdodDogNjk2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG5cclxuIC5pbWFnZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBoZWlnaHQ6IDIxM3B4O1xyXG4gICAgbGVmdDogNjZweDtcclxuICAgIHJpZ2h0OiA2NnB4O1xyXG4gICAgdG9wOiAxMjBweDsgICAgXHJcbn1cclxuLnRpdHVsb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIHRvcDogMzQ2cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJ0bkNvbWFuZG8xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogNDQzcHg7ICBcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgXHJcbn1cclxuLmJ0bkNvbWFuZG8ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogNTE5cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM0NXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xuICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjEzcHg7XG4gIGhlaWdodDogMjEzcHg7XG4gIGxlZnQ6IDY2cHg7XG4gIHJpZ2h0OiA2NnB4O1xuICB0b3A6IDEyMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNzJweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIHRvcDogMzQ2cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQxcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuQ29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDNweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBsZWZ0OiAyMXB4O1xuICByaWdodDogMjFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNDQzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzVGNjU5Qztcbn1cblxuLmJ0bkNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDUxOXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/professor/student-info/function-bar/function-bar.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/professor/student-info/function-bar/function-bar.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: FunctionBarComponent */

  /***/
  function srcAppComponentsProfessorStudentInfoFunctionBarFunctionBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FunctionBarComponent", function () {
      return FunctionBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FunctionBarComponent =
    /*#__PURE__*/
    function () {
      function FunctionBarComponent() {
        _classCallCheck(this, FunctionBarComponent);

        this.functionBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FunctionBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {
          console.log(event.target.value);
          this.functionBarEvent.emit(event.target.value);
        }
      }, {
        key: "updateStudent",
        value: function updateStudent() {
          if (true) {
            this.updateStudentEvent.emit();
          }
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent() {
          if (true) {
            this.deleteStudentEvent.emit();
          }
        }
      }]);

      return FunctionBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FunctionBarComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FunctionBarComponent.prototype, "comando1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FunctionBarComponent.prototype, "comando2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FunctionBarComponent.prototype, "functionBarEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FunctionBarComponent.prototype, "deleteStudentEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FunctionBarComponent.prototype, "updateStudentEvent", void 0);
    FunctionBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-function-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./function-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./function-bar.component.scss */
      "./src/app/components/professor/student-info/function-bar/function-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FunctionBarComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/student-info/info-panel/info-panel.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/professor/student-info/info-panel/info-panel.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorStudentInfoInfoPanelInfoPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 705px;\n  height: 593px;\n}\n\n.titulo {\n  margin-left: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  /* identical to box height */\n  text-align: center;\n  color: #5F659C;\n}\n\n.info {\n  width: 705px;\n  height: 293px;\n  background: #ffffff;\n  border-radius: 20px;\n  margin-top: 56px;\n}\n\n.grid {\n  width: 317px;\n  height: 210px;\n  margin-top: 20px;\n}\n\n.infoFamilia {\n  width: 337px;\n  height: 262px;\n  margin-top: 38px;\n  background: #ffffff;\n  border-radius: 20px;\n}\n\n.infoAlimentos {\n  width: 337px;\n  height: 262px;\n  margin-top: 38px;\n  left: 11px;\n  background: #ffffff;\n  border-radius: 20px;\n}\n\n.list {\n  height: 210px;\n  width: 330px;\n  overflow-y: scroll;\n}\n\n.list::-webkit-scrollbar {\n  display: none;\n}\n\n.input {\n  background: #ECEEFD;\n  height: 29px;\n}\n\n.label {\n  width: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 22px;\n  color: #5F659C;\n}\n\n.inputInfoPersonal {\n  width: 225px;\n  height: 29px;\n  background: #ECEEFD;\n}\n\n.item {\n  width: 317px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3Nvclxcc3R1ZGVudC1pbmZvXFxpbmZvLXBhbmVsXFxpbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA3MDVweDtcclxuICAgIGhlaWdodDogNTkzcHg7ICAgICBcclxufVxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUY2NTlDICAgIFxyXG59XHJcbi5pbmZve1xyXG4gICAgd2lkdGg6IDcwNXB4O1xyXG4gICAgaGVpZ2h0OiAyOTNweDsgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICBcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcblxyXG59XHJcbi5ncmlke1xyXG4gICAgd2lkdGg6IDMxN3B4O1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmluZm9GYW1pbGlhe1xyXG4gICAgd2lkdGg6IDMzN3B4O1xyXG4gICAgaGVpZ2h0OiAyNjJweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4uaW5mb0FsaW1lbnRvc3tcclxuICAgIHdpZHRoOiAzMzdweDtcclxuICAgIGhlaWdodDogMjYycHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgIFxyXG59XHJcbi5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgd2lkdGg6IDkwcHg7IFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gICAgY29sb3I6ICM1RjY1OUM7XHJcbn1cclxuLmlucHV0SW5mb1BlcnNvbmFse1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VDRUVGRDsgICAgXHJcbn1cclxuLml0ZW17XHJcbiAgICB3aWR0aDogMzE3cHg7XHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDcwNXB4O1xuICBoZWlnaHQ6IDU5M3B4O1xufVxuXG4udGl0dWxvIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiA3MDVweDtcbiAgaGVpZ2h0OiAyOTNweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMzE3cHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbmZvRmFtaWxpYSB7XG4gIHdpZHRoOiAzMzdweDtcbiAgaGVpZ2h0OiAyNjJweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmluZm9BbGltZW50b3Mge1xuICB3aWR0aDogMzM3cHg7XG4gIGhlaWdodDogMjYycHg7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIGxlZnQ6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5saXN0IHtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XG4gIGhlaWdodDogMjlweDtcbn1cblxuLmxhYmVsIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5wdXRJbmZvUGVyc29uYWwge1xuICB3aWR0aDogMjI1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgYmFja2dyb3VuZDogI0VDRUVGRDtcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogMzE3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/professor/student-info/info-panel/info-panel.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/professor/student-info/info-panel/info-panel.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: InfoPanelComponent */

  /***/
  function srcAppComponentsProfessorStudentInfoInfoPanelInfoPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPanelComponent", function () {
      return InfoPanelComponent;
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


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _models_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../models/student */
    "./src/app/models/student.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/user.service */
    "./src/app/services/user.service.ts");

    var InfoPanelComponent =
    /*#__PURE__*/
    function () {
      function InfoPanelComponent(studentService, userService) {
        _classCallCheck(this, InfoPanelComponent);

        this.studentService = studentService;
        this.userService = userService;
        this.student = new _models_student__WEBPACK_IMPORTED_MODULE_3__["Student"]();
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
      }

      _createClass(InfoPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.studentService.getStudent(this._idStudent).then(function (student) {
            _this4.student = student;
            console.log(student);

            _this4.userService.getUserByIdStudent(student._id).then(function (user) {
              _this4.user = user;
              console.log(user);
            }).catch(function (err) {
              console.log(err);
            });
          }).catch(function (err) {
            console.log(err);
          });
        }
      }, {
        key: "prueba",
        value: function prueba() {
          console.log(this.student);
        }
      }, {
        key: "changeSelected",
        value: function changeSelected(alimento) {
          alimento.seleccionado = alimento.seleccionado == true ? false : true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this5 = this;

          //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
          //Add '${implements OnChanges}' to the class.
          console.log(this.student, this.user);

          if (this.boolEdit) {
            this.studentService.putStudent(this.student).then(function (message) {
              console.log(message);

              _this5.userService.putUser(_this5.user).then(function (message) {
                console.log(message);
                window.open("/docentes", "_self");
              }).catch(function (err) {
                console.log(err);
              });
            }).catch(function (err) {
              console.log(err);
            });
          }
        }
      }]);

      return InfoPanelComponent;
    }();

    InfoPanelComponent.ctorParameters = function () {
      return [{
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], InfoPanelComponent.prototype, "_idStudent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], InfoPanelComponent.prototype, "boolEdit", void 0);
    InfoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info-panel.component.scss */
      "./src/app/components/professor/student-info/info-panel/info-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])], InfoPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/student-info/student-info.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/professor/student-info/student-info.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorStudentInfoStudentInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1151px;\n  height: 696px;\n}\n\n.bar {\n  width: 345px;\n  height: 696px;\n}\n\n.panel {\n  width: 705px;\n  height: 593px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzb3JcXHN0dWRlbnQtaW5mb1xcc3R1ZGVudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vc3R1ZGVudC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQUNBLGFBQUE7QUNDSDs7QURDQTtFQUNHLFlBQUE7RUFDQSxhQUFBO0FDRUg7O0FEQ0E7RUFDRyxZQUFBO0VBQ0EsYUFBQTtBQ0VIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL3N0dWRlbnQtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgIHdpZHRoOiAxMTUxcHg7IFxyXG4gICBoZWlnaHQ6IDY5NnB4O1xyXG59XHJcbi5iYXJ7XHJcbiAgIHdpZHRoOiAzNDVweDtcclxuICAgaGVpZ2h0OiA2OTZweDsgXHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgd2lkdGg6IDcwNXB4O1xyXG4gICBoZWlnaHQ6IDU5M3B4OyBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTE1MXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDM0NXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xufVxuXG4ucGFuZWwge1xuICB3aWR0aDogNzA1cHg7XG4gIGhlaWdodDogNTkzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/professor/student-info/student-info.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/professor/student-info/student-info.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: StudentInfoComponent */

  /***/
  function srcAppComponentsProfessorStudentInfoStudentInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentInfoComponent", function () {
      return StudentInfoComponent;
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


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentInfoComponent =
    /*#__PURE__*/
    function () {
      function StudentInfoComponent(studentService, router) {
        _classCallCheck(this, StudentInfoComponent);

        this.studentService = studentService;
        this.router = router;
        this.boolEdit = false;
      }

      _createClass(StudentInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteStudent",
        value: function deleteStudent() {
          this.studentService.putDisableStudent(this._idStudent).then(function (message) {
            window.open('/docentes', '_self');
          }).catch(function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateStudent",
        value: function updateStudent() {
          this.boolEdit = true;
        }
      }]);

      return StudentInfoComponent;
    }();

    StudentInfoComponent.ctorParameters = function () {
      return [{
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentInfoComponent.prototype, "_idStudent", void 0);
    StudentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-info.component.scss */
      "./src/app/components/professor/student-info/student-info.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], StudentInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/professor/students-bar/students-bar.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/professor/students-bar/students-bar.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessorStudentsBarStudentsBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 345px;\n  height: 696px;\n  background: #7A84DD;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 66px;\n  right: 66px;\n  top: 120px;\n}\n\n.titulo {\n  position: absolute;\n  width: 303px;\n  height: 72px;\n  left: 21px;\n  right: 21px;\n  top: 346px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 41px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 443px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 519px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudHMtYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzb3JcXHN0dWRlbnRzLWJhclxcc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50cy1iYXIvc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUM7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudHMtYmFyL3N0dWRlbnRzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIH1cclxuXHJcbiAuaW1hZ2Vue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIxM3B4O1xyXG4gICAgaGVpZ2h0OiAyMTNweDtcclxuICAgIGxlZnQ6IDY2cHg7XHJcbiAgICByaWdodDogNjZweDtcclxuICAgIHRvcDogMTIwcHg7ICAgIFxyXG59XHJcbi50aXR1bG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzAzcHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBsZWZ0OiAyMXB4O1xyXG4gICAgcmlnaHQ6IDIxcHg7XHJcbiAgICB0b3A6IDM0NnB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5idG5Db21hbmRvMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDQ0M3B4OyAgXHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG59XHJcbi5idG5Db21hbmRvMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDUxOXB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNDVweDtcbiAgaGVpZ2h0OiA2OTZweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxM3B4O1xuICBoZWlnaHQ6IDIxM3B4O1xuICBsZWZ0OiA2NnB4O1xuICByaWdodDogNjZweDtcbiAgdG9wOiAxMjBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICB0b3A6IDM0NnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MXB4O1xuICBsaW5lLWhlaWdodDogNjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ0M3B4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MTlweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/professor/students-bar/students-bar.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/professor/students-bar/students-bar.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: StudentsBarComponent */

  /***/
  function srcAppComponentsProfessorStudentsBarStudentsBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsBarComponent", function () {
      return StudentsBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentsBarComponent =
    /*#__PURE__*/
    function () {
      function StudentsBarComponent() {
        _classCallCheck(this, StudentsBarComponent);

        this.studentsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(StudentsBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {
          console.log(event.target.value);
          this.studentsBarEvent.emit(event.target.value);
        }
      }]);

      return StudentsBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsBarComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsBarComponent.prototype, "comando1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentsBarComponent.prototype, "comando2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StudentsBarComponent.prototype, "studentsBarEvent", void 0);
    StudentsBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-students-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students-bar.component.scss */
      "./src/app/components/professor/students-bar/students-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StudentsBarComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/categories-panel/categories-panel.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/semantics/categories-panel/categories-panel.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsCategoriesPanelCategoriesPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 58px;\n  left: 20px;\n}\n\n.row {\n  margin-left: 60px;\n  margin-right: 53px;\n}\n\n.lastRow {\n  margin-left: 188px;\n  margin-right: 182px;\n}\n\n.phonemeButton {\n  width: 176px;\n  height: 85px;\n  background: #7A84DD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 36px;\n  text-transform: initial;\n  text-align: center;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvY2F0ZWdvcmllcy1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VtYW50aWNzXFxjYXRlZ29yaWVzLXBhbmVsXFxjYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9jYXRlZ29yaWVzLXBhbmVsL2NhdGVnb3JpZXMtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvY2F0ZWdvcmllcy1wYW5lbC9jYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbn1cclxuLmdyaWR7XHJcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUzcHg7XHJcbn1cclxuLmxhc3RSb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMTg4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4MnB4OyAgICBcclxufVxyXG4ucGhvbmVtZUJ1dHRvbntcclxuICAgIHdpZHRoOiAxNzZweDtcclxuICAgIGhlaWdodDogODVweDsgIFxyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgIFxyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgICAgICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tdG9wOiA1OHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNTNweDtcbn1cblxuLmxhc3RSb3cge1xuICBtYXJnaW4tbGVmdDogMTg4cHg7XG4gIG1hcmdpbi1yaWdodDogMTgycHg7XG59XG5cbi5waG9uZW1lQnV0dG9uIHtcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/semantics/categories-panel/categories-panel.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/semantics/categories-panel/categories-panel.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CategoriesPanelComponent */

  /***/
  function srcAppComponentsSemanticsCategoriesPanelCategoriesPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPanelComponent", function () {
      return CategoriesPanelComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CategoriesPanelComponent =
    /*#__PURE__*/
    function () {
      function CategoriesPanelComponent(navCtrl) {
        _classCallCheck(this, CategoriesPanelComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(CategoriesPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToCategories",
        value: function goToCategories($event) {
          this.navCtrl.navigateForward('/categoria');
        }
      }]);

      return CategoriesPanelComponent;
    }();

    CategoriesPanelComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CategoriesPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories-panel.component.scss */
      "./src/app/components/semantics/categories-panel/categories-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CategoriesPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/semantics-bar/semantics-bar.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/semantics/semantics-bar/semantics-bar.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsSemanticsBarSemanticsBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #52D7C6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 44px;\n  right: 45px;\n  top: 106px;\n}\n\n.titulo {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 319px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.titulo2 {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 369px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 442px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 503px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3Mvc2VtYW50aWNzLWJhci9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VtYW50aWNzXFxzZW1hbnRpY3MtYmFyXFxzZW1hbnRpY3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtYmFyL3NlbWFudGljcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDRFI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3NlbWFudGljcy1iYXIvc2VtYW50aWNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjIzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUyRDdDNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Vue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTNweDtcclxuICAgICAgICBsZWZ0OiA0NHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHRvcDogMTA2cHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMzE5cHg7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiAgICB9XHJcbiAgICAudGl0dWxvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMzY5cHg7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvMXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MDZweDsgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NjdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgICAgXHJcbiAgICB9XHJcbiAgICAuY29tYW5kbzN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTIwcHg7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgIFxyXG4gICAgfVxyXG4gICAgLmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgICAgICB0b3A6IDM5MnB4OyAgICAgXHJcbiAgICB9XHJcbiAgICAuYnRuQ29tYW5kbzF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNTlweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICByaWdodDogMjNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgICAgdG9wOiA0NDJweDsgIFxyXG5cclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICBcclxuICAgIH1cclxuICAgIC5idG5Db21hbmRvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0JDRkZGNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgICAgIHRvcDogNTAzcHg7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbiAgYmFja2dyb3VuZDogIzUyRDdDNjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxM3B4O1xuICBoZWlnaHQ6IDIxM3B4O1xuICBsZWZ0OiA0NHB4O1xuICByaWdodDogNDVweDtcbiAgdG9wOiAxMDZweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDIycHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDMxOXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdHVsbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjBweDtcbiAgdG9wOiAzNjlweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6ICNCQ0ZGRjc7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ0MnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MDNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/semantics/semantics-bar/semantics-bar.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/semantics/semantics-bar/semantics-bar.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SemanticsBarComponent */

  /***/
  function srcAppComponentsSemanticsSemanticsBarSemanticsBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SemanticsBarComponent", function () {
      return SemanticsBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SemanticsBarComponent =
    /*#__PURE__*/
    function () {
      function SemanticsBarComponent() {
        _classCallCheck(this, SemanticsBarComponent);

        this.semanticsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SemanticsBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPanel",
        value: function openPanel(event) {
          console.log(event.target.value);
          this.semanticsBarEvent.emit(event.target.value);
        }
      }]);

      return SemanticsBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SemanticsBarComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SemanticsBarComponent.prototype, "titulo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SemanticsBarComponent.prototype, "comando1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SemanticsBarComponent.prototype, "comando2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SemanticsBarComponent.prototype, "comando3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SemanticsBarComponent.prototype, "semanticsBarEvent", void 0);
    SemanticsBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-semantics-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./semantics-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-bar/semantics-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./semantics-bar.component.scss */
      "./src/app/components/semantics/semantics-bar/semantics-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SemanticsBarComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsSemanticsGamePanelSemanticsGamePanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 57px;\n  left: 56px;\n}\n\n.sujeto {\n  width: 230px;\n  height: 230px;\n  margin-left: auto;\n  background: url('black.svg');\n  background-size: auto;\n}\n\n.verbo {\n  width: 161px;\n  height: 161px;\n  margin-top: 34px;\n  margin-left: 42px;\n  margin-right: 43px;\n  background: url('red.svg');\n  background-size: auto;\n}\n\n.predicado {\n  width: 230px;\n  height: 230px;\n  margin-right: auto;\n  background: url('green.svg');\n  background-size: auto;\n}\n\n.element {\n  margin-left: auto;\n  margin-right: auto;\n  width: 176px;\n  height: 176px;\n  background: url('element.svg');\n  background-size: auto;\n}\n\n.options {\n  margin-top: 32px;\n}\n\n.palabras {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.semantica {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.imagen {\n  width: 161px;\n  height: 161px;\n}\n\n.example-box {\n  width: 161px;\n  height: 161px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 100px;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbWFudGljc1xcc2VtYW50aWNzLWdhbWUtcGFuZWxcXHNlbWFudGljcy1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9zZW1hbnRpY3MtZ2FtZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDT0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrREFBQTtFQUFBLHVEQUFBO0VBQ0EsK0dBQUE7QUNNSjs7QURERTtFQUNFLHFIQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9zZW1hbnRpY3MtZ2FtZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNTdweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbn1cclxuLnN1amV0b3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvYmxhY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbn1cclxuLnZlcmJve1xyXG4gICAgd2lkdGg6IDE2MXB4O1xyXG4gICAgaGVpZ2h0OiAxNjFweDtcclxuICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDNweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvcmVkLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ucHJlZGljYWRve1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87ICAgIFxyXG59XHJcbi5lbGVtZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ub3B0aW9uc3tcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLnBhbGFicmFze1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7IFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICMzQzNDM0M7ICAgIFxyXG59XHJcbi5zZW1hbnRpY2F7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDU3cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5zdWpldG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9ibGFjay5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbn1cblxuLnZlcmJvIHtcbiAgd2lkdGg6IDE2MXB4O1xuICBoZWlnaHQ6IDE2MXB4O1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA0M3B4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9yZWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5wcmVkaWNhZG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5lbGVtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuXG4ub3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWxhYnJhcyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzQzNDM0M7XG59XG5cbi5zZW1hbnRpY2Ege1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMTYxcHg7XG4gIGhlaWdodDogMTYxcHg7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAxNjFweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SemanticsGamePanelComponent */

  /***/
  function srcAppComponentsSemanticsSemanticsGamePanelSemanticsGamePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SemanticsGamePanelComponent", function () {
      return SemanticsGamePanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SemanticsGamePanelComponent =
    /*#__PURE__*/
    function () {
      function SemanticsGamePanelComponent() {
        _classCallCheck(this, SemanticsGamePanelComponent);

        this.q1 = [];
        this.q2 = [];
        this.q3 = [];
      }

      _createClass(SemanticsGamePanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SemanticsGamePanelComponent;
    }();

    SemanticsGamePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-semantics-game-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./semantics-game-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./semantics-game-panel.component.scss */
      "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SemanticsGamePanelComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/semantics.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/semantics/semantics.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsSemanticsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbWFudGljc1xcc2VtYW50aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREVJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ1I7O0FEQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3NlbWFudGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICB9XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgbGVmdDogMjJweDtcclxuICAgICAgICB3aWR0aDogODE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIH1cclxuICAgIC5iYXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjIzcHg7ICAgIFxyXG4gICAgfSBcclxuICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI2cHg7ICAgIFxyXG4gICAgICAgIH0gICBcclxuXHJcblxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDExNDJweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLnBhbmVsIHtcbiAgbGVmdDogMjJweDtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/semantics/semantics.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/semantics/semantics.component.ts ***!
    \*************************************************************/

  /*! exports provided: SemanticsComponent */

  /***/
  function srcAppComponentsSemanticsSemanticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SemanticsComponent", function () {
      return SemanticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SemanticsComponent =
    /*#__PURE__*/
    function () {
      function SemanticsComponent() {
        _classCallCheck(this, SemanticsComponent);

        this.visibleCategories = true;
        this.visibleGame = false;
      }

      _createClass(SemanticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectPanel",
        value: function selectPanel(value) {
          console.log(value);
          this.setVisible(value);
        }
      }, {
        key: "setVisible",
        value: function setVisible(value) {
          if (value === 'categorias') {
            this.visibleCategories = true;
            this.visibleGame = false;
          }

          if (value === 'jugar') {
            this.visibleCategories = false;
            this.visibleGame = true;
          }
        }
      }]);

      return SemanticsComponent;
    }();

    SemanticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-semantics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./semantics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./semantics.component.scss */
      "./src/app/components/semantics/semantics.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SemanticsComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsSubcategoriesSubcategoriesBarSubcategoriesBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy1iYXIvc3ViY2F0ZWdvcmllcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: SubcategoriesBarComponent */

  /***/
  function srcAppComponentsSemanticsSubcategoriesSubcategoriesBarSubcategoriesBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcategoriesBarComponent", function () {
      return SubcategoriesBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubcategoriesBarComponent =
    /*#__PURE__*/
    function () {
      function SubcategoriesBarComponent() {
        _classCallCheck(this, SubcategoriesBarComponent);
      }

      _createClass(SubcategoriesBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubcategoriesBarComponent;
    }();

    SubcategoriesBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subcategories-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subcategories-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subcategories-bar.component.scss */
      "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SubcategoriesBarComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsSubcategoriesSubcategoriesPanelSubcategoriesPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy1wYW5lbC9zdWJjYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: SubcategoriesPanelComponent */

  /***/
  function srcAppComponentsSemanticsSubcategoriesSubcategoriesPanelSubcategoriesPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcategoriesPanelComponent", function () {
      return SubcategoriesPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubcategoriesPanelComponent =
    /*#__PURE__*/
    function () {
      function SubcategoriesPanelComponent() {
        _classCallCheck(this, SubcategoriesPanelComponent);
      }

      _createClass(SubcategoriesPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubcategoriesPanelComponent;
    }();

    SubcategoriesPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subcategories-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subcategories-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subcategories-panel.component.scss */
      "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SubcategoriesPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/semantics/subcategories/subcategories.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/semantics/subcategories/subcategories.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSemanticsSubcategoriesSubcategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/semantics/subcategories/subcategories.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/semantics/subcategories/subcategories.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SubcategoriesComponent */

  /***/
  function srcAppComponentsSemanticsSubcategoriesSubcategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcategoriesComponent", function () {
      return SubcategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubcategoriesComponent =
    /*#__PURE__*/
    function () {
      function SubcategoriesComponent() {
        _classCallCheck(this, SubcategoriesComponent);
      }

      _createClass(SubcategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubcategoriesComponent;
    }();

    SubcategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subcategories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subcategories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subcategories.component.scss */
      "./src/app/components/semantics/subcategories/subcategories.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SubcategoriesComponent);
    /***/
  },

  /***/
  "./src/app/models/student.ts":
  /*!***********************************!*\
    !*** ./src/app/models/student.ts ***!
    \***********************************/

  /*! exports provided: MiembrosFamilia, Alimentos, Student */

  /***/
  function srcAppModelsStudentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiembrosFamilia", function () {
      return MiembrosFamilia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alimentos", function () {
      return Alimentos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Student", function () {
      return Student;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EncargadoLegal = function EncargadoLegal() {
      var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var profesion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var telefono = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var direccion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

      _classCallCheck(this, EncargadoLegal);

      this.nombre = nombre;
      this.profesion = profesion;
      this.telefono = telefono;
      this.direccion = direccion;
    };

    var MiembrosFamilia = function MiembrosFamilia() {
      var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var relacion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      _classCallCheck(this, MiembrosFamilia);

      this.nombre = nombre;
      this.relacion = relacion;
    };

    var Alimentos = function Alimentos() {
      var alimento = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var seleccionado = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, Alimentos);

      this.alimento = alimento;
      this.seleccionado = seleccionado;
    };

    var Student = function Student() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var nombre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var cedula = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var sexo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var edad = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var encargadoLegal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new EncargadoLegal();
      var familia = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
      var alimentacion = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];

      _classCallCheck(this, Student);

      this._id = _id;
      this.nombre = nombre;
      this.cedula = cedula;
      this.sexo = sexo;
      this.edad = edad;
      this.encargadoLegal = encargadoLegal;
      this.familia = familia;
      this.alimentacion = alimentacion;
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var idUsuario = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var password = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var tipo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

      _classCallCheck(this, User);

      this._id = _id;
      this.idUsuario = idUsuario;
      this.email = email;
      this.password = password;
      this.tipo = tipo;
    };
    /***/

  },

  /***/
  "./src/app/models/video-selected.ts":
  /*!******************************************!*\
    !*** ./src/app/models/video-selected.ts ***!
    \******************************************/

  /*! exports provided: VideoSelected */

  /***/
  function srcAppModelsVideoSelectedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoSelected", function () {
      return VideoSelected;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VideoSelected = function VideoSelected() {
      var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var imagen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var duracion = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var reproduciendo = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      _classCallCheck(this, VideoSelected);

      this.nombre = nombre;
      this.video = video;
      this.imagen = imagen;
      this.mensaje = mensaje;
      this.duracion = duracion;
      this.reproduciendo = reproduciendo;
    };
    /***/

  },

  /***/
  "./src/app/services/student.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/student.service.ts ***!
    \*********************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServicesStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var StudentService =
    /*#__PURE__*/
    function () {
      function StudentService(http) {
        _classCallCheck(this, StudentService);

        this.http = http;
        this.URL_API = 'http://localhost:3000/api/students';
      }

      _createClass(StudentService, [{
        key: "createStudent",
        value: function createStudent(student) {
          return this.http.post(this.URL_API, student, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          }).toPromise();
        }
      }, {
        key: "getStudent",
        value: function getStudent(_id) {
          return this.http.get(this.URL_API + "/".concat(_id), {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          }).toPromise();
        }
      }, {
        key: "getNameStudents",
        value: function getNameStudents() {
          return this.http.get(this.URL_API + '/names', {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          }).toPromise();
        }
      }, {
        key: "putDisableStudent",
        value: function putDisableStudent(_id) {
          return this.http.put(this.URL_API + '/disable', {
            _id: _id
          }, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          }).toPromise();
        }
      }, {
        key: "putStudent",
        value: function putStudent(student) {
          return this.http.put(this.URL_API, student, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          }).toPromise();
        }
      }]);

      return StudentService;
    }();

    StudentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], StudentService);
    /***/
  },

  /***/
  "./src/data/audio/fonemas/consonantes/data.consonantes.ts":
  /*!****************************************************************!*\
    !*** ./src/data/audio/fonemas/consonantes/data.consonantes.ts ***!
    \****************************************************************/

  /*! exports provided: CONSONANTES */

  /***/
  function srcDataAudioFonemasConsonantesDataConsonantesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONSONANTES", function () {
      return CONSONANTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CONSONANTES = [// Consonante B
    {
      consonante: 'b',
      data: [{
        nombre: 'Ba-na-no',
        audio: 'assets/audio/fonemas/consonantes/b/Banano.mp3',
        imagen: 'assets/img/fonemas/consonantes/b/Banano.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ba-su-ra',
        audio: 'assets/audio/fonemas/consonantes/b/Basura.mp3',
        imagen: 'assets/img/fonemas/consonantes/b/Basura.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bi-ci-cle-ta',
        audio: 'assets/audio/fonemas/consonantes/b/Bicicleta.mp3',
        imagen: 'assets/img/fonemas/consonantes/b/Bicicleta.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bom-be-ro',
        audio: 'assets/audio/fonemas/consonantes/b/Bombero.mp3',
        imagen: 'assets/img/fonemas/consonantes/b/Bombero.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bo-rra-dor',
        audio: 'assets/audio/fonemas/consonantes/b/Borrador.mp3',
        imagen: 'assets/img/fonemas/consonantes/b/Borrador.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bo-tón',
        audio: 'assets/audio/fonemas/consonantes/b/Botón.mp3',
        imagen: 'assets/img/fonemas/consonantes/b/Botón.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Ba',
        audio: 'assets/audio/fonemas/silabas/b/Ba.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Be',
        audio: 'assets/audio/fonemas/silabas/b/Be.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bi',
        audio: 'assets/audio/fonemas/silabas/b/Bi.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bo',
        audio: 'assets/audio/fonemas/silabas/b/Bo.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Bu',
        audio: 'assets/audio/fonemas/silabas/b/Bu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante Ch
    {
      consonante: 'ch',
      data: [{
        nombre: 'Chu-rros',
        audio: 'assets/audio/fonemas/consonantes/ch/churros.mp3',
        imagen: 'assets/img/fonemas/consonantes/ch/churros.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Cha',
        audio: 'assets/audio/fonemas/silabas/ch/Cha.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Che',
        audio: 'assets/audio/fonemas/silabas/ch/Che.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Chi',
        audio: 'assets/audio/fonemas/silabas/ch/Chi.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Cho',
        audio: 'assets/audio/fonemas/silabas/ch/Cho.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Chu',
        audio: 'assets/audio/fonemas/silabas/ch/Cha.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante D
    {
      consonante: 'd',
      data: [{
        nombre: 'Del-fín',
        audio: 'assets/audio/fonemas/consonantes/d/Delfín.mp3',
        imagen: 'assets/img/fonemas/consonantes/d/Delfín.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'De-por-tes',
        audio: 'assets/audio/fonemas/consonantes/d/Deportes.mp3',
        imagen: 'assets/img/fonemas/consonantes/d/Deportes.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Di-bu-jo',
        audio: 'assets/audio/fonemas/consonantes/d/Dibujo.mp3',
        imagen: 'assets/img/fonemas/consonantes/d/Dibujo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Dien-tes',
        audio: 'assets/audio/fonemas/consonantes/d/Dientes.mp3',
        imagen: 'assets/img/fonemas/consonantes/d/Dientes.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Da',
        audio: 'assets/audio/fonemas/silabas/d/Da.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'De',
        audio: 'assets/audio/fonemas/silabas/d/De.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Di',
        audio: 'assets/audio/fonemas/silabas/d/Di.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Do',
        audio: 'assets/audio/fonemas/silabas/d/Do.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Du',
        audio: 'assets/audio/fonemas/silabas/d/Du.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante F
    {
      consonante: 'f',
      data: [{
        nombre: 'Fa-mi-lia',
        audio: 'assets/audio/fonemas/consonantes/f/Familia.mp3',
        imagen: 'assets/img/fonemas/consonantes/f/Familia.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Fies-ta',
        audio: 'assets/audio/fonemas/consonantes/f/Fiesta.mp3',
        imagen: 'assets/img/fonemas/consonantes/f/Fiesta.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Fan-tas-ma',
        audio: 'assets/audio/fonemas/consonantes/f/Fantasma.mp3',
        imagen: 'assets/img/fonemas/consonantes/f/Fantasma.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Flo-res',
        audio: 'assets/audio/fonemas/consonantes/f/Flores.mp3',
        imagen: 'assets/img/fonemas/consonantes/f/Flores.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Fa',
        audio: 'assets/audio/fonemas/silabas/f/Fa.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Fe',
        audio: 'assets/audio/fonemas/silabas/f/Fe.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Fi',
        audio: 'assets/audio/fonemas/silabas/f/Fi.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Fo',
        audio: 'assets/audio/fonemas/silabas/f/Fo.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Fu',
        audio: 'assets/audio/fonemas/silabas/f/Fu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante G
    {
      consonante: 'g',
      data: [{
        nombre: 'Ga-ve-ta',
        audio: 'assets/audio/fonemas/consonantes/g/Gaveta.mp3',
        imagen: 'assets/img/fonemas/consonantes/g/Gaveta.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Go-rra',
        audio: 'assets/audio/fonemas/consonantes/g/Gorra.mp3',
        imagen: 'assets/img/fonemas/consonantes/g/Gorra.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Ga',
        audio: 'assets/audio/fonemas/silabas/g/Ga.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Gue',
        audio: 'assets/audio/fonemas/silabas/g/Gue.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Gui',
        audio: 'assets/audio/fonemas/silabas/g/Gui.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Go',
        audio: 'assets/audio/fonemas/silabas/g/Go.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Gu',
        audio: 'assets/audio/fonemas/silabas/g/Gu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante J
    {
      consonante: 'j',
      data: [{
        nombre: 'Ja-rra',
        audio: 'assets/audio/fonemas/consonantes/j/jarra.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/jarra.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Je-fe',
        audio: 'assets/audio/fonemas/consonantes/j/jefe.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/jefe.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ji-ne-te',
        audio: 'assets/audio/fonemas/consonantes/j/jinete.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/jinete.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ji-ra-fa',
        audio: 'assets/audio/fonemas/consonantes/j/jirafa.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/jirafa.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Jo-ya',
        audio: 'assets/audio/fonemas/consonantes/j/joya.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/joya.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Jue-go',
        audio: 'assets/audio/fonemas/consonantes/j/juego.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/juego.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ju-go',
        audio: 'assets/audio/fonemas/consonantes/j/jugo.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/jugo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ju-gue-te',
        audio: 'assets/audio/fonemas/consonantes/j/juguete.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/juguete.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ju-gue-tes',
        audio: 'assets/audio/fonemas/consonantes/j/juguetes.mp3',
        imagen: 'assets/img/fonemas/consonantes/j/juguetes.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Ja',
        audio: 'assets/audio/fonemas/silabas/j/Ja.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Je',
        audio: 'assets/audio/fonemas/silabas/j/Je.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ji',
        audio: 'assets/audio/fonemas/silabas/j/Ji.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Jo',
        audio: 'assets/audio/fonemas/silabas/j/Jo.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ju',
        audio: 'assets/audio/fonemas/silabas/j/Ju.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante L
    {
      consonante: 'l',
      data: [{
        nombre: 'La-gar-ti-ja',
        audio: 'assets/audio/fonemas/consonantes/l/Lagartija.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lagartija.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'La-go',
        audio: 'assets/audio/fonemas/consonantes/l/Lago.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lago.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'La-gu-na',
        audio: 'assets/audio/fonemas/consonantes/l/Laguna.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Laguna.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lám-pa-ra',
        audio: 'assets/audio/fonemas/consonantes/l/Lampara.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lampara.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'La-pa',
        audio: 'assets/audio/fonemas/consonantes/l/Lapa.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lapa.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lá-pi-ces',
        audio: 'assets/audio/fonemas/consonantes/l/Lapices.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lapices.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lá-piz',
        audio: 'assets/audio/fonemas/consonantes/l/Lapiz.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lapiz.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'La-ta',
        audio: 'assets/audio/fonemas/consonantes/l/Lata.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lata.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'La-zo',
        audio: 'assets/audio/fonemas/consonantes/l/Lazo.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lazo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Le-che',
        audio: 'assets/audio/fonemas/consonantes/l/Leche.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Leche.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Le-chu-za',
        audio: 'assets/audio/fonemas/consonantes/l/Lechuza.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lechuza.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Le-gos',
        audio: 'assets/audio/fonemas/consonantes/l/Legos.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Legos.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Le-ña',
        audio: 'assets/audio/fonemas/consonantes/l/Leña.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Leña.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Le-ón',
        audio: 'assets/audio/fonemas/consonantes/l/León.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/León.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lo-bo',
        audio: 'assets/audio/fonemas/consonantes/l/Lobo.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lobo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lo-co-mo-to-ra',
        audio: 'assets/audio/fonemas/consonantes/l/Locotora.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Locomotora.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lo-ma',
        audio: 'assets/audio/fonemas/consonantes/l/Loma.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Loma.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lo-ra',
        audio: 'assets/audio/fonemas/consonantes/l/Lora.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lora.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lo-ro',
        audio: 'assets/audio/fonemas/consonantes/l/Loro.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Loro.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lu-ciér-na-ga',
        audio: 'assets/audio/fonemas/consonantes/l/Luciernaga.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Luciernaga.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lu-na',
        audio: 'assets/audio/fonemas/consonantes/l/Luna.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Luna.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lu-na-res',
        audio: 'assets/audio/fonemas/consonantes/l/Lunares.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lunares.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lu-pi-ta',
        audio: 'assets/audio/fonemas/consonantes/l/Lupita.mp3',
        imagen: 'assets/img/fonemas/consonantes/l/Lupita.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'La',
        audio: 'assets/audio/fonemas/silabas/l/La.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Le',
        audio: 'assets/audio/fonemas/silabas/l/Le.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Li',
        audio: 'assets/audio/fonemas/silabas/l/Li.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lo',
        audio: 'assets/audio/fonemas/silabas/l/Lo.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Lu',
        audio: 'assets/audio/fonemas/silabas/l/Lu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante M
    {
      consonante: 'm',
      data: [{
        nombre: 'Ma-che-te',
        audio: 'assets/audio/fonemas/consonantes/m/Machete.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Machete.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-dri-na',
        audio: 'assets/audio/fonemas/consonantes/m/Madrina.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Madrina.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-es-tra',
        audio: 'assets/audio/fonemas/consonantes/m/Maestra.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Maestra.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-go',
        audio: 'assets/audio/fonemas/consonantes/m/Mago.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mago.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-le-ta',
        audio: 'assets/audio/fonemas/consonantes/m/Maleta.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Maleta.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-má',
        audio: 'assets/audio/fonemas/consonantes/m/Mama.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mama.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Man-da-ri-na',
        audio: 'assets/audio/fonemas/consonantes/m/Mandarina.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mandarina.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Man-go',
        audio: 'assets/audio/fonemas/consonantes/m/Mango.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mango.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Man-gue-ra',
        audio: 'assets/audio/fonemas/consonantes/m/Manguera.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Manguera.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-ní',
        audio: 'assets/audio/fonemas/consonantes/m/Maní.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Maní.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Man-tel',
        audio: 'assets/audio/fonemas/consonantes/m/Mantel.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mantel.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Man-te-qui-lla',
        audio: 'assets/audio/fonemas/consonantes/m/Mantequilla.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mantequilla.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ma-ña-na',
        audio: 'assets/audio/fonemas/consonantes/m/Mañana.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Mañana.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Man-za-nas',
        audio: 'assets/audio/fonemas/consonantes/m/Manzanas.mp3',
        imagen: 'assets/img/fonemas/consonantes/m/Manzanas.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Ma',
        audio: 'assets/audio/fonemas/silabas/m/Ma.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Me',
        audio: 'assets/audio/fonemas/silabas/m/Me.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Mi',
        audio: 'assets/audio/fonemas/silabas/m/Mi.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Mo',
        audio: 'assets/audio/fonemas/silabas/m/Mo.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Mu',
        audio: 'assets/audio/fonemas/silabas/m/Mu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante N
    {
      consonante: 'n',
      data: [{
        nombre: 'Na-chos',
        audio: 'assets/audio/fonemas/consonantes/n/Nachos.mp3',
        imagen: 'assets/img/fonemas/consonantes/n/Nachos.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Na-chos',
        audio: 'assets/audio/fonemas/consonantes/n/Nachos.mp3',
        imagen: 'assets/img/fonemas/consonantes/n/Nachos.jpg',
        duracion: 4,
        reproduciendo: false
      }],
      dataS: [{
        nombre: 'Na',
        audio: 'assets/audio/fonemas/silabas/n/na.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ne',
        audio: 'assets/audio/fonemas/silabas/n/ne.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ni',
        audio: 'assets/audio/fonemas/silabas/n/Ni.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'No',
        audio: 'assets/audio/fonemas/silabas/n/No.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Nu',
        audio: 'assets/audio/fonemas/silabas/n/Nu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Consonante Ñ
    {
      consonante: 'ñ',
      data: [],
      dataS: [{
        nombre: 'Ña',
        audio: 'assets/audio/fonemas/silabas/ñ/Ña.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ñe',
        audio: 'assets/audio/fonemas/silabas/ñ/Ñe.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ñi',
        audio: 'assets/audio/fonemas/silabas/ñ/Ñi.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ño',
        audio: 'assets/audio/fonemas/silabas/ñ/Ño.mp3',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ñu',
        audio: 'assets/audio/fonemas/silabas/ñ/Ñu.mp3',
        duracion: 4,
        reproduciendo: false
      }]
    }];
    /***/
  },

  /***/
  "./src/data/audio/fonemas/vocales/data.vocales.ts":
  /*!********************************************************!*\
    !*** ./src/data/audio/fonemas/vocales/data.vocales.ts ***!
    \********************************************************/

  /*! exports provided: VOCALES */

  /***/
  function srcDataAudioFonemasVocalesDataVocalesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOCALES", function () {
      return VOCALES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VOCALES = [// Vocal A
    {
      vocal: 'a',
      data: [{
        nombre: 'Abrigo',
        audio: 'assets/audio/fonemas/vocales/a/abrigo.mp3',
        imagen: 'assets/img/fonemas/vocales/a/abrigo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Agua',
        audio: 'assets/audio/fonemas/vocales/a/agua.mp3',
        imagen: 'assets/img/fonemas/vocales/a/agua.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Águila',
        audio: 'assets/audio/fonemas/vocales/a/aguila.mp3',
        imagen: 'assets/img/fonemas/vocales/a/aguila.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Algas',
        audio: 'assets/audio/fonemas/vocales/a/algas.mp3',
        imagen: 'assets/img/fonemas/vocales/a/algas.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Algodón',
        audio: 'assets/audio/fonemas/vocales/a/algodón.mp3',
        imagen: 'assets/img/fonemas/vocales/a/algodon.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Almendras',
        audio: 'assets/audio/fonemas/vocales/a/almendras.mp3',
        imagen: 'assets/img/fonemas/vocales/a/almendras.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Amigos',
        audio: 'assets/audio/fonemas/vocales/a/amigos.mp3',
        imagen: 'assets/img/fonemas/vocales/a/amigos.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Arbol',
        audio: 'assets/audio/fonemas/vocales/a/arbol.mp3',
        imagen: 'assets/img/fonemas/vocales/a/arbol.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Ardilla',
        audio: 'assets/audio/fonemas/vocales/a/ardilla.mp3',
        imagen: 'assets/img/fonemas/vocales/a/ardilla.jpg',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Vocal E
    {
      vocal: 'e',
      data: [{
        nombre: 'Enano',
        audio: 'assets/audio/fonemas/vocales/e/enano.mp3',
        imagen: 'assets/img/fonemas/vocales/e/enano.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Escamas',
        audio: 'assets/audio/fonemas/vocales/e/escamas.mp3',
        imagen: 'assets/img/fonemas/vocales/e/escamas.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Escudo',
        audio: 'assets/audio/fonemas/vocales/e/escudo.mp3',
        imagen: 'assets/img/fonemas/vocales/e/escudi.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Espada',
        audio: 'assets/audio/fonemas/vocales/e/espada.mp3',
        imagen: 'assets/img/fonemas/vocales/e/espada.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Espárrago',
        audio: 'assets/audio/fonemas/vocales/e/esparrago.mp3',
        imagen: 'assets/img/fonemas/vocales/e/esparrago.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Espejo',
        audio: 'assets/audio/fonemas/vocales/e/espejo.mp3',
        imagen: 'assets/img/fonemas/vocales/e/espejo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Espinaca',
        audio: 'assets/audio/fonemas/vocales/e/espinaca.mp3',
        imagen: 'assets/img/fonemas/vocales/e/espinaca.jpg',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Vocal I
    {
      vocal: 'i',
      data: [{
        nombre: 'Idea',
        audio: 'assets/audio/fonemas/vocales/i/idea.mp3',
        imagen: 'assets/img/fonemas/vocales/i/idea.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Incendio',
        audio: 'assets/audio/fonemas/vocales/i/incendio.mp3',
        imagen: 'assets/img/fonemas/vocales/i/incendio.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Insecto',
        audio: 'assets/audio/fonemas/vocales/i/insecto.mp3',
        imagen: 'assets/img/fonemas/vocales/i/insecto.jpg',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Vocal O
    {
      vocal: 'o',
      data: [{
        nombre: 'Ocho',
        audio: 'assets/audio/fonemas/vocales/o/ocho.mp3',
        imagen: 'assets/img/fonemas/vocales/o/ocho.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Olla',
        audio: 'assets/audio/fonemas/vocales/o/olla.mp3',
        imagen: 'assets/img/fonemas/vocales/o/olla.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Oro',
        audio: 'assets/audio/fonemas/vocales/o/oro.mp3',
        imagen: 'assets/img/fonemas/vocales/o/oro.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Oruga',
        audio: 'assets/audio/fonemas/vocales/o/oruga.mp3',
        imagen: 'assets/img/fonemas/vocales/o/oruga.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Oso',
        audio: 'assets/audio/fonemas/vocales/o/oso.mp3',
        imagen: 'assets/img/fonemas/vocales/o/oso.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Otto',
        audio: 'assets/audio/fonemas/vocales/o/otto.mp3',
        imagen: 'assets/img/fonemas/vocales/o/otto.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Oveja',
        audio: 'assets/audio/fonemas/vocales/o/oveja.mp3',
        imagen: 'assets/img/fonemas/vocales/o/oveja.jpg',
        duracion: 4,
        reproduciendo: false
      }]
    }, // Vocal U
    {
      vocal: 'u',
      data: [{
        nombre: 'Unicornio',
        audio: 'assets/audio/fonemas/vocales/u/unicornio.mp3',
        imagen: 'assets/img/fonemas/vocales/u/unicornio.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Uniforme',
        audio: 'assets/audio/fonemas/vocales/u/uniforme.mp3',
        imagen: 'assets/img/fonemas/vocales/u/uniforme.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Universo',
        audio: 'assets/audio/fonemas/vocales/u/universo.mp3',
        imagen: 'assets/img/fonemas/vocales/u/universo.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Uno',
        audio: 'assets/audio/fonemas/vocales/u/uno.mp3',
        imagen: 'assets/img/fonemas/vocales/u/uno.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Uña',
        audio: 'assets/audio/fonemas/vocales/u/uña.mp3',
        imagen: 'assets/img/fonemas/vocales/u/uña.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Urna',
        audio: 'assets/audio/fonemas/vocales/u/urna.mp3',
        imagen: 'assets/img/fonemas/vocales/u/urna.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Urraca',
        audio: 'assets/audio/fonemas/vocales/u/urraca.mp3',
        imagen: 'assets/img/fonemas/vocales/u/urraca.jpg',
        duracion: 4,
        reproduciendo: false
      }, {
        nombre: 'Útiles',
        audio: 'assets/audio/fonemas/vocales/u/unicornio.mp3',
        imagen: 'assets/img/fonemas/vocales/u/unicornio.jpg',
        duracion: 4,
        reproduciendo: false
      }]
    }];
    /***/
  },

  /***/
  "./src/data/categorias/data.subcategorias.ts":
  /*!***************************************************!*\
    !*** ./src/data/categorias/data.subcategorias.ts ***!
    \***************************************************/

  /*! exports provided: SUBCATEGORIAS */

  /***/
  function srcDataCategoriasDataSubcategoriasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SUBCATEGORIAS", function () {
      return SUBCATEGORIAS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SUBCATEGORIAS = [{
      nombre: 'Imagen de mí mismo',
      data: [{
        sujeto: 'Este',
        verbo: ' soy',
        predicado: 'yo',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/imagen/Yo.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'me llamo',
        predicado: 'Nombre',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/imagen/Nombre.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'vivo',
        predicado: 'Lugar',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/imagen/Lugar.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'estoy',
        predicado: ' en el Centro de Apoyos Hospital Calderón Guardia',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/imagen/Centro.jpg'
      }]
    }, {
      nombre: 'Partes del Cuerpo',
      data: [{
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'cabeza',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cabeza.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'pelo',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pelo.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'frente',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Frente.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'mejillas',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Mejillas.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'ojos',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Ojos.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'cejas',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cejas.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'pestaña',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pestaña.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'nariz',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cabeza.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'boca',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Boca.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'dientes',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Dientes.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'lengua',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Lengua.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'labios',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Labios.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'barbilla',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Barbilla.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'orejas',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Orejas.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'cuello',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cuello.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'nuca',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Nuca.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'espalda',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Espalda.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'hombros',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Hombros.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'estómago',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Estómago.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'brazos',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Brazos.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'codos',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Codos.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'manos',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Manos.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'dedos',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Dedos.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'uñas',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Uñas.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'cintura',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cintura.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'piernas',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Piernas.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'rodillas',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Rodillas.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'tobillos',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Tobillos.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'talones',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Talones.jpg'
      }, {
        sujeto: 'Yo',
        verbo: 'tengo',
        predicado: 'pies',
        imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pies.jpg'
      }]
    }, {
      nombre: 'Familia',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Frutas',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Vegetales',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Alimentos Salados',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Alimentos Dulces',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Bebidas',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Animales de la Granja',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Animales Domésticos',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Animales Salvajes',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Juguetes',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Ropa de Hombre',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Ropa de Mujer',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Ropa Interior',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Partes de la Casa',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Medios de Transporte',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Servidores de la Comunidad',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }, {
      nombre: 'Instrumentos Musicales',
      data: [{
        sujeto: '',
        verbo: '',
        predicado: '',
        imagenSujeto: '',
        imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
        imagenPredicado: ''
      }]
    }];
    /***/
  },

  /***/
  "./src/data/data.videos.ts":
  /*!*********************************!*\
    !*** ./src/data/data.videos.ts ***!
    \*********************************/

  /*! exports provided: VIDEOS */

  /***/
  function srcDataDataVideosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIDEOS", function () {
      return VIDEOS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VIDEOS = [{
      nombre: 'a',
      video: 'assets/video/fonemas/vidFonA.mp4',
      imagen: 'assets/img/fonemaA.svg',
      mensaje: 'Aaaaaaaa (Sirena de ambulancia)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'b',
      video: 'assets/video/fonemas/vidFonB.mp4',
      imagen: 'assets/img/fonemaB.svg',
      mensaje: 'Beeeee Beeeee (Oveja)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'c',
      video: 'assets/video/fonemas/vidFonC.mp4',
      imagen: 'assets/img/fonemaC.svg',
      mensaje: 'Cuac Cuac Cuac (Pato)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'ch',
      video: 'assets/video/fonemas/vidFonCh.mp4',
      imagen: 'assets/img/fonemaCh.svg',
      mensaje: 'Chuuuu Chuuu Chuuu (Trencito)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'd',
      video: 'assets/video/fonemas/vidFonD.mp4',
      imagen: 'assets/img/fonemaD.svg',
      mensaje: 'Dddddddddd (Abejas cerca de panal)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'e',
      video: 'assets/video/fonemas/vidFonE.mp4',
      imagen: 'assets/img/fonemaE.svg',
      mensaje: 'Ehhh Ehhh Ehhh (Alegría)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'f',
      video: 'assets/video/fonemas/vidFonF.mp4',
      imagen: 'assets/img/fonemaF.svg',
      mensaje: 'Fiiii Fiiii Fiiii (Soplando flauta)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'g',
      video: 'assets/video/fonemas/vidFonG.mp4',
      imagen: 'assets/img/fonemaG.svg',
      mensaje: 'Ggggggggg (Gárgaras)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'i',
      video: 'assets/video/fonemas/vidFonI.mp4',
      imagen: 'assets/img/fonemaI.svg',
      mensaje: 'Iiiii Iiiii Iiiii (Ratoncito)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'j',
      video: 'assets/video/fonemas/vidFonJ.mp4',
      imagen: 'assets/img/fonemaJ.svg',
      mensaje: 'Jajajajajajaja (risas)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'Kk',
      video: 'assets/video/fonemas/vidFonK.mp4',
      imagen: 'assets/img/fonemaK.svg',
      mensaje: '',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'l',
      video: 'assets/video/fonemas/vidFonL.mp4',
      imagen: 'assets/img/fonemaL.svg',
      mensaje: 'La La La La La La (Cantando)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'll',
      video: 'assets/video/fonemas/vidFonL.mp4',
      imagen: 'assets/img/fonemaL.svg',
      mensaje: '',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'm',
      video: 'assets/video/fonemas/vidFonM.mp4',
      imagen: 'assets/img/fonemaM.svg',
      mensaje: 'Muuu Muuu Muuu (Vaca)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'n',
      video: 'assets/video/fonemas/vidFonNn.mp4',
      imagen: 'assets/img/fonemaNn.svg',
      mensaje: 'Ni No Ni No Ni No (Minions)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'ñ',
      video: 'assets/video/fonemas/vidFonÑ.mp4',
      imagen: 'assets/img/fonemaÑ.svg',
      mensaje: 'Ñooo Ñooo Ñooo (Chanchito)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'o',
      video: 'assets/video/fonemas/vidFonO.mp4',
      imagen: 'assets/img/fonemaO.svg',
      mensaje: 'Ohhh Ohhh Ohhh (Asombro)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'Pp',
      video: 'assets/video/fonemas/vidFonP.mp4',
      imagen: 'assets/img/fonemaP.svg',
      mensaje: '',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'r',
      video: 'assets/video/fonemas/vidFonRr.mp4',
      imagen: 'assets/img/fonemaRr.svg',
      mensaje: 'Ra Ra Ra Ra Ra (Cantando)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'rr',
      video: 'assets/video/fonemas/vidFonRR.mp4',
      imagen: 'assets/img/fonemaRR.svg',
      mensaje: 'Rrrrrrrrrrrr (Moto)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'Ss',
      video: 'assets/video/fonemas/vidFonS.mp4',
      imagen: 'assets/img/fonemaS.svg',
      mensaje: 'Sssssssss (Serpiente)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 't',
      video: 'assets/video/fonemas/vidFonT.mp4',
      imagen: 'assets/img/fonemaT.svg',
      mensaje: 'Tilín Tilín Tilín (Campana)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'u',
      video: 'assets/video/fonemas/vidFonU.mp4',
      imagen: 'assets/img/fonemaU.svg',
      mensaje: 'Uy Uy Uy (Susto)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'x',
      video: 'assets/video/fonemas/vidFonX.mp4',
      imagen: 'assets/img/fonemaX.svg',
      mensaje: 'Xxxx Xxxx Xxxx (spray)',
      duracion: 4,
      reproduciendo: false
    }, {
      nombre: 'y',
      video: 'assets/video/fonemas/vidFonY.mp4',
      imagen: 'assets/img/fonemaY.svg',
      mensaje: 'Yyyyyyyy (Avión volando)',
      duracion: 4,
      reproduciendo: false
    }];
    /***/
  }
}]);
//# sourceMappingURL=default~pages-categoria-categoria-module~pages-consonantes-consonantes-module~pages-docentes-docente~625ffebc-es5.js.map