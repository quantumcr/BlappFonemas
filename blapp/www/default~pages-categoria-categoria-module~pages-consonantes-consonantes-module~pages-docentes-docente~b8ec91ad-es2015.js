(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-categoria-categoria-module~pages-consonantes-consonantes-module~pages-docentes-docente~b8ec91ad"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-img src=\"assets\\img\\semanticas\\semantics-bar\\semanticas.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{this.category.nombre.toUpperCase()}}</ion-label>      \r\n    </ion-row>\r\n    \r\n    <div class=\"buttons\">\r\n      <ion-row *ngFor=\"let subcategory of category.subcategoria\">\r\n        <ion-col>\r\n          <ion-segment-button value=\"{{subcategory.nombre}}\" (click)=\"subcategorySelected(subcategory.nombre)\" class=\"button\">{{subcategory.nombre}}</ion-segment-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-navigation/categories-navigation.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-navigation/categories-navigation.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment-button class=\"btnBack\" (click)='back($event)'>\r\n          <ion-icon class=\"backIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-segment-button class=\"btnHome\" (click)=\"goToHome($event)\">\r\n          <ion-icon class=\"homeIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      \r\n      <ion-col >\r\n        <ion-segment-button class=\"btnForward\" (click)=\"forward($event)\">\r\n          <ion-icon class=\"forwardIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"imagenes\">\r\n      <ion-col>\r\n        <div class=\"sujeto\">\r\n          <ion-avatar class=\"imagenSujeto\" (click)=\"animacionSujeto()\">\r\n            <ion-img id=\"sujeto\" src={{subcategoryOneData.imagenSujeto}}></ion-img>\r\n          </ion-avatar>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"verbo\">\r\n          <div>\r\n            <ion-img id=\"verbo\" src={{subcategoryOneData.imagenVerbo}}></ion-img>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"predicado\">\r\n          <ion-avatar class=\"imagenPredicado\">\r\n            <ion-img id=\"predicado\" src={{subcategoryOneData.imagenPredicado}}></ion-img>\r\n          </ion-avatar>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-img src=\"assets/svg/semantics/categories-view/trayectoria.svg\" class=\"trayectoria\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"rowAnimation\">\r\n      <ion-col>\r\n        <ion-img src=\"assets/svg/shapes/star.svg\" class=\"star\"></ion-img>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-img src=\"assets/svg/shapes/star.svg\" class=\"star2\"></ion-img>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-img src=\"assets/svg/shapes/star.svg\" class=\"star3\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"pSujeto\" >{{subcategoryOneData.sujeto}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"pVerbo\">{{subcategoryOneData.verbo}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"pPredicado\">{{subcategoryOneData.predicado}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"btnComeBackTo\">\r\n      <ion-segment-button (click)=\"comeBackTo()\">\r\n        <ion-img src=\"assets/svg/shapes/star.svg\"></ion-img>\r\n      </ion-segment-button>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"bar\">\r\n            <app-categories-bar [category]=\"category\" (subcategoryEmit)=\"changeSubcategory($event)\" ></app-categories-bar>\r\n          </ion-col>\r\n          <ion-col class=\"panel\">\r\n            <app-categories-view-panel [subcategoryOneData]=\"subcategory.data[indexData]\"></app-categories-view-panel>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"navigation\">\r\n          <ion-col>\r\n            <app-categories-navigation (forwardEmit)=\"incIndexData()\" (backEmit)=\"decIndexData()\"></app-categories-navigation>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid justify-content-center>\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-label class=\"tituloUsuario\">{{usuario}}</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" id=\"email\" class=\"usuario\" placeholder=\"correo electrónico\" (ionInput)=\"setEmail($event)\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row justify-content-center>\r\n      <ion-col >\r\n        <ion-label class=\"tituloClave\">{{clave}}</ion-label>\r\n        <ion-input [(ngModel)]=\"password\" id=\"password\" class=\"clave\" type=\"password\" placeholder=\"su contraseña\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row justify-content-center>\r\n      <ion-col>\r\n        <ion-button color=\"blappButton\" class=\"btnLogin\" (click)=\"loginFirebase()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n   \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/menu-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>      \r\n        <app-students-menu *ngIf=\"!tipo\" titulo=\"Estudiante\" opcion1=\"Fonemas\" opcion2=\"Categorías semánticas\"></app-students-menu>\r\n        \r\n        <app-professor-menu *ngIf=\"tipo\" titulo=\"¡Buenos días, Profe!\" opcion1=\"Fonemas\" opcion2=\"Categorías semánticas\" opcion3=\"Estudiantes\"></app-professor-menu>    \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/professor-menu/professor-menu.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" class=\"icon\" (click)=\"logout()\">\r\n            <ion-img src=\"assets/icon/logout.svg\"></ion-img>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"titulo\">\r\n        <ion-col>\r\n          <ion-label class=\"texto\">{{titulo}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"opciones\">\r\n        <ion-col> \r\n            <ion-segment-button value=\"fonemas\" class=\"opcionFonema\"(click)=\"selectTheme($event)\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion1}}</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n            <ion-segment-button value=\"semanticas\" class=\"opcionSemantica\" (click)=\"selectTheme($event)\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion2}}</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n            <ion-segment-button value=\"docentes\" class=\"opcionEstudiantes\" (click)=\"selectTheme($event)\">\r\n            </ion-segment-button>\r\n            <ion-label class=\"textoOpcion\">{{opcion3}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-panel/students-menu/students-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button fill=\"clear\" class=\"icon\" (click)=\"logout()\">\r\n          <ion-img src=\"assets/icon/logout.svg\"></ion-img>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"titulo\">\r\n      <ion-col>\r\n        <!--\r\n        <ion-label class=\"texto\">¡Hola {{authenticationService.getUserDetails().nombre}}!<br>¿Qué aprenderemos hoy?</ion-label>\r\n        -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"opciones\">\r\n      <ion-col>\r\n          <ion-segment-button value=\"fonemas\" class=\"opcionFonema\" (click)=\"selectTheme($event)\">\r\n          </ion-segment-button>\r\n          <ion-label class=\"textoOpcion\">{{opcion1}}</ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button value=\"semanticas\" class=\"opcionSemantica\" (click)=\"selectTheme($event)\">\r\n          </ion-segment-button>\r\n          <ion-label class=\"textoOpcion\">{{opcion2}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment-button value='back' class=\"btnBack\" (click)='goTo($event)'>\r\n          <ion-icon class=\"backIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-segment-button value=\"home\" class=\"btnHome\" (click)=\"goToHome($event)\">\r\n          <ion-icon class=\"homeIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      \r\n      <ion-col >\r\n        <ion-segment-button value='forward' class=\"btnForward\" (click)=\"goTo($event)\">\r\n          <ion-icon class=\"forwardIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">FONEMA</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"fonema\">/ {{fonema}} /</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"videoFonema\">\r\n      <div>\r\n        <div >\r\n          <ion-img src={{imagen}} class=\"imagen\"></ion-img>\r\n        </div>\r\n        <div style=\"position: absolute; left: 37px; top: 421px;\">\r\n          <ion-segment-button *ngIf=\"visibleVideo\" value=\"video\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon  src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button *ngIf=\"visibleAudio\" value=\"phoneme\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon src=\"assets/icon/audio.svg\"></ion-icon>\r\n          </ion-segment-button>          \r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"mensaje\">{{mensaje}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  consonant-navigation works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"rowSilaba\">\r\n        <ion-col>\r\n          <ion-segment-button fill=\"round\" class=\"silaba\" (click)=\"playAudioS(0)\">{{dataSPhonemeConsonant[0].nombre}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button fill=\"round\"  class=\"silaba\" (click)=\"playAudioS(1)\">{{dataSPhonemeConsonant[1].nombre}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button fill=\"round\"  class=\"silaba\" (click)=\"playAudioS(2)\">{{dataSPhonemeConsonant[2].nombre}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button fill=\"round\"  class=\"silaba\" (click)=\"playAudioS(3)\">{{dataSPhonemeConsonant[3].nombre}}</ion-segment-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-segment-button fill=\"round\"  class=\"silaba\" (click)=\"playAudioS(4)\">{{dataSPhonemeConsonant[4].nombre}}</ion-segment-button>\r\n        </ion-col> \r\n    </ion-row>\r\n    <ion-row class=\"audioFonema\">\r\n      <div>\r\n        <ion-avatar class=\"imagen\">\r\n          <ion-img src={{oneDataPhonemeConsonant.imagen}}  class=\"imagen\"></ion-img>\r\n        </ion-avatar>\r\n\r\n        <div style=\"position: absolute; left: 227px; top: 346px;\">\r\n          <ion-segment-button class=\"btnPlay\" (click)=\"playRecord()\">\r\n            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n        </div>\r\n      </div>    \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"palabra\">{{oneDataPhonemeConsonant.nombre}}</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"btnComeBackTo\">\r\n      <ion-segment-button (click)=\"comeBackTo()\">\r\n        <ion-img src=\"assets/svg/shapes/star.svg\"></ion-img>\r\n      </ion-segment-button>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"row\">\r\n      <video fullscreen=\"fullscreen\" src={{video}} autoplay=\"true\"></video>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-consonant-bar [fonema]=\"phoneme.consonante\" [imagen]=\"videoData.imagen\" [mensaje]=\"videoData.mensaje\"  (barEvent)=\"selectPanel($event)\"></app-consonant-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-consonant-phoneme-panel *ngIf=\"visiblePhoneme\" [oneDataPhonemeConsonant]=\"phoneme.data[indexData]\" [dataSPhonemeConsonant]=\"phoneme.dataS\" [comando]=\"comandoFonema\"></app-consonant-phoneme-panel>\r\n        <app-consonant-phoneme-video-panel [video]=\"videoData.video\" *ngIf=\"visibleVideo\"></app-consonant-phoneme-video-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <!--<app-navigation></app-navigation>-->\r\n        <app-phoneme-nav (forwardEmit)=\"incIndexData()\" (backEmit)=\"decIndexData()\"></app-phoneme-nav>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/bar/bar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">FONEMA</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"fonema\">/ {{fonema}} /</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"videoFonema\">\r\n      <div>\r\n        <div shape=\"round\">\r\n          <ion-img src={{imagen}} class=\"imagen\"></ion-img>\r\n        </div>\r\n        <div style=\"position: absolute; left: 37px; top: 421px;\">\r\n          <ion-segment-button *ngIf=\"visibleVideo\" value=\"video\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon  src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button *ngIf=\"visibleAudio\" value=\"phoneme\" class=\"btnPlay\" (click)=\"openPanel($event)\">\r\n            <ion-icon src=\"assets/icon/audio.svg\"></ion-icon>\r\n          </ion-segment-button>          \r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"mensaje\">{{mensaje}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment-button class=\"btnBack\" (click)='back($event)'>\r\n          <ion-icon class=\"backIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-segment-button class=\"btnHome\" (click)=\"goToHome($event)\">\r\n          <ion-icon class=\"homeIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>\r\n      \r\n      <ion-col >\r\n        <ion-segment-button class=\"btnForward\" (click)=\"forward($event)\">\r\n          <ion-icon class=\"forwardIcon\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"audioFonema\">   \r\n      <div>\r\n        <ion-avatar class=\"imagen\">\r\n          <ion-img id=\"imagen\" src={{phonemeOneData.imagen}} class=\"imagen\"></ion-img>\r\n        </ion-avatar>\r\n\r\n        <div style=\"position: absolute; left: 227px; top: 346px;\">\r\n          <ion-segment-button class=\"btnPlay\" (click)=\"audio.play()\">\r\n            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n          </ion-segment-button>\r\n        </div>\r\n      </div>    \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label class=\"palabra\">{{phonemeOneData.nombre}}</ion-label>\r\n    </ion-row>\r\n    <ion-row class=\"btnComeBackTo\">\r\n      <ion-segment-button (click)=\"comeBackTo()\">\r\n        <ion-img src=\"assets/svg/shapes/star.svg\" class=\"starIcon\"></ion-img>\r\n      </ion-segment-button>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-view.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-bar [fonema]=\"phoneme.vocal\" [imagen]=\"videoData.imagen\" [mensaje]=\"videoData.mensaje\"  (barEvent)=\"selectPanel($event)\" ></app-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-phoneme-panel *ngIf=\"visiblePhoneme\" [phonemeOneData]=\"phoneme.data[indexData]\"></app-phoneme-panel>\r\n        <app-video-panel *ngIf=\"visibleVideo\" [video]=\"videoData.video\"></app-video-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-phoneme-nav (forwardEmit)=\"incIndexData()\" (backEmit)=\"decIndexData()\"></app-phoneme-nav>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('p')\">Pp</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('m')\">Mm</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('b')\">Bb</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>\r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('d')\">Dd</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('t')\">Tt</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('g')\">Gg</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>  \r\n        \r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('ckq')\">Cc Kk Qq</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('f')\">Ff</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('ch')\">Ch ch</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row> \r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('j')\">Jj</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('s')\">Ss</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('n')\">Nn</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>   \r\n\r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('ñ')\">Ññ</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('l')\">Ll</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('LLll Yy')\">LLll Yy</ion-segment-button>\r\n            </ion-col>                        \r\n        </ion-row>\r\n        \r\n        <ion-row class=\"row\">\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('r')\">Rr</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('rr')\">RR rr</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('x')\">Xx</ion-segment-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid>\r\n        <!--SECCION SILABAS-->\r\n        <ion-row class=\"rowSilaba\">\r\n            <ion-col>\r\n                <div cdkDropList #silaba1List=\"cdkDropList\" [cdkDropListData]=\"\">\r\n                     \r\n                </div>\r\n                <ion-segment-button fill=\"round\" class=\"silaba\">{{silaba1}}</ion-segment-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-segment-button fill=\"round\" class=\"silaba\">{{silaba2}}</ion-segment-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row\" cdkDropList>\r\n            <ion-col >\r\n                <!--SECCION SILABA 1-->\r\n                <div style=\"position: relative;\" cdkDrag>\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-avatar>\r\n                            <ion-img src={{palabra1.imagen}} class=\"imagen\"></ion-img>\r\n                        </ion-avatar>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value={{palabra1.audio}} class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <!--SECCION SILABA 2-->\r\n                <div style=\"position: relative;\" cdkDrag>\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-avatar class=\"imagen\">\r\n                            <ion-img src={{palabra2.imagen}}></ion-img>\r\n                        </ion-avatar>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value={{palabra2.audio}} class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>              \r\n            </ion-col>  \r\n            <ion-col>\r\n                <div style=\"position: relative;\" cdkDrag>\r\n                    <div style=\"position: absolute; left: 0px; top: 0px;\">\r\n                        <ion-avatar>\r\n                            <ion-img src={{palabra3.imagen}} class=\"imagen\"></ion-img>\r\n                        </ion-avatar>\r\n                    </div>\r\n                    <div style=\"position: absolute; left: 0px; right: 120px; top: 126px;\">\r\n                        <ion-segment-button value={{palabra3.audio}} class=\"btnPlay\" (click)=\"playAudio($event)\">\r\n                            <ion-icon src=\"assets/icon/play.svg\"></ion-icon>\r\n                        </ion-segment-button>\r\n                    </div>\r\n                  </div>             \r\n            </ion-col>                   \r\n        </ion-row>\r\n    </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/phoneme.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-phoneme-bar titulo=\"FONEMAS\" comando1=\"VOCALES\" comando2=\"CONSONANTES\" comando3=\"JUGAR\" (phonemeBarEvent)=\"selectPanel($event)\" ></app-phoneme-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-vocal-panel *ngIf=\"visibleVocal\"></app-vocal-panel>\r\n        <app-consonant-panel *ngIf=\"visibleConsonant\"></app-consonant-panel> \r\n        <app-phoneme-game-panel *ngIf=\"visibleGame\"></app-phoneme-game-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-navigation></app-navigation>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n    <ion-row class=\"row\">\r\n      <ion-col>\r\n          <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('a')\">Aa</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('e')\">Ee</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('o')\">Oo</ion-segment-button>\r\n      </ion-col>                        \r\n    </ion-row>\r\n    <ion-row class=\"rowDebiles\">\r\n      <ion-col>\r\n          <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('i')\">Ii</ion-segment-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-segment-button class=\"phonemeButton\" (click)=\"goToPhoneme('u')\">Uu</ion-segment-button>\r\n      </ion-col>\r\n                       \r\n    </ion-row>    \r\n\r\n  </ion-grid>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n      <form [formGroup]=\"studentForm\">\r\n        <ion-row style=\"margin-top: 48px;\">\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{nombre}}</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" formControlName=\"nombre\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.nombre\">\r\n            <div *ngIf=\"studentForm.get('nombre').hasError(validation.type) && (studentForm.get('nombre').dirty || studentForm.get('nombre').touched)\" class=\"alert alert-danger\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{edad}}</ion-label>\r\n            <ion-input class=\"input\" type=\"number\" formControlName=\"edad\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.edad\">\r\n            <div *ngIf=\"studentForm.get('edad').hasError(validation.type) && (studentForm.get('edad').dirty || studentForm.get('edad').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{genero}}</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" formControlName=\"sexo\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.sexo\">\r\n            <div *ngIf=\"studentForm.get('sexo').hasError(validation.type) && (studentForm.get('sexo').dirty || studentForm.get('sexo').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <div formGroupName=\"encargadoLegal\">\r\n          <ion-row >\r\n            <ion-col>\r\n              <ion-label class=\"label\">{{residencia}}</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" formControlName=\"direccion\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.encargado_direccion\">\r\n              <div *ngIf=\"studentForm.get('encargadoLegal.direccion').hasError(validation.type) && (studentForm.get('encargadoLegal.direccion').dirty || studentForm.get('encargadoLegal.direccion').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-row >\r\n            <ion-col>\r\n              <ion-label class=\"label\">{{encargado}}</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" formControlName=\"nombre\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.encargado_nombre\">\r\n              <div *ngIf=\"studentForm.get('encargadoLegal.nombre').hasError(validation.type) && (studentForm.get('encargadoLegal.nombre').dirty || studentForm.get('encargadoLegal.nombre').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"userForm\">\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{email}}</ion-label>\r\n            <ion-input class=\"input\" type=\"email\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n            <div *ngIf=\"userForm.get('email').hasError(validation.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-row >\r\n          <ion-col>\r\n            <ion-label class=\"label\">{{password}}</ion-label>\r\n            <ion-input class=\"input\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n            <div *ngIf=\"userForm.get('password').hasError(validation.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-button class=\"btnGuardar\" color=\"formButton\" shape=\"round\" [disabled]=\"(!userForm.valid  || !studentForm.valid)\" (click)=\"register()\">{{comando}}</ion-button>\r\n      </form>        \r\n    </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-segment-button class=\"btnBack\" (click)=\"goToHome()\"></ion-segment-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/docentes/students-bar/estudiantes.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"editar\" class=\"btnComando1\" (click)=\"updateStudent()\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"eliminar\" class=\"btnComando2\" (click)=\"deleteStudent()\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/info-panel/info-panel.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row class=\"info\">  \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-label class=\"titulo\" (click)=\"prueba()\">Información Personal</ion-label>\r\n          </ion-row>\r\n          <ion-row>\r\n\r\n              <div>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Nombre:</ion-label>\r\n                        <ion-input id=\"nombre\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.nombre\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Cédula:</ion-label>\r\n                        <ion-input id=\"cedula\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.cedula\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Género:</ion-label>\r\n                        <ion-input id=\"sexo\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.sexo\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Edad:</ion-label>\r\n                        <ion-input id=\"edad\" type=\"number\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.edad\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Email:</ion-label>\r\n                        <ion-input id=\"email\" type=\"email\" class=\"inputInfoPersonal\" [(ngModel)]=\"user.email\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Encargado:</ion-label>\r\n                        <ion-input id=\"encargado_nombre\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.nombre\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Profesión:</ion-label>\r\n                        <ion-input id=\"encargado_profesion\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.profesion\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Teléfono:</ion-label>\r\n                        <ion-input id=\"encargado_telefono\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.telefono\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Dirección:</ion-label>\r\n                        <ion-input id=\"encargado_direccion\" class=\"inputInfoPersonal\" [(ngModel)]=\"student.encargadoLegal.direccion\"></ion-input>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" class=\"item\">\r\n                        <ion-label class=\"label\">Password:</ion-label>\r\n                        <ion-input id=\"password\" type=\"password\" class=\"inputInfoPersonal\" [(ngModel)]=\"user.password\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            \r\n            <!--<app-personal-info [student]=\"student\" [user]=\"user\"></app-personal-info>-->\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"infoFamilia\">\r\n          <ion-label class=\"titulo\">Familia</ion-label>\r\n\r\n          <ion-list class=\"list\">\r\n            <ion-item lines=\"none\" *ngFor=\"let family_member of student.familia\">\r\n              <ion-col>\r\n                <ion-row>\r\n                  <ion-label>{{\"Nombre \" + family_member.relacion + \":\"}}</ion-label>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-input class=\"input\" [(ngModel)]=\"family_member.nombre\"></ion-input>\r\n                </ion-row>\r\n              </ion-col>      \r\n            </ion-item>\r\n          </ion-list>\r\n          \r\n          <!--<app-family-info [familia]=\"student.familia\"></app-family-info>-->\r\n        </ion-col>\r\n        <ion-col class=\"infoAlimentos\">\r\n          <ion-label class=\"titulo\">Alimentos</ion-label>\r\n            <ion-list class=\"list\">\r\n              <ion-item lines=\"none\" *ngFor=\"let alimento of student.alimentacion\" (click)=\"changeSelected(alimento)\">\r\n                <ion-label class=\"label\" color=\"black\">{{alimento.alimento}}</ion-label>\r\n                <ion-checkbox slot=\"start\" mode=\"ios\" color=\"success\" checked={{alimento.seleccionado}}></ion-checkbox>        \r\n              </ion-item>\r\n            </ion-list>\r\n          <!--<app-food-info [alimetacion]=\"student.alimentacion\"></app-food-info>-->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n            <ion-button color=\"success\" slot=\"start\">Actualizar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/student-info.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-function-bar titulo=\"ESTUDIANTES\" comando1=\"EDITAR INFORMACIÓN\" comando2=\"ELIMINAR ESTUDIANTE\" (deleteStudentEvent)=\"deleteStudent()\" (updateStudentEvent)=\"updateStudent()\"></app-function-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-info-panel [_idStudent]=\"_idStudent\" [boolEdit]=\"boolEdit\"></app-info-panel>     \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/students-bar/students-bar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-segment-button class=\"btnBack\" (click)=\"goToHome()\"></ion-segment-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-img src=\"assets/img/docentes/students-bar/estudiantes.png\" class=\"imagen\"></ion-img>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"titulo\">{{titulo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-segment-button value=\"agregar\" class=\"btnComando1\" (click)=\"openPanel($event)\">{{comando1}}</ion-segment-button>\r\n          <ion-segment-button value=\"lista\" class=\"btnComando2\" (click)=\"openPanel($event)\">{{comando2}}</ion-segment-button>\r\n        </div>         \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restore/restore.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restore/restore.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n    <ion-row class=\"rowMensaje\">\r\n      <ion-col>\r\n        <ion-label class=\"mensaje\">Escriba su correo para enviarle las instrucciones y recuperar su contraseña</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"label\">Correo Electrónico</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" class=\"input\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-button class=\"btnGuardar\" color=\"formButton\" shape=\"round\" (click)=\"sendLinkReset()\">{{comando}}</ion-button>  \r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Imagen de mí mismo')\">Imagen de<br>mi mismo</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Partes del Cuerpo')\">Partes del<br>cuerpo</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Familia')\">Familia</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row>\r\n\r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Alimentos')\">Alimentos</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Animales')\">Animales</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Juguetes')\">Juguetes</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row>  \r\n      \r\n      <ion-row class=\"row\">\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Prendas de Vestir')\">Prendas de<br>vestir</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Partes de la Casa')\">Partes de<br>la casa</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Medios de Transporte')\">Medios<br>transporte</ion-segment-button>\r\n          </ion-col>                        \r\n      </ion-row> \r\n\r\n      <ion-row class=\"lastRow\">\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Servidores de la Comunidad')\">Servidores de<br>la comunidad</ion-segment-button>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-segment-button class=\"phonemeButton\" (click)=\"goToCategories('Instrumentos Musicales')\">Instrumentos<br>musicales</ion-segment-button>\r\n          </ion-col>                     \r\n      </ion-row>      \r\n  </ion-grid>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">  \r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <div cdkDropList #sujetoList=\"cdkDropList\" [cdkDropListData]=\"sujeto\"\r\n        cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"[imagenesList]\" \r\n        class=\"sujeto\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"validarSujeto\">\r\n          <div class=\"element\" *ngFor=\"let item of sujeto\" cdkDrag [cdkDragData]=\"item\">\r\n            <ion-avatar class=\"imagen\">\r\n              <ion-img src=\"{{item}}\"></ion-img>\r\n            </ion-avatar>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-col>\r\n      <ion-col>\r\n\r\n        <div cdkDropList #verboList=\"cdkDropList\" [cdkDropListData]=\"verbo\"\r\n        cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"[imagenesList]\" \r\n        class=\"verbo\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"validarVerbo\">\r\n          <div class=\"element\" *ngFor=\"let item of verbo\" cdkDrag [cdkDragData]=\"item\">\r\n            <ion-avatar class=\"imagen\">\r\n              <ion-img src=\"{{item}}\"></ion-img>\r\n            </ion-avatar>\r\n          </div>\r\n        </div>\r\n        \r\n      </ion-col>\r\n      <ion-col>\r\n\r\n        <div cdkDropList #predicadoList=\"cdkDropList\" [cdkDropListData]=\"predicado\"\r\n        cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"[imagenesList]\" \r\n        class=\"predicado\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"validarPredicado\" (click)=\"audio.play()\">\r\n          <div class=\"element\" *ngFor=\"let item of predicado\" cdkDrag [cdkDragData]=\"item\">\r\n            <ion-avatar class=\"imagen\">\r\n              <ion-img src=\"{{item}}\"></ion-img>\r\n            </ion-avatar>\r\n          </div>\r\n        </div>\r\n        \r\n      </ion-col>\r\n     \r\n    </ion-row> \r\n    \r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"pSujeto\">{{subcategoryOneData.sujeto}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"pVerbo\">{{subcategoryOneData.verbo}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"semantica\">\r\n          <ion-label class=\"pPredicado\">{{subcategoryOneData.predicado}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"options\">\r\n      <ion-col>\r\n\r\n        <div cdkDropList #imagenesList=\"cdkDropList\" [cdkDropListData]=\"imagenes\"\r\n        cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"[sujetoList,verboList,predicadoList]\" \r\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"noReturnPredicate\">\r\n          <div class=\"element\" *ngFor=\"let imagen of imagenes\"  cdkDrag [cdkDragData]=\"imagen\">\r\n            <ion-avatar class=\"imagen\">\r\n              <ion-img src=\"{{imagen}}\"></ion-img>\r\n            </ion-avatar>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"bar\">\r\n        <app-semantics-bar titulo=\"CATEGORÍAS\" titulo2=\"SEMÁNTICAS\" comando1=\"CATEGORÍAS\" comando2=\"JUGAR\" (semanticsBarEvent)=\"selectPanel($event)\" ></app-semantics-bar>\r\n      </ion-col>\r\n      <ion-col class=\"panel\">\r\n        <app-categories-panel *ngIf=\"visibleCategories\"></app-categories-panel>\r\n        <app-semantics-game-panel *ngIf=\"visibleGame\" [nombreSubcategoria]=\"subcategory.nombre\" [subcategoryOneData]=\"subcategory.data[indexData]\"></app-semantics-game-panel>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"navigation\">\r\n      <ion-col>\r\n        <app-phoneme-nav (forwardEmit)=\"incIndexData()\" (backEmit)=\"decIndexData()\"></app-phoneme-nav>\r\n      </ion-col>\r\n    </ion-row>       \r\n  </ion-grid>\r\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"label\">Nombre Completo</ion-label>\r\n        <ion-input [(ngModel)]=\"nombre\" class=\"input\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"label\">Institución</ion-label>\r\n        <ion-input [(ngModel)]=\"institucion\" class=\"input\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"label\">Correo Electrónico</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" class=\"input\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"label\">Contraseña</ion-label>\r\n        <ion-input [(ngModel)]=\"password\" class=\"input\" type=\"password\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-button class=\"btnGuardar\" color=\"formButton\" shape=\"round\" (click)=\"registrar()\">{{comando}}</ion-button>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/components/categories-view/categories-bar/categories-bar.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-bar/categories-bar.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #52D7C6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 44px;\n  right: 45px;\n  top: 43px;\n}\n\n.titulo {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 265px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.titulo2 {\n  position: absolute;\n  width: 260px;\n  height: 74px;\n  left: 22px;\n  right: 20px;\n  top: 369px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 38px;\n  line-height: 67px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 442px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  background: #BCFFF7;\n  border-radius: 15px;\n  color: #5F659C;\n  top: 503px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.buttons {\n  margin-top: 319px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.button {\n  width: 259px;\n  height: 48px;\n  background: #BCFFF7;\n  border-radius: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy1iYXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXMtdmlld1xcY2F0ZWdvcmllcy1iYXJcXGNhdGVnb3JpZXMtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLWJhci9jYXRlZ29yaWVzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURBSTtFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFFQSxjQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0RSOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLWJhci9jYXRlZ29yaWVzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjIzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUyRDdDNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Vue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTNweDtcclxuICAgICAgICBsZWZ0OiA0NHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHRvcDogNDNweDsgICAgXHJcbiAgICB9XHJcbiAgICAudGl0dWxve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgICAgIGxlZnQ6IDIycHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAyNjVweDtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxuICAgIH1cclxuICAgIC50aXR1bG8ye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgICAgIGxlZnQ6IDIycHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAzNjlweDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG4gICAgfVxyXG4gICAgLmNvbWFuZG8xe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQwNnB4OyAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLmNvbWFuZG8ye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2N3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICAgICBcclxuICAgIH1cclxuICAgIC5jb21hbmRvM3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MjBweDsgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgICAgIHRvcDogMzkycHg7ICAgICBcclxuICAgIH1cclxuICAgIC5idG5Db21hbmRvMXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNCQ0ZGRjc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgICAgICB0b3A6IDQ0MnB4OyAgXHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG4gICAgfVxyXG4gICAgLmJ0bkNvbWFuZG8ye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgICAgdG9wOiA1MDNweDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgXHJcbiAgICB9XHJcbiAgICAuYnV0dG9uc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMTlweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyNTlweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0JDRkZGNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH0gICAgIiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xuICBiYWNrZ3JvdW5kOiAjNTJEN0M2O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjEzcHg7XG4gIGhlaWdodDogMjEzcHg7XG4gIGxlZnQ6IDQ0cHg7XG4gIHJpZ2h0OiA0NXB4O1xuICB0b3A6IDQzcHg7XG59XG5cbi50aXR1bG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjBweDtcbiAgdG9wOiAyNjVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi50aXR1bG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogMjJweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMzY5cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NjdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogMzkycHg7XG59XG5cbi5idG5Db21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA0NDJweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uYnRuQ29tYW5kbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYmFja2dyb3VuZDogI0JDRkZGNztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNTAzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzVGNjU5Qztcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAzMTlweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjQkNGRkY3O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */");

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
    constructor() {
        this.subcategoryEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.semanticsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openPanel(event) {
    }
    subcategorySelected(subcategoryName) {
        this.subcategoryEmit.emit(subcategoryName);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesBarComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CategoriesBarComponent.prototype, "subcategoryEmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesBarComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesBarComponent.prototype, "imagen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesBarComponent.prototype, "comando1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesBarComponent.prototype, "comando2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesBarComponent.prototype, "comando3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesBarComponent.prototype, "semanticsBarEvent", void 0);
CategoriesBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-bar/categories-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-bar.component.scss */ "./src/app/components/categories-view/categories-bar/categories-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesBarComponent);



/***/ }),

/***/ "./src/app/components/categories-view/categories-navigation/categories-navigation.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-navigation/categories-navigation.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 1145px;\n  height: 57px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.btnBack {\n  width: 42px;\n  height: 42px;\n  margin-left: 30px;\n}\n\n.btnHome {\n  width: 42px;\n  height: 42px;\n  margin-left: 135px;\n}\n\n.btnForward {\n  width: 42px;\n  height: 42px;\n  margin-right: 32px;\n  margin-left: auto;\n}\n\n.backIcon {\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.homeIcon {\n  width: 42px;\n  height: 42px;\n  background: url('home.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.forwardIcon {\n  width: 42px;\n  height: 42px;\n  background: url('forward.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy1uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzLXZpZXdcXGNhdGVnb3JpZXMtbmF2aWdhdGlvblxcY2F0ZWdvcmllcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLW5hdmlnYXRpb24vY2F0ZWdvcmllcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLW5hdmlnYXRpb24vY2F0ZWdvcmllcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMTQ1cHg7XHJcbiAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDsgICAgXHJcbn1cclxuXHJcbi5idG5CYWNre1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uYnRuSG9tZXtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xyXG59XHJcbi5idG5Gb3J3YXJke1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uYmFja0ljb257XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vYmFjay5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5ob21lSWNvbntcclxuXHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5mb3J3YXJkSWNvbntcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9mb3J3YXJkLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNDVweDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYnRuQmFjayB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnRuSG9tZSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzVweDtcbn1cblxuLmJ0bkZvcndhcmQge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYmFja0ljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhvbWVJY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5mb3J3YXJkSWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/categories-view/categories-navigation/categories-navigation.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-navigation/categories-navigation.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CategoriesNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesNavigationComponent", function() { return CategoriesNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let CategoriesNavigationComponent = class CategoriesNavigationComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.forwardEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    goToHome(event) {
        this.navCtrl.navigateForward('/menu');
    }
    forward(event) {
        this.forwardEmit.emit();
    }
    back(event) {
        this.backEmit.emit();
    }
};
CategoriesNavigationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesNavigationComponent.prototype, "forwardEmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesNavigationComponent.prototype, "backEmit", void 0);
CategoriesNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-navigation/categories-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-navigation.component.scss */ "./src/app/components/categories-view/categories-navigation/categories-navigation.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CategoriesNavigationComponent);



/***/ }),

