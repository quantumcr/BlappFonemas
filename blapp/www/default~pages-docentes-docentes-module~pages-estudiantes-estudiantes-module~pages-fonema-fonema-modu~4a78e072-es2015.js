(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-docentes-docentes-module~pages-estudiantes-estudiantes-module~pages-fonema-fonema-modu~4a78e072"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <ion-grid>\n    <ion-row>\n      \n    </ion-row>\n  </ion-grid>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  categories-view-panel works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  categories-view works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid justify-content-center>\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-label class=\"tituloUsuario\">{{usuario}}</ion-label>\r\n        <ion-input class=\"usuario\" (ionInput)=\"setEmail($event)\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row justify-content-center>\r\n      <ion-col >\r\n        <ion-label class=\"tituloClave\">{{clave}}</ion-label>\r\n        <ion-input class=\"clave\" type=\"password\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row justify-content-center>\r\n      <ion-col>\r\n        <ion-button color=\"blappButton\" class=\"btnLogin\" (click)=\"login()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--\r\n        <app-students-menu  titulo=\"Estudiante\" opcion1=\"fonemas\" opcion2=\"categorías semánticas\"></app-students-menu>\r\n        -->\r\n        <app-professor-menu  titulo=\"¡Buenos días, Profe!\" opcion1=\"Fonemas\" opcion2=\"Categorías semánticas\" opcion3=\"estudiantes\"></app-professor-menu>\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" class=\"icon\">\r\n            <ion-img src=\"assets/icon/logout.svg\"></ion-img>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"titulo\">\r\n        <ion-col>\r\n          <ion-label class=\"texto\">{{titulo}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"opciones\">\r\n        <ion-segment (ionChange)=\"selectTheme($event)\">\r\n          <div> \r\n            <ion-segment-button value=\"fonemas\" class=\"opcionFonema\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion1}}</ion-label>\r\n          \r\n          </div>\r\n  \r\n          <div>\r\n            <ion-segment-button value=\"semanticas\" class=\"opcionSemantica\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion2}}</ion-label>\r\n          </div> \r\n\r\n          <div>\r\n            <ion-segment-button value=\"estudiantes\" class=\"opcionEstudiantes\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion3}}</ion-label>\r\n          </div>           \r\n        </ion-segment>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button fill=\"clear\" class=\"icon\">\r\n          <ion-img src=\"assets/icon/logout.svg\"></ion-img>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"titulo\">\r\n      <ion-col>\r\n        <ion-label class=\"texto\">¡Hola {{authenticationService.getUserDetails().nombre}}!<br>¿Qué aprenderemos hoy?</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"opciones\">\r\n      <ion-segment (ionChange)=\"selectTheme($event)\">\r\n        <div>\r\n          <ion-segment-button value=\"fonemas\" class=\"opcionFonema\">\r\n          </ion-segment-button>\r\n          <ion-label class=\"textoOpcion\">{{opcion1}}</ion-label>\r\n        </div>\r\n\r\n        <div class=\"divSemantica\">\r\n          <ion-segment-button value=\"semanticas\" class=\"opcionSemantica\">\r\n          </ion-segment-button>\r\n          <ion-label class=\"textoOpcion\">{{opcion2}}</ion-label>\r\n        </div> \r\n      </ion-segment>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\n  <ion-grid >\n    <ion-row>\n      <ion-col>\n        <ion-segment-button value='back' class=\"btnBack\" (click)='goTo($event)'>\n          <ion-icon class=\"backIcon\"></ion-icon>\n        </ion-segment-button>\n      </ion-col>\n      <ion-col >\n        <ion-segment-button value=\"home\" class=\"btnHome\" (click)=\"goToHome($event)\">\n          <ion-icon class=\"homeIcon\"></ion-icon>\n        </ion-segment-button>\n      </ion-col>\n      \n      <ion-col >\n        <ion-segment-button value='forward' class=\"btnForward\" (click)=\"goTo($event)\">\n          <ion-icon class=\"forwardIcon\"></ion-icon>\n        </ion-segment-button>\n      </ion-col>      \n    </ion-row>\n  </ion-grid>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">FONEMA</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"fonema\">/ {{fonema}} /</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"videoFonema\">\r\n      <div>\r\n        <div >\r\n          <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n        </div>\r\n        <div style=\"position: absolute; left: 37px; top: 421px;\">\r\n          <ion-segment-button *ngIf=\"visibleVideo\"  value=\"video\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon  src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button *ngIf=\"visibleAudio\"  value=\"phoneme\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon src=\"assets/icon/audio.svg\"></ion-icon>\r\n          </ion-segment-button>          \r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"mensaje\">{{mensaje}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <ion-grid>\n    <ion-row>\n      <ion-segment>\n        <ion-segment-button></ion-segment-button>\n        <ion-segment-button></ion-segment-button>\n        <ion-segment-button></ion-segment-button>\n        <ion-segment-button></ion-segment-button>\n        <ion-segment-button></ion-segment-button>\n      </ion-segment>\n    </ion-row>\n    <ion-row>\n      <div>\n        <div>\n          <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\n        </div>\n\n        <div style=\"position: absolute; left: 227px; top: 346px;\">\n          <ion-segment-button value=\"audio\" class=\"btnPlay\" (click)=\"playAudio($event)\">\n            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\n          </ion-segment-button>\n        </div>\n      </div>   \n    </ion-row>\n\n    <ion-row>\n      <ion-label></ion-label>\n    </ion-row>\n  </ion-grid>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"audioFonema\">   \r\n      <div>\r\n        <div>\r\n          <ion-img src={{imagen}}  class=\"imagen\"></ion-img>\r\n        </div>\r\n\r\n        <div style=\"position: absolute; left: 227px; top: 346px;\">\r\n          <ion-segment-button value=\"audio\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n        </div>\r\n      </div>    \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"palabra\">{{palabra}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-bar [fonema]=\"valueFonemaView\" [mensaje]=\"videoData.mensaje\"  (barEvent)=\"selectPanel($event)\" ></app-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-phoneme-panel [fonema]=\"valueFonemaView\" *ngIf=\"visiblePhoneme\" [comando]=\"comandoFonema\"></app-phoneme-panel>\r\n        <app-video-panel [video]=\"videoData.video\" *ngIf=\"visibleVideo\"></app-video-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/video-panel/video-panel.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/video-panel/video-panel.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"row\">\r\n      <video fullscreen=\"fullscreen\" src={{video}} autoplay=\"true\"></video>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Pp\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Pp</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Mm\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Mm</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Bb\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Bb</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>\r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Dd\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Dd</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Tt\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Tt</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Gg\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Gg</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>  \r\n        \r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Cc Kk Qq\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Cc Kk Qq</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Ff\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ff</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Ch ch\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ch ch</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row> \r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Jj\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Jj</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Ss\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ss</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Nn\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Nn</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>   \r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Ññ\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ññ</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Ll\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ll</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"LLll Yy\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">LLll Yy</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>\r\n        \r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button value=\"Rr\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Rr</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"RR rr\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">RR rr</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button value=\"Xx\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Xx</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>        \r\n    </ion-grid>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/fonemas/phoneme-bar/fonemas.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"vocales\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"consonantes\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n          <ion-segment-button value=\"jugar\" class=\"btnComando3\" (click)=\"openPanel($event)\">{{comando3}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid>\r\n        <ion-row class=\"rowSilaba\">\r\n            <ion-col>\r\n                <ion-segment-button fill=\"round\" class=\"silaba\">Ma</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button fill=\"round\" class=\"silaba\">Me</ion-segment-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <div style=\"position: relative;\">\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value=\"audio1\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"position: relative;\">\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value=\"audio2\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>              \r\n            </ion-col>  \r\n            <ion-col>\r\n                <div style=\"position: relative;\">\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-img src=\"assets/img/fonemas/game-panel/mama.png\" class=\"imagen\"></ion-img>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value=\"audio3\" class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>             \r\n            </ion-col>                   \r\n        </ion-row>\r\n    </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-phoneme-bar titulo=\"FONEMAS\" comando1=\"VOCALES\" comando2=\"CONSONANTES\" comando3=\"JUGAR\" (phonemeBarEvent)=\"selectPanel($event)\" ></app-phoneme-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-vocal-panel *ngIf=\"visibleVocal\"></app-vocal-panel>\r\n        <app-consonant-panel *ngIf=\"visibleConsonant\"></app-consonant-panel> \r\n        <app-phoneme-game-panel *ngIf=\"visibleGame\"></app-phoneme-game-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n    <ion-row class=\"row\">\r\n      <ion-col>\r\n          <ion-segment-button value=\"a\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Aa</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"e\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ee</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"o\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Oo</ion-segment-button>\r\n      </ion-col>                        \r\n    </ion-row>\r\n    <ion-row class=\"rowDebiles\">\r\n      <ion-col>\r\n          <ion-segment-button value=\"i\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Ii</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"u\" class=\"phonemeButton\" (click)=\"goToPhoneme($event)\">Uu</ion-segment-button>\r\n      </ion-col>\r\n                       \r\n    </ion-row>    \r\n\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/list/list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/list/list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-row class=\"row\" *ngFor=\"let names of nameStudents\">\r\n    <button class=\"btnEstudiante\" (click)=\"getStudent(names._id)\">{{names.nombre}}</button>\r\n  </ion-row>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/professor.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/professor.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-students-bar titulo=\"ESTUDIANTES\"  comando1=\"AGREGAR\" comando2=\"LISTA COMPLETA\" (studentsBarEvent)=\"selectPanel($event)\" ></app-students-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-register nombre=\"Nombre Completo\" edad=\"Edad\" genero=\"Género\" residencia=\"Lugar de Residencia\" encargado=\"Encargado Legal\" email=\"Email\" password=\"Contraseña\" comando=\"Guardar\" *ngIf=\"visibleRegister\"></app-register>\r\n        <app-list *ngIf=\"visibleList\"></app-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/register/register.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/register/register.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n      <ion-row style=\"margin-top: 48px;\">\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{nombre}}</ion-label>\r\n          <ion-input class=\"input\" (ionInput)=\"setName($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{edad}}</ion-label>\r\n          <ion-input class=\"input\" (ionInput)=\"setAge($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>   \r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{genero}}</ion-label>\r\n          <ion-input class=\"input\" (ionInput)=\"setGender($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>  \r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{residencia}}</ion-label>\r\n          <ion-input class=\"input\" (ionInput)=\"setAddress($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>  \r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{encargado}}</ion-label>\r\n          <ion-input class=\"input\" (ionInput)=\"setLegalOfficer($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{email}}</ion-label>\r\n          <ion-input class=\"input\" type=\"email\" (ionInput)=\"setEmail($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-label class=\"label\">{{password}}</ion-label>\r\n          <ion-input class=\"input\" type=\"password\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"formButton\" shape=\"round\" class=\"btnGuardar\" (click)=\"register()\">{{comando}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/docentes/students-bar/estudiantes.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"editar\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"eliminar\" class=\"btnComando2\" (click)=\"deleteStudent()\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/family-info/family-info.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/family-info/family-info.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"label\">Nombre la Tía</ion-label>\r\n      <ion-input class=\"input\"></ion-input>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/food-info/food-info.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/food-info/food-info.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-col>\r\n    <ion-item lines=\"none\" *ngFor=\"let alimento of alimetacion\">\r\n      <ion-label class=\"label\" color=\"black\">{{alimento.alimento}}</ion-label>\r\n      <ion-radio slot=\"start\" color=\"success\" ></ion-radio>\r\n    </ion-item>\r\n  </ion-col>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row class=\"info\">  \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-label class=\"titulo\">Información Personal</ion-label>\r\n          </ion-row>\r\n          <ion-row>\r\n            <app-personal-info [student]=\"student\" [user]=\"user\"></app-personal-info>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"infoFamilia\">\r\n          <ion-label class=\"titulo\">Familia</ion-label>\r\n          <app-family-info></app-family-info>\r\n        </ion-col>\r\n        <ion-col class=\"infoAlimentos\">\r\n          <ion-label class=\"titulo\">Alimentos</ion-label>\r\n          <app-food-info [alimetacion]=\"student.alimentacion\"></app-food-info>          \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Nombre:</ion-label>\r\n          <ion-input id=\"nombre\" class=\"input\" value=\"\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Cédula:</ion-label>\r\n          <ion-input id=\"cedula\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Género:</ion-label>\r\n          <ion-input id=\"sexo\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Edad:</ion-label>\r\n          <ion-input id=\"edad\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Email:</ion-label>\r\n          <ion-input id=\"email\" type=\"email\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Encargado:</ion-label>\r\n          <ion-input id=\"encargado_nombre\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Profesión:</ion-label>\r\n          <ion-input id=\"encargado_profesion\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Teléfono:</ion-label>\r\n          <ion-input id=\"encargado_telefono\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Dirección:</ion-label>\r\n          <ion-input id=\"encargado_direccion\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-label class=\"label\">Password:</ion-label>\r\n          <ion-input id=\"password\" type=\"password\" class=\"input\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-function-bar titulo=\"ESTUDIANTES\" comando1=\"EDITAR INFORMACIÓN\" comando2=\"ELIMINAR ESTUDIANTE\" (deleteStudentEvent)=\"deleteStudent()\"></app-function-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n          <app-info-panel [_idStudent]=\"_idStudent\"></app-info-panel>     \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/docentes/students-bar/estudiantes.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"agregar\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"lista\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"imagen\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Imagen de<br>mi mismo</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"cuerpo\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Partes del<br>cuerpo</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"familia\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Familia</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row>\r\n\r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"alimentos\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Alimentos</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"animales\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Animales</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"juguetes\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Juguetes</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row>  \r\n      \r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"ropa\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Prendas de<br>vestir</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"casa\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Partes de<br>la casa</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"transporte\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Medios<br>transporte</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row> \r\n\r\n      <ion-row class=\"lastRow\">\r\n          <ion-col>\r\n              <ion-segment-button value=\"\"  class=\"phonemeButton\" (click)=\"goToCategories($event)\">Servidores de<br>la comunidad</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button value=\"\" class=\"phonemeButton\" (click)=\"goToCategories($event)\">Instrumentos<br>musicales</ion-segment-button>\r\n          </ion-col>                     \r\n      </ion-row>      \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-bar/semantics-bar.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-bar/semantics-bar.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/semanticas/semantics-bar/semanticas.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n      <ion-label class=\"titulo2\">{{titulo2}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"categorias\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"jugar\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">  \r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"sujeto\">\r\n          <div>\r\n            \r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"verbo\">\r\n          <div>\r\n\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"predicado\">\r\n          <div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">sujeto</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">verbo</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"palabras\">predicado</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"options\">\r\n      <ion-col>\r\n        <div class=\"element\" cdkDropList\r\n          #element1List=\"cdkDropList\">\r\n          <div cdkDrag>\r\n            <ion-img src=\"assets/img/fonemas/game-panel/mama.png\"></ion-img>\r\n          </div>\r\n        </div>        \r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"element\" cdkDrop>\r\n          <div cdkDrag>\r\n            <ion-img src=\"assets/img/fonemas/game-panel/mama.png\"></ion-img>\r\n          </div>\r\n        </div>  \r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"element\" cdkDrop>\r\n          <div cdkDrag>\r\n            <ion-img src=\"assets/img/fonemas/game-panel/mama.png\"></ion-img>\r\n          </div>\r\n        </div>  \r\n      </ion-col>\r\n    </ion-row> \r\n\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-semantics-bar titulo=\"CATEGORÍAS\" titulo2=\"SEMÁNTICAS\" comando1=\"CATEGORÍAS\" comando2=\"JUGAR\" (semanticsBarEvent)=\"selectPanel($event)\" ></app-semantics-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-categories-panel *ngIf=\"visibleCategories\"></app-categories-panel>\r\n        <app-semantics-game-panel *ngIf=\"visibleGame\"></app-semantics-game-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>       \r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  subcategories-bar works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  subcategories-panel works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  subcategories works!\r\n</p>\r\n");

