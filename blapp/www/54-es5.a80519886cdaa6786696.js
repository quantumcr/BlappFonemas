function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function asyncGeneratorStep(t,e,i,n,o,a,r){try{var s=t[a](r),l=s.value}catch(d){return void i(d)}s.done?e(l):Promise.resolve(l).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function r(t){asyncGeneratorStep(a,n,o,r,s,"next",t)}function s(t){asyncGeneratorStep(a,n,o,r,s,"throw",t)}r(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{uQUw:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_input",(function(){return r}));var n=i("imtE"),o=(i("AfW+"),i("aiEM")),a=i("Dl6n"),r=function(){function t(e){var i=this;_classCallCheck(this,t),Object(n.k)(this,e),this.inputId="ion-input-".concat(s++),this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=function(t){var e=t.target;e&&(i.value=e.value||""),i.ionInput.emit(t)},this.onBlur=function(){i.hasFocus=!1,i.focusChanged(),i.emitStyle(),i.ionBlur.emit()},this.onFocus=function(){i.hasFocus=!0,i.focusChanged(),i.emitStyle(),i.ionFocus.emit()},this.onKeydown=function(t){i.shouldClearOnEdit()&&(i.didBlurAfterEdit&&i.hasValue()&&"Enter"!==t.key&&i.clearTextInput(),i.didBlurAfterEdit=!1)},this.clearTextInput=function(t){i.clearInput&&!i.readonly&&!i.disabled&&t&&(t.preventDefault(),t.stopPropagation()),i.value="",i.nativeInput&&(i.nativeInput.value="")},this.ionInput=Object(n.e)(this,"ionInput",7),this.ionChange=Object(n.e)(this,"ionChange",7),this.ionBlur=Object(n.e)(this,"ionBlur",7),this.ionFocus=Object(n.e)(this,"ionFocus",7),this.ionInputDidLoad=Object(n.e)(this,"ionInputDidLoad",7),this.ionInputDidUnload=Object(n.e)(this,"ionInputDidUnload",7),this.ionStyle=Object(n.e)(this,"ionStyle",7)}var e;return _createClass(t,[{key:"debounceChanged",value:function(){this.ionChange=Object(o.d)(this.ionChange,this.debounce)}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){this.emitStyle(),this.ionChange.emit({value:null==this.value?this.value:this.value.toString()})}},{key:"connectedCallback",value:function(){this.emitStyle(),this.debounceChanged(),this.el.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}},{key:"disconnectedCallback",value:function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}},{key:"setFocus",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.nativeInput&&this.nativeInput.focus();case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"getInputElement",value:function(){return Promise.resolve(this.nativeInput)}},{key:"shouldClearOnEdit",value:function(){var t=this.type,e=this.clearOnEdit;return void 0===e?"password"===t:e}},{key:"getValue",value:function(){return"number"==typeof this.value?this.value.toString():(this.value||"").toString()}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}},{key:"focusChanged",value:function(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}},{key:"hasValue",value:function(){return this.getValue().length>0}},{key:"render",value:function(){var t,e=this,i=Object(n.d)(this),r=this.getValue(),s=this.inputId+"-lbl",l=Object(o.f)(this.el);return l&&(l.id=s),Object(n.i)(n.a,{"aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},Object(a.a)(this.color)),(t={},_defineProperty(t,i,!0),_defineProperty(t,"has-value",this.hasValue()),_defineProperty(t,"has-focus",this.hasFocus),t))},Object(n.i)("input",{class:"native-input",ref:function(t){return e.nativeInput=t},"aria-labelledby":s,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:r,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),this.clearInput&&!this.readonly&&!this.disabled&&Object(n.i)("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput}))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},{key:"style",get:function(){return".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h a.sc-ion-input-md, .has-focus.sc-ion-input-md-h button.sc-ion-input-md, .has-focus.sc-ion-input-md-h input.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-floating.sc-ion-input-md-h, .item-label-floating .sc-ion-input-md-h, .item-label-stacked.sc-ion-input-md-h, .item-label-stacked .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}"}}]),t}(),s=0}}]);