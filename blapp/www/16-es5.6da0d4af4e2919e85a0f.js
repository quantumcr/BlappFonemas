function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3PMP":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=function l(){_classCallCheck(this,l)},t=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),s=function(){function l(){_classCallCheck(this,l),this.audio=new Audio}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"playAudio",value:function(l){this.audio.src="assets/audio/Mama.mp3",this.audio.load(),this.audio.play(),console.log(l.target.value),console.log("Soy el audio")}}]),l}(),r=o.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:818px;height:624px;background:#fff;border:2px solid #fff;box-sizing:border-box;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px}.audioFonema[_ngcontent-%COMP%]{margin-left:226px;margin-right:235px;margin-top:91px}.imagen[_ngcontent-%COMP%]{width:357px;height:358px}.btnPlay[_ngcontent-%COMP%]{width:103px;height:103px;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:100px;background:#7a84dd}.rowPalabra[_ngcontent-%COMP%]{margin-left:309px;margin-right:318px}.palabra[_ngcontent-%COMP%]{margin-left:309px;margin-right:318px;font-family:Poppins;font-style:normal;font-weight:400;font-size:60px;line-height:90px;text-align:center;color:#109cf1}"]],data:{}});function b(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,18,"div",[["class","principal"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,17,"ion-grid",[],null,null,null,i.q,i.d)),o.nb(2,49152,null,0,a.x,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,10,"ion-row",[["class","audioFonema"]],null,null,null,i.x,i.k)),o.nb(4,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(5,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),o.ob(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o.ob(7,0,null,null,1,"ion-img",[["class","imagen"],["src","assets/img/fonemas/game-panel/mama.png"]],null,null,null,i.s,i.f)),o.nb(8,49152,null,0,a.A,[o.h,o.k,o.x],{src:[0,"src"]},null),(l()(),o.ob(9,0,null,null,4,"div",[["style","position: absolute; left: 227px; top: 346px;"]],null,null,null,null,null)),(l()(),o.ob(10,0,null,null,3,"ion-segment-button",[["class","btnPlay"],["value","audio"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.playAudio(u)&&o),o}),i.y,i.m)),o.nb(11,49152,null,0,a.gb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.ob(12,0,null,0,1,"ion-icon",[["src","assets/icon/play.svg"]],null,null,null,i.r,i.e)),o.nb(13,49152,null,0,a.z,[o.h,o.k,o.x],{src:[0,"src"]},null),(l()(),o.ob(14,0,null,0,4,"ion-row",[],null,null,null,i.x,i.k)),o.nb(15,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(16,0,null,0,2,"ion-label",[["class","palabra"]],null,null,null,i.v,i.i)),o.nb(17,49152,null,0,a.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["Palabra"]))],(function(l,n){l(n,8,0,"assets/img/fonemas/game-panel/mama.png"),l(n,11,0,"audio"),l(n,13,0,"assets/icon/play.svg")}),null)}var p=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),c=o.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:818px;height:624px;background:#fff;border:2px solid #fff;box-sizing:border-box;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px}.row[_ngcontent-%COMP%]{margin-top:100px;margin-left:80px}"]],data:{}});function x(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,5,"div",[["class","principal"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,4,"ion-grid",[],null,null,null,i.q,i.d)),o.nb(2,49152,null,0,a.x,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,2,"ion-row",[["class","row"]],null,null,null,i.x,i.k)),o.nb(4,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(5,0,null,0,0,"video",[["autoplay","true"],["fullscreen","fullscreen"],["src","../../../../assets/video/VidFon A.mp4"]],null,null,null,null,null))],null,null)}var g=function(){function l(){_classCallCheck(this,l),this.barEvent=new o.m}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"openPanel",value:function(l){console.log(l.target.value),this.barEvent.emit(l.target.value)}},{key:"playVideo",value:function(){}}]),l}(),d=o.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{position:absolute;width:302px;height:623px;background:#fcd260;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px}.imagen[_ngcontent-%COMP%]{position:absolute;width:263px;height:262px;left:16px;right:23px;top:206px}.titulo[_ngcontent-%COMP%]{position:absolute;width:226px;height:74px;left:50px;right:41px;top:15px;font-family:Poppins;font-style:normal;font-weight:700;font-size:45px;line-height:67px;color:#fff}.fonema[_ngcontent-%COMP%]{position:absolute;width:301px;height:74px;left:35px;right:41px;top:85px;font-family:Poppins;font-style:normal;font-weight:700;font-size:45px;line-height:67px;color:#fff}.videoFonema[_ngcontent-%COMP%]{margin-top:65px;margin-right:100px}.mensaje[_ngcontent-%COMP%]{width:303px;height:42px;margin-top:450px;font-family:Poppins;font-style:normal;font-weight:700;font-size:25px;line-height:37px;text-align:center;color:#fff}.comando1[_ngcontent-%COMP%]{position:absolute;top:406px;background:rgba(255,230,190,.94);border-radius:15px}.comando2[_ngcontent-%COMP%]{position:absolute;top:467px;background:rgba(255,230,190,.94);border-radius:15px}.comando3[_ngcontent-%COMP%]{position:absolute;top:520px;background:rgba(255,230,190,.94);border-radius:15px}.ion-segment-button[_ngcontent-%COMP%]{background:rgba(255,230,190,.94);border-radius:15px;color:#5f659c;top:392px}.btnComando1[_ngcontent-%COMP%]{position:absolute;width:259px;height:48px;left:20px;right:23px;background:rgba(255,230,190,.94);border-radius:15px;color:#5f659c;top:392px}.btnComando2[_ngcontent-%COMP%]{position:absolute;width:259px;height:48px;left:20px;right:23px;background:rgba(255,230,190,.94);border-radius:15px;color:#5f659c;top:453px}.btnComando3[_ngcontent-%COMP%]{position:absolute;width:259px;height:48px;left:20px;right:23px;background:rgba(255,230,190,.94);border-radius:15px;color:#5f659c;top:520px}.btnPlay[_ngcontent-%COMP%]{width:60px;height:60px;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:100px;background:#7a84dd}"]],data:{}});function h(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,28,"div",[["class","principal"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,27,"ion-grid",[],null,null,null,i.q,i.d)),o.nb(2,49152,null,0,a.x,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,4,"ion-row",[],null,null,null,i.x,i.k)),o.nb(4,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(5,0,null,0,2,"ion-label",[["class","titulo"]],null,null,null,i.v,i.i)),o.nb(6,49152,null,0,a.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["FONEMA"])),(l()(),o.ob(8,0,null,0,4,"ion-row",[],null,null,null,i.x,i.k)),o.nb(9,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(10,0,null,0,2,"ion-label",[["class","fonema"]],null,null,null,i.v,i.i)),o.nb(11,49152,null,0,a.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(12,0,["/ "," /"])),(l()(),o.ob(13,0,null,0,10,"ion-row",[["class","videoFonema"]],null,null,null,i.x,i.k)),o.nb(14,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(15,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),o.ob(16,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o.ob(17,0,null,null,1,"ion-img",[["class","imagen"],["src","assets/img/fonemas/game-panel/mama.png"]],null,null,null,i.s,i.f)),o.nb(18,49152,null,0,a.A,[o.h,o.k,o.x],{src:[0,"src"]},null),(l()(),o.ob(19,0,null,null,4,"div",[["style","position: absolute; left: 37px; top: 421px;"]],null,null,null,null,null)),(l()(),o.ob(20,0,null,null,3,"ion-segment-button",[["class","btnPlay"],["value","video"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openPanel(u)&&o),o}),i.y,i.m)),o.nb(21,49152,null,0,a.gb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.ob(22,0,null,0,1,"ion-icon",[["src","assets/icon/play.svg"]],null,null,null,i.r,i.e)),o.nb(23,49152,null,0,a.z,[o.h,o.k,o.x],{src:[0,"src"]},null),(l()(),o.ob(24,0,null,0,4,"ion-row",[],null,null,null,i.x,i.k)),o.nb(25,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(26,0,null,0,2,"ion-label",[["class","mensaje"]],null,null,null,i.v,i.i)),o.nb(27,49152,null,0,a.K,[o.h,o.k,o.x],null,null),(l()(),o.Db(28,0,["",""]))],(function(l,n){l(n,18,0,"assets/img/fonemas/game-panel/mama.png"),l(n,21,0,"video"),l(n,23,0,"assets/icon/play.svg")}),(function(l,n){var u=n.component;l(n,12,0,u.fonema),l(n,28,0,u.mensaje)}))}var f=u("SVse"),m=function(){function l(){_classCallCheck(this,l),this.visiblePhoneme=!0,this.visibleVideo=!1}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"selectPanel",value:function(l){console.log(l),this.setVisible(l)}},{key:"setVisible",value:function(l){"video"===l&&(this.visibleVideo=!0,this.visiblePhoneme=!1),"phoneme"===l&&(this.visibleVideo=!1,this.visiblePhoneme=!0)}}]),l}(),k=o.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:1142px;height:624px}.panel[_ngcontent-%COMP%]{left:22px;width:818px;height:624px}.bar[_ngcontent-%COMP%]{width:302px;height:623px}"]],data:{}});function v(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,1,"app-phoneme-panel",[],null,null,null,b,r)),o.nb(1,114688,null,0,s,[],null,null)],(function(l,n){l(n,1,0)}),null)}function C(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,1,"app-video-panel",[],null,null,null,x,c)),o.nb(1,114688,null,0,p,[],null,null)],(function(l,n){l(n,1,0)}),null)}function w(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,14,"div",[["class","principal"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,13,"ion-grid",[],null,null,null,i.q,i.d)),o.nb(2,49152,null,0,a.x,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,11,"ion-row",[],null,null,null,i.x,i.k)),o.nb(4,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(5,0,null,0,3,"ion-col",[["class","bar"]],null,null,null,i.p,i.c)),o.nb(6,49152,null,0,a.q,[o.h,o.k,o.x],null,null),(l()(),o.ob(7,0,null,0,1,"app-bar",[["fonema","fonema"],["mensaje","sonido del fonema"]],null,[[null,"barEvent"]],(function(l,n,u){var o=!0;return"barEvent"===n&&(o=!1!==l.component.selectPanel(u)&&o),o}),h,d)),o.nb(8,114688,null,0,g,[],{fonema:[0,"fonema"],mensaje:[1,"mensaje"]},{barEvent:"barEvent"}),(l()(),o.ob(9,0,null,0,5,"ion-col",[["class","panel"]],null,null,null,i.p,i.c)),o.nb(10,49152,null,0,a.q,[o.h,o.k,o.x],null,null),(l()(),o.db(16777216,null,0,1,null,v)),o.nb(12,16384,null,0,f.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,0,1,null,C)),o.nb(14,16384,null,0,f.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,8,0,"fonema","sonido del fonema"),l(n,12,0,u.visiblePhoneme),l(n,14,0,u.visibleVideo)}),null)}var P=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),y=o.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:100%;height:100%;background:url(fondo.cd20a4b3c33550c32869.svg)}.component[_ngcontent-%COMP%]{width:1142px;height:624px;margin-top:48px;margin-left:70px;margin-right:68px}"]],data:{}});function _(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,8,"div",[["class","principal"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,7,"ion-grid",[],null,null,null,i.q,i.d)),o.nb(2,49152,null,0,a.x,[o.h,o.k,o.x],null,null),(l()(),o.ob(3,0,null,0,5,"ion-row",[["class","component"]],null,null,null,i.x,i.k)),o.nb(4,49152,null,0,a.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(5,0,null,0,3,"ion-col",[],null,null,null,i.p,i.c)),o.nb(6,49152,null,0,a.q,[o.h,o.k,o.x],null,null),(l()(),o.ob(7,0,null,0,1,"app-phoneme-view",[],null,null,null,w,k)),o.nb(8,114688,null,0,m,[],null,null)],(function(l,n){l(n,8,0)}),null)}var O=o.kb("app-fonema",P,(function(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,1,"app-fonema",[],null,null,null,_,y)),o.nb(1,114688,null,0,P,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=u("s7LF"),E=u("iInd"),j=function l(){_classCallCheck(this,l)},I=u("j1ZV");u.d(n,"FonemaPageModuleNgFactory",(function(){return V}));var V=o.lb(e,[],(function(l){return o.wb([o.xb(512,o.j,o.W,[[8,[t.a,O]],[3,o.j],o.v]),o.xb(4608,f.k,f.j,[o.s,[2,f.q]]),o.xb(4608,M.d,M.d,[]),o.xb(4608,a.a,a.a,[o.x,o.g]),o.xb(4608,a.Ab,a.Ab,[a.a,o.j,o.p]),o.xb(4608,a.Db,a.Db,[a.a,o.j,o.p]),o.xb(1073742336,f.b,f.b,[]),o.xb(1073742336,M.c,M.c,[]),o.xb(1073742336,M.a,M.a,[]),o.xb(1073742336,a.yb,a.yb,[]),o.xb(1073742336,E.n,E.n,[[2,E.s],[2,E.m]]),o.xb(1073742336,j,j,[]),o.xb(1073742336,I.a,I.a,[]),o.xb(1073742336,e,e,[]),o.xb(1024,E.k,(function(){return[[{path:"",component:P}]]}),[])])}))}}]);