/***/ }),

/***/ "./src/app/components/categories-view/categories-bar/categories-bar.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-bar/categories-bar.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy12aWV3L2NhdGVnb3JpZXMtYmFyL2NhdGVnb3JpZXMtYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/categories-view/categories-bar/categories-bar.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-bar/categories-bar.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CategoriesBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesBarComponent", function() { return CategoriesBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesBarComponent = class CategoriesBarComponent {
    constructor() { }
    ngOnInit() { }
};
CategoriesBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-bar.component.scss */ "./src/app/components/categories-view/categories-bar/categories-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesBarComponent);



/***/ }),

/***/ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy12aWV3L2NhdGVnb3JpZXMtdmlldy1wYW5lbC9jYXRlZ29yaWVzLXZpZXctcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CategoriesViewPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesViewPanelComponent", function() { return CategoriesViewPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesViewPanelComponent = class CategoriesViewPanelComponent {
    constructor() { }
    ngOnInit() { }
};
CategoriesViewPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-view-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-view-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-view-panel.component.scss */ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesViewPanelComponent);



/***/ }),

/***/ "./src/app/components/categories-view/categories-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-view.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXMtdmlld1xcY2F0ZWdvcmllcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb257XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4OyAgICBcclxuICAgIH0gIiwiLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/categories-view/categories-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesViewComponent", function() { return CategoriesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesViewComponent = class CategoriesViewComponent {
    constructor() { }
    ngOnInit() { }
};
CategoriesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-view.component.scss */ "./src/app/components/categories-view/categories-view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesViewComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-panel/menu-panel.component */ "./src/app/components/menu-panel/menu-panel.component.ts");
/* harmony import */ var _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-panel/professor-menu/professor-menu.component */ "./src/app/components/menu-panel/professor-menu/professor-menu.component.ts");
/* harmony import */ var _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-panel/students-menu/students-menu.component */ "./src/app/components/menu-panel/students-menu/students-menu.component.ts");
/* harmony import */ var _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phoneme/phoneme.component */ "./src/app/components/phoneme/phoneme.component.ts");
/* harmony import */ var _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phoneme/phoneme-bar/phoneme-bar.component */ "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts");
/* harmony import */ var _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phoneme/vocal-panel/vocal-panel.component */ "./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts");
/* harmony import */ var _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./phoneme/consonant-panel/consonant-panel.component */ "./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts");
/* harmony import */ var _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phoneme/phoneme-game-panel/phoneme-game-panel.component */ "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts");
/* harmony import */ var _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./semantics/semantics.component */ "./src/app/components/semantics/semantics.component.ts");
/* harmony import */ var _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./semantics/semantics-bar/semantics-bar.component */ "./src/app/components/semantics/semantics-bar/semantics-bar.component.ts");
/* harmony import */ var _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./semantics/categories-panel/categories-panel.component */ "./src/app/components/semantics/categories-panel/categories-panel.component.ts");
/* harmony import */ var _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./semantics/semantics-game-panel/semantics-game-panel.component */ "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/components/professor/professor.component.ts");
/* harmony import */ var _professor_list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./professor/list/list.component */ "./src/app/components/professor/list/list.component.ts");
/* harmony import */ var _professor_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./professor/register/register.component */ "./src/app/components/professor/register/register.component.ts");
/* harmony import */ var _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./professor/student-info/student-info.component */ "./src/app/components/professor/student-info/student-info.component.ts");
/* harmony import */ var _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./professor/students-bar/students-bar.component */ "./src/app/components/professor/students-bar/students-bar.component.ts");
/* harmony import */ var _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./professor/student-info/function-bar/function-bar.component */ "./src/app/components/professor/student-info/function-bar/function-bar.component.ts");
/* harmony import */ var _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./professor/student-info/info-panel/info-panel.component */ "./src/app/components/professor/student-info/info-panel/info-panel.component.ts");
/* harmony import */ var _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./semantics/subcategories/subcategories.component */ "./src/app/components/semantics/subcategories/subcategories.component.ts");
/* harmony import */ var _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./semantics/subcategories/subcategories-bar/subcategories-bar.component */ "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts");
/* harmony import */ var _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./semantics/subcategories/subcategories-panel/subcategories-panel.component */ "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts");
/* harmony import */ var _professor_student_info_info_panel_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./professor/student-info/info-panel/personal-info/personal-info.component */ "./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.ts");
/* harmony import */ var _professor_student_info_info_panel_family_info_family_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./professor/student-info/info-panel/family-info/family-info.component */ "./src/app/components/professor/student-info/info-panel/family-info/family-info.component.ts");
/* harmony import */ var _professor_student_info_info_panel_food_info_food_info_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./professor/student-info/info-panel/food-info/food-info.component */ "./src/app/components/professor/student-info/info-panel/food-info/food-info.component.ts");
/* harmony import */ var _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./phoneme-view/phoneme-view.component */ "./src/app/components/phoneme-view/phoneme-view.component.ts");
/* harmony import */ var _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./phoneme-view/bar/bar.component */ "./src/app/components/phoneme-view/bar/bar.component.ts");
/* harmony import */ var _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./phoneme-view/phoneme-panel/phoneme-panel.component */ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts");
/* harmony import */ var _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./phoneme-view/video-panel/video-panel.component */ "./src/app/components/phoneme-view/video-panel/video-panel.component.ts");
/* harmony import */ var _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./categories-view/categories-view.component */ "./src/app/components/categories-view/categories-view.component.ts");
/* harmony import */ var _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./categories-view/categories-bar/categories-bar.component */ "./src/app/components/categories-view/categories-bar/categories-bar.component.ts");
/* harmony import */ var _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./categories-view/categories-view-panel/categories-view-panel.component */ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _phoneme_view_phoneme_consonant_panel_phoneme_consonant_panel_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component */ "./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");








































