(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{338:function(t,e,a){"use strict";var n=a(1),i=a(34).findIndex,r=a(110),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("findIndex")},350:function(t,e,a){t.exports={tabDelete:"tabDelete_3zm1nTOE",ul:"ul_1QgUGlpk",tab:"tab_3nO4sR95",tabplus:"tabplus_2AyyEvKR",occupation:"occupation_Yg7xUVat",tabwarning:"tabwarning_10Z0MYWa"}},386:function(t,e,a){},423:function(t,e,a){"use strict";a(386)},424:function(t,e,a){"use strict";var n=a(350),i=a.n(n);a.d(e,"default",(function(){return i.a}))},453:function(t,e,a){"use strict";a.r(e);a(53),a(113),a(111),a(112),a(55),a(197),a(35),a(338),a(54);var n=a(16),i=0,r={model:{prop:"list",event:"listchange"},props:{disabled:Boolean,showTabs:{type:Boolean,default:!0},titleKey:String,tabKey:String,list:{type:Array,default:function(){return[]}},dataTemplate:{type:Function,default:function(){return{}}},initRequired:{type:Boolean,default:!0},errorPrefix:{type:String,default:""}},data:function(){return{activing:!1,curTab:i,cache:{},unwatch:{},transitionName:"kubecube-tab-x-transition"}},computed:{layout:function(){return this.layoutComp||"div"},listLocal:{get:function(){var t=this;return this.list.map((function(e){return t.watchItem(e)}))},set:function(t){this.$emit("listchange",t.map((function(t){return t.value})))}},currTarget:function(){return this.cache[this.curTab]}},watch:{curTab:function(){this.$emit("tabChange")}},created:function(){this.initRequired&&0===this.listLocal.length&&this.add()},methods:{getErrorKey:function(t){return"".concat(this.errorPrefix,"tab-").concat(t)},splitError:function(t,e){var a={};return Object.keys(t).forEach((function(i){Object(n.some)(e,(function(t){return i.startsWith(t)}))&&(a[i]=t[i])})),Object(n.flatten)(Object(n.values)(a)).filter((function(t){return t.length>0}))},extractBasicErrors:function(t,e){var a=this.splitError(t,e);return 0===a.length?"":a[0]},watchItem:function(t){var e=this;for(var a in this.cache){var n=this.cache[a];if(n.value===t)return n}var r=i++;return t={key:r,value:t},this.$set(this.cache,r,t),this.unwatch[r]=this.$watch((function(){return t}),(function(t){e.change(r,t)}),{deep:!0}),t},chooseNext:function(){var t=this,e=this.listLocal.findIndex((function(e){return e.key===t.curTab}));this.transitionName="kubecube-tab-x-transition",this.curTab=this.listLocal[(e+1)%this.listLocal.length].key},choose:function(t){this.transitionName=this.curTab<t.key?"kubecube-tab-x-transition":"kubecube-tab-x-reverse-transition",this.curTab=t.key},add:function(){var t=this.watchItem(this.dataTemplate());this.listLocal=this.listLocal.concat([t]),this.curTab=t.key},remove:function(t){var e=this.listLocal.findIndex((function(e){return e.key===t})),a=this.listLocal.slice(0,e).concat(this.listLocal.slice(e+1));this.unwatch[t](),this.$delete(this.cache,t),this.$delete(this.unwatch,t),this.initRequired&&0===a.length&&(a=[this.watchItem(this.dataTemplate())]),this.listLocal=a;var n=Math.min(a.length-1,e);this.curTab=a[n].key},change:function(t,e){var a=this.listLocal.findIndex((function(e){return e.key===t})),n=e,i=this.listLocal.slice();i[a]=n,this.listLocal=i}}},s=(a(423),a(424)),c=a(10);var o={components:{kubeTab:Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.showTabs,expression:"showTabs"}],class:t.$style.ul},[t._l(t.listLocal,(function(e,i){return a("li",{key:e.key,class:t.$style.tab,attrs:{curTab:t.curTab===e.key},on:{click:function(a){return t.choose(e)}}},[t.extractBasicErrors(n,[t.getErrorKey(e.key)])?a("span",{class:t.$style.tabwarning},[t._v("!")]):t._e(),t._v("\n        "+t._s(t.titleKey?e.value[t.titleKey]:" 配置"+(i+1))+"\n        "),t.disabled?a("span",{class:t.$style.occupation}):a("span",{class:t.$style.tabDelete,on:{click:function(a){return a.stopPropagation(),t.remove(e.key)}}}),t._v(" "),t._t(e.value[t.tabKey]+".tab",null,{model:e.value})],2)})),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:!t.disabled,expression:"!disabled"}],class:t.$style.tabplus,on:{click:t.add}})],2),t._v(" "),a("div",{staticClass:"kubecube-tab",attrs:{active:t.activing}},[a("transition-group",{attrs:{name:t.transitionName},on:{"before-enter":function(e){t.activing=!0},"after-enter":function(e){t.activing=!1}}},t._l(t.listLocal,(function(e){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.curTab===e.key,expression:"curTab === t.key"}],key:e.key},[t._t("default",null,{model:e.value,state:t.curTab===e.key,errorPrefix:t.getErrorKey(e.key)}),t._v(" "),t._t(""+e.value[t.tabKey],null,{model:e.value,state:t.curTab===e.key,errorPrefix:t.getErrorKey(e.key)})],2)})),0)],1)]}}],null,!0)})],1)}),[],!1,(function(t){this.$style=s.default.locals||s.default}),null,null).exports},data:function(){return{tabs:[]}},methods:{getDefault:function(){return{a:"",b:"",c:""}}}},u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("kube-tab",{attrs:{"data-template":t.getDefault},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.model;e.errorPrefix;return[a("u-form",{staticStyle:{"margin-top":"20px"},attrs:{"label-size":"small"}},[a("u-form-item",{attrs:{label:"a"}},[a("u-input",{model:{value:n.a,callback:function(e){t.$set(n,"a",e)},expression:"row.a"}})],1),t._v(" "),a("u-form-item",{attrs:{label:"b"}},[a("u-input",{model:{value:n.b,callback:function(e){t.$set(n,"b",e)},expression:"row.b"}})],1),t._v(" "),a("u-form-item",{attrs:{label:"c"}},[a("u-input",{model:{value:n.c,callback:function(e){t.$set(n,"c",e)},expression:"row.c"}})],1)],1)]}}]),model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}}),t._v(" "),a("demo-visualize-data",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}})],1)}),[],!1,null,null,null);e.default=u.exports}}]);