/***/ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.trayectoria {\n  margin-left: auto;\n  margin-right: auto;\n  width: 532px;\n  height: 97.18px;\n}\n\n.grid {\n  margin-top: 57px;\n  left: 56px;\n}\n\n.sujeto {\n  width: 230px;\n  height: 230px;\n  margin-left: auto;\n  background: url('black.svg');\n  background-size: auto;\n}\n\n.verbo {\n  width: 161px;\n  height: 161px;\n  margin-top: 34px;\n  margin-left: 42px;\n  margin-right: 43px;\n  background: url('red.svg');\n  background-size: auto;\n}\n\n.predicado {\n  width: 230px;\n  height: 230px;\n  margin-right: auto;\n  background: url('green.svg');\n  background-size: auto;\n}\n\n.element {\n  margin-left: auto;\n  margin-right: auto;\n  width: 176px;\n  height: 176px;\n  background: url('element.svg');\n  background-size: auto;\n}\n\n.options {\n  margin-top: 32px;\n}\n\n.palabras {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.pSujeto {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.pVerbo {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #FF6969;\n}\n\n.pPredicado {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #8ACF60;\n}\n\n.semantica {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.imagenPredicado {\n  width: 230px;\n  height: 230px;\n  border: 5px solid #8ACF60;\n}\n\n.rowAnimation {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btnComeBackTo {\n  width: 65px;\n  height: 65px;\n  margin-top: 50px;\n  margin-left: 720px;\n}\n\n.star {\n  width: 65px;\n  height: 65px;\n  margin-left: 115px;\n}\n\n.star2 {\n  width: 65px;\n  height: 65px;\n  margin-left: 90px;\n}\n\n.star3 {\n  width: 65px;\n  height: 65px;\n  margin-left: 100px;\n}\n\n.imagenSujeto {\n  width: 230px;\n  height: 230px;\n  border: 5px solid #3C3C3C;\n}\n\n.example-box {\n  width: 161px;\n  height: 161px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 100px;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy12aWV3LXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzLXZpZXdcXGNhdGVnb3JpZXMtdmlldy1wYW5lbFxcY2F0ZWdvcmllcy12aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLXZpZXctcGFuZWwvY2F0ZWdvcmllcy12aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ1FKOztBRExBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNPSjs7QURMQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDT0o7O0FETEE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0RBQUE7RUFBQSx1REFBQTtFQUNBLCtHQUFBO0FDWUo7O0FEUEU7RUFDRSxxSEFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvY2F0ZWdvcmllcy12aWV3LXBhbmVsL2NhdGVnb3JpZXMtdmlldy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi50cmF5ZWN0b3JpYXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUzMnB4O1xyXG4gICAgaGVpZ2h0OiA5Ny4xOHB4O1xyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNTdweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbn1cclxuLnN1amV0b3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvYmxhY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbn1cclxuLnZlcmJve1xyXG4gICAgd2lkdGg6IDE2MXB4O1xyXG4gICAgaGVpZ2h0OiAxNjFweDtcclxuICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDNweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvcmVkLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ucHJlZGljYWRve1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87ICAgIFxyXG59XHJcbi5lbGVtZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9lbGVtZW50LnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4ub3B0aW9uc3tcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLnBhbGFicmFze1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7IFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICMzQzNDM0M7ICAgIFxyXG59XHJcblxyXG4ucFN1amV0b3tcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4OyBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjM0MzQzNDOyAgICBcclxufVxyXG4ucFZlcmJve1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7IFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRjY5Njk7ICAgIFxyXG59XHJcbi5wUHJlZGljYWRve1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7IFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6ICM4QUNGNjA7ICAgIFxyXG59XHJcbi5zZW1hbnRpY2F7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbWFnZW5QcmVkaWNhZG97XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzhBQ0Y2MDtcclxuICAgIFxyXG59XHJcbi5yb3dBbmltYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnRuQ29tZUJhY2tUb3tcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MjBweDtcclxufVxyXG4uc3RhcntcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExNXB4O1xyXG59XHJcbi5zdGFyMntcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuLnN0YXIze1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuLmltYWdlblN1amV0b3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjM0MzQzNDO1xyXG4gICAgXHJcbn1cclxuLmV4YW1wbGUtYm94IHtcclxuICAgIHdpZHRoOiAxNjFweDtcclxuICAgIGhlaWdodDogMTYxcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94OmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyYXllY3RvcmlhIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUzMnB4O1xuICBoZWlnaHQ6IDk3LjE4cHg7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTdweDtcbiAgbGVmdDogNTZweDtcbn1cblxuLnN1amV0byB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc2VtYW50aWNzL3NlbWFudGljcy1nYW1lLXBhbmVsL2JsYWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuXG4udmVyYm8ge1xuICB3aWR0aDogMTYxcHg7XG4gIGhlaWdodDogMTYxcHg7XG4gIG1hcmdpbi10b3A6IDM0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc2VtYW50aWNzL3NlbWFudGljcy1nYW1lLXBhbmVsL3JlZC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbn1cblxuLnByZWRpY2FkbyB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9ncmVlbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbn1cblxuLmVsZW1lbnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTc2cHg7XG4gIGhlaWdodDogMTc2cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc2VtYW50aWNzL3NlbWFudGljcy1nYW1lLXBhbmVsL2VsZW1lbnQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5vcHRpb25zIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnBhbGFicmFzIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNDM0MzQztcbn1cblxuLnBTdWpldG8ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjM0MzQzNDO1xufVxuXG4ucFZlcmJvIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGNjk2OTtcbn1cblxuLnBQcmVkaWNhZG8ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOEFDRjYwO1xufVxuXG4uc2VtYW50aWNhIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2VuUHJlZGljYWRvIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjOEFDRjYwO1xufVxuXG4ucm93QW5pbWF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYnRuQ29tZUJhY2tUbyB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MjBweDtcbn1cblxuLnN0YXIge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW4tbGVmdDogMTE1cHg7XG59XG5cbi5zdGFyMiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4uc3RhcjMge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5pbWFnZW5TdWpldG8ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMzQzNDM0M7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAxNjFweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let CategoriesViewPanelComponent = class CategoriesViewPanelComponent {
    constructor(animationCtrl, navCtrl) {
        this.animationCtrl = animationCtrl;
        this.navCtrl = navCtrl;
        this.ejemplos = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.animacionSujeto();
        });
    }
    comeBackTo() {
        this.navCtrl.navigateForward('/semanticas');
    }
    animacionSujeto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const animationS = this.animationCtrl.create()
                .addElement(document.querySelector('.star'))
                .duration(1900)
                // .iterations(Infinity)
                .keyframes([
                { offset: 0, transform: 'scale(1) rotate(0)' },
                { offset: 0.5, transform: 'scale(1.5) rotate(90deg)' },
                { offset: 1, transform: 'scale(1) rotate(90deg)' }
            ]);
            const animationV = this.animationCtrl.create()
                .addElement(document.querySelector('.star2'))
                .duration(1900)
                // .iterations(Infinity)
                .keyframes([
                { offset: 0, transform: 'scale(1) rotate(0)' },
                { offset: 0.5, transform: 'scale(1.5) rotate(90deg)' },
                { offset: 1, transform: 'scale(1) rotate(90deg)' }
            ]);
            const animationP = this.animationCtrl.create()
                .addElement(document.querySelector('.star3'))
                .duration(1900)
                // .iterations(Infinity)
                .keyframes([
                { offset: 0, transform: 'scale(1) rotate(0)' },
                { offset: 0.5, transform: 'scale(1.5) rotate(90deg)' },
                { offset: 1, transform: 'scale(1) rotate(90deg)' }
            ]);
            yield animationS.play();
            yield animationV.play();
            yield animationP.play();
        });
    }
    /*
    nuevoEjemplo(){
      if (this.cantidadEjemplos > this.ejemplos.length){
        this.cantidadEjemplos = 0;
      }
      this.sujeto = this.ejemplos[this.cantidadEjemplos].sujeto;
      this.verbo = this.ejemplos[this.cantidadEjemplos].verbo;
      this.predicado = this.ejemplos[this.cantidadEjemplos].predicado;
      this.imagenSujeto = this.ejemplos[this.cantidadEjemplos].imagenSujeto;
      this.imagenVerbo = this.ejemplos[this.cantidadEjemplos].imagenVerbo;
      this.imagenPredicado = this.ejemplos[this.cantidadEjemplos].imagenPredicado;
      this.cantidadEjemplos ++;
    }
  
    ejemploAnterior(){
      this.cantidadEjemplos --;
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
  
    getEjemplos(value: string) {
      for(let i = 0; i < SUBCATEGORIAS.length; i++) {
        if (SUBCATEGORIAS[i].nombre === value) {
          this.ejemplos = SUBCATEGORIAS[i].data;
          break;
        }
      }
    }
  
    getSubcategorySelect(subcategoryNameSelected: string): SubcategoryI {
      subcategoryNameSelected = subcategoryNameSelected.toLowerCase();
      for (let i = 0; i < SUBCATEGORIAS.length; i++) {
        if (SUBCATEGORIAS[i].nombre.toUpperCase() == subcategoryNameSelected) {
          return SUBCATEGORIAS[i] as unknown as SubcategoryI;
        }
      }
    }
    */
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(this.subcategoryOneData);
        document.getElementById("sujeto").setAttribute('src', this.subcategoryOneData.imagenSujeto);
        document.getElementById("verbo").setAttribute('src', this.subcategoryOneData.imagenVerbo);
        document.getElementById("predicado").setAttribute('src', this.subcategoryOneData.imagenPredicado);
        this.animacionSujeto();
    }
    onload() { }
};
CategoriesViewPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesViewPanelComponent.prototype, "subcategoryOneData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "subcategoria", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "sujeto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "verbo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "predicado", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "imagenSujeto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "imagenVerbo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesViewPanelComponent.prototype, "imagenPredicado", void 0);
CategoriesViewPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-view-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-view-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-view-panel.component.scss */ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLXZpZXcvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXMtdmlld1xcY2F0ZWdvcmllcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMtdmlldy9jYXRlZ29yaWVzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy12aWV3L2NhdGVnb3JpZXMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4ucGFuZWx7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4uYmFye1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgaGVpZ2h0OiA2MjNweDsgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */");

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
/* harmony import */ var _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/categorias/data.subcategorias */ "./src/data/categorias/data.subcategorias.ts");



let CategoriesViewComponent = class CategoriesViewComponent {
    constructor() {
        this.indexData = 0;
    }
    ngOnInit() {
        //console.log(this.category.subcategoria.length);
        if (this.category.subcategoria.length < 1) {
            //console.log("ELSE");
            //console.log(this.category.nombre);
            this.subcategory = this.getSubcategorySelect(this.category.nombre);
        }
        else {
            //console.log("IF");
            //console.log(this.category.subcategoria[0].nombre);
            this.subcategory = this.getSubcategorySelect(this.category.subcategoria[0].nombre);
        }
        //console.log(this.subcategory);
    }
    selectPanel(event) {
    }
    changeSubcategory(subcategoryName) {
        this.subcategory = this.getSubcategorySelect(subcategoryName);
    }
    getSubcategorySelect(subcategoryNameSelected) {
        subcategoryNameSelected = subcategoryNameSelected.toUpperCase();
        for (let i = 0; i < _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"].length; i++) {
            if (_data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"][i].nombre.toUpperCase() == subcategoryNameSelected) {
                this.indexData = 0;
                return _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"][i];
            }
        }
    }
    incIndexData() {
        if (this.subcategory.data.length - 1 == this.indexData) {
            this.indexData = 0;
        }
        else {
            this.indexData++;
        }
    }
    decIndexData() {
        if (this.indexData == 0) {
            this.indexData = this.subcategory.data.length - 1;
        }
        else {
            this.indexData--;
        }
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(this.category);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesViewComponent.prototype, "category", void 0);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-panel/menu-panel.component */ "./src/app/components/menu-panel/menu-panel.component.ts");
/* harmony import */ var _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-panel/professor-menu/professor-menu.component */ "./src/app/components/menu-panel/professor-menu/professor-menu.component.ts");
/* harmony import */ var _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-panel/students-menu/students-menu.component */ "./src/app/components/menu-panel/students-menu/students-menu.component.ts");
/* harmony import */ var _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phoneme/phoneme.component */ "./src/app/components/phoneme/phoneme.component.ts");
/* harmony import */ var _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phoneme/phoneme-bar/phoneme-bar.component */ "./src/app/components/phoneme/phoneme-bar/phoneme-bar.component.ts");
/* harmony import */ var _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./phoneme/vocal-panel/vocal-panel.component */ "./src/app/components/phoneme/vocal-panel/vocal-panel.component.ts");
/* harmony import */ var _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phoneme/consonant-panel/consonant-panel.component */ "./src/app/components/phoneme/consonant-panel/consonant-panel.component.ts");
/* harmony import */ var _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phoneme/phoneme-game-panel/phoneme-game-panel.component */ "./src/app/components/phoneme/phoneme-game-panel/phoneme-game-panel.component.ts");
/* harmony import */ var _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./semantics/semantics.component */ "./src/app/components/semantics/semantics.component.ts");
/* harmony import */ var _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./semantics/semantics-bar/semantics-bar.component */ "./src/app/components/semantics/semantics-bar/semantics-bar.component.ts");
/* harmony import */ var _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./semantics/categories-panel/categories-panel.component */ "./src/app/components/semantics/categories-panel/categories-panel.component.ts");
/* harmony import */ var _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./semantics/semantics-game-panel/semantics-game-panel.component */ "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.ts");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/components/professor/professor.component.ts");
/* harmony import */ var _professor_list_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./professor/list/list.component */ "./src/app/components/professor/list/list.component.ts");
/* harmony import */ var _professor_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./professor/register/register.component */ "./src/app/components/professor/register/register.component.ts");
/* harmony import */ var _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./professor/student-info/student-info.component */ "./src/app/components/professor/student-info/student-info.component.ts");
/* harmony import */ var _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./professor/students-bar/students-bar.component */ "./src/app/components/professor/students-bar/students-bar.component.ts");
/* harmony import */ var _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./professor/student-info/function-bar/function-bar.component */ "./src/app/components/professor/student-info/function-bar/function-bar.component.ts");
/* harmony import */ var _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./professor/student-info/info-panel/info-panel.component */ "./src/app/components/professor/student-info/info-panel/info-panel.component.ts");
/* harmony import */ var _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./semantics/subcategories/subcategories.component */ "./src/app/components/semantics/subcategories/subcategories.component.ts");
/* harmony import */ var _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./semantics/subcategories/subcategories-bar/subcategories-bar.component */ "./src/app/components/semantics/subcategories/subcategories-bar/subcategories-bar.component.ts");
/* harmony import */ var _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./semantics/subcategories/subcategories-panel/subcategories-panel.component */ "./src/app/components/semantics/subcategories/subcategories-panel/subcategories-panel.component.ts");
/* harmony import */ var _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./phoneme-view/phoneme-view.component */ "./src/app/components/phoneme-view/phoneme-view.component.ts");
/* harmony import */ var _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./phoneme-view/bar/bar.component */ "./src/app/components/phoneme-view/bar/bar.component.ts");
/* harmony import */ var _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./phoneme-view/phoneme-panel/phoneme-panel.component */ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.ts");
/* harmony import */ var _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./phoneme-view/video-panel/video-panel.component */ "./src/app/components/phoneme-view/video-panel/video-panel.component.ts");
/* harmony import */ var _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./categories-view/categories-view.component */ "./src/app/components/categories-view/categories-view.component.ts");
/* harmony import */ var _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./categories-view/categories-bar/categories-bar.component */ "./src/app/components/categories-view/categories-bar/categories-bar.component.ts");
/* harmony import */ var _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./categories-view/categories-view-panel/categories-view-panel.component */ "./src/app/components/categories-view/categories-view-panel/categories-view-panel.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _phoneme_consonant_view_phoneme_consonant_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./phoneme-consonant-view/phoneme-consonant-view.component */ "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.ts");
/* harmony import */ var _phoneme_consonant_view_consonant_bar_consonant_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./phoneme-consonant-view/consonant-bar/consonant-bar.component */ "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.ts");
/* harmony import */ var _phoneme_consonant_view_consonant_phoneme_panel_consonant_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component */ "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.ts");
/* harmony import */ var _phoneme_consonant_view_consonant_phoneme_video_panel_consonant_phoneme_video_panel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component */ "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.ts");
/* harmony import */ var _categories_view_categories_navigation_categories_navigation_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./categories-view/categories-navigation/categories-navigation.component */ "./src/app/components/categories-view/categories-navigation/categories-navigation.component.ts");
/* harmony import */ var _phoneme_consonant_view_consonant_navigation_consonant_navigation_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./phoneme-consonant-view/consonant-navigation/consonant-navigation.component */ "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.ts");
/* harmony import */ var _phoneme_view_phoneme_nav_phoneme_nav_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./phoneme-view/phoneme-nav/phoneme-nav.component */ "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _restore_restore_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./restore/restore.component */ "./src/app/components/restore/restore.component.ts");














