let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["MenuPanelComponent"], _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_6__["ProfessorMenuComponent"], _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_7__["StudentsMenuComponent"],
            _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_8__["PhonemeComponent"], _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_9__["PhonemeBarComponent"], _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_10__["VocalPanelComponent"], _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_11__["ConsonantPanelComponent"], _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_12__["PhonemeGamePanelComponent"],
            _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_30__["PhonemeViewComponent"], _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_31__["BarComponent"], _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_32__["PhonemePanelComponent"], _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_33__["VideoPanelComponent"], _phoneme_view_phoneme_consonant_panel_phoneme_consonant_panel_component__WEBPACK_IMPORTED_MODULE_38__["PhonemeConsonantPanelComponent"],
            _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_13__["SemanticsComponent"], _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_14__["SemanticsBarComponent"], _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesPanelComponent"], _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_16__["SemanticsGamePanelComponent"],
            _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_24__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesPanelComponent"],
            _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_34__["CategoriesViewComponent"], _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_35__["CategoriesBarComponent"], _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_36__["CategoriesViewPanelComponent"],
            _professor_professor_component__WEBPACK_IMPORTED_MODULE_17__["ProfessorComponent"], _professor_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], _professor_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_20__["StudentInfoComponent"],
            _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_22__["FunctionBarComponent"], _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_23__["InfoPanelComponent"], _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_21__["StudentsBarComponent"], _professor_student_info_info_panel_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_27__["PersonalInfoComponent"], _professor_student_info_info_panel_family_info_family_info_component__WEBPACK_IMPORTED_MODULE_28__["FamilyInfoComponent"],
            _professor_student_info_info_panel_food_info_food_info_component__WEBPACK_IMPORTED_MODULE_29__["FoodInfoComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_24__["SubcategoriesComponent"],
            _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesPanelComponent"], _professor_student_info_info_panel_food_info_food_info_component__WEBPACK_IMPORTED_MODULE_29__["FoodInfoComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_37__["NavigationComponent"]],
        exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["MenuPanelComponent"], _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_6__["ProfessorMenuComponent"], _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_7__["StudentsMenuComponent"],
            _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_8__["PhonemeComponent"], _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_9__["PhonemeBarComponent"], _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_10__["VocalPanelComponent"], _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_11__["ConsonantPanelComponent"], _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_12__["PhonemeGamePanelComponent"],
            _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_30__["PhonemeViewComponent"], _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_31__["BarComponent"], _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_32__["PhonemePanelComponent"], _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_33__["VideoPanelComponent"], _phoneme_view_phoneme_consonant_panel_phoneme_consonant_panel_component__WEBPACK_IMPORTED_MODULE_38__["PhonemeConsonantPanelComponent"],
            _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_13__["SemanticsComponent"], _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_14__["SemanticsBarComponent"], _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesPanelComponent"], _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_16__["SemanticsGamePanelComponent"],
            _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_24__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesPanelComponent"],
            _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_34__["CategoriesViewComponent"], _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_35__["CategoriesBarComponent"], _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_36__["CategoriesViewPanelComponent"],
            _professor_professor_component__WEBPACK_IMPORTED_MODULE_17__["ProfessorComponent"], _professor_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], _professor_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_20__["StudentInfoComponent"],
            _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_22__["FunctionBarComponent"], _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_23__["InfoPanelComponent"], _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_21__["StudentsBarComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_24__["SubcategoriesComponent"],
            _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesPanelComponent"], _professor_student_info_info_panel_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_27__["PersonalInfoComponent"], _professor_student_info_info_panel_family_info_family_info_component__WEBPACK_IMPORTED_MODULE_28__["FamilyInfoComponent"],
            _professor_student_info_info_panel_food_info_food_info_component__WEBPACK_IMPORTED_MODULE_29__["FoodInfoComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_37__["NavigationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_39__["DragDropModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .principal {\n    position: absolute;\n    width: 554px;\n    height: 264px;\n    margin-left: 360px;\n    margin-right: 360px;\n    top: 318px;\n    background: #7A84DD;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .tituloUsuario {\n    top: 16px;\n    margin-left: 241px;\n    margin-right: auto;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n\n  .tituloClave {\n    margin-left: 219px;\n    margin-right: auto;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n\n  .usuario {\n    width: 484px;\n    height: 44px;\n    left: 25px;\n    right: 33px;\n    top: 4px;\n    background: #FFFFFF;\n    border-radius: 3px;\n  }\n\n  .clave {\n    width: 484px;\n    height: 44px;\n    left: 25px;\n    right: 33px;\n    top: 14px;\n    background: #FFFFFF;\n    border-radius: 3px;\n  }\n\n  .btnLogin {\n    position: absolute;\n    width: 150px;\n    height: 44px;\n    left: 203px;\n    right: 201px;\n    top: 18px;\n    bottom: 20px;\n    background: #A9B0F0;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFFQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNETjs7RURJRTtJQUdJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUdBLGNBQUE7RUNOTjs7RURRRTtJQUdJLGtCQUFBO0lBQ0Esa0JBQUE7SUFHQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFJQSxjQUFBO0VDWk47O0VEY0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNYTjs7RURjRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ1hOOztFRGNFO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFFQSxtQkFBQTtJQUNBLGtCQUFBO0VDWk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7ICBcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1NTRweDtcclxuICAgICAgICBoZWlnaHQ6IDI2NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHRvcDogMzE4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzdBODRERDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICAudGl0dWxvVXN1YXJpb3tcclxuICAgICAgICAvL3dpZHRoOiAxMDBweDtcclxuICAgICAgICAvL2hlaWdodDogMzBweDsgICAgXHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNDFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgLy9mb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7IFxyXG5cclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiAgICB9ICAgXHJcbiAgICAudGl0dWxvQ2xhdmV7XHJcbiAgICAgICAgLy93aWR0aDogMTIxcHg7XHJcbiAgICAgICAgLy9oZWlnaHQ6IDMwcHg7ICBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIFxyXG4gICAgICAgIC8vZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG4gICAgfVxyXG4gICAgLnVzdWFyaW97XHJcbiAgICAgICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAzM3B4OyAgICBcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5jbGF2ZXtcclxuICAgICAgICB3aWR0aDogNDg0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDMzcHg7XHJcbiAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmJ0bkxvZ2lue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDIwM3B4O1xyXG4gICAgICAgIHJpZ2h0OiAyMDFweDtcclxuICAgICAgICB0b3A6IDE4cHg7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNBOUIwRjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OyAgICBcclxuICAgIH0gXHJcbiAgICBcclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NTRweDtcbiAgICBoZWlnaHQ6IDI2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2MHB4O1xuICAgIHRvcDogMzE4cHg7XG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAudGl0dWxvVXN1YXJpbyB7XG4gICAgdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuXG4gIC50aXR1bG9DbGF2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgLnVzdWFyaW8ge1xuICAgIHdpZHRoOiA0ODRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGVmdDogMjVweDtcbiAgICByaWdodDogMzNweDtcbiAgICB0b3A6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5jbGF2ZSB7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIHJpZ2h0OiAzM3B4O1xuICAgIHRvcDogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5idG5Mb2dpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGVmdDogMjAzcHg7XG4gICAgcmlnaHQ6IDIwMXB4O1xuICAgIHRvcDogMThweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0E5QjBGMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");








let LoginComponent = class LoginComponent {
    constructor(navCtrl, userService, authenticationService, studentService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.studentService = studentService;
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.newStudent = new _models_student__WEBPACK_IMPORTED_MODULE_7__["Student"];
    }
    ngOnInit() { }
    setEmail(event) {
        this.newUser.email = event.target.value;
    }
    setPassword(event) {
        this.newUser.password = event.target.value;
    }
    login() {
        this.userService.loginUser(this.newUser)
            .then((data) => {
            this.authenticationService.saveToken(data.token);
            if (this.authenticationService.getUserDetails().tipo == "Estudiante") {
                // Redireccionar al menu del estudiante
                this.navCtrl.navigateForward('/menu');
            }
            else if (this.authenticationService.getUserDetails().tipo == "Docente") {
                // Redireccionar al menu del docente
                this.navCtrl.navigateForward('/menu');
            }
        })
            .catch(err => {
            console.log("Login Incorrecto :(");
        });
    }
    goToRegistro() {
        // this.navCtrl.navigateForward('/registro');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LoginComponent.prototype, "usuario", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LoginComponent.prototype, "clave", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LoginComponent.prototype, "comando", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/menu-panel/menu-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-panel/menu-panel.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1144px;\n  height: 664px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LXBhbmVsXFxtZW51LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcGFuZWwvbWVudS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcGFuZWwvbWVudS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0NHB4O1xyXG4gICAgaGVpZ2h0OiA2NjRweDsgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQ0cHg7XG4gIGhlaWdodDogNjY0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/menu-panel/menu-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu-panel/menu-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPanelComponent", function() { return MenuPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuPanelComponent = class MenuPanelComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuPanelComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuPanelComponent.prototype, "opcion1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuPanelComponent.prototype, "opcion2", void 0);
MenuPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-panel.component.scss */ "./src/app/components/menu-panel/menu-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuPanelComponent);



/***/ }),

/***/ "./src/app/components/menu-panel/professor-menu/professor-menu.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/menu-panel/professor-menu/professor-menu.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 715px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 119px;\n    margin-right: 120px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 150px;\n    height: 150px;\n    background: url('fonemas.svg');\n    background-size: 150px 150px;\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 150px;\n    height: 150px;\n    background: url('semanticas.svg');\n    background-size: 150px 150px;\n  }\n\n  .opcionEstudiantes {\n    width: 150px;\n    height: 150px;\n    background: url('estudiantes.svg');\n    background-size: 150px 150px;\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 334px;\n    margin-right: 334px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 230px;\n    height: 230px;\n    background: url('fonemas.svg');\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 230px;\n    height: 230px;\n    background: url('semanticas.svg');\n  }\n\n  .opcionEstudiantes {\n    width: 230px;\n    height: 230px;\n    background: url('estudiantes.svg');\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3Byb2Zlc3Nvci1tZW51L0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LXBhbmVsXFxwcm9mZXNzb3ItbWVudVxccHJvZmVzc29yLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9wcm9mZXNzb3ItbWVudS9wcm9mZXNzb3ItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNDTjs7RURDRztJQUNHLFdBQUE7SUFDQSxZQUFBO0VDRU47O0VEQUU7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNHTjs7RURERTtJQUNJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUMsY0FBQTtFQ0dQOztFRERHO0lBQ0csVUFBQTtFQ0lOOztFREZFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0VDS047O0VESEU7SUFFSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtJQUNBLDRCQUFBO0VDS047O0VESEU7SUFFSyxZQUFBO0lBQ0EsYUFBQTtJQUNELGtDQUFBO0lBQ0EsNEJBQUE7RUNLTjs7RURIRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBRUEsVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUEsNEJBQUE7SUFFQSxjQUFBO0VDRU47O0VEQUU7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDR047QUFDRjtBRERBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsMkNBQUE7SUFDQSxtQkFBQTtFQ0dOOztFRERHO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNJUDs7RURGRztJQUNJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ0tQOztFREhHO0lBQ0csb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQyxjQUFBO0VDS1A7O0VERkc7SUFDSSxVQUFBO0VDS1A7O0VERkc7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VDS1A7O0VERkc7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtFQ0tQOztFRERHO0lBRUcsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtFQ0dOOztFRENHO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQSw0QkFBQTtJQUVBLGNBQUE7RUNGUDs7RURLRztJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNGUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3Byb2Zlc3Nvci1tZW51L3Byb2Zlc3Nvci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiA3MTVweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9IFxyXG4gICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH0gIFxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICAgICAgICB3aWR0aDogNDc2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgICB9IFxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH0gIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgfSAgXHJcbiAgICAub3BjaW9uRm9uZW1he1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgIH0gIFxyXG4gICAgLm9wY2lvblNlbWFudGljYXtcclxuXHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XHJcbiAgICB9IFxyXG4gICAgLm9wY2lvbkVzdHVkaWFudGVze1xyXG4gICAgICAgICAvL2xlZnQ6IDQwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9lc3R1ZGlhbnRlcy5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xyXG4gICAgfSAgIFxyXG4gICAgLnRleHRvT3BjaW9ue1xyXG4gICAgICAgIHdpZHRoOiAzNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgLy9sZWZ0OiAzMTdweDtcclxuICAgICAgICB0b3A6IDYyMXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfSBcclxuICAgIC5idG5Mb2dvdXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgIHRvcDogMTM3cHg7ICAgIFxyXG4gICAgfSAgICAgICAgICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXtcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDExNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9XHJcbiAgICAgLmljb257XHJcbiAgICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgfVxyXG4gICAgIC50aXR1bG97XHJcbiAgICAgICAgIHRvcDogODFweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6MzM0cHg7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogMzM0cHg7XHJcbiAgICAgICAgIHdpZHRoOiA0NzZweDtcclxuICAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgIH1cclxuICAgICAudGV4dG97XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICAgdG9wOiAxNDBweDtcclxuICAgICB9XHJcbiAgICBcclxuICAgICAub3BjaW9uRm9uZW1he1xyXG4gICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnJyk7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5vcGNpb25TZW1hbnRpY2F7XHJcbiAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmcnKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICBcclxuICAgICAub3BjaW9uRXN0dWRpYW50ZXN7XHJcbiAgICAgICAgLy8gbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9lc3R1ZGlhbnRlcy5zdmcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgLnRleHRvT3BjaW9ue1xyXG4gICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgLy9sZWZ0OiAzMTdweDtcclxuICAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuYnRuTG9nb3V0e1xyXG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgICB0b3A6IDEzN3B4OyAgICBcclxuICAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogNzE1cHg7XG4gICAgaGVpZ2h0OiA2NjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cblxuICAudGl0dWxvIHtcbiAgICB0b3A6IDgxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExOXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDQ3NnB4O1xuICAgIGhlaWdodDogMTY0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRleHRvIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5vcGNpb25lcyB7XG4gICAgdG9wOiAxNDBweDtcbiAgfVxuXG4gIC5vcGNpb25Gb25lbWEge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9mb25lbWFzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcbiAgfVxuXG4gIC5vcGNpb25Fc3R1ZGlhbnRlcyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2VzdHVkaWFudGVzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICB9XG5cbiAgLnRleHRvT3BjaW9uIHtcbiAgICB3aWR0aDogMzY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHRvcDogNjIxcHg7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5idG5Mb2dvdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNDJweDtcbiAgICB0b3A6IDEzN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDExNDRweDtcbiAgICBoZWlnaHQ6IDY2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cbiAgLmljb24ge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIC50aXR1bG8ge1xuICAgIHRvcDogODFweDtcbiAgICBtYXJnaW4tbGVmdDogMzM0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMzRweDtcbiAgICB3aWR0aDogNDc2cHg7XG4gICAgaGVpZ2h0OiAxNjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGV4dG8ge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLm9wY2lvbmVzIHtcbiAgICB0b3A6IDE0MHB4O1xuICB9XG5cbiAgLm9wY2lvbkZvbmVtYSB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnXCIpO1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmdcIik7XG4gIH1cblxuICAub3BjaW9uRXN0dWRpYW50ZXMge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9lc3R1ZGlhbnRlcy5zdmdcIik7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLmJ0bkxvZ291dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE0MnB4O1xuICAgIHRvcDogMTM3cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/menu-panel/professor-menu/professor-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/menu-panel/professor-menu/professor-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfessorMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorMenuComponent", function() { return ProfessorMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ProfessorMenuComponent = class ProfessorMenuComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    selectTheme(event) {
        console.log(event.target.value);
        this.navCtrl.navigateForward('/' + event.target.value);
    }
};
ProfessorMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProfessorMenuComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProfessorMenuComponent.prototype, "opcion1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProfessorMenuComponent.prototype, "opcion2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProfessorMenuComponent.prototype, "opcion3", void 0);
ProfessorMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professor-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./professor-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./professor-menu.component.scss */ "./src/app/components/menu-panel/professor-menu/professor-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ProfessorMenuComponent);



/***/ }),

