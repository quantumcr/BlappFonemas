(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{wTYh:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("MKJQ"),a=u("sZkV");class b{constructor(){this.functionBarEvent=new t.m,this.deleteStudentEvent=new t.m}ngOnInit(){}openPanel(l){console.log(l.target.value),this.functionBarEvent.emit(l.target.value)}deleteStudent(){this.deleteStudentEvent.emit()}}var r=t.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{position:absolute;width:345px;height:696px;background:#7a84dd;border-radius:10px;box-shadow:0 4px 4px rgba(0,0,0,.25)}.imagen[_ngcontent-%COMP%]{position:absolute;width:213px;height:213px;left:66px;right:66px;top:120px}.titulo[_ngcontent-%COMP%]{position:absolute;width:303px;height:72px;left:21px;right:21px;top:346px;font-family:Poppins;font-style:normal;font-weight:700;font-size:41px;line-height:61px;text-align:center;color:#fff}.btnComando1[_ngcontent-%COMP%]{position:absolute;width:303px;height:56px;left:21px;right:21px;background:rgba(255,230,190,.94);border-radius:15px;top:443px;font-family:Poppins;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#5f659c}.btnComando2[_ngcontent-%COMP%]{position:absolute;width:303px;height:56px;left:21px;right:21px;background:rgba(255,230,190,.94);border-radius:15px;top:519px;font-family:Poppins;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#5f659c}"]],data:{}});function s(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,22,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,21,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(2,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(3,0,null,0,3,"ion-row",[],null,null,null,i.x,i.k)),t.nb(4,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,1,"ion-img",[["class","imagen"],["src","assets/img/docentes/students-bar/estudiantes.png"]],null,null,null,i.s,i.f)),t.nb(6,49152,null,0,a.A,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.ob(7,0,null,0,4,"ion-row",[],null,null,null,i.x,i.k)),t.nb(8,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(9,0,null,0,2,"ion-label",[["class","titulo"]],null,null,null,i.v,i.i)),t.nb(10,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(11,0,["",""])),(l()(),t.ob(12,0,null,0,10,"ion-row",[],null,null,null,i.x,i.k)),t.nb(13,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(14,0,null,0,8,"ion-col",[],null,null,null,i.p,i.c)),t.nb(15,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(16,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),t.ob(17,0,null,null,2,"ion-segment-button",[["class","btnComando1"],["value","editar"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openPanel(u)&&t),t}),i.y,i.m)),t.nb(18,49152,null,0,a.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Db(19,0,["",""])),(l()(),t.ob(20,0,null,null,2,"ion-segment-button",[["class","btnComando2"],["value","eliminar"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteStudent()&&t),t}),i.y,i.m)),t.nb(21,49152,null,0,a.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Db(22,0,["",""]))],(function(l,n){l(n,6,0,"assets/img/docentes/students-bar/estudiantes.png"),l(n,18,0,"editar"),l(n,21,0,"eliminar")}),(function(l,n){var u=n.component;l(n,11,0,u.titulo),l(n,19,0,u.comando1),l(n,22,0,u.comando2)}))}var c=u("s7LF"),d=u("PWXo"),h=u("2hxB");class p{constructor(){this.renderer=!1}ngOnInit(){}ngOnChanges(){document.getElementById("nombre").setAttribute("value","none"!=this.student.nombre.toString()?this.student.nombre.toString():""),document.getElementById("cedula").setAttribute("value","none"!=this.student.cedula.toString()?this.student.cedula.toString():""),document.getElementById("sexo").setAttribute("value","none"!=this.student.sexo.toString()?this.student.sexo.toString():""),document.getElementById("edad").setAttribute("value",this.student.edad.toString()),document.getElementById("encargado_nombre").setAttribute("value","none"!=this.student.encargadoLegal.nombre.toString()?this.student.encargadoLegal.nombre.toString():""),document.getElementById("encargado_profesion").setAttribute("value","none"!=this.student.encargadoLegal.profesion.toString()?this.student.encargadoLegal.profesion.toString():""),document.getElementById("encargado_telefono").setAttribute("value","none"!=this.student.encargadoLegal.telefono.toString()?this.student.encargadoLegal.telefono.toString():""),document.getElementById("encargado_direccion").setAttribute("value","none"!=this.student.encargadoLegal.direccion.toString()?this.student.encargadoLegal.direccion.toString():""),document.getElementById("email").setAttribute("value","none"!=this.user.email?this.user.email.toString():"")}}var g=t.mb({encapsulation:0,styles:[[".label[_ngcontent-%COMP%]{width:90px;font-family:Poppins;font-style:normal;font-weight:500;font-size:15px;line-height:22px;color:#5f659c}.input[_ngcontent-%COMP%]{width:225px;height:29px;background:#eceefd}.item[_ngcontent-%COMP%]{width:317px}"]],data:{}});function x(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,98,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,97,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(2,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(3,0,null,0,95,"ion-row",[],null,null,null,i.x,i.k)),t.nb(4,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,46,"ion-col",[],null,null,null,i.p,i.c)),t.nb(6,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(7,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(8,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(9,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(10,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Nombre:"])),(l()(),t.ob(12,0,null,0,3,"ion-input",[["class","input"],["id","nombre"],["value",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,15)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,15)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(14,49152,null,0,a.D,[t.h,t.k,t.x],{value:[0,"value"]},null),t.nb(15,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(16,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(17,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(18,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(19,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["C\xe9dula:"])),(l()(),t.ob(21,0,null,0,3,"ion-input",[["class","input"],["id","cedula"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,24)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,24)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(23,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(24,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(25,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(26,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(27,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(28,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["G\xe9nero:"])),(l()(),t.ob(30,0,null,0,3,"ion-input",[["class","input"],["id","sexo"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,33)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,33)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(32,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(33,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(34,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(35,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(36,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(37,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Edad:"])),(l()(),t.ob(39,0,null,0,3,"ion-input",[["class","input"],["id","edad"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,42)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,42)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(41,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(42,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(43,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(44,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(45,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(46,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Email:"])),(l()(),t.ob(48,0,null,0,3,"ion-input",[["class","input"],["id","email"],["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,51)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,51)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(50,49152,null,0,a.D,[t.h,t.k,t.x],{type:[0,"type"]},null),t.nb(51,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(52,0,null,0,46,"ion-col",[],null,null,null,i.p,i.c)),t.nb(53,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(54,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(55,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(56,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(57,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Encargado:"])),(l()(),t.ob(59,0,null,0,3,"ion-input",[["class","input"],["id","encargado_nombre"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,62)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,62)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(61,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(62,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(63,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(64,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(65,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(66,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Profesi\xf3n:"])),(l()(),t.ob(68,0,null,0,3,"ion-input",[["class","input"],["id","encargado_profesion"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,71)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,71)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(70,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(71,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(72,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(73,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(74,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(75,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Tel\xe9fono:"])),(l()(),t.ob(77,0,null,0,3,"ion-input",[["class","input"],["id","encargado_telefono"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,80)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,80)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(79,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(80,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(81,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(82,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(83,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(84,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Direcci\xf3n:"])),(l()(),t.ob(86,0,null,0,3,"ion-input",[["class","input"],["id","encargado_direccion"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,89)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,89)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(88,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(89,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(90,0,null,0,8,"ion-item",[["class","item"],["lines","none"]],null,null,null,i.u,i.h)),t.nb(91,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(92,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(93,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Password:"])),(l()(),t.ob(95,0,null,0,3,"ion-input",[["class","input"],["id","password"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,98)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,98)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(97,49152,null,0,a.D,[t.h,t.k,t.x],{type:[0,"type"]},null),t.nb(98,16384,null,0,a.Gb,[t.k],null,null)],(function(l,n){l(n,8,0,"none"),l(n,14,0,""),l(n,17,0,"none"),l(n,26,0,"none"),l(n,35,0,"none"),l(n,44,0,"none"),l(n,50,0,"email"),l(n,55,0,"none"),l(n,64,0,"none"),l(n,73,0,"none"),l(n,82,0,"none"),l(n,91,0,"none"),l(n,97,0,"password")}),null)}class f{constructor(){}ngOnInit(){}}var m=t.mb({encapsulation:0,styles:[[".input[_ngcontent-%COMP%]{background:#eceefd;width:225px;height:29px}.label[_ngcontent-%COMP%]{font-family:Poppins;font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#5f659c}"]],data:{}});function v(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,10,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(2,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(3,0,null,0,8,"ion-row",[],null,null,null,i.x,i.k)),t.nb(4,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.v,i.i)),t.nb(6,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Nombre la T\xeda"])),(l()(),t.ob(8,0,null,0,3,"ion-input",[["class","input"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,11)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.zb(l,11)._handleInputEvent(u.target)&&e),e}),i.t,i.g)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Gb]),t.nb(10,49152,null,0,a.D,[t.h,t.k,t.x],null,null),t.nb(11,16384,null,0,a.Gb,[t.k],null,null)],null,null)}var k=u("SVse");class E{constructor(){}ngOnInit(){console.log(this.alimetacion)}changeSelected(l){l.seleccionado=1!=l.seleccionado,console.log(this.alimetacion)}}var _=t.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{height:210px;width:250px;overflow-y:scroll}.principal[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.label[_ngcontent-%COMP%]{font-family:Poppins;font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#5f659c}"]],data:{}});function w(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.u,i.h)),t.nb(1,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(2,0,null,0,2,"ion-label",[["class","label"],["color","black"]],null,null,null,i.v,i.i)),t.nb(3,49152,null,0,a.K,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Db(4,0,["",""])),(l()(),t.ob(5,0,null,0,3,"ion-radio",[["color","success"],["slot","start"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,8)._handleBlurEvent(u.target)&&e),"ionSelect"===n&&(e=!1!==t.zb(l,8)._handleIonSelect(u.target)&&e),e}),i.w,i.j)),t.Ab(5120,null,c.b,(function(l){return[l]}),[a.Eb]),t.nb(7,49152,null,0,a.U,[t.h,t.k,t.x],{color:[0,"color"]},null),t.nb(8,16384,null,0,a.Eb,[t.k],null,null)],(function(l,n){l(n,1,0,"none"),l(n,3,0,"black"),l(n,7,0,"success")}),(function(l,n){l(n,4,0,n.context.$implicit.alimento)}))}function S(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,4,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,3,"ion-col",[],null,null,null,i.p,i.c)),t.nb(2,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.db(16777216,null,0,1,null,w)),t.nb(4,278528,null,0,k.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.alimetacion)}),null)}var C=u("JmRu"),B=u("qfBg");class y{constructor(l,n){this.studentService=l,this.userService=n,this.student=new d.a,this.user=new h.a}ngOnInit(){this.studentService.getStudent(this._idStudent).then(l=>{this.student=l,console.log(l),this.userService.getUserByIdStudent(l._id).then(l=>{this.user=l}).catch(l=>{console.log(l)})}).catch(l=>{console.log(l)})}}var I=t.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:705px;height:593px}.titulo[_ngcontent-%COMP%]{margin-left:20px;font-family:Poppins;font-style:normal;font-weight:700;font-size:25px;line-height:37px;text-align:center;color:#5f659c}.info[_ngcontent-%COMP%]{width:705px;height:293px;background:#fff;border-radius:20px;margin-top:56px}.grid[_ngcontent-%COMP%]{width:317px;height:210px;margin-top:20px}.infoFamilia[_ngcontent-%COMP%]{width:337px;height:262px;margin-top:38px;background:#fff;border-radius:20px}.infoAlimentos[_ngcontent-%COMP%]{width:337px;height:262px;margin-top:38px;left:11px;background:#fff;border-radius:20px}"]],data:{}});function D(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,32,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,31,"div",[],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,30,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(3,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,12,"ion-row",[["class","info"]],null,null,null,i.x,i.k)),t.nb(5,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(6,0,null,0,10,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(7,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(8,0,null,0,4,"ion-row",[],null,null,null,i.x,i.k)),t.nb(9,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(10,0,null,0,2,"ion-label",[["class","titulo"]],null,null,null,i.v,i.i)),t.nb(11,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Informaci\xf3n Personal"])),(l()(),t.ob(13,0,null,0,3,"ion-row",[],null,null,null,i.x,i.k)),t.nb(14,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(15,0,null,0,1,"app-personal-info",[],null,null,null,x,g)),t.nb(16,638976,null,0,p,[],{student:[0,"student"],user:[1,"user"]},null),(l()(),t.ob(17,0,null,0,15,"ion-row",[],null,null,null,i.x,i.k)),t.nb(18,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(19,0,null,0,6,"ion-col",[["class","infoFamilia"]],null,null,null,i.p,i.c)),t.nb(20,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(21,0,null,0,2,"ion-label",[["class","titulo"]],null,null,null,i.v,i.i)),t.nb(22,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Familia"])),(l()(),t.ob(24,0,null,0,1,"app-family-info",[],null,null,null,v,m)),t.nb(25,114688,null,0,f,[],null,null),(l()(),t.ob(26,0,null,0,6,"ion-col",[["class","infoAlimentos"]],null,null,null,i.p,i.c)),t.nb(27,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(28,0,null,0,2,"ion-label",[["class","titulo"]],null,null,null,i.v,i.i)),t.nb(29,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,["Alimentos"])),(l()(),t.ob(31,0,null,0,1,"app-food-info",[],null,null,null,S,_)),t.nb(32,114688,null,0,E,[],{alimetacion:[0,"alimetacion"]},null)],(function(l,n){var u=n.component;l(n,16,0,u.student,u.user),l(n,25,0),l(n,32,0,u.student.alimentacion)}),null)}class P{constructor(l,n){this.studentService=l,this.router=n}ngOnInit(){}deleteStudent(){this.studentService.putDisableStudent(this._idStudent).then(l=>{window.open("/docentes","_self")}).catch(l=>{console.log(l)})}}var A=u("iInd"),O=t.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:1151px;height:696px}.bar[_ngcontent-%COMP%]{width:345px;height:696px}.panel[_ngcontent-%COMP%]{width:705px;height:593px}"]],data:{}});function z(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,12,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,11,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(2,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(3,0,null,0,9,"ion-row",[],null,null,null,i.x,i.k)),t.nb(4,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,3,"ion-col",[["class","bar"]],null,null,null,i.p,i.c)),t.nb(6,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(7,0,null,0,1,"app-function-bar",[["comando1","EDITAR INFORMACI\xd3N"],["comando2","ELIMINAR ESTUDIANTE"],["titulo","ESTUDIANTES"]],null,[[null,"deleteStudentEvent"]],(function(l,n,u){var t=!0;return"deleteStudentEvent"===n&&(t=!1!==l.component.deleteStudent()&&t),t}),s,r)),t.nb(8,114688,null,0,b,[],{titulo:[0,"titulo"],comando1:[1,"comando1"],comando2:[2,"comando2"]},{deleteStudentEvent:"deleteStudentEvent"}),(l()(),t.ob(9,0,null,0,3,"ion-col",[["class","panel"]],null,null,null,i.p,i.c)),t.nb(10,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(11,0,null,0,1,"app-info-panel",[],null,null,null,D,I)),t.nb(12,114688,null,0,y,[C.a,B.a],{_idStudent:[0,"_idStudent"]},null)],(function(l,n){var u=n.component;l(n,8,0,"ESTUDIANTES","EDITAR INFORMACI\xd3N","ELIMINAR ESTUDIANTE"),l(n,12,0,u._idStudent)}),null)}class M{constructor(l){this.activatedRoute=l,l.queryParams.subscribe(l=>{this._idStudent=l._id})}ngOnInit(){}}var G=t.mb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:100%;height:100%;background:url(fondo.cd20a4b3c33550c32869.svg)}.component[_ngcontent-%COMP%]{width:1151px;height:696px;margin-top:52px;margin-left:47px;margin-right:82px}"]],data:{}});function q(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,8,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,7,"ion-grid",[],null,null,null,i.q,i.d)),t.nb(2,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(l()(),t.ob(3,0,null,0,5,"ion-row",[["class","component"]],null,null,null,i.x,i.k)),t.nb(4,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,3,"ion-col",[],null,null,null,i.p,i.c)),t.nb(6,49152,null,0,a.q,[t.h,t.k,t.x],null,null),(l()(),t.ob(7,0,null,0,1,"app-student-info",[],null,null,null,z,O)),t.nb(8,114688,null,0,P,[C.a,A.m],{_idStudent:[0,"_idStudent"]},null)],(function(l,n){l(n,8,0,n.component._idStudent)}),null)}function K(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"app-estudiantes",[],null,null,null,q,G)),t.nb(1,114688,null,0,M,[A.a],null,null)],(function(l,n){l(n,1,0)}),null)}var N=t.kb("app-estudiantes",M,K,{},{},[]);class T{}var L=u("j1ZV");u.d(n,"EstudiantesPageModuleNgFactory",(function(){return F}));var F=t.lb(e,[],(function(l){return t.wb([t.xb(512,t.j,t.W,[[8,[o.a,N]],[3,t.j],t.v]),t.xb(4608,k.k,k.j,[t.s,[2,k.q]]),t.xb(4608,c.d,c.d,[]),t.xb(4608,a.a,a.a,[t.x,t.g]),t.xb(4608,a.Ab,a.Ab,[a.a,t.j,t.p]),t.xb(4608,a.Db,a.Db,[a.a,t.j,t.p]),t.xb(1073742336,k.b,k.b,[]),t.xb(1073742336,c.c,c.c,[]),t.xb(1073742336,c.a,c.a,[]),t.xb(1073742336,a.yb,a.yb,[]),t.xb(1073742336,A.n,A.n,[[2,A.s],[2,A.m]]),t.xb(1073742336,T,T,[]),t.xb(1073742336,L.a,L.a,[]),t.xb(1073742336,e,e,[]),t.xb(1024,A.k,(function(){return[[{path:"",component:M}]]}),[])])}))}}]);