let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__["MenuPanelComponent"], _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProfessorMenuComponent"], _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_8__["StudentsMenuComponent"],
            _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_9__["PhonemeComponent"], _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_10__["PhonemeBarComponent"], _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_11__["VocalPanelComponent"], _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_12__["ConsonantPanelComponent"], _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_13__["PhonemeGamePanelComponent"],
            _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_28__["PhonemeViewComponent"], _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_29__["BarComponent"], _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_30__["PhonemePanelComponent"], _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_31__["VideoPanelComponent"], _phoneme_view_phoneme_nav_phoneme_nav_component__WEBPACK_IMPORTED_MODULE_43__["PhonemeNavComponent"],
            _phoneme_consonant_view_phoneme_consonant_view_component__WEBPACK_IMPORTED_MODULE_37__["PhonemeConsonantViewComponent"], _phoneme_consonant_view_consonant_bar_consonant_bar_component__WEBPACK_IMPORTED_MODULE_38__["ConsonantBarComponent"], _phoneme_consonant_view_consonant_phoneme_panel_consonant_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_39__["ConsonantPhonemePanelComponent"], _phoneme_consonant_view_consonant_phoneme_video_panel_consonant_phoneme_video_panel_component__WEBPACK_IMPORTED_MODULE_40__["ConsonantPhonemeVideoPanelComponent"],
            _phoneme_consonant_view_consonant_navigation_consonant_navigation_component__WEBPACK_IMPORTED_MODULE_42__["ConsonantNavigationComponent"],
            _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_14__["SemanticsComponent"], _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_15__["SemanticsBarComponent"], _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesPanelComponent"], _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_17__["SemanticsGamePanelComponent"],
            _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"],
            _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_32__["CategoriesViewComponent"], _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_33__["CategoriesBarComponent"], _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_34__["CategoriesViewPanelComponent"], _categories_view_categories_navigation_categories_navigation_component__WEBPACK_IMPORTED_MODULE_41__["CategoriesNavigationComponent"],
            _professor_professor_component__WEBPACK_IMPORTED_MODULE_18__["ProfessorComponent"], _professor_list_list_component__WEBPACK_IMPORTED_MODULE_19__["ListComponent"], _professor_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_21__["StudentInfoComponent"],
            _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_23__["FunctionBarComponent"], _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_24__["InfoPanelComponent"], _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_22__["StudentsBarComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"],
            _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_35__["NavigationComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_44__["SignupComponent"], _restore_restore_component__WEBPACK_IMPORTED_MODULE_45__["RestoreComponent"]],
        exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__["MenuPanelComponent"], _menu_panel_professor_menu_professor_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProfessorMenuComponent"], _menu_panel_students_menu_students_menu_component__WEBPACK_IMPORTED_MODULE_8__["StudentsMenuComponent"],
            _phoneme_phoneme_component__WEBPACK_IMPORTED_MODULE_9__["PhonemeComponent"], _phoneme_phoneme_bar_phoneme_bar_component__WEBPACK_IMPORTED_MODULE_10__["PhonemeBarComponent"], _phoneme_vocal_panel_vocal_panel_component__WEBPACK_IMPORTED_MODULE_11__["VocalPanelComponent"], _phoneme_consonant_panel_consonant_panel_component__WEBPACK_IMPORTED_MODULE_12__["ConsonantPanelComponent"], _phoneme_phoneme_game_panel_phoneme_game_panel_component__WEBPACK_IMPORTED_MODULE_13__["PhonemeGamePanelComponent"],
            _phoneme_view_phoneme_view_component__WEBPACK_IMPORTED_MODULE_28__["PhonemeViewComponent"], _phoneme_view_bar_bar_component__WEBPACK_IMPORTED_MODULE_29__["BarComponent"], _phoneme_view_phoneme_panel_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_30__["PhonemePanelComponent"], _phoneme_view_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_31__["VideoPanelComponent"], _phoneme_view_phoneme_nav_phoneme_nav_component__WEBPACK_IMPORTED_MODULE_43__["PhonemeNavComponent"],
            _phoneme_consonant_view_phoneme_consonant_view_component__WEBPACK_IMPORTED_MODULE_37__["PhonemeConsonantViewComponent"], _phoneme_consonant_view_consonant_bar_consonant_bar_component__WEBPACK_IMPORTED_MODULE_38__["ConsonantBarComponent"], _phoneme_consonant_view_consonant_phoneme_panel_consonant_phoneme_panel_component__WEBPACK_IMPORTED_MODULE_39__["ConsonantPhonemePanelComponent"], _phoneme_consonant_view_consonant_phoneme_video_panel_consonant_phoneme_video_panel_component__WEBPACK_IMPORTED_MODULE_40__["ConsonantPhonemeVideoPanelComponent"],
            _semantics_semantics_component__WEBPACK_IMPORTED_MODULE_14__["SemanticsComponent"], _semantics_semantics_bar_semantics_bar_component__WEBPACK_IMPORTED_MODULE_15__["SemanticsBarComponent"], _semantics_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesPanelComponent"], _semantics_semantics_game_panel_semantics_game_panel_component__WEBPACK_IMPORTED_MODULE_17__["SemanticsGamePanelComponent"],
            _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"], _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"],
            _categories_view_categories_view_component__WEBPACK_IMPORTED_MODULE_32__["CategoriesViewComponent"], _categories_view_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_33__["CategoriesBarComponent"], _categories_view_categories_view_panel_categories_view_panel_component__WEBPACK_IMPORTED_MODULE_34__["CategoriesViewPanelComponent"], _categories_view_categories_navigation_categories_navigation_component__WEBPACK_IMPORTED_MODULE_41__["CategoriesNavigationComponent"],
            _professor_professor_component__WEBPACK_IMPORTED_MODULE_18__["ProfessorComponent"], _professor_list_list_component__WEBPACK_IMPORTED_MODULE_19__["ListComponent"], _professor_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _professor_student_info_student_info_component__WEBPACK_IMPORTED_MODULE_21__["StudentInfoComponent"],
            _professor_student_info_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_23__["FunctionBarComponent"], _professor_student_info_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_24__["InfoPanelComponent"], _professor_students_bar_students_bar_component__WEBPACK_IMPORTED_MODULE_22__["StudentsBarComponent"], _semantics_subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_25__["SubcategoriesComponent"],
            _semantics_subcategories_subcategories_bar_subcategories_bar_component__WEBPACK_IMPORTED_MODULE_26__["SubcategoriesBarComponent"], _semantics_subcategories_subcategories_panel_subcategories_panel_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoriesPanelComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_35__["NavigationComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_44__["SignupComponent"], _restore_restore_component__WEBPACK_IMPORTED_MODULE_45__["RestoreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__["DragDropModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1280px) and (orientation: landscape) {\n  .principal {\n    position: absolute;\n    width: 554px;\n    height: 264px;\n    margin-left: 360px;\n    margin-right: 360px;\n    top: 318px;\n    background: #7A84DD;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .tituloUsuario {\n    top: 16px;\n    margin-left: 241px;\n    margin-right: auto;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n\n  .tituloClave {\n    margin-left: 219px;\n    margin-right: auto;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n\n  .usuario {\n    width: 484px;\n    height: 44px;\n    left: 25px;\n    right: 33px;\n    top: 4px;\n    background: #FFFFFF;\n    border-radius: 3px;\n  }\n\n  .clave {\n    width: 484px;\n    height: 44px;\n    left: 25px;\n    right: 33px;\n    top: 14px;\n    background: #FFFFFF;\n    border-radius: 3px;\n  }\n\n  .btnLogin {\n    position: absolute;\n    width: 150px;\n    height: 44px;\n    left: 203px;\n    right: 201px;\n    top: 18px;\n    bottom: 20px;\n    background: #A9B0F0;\n    border-radius: 6px;\n  }\n\n  .alertClass {\n    --background: blue;\n    text-align: center;\n  }\n\n  /* DOES NOT WORK - not specific enough \n  .alert-wrapper {\n      background: #e5e5e5;\n      text-align: center;\n  }\n   DOES NOT WORK - not specific enough */\n  /* Works - pass \"my-custom-class\" in cssClass to increase specificity \n    .my-custom-class .alert-wrapper {\n        background: #e5e5e5;\n        text-align: center;\n        font-family: Poppins;\n    }\n    DOES NOT WORK - not specific enough */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFFQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNETjs7RURJRTtJQUdJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUdBLGNBQUE7RUNOTjs7RURRRTtJQUdJLGtCQUFBO0lBQ0Esa0JBQUE7SUFHQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFJQSxjQUFBO0VDWk47O0VEY0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNYTjs7RURjRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ1hOOztFRGNFO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFFQSxtQkFBQTtJQUNBLGtCQUFBO0VDWk47O0VEZ0JFO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtFQ2JOOztFRGdCRTs7Ozs7d0NBQUE7RUFPRjs7Ozs7O3lDQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpeyAgXHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTU0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzYwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNjBweDtcclxuICAgICAgICB0b3A6IDMxOHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgLnRpdHVsb1VzdWFyaW97XHJcbiAgICAgICAgLy93aWR0aDogMTAwcHg7XHJcbiAgICAgICAgLy9oZWlnaHQ6IDMwcHg7ICAgIFxyXG4gICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjQxcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC8vZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvL2xpbmUtaGVpZ2h0OiAzMHB4OyBcclxuXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG4gICAgfSAgIFxyXG4gICAgLnRpdHVsb0NsYXZle1xyXG4gICAgICAgIC8vd2lkdGg6IDEyMXB4O1xyXG4gICAgICAgIC8vaGVpZ2h0OiAzMHB4OyAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIxOXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgICBcclxuICAgICAgICAvL2ZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxuICAgIH1cclxuICAgIC51c3Vhcmlve1xyXG4gICAgICAgIHdpZHRoOiA0ODRweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICByaWdodDogMzNweDsgICAgXHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7ICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuY2xhdmV7XHJcbiAgICAgICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAzM3B4O1xyXG4gICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5idG5Mb2dpbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBsZWZ0OiAyMDNweDtcclxuICAgICAgICByaWdodDogMjAxcHg7XHJcbiAgICAgICAgdG9wOiAxOHB4O1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQTlCMEYwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIC8vRXN0aWxvcyBhbGVydFxyXG4gICAgLmFsZXJ0Q2xhc3N7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgIC8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoIFxyXG4gICAgLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbiAgXHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgXHJcbiAgICAubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIH1cclxuICAgIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbiAgICBcclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NTRweDtcbiAgICBoZWlnaHQ6IDI2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2MHB4O1xuICAgIHRvcDogMzE4cHg7XG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAudGl0dWxvVXN1YXJpbyB7XG4gICAgdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuXG4gIC50aXR1bG9DbGF2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgLnVzdWFyaW8ge1xuICAgIHdpZHRoOiA0ODRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGVmdDogMjVweDtcbiAgICByaWdodDogMzNweDtcbiAgICB0b3A6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5jbGF2ZSB7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIHJpZ2h0OiAzM3B4O1xuICAgIHRvcDogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5idG5Mb2dpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGVmdDogMjAzcHg7XG4gICAgcmlnaHQ6IDIwMXB4O1xuICAgIHRvcDogMThweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0E5QjBGMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAuYWxlcnRDbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiBibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoIFxuICAuYWxlcnQtd3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xuICAvKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBcbiAgICAubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICB9XG4gICAgRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cbn0iXX0= */");

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// Servicio para Firebase





// Notificacion de Ingreso

let LoginComponent = class LoginComponent {
    constructor(navCtrl, userService, authenticationService, studentService, route, authService, alertController) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.studentService = studentService;
        this.route = route;
        this.authService = authService;
        this.alertController = alertController;
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"];
        this.newStudent = new _models_student__WEBPACK_IMPORTED_MODULE_8__["Student"];
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
            document.getElementById('email').setAttribute('value', '');
            document.getElementById('password').setAttribute('value', '');
            if (this.authenticationService.getUserDetails().tipo.toUpperCase() == "ESTUDIANTE") {
                // Redireccionar al menu del estudiante
                //this.navCtrl.navigateForward('/menu');        
                this.route.navigate(['/menu'], { queryParams: { tipo: false } });
            }
            else if (this.authenticationService.getUserDetails().tipo.toUpperCase() == "DOCENTE") {
                // Redireccionar al menu del docente
                //this.navCtrl.navigateForward('/menu');
                this.route.navigate(['/menu'], { queryParams: { tipo: true } });
            }
        })
            .catch(err => {
            console.log("Login Incorrecto :");
        });
        this.loginFirebase();
    }
    goToRegistro() {
        // this.navCtrl.navigateForward('/registro');
    }
    loginFirebase() {
        console.log('Estas en el login Firebase');
        this.authService.login(this.email, this.password).then(res => {
            this.presentAlert();
            // this.route.navigate(['/menu']); // Se requiere validar entre estudiantes y docentes
        }).catch(err => this.errorAlert());
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: ' Verificación de Acceso',
                subHeader: 'Acceso Confirmado',
                message: 'Bienvenidos a Coletín',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.route.navigate(['/menu']); // Se requiere validar entre estudiantes y docentes
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    errorAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: ' Verificación de Acceso',
                subHeader: 'Acceso Denegado',
                message: 'Usuario y contraseña inválidos',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
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
        _services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1280px) and (orientation: landscape) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LXBhbmVsXFxtZW51LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcGFuZWwvbWVudS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGFBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL21lbnUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgIC5wcmluY2lwYWx7XHJcbiAgICAgICAgd2lkdGg6IDExNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyAgXHJcbiAgICB9XHJcbn1cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDExNDRweDtcbiAgICBoZWlnaHQ6IDY2NHB4O1xuICB9XG59Il19 */");

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
    ngOnInit() {
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MenuPanelComponent.prototype, "tipo", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 715px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 119px;\n    margin-right: 120px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n    margin-left: 91px;\n    margin-right: 91px;\n    text-align: center;\n  }\n\n  .opcionFonema {\n    width: 150px;\n    height: 150px;\n    background: url('fonemas.svg');\n    background-size: 150px 150px;\n    background-position: center;\n    text-align: center;\n    left: 40px;\n    right: auto;\n  }\n\n  .opcionSemantica {\n    width: 150px;\n    height: 150px;\n    background: url('semanticas.svg');\n    background-size: 150px 150px;\n    background-position: center;\n    text-align: center;\n    left: auto;\n    right: 47px;\n  }\n\n  .opcionEstudiantes {\n    width: 150px;\n    height: 150px;\n    background: url('estudiantes.svg');\n    background-size: 150px 150px;\n    background-position: center;\n    text-align: center;\n    left: 40px;\n    right: auto;\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    left: auto;\n    right: auto;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 45px;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .rowTexto {\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 334px;\n    margin-right: 334px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n  }\n\n  .opcionFonema {\n    width: 230px;\n    height: 230px;\n    background: url('fonemas.svg');\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 230px;\n    height: 230px;\n    background: url('semanticas.svg');\n  }\n\n  .opcionEstudiantes {\n    width: 230px;\n    height: 230px;\n    background: url('estudiantes.svg');\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3Byb2Zlc3Nvci1tZW51L0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LXBhbmVsXFxwcm9mZXNzb3ItbWVudVxccHJvZmVzc29yLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9wcm9mZXNzb3ItbWVudS9wcm9mZXNzb3ItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNDTjs7RURDRztJQUNHLFdBQUE7SUFDQSxZQUFBO0VDRU47O0VEQUU7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNHTjs7RURERTtJQUNJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUMsY0FBQTtFQ0dQOztFRERHO0lBQ0csVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ0lOOztFRERFO0lBRUksWUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDR047O0VEREU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlDQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUNJTjs7RURGRTtJQUNLLFlBQUE7SUFDQSxhQUFBO0lBQ0Qsa0NBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ0tOOztFREhFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFFQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFHQSw0QkFBQTtJQUVBLGNBQUE7RUNFTjs7RURBRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0dOOztFRERFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ0lOO0FBQ0Y7QURGQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7RUNJTjs7RURGRztJQUNJLFdBQUE7SUFDQSxZQUFBO0VDS1A7O0VESEc7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNNUDs7RURKRztJQUNHLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUMsY0FBQTtFQ01QOztFREhHO0lBQ0ksVUFBQTtFQ01QOztFREhHO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQ01QOztFREhHO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUNBQUE7RUNNUDs7RURGRztJQUVHLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7RUNJTjs7RURBRztJQUNJLFlBQUE7SUFDQSxZQUFBO0lBRUEsVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBRUEsNEJBQUE7SUFFQSxjQUFBO0VDRFA7O0VESUc7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDRFA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9wcm9mZXNzb3ItbWVudS9wcm9mZXNzb3ItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODAwcHgpe1xyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICB3aWR0aDogNzE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NjRweDsgXHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgXHJcbiAgICAgfSBcclxuICAgICAuaWNvbntcclxuICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9ICBcclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgdG9wOiA4MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjExOXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ3NnB4O1xyXG4gICAgICAgIGhlaWdodDogMTY0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgfSBcclxuICAgIC50ZXh0b3tcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxuICAgICB9ICBcclxuICAgICAub3BjaW9uZXN7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDkxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIH0gIFxyXG4gICAgLm9wY2lvbkZvbmVtYXtcclxuICAgICBcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9mb25lbWFzLnN2ZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfSAgXHJcbiAgICAub3BjaW9uU2VtYW50aWNhe1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL3NlbWFudGljYXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IDQ3cHg7XHJcbiAgICB9IFxyXG4gICAgLm9wY2lvbkVzdHVkaWFudGVze1xyXG4gICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvZXN0dWRpYW50ZXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxlZnQ6IDQwcHg7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9ICAgXHJcbiAgICAudGV4dG9PcGNpb257XHJcbiAgICAgICAgd2lkdGg6IDM2NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRvcDogNjIxcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbiAgICB9IFxyXG4gICAgLnJvd1RleHRve1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYnRuTG9nb3V0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxNDJweDtcclxuICAgICAgICB0b3A6IDEzN3B4OyAgICBcclxuICAgIH0gICAgICAgICAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiAxMTQ0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NjRweDsgXHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgXHJcbiAgICAgfVxyXG4gICAgIC5pY29ue1xyXG4gICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgIH1cclxuICAgICAudGl0dWxve1xyXG4gICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OjMzNHB4O1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDMzNHB4O1xyXG4gICAgICAgICB3aWR0aDogNDc2cHg7XHJcbiAgICAgICAgIGhlaWdodDogMTY0cHg7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgICB9XHJcbiAgICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAub3BjaW9uZXN7XHJcbiAgICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICAgLm9wY2lvbkZvbmVtYXtcclxuICAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9mb25lbWFzLnN2ZycpO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICAub3BjaW9uU2VtYW50aWNhe1xyXG4gICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL3NlbWFudGljYXMuc3ZnJyk7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAgLm9wY2lvbkVzdHVkaWFudGVze1xyXG4gICAgICAgIC8vIGxlZnQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvZXN0dWRpYW50ZXMuc3ZnJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIC50ZXh0b09wY2lvbntcclxuICAgICAgICAgd2lkdGg6IDM2NXB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgIC8vbGVmdDogMzE3cHg7XHJcbiAgICAgICAgIHRvcDogNjIxcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICAgXHJcbiAgICAgICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmJ0bkxvZ291dHtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICBsZWZ0OiAxNDJweDtcclxuICAgICAgICAgdG9wOiAxMzdweDsgICAgXHJcbiAgICAgfVxyXG59XHJcblxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDcxNXB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAub3BjaW9uZXMge1xuICAgIHRvcDogMTQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDkxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA5MXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5vcGNpb25Gb25lbWEge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9mb25lbWFzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogNDBweDtcbiAgICByaWdodDogYXV0bztcbiAgfVxuXG4gIC5vcGNpb25TZW1hbnRpY2Ege1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogNDdweDtcbiAgfVxuXG4gIC5vcGNpb25Fc3R1ZGlhbnRlcyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2VzdHVkaWFudGVzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogNDBweDtcbiAgICByaWdodDogYXV0bztcbiAgfVxuXG4gIC50ZXh0b09wY2lvbiB7XG4gICAgd2lkdGg6IDM2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogNjIxcHg7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGNvbG9yOiAjNUY2NTlDO1xuICB9XG5cbiAgLnJvd1RleHRvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmJ0bkxvZ291dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE0MnB4O1xuICAgIHRvcDogMTM3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTE0NHB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMzNHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAub3BjaW9uZXMge1xuICAgIHRvcDogMTQwcHg7XG4gIH1cblxuICAub3BjaW9uRm9uZW1hIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvZm9uZW1hcy5zdmdcIik7XG4gIH1cblxuICAub3BjaW9uU2VtYW50aWNhIHtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnN2Z1wiKTtcbiAgfVxuXG4gIC5vcGNpb25Fc3R1ZGlhbnRlcyB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL2VzdHVkaWFudGVzLnN2Z1wiKTtcbiAgfVxuXG4gIC50ZXh0b09wY2lvbiB7XG4gICAgd2lkdGg6IDM2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB0b3A6IDYyMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAuYnRuTG9nb3V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTQycHg7XG4gICAgdG9wOiAxMzdweDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






let ProfessorMenuComponent = class ProfessorMenuComponent {
    constructor(navCtrl, authenticationService, router, authService) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() { }
    selectTheme(event) {
        console.log(event.target.value);
        this.navCtrl.navigateForward('/' + event.target.value);
    }
    logout() {
        // this.authenticationService.logout();
        this.authService.logout();
    }
};
ProfessorMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 800px) {\n  .principal {\n    width: 715px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 119px;\n    margin-right: 120px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 140px;\n    text-align: center;\n    margin-left: 91px;\n    margin-right: 91px;\n  }\n\n  .opcionFonema {\n    width: 150px;\n    height: 150px;\n    background: url('fonemas.svg');\n    background-size: 150px 150px;\n    text-align: center;\n    left: 40px;\n    right: auto;\n  }\n\n  .opcionSemantica {\n    left: 50px;\n    width: 150px;\n    height: 150px;\n    background: url('semanticas.svg');\n    background-size: 150px 150px;\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    left: auto;\n    right: auto;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 45px;\n    text-align: center;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n@media screen and (min-width: 1280px) and (orientation: landscape) {\n  .principal {\n    width: 1144px;\n    height: 664px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 15px;\n  }\n\n  .icon {\n    width: 56px;\n    height: 45px;\n  }\n\n  .titulo {\n    top: 81px;\n    margin-left: 334px;\n    margin-right: 334px;\n    width: 476px;\n    height: 164px;\n    text-align: center;\n  }\n\n  .texto {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 35px;\n    line-height: 52px;\n    text-align: center;\n    color: #5F659C;\n  }\n\n  .opciones {\n    top: 254px;\n    margin-left: 190px;\n    margin-right: 190px;\n  }\n\n  .divFonema {\n    width: 274px;\n    margin-right: 118px;\n  }\n\n  .divSemantica {\n    margin-left: 118px;\n  }\n\n  .opcionFonema {\n    width: 264px;\n    height: 264px;\n    background: url('fonemas.png');\n  }\n\n  .opcionSemantica {\n    left: 40px;\n    width: 264px;\n    height: 264px;\n    background: url('semanticas.png');\n  }\n\n  .textoOpcion {\n    width: 365px;\n    height: 45px;\n    top: 621px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 45px;\n    /* identical to box height */\n    color: #5F659C;\n  }\n\n  .btnLogout {\n    position: absolute;\n    left: 142px;\n    top: 137px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXBhbmVsL3N0dWRlbnRzLW1lbnUvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lbnUtcGFuZWxcXHN0dWRlbnRzLW1lbnVcXHN0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9zdHVkZW50cy1tZW51L3N0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQ0FBQTtJQUNBLG1CQUFBO0VDQU47O0VERUc7SUFDRyxXQUFBO0lBQ0EsWUFBQTtFQ0NOOztFRENFO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDRU47O0VEQUU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVDLGNBQUE7RUNFUDs7RURBRztJQUNHLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNHTjs7RURERTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUNJTjs7RURGRTtJQUVJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlDQUFBO0lBQ0EsNEJBQUE7RUNJTjs7RURGRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBRUEsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQSw0QkFBQTtJQUVBLGNBQUE7RUNDTjs7RURDRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNFTjtBQUNGO0FEQ0E7RUFDSTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQ0FBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VEQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0VOOztFREFFO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDR047O0VEREU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVBLGNBQUE7RUNHTjs7RURBRTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDR047O0VEREU7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUNJTjs7RURGRTtJQUNJLGtCQUFBO0VDS047O0VESEU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VDTU47O0VESEU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxpQ0FBQTtFQ01OOztFREhFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFFQSxVQUFBO0lBRUEsb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBRUEsNEJBQUE7SUFFQSxjQUFBO0VDRU47O0VEQ0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wYW5lbC9zdHVkZW50cy1tZW51L3N0dWRlbnRzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiA3MTVweDtcclxuICAgICAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgICB9IFxyXG4gICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH0gIFxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICAgICAgICB3aWR0aDogNDc2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgICB9IFxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgIH0gIFxyXG4gICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDkxcHg7XHJcbiAgICB9ICBcclxuICAgIC5vcGNpb25Gb25lbWF7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvZm9uZW1hcy5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfSAgXHJcbiAgICAub3BjaW9uU2VtYW50aWNhe1xyXG5cclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9tZW51LXBhbmVsL3NlbWFudGljYXMuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcclxuICAgIH0gIFxyXG4gICAgLnRleHRvT3BjaW9ue1xyXG4gICAgICAgIHdpZHRoOiAzNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgLy9sZWZ0OiAzMTdweDtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRvcDogNjIxcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbiAgICB9IFxyXG4gICAgLmJ0bkxvZ291dHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTQycHg7XHJcbiAgICAgICAgdG9wOiAxMzdweDsgICAgXHJcbiAgICB9ICAgICAgICAgICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiAxMTQ0cHg7XHJcbiAgICBoZWlnaHQ6IDY2NHB4OyBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgdG9wOiA4MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzM0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ3NnB4O1xyXG4gICAgICAgIGhlaWdodDogMTY0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgfVxyXG4gICAgLnRleHRve1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5vcGNpb25lc3tcclxuICAgICAgICB0b3A6IDI1NHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdkZvbmVtYXtcclxuICAgICAgICB3aWR0aDogMjc0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMThweDtcclxuICAgIH1cclxuICAgIC5kaXZTZW1hbnRpY2F7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xyXG4gICAgfVxyXG4gICAgLm9wY2lvbkZvbmVtYXtcclxuICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1wYW5lbC9mb25lbWFzLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGNpb25TZW1hbnRpY2F7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1wYW5lbC9zZW1hbnRpY2FzLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0b09wY2lvbntcclxuICAgICAgICB3aWR0aDogMzY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIC8vbGVmdDogMzE3cHg7XHJcbiAgICAgICAgdG9wOiA2MjFweDtcclxuICAgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5idG5Mb2dvdXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE0MnB4O1xyXG4gICAgICAgIHRvcDogMTM3cHg7ICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnByaW5jaXBhbCB7XG4gICAgd2lkdGg6IDcxNXB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAub3BjaW9uZXMge1xuICAgIHRvcDogMTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA5MXB4O1xuICAgIG1hcmdpbi1yaWdodDogOTFweDtcbiAgfVxuXG4gIC5vcGNpb25Gb25lbWEge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvbWVudS1wYW5lbC9mb25lbWFzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL21lbnUtcGFuZWwvc2VtYW50aWNhcy5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxNTBweDtcbiAgfVxuXG4gIC50ZXh0b09wY2lvbiB7XG4gICAgd2lkdGg6IDM2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogNjIxcHg7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5idG5Mb2dvdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNDJweDtcbiAgICB0b3A6IDEzN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTE0NHB4O1xuICAgIGhlaWdodDogNjY0cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdHVsbyB7XG4gICAgdG9wOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMzNHB4O1xuICAgIHdpZHRoOiA0NzZweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzVGNjU5QztcbiAgfVxuXG4gIC5vcGNpb25lcyB7XG4gICAgdG9wOiAyNTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcbiAgfVxuXG4gIC5kaXZGb25lbWEge1xuICAgIHdpZHRoOiAyNzRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExOHB4O1xuICB9XG5cbiAgLmRpdlNlbWFudGljYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDExOHB4O1xuICB9XG5cbiAgLm9wY2lvbkZvbmVtYSB7XG4gICAgd2lkdGg6IDI2NHB4O1xuICAgIGhlaWdodDogMjY0cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9tZW51LXBhbmVsL2ZvbmVtYXMucG5nXCIpO1xuICB9XG5cbiAgLm9wY2lvblNlbWFudGljYSB7XG4gICAgbGVmdDogNDBweDtcbiAgICB3aWR0aDogMjY0cHg7XG4gICAgaGVpZ2h0OiAyNjRweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL21lbnUtcGFuZWwvc2VtYW50aWNhcy5wbmdcIik7XG4gIH1cblxuICAudGV4dG9PcGNpb24ge1xuICAgIHdpZHRoOiAzNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA2MjFweDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgY29sb3I6ICM1RjY1OUM7XG4gIH1cblxuICAuYnRuTG9nb3V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTQycHg7XG4gICAgdG9wOiAxMzdweDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






let StudentsMenuComponent = class StudentsMenuComponent {
    constructor(navCtrl, authenticationService, router, authService) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() { }
    selectTheme(event) {
        console.log(event.target.value);
        this.navCtrl.navigateForward('/' + event.target.value);
    }
    logout() {
        // this.authenticationService.logout();
        this.authService.logout();
    }
};
StudentsMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
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
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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

/***/ "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 263px;\n  height: 262px;\n  left: 16px;\n  right: 23px;\n  top: 206px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 15px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.fonema {\n  position: absolute;\n  width: 301px;\n  height: 74px;\n  left: 96px;\n  right: 41px;\n  top: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.videoFonema {\n  margin-top: 65px;\n  margin-right: 100px;\n}\n\n.mensaje {\n  width: 303px;\n  height: 42px;\n  margin-top: 450px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n\n.btnPlay {\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1iYXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtY29uc29uYW50LXZpZXdcXGNvbnNvbmFudC1iYXJcXGNvbnNvbmFudC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtYmFyL2NvbnNvbmFudC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0w7O0FEQ0M7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDRUw7O0FEQUM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQ0NMOztBRENDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURHQztFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURHQztFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNESjs7QURJQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNETDs7QURHQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURFQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNDTDs7QURDQztFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0VMOztBREFDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR0w7O0FEREM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNJTDs7QURGQztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0tMOztBREZDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtYmFyL2NvbnNvbmFudC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAzMDJweDtcclxuICAgICBoZWlnaHQ6IDYyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNGQ0QyNjA7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxuIH1cclxuIC5pbWFnZW57XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAyNjNweDtcclxuICAgICBoZWlnaHQ6IDI2MnB4O1xyXG4gICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgdG9wOiAyMDZweDsgICAgXHJcbiB9XHJcbiAudGl0dWxve1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjI2cHg7XHJcbiAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgcmlnaHQ6IDQxcHg7XHJcbiAgICAgdG9wOiAxNXB4O1xyXG4gXHJcbiAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgICBcclxuICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiB9XHJcbiAuZm9uZW1he1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwMXB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgbGVmdDogOTZweDtcclxuICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgdG9wOiA4NXB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgXHJcbiB9XHJcblxyXG4gLnZpZGVvRm9uZW1he1xyXG4gICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuIH1cclxuXHJcbiAubWVuc2FqZXtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNDJweDsgXHJcbiAgICBtYXJnaW4tdG9wOjQ1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gXHJcbiAuY29tYW5kbzF7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDA2cHg7ICBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgXHJcbiB9XHJcbiAuY29tYW5kbzJ7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDY3cHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgIFxyXG4gfVxyXG4gLmNvbWFuZG8ze1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDUyMHB4OyBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgICBcclxuIH1cclxuIC5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiAzOTJweDsgICAgIFxyXG4gfVxyXG4gLmJ0bkNvbWFuZG8xe1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiAzOTJweDsgIFxyXG4gfVxyXG4gLmJ0bkNvbWFuZG8ye1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiA0NTNweDtcclxuIH1cclxuIC5idG5Db21hbmRvM3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogNTIwcHg7XHJcbiB9XHJcblxyXG4gLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjYzcHg7XG4gIGhlaWdodDogMjYycHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHJpZ2h0OiAyM3B4O1xuICB0b3A6IDIwNnB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjI2cHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogNTBweDtcbiAgcmlnaHQ6IDQxcHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZm9uZW1hIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAxcHg7XG4gIGhlaWdodDogNzRweDtcbiAgbGVmdDogOTZweDtcbiAgcmlnaHQ6IDQxcHg7XG4gIHRvcDogODVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udmlkZW9Gb25lbWEge1xuICBtYXJnaW4tdG9wOiA2NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4ubWVuc2FqZSB7XG4gIHdpZHRoOiAzMDNweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tdG9wOiA0NTBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDM5MnB4O1xufVxuXG4uYnRuQ29tYW5kbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNDUzcHg7XG59XG5cbi5idG5Db21hbmRvMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MjBweDtcbn1cblxuLmJ0blBsYXkge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConsonantBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantBarComponent", function() { return ConsonantBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConsonantBarComponent = class ConsonantBarComponent {
    constructor() {
        this.barEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleAudio = false;
        this.visibleVideo = true;
    }
    ngOnInit() {
    }
    openPanel(event) {
        this.barEvent.emit(event.target.value);
        this.setVisible(event.target.value);
    }
    /*
    playVideo() {
  
    }
    */
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
], ConsonantBarComponent.prototype, "fonema", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConsonantBarComponent.prototype, "mensaje", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConsonantBarComponent.prototype, "imagen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConsonantBarComponent.prototype, "barEvent", void 0);
ConsonantBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonant-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonant-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonant-bar.component.scss */ "./src/app/components/phoneme-consonant-view/consonant-bar/consonant-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConsonantBarComponent);



/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtbmF2aWdhdGlvbi9jb25zb25hbnQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ConsonantNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantNavigationComponent", function() { return ConsonantNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConsonantNavigationComponent = class ConsonantNavigationComponent {
    constructor() { }
    ngOnInit() { }
};
ConsonantNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonant-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonant-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonant-navigation.component.scss */ "./src/app/components/phoneme-consonant-view/consonant-navigation/consonant-navigation.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConsonantNavigationComponent);



/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.audioFonema {\n  text-align: center;\n  margin-left: 226px;\n  margin-right: 235px;\n  margin-top: 55px;\n}\n\n.imagen {\n  width: 287px;\n  height: 287px;\n  border: 2px solid #C4C4C4;\n}\n\n.btnPlay {\n  width: 103px;\n  height: 103px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.btnComeBackTo {\n  width: 65px;\n  height: 65px;\n  margin-left: 720px;\n}\n\n.rowPalabra {\n  margin-left: 309px;\n  margin-right: 318px;\n}\n\n.palabra {\n  margin-left: auto;\n  margin-right: auto;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 90px;\n  text-align: center;\n  color: #109CF1;\n}\n\n.rowSilaba {\n  margin-top: 20px;\n  margin-left: 53px;\n  margin-right: 62px;\n}\n\n.silaba {\n  width: 87px;\n  height: 87px;\n  border-radius: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 52px;\n  text-transform: initial;\n  background: #A9B0F0;\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1waG9uZW1lLXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLWNvbnNvbmFudC12aWV3XFxjb25zb25hbnQtcGhvbmVtZS1wYW5lbFxcY29uc29uYW50LXBob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtcGhvbmVtZS1wYW5lbC9jb25zb25hbnQtcGhvbmVtZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtcGhvbmVtZS1wYW5lbC9jb25zb25hbnQtcGhvbmVtZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5hdWRpb0ZvbmVtYXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIyNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbn1cclxuLmltYWdlbntcclxuICAgIHdpZHRoOiAyODdweDtcclxuICAgIGhlaWdodDogMjg3cHg7ICBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEM0QzQ7ICBcclxufVxyXG5cclxuXHJcbi5idG5QbGF5e1xyXG4gICAgd2lkdGg6IDEwM3B4O1xyXG4gICAgaGVpZ2h0OiAxMDNweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG59XHJcblxyXG4uYnRuQ29tZUJhY2tUb3tcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcyMHB4O1xyXG59XHJcbi5yb3dQYWxhYnJhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMThweDtcclxufVxyXG4ucGFsYWJyYXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIGNvbG9yOiAjMTA5Q0YxOyAgXHJcbn1cclxuLnJvd1NpbGFiYXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjJweDtcclxufVxyXG4uc2lsYWJhe1xyXG4gICAgd2lkdGg6IDg3cHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjQTlCMEYwO1xyXG4gICAgY29sb3I6ICM1RjY1OUM7XHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYXVkaW9Gb25lbWEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMjZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMzVweDtcbiAgbWFyZ2luLXRvcDogNTVweDtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiAyODdweDtcbiAgaGVpZ2h0OiAyODdweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0M0QzRDNDtcbn1cblxuLmJ0blBsYXkge1xuICB3aWR0aDogMTAzcHg7XG4gIGhlaWdodDogMTAzcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xufVxuXG4uYnRuQ29tZUJhY2tUbyB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3MjBweDtcbn1cblxuLnJvd1BhbGFicmEge1xuICBtYXJnaW4tbGVmdDogMzA5cHg7XG4gIG1hcmdpbi1yaWdodDogMzE4cHg7XG59XG5cbi5wYWxhYnJhIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEwOUNGMTtcbn1cblxuLnJvd1NpbGFiYSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1M3B4O1xuICBtYXJnaW4tcmlnaHQ6IDYycHg7XG59XG5cbi5zaWxhYmEge1xuICB3aWR0aDogODdweDtcbiAgaGVpZ2h0OiA4N3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGJhY2tncm91bmQ6ICNBOUIwRjA7XG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ConsonantPhonemePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantPhonemePanelComponent", function() { return ConsonantPhonemePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ConsonantPhonemePanelComponent = class ConsonantPhonemePanelComponent {
    /*
    @Input() silaba1: string;
    @Input() silaba2: string;
    @Input() silaba3: string;
    @Input() silaba4: string;
    @Input() silaba5: string;
    */
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.record = new Audio();
    }
    ngOnInit() {
        /*
        this.getAudios(this.fonema);
        this.getSilabas();
        this.imagen = this.audios[0].imagen;
        this.palabra = this.audios[0].nombre;
        this.cantidadAudios = 0;
        */
    }
    comeBackTo() {
        this.navCtrl.navigateForward('/fonemas');
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(this.oneDataPhonemeConsonant);
    }
    /*
    playAudio(event: any) {
      if (this.cantidadAudios == this.audios.length){
        this.cantidadAudios = 0;
      }
      this.palabra=this.audios[this.cantidadAudios].nombre;
      this.imagen= this.audios[this.cantidadAudios].imagen;
      this.audio.src = this.audios[this.cantidadAudios].audio;
      this.audio.load();
      this.audio.play();
      console.log(event.target.value);
      console.log('Soy el audio');
      this.cantidadAudios ++;
      console.log(this.comando);
    }
    */
    playAudioS(index) {
        this.record.src = this.dataSPhonemeConsonant[index].audio;
        this.record.load();
        this.record.play();
        /*
        this.audio.src = this.silabas[event.target.value].audio;
        this.audio.load();
        this.audio.play();
        */
    }
    playRecord() {
        this.record.src = this.oneDataPhonemeConsonant.audio;
        this.record.load();
        this.record.play();
    }
};
ConsonantPhonemePanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ConsonantPhonemePanelComponent.prototype, "dataSPhonemeConsonant", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConsonantPhonemePanelComponent.prototype, "oneDataPhonemeConsonant", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConsonantPhonemePanelComponent.prototype, "comando", void 0);
ConsonantPhonemePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonant-phoneme-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonant-phoneme-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonant-phoneme-panel.component.scss */ "./src/app/components/phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ConsonantPhonemePanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.row {\n  margin-top: 100px;\n  margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1waG9uZW1lLXZpZGVvLXBhbmVsL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLWNvbnNvbmFudC12aWV3XFxjb25zb25hbnQtcGhvbmVtZS12aWRlby1wYW5lbFxcY29uc29uYW50LXBob25lbWUtdmlkZW8tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS1jb25zb25hbnQtdmlldy9jb25zb25hbnQtcGhvbmVtZS12aWRlby1wYW5lbC9jb25zb25hbnQtcGhvbmVtZS12aWRlby1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L2NvbnNvbmFudC1waG9uZW1lLXZpZGVvLXBhbmVsL2NvbnNvbmFudC1waG9uZW1lLXZpZGVvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogODBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ConsonantPhonemeVideoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantPhonemeVideoPanelComponent", function() { return ConsonantPhonemeVideoPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConsonantPhonemeVideoPanelComponent = class ConsonantPhonemeVideoPanelComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConsonantPhonemeVideoPanelComponent.prototype, "video", void 0);
ConsonantPhonemeVideoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonant-phoneme-video-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonant-phoneme-video-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonant-phoneme-video-panel.component.scss */ "./src/app/components/phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConsonantPhonemeVideoPanelComponent);



/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLWNvbnNvbmFudC12aWV3XFxwaG9uZW1lLWNvbnNvbmFudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtY29uc29uYW50LXZpZXcvcGhvbmVtZS1jb25zb25hbnQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLWNvbnNvbmFudC12aWV3L3Bob25lbWUtY29uc29uYW50LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLnBhbmVse1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIHdpZHRoOiA4MThweDtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbn1cclxuLmJhcntcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGhlaWdodDogNjIzcHg7ICBcclxufVxyXG4ubmF2aWdhdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7ICAgIFxyXG4gICAgfSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogMTE0MnB4O1xuICBoZWlnaHQ6IDYyNHB4O1xufVxuXG4ucGFuZWwge1xuICBsZWZ0OiAyMnB4O1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5iYXIge1xuICB3aWR0aDogMzAycHg7XG4gIGhlaWdodDogNjIzcHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PhonemeConsonantViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeConsonantViewComponent", function() { return PhonemeConsonantViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_video_selected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/video-selected */ "./src/app/models/video-selected.ts");
/* harmony import */ var _data_data_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/data.videos */ "./src/data/data.videos.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let PhonemeConsonantViewComponent = class PhonemeConsonantViewComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.indexData = 0;
        this.videoData = new _models_video_selected__WEBPACK_IMPORTED_MODULE_2__["VideoSelected"]();
        this.visiblePhoneme = true;
        this.visibleVideo = false;
    }
    ngOnInit() {
        this.getVideo(this.phoneme.consonante);
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
    comeBackTo() {
        this.navCtrl.navigateForward('/fonemas');
    }
    getVideo(value) {
        for (let i = 0; i < _data_data_videos__WEBPACK_IMPORTED_MODULE_3__["VIDEOS"].length; i++) {
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
    incIndexData() {
        if (this.phoneme.data.length - 1 == this.indexData) {
            this.indexData = 0;
        }
        else {
            this.indexData++;
        }
    }
    decIndexData() {
        if (this.indexData == 0) {
            this.indexData = this.phoneme.data.length - 1;
        }
        else {
            this.indexData--;
        }
    }
};
PhonemeConsonantViewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeConsonantViewComponent.prototype, "phoneme", void 0);
PhonemeConsonantViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-consonant-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-consonant-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-consonant-view.component.scss */ "./src/app/components/phoneme-consonant-view/phoneme-consonant-view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], PhonemeConsonantViewComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/bar/bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/phoneme-view/bar/bar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 302px;\n  height: 623px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 262px;\n  height: 262px;\n  left: 16px;\n  right: 23px;\n  top: 206px;\n  border-radius: 100px;\n}\n\n.titulo {\n  position: absolute;\n  width: 226px;\n  height: 74px;\n  left: 50px;\n  right: 41px;\n  top: 15px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.fonema {\n  position: absolute;\n  width: 301px;\n  height: 74px;\n  left: 96px;\n  right: 41px;\n  top: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 45px;\n  line-height: 67px;\n  color: #FFFFFF;\n}\n\n.videoFonema {\n  margin-top: 65px;\n  margin-right: 100px;\n}\n\n.mensaje {\n  width: 303px;\n  height: 42px;\n  margin-top: 450px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.comando1 {\n  position: absolute;\n  top: 406px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando2 {\n  position: absolute;\n  top: 467px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.comando3 {\n  position: absolute;\n  top: 520px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n}\n\n.ion-segment-button {\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 392px;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 453px;\n}\n\n.btnComando3 {\n  position: absolute;\n  width: 259px;\n  height: 48px;\n  left: 20px;\n  right: 23px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 520px;\n}\n\n.btnPlay {\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lLXZpZXdcXGJhclxcYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NMOztBRENDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDRUw7O0FEQUM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQ0NMOztBRENDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURHQztFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURHQztFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNESjs7QURJQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNETDs7QURHQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURFQztFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNDTDs7QURDQztFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0VMOztBREFDO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR0w7O0FEREM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNJTDs7QURGQztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0tMOztBREZDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS12aWV3L2Jhci9iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAzMDJweDtcclxuICAgICBoZWlnaHQ6IDYyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNGQ0QyNjA7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcclxuIH1cclxuIC5pbWFnZW57XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHdpZHRoOiAyNjJweDtcclxuICAgICBoZWlnaHQ6IDI2MnB4O1xyXG4gICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgdG9wOiAyMDZweDsgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiB9XHJcbiAudGl0dWxve1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjI2cHg7XHJcbiAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgcmlnaHQ6IDQxcHg7XHJcbiAgICAgdG9wOiAxNXB4O1xyXG4gXHJcbiAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgICBcclxuICAgICBjb2xvcjogI0ZGRkZGRjsgICAgXHJcbiB9XHJcbiAuZm9uZW1he1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwMXB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgbGVmdDogOTZweDtcclxuICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgdG9wOiA4NXB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgICAgXHJcbiB9XHJcblxyXG4gLnZpZGVvRm9uZW1he1xyXG4gICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuIH1cclxuXHJcbiAubWVuc2FqZXtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNDJweDsgXHJcbiAgICBtYXJnaW4tdG9wOjQ1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gXHJcbiAuY29tYW5kbzF7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDA2cHg7ICBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgXHJcbiB9XHJcbiAuY29tYW5kbzJ7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDY3cHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTsgICAgIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgICAgIFxyXG4gfVxyXG4gLmNvbWFuZG8ze1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDUyMHB4OyBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpOyAgICAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgICBcclxuIH1cclxuIC5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiAzOTJweDsgICAgIFxyXG4gfVxyXG4gLmJ0bkNvbWFuZG8xe1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiAzOTJweDsgIFxyXG4gfVxyXG4gLmJ0bkNvbWFuZG8ye1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMjU5cHg7XHJcbiAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICAgdG9wOiA0NTNweDtcclxuIH1cclxuIC5idG5Db21hbmRvM3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDI1OXB4O1xyXG4gICAgIGhlaWdodDogNDhweDtcclxuICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgIFxyXG4gICAgIHRvcDogNTIwcHg7XHJcbiB9XHJcblxyXG4gLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjYycHg7XG4gIGhlaWdodDogMjYycHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHJpZ2h0OiAyM3B4O1xuICB0b3A6IDIwNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDUwcHg7XG4gIHJpZ2h0OiA0MXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZvbmVtYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMXB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGxlZnQ6IDk2cHg7XG4gIHJpZ2h0OiA0MXB4O1xuICB0b3A6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnZpZGVvRm9uZW1hIHtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLm1lbnNhamUge1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLXRvcDogNDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY29tYW5kbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jb21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NjdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNvbWFuZG8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogMzkycHg7XG59XG5cbi5idG5Db21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1OXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiAzOTJweDtcbn1cblxuLmJ0bkNvbWFuZG8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjU5cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ1M3B4O1xufVxuXG4uYnRuQ29tYW5kbzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTlweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNTIwcHg7XG59XG5cbi5idG5QbGF5IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM3QTg0REQ7XG59Il19 */");

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


//import { VIDEOS } from '../../../../data/data.videos';
//import { Video } from '../../../interfaces/video';
let BarComponent = class BarComponent {
    constructor() {
        this.barEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleAudio = false;
        this.visibleVideo = true;
    }
    ngOnInit() {
    }
    openPanel(event) {
        this.barEvent.emit(event.target.value);
        this.setVisible(event.target.value);
    }
    /*
    playVideo() {
  
    }
    */
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
], BarComponent.prototype, "fonema", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BarComponent.prototype, "mensaje", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BarComponent.prototype, "imagen", void 0);
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

/***/ "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 1145px;\n  height: 57px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.btnBack {\n  width: 42px;\n  height: 42px;\n  margin-left: 30px;\n}\n\n.btnHome {\n  width: 42px;\n  height: 42px;\n  margin-left: 135px;\n}\n\n.btnForward {\n  width: 42px;\n  height: 42px;\n  margin-right: 32px;\n  margin-left: auto;\n}\n\n.backIcon {\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.homeIcon {\n  width: 42px;\n  height: 42px;\n  background: url('home.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n\n.forwardIcon {\n  width: 42px;\n  height: 42px;\n  background: url('forward.svg');\n  background-size: 42px 42px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1uYXYvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xccGhvbmVtZS1uYXZcXHBob25lbWUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLW5hdi9waG9uZW1lLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QUREQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1uYXYvcGhvbmVtZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExNDVweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyAgICBcclxufVxyXG5cclxuLmJ0bkJhY2t7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5idG5Ib21le1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM1cHg7XHJcbn1cclxuLmJ0bkZvcndhcmR7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9iYWNrLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmhvbWVJY29ue1xyXG5cclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmZvcndhcmRJY29ue1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZvcndhcmQuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTE0NXB4O1xuICBoZWlnaHQ6IDU3cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5idG5CYWNrIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5idG5Ib21lIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xufVxuXG4uYnRuRm9yd2FyZCB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5iYWNrSWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2JhY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQycHggNDJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaG9tZUljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MnB4IDQycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmZvcndhcmRJY29uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZm9yd2FyZC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDJweCA0MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.ts ***!
  \******************************************************************************/
/*! exports provided: PhonemeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeNavComponent", function() { return PhonemeNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PhonemeNavComponent = class PhonemeNavComponent {
    //@Output() navigationEvent = new EventEmitter();
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.forwardEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    goToHome(event) {
        this.navCtrl.navigateForward('/menu');
    }
    forward(event) {
        this.forwardEmit.emit();
    }
    back(event) {
        this.backEmit.emit();
    }
};
PhonemeNavComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeNavComponent.prototype, "forwardEmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeNavComponent.prototype, "backEmit", void 0);
PhonemeNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-nav.component.scss */ "./src/app/components/phoneme-view/phoneme-nav/phoneme-nav.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PhonemeNavComponent);



/***/ }),