/***/ "./src/app/components/menu-panel/students-menu/students-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/menu-panel/students-menu/students-menu.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 715px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 119px;\n    margin-right: 120px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 150px;\n    height: 150px;\n    background: url('fonemas.svg');\n    background-size: 150px 150px;\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 150px;\n    height: 150px;\n    background: url('semanticas.svg');\n    background-size: 150px 150px;\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 334px;\n    margin-right: 334px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 254px;\n    margin-left: 190px;\n    margin-right: 190px;\n  }\n\n  .divFonema {\n    width: 274px;\n    margin-right: 118px;\n  }\n\n  .divSemantica {\n    margin-left: 118px;\n  }\n\n  .opcionFonema {\n    width: 264px;\n    height: 264px;\n    background: url('fonemas.png');\n  }\n\n  .opcionSemantica {\n    left: 40px;\n    width: 264px;\n    height: 264px;\n    background: url('semanticas.png');\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3N0dWRlbnRzLW1lbnUvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lbnUtcGFuZWxcXHN0dWRlbnRzLW1lbnVcXHN0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9zdHVkZW50cy1tZW51L3N0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQ0FBQTtJQUNBLG1CQUFBO0VDQU47O0VERUc7SUFDRyxXQUFBO0lBQ0EsWUFBQTtFQ0NOOztFRENFO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDRU47O0VEQUU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVDLGNBQUE7RUNFUDs7RURBRztJQUNHLFVBQUE7RUNHTjs7RURERTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSw0QkFBQTtFQ0lOOztFREZFO0lBRUksVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSw0QkFBQTtFQ0lOOztFREZFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQSw0QkFBQTtJQUVBLGNBQUE7RUNDTjs7RURDRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNFTjtBQUNGO0FEQ0E7RUFDSTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQ0FBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VEQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0VOOztFREFFO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDR047O0VEREU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVBLGNBQUE7RUNHTjs7RURBRTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDR047O0VEREU7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUNJTjs7RURGRTtJQUNJLGtCQUFBO0VDS047O0VESEU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VDTU47O0VESEU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtFQ01OOztFREhFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBRUEsNEJBQUE7SUFFQSxjQUFBO0VDRU47O0VEQ0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9zdHVkZW50cy1tZW51L3N0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiA3MTVweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9IFxyXG4gICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH0gIFxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICAgICAgICB3aWR0aDogNDc2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgICB9IFxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH0gIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgfSAgXHJcbiAgICAub3BjaW9uRm9uZW1he1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2ZvbmVtYXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgIH0gIFxyXG4gICAgLm9wY2lvblNlbWFudGljYXtcclxuXHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XHJcbiAgICB9ICBcclxuICAgIC50ZXh0b09wY2lvbntcclxuICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIC8vbGVmdDogMzE3cHg7XHJcbiAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxuICAgIH0gXHJcbiAgICAuYnRuTG9nb3V0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxNDJweDtcclxuICAgICAgICB0b3A6IDEzN3B4OyAgICBcclxuICAgIH0gICAgICAgICAgICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpe1xyXG4gICAgLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMTQ0cHg7XHJcbiAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgdG9wOiA4MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzM0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ3NnB4O1xyXG4gICAgICAgIGhlaWdodDogMTY0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgfVxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDI1NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdkZvbmVtYXtcclxuICAgICAgICB3aWR0aDogMjc0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMThweDtcclxuICAgIH1cclxuICAgIC5kaXZTZW1hbnRpY2F7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xyXG4gICAgfVxyXG4gICAgLm9wY2lvbkZvbmVtYXtcclxuICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1wYW5lbC9mb25lbWFzLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGNpb25TZW1hbnRpY2F7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0b09wY2lvbntcclxuICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIC8vbGVmdDogMzE3cHg7XHJcbiAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5idG5Mb2dvdXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgIHRvcDogMTM3cHg7ICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDcxNXB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAub3BjaW9uZXMge1xuICAgIHRvcDogMTQwcHg7XG4gIH1cblxuICAub3BjaW9uRm9uZW1hIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvZm9uZW1hcy5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcbiAgfVxuXG4gIC5vcGNpb25TZW1hbnRpY2Ege1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL3NlbWFudGljYXMuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLmJ0bkxvZ291dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE0MnB4O1xuICAgIHRvcDogMTM3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTE0NHB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMzNHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5vcGNpb25lcyB7XG4gICAgdG9wOiAyNTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcbiAgfVxuXG4gIC5kaXZGb25lbWEge1xuICAgIHdpZHRoOiAyNzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExOHB4O1xuICB9XG5cbiAgLmRpdlNlbWFudGljYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xuICB9XG5cbiAgLm9wY2lvbkZvbmVtYSB7XG4gICAgd2lkdGg6IDI2NHB4O1xuICAgIGhlaWdodDogMjY0cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9tZW51LXBhbmVsL2ZvbmVtYXMucG5nXCIpO1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNDBweDtcbiAgICB3aWR0aDogMjY0cHg7XG4gICAgaGVpZ2h0OiAyNjRweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL21lbnUtcGFuZWwvc2VtYW50aWNhcy5wbmdcIik7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAuYnRuTG9nb3V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTQycHg7XG4gICAgdG9wOiAxMzdweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/menu-panel/students-menu/students-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/menu-panel/students-menu/students-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsMenuComponent", function() { return StudentsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");




let StudentsMenuComponent = class StudentsMenuComponent {
    constructor(navCtrl, authenticationService) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
    }
    ngOnInit() { }
    selectTheme(event) {
        console.log(event.target.value);
        this.navCtrl.navigateForward('/' + event.target.value);
    }
};
StudentsMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsMenuComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsMenuComponent.prototype, "usuario", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsMenuComponent.prototype, "opcion1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsMenuComponent.prototype, "opcion2", void 0);
StudentsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./students-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./students-menu.component.scss */ "./src/app/components/menu-panel/students-menu/students-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], StudentsMenuComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 1145px;\n  height: 57px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.btnBack {\n  width: 42px;\n  height: 42px;\n  margin-left: 30px;\n}\n\n.btnHome {\n  width: 42px;\n  height: 42px;\n  margin-left: 135px;\n}\n\n.btnForward {\n  width: 42px;\n  height: 42px;\n  margin-right: 32px;\n  margin-left: auto;\n}\n\n.backIcon {\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.homeIcon {\n  width: 42px;\n  height: 42px;\n  background: url('home.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.forwardIcon {\n  width: 42px;\n  height: 42px;\n  background: url('forward.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QUREQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExNDVweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyAgICBcclxufVxyXG5cclxuLmJ0bkJhY2t7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5idG5Ib21le1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM1cHg7XHJcbn1cclxuLmJ0bkZvcndhcmR7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmhvbWVJY29ue1xyXG5cclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmZvcndhcmRJY29ue1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuIiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNDVweDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYnRuQmFjayB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnRuSG9tZSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzVweDtcbn1cblxuLmJ0bkZvcndhcmQge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYmFja0ljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhvbWVJY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5mb3J3YXJkSWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let NavigationComponent = class NavigationComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    goToHome(event) {
        this.navCtrl.navigateForward('/menu');
    }
    goTo(event) {
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/bar/bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/phoneme-view/bar/bar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 263px;\n  height: 262px;\n  left: 16px;\n  right: 23px;\n  top: 206px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 15px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.fonema {\n  position: absolute;\n  width: 301px;\n  height: 74px;\n  left: 96px;\n  right: 41px;\n  top: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.videoFonema {\n  margin-top: 65px;\n  margin-right: 100px;\n}\n\n.mensaje {\n  width: 303px;\n  height: 42px;\n  margin-top: 450px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n\n.btnPlay {\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLXZpZXdcXGJhclxcYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NMOztBRENDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VMOztBREFDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNDTDs7QURDQztFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDQUo7O0FER0M7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQUw7O0FER0M7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDREo7O0FESUM7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDREw7O0FER0M7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQUw7O0FERUM7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ0w7O0FEQ0M7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNFTDs7QURBQztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0dMOztBRERDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDSUw7O0FERkM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNLTDs7QURGQztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMzAycHg7XHJcbiAgICAgaGVpZ2h0OiA2MjNweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xyXG4gICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbiB9XHJcbiAuaW1hZ2Vue1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjYzcHg7XHJcbiAgICAgaGVpZ2h0OiAyNjJweDtcclxuICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIHRvcDogMjA2cHg7ICAgIFxyXG4gfVxyXG4gLnRpdHVsb3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDIyNnB4O1xyXG4gICAgIGhlaWdodDogNzRweDtcclxuICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgIHRvcDogMTVweDtcclxuIFxyXG4gICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICAgXHJcbiAgICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG4gfVxyXG4gLmZvbmVtYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDFweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIGxlZnQ6IDk2cHg7XHJcbiAgICByaWdodDogNDFweDtcclxuICAgIHRvcDogODVweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGOyAgICAgIFxyXG4gfVxyXG5cclxuIC52aWRlb0ZvbmVtYXtcclxuICAgICBtYXJnaW4tdG9wOiA2NXB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiB9XHJcblxyXG4gLm1lbnNhamV7XHJcbiAgICB3aWR0aDogMzAzcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7IFxyXG4gICAgbWFyZ2luLXRvcDo0NTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIFxyXG4gLmNvbWFuZG8xe1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDQwNnB4OyAgXHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG4gfVxyXG4gLmNvbWFuZG8ye1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDQ2N3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgICBcclxuIH1cclxuIC5jb21hbmRvM3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiA1MjBweDsgXHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgXHJcbiB9XHJcbiAuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogMzkycHg7ICAgICBcclxuIH1cclxuIC5idG5Db21hbmRvMXtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogMzkycHg7ICBcclxuIH1cclxuIC5idG5Db21hbmRvMntcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogNDUzcHg7XHJcbiB9XHJcbiAuYnRuQ29tYW5kbzN7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAyNTlweDtcclxuICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgbGVmdDogMjBweDtcclxuICAgICByaWdodDogMjNweDtcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgICB0b3A6IDUyMHB4O1xyXG4gfVxyXG5cclxuIC5idG5QbGF5e1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7ICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgIFxyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxufSIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbiAgYmFja2dyb3VuZDogI0ZDRDI2MDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2M3B4O1xuICBoZWlnaHQ6IDI2MnB4O1xuICBsZWZ0OiAxNnB4O1xuICByaWdodDogMjNweDtcbiAgdG9wOiAyMDZweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDUwcHg7XG4gIHJpZ2h0OiA0MXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZvbmVtYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMXB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDk2cHg7XG4gIHJpZ2h0OiA0MXB4O1xuICB0b3A6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnZpZGVvRm9uZW1hIHtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLm1lbnNhamUge1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLXRvcDogNDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NjdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogMzkycHg7XG59XG5cbi5idG5Db21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ1M3B4O1xufVxuXG4uYnRuQ29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNTIwcHg7XG59XG5cbi5idG5QbGF5IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/phoneme-view/bar/bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/phoneme-view/bar/bar.component.ts ***!
  \**************************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BarComponent = class BarComponent {
    constructor() {
        this.barEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleAudio = false;
        this.visibleVideo = true;
    }
    ngOnInit() {
    }
    openPanel(event) {
        console.log(event.target.value);
        this.barEvent.emit(event.target.value);
        this.setVisible(event.target.value);
    }
    playVideo() { }
    setVisible(value) {
        if (value === 'video') {
            this.visibleVideo = false;
            this.visibleAudio = true;
        }
        if (value === 'phoneme') {
            this.visibleVideo = true;
            this.visibleAudio = false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BarComponent.prototype, "Video", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BarComponent.prototype, "fonema", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BarComponent.prototype, "mensaje", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BarComponent.prototype, "barEvent", void 0);
BarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar.component.scss */ "./src/app/components/phoneme-view/bar/bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BarComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS12aWV3L3Bob25lbWUtY29uc29uYW50LXBhbmVsL3Bob25lbWUtY29uc29uYW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PhonemeConsonantPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeConsonantPanelComponent", function() { return PhonemeConsonantPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeConsonantPanelComponent = class PhonemeConsonantPanelComponent {
    constructor() { }
    ngOnInit() { }
    playAudio(event) { }
};
PhonemeConsonantPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-consonant-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-consonant-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-consonant-panel.component.scss */ "./src/app/components/phoneme-view/phoneme-consonant-panel/phoneme-consonant-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhonemeConsonantPanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.audioFonema {\n  margin-left: 226px;\n  margin-right: 235px;\n  margin-top: 91px;\n}\n\n.imagen {\n  width: 357px;\n  height: 358px;\n}\n\n.btnPlay {\n  width: 103px;\n  height: 103px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.rowPalabra {\n  margin-left: 309px;\n  margin-right: 318px;\n}\n\n.palabra {\n  margin-left: 309px;\n  margin-right: 318px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 90px;\n  text-align: center;\n  color: #109CF1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZS12aWV3XFxwaG9uZW1lLXBhbmVsXFxwaG9uZW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXBhbmVsL3Bob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXBhbmVsL3Bob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG4uYXVkaW9Gb25lbWF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjI2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOTFweDtcclxufVxyXG4uaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDM1N3B4O1xyXG4gICAgaGVpZ2h0OiAzNThweDsgICAgXHJcbn1cclxuLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogMTAzcHg7XHJcbiAgICBoZWlnaHQ6IDEwM3B4OyAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbn1cclxuLnJvd1BhbGFicmF7XHJcbiAgICBtYXJnaW4tbGVmdDogMzA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMxOHB4O1xyXG59XHJcbi5wYWxhYnJhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzEwOUNGMTsgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmF1ZGlvRm9uZW1hIHtcbiAgbWFyZ2luLWxlZnQ6IDIyNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xuICBtYXJnaW4tdG9wOiA5MXB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDM1N3B4O1xuICBoZWlnaHQ6IDM1OHB4O1xufVxuXG4uYnRuUGxheSB7XG4gIHdpZHRoOiAxMDNweDtcbiAgaGVpZ2h0OiAxMDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG59XG5cbi5yb3dQYWxhYnJhIHtcbiAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMxOHB4O1xufVxuXG4ucGFsYWJyYSB7XG4gIG1hcmdpbi1sZWZ0OiAzMDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMThweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEwOUNGMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PhonemePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemePanelComponent", function() { return PhonemePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/audio/fonemas/vocales/data.vocales */ "./src/data/audio/fonemas/vocales/data.vocales.ts");



let PhonemePanelComponent = class PhonemePanelComponent {
    constructor() {
        this.audios = [];
        this.audio = new Audio();
    }
    ngOnInit() {
        this.getAudios(this.fonema);
        console.log(this.audios[0].audio);
        this.imagen = this.audios[0].imagen;
        this.palabra = this.audios[0].nombre;
        console.log(this.imagen);
        this.cantidadAudios = 0;
    }
    playAudio(event) {
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
    reviewAudio(event) {
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
    getAudios(value) {
        for (let i = 0; i < _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__["VOCALES"].length; i++) {
            if (_data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__["VOCALES"][i].vocal === value) {
                this.audios = _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_2__["VOCALES"][i].data;
                break;
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemePanelComponent.prototype, "fonema", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemePanelComponent.prototype, "imagen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemePanelComponent.prototype, "palabra", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemePanelComponent.prototype, "comando", void 0);
PhonemePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-panel.component.scss */ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhonemePanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-view.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-view.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xccGhvbmVtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS12aWV3L3Bob25lbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4ucGFuZWx7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4uYmFye1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgaGVpZ2h0OiA2MjNweDsgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: PhonemeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeViewComponent", function() { return PhonemeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_data_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/data.videos */ "./src/data/data.videos.ts");
/* harmony import */ var _models_video_selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/video-selected */ "./src/app/models/video-selected.ts");




let PhonemeViewComponent = class PhonemeViewComponent {
    constructor() {
        this.videoData = new _models_video_selected__WEBPACK_IMPORTED_MODULE_3__["VideoSelected"]();
        this.visiblePhoneme = true;
        this.visibleVideo = false;
    }
    ngOnInit() {
        this.getVideo(this.valueFonemaView);
    }
    selectPanel(value) {
        console.log(value);
        this.setVisible(value);
    }
    setVisible(value) {
        if (value === 'video') {
            this.visibleVideo = true;
            this.visiblePhoneme = false;
        }
        if (value === 'phoneme') {
            this.visibleVideo = false;
            this.visiblePhoneme = true;
        }
    }
    getVideo(value) {
        for (let i = 0; i < _data_data_videos__WEBPACK_IMPORTED_MODULE_2__["VIDEOS"].length; i++) {
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeViewComponent.prototype, "valueFonemaView", void 0);
PhonemeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-view.component.scss */ "./src/app/components/phoneme-view/phoneme-view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhonemeViewComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/video-panel/video-panel.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/phoneme-view/video-panel/video-panel.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.row {\n  margin-top: 100px;\n  margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvdmlkZW8tcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xcdmlkZW8tcGFuZWxcXHZpZGVvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy92aWRlby1wYW5lbC92aWRlby1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvdmlkZW8tcGFuZWwvdmlkZW8tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxufVxyXG5cclxuLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/phoneme-view/video-panel/video-panel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/phoneme-view/video-panel/video-panel.component.ts ***!
  \******************************************************************************/
/*! exports provided: VideoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPanelComponent", function() { return VideoPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoPanelComponent = class VideoPanelComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], VideoPanelComponent.prototype, "video", void 0);
VideoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/video-panel/video-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-panel.component.scss */ "./src/app/components/phoneme-view/video-panel/video-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideoPanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 58px;\n  left: 20px;\n}\n\n.row {\n  margin-left: 91px;\n  margin-right: 92px;\n}\n\n.phonemeButton {\n  width: 159px;\n  height: 77px;\n  background: #7A84DD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  line-height: 52px;\n  text-transform: initial;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL2NvbnNvbmFudC1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZVxcY29uc29uYW50LXBhbmVsXFxjb25zb25hbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9jb25zb25hbnQtcGFuZWwvY29uc29uYW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUvY29uc29uYW50LXBhbmVsL2NvbnNvbmFudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiA5MXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5MnB4O1xyXG59XHJcbi5waG9uZW1lQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4OyAgICBcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA5MXB4O1xuICBtYXJnaW4tcmlnaHQ6IDkycHg7XG59XG5cbi5waG9uZW1lQnV0dG9uIHtcbiAgd2lkdGg6IDE1OXB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsonantPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantPanelComponent", function() { return ConsonantPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ConsonantPanelComponent = class ConsonantPanelComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    goToPhoneme($event) {
        this.navCtrl.navigateForward('/fonema');
    }
};
ConsonantPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ConsonantPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonant-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonant-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonant-panel.component.scss */ "./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ConsonantPanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 43px;\n  right: 46px;\n  top: 106px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 319px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUtYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFxwaG9uZW1lLWJhclxccGhvbmVtZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWJhci9waG9uZW1lLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGtCQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWJhci9waG9uZW1lLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGhlaWdodDogNjIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5pbWFnZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBoZWlnaHQ6IDIxM3B4O1xyXG4gICAgbGVmdDogNDNweDtcclxuICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgdG9wOiAxMDZweDsgICAgXHJcbn1cclxuLnRpdHVsb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMjZweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICByaWdodDogNDFweDtcclxuICAgIHRvcDogMzE5cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbn1cclxuXHJcbi5jb21hbmRvMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDA2cHg7ICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG59XHJcbi5jb21hbmRvMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDY3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgICBcclxufVxyXG4uY29tYW5kbzN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyMHB4OyBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgXHJcbn1cclxuLmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogMzkycHg7ICAgICBcclxufVxyXG4uYnRuQ29tYW5kbzF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjU5cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDM5MnB4OyAgXHJcbn1cclxuLmJ0bkNvbWFuZG8ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgdG9wOiA0NTNweDtcclxufVxyXG4uYnRuQ29tYW5kbzN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjU5cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDUyMHB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjEzcHg7XG4gIGhlaWdodDogMjEzcHg7XG4gIGxlZnQ6IDQzcHg7XG4gIHJpZ2h0OiA0NnB4O1xuICB0b3A6IDEwNnB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjI2cHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogNTBweDtcbiAgcmlnaHQ6IDQxcHg7XG4gIHRvcDogMzE5cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDY3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb21hbmRvMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDM5MnB4O1xufVxuXG4uYnRuQ29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogMzkycHg7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA0NTNweDtcbn1cblxuLmJ0bkNvbWFuZG8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDUyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts ***!
  \*************************************************************************/
/*! exports provided: PhonemeBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeBarComponent", function() { return PhonemeBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeBarComponent = class PhonemeBarComponent {
    constructor() {
        this.phonemeBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openPanel(event) {
        console.log(event.target.value);
        this.phonemeBarEvent.emit(event.target.value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeBarComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeBarComponent.prototype, "comando1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeBarComponent.prototype, "comando2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeBarComponent.prototype, "comando3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeBarComponent.prototype, "phonemeBarEvent", void 0);
PhonemeBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-bar.component.scss */ "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhonemeBarComponent);



/***/ }),

/***/ "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.rowSilaba {\n  margin-top: 88px;\n  margin-left: 197px;\n  margin-right: 190px;\n  width: 431px;\n  height: 176px;\n}\n\n.silaba {\n  width: 176px;\n  height: 176px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 65px;\n  line-height: 97px;\n  /* identical to box height */\n  color: #FFFFFF;\n}\n\n.imagen {\n  width: 177px;\n  height: 177px;\n}\n\n.rowBtn {\n  width: 51px;\n  height: 51px;\n}\n\n.btnPlay {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.row {\n  margin-top: 4px;\n  margin-left: 50px;\n  margin-right: 50px;\n  width: 705px;\n  height: 77px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUtZ2FtZS1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZVxccGhvbmVtZS1nYW1lLXBhbmVsXFxwaG9uZW1lLWdhbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWdhbWUtcGFuZWwvcGhvbmVtZS1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFHQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRko7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWdhbWUtcGFuZWwvcGhvbmVtZS1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIC8vbGVmdDogMjJweDtcclxuICAgIC8vdG9wOiA0N3B4OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcblxyXG4ucm93U2lsYWJhe1xyXG4gICAgbWFyZ2luLXRvcDogODhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTkwcHg7XHJcbiAgICB3aWR0aDogNDMxcHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG59XHJcbi5zaWxhYmF7XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZDRDI2MDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDk3cHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxufVxyXG4uaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgaGVpZ2h0OiAxNzdweDsgICAgXHJcbn1cclxuLnJvd0J0bntcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4OyAgICBcclxufVxyXG5cclxuLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREOyAgICAgXHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwNXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJvd1NpbGFiYSB7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcbiAgd2lkdGg6IDQzMXB4O1xuICBoZWlnaHQ6IDE3NnB4O1xufVxuXG4uc2lsYWJhIHtcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDk3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDE3N3B4O1xuICBoZWlnaHQ6IDE3N3B4O1xufVxuXG4ucm93QnRuIHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNTFweDtcbn1cblxuLmJ0blBsYXkge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgd2lkdGg6IDcwNXB4O1xuICBoZWlnaHQ6IDc3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PhonemeGamePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeGamePanelComponent", function() { return PhonemeGamePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeGamePanelComponent = class PhonemeGamePanelComponent {
    constructor() {
        this.audio = new Audio();
    }
    ngOnInit() { }
    playAudio(event) {
        this.audio.src = 'assets/audio/Mama.mp3';
        this.audio.load();
        this.audio.play();
        console.log(event.target.value);
    }
};
PhonemeGamePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-game-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-game-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-game-panel.component.scss */ "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhonemeGamePanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme/phoneme.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/phoneme/phoneme.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFxwaG9uZW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUvcGhvbmVtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLnBhbmVse1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLmJhcntcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGhlaWdodDogNjIzcHg7ICAgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/phoneme/phoneme.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/phoneme/phoneme.component.ts ***!
  \*********************************************************/
/*! exports provided: PhonemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeComponent", function() { return PhonemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeComponent = class PhonemeComponent {
    constructor() {
        this.visibleVocal = true;
        this.visibleConsonant = false;
        this.visibleGame = false;
    }
    ngOnInit() { }
    selectPanel(value) {
        console.log(value);
        this.setVisible(value);
    }
    setVisible(value) {
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
};
PhonemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme.component.scss */ "./src/app/components/phoneme/phoneme.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhonemeComponent);



/***/ }),

/***/ "./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.phonemeButton {\n  width: 159px;\n  height: 77px;\n  background: #7A84DD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 35px;\n  line-height: 52px;\n  text-transform: initial;\n  color: #FFFFFF;\n}\n\n.row {\n  margin-left: 91px;\n  margin-right: 92px;\n}\n\n.rowDebiles {\n  margin-left: 195px;\n  margin-right: 183px;\n}\n\n.grid {\n  margin-top: 218px;\n  left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3ZvY2FsLXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFx2b2NhbC1wYW5lbFxcdm9jYWwtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS92b2NhbC1wYW5lbC92b2NhbC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBR0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3ZvY2FsLXBhbmVsL3ZvY2FsLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIC8vbGVmdDogMjJweDtcclxuICAgIC8vdG9wOiA0N3B4OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5waG9uZW1lQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4OyAgICBcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgICBcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkycHg7XHJcbn1cclxuXHJcbi5yb3dEZWJpbGVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxODNweDtcclxufVxyXG4uZ3JpZHtcclxuICAgIG1hcmdpbi10b3A6IDIxOHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5waG9uZW1lQnV0dG9uIHtcbiAgd2lkdGg6IDE1OXB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA5MXB4O1xuICBtYXJnaW4tcmlnaHQ6IDkycHg7XG59XG5cbi5yb3dEZWJpbGVzIHtcbiAgbWFyZ2luLWxlZnQ6IDE5NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4M3B4O1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDIxOHB4O1xuICBsZWZ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: VocalPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocalPanelComponent", function() { return VocalPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let VocalPanelComponent = class VocalPanelComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    goToPhoneme(event) {
        console.log(event.target.value);
        this.value = event.target.value;
        this.navCtrl.navigateForward(['/fonema', this.value]);
    }
};
VocalPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
VocalPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vocal-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vocal-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vocal-panel.component.scss */ "./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], VocalPanelComponent);



/***/ }),

/***/ "./src/app/components/professor/list/list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/professor/list/list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  --background: transparent;\n  width: 600px;\n  height: 600px;\n  margin-top: 71px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.row {\n  text-align: center;\n  width: 600px;\n  height: 65px;\n  margin-bottom: 39px;\n}\n\n.btnEstudiante {\n  width: 574px;\n  height: 65px;\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvbGlzdC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc29yXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzFweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgICBcclxufVxyXG4ucHJpbmNpcGFsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOXB4O1xyXG59XHJcbi5idG5Fc3R1ZGlhbnRle1xyXG4gICAgd2lkdGg6IDU3NHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW4tdG9wOiA3MXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wcmluY2lwYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM5cHg7XG59XG5cbi5idG5Fc3R1ZGlhbnRlIHtcbiAgd2lkdGg6IDU3NHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/professor/list/list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/professor/list/list.component.ts ***!
  \*************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");




let ListComponent = class ListComponent {
    constructor(studentService, router) {
        this.studentService = studentService;
        this.router = router;
    }
    ngOnInit() {
        this.getNameStudents();
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.getNameStudents();
    }
    getNameStudents() {
        this.studentService.getNameStudents()
            .then((nameStudent) => {
            this.nameStudents = nameStudent;
        })
            .catch(err => {
            console.log(err);
        });
    }
    getStudent(_idStudent) {
        this.router.navigate(['estudiantes'], { queryParams: { _id: _idStudent } });
    }
};
ListComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ListComponent.prototype, "nombre", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/components/professor/list/list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ListComponent);



/***/ }),

/***/ "./src/app/components/professor/professor.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/professor/professor.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1081px;\n  height: 696px;\n}\n\n.panel {\n  left: 22px;\n  width: 574px;\n  height: 696px;\n}\n\n.bar {\n  width: 345px;\n  height: 696px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3NvclxccHJvZmVzc29yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9wcm9mZXNzb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcHJvZmVzc29yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMDgxcHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4O1xyXG59XHJcbi5wYW5lbHtcclxuICAgIGxlZnQ6IDIycHg7XHJcbiAgICB3aWR0aDogNTc0cHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4O1xyXG59XHJcbi5iYXJ7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4OyAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTA4MXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xufVxuXG4ucGFuZWwge1xuICBsZWZ0OiAyMnB4O1xuICB3aWR0aDogNTc0cHg7XG4gIGhlaWdodDogNjk2cHg7XG59XG5cbi5iYXIge1xuICB3aWR0aDogMzQ1cHg7XG4gIGhlaWdodDogNjk2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/professor/professor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/professor/professor.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfessorComponent = class ProfessorComponent {
    constructor() {
        this.visibleRegister = true;
        this.visibleList = false;
    }
    ngOnInit() { }
    selectPanel(value) {
        console.log(value);
        this.setVisible(value);
    }
    setVisible(value) {
        if (value === 'agregar') {
            this.visibleRegister = true;
            this.visibleList = false;
        }
        if (value === 'lista') {
            this.visibleRegister = false;
            this.visibleList = true;
        }
    }
};
ProfessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./professor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/professor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./professor.component.scss */ "./src/app/components/professor/professor.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfessorComponent);



/***/ }),

/***/ "./src/app/components/professor/register/register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/professor/register/register.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 590px;\n  height: 664px;\n  margin-top: 16px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n}\n\n.label {\n  width: 393px;\n  height: 22px;\n  margin-left: 85px;\n  margin-right: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n\n.grid {\n  margin-left: 99px;\n  margin-right: 98px;\n  text-align: center;\n}\n\n.input {\n  width: 393px;\n  height: 38px;\n  background: #ECEEFD;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 2px;\n}\n\n.btnGuardar {\n  width: 127px;\n  height: 41px;\n  margin-left: 266px;\n  background: #5F659C;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcmVnaXN0ZXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3NvclxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogNTkwcHg7XHJcbiAgICBoZWlnaHQ6IDY2NHB4OyAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgIFxyXG59XHJcbi5sYWJlbHtcclxuICAgIHdpZHRoOiAzOTNweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxufVxyXG4uZ3JpZHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5OXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dHtcclxuICAgIHdpZHRoOiAzOTNweDtcclxuICAgIGhlaWdodDogMzhweDsgIFxyXG4gICAgYmFja2dyb3VuZDogI0VDRUVGRDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyAgXHJcbiAgICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7ICAgICAgXHJcbn1cclxuLmJ0bkd1YXJkYXJ7XHJcbiAgICB3aWR0aDogMTI3cHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyNjZweDtcclxuICAgIGJhY2tncm91bmQ6ICM1RjY1OUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA1OTBweDtcbiAgaGVpZ2h0OiA2NjRweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmxhYmVsIHtcbiAgd2lkdGg6IDM5M3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA4NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDk5cHg7XG4gIG1hcmdpbi1yaWdodDogOThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZDogI0VDRUVGRDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuR3VhcmRhciB7XG4gIHdpZHRoOiAxMjdweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBtYXJnaW4tbGVmdDogMjY2cHg7XG4gIGJhY2tncm91bmQ6ICM1RjY1OUM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/professor/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/professor/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let RegisterComponent = class RegisterComponent {
    constructor(studentService, userService, router) {
        this.studentService = studentService;
        this.userService = userService;
        this.router = router;
        this.newStudent = new _models_student__WEBPACK_IMPORTED_MODULE_4__["Student"];
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
    }
    ngOnInit() { }
    setName(event) {
        this.newStudent.nombre = event.target.value;
    }
    setAge(event) {
        this.newStudent.edad = event.target.value;
    }
    setGender(event) {
        this.newStudent.sexo = event.target.value;
    }
    setAddress(event) {
        this.newStudent.encargadoLegal.direccion = event.target.value;
    }
    setLegalOfficer(event) {
        this.newStudent.encargadoLegal.nombre = event.target.value;
    }
    setEmail(event) {
        this.newUser.email = event.target.value;
    }
    setPassword(event) {
        this.newUser.password = event.target.value;
    }
    register() {
        delete this.newStudent._id;
        this.studentService.createStudent(this.newStudent)
            .then((student) => {
            console.log(student);
            delete this.newUser._id;
            this.newUser.tipo = "Estudiante";
            this.newUser.idUsuario = student._id;
            this.userService.createUser(this.newUser)
                .then((userToken) => {
                console.log(userToken);
                this.router.navigate(['estudiantes'], { queryParams: { _id: student._id } });
            })
                .catch(err => {
                console.log("Error creando usuario", err);
            });
        })
            .catch(err => {
            console.log("Error creando estudiante", err);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "nombre", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "edad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "genero", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "residencia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "encargado", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "email", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "password", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RegisterComponent.prototype, "comando", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/professor/register/register.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/function-bar/function-bar.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/function-bar/function-bar.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 345px;\n  height: 696px;\n  background: #7A84DD;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 66px;\n  right: 66px;\n  top: 120px;\n}\n\n.titulo {\n  position: absolute;\n  width: 303px;\n  height: 72px;\n  left: 21px;\n  right: 21px;\n  top: 346px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 41px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 443px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 519px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2Z1bmN0aW9uLWJhci9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc29yXFxzdHVkZW50LWluZm9cXGZ1bmN0aW9uLWJhclxcZnVuY3Rpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vZnVuY3Rpb24tYmFyL2Z1bmN0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFFQSxjQUFBO0FDSEo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzc29yL3N0dWRlbnQtaW5mby9mdW5jdGlvbi1iYXIvZnVuY3Rpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNDVweDtcclxuICAgIGhlaWdodDogNjk2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG5cclxuIC5pbWFnZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBoZWlnaHQ6IDIxM3B4O1xyXG4gICAgbGVmdDogNjZweDtcclxuICAgIHJpZ2h0OiA2NnB4O1xyXG4gICAgdG9wOiAxMjBweDsgICAgXHJcbn1cclxuLnRpdHVsb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIHRvcDogMzQ2cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJ0bkNvbWFuZG8xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogNDQzcHg7ICBcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgXHJcbn1cclxuLmJ0bkNvbWFuZG8ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogNTE5cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM0NXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xuICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjEzcHg7XG4gIGhlaWdodDogMjEzcHg7XG4gIGxlZnQ6IDY2cHg7XG4gIHJpZ2h0OiA2NnB4O1xuICB0b3A6IDEyMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNzJweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIHRvcDogMzQ2cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQxcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuQ29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDNweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBsZWZ0OiAyMXB4O1xuICByaWdodDogMjFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNDQzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzVGNjU5Qztcbn1cblxuLmJ0bkNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDUxOXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/professor/student-info/function-bar/function-bar.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/function-bar/function-bar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FunctionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionBarComponent", function() { return FunctionBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FunctionBarComponent = class FunctionBarComponent {
    constructor() {
        this.functionBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openPanel(event) {
        console.log(event.target.value);
        this.functionBarEvent.emit(event.target.value);
    }
    deleteStudent() {
        if (true) {
            this.deleteStudentEvent.emit();
        } // Confirmación de eliminación de estudiante
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FunctionBarComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FunctionBarComponent.prototype, "comando1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FunctionBarComponent.prototype, "comando2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FunctionBarComponent.prototype, "functionBarEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FunctionBarComponent.prototype, "deleteStudentEvent", void 0);
FunctionBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-function-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./function-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./function-bar.component.scss */ "./src/app/components/professor/student-info/function-bar/function-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FunctionBarComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/family-info/family-info.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/family-info/family-info.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  background: #ECEEFD;\n  width: 225px;\n  height: 29px;\n}\n\n.label {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 22px;\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvZmFtaWx5LWluZm8vQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3Nvclxcc3R1ZGVudC1pbmZvXFxpbmZvLXBhbmVsXFxmYW1pbHktaW5mb1xcZmFtaWx5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzc29yL3N0dWRlbnQtaW5mby9pbmZvLXBhbmVsL2ZhbWlseS1pbmZvL2ZhbWlseS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvZmFtaWx5LWluZm8vZmFtaWx5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRUZEO1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG59XHJcbi5sYWJlbHtcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG59IiwiLmlucHV0IHtcbiAgYmFja2dyb3VuZDogI0VDRUVGRDtcbiAgd2lkdGg6IDIyNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/family-info/family-info.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/family-info/family-info.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FamilyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyInfoComponent", function() { return FamilyInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FamilyInfoComponent = class FamilyInfoComponent {
    constructor() { }
    ngOnInit() { }
};
FamilyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-family-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./family-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/family-info/family-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./family-info.component.scss */ "./src/app/components/professor/student-info/info-panel/family-info/family-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FamilyInfoComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/food-info/food-info.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/food-info/food-info.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  height: 210px;\n  width: 250px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.label {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 22px;\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvZm9vZC1pbmZvL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzb3JcXHN0dWRlbnQtaW5mb1xcaW5mby1wYW5lbFxcZm9vZC1pbmZvXFxmb29kLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzc29yL3N0dWRlbnQtaW5mby9pbmZvLXBhbmVsL2Zvb2QtaW5mby9mb29kLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9mb29kLWluZm8vZm9vZC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7ICAgXHJcbn1cclxuLnByaW5jaXBhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIGhlaWdodDogMjEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucHJpbmNpcGFsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/food-info/food-info.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/food-info/food-info.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FoodInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodInfoComponent", function() { return FoodInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FoodInfoComponent = class FoodInfoComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.alimetacion);
    }
    changeSelected(alimento) {
        alimento.seleccionado = ((alimento.seleccionado == true) ? false : true);
        console.log(this.alimetacion);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FoodInfoComponent.prototype, "alimetacion", void 0);
FoodInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/food-info/food-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-info.component.scss */ "./src/app/components/professor/student-info/info-panel/food-info/food-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FoodInfoComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/info-panel.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/info-panel.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 705px;\n  height: 593px;\n}\n\n.titulo {\n  margin-left: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  /* identical to box height */\n  text-align: center;\n  color: #5F659C;\n}\n\n.info {\n  width: 705px;\n  height: 293px;\n  background: #ffffff;\n  border-radius: 20px;\n  margin-top: 56px;\n}\n\n.grid {\n  width: 317px;\n  height: 210px;\n  margin-top: 20px;\n}\n\n.infoFamilia {\n  width: 337px;\n  height: 262px;\n  margin-top: 38px;\n  background: #ffffff;\n  border-radius: 20px;\n}\n\n.infoAlimentos {\n  width: 337px;\n  height: 262px;\n  margin-top: 38px;\n  left: 11px;\n  background: #ffffff;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3Nvclxcc3R1ZGVudC1pbmZvXFxpbmZvLXBhbmVsXFxpbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA3MDVweDtcclxuICAgIGhlaWdodDogNTkzcHg7ICAgICBcclxufVxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUY2NTlDICAgIFxyXG59XHJcbi5pbmZve1xyXG4gICAgd2lkdGg6IDcwNXB4O1xyXG4gICAgaGVpZ2h0OiAyOTNweDsgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICBcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcblxyXG59XHJcbi5ncmlke1xyXG4gICAgd2lkdGg6IDMxN3B4O1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmluZm9GYW1pbGlhe1xyXG4gICAgd2lkdGg6IDMzN3B4O1xyXG4gICAgaGVpZ2h0OiAyNjJweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4uaW5mb0FsaW1lbnRvc3tcclxuICAgIHdpZHRoOiAzMzdweDtcclxuICAgIGhlaWdodDogMjYycHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDcwNXB4O1xuICBoZWlnaHQ6IDU5M3B4O1xufVxuXG4udGl0dWxvIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiA3MDVweDtcbiAgaGVpZ2h0OiAyOTNweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMzE3cHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbmZvRmFtaWxpYSB7XG4gIHdpZHRoOiAzMzdweDtcbiAgaGVpZ2h0OiAyNjJweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmluZm9BbGltZW50b3Mge1xuICB3aWR0aDogMzM3cHg7XG4gIGhlaWdodDogMjYycHg7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIGxlZnQ6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/info-panel.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/info-panel.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InfoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPanelComponent", function() { return InfoPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");






let InfoPanelComponent = class InfoPanelComponent {
    constructor(studentService, userService) {
        this.studentService = studentService;
        this.userService = userService;
        this.student = new _models_student__WEBPACK_IMPORTED_MODULE_3__["Student"];
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"];
    }
    ngOnInit() {
        this.studentService.getStudent(this._idStudent).
            then((student) => {
            this.student = student;
            console.log(student);
            this.userService.getUserByIdStudent(student._id)
                .then((user) => {
                this.user = user;
            })
                .catch(err => {
                console.log(err);
            });
        })
            .catch(err => {
            console.log(err);
        });
    }
};
InfoPanelComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InfoPanelComponent.prototype, "_idStudent", void 0);
InfoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-panel.component.scss */ "./src/app/components/professor/student-info/info-panel/info-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], InfoPanelComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label {\n  width: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 22px;\n  color: #5F659C;\n}\n\n.input {\n  width: 225px;\n  height: 29px;\n  background: #ECEEFD;\n}\n\n.item {\n  width: 317px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvcGVyc29uYWwtaW5mby9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc29yXFxzdHVkZW50LWluZm9cXGluZm8tcGFuZWxcXHBlcnNvbmFsLWluZm9cXHBlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzc29yL3N0dWRlbnQtaW5mby9pbmZvLXBhbmVsL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWx7XHJcbiAgICB3aWR0aDogOTBweDsgXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogIzVGNjU5QztcclxufVxyXG4uaW5wdXR7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRUZEOyAgICBcclxufVxyXG4uaXRlbXtcclxuICAgIHdpZHRoOiAzMTdweDtcclxufSIsIi5sYWJlbCB7XG4gIHdpZHRoOiA5MHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzVGNjU5Qztcbn1cblxuLmlucHV0IHtcbiAgd2lkdGg6IDIyNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDMxN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/user */ "./src/app/models/user.ts");




let PersonalInfoComponent = class PersonalInfoComponent {
    constructor() {
        this.renderer = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        document.getElementById("nombre").setAttribute("value", ((this.student.nombre.toString() != 'none') ? this.student.nombre.toString() : ""));
        document.getElementById("cedula").setAttribute("value", ((this.student.cedula.toString() != 'none') ? this.student.cedula.toString() : ""));
        document.getElementById("sexo").setAttribute("value", ((this.student.sexo.toString() != 'none') ? this.student.sexo.toString() : ""));
        document.getElementById("edad").setAttribute("value", this.student.edad.toString());
        document.getElementById("encargado_nombre").setAttribute("value", ((this.student.encargadoLegal.nombre.toString() != 'none') ? this.student.encargadoLegal.nombre.toString() : ""));
        document.getElementById("encargado_profesion").setAttribute("value", ((this.student.encargadoLegal.profesion.toString() != 'none') ? this.student.encargadoLegal.profesion.toString() : ""));
        document.getElementById("encargado_telefono").setAttribute("value", ((this.student.encargadoLegal.telefono.toString() != 'none') ? this.student.encargadoLegal.telefono.toString() : ""));
        document.getElementById("encargado_direccion").setAttribute("value", ((this.student.encargadoLegal.direccion.toString() != 'none') ? this.student.encargadoLegal.direccion.toString() : ""));
        document.getElementById("email").setAttribute("value", ((this.user.email != 'none') ? this.user.email.toString() : ""));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_student__WEBPACK_IMPORTED_MODULE_2__["Student"])
], PersonalInfoComponent.prototype, "student", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user__WEBPACK_IMPORTED_MODULE_3__["User"])
], PersonalInfoComponent.prototype, "user", void 0);
PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/components/professor/student-info/info-panel/personal-info/personal-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonalInfoComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/student-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/professor/student-info/student-info.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1151px;\n  height: 696px;\n}\n\n.bar {\n  width: 345px;\n  height: 696px;\n}\n\n.panel {\n  width: 705px;\n  height: 593px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzb3JcXHN0dWRlbnQtaW5mb1xcc3R1ZGVudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vc3R1ZGVudC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQUNBLGFBQUE7QUNDSDs7QURDQTtFQUNHLFlBQUE7RUFDQSxhQUFBO0FDRUg7O0FEQ0E7RUFDRyxZQUFBO0VBQ0EsYUFBQTtBQ0VIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL3N0dWRlbnQtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgIHdpZHRoOiAxMTUxcHg7IFxyXG4gICBoZWlnaHQ6IDY5NnB4O1xyXG59XHJcbi5iYXJ7XHJcbiAgIHdpZHRoOiAzNDVweDtcclxuICAgaGVpZ2h0OiA2OTZweDsgXHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgd2lkdGg6IDcwNXB4O1xyXG4gICBoZWlnaHQ6IDU5M3B4OyBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTE1MXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDM0NXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xufVxuXG4ucGFuZWwge1xuICB3aWR0aDogNzA1cHg7XG4gIGhlaWdodDogNTkzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/professor/student-info/student-info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/professor/student-info/student-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StudentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInfoComponent", function() { return StudentInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let StudentInfoComponent = class StudentInfoComponent {
    constructor(studentService, router) {
        this.studentService = studentService;
        this.router = router;
    }
    ngOnInit() {
    }
    deleteStudent() {
        this.studentService.putDisableStudent(this._idStudent)
            .then(message => {
            window.open('/docentes', '_self');
        })
            .catch(err => {
            console.log(err);
        });
    }
};
StudentInfoComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentInfoComponent.prototype, "_idStudent", void 0);
StudentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-info.component.scss */ "./src/app/components/professor/student-info/student-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], StudentInfoComponent);



/***/ }),

/***/ "./src/app/components/professor/students-bar/students-bar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/professor/students-bar/students-bar.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 345px;\n  height: 696px;\n  background: #7A84DD;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 66px;\n  right: 66px;\n  top: 120px;\n}\n\n.titulo {\n  position: absolute;\n  width: 303px;\n  height: 72px;\n  left: 21px;\n  right: 21px;\n  top: 346px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 41px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 443px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 519px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudHMtYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzb3JcXHN0dWRlbnRzLWJhclxcc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50cy1iYXIvc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUM7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudHMtYmFyL3N0dWRlbnRzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICBoZWlnaHQ6IDY5NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIH1cclxuXHJcbiAuaW1hZ2Vue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIxM3B4O1xyXG4gICAgaGVpZ2h0OiAyMTNweDtcclxuICAgIGxlZnQ6IDY2cHg7XHJcbiAgICByaWdodDogNjZweDtcclxuICAgIHRvcDogMTIwcHg7ICAgIFxyXG59XHJcbi50aXR1bG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzAzcHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBsZWZ0OiAyMXB4O1xyXG4gICAgcmlnaHQ6IDIxcHg7XHJcbiAgICB0b3A6IDM0NnB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5idG5Db21hbmRvMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDQ0M3B4OyAgXHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG59XHJcbi5idG5Db21hbmRvMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDUxOXB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNDVweDtcbiAgaGVpZ2h0OiA2OTZweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxM3B4O1xuICBoZWlnaHQ6IDIxM3B4O1xuICBsZWZ0OiA2NnB4O1xuICByaWdodDogNjZweDtcbiAgdG9wOiAxMjBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICB0b3A6IDM0NnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MXB4O1xuICBsaW5lLWhlaWdodDogNjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ0M3B4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MTlweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/professor/students-bar/students-bar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/professor/students-bar/students-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StudentsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsBarComponent", function() { return StudentsBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentsBarComponent = class StudentsBarComponent {
    constructor() {
        this.studentsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openPanel(event) {
        console.log(event.target.value);
        this.studentsBarEvent.emit(event.target.value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsBarComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsBarComponent.prototype, "comando1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StudentsBarComponent.prototype, "comando2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentsBarComponent.prototype, "studentsBarEvent", void 0);
StudentsBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./students-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./students-bar.component.scss */ "./src/app/components/professor/students-bar/students-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudentsBarComponent);



/***/ }),

/***/ "./src/app/components/semantics/categories-panel/categories-panel.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/semantics/categories-panel/categories-panel.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 58px;\n  left: 20px;\n}\n\n.row {\n  margin-left: 60px;\n  margin-right: 53px;\n}\n\n.lastRow {\n  margin-left: 188px;\n  margin-right: 182px;\n}\n\n.phonemeButton {\n  width: 176px;\n  height: 85px;\n  background: #7A84DD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 36px;\n  text-transform: initial;\n  text-align: center;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvY2F0ZWdvcmllcy1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VtYW50aWNzXFxjYXRlZ29yaWVzLXBhbmVsXFxjYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9jYXRlZ29yaWVzLXBhbmVsL2NhdGVnb3JpZXMtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvY2F0ZWdvcmllcy1wYW5lbC9jYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbn1cclxuLmdyaWR7XHJcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUzcHg7XHJcbn1cclxuLmxhc3RSb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMTg4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4MnB4OyAgICBcclxufVxyXG4ucGhvbmVtZUJ1dHRvbntcclxuICAgIHdpZHRoOiAxNzZweDtcclxuICAgIGhlaWdodDogODVweDsgIFxyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgIFxyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgICAgICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tdG9wOiA1OHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNTNweDtcbn1cblxuLmxhc3RSb3cge1xuICBtYXJnaW4tbGVmdDogMTg4cHg7XG4gIG1hcmdpbi1yaWdodDogMTgycHg7XG59XG5cbi5waG9uZW1lQnV0dG9uIHtcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/semantics/categories-panel/categories-panel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/semantics/categories-panel/categories-panel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoriesPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPanelComponent", function() { return CategoriesPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let CategoriesPanelComponent = class CategoriesPanelComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    goToCategories($event) {
        this.navCtrl.navigateForward('/categoria');
    }
};
CategoriesPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
CategoriesPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-panel.component.scss */ "./src/app/components/semantics/categories-panel/categories-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CategoriesPanelComponent);



/***/ }),

/***/ "./src/app/components/semantics/semantics-bar/semantics-bar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/semantics/semantics-bar/semantics-bar.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #52D7C6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 44px;\n  right: 45px;\n  top: 106px;\n}\n\n.titulo {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 319px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.titulo2 {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 369px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 442px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 503px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3Mvc2VtYW50aWNzLWJhci9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VtYW50aWNzXFxzZW1hbnRpY3MtYmFyXFxzZW1hbnRpY3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtYmFyL3NlbWFudGljcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDRFI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3NlbWFudGljcy1iYXIvc2VtYW50aWNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjIzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUyRDdDNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Vue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTNweDtcclxuICAgICAgICBsZWZ0OiA0NHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHRvcDogMTA2cHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMzE5cHg7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiAgICB9XHJcbiAgICAudGl0dWxvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMzY5cHg7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvMXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MDZweDsgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NjdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgICAgXHJcbiAgICB9XHJcbiAgICAuY29tYW5kbzN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTIwcHg7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgIFxyXG4gICAgfVxyXG4gICAgLmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgICAgICB0b3A6IDM5MnB4OyAgICAgXHJcbiAgICB9XHJcbiAgICAuYnRuQ29tYW5kbzF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNTlweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICByaWdodDogMjNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgICAgdG9wOiA0NDJweDsgIFxyXG5cclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICBcclxuICAgIH1cclxuICAgIC5idG5Db21hbmRvMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0JDRkZGNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgICAgIHRvcDogNTAzcHg7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbiAgYmFja2dyb3VuZDogIzUyRDdDNjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxM3B4O1xuICBoZWlnaHQ6IDIxM3B4O1xuICBsZWZ0OiA0NHB4O1xuICByaWdodDogNDVweDtcbiAgdG9wOiAxMDZweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDIycHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDMxOXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdHVsbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjBweDtcbiAgdG9wOiAzNjlweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6ICNCQ0ZGRjc7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ0MnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MDNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/semantics/semantics-bar/semantics-bar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/semantics/semantics-bar/semantics-bar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SemanticsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticsBarComponent", function() { return SemanticsBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticsBarComponent = class SemanticsBarComponent {
    constructor() {
        this.semanticsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openPanel(event) {
        console.log(event.target.value);
        this.semanticsBarEvent.emit(event.target.value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SemanticsBarComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SemanticsBarComponent.prototype, "titulo2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SemanticsBarComponent.prototype, "comando1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SemanticsBarComponent.prototype, "comando2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SemanticsBarComponent.prototype, "comando3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SemanticsBarComponent.prototype, "semanticsBarEvent", void 0);
SemanticsBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantics-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantics-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-bar/semantics-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantics-bar.component.scss */ "./src/app/components/semantics/semantics-bar/semantics-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SemanticsBarComponent);



/***/ }),

/***/ "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 57px;\n  left: 56px;\n}\n\n.sujeto {\n  width: 230px;\n  height: 230px;\n  margin-left: auto;\n  background: url('black.svg');\n  background-size: auto;\n}\n\n.verbo {\n  width: 161px;\n  height: 161px;\n  margin-top: 34px;\n  margin-left: 42px;\n  margin-right: 43px;\n  background: url('red.svg');\n  background-size: auto;\n}\n\n.predicado {\n  width: 230px;\n  height: 230px;\n  margin-right: auto;\n  background: url('green.svg');\n  background-size: auto;\n}\n\n.element {\n  margin-left: auto;\n  margin-right: auto;\n  width: 176px;\n  height: 176px;\n  background: url('element.svg');\n  background-size: auto;\n}\n\n.options {\n  margin-top: 32px;\n}\n\n.palabras {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.semantica {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.imagen {\n  width: 161px;\n  height: 161px;\n}\n\n.example-box {\n  width: 161px;\n  height: 161px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 100px;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbWFudGljc1xcc2VtYW50aWNzLWdhbWUtcGFuZWxcXHNlbWFudGljcy1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9zZW1hbnRpY3MtZ2FtZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDT0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrREFBQTtFQUFBLHVEQUFBO0VBQ0EsK0dBQUE7QUNNSjs7QURERTtFQUNFLHFIQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9zZW1hbnRpY3MtZ2FtZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNTdweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbn1cclxuLnN1amV0b3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvYmxhY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbn1cclxuLnZlcmJve1xyXG4gICAgd2lkdGg6IDE2MXB4O1xyXG4gICAgaGVpZ2h0OiAxNjFweDtcclxuICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDNweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvcmVkLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ucHJlZGljYWRve1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87ICAgIFxyXG59XHJcbi5lbGVtZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ub3B0aW9uc3tcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLnBhbGFicmFze1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7IFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICMzQzNDM0M7ICAgIFxyXG59XHJcbi5zZW1hbnRpY2F7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDU3cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5zdWpldG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9ibGFjay5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbn1cblxuLnZlcmJvIHtcbiAgd2lkdGg6IDE2MXB4O1xuICBoZWlnaHQ6IDE2MXB4O1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA0M3B4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9yZWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5wcmVkaWNhZG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5lbGVtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuXG4ub3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wYWxhYnJhcyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzQzNDM0M7XG59XG5cbi5zZW1hbnRpY2Ege1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMTYxcHg7XG4gIGhlaWdodDogMTYxcHg7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAxNjFweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SemanticsGamePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticsGamePanelComponent", function() { return SemanticsGamePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticsGamePanelComponent = class SemanticsGamePanelComponent {
    constructor() {
        this.q1 = [];
        this.q2 = [];
        this.q3 = [];
    }
    ngOnInit() { }
};
SemanticsGamePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantics-game-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantics-game-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantics-game-panel.component.scss */ "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SemanticsGamePanelComponent);



/***/ }),

/***/ "./src/app/components/semantics/semantics.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/semantics/semantics.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbWFudGljc1xcc2VtYW50aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREVJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ1I7O0FEQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3NlbWFudGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICB9XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgbGVmdDogMjJweDtcclxuICAgICAgICB3aWR0aDogODE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIH1cclxuICAgIC5iYXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjIzcHg7ICAgIFxyXG4gICAgfSBcclxuICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI2cHg7ICAgIFxyXG4gICAgICAgIH0gICBcclxuXHJcblxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDExNDJweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLnBhbmVsIHtcbiAgbGVmdDogMjJweDtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/semantics/semantics.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/semantics/semantics.component.ts ***!
  \*************************************************************/
/*! exports provided: SemanticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticsComponent", function() { return SemanticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticsComponent = class SemanticsComponent {
    constructor() {
        this.visibleCategories = true;
        this.visibleGame = false;
    }
    ngOnInit() { }
    selectPanel(value) {
        console.log(value);
        this.setVisible(value);
    }
    setVisible(value) {
        if (value === 'categorias') {
            this.visibleCategories = true;
            this.visibleGame = false;
        }
        if (value === 'jugar') {
            this.visibleCategories = false;
            this.visibleGame = true;
        }
    }
};
SemanticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantics.component.scss */ "./src/app/components/semantics/semantics.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SemanticsComponent);



/***/ }),

