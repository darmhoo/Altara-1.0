webpackJsonp([22],{"6jbp":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,r=e("qYF3"),i=(s=r)&&s.__esModule?s:{default:s};a.default={data:function(){return{cards:[{name:"DSA",url:"dsa/home",icon:["fa-id-card"]},{name:"DVA",url:"dva/home",icon:["fa-file-signature"]},{name:"HRM",url:"hrm/home",icon:["fa-user"]},{name:"FSL",url:"fsl/home",icon:["fa-box"]},{name:"LOG",url:"log/home",icon:["fa-truck"]}]}},beforeCreate:function(){i.default.initialize(),this.$store.state.api_token||this.$store.state.authRole||this.$store.dispatch("mutateAuth")}}},FuXD:function(t,a,e){var s=e("jp6R");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("4472ea44",s,!0,{})},XJwQ:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12 px-md-3 p-0"},[t._l(t.cards,function(a){return t.$store.getters["verify"+a.name+"Access"]?e("div",{staticClass:"col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"},[e("router-link",{staticClass:"card",attrs:{to:a.url}},[e("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[e("h6",[t._v(t._s(a.name)+" Portal")])]),t._v(" "),e("div",{staticClass:"card-body float-left w-100"},[e("div",{staticClass:"text-center w-100 float-left"},[t._l(a.icon,function(t){return e("i",{staticClass:"fas",class:t})}),t._v(" "),e("p",{staticClass:"pt-md-3 pt-2"},[t._v("For the "+t._s(a.name)+" Agents.")])],2)])])],1):t._e()}),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"},[a("a",{staticClass:"card",attrs:{href:"http://catalog.altaracredit.com/",target:"_blank"}},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[this._v("Altara Catalogue")])]),this._v(" "),a("div",{staticClass:"card-body float-left w-100"},[a("div",{staticClass:"text-center w-100 float-left"},[a("i",{staticClass:"far fa-images"}),this._v(" "),a("p",{staticClass:"pt-md-3 pt-2"},[this._v("Official Altara Online Catalogue")])])])])])}]}},gWaj:function(t,a,e){var s=e("VU/8")(e("6jbp"),e("XJwQ"),!1,function(t){e("FuXD")},null,null);t.exports=s.exports},jp6R:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".product .card{-webkit-transition:all .2s;transition:all .2s}.product .card:hover{-webkit-transform:scale(1.02);transform:scale(1.02)}.product .card i,.product .card svg{font-size:9rem;opacity:.1;margin:1rem auto}@media (max-width:990px){.product i,.product svg{font-size:1.2rem}}@media (max-width:600px){.product i,.product svg{font-size:1rem}}",""])}});