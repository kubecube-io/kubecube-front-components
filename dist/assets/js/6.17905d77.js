(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(t,e,n){"use strict";var o=n(1),a=n(34).findIndex,l=n(110),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),o({target:"Array",proto:!0,forced:s},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),l("findIndex")},339:function(t,e,n){t.exports={root:"root_1elvZg6f",table:"table_HLqfbMXI",addBtn:"addBtn_ubqxC0Ii"}},340:function(t,e,n){t.exports={root:"root_3t1OM4xG",removeBtn:"removeBtn_2AY9bZgS",message:"message_36LNt6QI",error:"error_1FKa0ldG"}},341:function(t,e,n){t.exports={root:"root_37x27HEg",static:"static_awSBE_3r",formTd:"formTd_23yhNoxg"}},344:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(181);var o={props:{value:{type:[String,Number,Boolean,Array,Object],require:!0}},model:{event:"change",prop:"value"},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}}},361:function(t,e,n){"use strict";n(53),n(113),n(338),n(54);var o={props:{size:{type:String,default:"normal"},showButton:{type:Boolean,default:!0},disabled:Boolean},methods:{add:function(){this.$emit("add")}}},a=n(367),l=n(10);var s=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root,attrs:{size:t.size}},[n("table",{class:t.$style.table},[n("thead",[t._t("head")],2),t._v(" "),n("tbody",{attrs:{nohead:!t.$slots.head}},[t._t("body")],2)]),t._v(" "),t.showButton?n("u-button",{class:t.$style.addBtn,attrs:{disabled:t.disabled},on:{click:t.add}},[t._v("\n    添加\n  ")]):t._e()],1)}),[],!1,(function(t){this.$style=a.default.locals||a.default}),null,null).exports,r={props:{value:Object,currentMessage:String,disabled:Boolean,hideClose:Boolean},methods:{remove:function(){this.$emit("remove")}}},i=n(368);var u=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{class:t.$style.root,attrs:{topAlign:""}},[t._t("default"),t._v(" "),t.hideClose?t._e():n("td",{class:t.$style.formTd},[n("u-button",{class:t.$style.removeBtn,attrs:{disabled:t.disabled},on:{click:t.remove}}),t._v(" "),t.currentMessage?n("span",{class:t.$style.message,attrs:{color:"error",topAlign:""}},[t._v("\n      "+t._s(t.currentMessage)+"\n    ")]):t._e()],1)],2)}),[],!1,(function(t){this.$style=i.default.locals||i.default}),null,null).exports,c={props:{hideClose:Boolean}},d=n(369);var f=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{class:this.$style.root,attrs:{topAlign:""}},[this._t("default"),this._v(" "),this.hideClose?this._e():e("th",{class:this.$style.formTd})],2)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null).exports,h=0,m={model:{prop:"list",event:"listchange"},props:{list:{type:Array,default:function(){return[]}},dataTemplate:{type:Function,default:function(){return{}}},rowComp:{type:Object,default:function(){return u}},layoutComp:{type:Object,default:function(){return s}},columnComp:{type:[Object||null],default:function(){return f}},initRequired:{type:Boolean,default:!0},disabled:Boolean,prefixKey:{type:String,default:""}},data:function(){return{cache:{},unwatch:{}}},computed:{layout:function(){return this.layoutComp||"div"},listLocal:{get:function(){var t=this;return this.list.map((function(e){return t.watchItem(e)}))},set:function(t){this.$emit("listchange",t.map((function(t){return t.value})))}}},watch:{listLocal:function(t){this.initRequired&&0===t.length&&this.add()}},created:function(){this.initRequired&&0===this.listLocal.length&&this.add()},methods:{watchItem:function(t){for(var e in this.cache){var n=this.cache[e];if(n.value===t)return n}var o=h++;return t={key:o,value:t},this.$set(this.cache,o,t),t},add:function(){var t=this.watchItem(this.dataTemplate());this.listLocal=this.listLocal.concat([t])},remove:function(t){var e=this.listLocal.findIndex((function(e){return e.key===t})),n=this.listLocal.slice(0,e).concat(this.listLocal.slice(e+1));this.initRequired&&0===n.length&&(n=[this.watchItem(this.dataTemplate())]),this.listLocal=n}}},p=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.layout,t._b({tag:"component",attrs:{disabled:t.disabled},on:{add:t.add}},"component",t.$attrs,!1),[t.columnComp?n(t.columnComp,t._b({tag:"component",attrs:{slot:"head",disabled:t.disabled},slot:"head"},"component",t.$attrs,!1),[t._t("column")],2):t._e(),t._v(" "),t._l(t.listLocal,(function(e,o){return n("template",{slot:"body"},[n(t.rowComp,t._b({key:""+t.prefixKey+o,tag:"component",attrs:{index:o,value:e.value,disabled:e.value.disabled||t.disabled},on:{remove:function(n){return t.remove(e.key)}},scopedSlots:t._u([{key:"errormessage",fn:function(){return[t._t(t.errormessage+"-"+o)]},proxy:!0}],null,!0)},"component",t.$attrs,!1),[t._t("default",null,{model:e.value,index:o,remove:function(){t.remove(e.key)}})],2)],1)}))],2)}),[],!1,null,null,null);e.a=p.exports},367:function(t,e,n){"use strict";var o=n(339),a=n.n(o);n.d(e,"default",(function(){return a.a}))},368:function(t,e,n){"use strict";var o=n(340),a=n.n(o);n.d(e,"default",(function(){return a.a}))},369:function(t,e,n){"use strict";var o=n(341),a=n.n(o);n.d(e,"default",(function(){return a.a}))},392:function(t,e,n){"use strict";n.r(e);var o=n(361),a={mixins:[n(344).a],components:{"kube-dynamic-block":o.a},methods:{getDataTemplate:function(){return{a:"",b:"",c:""}}}},l=n(10),s=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kube-dynamic-block",{staticStyle:{width:"100%"},attrs:{"data-template":t.getDataTemplate},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.model;e.index;return[n("td",[n("u-input",{model:{value:o.a,callback:function(e){t.$set(o,"a",e)},expression:"row.a"}})],1),t._v(" "),n("td",[n("u-input",{model:{value:o.b,callback:function(e){t.$set(o,"b",e)},expression:"row.b"}})],1),t._v(" "),n("td",[n("u-input",{model:{value:o.c,callback:function(e){t.$set(o,"c",e)},expression:"row.c"}})],1)]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[n("template",{slot:"column"},[n("th",[t._v("A")]),t._v(" "),n("th",[t._v("B")]),t._v(" "),n("th",[t._v("C")])])],2)}),[],!1,null,null,null);e.default=s.exports}}]);