/***/ "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy1iYXIvc3ViY2F0ZWdvcmllcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SubcategoriesBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriesBarComponent", function() { return SubcategoriesBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoriesBarComponent = class SubcategoriesBarComponent {
    constructor() { }
    ngOnInit() { }
};
SubcategoriesBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategories-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subcategories-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subcategories-bar.component.scss */ "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoriesBarComponent);



/***/ }),

/***/ "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy1wYW5lbC9zdWJjYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SubcategoriesPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriesPanelComponent", function() { return SubcategoriesPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoriesPanelComponent = class SubcategoriesPanelComponent {
    constructor() { }
    ngOnInit() { }
};
SubcategoriesPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategories-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subcategories-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subcategories-panel.component.scss */ "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoriesPanelComponent);



/***/ }),

/***/ "./src/app/components/semantics/subcategories/subcategories.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/semantics/subcategories/subcategories.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/semantics/subcategories/subcategories.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/semantics/subcategories/subcategories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SubcategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriesComponent", function() { return SubcategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoriesComponent = class SubcategoriesComponent {
    constructor() { }
    ngOnInit() { }
};
SubcategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subcategories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/subcategories/subcategories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subcategories.component.scss */ "./src/app/components/semantics/subcategories/subcategories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoriesComponent);



/***/ }),