/***/ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.audioFonema {\n  margin-left: 226px;\n  margin-right: 235px;\n  margin-top: 91px;\n}\n\n.imagen {\n  width: 357px;\n  height: 358px;\n  border: 2px solid #E5E5E5;\n  background-size: auto;\n}\n\n.btnPlay {\n  width: 103px;\n  height: 103px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.btnComeBackTo {\n  width: 65px;\n  height: 65px;\n  margin-left: 720px;\n}\n\n.starIcon {\n  width: 65px;\n  height: 65px;\n}\n\n.rowPalabra {\n  margin-left: 309px;\n  margin-right: 318px;\n}\n\n.palabra {\n  margin-left: 309px;\n  margin-right: 318px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 90px;\n  text-align: center;\n  color: #109CF1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvcGhvbmVtZS1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZS12aWV3XFxwaG9uZW1lLXBhbmVsXFxwaG9uZW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXBhbmVsL3Bob25lbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS12aWV3L3Bob25lbWUtcGFuZWwvcGhvbmVtZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5hdWRpb0ZvbmVtYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xyXG59XHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogMzU3cHg7XHJcbiAgICBoZWlnaHQ6IDM1OHB4OyAgIFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0U1RTVFNTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxufVxyXG4uYnRuUGxheXtcclxuICAgIHdpZHRoOiAxMDNweDtcclxuICAgIGhlaWdodDogMTAzcHg7ICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgIFxyXG4gICAgYmFja2dyb3VuZDogIzdBODRERDtcclxufVxyXG4uYnRuQ29tZUJhY2tUb3tcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcyMHB4O1xyXG59XHJcbi5zdGFySWNvbntcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4OyAgXHJcbn1cclxuLnJvd1BhbGFicmF7XHJcbiAgICBtYXJnaW4tbGVmdDogMzA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMxOHB4O1xyXG59XHJcbi5wYWxhYnJhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzEwOUNGMTsgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmF1ZGlvRm9uZW1hIHtcbiAgbWFyZ2luLWxlZnQ6IDIyNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xuICBtYXJnaW4tdG9wOiA5MXB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDM1N3B4O1xuICBoZWlnaHQ6IDM1OHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTVFNUU1O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5idG5QbGF5IHtcbiAgd2lkdGg6IDEwM3B4O1xuICBoZWlnaHQ6IDEwM3B4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn1cblxuLmJ0bkNvbWVCYWNrVG8ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW4tbGVmdDogNzIwcHg7XG59XG5cbi5zdGFySWNvbiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbi5yb3dQYWxhYnJhIHtcbiAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMxOHB4O1xufVxuXG4ucGFsYWJyYSB7XG4gIG1hcmdpbi1sZWZ0OiAzMDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMThweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEwOUNGMTtcbn0iXX0= */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PhonemePanelComponent = class PhonemePanelComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.audio = new Audio();
    }
    ngOnInit() {
        this.audio.src = this.phonemeOneData.audio;
        this.audio.load();
    }
    comeBackTo() {
        this.navCtrl.navigateForward('/fonemas');
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.audio.src = this.phonemeOneData.audio;
        this.audio.load();
        //document.getElementById('imagen').setAttribute('src', this.phonemeOneData.imagen);
    }
};
PhonemePanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemePanelComponent.prototype, "phonemeOneData", void 0);
PhonemePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneme-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-panel.component.scss */ "./src/app/components/phoneme-view/phoneme-panel/phoneme-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lLXZpZXcvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBob25lbWUtdmlld1xccGhvbmVtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUtdmlldy9waG9uZW1lLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS12aWV3L3Bob25lbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4ucGFuZWx7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDgxOHB4O1xyXG4gICAgaGVpZ2h0OiA2MjRweDtcclxufVxyXG4uYmFye1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgaGVpZ2h0OiA2MjNweDsgIFxyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDsgICAgXHJcbiAgICB9IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxMTQycHg7XG4gIGhlaWdodDogNjI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAzMDJweDtcbiAgaGVpZ2h0OiA2MjNweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */");

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
    //public comandoFonema: string;
    constructor() {
        this.indexData = 0;
        //@Input() valueFonemaView: string;
        this.videoData = new _models_video_selected__WEBPACK_IMPORTED_MODULE_3__["VideoSelected"]();
        this.visiblePhoneme = true;
        this.visibleVideo = false;
    }
    ngOnInit() {
        this.getVideo(this.phoneme.vocal);
    }
    selectPanel(value) {
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
    /*
    ejecutarAccion($event) {
      
    }
    */
    incIndexData() {
        if (this.phoneme.data.length - 1 == this.indexData) {
            this.indexData = 0;
        }
        else {
            this.indexData++;
        }
    }
    decIndexData() {
        if (this.indexData == 0) {
            this.indexData = this.phoneme.data.length - 1;
        }
        else {
            this.indexData--;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeViewComponent.prototype, "phoneme", void 0);
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
    ngOnInit() {
    }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/audio/fonemas/consonantes/data.consonantes */ "./src/data/audio/fonemas/consonantes/data.consonantes.ts");





let ConsonantPanelComponent = class ConsonantPanelComponent {
    //public value:string;
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    goToPhoneme(phonemeConsonantNameSelected) {
        let phonemeConsonantData = this.getPhonemeConsonant(phonemeConsonantNameSelected);
        this.route.navigate(['/consonantes'], { queryParams: { phoneme: JSON.stringify(phonemeConsonantData) } });
        //console.log(event.target.value);
        //this.value = event.target.value;
        //this.navCtrl.navigateForward(['/consonantes',this.value]);
    }
    getPhonemeConsonant(phonemeConsonanName) {
        phonemeConsonanName = phonemeConsonanName.toUpperCase();
        for (let i = 0; i < _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_4__["CONSONANTES"].length; i++) {
            if (_data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_4__["CONSONANTES"][i].consonante.toUpperCase() == phonemeConsonanName) {
                return _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_4__["CONSONANTES"][i];
            }
        }
    }
};
ConsonantPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ConsonantPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consonant-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consonant-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/consonant-panel/consonant-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consonant-panel.component.scss */ "./src/app/components/phoneme/consonant-panel/consonant-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.rowSilaba {\n  margin-top: 88px;\n  margin-left: 197px;\n  margin-right: 190px;\n  width: 431px;\n  height: 176px;\n}\n\n.silaba {\n  width: 176px;\n  height: 176px;\n  background: #FCD260;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 65px;\n  line-height: 97px;\n  /* identical to box height */\n  color: #FFFFFF;\n}\n\n.imagen {\n  width: 177px;\n  height: 177px;\n  border: 2px solid #FCD260;\n}\n\n.rowBtn {\n  width: 51px;\n  height: 51px;\n}\n\n.btnPlay {\n  width: 50px;\n  height: 50px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 100px;\n  background: #7A84DD;\n}\n\n.row {\n  margin-top: 4px;\n  margin-left: 50px;\n  margin-right: 50px;\n  width: 705px;\n  height: 77px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUtZ2FtZS1wYW5lbC9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvbmVtZVxccGhvbmVtZS1nYW1lLXBhbmVsXFxwaG9uZW1lLWdhbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLWdhbWUtcGFuZWwvcGhvbmVtZS1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFHQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL3Bob25lbWUtZ2FtZS1wYW5lbC9waG9uZW1lLWdhbWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgLy9sZWZ0OiAyMnB4O1xyXG4gICAgLy90b3A6IDQ3cHg7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgICAgXHJcbn1cclxuXHJcbi5yb3dTaWxhYmF7XHJcbiAgICBtYXJnaW4tdG9wOiA4OHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5N3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcclxuICAgIHdpZHRoOiA0MzFweDtcclxuICAgIGhlaWdodDogMTc2cHg7XHJcbn1cclxuLnNpbGFiYXtcclxuICAgIHdpZHRoOiAxNzZweDtcclxuICAgIGhlaWdodDogMTc2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7ICBcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogOTdweDtcclxuICAgIFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7ICAgIFxyXG59XHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbiAgICBoZWlnaHQ6IDE3N3B4OyBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGQ0QyNjA7XHJcbn1cclxuLnJvd0J0bntcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4OyAgICBcclxufVxyXG5cclxuLmJ0blBsYXl7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDsgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREOyAgICAgXHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwNXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA4MThweDtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJvd1NpbGFiYSB7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOTBweDtcbiAgd2lkdGg6IDQzMXB4O1xuICBoZWlnaHQ6IDE3NnB4O1xufVxuXG4uc2lsYWJhIHtcbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiAjRkNEMjYwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDk3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDE3N3B4O1xuICBoZWlnaHQ6IDE3N3B4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkNEMjYwO1xufVxuXG4ucm93QnRuIHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNTFweDtcbn1cblxuLmJ0blBsYXkge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgd2lkdGg6IDcwNXB4O1xuICBoZWlnaHQ6IDc3cHg7XG59Il19 */");

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
/* harmony import */ var _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/audio/fonemas/consonantes/data.consonantes */ "./src/data/audio/fonemas/consonantes/data.consonantes.ts");



