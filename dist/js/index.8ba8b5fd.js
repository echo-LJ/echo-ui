(function(e){function n(n){for(var r,o,s=n[0],l=n[1],c=n[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==i[l]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},i={index:0},a=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c31f")},"3a93":function(e,n,t){},"42b1":function(e,n,t){"use strict";var r=t("f381"),i=t.n(r);i.a},"54b3":function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},a71e:function(e,n,t){"use strict";var r=t("3a93"),i=t.n(r);i.a},b3e8:function(e,n,t){"use strict";var r=t("d0d2"),i=t.n(r);i.a},b99b:function(e,n,t){},c31f:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:t("54b3")}}),r("echo-button",[e._v("按钮")]),r("echo-icon",{attrs:{name:"spinner2"}})],1)},a=[],o={name:"app"},s=o,l=(t("42b1"),t("2877")),c=Object(l["a"])(s,i,a,!1,null,null,null),u=c.exports,d=(t("a4d3"),t("4de4"),t("4160"),t("d81d"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("ade3")),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"v-button",class:e.btnClasses,attrs:{disabled:e.disabled}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.realLoading,expression:"realLoading"}],staticClass:"v-button-loading"},[t("i",{staticClass:"v-button-loading-icon echo-icon-spinner2"})]),e._t("default")],2)},f=[],h=(t("e01a"),t("d28b"),t("99af"),t("a9e3"),t("d3b7"),t("3ca3"),t("ddb0"),{name:"EchoButton",components:{},props:{disabled:{required:!1,type:Boolean,default:!1},icon:{required:!1,type:Boolean,default:!1},loading:{required:!1,type:Boolean,default:!1},miniLoadingInterval:{required:!1,type:Number,default:0},size:{required:!1,type:String,default:"default"},shape:{required:!1,type:String,default:"default"},type:{required:!1,type:String,default:"default"}},data:function(){return{attrs:[{map:"sizeMap",prop:"size",defaultClass:"default"},{map:"typeMap",prop:"type",defaultClass:""},{map:"shapeMap",prop:"shape",defaultClass:""}],iconClassName:"icon",innerLoading:!1,innerLoadingTimer:null,loadingClassName:"loading",loadingUnwatcher:null,sizeMap:{large:"large",default:"default",small:"small",mini:"mini"},shapeMap:{default:"",circle:"circle"},typeMap:{default:"",ghost:"ghost",text:"text",primary:"primary",info:"info",success:"success",error:"error",warning:"warning",light:"light"}}},computed:{realLoading:function(){return this.miniLoadingInterval?this.loading||this.innerLoading:this.loading},propsClasses:function(){var e=[],n=!0,t=!1,r=void 0;try{for(var i,a=this.attrs[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var o=i.value,s=this[o.map][this[o.prop]]||o.defaultClass;s&&e.push(s)}}catch(l){t=!0,r=l}finally{try{n||null==a.return||a.return()}finally{if(t)throw r}}return this.icon?e.concat([this.iconClassName]):e},btnClasses:function(){return this.realLoading?this.propsClasses.concat([this.loadingClassName]):this.propsClasses}},watch:{miniLoadingInterval:function(){this.initLoadingWathcer()}},created:function(){this.initLoadingWathcer()},mounted:function(){},destroyed:function(){this.removeLoadingWatcher(),this.clearInnerLoadingTimer()},methods:{setLoadingWatcher:function(){this.loadingUnwatcher||(this.loadingUnwatcher=this.$watch("loading",this.onLoadingChange))},removeLoadingWatcher:function(){this.loadingUnwatcher&&(this.loadingUnwatcher(),this.loadingUnwatcher=null)},initLoadingWathcer:function(){this.miniLoadingInterval?this.setLoadingWatcher():this.removeLoadingWatcher()},onLoadingChange:function(e){!0===e&&(this.innerLoading=!0,this.setInnerLoadingTimer())},clearInnerLoadingTimer:function(){this.innerLoadingTimer&&(clearTimeout(this.innerLoadingTimer),this.innerLoadingTimer=null)},setInnerLoadingTimer:function(){var e=this;this.clearInnerLoadingTimer(),this.miniLoadingInterval&&(this.innerLoadingTimer=setTimeout((function(){e.innerLoading=!1}),this.miniLoadingInterval))}}}),g=h,m=(t("a71e"),Object(l["a"])(g,p,f,!1,null,null,null)),b=m.exports;b.install=function(e){e.component(b.name,b)};var v=b,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i",{class:"echo-icon-"+e.name})},w=[],L={name:"EchoIcon",props:{name:String}},O=L,j=(t("fb2d"),Object(l["a"])(O,y,w,!1,null,null,null)),C=j.exports;C.install=function(e){e.component(C.name,C)};var _=C,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"v-button-group",class:{vertical:e.vertical,horizontal:!e.vertical}},[e._t("default")],2)},P=[],T={name:"EchoButtonGroup",props:{vertical:{required:!1,type:Boolean,default:!1}},computed:{}},I=T,S=(t("b3e8"),Object(l["a"])(I,x,P,!1,null,null,null)),M=S.exports;M.install=function(e){e.component(M.name,M)};var E=M;function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){Object(d["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=[v,_,E],N=function e(n){e.installed||(e.installed=!0,B.map((function(e){return n.component(e.name,e)})))};"undefined"!==typeof window&&window.Vue&&N(window.Vue);var U=W({install:N},B);r["a"].use(U),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)}}).$mount("#app")},d0d2:function(e,n,t){},f381:function(e,n,t){},fb2d:function(e,n,t){"use strict";var r=t("b99b"),i=t.n(r);i.a}});
//# sourceMappingURL=index.8ba8b5fd.js.map