/***/ "./src/app/models/student.ts":
/*!***********************************!*\
  !*** ./src/app/models/student.ts ***!
  \***********************************/
/*! exports provided: Alimentos, Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alimentos", function() { return Alimentos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EncargadoLegal {
    constructor(nombre = "none", profesion = "none", telefono = "none", direccion = "none") {
        this.nombre = nombre;
        this.profesion = profesion;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
class Alimentos {
    constructor(alimento = "none", seleccionado = false) {
        this.alimento = alimento;
        this.seleccionado = seleccionado;
    }
}
class Student {
    constructor(_id = "none", nombre = "none", cedula = "none", sexo = "none", edad = 0, encargadoLegal = new EncargadoLegal, familia = [], alimentacion = []) {
        this._id = _id;
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.edad = edad;
        this.encargadoLegal = encargadoLegal;
        this.familia = familia;
        this.alimentacion = alimentacion;
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(_id = "none", idUsuario = "none", email = "none", password = "none", tipo = "none") {
        this._id = _id;
        this.idUsuario = idUsuario;
        this.email = email;
        this.password = password;
        this.tipo = tipo;
    }
}


/***/ }),

/***/ "./src/app/models/video-selected.ts":
/*!******************************************!*\
  !*** ./src/app/models/video-selected.ts ***!
  \******************************************/