let PhonemeGamePanelComponent = class PhonemeGamePanelComponent {
    constructor() {
        this.audio = new Audio();
        this.silabaA = [];
        this.silabaB = [];
        this.palabras = [];
        this.silabas = [];
        this.palabrasJuego = [];
    }
    ngOnInit() {
        this.getPalabras();
        this.getEjemplos();
        this.getSilabas();
    }
    playAudio(event) {
        this.audio.src = event.target.value;
        this.audio.load();
        this.audio.play();
        console.log(event.target.value);
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getPalabras() {
        const value = this.getRandomInt(0, _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"].length);
        this.palabras = _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"][value].data;
        this.silabas = _data_audio_fonemas_consonantes_data_consonantes__WEBPACK_IMPORTED_MODULE_2__["CONSONANTES"][value].dataS;
    }
    getEjemplos() {
        for (let i = 0; i < 3; i++) {
            this.palabrasJuego.push(this.palabras[this.getRandomInt(0, this.palabras.length)]);
        }
        this.palabra1 = this.palabrasJuego[0];
        this.palabra2 = this.palabrasJuego[1];
        this.palabra3 = this.palabrasJuego[2];
    }
    getSilabas() {
        this.silaba1 = this.palabrasJuego[0].silaba;
        this.silaba2 = this.palabrasJuego[1].silaba;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeGamePanelComponent.prototype, "silaba1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhonemeGamePanelComponent.prototype, "silaba2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeGamePanelComponent.prototype, "palabra1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeGamePanelComponent.prototype, "palabra2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhonemeGamePanelComponent.prototype, "palabra3", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1280px) {\n  .grid {\n    width: 1142px;\n    height: 624px;\n  }\n\n  .principal {\n    width: 1142px;\n    height: 624px;\n  }\n\n  .panel {\n    left: 22px;\n    width: 818px;\n    height: 624px;\n  }\n\n  .bar {\n    width: 302px;\n    height: 623px;\n  }\n\n  .navigation {\n    margin-top: 16px;\n    height: 57px;\n    width: 1145px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZW1lL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaG9uZW1lXFxwaG9uZW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lbWUvcGhvbmVtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGFBQUE7RUNDTjs7RURDRTtJQUNJLGFBQUE7SUFDQSxhQUFBO0VDRU47O0VEQUU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNHTjs7RURERTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDSU47O0VERkU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVtZS9waG9uZW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjEyODBweCl7XHJcbiAgICAuZ3JpZHtcclxuICAgICAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICB9XHJcbiAgICAucHJpbmNpcGFse1xyXG4gICAgICAgIHdpZHRoOiAxMTQycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIH1cclxuICAgIC5wYW5lbHtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiA4MThweDtcclxuICAgICAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgfVxyXG4gICAgLmJhcntcclxuICAgICAgICB3aWR0aDogMzAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjNweDsgICAgXHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4OyAgXHJcbiAgICAgICAgaGVpZ2h0OiA1N3B4OyBcclxuICAgICAgICB3aWR0aDogMTE0NXB4OyAgXHJcbiAgICB9ICAgXHJcblxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5ncmlkIHtcbiAgICB3aWR0aDogMTE0MnB4O1xuICAgIGhlaWdodDogNjI0cHg7XG4gIH1cblxuICAucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogMTE0MnB4O1xuICAgIGhlaWdodDogNjI0cHg7XG4gIH1cblxuICAucGFuZWwge1xuICAgIGxlZnQ6IDIycHg7XG4gICAgd2lkdGg6IDgxOHB4O1xuICAgIGhlaWdodDogNjI0cHg7XG4gIH1cblxuICAuYmFyIHtcbiAgICB3aWR0aDogMzAycHg7XG4gICAgaGVpZ2h0OiA2MjNweDtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICB3aWR0aDogMTE0NXB4O1xuICB9XG59Il19 */");

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
/* harmony import */ var _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/audio/fonemas/vocales/data.vocales */ "./src/data/audio/fonemas/vocales/data.vocales.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let VocalPanelComponent = class VocalPanelComponent {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    goToPhoneme(phonemeNameSelected) {
        let phonemeVocalData = this.getPhonemeVocal(phonemeNameSelected);
        this.route.navigate(['/fonema'], { queryParams: { phoneme: JSON.stringify(phonemeVocalData) } });
        //this.navCtrl.navigateForward(['/fonema', this.value]);
    }
    getPhonemeVocal(phonemeVocalName) {
        phonemeVocalName = phonemeVocalName.toUpperCase();
        for (let i = 0; i < _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_3__["VOCALES"].length; i++) {
            if (_data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_3__["VOCALES"][i].vocal.toUpperCase() == phonemeVocalName) {
                return _data_audio_fonemas_vocales_data_vocales__WEBPACK_IMPORTED_MODULE_3__["VOCALES"][i];
            }
        }
    }
};
VocalPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VocalPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vocal-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vocal-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phoneme/vocal-panel/vocal-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vocal-panel.component.scss */ "./src/app/components/phoneme/vocal-panel/vocal-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 590px;\n  height: 664px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.label {\n  width: 393px;\n  height: 22px;\n  margin-left: 85px;\n  margin-right: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n\n.grid {\n  margin-left: 99px;\n  margin-right: 98px;\n  text-align: center;\n}\n\n.input {\n  width: 393px;\n  height: 38px;\n  background: #ECEEFD;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 2px;\n}\n\n.btnGuardar {\n  width: 127px;\n  height: 41px;\n  margin-left: 266px;\n  background: #5F659C;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcmVnaXN0ZXIvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3NvclxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3IvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDU5MHB4O1xyXG4gICAgaGVpZ2h0OiA2NjRweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7ICAgXHJcbn1cclxuLnByaW5jaXBhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGFiZWx7XHJcbiAgICB3aWR0aDogMzkzcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODVweDtcclxuICAgIG1hcmdpbi1yaWdodDogODVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgXHJcbn1cclxuLmdyaWR7XHJcbiAgICBtYXJnaW4tbGVmdDogOTlweDtcclxuICAgIG1hcmdpbi1yaWdodDogOThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXR7XHJcbiAgICB3aWR0aDogMzkzcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7ICBcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgIFxyXG4gICAgLyogTm90ZTogYmFja2Ryb3AtZmlsdGVyIGhhcyBtaW5pbWFsIGJyb3dzZXIgc3VwcG9ydCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4OyAgICAgIFxyXG59XHJcbi5idG5HdWFyZGFye1xyXG4gICAgd2lkdGg6IDEyN3B4O1xyXG4gICAgaGVpZ2h0OiA0MXB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjY2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNUY2NTlDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgICBcclxufSIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogNTkwcHg7XG4gIGhlaWdodDogNjY0cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnByaW5jaXBhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwge1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XG4gIG1hcmdpbi1yaWdodDogODVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVGNjU5Qztcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogOTlweDtcbiAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAzOTNweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjRUNFRUZEO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgLyogTm90ZTogYmFja2Ryb3AtZmlsdGVyIGhhcyBtaW5pbWFsIGJyb3dzZXIgc3VwcG9ydCAqL1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5idG5HdWFyZGFyIHtcbiAgd2lkdGg6IDEyN3B4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNjZweDtcbiAgYmFja2dyb3VuZDogIzVGNjU5QztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let RegisterComponent = class RegisterComponent {
    constructor(studentService, userService, router) {
        this.studentService = studentService;
        this.userService = userService;
        this.router = router;
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z áéíóú]*')
            ])),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(120)
            ])),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z áéíóú]*')
            ])),
            encargadoLegal: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3),
                ])),
                nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z áéíóú]*')
                ]))
            })
        });
        this.validation_messages = {
            'nombre': [
                { type: 'required', message: 'Nombre es requerido' },
                { type: 'minlength', message: 'Nombre debe ser de al menos 3 caracteres' },
                { type: 'pattern', message: 'Su nombre debe contener solo letras' }
            ],
            'edad': [
                { type: 'required', message: 'Edad es requerida' },
                { type: 'min', message: 'Edad debe ser mayor de 0' },
                { type: 'max', message: 'Edad debe ser menor de 120' }
            ],
            'sexo': [
                { type: 'required', message: 'Sexo es requerido' },
                { type: 'pattern', message: 'Su sexo debe contener solo letras' }
            ],
            'encargado_direccion': [
                { type: 'required', message: 'Dirección es requerido' },
                { type: 'minlength', message: 'Dirección debe ser de al menos 3 caracteres' },
            ],
            'encargado_nombre': [
                { type: 'required', message: 'Nombre del encargado es requerido' },
                { type: 'minlength', message: 'Nombre del encargado debe ser de al menos 3 caracteres' },
                { type: 'pattern', message: 'El nombre del encargado debe contener solo letras' }
            ],
            'email': [
                { type: 'required', message: 'Email es requerido' },
                { type: 'pattern', message: 'El email debe contener el formato de un email' }
            ],
            'password': [
                { type: 'required', message: 'Contraseña es requerida' },
                { type: 'minlength', message: 'Contraseña debe ser de al menos 5 caracteres' },
            ]
        };
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]))
        });
        this.newStudent = new _models_student__WEBPACK_IMPORTED_MODULE_4__["Student"];
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
    }
    ngOnInit() {
    }
    register() {
        this.newStudent = this.studentForm.value;
        this.newUser = this.userForm.value;
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 345px;\n  height: 696px;\n  background: #7A84DD;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 66px;\n  right: 66px;\n  top: 120px;\n}\n\n.titulo {\n  position: absolute;\n  width: 303px;\n  height: 72px;\n  left: 21px;\n  right: 21px;\n  top: 346px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 41px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.btnBack {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 100% 100%;\n  background-position: center;\n  margin-top: 16px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 443px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 519px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2Z1bmN0aW9uLWJhci9DOlxcVXNlcnNcXGJlcm5hXFxEb2N1bWVudHNcXEdpdEh1YlxcQmxhcHBGb25lbWFzXFxibGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc29yXFxzdHVkZW50LWluZm9cXGZ1bmN0aW9uLWJhclxcZnVuY3Rpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vZnVuY3Rpb24tYmFyL2Z1bmN0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUVBLGNBQUE7QUNISjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2Z1bmN0aW9uLWJhci9mdW5jdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM0NXB4O1xyXG4gICAgaGVpZ2h0OiA2OTZweDtcclxuICAgIGJhY2tncm91bmQ6ICM3QTg0REQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcblxyXG4gLmltYWdlbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMTNweDtcclxuICAgIGhlaWdodDogMjEzcHg7XHJcbiAgICBsZWZ0OiA2NnB4O1xyXG4gICAgcmlnaHQ6IDY2cHg7XHJcbiAgICB0b3A6IDEyMHB4OyAgICBcclxufVxyXG4udGl0dWxve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgdG9wOiAzNDZweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYnRuQmFja3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3N0dWRlbnRzL2JhY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5idG5Db21hbmRvMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDQ0M3B4OyAgXHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG59XHJcbi5idG5Db21hbmRvMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICAgXHJcbiAgICB0b3A6IDUxOXB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgICBcclxufSIsIi5wcmluY2lwYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNDVweDtcbiAgaGVpZ2h0OiA2OTZweDtcbiAgYmFja2dyb3VuZDogIzdBODRERDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxM3B4O1xuICBoZWlnaHQ6IDIxM3B4O1xuICBsZWZ0OiA2NnB4O1xuICByaWdodDogNjZweDtcbiAgdG9wOiAxMjBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICB0b3A6IDM0NnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MXB4O1xuICBsaW5lLWhlaWdodDogNjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJ0bkJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc3R1ZGVudHMvYmFjay5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5idG5Db21hbmRvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA0NDNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uYnRuQ29tYW5kbzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDNweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBsZWZ0OiAyMXB4O1xuICByaWdodDogMjFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICM1RjY1OUM7XG4gIHRvcDogNTE5cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzVGNjU5Qztcbn0iXX0= */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let FunctionBarComponent = class FunctionBarComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.functionBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openPanel(event) {
        console.log(event.target.value);
        this.functionBarEvent.emit(event.target.value);
    }
    goToHome() {
        this.navCtrl.navigateForward('/menu');
    }
    updateStudent() {
        if (true) {
            this.updateStudentEvent.emit();
        }
    }
    deleteStudent() {
        if (true) {
            this.deleteStudentEvent.emit();
        }
    }
};
FunctionBarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FunctionBarComponent.prototype, "updateStudentEvent", void 0);
FunctionBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-function-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./function-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professor/student-info/function-bar/function-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./function-bar.component.scss */ "./src/app/components/professor/student-info/function-bar/function-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], FunctionBarComponent);



/***/ }),

