(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{xAZ3:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),s=u("i/iE");class b{constructor(l,n){this.navCtrl=l,this.router=n}ngOnInit(){}goToCategories(l){let n=this.getCategory(l);this.router.navigate(["/categoria"],{queryParams:{category:JSON.stringify(n)}})}getCategory(l){l=l.toUpperCase();for(let n=0;n<s.a.length;n++)if(s.a[n].nombre.toUpperCase()==l)return s.a[n]}}var r=u("iInd"),c=t.nb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:818px;height:624px;background:#fff;border:2px solid #fff;box-sizing:border-box;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px}.grid[_ngcontent-%COMP%]{margin-top:58px;left:20px}.row[_ngcontent-%COMP%]{margin-left:60px;margin-right:53px}.lastRow[_ngcontent-%COMP%]{margin-left:188px;margin-right:182px}.phonemeButton[_ngcontent-%COMP%]{width:176px;height:85px;background:#7a84dd;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:20px;font-family:Poppins;font-style:normal;font-weight:800;font-size:20px;line-height:36px;text-transform:initial;text-align:center;color:#fff}"]],data:{}});function p(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,79,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,78,"ion-grid",[["class","grid"]],null,null,null,i.t,i.f)),t.ob(2,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,20,"ion-row",[["class","row"]],null,null,null,i.A,i.m)),t.ob(4,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(6,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Imagen de m\xed mismo")&&t),t}),i.B,i.n)),t.ob(8,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Imagen de"])),(l()(),t.pb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["mi mismo"])),(l()(),t.pb(12,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(13,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Partes del Cuerpo")&&t),t}),i.B,i.n)),t.ob(15,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Partes del"])),(l()(),t.pb(17,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["cuerpo"])),(l()(),t.pb(19,0,null,0,4,"ion-col",[],null,null,null,i.s,i.e)),t.ob(20,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(21,0,null,0,2,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Familia")&&t),t}),i.B,i.n)),t.ob(22,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Familia"])),(l()(),t.pb(24,0,null,0,16,"ion-row",[["class","row"]],null,null,null,i.A,i.m)),t.ob(25,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,4,"ion-col",[],null,null,null,i.s,i.e)),t.ob(27,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,2,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Alimentos")&&t),t}),i.B,i.n)),t.ob(29,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Alimentos"])),(l()(),t.pb(31,0,null,0,4,"ion-col",[],null,null,null,i.s,i.e)),t.ob(32,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(33,0,null,0,2,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Animales")&&t),t}),i.B,i.n)),t.ob(34,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Animales"])),(l()(),t.pb(36,0,null,0,4,"ion-col",[],null,null,null,i.s,i.e)),t.ob(37,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(38,0,null,0,2,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Juguetes")&&t),t}),i.B,i.n)),t.ob(39,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Juguetes"])),(l()(),t.pb(41,0,null,0,22,"ion-row",[["class","row"]],null,null,null,i.A,i.m)),t.ob(42,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(43,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(44,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(45,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Prendas de Vestir")&&t),t}),i.B,i.n)),t.ob(46,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Prendas de"])),(l()(),t.pb(48,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["vestir"])),(l()(),t.pb(50,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(51,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(52,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Partes de la Casa")&&t),t}),i.B,i.n)),t.ob(53,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Partes de"])),(l()(),t.pb(55,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["la casa"])),(l()(),t.pb(57,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(58,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(59,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Medios de Transporte")&&t),t}),i.B,i.n)),t.ob(60,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Medios"])),(l()(),t.pb(62,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["transporte"])),(l()(),t.pb(64,0,null,0,15,"ion-row",[["class","lastRow"]],null,null,null,i.A,i.m)),t.ob(65,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(66,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(67,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(68,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Servidores de la Comunidad")&&t),t}),i.B,i.n)),t.ob(69,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Servidores de"])),(l()(),t.pb(71,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["la comunidad"])),(l()(),t.pb(73,0,null,0,6,"ion-col",[],null,null,null,i.s,i.e)),t.ob(74,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(75,0,null,0,4,"ion-segment-button",[["class","phonemeButton"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategories("Instrumentos Musicales")&&t),t}),i.B,i.n)),t.ob(76,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Instrumentos"])),(l()(),t.pb(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(-1,0,["musicales"]))],null,null)}var g=u("Mc5n"),h=u("SVse"),d=u("IP0z"),x=u("uWlM");class m{constructor(){this.subcategoria=[],this.q1=[],this.q2=[],this.q3=[],this.imagenes=[]}ngOnInit(){this.imagenes=[],this.getImagenes()}getImagenes(){console.log(this.subcategoryOneData),this.imagenes.push(this.subcategoryOneData.imagenSujeto),this.imagenes.push(this.subcategoryOneData.imagenVerbo),this.imagenes.push(this.subcategoryOneData.imagenPredicado),this.shuffleMethod()}shuffleMethod(){const l=null==this.imagenes?0:this.imagenes.length;l||(this.imagenes=[]);let n=-1;const u=l-1,t=[...this.imagenes];for(;++n<l;){const l=n+Math.floor(Math.random()*(u-n+1)),o=t[l];t[l]=t[n],t[n]=o}this.imagenes=t}ngOnChanges(){this.imagenes=[],this.getImagenes(),console.log(this.imagenes[0],this.imagenes[1],this.imagenes[2])}}var f=t.nb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:818px;height:624px;background:#fff;border:2px solid #fff;box-sizing:border-box;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px}.grid[_ngcontent-%COMP%]{margin-top:57px;left:56px}.sujeto[_ngcontent-%COMP%]{width:230px;height:230px;margin-left:auto;background:url(black.7ae9f5230bd32643e27b.svg)}.verbo[_ngcontent-%COMP%]{width:161px;height:161px;margin-top:34px;margin-left:42px;margin-right:43px;background:url(red.56b901975bfd73dba925.svg)}.predicado[_ngcontent-%COMP%]{width:230px;height:230px;margin-right:auto;background:url(green.55433685b6684c297a57.svg)}.element[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:176px;height:176px;background:url(element.24c106e872635ee85219.svg)}.options[_ngcontent-%COMP%]{margin-top:32px}.palabras[_ngcontent-%COMP%]{font-family:Poppins;font-style:normal;font-weight:500;font-size:35px;line-height:52px;text-align:center;color:#3c3c3c}.semantica[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;text-align:center}.imagen[_ngcontent-%COMP%]{width:176px;height:176px}.example-box[_ngcontent-%COMP%]{width:161px;height:161px;border:1px solid #ccc;color:rgba(0,0,0,.87);cursor:move;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center;background:#fff;border-radius:100px;position:relative;z-index:1;-webkit-transition:box-shadow .2s cubic-bezier(0,0,.2,1);transition:box-shadow .2s cubic-bezier(0,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.example-box[_ngcontent-%COMP%]:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}"]],data:{}});function k(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,74,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,73,"ion-grid",[["class","grid"]],null,null,null,i.t,i.f)),t.ob(2,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,13,"ion-row",[],null,null,null,i.A,i.m)),t.ob(4,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,3,"ion-col",[],null,null,null,i.s,i.e)),t.ob(6,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"div",[["class","sujeto"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(9,0,null,0,3,"ion-col",[],null,null,null,i.s,i.e)),t.ob(10,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(11,0,null,0,1,"div",[["class","verbo"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(13,0,null,0,3,"ion-col",[],null,null,null,i.s,i.e)),t.ob(14,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,1,"div",[["class","predicado"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(17,0,null,0,19,"ion-row",[],null,null,null,i.A,i.m)),t.ob(18,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,5,"ion-col",[],null,null,null,i.s,i.e)),t.ob(20,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(21,0,null,0,3,"div",[["class","semantica"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,2,"ion-label",[["class","palabras"]],null,null,null,i.y,i.k)),t.ob(23,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.Fb(24,0,["",""])),(l()(),t.pb(25,0,null,0,5,"ion-col",[],null,null,null,i.s,i.e)),t.ob(26,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(27,0,null,0,3,"div",[["class","semantica"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,2,"ion-label",[["class","palabras"]],null,null,null,i.y,i.k)),t.ob(29,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.Fb(30,0,["",""])),(l()(),t.pb(31,0,null,0,5,"ion-col",[],null,null,null,i.s,i.e)),t.ob(32,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(33,0,null,0,3,"div",[["class","semantica"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,2,"ion-label",[["class","palabras"]],null,null,null,i.y,i.k)),t.ob(35,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.Fb(36,0,["",""])),(l()(),t.pb(37,0,null,0,37,"ion-row",[["class","options"]],null,null,null,i.A,i.m)),t.ob(38,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(39,0,null,0,11,"ion-col",[],null,null,null,i.s,i.e)),t.ob(40,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(41,0,null,0,9,"div",[["cdkDrop",""],["class","element"]],null,null,null,null,null)),(l()(),t.pb(42,16777216,null,null,8,"ion-avatar",[["cdkDrag",""],["class","imagen cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,i.p,i.b)),t.Cb(6144,null,g.i,null,[g.c]),t.ob(44,49152,null,0,a.e,[t.h,t.k,t.x],null,null),t.ob(45,4866048,null,3,g.c,[t.k,[3,g.b],h.c,t.x,t.L,g.a,[2,d.a],g.f,t.h],null,null),t.Db(603979776,1,{_handles:1}),t.Db(603979776,2,{_previewTemplate:0}),t.Db(603979776,3,{_placeholderTemplate:0}),(l()(),t.pb(49,0,null,0,1,"ion-img",[],null,null,null,i.v,i.h)),t.ob(50,49152,null,0,a.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.pb(51,0,null,0,11,"ion-col",[],null,null,null,i.s,i.e)),t.ob(52,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(53,0,null,0,9,"div",[["cdkDrop",""],["class","element"]],null,null,null,null,null)),(l()(),t.pb(54,16777216,null,null,8,"ion-avatar",[["cdkDrag",""],["class","imagen cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,i.p,i.b)),t.Cb(6144,null,g.i,null,[g.c]),t.ob(56,49152,null,0,a.e,[t.h,t.k,t.x],null,null),t.ob(57,4866048,null,3,g.c,[t.k,[3,g.b],h.c,t.x,t.L,g.a,[2,d.a],g.f,t.h],null,null),t.Db(603979776,4,{_handles:1}),t.Db(603979776,5,{_previewTemplate:0}),t.Db(603979776,6,{_placeholderTemplate:0}),(l()(),t.pb(61,0,null,0,1,"ion-img",[],null,null,null,i.v,i.h)),t.ob(62,49152,null,0,a.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.pb(63,0,null,0,11,"ion-col",[],null,null,null,i.s,i.e)),t.ob(64,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(65,0,null,0,9,"div",[["cdkDrop",""],["class","element"]],null,null,null,null,null)),(l()(),t.pb(66,16777216,null,null,8,"ion-avatar",[["cdkDrag",""],["class","imagen cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,i.p,i.b)),t.Cb(6144,null,g.i,null,[g.c]),t.ob(68,49152,null,0,a.e,[t.h,t.k,t.x],null,null),t.ob(69,4866048,null,3,g.c,[t.k,[3,g.b],h.c,t.x,t.L,g.a,[2,d.a],g.f,t.h],null,null),t.Db(603979776,7,{_handles:1}),t.Db(603979776,8,{_previewTemplate:0}),t.Db(603979776,9,{_placeholderTemplate:0}),(l()(),t.pb(73,0,null,0,1,"ion-img",[],null,null,null,i.v,i.h)),t.ob(74,49152,null,0,a.B,[t.h,t.k,t.x],{src:[0,"src"]},null)],(function(l,n){var u=n.component;l(n,50,0,t.tb(1,"",u.imagenes[0],"")),l(n,62,0,t.tb(1,"",u.imagenes[1],"")),l(n,74,0,t.tb(1,"",u.imagenes[2],""))}),(function(l,n){var u=n.component;l(n,24,0,u.subcategoryOneData.sujeto),l(n,30,0,u.subcategoryOneData.verbo),l(n,36,0,u.subcategoryOneData.predicado),l(n,42,0,t.Bb(n,45).disabled,t.Bb(n,45)._dragRef.isDragging()),l(n,54,0,t.Bb(n,57).disabled,t.Bb(n,57)._dragRef.isDragging()),l(n,66,0,t.Bb(n,69).disabled,t.Bb(n,69)._dragRef.isDragging())}))}class v{constructor(){this.semanticsBarEvent=new t.m}ngOnInit(){}openPanel(l){console.log(l.target.value),this.semanticsBarEvent.emit(l.target.value)}}var C=t.nb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{position:absolute;width:302px;height:623px;background:#52d7c6;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px}.imagen[_ngcontent-%COMP%]{position:absolute;width:213px;height:213px;left:44px;right:45px;top:106px}.titulo[_ngcontent-%COMP%]{position:absolute;width:260px;height:74px;left:22px;right:20px;top:319px;font-family:Poppins;font-style:normal;font-weight:700;font-size:40px;line-height:67px;text-align:center;color:#fff}.titulo2[_ngcontent-%COMP%]{position:absolute;width:260px;height:74px;left:22px;right:20px;top:369px;font-family:Poppins;font-style:normal;font-weight:700;font-size:38px;line-height:67px;text-align:center;color:#fff}.comando1[_ngcontent-%COMP%]{position:absolute;top:406px;background:rgba(255,230,190,.94);border-radius:15px}.comando2[_ngcontent-%COMP%]{position:absolute;top:467px;background:rgba(255,230,190,.94);border-radius:15px}.comando3[_ngcontent-%COMP%]{position:absolute;top:520px;background:rgba(255,230,190,.94);border-radius:15px}.ion-segment-button[_ngcontent-%COMP%]{background:rgba(255,230,190,.94);border-radius:15px;color:#5f659c;top:392px}.btnComando1[_ngcontent-%COMP%]{position:absolute;width:259px;height:48px;left:20px;right:23px;background:#bcfff7;border-radius:15px;top:442px;font-family:Poppins;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#5f659c}.btnComando2[_ngcontent-%COMP%]{position:absolute;width:259px;height:48px;left:20px;right:23px;background:#bcfff7;border-radius:15px;top:503px;font-family:Poppins;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#5f659c}"]],data:{}});function w(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,25,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,24,"ion-grid",[],null,null,null,i.t,i.f)),t.ob(2,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,3,"ion-row",[],null,null,null,i.A,i.m)),t.ob(4,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,1,"ion-img",[["class","imagen"],["src","assets/img/semanticas/semantics-bar/semanticas.png"]],null,null,null,i.v,i.h)),t.ob(6,49152,null,0,a.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.pb(7,0,null,0,7,"ion-row",[],null,null,null,i.A,i.m)),t.ob(8,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,2,"ion-label",[["class","titulo"]],null,null,null,i.y,i.k)),t.ob(10,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.Fb(11,0,["",""])),(l()(),t.pb(12,0,null,0,2,"ion-label",[["class","titulo2"]],null,null,null,i.y,i.k)),t.ob(13,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.Fb(14,0,["",""])),(l()(),t.pb(15,0,null,0,10,"ion-row",[],null,null,null,i.A,i.m)),t.ob(16,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(17,0,null,0,8,"ion-col",[],null,null,null,i.s,i.e)),t.ob(18,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,2,"ion-segment-button",[["class","btnComando1"],["value","categorias"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openPanel(u)&&t),t}),i.B,i.n)),t.ob(21,49152,null,0,a.hb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Fb(22,0,["",""])),(l()(),t.pb(23,0,null,null,2,"ion-segment-button",[["class","btnComando2"],["value","jugar"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openPanel(u)&&t),t}),i.B,i.n)),t.ob(24,49152,null,0,a.hb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Fb(25,0,["",""]))],(function(l,n){l(n,6,0,"assets/img/semanticas/semantics-bar/semanticas.png"),l(n,21,0,"categorias"),l(n,24,0,"jugar")}),(function(l,n){var u=n.component;l(n,11,0,u.titulo),l(n,14,0,u.titulo2),l(n,22,0,u.comando1),l(n,25,0,u.comando2)}))}var O=u("fGyW"),P=u("qnCw");class y{constructor(){this.visibleCategories=!0,this.visibleGame=!1,this.indexData=0}ngOnInit(){}selectPanel(l){this.getSubcategoria(),this.setVisible(l)}setVisible(l){"categorias"===l&&(this.visibleCategories=!0,this.visibleGame=!1),"jugar"===l&&(this.visibleCategories=!1,this.visibleGame=!0)}getRandomInt(l,n){return l=Math.ceil(l),n=Math.floor(n),Math.floor(Math.random()*(n-l))+l}getSubcategoria(){this.subcategory=x.a[this.getRandomInt(0,x.a.length)]}incIndexData(){this.subcategory.data.length-1==this.indexData?this.indexData=0:this.indexData++}decIndexData(){0==this.indexData?this.indexData=this.subcategory.data.length-1:this.indexData--}}var M=t.nb({encapsulation:0,styles:[[".principal[_ngcontent-%COMP%]{width:1142px;height:624px}.panel[_ngcontent-%COMP%]{left:22px;width:818px;height:624px}.bar[_ngcontent-%COMP%]{width:302px;height:623px}.navigation[_ngcontent-%COMP%]{margin-top:26px}"]],data:{}});function _(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-categories-panel",[],null,null,null,p,c)),t.ob(1,114688,null,0,b,[a.Cb,r.m],null,null)],(function(l,n){l(n,1,0)}),null)}function B(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-semantics-game-panel",[],null,null,null,k,f)),t.ob(1,638976,null,0,m,[],{subcategoryOneData:[0,"subcategoryOneData"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.subcategory.data[u.indexData])}),null)}function D(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,20,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,19,"ion-grid",[],null,null,null,i.t,i.f)),t.ob(2,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,11,"ion-row",[],null,null,null,i.A,i.m)),t.ob(4,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,3,"ion-col",[["class","bar"]],null,null,null,i.s,i.e)),t.ob(6,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"app-semantics-bar",[["comando1","CATEGOR\xcdAS"],["comando2","JUGAR"],["titulo","CATEGOR\xcdAS"],["titulo2","SEM\xc1NTICAS"]],null,[[null,"semanticsBarEvent"]],(function(l,n,u){var t=!0;return"semanticsBarEvent"===n&&(t=!1!==l.component.selectPanel(u)&&t),t}),w,C)),t.ob(8,114688,null,0,v,[],{titulo:[0,"titulo"],titulo2:[1,"titulo2"],comando1:[2,"comando1"],comando2:[3,"comando2"]},{semanticsBarEvent:"semanticsBarEvent"}),(l()(),t.pb(9,0,null,0,5,"ion-col",[["class","panel"]],null,null,null,i.s,i.e)),t.ob(10,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,_)),t.ob(12,16384,null,0,h.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,B)),t.ob(14,16384,null,0,h.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(15,0,null,0,5,"ion-row",[["class","navigation"]],null,null,null,i.A,i.m)),t.ob(16,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(17,0,null,0,3,"ion-col",[],null,null,null,i.s,i.e)),t.ob(18,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,1,"app-phoneme-nav",[],null,[[null,"forwardEmit"],[null,"backEmit"]],(function(l,n,u){var t=!0,o=l.component;return"forwardEmit"===n&&(t=!1!==o.incIndexData()&&t),"backEmit"===n&&(t=!1!==o.decIndexData()&&t),t}),O.b,O.a)),t.ob(20,114688,null,0,P.a,[a.Cb],null,{forwardEmit:"forwardEmit",backEmit:"backEmit"})],(function(l,n){var u=n.component;l(n,8,0,"CATEGOR\xcdAS","SEM\xc1NTICAS","CATEGOR\xcdAS","JUGAR"),l(n,12,0,u.visibleCategories),l(n,14,0,u.visibleGame),l(n,20,0)}),null)}class z{ngOnInit(){}}var F=t.nb({encapsulation:0,styles:[["@media screen and (min-width:800px){.principal[_ngcontent-%COMP%]{width:100%;height:100%;background:url(semantics.d9cc8fc2e86371e59ef7.svg) 0 0/100%}}@media screen and (min-width:1280px){.principal[_ngcontent-%COMP%]{width:100%;height:100%;background:url(semantics.d9cc8fc2e86371e59ef7.svg) 0 0/100%}.component[_ngcontent-%COMP%]{width:1142px;height:624px;margin-top:48px;margin-left:70px;margin-right:68px}}"]],data:{}});function A(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,12,"div",[["class","principal"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,7,"ion-grid",[],null,null,null,i.t,i.f)),t.ob(3,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,5,"ion-row",[["class","component"]],null,null,null,i.A,i.m)),t.ob(5,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,3,"ion-col",[],null,null,null,i.s,i.e)),t.ob(7,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,1,"app-semantics",[],null,null,null,D,M)),t.ob(9,114688,null,0,y,[],null,null),(l()(),t.pb(10,0,null,null,2,"div",[["style","position: absolute; left: 1100px; top: 0px;"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"ion-img",[["src","assets/svg/shapes/semanticsCircle.svg"]],null,null,null,i.v,i.h)),t.ob(12,49152,null,0,a.B,[t.h,t.k,t.x],{src:[0,"src"]},null)],(function(l,n){l(n,9,0),l(n,12,0,"assets/svg/shapes/semanticsCircle.svg")}),null)}function I(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-semanticas",[],null,null,null,A,F)),t.ob(1,114688,null,0,z,[],null,null)],(function(l,n){l(n,1,0)}),null)}var T=t.lb("app-semanticas",z,I,{},{},[]),E=u("s7LF"),G=u("hOhj");class S{}var j=u("j1ZV");u.d(n,"SemanticasPageModuleNgFactory",(function(){return R}));var R=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[e.a,T]],[3,t.j],t.v]),t.zb(4608,h.k,h.j,[t.s,[2,h.r]]),t.zb(4608,E.q,E.q,[]),t.zb(4608,a.a,a.a,[t.x,t.g]),t.zb(4608,a.Bb,a.Bb,[a.a,t.j,t.p]),t.zb(4608,a.Fb,a.Fb,[a.a,t.j,t.p]),t.zb(4608,E.b,E.b,[]),t.zb(4608,g.f,g.f,[h.c,t.x,G.a,g.h]),t.zb(1073742336,h.b,h.b,[]),t.zb(1073742336,E.p,E.p,[]),t.zb(1073742336,E.h,E.h,[]),t.zb(1073742336,a.zb,a.zb,[]),t.zb(1073742336,r.n,r.n,[[2,r.s],[2,r.m]]),t.zb(1073742336,S,S,[]),t.zb(1073742336,E.n,E.n,[]),t.zb(1073742336,g.g,g.g,[]),t.zb(1073742336,j.a,j.a,[]),t.zb(1073742336,o,o,[]),t.zb(1024,r.k,(function(){return[[{path:"",component:z}]]}),[])])}))}}]);