/*! exports provided: VideoSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSelected", function() { return VideoSelected; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VideoSelected {
    constructor(nombre = '', video = '', imagen = '', mensaje = '', duracion = 0, reproduciendo = false) {
        this.nombre = nombre;
        this.video = video;
        this.imagen = imagen;
        this.mensaje = mensaje;
        this.duracion = duracion;
        this.reproduciendo = reproduciendo;
    }
}


/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
        this.URL_API = 'https://blapp.herokuapp.com/api/students';
    }
    createStudent(student) {
        return this.http.post(this.URL_API, student, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).toPromise();
    }
    getStudent(_id) {
        return this.http.get(this.URL_API + `/${_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).toPromise();
    }
    getNameStudents() {
        return this.http.get(this.URL_API + '/names', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).toPromise();
    }
    putDisableStudent(_id) {
        return this.http.put(this.URL_API + '/disable', { _id: _id }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).toPromise();
    }
    putStudent(student) {
        return this.http.put(this.URL_API, student, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).toPromise();
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StudentService);



/***/ }),

/***/ "./src/data/audio/fonemas/vocales/data.vocales.ts":
/*!********************************************************!*\
  !*** ./src/data/audio/fonemas/vocales/data.vocales.ts ***!
  \********************************************************/
/*! exports provided: VOCALES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCALES", function() { return VOCALES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const VOCALES = [
    // Vocal A
    {
        vocal: 'a',
        data: [
            {
                nombre: 'Abrigo',
                audio: 'assets/audio/fonemas/vocales/a/abrigo.mp3',
                imagen: 'assets/img/fonemas/vocales/a/abrigo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Agua',
                audio: 'assets/audio/fonemas/vocales/a/agua.mp3',
                imagen: 'assets/img/fonemas/vocales/a/agua.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Águila',
                audio: 'assets/audio/fonemas/vocales/a/aguila.mp3',
                imagen: 'assets/img/fonemas/vocales/a/aguila.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Algas',
                audio: 'assets/audio/fonemas/vocales/a/algas.mp3',
                imagen: 'assets/img/fonemas/vocales/a/algas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Algodón',
                audio: 'assets/audio/fonemas/vocales/a/algodón.mp3',
                imagen: 'assets/img/fonemas/vocales/a/algodon.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Almendras',
                audio: 'assets/audio/fonemas/vocales/a/almendras.mp3',
                imagen: 'assets/img/fonemas/vocales/a/almendras.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Amigos',
                audio: 'assets/audio/fonemas/vocales/a/amigos.mp3',
                imagen: 'assets/img/fonemas/vocales/a/amigos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Arbol',
                audio: 'assets/audio/fonemas/vocales/a/arbol.mp3',
                imagen: 'assets/img/fonemas/vocales/a/arbol.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ardilla',
                audio: 'assets/audio/fonemas/vocales/a/ardilla.mp3',
                imagen: 'assets/img/fonemas/vocales/a/ardilla.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Vocal E
    {
        vocal: 'e',
        data: [
            {
                nombre: 'Enano',
                audio: 'assets/audio/fonemas/vocales/e/enano.mp3',
                imagen: 'assets/img/fonemas/vocales/e/enano.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Escamas',
                audio: 'assets/audio/fonemas/vocales/e/escamas.mp3',
                imagen: 'assets/img/fonemas/vocales/e/escamas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Escudo',
                audio: 'assets/audio/fonemas/vocales/e/escudo.mp3',
                imagen: 'assets/img/fonemas/vocales/e/escudi.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Espada',
                audio: 'assets/audio/fonemas/vocales/e/espada.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Espárrago',
                audio: 'assets/audio/fonemas/vocales/e/esparrago.mp3',
                imagen: 'assets/img/fonemas/vocales/e/esparrago.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Espejo',
                audio: 'assets/audio/fonemas/vocales/e/espejo.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espejo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Espinaca',
                audio: 'assets/audio/fonemas/vocales/e/espinaca.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espinaca.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Vocal I
    {
        vocal: 'i',
        data: [
            {
                nombre: 'Idea',
                audio: 'assets/audio/fonemas/vocales/i/idea.mp3',
                imagen: 'assets/img/fonemas/vocales/i/idea.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Incendio',
                audio: 'assets/audio/fonemas/vocales/i/incendio.mp3',
                imagen: 'assets/img/fonemas/vocales/i/incendio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Insecto',
                audio: 'assets/audio/fonemas/vocales/i/insecto.mp3',
                imagen: 'assets/img/fonemas/vocales/i/insecto.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Vocal O
    {
        vocal: 'o',
        data: [
            {
                nombre: 'Ocho',
                audio: 'assets/audio/fonemas/vocales/o/ocho.mp3',
                imagen: 'assets/img/fonemas/vocales/o/ocho.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Olla',
                audio: 'assets/audio/fonemas/vocales/o/olla.mp3',
                imagen: 'assets/img/fonemas/vocales/o/olla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Oro',
                audio: 'assets/audio/fonemas/vocales/o/oro.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Oruga',
                audio: 'assets/audio/fonemas/vocales/o/oruga.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oruga.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Oso',
                audio: 'assets/audio/fonemas/vocales/o/oso.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oso.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Otto',
                audio: 'assets/audio/fonemas/vocales/o/otto.mp3',
                imagen: 'assets/img/fonemas/vocales/o/otto.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Oveja',
                audio: 'assets/audio/fonemas/vocales/o/oveja.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oveja.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Vocal U
    {
        vocal: 'u',
        data: [
            {
                nombre: 'Unicornio',
                audio: 'assets/audio/fonemas/vocales/u/unicornio.mp3',
                imagen: 'assets/img/fonemas/vocales/u/unicornio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Uniforme',
                audio: 'assets/audio/fonemas/vocales/u/uniforme.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uniforme.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Universo',
                audio: 'assets/audio/fonemas/vocales/u/universo.mp3',
                imagen: 'assets/img/fonemas/vocales/u/universo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Uno',
                audio: 'assets/audio/fonemas/vocales/u/uno.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uno.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Uña',
                audio: 'assets/audio/fonemas/vocales/u/uña.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Urna',
                audio: 'assets/audio/fonemas/vocales/u/urna.mp3',
                imagen: 'assets/img/fonemas/vocales/u/urna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Urraca',
                audio: 'assets/audio/fonemas/vocales/u/urraca.mp3',
                imagen: 'assets/img/fonemas/vocales/u/urraca.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Útiles',
                audio: 'assets/audio/fonemas/vocales/u/unicornio.mp3',
                imagen: 'assets/img/fonemas/vocales/u/unicornio.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    }
];


/***/ }),