/***/ "./src/app/components/professor/student-info/info-panel/info-panel.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/professor/student-info/info-panel/info-panel.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 705px;\n  height: 593px;\n}\n\n.titulo {\n  margin-left: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 37px;\n  /* identical to box height */\n  text-align: center;\n  color: #5F659C;\n}\n\n.info {\n  width: 705px;\n  height: 293px;\n  background: #ffffff;\n  border-radius: 20px;\n  margin-top: 56px;\n}\n\n.grid {\n  width: 317px;\n  height: 210px;\n  margin-top: 20px;\n}\n\n.infoFamilia {\n  width: 337px;\n  height: 262px;\n  margin-top: 38px;\n  background: #ffffff;\n  border-radius: 20px;\n}\n\n.infoAlimentos {\n  width: 337px;\n  height: 262px;\n  margin-top: 38px;\n  left: 11px;\n  background: #ffffff;\n  border-radius: 20px;\n}\n\n.list {\n  height: 210px;\n  width: 330px;\n  overflow-y: scroll;\n}\n\n.list::-webkit-scrollbar {\n  display: none;\n}\n\n.input {\n  background: #ECEEFD;\n  height: 29px;\n}\n\n.label {\n  width: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 22px;\n  color: #5F659C;\n}\n\n.inputInfoPersonal {\n  width: 225px;\n  height: 29px;\n  background: #ECEEFD;\n}\n\n.item {\n  width: 317px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudC1pbmZvL2luZm8tcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2Zlc3Nvclxcc3R1ZGVudC1pbmZvXFxpbmZvLXBhbmVsXFxpbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50LWluZm8vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA3MDVweDtcclxuICAgIGhlaWdodDogNTkzcHg7ICAgICBcclxufVxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUY2NTlDICAgIFxyXG59XHJcbi5pbmZve1xyXG4gICAgd2lkdGg6IDcwNXB4O1xyXG4gICAgaGVpZ2h0OiAyOTNweDsgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICBcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcblxyXG59XHJcbi5ncmlke1xyXG4gICAgd2lkdGg6IDMxN3B4O1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmluZm9GYW1pbGlhe1xyXG4gICAgd2lkdGg6IDMzN3B4O1xyXG4gICAgaGVpZ2h0OiAyNjJweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4uaW5mb0FsaW1lbnRvc3tcclxuICAgIHdpZHRoOiAzMzdweDtcclxuICAgIGhlaWdodDogMjYycHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgIFxyXG59XHJcbi5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgd2lkdGg6IDkwcHg7IFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gICAgY29sb3I6ICM1RjY1OUM7XHJcbn1cclxuLmlucHV0SW5mb1BlcnNvbmFse1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VDRUVGRDsgICAgXHJcbn1cclxuLml0ZW17XHJcbiAgICB3aWR0aDogMzE3cHg7XHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDcwNXB4O1xuICBoZWlnaHQ6IDU5M3B4O1xufVxuXG4udGl0dWxvIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiA3MDVweDtcbiAgaGVpZ2h0OiAyOTNweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMzE3cHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbmZvRmFtaWxpYSB7XG4gIHdpZHRoOiAzMzdweDtcbiAgaGVpZ2h0OiAyNjJweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmluZm9BbGltZW50b3Mge1xuICB3aWR0aDogMzM3cHg7XG4gIGhlaWdodDogMjYycHg7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIGxlZnQ6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5saXN0IHtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNFQ0VFRkQ7XG4gIGhlaWdodDogMjlweDtcbn1cblxuLmxhYmVsIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5wdXRJbmZvUGVyc29uYWwge1xuICB3aWR0aDogMjI1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgYmFja2dyb3VuZDogI0VDRUVGRDtcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogMzE3cHg7XG59Il19 */");

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
                console.log(user);
            })
                .catch(err => {
                console.log(err);
            });
        })
            .catch(err => {
            console.log(err);
        });
    }
    prueba() {
        console.log(this.student);
    }
    changeSelected(alimento) {
        alimento.seleccionado = ((alimento.seleccionado == true) ? false : true);
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(this.student, this.user);
        if (this.boolEdit) {
            this.studentService.putStudent(this.student)
                .then(message => {
                console.log(message);
                this.userService.putUser(this.user)
                    .then(message => {
                    console.log(message);
                    window.open("/docentes", "_self");
                })
                    .catch(err => {
                    console.log(err);
                });
            })
                .catch(err => {
                console.log(err);
            });
        }
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], InfoPanelComponent.prototype, "boolEdit", void 0);
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
        this.boolEdit = false;
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
    updateStudent() {
        this.boolEdit = true;
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  position: absolute;\n  width: 345px;\n  height: 696px;\n  background: #7A84DD;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.imagen {\n  position: absolute;\n  width: 213px;\n  height: 213px;\n  left: 66px;\n  right: 66px;\n  top: 120px;\n}\n\n.titulo {\n  position: absolute;\n  width: 303px;\n  height: 72px;\n  left: 21px;\n  right: 21px;\n  top: 346px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 41px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.btnBack {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  background: url('back.svg');\n  background-size: 100% 100%;\n  background-position: center;\n  margin-top: 16px;\n}\n\n.btnComando1 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 443px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n\n.btnComando2 {\n  position: absolute;\n  width: 303px;\n  height: 56px;\n  left: 21px;\n  right: 21px;\n  background: rgba(255, 230, 190, 0.94);\n  border-radius: 15px;\n  color: #5F659C;\n  top: 519px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  /* identical to box height */\n  color: #5F659C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzb3Ivc3R1ZGVudHMtYmFyL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzb3JcXHN0dWRlbnRzLWJhclxcc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50cy1iYXIvc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUM7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBRUEsY0FBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFFQSxjQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Nvci9zdHVkZW50cy1iYXIvc3R1ZGVudHMtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNDVweDtcclxuICAgIGhlaWdodDogNjk2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG5cclxuIC5pbWFnZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBoZWlnaHQ6IDIxM3B4O1xyXG4gICAgbGVmdDogNjZweDtcclxuICAgIHJpZ2h0OiA2NnB4O1xyXG4gICAgdG9wOiAxMjBweDsgICAgXHJcbn1cclxuLnRpdHVsb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGxlZnQ6IDIxcHg7XHJcbiAgICByaWdodDogMjFweDtcclxuICAgIHRvcDogMzQ2cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnRuQmFja3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3N0dWRlbnRzL2JhY2suc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLmJ0bkNvbWFuZG8xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogNDQzcHg7ICBcclxuXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICAgXHJcbn1cclxuLmJ0bkNvbWFuZG8ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzMCwgMTkwLCAwLjk0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgICBcclxuICAgIHRvcDogNTE5cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVGNjU5QzsgICAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM0NXB4O1xuICBoZWlnaHQ6IDY5NnB4O1xuICBiYWNrZ3JvdW5kOiAjN0E4NEREO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjEzcHg7XG4gIGhlaWdodDogMjEzcHg7XG4gIGxlZnQ6IDY2cHg7XG4gIHJpZ2h0OiA2NnB4O1xuICB0b3A6IDEyMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNzJweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIHRvcDogMzQ2cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQxcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuQmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zdHVkZW50cy9iYWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmJ0bkNvbWFuZG8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbGVmdDogMjFweDtcbiAgcmlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzAsIDE5MCwgMC45NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjNUY2NTlDO1xuICB0b3A6IDQ0M3B4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5idG5Db21hbmRvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwM3B4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxlZnQ6IDIxcHg7XG4gIHJpZ2h0OiAyMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMwLCAxOTAsIDAuOTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzVGNjU5QztcbiAgdG9wOiA1MTlweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjNUY2NTlDO1xufSJdfQ== */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let StudentsBarComponent = class StudentsBarComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.studentsBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openPanel(event) {
        console.log(event.target.value);
        this.studentsBarEvent.emit(event.target.value);
    }
    goToHome() {
        this.navCtrl.navigateForward('/menu');
    }
};
StudentsBarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], StudentsBarComponent);



/***/ }),

/***/ "./src/app/components/restore/restore.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/restore/restore.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 590px;\n  height: 300px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  margin-left: 300px;\n  margin-right: 300px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.grid {\n  margin-left: 99px;\n  margin-right: 98px;\n  text-align: center;\n}\n\n.rowMensaje {\n  margin-top: 35px;\n}\n\n.mensaje {\n  width: 393px;\n  height: 22px;\n  margin-left: 0px;\n  margin-right: 0px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n\n.label {\n  width: 393px;\n  height: 22px;\n  margin-left: 85px;\n  margin-right: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n\n.input {\n  width: 393px;\n  height: 38px;\n  background: #ECEEFD;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 2px;\n}\n\n.btnGuardar {\n  width: 127px;\n  height: 41px;\n  margin-left: 266px;\n  background: #5F659C;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0b3JlL0M6XFxVc2Vyc1xcYmVybmFcXERvY3VtZW50c1xcR2l0SHViXFxCbGFwcEZvbmVtYXNcXGJsYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXN0b3JlXFxyZXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3RvcmUvcmVzdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdG9yZS9yZXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA1OTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7ICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICBcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgICBcclxufVxyXG4ucHJpbmNpcGFsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZ3JpZHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5OXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93TWVuc2FqZXtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLm1lbnNhamV7XHJcbiAgICB3aWR0aDogMzkzcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgY29sb3I6ICM1RjY1OUM7ICAgIFxyXG59XHJcbi5sYWJlbHtcclxuICAgIHdpZHRoOiAzOTNweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDM5M3B4O1xyXG4gICAgaGVpZ2h0OiAzOHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRUZEO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7ICBcclxuICAgIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgICAgICBcclxufVxyXG5cclxuLmJ0bkd1YXJkYXJ7XHJcbiAgICB3aWR0aDogMTI3cHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyNjZweDtcclxuICAgIGJhY2tncm91bmQ6ICM1RjY1OUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA1OTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wcmluY2lwYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogOTlweDtcbiAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3dNZW5zYWplIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLm1lbnNhamUge1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1RjY1OUM7XG59XG5cbi5sYWJlbCB7XG4gIHdpZHRoOiAzOTNweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogODVweDtcbiAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZDogI0VDRUVGRDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuR3VhcmRhciB7XG4gIHdpZHRoOiAxMjdweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBtYXJnaW4tbGVmdDogMjY2cHg7XG4gIGJhY2tncm91bmQ6ICM1RjY1OUM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/restore/restore.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/restore/restore.component.ts ***!
  \*********************************************************/
/*! exports provided: RestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreComponent", function() { return RestoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let RestoreComponent = class RestoreComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    sendLinkReset() {
        this.authService.resetPassword(this.email).then(() => {
            console.log('enviado');
        }).catch(() => {
            console.log('error');
        });
    }
};
RestoreComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RestoreComponent.prototype, "comando", void 0);
RestoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restore',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restore/restore.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restore.component.scss */ "./src/app/components/restore/restore.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], RestoreComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_categorias_data_categorias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/categorias/data.categorias */ "./src/data/categorias/data.categorias.ts");





let CategoriesPanelComponent = class CategoriesPanelComponent {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    goToCategories(value) {
        let categoryData = this.getCategory(value);
        this.router.navigate(['/categoria'], { queryParams: { category: JSON.stringify(categoryData) } });
        //this.navCtrl.navigateForward('/categoria', true, );
    }
    getCategory(categoryName) {
        categoryName = categoryName.toUpperCase();
        for (let i = 0; i < _data_categorias_data_categorias__WEBPACK_IMPORTED_MODULE_4__["CATEGORIAS"].length; i++) {
            if (_data_categorias_data_categorias__WEBPACK_IMPORTED_MODULE_4__["CATEGORIAS"][i].nombre.toUpperCase() == categoryName) {
                return _data_categorias_data_categorias__WEBPACK_IMPORTED_MODULE_4__["CATEGORIAS"][i];
            }
        }
    }
};
CategoriesPanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CategoriesPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/categories-panel/categories-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-panel.component.scss */ "./src/app/components/semantics/categories-panel/categories-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 818px;\n  height: 624px;\n  background: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.grid {\n  margin-top: 57px;\n  left: 56px;\n}\n\n.sujeto {\n  width: 230px;\n  height: 230px;\n  margin-left: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  text-align: center;\n  background: url('black.svg');\n  background-size: auto;\n}\n\n.verbo {\n  width: 161px;\n  height: 161px;\n  margin-top: 34px;\n  margin-left: 42px;\n  margin-right: 43px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background: url('red.svg');\n  background-size: auto;\n}\n\n.predicado {\n  width: 230px;\n  height: 230px;\n  margin-top: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  text-align: center;\n  background: url('green.svg');\n  background-size: auto;\n}\n\n.element {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  background: url('element.svg');\n  background-size: auto;\n}\n\n.options {\n  margin-top: 32px;\n}\n\n.palabras {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.pSujeto {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #3C3C3C;\n}\n\n.pVerbo {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #FF6969;\n}\n\n.pPredicado {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 52px;\n  /* identical to box height */\n  text-align: center;\n  color: #8ACF60;\n}\n\n.semantica {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.imagen {\n  width: 176px;\n  height: 176px;\n}\n\n.example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  width: 161px;\n  height: 161px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 100px;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 100px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbWFudGljc1xcc2VtYW50aWNzLWdhbWUtcGFuZWxcXHNlbWFudGljcy1nYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9zZW1hbnRpY3MtZ2FtZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNLSjs7QURGQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNJSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrREFBQTtFQUFBLHVEQUFBO0VBQ0EsK0dBQUE7QUNHSjs7QURFRTtFQUNFLHFIQUFBO0FDQ0o7O0FESUU7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUhBQUE7QUNESjs7QURNRTtFQUNFLHNFQUFBO0VBQUEsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9zZW1hbnRpY3MtZ2FtZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogODE4cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNTdweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbn1cclxuLnN1amV0b3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3NlbWFudGljcy9zZW1hbnRpY3MtZ2FtZS1wYW5lbC9ibGFjay5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxufVxyXG4udmVyYm97XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0M3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc2VtYW50aWNzL3NlbWFudGljcy1nYW1lLXBhbmVsL3JlZC5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgICAgXHJcbn1cclxuLnByZWRpY2Fkb3tcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc2VtYW50aWNzL3NlbWFudGljcy1nYW1lLXBhbmVsL2dyZWVuLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcclxufVxyXG4uZWxlbWVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAvL3dpZHRoOiAxNzZweDtcclxuICAgIC8vaGVpZ2h0OiAxNzZweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZWxlbWVudC5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgICAgXHJcbn1cclxuLm9wdGlvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5wYWxhYnJhc3tcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4OyBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjM0MzQzNDOyAgICBcclxufVxyXG5cclxuLnBTdWpldG97XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTJweDsgXHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzNDM0MzQzsgICAgXHJcbn1cclxuLnBWZXJib3tcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4OyBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkY2OTY5OyAgICBcclxufVxyXG4ucFByZWRpY2Fkb3tcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4OyBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjOEFDRjYwOyAgICBcclxufVxyXG4uc2VtYW50aWNhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDE3NnB4O1xyXG4gICAgaGVpZ2h0OiAxNzZweDtcclxuICAgIFxyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3g6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiIsIi5wcmluY2lwYWwge1xuICB3aWR0aDogODE4cHg7XG4gIGhlaWdodDogNjI0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTdweDtcbiAgbGVmdDogNTZweDtcbn1cblxuLnN1amV0byB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvYmxhY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi52ZXJibyB7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAxNjFweDtcbiAgbWFyZ2luLXRvcDogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gIG1hcmdpbi1yaWdodDogNDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvcmVkLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuXG4ucHJlZGljYWRvIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZ3JlZW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5cbi5lbGVtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9zZW1hbnRpY3Mvc2VtYW50aWNzLWdhbWUtcGFuZWwvZWxlbWVudC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbn1cblxuLm9wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucGFsYWJyYXMge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjM0MzQzNDO1xufVxuXG4ucFN1amV0byB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzQzNDM0M7XG59XG5cbi5wVmVyYm8ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkY2OTY5O1xufVxuXG4ucFByZWRpY2FkbyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4QUNGNjA7XG59XG5cbi5zZW1hbnRpY2Ege1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMTc2cHg7XG4gIGhlaWdodDogMTc2cHg7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAxNjFweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SemanticsGamePanelComponent = class SemanticsGamePanelComponent {
    constructor(alertController) {
        this.alertController = alertController;
        this.audio = new Audio();
        this.subcategoria = [];
        this.sujeto = [];
        this.verbo = [];
        this.predicado = [];
        this.imagenes = [];
        this.sonidos = [];
    }
    ngOnInit() {
        this.imagenes = [];
        this.getImagenes();
    }
    aciertoJuego() {
    }
    getImagenes() {
        console.log(this.subcategoryOneData);
        this.imagenes.push(this.subcategoryOneData.imagenSujeto);
        this.imagenes.push(this.subcategoryOneData.imagenVerbo);
        this.imagenes.push(this.subcategoryOneData.imagenPredicado);
        this.audio.src = this.subcategoryOneData.audio;
        this.audio.load();
        this.shuffleMethod();
    }
    shuffleMethod() {
        const length = this.imagenes == null ? 0 : this.imagenes.length;
        if (!length) {
            this.imagenes = [];
        }
        let index = -1;
        const lastIndex = length - 1;
        const result = [...this.imagenes];
        while (++index < length) {
            const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
            const value = result[rand];
            result[rand] = result[index];
            result[index] = value;
        }
        this.imagenes = result;
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.revision();
        this.imagenes = [];
        this.getImagenes();
        // console.log(this.imagenes[0], this.imagenes[1], this.imagenes[2]);
    }
    revision() {
        if (this.imagenes.length === 0) {
            this.sujeto = [];
            this.verbo = [];
            this.predicado = [];
            this.getImagenes();
        }
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.audio.src = 'assets/audio/notificaciones/error.mp3';
            this.audio.load();
            this.audio.play();
            this.errorAlert();
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.audio.src = 'assets/audio/notificaciones/fantastic.mp3';
            this.audio.load();
            this.audio.play();
            this.presentAlert();
        }
    }
    evenPredicate(item) {
        return item.data % 2 === 0;
    }
    oddPredicate(item) {
        return item.data % 2 === 1;
    }
    noReturnPredicate() {
        return false;
    }
    validarSujeto(item) {
        return item.data.substring(33, 39) === 'sujeto';
    }
    validarVerbo(item) {
        return item.data.substring(33, 38) === 'verbo';
    }
    validarPredicado(item) {
        return item.data.substring(22, 32) === 'categorias';
    }
    playSound() { }
    ;
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'fantastic',
                header: '',
                subHeader: '',
                message: '',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    errorAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'try',
                header: '         ',
                subHeader: '        ',
                message: '          ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
SemanticsGamePanelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SemanticsGamePanelComponent.prototype, "subcategoryOneData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SemanticsGamePanelComponent.prototype, "nombreSubcategoria", void 0);
SemanticsGamePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantics-game-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantics-game-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantics-game-panel.component.scss */ "./src/app/components/semantics/semantics-game-panel/semantics-game-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 1142px;\n  height: 624px;\n}\n\n.panel {\n  left: 22px;\n  width: 818px;\n  height: 624px;\n}\n\n.bar {\n  width: 302px;\n  height: 623px;\n}\n\n.navigation {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW1hbnRpY3MvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbWFudGljc1xcc2VtYW50aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbWFudGljcy9zZW1hbnRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREVJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ1I7O0FEQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VtYW50aWNzL3NlbWFudGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnByaW5jaXBhbHtcclxuICAgICAgICB3aWR0aDogMTE0MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICB9XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgbGVmdDogMjJweDtcclxuICAgICAgICB3aWR0aDogODE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MjRweDtcclxuICAgIH1cclxuICAgIC5iYXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjIzcHg7ICAgIFxyXG4gICAgfSBcclxuICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7ICAgIFxyXG4gICAgICAgIH0gICBcclxuXHJcblxyXG4iLCIucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDExNDJweDtcbiAgaGVpZ2h0OiA2MjRweDtcbn1cblxuLnBhbmVsIHtcbiAgbGVmdDogMjJweDtcbiAgd2lkdGg6IDgxOHB4O1xuICBoZWlnaHQ6IDYyNHB4O1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDMwMnB4O1xuICBoZWlnaHQ6IDYyM3B4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59Il19 */");

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
/* harmony import */ var _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/categorias/data.subcategorias */ "./src/data/categorias/data.subcategorias.ts");



