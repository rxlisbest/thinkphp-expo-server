(function(t){function e(e){for(var r,c,u=e[0],i=e[1],l=e[2],p=0,f=[];p<u.length;p++)c=u[p],a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1464:function(t,e,n){"use strict";var r=n("62c5"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"app",components:{}},u=c,i=(n("034f"),n("2877")),l=Object(i["a"])(u,a,o,!1,null,null,null),s=l.exports,p=n("8c4f");r["default"].use(p["a"]);var f=new p["a"]({routes:[{path:"*",redirect:"/set-up"},{path:"/set-up",name:"set-up-index",component:n("cb2f").default},{path:"/electric-automation",name:"electric-automation-index",component:n("bfe0").default},{path:"/wisdom-water",name:"wisdom-water-index",component:n("701a").default}]}),d=n("2f62");r["default"].use(d["a"]);var m={},v={},b={},y={},h=new d["a"].Store({state:m,getter:v,actions:b,mutations:y}),g=h,_=n("5c96"),w=n.n(_);n("0fae");r["default"].use(w.a,{size:"small",zIndex:3e3}),r["default"].config.productionTip=!1,new r["default"]({router:f,store:g,render:function(t){return t(s)}}).$mount("#app")},"62c5":function(t,e,n){},"64a9":function(t,e,n){},"701a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",[n("template",{slot:"body"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.send("pause",0)}}},[t._v("暂停")])],1)]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.send("play",0)}}},[t._v("播放")])],1)]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.send("stop",0)}}},[t._v("停止")])],1)]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.send("volume",0)}}},[t._v("静音")])],1)]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.send("volume",100)}}},[t._v("不静音")])],1)])],1)],1)],2)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("div",[n("el-button",{attrs:{icon:"el-icon-arrow-left",circle:""},on:{click:t.back}})],1)]),n("el-main",[t._t("body")],2)],1)},c=[],u={name:"layout",components:{},data:function(){return{}},props:[],mounted:function(){},methods:{back:function(){this.$router.go(-1)}}},i=u,l=(n("1464"),n("2877")),s=Object(l["a"])(i,o,c,!1,null,"48f66029",null),p=s.exports,f=n("bc3a"),d=n.n(f),m=function(){var t=location.port,e="http://";return e+=80==t?location.hostname:location.host,e}(),v=d.a.create({baseURL:m,timeout:5e3}),b=v;function y(t){return b({url:"/index/index/send",method:"post",data:t})}var h={name:"wisdom-water-index",components:{Layout:p},data:function(){return{no:4}},created:function(){},methods:{send:function(t,e){var n={};n.no=this.no,n.command=t,e>0&&(n.value=e),y(n).then(function(t){})}}},g=h,_=Object(l["a"])(g,r,a,!1,null,"361c327c",null);e["default"]=_.exports},bfe0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"}},[t._v("暂停")])],1)]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"}},[t._v("播放")])],1)]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"}},[t._v("停止")])],1)]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-button",{attrs:{type:"primary"}},[t._v("静音")])],1)])],1)],1)},a=[],o={name:"electric-automation-index",components:{},data:function(){return{}},created:function(){},methods:{}},c=o,u=n("2877"),i=Object(u["a"])(c,r,a,!1,null,"ff60af4c",null);e["default"]=i.exports},cb2f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("h1",[t._v("主菜单")])])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.moduleData,stripe:""}},[n("el-table-column",{attrs:{prop:"date",label:"模块名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:e.row.router}}},[t._v(t._s(e.row.name))])]}}])}),n("el-table-column",{attrs:{prop:"name",label:"设置权限"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",circle:"",icon:"el-icon-link\n"},on:{click:function(n){return t.setUp(e)}}})]}}])})],1)],1)},a=[],o={name:"set-up-index",components:{},data:function(){return{moduleData:[{router:"wisdom-water-index",name:"智慧水务"}]}},created:function(){},methods:{setUp:function(t){var e=this;this.$confirm("设置后将不能返回主菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"error",message:"暂不支持此功能"})}).catch(function(){e.$message({type:"info",message:"已取消操作"})})}}},c=o,u=n("2877"),i=Object(u["a"])(c,r,a,!1,null,"0e068b85",null);e["default"]=i.exports}});
//# sourceMappingURL=app.baffb9c1.js.map