/***/ "./src/data/data.videos.ts":
/*!*********************************!*\
  !*** ./src/data/data.videos.ts ***!
  \*********************************/
/*! exports provided: VIDEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEOS", function() { return VIDEOS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const VIDEOS = [
    {
        nombre: 'a',
        video: 'assets/video/fonemas/vidFonA.mp4',
        imagen: 'assets/img/fonemaA.svg',
        mensaje: 'Aaaaaaaa (Sirena de ambulancia)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'b',
        video: 'assets/video/fonemas/vidFonB.mp4',
        imagen: 'assets/img/fonemaB.svg',
        mensaje: 'Beeeee Beeeee (Oveja)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'c',
        video: 'assets/video/fonemas/vidFonC.mp4',
        imagen: 'assets/img/fonemaC.svg',
        mensaje: 'Cuac Cuac Cuac (Pato)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ch',
        video: 'assets/video/fonemas/vidFonCh.mp4',
        imagen: 'assets/img/fonemaCh.svg',
        mensaje: 'Chuuuu Chuuu Chuuu (Trencito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'd',
        video: 'assets/video/fonemas/vidFonD.mp4',
        imagen: 'assets/img/fonemaD.svg',
        mensaje: 'Dddddddddd (Abejas cerca de panal)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'e',
        video: 'assets/video/fonemas/vidFonE.mp4',
        imagen: 'assets/img/fonemaE.svg',
        mensaje: 'Ehhh Ehhh Ehhh (Alegría)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'f',
        video: 'assets/video/fonemas/vidFonF.mp4',
        imagen: 'assets/img/fonemaF.svg',
        mensaje: 'Fiiii Fiiii Fiiii (Soplando flauta)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'g',
        video: 'assets/video/fonemas/vidFonG.mp4',
        imagen: 'assets/img/fonemaG.svg',
        mensaje: 'Ggggggggg (Gárgaras)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'i',
        video: 'assets/video/fonemas/vidFonI.mp4',
        imagen: 'assets/img/fonemaI.svg',
        mensaje: 'Iiiii Iiiii Iiiii (Ratoncito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'j',
        video: 'assets/video/fonemas/vidFonJ.mp4',
        imagen: 'assets/img/fonemaJ.svg',
        mensaje: 'Jajajajajajaja (risas)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'Kk',
        video: 'assets/video/fonemas/vidFonK.mp4',
        imagen: 'assets/img/fonemaK.svg',
        mensaje: '',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'l',
        video: 'assets/video/fonemas/vidFonL.mp4',
        imagen: 'assets/img/fonemaL.svg',
        mensaje: 'La La La La La La (Cantando)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'll',
        video: 'assets/video/fonemas/vidFonL.mp4',
        imagen: 'assets/img/fonemaL.svg',
        mensaje: '',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'm',
        video: 'assets/video/fonemas/vidFonM.mp4',
        imagen: 'assets/img/fonemaM.svg',
        mensaje: 'Muuu Muuu Muuu (Vaca)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'n',
        video: 'assets/video/fonemas/vidFonNn.mp4',
        imagen: 'assets/img/fonemaNn.svg',
        mensaje: 'Ni No Ni No Ni No (Minions)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ñ',
        video: 'assets/video/fonemas/vidFonÑ.mp4',
        imagen: 'assets/img/fonemaÑ.svg',
        mensaje: 'Ñooo Ñooo Ñooo (Chanchito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'o',
        video: 'assets/video/fonemas/vidFonO.mp4',
        imagen: 'assets/img/fonemaO.svg',
        mensaje: 'Ohhh Ohhh Ohhh (Asombro)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'Pp',
        video: 'assets/video/fonemas/vidFonP.mp4',
        imagen: 'assets/img/fonemaP.svg',
        mensaje: '',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'r',
        video: 'assets/video/fonemas/vidFonRr.mp4',
        imagen: 'assets/img/fonemaRr.svg',
        mensaje: 'Ra Ra Ra Ra Ra (Cantando)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'rr',
        video: 'assets/video/fonemas/vidFonRR.mp4',
        imagen: 'assets/img/fonemaRR.svg',
        mensaje: 'Rrrrrrrrrrrr (Moto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'Ss',
        video: 'assets/video/fonemas/vidFonS.mp4',
        imagen: 'assets/img/fonemaS.svg',
        mensaje: 'Sssssssss (Serpiente)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 't',
        video: 'assets/video/fonemas/vidFonT.mp4',
        imagen: 'assets/img/fonemaT.svg',
        mensaje: 'Tilín Tilín Tilín (Campana)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'u',
        video: 'assets/video/fonemas/vidFonU.mp4',
        imagen: 'assets/img/fonemaU.svg',
        mensaje: 'Uy Uy Uy (Susto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'x',
        video: 'assets/video/fonemas/vidFonX.mp4',
        imagen: 'assets/img/fonemaX.svg',
        mensaje: 'Xxxx Xxxx Xxxx (spray)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'y',
        video: 'assets/video/fonemas/vidFonY.mp4',
        imagen: 'assets/img/fonemaY.svg',
        mensaje: 'Yyyyyyyy (Avión volando)',
        duracion: 4,
        reproduciendo: false
    },
];


/***/ })

}]);
//# sourceMappingURL=default~pages-docentes-docentes-module~pages-estudiantes-estudiantes-module~pages-fonema-fonema-modu~4a78e072-es2015.js.map