let SemanticsComponent = class SemanticsComponent {
    constructor() {
        this.visibleCategories = true;
        this.visibleGame = false;
        this.indexData = 0;
    }
    ngOnInit() {
    }
    selectPanel(value) {
        this.getSubcategoria();
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
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getSubcategoria() {
        this.subcategory = _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"][this.getRandomInt(0, _data_categorias_data_subcategorias__WEBPACK_IMPORTED_MODULE_2__["SUBCATEGORIAS"].length)];
    }
    incIndexData() {
        if (this.subcategory.data.length - 1 == this.indexData) {
            this.indexData = 0;
        }
        else {
            this.indexData++;
        }
    }
    decIndexData() {
        if (this.indexData == 0) {
            this.indexData = this.subcategory.data.length - 1;
        }
        else {
            this.indexData--;
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

/***/ "./src/app/components/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  width: 590px;\n  height: 400px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  margin-left: 300px;\n  margin-right: 300px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  overflow-y: scroll;\n}\n\n.principal::-webkit-scrollbar {\n  display: none;\n}\n\n.grid {\n  margin-left: 99px;\n  margin-right: 98px;\n  text-align: center;\n}\n\n.label {\n  width: 393px;\n  height: 22px;\n  margin-left: 85px;\n  margin-right: 85px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  color: #5F659C;\n}\n\n.input {\n  width: 393px;\n  height: 38px;\n  background: #ECEEFD;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 2px;\n}\n\n.btnGuardar {\n  width: 127px;\n  height: 41px;\n  margin-left: 266px;\n  background: #5F659C;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvQzpcXFVzZXJzXFxiZXJuYVxcRG9jdW1lbnRzXFxHaXRIdWJcXEJsYXBwRm9uZW1hc1xcYmxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDU5MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgIFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgIFxyXG59XHJcbi5wcmluY2lwYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ncmlke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDk5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDk4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICAgIHdpZHRoOiAzOTNweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIGNvbG9yOiAjNUY2NTlDOyAgICBcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDM5M3B4O1xyXG4gICAgaGVpZ2h0OiAzOHB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRUZEO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7ICBcclxuICAgIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgICAgICBcclxufVxyXG5cclxuLmJ0bkd1YXJkYXJ7XHJcbiAgICB3aWR0aDogMTI3cHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyNjZweDtcclxuICAgIGJhY2tncm91bmQ6ICM1RjY1OUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgIFxyXG59IiwiLnByaW5jaXBhbCB7XG4gIHdpZHRoOiA1OTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wcmluY2lwYWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogOTlweDtcbiAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbCB7XG4gIHdpZHRoOiAzOTNweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogODVweDtcbiAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUY2NTlDO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZDogI0VDRUVGRDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuR3VhcmRhciB7XG4gIHdpZHRoOiAxMjdweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBtYXJnaW4tbGVmdDogMjY2cHg7XG4gIGJhY2tncm91bmQ6ICM1RjY1OUM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    ngOnInit() { }
    //Vincular un Alert para la confirmacion del Registro
    registrar() {
        this.authService.register(this.nombre, this.institucion, this.email, this.password).then(auth => {
            this.route.navigate(['/inicio']);
            console.log(auth);
        }).catch(err => console.log(err));
        this.authService.logout();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SignupComponent.prototype, "comando", void 0);
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/signup/signup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/models/student.ts":
/*!***********************************!*\
  !*** ./src/app/models/student.ts ***!
  \***********************************/
/*! exports provided: MiembrosFamilia, Alimentos, Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiembrosFamilia", function() { return MiembrosFamilia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alimentos", function() { return Alimentos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EncargadoLegal {
    constructor(nombre = "", profesion = "", telefono = "", direccion = "") {
        this.nombre = nombre;
        this.profesion = profesion;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
class MiembrosFamilia {
    constructor(nombre = "", relacion = "") {
        this.nombre = nombre;
        this.relacion = relacion;
    }
}
class Alimentos {
    constructor(alimento = "", seleccionado = false) {
        this.alimento = alimento;
        this.seleccionado = seleccionado;
    }
}
class Student {
    constructor(_id = "", nombre = "", cedula = "", sexo = "", edad = 0, encargadoLegal = new EncargadoLegal, familia = [], alimentacion = []) {
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
    constructor(_id = "", idUsuario = "", email = "", password = "", tipo = "") {
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

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");





let AuthService = class AuthService {
    constructor(AFauth, router, db) {
        this.AFauth = AFauth;
        this.router = router;
        this.db = db;
    }
    // Ingreso a la aplicación
    login(email, password) {
        return new Promise((resolve, rejected) => {
            this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
                localStorage.setItem('token', user.user.uid);
                console.log(localStorage.getItem('token'));
                resolve(user);
            }).catch(err => rejected(err));
        });
    }
    logout() {
        this.AFauth.signOut().then(auth => {
            this.router.navigate(['/inicio']);
        });
    }
    resetPassword(email) {
        return this.AFauth.sendPasswordResetEmail(email);
    }
    register(nombre, institucion, email, password) {
        return new Promise((resolve, rejected) => {
            this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
                const uid = res.user.uid;
                this.db.collection('users').doc(uid).set({
                    nombre: nombre,
                    institucion: institucion,
                    uid: uid
                });
                resolve(res);
            }).catch(err => rejected(err));
        });
    }
    getUser() {
        const uid = localStorage.getItem('token');
        const user = this.db.collection('users', ref => ref.where('uid', '==', this.AFauth.currentUser)).get();
        /*?var museums = this.db.collectionGroup('landmarks').where('type', '==', 'museum');
  museums.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
          console.log(doc.id, ' => ', doc.data());
      });
  });*/
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], AuthService);



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

/***/ "./src/data/audio/fonemas/consonantes/data.consonantes.ts":
/*!****************************************************************!*\
  !*** ./src/data/audio/fonemas/consonantes/data.consonantes.ts ***!
  \****************************************************************/
/*! exports provided: CONSONANTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSONANTES", function() { return CONSONANTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const CONSONANTES = [
    // Consonante B
    {
        consonante: 'b',
        data: [
            {
                nombre: 'Ba-na-no',
                silaba: 'Ba',
                audio: 'assets/audio/fonemas/consonantes/b/Banano.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Banano.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ba-su-ra',
                silaba: 'Ba',
                audio: 'assets/audio/fonemas/consonantes/b/Basura.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Basura.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bi-ci-cle-ta',
                silaba: 'Bi',
                audio: 'assets/audio/fonemas/consonantes/b/Bicicleta.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Bicicleta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bom-be-ro',
                silaba: 'Bo',
                audio: 'assets/audio/fonemas/consonantes/b/Bombero.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Bombero.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bo-rra-dor',
                silaba: 'Bo',
                audio: 'assets/audio/fonemas/consonantes/b/Borrador.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Borrador.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bo-tón',
                silaba: 'Bo',
                audio: 'assets/audio/fonemas/consonantes/b/Botón.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Botón.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ba',
                audio: 'assets/audio/fonemas/silabas/b/Ba.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Be',
                audio: 'assets/audio/fonemas/silabas/b/Be.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bi',
                audio: 'assets/audio/fonemas/silabas/b/Bi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bo',
                audio: 'assets/audio/fonemas/silabas/b/Bo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bu',
                audio: 'assets/audio/fonemas/silabas/b/Bu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ],
    },
    //C-K-Q
    {
        consonante: 'ckq',
        data: [
            {
                nombre: 'Ca-mi-sa',
                silaba: 'Ca',
                audio: 'assets/audio/fonemas/consonantes/ckq/Camisa.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Camisa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ca-ra-col',
                silaba: 'Ca',
                audio: 'assets/audio/fonemas/consonantes/ckq/Caracol.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Caracol.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Co-ne-jo',
                silaba: 'Co',
                audio: 'assets/audio/fonemas/consonantes/ckq/Conejo.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Conejo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Co-co',
                silaba: 'Co',
                audio: 'assets/audio/fonemas/consonantes/ckq/Coco.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Coco.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Co-li-flor',
                silaba: 'Co',
                audio: 'assets/audio/fonemas/consonantes/ckq/Coliflor.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Coliflor.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Co-mer',
                silaba: 'Co',
                audio: 'assets/audio/fonemas/consonantes/ckq/Comer.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Comer.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ka-ra-te',
                silaba: 'ka',
                audio: 'assets/audio/fonemas/consonantes/ckq/Karate.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Karate.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Kin-der',
                silaba: 'ki',
                audio: 'assets/audio/fonemas/consonantes/ckq/Kinder.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Kinder.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ki-wi',
                silaba: 'ki',
                audio: 'assets/audio/fonemas/consonantes/ckq/Kiwi.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Kiwi.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ko-a-la',
                silaba: 'ko',
                audio: 'assets/audio/fonemas/consonantes/ckq/Koala.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Koala.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Que-que',
                silaba: 'que',
                audio: 'assets/audio/fonemas/consonantes/ckq/Queque.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Queque.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Qui-que',
                silaba: 'qui',
                audio: 'assets/audio/fonemas/consonantes/ckq/Quique.mp3',
                imagen: 'assets/img/fonemas/consonantes/ckq/Quique.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ca',
                audio: 'assets/audio/fonemas/silabas/ckq/Ca.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Co',
                audio: 'assets/audio/fonemas/silabas/ckq/Co.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Cu',
                audio: 'assets/audio/fonemas/silabas/ckq/Cu.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Que',
                audio: 'assets/audio/fonemas/silabas/ckq/Que.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Qui',
                audio: 'assets/audio/fonemas/silabas/ckq/Qui.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante Ch
    {
        consonante: 'ch',
        data: [
            {
                nombre: 'Chu-rros',
                silaba: 'Chu',
                audio: 'assets/audio/fonemas/consonantes/ch/Churros.mp3',
                imagen: 'assets/img/fonemas/consonantes/ch/Churros.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Cha',
                audio: 'assets/audio/fonemas/silabas/ch/Cha.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Che',
                audio: 'assets/audio/fonemas/silabas/ch/Che.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Chi',
                audio: 'assets/audio/fonemas/silabas/ch/Chi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Cho',
                audio: 'assets/audio/fonemas/silabas/ch/Cho.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Chu',
                audio: 'assets/audio/fonemas/silabas/ch/Chu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ],
    },
    // Consonante D
    {
        consonante: 'd',
        data: [
            {
                nombre: 'Del-fín',
                silaba: 'De',
                audio: 'assets/audio/fonemas/consonantes/d/Delfín.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Delfín.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'De-por-tes',
                silaba: 'De',
                audio: 'assets/audio/fonemas/consonantes/d/Deportes.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Deportes.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Di-bu-jo',
                silaba: 'Di',
                audio: 'assets/audio/fonemas/consonantes/d/Dibujo.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Dibujo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Dien-tes',
                silaba: 'Di',
                audio: 'assets/audio/fonemas/consonantes/d/Dientes.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Dientes.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Da',
                audio: 'assets/audio/fonemas/silabas/d/Da.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'De',
                audio: 'assets/audio/fonemas/silabas/d/De.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Di',
                audio: 'assets/audio/fonemas/silabas/d/Di.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Do',
                audio: 'assets/audio/fonemas/silabas/d/Do.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Du',
                audio: 'assets/audio/fonemas/silabas/d/Du.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante F
    {
        consonante: 'f',
        data: [
            {
                nombre: 'Fa-mi-lia',
                silaba: 'Fa',
                audio: 'assets/audio/fonemas/consonantes/f/Familia.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Familia.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fies-ta',
                silaba: 'Fi',
                audio: 'assets/audio/fonemas/consonantes/f/Fiesta.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Fiesta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fan-tas-ma',
                silaba: 'Fa',
                audio: 'assets/audio/fonemas/consonantes/f/Fantasma.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Fantasma.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Fa',
                audio: 'assets/audio/fonemas/silabas/f/Fa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fe',
                audio: 'assets/audio/fonemas/silabas/f/Fe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fi',
                audio: 'assets/audio/fonemas/silabas/f/Fi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fo',
                audio: 'assets/audio/fonemas/silabas/f/Fo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fu',
                audio: 'assets/audio/fonemas/silabas/f/Fu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante G
    {
        consonante: 'g',
        data: [
            {
                nombre: 'Ga-ve-ta',
                silaba: 'Ga',
                audio: 'assets/audio/fonemas/consonantes/g/Gaveta.mp3',
                imagen: 'assets/img/fonemas/consonantes/g/Gaveta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Go-rra',
                silaba: 'Go',
                audio: 'assets/audio/fonemas/consonantes/g/Gorra.mp3',
                imagen: 'assets/img/fonemas/consonantes/g/Gorra.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ga',
                audio: 'assets/audio/fonemas/silabas/g/Ga.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Gue',
                audio: 'assets/audio/fonemas/silabas/g/Gue.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Gui',
                audio: 'assets/audio/fonemas/silabas/g/Gui.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Go',
                audio: 'assets/audio/fonemas/silabas/g/Go.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Gu',
                audio: 'assets/audio/fonemas/silabas/g/Gu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante J
    {
        consonante: 'j',
        data: [
            {
                nombre: 'Ja-rra',
                silaba: 'Ja',
                audio: 'assets/audio/fonemas/consonantes/j/jarra.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Jarra.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Je-fe',
                silaba: 'Je',
                audio: 'assets/audio/fonemas/consonantes/j/jefe.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Jefe.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ji-ne-te',
                silaba: 'Ji',
                audio: 'assets/audio/fonemas/consonantes/j/jinete.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Jinete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ji-ra-fa',
                silaba: 'Ji',
                audio: 'assets/audio/fonemas/consonantes/j/jirafa.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Jirafa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Jo-ya',
                silaba: 'Jo',
                audio: 'assets/audio/fonemas/consonantes/j/joya.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Joya.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Jue-go',
                silaba: 'Ju',
                audio: 'assets/audio/fonemas/consonantes/j/juego.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Juego.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju-go',
                silaba: 'Ju',
                audio: 'assets/audio/fonemas/consonantes/j/jugo.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Jugo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju-gue-te',
                silaba: 'Ju',
                audio: 'assets/audio/fonemas/consonantes/j/juguete.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Juguete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju-gue-tes',
                silaba: 'Ju',
                audio: 'assets/audio/fonemas/consonantes/j/juguetes.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/Juguetes.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ja',
                audio: 'assets/audio/fonemas/silabas/j/Ja.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Je',
                audio: 'assets/audio/fonemas/silabas/j/Je.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ji',
                audio: 'assets/audio/fonemas/silabas/j/Ji.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Jo',
                audio: 'assets/audio/fonemas/silabas/j/Jo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju',
                audio: 'assets/audio/fonemas/silabas/j/Ju.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante L
    {
        consonante: 'l',
        data: [
            {
                nombre: 'La-gar-ti-ja',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lagartija.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lagartija.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-go',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lago.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lago.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-gu-na',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/laguna.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Laguna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lám-pa-ra',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lampara.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lampara.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-pa',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lapa.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lapa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lá-pi-ces',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lapices.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lapices.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lá-piz',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lapiz.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lapiz.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-ta',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lata.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-zo',
                silaba: 'La',
                audio: 'assets/audio/fonemas/consonantes/l/lazo.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lazo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-che',
                silaba: 'Le',
                audio: 'assets/audio/fonemas/consonantes/l/leche.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Leche.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-chu-za',
                silaba: 'Le',
                audio: 'assets/audio/fonemas/consonantes/l/lechuza.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lechuza.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-gos',
                silaba: 'Le',
                audio: 'assets/audio/fonemas/consonantes/l/legos.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Legos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-ña',
                silaba: 'Le',
                audio: 'assets/audio/fonemas/consonantes/l/leña.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Leña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-ón',
                silaba: 'Le',
                audio: 'assets/audio/fonemas/consonantes/l/león.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/León.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-bo',
                silaba: 'Lo',
                audio: 'assets/audio/fonemas/consonantes/l/lobo.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lobo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-co-mo-to-ra',
                silaba: 'Lo',
                audio: 'assets/audio/fonemas/consonantes/l/locomotora.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Locomotora.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-ma',
                silaba: 'Lo',
                audio: 'assets/audio/fonemas/consonantes/l/loma.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Loma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-ra',
                silaba: 'Lo',
                audio: 'assets/audio/fonemas/consonantes/l/lora.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lora.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-ro',
                silaba: 'Lo',
                audio: 'assets/audio/fonemas/consonantes/l/loro.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Loro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-ciér-na-ga',
                silaba: 'Lu',
                audio: 'assets/audio/fonemas/consonantes/l/luciernaga.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Luciernaga.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-na',
                silaba: 'Lu',
                audio: 'assets/audio/fonemas/consonantes/l/luna.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Luna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-na-res',
                silaba: 'Lu',
                audio: 'assets/audio/fonemas/consonantes/l/lunares.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lunares.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-pi-ta',
                silaba: 'Lu',
                audio: 'assets/audio/fonemas/consonantes/l/lupita.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lupita.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'La',
                audio: 'assets/audio/fonemas/silabas/l/La.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le',
                audio: 'assets/audio/fonemas/silabas/l/Le.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Li',
                audio: 'assets/audio/fonemas/silabas/l/Li.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo',
                audio: 'assets/audio/fonemas/silabas/l/Lo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu',
                audio: 'assets/audio/fonemas/silabas/l/Lu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante LL
    {
        consonante: 'LLll Yy',
        data: [
            {
                nombre: 'Lla-ma',
                silaba: 'Lla',
                audio: 'assets/audio/fonemas/consonantes/llyy/Llama.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Llama.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lla-ve',
                silaba: 'Lla',
                audio: 'assets/audio/fonemas/consonantes/llyy/Llave.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Llave.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lle-no',
                silaba: 'Lle',
                audio: 'assets/audio/fonemas/consonantes/llyy/Lleno.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Lleno.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Llo-ran-do',
                silaba: 'Llo',
                audio: 'assets/audio/fonemas/consonantes/llyy/Llorando.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Llorando.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Llu-via',
                silaba: 'Llu',
                audio: 'assets/audio/fonemas/consonantes/llyy/Lluvia.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Lluvia.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ye-güi-ta',
                silaba: 'Ye',
                audio: 'assets/audio/fonemas/consonantes/llyy/Yeguita.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Yeguita.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ye-ma',
                silaba: 'Ye',
                audio: 'assets/audio/fonemas/consonantes/llyy/Yema.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Yema.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Yun-que',
                silaba: 'Yu',
                audio: 'assets/audio/fonemas/consonantes/llyy/Yunque.mp3',
                imagen: 'assets/img/fonemas/consonantes/llyy/Yunque.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ya',
                audio: 'assets/audio/fonemas/silabas/llyy/Ya.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ye',
                audio: 'assets/audio/fonemas/silabas/llyy/Ye.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Yi',
                audio: 'assets/audio/fonemas/silabas/llyy/Yi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Yo',
                audio: 'assets/audio/fonemas/silabas/llyy/Yo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Yu',
                audio: 'assets/audio/fonemas/silabas/llyy/Yu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante M
    {
        consonante: 'm',
        data: [
            {
                nombre: 'Ma-che-te',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Machete.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Machete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-dri-na',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Madrina.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Madrina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-es-tra',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Maestra.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Maestra.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-go',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mago.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mago.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-le-ta',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Maleta.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Maleta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-má',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mama.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mama.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-da-ri-na',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mandarina.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mandarina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-go',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mango.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mango.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-gue-ra',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Manguera.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Manguera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-ní',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Maní.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Maní.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-tel',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mantel.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mantel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-te-qui-lla',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mantequilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mantequilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-ña-na',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Mañana.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mañana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-za-nas',
                silaba: 'Ma',
                audio: 'assets/audio/fonemas/consonantes/m/Manzanas.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Manzanas.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ma',
                audio: 'assets/audio/fonemas/silabas/m/Ma.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Me',
                audio: 'assets/audio/fonemas/silabas/m/Me.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Mi',
                audio: 'assets/audio/fonemas/silabas/m/Mi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Mo',
                audio: 'assets/audio/fonemas/silabas/m/Mo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Mu',
                audio: 'assets/audio/fonemas/silabas/m/Mu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante N
    {
        consonante: 'n',
        data: [
            {
                nombre: 'Na-chos',
                silaba: 'Na',
                audio: 'assets/audio/fonemas/consonantes/n/Nachos.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nachos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nan-cy',
                silaba: 'Na',
                audio: 'assets/audio/fonemas/consonantes/n/Nancy.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nancy.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Na-ti-lla',
                silaba: 'Na',
                audio: 'assets/audio/fonemas/consonantes/n/Natilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Natilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Na-va-ja',
                silaba: 'Na',
                audio: 'assets/audio/fonemas/consonantes/n/Navaja.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Navaja.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Na-ve',
                silaba: 'Na',
                audio: 'assets/audio/fonemas/consonantes/n/Nave.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nave.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ne-va-da',
                silaba: 'Ne',
                audio: 'assets/audio/fonemas/consonantes/n/Nevada.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nevada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-do',
                silaba: 'Ni',
                audio: 'assets/audio/fonemas/consonantes/n/Nido.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nido.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-ña',
                silaba: 'Ni',
                audio: 'assets/audio/fonemas/consonantes/n/Niña.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Niña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-ñe-ra',
                silaba: 'Ni',
                audio: 'assets/audio/fonemas/consonantes/n/Niñera.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Niñera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-ños',
                silaba: 'Ni',
                audio: 'assets/audio/fonemas/consonantes/n/Niños.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Niños.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'No-che',
                silaba: 'No',
                audio: 'assets/audio/fonemas/consonantes/n/Noche.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Noche.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'No-mo',
                silaba: 'No',
                audio: 'assets/audio/fonemas/consonantes/n/Nomo.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nomo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nu-be',
                silaba: 'Nu',
                audio: 'assets/audio/fonemas/consonantes/n/Nube.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nube.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nu-do',
                silaba: 'Nu',
                audio: 'assets/audio/fonemas/consonantes/n/Nudo.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nudo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nuez',
                silaba: 'Nu',
                audio: 'assets/audio/fonemas/consonantes/n/Nuez.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nuez.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nú-me-ros',
                silaba: 'Nu',
                audio: 'assets/audio/fonemas/consonantes/n/Numeros.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Números.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Na',
                audio: 'assets/audio/fonemas/silabas/n/Na.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ne',
                audio: 'assets/audio/fonemas/silabas/n/Ne.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni',
                audio: 'assets/audio/fonemas/silabas/n/Ni.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'No',
                audio: 'assets/audio/fonemas/silabas/n/No.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nu',
                audio: 'assets/audio/fonemas/silabas/n/Nu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante Ñ
    {
        consonante: 'ñ',
        data: [
            {
                nombre: 'Ña-me',
                silaba: 'Ña',
                audio: 'assets/audio/fonemas/consonantes/ñ/Ñame.mp3',
                imagen: 'assets/img/fonemas/consonantes/ñ/Ñame.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñam-pí',
                silaba: 'Ña',
                audio: 'assets/audio/fonemas/consonantes/ñ/Ñampí.mp3',
                imagen: 'assets/img/fonemas/consonantes/ñ/Ñampí.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñan-dú',
                silaba: 'Ña',
                audio: 'assets/audio/fonemas/consonantes/ñ/Ñandú.mp3',
                imagen: 'assets/img/fonemas/consonantes/ñ/Ñandú.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ña',
                audio: 'assets/audio/fonemas/silabas/ñ/Ña.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñe',
                audio: 'assets/audio/fonemas/silabas/ñ/Ñe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñi',
                audio: 'assets/audio/fonemas/silabas/ñ/Ñi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ño',
                audio: 'assets/audio/fonemas/silabas/ñ/Ño.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñu',
                audio: 'assets/audio/fonemas/silabas/ñ/Ñu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante P
    {
        consonante: 'p',
        data: [
            {
                nombre: 'Pa-dri-no',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Padrino.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Padrino.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pá-ja-ro',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pajaro.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pájaro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ji-lla',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pajilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pajilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-la',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pala.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pala.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-le-ta',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Paleta.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paleta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pal-me-ra',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Palmera.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Palmera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-ma',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Paloma.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paloma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-mas',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Palomas.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Palomas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-mi-tas',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Palomita.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Palomitas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-na-de-ro',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Panadero.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Panadero.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pan-da',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Panda.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Panda.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pan-ta-lo-nes',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pantalones.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pantalones.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pan-ta-lo-ne-ta',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pantaloneta.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pantaloneta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ñue-lo',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pañuelo.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pañuelo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-pá',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Papá.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Papá.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-pel',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Papel.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Papel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-que-te',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Paquete.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paquete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-qui-to',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Paquito.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paquito.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pas-ta',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pasta.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pasta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ta',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pata.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ti-nar',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Patinar.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Patinar.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ti-nes',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Patines.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Patines.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-to',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pato.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pato.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-vo',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pavo.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pavo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ya-so',
                silaba: 'Pa',
                audio: 'assets/audio/fonemas/consonantes/p/Payaso.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Payaso.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-ces',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Peces.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Peces.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-lo-ta',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Pelota.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pelota.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-pe',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Pepe.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pepe.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-ra',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Pera.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Per-fu-me',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Perfume.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Perfume.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-ri-co',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Perico.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Perico.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-rro',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Perro.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Perro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pez',
                silaba: 'Pe',
                audio: 'assets/audio/fonemas/consonantes/p/Pez.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pez.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pia-no',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Piano.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Piano.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-chel',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pichel.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pichel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pie',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pie.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pie.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-ja-ma',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pijama.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pijama.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pin-cel',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pincel.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pincel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-no',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pino.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pino.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pin-tor',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pintor.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pintor.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pin-za',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pinza.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pinza.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-ña-ta',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Piñata.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Piñata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-pa',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pipa.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pipa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-ra-ta',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pirata.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pirata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-to',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pito.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pito.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-za-rra',
                silaba: 'Pi',
                audio: 'assets/audio/fonemas/consonantes/p/Pizarra.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pizarra.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pla-ti-llos',
                silaba: 'Pla',
                audio: 'assets/audio/fonemas/consonantes/p/Platillos.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Platillos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po-li-cia',
                silaba: 'Po',
                audio: 'assets/audio/fonemas/consonantes/p/Policia.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Policía.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po-lli-to',
                silaba: 'Po',
                audio: 'assets/audio/fonemas/consonantes/p/Pollito.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pollito.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po-ma-da',
                silaba: 'Po',
                audio: 'assets/audio/fonemas/consonantes/p/Pomada.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pomada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Por-tal',
                silaba: 'Po',
                audio: 'assets/audio/fonemas/consonantes/p/Portal.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Portal.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pul-pe-ro',
                silaba: 'Pu',
                audio: 'assets/audio/fonemas/consonantes/p/Pulpero.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pulpero.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pul-po',
                silaba: 'Pu',
                audio: 'assets/audio/fonemas/consonantes/p/Pulpo.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pulpo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pu-ma',
                silaba: 'Pu',
                audio: 'assets/audio/fonemas/consonantes/p/Puma.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Puma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pu-ño',
                silaba: 'Pu',
                audio: 'assets/audio/fonemas/consonantes/p/Puño.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Puño.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Pa',
                audio: 'assets/audio/fonemas/silabas/p/Pa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe',
                audio: 'assets/audio/fonemas/silabas/p/Pe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi',
                audio: 'assets/audio/fonemas/silabas/p/Pi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po',
                audio: 'assets/audio/fonemas/silabas/p/Po.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pu',
                audio: 'assets/audio/fonemas/silabas/p/Pu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante R
    {
        consonante: 'r',
        data: [
            {
                nombre: 'Ra-mo',
                silaba: 'Ra',
                audio: 'assets/audio/fonemas/consonantes/r/Ramo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Ramo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ra-na',
                silaba: 'Ra',
                audio: 'assets/audio/fonemas/consonantes/r/Rana.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ra-tón',
                silaba: 'Ra',
                audio: 'assets/audio/fonemas/consonantes/r/Ratón.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Ratón.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ra-yo',
                silaba: 'Ra',
                audio: 'assets/audio/fonemas/consonantes/r/Rayo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rayo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re-ga-de-ra',
                silaba: 'Re',
                audio: 'assets/audio/fonemas/consonantes/r/Regadera.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Regadera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re-ga-lo',
                silaba: 'Re',
                audio: 'assets/audio/fonemas/consonantes/r/Regalo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Regalo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re-loj',
                silaba: 'Re',
                audio: 'assets/audio/fonemas/consonantes/r/Reloj.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Reloj.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Río',
                audio: 'assets/audio/fonemas/consonantes/r/Río.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Río.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ri-sa',
                silaba: 'Ri',
                audio: 'assets/audio/fonemas/consonantes/r/Risa.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Risa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-bot',
                silaba: 'Ro',
                audio: 'assets/audio/fonemas/consonantes/r/Robot.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Robot.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-ca',
                silaba: 'Ro',
                audio: 'assets/audio/fonemas/consonantes/r/Roca.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Roca.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-jo',
                silaba: 'Ro',
                audio: 'assets/audio/fonemas/consonantes/r/Rojo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rojo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-sa',
                silaba: 'Ro',
                audio: 'assets/audio/fonemas/consonantes/r/Rosa.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rosa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-sa-do',
                silaba: 'Ro',
                audio: 'assets/audio/fonemas/consonantes/r/Rosado.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rosado.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ros-qui-lla',
                silaba: 'Ro',
                audio: 'assets/audio/fonemas/consonantes/r/Rosquilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rosquilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ra',
                audio: 'assets/audio/fonemas/silabas/r/Ra.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re',
                audio: 'assets/audio/fonemas/silabas/r/Re.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ri',
                audio: 'assets/audio/fonemas/silabas/r/Ri.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro',
                audio: 'assets/audio/fonemas/silabas/r/Ro.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ru',
                audio: 'assets/audio/fonemas/silabas/r/Ru.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante S
    {
        consonante: 's',
        data: [
            {
                nombre: 'Sá-ba-na',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sabana.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sabana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-co',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Saco.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Saco.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sal',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sal.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sal.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-la',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sala.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sala.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sal-chi-cha',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Salchicha.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Salchicha.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-ni-ta-rio',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sanitario.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sanitario.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-po',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sapo.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sapo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sar-di-na',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sardina.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sardina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sar-tén',
                silaba: 'Sa',
                audio: 'assets/audio/fonemas/consonantes/s/Sartén.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sartén.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-cre-ta-ria',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Secretaria.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Secretaria.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sel-va',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Selva.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Selva.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-má-fo-ro',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Semaforo.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Semáforo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-mi-lla',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Semilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Semilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ser-pien-te',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Serpiente.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Serpiente.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-rru-cho',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Serrucho.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Serrucho.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sex-to',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Sexto.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sexto.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-xy',
                silaba: 'Se',
                audio: 'assets/audio/fonemas/consonantes/s/Sexy.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sexy.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si-lla',
                silaba: 'Si',
                audio: 'assets/audio/fonemas/consonantes/s/Silla.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Silla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si-llón',
                silaba: 'Si',
                audio: 'assets/audio/fonemas/consonantes/s/Sillón.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sillón.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si-llo-nes',
                silaba: 'Si',
                audio: 'assets/audio/fonemas/consonantes/s/Sillones.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sillones.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'So-fá',
                silaba: 'So',
                audio: 'assets/audio/fonemas/consonantes/s/Sofá.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sofá.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sol',
                silaba: 'So',
                audio: 'assets/audio/fonemas/consonantes/s/Sol.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sol.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'So-pa',
                silaba: 'So',
                audio: 'assets/audio/fonemas/consonantes/s/Sopa.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sopa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sub-ma-ri-no',
                silaba: 'Su',
                audio: 'assets/audio/fonemas/consonantes/s/Submarino.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Submarino.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sué-ter',
                silaba: 'Su',
                audio: 'assets/audio/fonemas/consonantes/s/Suéter.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Suéter.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Sa',
                audio: 'assets/audio/fonemas/silabas/s/Sa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se',
                audio: 'assets/audio/fonemas/silabas/s/Se.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si',
                audio: 'assets/audio/fonemas/silabas/s/Si.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'So',
                audio: 'assets/audio/fonemas/silabas/s/So.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Su',
                audio: 'assets/audio/fonemas/silabas/s/Su.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante T
    {
        consonante: 't',
        data: [
            {
                nombre: 'Ta-ja-da',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Tajada.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tajada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tam-bor',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Tambor.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tambor.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ta-pa',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Tapa.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tapa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ta-pe-te',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Tapete.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tapete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tar-de',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Tarde.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tarde.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ta-xi',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Taxi.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Taxi.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ta-za',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Taza.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Taza.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ta-zón',
                silaba: 'Ta',
                audio: 'assets/audio/fonemas/consonantes/t/Tazón.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tazón.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te-cho',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Techo.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Techo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te-la',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Tela.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tela.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te-lé-fo-no',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Teléfono.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Teléfono.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te-le-vi-sor',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Televisor.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Televisor.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te-ne-dor',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Tenedor.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tenedor.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te-nis',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Tenis.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tenis.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tex-to',
                silaba: 'Te',
                audio: 'assets/audio/fonemas/consonantes/t/Texto.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Texto.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tía',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tía.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tía.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ti-bu-rón',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tiburón.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tiburón.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ti-gre',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tigre.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tigre.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ti-je-ras',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tijeras.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tijeras.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ti-na',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tina.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ti-na-ja',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tinaja.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tinaja.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tin-ta',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tinta.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tinta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tío',
                silaba: 'Ti',
                audio: 'assets/audio/fonemas/consonantes/t/Tío.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tío.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'To-bo-gán',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Tobogán.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tobogán.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'To-mi-llo',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Tomillo.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tomillo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'To-ro',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Toro.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Toro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tor-ti-lla',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Tortilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tortilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tor-tu-ga',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Tortuga.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tortuga.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tos',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Tos.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tos-ta-das',
                silaba: 'To',
                audio: 'assets/audio/fonemas/consonantes/t/Tostadas.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tostadas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tu-cán',
                silaba: 'Tu',
                audio: 'assets/audio/fonemas/consonantes/t/Tucán.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tucán.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tu-co',
                silaba: 'Tu',
                audio: 'assets/audio/fonemas/consonantes/t/Tuco.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tuco.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tu-li-pán',
                silaba: 'Tu',
                audio: 'assets/audio/fonemas/consonantes/t/Tulipán.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tulipán.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tu-na',
                silaba: 'Tu',
                audio: 'assets/audio/fonemas/consonantes/t/Tuna.mp3',
                imagen: 'assets/img/fonemas/consonantes/t/Tuna.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ta',
                audio: 'assets/audio/fonemas/silabas/t/Ta.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Te',
                audio: 'assets/audio/fonemas/silabas/t/Te.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ti',
                audio: 'assets/audio/fonemas/silabas/t/Ti.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'To',
                audio: 'assets/audio/fonemas/silabas/t/To.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Tu',
                audio: 'assets/audio/fonemas/silabas/t/Tu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante X
    {
        consonante: 'x',
        data: [
            {
                nombre: 'Xi-ló-fo-no',
                silaba: 'Xi',
                audio: 'assets/audio/fonemas/consonantes/x/Xilofono.mp3',
                imagen: 'assets/img/fonemas/consonantes/x/Xilofono.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Xi-nia',
                silaba: 'Xi',
                audio: 'assets/audio/fonemas/consonantes/x/Xinia.mp3',
                imagen: 'assets/img/fonemas/consonantes/x/Xinia.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Xa',
                audio: 'assets/audio/fonemas/silabas/x/Xa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Xe',
                audio: 'assets/audio/fonemas/silabas/x/Xe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Xi',
                audio: 'assets/audio/fonemas/silabas/x/Xi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Xo',
                audio: 'assets/audio/fonemas/silabas/x/Xo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Xu',
                audio: 'assets/audio/fonemas/silabas/x/Xu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    }
];


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
                imagen: 'assets/img/fonemas/vocales/e/escudo.jpg',
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
                audio: 'assets/audio/fonemas/vocales/e/esparragos.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espárragos.jpg',
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
                audio: 'assets/audio/fonemas/vocales/u/Unicornio.mp3',
                imagen: 'assets/img/fonemas/vocales/u/unicornio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Uniforme',
                audio: 'assets/audio/fonemas/vocales/u/Uniforme.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uniforme.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Universo',
                audio: 'assets/audio/fonemas/vocales/u/Universo.mp3',
                imagen: 'assets/img/fonemas/vocales/u/universo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Uno',
                audio: 'assets/audio/fonemas/vocales/u/Uno.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uno.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Uña',
                audio: 'assets/audio/fonemas/vocales/u/Uña.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Urna',
                audio: 'assets/audio/fonemas/vocales/u/Urna.mp3',
                imagen: 'assets/img/fonemas/vocales/u/urna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Urraca',
                audio: 'assets/audio/fonemas/vocales/u/Urraca.mp3',
                imagen: 'assets/img/fonemas/vocales/u/urraca.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Útiles',
                audio: 'assets/audio/fonemas/vocales/u/Útiles.mp3',
                imagen: 'assets/img/fonemas/vocales/u/utiles.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    }
];


/***/ }),

/***/ "./src/data/categorias/data.categorias.ts":
/*!************************************************!*\
  !*** ./src/data/categorias/data.categorias.ts ***!
  \************************************************/
/*! exports provided: CATEGORIAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIAS", function() { return CATEGORIAS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const CATEGORIAS = [
    {
        nombre: 'Imagen de mí mismo',
        imagen: 'assets\img\semanticas\categories-bar\imagen.png',
        subcategoria: []
    },
    {
        nombre: 'Partes del Cuerpo',
        imagen: 'assets\img\semanticas\categories-bar\cuerpo.png',
        subcategoria: []
    },
    {
        nombre: 'Familia',
        imagen: 'assets\img\semanticas\categories-bar\familia.png',
        subcategoria: []
    },
    {
        nombre: 'Alimentos',
        imagen: 'assets\img\semanticas\categories-bar\alimentos.png',
        subcategoria: [
            { nombre: 'Frutas' },
            { nombre: 'Vegetales' },
            { nombre: 'Alimentos Salados' },
            { nombre: 'Alimentos Dulces' },
            { nombre: 'Bebidas' }
        ]
    },
    {
        nombre: 'Animales',
        imagen: 'assets\img\semanticas\categories-bar\animales.png',
        subcategoria: [
            { nombre: 'Animales de la Granja' },
            { nombre: 'Animales Domésticos' },
            { nombre: 'Animales Salvajes' }
        ]
    },
    {
        nombre: 'Juguetes',
        imagen: 'assets\img\semanticas\categories-bar\juguetes.png',
        subcategoria: []
    },
    {
        nombre: 'Prendas de Vestir',
        imagen: 'assets\img\semanticas\categories-bar\prendas.png',
        subcategoria: [
            { nombre: 'Ropa de Hombre' },
            { nombre: 'Ropa de Mujer' },
            { nombre: 'Ropa de Playa' }
        ]
    },
    {
        nombre: 'Partes de la Casa',
        imagen: 'assets\img\semanticas\categories-bar\casa.png',
        subcategoria: []
    },
    {
        nombre: 'Medios de Transporte',
        imagen: 'assets\img\semanticas\categories-bar\transporte.png',
        subcategoria: []
    },
    {
        nombre: 'Servidores de la Comunidad',
        imagen: 'assets\img\semanticas\categories-bar\servidores.png',
        subcategoria: []
    },
    {
        nombre: 'Instrumentos Musicales',
        imagen: 'assets\img\semanticas\categories-bar\instrumentos.png',
        subcategoria: []
    }
];


/***/ }),

/***/ "./src/data/categorias/data.subcategorias.ts":
/*!***************************************************!*\
  !*** ./src/data/categorias/data.subcategorias.ts ***!
  \***************************************************/
/*! exports provided: SUBCATEGORIAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBCATEGORIAS", function() { return SUBCATEGORIAS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SUBCATEGORIAS = [
    {
        nombre: 'Imagen de mí mismo',
        data: [
            {
                sujeto: 'Este',
                verbo: ' soy',
                predicado: 'yo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Yo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'me llamo',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Nombre.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'vivo',
                predicado: 'Lugar',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Lugar.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: ' en el Centro de Apoyos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Centro.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Partes del Cuerpo',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cabeza',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cabeza.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'pelo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pelo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'frente',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Frente.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'mejillas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Mejillas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'ojos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Ojos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cejas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cejas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'pestaña',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pestañas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'nariz',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cabeza.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'boca',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Boca.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'dientes',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Dientes.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'lengua',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Lengua.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'labios',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Labios.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'barbilla',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Barbilla.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'orejas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Orejas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cuello',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cuello.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'nuca',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Nuca.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'espalda',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Espalda.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'hombros',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Hombros.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'estómago',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Estómago.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'brazos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Brazos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'codos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Codos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'manos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Manos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'dedos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Dedos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'uñas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Uñas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cintura',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cintura.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'piernas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Piernas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'rodillas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Rodillas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'tobillos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Tobillos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'talones',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Talones.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'pies',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pies.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Familia',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'mamá',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Mamá.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Mamá.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'papá',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Papá.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Papá.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'abuelita',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuela.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuela.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'abuelito',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuelo.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuelo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'tío',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tío.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tío.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'tía',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tía.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tía.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'Padrino',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Padrino.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Padrino.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'Madrina',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tía.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Madrina.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Frutas',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'banano',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Banano.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'naranja',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Naranja.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'manzana',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Manzana.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'uvas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Uvas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'sandía',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Sandía.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'papaya',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Papaya.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'melón',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Melón.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'piña',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Piña.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'fresas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Fresas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'cas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Cas.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Vegetales',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'aguacate',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Aguacate.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'ajo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Ajo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'coliflor',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Coliflor.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'verduras',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Verduras.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'tomate',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Tomate.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'papa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Papa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chayote',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Chayote.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'zanahoria',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Zanahoria.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Alimentos Salados',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chuleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Chuleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'matequilla',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Mantequilla.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'pasta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Pasta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'sopa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Sopa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'tortilla',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Tortilla.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'tostadas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Tostadas.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Alimentos Dulces',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chocolate',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chocolate.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chocolates',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chocolates.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chocoleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chocoleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chupa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chupa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'churros',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Churros.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'churros',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Churros.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'confite',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Confite.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'confites',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Confites.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'dona',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Dona.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'queque',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Queque.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Bebidas',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'bebo',
                predicado: 'café',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/bebidas/Café.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'bebp',
                predicado: 'coca cola',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/bebidas/CocaCola.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'bebo',
                predicado: 'leche',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/bebidas/Leche.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Animales de la Granja',
        data: [
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una vaca',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Vaca.jpg',
                audio: ''
            },
            {
                sujeto: 'La vaca',
                verbo: 'hace',
                predicado: 'Mu Mu Mu',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Vaca.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Vaca.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Vaca.mp3'
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una gallina',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallina.jpg',
                audio: ''
            },
            {
                sujeto: 'La gallina',
                verbo: 'hace',
                predicado: 'Co Co Co',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Gallina.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallina.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Gallina.mp3'
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un pato',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pato.jpg',
                audio: ''
            },
            {
                sujeto: 'El pato',
                verbo: 'hace',
                predicado: 'Cuac Cuac Cuac',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Pato.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pato.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Pato.mp3'
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un caballo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Caballo.jpg',
                audio: ''
            },
            {
                sujeto: 'El caballo',
                verbo: 'hace',
                predicado: 'Jim Jim Jim',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Caballo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Caballo.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Caballo.mp3'
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una cabra',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Cabra.jpg',
                audio: ''
            },
            {
                sujeto: 'La cabra',
                verbo: 'hace',
                predicado: 'Bee Bee Bee',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Cabra.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Cabra.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Cabra.mp3'
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un gallo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallo.jpg',
                audio: ''
            },
            {
                sujeto: 'El gallo',
                verbo: 'hace',
                predicado: 'Ki Ki Ri Ki',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Gallo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallo.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Gallo.mp3'
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un pollito',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pollito.jpg',
                audio: ''
            },
            {
                sujeto: 'El pollito',
                verbo: 'hace',
                predicado: 'Pío Pío Pío',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Pollito.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pollito.jpg',
                audio: 'assets/audio/semanticas/categorias/granja/Pollito.mp3'
            },
        ]
    },
    {
        nombre: 'Animales Domésticos',
        data: [
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un conejo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Conejo.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una lora',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Lora.jpg',
                audio: ''
            },
            {
                sujeto: 'Estos',
                verbo: 'son',
                predicado: 'unos peces',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Estos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Peces.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un perico',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Perico.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un perro',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Perro.jpg',
                audio: ''
            },
            {
                sujeto: 'El perro',
                verbo: 'hace',
                predicado: 'Guau Guau Guau',
                imagenSujeto: 'assets/img/semanticas/categorias/domesticos/Perro.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Perro.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una tortuga',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Tortuga.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Animales Salvajes',
        data: [
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una cebra',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Cebra.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una jirafa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Jirafa.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un león',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/León.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un mono',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Mono.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un oso',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Oso.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una serpiente',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Serpiente.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un tigre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Tigre.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Juguetes',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'bola',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Bola.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'muñecas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Muñeca.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'tucos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Tucos.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'juega',
                predicado: 'bicicleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Bicicleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'patines',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Patines.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'motos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Moto.png',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'rompecabezas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Rompecabezas.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'aviones',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Aviones.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'trastes',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Trastes.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'juega',
                predicado: 'bingo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Bingo.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'lotería',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Lotería.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'juega',
                predicado: 'Hula Hula',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/HulaHula.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'Suiza',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Suiza.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'nintendo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Nintendo.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Ropa de Hombre',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'bota',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Bota.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'camisa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Camisa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'corbata',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Corbata.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'pantalón corto',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/PantalónCorto.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'pantalones',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Pantalones.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'pantalón largo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/PantalónLargo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'zapato',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Zapato.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'zapatos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Zapatos.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Ropa de Mujer',
        data: [
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'abrigo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Abrigo.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'blusa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Blusa.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'chaleco',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Chaleco.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'colas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Colas.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'diadema',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Diadema.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'pijama',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Pijama.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'vestido',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Vestido.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'zapatos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Zapatos.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Ropa de Playa',
        data: [
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'pantaloneta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaP/Pantaloneta.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'vestido de baño',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaP/Vestido.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Partes de la Casa',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'veo',
                predicado: 'la cocina',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Cocina.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'en el comedor',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Comedor.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'duermo',
                predicado: 'en el cuarto',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Cuarto.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: 'en el baño',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Baño.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: 'en el patio',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Patio.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: 'en el corredor',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Corredor.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Medios de Transporte',
        data: [
            {
                sujeto: 'Usted',
                verbo: 'va',
                predicado: 'en carro',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Usted.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Carro.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellos',
                verbo: 'ven',
                predicado: 'el bus',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Bus.jpg',
                audio: ''
            },
            {
                sujeto: 'Nosotros',
                verbo: 'oímos',
                predicado: 'el trailer',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Nosotros.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Trailer.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellas',
                verbo: 'usan',
                predicado: 'el taxi',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellas.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Taxi.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellos',
                verbo: 'usan',
                predicado: 'la motocicleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Motocicleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'pinto',
                predicado: 'la carreta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Carreta.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'va',
                predicado: 'en tren',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Tren.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'vuela',
                predicado: 'en avión',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Avión.jpg',
                audio: ''
            },
            {
                sujeto: 'Nosotros',
                verbo: 'oímos',
                predicado: 'el helicóptero',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Nosotros.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Helicóptero.jpg',
                audio: ''
            },
            {
                sujeto: 'Ustedes',
                verbo: 'pasean',
                predicado: 'en barco',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ustedes.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Barco.jpg',
                audio: ''
            },
            {
                sujeto: 'Nosotros',
                verbo: 'vemos',
                predicado: 'el submarino',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Nosotros.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Submarino.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellos',
                verbo: 'oyen',
                predicado: 'el cohete',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Cohete.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Servidores de la Comunidad',
        data: [
            {
                sujeto: 'El doctor',
                verbo: 'cura',
                predicado: 'a los enfermos',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Doctor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Enfermos.jpg',
                audio: ''
            },
            {
                sujeto: 'El dentista',
                verbo: 'limpia',
                predicado: 'los dientes',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Dentista.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Dientes.jpg',
                audio: ''
            },
            {
                sujeto: 'El veterinario',
                verbo: 'cura',
                predicado: 'animales',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Veterinario.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Animales.jpg',
                audio: ''
            },
            {
                sujeto: 'La maestra',
                verbo: 'enseña',
                predicado: 'a los niños',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Maestra.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Niños.jpg',
                audio: ''
            },
            {
                sujeto: 'La secretaria',
                verbo: 'hace',
                predicado: 'cartas',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Secretaria.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Cartas.jpg',
                audio: ''
            },
            {
                sujeto: 'El panadero',
                verbo: 'hace',
                predicado: 'pan',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Panadero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Pan.jpg',
                audio: ''
            },
            {
                sujeto: 'El carnicero',
                verbo: 'vende',
                predicado: 'carnes',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Carnicero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Carnes.jpg',
                audio: ''
            },
            {
                sujeto: 'El pulpero',
                verbo: 'vende',
                predicado: 'arroz',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Pulpero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Arroz.jpg',
                audio: ''
            },
            {
                sujeto: 'El chofer',
                verbo: 'maneja',
                predicado: 'el bus',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Chofer.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Bus.jpg',
                audio: ''
            },
            {
                sujeto: 'El cartero',
                verbo: 'entrega',
                predicado: 'cartas',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Cartero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Cartas.jpg',
                audio: ''
            },
            {
                sujeto: 'El bombero',
                verbo: 'apaga',
                predicado: 'el fuego',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Bombero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Fuego.jpg',
                audio: ''
            },
            {
                sujeto: 'El policía',
                verbo: 'cuida',
                predicado: 'a los niños',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Policía.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Niños.jpg',
                audio: ''
            },
            {
                sujeto: 'El mecánico',
                verbo: 'arregla',
                predicado: 'el carro',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Mecánico.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Carro.jpg',
                audio: ''
            },
            {
                sujeto: 'El carpintero',
                verbo: 'hace',
                predicado: 'muebles',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Carpintero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Muebles.jpg',
                audio: ''
            },
            {
                sujeto: 'El pintor',
                verbo: 'pinta',
                predicado: 'la casa',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Pintor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/La casa.jpg',
                audio: ''
            },
            {
                sujeto: 'El agricultor',
                verbo: 'siembra',
                predicado: 'verduras',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Agricultor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Verduras.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Instrumentos Musicales',
        data: [
            {
                sujeto: 'El tambor',
                verbo: 'suena',
                predicado: 'pum pum',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Tambor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Tambor.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Tambor.mp3'
            },
            {
                sujeto: 'La trompeta',
                verbo: 'suena',
                predicado: 'tu tu tuuu',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Trompeta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Trompeta.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Trompeta.mp3'
            },
            {
                sujeto: 'La campana',
                verbo: 'suena',
                predicado: 'din don',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Campana.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Campana.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Campana.mp3'
            },
            {
                sujeto: 'El piano',
                verbo: 'suena',
                predicado: 'tilililin',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Piano.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Piano.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Piano.mp3'
            },
            {
                sujeto: 'Las maracas',
                verbo: 'suenan',
                predicado: 'chk chk',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Maracas.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Maracas.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Maracas.mp3'
            },
            {
                sujeto: 'La guitarra',
                verbo: 'suena',
                predicado: 'chin chin',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Guitarra.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Guitarra.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Guitarra.mp3'
            },
            {
                sujeto: 'La flauta',
                verbo: 'suena',
                predicado: 'fi fi fiiii',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Flauta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Flauta.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Flauta.mp3'
            },
            {
                sujeto: 'Los platillos',
                verbo: 'suenan',
                predicado: 'tilililin',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Platillos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Platillos.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Platillos.mp3'
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
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaA.png',
        mensaje: 'Aaaaaaaa (Sirena de ambulancia)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'b',
        video: 'assets/video/fonemas/vidFonB.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaB.png',
        mensaje: 'Beeeee Beeeee (Oveja)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ckq',
        video: 'assets/video/fonemas/vidFonK.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaC.png',
        mensaje: 'Cuac Cuac Cuac (Pato)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ch',
        video: 'assets/video/fonemas/vidFonCh.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaCh.png',
        mensaje: 'Chuuuu Chuuu Chuuu (Trencito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'd',
        video: 'assets/video/fonemas/vidFonD.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaD.png',
        mensaje: 'Dddddddddd (Abejas cerca de panal)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'e',
        video: 'assets/video/fonemas/vidFonE.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaE.png',
        mensaje: 'Ehhh Ehhh Ehhh (Alegría)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'f',
        video: 'assets/video/fonemas/vidFonF.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaF.png',
        mensaje: 'Fiiii Fiiii Fiiii (Soplando flauta)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'g',
        video: 'assets/video/fonemas/vidFonG.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaG.png',
        mensaje: 'Ggggggggg (Gárgaras)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'i',
        video: 'assets/video/fonemas/vidFonI.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaI.png',
        mensaje: 'Iiiii Iiiii Iiiii (Ratoncito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'j',
        video: 'assets/video/fonemas/vidFonJ.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaJ.png',
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
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaL.png',
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
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaM.png',
        mensaje: 'Muuu Muuu Muuu (Vaca)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'n',
        video: 'assets/video/fonemas/vidFonN.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaN.png',
        mensaje: 'Ni No Ni No Ni No (Minions)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ñ',
        video: 'assets/video/fonemas/vidFonÑ.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaÑ.png',
        mensaje: 'Ñooo Ñooo Ñooo (Chanchito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'o',
        video: 'assets/video/fonemas/vidFonO.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaO.png',
        mensaje: 'Ohhh Ohhh Ohhh (Asombro)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'p',
        video: 'assets/video/fonemas/vidFonP.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaP.png',
        mensaje: 'Pum Pum Pum (Tambor)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'r',
        video: 'assets/video/fonemas/vidFonR.mp4',
        imagen: 'assets/img/fonemaRr.svg',
        mensaje: 'Ra Ra Ra Ra Ra (Cantando)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'rr',
        video: 'assets/video/fonemas/vidFonRR.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaRR.png',
        mensaje: 'Rrrrrrrrrrrr (Moto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 's',
        video: 'assets/video/fonemas/vidFonS.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaSs.png',
        mensaje: 'Sssssssss (Serpiente)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 't',
        video: 'assets/video/fonemas/vidFonT.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaT.png',
        mensaje: 'Tilín Tilín Tilín (Campana)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'u',
        video: 'assets/video/fonemas/vidFonU.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaU.png',
        mensaje: 'Uy Uy Uy (Susto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'x',
        video: 'assets/video/fonemas/vidFonX.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaX.png',
        mensaje: 'Xxxx Xxxx Xxxx (spray)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'LLll Yy',
        video: 'assets/video/fonemas/vidFonY.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaY.png',
        mensaje: 'Yyyyyyyy (Avión volando)',
        duracion: 4,
        reproduciendo: false
    },
];


/***/ })

}]);
//# sourceMappingURL=default~pages-categoria-categoria-module~pages-consonantes-consonantes-module~pages-docentes-docente~b8ec91ad-es2015.js.map